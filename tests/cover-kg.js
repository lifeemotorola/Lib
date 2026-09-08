/* Node check for the kindergarten cover-page levels and the cover designer.
   Zero-dependency: run with  node tests/cover-kg.js

   Executes the real source sliced out of app.js — the level/band model, the
   cover-designer state and normalizer, designVars() and coverArtHtml() — plus
   the real cover-text.js defaults, and then checks the built index.html really
   carries the kindergarten artwork and the designer container.

   KG-I and KG-II are cover-page levels: no kindergarten curriculum is
   transcribed on the platform, so these levels must never invent worksheets. */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const coverText = fs.readFileSync(path.join(root, "cover-text.js"), "utf8");

/* ---- slice the real sources ---- */
function slice(src, fromMark, toMark) {
  const a = src.indexOf(fromMark);
  const b = src.indexOf(toMark, a + 1);
  if (a < 0 || b <= a) {
    console.error(`FAIL: could not slice "${fromMark.slice(0, 40)}" from app.js`);
    process.exit(1);
  }
  return src.slice(a, b);
}

const levelsSrc = slice(app,
  "  /* ---------------- education bands and levels",
  '  var curBand = "el";');
const designSrc = slice(app,
  "  function defaultDesign() {",
  "  /* ---------------- uploaded artwork");
const renderSrc = slice(app,
  "  function esc(s) {",
  "  /* Renders to real A4 sheets");

const sandbox = {
  console,
  window: {},
  $: () => null,
  /* cover-text.js's paint() bails out when the field container is absent */
  document: { querySelector: () => null, getElementById: () => null, createElement: () => ({ style: {} }) },
};
vm.createContext(sandbox);
/* cover-text.js registers COVER_TEXT on its root (window) */
vm.runInContext(coverText, sandbox, { filename: "cover-text.js" });
/* in the page, window.COVER_TEXT is also a global; app.js refers to it bare */
sandbox.COVER_TEXT = sandbox.window.COVER_TEXT;
vm.runInContext(levelsSrc + "\n" + designSrc + "\n" + renderSrc + "\n" +
  "window.__kg = { KG_LEVELS: KG_LEVELS, BANDS: BANDS, bandOf: bandOf, kgOf: kgOf,\n" +
  "  isKG: isKG, gradeText: gradeText, levelName: levelName, COVER_TPL: COVER_TPL,\n" +
  "  EMBLEMS: EMBLEMS, defaultDesign: defaultDesign, normalizeDesign: normalizeDesign,\n" +
  "  DESIGN_COLORS: DESIGN_COLORS, DESIGN_SHOWS: DESIGN_SHOWS,\n" +
  "  designVars: designVars, coverArtHtml: coverArtHtml };\n",
  sandbox, { filename: "app.js (sliced)" });

const K = sandbox.window.__kg;
const COVER_TEXT = sandbox.window.COVER_TEXT;

let fails = 0;
function ok(cond, msg) {
  if (cond) console.log("  ok  " + msg);
  else { fails++; console.log("  FAIL " + msg); }
}

if (!K) {
  console.error("FAIL: the sliced sources did not register window.__kg");
  process.exit(1);
}

/* ------------------------------------------------------------------ */
console.log("\n-- kindergarten levels and bands --");
ok(JSON.stringify(K.KG_LEVELS.map((l) => [l.id, l.label, l.name])) ===
   JSON.stringify([["kg1", "KG-I", "Kindergarten I"], ["kg2", "KG-II", "Kindergarten II"]]),
   "KG_LEVELS are kg1/KG-I and kg2/KG-II");
ok(K.BANDS[0].id === "kg" && K.BANDS[0].kg === true, "a Kindergarten band exists first in BANDS");
ok(K.bandOf("kg1").id === "kg" && K.bandOf("kg2").id === "kg", "both KG levels map to the Kindergarten band");
ok(K.bandOf(1).id === "el" && K.bandOf(6).id === "el" &&
   K.bandOf(7).id === "jh" && K.bandOf(12).id === "sh", "Grades 1-12 still map to their own bands");
ok(K.bandOf(99).id === "el", "an unknown grade falls back to Elementary, never to Kindergarten");
ok(K.gradeText("kg1") === "KG-I" && K.gradeText("kg2") === "KG-II" && K.gradeText(3) === "Grade 3",
   "gradeText() names a level for a cover: KG-I / KG-II / Grade 3");
ok(K.levelName("kg2") === "Kindergarten II" && K.levelName(3) === "Grade 3",
   "levelName() gives the long form for running heads");

/* ------------------------------------------------------------------ */
console.log("\n-- cover designer state --");
const blank = K.defaultDesign();
ok(K.normalizeDesign(undefined).titleScale === 100 &&
   K.normalizeDesign(null).band === "" &&
   K.normalizeDesign("nonsense").emblem === "",
   "a missing or corrupt design falls back to the template defaults");
