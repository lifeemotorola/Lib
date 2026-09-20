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

/* Common data sources. data-en.js and data-eg.js are loaded once below and
   shared by the English and Phonics checks, because const declarations cannot
   be re-declared in the same VM context. */
const PRELOAD = ["data-en.js", "data-eg.js"];
for (const f of PRELOAD) {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), sandbox, { filename: f });
}

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
            /* Grades 4 and 5 follow the guide's own grade split (Grade 4 =
               pp. 38-49, Grade 5 = pp. 50-63), and each unit's study text must
               teach that unit's own topic — these spots pin both. */
            { grade: 4, period: "I",
              facts: ["law of conservation of energy", "joules (J)"] },
            { grade: 4, period: "III",
              facts: ["1 kg = 1,000 g", "Fair test"] },
            { grade: 4, period: "V",
              facts: ["epidermis", "Anopheles mosquito"] },
            { grade: 5, period: "I",
              facts: ["work = force × distance", "MA = load ÷ effort", "inclined plane"] },
            { grade: 5, period: "II",
              facts: ["produced by vibration", "cannot travel through a vacuum", "340 metres"] },
            { grade: 5, period: "III",
              facts: ["balanced diet", "immune system", "Abstinence"] },
            { grade: 5, period: "IV",
              facts: ["cell → tissue → organ → system → organism", "absorption"] },
            { grade: 5, period: "V",
              facts: ["two or more atoms join together", "H₂O"] },
            { grade: 5, period: "VI",
              facts: ["greenhouse gases", "global warming", "carbon dioxide (CO₂)"] },
            { grade: 6, period: "V",
              facts: ["MA = load ÷ effort", "Efficiency = (work out ÷ work in) × 100 %"] },
            { grade: 6, period: "VI",
              facts: ["H₂O", "filtrate"] }] },
  { name: "English", global: "EN_CURRICULUM",
    files: [],                    /* data-en.js preloaded above (shared with Phonics) */
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
  { name: "Phonics", global: "PHO_CURRICULUM",   /* the phonics/word-study strand,
         Grades 1-9 from the English guides and Grades 10-12 from the English
         Grammar guide; see data-pho.js for the source-period mapping */
    files: ["data-pho.js"],       /* data-en.js and data-eg.js preloaded above */
    grades: 12,                   /* every unit from Grade 1 to Grade 12 must carry study[] */
    spots: [{ grade: 1, period: "I",
              facts: ["26 letters", "-at", "cat"] },
            { grade: 4, period: "VI",
              facts: ["oy", "ew", "diphthong"] },
            { grade: 7, period: "III",
              facts: ["-ive", "-ous", "-able"] },
            { grade: 10, period: "I",
              facts: ["-ness", "-ment", "-tion", "-ship"] },
            { grade: 12, period: "VI",
              facts: ["plurals", "commands", "connectives"] }] },
  { name: "Computer Science (Grades 1-12)", global: "CS_CURRICULUM",
    files: ["data-cs.js", "data-cs79.js", "data-cs1012.js"],   /* the two upper files merge into CS_CURRICULUM */
    grades: 12,                    /* every Grade 1-12 computing unit, all six periods, carries study[] */
    spots: [{ grade: 1, period: "I",     /* computers around us */
              facts: ["A computer is a machine that follows instructions"] },
            { grade: 3, period: "II",    /* finding and fixing mistakes */
              facts: ["A bug is a mistake"] },
            { grade: 4, period: "III",   /* how messages travel */
              facts: ["A network is a set of computers"] },
            { grade: 6, period: "II",    /* binary */
              facts: ["Binary uses only two digits, 0 and 1"] },
            { grade: 6, period: "III",   /* computing in Liberia */
              facts: ["Mobile money"] },
            { grade: 7, period: "VI",    /* algorithms, flowcharts and trace tables */
              facts: ["finite, ordered set of steps", "flowchart"] },
            { grade: 9, period: "II",    /* selection and repetition */
              facts: ["runs a set number of times", "accumulator"] },
            { grade: 10, period: "II",   /* number systems */
              facts: ["one hexadecimal digit stands for exactly four bits"] },
            { grade: 12, period: "IV",   /* algorithm efficiency */
              facts: ["Big-O notation", "linear search"] }] },
  { name: "Health Science (Elementary)", global: "HS_CURRICULUM",
    files: ["data-hs.js"],
    grades: 6,                     /* every Grade 1-6 health unit, all six periods, carries study[] */
    spots: [{ grade: 1, period: "III",    /* the handwashing unit */
              facts: ["between the fingers", "Water alone moves the dirt you can see"] },
            { grade: 4, period: "V",      /* the skin, soil and malaria unit */
              facts: ["insecticide-treated net", "pushes her mouth through", "topsoil"] },
            { grade: 6, period: "IV",     /* the reproductive system, puberty and sexual identity unit */
              facts: ["fallopian tube", "heterosexual"] },
            { grade: 6, period: "VI",     /* the healthy living, first aid and health services unit */
              facts: ["First Aid", "eight to ten hours", "cool running water"] }] },
  { name: "Mathematics", global: "MA_CURRICULUM",
    files: ["data-ma.js", "data-ma79.js", "data-ma-sh.js"],
    grades: { from: 1, to: 12 },  /* every unit from Grade 1 to Grade 12 must carry study[] */
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
              facts: ["sine θ", "opposite ÷ hypotenuse"] },
            /* Senior High Mathematics — 42 units over Grades 10-12 (11 in Grade 10,
               8 in Grade 11, 23 in Grade 12; several periods carry more than one unit) */
            { grade: 10, period: "III", title: "Plane Geometry",
              facts: ["Pythagoras", "hypotenuse", "(n − 2) × 180°", "135°"] },
            { grade: 10, period: "VI", title: "Statistics, Ratio and Rates, and Percentages",
              facts: ["frequency table", "box-and-whisker", "1 : 50 000", "360/1 800 × 100"] },
            { grade: 11, period: "I", title: "Indices and Logarithms",
              facts: ["index laws", "a⁰ = 1", "a⁻ⁿ = 1/aⁿ", "a^(m/n) = (ⁿ√a)ᵐ", "log (xy) = log x + log y"] },
            { grade: 11, period: "V", title: "Trigonometry",
              facts: ["SOH", "CAH", "TOA", "hypotenuse", "angle of elevation", "angle of depression"] },
            { grade: 12, period: "I", title: "Sequence and Series",
              facts: ["arithmetic progression", "geometric progression", "Tₙ = a + (n − 1)d", "S∞ = a/(1 − r)"] },
            { grade: 12, period: "II", title: "Standard Deviation",
              facts: ["variance", "standard deviation", "interquartile range", "Σd²", "σ = √variance"] },
            { grade: 12, period: "IV", title: "Numbers and Numeration",
              facts: ["prime factorization", "A × 10ⁿ", "modular arithmetic", "commutative"] },
            { grade: 12, period: "V", title: "Plane Geometry",
              facts: ["interior angles", "regular polygon", "cyclic quadrilateral", "tangent"] },
            { grade: 12, period: "VI", title: "Differentiation and Integration",
              facts: ["difference quotient", "derivative", "constant of integration", "area under a curve", "∫(6x² − 4x + 1) dx"] } ] },
  { name: "French", global: "FR_CURRICULUM",
    files: ["data-fr.js", "data-fr79.js", "data-fr1012.js"],
    grades: 12,                 /* every unit from Grade 1 to Grade 12 must carry study[] */
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
              facts: ["Chastity", "immorality", "temple of the Holy Spirit"] },
            { grade: 10, period: "I",
              facts: ["Le participe passé", "j'ai mangé", "hier soir"] },
            { grade: 11, period: "V",
              facts: ["300 million speakers", "Léopold Sédar Senghor", "franc CFA"] },
            { grade: 12, period: "I",
              facts: ["Il faut qu'il parte", "que je sois", "-e, -es, -e, -ions, -iez, -ent"] },
            { grade: 12, period: "VI",
              facts: ["plus-que-parfait", "Bonne chance", "d'abord, ensuite, puis"] }] },
  { name: "Physical Education", global: "PE_CURRICULUM",
    files: ["data-pe.js", "data-pe79.js"],   /* 7-9 file appends its units into PE_CURRICULUM */
    grades: 9,                  /* every unit from Grade 1 to Grade 9 must carry study[] */
    spots: [{ grade: 1, period: "I",
              facts: ["Beanbag Basket Relay", "five (5) feet", "One point"] },
            { grade: 1, period: "V",
              facts: ["squat position", "base of the neck and the top of the shoulders", "Charades"] },
            { grade: 3, period: "VI",
              facts: ["Rice, fufu, sugar cane, yam", "Tetherball", "Nutrition"] },
            { grade: 4, period: "IV",
              facts: ["one foot in contact with the ground", "Cooper 12-Minute Run", "Squirrel and Nut"] },
            { grade: 6, period: "IV",
              facts: ["30-minute run", "two feet (2') high above the floor", "Self esteem"] },
            { grade: 7, period: "II",
              facts: ["Ethyl alcohol", "20% of the alcohol is absorbed directly into the bloodstream from the stomach", "blood alcohol level"] },
            { grade: 8, period: "III",
              facts: ["making blood cells", "Ball-and-socket joint", "flexion"] },
            { grade: 9, period: "V",
              facts: ["below the waist", "backhand service drill", "drop shot"] }] },
  { name: "Biology", global: "BI_CURRICULUM",
    files: ["data-bi.js"],
    grades: { from: 10, to: 12 },   /* Senior High band: every unit from Grade 10 to Grade 12 must carry study[] */
    /* One spot per unit. Each pins the guide's own wording that was there
       first, then facts from the deepened material added alongside it, so the
       expansion can never silently displace the original text. */
    spots: [{ grade: 10, period: "I",
              facts: ["10× eyepiece with a 40× objective", "hypothesis", "cell theory"] },
            { grade: 10, period: "II",
              facts: ["body clearly segmented", "taxonomy", "dichotomous key"] },
            { grade: 10, period: "III",
              facts: ["primary endosperm nucleus (3n)",
                      "Days 6 to 13 — the follicular (proliferative) phase", "40 weeks (9 months)"] },
            { grade: 10, period: "IV",
              facts: ["chitinous exoskeleton", "moulting (ecdysis)", "5 or 6 instars"] },
            { grade: 10, period: "V",
              facts: ["6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "25 to 35 °C", "chlorophyll"] },
            { grade: 10, period: "VI",
              facts: ["C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + heat energy", "hypogeal", "Delonix",
                      "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + heat", "transpiration", "xylem"] },
            { grade: 11, period: "I",
              facts: ["resolution limit of the light microscope (about 0.2 µm)",
                      "helper T lymphocytes (CD4 cells)", "200 cells per mm³ of blood"] },
            { grade: 11, period: "II",
              facts: ["BMI = weight in kilograms ÷ (height in metres)²", "32 teeth in all",
                      "Escherichia coli O157"] },
            { grade: 11, period: "III",
              facts: ["gross primary productivity", "net primary productivity", "loamy soil",
                      "45 % mineral matter", "0.02 to 0.002 mm",
                      "growth rate = (births + immigrants) − (deaths + emigrants)",
                      "10 % law (Lindeman's law of efficiency)"] },
            { grade: 11, period: "IV",
              facts: ["2²³ = 8 388 608", "G1 (the first gap)", "diploid (2n)", "apoptosis"] },
            { grade: 11, period: "V",
              facts: ["Punnett square", "crossing over", "fossil records", "3 billion base pairs",
                      "64 possible codons", "9 : 3 : 3 : 1 ratio",
                      "anti-D immunoglobulin within 72 hours"] },
            { grade: 11, period: "VI",
              facts: ["5 to 7 gill slits opening separately to the outside", "phylum Chordata",
                      "notochord", "lateral line"] },
            { grade: 12, period: "I",
              facts: ["40 to 42 °C", "dog 3.1.4.2 / 3.1.4.3, total 42", "hollow", "diaphragm"] },
            { grade: 12, period: "II",
              facts: ["64 to 74 days", "200 to 300 million", "400 eggs in a lifetime",
                      "within 72 hours"] },
            { grade: 12, period: "III",
              facts: ["pepsin about pH 2", "200 to 300 square metres", "0.8 seconds", "9 metres"] },
            { grade: 12, period: "IV",
              facts: ["more than 99 % of the filtrate is reabsorbed", "300 to 500 million alveoli",
                      "150 kJ per mole", "95 % water, 2 % urea"] },
            { grade: 12, period: "V",
              facts: ["resting potential", "action potential", "refractory period", "myelin sheath",
                      "86 billion", "70 millivolts", "120 metres per second",
                      "90 mg per 100 cm³ of blood"] },
            { grade: 12, period: "VI",
              facts: ["0.002 mm diameter", "chlorination", "sewage disposal",
                      "zero coliforms in 100 cm³", "15 to 30 metres from any well",
                      "95 % for the measles, 80 to 85 % for the polio", "2 and 8 °C"] }] },
  { name: "Chemistry", global: "CH_CURRICULUM",
    files: ["data-ch.js"],
    grades: { from: 10, to: 12 },   /* Senior High band: every unit from Grade 10 to Grade 12 must carry study[] */
    spots: [{ grade: 10, period: "II",
              facts: ["1/1836", "relative atomic mass", "Aufbau"] },
            { grade: 10, period: "V",
              facts: ["6.02 × 10²³", "law of conservation of mass", "empirical formula"] },
            { grade: 11, period: "III",
              facts: ["pH + pOH = 14", "Arrhenius", "conjugate acid-base pair"] },
            { grade: 11, period: "VI",
              facts: ["0.693/k", "Le Chatelier", "dynamic"] },
            { grade: 12, period: "II",
              facts: ["glycerol", "thermosetting", "peptide bonds"] },
            { grade: 12, period: "IV",
              facts: ["limestone and clay", "cryolite", "copper + zinc — taps"] }] },
  { name: "Physics", global: "PH_CURRICULUM",
    files: ["data-ph.js"],
    grades: { from: 10, to: 12 },   /* Senior High band: every unit from Grade 10 to Grade 12 must carry study[] */
    /* Units follow the official Physics 10-12 guide (one unit per period,
       Semester One = I-III, Two = IV-VI), so the spots below are pinned to
       the guide's grade/period for each topic. */
    /* Each spot pins the guide's own wording first, then the worked figures
       and formulae added in the deepened material beside it. */
    spots: [{ grade: 10, period: "I",
              facts: ["SI system of measurement", "P = ρgh", "Archimedes",
                      "2.36 cm", "5.71 mm", "F₁/A₁ = F₂/A₂", "relative density"] },
            { grade: 10, period: "II",
              facts: ["v = u + at", "F = ma", "9.8 m/s²",
                      "50 km/h", "4 m/s²", "2200 N", "gradient"] },
            { grade: 10, period: "III",
              facts: ["W = F × s", "KE = ½mv²", "P = work ÷ time", "mechanical advantage",
                      "P = F × v", "2500 W", "MA = effort arm ÷ load arm", "velocity ratio"] },
            { grade: 10, period: "IV",
              facts: ["P₁V₁ = P₂V₂", "K = °C + 273",
                      "ΔA = 2αAΔθ", "anomalous expansion", "−273 °C", "108 kPa"] },
            { grade: 10, period: "V",
              facts: ["F = kq₁q₂/r²", "9×10⁹", "C = Q/V",
                      "1.6 × 10⁻¹⁹ C", "Q = ne", "9 × 10⁵ N/C", "gold-leaf electroscope"] },
            { grade: 10, period: "VI",
              facts: ["Brownian motion", "Hooke",
                      "F = ke", "Young's modulus", "surface tension", "capillarity"] },
            { grade: 11, period: "I",
              facts: ["centripetal force", "parabola", "Simple harmonic",
                      "T = 2π√(l/g)", "6.4 m/s", "45°", "projectile"] },
            { grade: 11, period: "II",
              facts: ["equilibrant", "friction", "centre of gravity",
                      "cosine law", "86.6 N", "normal reaction", "triangle of forces"] },
            { grade: 11, period: "III",
              facts: ["p = mv", "impulse", "elastic collisions",
                      "Impulse = force × time = change of momentum", "10 N s", "14 m/s",
                      "67 500 J"] },
            { grade: 11, period: "IV",
              facts: ["Q = mcΔT", "Q = mL", "vacuum flask",
                      "3.36 × 10⁵ J/kg", "2.26 × 10⁶ J/kg", "C = mc", "method of mixtures"] },
            { grade: 11, period: "V",
              facts: ["v = fλ", "Doppler", "beats",
                      "f = v ÷ 2L", "20 Hz to 20 000 Hz", "349 m/s", "ultrasound"] },
            { grade: 11, period: "VI",
              facts: ["reflection", "electromagnetic spectrum", "pinhole",
                      "1/f = 1/u + 1/v", "magnification m = v ÷ u", "c = 3 × 10⁸ m/s",
                      "total internal reflection"] },
            { grade: 12, period: "I",
              facts: ["Snell", "critical angle", "dispersion",
                      "n = sin i ÷ sin r", "sin C = 1 ÷ n", "real depth ÷ apparent depth",
                      "dioptre"] },
            { grade: 12, period: "II",
              facts: ["V = IR", "1/R = 1/R₁ + 1/R₂ + 1/R₃", "E = I(R + r)", "kilowatt-hour",
                      "R = ρL/A", "I = Q/t", "E = V + Ir", "0.17 Ω"] },
            { grade: 12, period: "III",
              facts: ["Vs/Vp = Ns/Np", "Fleming's left-hand rule", "VpIp = VsIs",
                      "flux density B = Φ/A", "F = BIL", "Eₛ ÷ Eₚ = Nₛ ÷ Nₚ = Iₚ ÷ Iₛ",
                      "domain theory"] },
            { grade: 12, period: "IV",
              facts: ["r.m.s.", "diode", "ring circuit", "V_rms = V₀ ÷ √2 = 0.707 V₀",
                      "Z = √(R² + (X_L − X_C)²)", "120/240 V", "60 Hz"] },
            { grade: 12, period: "V",
              facts: ["E = mc²", "carbon-14", "half-life",
                      "92 protons, 92 electrons and 146 neutrons", "9.11 × 10⁻³¹ kg",
                      "11 500 years", "Carbon-14 dating"] },
            { grade: 12, period: "VI",
              facts: ["uncertainty principle", "accelerator", "photoelectric equation",
                      "λ = h ÷ p", "Δx · Δp ≥ h ÷ 4π", "hf = W₀ + KE_max",
                      "6.63 × 10⁻¹⁹ J"] }] },
  { name: "Economics", global: "EC_CURRICULUM",
    files: ["data-ec.js"],
    grades: { from: 10, to: 12 },   /* Senior High band: every unit from Grade 10 to Grade 12 must carry study[] */
    /* One spot per unit. Each pins the guide's own wording first, then facts
       from the deepened material appended alongside it, so the expansion can
       never silently displace the original text. */
    spots: [
            { grade: 10, period: "I",
              facts: ["the value of the next best alternative forgone", "Liberia practises the mixed economy", "Lionel Robbins (1932)", "ends and scarce means", "Adam Smith, 1776", "Marshall, 1890", "the next best alternative, not every alternative", "the fallacy of composition"] },
            { grade: 10, period: "II",
              facts: ["quantity demanded exactly equals quantity supplied", "Giffen goods", "EQUILIBRIUM", "market clearing price", "income effect", "substitution effect", "consumer's surplus", "A ceiling above equilibrium has no effect at all"] },
            { grade: 10, period: "III",
              facts: ["the extra output from each additional unit eventually falls", "cassava against rice", "law of increasing opportunity cost", "not equally suited", "Adam Smith's pin factory", "limited by the extent of the market", "Capital formation"] },
            { grade: 10, period: "IV",
              facts: ["TU is at its maximum when MU is zero", "marginal rate of substitution", "MU of A ÷ price of A = MU of B ÷ price of B", "3 plates of rice (L$6) and 4 pieces of fish (L$4)", "diamond-water paradox", "two indifference curves can never cross"] },
            { grade: 10, period: "V",
              facts: ["sum of the values divided by their number", "used contraceptives consistently", "48.25", "value that occurs most often", "(item ÷ total) × 360", "76 of the 100 had knowledge"] },
            { grade: 10, period: "VI",
              facts: ["transfers a public enterprise to private owners", "unlimited liability, limited capital", "partnership deed", "sleeping (dormant) partner", "certificate of incorporation", "Retained profit (ploughed back)", "memorandum of association"] },
            { grade: 11, period: "I",
              facts: ["percentage change in quantity demanded ÷ percentage change in price", "the size that matters", "PED = 10 ÷ 20 = ", "0.5, inelastic", "3.0, elastic", "+1.25", "perfectly inelastic (PES = 0)"] },
            { grade: 11, period: "II",
              facts: ["price taker", "price maker", "kinked demand curve", "excess capacity", "X-inefficiency", "price discriminate", "vertical gap", "interdependence"] },
            { grade: 11, period: "III",
              facts: ["breaks bulk and supplies the retailers", "place utility", "of valuable things owned at a point in time", "Economies of scale", "Cooperative marketing"] },
            { grade: 11, period: "IV",
              facts: ["persons per square kilometre", "geometric", "arithmetic", "(Births in the year ÷ total population) × 1 000", "66.7 per 100 workers", "demographic transition", "optimum is not a fixed number", "density is not the test"] },
            { grade: 11, period: "V",
              facts: ["marginal cost = marginal revenue", "opportunity cost of the owner's own time, building and money", "MC is 80 when AC rises to 70.0", "L$180", "normal profit", "MC cuts AC and AVC"] },
            { grade: 11, period: "VI",
              facts: ["the hand hoe and the cutlass", "Registration and titling", "warehouse receipts", "It feeds the nation", "foreign exchange", "cooperative marketing"] },
            { grade: 12, period: "I",
              facts: ["Development, Growth and Planning", "Underdeveloped, Developing and Developed Economies", "indicative", "imperative (compulsory)", "vicious circle", "Human Development Index", "slash-and-burn"] },
            { grade: 12, period: "II",
              facts: ["GNP minus depreciation", "consumption + investment + government spending + net exports", "value added by each industry", "100 + 60 + 90 = L$250", "GNP = 500 + 40 − 60 = L$480 million", "S + T + M = I + G + X", "import substitution", "double counting"] },
            { grade: 12, period: "III",
              facts: ["double coincidence of wants", "medium of exchange", "cost-push", "credit multiplier is 1 ÷ reserve ratio = 5", "L$500 000", "legal tender", "Debtors gain and creditors lose", "stagflation", "disguised (underemployment)"] },
            { grade: 12, period: "IV",
              facts: ["ratio of export prices to import prices", "exports grow cheaper and imports dearer", "(90 ÷ 120) × 100 = ", "law of comparative cost", "infant industry", "dumping"] },
            { grade: 12, period: "V",
              facts: ["Watches over the world's money", "canons of taxation", "incidence", "A flat L$500 poll tax", "customs duties", "International Monetary Fund"] },
            { grade: 12, period: "VI",
              facts: ["one common external tariff", "cross-border investment flows", "Treaty of Lagos in 1975", "trade diversion", "resource curse", "rules of origin"] }] },
  { name: "English Grammar", global: "EG_CURRICULUM",
    files: ["data-eg.js"],
    grades: { from: 10, to: 12 },   /* Senior High band: every unit from Grade 10 to Grade 12 must carry study[] */
    /* One spot per unit. Each pins the guide's own wording first, then facts
       from the deepened material appended alongside it, so the expansion can
       never silently displace the original text. */
    spots: [{ grade: 10, period: "I",
              facts: ["number, gender and person", "mine, yours, hers, ours, theirs",
                      "Kollie's machete", "dos and don'ts"] },
            { grade: 10, period: "II",
              facts: ["am, is, are, was, were", "know, believe, remember, decide, love",
                      "trudged, not walked slowly", "Do he know?"] },
            { grade: 10, period: "III",
              facts: ["go, went, gone", "good, better, best",
                      "Lay, laid, laying", "has eaten, not has ate"] },
            { grade: 10, period: "IV",
              facts: ["what kind?", "To what extent?",
                      "the very spot", "carefullest"] },
            { grade: 10, period: "V",
              facts: ["for, and, nor, but, or, yet, so", "either … or, neither … nor",
                      "Listen TO the instructions", "enter into the house"] },
            { grade: 10, period: "VI",
              facts: ["ran across", "that she came",
                      "look the child after", "I LOOK FORWARD TO the holidays"] },
            { grade: 11, period: "I",
              facts: ["has/have started", "five forms",
                      "By Friday we shall have finished the wall", "Rice needs water"] },
            { grade: 11, period: "II",
              facts: ["two sentences run together with only a comma or nothing", "topic sentence",
                      "no object to promote", "is the opposite disease"] },
            { grade: 11, period: "III",
              facts: ["guide words", "alphabetical order",
                      "car comes before card, card before care", "Twelfth Night under T"] },
            { grade: 11, period: "IV",
              facts: ["i before e except after c", "their/there, peace/piece",
                      "seize, weird, foreign, ancient", "priviLEGE"] },
            { grade: 11, period: "V",
              facts: ["call number", "Survey", "Recite",
                      "000 knowledge in general, 100 philosophy and psychology", "the thing already named"] },
            { grade: 11, period: "VI",
              facts: ["Yours faithfully when no name is used", "state the post sought",
                      "post-nominals and designation of office", "the inside address"] },
            { grade: 12, period: "I",
              facts: ["between you and me", "the earlier of two past actions",
                      "a death done yesterday belongs to the past simple", "she has GONE to Ganta"] },
            { grade: 12, period: "II",
              facts: ["imagery, rhythm and often rhyme",
                      "a fishing town", "AABB for the couplet"] },
            { grade: 12, period: "III",
              facts: ["affect/effect", "look into",
                      "the only revision book that ever shrinks", "give the single verb the phrase hides"] },
            { grade: 12, period: "IV",
              facts: ["principal parts of a verb",
                      "red thread test", "every fact supports a topic sentence"] },
            { grade: 12, period: "V",
              facts: ["definition clues, example clues",
                      "guess from the neighbourhood, test by substitution", "the count never lies"] },
            { grade: 12, period: "VI",
              facts: ["eliminate the impossible options", "Budget the time in proportion to the marks",
                      "an unfinished answer scores its part", "six hours of sleep is worth more"] }] },
  { name: "Geography", global: "GG_CURRICULUM",
    files: ["data-gg.js"],
    grades: { from: 10, to: 12 },   /* Senior High band: every unit from Grade 10 to Grade 12 must carry study[] */
    /* One spot per unit, guide wording first and the deepened figures after,
       exactly as in the Physics, Biology and Chemistry entries above. */
    spots: [{ grade: 10, period: "I",
              facts: ["15° of longitude = 1 hour, and 1° = 4 minutes", "40 075", "12 756", "oblate spheroid",
                      "the bulge the spin makes", "a meridian of convenience"] },
            { grade: 10, period: "II",
              facts: ["marble, slate, gneiss, quartzite", "nitrogen and oxygen",
                      "talc 1, gypsum 2, calcite 3, fluorite 4", "hematite and magnetite in quartz bands"] },
            { grade: 10, period: "III",
              facts: ["homestead, hamlet and farmstead", "push factors", "pull factors",
                      "by the rule of 70", "the hinge on which Africa's next thirty years turn"] },
            { grade: 10, period: "IV",
              facts: ["one centimetre to one kilometre", "eastings and northings",
                      "along the corridor, up the stairs", "the only one that survives a photocopy"] },
            { grade: 10, period: "V",
              facts: ["D.D.T.", "humification", "mineralization",
                      "three-quarters of the land stands north of the Equator",
                      "soil is not renewable on a human clock"] },
            { grade: 10, period: "VI",
              facts: ["Mount Cameroon, Kilimanjaro, Vesuvius", "sial", "sima",
                      "origin, not height", "Mount Wuteve"] },
            { grade: 11, period: "I",
              facts: ["Pangaea", "batholiths", "laccoliths",
                      "a fingernail's patience widening an ocean", "the outer core's shadow proves it liquid"] },
            { grade: 11, period: "II",
              facts: ["artesian basin", "about 78 %", "land and sea breezes", "stalactites",
                      "no drop forms on a dry, clean nothing", "building up from the floor"] },
            { grade: 11, period: "III",
              facts: ["about 35 years", "torrid, temperate and frigid",
                      "4 500–5 000 mm", "equability against extremity"] },
            { grade: 11, period: "IV",
              facts: ["the Grand Banks", "the coast of Peru", "the Sea of Japan", "the Katanga Region of DR Congo",
                      "the baobab's cork, the grass's buried buds", "cut no faster than the stand regrows"] },
            { grade: 11, period: "V",
              facts: ["the Mount Coffee plant on the St Paul", "mineral (fossil) fuels: coal, natural gas, petroleum",
                      "the machines that make machines", "a legal location factor"] },
            { grade: 11, period: "VI",
              facts: ["the dot map, the choropleth, the flow map", "shares of 360°",
                      "the big circle then shouts four times too loud", "Closed for counting, open for explaining"] },
            { grade: 12, period: "I",
              facts: ["sixteen intermediate points of the compass", "trigonometrical station", "should differ by 180°",
                      "easting first, always", "300 m²"] },
            { grade: 12, period: "II",
              facts: ["demographic transition", "broad-based",
                      "the level that replaces is 2.1", "the most reliable contraceptive ever legislated"] },
            { grade: 12, period: "III",
              facts: ["the market town, the administrative capital, the port",
                      "the textbook primate", "the nearest land the city will not pay for"] },
            { grade: 12, period: "IV",
              facts: ["1926 at Harbel", "rubber, oil palm, cocoa, coffee and sugar cane",
                      "the fly, the breed, the feed and the vet", "the timing, not the hours, is the constraint"] },
            { grade: 12, period: "V",
              facts: ["the iron-ore railway to Buchanan", "Mount Coffee",
                      "price of processing", "a subsidy to the farmer written in gravel"] },
            { grade: 12, period: "VI",
              facts: ["Mano, St Paul, St John, Cestos, Cavally and Lofa", "Sapo",
                      "579 km of surf", "the carbon in the trees is money"] }] },
  /* History's notes are authored explanations aligned to the PDF outline;
     this check verifies unchanged rendering, not verbatim PDF transcription. */
  { name: "History", global: "HI_CURRICULUM",
    files: ["data-hi.js"],
    grades: { from: 10, to: 12 },
    /* One spot per unit. Each pins the guide-aligned wording first, then facts
       from the deepened material appended alongside it, so the expansion can
       never silently displace the original text. */
    spots: [
            { grade: 10, period: "I",
              facts: ["Kush", "Napata", "Meroe", "Twenty-fifth Dynasty", "absence of surviving writing", "not the absence of events", "Distinguish observation from inference", "Piye"] },
            { grade: 10, period: "II",
              facts: ["Kiswahili", "Sudan belt", "Battle of Adwa in 1896", "Kebra Nagast", "monsoon", "Bantu"] },
            { grade: 10, period: "III",
              facts: ["26 July 1847", "12 April 1980", "People's Redemption Council", "American Colonization Society", "1979 rice crisis", "1862"] },
            { grade: 10, period: "IV",
              facts: ["Ghana", "Sundiata Keita", "Mansa Musa", "1591", "al-Bakri", "Tarikh al-Sudan", "Tondibi"] },
            { grade: 10, period: "V",
              facts: ["Kanem-Bornu", "Idris Alooma", "Oba", "Oyo Mesi", "Republic of Benin", "brass"] },
            { grade: 10, period: "VI",
              facts: ["Middle Passage", "1807", "Fertile Crescent", "1833", "1865", "first recorded in European accounts"] },
            { grade: 11, period: "I",
              facts: ["Fertile Crescent", "Tigris and Euphrates", "Code of Hammurabi", "Epic of Gilgamesh", "Phoenician"] },
            { grade: 11, period: "II",
              facts: ["Athens", "Sparta", "Alexander", "476 CE", "Peloponnesian War", "323 BCE", "Alexandria", "transformation"] },
            { grade: 11, period: "III",
              facts: ["papacy", "Ignatius Loyola", "1517", "Council of Trent", "Augustine of Hippo"] },
            { grade: 11, period: "IV",
              facts: ["Paris and Oxford", "Thomas Aquinas", "after 1000", "Black Death", "1347", "Charlemagne", "800 CE"] },
            { grade: 11, period: "V",
              facts: ["Industrial Revolution", "Rousseau", "Voltaire", "Montesquieu", "raw cotton", "separation of powers", "spinning jenny"] },
            { grade: 11, period: "VI",
              facts: ["1914 to 1918", "1920", "1939 to 1945", "Berlin Conference of 1884", "Atlantic Charter", "1776", "1789"] },
            { grade: 12, period: "I",
              facts: ["1997, 2005, 2011 and 2017", "Ruth Perry", "ECOMOG", "Amos Sawyer", "December 1989", "David Kpormakpor", "Wilton Sankawulo"] },
            { grade: 12, period: "II",
              facts: ["Ministry of Foreign Affairs", "1862", "1963", "1945", "2002", "Firestone concession of 1926"] },
            { grade: 12, period: "III",
              facts: ["Joseph Jenkins Roberts", "Charles D. B. King", "1986", "1990", "1848", "1930", "Open Door"] },
            { grade: 12, period: "IV",
              facts: ["LAMCO", "Bong Mines", "Firestone", "enclave", "Buchanan", "smallholder"] },
            { grade: 12, period: "V",
              facts: ["UNMIL", "2003 to 2018", "Boutros Boutros-Ghali", "Kofi Annan", "Egypt, Ethiopia, Liberia and South Africa", "1960"] },
            { grade: 12, period: "VI",
              facts: ["Tanganyika", "Zanzibar", "1964", "Mau Mau", "Jomo Kenyatta", "TANU", "Julius Nyerere", "Milton Obote", "1941"] }] },
  { name: "Literature", global: "LI_CURRICULUM",
    files: ["data-li.js"],
    grades: { from: 10, to: 12 },   /* Senior High band: every unit from Grade 10 to Grade 12 must carry study[] */
    spots: [{ grade: 10, period: "I",
              facts: ["Athens and the wood outside it", "blank verse", "A Midsummer Night's Dream",
                      "the night itself is made to speak", "A line may hold more than one figure"] },
            { grade: 10, period: "II",
              facts: ["trait — evidence — effect", "tragic flaw",
                      "The fall is his as much as Iago's", "the audience is laughed with, not at"] },
            { grade: 10, period: "III",
              facts: ["custom and change", "The Lion and the Jewel",
                      "the dramatic irony doing the plot's work", "wants the community's verdict"] },
            { grade: 10, period: "IV",
              facts: ["oral tradition", "Second Class Citizen",
                      "the journey as a transaction rather than an adventure", "the first can be written by anyone who has read the book"] },
            { grade: 10, period: "V",
              facts: ["Title, author, genre and date.", "Cultural values",
                      "The boy will pay for the standing", "The paragraph ends where the taking happens"] },
            { grade: 10, period: "VI",
              facts: ["Do Not Go Gentle into That Good Night", "is what the reader feels",
                      "the statement of a feeling as a fact", "the reader's, the writer's, the world's, the fact's"] },
            { grade: 11, period: "I",
              facts: ["She Stoops to Conquer", "Native Son",
                      "the enormity is carried by the plainness", "the class that cannot be seen through"] },
            { grade: 11, period: "II",
              facts: ["Yaremi", "widowhood",
                      "the reward and the punishment are the ending", "the street takes the name, and the street does not give things back"] },
            { grade: 11, period: "III",
              facts: ["Shall I compare thee to a summer's day?", "Petrarchan",
                      "the subject in a sentence is enough of the what", "the reader learns more than the speaker means to tell"] },
            { grade: 11, period: "IV",
              facts: ["Othello", "plot diagram",
                      "the act ends where what is possible changes", "the murder is the paying, not the surprise"] },
            { grade: 11, period: "V",
              facts: ["Harvest of Corruption", "libation",
                      "the audience is learning what it has already decided", "the argument is where the drama lives"] },
            { grade: 11, period: "VI",
              facts: ["character web", "a whole life seen from outside",
                      "the want is what the novel measures", "the loneliness is the duty unowed"] },
            { grade: 12, period: "I",
              facts: ["A Government Driver on his Retirement", "the reader is left with",
                      "that makes the anger felt rather than told", "the line length is the thought's length"] },
            { grade: 12, period: "II",
              facts: ["characterization", "Faceless",
                      "the reader's third is the doing the novel leaves", "the from-inside is what the report cannot give"] },
            { grade: 12, period: "III",
              facts: ["A Raisin in the Sun", "places a speaker instantly",
                      "the move, not the funeral, is the ending the kind is named by", "The tells without the depth is the list"] },
            { grade: 12, period: "IV",
              facts: ["carry away", "Crossing the Bar",
                      "the point is what the question set", "the doing is where the mark is"] },
            { grade: 12, period: "V",
              facts: ["instruction word", "WASSCE",
                      "The mark is the effect in the one sentence", "the device in the sentence, the quotation in the sentence, the effect after"] },
            { grade: 12, period: "VI",
              facts: ["Plan for five minutes, write for forty, check for five.", "discuss, compare, analyse, illustrate, assess",
                      "the definition is the first sentence of the answer", "the half is the year, and the year is the rehearsal"] }] },
  /* WASSCE track — each subject is a single file of Grade 12 units (bio
     splits over two files) registered on the shared window.WA_<id> objects;
     every unit carries a verbatim study[] transcription of the syllabus. */
  { name: "WASSCE Mathematics", global: "window.WA_ma.units",
    files: ["data-wa.js", "data-wa-ma.js"],
    grades: 12,
    spots: [{ grade: 12, period: "A",
              facts: ["Number bases", "Modular arithmetic"] }] },
  { name: "WASSCE English Language", global: "window.WA_en.units",
    files: ["data-wa.js", "data-wa-en.js"],
    grades: 12,
    spots: [{ grade: 12, period: "A",
              facts: ["Paper 1 (Liberia candidates): lexis", "Building and building construction"] }] },
  { name: "WASSCE Biology", global: "window.WA_bio.units",
    files: ["data-wa.js", "data-wa-bio.js", "data-wa-bio2.js"],
    grades: 12,
    spots: [{ grade: 12, period: "A1",
              facts: ["Biology as a science of life", "scientific method"] }] },
  { name: "WASSCE Chemistry", global: "window.WA_ch.units",
    files: ["data-wa.js", "data-wa-ch.js"],
    grades: 12,
    spots: [{ grade: 12, period: "C1",
              facts: ["Measurement of physical quantities", "Scientific measurements and their importance in chemistry"] }] },
  { name: "WASSCE Physics", global: "window.WA_ph.units",
    files: ["data-wa.js", "data-wa-ph.js"],
    grades: 12,
    spots: [{ grade: 12, period: "P1",
              facts: ["Simple structure of matter", "Three physical states of matter: solid, liquid, gas"] }] },
  { name: "WASSCE Economics", global: "window.WA_ec.units",
    files: ["data-wa.js", "data-wa-ec.js"],
    grades: 12,
    spots: [{ grade: 12, period: "E1",
              facts: ["scarcity and choice", "land, labour, capital and entrepreneurship"] }] },
  { name: "WASSCE Geography", global: "window.WA_gg.units",
    files: ["data-wa.js", "data-wa-gg.js"],
    grades: 12,
    spots: [{ grade: 12, period: "G1",
              facts: ["contoured survey maps of parts of West Africa", "scale, measurement of distances, direction and bearing"] }] },
  { name: "WASSCE History", global: "window.WA_his.units",
    files: ["data-wa.js", "data-wa-his.js"],
    grades: 12,
    spots: [{ grade: 12, period: "H1",
              facts: ["Historiography and Historical Skills", "sources of history"] }] },
  { name: "WASSCE General Agriculture", global: "window.WA_ag.units",
    files: ["data-wa.js", "data-wa-ag.js"],
    grades: 12,
    spots: [{ grade: 12, period: "AG1",
              facts: ["Importance of agriculture to the national economy", "communal land ownership"] }] },
  { name: "WASSCE Literature in English", global: "window.WA_li.units",
    files: ["data-wa.js", "data-wa-li.js"],
    grades: 12,
    spots: [{ grade: 12, period: "LI1",
              facts: ["Amma Darko — Faceless", "trafficking of the young women (the girls) in Accra"] }] },
  { name: "WASSCE Christian Religious Studies", global: "window.WA_crs.units",
    files: ["data-wa.js", "data-wa-crs.js"],
    grades: 12,
    spots: [{ grade: 12, period: "CRS1",
              facts: ["God, the Creator; God, the Controller of the universe", "Gen. 1; 2"] }] }
];

let grandTotal = 0;
for (const subj of SUBJECTS) {
  /* load the real curriculum data into the same context; publish the const
     on the sandbox so the harness can read it */
  for (const f of subj.files) {
    vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), sandbox, { filename: f });
  }

  /* Resolve the curriculum reference: either a plain top-level const (the
     regular subject data files) or a dotted path such as window.WA_ma.units
     (the WASSCE subject files expose their units on the shared WA_<id>
     registry objects). */
  const units = vm.runInContext("(" + subj.global + ")", sandbox);
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
    /* spot facts survive (subject-specific, if given); `title` picks one unit
       when a period carries more than one (e.g. Senior High Mathematics) */
    for (const spot of subj.spots || []) {
      if (u.grade !== spot.grade || u.period !== spot.period) continue;
      if (spot.title && u.title !== spot.title) continue;
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
     checked without asking Grades 1-6 for notes they do not carry yet.
     Every unit in the span is checked, not just one per period, so a period
     that carries several units (Senior High Mathematics) is fully covered. */
  if (subj.grades) {
    const span = (typeof subj.grades === "number")
      ? { from: 1, to: subj.grades }
      : subj.grades;
    for (const u of units) {
      if (u.grade < span.from || u.grade > span.to) continue;
      if (!u.study || !u.study.length) {
        console.error("FAIL: unit without verbatim study notes:",
          subj.name, "Grade", u.grade, "Period", u.period, "—", u.title);
        bad++;
      }
    }
  }
  if (!studied) { console.error("FAIL: no " + subj.name + " unit carries a study block list"); process.exit(1); }
  if (bad) { console.error("FAIL: " + subj.name + " —", bad, "problem(s) across", studied, "verbatim unit(s)"); process.exit(1); }
  console.log("OK (" + subj.name + "):", studied, "unit(s) with verbatim study notes render as-is (bold converted, all sections present).");
  grandTotal += studied;
}
console.log("OK: " + grandTotal + " verbatim study unit(s) checked across " + SUBJECTS.length + " subject(s).");
