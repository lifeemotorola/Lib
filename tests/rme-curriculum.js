#!/usr/bin/env node
/* Dependency-free RME regression: coverage, full-detail data, rendering inputs,
   real worksheets/keys and the offline build. Run: node tests/rme-curriculum.js */
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const files = [
  "data-rm.js", "data-rm-more.js", "data-rm15-depth.js", "data-rm79.js", "data-rm79-more.js",
  "data-rm69-depth.js", "data-rm1012.js", "data-rm1012-more.js", "data-rm1012-depth.js"
];
const context = vm.createContext({ console });
vm.runInContext("var window = this;", context);
const load = (file) => vm.runInContext(read(file), context, { filename: file });
files.forEach(load);
const units = vm.runInContext("RM_CURRICULUM", context);
const before = new Map(units.map((unit) => [unit.grade + "/" + unit.period, JSON.stringify(unit)]));
load("data-rm612-full.js");
const extras = vm.runInContext("RM_FULL_612", context);
const periods = ["I", "II", "III", "IV", "V", "VI"];

assert.equal(units.length, 72, "RME should include six units in every grade, 1–12");
for (let grade = 1; grade <= 12; grade += 1) {
  const gradeUnits = units.filter((unit) => unit.grade === grade);
  assert.equal(gradeUnits.length, 6, `Grade ${grade} should have six periods`);
  assert.deepEqual(Array.from(gradeUnits, (unit) => unit.period), periods, `Grade ${grade} period order`);
  gradeUnits.forEach((unit) => {
    ["study", "terms", "facts", "worked"].forEach((key) => {
      assert.ok(unit[key] && unit[key].length, `Grade ${grade}/${unit.period} needs ${key}`);
    });
    if (grade <= 5) {
      assert.equal(JSON.stringify(unit), before.get(grade + "/" + unit.period), "Grades 1–5 must be unchanged");
      assert.ok(unit.worked.length >= 3, "Elementary extended examples must remain");
    }
  });
}
assert.equal(vm.runInContext("RM_DEPTH_15.length", context), 30);
assert.equal(vm.runInContext("RM_DEPTH_69.length", context), 24);
assert.equal(vm.runInContext("RM_DEPTH_1012.length", context), 18);
assert.equal(extras.length, 42, "Full-detail supplement must cover all 42 Grade 6–12 units");
assert.equal(new Set(extras.map((extra) => extra.grade + "/" + extra.period)).size, 42, "No duplicate supplements");

