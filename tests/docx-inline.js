#!/usr/bin/env node
/* Node check for inline markup in the exports.
   Zero-dependency: run with  node tests/docx-inline.js

   The curriculum prose is written in a light markup — **bold** for the term
   being taught, *italic* for a title or a foreign word — and a few data fields
   carry an entity. The Word export used to escape that text and print the
   markers themselves, so a workbook opened in Word read

       The English alphabet has **26 letters**.

   and a Grade 2 maths note read "use the signs &gt; and &lt;". These checks run
   the real sources sliced out of app.js — the inline parser shared by the screen
   renderer and the .docx exporter, and the exporter itself — and confirm that

     - **bold** and *italic* come out as real Word runs (<w:b/>, <w:i/>)
     - the asterisks that are not markup keep their place (0*4 + 1*2, 2 + 3 * 4)
     - entities become the characters they name, in Word and on the sheet
     - text that is not markup is untouched: an inequality, and the HTML a
       computing lesson teaches, still print as themselves
     - the sheet and the Word file read the same
     - every subject's transcribed course text exports with no marker left, and
       no word of it is lost on the way through

   Run: node tests/docx-inline.js */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const index = fs.readFileSync(path.join(root, "index.html"), "utf8");

let bad = 0;
function group(name) { console.log("\n-- " + name + " --"); }
function test(name, fn) {
  try {
    fn();
    console.log(`  ok  ${name}`);
  } catch (e) {
    bad++;
    console.log(`  FAIL  ${name}\n        ${String(e.message).split("\n").slice(0, 4).join("\n        ")}`);
  }
}

/* ---- slice the real sources ---- */
function slice(src, fromMark, toMark) {
  const a = src.indexOf(fromMark);
  if (a < 0) { console.error(`FAIL: could not find start "${fromMark.slice(0, 60)}"`); process.exit(1); }
  const b = src.indexOf(toMark, a + 1);
  if (b <= a) { console.error(`FAIL: could not find end "${toMark.slice(0, 60)}"`); process.exit(1); }
  return src.slice(a, b);
}
/* the inline parser and rich() live in the screen renderer; the exporter that
   consumes them lives in the .docx section. Both are executed verbatim. */
const rendererSrc = slice(app, "function esc(s)", "var runhead");
const docxSrc = slice(app, "/* ---------------- .docx export ---------------- */", "function download(blob, name)");

const THEME = { h1: "0B6B3A", h2: "12864B", fill: "DCF0E4" };
const sandbox = {
  console, Blob, TextEncoder,
  window: {},
  /* the exporter reads these from the platform; the harness only exports text
     blocks, so benign stubs are enough */
  FSZ: () => 12, FS_BASE: 14,
  periodLabel: (p) => (p ? "Period " + p : ""),
  TEACHING: { isAssessment: () => false },
  dataUrlBytes: () => null,
  normalizeDesign: (d) => Object.assign({ show: {} }, d || {}),
  normalizeAuthor: (a) => Object.assign({ show: {}, facts: {}, labels: {} }, a || {}),
  authorText: () => ({}),
  AUTHOR_FACTS: [],
  COVER: { author: {} },
  COVER_TEXT: { label: (b, k, fallback) => fallback }
};
vm.createContext(sandbox);
vm.runInContext(rendererSrc + "\n" + docxSrc +
  "\nwindow.__X = { inlineSegs: inlineSegs, rich: rich, toDocx: toDocx };\n", sandbox);
const X = sandbox.window.__X;
if (!X || typeof X.toDocx !== "function") { console.error("FAIL: the exporter did not load"); process.exit(1); }

/* ---- helpers ---- */
/* the zip stores every part uncompressed, so a part is found by its header */
function zipPart(buf, name) {
  const want = Buffer.from(name, "latin1");
  let i = 0;
  while ((i = buf.indexOf(Buffer.from([0x50, 0x4b, 0x03, 0x04]), i)) >= 0) {
    const nlen = buf.readUInt16LE(i + 26), elen = buf.readUInt16LE(i + 28), sz = buf.readUInt32LE(i + 18);
    const at = i + 30 + nlen + elen;
    if (buf.slice(i + 30, i + 30 + nlen).equals(want)) return buf.slice(at, at + sz).toString("utf8");
    i = at + sz;
  }
  throw new Error("part not found in the .docx: " + name);
}
/* what Word shows on the page: the text of every run, with the XML escapes read
   back the way Word reads them */
