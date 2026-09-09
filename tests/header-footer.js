/* Node check for the header & footer designer.
   Zero-dependency: run with  node tests/header-footer.js

   Executes the real source sliced out of app.js — the HF state model, the
   normalize functions, applyHF() and bandTop/bandBottom — and then checks
   that the built index.html really carries the new designer containers, the
   platform bottom-bar markup and the new icon symbols. */

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const body = fs.readFileSync(path.join(root, "body.html"), "utf8");

/* ---- slice the real sources ---- */
function slice(src, fromMark, toMark) {
  const a = src.indexOf(fromMark);
  if (a < 0) { console.error(`FAIL: could not find start "${fromMark.slice(0, 60)}"`); process.exit(1); }
  const b = src.indexOf(toMark, a + 1);
  if (b <= a) { console.error(`FAIL: could not find end "${toMark.slice(0, 60)}"`); process.exit(1); }
  return src.slice(a, b);
}

const hfDefaultsSrc = slice(app,
  "  function defaultSheetHF() {",
  "  function normalizeSheetHF(h) {");
const normalizeSrc = slice(app,
  "  function normalizeSheetHF(h) {",
  "  window.PACK_HF_STATE = HF;");
const applySrc = slice(app,
  "  function applyHF() {",
  "  window.PACK_APPLY_HF = applyHF;");
/* bandTop / bandBottom read `runhead` which is a var declared in app.js. The
   slice below stops BEFORE that var so the harness can assign its own. */
const renderSrc = slice(app,
  "  function bandTop(per) {",
  "  /* ---------------- pagination ----------------");

const sandbox = {
  console,
  window: {},
  /* every stub returns benign values; the harness never inspects paint output */
  $: () => null,
  /* syncBadges is defined later in app.js but applyHF calls it; stub it so
     the call resolves harmlessly under the test stub */
  syncBadges: () => {},
  /* periodLabel() is needed by bandTop when a period is passed */
  periodLabel: function (p) {
    if (!p) return "";
    if (p === "exam") return "Examinations";
    return "Period " + p;
  },
  /* esc() escapes HTML; bandTop/bandBottom call it on user text */
  esc: function (s) { return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); },
  document: {
    body: {
      setAttribute: () => {}, classList: { toggle: () => {} },
      style: { setProperty: () => {} },
      querySelector: () => null
    },
    documentElement: { style: { setProperty: () => {} } },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createElement: () => ({ style: { setProperty: () => {} }, classList: { toggle: () => {} }, dataset: {} }),
    addEventListener: () => {}
  },
  localStorage: {
    _data: {},
    getItem: function (k) { return this._data[k] || null; },
    setItem: function (k, v) { this._data[k] = String(v); },
    removeItem: function (k) { delete this._data[k]; }
  }
};
sandbox.runHF = function (src) { return vm.runInContext(src, sandbox); };
vm.createContext(sandbox);

vm.runInContext(hfDefaultsSrc + "\n" + normalizeSrc + "\n" + applySrc + "\n" +
  "var runhead = { left: '', right: '', foot: '' };\n" + renderSrc + "\n" +
  "window.__hf = { defaultSheetHF: defaultSheetHF, defaultPlatHF: defaultPlatHF,\n" +
  "  normalizeSheetHF: normalizeSheetHF, normalizePlatHF: normalizePlatHF,\n" +
  "  HF: HF, applyHF: applyHF, bandTop: bandTop, bandBottom: bandBottom };\n",
  sandbox, { filename: "app.js (HF sliced)" });

const K = sandbox.window.__hf;

let fails = 0;
function ok(cond, msg) {
  if (cond) console.log("  ok  " + msg);
  else { fails++; console.log("  FAIL " + msg); }
}

if (!K) {
  console.error("FAIL: the sliced sources did not register window.__hf");
  process.exit(1);
}

