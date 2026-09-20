#!/usr/bin/env node
/* Node check for the Computer Science units (Grades 1-12) and the
   computing-plan wording. Zero-dependency: run with  node tests/cs-lesson.js

   Executes the real data-cs.js (Grades 1-6), data-cs79.js (Grades 7-9) and
   data-cs1012.js (Grades 10-12) units through the real lesson.js builders and
   checks that every computing plan speaks unplugged / paper-first
   computing-lesson language (computing circle, pair-debug, computing fair)
   and always carries the device/online-safety note — while Health Science,
   General Science and Kindergarten keep their exact existing wording. It also
   checks that the three data files are wired into build.sh, app.js, the
   verbatim-notes check and the built index.html, and that GEN_SC packs print
   Computing Classroom Rules.
*/
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const sandbox = {
  window: {},
  console,
  PACK_COVER: function (opts, d) { return [{ k: "p", t: d.title }]; },
  UNIT_NOTES: function () { return []; }
};
sandbox.window = sandbox;
vm.createContext(sandbox);
["data-cs.js", "data-cs79.js", "data-cs1012.js"].forEach((f) => {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), sandbox, { filename: f });
});
vm.runInContext(fs.readFileSync(path.join(root, "lesson.js"), "utf8"), sandbox,
  { filename: "lesson.js" });
vm.runInContext(fs.readFileSync(path.join(root, "gen-sc.js"), "utf8"), sandbox,
  { filename: "gen-sc.js" });
const scSrc = fs.readFileSync(path.join(root, "data-sc.js"), "utf8") +
  "\nwindow.__SC = SC_CURRICULUM;\n";
vm.runInContext(scSrc, sandbox, { filename: "data-sc.js" });
const hsSrc = fs.readFileSync(path.join(root, "data-hs.js"), "utf8") +
  "\nwindow.__HS = HS_CURRICULUM;\n";
vm.runInContext(hsSrc, sandbox, { filename: "data-hs.js" });
const kgSrc = fs.readFileSync(path.join(root, "data-kg.js"), "utf8") +
  "\nwindow.__KG = KG_CURRICULUM;\n";
vm.runInContext(kgSrc, sandbox, { filename: "data-kg.js" });

const LP = sandbox.window.LESSON_PLAN;
const GEN = sandbox.window.GEN_SC;
const units = sandbox.CS_CURRICULUM;
const scUnits = sandbox.window.__SC;
const hsUnits = sandbox.window.__HS;
const kgUnits = sandbox.window.__KG;

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
    curriculum: units, grade: 1, topics: ["I"],
    levelName: "Grade 1", subjectId: "cs",
    subjectName: "COMPUTER SCIENCE",
    subjectLine: "Computer Science - Elementary",
    lpWeeks: 4, lpMin: 40, lpDays: 5, lpAdjMode: "standard",
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
console.log("\n-- CS_CURRICULUM shape --");
const PERIODS = ["I", "II", "III", "IV", "V", "VI"];
const GRADES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
ok(Array.isArray(units) && units.length === 72,
  "seventy-two computing units: Periods I-VI in every grade from 1 to 12");
ok(units.filter((u) => u.grade >= 1 && u.grade <= 6).length === 36,
  "thirty-six Elementary units (data-cs.js)");
ok(units.filter((u) => u.grade >= 7 && u.grade <= 9).length === 18,
  "eighteen Junior High units (data-cs79.js)");
ok(units.filter((u) => u.grade >= 10 && u.grade <= 12).length === 18,
  "eighteen Senior High units (data-cs1012.js)");
GRADES.forEach((g) => {
  const gUnits = units.filter((u) => u.grade === g);
  ok(gUnits.length === 6, "grade " + g + " carries six computing units, one per period");
  PERIODS.forEach((p) => {
    const one = units.filter((u) => u.grade === g && u.period === p);
    ok(one.length === 1,
      "grade " + g + " period " + p + " carries exactly one unit (" +
      (one[0] ? one[0].title : "none") + ")");
  });
  ok(gUnits.filter((u) => u.sem === "One").map((u) => u.period).join(",") === "I,II,III",
    "grade " + g + " Periods I-III are Semester One");
  ok(gUnits.filter((u) => u.sem === "Two").map((u) => u.period).join(",") === "IV,V,VI",
    "grade " + g + " Periods IV-VI are Semester Two");
});
ok(units.every((u) => PERIODS.indexOf(u.period) >= 0), "every unit sits in a real period");
ok(units.every((u) => u.csPlan === true), "every unit is flagged csPlan");
ok(units.every((u) => u.source && u.source.type === "original"),
  "every unit is marked original, not an official transcription");
