#!/usr/bin/env node
/* Node check for the back-of-the-book author page.
   Zero-dependency: run with  node tests/author-cover.js

   The author sheet is the last page of a fold booklet. It used to be a fixed
   page: always printed, its wording hard-coded, its portrait drawn inside a
   ring. It is now a setting — it can be switched off entirely and every part
   of it edited. These checks run the real sources sliced out of app.js (the
   state model, authorCoverHtml() and buildAuthorBlocks()) against a small fake
   platform, and then confirm that the panel, the styles and the built
   deliverable really carry the change:

     - the page is on by default and disappears from the block list when off
     - the portrait carries no border and no box, and sits on a transparent
       background — the ring is an opt-in switch
     - every line of text (title, subtitle, kicker, bio, mission, contact) and
       every details row (label and value) prints what the teacher typed, and
       falls back to the automatic wording while the field is blank
     - each part can be hidden on its own, including the box around the text
     - an older saved document with no author settings still loads

   Run: node tests/author-cover.js */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const body = fs.readFileSync(path.join(root, "body.html"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const bookJs = fs.readFileSync(path.join(root, "book.js"), "utf8");
const index = fs.readFileSync(path.join(root, "index.html"), "utf8");

let bad = 0;
function test(name, fn) {
  try {
    fn();
    console.log(`  ok  ${name}`);
  } catch (e) {
    console.error(` FAIL ${name}:`, e.message);
    bad++;
  }
}
function group(t) { console.log(`\n-- ${t} --`); }

/* ---------------- slice the real sources ---------------- */
function slice(src, fromMark, toMark) {
  const a = src.indexOf(fromMark);
  if (a < 0) { console.error(`FAIL: start marker not found: ${fromMark.slice(0, 60)}`); process.exit(1); }
  const b = src.indexOf(toMark, a + 1);
  if (b <= a) { console.error(`FAIL: end marker not found: ${toMark.slice(0, 60)}`); process.exit(1); }
  return src.slice(a, b);
}

/* the author state model (defaults, automatic wording, normalize) */
const modelSrc = slice(app, "  var AUTHOR_LIMITS = {", "  var COVER = {");
/* the cover design model, because authorCoverHtml normalizes b.design */
const designSrc = slice(app, "  function defaultDesign() {", "  /* ---------------- author back cover");
const htmlSrc = slice(app, "  function authorCoverHtml(b) {", "  function buildAuthorBlocks(o, sj) {");
const buildSrc = slice(app, "  function buildAuthorBlocks(o, sj) {", "  /* Renders to real A4 sheets.");

const sandbox = {
  console,
  EMBLEMS: [],
  /* the cover template table: authorCoverHtml() reads its class and leaf colour */
  COVER_TPL: { classic: { label: "Classic Cream", cls: "cv-classic", emblem: "em-apple", leaf: "#7fa87f", dash: true } },
  /* stand-ins for the parts of app.js the slices call but do not define */
  esc: s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
  rich: s => String(s == null ? "" : s).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>"),
  leafSvg: () => "<svg class='leaf'></svg>",
  designVars: () => "",
  activeCoverBg: () => null,
  COVER_TEXT: { label: (b, key, fb) => (b && b.labels && Object.prototype.hasOwnProperty.call(b.labels, key) ? b.labels[key] : fb) },
  COVER_IMG: { logo: null, bg: null },
  window: { APP_BRAND: { product: "Easy School Liberia", tutor: "Emmanuel" }, EMMANUEL_AVATAR: "data:image/png;base64,BUNDLED" }
};
vm.createContext(sandbox);
vm.runInContext(designSrc + modelSrc + htmlSrc + buildSrc + `
  var COVER = { tpl: "classic", teacher: "", school: "", term: "", year: "2026",
                bgFade: 62, text: {}, design: defaultDesign(), author: defaultAuthor() };
  this.__ = { COVER: COVER, normalizeAuthor: normalizeAuthor, authorAuto: authorAuto,
              authorText: authorText, defaultAuthor: defaultAuthor,
              authorCoverHtml: authorCoverHtml, buildAuthorBlocks: buildAuthorBlocks,
              shows: window.PACK_AUTHORS ? null : null };
`, sandbox);
const A = sandbox.__;
const normalizeAuthor = A.normalizeAuthor;
const authorText = A.authorText;

/* a block shaped like the one buildAuthorBlocks() puts at the end of a pack */
function block(author) {
  return {
    k: "author", tpl: "classic", school: "Ricks Institute", teacher: "Mary Doe",
    subject: "Mathematics", klass: "Grade 6", term: "First Term", year: "2026",
    logo: "", bg: "data:image/jpeg;base64,BG", bgMime: "image/jpeg", bgFade: 62,
    design: { show: {} },
    labels: { schoolLabel: "School", teacherLabel: "Author / Teacher", subjectLabel: "Subject", classLabel: "Class" },
    avatar: "data:image/png;base64,AVATAR", product: "Easy School Liberia", tutor: "Emmanuel",
    author: author === undefined ? undefined : author,
    per: "author", _backCover: true, _author: true
  };
}

group("1. The author page is a switch");

test("on by default, so the page still prints for anyone who never opens the panel", () => {
  assert.strictEqual(A.defaultAuthor().on, true);
});

test("switched off, buildAuthorBlocks() returns no blocks at all", () => {
  A.COVER.author = normalizeAuthor({ on: false });
  const out = A.buildAuthorBlocks({ grade: 6 }, { label: "Mathematics", packName: "Mathematics" });
  /* not deepStrictEqual: the array comes from the vm context, so its Array
     prototype is not this realm's */
  assert.strictEqual(out.length, 0, "a switched-off author page must add nothing, not even a page break");
});

test("switched on, it appends the page break and the author block, carrying the settings", () => {
  A.COVER.author = normalizeAuthor({ on: true, title: "Meet the Teacher" });
  const out = A.buildAuthorBlocks({ grade: 6 }, { label: "Mathematics", packName: "Mathematics" });
  assert.strictEqual(out.length, 2);
  assert.strictEqual(out[0].k, "pagebreak");
  assert.strictEqual(out[1].k, "author");
  assert.strictEqual(out[1].author.title, "Meet the Teacher");
  assert.strictEqual(out[1]._backCover, true, "pagination still has to recognise it as the back cover");
});

test("the block keeps the flat authorTitle/authorSubtitle/bio fields the export reads", () => {
  A.COVER.author = normalizeAuthor({ on: true });
  const b = A.buildAuthorBlocks({ grade: 6, teacherName: "Mary Doe" }, { packName: "Mathematics" })[1];
  assert.strictEqual(b.authorTitle, "About the Author");
  assert.strictEqual(b.authorSubtitle, "Prepared by Mary Doe");
  assert(/Mary Doe/.test(b.bio) && /Mathematics/.test(b.bio));
});

group("2. The portrait stands alone");

test("no border, no circle and no box are drawn around the photo by default", () => {
  const html = A.authorCoverHtml(block());
  const img = /<div class="cv-avatar[^"]*">.*?<\/div>/.exec(html);
  assert(img, "the portrait wrapper is missing");
  assert(!/framed/.test(img[0]), "the ring must be opt-in");
  assert(!/border/.test(img[0]), "no border may be drawn around the photo");
  assert(!/border-radius/.test(img[0]), "the photo must not be clipped into a circle");
  assert(!/background:/.test(img[0]), "nothing may be painted behind the photo");
});

test("the stylesheet keeps the portrait on a transparent background", () => {
  const rule = /\.cv-avatar img\{[^}]*\}/.exec(css);
  assert(rule, "no .cv-avatar img rule in styles.css");
  assert(/border:0/.test(rule[0]), "the rule must clear any inherited border");
  assert(/background:transparent/.test(rule[0]), "the rule must keep the background transparent");
  assert(/object-fit:contain/.test(rule[0]), "the whole photo has to be visible, not cropped");
});

