#!/usr/bin/env node
/* Contents page numbers (no dependencies):  node tests/toc.js

   The pack builders write a Contents page but cannot know where the parts they
   name will land: the page breaks belong to the renderer. toc.js answers a
   contents line with the heading it names, and the renderer then writes onto the
   list the number of the page that heading begins on. These checks run the real
   engines and the real matcher; the layout the numbers are read off belongs to
   the browser suites (tests/history.py, tests/regress.py). */
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

/* ---- the module loads on its own and is part of the offline deliverable ---- */
const context = {
  console,
  /* the cover belongs to app.js; a stub keeps these tests offline-safe */
  PACK_COVER: () => [{ k: "h1", t: "COURSE PACK", _cover: true }, { k: "pagebreak" }]
};
context.window = context;
vm.createContext(context);
const load = file => vm.runInContext(read(file), context, { filename: file });
/* the slice of app.js the engines lean on: the study notes every unit opens with */
function section(start, end) {
  const src = read("app.js"), a = src.indexOf(start), b = src.indexOf(end, a);
  assert(a >= 0 && b > a, "app.js section exists: " + start);
  vm.runInContext(src.slice(a, b), context, { filename: "app.js" });
}

load("toc.js");
const PACK_TOC = context.PACK_TOC;
assert(PACK_TOC && typeof PACK_TOC.decorate === "function", "toc.js registers window.PACK_TOC");
assert(read("build.sh").includes("toc.js"), "build.sh inlines the contents module");
assert(read("app.js").includes("PACK_TOC.decorate"), "the renderer lays out, then numbers the contents list");
assert(read("app.js").includes('<span class="toc-l">'), "a printed entry carries its words, its leader, its number");
assert(read("app.js").includes('w:leader="dot"'), "the Word export runs a dotted tab to the page number");
assert(read("styles.css").includes(".page ul.toc li .toc-d"), "the leader dots are styled for screen and print");

const html = read("index.html");
assert(html.includes(read("toc.js").trim()), "toc.js is inside the built index.html");
assert(html.includes("PACK_TOC.decorate"), "the built deliverable numbers its contents");

/* ---- the real engines ----
   (data-fr.js is the elementary guide: French runs 1-6 there and the junior and
   senior bands live in data-fr79.js and data-fr1012.js, which app.js picks per
   band. Grades below are chosen from the list each file actually holds.) */
section("/* ---------------- Study Notes & Explanations", "/* ---------------- session mode");
load("data-en.js");
load("gen-en.js");
load("data-fr.js");
load("gen-fr.js");

const FULL = { tests: true, exam: true, keys: true };
function build(subject, grade, parts) {
  const gen = subject === "fr" ? context.GEN_FR : context.GEN_EN;
  return gen.buildPack(Object.assign({ grade: grade, sheets: Object.keys(gen.SHEETS), perEx: 4, seed: 1 },
    parts || FULL));
}
function contents(blocks) {
  const found = PACK_TOC.contents(blocks);
  assert(found, "the pack has a contents list");
  return found;
}
function first(blocks, test, what) {
  const i = blocks.findIndex(test);
  assert(i >= 0, "the pack holds " + what);
  return i;
}

/* The block each line of the contents list names, in the order the builders
   write them: every period, then the tests, the examination papers, the keys. */
function named(blocks, pack, parts) {
  const out = pack.topics.map(t =>
    first(blocks, b => b.k === "h1" && b.per === t.period, "the heading of period " + t.period));
  if (parts.tests) out.push(first(blocks, b => b.k === "h2" && /^PERIOD TEST/.test(b.t), "the first period test"));
  if (parts.exam) out.push(first(blocks, b => b.per === "exam", "the examination paper"));
  if (parts.keys) out.push(first(blocks, b => b.per === "keys", "the answer keys"));
  return out;
}