ok(units.every((u) => (u.subtitle || "").indexOf("Original") >= 0),
  "every subtitle names the original-resource status");
ok(units.filter((u) => u.grade <= 6).every((u) => /elementary/i.test(u.subtitle)) &&
   units.filter((u) => u.grade >= 7 && u.grade <= 9).every((u) => /junior high/i.test(u.subtitle)) &&
   units.filter((u) => u.grade >= 10).every((u) => /senior high/i.test(u.subtitle)),
  "every subtitle names its own band (elementary, junior high or senior high)");
ok(units.every((u) => (u.objectives || []).length >= 5), "every unit carries 5+ objectives");
ok(units.every((u) => (u.terms || []).length >= 10), "every unit carries 10+ key terms");
ok(units.every((u) => (u.facts || []).length >= 6), "every unit carries 6+ oral/written questions");
ok(units.every((u) => (u.tf || []).length >= 5), "every unit carries 5+ true/false statements");
ok(units.every((u) => (u.apply || []).length >= 4), "every unit carries 4+ real-life applications");
ok(units.every((u) => (u.activities || []).length >= 5 && (u.materials || []).length >= 5),
  "every unit names activities and materials");
ok(units.every((u) => (u.aids || []).length >= 4 && (u.home || []).length >= 3 &&
  (u.assessment || []).length >= 4),
  "every unit names aids, home practice and assessment strategies");
ok(units.every((u) => (u.classify || u.diagram) && u.experiment),
  "every unit carries a sorting task or a diagram, and an investigation");
ok(units.every((u) => u.experiment && typeof u.experiment === "object" && !Array.isArray(u.experiment)),
  "the investigation is an object (GEN_SC write-up), not a list of sums");
ok(units.every((u) => typeof u.safeguard === "string" && u.safeguard.length > 120),
  "every unit carries a device and online-safety note for the teacher");
ok(units.every((u) => (u.study || []).filter((b) => b.k === "h3").length >= 12),
  "every unit carries Physics-like course-text depth (12+ study headings)");
ok(units.every((u) => (u.study || []).some((b) => b.k === "table")),
  "every unit's study notes include at least one table");
ok(units.every((u) => (u.worked || []).length >= 8),
  "every unit carries 8+ worked tracing / counting / binary examples");
ok(units.every((u) => !u.drills && !u.drills2),
  "no maths drill banks: computing worked examples are algorithm traces, not sums");
ok(units.every((u) => !/guide pp?\./i.test(u.subtitle || "")),
  "no invented national-guide page citations");
ok(units.every((u) => /head teacher|trusted adult/i.test(u.safeguard)),
  "every safety note tells the teacher where a disclosure goes");
ok(new Set(units.map((u) => u.title)).size === 72, "every unit title is unique across Grades 1-12");
const blob = JSON.stringify(units);
ok(blob.indexOf("</script>") < 0, "no closing script tag in the curriculum payload");
["A computer is a machine that follows instructions",
 "A bug is a mistake",
 "A network is a set of computers",
 "Binary uses only two digits, 0 and 1",
 "Mobile money"].forEach((f) => {
  ok(blob.indexOf(f) >= 0, "spot fact present: " + f);
});
/* the upper-grade units carry their own subject matter, not a re-run of Grades 1-6 */
[["Algorithms, Flowcharts and Trace Tables", 7],
 ["Spreadsheets \u2014 Cells, Formulas and Functions", 8],
 ["Programming \u2014 Selection and Repetition", 9],
 ["Number Systems \u2014 Binary, Octal and Hexadecimal", 10],
 ["Logic Gates and Boolean Algebra", 10],
 ["Relational Databases and SQL", 11],
 ["Algorithm Efficiency \u2014 Searching, Sorting and Big-O", 12]].forEach(([title, g]) => {
  const u = units.filter((x) => x.title === title)[0];
  ok(u && u.grade === g, "grade " + g + " teaches \u201c" + title + "\u201d");
});
const upper = units.filter((u) => u.grade >= 7);
ok(upper.every((u) => (u.worked || []).every((w) => w.q && w.a && Array.isArray(w.steps) && w.steps.length)),
  "every upper-grade worked example carries a question, steps and an answer");