function strings(block) {
  return [block.t || "", ...(block.items || []), ...(block.head || []),
    ...(block.rows || []).flat()].join(" ");
}
function nonempty(value, label) {
  assert.equal(typeof value, "string", label);
  assert.ok(value.trim().length, label);
}
const allowed = new Set(["h3", "p", "table", "bul", "num", "rule"]);
for (const extra of extras) {
  const label = `${extra.grade}/${extra.period}`;
  assert.ok(extra.grade >= 6 && extra.grade <= 12 && periods.includes(extra.period), label);
  const unit = units.find((u) => u.grade === extra.grade && u.period === extra.period);
  assert.ok(unit && unit.rmeFullDetails, `Supplement did not attach to ${label}`);
  const old = JSON.parse(before.get(label));
  ["objectives", "terms", "facts", "tf", "apply", "worked", "activities"].forEach((key) => {
    const counts = { objectives: 2, terms: 3, facts: 4, tf: 2, apply: 2, worked: 2, activities: 2 };
    assert.equal(extra[key].length, counts[key], `${label} added ${key}`);
    assert.equal(unit[key].length, (old[key] || []).length + extra[key].length, `${label} merged ${key}`);
  });
  assert.ok(extra.study.filter((b) => b.k === "p").length >= 4, `${label} needs detailed explanations and an example`);
  assert.ok(extra.study.filter((b) => b.k === "h3").length >= 3, `${label} needs distinct teaching sections`);
  assert.ok(extra.study.some((b) => b.k === "table"), `${label} needs a comparison table`);
  assert.ok(extra.study.some((b) => b.k === "num"), `${label} needs a step-by-step process`);
  const words = extra.study.map(strings).join(" ").split(/\s+/).filter(Boolean);
  assert.ok(words.length >= 350, `${label} has only ${words.length} words of detailed teaching`);
  extra.study.forEach((block) => {
    assert.ok(allowed.has(block.k), `${label}: unsupported study block ${block.k}`);
    if (["h3", "p"].includes(block.k)) nonempty(block.t, `${label} ${block.k}`);
    if (["num", "bul"].includes(block.k)) {
      assert.ok(block.items.length > 0, `${label} empty list`);
      block.items.forEach((item) => nonempty(item, `${label} list item`));
    }
    if (block.k === "table") {
      assert.ok(block.head.length >= 3 && block.rows.length >= 3, `${label} incomplete table`);
      block.head.forEach((cell) => nonempty(cell, `${label} table heading`));
      block.rows.forEach((row) => {
        assert.equal(row.length, block.head.length, `${label} ragged table`);
        row.forEach((cell) => {
          nonempty(cell, `${label} table cell`);
          assert.ok(!/\*\*|<[^>]+>/.test(cell), `${label} tables need plain text`);
        });
      });
    }
    assert.ok(unit.study.includes(block), `${label} lost an authored study block`);
  });
  // Preserve original notes in order; append the new sections before Assignment.
  let cursor = 0;
  old.study.forEach((block) => {
    while (cursor < unit.study.length && JSON.stringify(unit.study[cursor]) !== JSON.stringify(block)) cursor += 1;
    assert.ok(cursor < unit.study.length, `${label} replaced or reordered an original study block`);
    cursor += 1;
  });
  const assignment = unit.study.findIndex((b) => b.k === "h3" && /^Assignment/.test(b.t));
  const review = unit.study.findIndex((b) => b.k === "h3" && b.t === "Check Your Understanding — Extended Review");
  assert.ok(review >= 0 && review < assignment, `${label} review must precede Assignment`);
  assert.equal(unit.study[review + 1].items.length, 6, `${label} review prompts`);
  assert.deepEqual(Array.from(unit.study[review + 1].items), Array.from(extra.facts.concat(extra.apply), (item) => item.q));
  assert.equal(unit.study.filter((b) => b.k === "h3" && b.t === "Guided Classroom Enquiry").length, 1);
  extra.terms.forEach((term) => {
    ["t", "d", "x"].forEach((key) => nonempty(term[key], `${label} term ${key}`));
    assert.ok(term.x.toLowerCase().includes(term.t.toLowerCase()), `${label} term needs a usable cloze example`);
    assert.equal(unit.terms.filter((t) => t.t.toLowerCase() === term.t.toLowerCase()).length, 1, `${label} duplicated term ${term.t}`);
  });
  [...extra.facts, ...extra.apply, ...extra.worked].forEach((item) => {
    nonempty(item.q, `${label} question`);
    nonempty(item.a, `${label} answer`);
  });
  extra.tf.forEach((item) => {
    nonempty(item.s, `${label} statement`);
    nonempty(item.why, `${label} explanation`);
    assert.ok(["true", "false"].includes(item.a), `${label} true/false value`);
  });
  extra.worked.forEach((item) => {
    assert.ok(item.steps.length >= 4, `${label} worked case needs reasoning steps`);
    item.steps.forEach((step) => nonempty(step, `${label} worked step`));
  });
}
// Re-loading the additive script must not duplicate notes or exercise pools.
const once = JSON.stringify(units);
load("data-rm612-full.js");
assert.equal(JSON.stringify(units), once, "Full-detail merge should be idempotent");