function visibleText(xml) {
  return [...xml.matchAll(/<w:t(?: [^>]*)?>([\s\S]*?)<\/w:t>/g)].map((m) => m[1]).join("")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'").replace(/&amp;/g, "&");
}
async function exportParts(blocks, head) {
  const blob = X.toDocx(blocks, THEME, head || { left: "", right: "", foot: "" });
  const buf = Buffer.from(await blob.arrayBuffer());
  const doc = zipPart(buf, "word/document.xml");
  return { buf, doc, header: zipPart(buf, "word/header1.xml"),
           footer: zipPart(buf, "word/footer1.xml"), seen: visibleText(doc) };
}
/* one paragraph block, as Word shows it */
async function wordOf(text) { return (await exportParts([{ k: "p", t: text }])).seen; }
/* the same string as the sheet shows it */
function sheetOf(text) {
  return X.rich(text).replace(/<br>/g, "\n")
    .replace(/<\/?(?:b|i)>/g, "")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
}
function segText(s) { return X.inlineSegs(s).map((g) => g.t).join(""); }
/* the segments come out of a vm context, so their arrays are not this realm's
   arrays and deepStrictEqual refuses them: compare the shape as JSON */
function eqSegs(actual, expected, what) {
  assert.strictEqual(JSON.stringify(actual), JSON.stringify(expected), what || "the runs differ");
}
function segsOf(s, keys) { return JSON.parse(JSON.stringify(X.inlineSegs(s).map((g) => (keys || ["t", "b", "i"]).map((k) => g[k])))); }
/* the run that carries a given piece of text, to read its formatting off it */
function runOf(xml, text) {
  const at = xml.indexOf(">" + text + "</w:t>");
  if (at < 0) throw new Error("no run carries " + JSON.stringify(text));
  return xml.slice(xml.lastIndexOf("<w:r>", at), at);
}
/* the paragraph that carries a given piece of text */
function paraOf(xml, text) {
  const at = xml.indexOf(">" + text + "</w:t>");
  if (at < 0) throw new Error("no paragraph carries " + JSON.stringify(text));
  return xml.slice(xml.lastIndexOf("<w:p>", at), xml.indexOf("</w:p>", at) + 6);
}

/* What the reader should see, spelled out independently of the parser: the bold
   and italic markers gone, the entities turned back into the characters they
   name, everything else exactly as the data has it. */
const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: "\u00a0", mdash: "\u2014",
              ndash: "\u2013", middot: "\u00b7", hellip: "\u2026", deg: "\u00b0", ldquo: "\u201c",
              rdquo: "\u201d", lsquo: "\u2018", rsquo: "\u2019", bull: "\u2022", times: "\u00d7",
              divide: "\u00f7", laquo: "\u00ab", raquo: "\u00bb", frac12: "\u00bd" };
const ENT_RE = /&(#x[0-9a-fA-F]+|#\d+|amp|lt|gt|quot|apos|nbsp|mdash|ndash|middot|hellip|deg|ldquo|rdquo|lsquo|rsquo|bull|times|divide|laquo|raquo|frac12);/i;
/* The parser settles in one pass: whatever it leaves alone it would leave
   alone again, so a marker that survives is text the writer meant (the WASSCE
   Geography preamble explains its own asterisks) rather than markup that was
   missed. Running it over its own output is therefore the check. */
function assertSettled(seen, where) {
  const again = segText(seen);
  let msg = "markup survived a first pass in " + where;
  if (again !== seen) {
    let at = 0;
    while (at < Math.min(seen.length, again.length) && seen[at] === again[at]) at++;
    msg += ": ..." + seen.slice(Math.max(0, at - 70), at + 70) + "...";
  }
  assert.strictEqual(again, seen, msg);
}
function plainExpect(s) {
  return String(s)
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/&(#x[0-9a-fA-F]+|#\d+|[A-Za-z][A-Za-z0-9]*);/g, (m, e) => {
      if (e[0] === "#") {
        const n = (e[1] === "x" || e[1] === "X") ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
        return n >= 32 && n <= 0x10FFFF ? String.fromCodePoint(n) : m;
      }
      return ENT[e.toLowerCase()] || m;
    });
}
/* letters and digits only: markers and punctuation cannot hide a lost word */
function alnum(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, ""); }
/* the exporter numbers a list and bullets it, so the source words must appear
   in order rather than as an exact match */
