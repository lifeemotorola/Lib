#!/usr/bin/env node
/* Unit and integration test for Fold Book booklet preview and paper sizing.
   Zero-dependency: run with  node tests/fold-book.js */
"use strict";
const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.join(__dirname, "..");
const bookJs = fs.readFileSync(path.join(root, "book.js"), "utf8");
const stylesCss = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const bodyHtml = fs.readFileSync(path.join(root, "body.html"), "utf8");
const appJs = fs.readFileSync(path.join(root, "app.js"), "utf8");
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const bookHtml = fs.readFileSync(path.join(root, "book.html"), "utf8");

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

console.log("-- 1. Paper sizes and imposition invariants --");
const vm = require("vm");
const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(bookJs, sandbox);
const BOOK_TOOL = sandbox.BOOK_TOOL;

test("BOOK_TOOL exposes seq, fold, PAPER, paper", () => {
  assert(typeof BOOK_TOOL.seq === "function");
  assert(typeof BOOK_TOOL.fold === "function");
  assert(Array.isArray(BOOK_TOOL.PAPER));
  assert(typeof BOOK_TOOL.paper === "function");
});

test("PAPER sizes A4, A3, Legal have correct sheet and folded dimensions", () => {
  const a4 = BOOK_TOOL.paper("a4");
  assert.deepEqual(a4.sheet, [210, 297]);
  assert.deepEqual(a4.folded, [148, 210]);
  assert.strictEqual(a4.foldedName, "A5");

  const a3 = BOOK_TOOL.paper("a3");
  assert.deepEqual(a3.sheet, [297, 420]);
  assert.deepEqual(a3.folded, [210, 297]);
  assert.strictEqual(a3.foldedName, "A4");

  const legal = BOOK_TOOL.paper("legal");
  assert.deepEqual(legal.sheet, [216, 356]);
  assert.deepEqual(legal.folded, [178, 216]);
});

test("fold() computes correct saddle-stitch imposition for varying page counts", () => {
  // 6 pages -> 8 booklet pages, 2 sheets
  const r6 = BOOK_TOOL.fold(6, "a4");
  assert.strictEqual(r6.total, 8);
  assert.strictEqual(r6.sheets, 2);
  assert.strictEqual(r6.blanks, 2);
  assert.deepEqual(r6.front, [8, 1, 6, 3]);
  assert.deepEqual(r6.back, [2, 7, 4, 5]);

  // 12 pages -> 12 booklet pages, 3 sheets
  const r12 = BOOK_TOOL.fold(12, "a3");
  assert.strictEqual(r12.total, 12);
  assert.strictEqual(r12.sheets, 3);
  assert.strictEqual(r12.blanks, 0);
  assert.deepEqual(r12.front, [12, 1, 10, 3, 8, 5]);
  assert.deepEqual(r12.back, [2, 11, 4, 9, 6, 7]);
});

console.log("-- 2. Styles and CSS classes for fold booklet preview --");
test("styles.css defines .page.fold-sheet with custom properties", () => {
  assert(stylesCss.includes(".page.fold-sheet"));
  assert(stylesCss.includes("--fold-w"));
  assert(stylesCss.includes("--fold-h"));
  assert(stylesCss.includes("--fold-scale"));
});

test("styles.css defines side-by-side spread, crease, and page viewport", () => {
  assert(stylesCss.includes(".fold-spread"));
  assert(stylesCss.includes(".fold-half"));
  assert(stylesCss.includes(".fold-crease"));
  assert(stylesCss.includes(".fold-page-viewport"));
  assert(stylesCss.includes(".fold-subpage"));
});

test("styles.css styles blank booklet padding pages", () => {
  assert(stylesCss.includes(".fold-subpage.fold-blank"));
  assert(stylesCss.includes(".fold-blank-inner"));
  assert(stylesCss.includes(".fold-blank-badge"));
});

test("styles.css supports responsive sheet scaling with --sheet-h", () => {
  assert(stylesCss.includes("var(--sheet-h, 297mm)"));
});

test("styles.css hides fold banners and staple markers in print", () => {
  assert(stylesCss.includes(".fold-sheet-banner{display:none!important}"));
  assert(stylesCss.includes(".fold-blank-inner{display:none!important}"));
});

console.log("-- 3. Export bar and UI markup --");
test("body.html export bar contains fold controls and paper selector", () => {
  assert(bodyHtml.includes('id="foldBarPaperPill"'));
  assert(bodyHtml.includes('id="foldBarPaper"'));
  assert(bodyHtml.includes('id="foldExitBtn"'));
  assert(bodyHtml.includes('id="foldPillDetails"'));
  assert(bodyHtml.includes('id="foldbk"'));
});

test("body.html book helper contains bookletPreviewCard", () => {
  assert(bodyHtml.includes('id="bookletPreviewCard"'));
  assert(bodyHtml.includes('id="bookletPreviewGrid"'));
});

test("book.html contains booklet preview card and styling", () => {
  assert(bookHtml.includes('id="bookletPreviewCard"'));
  assert(bookHtml.includes('id="bookletPreviewGrid"'));
  assert(bookHtml.includes(".booklet-preview-grid"));
});

console.log("-- 4. App.js fold book rendering and paper adjustment --");
test("app.js carries fold dimensions and rendering logic", () => {
  assert(appJs.includes("FOLD_SHEET_DIMS"));
  assert(appJs.includes("renderFoldBookPages"));
  assert(appJs.includes("renderStandardPages"));
  assert(appJs.includes("setBookMode"));
  assert(appJs.includes("setBookPaper"));
  assert(appJs.includes("updateSheetDims"));
  assert(appJs.includes("updatePrintStyle"));
});

test("app.js fitPreview adjusts to current sheet width", () => {
  assert(appJs.includes("getFoldPaper(bookPaper).w"));
});

test("built index.html includes fold booklet functionality", () => {
  assert(indexHtml.includes(".page.fold-sheet"));
  assert(indexHtml.includes("renderFoldBookPages"));
  assert(indexHtml.includes("foldBarPaper"));
});

console.log(bad ? `\nFAILED: ${bad}` : "\nALL FOLD BOOK TESTS PASSED");
process.exit(bad ? 1 : 0);
