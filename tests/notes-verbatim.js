/* Node check for verbatim study notes: executes the real UNIT_NOTES /
   blockHtml / rich sources sliced from app.js against the real data files.
   Run:  node tests/notes-verbatim.js
   Verifies every unit that carries a `study` block list renders it as-is:
   headings present, **bold** converted to <b>, no ** left over. */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");

/* UNIT_NOTES lives in the "Study Notes" section; esc/nl/rich + blockHtml live
   later in the renderer section. Slice both, verbatim, and eval them. */
const aS = app.indexOf("/* ---------------- Study Notes & Explanations");
const aE = app.indexOf("/* ---------------- session mode");
const bS = app.indexOf("function esc(s)");
const bE = app.indexOf("var runhead");
if (aS < 0 || aE <= aS || bS < 0 || bE <= bS) {
  console.error("FAIL: could not slice renderer sources from app.js");
  process.exit(1);
}
let slice = app.slice(aS, aE) + "\n" + app.slice(bS, bE) +
  "\nwindow.__check = { notes: window.UNIT_NOTES, blockHtml: blockHtml, rich: rich };\n";

const sandbox = { window: {}, console };
sandbox.window.UNIT_NOTES = undefined;
vm.createContext(sandbox);
vm.runInContext(slice, sandbox);

/* load the real curriculum data into the same context; publish the const on
   globalThis so the next file (and this harness) can see it */
for (const f of ["data-ss.js", "data-ss79.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8") +
    "\n;globalThis.SS_CURRICULUM = SS_CURRICULUM;", sandbox, { filename: f });
}

const units = sandbox.SS_CURRICULUM;
if (!Array.isArray(units) || !units.length) {
  console.error("FAIL: SS_CURRICULUM did not load");
  process.exit(1);
}

const chk = sandbox.window.__check;
if (!chk) { console.error("FAIL: renderer slice did not expose check hooks"); process.exit(1); }

let studied = 0, bad = 0;
for (const u of units) {
  if (!u.study || !u.study.length) continue;
  studied++;
  const blocks = chk.notes(u, u.period);
  if (!blocks.length) { console.error("FAIL: empty notes for", u.grade, u.period); bad++; continue; }
  const html = blocks.map(b => chk.blockHtml(b)).join("\n");

  /* every study block must be rendered (verbatim) */
  for (const b of u.study) {
    if (b.k === "h3" && !html.includes("<h3>" + b.t.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</h3>")) {
      console.error("FAIL: heading missing:", u.grade, u.period, b.t); bad++;
    }
  }
  /* bold markup converted, none left raw */
  const wantBold = (u.study.map(b => b.t || "").join("") + JSON.stringify(u.study))
    .match(/\*\*[^*]+\*\*/g) || [];
  if (wantBold.length && !/<b>/.test(html)) { console.error("FAIL: no <b> rendered", u.grade, u.period); bad++; }
  if (/\*\*/.test(html)) { console.error("FAIL: raw ** left in output", u.grade, u.period); bad++; }
  /* spot facts survive */
  for (const s of ["12,742", "40,075", "24 time zones", "7 continents", "5 major oceans"]) {
    if (u.grade === 7 && u.period === "I" && !html.includes(s)) {
      console.error("FAIL: missing fact", s, "in", u.grade, u.period); bad++;
    }
  }
}
if (!studied) { console.error("FAIL: no unit carries a study block list"); process.exit(1); }
if (bad) { console.error("FAIL:", bad, "problem(s) across", studied, "verbatim unit(s)"); process.exit(1); }
console.log("OK:", studied, "unit(s) with verbatim study notes render as-is (bold converted, all sections present).");