/* ------------------------------------------------------------------ */
console.log("\n-- default shapes --");
const sheetDef = K.defaultSheetHF();
ok(sheetDef.on === true, "sheet HF defaults to on");
ok(sheetDef.hdr.on === true && sheetDef.hdr.l === "" && sheetDef.hdr.r === "",
   "sheet header defaults: visible, both sides empty (auto text on the page)");
ok(sheetDef.hdr.fs === 9 && sheetDef.hdr.col === "" && sheetDef.hdr.bold === true,
   "sheet header overrides: 9pt, theme colour, bold left");
ok(sheetDef.ftr.on === true && sheetDef.ftr.l === "" && sheetDef.ftr.r === "" &&
   sheetDef.ftr.fs === 9 && sheetDef.ftr.pg === true,
   "sheet footer defaults: visible, page number on, both sides empty");

const platDef = K.defaultPlatHF();
ok(platDef.hdr.on === true && platDef.hdr.crest === true && platDef.hdr.install === true,
   "platform top header defaults: visible, crest on, install button on");
ok(platDef.hdr.fs === 1.35 && platDef.hdr.bg === "",
   "platform top header keeps the CSS default size and colour");
ok(platDef.ftr.on === false, "platform bottom footer defaults to off (the new bottom bar is opt-in)");
ok(platDef.ftr.l === "Liberian National Curriculum" &&
   platDef.ftr.r === "Course Pack Generator",
   "platform bottom footer has sensible default text on both sides");

/* ------------------------------------------------------------------ */
console.log("\n-- normalize fills missing keys --");
const fromEmpty = K.normalizeSheetHF(null);
ok(fromEmpty.on === true && fromEmpty.hdr.fs === 9 && fromEmpty.ftr.pg === true,
   "normalize of null / undefined returns the full default shape");

const partial = K.normalizeSheetHF({ on: false, hdr: { l: "Hello" } });
ok(partial.on === false, "a stored off-switch survives normalize");
ok(partial.hdr.l === "Hello", "a stored header text survives normalize");
ok(partial.hdr.on === true && partial.hdr.fs === 9,
   "the rest of the header fills in with sensible defaults");

const platPartial = K.normalizePlatHF({ hdr: { on: false, title: "My Title" } });
ok(platPartial.hdr.on === false && platPartial.hdr.title === "My Title",
   "platform header off-switch and a custom title survive normalize");
ok(platPartial.hdr.crest === true && platPartial.ftr.on === false,
   "the rest of the platform state fills in with sensible defaults");

/* ------------------------------------------------------------------ */
console.log("\n-- normalize clamps numeric ranges --");
ok(K.normalizeSheetHF({ hdr: { fs: -3 } }).hdr.fs === 7,
   "sheet header font size is clamped at 7pt minimum");
ok(K.normalizeSheetHF({ hdr: { fs: 999 } }).hdr.fs === 14,
   "sheet header font size is clamped at 14pt maximum");
ok(K.normalizeSheetHF({ hdr: { fs: 9.6 } }).hdr.fs === 9.5,
   "sheet header font size is rounded to 0.5pt steps");
ok(K.normalizePlatHF({ hdr: { fs: 0.1 } }).hdr.fs === 0.85,
   "platform header font size is clamped at 0.85rem minimum");
ok(K.normalizePlatHF({ ftr: { fs: 9 } }).ftr.fs === 1.4,
   "platform footer font size is clamped at 1.4rem maximum");

/* ------------------------------------------------------------------ */
console.log("\n-- normalize rejects bad colours --");
ok(K.normalizeSheetHF({ hdr: { col: "red" } }).hdr.col === "" &&
   K.normalizeSheetHF({ hdr: { col: "#12345" } }).hdr.col === "",
   "non-hex colours are dropped rather than passed through");
ok(K.normalizeSheetHF({ hdr: { col: "#A11B1B" } }).hdr.col === "#a11b1b",
   "a valid hex colour is accepted and lower-cased");

