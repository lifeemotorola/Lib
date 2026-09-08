#!/usr/bin/env node
/* Node check for the Kindergarten (ECD) lesson-plan units and the ECD plan
   wording. Zero-dependency: run with  node tests/kg-lesson.js

   Executes the real data-kg.js units through the real lesson.js builders and
   checks that KG-I / KG-II daily and weekly plans speak Early Childhood
   language (songs, centers, small groups, observation) and never ask
   4 to 6-year-olds for exercise books, chalkboards or written drills —
   while every other subject keeps its exact existing wording. It also
   checks that data-kg.js is wired into build.sh and the built index.html.
*/
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "data-kg.js"), "utf8"), sandbox,
  { filename: "data-kg.js" });
vm.runInContext(fs.readFileSync(path.join(root, "lesson.js"), "utf8"), sandbox,
  { filename: "lesson.js" });
/* one graded unit, to prove the KG branches never leak into other subjects */
const maSrc = fs.readFileSync(path.join(root, "data-ma.js"), "utf8") +
  "\nwindow.__MA = MA_CURRICULUM;\n";
vm.runInContext(maSrc, sandbox, { filename: "data-ma.js" });

const LP = sandbox.window.LESSON_PLAN;
const units = sandbox.KG_CURRICULUM;
const maUnits = sandbox.window.__MA;

let fails = 0;
function ok(cond, msg) {
  if (cond) {
    console.log("  ok  " + msg);
  } else {
    fails++;
    console.log("  FAIL " + msg);
  }
}

function baseOpts(extra) {
  return Object.assign({
    curriculum: units, grade: "kg1", topics: ["I"],
    kg: true, levelName: "KG-I", subjectId: "kg",
    subjectName: "KINDERGARTEN",
    subjectLine: "Kindergarten - Staying Healthy and Safe",
    lpWeeks: 2, lpMin: 40, lpDays: 5, lpAdjMode: "standard",
    teacherName: "Test Teacher", seed: 7
  }, extra);
}
function textOf(blocks) {
  return blocks.map((b) => {
    return (b.t || "") + " " + (b.items || []).join(" | ") + " " +
      (b.rows || []).map((r) => r.map((c) => c.t || "").join(" ")).join(" | ");
  }).join("\n");
}
function hasTitle(blocks, s) {
  return blocks.some((b) => (b.t || "").indexOf(s) >= 0);
}

/* ------------------------------------------------------------------ */
console.log("\n-- KG_CURRICULUM shape --");
ok(Array.isArray(units) && units.length === 4,
  "four KG units (KG-I and KG-II, Periods I-II)");
ok(units.filter((u) => u.grade === "kg1").length === 2 &&
   units.filter((u) => u.grade === "kg2").length === 2,
  "two units per level, graded kg1/kg2");
ok(units.every((u) => u.kgPlan === true), "every unit is flagged kgPlan");
ok(units.every((u) => (u.objectives || []).length === 6),
  "every unit carries 6 objectives");
ok(units.every((u) => (u.terms || []).length === 12),
  "every unit carries 12 key terms");
ok(units.every((u) => (u.facts || []).length === 6),
  "every unit carries 6 oral fact questions");
ok(units.every((u) => (u.study || []).filter((b) => b.k === "h3").length === 2),
  "every unit carries one study focus per week (2 h3 blocks)");
ok(units.every((u) => (u.aids || []).length >= 4 && (u.home || []).length >= 3 &&
  (u.activities || []).length >= 3 && (u.assessment || []).length >= 3),
  "every unit names aids, home activities, planner activities and checkpoints");
ok(units.every((u) => !u.mcq && !u.tf && !u.worked && !u.drills),
  "no written-test banks: evaluation stays oral plus observation");

/* ------------------------------------------------------------------ */
console.log("\n-- KG-I daily plan (Period I) --");
const daily = LP.build(baseOpts({ lpPlanType: "daily" }));
const dt = textOf(daily.blocks);
ok(dt.indexOf("KG-I") >= 0, "the grade label reads KG-I");
ok(dt.indexOf("Grade KG-I") < 0, "never the doubled 'Grade KG-I'");
ok(dt.indexOf("Welcome song and attendance") >= 0, "ECD morning opening");
ok(dt.indexOf("word cards") >= 0, "key words on word cards, not the board");
ok(dt.indexOf("7 handwashing steps") >= 0, "evaluation asks the oral fact question");
ok(dt.indexOf("handwashing steps together") >= 0, "a home activity done with parents");
ok(hasTitle(daily.blocks, "Assignment"), "the Assignment heading is kept");
ok(dt.indexOf("exercise book") < 0, "no exercise books anywhere");
ok(dt.indexOf("chalkboard") < 0, "no chalkboards anywhere");
ok(dt.indexOf("textbook") < 0, "no textbooks anywhere");
ok(dt.indexOf("Teacher:") >= 0 && dt.indexOf("Date:") >= 0, "Teacher/Date fields kept");
(function checkStages() {
  const m = dt.match(/\((\d+) min\)/g) || [];
  const sum = m.reduce((a, x) => a + (+x.match(/\d+/)[0]), 0);
  ok(m.length === 4 && sum === 40, "4 timed stages add up to 40 minutes");
})();
["TEACHER’S LESSON PLAN", "Instructional Objectives", "Teacher Aids",
 "Teaching Method", "Presentation & Procedures (Classroom Activities)",
 "Initial Activities / Introduction", "Developmental Activities",
 "Summary Conclusion", "Evaluation", "Assignment", "Duration:",
 "Topic:", "Grade:", "Subject:"].forEach((s) => {
  ok(hasTitle(daily.blocks, s) || dt.indexOf(s) >= 0, "form section kept: " + s);
});