ok(upper.every((u) => (u.diagram && u.diagram.parts && u.diagram.parts.length >= 4) &&
   (u.classify && u.classify.groups && u.classify.groups.length === 2)),
  "every upper-grade unit carries both a labelled diagram and a two-group sorting task");
ok(upper.every((u) => (u.study || []).filter((b) => b.k === "table").length >= 4),
  "every upper-grade unit's course text carries 4+ tables");
const upperBlob = JSON.stringify(upper);
/* the renderer bolds **text** spans that contain no other asterisk; any ** left
   after removing those spans would print literally (e.g. a Python ** power) */
const strayBold = [];
(function walk(v, at) {
  if (typeof v === "string") {
    if (v.replace(/\*\*[^*]+\*\*/g, "").indexOf("**") >= 0) strayBold.push(at);
  } else if (Array.isArray(v)) {
    v.forEach((x, i) => walk(x, at + "[" + i + "]"));
  } else if (v && typeof v === "object") {
    Object.keys(v).forEach((k) => walk(v[k], at + "." + k));
  }
})(upper, "units");
ok(!strayBold.length,
  "every ** in the upper-grade text is a renderable bold span" +
  (strayBold.length ? " (stray: " + strayBold.slice(0, 3).join(", ") + ")" : ""));
ok(upperBlob.indexOf("undefined") < 0 && upperBlob.indexOf("NaN") < 0,
  "the upper-grade payload has no undefined or NaN holes");
ok(units.every((u) => (u.terms || []).every((tm) =>
  tm.t && tm.d && tm.x && tm.x.toLowerCase().indexOf(tm.t.toLowerCase()) >= 0)),
  "every cloze sentence contains its own term");

/* ------------------------------------------------------------------ */
console.log("\n-- Grade 1 daily plan (Period I: Computers Around Us) --");
const daily = LP.build(baseOpts({ topics: ["I"], lpPlanType: "daily" }));
const dt = textOf(daily.blocks);
ok(dt.indexOf("Computer Science - Elementary") >= 0, "the subject line is Computer Science");
ok(dt.indexOf("Grade 1") >= 0, "the grade label reads Grade 1");
ok(dt.indexOf("Computing circle and attendance") >= 0, "the computing lesson opens in the circle");
ok(dt.indexOf("we try, we debug, we do not laugh at a mistake") >= 0,
  "the two rules of a computing lesson are read out");
ok(dt.indexOf("Computers Around Us") >= 0, "the topic is the unit title");
ok(/Unplugged demonstration with cards|Pair programming|Debugging a broken set of steps|Group algorithm and flowchart work/.test(dt),
  "computing methods are used for the computing subject");
ok(dt.indexOf("Drill and repetition") < 0 && dt.indexOf("Modelling worked examples on the board") < 0,
  "no maths or language drill methods on a computing plan");
ok(dt.indexOf("the algorithm acted out and then written") >= 0,
  "practice is an acted algorithm, not only an answer");
ok(dt.indexOf("Practice in pairs") >= 0, "pupils pair-program the algorithm");
ok(dt.indexOf("Human computers in a market line") >= 0, "the class investigation is on the plan");
ok(dt.indexOf("computing rule") >= 0, "the summary says the class computing rule");
ok(dt.indexOf("Home practice:") >= 0, "the assignment is practised at home");
ok(dt.indexOf("Device & Online-Safety Note") >= 0, "the device-safety note is printed");
ok(dt.indexOf("head teacher") >= 0, "the note says where a disclosure goes");
ok(dt.indexOf("Health circle") < 0 && dt.indexOf("healthy habit") < 0,
  "no health-strand wording on a computing plan");
ok(hasTitle(daily.blocks, "Assignment"), "the Assignment heading is kept");
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
ok(dt.indexOf("Welcome song") < 0 && dt.indexOf("learning centers") < 0 &&
   dt.indexOf("Morning Meeting") < 0,
  "no kindergarten wording leaks into the elementary computing plan");

/* ------------------------------------------------------------------ */
console.log("\n-- Grade 6 weekly plan (Period II, 4 weeks) --");
const weekly = LP.build(baseOpts({ grade: 6, topics: ["II"], levelName: "Grade 6",
  lpPlanType: "weekly" }));