ok(K.normalizeDesign({ band: "#A11B1B" }).band === "#a11b1b", "a custom colour is accepted and lower-cased");
ok(K.normalizeDesign({ band: "red" }).band === "" && K.normalizeDesign({ band: "#12345" }).band === "",
   "a non-hex colour is rejected rather than passed into the sheet");
ok(K.normalizeDesign({ titleScale: 900 }).titleScale === 150 &&
   K.normalizeDesign({ titleScale: 3 }).titleScale === 60 &&
   K.normalizeDesign({ titleScale: "x" }).titleScale === 100,
   "the title scale is clamped to 60-150%");
ok(K.normalizeDesign({ emblem: "em-bogus" }).emblem === "" &&
   K.normalizeDesign({ emblem: "em-star" }).emblem === "em-star",
   "only a registered emblem is accepted");
ok(K.normalizeDesign({ show: { panel: false } }).show.panel === false &&
   K.normalizeDesign({ show: { panel: "no" } }).show.panel === true &&
   K.normalizeDesign({ show: {} }).show.org === true,
   "show/hide switches survive a partial or malformed save");
ok(K.DESIGN_COLORS.length === 5 && K.DESIGN_SHOWS.length === 11,
   `5 designer colours and 11 show/hide switches (${K.DESIGN_COLORS.length}/${K.DESIGN_SHOWS.length})`);
ok(K.DESIGN_COLORS.indexOf("soft") < 0,
   "no colour control is offered for a variable the cover does not consume");
ok(K.EMBLEMS.length === 8 && K.EMBLEMS.some((e) => e.id === "em-blocks"),
   "eight emblems, including the kindergarten building blocks");
ok(!!K.COVER_TPL.kg && K.COVER_TPL.kg.emblem === "em-blocks",
   "a Kindergarten cover template exists and defaults to the blocks emblem");

/* ------------------------------------------------------------------ */
console.log("\n-- designer output on the sheet --");
const kgBlock = {
  k: "covart", tpl: "kg", school: "Little Stars Academy", motto: "",
  title1: "ENGLISH", title2: "Kindergarten II Cover Page",
  line: "Kindergarten II · English · Liberian National Curriculum",
  subject: "ENGLISH", klass: "KG-II", teacher: "", pupil: "",
  term: "", year: "2026", crest: "", note: "", logo: "",
  bg: "data:image/png;base64,AAAA", bgMime: "image/png", bgFade: 62,
  design: K.normalizeDesign({ band: "#a11b1b", titleScale: 125 }),
  kg: true, teacherCopy: true,
};
const html = K.coverArtHtml(kgBlock);
ok(/^<div class="cvart cv-kg hasbg"/.test(html), "the kindergarten template renders as .cvart.cv-kg.hasbg");
ok(html.indexOf("--cv-band:#a11b1b") > 0 && html.indexOf("--cv-ts:1.250") > 0,
   "the custom band colour and the 125% title scale are written as CSS variables");
ok(html.indexOf("#i-em-blocks") > 0, "the template's blocks emblem is drawn");
ok(html.indexOf(">KG-II<") > 0, "the Class row carries the KG level: KG-II");
ok(html.indexOf("Kindergarten II Cover Page") > 0 &&
   html.indexOf("Kindergarten II \u00b7 English \u00b7 Liberian National Curriculum") > 0,
   "the subtitle and the level line are printed verbatim");
ok(html.indexOf('class="cv-panel dash"') > 0 && html.indexOf("cv-strip") > 0,
   "the details panel and the colour strip are present by default");

const starBlock = Object.assign({}, kgBlock, {
  design: K.normalizeDesign({ emblem: "em-star", show: { panel: false, strip: false, dots: false, org: false, note: false, level: false } }),
});
const html2 = K.coverArtHtml(starBlock);
ok(html2.indexOf("#i-em-star") > 0, "a chosen emblem replaces the template's own");
["cv-panel", "cv-strip", "cv-dots", "cv-org", "cv-note", "cv-sub"].forEach(function (cls) {
  ok(html2.indexOf(cls) < 0, `hiding "${cls}" removes it from the sheet`);
});
ok(K.designVars(K.defaultDesign()) === "",
   "an untouched design writes no inline style, so the template is pixel-identical");

/* ------------------------------------------------------------------ */
console.log("\n-- cover markup is well formed --");
/* The cover sheet is injected straight into #doc as markup. A single unclosed
   tag makes the browser adopt every later sheet as a child of the cover, and
   `.page.coverpage .phead{display:none}` — a descendant selector — then hides
   the running head on every page in the pack. So the fragment must balance. */
const VOID = { area: 1, base: 1, br: 1, col: 1, embed: 1, hr: 1, img: 1, input: 1,
               link: 1, meta: 1, param: 1, source: 1, track: 1, wbr: 1 };