/* ------------------------------------------------------------------ */
console.log("\n-- KG weekly plan (Period I, 2 weeks) --");
const weekly = LP.build(baseOpts({ lpPlanType: "weekly" }));
const wt = textOf(weekly.blocks);
ok(wt.indexOf("Weekly Plan Adjustment") >= 0, "adjustment table kept");
ok(wt.indexOf("Morning Meeting") >= 0, "procedures follow the ECD daily routine");
ok(wt.indexOf("Small Groups") >= 0, "teacher-led small groups present");
ok(wt.indexOf("Clean Hands, Healthy Teeth and Wellness") >= 0, "week-1 study focus");
ok(wt.indexOf("Exercise, Rest and Safe Mouths") >= 0, "week-2 study focus");
ok(wt.indexOf("Celebration & Observation Review") >= 0, "celebration culmination");
ok(wt.indexOf("exercise book") < 0, "no exercise books anywhere");
ok(wt.indexOf("chalkboard") < 0, "no chalkboards anywhere");

/* ------------------------------------------------------------------ */
console.log("\n-- KG-II daily plan (Period II) and long/double lessons --");
const kg2 = LP.build(baseOpts({ grade: "kg2", topics: ["II"], levelName: "KG-II",
  lpPlanType: "daily" }));
const k2t = textOf(kg2.blocks);
ok(k2t.indexOf("KG-II") >= 0, "the grade label reads KG-II");
ok(k2t.indexOf("Community") >= 0 || k2t.indexOf("community") >= 0,
  "community-theme content");
ok(k2t.indexOf("exercise book") < 0, "no exercise books anywhere");
const long = LP.build(baseOpts({ lpPlanType: "daily", lpMin: 120 }));
ok(textOf(long.blocks).indexOf("Sharing and praise") >= 0,
  "a 120-minute lesson shares and praises instead of marking books");
const w4 = LP.build(baseOpts({ lpPlanType: "weekly", lpWeeks: 4 }));
ok(textOf(w4.blocks).indexOf("Consolidation, Celebration and Observation Check") >= 0,
  "weeks past the last study focus consolidate and celebrate");
const rem = LP.build(baseOpts({ lpPlanType: "weekly", lpWeeks: 4, lpAdjMode: "remedial" }));
ok(textOf(rem.blocks).indexOf("observation sheet") >= 0,
  "remedial pacing observes and notes each child");
const acc = LP.build(baseOpts({ lpPlanType: "weekly", lpAdjMode: "accelerated" }));
ok(textOf(acc.blocks).indexOf("Young Leaders From Day One") >= 0,
  "accelerated pacing grows young leaders");
const note = LP.build(baseOpts({ lpPlanType: "weekly", lpAdjNote: "Friday circle re-teach" }));
ok(textOf(note.blocks).indexOf("Friday circle re-teach") >= 0,
  "the teacher's own adjustment note is printed");

/* ------------------------------------------------------------------ */
console.log("\n-- other subjects are untouched --");
const ma = LP.build({ curriculum: maUnits, grade: 1, topics: ["I"],
  subjectId: "ma", subjectName: "MATHEMATICS", subjectLine: "Mathematics",
  lpWeeks: 4, lpMin: 40, lpDays: 5, lpAdjMode: "standard",
  teacherName: "T", seed: 7, lpPlanType: "daily" });
const mt = textOf(ma.blocks);
ok(mt.indexOf("Greeting and attendance") >= 0, "graded greeting kept");
ok(mt.indexOf("Welcome song") < 0, "no ECD greeting leaks in");
ok(mt.indexOf("Grade 1") >= 0, "graded label kept");

/* ------------------------------------------------------------------ */
console.log("\n-- wiring and build --");
const build = fs.readFileSync(path.join(root, "build.sh"), "utf8");
ok(build.indexOf("data-kg.js") > 0, "build.sh concatenates data-kg.js");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
ok(/    kg: \{\n      label: "Kindergarten"/.test(app),
  "app.js registers the Kindergarten subject");
const built = path.join(root, "index.html");
if (fs.existsSync(built)) {
  const idx = fs.readFileSync(built, "utf8");
  ok(idx.indexOf("KG_CURRICULUM") > 0, "the built page carries the KG units");
  ok(idx.indexOf('id="i-sub-kg"') > 0, "the built page carries the KG tab icon");
} else {
  console.log("  -- index.html not built yet; run bash build.sh to check the deliverable --");
}

console.log(fails ? `\nFAILED (${fails})` :
  "\nOK: the Kindergarten lesson plans check out.");
process.exit(fails ? 1 : 0);
