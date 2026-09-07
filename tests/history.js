#!/usr/bin/env node
/* Senior High History regression (no dependencies):
   node tests/history.js
   Checks the actual registry, source coverage, every default worksheet,
   student/teacher assessments, deterministic seeds and daily/weekly plans.
   Browser controls, printing and Word bytes are checked by history.py. */
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");
const app = read("app.js");
const html = read("index.html");
const context = {
  console,
  PACK_COVER: (opts, cover) => [
    { k: "p", t: cover.title }, { k: "p", t: cover.line }
  ]
};
context.window = context;
vm.createContext(context);
function load(file) {
  vm.runInContext(read(file), context, { filename: file });
}
function section(start, end) {
  const a = app.indexOf(start), b = app.indexOf(end, a);
  assert(a >= 0 && b > a, "app source section exists: " + start);
  vm.runInContext(app.slice(a, b), context);
}
load("data-hi.js");
load("gen-ss.js");
load("lesson.js");
section("var SUBJECTS =", "/* ---------------- education bands");
section("/* ---------------- Study Notes & Explanations", "/* ---------------- session mode");

const subject = context.SUBJECTS.hi;
assert(subject, "History is registered in the regular curriculum");
assert.equal(subject.label, "History");
assert(!subject.wa, "History must not be hidden behind the WASSCE track");
assert.equal(subject.curriculum(), context.HI_CURRICULUM);
assert.equal(subject.engine(), context.GEN_SS);
assert.equal(subject.coverArt, "ss", "Reuse the bundled world-history cover");
assert(read("icons.svg.html").includes('id="i-' + subject.icon + '"'));
for (const file of ["data-hi.js", "gen-ss.js", "lesson.js", "app.js"]) {
  assert(html.includes(read(file).trim()), file + " is included in the rebuilt offline deliverable");
}
assert(read("build.sh").includes("data-hi.js"), "future builds retain History");

const units = subject.curriculum();
const snapshot = JSON.stringify(units);
const periods = ["I", "II", "III", "IV", "V", "VI"];
const expectedPages = [
  [2,3], [4,5], [6,7], [8,9,10,11], [12], [13],
  [14], [15,16], [17,18], [19,20], [21,22], [23,24],
  [25,26], [27,28], [29], [30,31], [32], [33,34]
];
assert.equal(units.length, 18);
assert.equal(new Set(units.map(u => u.grade + "/" + u.period)).size, 18);

units.forEach((unit, i) => {
  const label = "Grade " + unit.grade + " Period " + unit.period;
  assert.equal(unit.grade, 10 + Math.floor(i / 6), label);
  assert.equal(unit.period, periods[i % 6], label);
  assert.equal(unit.sem, i % 6 < 3 ? "One" : "Two", label);
  assert.equal(unit.source.file, "uploads/History 10-12.pdf");
  assert.deepEqual(Array.from(unit.source.pages), expectedPages[i], label + " source mapping");
  assert(fs.existsSync(path.join(root, unit.source.file)));
  assert(unit.objectives.length >= 4 && unit.outcomes.length, label + " objectives");
  assert(unit.study.length >= 8, label + " substantive study blocks");
  assert(unit.study.some(b => b.k === "p" && b.t.includes("**")), label + " key terms in notes");
  assert(unit.terms.length >= 5 && unit.facts.length >= 5 && unit.tf.length >= 5,
    label + " has enough items for full 40-mark period tests");
  assert.equal(new Set(unit.terms.map(v => v.t)).size, unit.terms.length, label + " unique terms");
  for (const term of unit.terms) {
    assert(term.t && term.d && term.x, label + " complete vocabulary");
    assert(term.x.toLowerCase().includes(term.t.toLowerCase()), label + " cloze-ready examples");
  }
  for (const fact of unit.facts.concat(unit.apply, unit.casestudy.questions)) {
    assert(fact.q && fact.a, label + " answer-bearing questions");
  }
  for (const item of unit.tf) {
    assert(["True", "False"].includes(item.a) && item.s && item.why, label + " explained TF key");
  }
  assert(unit.tf.some(v => v.a === "False") && unit.tf.some(v => v.a === "True"));
  assert(unit.mapwork.items.length >= 5 && unit.sort.groups.length >= 2);
  assert(unit.project.steps.length && unit.project.criteria.length);
  assert(unit.activities.length && unit.materials.length && unit.assessment.length);
  for (const id of subject.defaults) {
    const sheet = subject.engine().SHEETS[id];
    assert(sheet, "registered worksheet " + id);
    const result = sheet.fn(unit, 8, () => 0.37);
    assert(result && result.blocks.length, label + " produces " + id);
    if (id !== "terms") assert(result.key.length, label + " has " + id + " marking guidance");
    assert(!JSON.stringify(result).includes("undefined"), label + " complete worksheet output");
  }
});

