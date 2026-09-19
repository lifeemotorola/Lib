#!/usr/bin/env node
/* Node check for the Elementary Computer Science units and the computing-plan
   wording. Zero-dependency: run with  node tests/cs-lesson.js

   Executes the real data-cs.js units through the real lesson.js builders and
   checks that the Grades 1-6 computing plans speak unplugged computing-lesson
   language (computing circle, pair-debug, computing fair) and always carry
   the device/online-safety note — while Health Science, General Science and
   Kindergarten keep their exact existing wording. It also checks that
   data-cs.js is wired into build.sh, app.js, the verbatim-notes check and the
   built index.html, and that GEN_SC packs print Computing Classroom Rules.
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
vm.runInContext(fs.readFileSync(path.join(root, "data-cs.js"), "utf8"), sandbox,
  { filename: "data-cs.js" });
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
ok(Array.isArray(units) && units.length === 36,
  "thirty-six computing units: Periods I-VI in every Elementary grade");
[1, 2, 3, 4, 5, 6].forEach((g) => {
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
ok(new Set(units.map((u) => u.title)).size === 36, "every unit title is unique");
const blob = JSON.stringify(units);
ok(blob.indexOf("</script>") < 0, "no closing script tag in the curriculum payload");
["A computer is a machine that follows instructions",
 "A bug is a mistake",
 "A network is a set of computers",
 "Binary uses only two digits, 0 and 1",
 "Mobile money"].forEach((f) => {
  ok(blob.indexOf(f) >= 0, "spot fact present: " + f);
});
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
console.log("\n-- every one of the thirty-six units plans, and prints its own content --");
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
ok(/\bfor id in [^\n]*\bcs\b/.test(build), "build.sh inlines the computing cover artwork");
ok(/Computer Science/.test(build), "the built page titles the new subject");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
ok(/    cs: \{\n      label: "Computer Science"/.test(app),
  "app.js registers the Computer Science subject");
ok(/curriculum: function \(\) \{ return CS_CURRICULUM; \}/.test(app),
  "the subject reads the data-cs.js curriculum");
ok(/engine: function \(\) \{ return GEN_SC; \}/.test(app),
  "computing packs reuse the General Science sheet engine");
const icons = fs.readFileSync(path.join(root, "icons.svg.html"), "utf8");
ok(icons.indexOf('id="i-sub-cs"') > 0, "the subject tab has its own computer icon");
const nv = fs.readFileSync(path.join(root, "tests/notes-verbatim.js"), "utf8");
ok(nv.indexOf("CS_CURRICULUM") > 0, "the verbatim study-notes check covers the computing units");
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
  ok(idx.indexOf('id="i-sub-cs"') > 0, "the built page carries the computing tab icon");
  ok(idx.indexOf("SUBJECT_COVER_ART") > 0 && /"cs":\{url:"data:image\/png/.test(idx),
    "the built page inlines the computing cover artwork");
} else {
  console.log("  -- index.html not built yet; run bash build.sh to check the deliverable --");
}

console.log(fails ? `\nFAILED (${fails})` :
  "\nOK: the Elementary Computer Science lesson plans check out.");
process.exit(fails ? 1 : 0);
