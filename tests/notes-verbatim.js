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
              facts: ["born in Harper in 1954", "first person throughout"] }] },
  { name: "Mathematics", global: "MA_CURRICULUM",
    files: ["data-ma.js", "data-ma79.js", "data-ma-sh.js"],
    grades: 9,                  /* every unit from Grade 1 to Grade 9 must carry study[] */
    spots: [{ grade: 1, period: "I",
              facts: ["members", "union", "3 + 2 = 5 children", "subset"] },
            { grade: 1, period: "III",
              facts: ["tens", "Counting by 2s, 5s and 10s", "1st, 2nd, 3rd, 4th, 5th"] },
            { grade: 2, period: "III",
              facts: ["36 − 17 = 19 girls", "7 + 6", ">", "<"] },
            { grade: 3, period: "III",
              facts: ["commutative", "associative", "distributive", "identity element"] },
            { grade: 4, period: "I",
              facts: ["hundred thousand", "births", "1,200 + 1,450 = 2,650"] },
            { grade: 4, period: "III",
              facts: ["LCM", "GCF", "3/7 + 2/7 = 5/7"] },
            { grade: 5, period: "III",
              facts: ["Pastor Pewee", "10 5/8 km", "3 2/8", "7 3/8"] },
            { grade: 5, period: "V",
              facts: ["circumference", "22/7 × 14 = 44 cm", "Equilateral"] },
            { grade: 6, period: "II",
              facts: ["23₅", "base five", "group by five"] },
            { grade: 6, period: "V",
              facts: ["reciprocal", "3/4 × 3/2", "π × radius²"] },
            { grade: 6, period: "VI",
              facts: ["HIV rate", "equation of two ratios", "bar graph"] },
            { grade: 7, period: "I",
              facts: ["sieve of Eratosthenes", "2² × 3 × 7"] },
            { grade: 7, period: "IV",
              facts: ["(−8) + (−5) − (−3)", "5x − 7 = 23"] },
            { grade: 8, period: "VI",
              facts: ["c² = a² + b²", "15 cm"] },
            { grade: 9, period: "I",
              facts: ["n(A ∪ B) = n(A) + n(B) − n(A ∩ B)", "A = P(1 + R ÷ 100)ⁿ"] },
            { grade: 9, period: "V",
              facts: ["sine θ", "opposite ÷ hypotenuse"] }] },
  { name: "French", global: "FR_CURRICULUM",
    files: ["data-fr.js", "data-fr79.js"],
    grades: 9,                  /* every unit from Grade 1 to Grade 9 must carry study[] */
    spots: [{ grade: 1, period: "I",
              facts: ["Bonjour", "Salutation + nom", "voyelles", "Comment ça va ?"] },
            { grade: 1, period: "II",
              facts: ["lundi", "sept jours", "le premier jour", "Aujourd'hui"] },
            { grade: 2, period: "I",
              facts: ["Je m'appelle", "je suis", "j'ai", "Enchanté"] },
            { grade: 2, period: "IV",
              facts: ["La saison sèche", "La saison des pluies", "Il pleut", "Quel temps fait-il ?"] },
            { grade: 3, period: "II",
              facts: ["J'aime mon père", "mon père", "ma mère", "l'arbre de famille"] },
            { grade: 3, period: "V",
              facts: ["C'est un tableau", "Qu'est-ce que c'est ?", "une règle", "un crayon"] },
            { grade: 4, period: "III",
              facts: ["Quelle heure est-il ?", "Il est trois heures", "et demie", "moins le quart"] },
            { grade: 4, period: "VI",
              facts: ["la voiture", "Je vais à l'école", "C'est mon vélo", "aller"] },
            { grade: 5, period: "II",
              facts: ["le médecin", "Je veux être", "Il est chanteur", "Cet instituteur"] },
            { grade: 5, period: "V",
              facts: ["l'accent aigu", "l'accent grave", "éléphant", "le frère"] },
            { grade: 6, period: "II",
              facts: ["le garçon", "les garçons", "l'homme", "L'élision"] },
            { grade: 6, period: "VI",
              facts: ["j'ai", "je suis", "J'ai mangé", "Je suis allé"] },
            { grade: 7, period: "I",
              facts: ["Je m'appelle", "J'ai treize ans"] },
            { grade: 8, period: "IV",
              facts: ["Combien coûte ce livre ?", "Il coûte cinq cents dollars."] },
            { grade: 9, period: "III",
              facts: ["plus grande que", "meilleur"] },
            { grade: 9, period: "IV",
              facts: ["Il a l'air triste", "avoir peur"] }] },
  { name: "Religious & Moral Education", global: "RM_CURRICULUM",
    files: ["data-rm.js", "data-rm79.js"],   /* 7-9 file appends its units into RM_CURRICULUM */
    grades: 9,                  /* every unit from Grade 1 to Grade 9 must carry study[] */
    spots: [{ grade: 1, period: "I",
              facts: ["The Creator", "Genesis 1:26-27", "Holy Quran 6:23"] },
            { grade: 1, period: "V",
              facts: ["Physical death", "Spiritual death", "Matthew 25:31-46"] },
            { grade: 2, period: "I",
              facts: ["six days", "Psalm 24:1-2", "Quran 2:164"] },
            { grade: 3, period: "II",
              facts: ["66 books", "114 surahs", "2 Timothy 3:16"] },
            { grade: 3, period: "V",
              facts: ["Conflict", "Conflict resolution", "Matthew 18:15-20"] },
            { grade: 4, period: "II",
              facts: ["Ten Commandments", "Constitution of the Republic of Liberia"] },
            { grade: 4, period: "VI",
              facts: ["John 3:16", "Repentance", "Sanctification"] },
            { grade: 5, period: "V",
              facts: ["Alhaji Nayyar", "Hijrah", "Savior of Mankind"] },
            { grade: 6, period: "I",
              facts: ["Big Bang Theory", "Genesis 1 and 2"] },
            { grade: 6, period: "IV",
              facts: ["Al-Fatiha", "Psalm 100:1-2"] },
            { grade: 7, period: "I",
              facts: ["Reconciliation", "2 Corinthians 5:18-19", "man to God"] },
            { grade: 8, period: "III",
              facts: ["Fornication", "Adultery", "HIV/AIDS"] },
            { grade: 8, period: "V",
              facts: ["Stewardship", "1 Peter 4:10"] },
            { grade: 9, period: "III",
              facts: ["Eid al-Fitr", "Eid al-Adha", "Christmas", "Easter"] },
            { grade: 9, period: "VI",
              facts: ["Chastity", "immorality", "temple of the Holy Spirit"] }] }
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
  /* `grades: N` — the subject claims verbatim notes for every unit in 1..N.
     `grades: {from: a, to: b}` claims them for the band a..b, which is how a
     subject whose notes cover only part of its range (Junior High, say) is
     checked without asking Grades 1-6 for notes they do not carry yet. */
  if (subj.grades) {
    const span = (typeof subj.grades === "number")
      ? { from: 1, to: subj.grades }
      : subj.grades;
    for (let g = span.from; g <= span.to; g++) {
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
