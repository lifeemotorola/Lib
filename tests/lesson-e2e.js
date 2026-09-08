#!/usr/bin/env node
/* End-to-end check for the Teacher's Lesson Plan feature, driving the real
   built index.html in jsdom: UI switching, every subject/grade/duration,
   the on-screen form, and the .docx bytes.
   Run: node tests/lesson-e2e.js  (needs jsdom, e.g. npm i jsdom) */
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
    window.matchMedia = window.matchMedia || (q => ({
      matches: false, media: q,
      addListener() {}, removeListener() {},
      addEventListener() {}, removeEventListener() {}
    }));
    window.URL.createObjectURL = (blob) => {
      window.__capturedBlob = blob;
      return "blob:fake";
    };
    window.URL.revokeObjectURL = () => {};
    window.HTMLAnchorElement.prototype.click = function () { /* no navigation in tests */ };
    window.scrollTo = () => {};
  }
});

const { window } = dom;
const { document } = window;
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

let fails = 0;
function ok(cond, msg) {
  if (!cond) { fails++; console.log("  FAIL:", msg); }
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function stageSum() {
  /* "(N min)" labels on the form headings; they must add up to the lesson */
  let sum = 0, n = 0;
  $$(".page h3, .page h2").forEach(h => {
    const m = h.textContent.match(/\((\d+) min\)/);
    if (m) { sum += +m[1]; n++; }
  });
  return { sum, n };
}

const FORM_SECTIONS = [
  "TEACHER\u2019S LESSON PLAN",
  "Instructional Objectives",
  "Teacher Aids",
  "Teaching Method",
  "Presentation & Procedures (Classroom Activities)",
  "Initial Activities / Introduction",
  "Developmental Activities (Main Activities)",
  "Summary Conclusion",
  "Evaluation",
  "Assignment",
  "Duration:",
  "Topic:",
  "Grade:",
  "Subject:"
];

async function generateLP() {
  $("#gen").click();
  await sleep(30);
}

function checkForm(label, min) {
  const text = $("#doc").textContent;
  const units = $$("#periods .pk:checked").length;
  ok(units > 0, label + ": no periods selected");
  FORM_SECTIONS.forEach(s => ok(text.includes(s), label + ": missing section " + s));
  ok(text.includes("Teacher:"), label + ": missing Teacher field");
  ok(text.includes("Date:"), label + ": missing Date field");
  const st = stageSum();
  ok(st.n === 4 * units, label + ": expected " + 4 * units + " timed stages, got " + st.n + " (" + st.sum + ")");
  ok(st.sum === min * units, label + ": stage minutes " + st.sum + " != duration " + (min * units));
  ok($$("#doc .ftable").length >= 2, label + ": formtable fields missing");
  ok($$("#doc .page").length >= 1, label + ": no pages rendered");
}

async function matrix(trackId) {
  if (trackId === "wa") $("#tracks .track[data-t='wa']").click();
  await sleep(30);
  const subs = $$("#subjects .subtab").map(b => b.getAttribute("data-s"));
  for (const s of subs) {
    $(`#subjects .subtab[data-s='${s}']`).click();
    await sleep(30);
    const bands = $$("#bands .bandtab").map(b => b.getAttribute("data-b"));
    for (const bnd of bands.length ? bands : [null]) {
      if (bnd) $(`#bands .bandtab[data-b='${bnd}']`).click();
      await sleep(20);
      const grades = $$("#grade option").map(o => o.value);
      for (const g of grades) {
        $("#grade").value = g;
        $("#grade").dispatchEvent(new window.Event("change", { bubbles: true }));
        await sleep(20);
        for (const min of [30, 40, 45, 60, 90, 120]) {
          $("#lpMin").value = min;
          $("#lpMin").dispatchEvent(new window.Event("change", { bubbles: true }));
          await generateLP();
          checkForm(`${trackId}/${s}/g${g}/${min}min`, min);
          const meta = $("#meta").textContent;
          ok(meta.includes("lesson plan(s)"), `${trackId}/${s}/g${g}: meta ${meta}`);
        }
      }
    }
  }
}

(async () => {
  await sleep(800); // let the initial course pack generate

  /* ---- 0. the app booted with the default (course pack) document ---- */
  ok($("#doc").textContent.length > 0, "app: no content after boot");
  ok($("#lpWrap").style.display === "none", "lpWrap must start hidden");
  ok($("#ddSheets").style.display !== "none", "sheets must start visible");

  /* ---- 1. switch to Lesson plan ---- */
  $("#dtype .sess[data-d='lp']").click();
  await sleep(30);
  ok($("#lpWrap").style.display !== "none", "lpWrap not shown in LP mode");
  ok($("#ddSheets").style.display === "none", "sheets still shown in LP mode");
  ok($("#ddParts").style.display === "none", "parts still shown in LP mode");
  ok($("#dtypeNote").textContent.includes("Lesson plan"), "dtype note not updated");
  ok($("#dtype .sess[data-d='lp']").className.includes("on"), "lp tab not marked on");

  /* ---- 2. national curriculum matrix, all durations ---- */
  console.log("national curriculum matrix...");
  await matrix("curr");

  /* ---- 3. WASSCE matrix ---- */
  console.log("WASSCE matrix...");
  await matrix("wa");

  /* ---- 4. teacher name from Customization is printed ---- */
  $("#tracks .track[data-t='curr']").click();
  await sleep(30);
  $("#cvTeacher").value = "Mr. Johnson";
  $("#cvTeacher").dispatchEvent(new window.Event("input", { bubbles: true }));
  $("#grade").value = 1;
  $("#grade").dispatchEvent(new window.Event("change", { bubbles: true }));
  const pks = $$("#periods .pk");
  pks.forEach(c => c.checked = false);
  if (pks[0]) pks[0].checked = true;
  $("#lpMin").value = 40;
  $("#lpMin").dispatchEvent(new window.Event("change", { bubbles: true }));
  await generateLP();
  ok($("#doc").textContent.includes("Teacher: Mr. Johnson"), "teacher name not printed");

  /* ---- 5. .docx export contains the filled form ---- */
  window.__capturedBlob = null;
  $("#docx").click();
  await sleep(150);
  const blob = window.__capturedBlob;
  ok(!!blob, "docx blob not captured");
  if (blob) {
    const bytes = new Uint8Array(await blob.arrayBuffer());
    ok(bytes[0] === 0x50 && bytes[1] === 0x4b, "not a zip");
    const txt = Buffer.from(bytes).toString("latin1");
    ok(txt.includes("word/document.xml"), "docx missing document.xml");
    ["TEACHER", "LESSON PLAN", "Presentation &amp; Procedures", "Initial Activities",
     "Summary Conclusion", "Evaluation", "Assignment", "Teacher Aids",
     "Teaching Method", "Duration: 40 minutes"].forEach(s =>
      ok(txt.includes(s), "docx missing: " + s));
    console.log("docx size:", bytes.length, "bytes");
  }

  /* ---- 6. switch back to Course pack: original behaviour intact ---- */
  $("#dtype .sess[data-d='pack']").click();
  await sleep(30);
  ok($("#lpWrap").style.display === "none", "lpWrap still shown in pack mode");
  ok($("#ddSheets").style.display !== "none", "sheets not restored in pack mode");
  await generateLP();
  const packText = $("#doc").textContent;
  ok(packText.length > 0, "pack mode produced no content");
  ok($("#meta").textContent.includes("unit(s)"), "pack meta wrong: " + $("#meta").textContent);

  /* ---- 7. page errors / jsdom errors ---- */
  const real = jsdomErrors.filter(m =>
    !/not implemented/i.test(m) && !/Could not parse CSS/i.test(m));
  ok(real.length === 0, "jsdom errors: " + real.slice(0, 3).join(" | "));

  console.log(fails === 0 ? "\nALL LESSON-PLAN CHECKS PASSED" : `\n${fails} FAILURES`);
  process.exit(fails === 0 ? 0 : 1);
})().catch(e => { console.error("harness error:", e); process.exit(2); });
