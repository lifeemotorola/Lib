#!/usr/bin/env node
/* End-to-end and integration tests for Liberian school sector unit planning:
   - 3-week and 4-week unit durations (Liberian regular school sector standard)
   - Daily plan vs Weekly plan mode switching
   - Weekly plan adjustments across weeks until unit completion
   - Standard progression, Remedial & reinforcement, and Accelerated adjustment strategies
   - Custom teacher adjustment notes integration
   - Word (.docx) export and DOM rendering across multiple subjects
   Run: node tests/weekly-plan-e2e.js */
"use strict";
const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const HTML = path.join(__dirname, "..", "index.html");
const src = fs.readFileSync(HTML, "utf8");

const vc = new VirtualConsole();
const jsdomErrors = [];
vc.on("jsdomError", (e) => jsdomErrors.push(String(e && e.message || e)));
vc.on("error", (m) => jsdomErrors.push(String(m)));

const dom = new JSDOM(src, {
  runScripts: "dangerously",
  pretendToBeVisual: true,
  url: "https://lib.test/index.html",
  virtualConsole: vc,
  beforeParse(window) {
    window.matchMedia = () => ({
      matches: false,
      addListener() {}, removeListener() {},
      addEventListener() {}, removeEventListener() {}
    });
    window.URL.createObjectURL = (blob) => {
      window.__capturedBlob = blob;
      return "blob:fake";
    };
    window.URL.revokeObjectURL = () => {};
    window.HTMLAnchorElement.prototype.click = function () {};
    window.scrollTo = () => {};
  }
});

const { window } = dom;
const { document } = window;
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

