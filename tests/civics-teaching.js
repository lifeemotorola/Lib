#!/usr/bin/env node
/* Dependency-free curriculum and teaching-workspace regressions. */
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");
const ctx = {
  console, document: { querySelector: () => ({}), querySelectorAll: () => [] },
  addEventListener() {}, PACK_COVER: (opts, d) => [{ k: "p", t: d.title }]
};
ctx.window = ctx;
vm.createContext(ctx);
const load = file => vm.runInContext(read(file), ctx, { filename: file });
["data-ci.js", "data-wa.js", "data-wa-ma.js", "gen-ss.js", "gen-wa.js", "lesson.js", "teaching.js"].forEach(load);
const app = read("app.js");
function section(start, end) {
  const a = app.indexOf(start), b = app.indexOf(end, a);
  assert(a >= 0 && b > a);
  vm.runInContext(app.slice(a, b), ctx);
}
section("var SUBJECTS =", "/* ---------------- education bands");
section("/* ---------------- Study Notes & Explanations", "/* ---------------- session mode");
const subject = ctx.SUBJECTS.ci;
assert.equal(subject.label, "Civics");
assert.equal(subject.engine(), ctx.GEN_SS);
assert(!subject.wa);
assert.equal(subject.coverArt, "ss");
const units = subject.curriculum();
assert.equal(units.length, 36);
assert.equal(new Set(units.map(u => u.title)).size, 36);
assert.equal(new Set(units.map(u => `${u.grade}/${u.period}`)).size, 36);
const original = JSON.stringify(units);
for (const unit of units) {
  assert(unit.grade >= 7 && unit.grade <= 12);
  assert.equal(unit.source.type, "original");
  assert(unit.source.note.includes("not an official"));
  assert.equal(unit.terms.length, 5);
  for (const term of unit.terms) assert(term.t && term.d && term.x.includes(term.t));
  assert.equal(new Set(unit.terms.map(t => t.t)).size, 5);
  assert(unit.study.length >= 10 && unit.objectives.length >= 4);
  assert(unit.tf.some(t => t.a === "True") && unit.tf.some(t => t.a === "False"));
  for (const t of unit.tf) assert(t.why);
  for (const id of subject.defaults) {
    const sheet = subject.engine().SHEETS[id].fn(unit, 8, () => 0.37);
    assert(sheet && sheet.blocks.length, `${unit.grade}/${unit.period}: ${id}`);
    assert(!JSON.stringify(sheet).includes("undefined"));
    if (id !== "terms") assert(sheet.key.length);
  }
}
function options(grade) {
  return { grade, seed: 42, perEx: 8, sheets: subject.defaults, tests: true, exam: true,
    keys: true, teacher: true, curriculum: units, subjectId: "ci", subjectName: "CIVICS",
    subjectLine: "Civics", bandName: grade < 10 ? "Junior High" : "Senior High",
    lpWeeks: 4, lpDays: 5, lpMin: 40, lpPlanType: "daily", lpAdjMode: "standard" };
}
for (let grade = 7; grade <= 12; grade++) {
  const o = options(grade);
  const pack = subject.engine().buildPack(o);
  assert.equal(pack.topics.length, 6);
  assert.equal(pack.blocks.filter(b => b.k === "h2" && b.t.startsWith("PERIOD TEST")).length, 6);
  assert.equal(pack.blocks.filter(b => b.k === "h2" && b.t.startsWith("SEMESTER")).length, 2);
  assert.equal(JSON.stringify(pack), JSON.stringify(subject.engine().buildPack(o)), "seed determinism");
  for (const type of ["daily", "weekly"]) {
    for (const weeks of [3, 4]) {
      const plan = ctx.LESSON_PLAN.build({ ...o, lpPlanType: type, lpWeeks: weeks });
      assert.equal(plan.topics.length, 6);
      assert(plan.blocks.length && JSON.stringify(plan).toUpperCase().includes("CIVICS"));
      assert(!JSON.stringify(plan).includes("undefined"));
    }
  }
}
assert.equal(JSON.stringify(units), original, "generators do not mutate content");
// A captured full teacher pack is safely recompiled for either session.
let o = options(7);
ctx.TEACHING.init({ options: () => o, subject: () => subject, validateSettings() {}, hasSubject: id => id === "ci" });
ctx.TEACHING.begin(subject.engine(), "test");
const pack = subject.engine().buildPack(o);
const teacher = ctx.TEACHING.accept(pack, "test");
assert(teacher.some(b => b.per === "keys"));
assert(pack.blocks.some(b => b._worksheetKey), "worksheet keys are linked to source questions");
const beforeKeys = blocks => blocks.slice(0, blocks.findIndex(b => b.per === "keys"));
const questions = beforeKeys(teacher).filter(b => b.k === "num");
o = { ...o, teacher: false, keys: false };
const student = ctx.TEACHING.compile();
assert(!student.some(b => b.per === "keys"));
assert(!JSON.stringify(student).includes("ANSWER KEYS"));
assert.deepEqual(JSON.parse(JSON.stringify(student.filter(b => b.k === "num"))), JSON.parse(JSON.stringify(questions)));
// Assessment pools preserve actual MCQ option indices (including zero) and outlines.
const pool = ctx.TEACHING.poolFor(ctx.WA_ma.units);
const sourceMCQ = ctx.WA_ma.units[0].mcq.find(q => q.a === 0);
const converted = pool.find(q => q.question.startsWith(sourceMCQ.q + "\n"));
assert(converted && converted.type === "Multiple choice");
assert(converted.answer.startsWith("A. " + sourceMCQ.o[0]));
assert(pool.some(q => q.type === "Essay" && q.answer.includes("\n")));
assert.equal(new Set(pool.map(q => q.question)).size, pool.length);
const a = { title: "Assessment", duration: 60, instructions: "Answer all.", questions: [
  { type: "Short answer", question: "Explain.", answer: "TEACHER ONLY", rubric: "Two explained ideas.", marks: 4 },
  { type: "Essay", question: "Discuss.", answer: "MODEL RESPONSE", rubric: "Content 3, reasons 2.", marks: 5 }
] };
const ab = ctx.TEACHING.assessmentBlocks(a, true);
assert(JSON.stringify(ab).includes("Total: 9 marks"));
assert(JSON.stringify(ab).includes("TEACHER ONLY"));
assert(!JSON.stringify(ctx.TEACHING.assessmentBlocks(a, false)).includes("TEACHER ONLY"));
for (const file of ["data-ci.js", "teaching.js", "cover-text.js", "app.js"]) {
  assert(read("index.html").includes(read(file).trim()), `${file}: offline deliverable is rebuilt`);
  assert(read("build.sh").includes(file));
}
console.log("OK: 36 Civics units, worksheets/tests/exams, 24 lesson-plan variants, deterministic seeds, linked worksheet keys, student filtering and assessment pools/totals.");