/* ------------------------------------------------------------------ */
console.log("\n-- normalize caps the user text --");
const longText = "x".repeat(500);
const trimmed = K.normalizeSheetHF({ hdr: { l: longText, r: longText } });
ok(trimmed.hdr.l.length === 240 && trimmed.hdr.r.length === 240,
   "header custom text is capped at 240 characters");

/* ------------------------------------------------------------------ */
console.log("\n-- applyHF is callable and writes no DOM errors --");
let applyErr = null;
try { K.applyHF(); } catch (e) { applyErr = e; }
ok(!applyErr, "applyHF() runs to completion against a minimal DOM stub" +
   (applyErr ? " - " + applyErr.message : ""));

/* ------------------------------------------------------------------ */
console.log("\n-- bandTop / bandBottom honour HF custom text --");
/* Force HF into a known custom state and rebuild the header / footer mark-up
   so we can inspect exactly what the sheet is given. */
K.HF.sheet = K.normalizeSheetHF({
  hdr: { l: "CUSTOM-LEFT", r: "CUSTOM-RIGHT" },
  ftr: { l: "CUSTOM-FL", r: "CUSTOM-FR", pg: true }
});
K.HF.plat = K.normalizePlatHF({});
sandbox.runhead = { left: "English \u00b7 Grade 5", right: "Teacher's Copy",
                    foot: "Liberian Elementary Curriculum \u00b7 Grade 5" };
const html = sandbox.runHF("bandTop(\"II\") + \"@@\" + bandBottom(3, 9)");
ok(html.indexOf("CUSTOM-LEFT") > 0, "bandTop writes the custom left text into .phdr-l");
ok(html.indexOf("CUSTOM-RIGHT") > 0, "bandTop writes the custom right text into .phdr-r");
ok(html.indexOf("CUSTOM-FL") > 0, "bandBottom writes the custom footer left into .pftr-l");
ok(html.indexOf("CUSTOM-FR") > 0, "bandBottom writes the custom footer right into .pftr-r");
ok(html.indexOf("phdr-l") > 0 && html.indexOf("phdr-r") > 0 && html.indexOf("pftr-l") > 0,
   "the per-element wrapper classes (.phdr-l / .phdr-r / .pftr-l) are present for the show/hide CSS");

/* When the user clears their custom right footer text, the auto page number
   kicks back in and the pftr-pg span reappears. */
K.HF.sheet = K.normalizeSheetHF({ hdr: {}, ftr: { pg: true } });
const auto = sandbox.runHF("bandBottom(3, 9)");
ok(auto.indexOf("Page 3 of 9") > 0, "with no custom right footer the page number is restored");
ok(auto.indexOf("pftr-pg") > 0, "the page-number wrapper class is present in the auto case");

/* ------------------------------------------------------------------ */
console.log("\n-- HF round-trips through JSON the way localStorage would --");
sandbox.localStorage._data = {};
const stored = JSON.stringify({
  sheet: K.normalizeSheetHF({ hdr: { l: "Saved", r: "Right" }, ftr: { on: true } }),
  plat: K.normalizePlatHF({ ftr: { on: true, l: "Bottom L", r: "Bottom R" } })
});
sandbox.localStorage._data["lncpg.hf.v1"] = stored;
const round = JSON.parse(sandbox.localStorage._data["lncpg.hf.v1"]);
ok(round.sheet.hdr.l === "Saved" && round.sheet.hdr.r === "Right",
   "the saved sheet header text survives the localStorage round trip");
ok(round.plat.ftr.on === true && round.plat.ftr.l === "Bottom L",
   "the saved platform footer survives the localStorage round trip");

/* ------------------------------------------------------------------ */
console.log("\n-- designer containers exist in body.html --");
ok(/id="ddSheetHF"/.test(body), "the sheet header/footer designer <details> block is present");
ok(/id="ddPlatHF"/.test(body), "the platform chrome designer <details> block is present");
ok(/id="shHfOn"/.test(body) && /id="shHfHdrOn"/.test(body) && /id="shHfHdrL"/.test(body) &&
   /id="shHfHdrFs"/.test(body) && /id="shHfHdrCol"/.test(body) && /id="shHfHdrColAuto"/.test(body),
   "the sheet designer carries every header control by id");