function unbalanced(fragment) {
  const stack = [];
  const re = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>/g;
  let m;
  while ((m = re.exec(fragment))) {
    if (m[0].slice(0, 4) === "<!--") continue;
    const tag = m[2].toLowerCase();
    if (m[1]) {
      if (stack.pop() !== tag) return `</${tag}> closes the wrong element`;
    } else if (!m[4] && !VOID[tag]) {
      stack.push(tag);
    }
  }
  return stack.length ? `<${stack[stack.length - 1]}> is never closed` : "";
}
ok(unbalanced("<div class=\"a\"><div class=\"b\"></div>") === "<div> is never closed",
   "the balance check really does catch an unclosed div");

const SHOW_KEYS = Object.keys(K.defaultDesign().show);
const combos = [{}].concat(SHOW_KEYS.map(function (k) { const o = {}; o[k] = false; return o; }))
  .concat([SHOW_KEYS.reduce(function (o, k) { o[k] = false; return o; }, {})]);
const bad = [];
let cases = 0;
Object.keys(K.COVER_TPL).forEach(function (id) {
  combos.forEach(function (show) {
    cases++;
    /* exercise both artwork paths too: a background image and an uploaded logo */
    [{}, { bg: "data:image/png;base64,AAAA", bgFade: 62 }, { logo: "data:image/png;base64,BBBB" },
     { crest: "L N C" }].forEach(function (extra) {
      cases++;
      const frag = K.coverArtHtml(Object.assign({}, kgBlock, extra, {
        tpl: id,
        design: K.normalizeDesign(Object.assign({ show: show },
          extra.crest ? { emblem: "em-apple" } : {})),
      }));
      const err = unbalanced(frag);
      if (err) bad.push(`${id} ${JSON.stringify(show)} ${Object.keys(extra)}: ${err}`);
    });
  });
});
ok(bad.length === 0,
   `cover markup balances for all ${cases} template / show / artwork combinations` +
   (bad.length ? " — " + bad.slice(0, 4).join("; ") : ""));

/* ------------------------------------------------------------------ */
console.log("\n-- kindergarten cover wording (cover-text.js) --");
const text = COVER_TEXT.prepare(
  { kg: true, levelName: "Kindergarten I", levelLabel: "KG-I", grade: "kg1", subjectId: "en" },
  { title: "ENGLISH \u2014 KG-I", sub: "", line: "Kindergarten I \u00b7 English \u00b7 Liberian National Curriculum" },
  { term: "" }, false);
ok(text.subtitle === "Kindergarten I Cover Page", "a KG cover is titled a cover page: " + text.subtitle);
ok(text.organization === "Kindergarten \u00b7 Liberian National Curriculum",
   "the footer never claims transcribed curriculum content: " + text.organization);
ok(text.subject === "ENGLISH", "the subject is still taken from the document title: " + text.subject);
const gradeText = COVER_TEXT.prepare({ grade: 3, subjectId: "en" }, { title: "ENGLISH \u2014 GRADE 3" }, {}, false);
ok(gradeText.subtitle === "Pupil Workbook", "a graded pack keeps the ordinary workbook subtitle");

/* ------------------------------------------------------------------ */
console.log("\n-- artwork and build --");
const png = fs.readFileSync(path.join(root, "assets/covers/kg.png"));
const w = png.readUInt32BE(16), h = png.readUInt32BE(20);
ok(png.slice(1, 4).toString() === "PNG", "assets/covers/kg.png is a PNG");
ok(w === 480 && h === 640, `kg.png is 480 x 640 like every other cover (${w} x ${h})`);
ok(png[25] === 3, "kg.png is an indexed (palette) PNG, so the single-file app stays small");
const build = fs.readFileSync(path.join(root, "build.sh"), "utf8");
ok(/for id in [^;]*\bkg;/.test(build), "build.sh inlines kg.png into SUBJECT_COVER_ART");

const built = path.join(root, "index.html");
if (fs.existsSync(built)) {
  const idx = fs.readFileSync(built, "utf8");
  ok(idx.indexOf('"kg":{url:"data:image/png;base64,') > 0,
     "the built index.html carries the kindergarten artwork inline");
  ok(idx.indexOf('id="cvDesigner"') > 0, "the built page has the cover designer container");
  ok(idx.indexOf('id="i-em-blocks"') > 0 && idx.indexOf('id="i-em-star"') > 0 &&
     idx.indexOf('id="i-em-pencil"') > 0, "the built page carries the new emblem symbols");
  ok(idx.indexOf("cv-kg") > 0, "the built page carries the Kindergarten template styles");
} else {
  console.log("  -- index.html not built yet; run bash build.sh to check the deliverable --");
}

console.log(fails ? `\nFAILED (${fails})` : "\nOK: KG-I / KG-II cover-page levels and the cover designer all check out.");
process.exit(fails ? 1 : 0);
