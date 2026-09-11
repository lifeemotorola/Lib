/* Node check for the on-device usage counters (usage.js).
   Guards the two promises that make the module sellable and safe:

     - nothing is counted, and nothing is stored, until counting is switched on
     - the module contains no network call of any kind, so the claim
       "nothing is uploaded" stays literally true

   plus the boring parts: bad storage cannot break it, the report has the
   fields a pilot report needs, and the day index stays bounded.

   Run: node tests/usage.js */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const root = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(root, "usage.js"), "utf8");

/* ---------------- 1. the privacy promise: no network, ever ---------------- */
["fetch(", "XMLHttpRequest", "navigator.sendBeacon", "WebSocket", "EventSource", "https://", "http://"]
  .forEach(function (needle) {
    assert.ok(src.indexOf(needle) < 0,
      "usage.js must never touch the network, but it contains: " + needle);
  });
/* the only way data leaves is a downloaded file the user asked for */
assert.ok(/createObjectURL/.test(src), "usage.js should export via a downloaded Blob");

/* ---------------- fake storage + window ---------------- */
function makeStore() {
  const map = new Map();
  return {
    getItem: function (k) { return map.has(k) ? map.get(k) : null; },
    setItem: function (k, v) { map.set(k, String(v)); },
    removeItem: function (k) { map.delete(k); },
    _map: map
  };
}

function load(storageSeed) {
  const localStorage = makeStore();
  const sessionStorage = makeStore();
  if (storageSeed !== undefined) localStorage.setItem("platformUsage.v1", storageSeed);
  const sandbox = {
    console: console,
    localStorage: localStorage,
    sessionStorage: sessionStorage,
    Date: Date,
    Math: Math,
    JSON: JSON,
    Blob: function () {},
    URL: { createObjectURL: function () { return "blob:x"; }, revokeObjectURL: function () {} },
    document: { createElement: function () { return { click: function () {}, setAttribute: function () {} }; }, body: { appendChild: function () {}, removeChild: function () {} }, getElementById: function () { return null; }, querySelectorAll: function () { return []; } },
    setTimeout: function () {}
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox, { filename: "usage.js" });
  return { U: sandbox.window.USAGE, localStorage: localStorage, sessionStorage: sessionStorage };
}

/* ---------------- 2. off by default ---------------- */
{
  const { U, localStorage } = load();
  assert.strictEqual(U.enabled(), false, "counting must start switched off");
  assert.strictEqual(U.track("generate_pack", { subject: "en" }), false, "tracking is a no-op when off");
  assert.strictEqual(localStorage.getItem("platformUsage.v1"), null, "nothing is written while off");
  assert.strictEqual(U.total(), 0);
}

/* ---------------- 3. counting works once enabled ---------------- */
{
  const { U } = load();
  assert.strictEqual(U.setEnabled(true), true);
  U.setOrg("St. Patrick's High School");
  assert.strictEqual(U.track("generate_pack", { subject: "en" }), true);
  U.track("generate_pack", { subject: "en" });
  U.track("export_docx", { subject: "en" });
  U.track("print", { subject: "ma", grade: 6 });
  U.track("generate_plan", { subject: "en" });

  const r = U.report();
  assert.strictEqual(r.counting_enabled, true);
  assert.strictEqual(r.organisation, "St. Patrick's High School");
  assert.strictEqual(r.totals.generate_pack, 2);
  assert.strictEqual(r.totals.export_docx, 1);
  assert.strictEqual(r.totals.print, 1);
  assert.strictEqual(r.totals.generate_plan, 1);
  /* documents_produced counts work done, not mere visits */
  assert.strictEqual(r.documents_produced, 5);
  assert.ok(r.privacy.toLowerCase().indexOf("no data is uploaded") >= 0);

  const en = r.by_subject.filter(function (s) { return s.subject === "en"; })[0];
  assert.ok(en && en.counts.generate_pack === 2, "per-subject tallies are kept");
  assert.ok(r.by_day.length >= 1, "per-day tallies are kept");
}

/* ---------------- 4. unknown events and garbage input are ignored ---------------- */
{
  const { U } = load();
  U.setEnabled(true);
  assert.strictEqual(U.track("upload_everything"), false);
  assert.strictEqual(U.track("generate_pack", { subject: { evil: 1 } }), true, "bad meta must not throw");
  U.track("generate_pack", null);
  const r = U.report();
  assert.strictEqual(Object.keys(r.totals).length, 7, "only the seven known events exist");
  assert.strictEqual(r.totals.generate_pack, 2);
}