ok(/id="shHfFtrOn"/.test(body) && /id="shHfFtrL"/.test(body) && /id="shHfPgNum"/.test(body) &&
   /id="shHfReset"/.test(body),
   "the sheet designer carries every footer control by id, plus the master reset");
ok(/id="platHdOn"/.test(body) && /id="platHdTitle"/.test(body) && /id="platHdSub"/.test(body) &&
   /id="platHdFs"/.test(body) && /id="platHdBg"/.test(body) && /id="platHdCrestOn"/.test(body) &&
   /id="platHdInstall"/.test(body),
   "the platform top-bar designer carries every control by id");
ok(/id="platFtOn"/.test(body) && /id="platFtL"/.test(body) && /id="platFtR"/.test(body) &&
   /id="platFtFs"/.test(body) && /id="platFtBg"/.test(body) && /id="platHfReset"/.test(body),
   "the platform bottom-bar designer carries every control by id, plus the master reset");

/* ------------------------------------------------------------------ */
console.log("\n-- live-preview spans exist in body.html --");
ok(/id="shHfPrev"/.test(body) && /id="shHfPrevHL"/.test(body) && /id="shHfPrevHR"/.test(body) &&
   /id="shHfPrevFL"/.test(body) && /id="shHfPrevFR"/.test(body) && /id="shHfPrevPG"/.test(body),
   "the sheet designer carries every live-preview span");
ok(/id="platHdPreview"/.test(body) && /id="platFtPreview"/.test(body),
   "the platform designer carries both live-preview blocks");

/* ------------------------------------------------------------------ */
console.log("\n-- platform bottom-bar markup exists in body.html --");
ok(/id="botFoot"/.test(body) && /id="botFootL"/.test(body) && /id="botFootR"/.test(body),
   "the new bottom-bar <footer id=\"botFoot\"> is in the markup, with L/R spans");

/* ------------------------------------------------------------------ */
console.log("\n-- built index.html carries the designer --");
const built = path.join(root, "index.html");
if (fs.existsSync(built)) {
  const idx = fs.readFileSync(built, "utf8");
  ok(idx.indexOf('id="ddSheetHF"') > 0, "index.html inlines the sheet designer <details>");
  ok(idx.indexOf('id="ddPlatHF"') > 0, "index.html inlines the platform designer <details>");
  ok(idx.indexOf('id="botFoot"') > 0, "index.html inlines the new bottom bar");
  ok(/PACK_HF_STATE/.test(idx), "index.html exposes HF on the window");
  ok(/PACK_APPLY_HF/.test(idx), "index.html exposes applyHF() on the window");
  ok(/HF\.sheet/.test(idx) && /HF\.plat/.test(idx),
     "index.html carries the HF state object");
  ok(/defaultSheetHF/.test(idx) && /defaultPlatHF/.test(idx),
     "index.html carries the HF default factories");
  ok(/normalizeSheetHF/.test(idx) && /normalizePlatHF/.test(idx),
     "index.html carries the HF normalizers");
  ok(/window\.PACK_HF_SET/.test(idx), "index.html exposes the HF setter used by the teaching restore path");
  ok(/hf:/.test(idx) && /normalizeSheetHF\(HF\.sheet\)/.test(idx),
     "index.html carries the TEACHING round-trip payload for HF");
  ok(/i-banner/.test(idx) && /i-layout/.test(idx),
     "index.html carries the new icon symbols added for the designer");
} else {
  console.log("  -- index.html not built yet; run bash build.sh to check the deliverable --");
}

console.log(fails ? `\nFAILED (${fails})` : "\nOK: header & footer designer state, markup, and bindings all check out.");
process.exit(fails ? 1 : 0);
