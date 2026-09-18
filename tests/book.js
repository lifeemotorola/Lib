#!/usr/bin/env node
/* Unit test for the duplex-print helper's pure sequence logic (book.js).
   Zero-dependency: run with  node tests/book.js */
"use strict";
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const src = fs.readFileSync(path.join(__dirname, "..", "book.js"), "utf8");
const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(src, sandbox);

const seq = sandbox.BOOK_TOOL && sandbox.BOOK_TOOL.seq;
if (!seq) {
  console.error("FAIL: BOOK_TOOL.seq not registered");
  process.exit(1);
}

const cases = [
  // [pages, odd, even, sheets]
  [1, [1], [], 1],
  [2, [1], [2], 1],
  [3, [1, 3], [2], 2],
  [5, [1, 3, 5], [2, 4], 3],
  [7, [1, 3, 5, 7], [2, 4, 6], 4],
  [8, [1, 3, 5, 7], [2, 4, 6, 8], 4],
  [64, Array.from({ length: 32 }, (_, i) => 2 * i + 1),
       Array.from({ length: 32 }, (_, i) => 2 * i + 2), 32],
  [999, Array.from({ length: 500 }, (_, i) => 2 * i + 1),
       Array.from({ length: 499 }, (_, i) => 2 * i + 2), 500]
];

let bad = 0;
for (const [n, odd, even, sheets] of cases) {
  const r = seq(n, ", ");
  const okSeq = JSON.stringify(r.odd) === JSON.stringify(odd) &&
                JSON.stringify(r.even) === JSON.stringify(even) &&
                r.sheets === sheets &&
                r.oddN === odd.length && r.evenN === even.length;
  console.log((okSeq ? "  ok " : "  FAIL ") +
    `${n} pages -> odd ${r.oddN} even ${r.evenN} sheets ${r.sheets}`);
  if (!okSeq) bad++;
}

// separator handling is join-time; odd/even content is independent of it
const sepCases = [", ", " ", "-", "\n"];
for (const sep of sepCases) {
  const r = seq(6, sep);
  const wantOdd = `1${sep}3${sep}5`, wantEven = `2${sep}4${sep}6`;
  const okSep = r.odd.join(sep) === wantOdd && r.even.join(sep) === wantEven;
  console.log((okSep ? "  ok " : "  FAIL ") + `separator ${JSON.stringify(sep)}`);
  if (!okSep) bad++;
}

// ---- fold book (saddle-stitch imposition) ----
const fold = sandbox.BOOK_TOOL.fold, PAPER = sandbox.BOOK_TOOL.PAPER;
if (typeof fold !== "function" || !Array.isArray(PAPER)) {
  console.error("FAIL: BOOK_TOOL.fold / PAPER not registered");
  process.exit(1);
}
// paper sizes are offered in exactly this sequence
const order = PAPER.map(p => p.label).join(",");
console.log((order === "A4,A3,Legal" ? "  ok " : "  FAIL ") + `paper order ${order}`);
if (order !== "A4,A3,Legal") bad++;
for (const p of PAPER) {
  // a portrait sheet folded once across the long edge: the folded page's
  // long side is the sheet's short side, its short side is half the long side
  const okP = p.sheet[0] < p.sheet[1] &&
    p.folded[1] === p.sheet[0] && Math.abs(p.folded[0] - p.sheet[1] / 2) <= 1;
  const okId = sandbox.BOOK_TOOL.paper(p.id) === p;
  console.log((okP && okId ? "  ok " : "  FAIL ") + `paper ${p.label} ${p.sheet.join("x")} -> ${p.foldedName}`);
  if (!(okP && okId)) bad++;
}
console.log((sandbox.BOOK_TOOL.paper("nope") === PAPER[0] ? "  ok " : "  FAIL ") + "unknown paper falls back to A4");
if (sandbox.BOOK_TOOL.paper("nope") !== PAPER[0]) bad++;

const foldCases = [
  // [pages, front, back, total, blanks, sheets]
  [1, [4, 1], [2, 3], 4, 3, 1],
  [4, [4, 1], [2, 3], 4, 0, 1],
  [5, [8, 1, 6, 3], [2, 7, 4, 5], 8, 3, 2],
  [8, [8, 1, 6, 3], [2, 7, 4, 5], 8, 0, 2],
  [12, [12, 1, 10, 3, 8, 5], [2, 11, 4, 9, 6, 7], 12, 0, 3],
  [14, [16, 1, 14, 3, 12, 5, 10, 7], [2, 15, 4, 13, 6, 11, 8, 9], 16, 2, 4]
];
for (const [n, front, back, total, blanks, sheets] of foldCases) {
  const r = fold(n, "a4");
  const ok = JSON.stringify(r.front) === JSON.stringify(front) &&
             JSON.stringify(r.back) === JSON.stringify(back) &&
             r.total === total && r.blanks === blanks && r.sheets === sheets &&
             r.frontN === front.length && r.backN === back.length && r.paper.id === "a4";
  console.log((ok ? "  ok " : "  FAIL ") +
    `fold ${n} pages -> front ${r.front.join(",")} back ${r.back.join(",")} (${r.sheets} sheets, ${r.blanks} blank)`);
  if (!ok) bad++;
}
// every page 1..total appears exactly once across front+back, for any count
for (const n of [3, 7, 20, 33, 64, 101]) {
  const r = fold(n, "legal");
  const all = r.front.concat(r.back).sort((a, b) => a - b);
  const want = Array.from({ length: r.total }, (_, i) => i + 1);
  // each sheet face pair sums to total+1 (the imposition invariant)
  let pairs = true;
  for (let i = 0; i < r.front.length; i += 2) {
    if (r.front[i] + r.front[i + 1] !== r.total + 1) pairs = false;
    if (r.back[i] + r.back[i + 1] !== r.total + 1) pairs = false;
  }
  const ok = JSON.stringify(all) === JSON.stringify(want) && pairs && r.paper.label === "Legal";
  console.log((ok ? "  ok " : "  FAIL ") + `fold ${n} pages covers 1..${r.total} once, pairs sum to ${r.total + 1}`);
  if (!ok) bad++;
}

console.log(bad ? `\nFAILED: ${bad}` : "\nALL BOOK SEQUENCE TESTS PASSED");
process.exit(bad ? 1 : 0);