function inOrder(needle, hay) {
  let at = 0;
  for (const ch of needle) {
    at = hay.indexOf(ch, at);
    if (at < 0) return false;
    at++;
  }
  return true;
}
/* the markup a reader must never see, whatever the subject */
function assertClean(seen, where) {
  const boldLeft = seen.match(/\*\*[^*]+\*\*/);
  assert(!boldLeft, "a **bold** marker printed in " + where + ": " + boldLeft);
  const entLeft = seen.match(ENT_RE);
  assert(!entLeft, "an entity printed as text in " + where + ": " + entLeft);
  assertSettled(seen, where);
}

/* ------------------------------------------------------------------ */
group("1. The markup becomes emphasis");

test("**bold** is a bold run and no asterisk survives", () => {
  eqSegs(segsOf("The English alphabet has **26 letters**."),
    [["The English alphabet has ", false, false], ["26 letters", true, false], [".", false, false]]);
  assert.strictEqual(segText("**Vowels** \u2013 a, e, i, o, u"), "Vowels \u2013 a, e, i, o, u");
});

test("*italic* is an italic run and no asterisk survives", () => {
  eqSegs(segsOf("chiefly *Streptococcus mutans*, which ferment"),
    [["chiefly ", false, false], ["Streptococcus mutans", false, true], [", which ferment", false, false]]);
  assert.strictEqual(segText("54 is *fifty-four* and 86 is *eighty-six*"), "54 is fifty-four and 86 is eighty-six");
  assert.strictEqual(segText("(*Pisum sativum*)"), "(Pisum sativum)");
});

test("bold and italic in one sentence each keep their own run", () => {
  eqSegs(X.inlineSegs("the **plaque** \u2014 chiefly *Streptococcus mutans* \u2014 ferments")
      .map((g) => g.t + (g.b ? "[b]" : "") + (g.i ? "[i]" : "")),
    ["the ", "plaque[b]", " \u2014 chiefly ", "Streptococcus mutans[i]", " \u2014 ferments"]);
});

/* the course text nests the two markers, so the parser has to as well */
const NESTED = [
  ["In French the **color adjective comes after the noun**: *un carr\u00e9 **rouge*** (a red square), *une balle **jaune*** (a yellow ball).",
   "In French the color adjective comes after the noun: un carr\u00e9 rouge (a red square), une balle jaune (a yellow ball).",
   [["color adjective comes after the noun", true, false], ["un carr\u00e9 ", false, true], ["rouge", true, true],
    [" (a red square), ", false, false], ["une balle ", false, true], ["jaune", true, true], [" (a yellow ball).", false, false]]],
  ["Add the endings **-ai, -as, -a, -ons, -ez, -ont** (the present of *avoir*) directly to the **infinitive**. Verbs in **-re** drop the final **e** first: *vendre \u2192 je vendr**ai***.",
   "Add the endings -ai, -as, -a, -ons, -ez, -ont (the present of avoir) directly to the infinitive. Verbs in -re drop the final e first: vendre \u2192 je vendrai.",
   [["avoir", false, true], ["vendre \u2192 je vendr", false, true], ["ai", true, true]]],
  ["Pronouns change with the point of view: *Marie dit : \u00ab **Je** suis fatigu\u00e9e \u00bb* \u2192 *Marie dit qu'**elle** est fatigu\u00e9e.*",
   "Pronouns change with the point of view: Marie dit : \u00ab Je suis fatigu\u00e9e \u00bb \u2192 Marie dit qu'elle est fatigu\u00e9e.",
   [["Marie dit : \u00ab ", false, true], ["Je", true, true], [" suis fatigu\u00e9e \u00bb", false, true],
    ["elle", true, true], [" est fatigu\u00e9e.", false, true]]]
];
test("an italic span carries the bold span inside it", () => {
  NESTED.forEach(([src, plain, spans]) => {
    assert.strictEqual(segText(src), plain, "the nested markup did not read as one line");
    const segs = X.inlineSegs(src);
    spans.forEach(([t, b, i]) => {
      const hit = segs.find((g) => g.t === t);
      assert(hit, "no run carries " + JSON.stringify(t) + " — got " +
        JSON.stringify(segs.map((g) => g.t)));
      assert(hit.b === b && hit.i === i, JSON.stringify(t) + " came out b=" + hit.b + " i=" + hit.i);
    });
  });
});

/* the French course wraps a whole worked example in one pair of markers, so a
   span is never too long to be markup: the dialogue below runs past 200
   characters and still reads as one italic run */
