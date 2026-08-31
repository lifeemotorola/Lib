/* Node check for verbatim study notes: executes the real UNIT_NOTES /
   blockHtml / rich sources sliced from app.js against the real data files.
   Run:  node tests/notes-verbatim.js
   Verifies, for every subject in SUBJECTS below, that every unit carrying a
   `study` block list renders it as-is: headings present, **bold** converted
   to <b>, no ** left over, and the subject's spot facts survive.
   Add a subject to SUBJECTS when its units gain `study` blocks. */
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

/* Subjects to check. Each entry: the real data files (loaded in order — the
   7-9 file merges its Junior High units into the main curriculum), the
   curriculum global to read, and optional spot facts that must survive
   rendering in one named unit. */
const SUBJECTS = [
  { name: "Social Studies", global: "SS_CURRICULUM",
    files: ["data-ss.js", "data-ss79.js"],
    grades: 9,                     /* every unit from Grade 1 to Grade 9 must carry study[] */
    spots: [
      { grade: 1, period: "VI",
        facts: ["fifteen (15) counties", "26 July 1847", "eleven stripes"] },
      { grade: 4, period: "III",
        facts: ["1816", "Bushrod Washington", "26 July 1847"] },
      { grade: 7, period: "I",
        facts: ["12,742", "40,075", "24 time zones", "7 continents", "5 major oceans"] }
    ] },
  { name: "General Science", global: "SC_CURRICULUM",
    files: ["data-sc.js", "data-sc79.js"],
    grades: 9,                     /* every unit from Grade 1 to Grade 9 must carry study[] */
    spots: [{ grade: 7, period: "I",
              facts: ["Density = mass ÷ volume", "215 cm", "hydrocarbons"] },
            { grade: 1, period: "V",
              facts: ["December to February", "Mercury, Venus, Earth, Mars"] },
            { grade: 2, period: "VI",
              facts: ["Refuse – reason – run – report", "expiry date"] },
            { grade: 4, period: "III",
              facts: ["carbon dioxide + water", "chlorophyll"] },
            { grade: 5, period: "III",
              facts: ["1 kg = 1,000 g", "Fair test"] },
            { grade: 6, period: "V",
              facts: ["MA = load ÷ effort", "Efficiency = (work out ÷ work in) × 100 %"] },
            { grade: 6, period: "VI",
              facts: ["H₂O", "filtrate"] }] },
  { name: "English", global: "EN_CURRICULUM",
    files: ["data-en.js"],       /* one file holds Grades 1-9 for this subject */
    grades: 9,                    /* every unit from Grade 1 to Grade 9 must carry study[] */
    spots: [{ grade: 1, period: "I",
              facts: ["26 letters", "a, e, i, o, u (and sometimes y)"] },
            { grade: 4, period: "VI",
              facts: ["digraph", "two vowel letters, or a vowel and a w"] },
            { grade: 6, period: "IV",
              facts: ["past perfect"] },
            { grade: 7, period: "I",
              facts: ["sentence fragment"] },
            { grade: 8, period: "V",
              facts: ["The rain stopped", "Yours faithfully"] },
            { grade: 9, period: "II",
              facts: ["born in Harper in 1954", "first person throughout"] }] }
];

let grandTotal = 0;
for (const subj of SUBJECTS) {
  /* load the real curriculum data into the same context; publish the const
     on the sandbox so the harness can read it */
  for (const f of subj.files) {
    vm.runInContext(fs.readFileSync(path.join(root, f), "utf8") +
      "\n;globalThis." + subj.global + " = " + subj.global + ";", sandbox, { filename: f });
  }

  const units = sandbox[subj.global];
  if (!Array.isArray(units) || !units.length) {
    console.error("FAIL: " + subj.name + " curriculum did not load");
    process.exit(1);
  }

  const chk = sandbox.window.__check;
  if (!chk) { console.error("FAIL: renderer slice did not expose check hooks"); process.exit(1); }

  let studied = 0, bad = 0;
  for (const u of units) {
    if (!u.study || !u.study.length) continue;
    studied++;
    const blocks = chk.notes(u, u.period);
    if (!blocks.length) { console.error("FAIL: empty notes for", subj.name, u.grade, u.period); bad++; continue; }
    const html = blocks.map(b => chk.blockHtml(b)).join("\n");

    /* every study block must be rendered (verbatim) */
    for (const b of u.study) {
      if (b.k === "h3" && !html.includes("<h3>" + b.t.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</h3>")) {
        console.error("FAIL: heading missing:", subj.name, u.grade, u.period, b.t); bad++;
      }
    }
    /* bold markup converted, none left raw */
    const wantBold = (u.study.map(b => b.t || "").join("") + JSON.stringify(u.study))
      .match(/\*\*[^*]+\*\*/g) || [];
    if (wantBold.length && !/<b>/.test(html)) { console.error("FAIL: no <b> rendered", subj.name, u.grade, u.period); bad++; }
    if (/\*\*/.test(html)) { console.error("FAIL: raw ** left in output", subj.name, u.grade, u.period); bad++; }
    /* spot facts survive (subject-specific, if given) */
    for (const spot of subj.spots || []) {
      if (u.grade !== spot.grade || u.period !== spot.period) continue;
      for (const fct of spot.facts) {
        if (!html.includes(fct)) {
          console.error("FAIL: missing fact", JSON.stringify(fct), "in", subj.name, u.grade, u.period); bad++;
        }
      }
    }
  }
  /* `grades: N` — the subject claims verbatim notes for every unit in 1..N */
  if (subj.grades) {
    for (let g = 1; g <= subj.grades; g++) {
      for (const p of ["I", "II", "III", "IV", "V", "VI"]) {
        const u = units.find(x => x.grade === g && x.period === p);
        if (!u) { console.error("FAIL: no such unit", subj.name, "Grade", g, "Period", p); bad++; continue; }
        if (!u.study || !u.study.length) {
          console.error("FAIL: unit without verbatim study notes:", subj.name, "Grade", g, "Period", p);
          bad++;
        }
      }
    }
  }
  if (!studied) { console.error("FAIL: no " + subj.name + " unit carries a study block list"); process.exit(1); }
  if (bad) { console.error("FAIL: " + subj.name + " —", bad, "problem(s) across", studied, "verbatim unit(s)"); process.exit(1); }
  console.log("OK (" + subj.name + "):", studied, "unit(s) with verbatim study notes render as-is (bold converted, all sections present).");
  grandTotal += studied;
}
console.log("OK: " + grandTotal + " verbatim study unit(s) checked across " + SUBJECTS.length + " subject(s).");