for (const [name, subject, grade] of [["English", "en", 3], ["French", "fr", 5]]) {
  for (const parts of [FULL, { tests: false, exam: false, keys: false }, { tests: true, exam: false, keys: false }]) {
    const pack = build(subject, grade, parts), blocks = pack.blocks;
    const bul = contents(blocks).bul, want = named(blocks, pack, parts);
    assert.equal(bul.pg, undefined, name + ": a fresh pack carries no page numbers");
    assert.equal(bul.items.length, want.length, name + ": every line names a part of this pack");

    /* a layout with nothing shared: each block begins its own sheet, so the
       number beside a line is the index of its heading plus one */
    assert.equal(PACK_TOC.decorate(blocks, i => i + 1), true, name + ": decorating writes the numbers");
    assert.deepEqual(bul.pg, want.map(i => i + 1),
      name + ": each line names the page its own heading begins on");
    assert(want.slice(0, pack.topics.length).every((i, n) => !n || i > want[n - 1]),
      name + ": the periods run forwards down the list");
    assert.equal(PACK_TOC.decorate(blocks, i => i + 1), false,
      name + ": numbering a second time changes nothing");

    /* and when the pack falls over the sheets differently, the numbers follow */
    assert.equal(PACK_TOC.decorate(blocks, i => 3 * i + 1), true, name + ": a new layout moves the numbers");
    assert.deepEqual(bul.pg, want.map(i => 3 * i + 1), name + ": every line follows its own heading");
  }
}

/* ---- the words a contents line and a heading disagree on ---- */
/* French names a period by its French title and adds the English gloss: the
   heading reads "PERIOD 1 · Salutation", the line "Period 1: Salutation
   (Greetings)". The line must still find the heading it shortens. */
const fr = build("fr", 5);
const frAt = contents(fr.blocks);
assert.equal(PACK_TOC.decorate(fr.blocks, i => i + 1), true, "the French list is numbered");
assert(/\(/.test(frAt.bul.items[0]), "the French list carries the translation in brackets");
/* the first heading after the list, not the cover title before it */
assert.equal(frAt.bul.pg[0], first(fr.blocks, (b, i) => b.k === "h1" && i > frAt.at, "the first unit") + 1,
  "a glossed line names the page of the heading it shortens");

/* a period whose own title mentions an examination is that period, not the paper */
const mixed = [
  { k: "covart" }, { k: "pagebreak" },
  { k: "h3", t: "Contents" },
  { k: "bul", items: ["Period 1: Nouns", "Period 2: Examination Technique",
                      "Period tests — one after each period",
                      "Semester examinations (Semester One & Two)",
                      "Answer keys — for the teacher"] },
  { k: "pagebreak" },
  { k: "h1", t: "PERIOD 1 · Nouns", per: "I" },
  { k: "h2", t: "PERIOD TEST — Grade 5, Period I", per: "I" },
  { k: "h1", t: "PERIOD 2 · Examination Technique", per: "II" },
  { k: "h3", t: "How examination papers are set" },
  { k: "h2", t: "SEMESTER ONE EXAMINATION — GRADE 5 ENGLISH", per: "exam" },
  { k: "h1", t: "ANSWER KEYS — TEACHER'S COPY", per: "keys" }
];
assert.equal(PACK_TOC.decorate(mixed, i => i + 1), true, "a hand-written pack is numbered too");
assert.deepEqual(mixed[3].pg, [6, 8, 7, 10, 11],
  "a unit titled \u201cExamination Technique\u201d is not the examination paper");

/* ---- a pack with no contents list is left alone ---- */
const bare = [{ k: "h1", t: "LESSON PLAN — WEEK 1" }, { k: "bul", items: ["Objective", "Presentation"] }];
assert.equal(PACK_TOC.decorate(bare, i => i + 1), false, "a lesson plan has no contents to number");
assert.equal(bare[1].pg, undefined, "no page numbers land on an unrelated bullet list");

const noList = [{ k: "h3", t: "Contents" }, { k: "p", t: "Nothing listed yet." }];
assert.equal(PACK_TOC.decorate(noList, i => i + 1), false, "a Contents heading with no list is skipped");

/* ---- a line naming a part this pack does not hold ---- */
const missing = [
  { k: "h3", t: "Contents" },
  { k: "bul", items: ["Period 1: Nouns", "Period 9: Things not in this pack"] },
  { k: "pagebreak" },
  { k: "h1", t: "PERIOD 1 · Nouns", per: "I" }
];
assert.equal(PACK_TOC.decorate(missing, i => i + 1), true, "the line that is there still gets its page");
assert.deepEqual(missing[1].pg, [4, null], "a line that names nothing is left without a number");

console.log("contents page numbers: ok (" + frAt.bul.items.length + " lines in a grade 5 French pack)");