test("an italic span may be a whole worked example", () => {
  const call = "**Worked example \u2014 a short call:** *All\u00f4, bonjour. Je voudrais parler \u00e0 Monsieur Kollie, " +
    "s'il vous pla\u00eet. \u2014 C'est de la part de qui ? \u2014 C'est Musu. \u2014 Ne quittez pas\u2026 Je suis " +
    "d\u00e9sol\u00e9e, il n'est pas l\u00e0. Je vous rappelle \u00e0 trois heures ? \u2014 D'accord, merci. Au revoir.*";
  const segs = X.inlineSegs(call);
  assert.strictEqual(segs.length, 3, JSON.stringify(segs.map((g) => g.t.slice(0, 30))));
  assert(segs[0].b && !segs[0].i, "the label is the bold run");
  assert.strictEqual(segs[0].t, "Worked example \u2014 a short call:");
  assert.strictEqual(segs[1].t, " ");
  assert(!segs[2].b && segs[2].i, "the dialogue is the italic run");
  assert(segs[2].t.length > 200, "the dialogue is only " + segs[2].t.length + " characters");
  assert(segs[2].t.startsWith("All\u00f4, bonjour.") && segs[2].t.endsWith("Au revoir."), segs[2].t.slice(0, 40));
});

test("a newline still breaks the line", () => {
  assert.strictEqual(segText("one\ntwo"), "one\ntwo");
  eqSegs(segsOf("one\n**two**\nthree", ["t", "b"]),
         [["one\n", false], ["two", true], ["\nthree", false]]);
});

/* ------------------------------------------------------------------ */
group("2. What is not markup stays as it is");

test("a multiplication keeps its asterisks", () => {
  ["0*4 + 1*2 + 0*1.", "2*3", "n = 4*5*6", "rows*cols"].forEach((s) => {
    assert.strictEqual(segText(s), s, "mangled: " + s);
    assert.strictEqual(X.inlineSegs(s).length, 1, "a run was split: " + s);
  });
});

test("a spaced operator keeps its asterisks", () => {
  ["2 + 3 * 4", "* before +: 3 * 4 = 12; 2 + 12", "a * b", "* ", "*"].forEach((s) => {
    assert.strictEqual(segText(s), s, "mangled: " + s);
  });
});

test("an unpaired marker prints as itself instead of bolding the page", () => {
  assert.strictEqual(segText("**Answer: the cat sat."), "**Answer: the cat sat.");
  assert.strictEqual(segText("a * alone"), "a * alone");
  eqSegs(X.inlineSegs("**bold** then ** unpaired").map((g) => g.t), ["bold", " then ** unpaired"]);
});

/* length is not what decides a span — how the markers sit is. These two
   asterisks have a space either side of the words between them, so they are
   loose marks in the prose and stay as they are however far apart they are. */
test("loose asterisks are not swallowed as italic, however much text sits between", () => {
  const s = "start * " + "word ".repeat(80) + "* end";
  assert.strictEqual(segText(s), s);
  const t = "start *" + "word ".repeat(80) + "* end";
  assert.strictEqual(segText(t), t, "a span that ends on a space is not markup either");
});

/* the computing lesson that teaches HTML must keep teaching it */
const CS_HTML = [
  "<p>Hello <b>world</p></b>",
  "Close the inner tag first: <p>Hello <b>world</b></p>",
  "**<head>** \u2014 the title and settings, not shown; **<body>** \u2014 everything on the page.",
  "**<h1>** \u2014 the page's one main heading; **<h2>** \u2014 section headings; **<p>** \u2014 ordinary text.",
  "<ul><li>Rice</li><li>Cassava</li></ul>",
  "x < 10 and y > 5"
];
test("the HTML a computing lesson teaches still prints as code", () => {
  CS_HTML.forEach((s) => {
    const seen = segText(s);
    assert.strictEqual(alnum(seen), alnum(plainExpect(s)), "the code lost words: " + s);
    assert(seen.includes("<p>") || seen.includes("<head>") || seen.includes("<ul>") ||
           seen.includes("<") || !/<|>/.test(s), "a tag was eaten: " + JSON.stringify(seen));
  });
  assert.strictEqual(segText("<p>Hello <b>world</p></b>"), "<p>Hello <b>world</p></b>");
  eqSegs(segsOf("**<head>** \u2014 the title", ["t", "b"]), [["<head>", true], [" \u2014 the title", false]]);
});

