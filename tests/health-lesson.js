#!/usr/bin/env node
/* Node check for the Elementary Health Science units and the health-plan
   wording. Zero-dependency: run with  node tests/health-lesson.js

   Executes the real data-hs.js units through the real lesson.js builders and
   checks that the Grades 1-6 health plans speak health-lesson language
   (demonstrate the habit, practise it in pairs, keep the class health chart,
   practise at home) and always carry the safeguarding note for the sensitive
   topics the national guide puts in Grades 1-6 — while every other subject,
   and Kindergarten, keeps its exact existing wording. It also checks that
   data-hs.js is wired into build.sh, app.js, the verbatim-notes check and the
   built index.html.
*/
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "data-hs.js"), "utf8"), sandbox,
  { filename: "data-hs.js" });
vm.runInContext(fs.readFileSync(path.join(root, "lesson.js"), "utf8"), sandbox,
  { filename: "lesson.js" });
/* one graded unit, to prove the health branches never leak into other subjects */
const scSrc = fs.readFileSync(path.join(root, "data-sc.js"), "utf8") +
  "\nwindow.__SC = SC_CURRICULUM;\n";
vm.runInContext(scSrc, sandbox, { filename: "data-sc.js" });
/* the Kindergarten units, to prove the ECD branches still win on their own subject */
const kgSrc = fs.readFileSync(path.join(root, "data-kg.js"), "utf8") +
  "\nwindow.__KG = KG_CURRICULUM;\n";
vm.runInContext(kgSrc, sandbox, { filename: "data-kg.js" });

const LP = sandbox.window.LESSON_PLAN;
const units = sandbox.HS_CURRICULUM;
const scUnits = sandbox.window.__SC;
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
    curriculum: units, grade: 1, topics: ["VI"],
    levelName: "Grade 1", subjectId: "hs",
    subjectName: "HEALTH SCIENCE",
    subjectLine: "Health Science - Elementary",
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
console.log("\n-- HS_CURRICULUM shape --");
ok(Array.isArray(units) && units.length === 6, "six health units, one per Elementary grade");
[1, 2, 3, 4, 5, 6].forEach((g) => {
  ok(units.some((u) => u.grade === g), "grade " + g + " carries a health unit");
});
ok(units.every((u) => u.healthPlan === true), "every unit is flagged healthPlan");
ok(units.every((u) => (u.objectives || []).length >= 5), "every unit carries 5+ objectives");
ok(units.every((u) => (u.terms || []).length >= 10), "every unit carries 10+ key terms");
ok(units.every((u) => (u.facts || []).length >= 6), "every unit carries 6+ oral/written questions");
ok(units.every((u) => (u.tf || []).length >= 5), "every unit carries 5+ true/false statements");
ok(units.every((u) => (u.apply || []).length >= 4), "every unit carries 4+ real-life applications");
ok(units.every((u) => (u.activities || []).length >= 5 && (u.materials || []).length >= 5),
  "every unit names the guide's activities and materials");
ok(units.every((u) => (u.aids || []).length >= 4 && (u.home || []).length >= 3 &&
  (u.assessment || []).length >= 4),
  "every unit names aids, home practice and assessment strategies");
ok(units.every((u) => (u.classify || u.diagram) && u.experiment),
  "every unit carries a sorting task or a diagram, and an investigation");
ok(units.every((u) => typeof u.safeguard === "string" && u.safeguard.length > 120),
  "every unit carries a safeguarding note for the teacher");
ok(units.every((u) => (u.study || []).filter((b) => b.k === "h3").length >= 4),
  "every unit carries a study focus for each week of the 4-week unit");
ok(units.every((u) => !u.worked && !u.drills && !u.drills2),
  "no calculation banks: health is not drilled with sums");
ok(units.every((u) => /guide pp\./.test(u.subtitle || "")),
  "every unit cites its page in the national General Science guide");
ok(units.every((u) => /report|head teacher|trusted adult/i.test(u.safeguard)),
  "every safeguarding note tells the teacher where a disclosure goes");