const wt = textOf(weekly.blocks);
ok(wt.indexOf("Weekly Plan Adjustment") >= 0, "adjustment table kept");
ok(wt.indexOf("Week 1 of 4:") >= 0, "week-1 study focus");
ok(wt.indexOf("Consolidation, Remedial Review & Unit Period Assessment") < 0,
  "a computing week is never labelled with the generic maths drill consolidation line");
ok(wt.indexOf("Computing Fair & Debug Check") >= 0, "the last week is a computing fair and debug check");
ok(wt.indexOf("End-of-Unit Computing Fair & Debug Review") >= 0, "computing-shaped culmination");
ok(wt.indexOf("Computing Circle") >= 0, "procedures follow the computing cycle");
ok(wt.indexOf("Group Algorithm & Class Chart") >= 0, "the class computing chart is part of the week");
ok(wt.indexOf("Device & Online-Safety Note") >= 0, "the device-safety note is on the weekly plan too");
ok(wt.indexOf("Home practice") >= 0, "the weekly assignment carries home practice");
ok(wt.indexOf("no device is required") >= 0 || wt.indexOf("No device") >= 0 ||
   wt.indexOf("no device needed") >= 0 || /no device/i.test(wt),
  "home practice does not require a device");
ok(wt.indexOf("Learning Centers") < 0, "no ECD centers wording in an elementary plan");
ok(wt.indexOf("Health Fair") < 0 && wt.indexOf("Opening Circle") < 0,
  "no health fair or health opening-circle wording on a computing weekly plan");

/* ------------------------------------------------------------------ */
console.log("\n-- long lessons, adjustment modes and the teacher's own note --");
const long = LP.build(baseOpts({ grade: 5, topics: ["III"], lpPlanType: "daily", lpMin: 120 }));
ok(textOf(long.blocks).indexOf("Group report and the class computing chart") >= 0,
  "a 120-minute computing lesson reports to the class and charts it");
const rem = LP.build(baseOpts({ grade: 4, topics: ["VI"], lpPlanType: "weekly", lpAdjMode: "remedial" }));
const rt = textOf(rem.blocks);
ok(rt.indexOf("No-Blame Start") >= 0, "remedial pacing starts without blaming a bug");
ok(rt.indexOf("never laugh at a bug") >= 0,
  "remedial pacing keeps the no-blame rule inside the strategy");
const acc = LP.build(baseOpts({ grade: 4, topics: ["VI"], lpPlanType: "weekly", lpAdjMode: "accelerated" }));
ok(textOf(acc.blocks).indexOf("The Class Runs the Computing Fair") >= 0,
  "accelerated pacing hands the computing fair to the pupils");
const note = LP.build(baseOpts({ grade: 3, topics: ["IV"], lpPlanType: "weekly",
  lpAdjNote: "Market-day walk on Thursday" }));
ok(textOf(note.blocks).indexOf("Market-day walk on Thursday") >= 0,
  "the teacher's own adjustment note is printed");
const w3 = LP.build(baseOpts({ grade: 2, topics: ["VI"], lpPlanType: "weekly", lpWeeks: 3 }));
ok(textOf(w3.blocks).indexOf("Algorithm Strengthening") >= 0, "a 3-week unit still paces the algorithm");

/* ------------------------------------------------------------------ */
console.log("\n-- every one of the seventy-two units plans, and prints its own content --");
units.forEach((u) => {
  const g = u.grade, per = u.period;
  const p = LP.build(baseOpts({ grade: g, topics: [per], lpPlanType: "daily" }));
  const t = textOf(p.blocks);
  const w = textOf(LP.build(baseOpts({ grade: g, topics: [per],
    lpPlanType: "weekly" })).blocks);
  ok(t.indexOf(u.title) >= 0,
    "grade " + g + " " + per + ": the plan teaches \u201c" + u.title + "\u201d");
  ok(t.indexOf("Computing circle") >= 0 && t.indexOf("Home practice:") >= 0,
    "grade " + g + " " + per + ": circle opening and home practice");
  ok(t.indexOf("Device & Online-Safety Note") >= 0,
    "grade " + g + " " + per + ": device-safety note printed");
  ok(w.indexOf("Computing Fair & Debug Check") >= 0 && w.indexOf("Computing Circle") >= 0,
    "grade " + g + " " + per + ": the weekly plan keeps the computing cycle and closes with the computing fair");
});