/* ---------------- 5. corrupt stored state is repaired, not fatal ---------------- */
{
  const { U } = load("{not json at all");
  assert.strictEqual(U.enabled(), false, "a corrupt file falls back to off");
  assert.strictEqual(U.total(), 0);
}
{
  const bad = JSON.stringify({ enabled: "yes", counts: { generate_pack: -5, nonsense: 99 }, days: { "not-a-date": 3 }, subjects: { en: "nope" } });
  const { U } = load(bad);
  const r = U.report();
  assert.strictEqual(r.counting_enabled, false, "enabled must be a real boolean");
  assert.strictEqual(r.totals.generate_pack, 0, "negative counts are rejected");
  assert.strictEqual(r.totals.nonsense, undefined, "unknown events are dropped");
  assert.strictEqual(r.by_day.length, 0, "malformed day keys are dropped");
}

/* ---------------- 6. the day index stays bounded ---------------- */
{
  const days = {};
  for (let i = 0; i < 520; i++) {
    const d = new Date(Date.UTC(2024, 0, 1 + i)).toISOString().slice(0, 10);
    days[d] = { generate_pack: 1 };
  }
  const { U } = load(JSON.stringify({ v: 1, enabled: true, counts: {}, days: days, subjects: {} }));
  const r = U.report();
  assert.ok(r.by_day.length <= 400, "at most 400 days are retained, got " + r.by_day.length);
  assert.strictEqual(r.by_day[r.by_day.length - 1].day > r.by_day[0].day, true, "the newest days are the ones kept");
}

/* ---------------- 7. one session per page load ---------------- */
{
  const { U } = load();
  U.setEnabled(true);
  assert.strictEqual(U.markSession(), true, "first call counts the visit");
  assert.strictEqual(U.markSession(), false, "a reload does not double-count");
  assert.strictEqual(U.report().totals.session, 1);
}

/* ---------------- 8. reset really resets ---------------- */
{
  const { U } = load();
  U.setEnabled(true);
  U.setOrg("Test School");
  U.track("print");
  U.reset();
  assert.strictEqual(U.enabled(), false);
  assert.strictEqual(U.org(), "");
  assert.strictEqual(U.total(), 0);
  assert.strictEqual(U.report().documents_produced, 0);
}

/* ---------------- 9. the build and the page carry the new files ---------------- */
{
  const build = fs.readFileSync(path.join(root, "build.sh"), "utf8");
  assert.ok(/brand\.js/.test(build), "build.sh must inline brand.js");
  assert.ok(/usage\.js/.test(build), "build.sh must inline usage.js");
  assert.ok(build.indexOf("brand.js") < build.indexOf("usage.js"), "brand.js must load before everything that reads it");

  const body = fs.readFileSync(path.join(root, "body.html"), "utf8");
  ["usgOn", "usgOrg", "usgSummary", "usgExport", "usgReset"].forEach(function (id) {
    assert.ok(body.indexOf('id="' + id + '"') >= 0, "body.html is missing #" + id);
  });
  assert.ok(/data-brand="tutor"/.test(body), "the tutor name should be white-labelled");

  const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
  assert.ok(/USAGE\.track\("generate_pack"/.test(app) || /USAGE\.track\(isLP\(\)/.test(app), "app.js must count generated packs");
  assert.ok(/USAGE\.track\("export_docx"/.test(app), "app.js must count Word exports");
  assert.ok(/USAGE\.track\("print"/.test(app), "app.js must count print runs");
  assert.ok(/USAGE\.init\(\)/.test(app), "app.js must initialise the counters");

  const teaching = fs.readFileSync(path.join(root, "teaching.js"), "utf8");
  assert.ok(/USAGE\.track\("save_library"/.test(teaching), "teaching.js must count library saves");
}

/* ---------------- 10. the summary shown to a teacher stays readable ---------------- */
{
  const { U } = load();
  assert.ok(/Counting is/.test(U.summaryHTML()), "the panel says what is happening when off");
  U.setEnabled(true);
  U.track("generate_pack", { subject: "en" });
  const html = U.summaryHTML();
  assert.ok(/Course packs generated/.test(html), "the panel names what is counted");
  assert.ok(/stored on this device only/.test(html), "the panel repeats the privacy promise");
}

console.log("OK: usage counters (usage.js) tests passed.");
