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
    spots: [{ grade: 10, period: "VI",
              facts: ["C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + heat energy", "hypogeal", "Delonix"] },
            { grade: 11, period: "III",
              facts: ["gross primary productivity", "net primary productivity", "loamy soil"] },
            { grade: 11, period: "V",
              facts: ["Punnett square", "crossing over", "fossil records"] },
            { grade: 12, period: "V",
              facts: ["resting potential", "action potential", "refractory period", "myelin sheath"] },
            { grade: 12, period: "VI",
              facts: ["0.002 mm diameter", "chlorination", "sewage disposal"] }] },
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
    spots: [{ grade: 10, period: "IV",
              facts: ["W = F × s", "KE = ½mv²", "P = work ÷ time"] },
            { grade: 10, period: "VI",
              facts: ["P₁V₁ = P₂V₂", "Brownian motion", "K = °C + 273"] },
            { grade: 11, period: "III",
              facts: ["V = IR", "1/R = 1/R₁ + 1/R₂ + 1/R₃", "E = I(R + r)"] },
            { grade: 11, period: "VI",
              facts: ["Vs/Vp = Ns/Np", "Fleming's left-hand rule", "VpIp = VsIs"] },
            { grade: 12, period: "I",
              facts: ["v = u + at", "F = ma", "centripetal force"] },
            { grade: 12, period: "V",
              facts: ["F = kq₁q₂/r²", "9×10⁹", "C = Q/V"] },
            { grade: 12, period: "VI",
              facts: ["E = mc²", "carbon-14", "uncertainty principle"] }] },
  { name: "Economics", global: "EC_CURRICULUM",
    files: ["data-ec.js"],
    grades: { from: 10, to: 12 },   /* Senior High band: every unit from Grade 10 to Grade 12 must carry study[] */
    spots: [{ grade: 10, period: "I",
              facts: ["the value of the next best alternative forgone", "Liberia practises the mixed economy"] },
            { grade: 10, period: "II",
              facts: ["quantity demanded exactly equals quantity supplied", "Giffen goods"] },
            { grade: 10, period: "III",
              facts: ["the extra output from each additional unit eventually falls", "cassava against rice"] },
            { grade: 10, period: "IV",
              facts: ["TU is at its maximum when MU is zero", "marginal rate of substitution"] },
            { grade: 10, period: "V",
              facts: ["used contraceptives consistently", "sum of the values divided by their number"] },
            { grade: 10, period: "VI",
              facts: ["transfers a public enterprise to private owners", "unlimited liability, limited capital"] },
            { grade: 11, period: "I",
              facts: ["percentage change in quantity demanded ÷ percentage change in price", "the size that matters"] },
            { grade: 11, period: "II",
              facts: ["price taker", "price maker"] },
            { grade: 11, period: "III",
              facts: ["breaks bulk and supplies the retailers"] },
            { grade: 11, period: "IV",
              facts: ["persons per square kilometre", "geometric", "arithmetic"] },
            { grade: 11, period: "V",
              facts: ["marginal cost = marginal revenue", "opportunity cost of the owner's own time, building and money"] },
            { grade: 11, period: "VI",
              facts: ["the hand hoe and the cutlass"] },
            { grade: 12, period: "I",
              facts: ["slash-and-burn", "trade by barter"] },
            { grade: 12, period: "II",
              facts: ["GNP minus depreciation", "consumption + investment + government spending + net exports", "value added by each industry"] },
            { grade: 12, period: "III",
              facts: ["double coincidence of wants", "medium of exchange", "cost-push"] },
            { grade: 12, period: "IV",
              facts: ["ratio of export prices to import prices", "exports grow cheaper and imports dearer"] },
            { grade: 12, period: "V",
              facts: ["rising share as income rises", "Watches over the world's money"] },
            { grade: 12, period: "VI",
              facts: ["one common external tariff", "cross-border investment flows"] }] },
  { name: "English Grammar", global: "EG_CURRICULUM",
    files: ["data-eg.js"],
    grades: { from: 10, to: 12 },   /* Senior High band: every unit from Grade 10 to Grade 12 must carry study[] */
    spots: [{ grade: 10, period: "I",
              facts: ["number, gender and person", "mine, yours, hers, ours, theirs"] },
            { grade: 10, period: "II",
              facts: ["am, is, are, was, were", "know, believe, remember, decide, love"] },
            { grade: 10, period: "III",
              facts: ["go, went, gone", "good, better, best"] },
            { grade: 10, period: "IV",
              facts: ["what kind?", "To what extent?"] },
            { grade: 10, period: "V",
              facts: ["for, and, nor, but, or, yet, so", "either … or, neither … nor"] },
            { grade: 10, period: "VI",
              facts: ["ran across", "that she came"] },
            { grade: 11, period: "I",
              facts: ["has/have started", "five forms"] },
            { grade: 11, period: "II",
              facts: ["two sentences run together with only a comma or nothing", "topic sentence"] },
            { grade: 11, period: "III",
              facts: ["guide words", "alphabetical order"] },
            { grade: 11, period: "IV",
              facts: ["i before e except after c", "their/there, peace/piece"] },
            { grade: 11, period: "V",
              facts: ["call number", "Survey", "Recite"] },
            { grade: 11, period: "VI",
              facts: ["Yours faithfully when no name is used", "state the post sought"] },
            { grade: 12, period: "I",
              facts: ["between you and me", "the earlier of two past actions"] },
            { grade: 12, period: "II",
              facts: ["imagery, rhythm and often rhyme"] },
            { grade: 12, period: "III",
              facts: ["affect/effect", "look into"] },
            { grade: 12, period: "IV",
              facts: ["principal parts of a verb"] },
            { grade: 12, period: "V",
              facts: ["definition clues, example clues"] },
            { grade: 12, period: "VI",
              facts: ["eliminate the impossible options", "Budget the time in proportion to the marks"] }] },
  { name: "Geography", global: "GG_CURRICULUM",
    files: ["data-gg.js"],
    grades: { from: 10, to: 12 },   /* Senior High band: every unit from Grade 10 to Grade 12 must carry study[] */
    spots: [{ grade: 10, period: "I",
              facts: ["15° of longitude = 1 hour, and 1° = 4 minutes", "40 075", "12 756", "oblate spheroid"] },
            { grade: 10, period: "II",
              facts: ["marble, slate, gneiss, quartzite", "nitrogen and oxygen"] },
            { grade: 10, period: "III",
              facts: ["homestead, hamlet and farmstead", "push factors", "pull factors"] },
            { grade: 10, period: "IV",
              facts: ["one centimetre to one kilometre", "eastings and northings"] },
            { grade: 10, period: "V",
              facts: ["D.D.T.", "humification", "mineralization"] },
            { grade: 10, period: "VI",
              facts: ["Mount Cameroon, Kilimanjaro, Vesuvius", "sial", "sima"] },
            { grade: 11, period: "I",
              facts: ["Pangaea", "batholiths", "laccoliths"] },
            { grade: 11, period: "II",
              facts: ["artesian basin", "about 78 %", "land and sea breezes", "stalactites"] },
            { grade: 11, period: "III",
              facts: ["about 35 years", "torrid, temperate and frigid"] },
            { grade: 11, period: "IV",
              facts: ["the Grand Banks", "the coast of Peru", "the Sea of Japan", "the Katanga Region of DR Congo"] },
            { grade: 11, period: "V",
              facts: ["the Mount Coffee plant on the St Paul", "mineral (fossil) fuels: coal, natural gas, petroleum"] },
            { grade: 11, period: "VI",
              facts: ["the dot map, the choropleth, the flow map", "shares of 360°"] },
            { grade: 12, period: "I",
              facts: ["sixteen intermediate points of the compass", "trigonometrical station", "should differ by 180°"] },
            { grade: 12, period: "II",
              facts: ["demographic transition", "broad-based"] },
            { grade: 12, period: "III",
              facts: ["the market town, the administrative capital, the port"] },
            { grade: 12, period: "IV",
              facts: ["1926 at Harbel", "rubber, oil palm, cocoa, coffee and sugar cane"] },
            { grade: 12, period: "V",
              facts: ["the iron-ore railway to Buchanan", "Mount Coffee"] },
            { grade: 12, period: "VI",
              facts: ["Mano, St Paul, St John, Cestos, Cavally and Lofa", "Sapo"] }] },
  { name: "Literature", global: "LI_CURRICULUM",
    files: ["data-li.js"],
    grades: { from: 10, to: 12 },   /* Senior High band: every unit from Grade 10 to Grade 12 must carry study[] */
    spots: [{ grade: 10, period: "I",
              facts: ["Athens and the wood outside it", "blank verse", "A Midsummer Night's Dream"] },
            { grade: 10, period: "II",
              facts: ["trait — evidence — effect", "tragic flaw"] },
            { grade: 10, period: "III",
              facts: ["custom and change", "The Lion and the Jewel"] },
            { grade: 10, period: "IV",
              facts: ["oral tradition", "Second Class Citizen"] },
            { grade: 10, period: "V",
              facts: ["Title, author, genre and date.", "Cultural values"] },
            { grade: 10, period: "VI",
              facts: ["Do Not Go Gentle into That Good Night", "is what the reader feels"] },
            { grade: 11, period: "I",
              facts: ["She Stoops to Conquer", "Native Son"] },
            { grade: 11, period: "II",
              facts: ["Yaremi", "widowhood"] },
            { grade: 11, period: "III",
              facts: ["Shall I compare thee to a summer's day?", "Petrarchan"] },
            { grade: 11, period: "IV",
              facts: ["Othello", "plot diagram"] },
            { grade: 11, period: "V",
              facts: ["Harvest of Corruption", "libation"] },
            { grade: 11, period: "VI",
              facts: ["character web", "a whole life seen from outside"] },
            { grade: 12, period: "I",
              facts: ["A Government Driver on his Retirement", "the reader is left with"] },
            { grade: 12, period: "II",
              facts: ["characterization", "Faceless"] },
            { grade: 12, period: "III",
              facts: ["A Raisin in the Sun", "places a speaker instantly"] },
            { grade: 12, period: "IV",
              facts: ["carry away", "Crossing the Bar"] },
            { grade: 12, period: "V",
              facts: ["instruction word", "WASSCE"] },
            { grade: 12, period: "VI",
              facts: ["Plan for five minutes, write for forty, check for five.", "discuss, compare, analyse, illustrate, assess"] }] }
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