/* ------------------------------------------------------------------ */
console.log("\n-- Grade 10 daily plan and Grade 12 weekly plan (upper grades use the same computing shape) --");
const sh = LP.build(baseOpts({ grade: 10, topics: ["II"], levelName: "Grade 10",
  subjectLine: "Computer Science - Senior High", lpPlanType: "daily" }));
const sht = textOf(sh.blocks);
ok(sht.indexOf("Number Systems") >= 0, "the Grade 10 plan teaches number systems");
ok(sht.indexOf("Grade 10") >= 0, "the grade label reads Grade 10");
ok(sht.indexOf("Computing circle") >= 0 && sht.indexOf("Device & Online-Safety Note") >= 0,
  "the senior high plan keeps the computing circle and the safety note");
ok(sht.indexOf("Health circle") < 0 && sht.indexOf("Welcome song") < 0,
  "no health or ECD wording on a senior high computing plan");
ok(/binary|hexadecimal|base/i.test(sht), "the Grade 10 plan draws its questions from the unit itself");
const g12 = LP.build(baseOpts({ grade: 12, topics: ["IV"], levelName: "Grade 12",
  subjectLine: "Computer Science - Senior High", lpPlanType: "weekly" }));
const g12t = textOf(g12.blocks);
ok(g12t.indexOf("Algorithm Efficiency") >= 0, "the Grade 12 weekly plan teaches algorithm efficiency");
ok(g12t.indexOf("Computing Fair & Debug Check") >= 0, "the Grade 12 unit still closes with the computing fair");
ok(g12t.indexOf("Week 1 of 4:") >= 0, "the Grade 12 weekly plan paces four weeks");
ok(g12t.indexOf("Device & Online-Safety Note") >= 0, "the safety note is on the Grade 12 plan too");
const jh = LP.build(baseOpts({ grade: 8, topics: ["II"], levelName: "Grade 8",
  subjectLine: "Computer Science - Junior High", lpPlanType: "daily" }));
const jht = textOf(jh.blocks);
ok(jht.indexOf("Spreadsheets") >= 0 && /formula|cell/i.test(jht),
  "the Grade 8 plan teaches spreadsheets from the unit's own material");

/* ------------------------------------------------------------------ */
console.log("\n-- GEN_SC course pack uses Computing Classroom Rules --");
const pack = GEN.buildPack({
  curriculum: units, grade: 1, topics: ["I"],
  sheets: ["terms", "match", "cloze", "tf", "short", "mcq", "classify", "diagram", "experiment", "worked", "apply"],
  perEx: 6, seed: 3, tests: true, exam: true, keys: true, teacher: true,
  subjectId: "cs", subjectName: "COMPUTER SCIENCE", subjectLine: "Computer Science",
  bandName: "Elementary"
});
const pt = textOf(pack.blocks);
ok(pack.topics.length === 1, "the pack builds the selected computing unit");
ok(pt.indexOf("Computing Classroom Rules") >= 0, "CS packs print Computing Classroom Rules");
ok(pt.indexOf("Science Safety Rules") < 0, "CS packs do not print Science Safety Rules");
ok(pt.indexOf("we try, we debug, we do not laugh at a mistake") >= 0,
  "the computing classroom rules are the unplugged-first ones");
ok(pt.indexOf("Computers Around Us") >= 0, "the pack names the unit");
ok(/Calculations/.test(pt) && /show all your working/.test(pt) && pt.indexOf("Drill 1") < 0,
  "pack includes the shared GEN_SC worked sheet and no maths drill sheets");
ok(JSON.stringify(pack).indexOf("undefined") < 0, "the pack has no undefined holes");
const shPack = GEN.buildPack({
  curriculum: units, grade: 11, topics: ["I", "IV"],
  sheets: ["terms", "match", "cloze", "tf", "short", "mcq", "classify", "diagram", "experiment", "worked", "apply"],
  perEx: 6, seed: 5, tests: true, exam: true, keys: true, teacher: true,
  subjectId: "cs", subjectName: "COMPUTER SCIENCE", subjectLine: "Computer Science",
  bandName: "Senior High"
});
const spt = textOf(shPack.blocks);
ok(shPack.topics.length === 2, "a senior high pack builds the selected computing units");
ok(spt.indexOf("Programming in Python") >= 0 && spt.indexOf("Relational Databases and SQL") >= 0,
  "the senior high pack names its units");
