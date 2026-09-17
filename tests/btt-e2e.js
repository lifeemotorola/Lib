#!/usr/bin/env node
/* End-to-end check for the Back to top button, driving the real built
   index.html in jsdom: the button the platform actually ships, on the page
   it actually ships on.

   tests/btt.js runs btt.js against a small fake platform and can assert
   everything about the logic; this one proves the built deliverable really
   carries it, that the page's own scripts do not break it, and — the thing
   the fake cannot show — that the button never lands inside a printable
   sheet. jsdom has no layout engine, so the AI tutor's button is given a
   box by hand where the two controls' positions interact.

   Run: node tests/btt-e2e.js  (needs jsdom, e.g. npm i jsdom) */
"use strict";
const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const src = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");

const vc = new VirtualConsole();
const jsdomErrors = [];
vc.on("jsdomError", (e) => jsdomErrors.push(String(e && e.message || e)));
vc.on("error", (m) => jsdomErrors.push(String(m)));

let scrollToCalls = [];
let scrollY = 0;

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
    window.URL.createObjectURL = () => "blob:fake";
    window.URL.revokeObjectURL = () => {};
    window.HTMLAnchorElement.prototype.click = function () { /* no navigation in tests */ };
    /* jsdom does not scroll; record what the page asked for instead */
    window.scrollTo = function (a, b) {
      scrollToCalls.push(typeof a === "object" && a ? a : { top: b, left: a });
      scrollY = 0;
      Object.defineProperty(window, "scrollY", { value: 0, writable: true, configurable: true });
    };
  }
});

const { window } = dom;
const { document } = window;

let fails = 0;
function ok(cond, msg) {
  if (!cond) { fails++; console.log("  FAIL:", msg); }
}
function setScroll(y) {
  scrollY = y;
  Object.defineProperty(window, "scrollY", { value: y, writable: true, configurable: true });
  window.dispatchEvent(new window.Event("scroll"));
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

(async function main() {
  await sleep(150);   /* let the page's own boot finish */

  /* ---- the built page carries the feature ---- */
  ok(!!window.BACK_TO_TOP, "the built page registers window.BACK_TO_TOP");
  ok(src.includes('id="i-top"'), "the sprite carries the arrow it draws");
  ok(/@media print\{[^}]*\.btt-fab\{display:none!important\}/s.test(src), "the button is hidden in print");

  const btn = document.getElementById("bttBtn");
  ok(!!btn, "the button is in the page");
  if (!btn) { report(); return; }

  ok(btn.parentElement === document.body, "appended to <body>, beside the other floating controls");
  ok(btn.tagName === "BUTTON", "it is a real button, so it is reachable by keyboard");
  ok(btn.getAttribute("aria-label") === "Back to top", "and names itself");
  ok(btn.hidden === true, "hidden before the page has been scrolled");

  /* the guarantee the fake platform cannot make: no part of a printable sheet */
  ok(!btn.closest(".page") && !btn.closest(".pbody"),
     "it never lands inside a generated A4 sheet");
  ok(document.querySelectorAll("#bttBtn").length === 1, "and there is exactly one of them");

  /* ---- the real scroll behaviour, on the real page ---- */
  setScroll(window.BACK_TO_TOP.threshold - 1);
  ok(btn.hidden === true, "still hidden one pixel short of the threshold");

  setScroll(window.BACK_TO_TOP.threshold);
  ok(btn.hidden === false, "shown once the reader is a long way down");

  setScroll(3000);
  btn.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
  ok(scrollToCalls.length === 1, "one press asks for one scroll");
  ok(scrollToCalls[0].top === 0, "to the very top of the page");
  ok(scrollToCalls[0].behavior === "smooth", "smoothly, where the browser can");
  ok(btn.hidden === true, "and hides itself on arrival");

  setScroll(3000);
  ok(btn.hidden === false, "offered again after the next scroll down");

  /* ---- it shares the corner with the AI tutor ---- */
  const fab = document.getElementById("aiFab");
  const panel = document.getElementById("aiPanel");
  ok(!!fab, "the AI tutor's button is on the page too");
  if (fab) {
    /* jsdom has no layout engine, so give the tutor's button the box a
       browser would give it: 46px of visible circle in the same corner */
    fab.getBoundingClientRect = () => ({ x: 0, y: 0, top: 0, left: 0, width: 132, height: 46, right: 132, bottom: 46 });
    setScroll(3000);
    ok(btn.classList.contains("btt-stacked"), "raised above the tutor's button, not on top of it");

    /* ai.js hides its button when the device goes offline */
    fab.hidden = true;
    setScroll(3100);
    ok(!btn.classList.contains("btt-stacked"), "and takes the corner back when the tutor goes offline");
    ok(btn.hidden === false, "without the back-to-top button disappearing with it");
    fab.hidden = false;
  }

  if (panel) {
    panel.hidden = false;              /* the tutor's panel opens over the corner */
    setScroll(3200);
    ok(btn.hidden === true, "stands down while that panel covers the corner");
    panel.hidden = true;
    setScroll(3300);
    ok(btn.hidden === false, "and returns when the panel closes");
  }

  /* the page's own scripts must not have thrown while all this ran */
  ok(jsdomErrors.length === 0, "the page ran clean: " + jsdomErrors.slice(0, 3).join(" | "));

  report();
})();

function report() {
  if (fails) { console.log("back to top (built page): " + fails + " FAILED"); process.exit(1); }
  console.log("back to top (built page): ok — button lives on the real index.html, outside every sheet");
}
