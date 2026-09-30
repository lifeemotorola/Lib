#!/usr/bin/env node
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const files = [
  "data-rm.js", "data-rm-more.js", "data-rm79.js", "data-rm79-more.js",
  "data-rm1012.js", "data-rm1012-more.js", "data-rm1012-depth.js"
];
const context = vm.createContext({});
files.forEach((file) => vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file }));
const units = vm.runInContext("RM_CURRICULUM", context);
assert.equal(units.length, 72, "RME should include six units in every grade, 1–12");
for (let grade = 1; grade <= 12; grade += 1) {
  const gradeUnits = units.filter((unit) => unit.grade === grade);
  assert.equal(gradeUnits.length, 6, `Grade ${grade} should have six periods`);
  assert.deepEqual(Array.from(new Set(gradeUnits.map((unit) => unit.period))).sort(), ["I", "II", "III", "IV", "V", "VI"]);
  gradeUnits.forEach((unit) => {
    assert.ok(unit.study && unit.study.length, `Grade ${grade}, period ${unit.period} needs study notes`);
    assert.ok(unit.terms && unit.terms.length, `Grade ${grade}, period ${unit.period} needs key terms`);
    assert.ok(unit.facts && unit.facts.length, `Grade ${grade}, period ${unit.period} needs recall questions`);
    assert.ok(unit.worked && unit.worked.length, `Grade ${grade}, period ${unit.period} needs worked moral reasoning`);
  });
}
const senior = units.filter((unit) => unit.grade >= 10);
assert.equal(senior.length, 18);
senior.forEach((unit) => {
  assert.ok(unit.worked.length >= 3, `Senior unit ${unit.grade}/${unit.period} should include extended worked reasoning`);
  assert.ok(unit.study.some((block) => block.k === "h3" && /Apply|Compare|Source|Decision|Plan|Response|Check|Method|Audit|Support|Evaluate|Dialogue|Action|Review|Care|Purpose|Discernment|Safety|Peace|Leadership|Evidence|Family|Work|Grief|Stewardship|Resolve|Conflict/i.test(block.t)),
    `Senior unit ${unit.grade}/${unit.period} should include its added depth section`);
});
console.log("RME curriculum coverage and senior-depth checks passed (Grades 1–12; 72 units).");