ok(spt.indexOf("Computing Classroom Rules") >= 0 && spt.indexOf("Science Safety Rules") < 0,
  "senior high CS packs print Computing Classroom Rules, not Science Safety Rules");
ok(JSON.stringify(shPack).indexOf("undefined") < 0, "the senior high pack has no undefined holes");
const jhPack = GEN.buildPack({
  curriculum: units, grade: 7, topics: ["VI"],
  sheets: ["terms", "match", "cloze", "tf", "short", "mcq", "classify", "diagram", "experiment", "worked", "apply"],
  perEx: 6, seed: 5, tests: true, exam: true, keys: true, teacher: true,
  subjectId: "cs", subjectName: "COMPUTER SCIENCE", subjectLine: "Computer Science",
  bandName: "Junior High"
});
ok(textOf(jhPack.blocks).indexOf("Trace Tables") >= 0 && JSON.stringify(jhPack).indexOf("undefined") < 0,
  "a junior high pack builds the flowchart unit with no undefined holes");

/* ------------------------------------------------------------------ */
console.log("\n-- other subjects are untouched --");
const sc = LP.build({ curriculum: scUnits, grade: 1, topics: ["VI"],
  subjectId: "sc", subjectName: "GENERAL SCIENCE", subjectLine: "General Science",
  lpWeeks: 4, lpMin: 40, lpDays: 5, lpAdjMode: "standard",
  teacherName: "T", seed: 7, lpPlanType: "daily" });
const st = textOf(sc.blocks);
ok(st.indexOf("Greeting and attendance") >= 0, "graded greeting kept on General Science");
ok(st.indexOf("Computing circle") < 0, "no computing-circle wording leaks into General Science");
ok(st.indexOf("Device & Online-Safety Note") < 0,
  "no computing note leaks into a General Science plan");
const scw = LP.build({ curriculum: scUnits, grade: 1, topics: ["VI"],
  subjectId: "sc", subjectName: "GENERAL SCIENCE", subjectLine: "General Science",
  lpWeeks: 4, lpMin: 40, lpDays: 5, lpAdjMode: "standard",
  teacherName: "T", seed: 7, lpPlanType: "weekly" });
const sw = textOf(scw.blocks);
ok(sw.indexOf("End-of-Unit Culmination & Period Assessment (Unit Complete)") >= 0,
  "General Science keeps its own weekly culmination heading");
ok(sw.indexOf("Computing Fair") < 0 && sw.indexOf("computing chart") < 0 &&
   sw.indexOf("Computing Circle") < 0,
  "no computing fair, chart or circle wording in a General Science weekly plan");
const hs = LP.build({ curriculum: hsUnits, grade: 1, topics: ["III"],
  subjectId: "hs", subjectName: "HEALTH SCIENCE", subjectLine: "Health Science - Elementary",
  lpWeeks: 4, lpMin: 40, lpDays: 5, lpAdjMode: "standard",
  teacherName: "T", seed: 7, lpPlanType: "daily" });
const ht = textOf(hs.blocks);
ok(ht.indexOf("Health circle") >= 0, "Health Science keeps its health-circle opening");
ok(ht.indexOf("Computing circle") < 0, "the computing branches do not take over a health plan");
ok(ht.indexOf("Device & Online-Safety Note") < 0, "health still prints its own safeguarding heading");
const kg = LP.build({ curriculum: kgUnits, grade: "kg1", topics: ["I"], kg: true,
  levelName: "KG-I", subjectId: "kg", subjectName: "KINDERGARTEN",
  subjectLine: "Kindergarten - Staying Healthy and Safe",
  lpWeeks: 2, lpMin: 40, lpDays: 5, lpAdjMode: "standard",
  teacherName: "T", seed: 7, lpPlanType: "daily" });
const kt = textOf(kg.blocks);
ok(kt.indexOf("Welcome song and attendance") >= 0, "Kindergarten keeps its ECD opening");
ok(kt.indexOf("Computing circle") < 0, "the computing branches do not take over the ECD plan");
ok(kt.indexOf("exercise book") < 0, "Kindergarten still has no exercise books");

