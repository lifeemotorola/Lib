#!/usr/bin/env node
/* Back to top (no dependencies):  node tests/btt.js

   The platform scrolls through dozens of A4 sheets, so it carries one
   floating button that returns the page to its header. These checks run
   the real btt.js against a small fake platform and cover the parts that
   are easy to get wrong and invisible until someone prints a pack or
   goes offline:

     - the button is injected once, into <body>, and never into a sheet
     - it stays hidden until there is genuinely something to go back from
     - pressing it really scrolls the page, smoothly — or instantly where
       the device asked for reduced motion
     - it stands above the AI tutor's button so the two never overlap,
       and takes the corner back when the tutor hides itself offline
     - it stands down while the tutor's panel covers that corner, instead
       of sitting under it where a mouse cannot reach it
     - it is styled, hidden in print, and inside the built deliverable

   Run: node tests/btt.js */
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

/* ---------------- a small fake platform ---------------- */

function harness(opts) {
  opts = opts || {};
  const els = new Map();
  const onWin = {};        /* window listeners, by event name */
  const onDoc = {};        /* document listeners, by event name */
  const scrolls = [];      /* every window.scrollTo the module made */
  const queue = [];        /* setTimeout callbacks, run by flush() */
  let reduced = !!opts.reduced;
  let smooth = opts.smooth !== false;

  function makeEl(tag, id) {
    const el = {
      tagName: String(tag).toUpperCase(),
      type: "",
      title: "",
      innerHTML: "",
      hidden: false,
      attrs: {},
      className: "",
      children: [],
      appended: 0,
      handlers: {},
      rect: { width: 46, height: 46 },
      classList: {
        add: function (c) { if (!el.classList.contains(c)) el.className = (el.className + " " + c).trim(); },
        remove: function (c) { el.className = el.className.split(/\s+/).filter(x => x && x !== c).join(" "); },
        contains: function (c) { return el.className.split(/\s+/).includes(c); },
        toggle: function (c, on) {
          if (on === undefined) on = !el.classList.contains(c);
          if (on) el.classList.add(c); else el.classList.remove(c);
          return on;
        }
      },
      setAttribute: function (k, v) { el.attrs[k] = v; },
      getAttribute: function (k) { return el.attrs[k]; },
      getBoundingClientRect: function () { return el.rect; },
      addEventListener: function (type, fn) { el.handlers[type] = fn; },
      appendChild: function (child) { el.appended++; el.children.push(child); return child; },
      press: function () {
        const fn = el.handlers.click;
        assert(fn, "the button has a click handler");
        fn({ target: el });
      }
    };
    /* btt.js creates its button and only then names it, so the id has to
       register the element as it is written, the way a real document does */
    let _id = id || "";
    Object.defineProperty(el, "id", {
      get: function () { return _id; },
      set: function (v) { _id = String(v); els.set(_id, el); }
    });
    if (_id) els.set(_id, el);
    return el;
  }

  const document = {
    readyState: opts.readyState || "complete",
    documentElement: { style: smooth ? { scrollBehavior: "smooth" } : {}, scrollTop: 0 },
    body: makeEl("body"),
    createElement: function (tag) { return makeEl(tag); },
    getElementById: function (id) { return els.get(id) || null; },
    addEventListener: function (type, fn) { (onDoc[type] || (onDoc[type] = [])).push(fn); }
  };

  const win = {
    document: document,
    scrollY: 0,
    scrollTo: function (a) {
      scrolls.push(typeof a === "object" && a ? { top: a.top, behavior: a.behavior } : { top: a, behavior: undefined });
      win.scrollY = 0;
    },
    addEventListener: function (type, fn) { (onWin[type] || (onWin[type] = [])).push(fn); },
    matchMedia: function () { return { matches: reduced }; },
    setTimeout: function (fn) { queue.push(fn); return queue.length; },
    clearTimeout: function () {}
  };
  win.window = win;

  const context = {
    console,
    window: win,
    document,
    setTimeout: win.setTimeout,
    clearTimeout: win.clearTimeout
  };
  vm.createContext(context);
  vm.runInContext(read("btt.js"), context, { filename: "btt.js" });

  function flush() { while (queue.length) queue.shift()(); }
  function scroll(y) { win.scrollY = y; (onWin.scroll || []).forEach(function (fn) { fn(); }); }

  return {
    els, win, document, scrolls,
    button: () => els.get("bttBtn") || null,
    /* a stand-in for the AI tutor: ai.js owns #aiFab and #aiPanel */
    tutor: function (visible) {
      const fab = makeEl("button", "aiFab");
      if (!visible) { fab.hidden = true; fab.rect = { width: 0, height: 0 }; }
      const panel = makeEl("div", "aiPanel");
      panel.hidden = true;
      return { fab, panel };
    },
    flush, scroll,
    setReduced: function (v) { reduced = v; },
    setSmooth: function (v) { smooth = v; document.documentElement.style = v ? { scrollBehavior: "smooth" } : {}; },
    listeners: onWin,
    fireDocClick: function () { (onDoc.click || []).forEach(function (fn) { fn(); }); flush(); }
  };
}

