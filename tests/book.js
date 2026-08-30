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

console.log(bad ? `\nFAILED: ${bad}` : "\nALL BOOK SEQUENCE TESTS PASSED");
process.exit(bad ? 1 : 0);