/* ------------------------------------------------------------------ */
console.log("\n-- wiring and build --");
const build = fs.readFileSync(path.join(root, "build.sh"), "utf8");
ok(build.indexOf("data-cs.js") > 0, "build.sh concatenates data-cs.js");
ok(build.indexOf("data-cs.js data-cs79.js data-cs1012.js") > 0,
  "build.sh concatenates data-cs79.js and data-cs1012.js right after data-cs.js (they merge into CS_CURRICULUM)");
ok(/\bfor id in [^\n]*\bcs\b/.test(build), "build.sh inlines the computing cover artwork");
ok(/Computer Science/.test(build), "the built page titles the new subject");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
ok(/    cs: \{\n      label: "Computer Science"/.test(app),
  "app.js registers the Computer Science subject");
ok(/curriculum: function \(\) \{ return CS_CURRICULUM; \}/.test(app),
  "the subject reads the data-cs.js curriculum");
ok(/Computer Science Grades 7\\u20139/.test(app) && /Computer Science Grades 10\\u201312/.test(app),
  "the grade-band note names the junior and senior high computing units");
ok(/engine: function \(\) \{ return GEN_SC; \}/.test(app),
  "computing packs reuse the General Science sheet engine");
const icons = fs.readFileSync(path.join(root, "icons.svg.html"), "utf8");
ok(icons.indexOf('id="i-sub-cs"') > 0, "the subject tab has its own computer icon");
const nv = fs.readFileSync(path.join(root, "tests/notes-verbatim.js"), "utf8");
ok(nv.indexOf("CS_CURRICULUM") > 0, "the verbatim study-notes check covers the computing units");
ok(nv.indexOf("data-cs79.js") > 0 && nv.indexOf("data-cs1012.js") > 0,
  "the verbatim study-notes check loads the upper-grade computing files too");
const rg = fs.readFileSync(path.join(root, "tests/regress.py"), "utf8");
ok(rg.indexOf("'cs'") >= 0 || rg.indexOf('"cs"') >= 0,
  "the Playwright subject sweep includes the computing subject");
const ci = fs.readFileSync(path.join(root, ".github/workflows/test.yml"), "utf8");
ok(ci.indexOf("node tests/cs-lesson.js") >= 0, "CI runs this check");
const coversReadme = fs.readFileSync(path.join(root, "assets/covers/README.md"), "utf8");
ok(/cs\.png/.test(coversReadme), "the cover artwork is recorded in assets/covers/README.md");
const topReadme = fs.readFileSync(path.join(root, "README.md"), "utf8");
ok(/Computer Science/.test(topReadme), "the top-level README documents the subject");
const notice = fs.readFileSync(path.join(root, "NOTICE.md"), "utf8");
ok(/Computer Science/.test(notice) && /not an official transcription/i.test(notice),
  "NOTICE.md records Computer Science as original, not an MoE transcription");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
ok(css.indexOf('body[data-subject="cs"]') >= 0, "Computer Science has its own theme colour");
const coverText = fs.readFileSync(path.join(root, "cover-text.js"), "utf8");
ok(coverText.indexOf("Computer Science · Original teaching resource") >= 0,
  "cover text names Computer Science as an original teaching resource");
ok(!fs.existsSync(path.join(root, "elementary-lessons", "cs.md")),
  "no invented markdown lesson file for Computer Science");
const built = path.join(root, "index.html");
if (fs.existsSync(built)) {
  const idx = fs.readFileSync(built, "utf8");
  ok(idx.indexOf("CS_CURRICULUM") > 0, "the built page carries the computing units");
  ok(idx.indexOf("Algorithms, Flowcharts and Trace Tables") > 0 &&
     idx.indexOf("Algorithm Efficiency \u2014 Searching, Sorting and Big-O") > 0,
    "the built page carries the junior and senior high computing units");
  ok(idx.indexOf('id="i-sub-cs"') > 0, "the built page carries the computing tab icon");
  ok(idx.indexOf("SUBJECT_COVER_ART") > 0 && /"cs":\{url:"data:image\/png/.test(idx),
    "the built page inlines the computing cover artwork");
} else {
  console.log("  -- index.html not built yet; run bash build.sh to check the deliverable --");
}

console.log(fails ? `\nFAILED (${fails})` :
  "\nOK: the Computer Science lesson plans (Grades 1-12) check out.");
process.exit(fails ? 1 : 0);