test("the old inline ring around the author photo is gone", () => {
  assert(!/border:2px solid ' \+ t\.leaf/.test(app), "app.js still draws the old ring inline");
  assert(!/border-radius:50%;width:28mm/.test(app) && !/border-radius:50%;width:28mm/.test(index),
    "the built page still carries the old ringed avatar");
});

test('"Border around the photo" brings the ring back for anyone who wants it', () => {
  const html = A.authorCoverHtml(block({ on: true, show: { frame: true } }));
  assert(/<div class="cv-avatar framed">/.test(html), "the framed class is missing");
  assert(/\.cv-avatar\.framed img\{[^}]*border:2px solid/.test(css), "no ring rule for the opt-in switch");
});

test("an uploaded photo replaces the bundled one, and the size switch resizes it", () => {
  const mine = "data:image/png;base64,MINE";
  const html = A.authorCoverHtml(block({ on: true, photo: mine, photoSize: 52 }));
  assert(html.includes('src="' + mine + '"'), "the uploaded portrait is not used");
  assert(!html.includes("AVATAR"), "the bundled portrait is still printed");
  assert(/max-height:52mm/.test(html), "the size switch does not reach the sheet");
});

test("the photo switch hides the portrait and falls back to the drawn emblem", () => {
  const html = A.authorCoverHtml(block({ on: true, show: { photo: false } }));
  assert(!/<img /.test(html), "the portrait is still printed");
  assert(!/cv-avatar/.test(html));
});

test("only a real image data URL may be stored as the portrait", () => {
  assert.strictEqual(normalizeAuthor({ photo: "javascript:alert(1)" }).photo, "");
  assert.strictEqual(normalizeAuthor({ photo: "http://evil/x.png" }).photo, "");
  assert.strictEqual(normalizeAuthor({ photo: "data:image/png;base64,AAAA" }).photo, "data:image/png;base64,AAAA");
});

group("3. Everything on the page is editable");

const CTX = { teacher: "Mary Doe", school: "Ricks Institute", subject: "Mathematics",
              klass: "Grade 6", product: "Easy School Liberia", tutor: "Emmanuel", year: "2026" };

test("a blank author page prints the automatic wording for the pack", () => {
  const t = authorText(normalizeAuthor({}), CTX);
  assert.strictEqual(t.title, "About the Author");
  assert.strictEqual(t.subtitle, "Prepared by Mary Doe");
  assert.strictEqual(t.kicker, "Easy School Liberia · Back Cover");
  assert(/Ricks Institute/.test(t.bio) && /Mathematics Grade 6/.test(t.bio));
  assert(/^\*\*Mission:\*\*/.test(t.mission));
  assert(/2026/.test(t.contact));
});

test("every line of text prints what the teacher typed", () => {
  const words = {
    title: "The Woman Behind the Book", subtitle: "Twenty years in the classroom",
    kicker: "Ricks Institute · Monrovia", bio: "Mary Doe has taught Grade 6 for twenty years.",
    mission: "**Mission:** Every child reads by Grade 3.", contact: "Write to mary@ricks.edu.lr"
  };
  const t = authorText(normalizeAuthor(words), CTX);
  Object.keys(words).forEach(k => assert.strictEqual(t[k], words[k], k + " was not taken from the panel"));
  const html = A.authorCoverHtml(block(Object.assign({ on: true }, words)));
  Object.keys(words).forEach(k => {
    /* the sheet renders **bold** markers as <b>, so that is what is looked for */
    const rendered = words[k].replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
    assert(html.includes(rendered), k + " does not reach the sheet");
  });
});

test("the mission and contact lines render their **bold** markers as bold", () => {
  const html = A.authorCoverHtml(block());
  assert(/<b>Mission:<\/b>/.test(html), "the mission line prints its asterisks");
  assert(/<b>Easy School Liberia<\/b>/.test(html), "the contact line prints its asterisks");
  assert(!html.includes("**"), "a ** marker survived into the sheet");
});

test("each details row takes its own label and its own value", () => {
  const html = A.authorCoverHtml(block({
    on: true,
    labels: { teacher: "Written by", klass: "Level" },
    facts: { school: "Ricks Institute, Sinkor", subject: "Mathematics & Numeracy" }
  }));
  assert(/Written by:<\/span><span class="cv-val">Mary Doe/.test(html), "the row label override is missing");
  assert(/School:<\/span><span class="cv-val">Ricks Institute, Sinkor/.test(html), "the row value override is missing");
  assert(/Mathematics &amp; Numeracy/.test(html), "the overridden subject row is missing");
  assert(/Level:<\/span><span class="cv-val">Grade 6/.test(html), "the class label override is missing");
});

test("the details rows switch hides all four of them", () => {
  const html = A.authorCoverHtml(block({ on: true, show: { facts: false } }));
  assert(!/cv-row/.test(html), "a details row survived");
});

test("every part of the page hides on its own", () => {
  const probes = {
    title: /cv-t1/, subtitle: /cv-t2/, kicker: /cv-sub/, rule: /cv-rule/,
    bio: /cv-bio/, mission: /cv-mission/, facts: /cv-facts/, contact: /cv-foot/,
    bg: /cv-bg/, leaf: /cv-leaf/, dots: /cv-dots/
  };
  Object.keys(probes).forEach(key => {
    const off = { on: true, show: {} };
    off.show[key] = false;
    const html = A.authorCoverHtml(block(off));
    assert(!probes[key].test(html), key + " is still printed with its switch off");
    assert(probes[key].test(A.authorCoverHtml(block({ on: true }))), key + " is missing with its switch on");
  });
});

test("the author switches decide, not the front cover's designer", () => {
  /* a teacher who hid the rule on the front cover still gets it on the back */
  const b = block({ on: true });
  b.design = { show: { rule: false, leaf: false, dots: false } };
  const html = A.authorCoverHtml(b);
  assert(/cv-rule/.test(html), "the front cover's rule switch hid the author page's rule");
  assert(/cv-leaf/.test(html) && /cv-dots/.test(html), "the front cover's ornament switches reached the author page");
});

test("the box around the text is itself a switch", () => {
  const boxed = A.authorCoverHtml(block({ on: true }));
  assert(/class="cv-panel dash"/.test(boxed), "the dashed box is missing by default");
  const bare = A.authorCoverHtml(block({ on: true, show: { panel: false } }));
  assert(/class="cv-backtext"/.test(bare), "the unboxed variant is missing");
  assert(!/cv-panel/.test(bare), "the box is still drawn");
  assert(/\.cv-backtext\{[^}]*background:transparent/.test(css), "the unboxed text must sit on the bare paper");
});

test("an empty page collapses instead of printing an empty box", () => {
  const html = A.authorCoverHtml(block({ on: true, show: { photo: false, title: false, subtitle: false,
    kicker: false, rule: false, bio: false, mission: false, facts: false, contact: false,
    bg: false, leaf: false, dots: false } }));
  assert(!/cv-panel|cv-backtext|cv-foot/.test(html), "an empty sheet still draws a box or a footer");
  assert(/^<div class="cvart /.test(html) && /<\/div><\/div>$/.test(html), "the sheet is not well formed");
});

test("an older saved document with no author settings still loads", () => {
  const a = normalizeAuthor(undefined);
  assert.strictEqual(a.on, true);
  assert.strictEqual(a.show.frame, false);
  assert.strictEqual(a.photoSize, 34);
  assert.deepStrictEqual(Object.keys(a.facts).sort(), ["klass", "school", "subject", "teacher"]);
  assert.strictEqual(normalizeAuthor(null).title, "");
});

test("stored values are clamped, so a bad save cannot wreck the sheet", () => {
  const a = normalizeAuthor({ photoSize: 400, title: "x".repeat(500), show: { photo: "yes" } });
  assert.strictEqual(a.photoSize, 70, "the photo size is not clamped");
  assert.strictEqual(a.title.length, 120, "the title is not clamped");
  assert.strictEqual(a.show.photo, true, "a non-boolean switch must be ignored");
  assert.strictEqual(normalizeAuthor({ photoSize: "abc" }).photoSize, 34);
});

group("4. The editing panel is really there");

test("body.html carries the switch and every editable field", () => {
  ['id="auOn"', 'id="auBox"', 'id="auTitle"', 'id="auSubtitle"', 'id="auKicker"', 'id="auBio"',
   'id="auMission"', 'id="auContact"', 'id="auFacts"', 'id="auShows"', 'id="auPhotoPrev"',
   'id="auPhoto"', 'id="rmAuPhoto"', 'id="auPhotoSize"', 'id="auReset"'].forEach(id => {
    assert(body.includes(id), "body.html is missing " + id);
  });
  assert(/<input type="checkbox" id="auOn" checked><span>Print an author page on the back of the book<\/span>/.test(body),
    "the enable/disable switch is missing");
});

test("the panel lives outside #cvBox, so it works with the cover page switched off", () => {
  const cvBoxAt = body.indexOf('<div id="cvBox">');
  const auAt = body.indexOf('id="auBox"');
  const cvBoxEnd = body.indexOf('id="cvSave"');
  assert(cvBoxAt > 0 && auAt > cvBoxEnd, "the author panel is nested inside the cover box");
});

test("the wiring paints the switches, the details rows and the portrait preview", () => {
  ["renderAuthorPanel", "renderAuthorShows", "renderAuthorFacts", "paintAuthorPrev",
   "loadAuthorImg", "saveAuthorImg"].forEach(fn => {
    assert(new RegExp("function " + fn + "\\(").test(app), "app.js is missing " + fn + "()");
  });
  assert(/window\.PACK_PAINT_AUTHOR = renderAuthorPanel/.test(app), "the panel is not repainted on a subject change");
  assert(/window\.PACK_AUTHOR_ON = function/.test(app), "book.js cannot ask whether the page is on");
});

test("the settings persist, with the portrait under its own storage key", () => {
  assert(/var PERSIST = \[[^\]]*"author"\]/.test(app), "the author page is not persisted");
  assert(/o\.author = Object\.assign\(\{\}, o\.author, \{ photo: "" \}\)/.test(app),
    "the portrait must not be written into the text settings key");
  assert(/lncpg\.authorimg\.v1/.test(app), "the portrait has no storage key of its own");
  assert(/COVER\.author = normalizeAuthor\(s\.cover\.author\)/.test(app), "a saved document cannot restore the page");
});

test("a saved document may not carry anything but an author object", () => {
  assert(/Invalid author page settings/.test(app), "validateSettings does not check the author page");
});

test("the booklet preview only labels the last page when the author page is on", () => {
  assert(/function backLabel\(pg, total\)/.test(bookJs), "book.js still labels the last page unconditionally");
  assert((bookJs.match(/backLabel\((?:fLeft|fRight|bLeft|bRight), r\.total\)/g) || []).length === 4,
    "not every sheet face asks before labelling");
});

group("5. The built deliverable carries the change");

test("index.html is built from the new sources", () => {
  ["window.PACK_AUTHORS", "function authorCoverHtml", "cv-avatar", 'id="auOn"', 'id="auBio"',
   "renderAuthorPanel", "lncpg.authorimg.v1", "backLabel"].forEach(needle => {
    assert(index.includes(needle), "index.html is missing " + needle);
  });
  assert(!/border-radius:50%;width:28mm/.test(index), "index.html still carries the ringed avatar");
});

test("the Word export honours the same switches", () => {
  const docx = slice(app, 'case "author": {', 'case "pagebreak":');
  ["conA(\"title\")", "conA(\"subtitle\")", "conA(\"bio\")", "conA(\"mission\")",
   "conA(\"facts\")", "conA(\"contact\")", "conA(\"photo\")", "auD.facts[key]",
   "auD.labels[key]"].forEach(needle => {
    assert(docx.includes(needle), "the Word back cover ignores " + needle);
  });
});

console.log(bad ? `\n${bad} check(s) failed` : "\nall author back-cover checks passed");
process.exit(bad ? 1 : 0);