/* ------------------------------------------------------------------ */
group("3. Entities are characters, not text");

test("an entity a data field carries becomes the character it names", () => {
  assert.strictEqual(segText("Use the signs &gt; (greater than) and &lt; (less than)."),
                     "Use the signs > (greater than) and < (less than).");
  assert.strictEqual(segText("1:50&nbsp;000 map &ndash; 0&deg; to 360&deg;"),
                     "1:50\u00a0000 map \u2013 0\u00b0 to 360\u00b0");
  assert.strictEqual(segText("Reading &amp; Comprehension"), "Reading & Comprehension");
  assert.strictEqual(segText("&#8212; and &#x2014; too"), "\u2014 and \u2014 too");
});

test("an entity written on purpose to be seen is still seen", () => {
  assert.strictEqual(segText("the escape &amp;lt;b&amp;gt; prints a tag"), "the escape &lt;b&gt; prints a tag");
});

/* ------------------------------------------------------------------ */
(async () => {
  const BLOCKS = [
    { k: "h2", t: "Study Notes \u2014 Period 1: Reading & Comprehension \u00b7 Greetings, Nouns, Alphabet" },
    { k: "p", t: "The English alphabet has **26 letters**. We know each letter by its **name** and by the *sound* it makes." },
    { k: "bul", items: ["**Vowels** \u2013 a, e, i, o, u (and sometimes y).", "**Consonants** \u2013 the other 21 letters."] },
    { k: "num", items: ["Read *the whole sentence* aloud.", "Binary: 0*4 + 1*2 + 0*1.", "Precedence: 2 + 3 * 4"] },
    { k: "table", head: ["Onset", "Rime (word family)"], rows: [["c, h, m, r, b", "-at"], ["**p**, b, d", "-ig"]] },
    { k: "instr", t: "Use the signs &gt; and &lt;; a scale of 1:50&nbsp;000." },
    { k: "p", t: "First line\nSecond line" },
    { k: "p", t: "x < 10 stays, an unpaired ** stays, and <p>Hello <b>world</b></p> stays." }
  ];
  const out = await exportParts(BLOCKS, { left: "English &middot; Grade 1", right: "**Semester One**",
                                          foot: "Easy School Liberia &amp; Partners" });

  group("4. The Word file carries the emphasis");

  test("no marker and no entity reaches the page", () => assertClean(out.seen, "the document body"));

  test("the words are all still there, in order", () => {
    assert(out.seen.includes("The English alphabet has 26 letters."), out.seen.slice(0, 200));
    assert(out.seen.includes("Study Notes \u2014 Period 1: Reading & Comprehension"), "the title lost its ampersand");
    assert(out.seen.includes("Binary: 0*4 + 1*2 + 0*1."), "a multiplication was eaten");
    assert(out.seen.includes("Precedence: 2 + 3 * 4"), "a spaced operator was eaten");
    assert(out.seen.includes("Read the whole sentence aloud."), "an italic span lost its words");
    assert(out.seen.includes("Use the signs > and <; a scale of 1:50\u00a0000."), "an entity printed as text");
    assert(out.seen.includes("x < 10 stays, an unpaired ** stays, and <p>Hello <b>world</b></p> stays."),
           "text that is not markup was mangled");
    assert(out.seen.includes("p, b, d") && out.seen.includes("-ig"), "a table cell lost its words");
  });

  test("the emphasis is real Word formatting", () => {
    assert(/<w:b\/>/.test(runOf(out.doc, "26 letters")), "**26 letters** is not a bold run");
    assert(/<w:i\/>/.test(runOf(out.doc, "sound")), "*sound* is not an italic run");
    assert(/<w:i\/>/.test(runOf(out.doc, "the whole sentence")), "an italic list item lost its run");
    assert(/<w:b\/>/.test(runOf(out.doc, "Vowels")), "a bullet's key term is not bold");
    assert(!/<w:b\/>/.test(runOf(out.doc, "-ig")), "a marker in one column bolded the next");
    assert(/<w:b\/>/.test(runOf(out.doc, ", b, d")), "the first column of a table lost its bold");
    assert((out.doc.match(/<w:b\/>/g) || []).length >= 8,
           "too few bold runs: " + (out.doc.match(/<w:b\/>/g) || []).length);
    assert((out.doc.match(/<w:i\/>/g) || []).length >= 2,
           "too few italic runs: " + (out.doc.match(/<w:i\/>/g) || []).length);
  });

  test("the runs of one sentence read as one sentence", () => {
    const para = paraOf(out.doc, "26 letters");
    assert.strictEqual(visibleText(para),
      "The English alphabet has 26 letters. We know each letter by its name and by the sound it makes.");
    assert.strictEqual((para.match(/<w:br\/>/g) || []).length, 0, "a sentence was broken in two");
  });

  test("a newline is one line break", () => {
    const para = paraOf(out.doc, "First line");
    assert.strictEqual((para.match(/<w:br\/>/g) || []).length, 1, "the \\n must give exactly one break");
    assert.strictEqual(visibleText(para), "First lineSecond line");
  });

  test("the running head and foot read as typed", () => {
    const head = visibleText(out.header), foot = visibleText(out.footer);
    assert(head.includes("English \u00b7 Grade 1"), "the head printed its entity: " + head);
    assert(head.includes("Semester One") && !head.includes("**"), "the head printed its markers: " + head);
    assert(/<w:b\/>/.test(runOf(out.header, "Semester One")), "the head lost its emphasis");
    assert(foot.includes("Easy School Liberia & Partners"), "the foot printed its entity: " + foot);
    assert(foot.includes("Page ") && foot.includes(" of "), "the page-number field text moved");
  });

  group("5. The sheet and the Word file read the same");

  const PARITY = [
    "The English alphabet has **26 letters** and the *sound* of each.",
    "**Vowels** \u2013 a, e, i, o, u (and sometimes y).",
    "54 is *fifty-four*; 0*4 + 1*2 + 0*1.; 2 + 3 * 4",
    "Use the signs &gt; and &lt;; a scale of 1:50&nbsp;000.",
    "Close the inner tag first: <p>Hello <b>world</b></p>",
    "An unpaired ** stays, one<br>two stays, and x < 10 stays."
  ];
  for (const s of PARITY) {
    const w = await wordOf(s);
    const sh = sheetOf(s);
    if (w !== sh) {
      bad++;
      console.log("  FAIL  the sheet and Word disagree about " + JSON.stringify(s.slice(0, 46)) +
                  "\n        sheet: " + JSON.stringify(sh) + "\n        word:  " + JSON.stringify(w));
    } else {
      console.log("  ok  sheet == Word: " + JSON.stringify(w.slice(0, 60)));
    }
    assertClean(w, "the Word copy of " + JSON.stringify(s.slice(0, 30)));
  }

  group("6. Every subject's course text exports clean");

  /* the WASSCE subjects keep their syllabus on window.WA_<id>, registered
     through data-wa.js, so those entries name the files and the window key */
  /* Biology is two files: the second adds units to the first subject object */
  const WA = [["en"], ["ma"], ["bio", "bio2"], ["ch"], ["ph"], ["ec"], ["gg"], ["his"], ["ag"], ["li"], ["crs"]]
    .map((ids) => [["data-wa.js"].concat(ids.map((id) => "data-wa-" + id + ".js")), "window.WA_" + ids[0]]);
  const FILES = [["data-en.js", "EN_CURRICULUM"], ["data-eg.js", "EG_CURRICULUM"],
    ["data-ma.js", "MA_CURRICULUM"], ["data-fr.js", "FR_CURRICULUM"], ["data-sc.js", "SC_CURRICULUM"],
    ["data-ss.js", "SS_CURRICULUM"],
    [["data-rm.js", "data-rm-more.js", "data-rm15-depth.js", "data-rm79.js", "data-rm79-more.js", "data-rm69-depth.js", "data-rm1012.js", "data-rm1012-more.js", "data-rm1012-depth.js", "data-rm612-full.js"], "RM_CURRICULUM"],
    ["data-pe.js", "PE_CURRICULUM"],
    ["data-bi.js", "BI_CURRICULUM"], ["data-ch.js", "CH_CURRICULUM"], ["data-ph.js", "PH_CURRICULUM"],
    ["data-ec.js", "EC_CURRICULUM"], ["data-gg.js", "GG_CURRICULUM"], ["data-li.js", "LI_CURRICULUM"],
    ["data-hi.js", "HI_CURRICULUM"], ["data-cs.js", "CS_CURRICULUM"], ["data-cs79.js", "CS_CURRICULUM_79"],
    ["data-cs1012.js", "CS_CURRICULUM_1012"], ["data-fr79.js", "FR_CURRICULUM_79"],
    ["data-fr1012.js", "FR_CURRICULUM_1012"]].concat(WA);

  let strings = 0, boldRuns = 0, italicRuns = 0, tagsKept = 0, stars = 0;
  const problems = [], starLines = [];
  for (const [file, global] of FILES) {
    const files = Array.isArray(file) ? file : [file];
    const label = files.join(" + ");
    const ctx = { console, window: {} };
    vm.createContext(ctx);
    files.forEach((f) => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f }));
    const data = vm.runInContext(global, ctx);
    if (!data) { problems.push(label + ": " + global + " did not load"); continue; }
    let n = 0, b = 0, i = 0, tg = 0;
    (function walk(v, at) {
      if (typeof v === "string") {
        if (!/[*<&]/.test(v)) return;
        n++;
        /* counted the way the reader gets them: one run of the parser, and the
           emphasis it decided on, rather than a second guess by regex */
        const segs = X.inlineSegs(v);
        const seen = segs.map((g) => g.t).join("");
        b += segs.filter((g) => g.b).length;
        i += segs.filter((g) => g.i).length;
        tg += (v.match(/<[a-zA-Z/][^>\n]{0,40}>/g) || []).length;
        if (/\*\*[^*]+\*\*/.test(seen)) problems.push(`${label} ${at}: a bold marker survived — ${JSON.stringify(seen.slice(0, 90))}`);
        const left = (seen.match(/\*/g) || []).length;
        if (left) {
          stars += left;
          const at2 = seen.indexOf("*");
          starLines.push(`${label} ${at}: ...${seen.slice(Math.max(0, at2 - 50), at2 + 70).replace(/\n/g, " ")}...`);
        }
        const again = segText(seen);
        if (again !== seen) {
          let d = 0; while (d < Math.min(seen.length, again.length) && seen[d] === again[d]) d++;
          problems.push(`${label} ${at}: markup survived a first pass — ${JSON.stringify(seen.slice(Math.max(0, d - 60), d + 90))}`);
        }
        if (ENT_RE.test(seen)) problems.push(`${label} ${at}: an entity survived — ${JSON.stringify(seen.slice(0, 90))}`);
        if (alnum(seen) !== alnum(plainExpect(v))) problems.push(`${label} ${at}: words changed — ${JSON.stringify(v.slice(0, 70))}`);
      } else if (Array.isArray(v)) {
        v.forEach((x, k) => walk(x, at + "[" + k + "]"));
      } else if (v && typeof v === "object") {
        Object.keys(v).forEach((k) => walk(v[k], at + "." + k));
      }
    })(data, global);
    strings += n; boldRuns += b; italicRuns += i; tagsKept += tg;
    console.log(`  ${label.padEnd(42)} ${String(n).padStart(5)} marked string(s)  ${String(b).padStart(6)} bold runs  ` +
                `${String(i).padStart(5)} italic runs  ${String(tg).padStart(3)} tag(s) kept as code`);
  }

  test("no marker and no entity survives anywhere in the transcribed course text", () => {
    assert.strictEqual(problems.slice(0, 8).join("\n        "), "", problems.length + " string(s) still carry markup");
  });
  /* an asterisk that survives is one the writer meant — a multiplication, or
     the WASSCE Geography preamble explaining its own marks — so they are all
     printed here and kept inside a budget: a parser that starts refusing real
     spans would push the count straight through it */
  test("the asterisks that survive are the writer's own", () => {
    starLines.slice(0, 10).forEach((l) => console.log("        * " + l));
    console.log(`        ${stars} asterisk(s) left in ${starLines.length} string(s)`);
    /* today: 107 strings, 129 asterisks, every one of them code or a syllabus
       footnote. A parser that starts refusing real spans doubles this. */
    assert(starLines.length < 160 && stars < 220,
      "too many asterisks reached the reader: " + stars + " in " + starLines.length + " string(s)");
  });
  test("nothing but the markup was touched", () => {
    assert(strings > 2000, "too few marked strings swept: " + strings);
    assert(boldRuns > 2000, "too few bold runs swept: " + boldRuns);
    assert(italicRuns > 300, "too few italic runs swept: " + italicRuns);
    assert(tagsKept > 100, "the sweep met no HTML tag to leave alone: " + tagsKept);
  });

  group("7. A real unit exports the way the teacher reads it");

  const SPOTS = [["data-en.js", "EN_CURRICULUM", 1, "I"], ["data-bi.js", "BI_CURRICULUM", 10, "I"],
                 ["data-gg.js", "GG_CURRICULUM", 10, "I"], ["data-ma.js", "MA_CURRICULUM", 2, "I"],
                 ["data-li.js", "LI_CURRICULUM", 10, "I"], ["data-cs79.js", "CS_CURRICULUM_79", 8, "I"]];
  for (const [file, global, grade, period] of SPOTS) {
    const ctx = { console, window: {} };
    vm.createContext(ctx);
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), ctx, { filename: file });
    const units = vm.runInContext(global, ctx);
    const u = units.find((x) => x.grade === grade && x.period === period && (x.study || []).length);
    if (!u) { console.log(`  (skipped ${file} grade ${grade} period ${period}: no study blocks)`); continue; }
    /* the study page as UNIT_NOTES assembles it: the heading, then the course
       text exactly as transcribed */
    const blocks = [{ k: "h2", t: "Study Notes \u2014 Period " + grade + ": " + u.title }].concat(u.study);
    const res = await exportParts(blocks, { left: global.replace(/_CURRICULUM.*/, ""), right: "", foot: "" });
    test(`${file} grade ${grade} period ${period}: no markup on the page, no word lost`, () => {
      assertClean(res.seen, file + " grade " + grade);
      assert(/<w:b\/>/.test(res.doc), "the unit exported no bold run at all");
      const src = blocks.map((b) => b.t || (b.items || []).join(" ") ||
        [(b.head || []).join(" "), (b.rows || []).map((r) => r.join(" ")).join(" ")].join(" ")).join(" ");
      assert(inOrder(alnum(plainExpect(src)), alnum(res.seen)), "the unit lost words on the way through");
    });
    console.log(`        ${String(res.seen.length).padStart(6)} characters read in Word, ` +
                `${(res.doc.match(/<w:b\/>/g) || []).length} bold runs, ` +
                `${(res.doc.match(/<w:i\/>/g) || []).length} italic runs`);
  }

  group("8. Every expanded RME unit exports its detailed notes and tables");

  const rmeContext = { console, window: {} };
  vm.createContext(rmeContext);
  const rmeFiles = FILES.find((entry) => entry[1] === "RM_CURRICULUM")[0];
  rmeFiles.forEach((file) => vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), rmeContext, { filename: file }));
  const rmeUnits = vm.runInContext("RM_CURRICULUM", rmeContext).filter((unit) => unit.rmeFullDetails);
  test("all 42 full-detail RME units are included in the export sweep", () => assert.equal(rmeUnits.length, 42));
  for (const unit of rmeUnits) {
    const label = "RME Grade " + unit.grade + " Period " + unit.period;
    const res = await exportParts(unit.study, { left: label, right: "", foot: "" });
    test(label + ": detailed explanations, lists and tables survive Word export", () => {
      assertClean(res.seen, label);
      assert(res.seen.includes("Detailed Study"), "expanded study headings missing");
      assert(res.seen.includes("Guided Classroom Enquiry"), "expanded activities missing");
      assert(res.seen.includes("Check Your Understanding"), "expanded review missing");
      const src = unit.study.map((block) => block.t || (block.items || []).join(" ") ||
        [(block.head || []).join(" "), (block.rows || []).map((row) => row.join(" ")).join(" ")].join(" ")).join(" ");
      assert(inOrder(alnum(plainExpect(src)), alnum(res.seen)), "RME notes lost words in Word export");
      assert(/<w:b\/>/.test(res.doc), "expanded key-term emphasis missing");
    });
  }

  group("9. The built deliverable carries the change");

  test("index.html is built from the new sources", () => {
    ["function inlineSegs(", "function decodeEnt(", "function parseInline(", "function boldEnd(",
     "function italicEnd(", "var ENT_CHAR", "function hfRuns(",
     "inlineSegs(text).forEach"].forEach((needle) => {
      assert(index.includes(needle), "index.html is missing " + needle);
    });
    assert(!index.includes("function plainA("), "index.html still strips the author markup instead of rendering it");
    assert(index.includes("return inlineSegs(s).map(function (g)"),
           "index.html still carries the screen-only bold replace");
  });

  console.log(bad ? `\n${bad} check(s) failed` : "\nall inline-markup checks passed");
  process.exit(bad ? 1 : 0);
})().catch((e) => { console.error("harness error:", e); process.exit(2); });