function options(grade, keys, seed) {
  return {
    grade, keys, seed, perEx: 8, tests: true, exam: true,
    curriculum: units, sheets: subject.defaults,
    subjectId: "hi", subjectName: "HISTORY", subjectLine: "History", bandName: "Senior High",
    teacher: keys, lpMin: 45, lpDays: 5, lpAdjMode: "standard"
  };
}
for (const grade of [10, 11, 12]) {
  assert.equal(subject.file(grade), "History_Grade" + grade + "_Workbook.docx");
  for (const keys of [false, true]) {
    for (const seed of [1, 42, 9999]) {
      const opts = options(grade, keys, seed);
      const pack = subject.engine().buildPack(opts);
      const text = JSON.stringify(pack.blocks);
      assert.equal(pack.topics.length, 6);
      assert.equal(pack.blocks.filter(b => b.k === "h2" && b.t.startsWith("PERIOD TEST")).length, 6);
      assert.equal(pack.blocks.filter(b => b.k === "h2" && b.t.startsWith("SEMESTER")).length, 2);
      assert.equal(text.includes("ANSWER KEYS — TEACHER'S COPY"), keys);
      assert(text.includes("HISTORY — GRADE " + grade));
      assert(!text.includes("SOCIAL STUDIES") && !text.includes("Social Studies"));
      assert.equal(JSON.stringify(subject.engine().buildPack(opts).blocks), text, "deterministic seed");
    }
  }
  for (const unit of units.filter(u => u.grade === grade)) {
    const opts = { ...options(grade, true, 42), topics: [unit.period] };
    assert.equal(subject.engine().buildPack(opts).topics.length, 1, "individual period selection");
    for (const lpPlanType of ["daily", "weekly"]) {
      for (const lpWeeks of [3, 4]) {
        const plan = context.LESSON_PLAN.build({ ...opts, lpPlanType, lpWeeks });
        const text = JSON.stringify(plan.blocks);
        assert.equal(plan.topics.length, 1);
        assert(text.includes(unit.title) && text.includes("Subject: History"));
        assert(text.includes("Weekly Plan Adjustment") && text.includes("Assignment"));
        assert(!text.includes("Examination-style practice"), "History-specific teaching methods");
        assert(!text.includes("Outline map of Liberia"), "maps should fit this unit's region");
        if (lpPlanType === "weekly") assert(text.includes("Week " + lpWeeks + " of " + lpWeeks));
        else {
          const minutes = plan.blocks.filter(b => ["h2", "h3"].includes(b.k) && /\(\d+ min\)/.test(b.t))
            .map(b => +b.t.match(/\((\d+) min\)/)[1]);
          assert.equal(minutes.length, 4);
          assert.equal(minutes.reduce((a, b) => a + b, 0), 45);
        }
      }
    }
  }
}
assert.equal(JSON.stringify(units), snapshot, "generation must not mutate the curriculum");

// WASSCE History remains a separate, unchanged Grade 12 examination curriculum.
load("data-wa.js");
load("data-wa-his.js");
const wassce = context.SUBJECTS.whis;
assert.equal(wassce.wa, "his");
assert.equal(wassce.curriculum().length, 13);
assert(wassce.curriculum().every(unit => unit.grade === 12));
assert.notEqual(wassce.curriculum(), units);
console.log("OK: Senior High History — 18 units, 11 default worksheets, student/teacher packs, 72 lesson-plan variants and separate WASSCE coverage.");