// Exercise the real notes builder and worksheet engine, not hand-written stubs.
const app = read("app.js");
const start = app.indexOf("/* ---------------- Study Notes & Explanations");
const end = app.indexOf("/* ---------------- session mode", start);
assert.ok(start >= 0 && end > start, "Cannot locate UNIT_NOTES source");
vm.runInContext(app.slice(start, end), context);
context.PACK_COVER = () => [];
load("gen-rm.js");
const generator = context.GEN_RM;
const keyTitle = "ANSWER KEYS — TEACHER'S COPY";
for (const extra of extras) {
  const unit = units.find((u) => u.grade === extra.grade && u.period === extra.period);
  const label = `${extra.grade}/${extra.period}`;
  const opts = {
    grade: extra.grade, topics: [extra.period], seed: 612, perEx: 5,
    sheets: ["terms", "match", "cloze", "tf", "short", "mcq", "sort", "compare", "casestudy", "apply", "worked"],
    tests: true, exam: true, keys: false
  };
  const student = generator.buildPack(opts);
  assert.equal(student.topics.length, 1, `${label} pack selected wrong unit`);
  extra.study.forEach((block) => assert.ok(student.blocks.includes(block), `${label} pack lost study content`));
  assert.ok(!student.blocks.some((b) => b.per === "keys" || b.t === keyTitle), `${label} student key leakage`);
  assert.ok(student.blocks.some((b) => /^PERIOD TEST/.test(b.t || "")), `${label} period test missing`);
  assert.ok(student.blocks.some((b) => /EXAMINATION/.test(b.t || "")), `${label} exam missing`);
  const teacher = generator.buildPack({ ...opts, keys: true });
  assert.ok(teacher.blocks.some((b) => b.t === keyTitle), `${label} teacher keys missing`);
  assert.equal(JSON.stringify(generator.buildPack(opts).blocks), JSON.stringify(student.blocks), `${label} seeded generation changed`);
  const intro = student.blocks.map(strings).join(" ");
  assert.ok(intro.includes("fictional cases") && intro.includes("not required to adopt a belief"), `${label} safeguards missing`);
  assert.ok(intro.includes(extra.grade >= 10 ? "not an official Senior High RME syllabus" : "original teaching supplements"), `${label} provenance missing`);
  // Asking for the whole pool confirms every new item has its matching key.
  ["short", "apply", "worked", "tf"].forEach((sheet) => {
    const result = generator.SHEETS[sheet].fn(unit, 1000, () => 0.4);
    const pool = sheet === "short" ? extra.facts : extra[sheet];
    pool.forEach((item) => {
      assert.ok(result.blocks.map(strings).join(" ").includes(item.q || item.s), `${label} ${sheet} question missing`);
      assert.ok(result.key.some((key) => key.includes(sheet === "tf" ? item.why : item.a)), `${label} ${sheet} answer mismatch`);
      if (sheet === "worked") assert.ok(result.key.some((key) => key.includes(item.steps.join(" → "))), `${label} worked steps missing`);
    });
  });
  const glossary = generator.SHEETS.terms.fn(unit).blocks.find((b) => b.k === "table");
  extra.terms.forEach((term) => assert.ok(glossary.rows.some((row) => row[0] === term.t && row[1] === term.d && row[2] === term.x)));
}
vm.runInContext("NOTES_ON = false;", context);
const withoutNotes = generator.buildPack({ grade: 12, topics: ["VI"], seed: 1, sheets: [], keys: false });
assert.ok(!withoutNotes.blocks.some((b) => /^Detailed Study/.test(b.t || "")), "Study-notes switch must still work");
vm.runInContext("NOTES_ON = true;", context);

// Corrections must be consistent across old teaching and newly added details.
const bible = units.find((u) => u.grade === 10 && u.period === "II");
assert.ok(bible.facts.find((f) => f.q === "How many books are in the Holy Bible, and how are they divided?").a.includes("Protestant"));
assert.ok(!units.find((u) => u.grade === 8 && u.period === "III").study.map(strings).join(" ").includes("destroys health"));
assert.ok(units.find((u) => u.grade === 7 && u.period === "V").study.map(strings).join(" ").includes("AIDS is a later stage"));

const build = read("build.sh");
const index = read("index.html");
assert.ok(build.includes("data-rm1012-depth.js data-rm612-full.js"), "Supplement must load after all RME base data");
assert.ok(index.includes(read("data-rm612-full.js")), "Built offline app is missing current full-detail data");
assert.ok(index.indexOf("var RM_FULL_612") < index.indexOf("/* Religious & Moral Education exercise generation engine."), "Data must load before generator");
assert.ok(!read("data-rm612-full.js").includes("</script>"), "Inline script must be safe to build");
console.log("RME passed: 72 units; all 42 Grade 6–12 supplements; unchanged Grades 1–5; real notes, worksheets, keys and offline build.");