/* ---- the module is wired into the deliverable ---- */
assert(read("build.sh").includes(" btt.js "), "build.sh inlines the back-to-top module");
const icons = read("icons.svg.html");
assert(icons.includes('id="i-top"'), "the sprite carries the back-to-top arrow");
const css = read("styles.css");
assert(css.includes(".btt-fab{position:fixed"), "the button is styled as a floating control");
assert(css.includes(".btt-fab[hidden]{display:none}"), "the author display rule cannot beat [hidden]");
assert(css.includes(".btt-fab.btt-stacked{bottom:84px}"), "it stands above the AI tutor's button");
assert(/@media print\{[^}]*\.btt-fab\{display:none!important\}/s.test(css),
  "the button is never printed");

/* ---- it builds once, into <body>, and nowhere near a sheet ---- */
const h = harness();
assert(h.win.BACK_TO_TOP, "btt.js registers window.BACK_TO_TOP");
assert.equal(typeof h.win.BACK_TO_TOP.sync, "function", "and can be re-checked");
assert.equal(typeof h.win.BACK_TO_TOP.toTop, "function", "and can be told to go to the top");
const btn = h.button();
assert(btn, "the button exists");
assert.equal(h.document.body.appended, 1, "one node is injected");
assert.equal(h.document.body.children[0], btn, "and it goes straight into <body>");
assert.equal(btn.className, "btt-fab no-print", "so it reads as platform chrome");
assert.equal(btn.attrs["aria-label"], "Back to top", "and says what it is");
assert(btn.innerHTML.includes("#i-top"), "drawing the sprite's arrow");
assert(h.listeners.scroll && h.listeners.scroll.length, "it listens for scrolling");
assert(h.listeners.offline && h.listeners.offline.length, "and for the connection dropping");

/* ---- it waits until there is something to go back from ---- */
assert.equal(btn.hidden, true, "hidden while the page is at the top");
h.scroll(h.win.BACK_TO_TOP.threshold - 1);
assert.equal(btn.hidden, true, "and one pixel before the threshold");
h.scroll(h.win.BACK_TO_TOP.threshold);
assert.equal(btn.hidden, false, "shown once the reader is a long way down");
h.scroll(4000);
assert.equal(btn.hidden, false, "and stays shown deeper into the pack");
h.scroll(0);
assert.equal(btn.hidden, true, "hidden again once back at the top");

/* ---- pressing it returns the page to the top ---- */
h.scroll(2600);
h.button().press();
assert.equal(h.scrolls.length, 1, "one press scrolls once");
assert.equal(h.scrolls[0].top, 0, "to the very top");
assert.equal(h.scrolls[0].behavior, "smooth", "smoothly, where the browser can");
assert.equal(btn.hidden, true, "and hides itself on arrival");

/* ---- unless the device asked for less motion ---- */
const still = harness({ reduced: true });
still.scroll(2600);
still.button().press();
assert.equal(still.scrolls.length, 1, "it still scrolls");
assert.equal(still.scrolls[0].behavior, undefined, "but not smoothly");

const old = harness({ smooth: false });      /* a browser with no scrollBehaviour */
old.scroll(2600);
old.button().press();
assert.equal(old.scrolls[0].behavior, undefined, "and an old browser just jumps");

/* ---- it shares the corner with the AI tutor without sitting on it ---- */
const stacked = harness();
stacked.tutor(true);
stacked.scroll(2600);
assert.equal(stacked.button().hidden, false, "still offered next to the tutor");
assert(stacked.button().classList.contains("btt-stacked"), "raised above the tutor's button");

/* ai.js hides its button when the device is offline */
const offline = harness();
offline.tutor(false);
offline.scroll(2600);
assert.equal(offline.button().hidden, false, "the button survives the tutor hiding");
assert(!offline.button().classList.contains("btt-stacked"), "and drops back into the corner");

/* ...and it stands down while the tutor's panel covers that corner */
const covered = harness();
const t = covered.tutor(true);
covered.scroll(2600);
assert.equal(covered.button().hidden, false, "offered while the panel is closed");
t.panel.hidden = false;
covered.scroll(2700);
assert.equal(covered.button().hidden, true, "hidden while the panel covers it");
t.panel.hidden = true;
covered.scroll(2700);
assert.equal(covered.button().hidden, false, "and back when the panel closes");

/* a click anywhere re-checks it, which is how a panel opening is noticed */
const clicked = harness();
const t2 = clicked.tutor(true);
clicked.scroll(2600);
t2.panel.hidden = false;
clicked.fireDocClick();
assert.equal(clicked.button().hidden, true, "a click on the tutor's button stands it down");

/* ---- the built deliverable carries all of it ---- */
const html = read("index.html");
assert(html.includes(read("btt.js").trim()), "btt.js is inside the built index.html");
assert(html.includes('id="i-top"'), "and so is the arrow it draws");
assert(html.includes(".btt-fab{position:fixed"), "and the styles that place it");
assert(html.includes('id="bttBtn"') || html.includes('"bttBtn"'), "and the button it builds");

console.log("back to top: ok (shows at " + h.win.BACK_TO_TOP.threshold + "px of scroll, hidden in print)");