/* ------------------------------------------------------------------ */
console.log("\n-- Grade 1 daily plan (Period VI) --");
const daily = LP.build(baseOpts({ lpPlanType: "daily" }));
const dt = textOf(daily.blocks);
ok(dt.indexOf("Health Science - Elementary") >= 0, "the subject line is the health strand");
ok(dt.indexOf("Grade 1") >= 0, "the grade label reads Grade 1");
ok(dt.indexOf("Health circle and attendance") >= 0, "the health lesson opens in the circle");
ok(dt.indexOf("no pupil is laughed at or named") >= 0, "the two rules of a health lesson are read out");
ok(dt.indexOf("Caring for My Body") >= 0, "the topic is the unit title");
ok(/Demonstration and modelling of the healthy habit|Question and answer on the pupils' own lives|Small-group discussion and case study|Role play and refusal-skills practice|Chart, poster and pledge making with peer teaching/.test(dt),
  "health methods are used for the health subject");
ok(dt.indexOf("Drill and repetition") < 0 && dt.indexOf("Modelling worked examples on the board") < 0,
  "no maths or language drill methods on a health plan");
ok(dt.indexOf("the health habit demonstrated and then practised by every pupil") >= 0,
  "practice is a performed habit, not only an answer");
ok(dt.indexOf("Practice in pairs") >= 0, "pupils perform the habit to a partner");
ok(dt.indexOf("The Pepper and Soap Test") >= 0, "the class investigation is on the plan");
ok(dt.indexOf("health rule or slogan") >= 0, "the summary says the class slogan");
ok(dt.indexOf("Home practice:") >= 0, "the assignment is practised at home");
ok(dt.indexOf("Safeguarding & Sensitive-Content Note") >= 0, "the safeguarding note is printed");
ok(dt.indexOf("head teacher") >= 0, "the note says where a disclosure goes");
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
  "no kindergarten wording leaks into the elementary health plan");

/* ------------------------------------------------------------------ */
console.log("\n-- Grade 6 weekly plan (Period IV, 4 weeks) --");
const weekly = LP.build(baseOpts({ grade: 6, topics: ["IV"], levelName: "Grade 6",
  lpPlanType: "weekly" }));
const wt = textOf(weekly.blocks);
ok(wt.indexOf("Weekly Plan Adjustment") >= 0, "adjustment table kept");
ok(wt.indexOf("The Body Systems and Their Work") >= 0, "week-1 study focus");
ok(wt.indexOf("Week 3 of 4: Sexual Identity, Orientation and Respect") >= 0 &&
   wt.indexOf("Week 4 of 4: Risky Behaviour, STIs and HIV") >= 0,
  "the later weeks keep their own study focus from the unit's study notes");
ok(wt.indexOf("Consolidation, Remedial Review & Unit Period Assessment") < 0,
  "a health week is never labelled with the generic maths drill consolidation line");
ok(wt.indexOf("Health Fair & Habit Check") >= 0, "the last week is a health fair and habit check");
ok(wt.indexOf("End-of-Unit Health Fair & Habit Review") >= 0, "health-shaped culmination");
ok(wt.indexOf("Opening Circle") >= 0, "procedures follow the health cycle");
ok(wt.indexOf("Group Enquiry & Class Chart") >= 0, "the class health chart is part of the week");
ok(wt.indexOf("Safeguarding & Sensitive-Content Note") >= 0, "the safeguarding note is on the weekly plan too");
ok(wt.indexOf("Women and Children Protection Unit") >= 0,
  "the Grade 6 note names where a case is referred in Liberia");
ok(wt.indexOf("invented characters only") >= 0,
  "the note keeps case studies away from the pupils' own lives");
ok(wt.indexOf("Home practice") >= 0, "the weekly assignment carries home practice");
ok(wt.indexOf("Learning Centers") < 0, "no ECD centers wording in an elementary plan");

/* ------------------------------------------------------------------ */
console.log("\n-- long lessons, adjustment modes and the teacher's own note --");
const long = LP.build(baseOpts({ grade: 5, topics: ["III"], lpPlanType: "daily", lpMin: 120 }));
ok(textOf(long.blocks).indexOf("Group report and the class chart") >= 0,
  "a 120-minute health lesson reports to the class and charts it");
const rem = LP.build(baseOpts({ grade: 4, topics: ["VI"], lpPlanType: "weekly", lpAdjMode: "remedial" }));
const rt = textOf(rem.blocks);
ok(rt.indexOf("No-Blame Start") >= 0, "remedial pacing starts without blaming a pupil's home");
ok(rt.indexOf("never name a pupil's home, body or family in front of the class") >= 0,
  "remedial pacing keeps the safeguarding rule inside the strategy");
const acc = LP.build(baseOpts({ grade: 4, topics: ["VI"], lpPlanType: "weekly", lpAdjMode: "accelerated" }));
ok(textOf(acc.blocks).indexOf("The Class Runs the Health Fair") >= 0,
  "accelerated pacing hands the health fair to the pupils");
