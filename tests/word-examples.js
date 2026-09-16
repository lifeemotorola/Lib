/* Node check for the per-word/per-term worked examples:
   1. Every mathematics term in data-ma.js / data-ma79.js / data-ma-sh.js
      carries a baked ex { q, steps (>=2), a }.
   2. GEN_EN.wordExample exists and, for every English word that appears in
      its own example sentence, returns a full cloze worked example
      (blanked sentence, >=2 steps, answer = the original sentence).
   3. UNIT_NOTES(..., "ma") / UNIT_NOTES(..., "en") interleave a worked
      example after every new term/word: the rendered notes must carry one
      "Answer:" line per example-bearing term/word, and — when no subject
      marker is passed — must stay exactly the old verbatim output.
   Run:  node tests/word-examples.js */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");

const sandbox = { window: {}, console };
vm.createContext(sandbox);
const run = (f) => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), sandbox, { filename: f });

/* 1 - math terms all carry a baked ex */
run("data-ma.js"); run("data-ma79.js"); run("data-ma-sh.js");
const MA = vm.runInContext("MA_CURRICULUM", sandbox);
if (!Array.isArray(MA) || MA.length < 90) { console.error("FAIL: MA_CURRICULUM did not load"); process.exit(1); }
let terms = 0, withEx = 0;
for (const u of MA) for (const t of u.terms || []) {
  terms++;
  if (t.ex && typeof t.ex.q === "string" && Array.isArray(t.ex.steps) && t.ex.steps.length >= 2 &&
      typeof t.ex.a === "string" && t.ex.a) withEx++;
}
if (withEx !== terms) {
  console.error("FAIL: math terms without a full baked ex:", terms - withEx, "of", terms);
  process.exit(1);
}

/* 2 - English word examples */
run("data-eg.js"); run("data-en.js");
run("gen-en.js");
const GEN_EN = sandbox.window.GEN_EN;
/* app.js references the engines by bare global name (browsers resolve them
   through window); mirror that in the sandbox */
sandbox.GEN_EN = GEN_EN;
if (!GEN_EN || typeof GEN_EN.wordExample !== "function") {
  console.error("FAIL: GEN_EN.wordExample not registered");
  process.exit(1);
}
const EN = vm.runInContext("EN_CURRICULUM", sandbox);
let enWords = 0, enEx = 0, enBad = 0;
for (const u of EN) for (const w of u.words || []) {
  enWords++;
  const e = GEN_EN.wordExample(w);
  if (!e) continue;
  enEx++;
  const ok = e.q.indexOf("__________") >= 0 && Array.isArray(e.steps) && e.steps.length >= 2 &&
    e.a === w.x && e.q.indexOf("meaning") >= 0;
  if (!ok) { enBad++; if (enBad <= 5) console.error("  bad wordExample:", w.w, JSON.stringify(e.q)); }
}
if (enBad) { console.error("FAIL:", enBad, "malformed wordExample result(s)"); process.exit(1); }
if (enEx < enWords * 0.8) {
  console.error("FAIL: only", enEx, "of", enWords, "English words yield a worked example (expected most)");
  process.exit(1);
}

/* 3 - UNIT_NOTES interleaving (same source slice the verbatim test uses) */
const aS = app.indexOf("/* ---------------- Study Notes & Explanations");
const aE = app.indexOf("/* ---------------- session mode");
const bS = app.indexOf("function esc(s)");
const bE = app.indexOf("var runhead");
if (aS < 0 || aE <= aS || bS < 0 || bE <= bS) { console.error("FAIL: could not slice app.js sources"); process.exit(1); }
vm.runInContext(app.slice(aS, aE) + "\n" + app.slice(bS, bE), sandbox);
const NOTES = sandbox.window.UNIT_NOTES;
if (typeof NOTES !== "function") { console.error("FAIL: UNIT_NOTES not registered"); process.exit(1); }
const blockHtml = vm.runInContext("blockHtml", sandbox);

const countAnswers = (blocks) => blocks.filter(b => b.k === "p" && /^\*?\*?Answer:/.test(b.t || "")).length;

/* math: every term's example appears, interleaved or in the remaining section */
let maBad = 0, maUnits = 0;
for (const u of MA) {
  const n = (u.terms || []).filter(v => v.ex && v.ex.q && (v.ex.steps || []).length >= 2 && v.ex.a).length;
  if (!n) continue;
  maUnits++;
  const blocks = NOTES(u, 1, "ma");
  if (!blocks.length) { maBad++; continue; }
  const html = JSON.stringify(blocks);
  if (countAnswers(blocks) !== n) {
    maBad++;
    if (maBad <= 5) console.error("  math answers:", countAnswers(blocks), "expected", n, "in", u.grade, u.period, u.title);
  }
  if (!html.includes("Worked example \u2014") && !html.includes("Worked Examples \u2014 Remaining New Words")) {
    maBad++;
    if (maBad <= 5) console.error("  no worked-example block in", u.grade, u.period, u.title);
  }
}
if (maBad) { console.error("FAIL:", maBad, "math unit(s) missing interleaved worked examples"); process.exit(1); }

/* english: every example-yielding word appears */
let enBadUnits = 0, enUnits = 0;
for (const u of EN) {
  const n = (u.words || []).filter(w => GEN_EN.wordExample(w)).length;
  if (!n) continue;
  enUnits++;
  const blocks = NOTES(u, 1, "en");
  if (!blocks.length) { enBadUnits++; continue; }
  if (countAnswers(blocks) !== n) {
    enBadUnits++;
    if (enBadUnits <= 5) console.error("  en answers:", countAnswers(blocks), "expected", n, "in", u.grade, u.period, u.title);
  }
}
if (enBadUnits) { console.error("FAIL:", enBadUnits, "English unit(s) missing interleaved worked examples"); process.exit(1); }

/* the interleaved blocks render through the real renderer: bold markup
   converted, no raw ** left in the HTML */
const u1 = MA[0];
const taggedHtml = NOTES(u1, 1, "ma").map(blockHtml).join("\n");
if (!/<b>Worked example/.test(taggedHtml)) {
  console.error("FAIL: worked-example label not rendered bold");
  process.exit(1);
}
if (taggedHtml.indexOf("**") >= 0) {
  console.error("FAIL: raw ** left in rendered interleaved notes");
  process.exit(1);
}

/* no subject marker: output must be exactly the old verbatim page
   (h2 + the study blocks + rule + space, nothing else) */
const u0 = MA[0];
const plain = NOTES(u0, 1);
const tagged = NOTES(u0, 1, "ma");
if (JSON.stringify(plain) === JSON.stringify(tagged)) {
  console.error("FAIL: subject-less UNIT_NOTES identical to tagged output — interleaving not applied");
  process.exit(1);
}
const plainShape = plain.length === u0.study.length + 3 &&
  plain[0].k === "h2" && plain[plain.length - 2].k === "rule" && plain[plain.length - 1].k === "space" &&
  plain.slice(1, 1 + u0.study.length).every((b, i) => JSON.stringify(b) === JSON.stringify(u0.study[i]));
if (!plainShape) {
  console.error("FAIL: subject-less UNIT_NOTES is not the plain verbatim study page");
  process.exit(1);
}

console.log("OK:", terms, "math terms carry a full baked worked example;");
console.log("OK:", enEx, "of", enWords, "English words yield a full cloze worked example;");
console.log("OK: worked examples interleaved after every new term/word in", maUnits, "math unit(s) and", enUnits, "English unit(s); subject-less output unchanged.");