let fails = 0;
function ok(cond, msg) {
  if (!cond) { fails++; console.error("  FAIL:", msg); }
  else { console.log("  OK:", msg); }
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function generateDoc() {
  $("#gen").click();
  await sleep(40);
}

(async () => {
  await sleep(600); // let initial page boot

  console.log("=== 1. Testing Document Switching & UI Controls ===");
  // Switch to Lesson Plan
  $("#dtype .sess[data-d='lp']").click();
  await sleep(30);
  ok($("#lpWrap").style.display !== "none", "lpWrap visible in LP mode");
  ok($("#lpPlanTabs").children.length === 2, "lpPlanTabs has 2 options");
  ok($("#lpWeekPresets").children.length === 2, "lpWeekPresets has 3 and 4 weeks buttons");
  ok($("#lpAdjMode") !== null, "lpAdjMode selector exists");
  ok($("#lpAdjNote") !== null, "lpAdjNote input exists");

  console.log("\n=== 2. Testing Daily Plan with 4-Week and 3-Week Unit Durations ===");
  // Daily plan (default) with 4 weeks
  $("#lpPlanTabs .sess[data-pt='daily']").click();
  $("#lpWeekPresets .lp-w[data-w='4']").click();
  $("#lpMin").value = 45;
  $("#lpMin").dispatchEvent(new window.Event("change", { bubbles: true }));
  await generateDoc();

  let text = $("#doc").textContent;
  ok(text.includes("TEACHER’S LESSON PLAN"), "Daily plan contains TEACHER'S LESSON PLAN");
  ok(text.includes("Unit Duration: 4 Weeks (Liberia Sector)"), "Daily plan indicates 4 Weeks unit duration");
  ok(text.includes("Weekly Plan Adjustment & Remedial Scheme (Unit Duration: 4 Weeks)"), "Daily plan contains 4-week adjustment scheme");
  ok(text.includes("Week 1") && text.includes("Week 2") && text.includes("Week 3") && text.includes("Week 4"), "Daily plan contains Weeks 1 to 4");
  ok($("#meta").textContent.includes("4 weeks/unit"), "Meta displays 4 weeks/unit");

  // Daily plan with 3 weeks
  $("#lpWeekPresets .lp-w[data-w='3']").click();
  await generateDoc();
  text = $("#doc").textContent;
  ok(text.includes("Unit Duration: 3 Weeks (Liberia Sector)"), "Daily plan indicates 3 Weeks unit duration");
  ok(text.includes("Weekly Plan Adjustment & Remedial Scheme (Unit Duration: 3 Weeks)"), "Daily plan contains 3-week adjustment scheme");
  ok($("#meta").textContent.includes("3 weeks/unit"), "Meta displays 3 weeks/unit");

  console.log("\n=== 3. Testing Weekly Plan Mode (Teacher's Weekly Unit Plan) ===");
  // Switch to Weekly plan mode
  $("#lpPlanTabs .sess[data-pt='weekly']").click();
  $("#lpWeekPresets .lp-w[data-w='4']").click();
  $("#lpDays").value = 5;
  $("#lpDays").dispatchEvent(new window.Event("change", { bubbles: true }));
  await generateDoc();

  text = $("#doc").textContent;
  ok(text.includes("TEACHER’S LESSON PLAN"), "Weekly plan header rendered");
  ok(text.includes("Unit Duration: 4 Weeks (Liberia School Sector)"), "Weekly plan displays 4 Weeks unit duration");
  ok(text.includes("Plan Format: Teacher's Weekly Unit Plan"), "Weekly plan format confirmed");
  ok(text.includes("Weekly Plan Adjustment & Progression Scheme (Weeks 1 to 4 Until Unit Completion)"), "Weekly progression scheme rendered");
  ok(text.includes("Week 1 of 4:") && text.includes("Week 2 of 4:") && text.includes("Week 3 of 4:") && text.includes("Week 4 of 4:"), "All 4 weeks detailed sections present");
  ok(text.includes("End-of-Unit Culmination & Period Assessment (Unit Complete)"), "Unit culmination section present when unit is complete");
  ok(text.includes("Weekly Objectives:") && text.includes("Classroom Procedures & Activities across Week"), "Weekly objectives and procedures present");

  // Weekly plan with 3 weeks
  $("#lpWeekPresets .lp-w[data-w='3']").click();
  await generateDoc();
  text = $("#doc").textContent;
  ok(text.includes("Unit Duration: 3 Weeks (Liberia School Sector)"), "Weekly plan displays 3 Weeks unit duration");
  ok(text.includes("Week 1 of 3:") && text.includes("Week 2 of 3:") && text.includes("Week 3 of 3:"), "All 3 weeks detailed sections present");
  ok(!text.includes("Week 4 of 3:"), "Week 4 absent in 3-week unit");

  console.log("\n=== 4. Testing Weekly Plan Adjustment Strategies & Custom Notes ===");
  // Remedial mode
  $("#lpAdjMode").value = "remedial";
  $("#lpAdjMode").dispatchEvent(new window.Event("change", { bubbles: true }));
  await generateDoc();
  text = $("#doc").textContent;
  ok(text.includes("Diagnostic Baseline & Scaffolding") || text.includes("Step-by-Step Guided Reinforcement") || text.includes("Mastery Catch-up"), "Remedial adjustment strategy text present");

  // Accelerated mode
  $("#lpAdjMode").value = "accelerated";
  $("#lpAdjMode").dispatchEvent(new window.Event("change", { bubbles: true }));
  await generateDoc();
  text = $("#doc").textContent;
  ok(text.includes("Fast-Track Foundation & Enrichment") || text.includes("Intensive Practice & Higher-Order Thinking") || text.includes("Unit Mastery Period Examination"), "Accelerated adjustment strategy text present");

  // Custom teacher adjustment note
  const customNote = "Friday remedial reading session for struggling learners";
  $("#lpAdjNote").value = customNote;
  $("#lpAdjNote").dispatchEvent(new window.Event("input", { bubbles: true }));
  await generateDoc();
  text = $("#doc").textContent;
  ok(text.includes(customNote), "Custom weekly adjustment note rendered in the plan");

  console.log("\n=== 5. Testing Multi-Subject Support ===");
  const testSubjects = ["ma", "sc", "ss", "fr", "bi"];
  for (const s of testSubjects) {
    const btn = $(`#subjects .subtab[data-s='${s}']`);
    if (btn) {
      btn.click();
      await sleep(30);
      await generateDoc();
      const subText = $("#doc").textContent;
      ok(subText.includes("TEACHER’S LESSON PLAN"), `Subject ${s} generated plan successfully`);
      ok(subText.includes("Weeks"), `Subject ${s} includes unit week duration`);
      ok(subText.includes("Weekly Plan Adjustment"), `Subject ${s} includes weekly plan adjustments`);
    }
  }

  console.log("\n=== 6. Testing Word (.docx) Export ===");
  window.__capturedBlob = null;
  $("#docx").click();
  await sleep(150);
  const blob = window.__capturedBlob;
  ok(!!blob, "Word .docx blob captured");
  if (blob) {
    const bytes = new Uint8Array(await blob.arrayBuffer());
    ok(bytes[0] === 0x50 && bytes[1] === 0x4b, "Valid PK zip format for .docx");
    const docXml = Buffer.from(bytes).toString("latin1");
    ok(docXml.includes("word/document.xml"), ".docx contains document.xml");
    ok(docXml.includes("TEACHER") && docXml.includes("LESSON PLAN"), ".docx contains Lesson Plan text");
    ok(docXml.includes("Weekly Plan Adjustment"), ".docx contains Weekly Plan Adjustment");
  }

  console.log("\n=== 7. Regression check: Course Pack mode ===");
  $("#dtype .sess[data-d='pack']").click();
  await sleep(30);
  ok($("#lpWrap").style.display === "none", "lpWrap hidden in course pack mode");
  await generateDoc();
  ok($("#doc").textContent.length > 1000, "Course pack mode generates full student/teacher pack");
  ok($("#meta").textContent.includes("unit(s)"), "Course pack metadata correct");

  console.log(fails === 0 ? "\nALL LIBERIAN UNIT PLANNING & ADJUSTMENT TESTS PASSED!" : `\n${fails} FAILURES`);
  process.exit(fails === 0 ? 0 : 1);
})().catch(e => { console.error("Harness error:", e); process.exit(2); });