const note = LP.build(baseOpts({ grade: 3, topics: ["IV"], lpPlanType: "weekly",
  lpAdjNote: "Market-day walk on Thursday" }));
ok(textOf(note.blocks).indexOf("Market-day walk on Thursday") >= 0,
  "the teacher's own adjustment note is printed");
const w3 = LP.build(baseOpts({ grade: 2, topics: ["VI"], lpPlanType: "weekly", lpWeeks: 3 }));
ok(textOf(w3.blocks).indexOf("Habit Strengthening") >= 0, "a 3-week unit still paces the habit");

/* ------------------------------------------------------------------ */
console.log("\n-- every grade plans, and every grade prints its own content --");
[1, 2, 3, 4, 5, 6].forEach((g) => {
  const u = units.filter((x) => x.grade === g)[0];
  const p = LP.build(baseOpts({ grade: g, topics: [u.period],
    lpPlanType: "daily" }));
  const t = textOf(p.blocks);
  ok(t.indexOf(u.title) >= 0, "grade " + g + ": the plan teaches \u201c" + u.title + "\u201d");
  ok(t.indexOf("Health circle") >= 0 && t.indexOf("Home practice:") >= 0,
    "grade " + g + ": circle opening and home practice");
  ok(t.indexOf("Safeguarding & Sensitive-Content Note") >= 0,
    "grade " + g + ": safeguarding note printed");
});
ok(units.some((u) => /menstruation/i.test(JSON.stringify(u.study))) &&
   units.some((u) => /abstinence/i.test(JSON.stringify(u.study))),
  "the puberty and abstinence content of the guide is carried, not dropped");

/* ------------------------------------------------------------------ */
console.log("\n-- other subjects are untouched --");
const sc = LP.build({ curriculum: scUnits, grade: 1, topics: ["VI"],
  subjectId: "sc", subjectName: "GENERAL SCIENCE", subjectLine: "General Science",
  lpWeeks: 4, lpMin: 40, lpDays: 5, lpAdjMode: "standard",
  teacherName: "T", seed: 7, lpPlanType: "daily" });
const st = textOf(sc.blocks);
ok(st.indexOf("Greeting and attendance") >= 0, "graded greeting kept on General Science");
ok(st.indexOf("Health circle") < 0, "no health-circle wording leaks into General Science");
ok(st.indexOf("Safeguarding & Sensitive-Content Note") < 0,
  "no health note leaks into a General Science plan");
const scw = LP.build({ curriculum: scUnits, grade: 1, topics: ["VI"],
  subjectId: "sc", subjectName: "GENERAL SCIENCE", subjectLine: "General Science",
  lpWeeks: 4, lpMin: 40, lpDays: 5, lpAdjMode: "standard",
  teacherName: "T", seed: 7, lpPlanType: "weekly" });
const sw = textOf(scw.blocks);
ok(sw.indexOf("End-of-Unit Culmination & Period Assessment (Unit Complete)") >= 0,
  "General Science keeps its own weekly culmination heading");
ok(sw.indexOf("Health Fair") < 0 && sw.indexOf("health chart") < 0 &&
   sw.indexOf("health circle") < 0,
  "no health fair, chart or circle wording in a General Science weekly plan");
const kg = LP.build({ curriculum: kgUnits, grade: "kg1", topics: ["I"], kg: true,
  levelName: "KG-I", subjectId: "kg", subjectName: "KINDERGARTEN",
  subjectLine: "Kindergarten - Staying Healthy and Safe",
  lpWeeks: 2, lpMin: 40, lpDays: 5, lpAdjMode: "standard",
  teacherName: "T", seed: 7, lpPlanType: "daily" });
const kt = textOf(kg.blocks);
ok(kt.indexOf("Welcome song and attendance") >= 0, "Kindergarten keeps its ECD opening");
ok(kt.indexOf("Health circle") < 0, "the health branches do not take over the ECD plan");
ok(kt.indexOf("exercise book") < 0, "Kindergarten still has no exercise books");

/* ------------------------------------------------------------------ */
console.log("\n-- wiring and build --");
const build = fs.readFileSync(path.join(root, "build.sh"), "utf8");
ok(build.indexOf("data-hs.js") > 0, "build.sh concatenates data-hs.js");
ok(/\[\s*\]\s*|for id in [^\n]*\bhs\b/.test(build), "build.sh inlines the health cover artwork");
ok(/Health Science/.test(build), "the built page titles the new subject");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
ok(/    hs: \{\n      label: "Health Science"/.test(app),
  "app.js registers the Health Science subject");
ok(/curriculum: function \(\) \{ return HS_CURRICULUM; \}/.test(app),
  "the subject reads the data-hs.js curriculum");
ok(/engine: function \(\) \{ return GEN_SC; \}/.test(app),
  "health packs reuse the General Science sheet engine");
const icons = fs.readFileSync(path.join(root, "icons.svg.html"), "utf8");
ok(icons.indexOf('id="i-sub-hs"') > 0, "the subject tab has its own heart-and-pulse icon");
const nv = fs.readFileSync(path.join(root, "tests/notes-verbatim.js"), "utf8");
ok(nv.indexOf("HS_CURRICULUM") > 0, "the verbatim study-notes check covers the health units");
const rg = fs.readFileSync(path.join(root, "tests/regress.py"), "utf8");
ok(rg.indexOf("'hs'") >= 0 || rg.indexOf('"hs"') >= 0,
  "the Playwright subject sweep includes the health subject");
const ci = fs.readFileSync(path.join(root, ".github/workflows/test.yml"), "utf8");
ok(ci.indexOf("node tests/health-lesson.js") >= 0, "CI runs this check");
const coversReadme = fs.readFileSync(path.join(root, "assets/covers/README.md"), "utf8");
ok(/hs\.png/.test(coversReadme), "the cover artwork is recorded in assets/covers/README.md");
const topReadme = fs.readFileSync(path.join(root, "README.md"), "utf8");
ok(/Health Science/.test(topReadme), "the top-level README documents the subject");
const EL = path.join(root, "elementary-lessons");
ok(fs.existsSync(path.join(EL, "README.md")), "elementary-lessons/README.md exists");
const elFiles = fs.readdirSync(EL).sort();
[1, 2, 3, 4, 5, 6].forEach((g) => {
  const f = elFiles.find((x) => x.indexOf("Grade-" + g + "-") === 0);
  ok(!!f, "elementary-lessons/ carries a printed lesson file for grade " + g);
  if (!f) return;
  const md = fs.readFileSync(path.join(EL, f), "utf8");
  ok(md.length > 9000, "grade " + g + " file is complete, not an outline (" + md.length + " chars)");
  ["40 minutes", "Safeguarding", "Guide p", "THE MODEL LESSON", "Board plan",
   "Common mistakes", "Differentiation", "Assignment and home practice",
   "Look for by Friday", "Period test blueprint", "Key terms", "Parent notice",
   "cross-reference", "Model answers"].forEach((need) => {
    ok(md.indexOf(need) >= 0, "grade " + g + " file carries: " + need);
  });
  // every grade's own guide content, named in the file
  const content = {
    1: ["wash our hands", "Pepper and Soap", "private"],
    2: ["Refuse — Reason — Run — Report", "expiry date", "womb"],
    3: ["twenty", "abstinence", "carbohydrate"],
    4: ["puberty", "front to back", "malaria"],
    5: ["IUD", "health post", "immune"],
    6: ["Abstinence", "8–10 hours", "pulse"]
  }[g];
  content.forEach((need) => {
    ok(md.toLowerCase().indexOf(need.toLowerCase()) >= 0,
      "grade " + g + " file keeps the guide's content: " + need);
  });
});
/* the README must point at every file it promises */
const elReadme = fs.readFileSync(path.join(EL, "README.md"), "utf8");
[1, 2, 3, 4, 5, 6].forEach((g) => {
  const f = elFiles.find((x) => x.indexOf("Grade-" + g + "-") === 0);
  ok(f && elReadme.indexOf(f) >= 0, "elementary-lessons/README.md links " + f);
});
const built = path.join(root, "index.html");
if (fs.existsSync(built)) {
  const idx = fs.readFileSync(built, "utf8");
  ok(idx.indexOf("HS_CURRICULUM") > 0, "the built page carries the health units");
  ok(idx.indexOf('id="i-sub-hs"') > 0, "the built page carries the health tab icon");
  ok(idx.indexOf("SUBJECT_COVER_ART") > 0 && /"hs":\{url:"data:image\/png/.test(idx),
    "the built page inlines the health cover artwork");
} else {
  console.log("  -- index.html not built yet; run bash build.sh to check the deliverable --");
}

console.log(fails ? `\nFAILED (${fails})` :
  "\nOK: the Elementary Health Science lesson plans check out.");
process.exit(fails ? 1 : 0);
