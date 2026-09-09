/* Unified platform: subject switching (English / French), shared renderer + .docx export. */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  var pack = null;

  var SUBJECTS = {
    en: {
      label: "English", icon: "sub-en", accent: "#0b6b3a",
      curriculum: function () { return EN_CURRICULUM; },
      engine: function () { return GEN_EN; },
      defaults: ["words", "match", "cloze", "phonics", "grammar", "pairs", "mcq", "passage", "write", "spelling"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "English_Grade" + g + "_Workbook.docx"; }
    },
    pho: {
      label: "Phonics", icon: "sub-pho", accent: "#c05a1e",
      curriculum: function () { return PHO_CURRICULUM; },
      engine: function () { return GEN_PHO; },
      defaults: ["patterns", "words", "match", "blend", "family", "complete", "odd", "unscramble", "build", "spelling"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Phonics_Grade" + g + "_Workbook.docx"; }
    },
    fr: {
      label: "French", icon: "sub-fr", accent: "#0b3b8c",
      curriculum: function () { return FR_CURRICULUM; },
      engine: function () { return GEN_FR; },
      defaults: ["vocab", "match", "fr2en", "en2fr", "mcq", "missing", "scramble", "copy", "write", "oral"],
      titleOf: function (t) { return t.fr; },
      file: function (g) { return "French_Grade" + g + "_Workbook.docx"; }
    },
    sc: {
      label: "General Science", icon: "sub-sc", accent: "#7a2e12",
      curriculum: function () { return SC_CURRICULUM; },
      engine: function () { return GEN_SC; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "classify", "diagram", "experiment", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "General_Science_Grade" + g + "_Workbook.docx"; }
    },
    ma: {
      label: "Mathematics", icon: "sub-ma", accent: "#5b2a86",
      curriculum: function () { return MA_CURRICULUM; },
      engine: function () { return GEN_MA; },
      defaults: ["terms", "worked", "drills", "drills2", "mcq", "word", "show", "challenge", "mental"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Mathematics_Grade" + g + "_Workbook.docx"; }
    },
    ss: {
      label: "Social Studies", icon: "sub-ss", accent: "#0d6a6a",
      curriculum: function () { return SS_CURRICULUM; },
      engine: function () { return GEN_SS; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "sort", "map", "casestudy", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Social_Studies_Grade" + g + "_Workbook.docx"; }
    },
    rm: {
      label: "Religious & Moral", icon: "sub-rm", accent: "#8a5a00",
      curriculum: function () { return RM_CURRICULUM; },
      engine: function () { return GEN_RM; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "sort", "compare", "casestudy", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Religious_and_Moral_Education_Grade" + g + "_Workbook.docx"; }
    },
    pe: {
      label: "Physical Education", icon: "sub-pe", accent: "#1f7a3d",
      curriculum: function () { return PE_CURRICULUM; },
      engine: function () { return GEN_PE; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "sort", "compare", "casestudy", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Physical_Education_Grade" + g + "_Workbook.docx"; }
    },
    bi: {
      label: "Biology", icon: "sub-bi", accent: "#0f5132",
      curriculum: function () { return BI_CURRICULUM; },
      engine: function () { return GEN_SC; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "classify", "diagram", "experiment", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Biology_Grade" + g + "_Workbook.docx"; }
    },
    ch: {
      label: "Chemistry", icon: "sub-ch", accent: "#7a1f5c",
      curriculum: function () { return CH_CURRICULUM; },
      engine: function () { return GEN_SC; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "worked", "classify", "diagram", "experiment", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Chemistry_Grade" + g + "_Workbook.docx"; }
    },
    ph: {
      label: "Physics", icon: "sub-ph", accent: "#1f4aa8",
      curriculum: function () { return PH_CURRICULUM; },
      engine: function () { return GEN_SC; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "classify", "diagram", "experiment", "worked", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Physics_Grade" + g + "_Workbook.docx"; }
    },
    ec: {
      label: "Economics", icon: "sub-ec", accent: "#1f5f7a",
      curriculum: function () { return EC_CURRICULUM; },
      engine: function () { return GEN_SS; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "worked", "sort", "map", "casestudy", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Economics_Grade" + g + "_Workbook.docx"; }
    },
    eg: {
      label: "English Grammar", icon: "sub-eg", accent: "#7a4a12",
      curriculum: function () { return EG_CURRICULUM; },
      engine: function () { return GEN_EN; },
      packName: "English Grammar",
      defaults: ["words", "match", "cloze", "grammar", "pairs", "mcq", "passage", "write", "spelling", "phonics"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "English_Grammar_Grade" + g + "_Workbook.docx"; }
    },
    gg: {
      label: "Geography", icon: "sub-gg", accent: "#1f6b4f",
      curriculum: function () { return GG_CURRICULUM; },
      engine: function () { return GEN_SS; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "worked", "sort", "map", "casestudy", "project", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Geography_Grade" + g + "_Workbook.docx"; }
    },
    ci: {
      label: "Civics", icon: "sub-ss", accent: "#16665a", coverArt: "ss",
      curriculum: function () { return CI_CURRICULUM; },
      engine: function () { return GEN_SS; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "casestudy", "apply", "project"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Civics_Grade" + g + "_Workbook.docx"; }
    },
    hi: {
      label: "History", icon: "sub-his", accent: "#8a5a00", coverArt: "ss",
      curriculum: function () { return HI_CURRICULUM; },
      engine: function () { return GEN_SS; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "sort", "map", "casestudy", "project", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "History_Grade" + g + "_Workbook.docx"; }
    },
    li: {
      label: "Literature", icon: "sub-li", accent: "#4a2f7a",
      curriculum: function () { return LI_CURRICULUM; },
      engine: function () { return GEN_LI; },
      defaults: ["terms", "match", "cloze", "devices", "characters", "themes", "tf", "short", "mcq", "passage", "write", "appreciate"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Literature_Grade" + g + "_Workbook.docx"; }
    },
    /* ---------------- Kindergarten (ECD) ----------------
       The national Early Childhood Development theme units for KG-I and
       KG-II (data-kg.js). Kindergarten plans teacher's lesson plans from the
       official ECD planners; in course-pack mode a KG level still produces
       the customizable cover sheet alone. The sheet engine is reused from
       Social Studies so the sheet list, save/restore validation and the
       teaching hooks keep working — KG packs never reach it. */
    kg: {
      label: "Kindergarten", icon: "sub-kg", accent: "#b3541e",
      curriculum: function () { return KG_CURRICULUM; },
      engine: function () { return GEN_SS; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Kindergarten_" + gradeText(g).replace(/\s+/g, "_") + "_Plans.docx"; }
    },
    /* ---------------- WASSCE session ----------------
     WASSCE = West African Senior School Certificate Examination (WAEC).
     One entry per subject of the WASSCE syllabus the school keeps in
     "Wassce_ Syllabus/". Each curriculum is a transcription of the official
     WAEC examination syllabus — one unit per syllabus topic — and the shared
     WASSCE engine (GEN_WA) builds Paper-1/Paper-2 style packs from it. */
    wma: {
      label: "WASSCE Mathematics", icon: "sub-ma", accent: "#5b2a86", wa: "ma",
      curriculum: function () { return WA_ma.units; },
      engine: function () { return GEN_WA; },
      waMeta: function () { return WA_ma; },
      defaults: ["objective", "theory", "tf", "terms"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "WASSCE_Mathematics_Core_Grade" + g + "_Pack.docx"; }
    },
    wen: {
      label: "WASSCE English", icon: "sub-en", accent: "#0b6b3a", wa: "en",
      curriculum: function () { return WA_en.units; },
      engine: function () { return GEN_WA; },
      waMeta: function () { return WA_en; },
      defaults: ["objective", "theory", "tf", "terms"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "WASSCE_English_Language_Grade" + g + "_Pack.docx"; }
    },
    wbio: {
      label: "WASSCE Biology", icon: "sub-bi", accent: "#0f5132", wa: "bio",
      curriculum: function () { return WA_bio.units; },
      engine: function () { return GEN_WA; },
      waMeta: function () { return WA_bio; },
      defaults: ["objective", "theory", "tf", "terms"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "WASSCE_Biology_Grade" + g + "_Pack.docx"; }
    },
    wch: {
      label: "WASSCE Chemistry", icon: "sub-ch", accent: "#7a1f5c", wa: "ch",
      curriculum: function () { return WA_ch.units; },
      engine: function () { return GEN_WA; },
      waMeta: function () { return WA_ch; },
      defaults: ["objective", "theory", "tf", "terms"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "WASSCE_Chemistry_Grade" + g + "_Pack.docx"; }
    },
    wph: {
      label: "WASSCE Physics", icon: "sub-mag", accent: "#1f4aa8", wa: "ph",
      curriculum: function () { return WA_ph.units; },
      engine: function () { return GEN_WA; },
      waMeta: function () { return WA_ph; },
      defaults: ["objective", "theory", "tf", "terms"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "WASSCE_Physics_Grade" + g + "_Pack.docx"; }
    },
    weco: {
      label: "WASSCE Economics", icon: "sub-ec", accent: "#1f5f7a", wa: "ec",
      curriculum: function () { return WA_ec.units; },
      engine: function () { return GEN_WA; },
      waMeta: function () { return WA_ec; },
      defaults: ["objective", "theory", "tf", "terms"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "WASSCE_Economics_Grade" + g + "_Pack.docx"; }
    },
    wgg: {
      label: "WASSCE Geography", icon: "sub-gg", accent: "#1f6b4f", wa: "gg",
      curriculum: function () { return WA_gg.units; },
      engine: function () { return GEN_WA; },
      waMeta: function () { return WA_gg; },
      defaults: ["objective", "theory", "tf", "terms"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "WASSCE_Geography_Grade" + g + "_Pack.docx"; }
    },
    whis: {
      label: "WASSCE History", icon: "sub-his", accent: "#8a5a00", wa: "his",
      curriculum: function () { return WA_his.units; },
      engine: function () { return GEN_WA; },
      waMeta: function () { return WA_his; },
      defaults: ["objective", "theory", "tf", "terms"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "WASSCE_History_Grade" + g + "_Pack.docx"; }
    },
    wag: {
      label: "WASSCE Agriculture", icon: "sub-ag", accent: "#4a6b12", wa: "ag",
      curriculum: function () { return WA_ag.units; },
      engine: function () { return GEN_WA; },
      waMeta: function () { return WA_ag; },
      defaults: ["objective", "theory", "tf", "terms"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "WASSCE_General_Agriculture_Grade" + g + "_Pack.docx"; }
    },
    wali: {
      label: "WASSCE Literature", icon: "sub-li", accent: "#4a2f7a", wa: "li",
      curriculum: function () { return WA_li.units; },
      engine: function () { return GEN_WA; },
      waMeta: function () { return WA_li; },
      defaults: ["objective", "theory", "tf", "terms"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "WASSCE_Literature_in_English_Grade" + g + "_Pack.docx"; }
    },
    wcrs: {
      label: "WASSCE Christian Studies", icon: "sub-crs", accent: "#7a4a12", wa: "crs",
      curriculum: function () { return WA_crs.units; },
      engine: function () { return GEN_WA; },
      waMeta: function () { return WA_crs; },
      defaults: ["objective", "theory", "tf", "terms"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "WASSCE_Christian_Relig_Studies_Grade" + g + "_Pack.docx"; }
    }
  };

  /* ---------------- education bands and levels ----------------
     Grades map to the three bands of the Liberian system. The band selector
     filters the level dropdown; a subject only shows the bands it covers.

     Kindergarten sits below Grade 1 and carries the two levels KG-I and KG-II.
     The transcribed ECD theme units (data-kg.js) are planned behind the
     Kindergarten subject's lesson plans; everywhere else the two levels stay
     **cover-page levels**: choosing one produces the customizable cover sheet
     on its own, never invented worksheets. They exist so a school can print a
     proper KG-I / KG-II cover for work it prepares itself. */
  var KG_LEVELS = [
    { id: "kg1", label: "KG-I",  name: "Kindergarten I"  },
    { id: "kg2", label: "KG-II", name: "Kindergarten II" }
  ];
  var BANDS = [
    /* `short` is what the level tab prints: "KG" keeps the tab narrow enough
       that the band row never overflows a small handset's panel. */
    { id: "kg", label: "Kindergarten", short: "KG", lo: 0, hi: 0, kg: true },
    { id: "el", label: "Elementary", short: "Elementary", lo: 1, hi: 6 },
    { id: "jh", label: "Junior High", short: "Junior High", lo: 7, hi: 9 },
    { id: "sh", label: "Senior High", short: "Senior High", lo: 10, hi: 12 }
  ];
  function kgOf(v) {
    for (var i = 0; i < KG_LEVELS.length; i++) if (KG_LEVELS[i].id === String(v)) return KG_LEVELS[i];
    return null;
  }
  function isKG(v) { return !!kgOf(v); }
  /* "kg1" -> "KG-I", 3 -> "Grade 3": the short name printed on a cover. */
  function gradeText(v) { var k = kgOf(v); return k ? k.label : "Grade " + v; }
  /* "kg1" -> "Kindergarten I", 3 -> "Grade 3": the long name for running heads. */
  function levelName(v) { var k = kgOf(v); return k ? k.name : "Grade " + v; }
  function bandOf(g) {
    if (isKG(g)) return BANDS[0];
    for (var i = 0; i < BANDS.length; i++) if (g >= BANDS[i].lo && g <= BANDS[i].hi) return BANDS[i];
    return BANDS[1];
  }
  /* The level dropdown lists real grades as numbers and the kindergarten
     levels as ids, so every read of it goes through this one helper. */
  function gradeVal() {
    var v = ($("#grade") || {}).value;
    return isKG(v) ? String(v) : (+v || 1);
  }
  window.PACK_LEVELS = {
    kg: KG_LEVELS, isKG: isKG, text: gradeText, name: levelName, band: bandOf
  };
  var curBand = "el";

  /* ---------------- responsive preview ----------------
     The A4 sheet is a fixed 210x297mm so that print and Word stay exact.
     When the viewport is narrower than one sheet we scale the preview with
     a CSS transform instead of resizing it, which keeps the paper geometry
     and the pagination identical on every device. */
  /* ---------------- body text size ---------------- */
  /* All the Word half-point sizes below were tuned against a 14pt body, so the
     chosen size is applied as a ratio against that baseline. */
  var FS_BASE = 14;
  function FSZ() {
    var v = parseFloat(($("#fsz") || {}).value);
    if (!isFinite(v)) v = 12;
    return Math.min(20, Math.max(8, v));
  }
  function applyFontSize() {
    document.documentElement.style.setProperty("--fs", FSZ() + "pt");
  }

  function fitPreview() {
    var doc = $("#doc");
    if (!doc) return;
    /* width of one A4 sheet in CSS pixels, measured from the document itself */
    var probe = document.createElement("div");
    probe.style.cssText = "width:210mm;position:absolute;visibility:hidden;pointer-events:none";
    document.body.appendChild(probe);
    var sheet = probe.getBoundingClientRect().width;
    document.body.removeChild(probe);
    if (!sheet) return;

    /* Every ancestor of the sheets is stretched by their fixed width, so the
       usable width is derived from the viewport minus the chrome around the
       preview column: page gutters, and the sidebar when it is displayed. */
    var wrap = document.querySelector(".wrap");
    var vw = document.documentElement.clientWidth || window.innerWidth;
    var avail = vw;
    if (wrap) {
      var ws = getComputedStyle(wrap);
      avail = Math.min(vw, parseFloat(ws.maxWidth) || vw)
        - parseFloat(ws.paddingLeft || 0) - parseFloat(ws.paddingRight || 0);
      var panel = document.querySelector(".panel");
      /* the sidebar only takes a column when it sits beside the preview */
      if (panel && getComputedStyle(panel).display !== "none"
          && !window.matchMedia("(max-width:980px)").matches) {
        avail -= panel.getBoundingClientRect().width + (parseFloat(ws.columnGap) || 0);
      }
    }
    if (!avail || avail < 40) return;
    var scale = avail / sheet;
    if (scale > 1) scale = 1;          /* never enlarge past real size */
    if (scale < 0.2) scale = 0.2;
    document.documentElement.style.setProperty("--ps", scale.toFixed(4));
  }

  var fitTimer = null;
  function fitSoon() {
    clearTimeout(fitTimer);
    fitTimer = setTimeout(fitPreview, 120);
  }

  /* ---------------- header & footer live application ----------------
     applyHF() reads HF.sheet and HF.plat and writes them into CSS variables
     and body data-* attributes so the running head, footer, top bar and new
     bottom bar render with the user's choices immediately. The sheet
     switches are CSS-only: the rendered markup always carries .phdr-l,
     .phdr-r, .pftr-l, .pftr-r and .pftr-pg, and the body attributes hide
     whichever the user has switched off. */
  function applyHF() {
    var sh = HF.sheet;
    var pl = HF.plat;
    var body = document.body;
    /* --- sheet header/footer on/off --- */
    body.setAttribute("data-sheet-hf", sh.on ? "true" : "false");
    body.setAttribute("data-phdr", (sh.on && sh.hdr && sh.hdr.on !== false) ? "true" : "false");
    body.setAttribute("data-pftr", (sh.on && sh.ftr && sh.ftr.on !== false) ? "true" : "false");
    body.setAttribute("data-phdr-l", sh.hdr && sh.hdr.on !== false ? "true" : "false");
    body.setAttribute("data-phdr-r", sh.hdr && sh.hdr.on !== false ? "true" : "false");
    body.setAttribute("data-pftr-l", sh.ftr && sh.ftr.on !== false ? "true" : "false");
    body.setAttribute("data-pftr-r", sh.ftr && sh.ftr.on !== false ? "true" : "false");
    body.setAttribute("data-pftr-pg", sh.ftr && sh.ftr.pg !== false ? "true" : "false");
    /* the printed sheet font size and colour override the CSS defaults via
       a single CSS variable on the document root so every .phead / .pfoot
       element updates at once */
    var hdrFs = (sh.hdr && sh.hdr.fs) ? sh.hdr.fs : 9;
    var ftrFs = (sh.ftr && sh.ftr.fs) ? sh.ftr.fs : 9;
    var hdrCol = (sh.hdr && sh.hdr.col) || "";
    var ftrCol = (sh.ftr && sh.ftr.col) || "";
    document.documentElement.style.setProperty("--sh-hf-hdr-fs", hdrFs + "pt");
    document.documentElement.style.setProperty("--sh-hf-ftr-fs", ftrFs + "pt");
    document.documentElement.style.setProperty("--sh-hf-hdr-col", hdrCol || "");
    document.documentElement.style.setProperty("--sh-hf-ftr-col", ftrCol || "");
    /* the user can opt out of the auto-bold on the left header text */
    document.documentElement.style.setProperty("--sh-hf-hdr-bold",
      sh.hdr && sh.hdr.bold === false ? "400" : "700");

    /* --- platform chrome (top blue bar) --- */
    body.setAttribute("data-plat-hd-on", pl.hdr.on !== false ? "true" : "false");
    body.classList.toggle("plat-hd-off", pl.hdr.on === false);
    /* write the user's text into the .top bar live so the preview matches the
       designer without waiting for a Generate click */
    var topTitle = $(".top-txt h1");
    var topSub = $(".top-txt p");
    if (topTitle) {
      var h1 = document.createElement("span");
      h1.innerHTML = topTitle.innerHTML;
      topTitle.textContent = (pl.hdr.title && pl.hdr.title.trim()) ||
        h1.textContent || "Liberian National Curriculum \u00b7 Course Pack Generator";
    }
    if (topSub) {
      var defSub = "English \u00b7 Phonics \u00b7 French \u00b7 General Science \u00b7 Mathematics \u00b7 Social Studies \u00b7 Religious & Moral Education \u00b7 Physical Education \u00b7 Biology \u00b7 Chemistry \u00b7 Physics \u00b7 Economics \u00b7 English Grammar \u00b7 Geography \u00b7 History \u00b7 Civics \u00b7 Literature<br><span class=\"top-sub\">KG-I & KG-II lesson plans & cover pages \u00b7 Grades 1\u201312 \u00b7 printable pupil workbooks, tests and answer keys \u00b7 works offline</span>";
      topSub.innerHTML = (pl.hdr.sub && pl.hdr.sub.trim()) || defSub;
    }
    var crest = document.querySelector(".crest");
    if (crest) crest.style.display = pl.hdr.crest === false ? "none" : "";
    var installBtn = $("#installApp");
    if (installBtn) installBtn.style.display = pl.hdr.install === false ? "none" : "";
    /* font size on the H1 */
    var topBar = document.querySelector(".top");
    if (topBar) {
      topBar.style.fontSize = (pl.hdr.fs || 1) + "rem";
      /* background colour override (blank = subject theme via CSS) */
      if (pl.hdr.bg) {
        topBar.style.background = "linear-gradient(135deg," + pl.hdr.bg + "," + pl.hdr.bg + ")";
      } else {
        topBar.style.background = "";
      }
    }

    /* --- platform chrome (new bottom bar) --- */
    body.setAttribute("data-pftr-on", pl.ftr.on ? "true" : "false");
    body.classList.toggle("plat-ft-off", !pl.ftr.on);
    var bot = $("#botFoot");
    if (bot) {
      bot.hidden = !pl.ftr.on;
      var botL = $("#botFootL");
      var botR = $("#botFootR");
      if (botL) botL.textContent = pl.ftr.l || "Liberian National Curriculum";
      if (botR) botR.textContent = pl.ftr.r || "Course Pack Generator";
      bot.style.fontSize = (pl.ftr.fs || 0.78) + "rem";
      if (pl.ftr.bg) {
        bot.style.background = "linear-gradient(135deg," + pl.ftr.bg + "," + pl.ftr.bg + ")";
      } else {
        bot.style.background = "";
      }
    }

    /* live preview block in the panel */
    if (window.PACK_PAINT_HF_PREVIEW) window.PACK_PAINT_HF_PREVIEW();
    /* the section-count badges at the top of the dropdowns */
    syncBadges();
  }
  window.PACK_APPLY_HF = applyHF;

  /* ---------------- on-screen help ----------------
     Short plain-language description of every exercise type, shown under its
     checkbox so a teacher knows what each sheet actually produces. */
  var SHEET_HELP = {
    objective:"WASSCE Paper-1 style objective questions with four options (a–d); the marked answer and its reason appear in the answer key.",
    theory:"WASSCE Paper-2 style theory/structured questions with ruled answer space; model answer outlines appear in the answer key.",
    terms:"A reference list of the period's key terms with meanings and examples.",
    words:"A reference list of the period's vocabulary with syllables, meanings and example sentences.",
    match:"Learners match each term to its meaning by writing the correct letter.",
    cloze:"Sentences with a word removed; learners choose the missing word from a word box.",
    tf:"True or false statements; learners must correct the false ones.",
    short:"Recall questions answered in complete sentences on ruled lines.",
    mcq:"Multiple choice questions built from the period's terms, with four options each.",
    sort:"Learners sort a mixed list of items into the correct groups.",
    apply:"Open questions asking learners to apply the idea to a new situation.",
    casestudy:"A short scenario followed by questions about it.",
    compare:"A table in which learners compare and contrast two things point by point.",
    project:"An extended task with a brief, steps to follow and marking criteria.",
    map:"Map work: learners label, locate and interpret features.",
    mapwork:"Map work: learners label, locate and interpret features.",
    diagram:"Learners label the parts of a diagram.",
    classify:"Learners place examples into the correct scientific category.",
    experiment:"A practical investigation with method, observation and conclusion.",
    patterns:"A study table of the period's sounds and patterns with space to add words of the same pattern.",
    blend:"Learners blend the sounds of a word together to read it, or break it into parts/syllables.",
    family:"Learners identify which sound, ending or word part each word follows.",
    complete:"The first letter of a word is given; learners finish it using the pattern.",
    odd:"Four words follow one pattern and one does not; learners find the odd one out.",
    unscramble:"Letters are mixed up; learners put them in order to build the word.",
    build:"Learners use the period's patterns to build new words of their own.",
    phonics:"Sound and spelling patterns with space to add words of the same pattern.",
    grammar:"Grammar items to correct or complete, each with a reason in the answer key.",
    pairs:"Synonyms, antonyms, homophones and other word pairs.",
    passage:"A reading passage followed by comprehension questions.",
    write:"Guided sentence and paragraph writing.",
    spelling:"Spelling and dictation practice with syllable division.",
    copy:"Handwriting practice: learners copy each word neatly (elementary only).",
    worked:"Worked examples showing every step of the method before practice begins.",
    drills:"A set of practice questions on the period's main skill.",
    drills2:"A second, mixed practice set with different questions.",
    show:"Long-form questions where learners must show all their working.",
    word:"Word problems requiring a number sentence, working and a labelled answer.",
    challenge:"Harder extension questions for learners who finish early.",
    vocab:"The period's vocabulary with pronunciation guidance.",
    dialogue:"A short conversation to read, complete and act out.",
    journal:"A personal reflection page.",
    story:"A story followed by reflection questions.",
    debate:"A discussion motion with rules and space to plan arguments.",
    devices:"Quotations: learners name the work, the device used and its effect.",
    characters:"Learners match each character to the part they play in the work.",
    themes:"Each theme is given with the textual evidence that supports it.",
    appreciate:"Open appreciation questions answered in full sentences, with reasons."
  };

  /* ---------------- Study Notes & Explanations ----------------
     Every unit opens with a teaching page so the pack can be learned from,
     not merely practised on. UNIT_NOTES() is called by all seven engines.
     Content is assembled from the curriculum data each unit already carries:
     objectives, the explanatory note, defined terms, worked examples and the
     reasons stored against true/false and applied items. */

  var NOTES_ON = true;
  window.NOTES_ENABLED = function () { return NOTES_ON; };

  function stripTags(x) { return String(x == null ? "" : x).replace(/<[^>]+>/g, ""); }

  /* pull the vocabulary array whatever the subject calls it */
  function unitTerms(t) {
    if (t.terms && t.terms.length) {
      return t.terms.map(function (v) { return { t: v.t, d: v.d, x: v.x }; });
    }
    if (t.words && t.words.length) {
      return t.words.map(function (v) { return { t: v.w, d: v.d, x: v.x }; });
    }
    if (t.vocab && t.vocab.length) {
      return t.vocab.map(function (v) {
        return { t: v.fr, d: v.en, x: v.say ? "say: " + v.say : "" };
      });
    }
    return [];
  }

  /* "common mistakes" are mined from the reasons already attached to the
     false statements and the applied questions of each unit */
  function unitPitfalls(t) {
    var out = [];
    (t.tf || []).forEach(function (v) {
      if (String(v.a).toLowerCase() === "false" && v.why) {
        out.push("It is not true that " + stripTags(v.s).replace(/\.$/, "") + ". " + stripTags(v.why));
      }
    });
    (t.grammar || []).forEach(function (v) {
      if (v.why) out.push(stripTags(v.q) + "  \u2192  " + stripTags(v.a) + ". " + stripTags(v.why));
    });

    /* Subjects with no true/false or grammar bank (Mathematics, French) still
       need this section, so build it from the care-points of the unit. */
    if (!out.length && t.worked && t.worked.length) {
      t.worked.forEach(function (v) {
        var st = (v.steps || []).map(stripTags);
        if (st.length) {
          out.push("In \u201c" + stripTags(v.q) + "\u201d learners often skip a step. Work it in order: " +
            st.join(" ") + " The answer is " + stripTags(v.a) + ".");
        }
      });
    }
    if (!out.length && t.challenge && t.challenge.length) {
      t.challenge.slice(0, 3).forEach(function (v) {
        out.push("Check yourself on: " + stripTags(v.q) + "  \u2192  " + stripTags(v.a));
      });
    }
    if (!out.length && t.vocab && t.vocab.length) {
      var sp = t.vocab.filter(function (v) { return v.say; }).slice(0, 3);
      sp.forEach(function (v) {
        out.push("\u201c" + stripTags(v.fr) + "\u201d is not read as it is written in English \u2014 say it \u201c" +
          stripTags(v.say) + "\u201d. It means: " + stripTags(v.en) + ".");
      });
    }
    return out.slice(0, 4);
  }

  window.UNIT_NOTES = function (t, n) {
    if (!NOTES_ON) return [];
    var out = [];
    var title = t.title || t.fr || "";

    /* Verbatim study notes: units may carry a `study` block list transcribed
       straight from the official course text. When present it is rendered
       as-is (bold key terms via ** **), replacing the auto-assembled page. */
    if (t.study && t.study.length) {
      out.push({ k: "h2", t: "Study Notes \u2014 Period " + n + ": " + title });
      t.study.forEach(function (b) { out.push(b); });
      out.push({ k: "rule" });
      out.push({ k: "space" });
      return out;
    }

    out.push({ k: "h2", t: "Study Notes \u2014 Period " + n + ": " + title });
    out.push({ k: "instr", t: "Read this page before you begin the exercises. It explains the ideas the period is built on, shows you a worked example, and warns you about the mistakes learners most often make." });

    /* 1 - what this unit is about */
    out.push({ k: "h3", t: "1 \u00b7 What this period is about" });
    out.push({ k: "p", t: stripTags(t.note) });
    if (t.objectives && t.objectives.length) {
      out.push({ k: "p", t: "By the end of this period you should be able to:" });
      out.push({ k: "num", items: t.objectives.map(stripTags) });
    }

    /* 2 - key ideas explained */
    var tm = unitTerms(t);
    if (tm.length) {
      out.push({ k: "h3", t: "2 \u00b7 Key ideas explained" });
      out.push({ k: "instr", t: "Each idea is given with its meaning and an example showing it in use." });
      out.push({ k: "table",
        head: ["Term", "What it means", "Example"],
        rows: tm.slice(0, 10).map(function (v) {
          return [stripTags(v.t), stripTags(v.d), stripTags(v.x || "")];
        }) });
    }

    /* 3 - worked examples */
    var w = [];
    if (t.worked && t.worked.length) {
      t.worked.forEach(function (v) {
        w.push({ q: stripTags(v.q), steps: (v.steps || []).map(stripTags), a: stripTags(v.a) });
      });
    } else if (t.apply && t.apply.length) {
      t.apply.slice(0, 2).forEach(function (v) {
        w.push({ q: stripTags(v.q), steps: [], a: stripTags(v.a) });
      });
    } else if (t.grammar && t.grammar.length) {
      t.grammar.slice(0, 2).forEach(function (v) {
        w.push({ q: stripTags(v.q), steps: v.why ? [stripTags(v.why)] : [], a: stripTags(v.a) });
      });
    } else if (t.facts && t.facts.length) {
      t.facts.slice(0, 2).forEach(function (v) {
        w.push({ q: stripTags(v.q), steps: [], a: stripTags(v.a) });
      });
    }
    if (w.length) {
      out.push({ k: "h3", t: "3 \u00b7 Worked examples" });
      w.slice(0, 3).forEach(function (v, i) {
        out.push({ k: "p", t: "Example " + (i + 1) + ": " + v.q });
        if (v.steps.length) {
          out.push({ k: "num", items: v.steps });
        }
        out.push({ k: "instr", t: "Answer: " + v.a });
      });
    }

    /* 4 - common mistakes */
    var pit = unitPitfalls(t);
    if (pit.length) {
      out.push({ k: "h3", t: "4 \u00b7 Common mistakes to avoid" });
      out.push({ k: "bul", items: pit });
    }

    /* 5 - how to study this unit */
    out.push({ k: "h3", t: "5 \u00b7 How to work through this period" });
    out.push({ k: "bul", items: [
      "Read the notes above and copy the table of key ideas into your exercise book.",
      "Do the exercises in order. Write full answers, not single words, unless you are told otherwise.",
      "When you finish a sheet, check it yourself before your teacher marks it.",
      "Any item you get wrong, write out again correctly with the reason beside it."
    ] });
    out.push({ k: "rule" });
    out.push({ k: "space" });
    return out;
  };

  /* ---------------- session mode: teacher | student ----------------
     The platform is built for TEACHERS first: the default session is the
     teacher's copy, carrying the full verbatim study notes and every answer
     key. A smaller student session remains for clean pupil materials.
     Both sessions use the same curriculums and the same worksheets.
     Student = clean pupil materials, no answers anywhere.
     Teacher = identical worksheets plus every answer key, marked as the
     teacher's copy in the cover, running head and footer. */
  var MODE = "teacher";
  function isTeacher() { return MODE === "teacher"; }
  window.PACK_MODE = function () { return MODE; };

  /* ---------------- document type: course pack | teacher's lesson plan ----------------
     "pack" is the usual course pack (notes, worksheets, tests, examinations).
     "lp" fills the standard Teacher's Lesson Plan form for the selected
     periods, timed to the duration set in the panel (lesson.js). */
  var DOCTYPE = "pack";
  function isLP() { return DOCTYPE === "lp"; }
  window.PACK_DOC_TYPE = function () { return DOCTYPE; };
  var LP_PLAN_TYPE = "daily";
  window.PACK_LP_PLAN_TYPE = function () { return LP_PLAN_TYPE; };

  /* ---------------- customizable cover page ----------------
     COVER holds user-entered details. PACK_COVER() is called by every gen-*.js
     engine to build the opening pages of the pack.

     COVER.design is the cover *designer*: colour overrides, emblem choice,
     title scale and the show/hide switches for every element of the designed
     cover. An empty colour or emblem means "use the template's own". */
  function defaultDesign() {
    return {
      band: "", ink: "", accent: "", paper: "", warm: "",
      emblem: "",            /* "" = the template's own drawn emblem */
      titleScale: 100,       /* % of the template's title size, 60-150 */
      levelLine: "",         /* "" = automatic level / curriculum line */
      show: { school: true, motto: true, emblem: true, rule: true, level: true,
              panel: true, strip: true, leaf: true, dots: true, note: true, org: true }
    };
  }
  /* The five colours that actually paint the designed cover. (--cv-soft is set
     by each template but no cover rule consumes it, so it is not offered here
     rather than exposing a control that changes nothing.) */
  var DESIGN_COLORS = ["band", "ink", "accent", "paper", "warm"];
  var DESIGN_SHOWS = [
    ["school", "School name"], ["motto", "School motto"], ["emblem", "Emblem / logo"],
    ["rule", "Rule & book icon"], ["level", "Level line"], ["panel", "Details panel"],
    ["strip", "Colour strip"], ["leaf", "Corner leaves"], ["dots", "Corner dots"],
    ["note", "Footer note"], ["org", "Organization line"]
  ];
  /* Fill in anything a stored or imported design is missing, and clamp the
     values, so an older localStorage copy still loads safely. */
  function normalizeDesign(d) {
    var base = defaultDesign();
    if (!d || typeof d !== "object") return base;
    DESIGN_COLORS.forEach(function (k) {
      var v = d[k];
      base[k] = (typeof v === "string" && /^#[0-9a-fA-F]{6}$/.test(v)) ? v.toLowerCase() : "";
    });
    base.emblem = (typeof d.emblem === "string" && EMBLEMS.some(function (e) { return e.id === d.emblem; }))
      ? d.emblem : "";
    var sc = Number(d.titleScale);
    base.titleScale = Number.isFinite(sc) ? Math.min(150, Math.max(60, Math.round(sc))) : 100;
    base.levelLine = (typeof d.levelLine === "string") ? d.levelLine.slice(0, 220) : "";
    if (d.show && typeof d.show === "object") {
      Object.keys(base.show).forEach(function (k) {
        if (typeof d.show[k] === "boolean") base.show[k] = d.show[k];
      });
    }
    return base;
  }
  window.PACK_DESIGNS = { colors: DESIGN_COLORS, shows: DESIGN_SHOWS, normalize: normalizeDesign, blank: defaultDesign };

  var COVER = {
    on: true,
    tpl: "classic",          /* designed template id, or "table" for the plain list */
    bgFade: 62,              /* how strongly the paper veils the background photo, % */
    useSubjectArt: true,      /* bundled artwork follows the selected subject */
    school: "",
    motto: "",
    pupil: "",
    teacher: "",
    classname: "",
    term: "",
    year: String(new Date().getFullYear()),
    crest: "",                 /* optional user-typed character; blank = the template's drawn emblem */
    note: "",
    ownPage: true,
    design: defaultDesign()
  };
  window.PACK_COVER_STATE = COVER;

  /* Designed cover templates. Each is a CSS variant of one proven layout, so
     adding a template never changes the geometry of the A4 sheet. */
  var COVER_TPL = {
    classic: { label: "Classic Cream",  cls: "cv-classic", emblem: "em-apple", leaf: "#7fa87f", dash: true  },
    liberia: { label: "Liberian Blue",  cls: "cv-liberia", emblem: "em-flag", leaf: "#7d93bf", dash: false },
    forest:  { label: "Forest Green",   cls: "cv-forest",  emblem: "em-plant", leaf: "#4f9a76", dash: true  },
    sunrise: { label: "Sunrise Warm",   cls: "cv-sunrise", emblem: "em-sun", leaf: "#dba05a", dash: false },
    kg:      { label: "Kindergarten",   cls: "cv-kg",      emblem: "em-blocks", leaf: "#f0b429", dash: true  },
    plain:   { label: "Plain / Ink Saver", cls: "cv-plain", emblem: "em-book", leaf: "#9aa3ad", dash: false }
  };
  window.PACK_COVER_TPL = COVER_TPL;

  /* ---------------- header & footer customization ----------------
     Two surfaces share the same shape:

     1) HF.sheet — the PRINTED sheet running header (.phead) and footer
        (.pfoot). Custom text, font size, colour, per-element show/hide,
        and a master on/off.

     2) HF.plat — the PLATFORM chrome top bar (.top) and bottom bar
        (.botfoot). Same shape; controls paint the screen.

     Default values reproduce the existing behaviour exactly: no
     custom text, font-size 9pt for the sheet and 1.35rem for the
     platform title, the subject's `--bleu` colour, and every
     element visible. Reset restores the defaults. */
  function defaultSheetHF() {
    return {
      on: true,
      hdr: { on: true, l: "", r: "", fs: 9, col: "", bold: true },
      ftr: { on: true, l: "", r: "", fs: 9, col: "", pg: true }
    };
  }
  function defaultPlatHF() {
    return {
      hdr: { on: true, title: "", sub: "", note: "", fs: 1.35, bg: "", crest: true, install: true },
      ftr: { on: false, l: "Liberian National Curriculum", r: "Course Pack Generator", fs: 0.78, bg: "" }
    };
  }
  function normalizeSheetHF(h) {
    var base = defaultSheetHF();
    if (!h || typeof h !== "object") return base;
    if (typeof h.on === "boolean") base.on = h.on;
    function normSide(s, fsMax) {
      var o = { on: s.on !== false, l: "", r: "", fs: fsMax, col: "", bold: true, pg: true };
      if (typeof s.l === "string") o.l = s.l.slice(0, 240);
      if (typeof s.r === "string") o.r = s.r.slice(0, 240);
      var fs = Number(s.fs);
      if (Number.isFinite(fs)) o.fs = Math.min(14, Math.max(7, Math.round(fs * 2) / 2));
      if (typeof s.col === "string" && /^#[0-9a-fA-F]{6}$/.test(s.col)) o.col = s.col.toLowerCase();
      if (typeof s.bold === "boolean") o.bold = s.bold;
      if (typeof s.pg === "boolean") o.pg = s.pg;
      return o;
    }
    if (h.hdr) base.hdr = Object.assign(base.hdr, normSide(h.hdr, 9));
    if (h.ftr) base.ftr = Object.assign(base.ftr, normSide(h.ftr, 9));
    return base;
  }
  function normalizePlatHF(h) {
    var base = defaultPlatHF();
    if (!h || typeof h !== "object") return base;
    if (h.hdr) {
      var H = h.hdr;
      if (typeof H.on === "boolean") base.hdr.on = H.on;
      if (typeof H.title === "string") base.hdr.title = H.title.slice(0, 240);
      if (typeof H.sub === "string") base.hdr.sub = H.sub.slice(0, 800);
      if (typeof H.note === "string") base.hdr.note = H.note.slice(0, 400);
      var fs = Number(H.fs);
      if (Number.isFinite(fs)) base.hdr.fs = Math.min(2.4, Math.max(0.85, Math.round(fs * 20) / 20));
      if (typeof H.bg === "string" && /^#[0-9a-fA-F]{6}$/.test(H.bg)) base.hdr.bg = H.bg.toLowerCase();
      if (typeof H.crest === "boolean") base.hdr.crest = H.crest;
      if (typeof H.install === "boolean") base.hdr.install = H.install;
    }
    if (h.ftr) {
      var F = h.ftr;
      if (typeof F.on === "boolean") base.ftr.on = F.on;
      if (typeof F.l === "string") base.ftr.l = F.l.slice(0, 240);
      if (typeof F.r === "string") base.ftr.r = F.r.slice(0, 240);
      var ffs = Number(F.fs);
      if (Number.isFinite(ffs)) base.ftr.fs = Math.min(1.4, Math.max(0.55, Math.round(ffs * 20) / 20));
      if (typeof F.bg === "string" && /^#[0-9a-fA-F]{6}$/.test(F.bg)) base.ftr.bg = F.bg.toLowerCase();
    }
    return base;
  }
  var HF = { sheet: defaultSheetHF(), plat: defaultPlatHF() };
  window.PACK_HF_STATE = HF;

  /* Emblems a cover can carry instead of the template's own. They are drawn
     SVG symbols, so they stay crisp in print and cost nothing to bundle. */
  var EMBLEMS = [
    { id: "em-apple",  label: "Apple" },
    { id: "em-blocks", label: "Building blocks" },
    { id: "em-pencil", label: "Pencil" },
    { id: "em-star",   label: "Star" },
    { id: "em-sun",    label: "Sun" },
    { id: "em-plant",  label: "Plant" },
    { id: "em-book",   label: "Book" },
    { id: "em-flag",   label: "Liberian flag" }
  ];
  window.PACK_COVER_EMBLEMS = EMBLEMS;


  function leafSvg(color) {
    return '<svg width="86" height="74" viewBox="0 0 86 74" fill="none">' +
      '<path d="M4 6C30 8 52 22 66 46" stroke="' + color + '" stroke-width="2.4" stroke-linecap="round"/>' +
      '<ellipse cx="20" cy="13" rx="13" ry="7" fill="' + color + '" opacity=".85" transform="rotate(-24 20 13)"/>' +
      '<ellipse cx="38" cy="24" rx="13" ry="7" fill="' + color + '" opacity=".75" transform="rotate(-18 38 24)"/>' +
      '<ellipse cx="55" cy="38" rx="12" ry="6.5" fill="' + color + '" opacity=".65" transform="rotate(-12 55 38)"/>' +
      '<ellipse cx="12" cy="27" rx="11" ry="6" fill="' + color + '" opacity=".6" transform="rotate(28 12 27)"/>' +
      '<ellipse cx="29" cy="41" rx="11" ry="6" fill="' + color + '" opacity=".5" transform="rotate(34 29 41)"/>' +
      "</svg>";
  }

  /* ---------------- uploaded artwork ----------------
     Logo and background are held as data URLs so the pack stays a single
     self-contained file with no external requests. Images are downscaled on
     import to keep the .docx and the saved settings to a sensible size. */
  var COVER_IMG = { logo: null, bg: null };      /* user uploads: {url, w, h, mime} */
  var SUBJECT_COVER_ART = window.SUBJECT_COVER_ART || {};
  window.PACK_COVER_IMG = COVER_IMG;

  /* A user upload takes priority. Otherwise the designed cover receives the
     bundled PNG for the selected subject; no network is needed at runtime.
     The whole WASSCE track shares one authentic cover — the WAEC objective
     answer sheet (assets/covers/wa.png) — so every WASSCE subject (Maths,
     English, History, Biology, …) shows the real examination cover. National
     curriculum subjects use their own artwork by id or a registered coverArt
     alias (History shares the Social Studies world-history classroom), and
     both kindergarten levels share the kindergarten artwork (kg.png). */
  function activeCoverBg(opts) {
    if (COVER_IMG.bg) return COVER_IMG.bg;
    if (!COVER.useSubjectArt) return null;
    if (S() && S().wa) return SUBJECT_COVER_ART.wa || null;
    /* a kindergarten cover always carries the kindergarten artwork */
    if (opts ? opts.kg : isKG(gradeVal())) return SUBJECT_COVER_ART.kg || null;
    return SUBJECT_COVER_ART[S().coverArt || cur] || null;
  }

  var IMG_MAX = { logo: 520, bg: 1400 };          /* longest edge, pixels */
  var IMG_LIMIT_BYTES = 6 * 1024 * 1024;          /* reject very large files */

  /* Read a File, downscale it onto a canvas and return a data URL. JPEG is used
     for photographic backgrounds and PNG for logos so transparency survives. */
  function loadImageFile(file, kind, cb) {
    if (!file) return cb("No file chosen.");
    if (!/^image\//.test(file.type)) return cb("That file is not an image.");
    if (file.size > IMG_LIMIT_BYTES) return cb("Image is larger than 6 MB. Please choose a smaller one.");
    var fr = new FileReader();
    fr.onerror = function () { cb("The file could not be read."); };
    fr.onload = function () {
      var im = new Image();
      im.onerror = function () { cb("That image could not be opened."); };
      im.onload = function () {
        var max = IMG_MAX[kind] || 900;
        var sc = Math.min(1, max / Math.max(im.width, im.height));
        var w = Math.max(1, Math.round(im.width * sc));
        var h = Math.max(1, Math.round(im.height * sc));
        var cv = document.createElement("canvas");
        cv.width = w; cv.height = h;
        var cx = cv.getContext("2d");
        if (kind === "bg") { cx.fillStyle = "#ffffff"; cx.fillRect(0, 0, w, h); }
        cx.drawImage(im, 0, 0, w, h);
        var mime = (kind === "bg") ? "image/jpeg" : "image/png";
        var url;
        try { url = cv.toDataURL(mime, kind === "bg" ? 0.82 : undefined); }
        catch (e) { return cb("That image could not be processed."); }
        cb(null, { url: url, w: w, h: h, mime: mime });
      };
      im.src = fr.result;
    };
    fr.readAsDataURL(file);
  }

  /* data URL -> raw bytes, for embedding in the .docx package */
  function dataUrlBytes(url) {
    var i = String(url).indexOf(",");
    if (i < 0) return null;
    var bin = atob(url.slice(i + 1));
    var out = new Uint8Array(bin.length);
    for (var j = 0; j < bin.length; j++) out[j] = bin.charCodeAt(j);
    return out;
  }

  function coverRow(label, value) { return [label, value || ""]; }

  window.PACK_COVER = function (opts, d) {
    var out = [];
    function finishCover() { out.forEach(function (b) { b._cover = true; }); return out; }

    /* Class and subject always appear on a cover, whatever the user typed.
       d.title is like "ECONOMICS \u2014 GRADE 11"; take the subject from before
       the dash so the cover names the subject on its own line. */
    var text = window.COVER_TEXT.prepare(opts, d, COVER, isTeacher());
    var subject = text.subject;
    var design = normalizeDesign(COVER.design);
    function lab(key) { return text[key + "Label"]; }
    /* the level suffix: "— GRADE 3" for a curriculum grade, "— KG-II" for a
       kindergarten level. Never added when the teacher retyped the title. */
    var autoTitle = String(d.title || "").split("\u2014")[0].trim();
    var levelSuffix = opts.kg ? " \u2014 " + opts.levelLabel : " \u2014 GRADE " + opts.grade;
    var mainTitle = text.title + (text.title === autoTitle ? levelSuffix : "");
    var subTitle = text.subtitle;
    var klass = COVER.classname || (opts.kg ? opts.levelLabel : "Grade " + opts.grade);
    /* the designer can retype the level line; blank means the automatic one */
    var levelLine = design.levelLine ? design.levelLine : text.line;

    if (!COVER.on) {
      out.push({ k: "h1", t: mainTitle });
      out.push({ k: "h2", t: subTitle });
      out.push({ k: "p", t: text.line, i: true });
      out.push({ k: "space" });
      out.push({ k: "table", head: [lab("pupil"), lab("school"), lab("class"), lab("subject")],
        rows: [["", COVER.school || "", klass, subject]] });
      out.push({ k: "space" });
      return finishCover();
    }

    /* ---- plain table cover (the original behaviour, kept as a choice) ---- */
    if (COVER.tpl === "table") {
      if (COVER.school) out.push({ k: "p", t: (COVER.crest ? COVER.crest + "  " : "") + COVER.school, c: true, big: true });
      if (COVER.motto) out.push({ k: "p", t: COVER.motto, c: true, i: true });
      out.push({ k: "rule" });
      out.push({ k: "space" });
      out.push({ k: "h1", t: mainTitle, c: true });
      out.push({ k: "h2", t: subTitle, c: true });
      out.push({ k: "p", t: text.line, c: true, i: true });
      out.push({ k: "space" });
      var rows = [];
      if (isTeacher()) rows.push(coverRow(lab("teacher"), COVER.teacher));
      else rows.push(coverRow(lab("pupil"), COVER.pupil));
      rows.push(coverRow(lab("subject"), subject));
      rows.push(coverRow(lab("class"), klass));
      rows.push(coverRow(lab("school"), COVER.school));
      if (!isTeacher()) rows.push(coverRow(lab("teacher"), COVER.teacher));
      rows.push(coverRow(lab("term"), COVER.term));
      rows.push(coverRow(lab("year"), COVER.year));
      out.push({ k: "table", head: [lab("detail"), lab("entry")], rows: rows });
      out.push({ k: "space" });
      out.push({ k: "p", t: COVER.note ? text.noteLabel + ": " + COVER.note : text.inspireLabel + ": " + text.inspireText, c: true, i: true });
      out.push({ k: "p", t: text.organization, c: true });
      if (COVER.ownPage) out.push({ k: "pagebreak" });
      return finishCover();
    }

    /* ---- designed cover: one block occupying a whole sheet ---- */
    var coverBg = activeCoverBg(opts);
    out.push({
      k: "covart",
      tpl: COVER.tpl,
      school: COVER.school,
      motto: COVER.motto,
      title1: text.title,
      labels: text,
      title2: text.subtitle,
      line: levelLine,
      subject: subject,
      klass: klass,
      teacher: COVER.teacher,
      pupil: COVER.pupil,
      term: COVER.term,
      year: COVER.year,
      crest: COVER.crest,
      note: COVER.note,
      logo: COVER_IMG.logo ? COVER_IMG.logo.url : "",
      bg: coverBg ? coverBg.url : "",
      bgMime: coverBg ? (coverBg.mime || "image/png") : "",
      bgFade: COVER.bgFade,
      design: design,
      kg: !!opts.kg,
      teacherCopy: isTeacher()
    });
    out.push({ k: "pagebreak" });
    return finishCover();
  };

  var cur = "en";
  function S() { return SUBJECTS[cur]; }

  /* ---------------- session track: national curriculum | WASSCE ----------------
     The platform carries two syllabus tracks. The National Curriculum track is
     the Liberian Grades 1-12 course pack generator. The WASSCE track exposes
     the WAEC WASSCE subjects (one per official syllabus in "Wassce_ Syllabus/")
     for Grade 12, and the WASSCE engine builds Paper-1/Paper-2 style packs.
     The track only decides which subjects are offered; the teacher/student
     session still decides whether answer keys are included. */
  var TRACK = "curr";
  function visibleSubjectIds() {
    return Object.keys(SUBJECTS).filter(function (id) {
      if (TRACK === "wa") return !!SUBJECTS[id].wa;
      return !SUBJECTS[id].wa;
    });
  }
  function setTrack(t) {
    if (t === TRACK) return;
    TRACK = t;
    var ids = visibleSubjectIds();
    if (ids.indexOf(cur) < 0) cur = ids[0];
    document.body.setAttribute("data-subject", cur);
    document.querySelectorAll("#tracks .track").forEach(function (b) {
      b.className = "track" + (b.getAttribute("data-t") === TRACK ? " on" : "");
    });
    var n = $("#sessNote");
    if (n) n.textContent = TRACK === "wa"
      ? "WASSCE session: the WAEC West African Senior School Certificate Examination, Grade 12. Syllabus topics, objective (Paper 1) and theory (Paper 2) practice, topic mocks and a full WASSCE mock — built from the official WAEC syllabuses."
      : isTeacher()
        ? "Teacher session: the same worksheets as the pupils receive, with every answer key included and each sheet marked as the teacher's copy."
        : "Student session: clean pupil worksheets, tests and examinations. No answers are included anywhere in the pack.";
    renderSubjectTabs(); buildSheetList(); refreshGrades(); refreshPeriods();
    if (window.PACK_PAINT_COVER_PREVIEW) window.PACK_PAINT_COVER_PREVIEW();
    generate();
  }

  function opts() {
    var per = [], sh = [];
    document.querySelectorAll(".pk:checked").forEach(function (c) { per.push(c.value); });
    document.querySelectorAll(".sh:checked").forEach(function (c) { sh.push(c.value); });
    return {
      grade: gradeVal(),
      kg: isKG(gradeVal()),
      levelLabel: gradeText(gradeVal()),
      levelName: levelName(gradeVal()),
      topics: per.length ? per : null,
      sheets: sh.length ? sh : [S().defaults[0]],
      perEx: +$("#perEx").value,
      fsz: FSZ(),
      seed: +$("#seed").value || 1,
      tests: $("#tests").checked,
      exam: $("#exam").checked,
      keys: isTeacher() ? $("#keys").checked : false,
      teacher: isTeacher(),
      dtype: DOCTYPE,
      lpPlanType: LP_PLAN_TYPE,
      lpWeeks: ($("#lpWeeks") && +$("#lpWeeks").value) || 4,
      lpDays: ($("#lpDays") && +$("#lpDays").value) || 5,
      lpAdjMode: ($("#lpAdjMode") && $("#lpAdjMode").value) || "standard",
      lpAdjNote: ($("#lpAdjNote") && $("#lpAdjNote").value || "").trim(),
      lpMin: +$("#lpMin").value || 40,
      subjectId: cur,
      teacherName: (COVER.teacher || "").trim(),
      school: (COVER.school || "").trim()
    };
  }

  /* ---------------- controls ---------------- */
  function renderSubjectTabs() {
    var box = $("#subjects"); box.innerHTML = "";
    visibleSubjectIds().forEach(function (id) {
      var s = SUBJECTS[id];
      var b = document.createElement("button");
      b.className = "subtab" + (id === cur ? " on" : "");
      b.setAttribute("data-s", id);
      b.innerHTML = '<span class="fl"><svg class="ic" aria-hidden="true"><use href="#i-' +
        s.icon + '"/></svg></span>' + s.label;
      b.onclick = function () {
        if (cur === id) return;
        cur = id;
        document.body.setAttribute("data-subject", id);
        renderSubjectTabs(); buildSheetList(); refreshGrades(); refreshPeriods();
        if (window.PACK_PAINT_COVER_PREVIEW) window.PACK_PAINT_COVER_PREVIEW();
        generate();
      };
      box.appendChild(b);
    });
  }

  function buildSheetList() {
    var sh = $("#sheets"); sh.innerHTML = "";
    var eng = S().engine(), def = S().defaults;
    Object.keys(eng.SHEETS).forEach(function (id) {
      var lab = document.createElement("label");
      lab.className = "chk";
      var help = SHEET_HELP[id] ? '<em class="shhelp">' + esc(SHEET_HELP[id]) + "</em>" : "";
      lab.innerHTML = '<input type="checkbox" class="sh" value="' + id + '"' +
        (def.indexOf(id) >= 0 ? " checked" : "") + '><span>' + eng.SHEETS[id].label + help + "</span>";
      sh.appendChild(lab);
    });
    syncBadges();
  }

  /* the grade list is taken from the subject's own curriculum, so English
     offers Grades 1-9 while the other subjects offer Grades 1-6. The two
     kindergarten levels are offered on every national-curriculum subject
     because they produce a cover page, which any subject can carry; the
     Kindergarten subject additionally plans real ECD lessons on them. */
  function refreshGrades() {
    var sel = $("#grade"), prev = sel.value;
    var gs = [];
    S().curriculum().forEach(function (t) { if (gs.indexOf(t.grade) < 0) gs.push(t.grade); });
    gs.sort(function (a, b) { return a - b; });

    /* which bands does this subject actually cover? Kindergarten is offered
       throughout the national curriculum track but not in the WASSCE track,
       which is a Grade 12 examination. Lesson plans hide it on every subject
       except Kindergarten: only the transcribed ECD units can fill a plan. */
    var avail = BANDS.filter(function (b) {
      if (b.kg) return TRACK !== "wa" && (!isLP() || cur === "kg");
      return gs.some(function (g) { return g >= b.lo && g <= b.hi; });
    });
    /* Kindergarten is only ever entered by clicking its band tab, never by
       default: a subject keeps opening on the lowest grade band it teaches. */
    if (!avail.some(function (b) { return b.id === curBand; })) {
      var graded = avail.filter(function (b) { return !b.kg; });
      curBand = (graded[0] || avail[0]).id;
    }

    /* band selector: shown whenever the subject spans more than one band */
    var bw = $("#bandwrap"), bb = $("#bands");
    if (bw && bb) {
      if (avail.length > 1) {
        bw.style.display = "";
        bb.innerHTML = "";
        avail.forEach(function (b) {
          var el = document.createElement("button");
          el.type = "button";
          el.className = "bandtab" + (b.id === curBand ? " on" : "");
          el.setAttribute("data-b", b.id);
          el.textContent = b.short;
          el.onclick = function () {
            if (curBand === b.id) return;
            curBand = b.id;
            refreshGrades(); refreshPeriods(); generate();
          };
          bb.appendChild(el);
        });
      } else {
        /* a single band needs no selector; clear it so switching tracks does
           not leave the previous track's bands behind in the markup */
        bw.style.display = "none";
        bb.innerHTML = "";
      }
    }

    var band = BANDS.filter(function (b) { return b.id === curBand; })[0] || BANDS[1];
    var ids = [], names = {};
    if (band.kg) {
      KG_LEVELS.forEach(function (k) { ids.push(k.id); names[k.id] = k.label; });
    } else {
      var shown = gs.filter(function (g) { return g >= band.lo && g <= band.hi; });
      if (!shown.length) shown = gs;
      shown.forEach(function (g) { ids.push(String(g)); names[String(g)] = "Grade " + g; });
    }

    sel.innerHTML = "";
    ids.forEach(function (id) {
      var o = document.createElement("option");
      o.value = id; o.textContent = names[id];
      sel.appendChild(o);
    });
    sel.value = ids.indexOf(String(prev)) >= 0 ? String(prev) : ids[0];

    /* Grades outside the elementary band come from their own curriculum guide,
       so name the subject as that guide actually titles it. */
    var JH_NAME = { en: "English &mdash; Language Arts", pho: "Phonics &mdash; Word Study", sc: "General Science", ma: "Mathematics", ss: "Social Studies", fr: "French", pe: "Physical Education", rm: "Religious &amp; Moral Education", bi: "Biology", ch: "Chemistry", ph: "Physics", ec: "Economics", eg: "English Grammar", gg: "Geography", hi: "History", li: "Literature" };
    var jh = $("#jhNote");
    if (jh) {
      if (S().wa) {
        jh.style.display = "";
        jh.innerHTML = "Grade 12 follows the <b>WASSCE</b> examination syllabus (West African Examinations Council) &mdash; the final national certificate examination in West Africa.";
      } else if (cur === "ci") {
        jh.style.display = "";
        jh.textContent = "Civics Grades 7\u201312: original supplementary teaching material, not an official syllabus transcription. Review against your school\u2019s scheme of work.";
      } else if (band.kg) {
        jh.style.display = "";
        jh.innerHTML = cur === "kg" && isLP()
          ? "<b>KG-I and KG-II lesson plans</b> are built from the transcribed national ECD theme units. Set <b>Weeks/unit</b> to 2 &mdash; each planner section runs 1&ndash;2 weeks &mdash; and pick the periods to plan."
          : "<b>KG-I and KG-II are cover-page levels.</b> No kindergarten curriculum is transcribed here, so the document is the customizable cover sheet alone &mdash; design it in <b>Customization</b> and print or export it for your own KG work.";
      } else if (curBand === "el") {
        jh.style.display = "none";
      } else {
        jh.style.display = "";
        jh.innerHTML = "Grades " + band.lo + "&ndash;" + band.hi + " follow the " +
          band.label + " <b>" + (JH_NAME[cur] || S().label) + "</b> curriculum.";
      }
    }
  }

  function refreshPeriods() {
    var g = gradeVal(), box = $("#periods");
    box.innerHTML = "";
    /* a kindergarten level carries no transcribed units outside the
       Kindergarten subject's lesson plans, so there is nothing to tick: the
       generated document is the cover page alone */
    if (isKG(g) && !(cur === "kg" && isLP())) {
      var kgNote = document.createElement("p");
      kgNote.className = "hint";
      kgNote.innerHTML = "<b>" + gradeText(g) + "</b> carries no transcribed units, so there is nothing to tick. The generated document is the cover page you design in <b>Customization</b>.";
      box.appendChild(kgNote);
      syncBadges();
      return;
    }
    S().curriculum().filter(function (t) { return t.grade === g; }).forEach(function (t) {
      var lab = document.createElement("label");
      lab.className = "chk";
      lab.innerHTML = '<input type="checkbox" class="pk" value="' + t.period + '" checked>' +
        "<span><b>P" + t.period + "</b> " + S().titleOf(t) + "</span>";
      box.appendChild(lab);
    });
    syncBadges();
  }

  /* ---------------- screen renderer ---------------- */
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function nl(s) { return esc(s).replace(/\n/g, "<br>"); }
  /* inline **bold** markup for curriculum prose (study notes, key terms) */
  function rich(s) { return nl(s).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>"); }

  /* ---- designed cover artwork ----
     Builds a full-sheet cover from the chosen template. Everything is inline
     CSS and SVG, so it renders identically offline and in print. The cover
     designer's overrides arrive on the block as b.design: colour variables,
     emblem choice, a title scale and a show/hide switch per element. */
  function designVars(ds) {
    var map = { band: "--cv-band", ink: "--cv-ink", accent: "--cv-accent",
                paper: "--cv-bg", soft: "--cv-soft", warm: "--cv-warm" };
    var out = [];
    Object.keys(map).forEach(function (k) {
      if (ds[k]) out.push(map[k] + ":" + ds[k]);
    });
    if (ds.titleScale && ds.titleScale !== 100) out.push("--cv-ts:" + (ds.titleScale / 100).toFixed(3));
    return out.length ? ' style="' + out.join(";") + '"' : "";
  }

  function coverArtHtml(b) {
    function label(key, fallback) { return COVER_TEXT.label(b, key, fallback); }
    var t = COVER_TPL[b.tpl] || COVER_TPL.classic;
    var ds = normalizeDesign(b.design);
    function on(k) { return ds.show[k] !== false; }
    /* The printed booklet the platform is modelled on writes each detail as a
       plain LABEL: ______ ruled line, with no icon before the label. */
    function row(label, value) {
      return '<div class="cv-row">' +
        '<span class="cv-lab">' + esc(label) + (label ? ':' : '') + '</span>' +
        '<span class="cv-val">' + esc(value || "") + "</span></div>";
    }
    var rows = "";
    rows += row(label("schoolLabel", "School"), b.school);
    rows += row(label("subjectLabel", "Subject"), b.subject);
    rows += row(label("classLabel", "Class"), b.klass);
    rows += b.teacherCopy
      ? row(label("teacherLabel", "Teacher"), b.teacher)
      : row(label("pupilLabel", "Name"), b.pupil);
    rows += row(label("termYearLabel", b.term ? "Term" : "Term / Year"),
                [b.term, b.year].filter(Boolean).join("   \u00b7   "));

    var note = !on("note") ? "" : b.note
      ? '<div class="cv-note"><b>' + esc(label("noteLabel", "Note")) + '</b>' + esc(b.note) + "</div>"
      : '<div class="cv-note"><b>' + esc(label("inspireLabel", "Inspire")) + '</b>' + esc(label("inspireText", "Teach \u00b7 Encourage \u00b7 Achieve")) + '</div>';

    /* long subject names step down in size so the title never overflows */
    var n = String(b.title1 || "").length;
    var sizeCls = n > 26 ? " xlong" : (n > 15 ? " long" : "");

    /* an uploaded photo sits under a translucent veil so the text stays legible */
    var bgLayer = "";
    if (b.bg) {
      var fade = Math.max(0, Math.min(100, b.bgFade === undefined ? 78 : b.bgFade)) / 100;
      bgLayer =
        '<div class="cv-bg" style="background-image:url(' + b.bg + ')"></div>' +
        '<div class="cv-veil" style="opacity:' + fade.toFixed(2) + '"></div>';
    }
    /* an uploaded logo wins over a crest, which wins over the chosen emblem */
    var emblemId = ds.emblem || t.emblem;
    var emblem = !on("emblem") ? "" : b.logo
      ? '<div class="cv-logo"><img src="' + b.logo + '" alt=""></div>'
      : '<div class="cv-emblem">' + (b.crest
          ? esc(b.crest)
          : '<svg class="ic cv-em-svg" aria-hidden="true"><use href="#i-' + emblemId + '"/></svg>') +
        "</div>";

    var foot = (note || on("org"))
      ? '<div class="cv-foot">' + note +
        (on("org") ? '<div class="cv-org">' + esc(label("organization", "Liberian National Curriculum")) + '</div>' : "") +
        "</div>"
      : "";

    return '<div class="cvart ' + t.cls + (b.bg ? " hasbg" : "") + '"' + designVars(ds) + '>' +
      bgLayer +
      (on("leaf") ? '<div class="cv-leaf cv-lt">' + leafSvg(t.leaf) + "</div>" +
        '<div class="cv-leaf cv-rb">' + leafSvg(t.leaf) + "</div>" : "") +
      (on("dots") ? '<div class="cv-dots cv-dtr"><i></i><i></i><i></i><i></i><i></i><i></i></div>' : "") +
      '<div class="cv-content"><div class="cv-head">' +
        (b.school && on("school") ? '<div class="cv-school">' + esc(b.school) + "</div>" : "") +
        (b.motto && on("motto") ? '<div class="cv-motto">' + esc(b.motto) + "</div>" : "") +
        emblem +
        '<h1 class="cv-t1' + sizeCls + '">' + esc(b.title1) + "</h1>" +
        '<div class="cv-t2">' + esc(b.title2) + "</div>" +
        (on("rule") ? '<div class="cv-rule"><span></span>' +
          '<b><svg class="ic" aria-hidden="true"><use href="#i-em-book"/></svg></b>' +
        "<span></span></div>" : "") +
        (on("level") ? '<p class="cv-sub">' + esc(b.line || "") + "</p>" : "") +
      "</div>" +
      (on("panel") ? '<div class="cv-panel' + (t.dash ? " dash" : "") + '">' + rows + "</div>" : "") +
      (on("strip") ? '<div class="cv-strip">' +
        '<i style="height:13mm;background:' + t.leaf + '"></i>' +
        '<i style="height:18mm;background:var(--cv-warm)"></i>' +
        '<i style="height:10mm;background:var(--cv-accent)"></i>' +
        '<i style="height:16mm;background:var(--cv-ink);opacity:.8"></i>' +
        '<i style="height:12mm;background:var(--cv-warm);opacity:.7"></i>' +
      "</div>" : "") +
      /* foot, then close .cv-content and finally .cvart itself. Leaving the
         outer sheet open makes the browser adopt every later page as a child
         of the cover, where .page.coverpage .phead{display:none} hides all of
         their running heads. */
      foot + "</div></div>";
  }

  /* Renders to real A4 sheets. Content is measured and flowed so nothing is clipped:
     a block that will not fit the remaining height of a sheet moves to the next sheet. */
  function blockHtml(b) {
    switch (b.k) {
      case "h1": return "<h1" + (b.c ? ' class="ctr"' : "") + ">" + esc(b.t) + "</h1>";
      case "h2": return "<h2" + (b.c ? ' class="ctr"' : "") + ">" + esc(b.t) + "</h2>";
      case "h3": return "<h3" + (b.c ? ' class="ctr"' : "") + ">" + esc(b.t) + "</h3>";
      case "p": return "<p class=\"" + (b.i ? "it " : "") + (b.c ? "ctr " : "") + (b.big ? "cbig" : "") + "\">" + rich(b.t) + "</p>";
      case "instr": return '<p class="instr">' + rich(b.t) + "</p>";
      /* A contents list whose entries carry a page number (see toc.js) is laid
         out as a table of contents: the entry on the left, dotted leaders
         running to the number of the page it begins on, in the right margin. */
      case "bul": {
        var tcl = !!(b.pg && b.pg.some(function (n) { return !!n; }));
        return "<ul" + (tcl ? ' class="toc"' : "") + ">" + b.items.map(function (x, i) {
          var p = tcl ? b.pg[i] : null;
          return "<li>" + (p ? '<span class="toc-l">' + rich(x) + '</span><span class="toc-d"></span><span class="toc-p">' + p + "</span>"
                            : rich(x)) + "</li>";
        }).join("") + "</ul>";
      }
      case "num": return "<ol" + (b.start ? ' start="' + b.start + '"' : "") + ">" +
        b.items.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ol>";
      case "cols": return '<div class="cols"><ol class="ca">' +
        b.a.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + '</ol><ul class="cb">' +
        b.b.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ul></div>";
      case "table": return "<table><thead><tr>" +
        b.head.map(function (x) { return "<th>" + esc(x) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        b.rows.map(function (r) {
          return "<tr>" + r.map(function (c) { return "<td>" + (c ? esc(c) : "&nbsp;") + "</td>"; }).join("") + "</tr>";
        }).join("") + "</tbody></table>";
      /* the teacher's lesson plan form: a bordered table with no header row;
         cells are strings or {t, b(old), c(entre)} */
      case "formtable": return '<table class="ftable"><tbody>' +
        b.rows.map(function (row) {
          return "<tr>" + row.map(function (c) {
            var cell = (typeof c === "object" && c) ? c : { t: c };
            var cls = (cell.b ? "b " : "") + (cell.c ? "ctr" : "");
            return '<td' + (cls ? ' class="' + cls.replace(/\s+$/, "") + '"' : "") + ">" + nl(cell.t || "") + "</td>";
          }).join("") + "</tr>";
        }).join("") + "</tbody></table>";
      case "lines": { var o = ""; for (var i = 0; i < b.n; i++) o += '<div class="wl"></div>'; return o; }
      case "space": return '<div class="sp"></div>';
      case "rule": return "<hr>";
      case "covart": return coverArtHtml(b);
      default: return "";
    }
  }

  /* split a bul/num/lines block so a long list can continue on the next sheet */
  function splitBlock(b, frac) {
    if (b.k === "bul" || b.k === "num") {
      var n = Math.max(1, Math.floor(b.items.length * frac));
      if (n >= b.items.length) return null;
      var head = { k: b.k, items: b.items.slice(0, n), start: b.start };
      var tail = { k: b.k, items: b.items.slice(n), start: (b.start || 1) + n };
      /* a contents list long enough to break keeps the page number of every
         line that survives onto either half (see toc.js) */
      if (b.pg) { head.pg = b.pg.slice(0, n); tail.pg = b.pg.slice(n); }
      return [head, tail];
    }
    if (b.k === "lines") {
      var m = Math.max(1, Math.floor(b.n * frac));
      if (m >= b.n) return null;
      return [{ k: "lines", n: m }, { k: "lines", n: b.n - m }];
    }
    if (b.k === "table" && b.rows.length > 2) {
      var q = Math.max(1, Math.floor(b.rows.length * frac));
      if (q >= b.rows.length) return null;
      return [{ k: "table", head: b.head, rows: b.rows.slice(0, q) },
              { k: "table", head: b.head, rows: b.rows.slice(q) }];
    }
    return null;
  }

  var runhead = { left: "", right: "", foot: "" };

  /* Roman period numerals as stored in the curriculum, mapped for display. */
  var PERIOD_NO = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6 };
  function periodLabel(p) {
    if (!p) return "";
    if (p === "exam") return TEACHING.isAssessment() ? "Practice Assessment" : "Semester Examinations";
    if (p === "keys") return "Answer Keys";
    return "Period " + (PERIOD_NO[p] || p);
  }

  function setRunning(o) {
    var bnd = bandOf(o.grade);
    runhead.left = S().label + " \u00b7 " +
      (bnd.id === "el" || bnd.kg ? gradeText(o.grade) : bnd.label + " Grade " + o.grade);
    runhead.right = TEACHING.isAssessment()
      ? (isTeacher() ? "Teacher's Assessment" : "Student Assessment") + (o.keys ? " · Marking Scheme" : "")
      : isLP()
      ? (o.lpPlanType === "weekly" ? "Teacher's Weekly Unit Plan" : "Teacher's Lesson Plan")
      : isTeacher() ? "Teacher's Copy" + (o.keys ? " · Answer Keys Included" : "") : "Pupil Workbook & Assessment Pack";
    /* name the grade actually being generated, not the whole band. WASSCE
       packs name the WAEC examination instead of the national curriculum. */
    var band = cur === "ci" ? "Civics · Original supplementary material · Grade " + o.grade : S().wa
      ? "WASSCE \u00b7 West African Senior School Certificate Examination \u00b7 Grade " + o.grade
      : bnd.kg
      ? o.levelName + " \u00b7 " + (o.subjectLine || S().label) + (isLP() ? " \u00b7 Lesson Plans" : " \u00b7 Cover page")
      : "Liberian " + bnd.label + " Curriculum \u00b7 Grade " + o.grade;
    runhead.foot = isLP()
      ? band + "   |   " + (o.lpPlanType === "weekly" ? "TEACHER'S WEEKLY UNIT PLAN" : "TEACHER'S LESSON PLAN") + " \u2014 " + (o.lpWeeks || 4) + " WEEKS/UNIT \u2014 for the teacher only"
      : isTeacher()
        ? band + "   |   TEACHER'S COPY \u2014 not for pupil distribution"
        : band + "   |   Name: ____________________   School: ____________________";
  }
  function bandTop(per) {
    /* custom text overrides the auto-generated subject &middot; grade on the
       left and the session on the right; blank falls back to the auto text.
       The .phdr-l / .phdr-r wrappers carry the per-element show/hide switches
       that the user's designer controls. */
    var autoLeft = runhead.left + (per ? " \u00b7 " + periodLabel(per) : "");
    var autoRight = runhead.right;
    var sh = HF.sheet;
    var l = (sh.hdr && sh.hdr.l) ? sh.hdr.l : autoLeft;
    var r = (sh.hdr && sh.hdr.r) ? sh.hdr.r : autoRight;
    return '<div class="phead">' +
      '<span class="phdr-l">' + esc(l) + '</span>' +
      '<span class="phdr-r">' + esc(r) + '</span>' +
      '</div>';
  }
  function bandBottom(n, total) {
    var sh = HF.sheet;
    var autoFoot = runhead.foot;
    var autoRight = "Page " + n + " of " + total;
    var l = (sh.ftr && sh.ftr.l) ? sh.ftr.l : autoFoot;
    var r = (sh.ftr && sh.ftr.r) ? sh.ftr.r : autoRight;
    /* the page number sits in its own wrapper so it can be hidden without
       losing the right-side custom text; if the user kept the right text as
       the automatic one, hide the page number entirely */
    var pgShown = sh.ftr && sh.ftr.pg !== false && !(sh.ftr && sh.ftr.r);
    var pg = pgShown ? '<span class="pftr-pg">Page ' + n + ' of ' + total + '</span>' : '';
    return '<div class="pfoot">' +
      '<span class="pftr-l">' + esc(l) + '</span>' +
      '<span><span class="pftr-r">' + esc(r) + '</span> ' + pg + '</span>' +
      '</div>';
  }

  /* ---------------- pagination ----------------
     An off-screen A4 sheet decides where the page breaks fall. The sheet and the
     measured height of every block live as long as one render does: a contents
     list can only be told which page each part is on once the pack is laid out,
     and writing the numbers down can reflow the page that carries them, so a
     render lays out, decorates, and lays out again. Measured heights are
     cached, which makes every pass after the first nearly free. */
  function paginator() {
    var doc = $("#doc");
    /* off-screen A4 sheet used only to measure how much fits */
    var probe = document.createElement("div");
    probe.className = "page measure";
    probe.innerHTML = bandTop() + '<div class="pbody"></div>' + bandBottom(1, 1);
    doc.appendChild(probe);
    var pbody = probe.querySelector(".pbody");
    /* usable height = full A4 sheet minus padding and the header / footer bands */
    var budget = probe.clientHeight
      - parseFloat(getComputedStyle(probe).paddingTop)
      - parseFloat(getComputedStyle(probe).paddingBottom)
      - probe.querySelector(".phead").offsetHeight
      - probe.querySelector(".pfoot").offsetHeight
      - 16;
    if (!budget || budget < 100) budget = 900;   /* fallback if hidden or unstyled */
    var hcache = [], split = {};

    function measure(b, i) {
      var c = hcache[i];
      /* _rev marks a block the contents pass rewrote: measure that one again */
      if (c && c.rev === (b._rev || 0) && !split[i]) return c.h;
      pbody.innerHTML = blockHtml(b);
      /* offsetHeight is layout px, unaffected by any ancestor transform */
      var h = pbody.offsetHeight;
      if (!split[i]) hcache[i] = { rev: b._rev || 0, h: h };
      return h;
    }

    return function layout(blocks) {
      var pages = [], cur = [], used = 0;
      /* every block keeps its index in the pack, so the page a heading landed
         on can be handed back to the contents list */
      var queue = blocks.map(function (b, i) { return { b: b, i: i }; });
      var pageOf = [];
      /* the period a sheet belongs to, carried forward until a new unit starts */
      var curPer = "", pagePer = [];

      function mark(i) { if (pageOf[i] == null) pageOf[i] = pages.length + 1; }
      function flush() { pages.push(cur); pagePer.push(curPer); cur = []; used = 0; }

      while (queue.length) {
        var e = queue.shift(), b = e.b;
        if (b.per) curPer = b.per;          /* a new unit, test or section begins */
        if (b.k === "pagebreak") { flush(); continue; }
        if (b.k === "covart") {           /* a designed cover owns a whole sheet */
          if (cur.length) flush();
          cur.push(b); mark(e.i); flush();
          continue;
        }
        var h = measure(b, e.i);
        if (used + h <= budget || !cur.length && h > budget) {
          /* fits, or is a single oversized block that must start its own sheet */
          if (used + h <= budget) { cur.push(b); mark(e.i); used += h; continue; }
        }
        if (used + h > budget) {
          var room = budget - used;
          var parts = room > 60 ? splitBlock(b, room / h) : null;
          if (parts) {
            split[e.i] = true;              /* two different blocks share one index now */
            cur.push(parts[0]); mark(e.i);
            flush();
            queue.unshift({ b: parts[1], i: e.i });
            continue;
          }
          if (cur.length) { flush(); queue.unshift(e); continue; }
          /* single block taller than one sheet and unsplittable: let it overflow its own sheet */
          cur.push(b); mark(e.i); flush();
        }
      }
      if (cur.length) flush();
      if (!pages.length) { pages = [[]]; pagePer = [""]; }
      return { pages: pages, pagePer: pagePer, pageOf: pageOf };
    };
  }

  function render(blocks) {
    var doc = $("#doc");
    /* Pagination must be viewport-independent: measuring while the preview is
       transform-scaled mixes scaled rects with unscaled layout heights and
       produces different page breaks per device. Neutralise the scale for the
       duration of the measuring pass, then restore it via fitPreview(). */
    var prevPs = document.documentElement.style.getPropertyValue("--ps");
    document.documentElement.style.setProperty("--ps", "1");
    doc.innerHTML = "";
    var layout = paginator();
    var out = layout(blocks);
    /* Contents page numbers: alternate between laying the pack out and writing
       the numbers onto its contents list until the numbers describe the sheets
       that are actually on screen. Two passes settle almost every pack. */
    if (window.PACK_TOC) {
      for (var pass = 0; pass < 4; pass++) {
        if (!window.PACK_TOC.decorate(blocks, function (i) { return out.pageOf[i] || 0; })) break;
        out = layout(blocks);
      }
    }

    var total = out.pages.length;
    doc.innerHTML = out.pages.map(function (bl, i) {
      var isCover = bl.length === 1 && bl[0].k === "covart";
      if (isCover) {
        return '<div class="page coverpage"><div class="pbody">' +
          blockHtml(bl[0]) + "</div></div>";
      }
      return '<div class="page">' + bandTop(out.pagePer[i]) + '<div class="pbody">' +
        bl.map(blockHtml).join("") + "</div>" + bandBottom(i + 1, total) + "</div>";
    }).join("");
    document.querySelectorAll("#doc .cv-content").forEach(function (content) {
      var height = content.clientHeight;
      if (height && content.scrollHeight > height) content.style.transform = "scale(" + (height / content.scrollHeight).toFixed(4) + ")";
    });
    $("#pageN").textContent = total;
    fitPreview();
  }

  /* ---------------- .docx export ---------------- */
  function xe(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  /* half-points, rescaled from the 14pt baseline to the chosen body size */
  function dsz(n) { return Math.max(2, Math.round(n * (FSZ() / FS_BASE))); }
  function runs(text, opt) {
    opt = opt || {};
    var props = "<w:rPr>" + (opt.b ? "<w:b/>" : "") + (opt.i ? "<w:i/>" : "") +
      (opt.sz ? '<w:sz w:val="' + dsz(opt.sz) + '"/><w:szCs w:val="' + dsz(opt.sz) + '"/>' : "") +
      (opt.color ? '<w:color w:val="' + opt.color + '"/>' : "") + "</w:rPr>";
    return String(text).split("\n").map(function (p, i) {
      return "<w:r>" + props + (i ? "<w:br/>" : "") + '<w:t xml:space="preserve">' + xe(p) + "</w:t></w:r>";
    }).join("");
  }
  function para(text, opt) {
    opt = opt || {};
    var pPr = "<w:pPr>" + (opt.align ? '<w:jc w:val="' + opt.align + '"/>' : "") +
      (opt.ind ? '<w:ind w:left="' + opt.ind + '"/>' : "") +
      '<w:spacing w:before="' + (opt.before || 0) + '" w:after="' + (opt.after == null ? 60 : opt.after) + '"/>' +
      (opt.shade ? '<w:shd w:val="clear" w:fill="' + opt.shade + '"/>' : "") +
      (opt.border ? '<w:pBdr><w:bottom w:val="single" w:sz="8" w:color="' + (opt.bc || "1F4E9C") + '"/></w:pBdr>' : "") +
      (opt.pageBreak ? "<w:pageBreakBefore/>" : "") + "</w:pPr>";
    return "<w:p>" + pPr + runs(text, opt) + "</w:p>";
  }
  /* one line of a printed table of contents: the entry, dotted leaders running
     to a right tab at the margin, and the page number it begins on */
  function tocPara(text, page) {
    return "<w:p><w:pPr>" +
      '<w:tabs><w:tab w:val="right" w:leader="dot" w:pos="10206"/></w:tabs>' +
      '<w:spacing w:before="0" w:after="40"/>' +
      '<w:ind w:left="200"/>' +
      "</w:pPr>" + runs(text, { sz: 28 }) +
      "<w:r><w:tab/></w:r>" + runs(String(page), { sz: 28, b: true }) + "</w:p>";
  }
  function tableXml(head, rows, hdrFill) {
    var w = Math.floor(10206 / head.length);
    var x = '<w:tbl><w:tblPr><w:tblStyle w:val="TableGrid"/><w:tblW w:w="10206" w:type="dxa"/><w:tblBorders>' +
      ["top", "left", "bottom", "right", "insideH", "insideV"].map(function (s) {
        return "<w:" + s + ' w:val="single" w:sz="6" w:color="9AB3D9"/>';
      }).join("") + "</w:tblBorders></w:tblPr>";
    x += "<w:tr>" + head.map(function (hh) {
      return '<w:tc><w:tcPr><w:tcW w:w="' + w + '" w:type="dxa"/><w:shd w:val="clear" w:fill="' + (hdrFill || "DCE6F5") + '"/></w:tcPr>' +
        para(hh, { b: true, sz: 26, after: 20 }) + "</w:tc>";
    }).join("") + "</w:tr>";
    rows.forEach(function (r) {
      x += "<w:tr>" + r.map(function (c, i) {
        var cell = (c === "" || c == null) ? " " : c;
        return '<w:tc><w:tcPr><w:tcW w:w="' + w + '" w:type="dxa"/></w:tcPr>' +
          para(cell, { sz: 26, after: 20, b: i === 0 && cell !== " " }) + "</w:tc>";
      }).join("") + "</w:tr>";
    });
    return x + "</w:tbl>" + para("", { after: 80, sz: 8 });
  }

  function toDocx(blocks, theme, head) {
    var C1 = theme.h1, C2 = theme.h2, FILL = theme.fill;
    head = head || { left: "", right: "", foot: "" };

    /* Word applies a header per section, so the pack is split into one
       section per period. Each section gets its own header part naming
       the period, and the run of periods is collected here. */
    var sections = [{ per: "", xml: "" }];
    function sec() { return sections[sections.length - 1]; }
    function emit(x) { sec().xml += x; }

    /* images embedded in the package: filename -> bytes, plus their rels */
    var media = {}, mediaRels = "", mediaTypes = "", mediaSeen = {}, mediaN = 0;
    function addImage(dataUrl, mime) {
      if (!dataUrl) return null;
      if (mediaSeen[dataUrl]) return mediaSeen[dataUrl];
      var bytes = dataUrlBytes(dataUrl);
      if (!bytes) return null;
      mediaN++;
      var ext = mime === "image/jpeg" ? "jpeg" : "png";
      var file = "image" + mediaN + "." + ext;
      var id = "rIdImg" + mediaN;
      media["word/media/" + file] = bytes;
      mediaRels += '<Relationship Id="' + id + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/' + file + '"/>';
      if (!mediaTypes || mediaTypes.indexOf('Extension="' + ext + '"') < 0) {
        mediaTypes += '<Default Extension="' + ext + '" ContentType="image/' + (ext === "jpeg" ? "jpeg" : "png") + '"/>';
      }
      mediaSeen[dataUrl] = id;
      return id;
    }
    /* an inline picture run, sized in EMU (914400 per inch) */
    function picXml(relId, wPx, hPx, maxWmm) {
      var maxEmu = Math.round((maxWmm || 60) * 36000);
      var wEmu = Math.round(wPx * 9525), hEmu = Math.round(hPx * 9525);
      if (wEmu > maxEmu) { hEmu = Math.round(hEmu * maxEmu / wEmu); wEmu = maxEmu; }
      return '<w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:drawing>' +
        '<wp:inline distT="0" distB="0" distL="0" distR="0" ' +
        'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing">' +
        '<wp:extent cx="' + wEmu + '" cy="' + hEmu + '"/><wp:docPr id="' + relId.replace(/\D/g, "") + '" name="Picture"/>' +
        '<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData ' +
        'uri="http://schemas.openxmlformats.org/drawingml/2006/picture">' +
        '<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">' +
        '<pic:nvPicPr><pic:cNvPr id="0" name="Picture"/><pic:cNvPicPr/></pic:nvPicPr>' +
        '<pic:blipFill><a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="' + relId + '"/>' +
        '<a:stretch><a:fillRect/></a:stretch></pic:blipFill>' +
        '<pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="' + wEmu + '" cy="' + hEmu + '"/></a:xfrm>' +
        '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic>' +
        "</a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>";
    }

    var body = "";
    blocks.forEach(function (b) {
      if (b.per && b.per !== sec().per) {
        /* start a new Word section, breaking the page before it */
        sections.push({ per: b.per, xml: "" });
      }
      body = "";
      switch (b.k) {
        case "h1": body += para(b.t, { b: true, sz: b.c ? 52 : 40, color: C1, before: 200, after: 100, border: !b.c, bc: C1, align: b.c ? "center" : null }); break;
        case "h2": body += para(b.t, { b: true, sz: 34, color: C2, before: 160, after: 80, align: b.c ? "center" : null }); break;
        case "h3": body += para(b.t, { b: true, sz: 30, color: "12203A", before: 140, after: 70, align: b.c ? "center" : null }); break;
        case "p": body += para(b.t, { sz: b.big ? 34 : 28, i: !!b.i, b: !!b.big, align: b.c ? "center" : null }); break;
        case "instr": body += para(b.t, { sz: 26, i: true, color: "44546A", shade: "F2F6FC" }); break;
        case "bul":
          /* a contents list carrying page numbers (see toc.js) exports as a real
             table of contents; every other bullet list keeps its plain bullet */
          b.items.forEach(function (x, i) {
            body += (b.pg && b.pg[i]) ? tocPara(x, b.pg[i])
                                      : para("•  " + x, { sz: 28, ind: 260 });
          });
          break;
        case "num": b.items.forEach(function (x, i) {
          body += para(((b.start || 1) + i) + ".  " + x, { sz: 28, ind: 260, after: 90 }); }); break;
        case "cols": {
          var n = Math.max(b.a.length, b.b.length), rows = [];
          for (var i = 0; i < n; i++) rows.push([b.a[i] || "", b.b[i] || ""]);
          body += tableXml(["Word", "Meaning"], rows, FILL); break;
        }
        case "table": body += tableXml(b.head, b.rows, FILL); break;
        case "formtable": {
          /* lesson plan form fields: bordered rows, no header shading,
             columns sized to the widest row so labels and values line up */
          var fx = '<w:tbl><w:tblPr><w:tblW w:w="10206" w:type="dxa"/><w:tblBorders>' +
            ["top", "left", "bottom", "right", "insideH", "insideV"].map(function (s) {
              return "<w:" + s + ' w:val="single" w:sz="6" w:color="9AB3D9"/>';
            }).join("") + "</w:tblBorders></w:tblPr>";
          b.rows.forEach(function (row) {
            var w = Math.floor(10206 / row.length);
            fx += "<w:tr>" + row.map(function (c) {
              var cell = (typeof c === "object" && c) ? c : { t: c };
              return '<w:tc><w:tcPr><w:tcW w:w="' + w + '" w:type="dxa"/></w:tcPr>' +
                para(cell.t || " ", { b: !!cell.b, sz: 26, after: 40, align: cell.c ? "center" : null }) +
                "</w:tc>";
            }).join("") + "</w:tr>";
          });
          body += fx + "</w:tbl>" + para("", { after: 80, sz: 8 }); break;
        }
        case "lines": for (var j = 0; j < b.n; j++) body += para("_______________________________________________________________", { sz: 28, after: 160, color: "AAAAAA" }); break;
        case "space": body += para("", { sz: 18 }); break;
        case "rule": body += para("", { border: true, sz: 10 }); break;
        case "covart": {
          /* Word cannot reproduce the CSS artwork, so the same information is
             laid out as a formal centred title block with a details table.
             The cover designer's colours, emblem choice and show/hide
             switches are honoured as far as Word allows. */
          var cds = normalizeDesign(b.design);
          function con(k) { return cds.show[k] !== false; }
          function col(k, fallback) { return cds[k] ? cds[k].replace("#", "").toUpperCase() : fallback; }
          body += para("", { sz: 40 });
          var bgId = b.bg ? addImage(b.bg, b.bgMime || "image/jpeg") : null;
          if (bgId) {
            /* the subject image is placed as a banner above the title: Word cannot tint
               a full-bleed background reliably across versions */
            body += picXml(bgId, 1400, 620, 165);
            body += para("", { sz: 20 });
          }
          var logoId = b.logo ? addImage(b.logo, "image/png") : null;
          if (con("emblem")) {
            if (logoId) body += picXml(logoId, 520, 260, 55);
            else if (b.crest) body += para(b.crest, { sz: 72, align: "center", after: 60 });
          }
          if (b.school && con("school")) body += para(b.school, { b: true, sz: 40, color: col("ink", C1), align: "center", after: 40 });
          if (b.motto && con("motto")) body += para(b.motto, { i: true, sz: 26, align: "center", after: 120 });
          if (con("rule")) body += para("", { border: true, sz: 10 });
          var tscale = Math.round((cds.titleScale || 100) / 100);
          body += para(b.title1, { b: true, sz: 64 * tscale, color: col("ink", C1), align: "center", before: 220, after: 60 });
          body += para(b.title2, { b: true, sz: 38 * tscale, color: col("accent", C2), align: "center", after: 60 });
          if (b.line && con("level")) body += para(b.line, { i: true, sz: 26, align: "center", after: 200 });
          if (con("panel")) {
            var cr = [];
            cr.push([COVER_TEXT.label(b, "schoolLabel", "School"), b.school || ""]);
            cr.push([COVER_TEXT.label(b, "subjectLabel", "Subject"), b.subject || ""]);
            cr.push([COVER_TEXT.label(b, "classLabel", "Class"), b.klass || ""]);
            cr.push(b.teacherCopy ? [COVER_TEXT.label(b, "teacherLabel", "Teacher"), b.teacher || ""] : [COVER_TEXT.label(b, "pupilLabel", "Name"), b.pupil || ""]);
            cr.push([COVER_TEXT.label(b, "termYearLabel", b.term ? "Term" : "Term / Year"), [b.term, b.year].filter(Boolean).join(" \u00b7 ")]);
            body += tableXml([COVER_TEXT.label(b, "detailLabel", "Detail"), COVER_TEXT.label(b, "entryLabel", "Entry")], cr, FILL);
          }
          if (con("note")) body += para(b.note ? COVER_TEXT.label(b, "noteLabel", "Note") + ": " + b.note : COVER_TEXT.label(b, "inspireLabel", "Inspire") + ": " + COVER_TEXT.label(b, "inspireText", "Teach \u00b7 Encourage \u00b7 Achieve"), { i: true, sz: 26, align: "center", before: 200 });
          if (con("org")) body += para(COVER_TEXT.label(b, "organization", "Liberian National Curriculum"), { sz: 22, align: "center" });
          break;
        }
        case "pagebreak": body += "<w:p><w:pPr><w:pageBreakBefore/></w:pPr></w:p>"; break;
      }
      emit(body);
    });

    var NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ' +
      'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"';
    var SM = '<w:rPr><w:sz w:val="16"/><w:szCs w:val="16"/><w:color w:val="666666"/></w:rPr>';

    function headerFor(per) {
      var left = head.left + (per ? " \u00b7 " + periodLabel(per) : "");
      return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        "<w:hdr " + NS + '><w:p><w:pPr><w:tabs><w:tab w:val="right" w:pos="10206"/></w:tabs>' +
        '<w:spacing w:before="0" w:after="0"/>' +
        '<w:pBdr><w:bottom w:val="single" w:sz="6" w:color="' + C2 + '"/></w:pBdr></w:pPr>' +
        '<w:r><w:rPr><w:b/><w:sz w:val="16"/><w:szCs w:val="16"/><w:color w:val="' + C1 + '"/></w:rPr>' +
        '<w:t xml:space="preserve">' + xe(left) + "</w:t></w:r>" +
        "<w:r>" + SM + "<w:tab/></w:r>" +
        "<w:r>" + SM + '<w:t xml:space="preserve">' + xe(head.right) + "</w:t></w:r></w:p></w:hdr>";
    }

    function fld(instr) {
      return '<w:fldSimple w:instr=" ' + instr + ' "><w:r>' + SM + "<w:t>1</w:t></w:r></w:fldSimple>";
    }
    var footerXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      "<w:ftr " + NS + '><w:p><w:pPr><w:tabs><w:tab w:val="right" w:pos="10206"/></w:tabs>' +
      '<w:spacing w:before="0" w:after="0"/>' +
      '<w:pBdr><w:top w:val="single" w:sz="6" w:color="' + C2 + '"/></w:pBdr></w:pPr>' +
      "<w:r>" + SM + '<w:t xml:space="preserve">' + xe(head.foot) + "</w:t></w:r>" +
      "<w:r>" + SM + "<w:tab/></w:r>" +
      "<w:r>" + SM + '<w:t xml:space="preserve">Page </w:t></w:r>' + fld("PAGE") +
      "<w:r>" + SM + '<w:t xml:space="preserve"> of </w:t></w:r>' + fld("NUMPAGES") +
      "</w:p></w:ftr>";

    var PGSZ = '<w:pgSz w:w="11906" w:h="16838"/>' +
      '<w:pgMar w:top="794" w:right="851" w:bottom="680" w:left="851" w:header="397" w:footer="340" w:gutter="0"/>';

    /* drop any empty leading section so the cover keeps the plain header */
    sections = sections.filter(function (x, i) { return i === 0 || x.xml; });

    var docBody = "", parts = {}, rels = "", types = "";
    sections.forEach(function (sc, i) {
      var hid = "rIdH" + i;
      parts["word/header" + (i + 1) + ".xml"] = headerFor(sc.per);
      rels += '<Relationship Id="' + hid + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header' + (i + 1) + '.xml"/>';
      types += '<Override PartName="/word/header' + (i + 1) + '.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/>';
      var sectPr = '<w:sectPr><w:headerReference w:type="default" r:id="' + hid + '"/>' +
        '<w:footerReference w:type="default" r:id="rIdF"/>' + PGSZ + "</w:sectPr>";
      if (i < sections.length - 1) {
        /* a non-final section carries its sectPr inside a trailing paragraph */
        docBody += sc.xml + "<w:p><w:pPr>" + sectPr + "</w:pPr></w:p>";
      } else {
        docBody += sc.xml + sectPr;
      }
    });

    var doc = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      "<w:document " + NS + "><w:body>" + docBody + "</w:body></w:document>";

    var files = {
      "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
        '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
        '<Default Extension="xml" ContentType="application/xml"/>' +
        '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
        '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>' +
        mediaTypes + types +
        '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/></Types>',
      "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>',
      "word/_rels/document.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
        rels + mediaRels +
        '<Relationship Id="rIdF" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/></Relationships>',
      "word/styles.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
        '<w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/><w:sz w:val="' + dsz(28) + '"/><w:szCs w:val="' + dsz(28) + '"/></w:rPr></w:rPrDefault></w:docDefaults>' +
        '<w:style w:type="table" w:styleId="TableGrid"><w:name w:val="Table Grid"/></w:style></w:styles>',
      "word/footer1.xml": footerXml,
      "word/document.xml": doc
    };
    Object.keys(parts).forEach(function (k) { files[k] = parts[k]; });
    Object.keys(media).forEach(function (k) { files[k] = media[k]; });
    return makeZip(files);
  }

  var CRC = (function () {
    var t = new Uint32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  })();
  function crc32(buf) {
    var c = 0xFFFFFFFF;
    for (var i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }
  function makeZip(files) {
    var enc = new TextEncoder(), chunks = [], central = [], off = 0;
    function u16(n) { return [n & 255, (n >> 8) & 255]; }
    function u32(n) { return [n & 255, (n >> 8) & 255, (n >> 16) & 255, (n >> 24) & 255]; }
    Object.keys(files).forEach(function (name) {
      var v = files[name];
      /* string parts are XML; Uint8Array parts are binary media (images) */
      var data = (v instanceof Uint8Array) ? v : enc.encode(v);
      var nm = enc.encode(name), crc = crc32(data);
      var lf = [].concat([80, 75, 3, 4], u16(20), u16(0), u16(0), u16(0), u16(0),
        u32(crc), u32(data.length), u32(data.length), u16(nm.length), u16(0));
      chunks.push(new Uint8Array(lf), nm, data);
      central.push({ nm: nm, crc: crc, len: data.length, off: off });
      off += lf.length + nm.length + data.length;
    });
    var cd = [], cdLen = 0;
    central.forEach(function (f) {
      var h = [].concat([80, 75, 1, 2], u16(20), u16(20), u16(0), u16(0), u16(0), u16(0),
        u32(f.crc), u32(f.len), u32(f.len), u16(f.nm.length),
        u16(0), u16(0), u16(0), u16(0), u32(0), u32(f.off));
      cd.push(new Uint8Array(h), f.nm); cdLen += h.length + f.nm.length;
    });
    var end = new Uint8Array([].concat([80, 75, 5, 6], u16(0), u16(0),
      u16(central.length), u16(central.length), u32(cdLen), u32(off), u16(0)));
    var all = chunks.concat(cd, [end]);
    var total = all.reduce(function (s, a) { return s + a.length; }, 0);
    var out = new Uint8Array(total), p = 0;
    all.forEach(function (a) { out.set(a, p); p += a.length; });
    return new Blob([out], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  }
  function download(blob, name) {
    var u = URL.createObjectURL(blob), a = document.createElement("a");
    a.href = u; a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(u); a.remove(); }, 1500);
  }

  /* ---------------- actions ---------------- */
  /* A kindergarten level has no transcribed curriculum, so its document is the
     cover sheet itself. Everything a cover needs is derived from the selected
     subject and level, and the whole Customization panel still applies. */
  function kgCoverPack(o, sj) {
    var name = (sj.packName || sj.label).toUpperCase();
    var d = {
      title: name + " \u2014 " + o.levelLabel,
      sub: o.levelName + " cover page",
      line: o.levelName + " \u00b7 " + (sj.packName || sj.label) + " \u00b7 Liberian National Curriculum"
    };
    /* PACK_COVER ends with a page break so a workbook starts on a fresh
       sheet; a cover-only document has nothing after it, and a trailing break
       would leave a blank second page. */
    var blocks = window.PACK_COVER(o, d);
    while (blocks.length && blocks[blocks.length - 1].k === "pagebreak") blocks.pop();
    return { topics: [], sheets: [], blocks: blocks, kg: true };
  }

  function generate() {
    var o = opts();
    var signatureOptions = Object.assign({}, o);
    ["teacher", "keys", "fsz"].forEach(function (k) { delete signatureOptions[k]; });
    if (!isLP()) { delete signatureOptions.teacherName; delete signatureOptions.school; }
    var signature = JSON.stringify(signatureOptions) + "|notes:" + NOTES_ON;
    /* subjects that share another subject's engine supply their own data
       and cover wording */
    var sj = S();
    if (sj.curriculum) o.curriculum = sj.curriculum();
    if (sj.waMeta) o.waMeta = sj.waMeta();
    o.subjectName = (sj.packName || sj.label).toUpperCase();
    o.subjectLine = sj.packName || sj.label;
    o.bandName = bandOf(o.grade).label;

    /* kindergarten levels bypass the worksheet machinery entirely: there are
       no units, no exercises and no answer keys to edit, only a cover — the
       one exception is the Kindergarten subject's lesson plans, which plan
       the transcribed ECD units like any other subject */
    if (o.kg && !(cur === "kg" && isLP())) {
      pack = kgCoverPack(o, sj);
      setRunning(o);
      render(pack.blocks);
      window.PACK_CUR_SUBJECT = sj.label;
      window.PACK_CUR_GRADE = o.levelLabel;
      if (window.VOICE_READER) window.VOICE_READER.loadFromPack(pack, cur, sj.label, o.levelLabel);
      $("#meta").textContent = sj.label + " \u00b7 " + o.levelLabel +
        " \u00b7 cover page (" + (COVER.on ? (COVER_TPL[COVER.tpl] ? COVER_TPL[COVER.tpl].label : "Simple List") : "no cover art") + ")";
      $("#exportbar").style.display = "flex";
      return;
    }

    window.TEACHING.begin(sj.engine(), signature);
    if (isLP() && window.LESSON_PLAN) {
      /* the lesson plan is a teacher's document whatever the session is */
      pack = window.LESSON_PLAN.build(o);
    } else {
      pack = sj.engine().buildPack(Object.assign({}, o, { keys: true }));
    }
    pack.blocks = window.TEACHING.accept(pack, signature);
    setRunning(o);
    render(pack.blocks);
    /* expose context for Emmanuel, the AI tutor */
    window.PACK_CUR_SUBJECT = sj.label;
    window.PACK_CUR_GRADE = o.kg ? o.levelLabel : o.grade;
    /* feed the voice reader this pack's difficult words and sentences */
    if (window.VOICE_READER) window.VOICE_READER.loadFromPack(pack, cur, sj.label, o.grade);
    $("#meta").textContent = isLP()
      ? S().label + " · " + (o.kg ? o.levelLabel : "Grade " + o.grade) + " · " + pack.topics.length +
        (o.lpPlanType === "weekly" ? " weekly lesson plan(s) · " : " lesson plan(s) · ") +
        o.lpWeeks + " weeks/unit · " + (o.lpPlanType === "weekly" ? ((o.lpDays || 5) * o.lpMin) + " min/wk" : o.lpMin + " min/lesson") + " · seed " + o.seed
      : S().label + " · Grade " + o.grade + " · " + pack.topics.length +
        " unit(s) · " + o.sheets.length + " exercise type(s) · seed " + o.seed;
    if (TEACHING.isAssessment()) $("#meta").textContent = TEACHING.assessmentInfo();
    $("#exportbar").style.display = "flex";
  }

  /* ---------------- installable Android / desktop app ----------------
     Browsers expose the native install prompt only after the manifest and
     service worker pass their checks. Keep the button hidden until then. */
  var deferredInstallPrompt = null;
  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    deferredInstallPrompt = event;
    var button = $("#installApp");
    if (button) button.hidden = false;
  });
  window.addEventListener("appinstalled", function () {
    deferredInstallPrompt = null;
    var button = $("#installApp"), status = $("#installStatus");
    if (button) button.hidden = true;
    if (status) status.textContent = "The course pack generator is installed and ready offline.";
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.body.setAttribute("data-subject", cur);

    var installButton = $("#installApp");
    if (installButton) {
      if (deferredInstallPrompt) installButton.hidden = false;
      installButton.onclick = function () {
        if (!deferredInstallPrompt) return;
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then(function () {
          deferredInstallPrompt = null;
          installButton.hidden = true;
        });
      };
    }
    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register("./sw.js").catch(function () {
        /* The original single-file, file:// workflow still works without PWA support. */
      });
    }
    renderSubjectTabs(); buildSheetList(); refreshGrades(); refreshPeriods();

    /* keep the preview fitted to the viewport on resize and rotation */
    window.addEventListener("resize", fitSoon);
    window.addEventListener("orientationchange", fitSoon);
    fitPreview();

    /* collapsible settings panel — the header hamburger arranges the whole
       layout: on tablet/phone it slides the panel open and shut, and on wider
       screens it collapses the settings sidebar so the pack uses the full
       width. The on-screen "Course pack settings" bar stays for touch. */
    var pt = $("#panelToggle");
    var menuBtn = $("#menuBtn");
    function panelIsOpen() {
      return window.matchMedia("(max-width:980px)").matches
        ? document.body.classList.contains("panel-open")
        : !document.body.classList.contains("panel-closed");
    }
    function paintMenu() {
      var open = panelIsOpen();
      if (menuBtn) {
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
        menuBtn.setAttribute("aria-label", open ? "Hide course pack settings" : "Show course pack settings");
        var u = menuBtn.querySelector("use");
        if (u) u.setAttribute("href", open ? "#i-close" : "#i-menu");
      }
      if (pt) pt.setAttribute("aria-expanded", open ? "true" : "false");
    }
    function togglePanel() {
      if (window.matchMedia("(max-width:980px)").matches) {
        document.body.classList.toggle("panel-open");
      } else {
        document.body.classList.toggle("panel-closed");
      }
      paintMenu();
      fitSoon();
    }
    if (menuBtn) menuBtn.onclick = togglePanel;
    if (pt) {
      pt.onclick = function () {
        document.body.classList.toggle("panel-open");
        paintMenu();
        fitSoon();
      };
    }
    window.addEventListener("resize", paintMenu);
    window.addEventListener("orientationchange", paintMenu);
    paintMenu();
    /* after generating on a small screen, collapse the panel so the
       pack is what the user actually sees */
    function collapseIfNarrow() {
      if (window.matchMedia("(max-width:980px)").matches) {
        document.body.classList.remove("panel-open");
        paintMenu();
      }
    }

    /* body text size: re-flow the pack because page breaks depend on it */
    applyFontSize();
    var fszEl = $("#fsz");
    if (fszEl) {
      fszEl.oninput = function () {
        applyFontSize();
        if (pack) render(pack.blocks);
      };
    }

    $("#grade").onchange = refreshPeriods;
    $("#gen").onclick = function () { generate(); collapseIfNarrow(); };
    $("#reseed").onclick = function () { $("#seed").value = Math.floor(Math.random() * 9999) + 1; generate(); };
    /* The printed booklet carries the subject-and-grade name, exactly like
       the Word export, so the teacher's saved PDF is named after the pack
       instead of the platform. */
    function packFileBase() {
      /* a kindergarten level has no workbook template, so name the cover by
         subject and level instead of forcing it through S().file() — except
         the Kindergarten subject's lesson plans, which are real documents */
      if (opts().kg && !(cur === "kg" && isLP())) {
        return (S().packName || S().label).replace(/\s+/g, "_") +
          "_" + opts().levelLabel + "_Cover" +
          (isTeacher() ? "_Teacher_Copy" : "_Student");
      }
      if (isLP()) {
        /* the lesson plan is always the teacher's document */
        var pType = (opts().lpPlanType === "weekly") ? "_Weekly_Plan" : "_Lesson_Plan";
        return S().file(opts().grade)
          .replace(/\.docx$/, "")
          .replace(/_Workbook|_Pack|_Plans$/, "") + pType + "_Teacher_Copy";
      }
      return S().file(opts().grade).replace(/\.docx$/, (TEACHING.isAssessment() ? "_Assessment" : "") + (isTeacher() ? "_Teacher_Copy" : "_Student"));
    }
    $("#print").onclick = function () {
      var old = document.title;
      var restore = function () {
        document.title = old;
        window.removeEventListener("afterprint", restore);
      };
      document.title = packFileBase();
      window.addEventListener("afterprint", restore);
      window.print();
      setTimeout(restore, 3000);   /* fallback when afterprint never fires */
    };

    /* ---- duplex print helper (book print sequence) ---- */
    var bmask = $("#bookMask"), btool = null;
    if (window.BOOK_TOOL && $("#bookTool")) btool = window.BOOK_TOOL.init($("#bookTool"));
    function openBookTool() {
      if (!bmask) return;
      var n = parseInt(($("#pageN") || {}).textContent, 10) || 0;
      var nm = n > 0 ? (opts().kg ? S().label + " " + opts().levelLabel + (isLP() ? " lesson plan" : " cover") : S().label + " Grade " + opts().grade + " workbook") : "";
      if (btool) btool.open(n, nm);
      bmask.hidden = false;
      document.body.classList.add("book-open");
      var pc = $("#pageCount");
      if (pc && pc.focus) { pc.focus(); if (pc.select) pc.select(); }
    }
    function closeBookTool() {
      if (!bmask) return;
      bmask.hidden = true;
      document.body.classList.remove("book-open");
    }
    var dupBtn = $("#dup");
    if (dupBtn && bmask) {
      dupBtn.onclick = openBookTool;
      var bx = $("#bkClose");
      if (bx) bx.onclick = closeBookTool;
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !bmask.hidden) closeBookTool();
      });
      bmask.addEventListener("mousedown", function (e) {
        if (e.target === bmask) closeBookTool();
      });
    }
    $("#docx").onclick = function () {
      if (!pack) return;
      var THEMES = {
        en: { h1: "0B6B3A", h2: "12864B", fill: "DCF0E4" },
        fr: { h1: "0B3B8C", h2: "1E5FD0", fill: "DCE6F5" },
        sc: { h1: "7A2E12", h2: "B4541F", fill: "FBE6D5" },
        ma: { h1: "5B2A86", h2: "8247B5", fill: "EBDFF7" },
        ss: { h1: "0D6A6A", h2: "128F8F", fill: "D8F0EE" },
        rm: { h1: "8A5A00", h2: "B8860B", fill: "F7EBD0" },
        pe: { h1: "1F7A3D", h2: "2E9E55", fill: "DEF2E4" },
        bi: { h1: "0F5132", h2: "1A7A4C", fill: "D9EFE2" },
        ch: { h1: "7A1F5C", h2: "A6357E", fill: "F5DEEC" },
        ph: { h1: "1F4AA8", h2: "3B6FD0", fill: "DCE6F7" },
        ec: { h1: "1F5F7A", h2: "2E86A8", fill: "DCEDF5" },
        eg: { h1: "7A4A12", h2: "A8681E", fill: "F7E8D2" },
        gg: { h1: "1F6B4F", h2: "2E8B6A", fill: "DCF0E7" },
        hi: { h1: "8A5A00", h2: "B8860B", fill: "F7EBD0" },
        li: { h1: "4A2F7A", h2: "6B4AA8", fill: "E7DFF7" },
        kg: { h1: "B3541E", h2: "D3762A", fill: "F7E8D2" },
        wma: { h1: "5B2A86", h2: "8247B5", fill: "EBDFF7" },
        wen: { h1: "0B6B3A", h2: "12864B", fill: "DCF0E4" },
        wbio: { h1: "0F5132", h2: "1A7A4C", fill: "D9EFE2" },
        wch: { h1: "7A1F5C", h2: "A6357E", fill: "F5DEEC" },
        wph: { h1: "1F4AA8", h2: "3B6FD0", fill: "DCE6F7" },
        weco: { h1: "1F5F7A", h2: "2E86A8", fill: "DCEDF5" },
        wgg: { h1: "1F6B4F", h2: "2E8B6A", fill: "DCF0E7" },
        whis: { h1: "8A5A00", h2: "B8860B", fill: "F7EBD0" },
        wag: { h1: "4A6B12", h2: "6E8F2E", fill: "E8F2D4" },
        wali: { h1: "4A2F7A", h2: "6B4AA8", fill: "E7DFF7" },
        wcrs: { h1: "7A4A12", h2: "A8681E", fill: "F7E8D2" }
      };
      var theme = THEMES[cur] || THEMES.en;
      var fn = packFileBase() + ".docx";
      download(toDocx(pack.blocks, theme, runhead), fn);
    };
    /* study-notes toggle */
    var nb = $("#notes");
    if (nb) {
      NOTES_ON = nb.checked;
      nb.addEventListener("change", function () { NOTES_ON = nb.checked; generate(); });
    }

    /* session switch: student | teacher */
    function paintSession() {
      document.querySelectorAll("#session .sess").forEach(function (b) {
        b.className = "sess" + (b.getAttribute("data-m") === MODE ? " on" : "");
      });
      document.body.setAttribute("data-mode", MODE);
      var kr = $("#keysRow");
      if (kr) kr.style.display = isTeacher() ? "" : "none";
      var n = $("#sessNote");
      if (n) n.textContent = TRACK === "wa"
        ? "WASSCE session: the WAEC West African Senior School Certificate Examination, Grade 12. Syllabus topics, objective (Paper 1) and theory (Paper 2) practice, topic mocks and a full WASSCE mock \u2014 built from the official WAEC syllabuses."
        : isTeacher()
          ? "Teacher session: the same worksheets as the pupils receive, with every answer key included and each sheet marked as the teacher's copy."
          : "Student session: clean pupil worksheets, tests and examinations. No answers are included anywhere in the pack.";
      syncBadges();
    }
    document.querySelectorAll("#session .sess").forEach(function (b) {
      b.onclick = function () {
        var m = b.getAttribute("data-m");
        if (m === MODE) return;
        MODE = m;
        paintSession();
        generate();
      };
    });
    /* session track: National Curriculum | WASSCE */
    document.querySelectorAll("#tracks .track").forEach(function (b) {
      b.onclick = function () { setTrack(b.getAttribute("data-t")); };
    });
    paintSession();

    /* ---- document type: course pack | teacher's lesson plan ----
       The lesson plan hides the exercise-type and pack-contents sections
       (the plan is built from the curriculum data, not from worksheets)
       and shows the lesson-duration controls instead. */
    function paintDocType() {
      document.querySelectorAll("#dtype .sess").forEach(function (b) {
        b.className = "sess" + (b.getAttribute("data-d") === DOCTYPE ? " on" : "");
      });
      var lp = isLP();
      var sh = $("#ddSheets"), pa = $("#ddParts"), lw = $("#lpWrap");
      if (sh) sh.style.display = lp ? "none" : "";
      if (pa) pa.style.display = lp ? "none" : "";
      if (lw) lw.style.display = lp ? "" : "none";
      var n = $("#dtypeNote");
      if (n) n.textContent = lp
        ? "Lesson plan: standard Liberian lesson and unit plans calibrated to 3 or 4 weeks per unit with weekly plan adjustments, instructional objectives, procedures, evaluation, and assignments."
        : "Course pack: study notes, worksheets, period tests and examinations for the selected periods.";
    }
    document.querySelectorAll("#dtype .sess").forEach(function (b) {
      b.onclick = function () {
        var d = b.getAttribute("data-d");
        if (d === DOCTYPE) return;
        DOCTYPE = d;
        paintDocType();
        /* the level list depends on the document: a lesson plan cannot be made
           for a kindergarten level except on the Kindergarten subject, so
           those levels appear and disappear with the document switch */
        refreshGrades(); refreshPeriods();
        generate();
      };
    });

    /* planning format tabs: daily plan | weekly plan */
    function paintLpPlanTabs() {
      document.querySelectorAll("#lpPlanTabs .sess").forEach(function (b) {
        b.className = "sess" + (b.getAttribute("data-pt") === LP_PLAN_TYPE ? " on" : "");
      });
    }
    document.querySelectorAll("#lpPlanTabs .sess").forEach(function (b) {
      b.onclick = function () {
        var pt = b.getAttribute("data-pt");
        if (pt === LP_PLAN_TYPE) return;
        LP_PLAN_TYPE = pt;
        paintLpPlanTabs();
        generate();
      };
    });

    /* unit duration in weeks (Liberia regular school sector: 3 or 4 weeks) */
    var lpWeeksIn = $("#lpWeeks");
    function paintLpWeeks() {
      var v = lpWeeksIn ? (+lpWeeksIn.value || 4) : 4;
      document.querySelectorAll("#lpWeekPresets .lp-w").forEach(function (b) {
        b.className = "lp-w" + (+b.getAttribute("data-w") === v ? " on" : "");
      });
    }
    document.querySelectorAll("#lpWeekPresets .lp-w").forEach(function (b) {
      b.onclick = function () {
        if (lpWeeksIn) lpWeeksIn.value = b.getAttribute("data-w");
        paintLpWeeks();
        generate();
      };
    });
    if (lpWeeksIn) lpWeeksIn.onchange = function () {
      lpWeeksIn.value = Math.max(1, Math.min(6, +lpWeeksIn.value || 4));
      paintLpWeeks();
      generate();
    };

    /* lesson duration: preset minutes, or a custom number 15-240 */
    var lpIn = $("#lpMin");
    function paintLpPresets() {
      var v = +lpIn.value || 40;
      document.querySelectorAll("#lpPresets .lp-p").forEach(function (b) {
        b.className = "lp-p" + (+b.getAttribute("data-m") === v ? " on" : "");
      });
    }
    document.querySelectorAll("#lpPresets .lp-p").forEach(function (b) {
      b.onclick = function () {
        lpIn.value = b.getAttribute("data-m");
        paintLpPresets();
        generate();
      };
    });
    if (lpIn) lpIn.onchange = function () {
      lpIn.value = Math.max(15, Math.min(240, +lpIn.value || 40));
      paintLpPresets();
      generate();
    };

    var lpDaysIn = $("#lpDays");
    if (lpDaysIn) lpDaysIn.onchange = function () { generate(); };
    var lpAdjModeIn = $("#lpAdjMode");
    if (lpAdjModeIn) lpAdjModeIn.onchange = function () { generate(); };
    var lpAdjNoteIn = $("#lpAdjNote");
    if (lpAdjNoteIn) {
      lpAdjNoteIn.oninput = function () { generate(); };
      lpAdjNoteIn.onchange = function () { generate(); };
    }

    paintDocType();
    paintLpPlanTabs();
    paintLpWeeks();
    paintLpPresets();

    /* cover page fields -> COVER, applied at generate time */
    var CVMAP = { cvSchool: "school", cvMotto: "motto", cvPupil: "pupil", cvTeacher: "teacher",
      cvClass: "classname", cvTerm: "term", cvYear: "year", cvCrest: "crest", cvNote: "note" };
    function readCover() {
      COVER.on = $("#cvOn").checked;
      COVER.ownPage = $("#cvBreak").checked;
      var subjectBg = $("#cvSubjectBg");
      if (subjectBg) COVER.useSubjectArt = subjectBg.checked;
      Object.keys(CVMAP).forEach(function (id) {
        var el = $("#" + id);
        if (el) COVER[CVMAP[id]] = el.value.trim();
      });
      $("#cvBox").style.display = COVER.on ? "" : "none";
      if (typeof saveCover === "function") saveCover();
    }
    Object.keys(CVMAP).concat(["cvOn", "cvBreak", "cvSubjectBg"]).forEach(function (id) {
      var el = $("#" + id);
      if (el) el.addEventListener("input", readCover);
      if (el) el.addEventListener("change", function () { readCover(); generate(); });
    });
    if ($("#cvYear") && !$("#cvYear").value) $("#cvYear").value = COVER.year;

    /* ---- template picker ---- */
    /* Every template's palette in one place: the picker swatch reads it, and
       the cover designer uses it as the "Auto" fallback behind each colour.
       These values must match the .cv-* rules in styles.css. */
    var TPL_COLORS = {
      classic: { band: "#1b2a52", ink: "#1b2a52", accent: "#5a9367", paper: "#fdf6e9", soft: "#e9eff8", warm: "#e8a33d" },
      liberia: { band: "#0d2c6b", ink: "#0d2c6b", accent: "#c8102e", paper: "#fbfaf6", soft: "#e6ecf7", warm: "#e8a33d" },
      forest:  { band: "#12403a", ink: "#12403a", accent: "#2f8f6d", paper: "#f2f9f4", soft: "#dff0e6", warm: "#e8a33d" },
      sunrise: { band: "#b35c1e", ink: "#6b3410", accent: "#d98324", paper: "#fff7ec", soft: "#fbe6cd", warm: "#e8a33d" },
      kg:      { band: "#2f6f4f", ink: "#1f4d3a", accent: "#e0662b", paper: "#fffaf0", soft: "#fdeecf", warm: "#f0b429" },
      plain:   { band: "#1f2937", ink: "#1f2937", accent: "#4b5563", paper: "#ffffff", soft: "#eef1f4", warm: "#e8a33d" },
      table:   { band: "#5d6b85", ink: "#1f2937", accent: "#4b5563", paper: "#ffffff", soft: "#eef1f4", warm: "#e8a33d" }
    };
    window.PACK_COVER_COLORS = TPL_COLORS;
    function tplColor(key) {
      var c = TPL_COLORS[COVER_TPL[COVER.tpl] ? COVER.tpl : "classic"];
      return (c && c[key]) || "#1f2937";
    }
    function TPL_SW(id) {
      var c = TPL_COLORS[COVER_TPL[id] ? id : "classic"] || TPL_COLORS.plain;
      return [c.band, c.paper, c.accent];
    }
    function renderTplGrid() {
      var g = $("#tplGrid");
      if (!g) return;
      g.innerHTML = "";
      var ids = Object.keys(COVER_TPL).concat(["table"]);
      ids.forEach(function (id) {
        var label = id === "table" ? "Simple List" : COVER_TPL[id].label;
        var c = TPL_SW(id);
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "tplbtn" + (COVER.tpl === id ? " on" : "");
        btn.setAttribute("data-tpl", id);
        btn.setAttribute("aria-pressed", COVER.tpl === id ? "true" : "false");
        btn.innerHTML =
          '<span class="tplsw" style="background:' + c[1] + ';border-bottom:1px solid var(--line)">' +
            '<i style="background:' + c[0] + '"></i><u style="border-color:' + c[2] + '"></u></span>' +
          "<span>" + label + "</span>";
        btn.onclick = function () {
          COVER.tpl = id;
          saveCover();
          renderTplGrid();
          renderDesigner();
          syncBadges();
          generate();
        };
        g.appendChild(btn);
      });
      var h = $("#tplHint");
      if (h) h.textContent = COVER.tpl === "table"
        ? "A plain details table \u2014 fastest to print and uses least ink. The colour, emblem and show/hide designer below applies to the five designed templates."
        : "A full designed cover sheet. Subject and Class are filled in automatically. Retune its colours, emblem, title size and elements in the Cover designer below.";
    }

    /* ---- cover designer: colours, emblem, title size, show/hide ----
       Every control writes straight into COVER.design, is persisted with the
       school's details, and re-renders the preview. "Auto" hands a setting
       back to the chosen template. */
    var DES_COLOR_LABEL = { band: "Border band", ink: "Title ink", accent: "Accent",
                            paper: "Paper", warm: "Warm bar" };
    function renderDesigner() {
      var box = $("#cvDesigner");
      if (!box) return;
      var ds = COVER.design = normalizeDesign(COVER.design);
      var usable = COVER.tpl !== "table";
      box.innerHTML = "";

      /* -- colours -- */
      var cap = document.createElement("div");
      cap.className = "cvsec";
      cap.textContent = "Cover colours";
      box.appendChild(cap);
      var grid = document.createElement("div");
      grid.className = "des-cols";
      window.PACK_DESIGNS.colors.forEach(function (key) {
        var name = DES_COLOR_LABEL[key] || key;
        var cell = document.createElement("label");
        cell.className = "des-col" + (usable ? "" : " off");
        var t1 = document.createElement("span");
        t1.textContent = name;
        var sw = document.createElement("span");
        sw.className = "des-sw";
        var inp = document.createElement("input");
        inp.type = "color";
        inp.id = "cvCol-" + key;
        inp.value = ds[key] || tplColor(key);
        inp.dataset.automatic = ds[key] ? "false" : "true";
        inp.title = ds[key] ? "Custom colour \u2014 Auto restores the template's" : "Template colour \u2014 change to override";
        inp.disabled = !usable;
        inp.oninput = function () {
          ds[key] = inp.value.toLowerCase();
          saveCover();
          inp.dataset.automatic = "false";
          inp.title = "Custom colour \u2014 Auto restores the template's";
          generate();
        };
        var auto = document.createElement("button");
        auto.type = "button";
        auto.textContent = "Auto";
        auto.disabled = !usable;
        auto.setAttribute("aria-label", "Use the template's " + name + " colour");
        auto.onclick = function () {
          ds[key] = "";
          saveCover();
          renderDesigner();
          generate();
        };
        sw.append(inp, auto);
        cell.append(t1, sw);
        grid.appendChild(cell);
      });
      box.appendChild(grid);
      var cReset = document.createElement("button");
      cReset.type = "button";
      cReset.className = "des-reset";
      cReset.textContent = "Use the template's colours";
      cReset.onclick = function () {
        window.PACK_DESIGNS.colors.forEach(function (k) { ds[k] = ""; });
        saveCover(); renderDesigner(); generate();
      };
      box.appendChild(cReset);

      /* -- emblem -- */
      var cap2 = document.createElement("div");
      cap2.className = "cvsec";
      cap2.textContent = "Emblem & title";
      box.appendChild(cap2);
      var erow = document.createElement("div");
      erow.className = "row row-sel";
      var elab = document.createElement("label");
      elab.setAttribute("for", "cvEmblem");
      elab.textContent = "Emblem";
      var esel = document.createElement("select");
      esel.id = "cvEmblem";
      var dOpt = document.createElement("option");
      dOpt.value = "";
      dOpt.textContent = "Template default (" + ((COVER_TPL[COVER.tpl] || {}).emblem || "em-apple").replace("em-", "") + ")";
      esel.appendChild(dOpt);
      EMBLEMS.forEach(function (e) {
        var o = document.createElement("option");
        o.value = e.id; o.textContent = e.label;
        esel.appendChild(o);
      });
      esel.value = ds.emblem;
      esel.onchange = function () {
        ds.emblem = esel.value;
        saveCover(); generate();
      };
      erow.append(elab, esel);
      box.appendChild(erow);

      /* -- title size -- */
      var trow = document.createElement("div");
      trow.className = "row";
      var tlab = document.createElement("label");
      tlab.setAttribute("for", "cvTScale");
      tlab.textContent = "Title size";
      var trng = document.createElement("input");
      trng.type = "range";
      trng.id = "cvTScale";
      trng.min = "60"; trng.max = "150"; trng.step = "5";
      trng.value = String(ds.titleScale);
      var tval = document.createElement("b");
      tval.className = "fadeval";
      tval.textContent = ds.titleScale + "%";
      trng.oninput = function () {
        ds.titleScale = +trng.value;
        tval.textContent = ds.titleScale + "%";
        saveCover(); generate();
      };
      trow.append(tlab, trng, tval);
      box.appendChild(trow);

      /* -- level line -- */
      var lrow = document.createElement("div");
      lrow.className = "row";
      var llab = document.createElement("label");
      llab.setAttribute("for", "cvLevelLine");
      llab.textContent = "Level line";
      var linp = document.createElement("input");
      linp.type = "text";
      linp.id = "cvLevelLine";
      linp.maxLength = 220;
      linp.placeholder = opts().kg ? opts().levelName : "Automatic \u2014 e.g. Kindergarten II \u00b7 English";
      linp.value = ds.levelLine;
      linp.oninput = function () {
        ds.levelLine = linp.value;
        saveCover(); generate();
      };
      lrow.append(llab, linp);
      box.appendChild(lrow);
      var lhint = document.createElement("p");
      lhint.className = "hint";
      lhint.textContent = "The italic line under the title. Leave blank to print the automatic curriculum and level line.";
      box.appendChild(lhint);

      /* -- show / hide every element -- */
      var cap3 = document.createElement("div");
      cap3.className = "cvsec";
      cap3.textContent = "Show on the cover";
      box.appendChild(cap3);
      var chks = document.createElement("div");
      chks.className = "des-chks";
      window.PACK_DESIGNS.shows.forEach(function (pair) {
        var key = pair[0], text = pair[1];
        var lab = document.createElement("label");
        lab.className = "chk" + (usable ? "" : " off");
        var cb = document.createElement("input");
        cb.type = "checkbox";
        cb.id = "cvShow-" + key;
        cb.checked = ds.show[key] !== false;
        cb.disabled = !usable;
        cb.onchange = function () {
          ds.show[key] = cb.checked;
          saveCover(); generate();
        };
        var sp = document.createElement("span");
        sp.textContent = text;
        lab.append(cb, sp);
        chks.appendChild(lab);
      });
      box.appendChild(chks);

      var dReset = document.createElement("button");
      dReset.type = "button";
      dReset.id = "cvDesignReset";
      dReset.className = "des-reset";
      dReset.textContent = "Reset the whole cover design";
      dReset.onclick = function () {
        COVER.design = defaultDesign();
        saveCover(); renderDesigner(); generate();
      };
      box.appendChild(dReset);
      var dNote = document.createElement("p");
      dNote.className = "hint";
      dNote.textContent = usable
        ? "Colours, emblem, title size and these switches are saved on this device and travel with any saved document in your teaching library."
        : "The Simple List template is plain text, so the designer applies to the five designed templates.";
      box.appendChild(dNote);
    }
    window.PACK_PAINT_DESIGNER = renderDesigner;

    /* ---- persistence: the school's details are remembered on this device ---- */
    var STORE = "lncpg.cover.v1";
    var PERSIST = ["school", "motto", "crest", "teacher", "term", "year", "tpl", "bgFade", "useSubjectArt", "text", "design"];
    function saveCover() {
      try {
        var o = {};
        PERSIST.forEach(function (k) { o[k] = COVER[k]; });
        localStorage.setItem(STORE, JSON.stringify(o));
      } catch (e) { /* private mode or storage disabled: ignore */ }
    }
    function loadCover() {
      try {
        var raw = localStorage.getItem(STORE);
        if (!raw) return;
        var o = JSON.parse(raw);
        PERSIST.forEach(function (k) {
          if (o[k] !== undefined && o[k] !== null) COVER[k] = o[k];
        });
        if (!COVER_TPL[COVER.tpl] && COVER.tpl !== "table") COVER.tpl = "classic";
        /* a design saved by an older build may be missing keys */
        COVER.design = normalizeDesign(COVER.design);
        var back = { school: "cvSchool", motto: "cvMotto", crest: "cvCrest",
                     teacher: "cvTeacher", term: "cvTerm", year: "cvYear" };
        Object.keys(back).forEach(function (k) {
          var el = $("#" + back[k]);
          if (el && COVER[k]) el.value = COVER[k];
        });
        var sb = $("#cvSubjectBg");
        if (sb) sb.checked = COVER.useSubjectArt;
      } catch (e) { /* corrupt or unavailable storage: fall back to defaults */ }
    }
    loadCover();
    renderTplGrid();
    renderDesigner();
    COVER_TEXT.init(COVER, saveCover, generate);

    /* ---- logo and background uploads ---- */
    function paintImgPrev() {
      var lp = $("#upLogoPrev"), bp = $("#upBgPrev"), activeBg = activeCoverBg();
      if (lp) {
        lp.className = "upprev" + (COVER_IMG.logo ? " has" : "");
        lp.innerHTML = COVER_IMG.logo
          ? '<img src="' + COVER_IMG.logo.url + '" alt="">'
          : "<span>No logo</span>";
      }
      if (bp) {
        bp.className = "upprev bgp" + (activeBg ? " has" : "");
        bp.innerHTML = activeBg
          ? '<img src="' + activeBg.url + '" alt=""><small>' +
              (COVER_IMG.bg ? "Custom" : "Subject artwork") + "</small>"
          : "<span>No background</span>";
      }
      var fr = $("#fadeRow");
      if (fr) fr.style.display = activeBg ? "" : "none";
    }
    window.PACK_PAINT_COVER_PREVIEW = paintImgPrev;
    var subjectBgToggle = $("#cvSubjectBg");
    if (subjectBgToggle) subjectBgToggle.onchange = function () {
      readCover(); paintImgPrev(); generate();
    };
    function upMsg(txt, bad) {
      var m = $("#upMsg");
      if (!m) return;
      m.textContent = txt || "";
      m.style.color = bad ? "var(--rouge)" : "var(--muted)";
    }
    function wireUpload(inputId, removeId, kind) {
      var inp = $("#" + inputId), rm = $("#" + removeId);
      if (inp) inp.onchange = function () {
        var f = inp.files && inp.files[0];
        inp.value = "";                       /* allow re-picking the same file */
        if (!f) return;
        upMsg("Reading image\u2026");
        loadImageFile(f, kind, function (err, img) {
          if (err) { upMsg(err, true); return; }
          COVER_IMG[kind] = img;
          upMsg((kind === "logo" ? "Logo" : "Background") + " added \u2014 " + img.w + "\u00d7" + img.h + " px.");
          paintImgPrev(); saveImgs(); generate();
        });
      };
      if (rm) rm.onclick = function () {
        COVER_IMG[kind] = null;
        upMsg("");
        paintImgPrev(); saveImgs(); generate();
      };
    }
    wireUpload("upLogo", "rmLogo", "logo");
    wireUpload("upBg", "rmBg", "bg");

    var fade = $("#cvFade");
    if (fade) {
      fade.value = COVER.bgFade;
      fade.oninput = function () {
        COVER.bgFade = +fade.value;
        var fv = $("#fadeVal");
        if (fv) fv.textContent = COVER.bgFade + "%";
        saveCover();
        if (pack) generate();
      };
    }

    /* Images are kept in their own storage key: they are far larger than the
       text settings, and a quota failure must not lose the school name. */
    var ISTORE = "lncpg.coverimg.v1";
    function saveImgs() {
      try {
        localStorage.setItem(ISTORE, JSON.stringify({ logo: COVER_IMG.logo, bg: COVER_IMG.bg }));
      } catch (e) {
        upMsg("Image kept for this session only \u2014 too large to save on this device.", true);
      }
    }
    function loadImgs() {
      try {
        var raw = localStorage.getItem(ISTORE);
        if (!raw) return;
        var o = JSON.parse(raw);
        if (o.logo && o.logo.url) COVER_IMG.logo = o.logo;
        if (o.bg && o.bg.url) COVER_IMG.bg = o.bg;
      } catch (e) { /* unreadable storage: start with no images */ }
    }
    loadImgs();
    paintImgPrev();
    if ($("#fadeVal")) $("#fadeVal").textContent = COVER.bgFade + "%";

    var sv = $("#cvSave"), cl = $("#cvClear");
    if (sv) sv.onclick = function () {
      readCover(); saveCover();
      sv.textContent = "Saved \u2713";
      setTimeout(function () { sv.textContent = "Save school details"; }, 1400);
    };
    if (cl) cl.onclick = function () {
      ["cvSchool", "cvMotto", "cvPupil", "cvTeacher", "cvClass", "cvTerm", "cvNote"]
        .forEach(function (id) { var el = $("#" + id); if (el) el.value = ""; });
      COVER_IMG.logo = null; COVER_IMG.bg = null; COVER.text = {}; COVER_TEXT.set({});
      COVER.design = defaultDesign();
      try { localStorage.removeItem(STORE); localStorage.removeItem(ISTORE); } catch (e) {}
      paintImgPrev(); upMsg("");
      renderDesigner();
      readCover(); generate();
    };

    readCover();

    $("#allon").onclick = function () { document.querySelectorAll(".sh").forEach(function (c) { c.checked = true; }); syncBadges(); };
    $("#alloff").onclick = function () { document.querySelectorAll(".sh").forEach(function (c) { c.checked = false; }); syncBadges(); };
    var pkA = $("#pkAll"), pkN = $("#pkNone");
    if (pkA) pkA.onclick = function () { document.querySelectorAll(".pk").forEach(function (c) { c.checked = true; }); syncBadges(); };
    if (pkN) pkN.onclick = function () { document.querySelectorAll(".pk").forEach(function (c) { c.checked = false; }); syncBadges(); };

    /* live counts in the dropdown headers, so a collapsed section still
       tells the user what is selected inside it */
    document.addEventListener("change", syncBadges);
    document.addEventListener("input", syncBadges);
    syncBadges();

    var savedControlIds = ["grade", "perEx", "fsz", "seed", "notes", "tests", "exam", "keys", "lpWeeks", "lpDays", "lpAdjMode", "lpAdjNote", "lpMin"];
    TEACHING.init({
      options: opts, subject: S, cover: function () { return COVER; },
      subjectLabel: function (id) { return SUBJECTS[id] ? SUBJECTS[id].label : id; },
      hasSubject: function (id) { return Object.prototype.hasOwnProperty.call(SUBJECTS, id); },
      validateSettings: function (s) {
        if (!s || !Object.prototype.hasOwnProperty.call(SUBJECTS, s.subject) || !["teacher", "student"].includes(s.mode) ||
            !["pack", "lp"].includes(s.dtype) || !["daily", "weekly"].includes(s.lpType) || !s.controls || !s.cover || !s.images ||
            !Array.isArray(s.periods) || !Array.isArray(s.sheets) ||
            !(isKG(s.controls.grade) ||
              SUBJECTS[s.subject].curriculum().some(function (t) { return t.grade === +s.controls.grade; }))) throw new Error("Invalid document settings");
        var limits = { perEx: [1, 50], fsz: [8, 20], seed: [0, 1000000000], lpWeeks: [1, 6], lpDays: [1, 7], lpMin: [15, 240] };
        Object.keys(limits).forEach(function (k) { var n = Number(s.controls[k]); if (!Number.isFinite(n) || n < limits[k][0] || n > limits[k][1]) throw new Error("Invalid " + k + " setting"); });
        if (["notes", "tests", "exam", "keys"].some(function (k) { return typeof s.controls[k] !== "boolean"; }) ||
            !["standard", "remedial", "accelerated"].includes(s.controls.lpAdjMode)) throw new Error("Invalid document controls");
        if (["on", "ownPage", "useSubjectArt"].some(function (k) { return typeof s.cover[k] !== "boolean"; }) ||
            ["school", "motto", "pupil", "teacher", "classname", "term", "year", "crest", "note"].some(function (k) { return typeof s.cover[k] !== "string" || s.cover[k].length > 12000; }) ||
            !(Object.prototype.hasOwnProperty.call(COVER_TPL, s.cover.tpl) || s.cover.tpl === "table") ||
            !Number.isFinite(s.cover.bgFade) || s.cover.bgFade < 0 || s.cover.bgFade > 100) throw new Error("Invalid cover settings");
        /* the designer is optional on older saves; when present it must be a
           plain object so normalizeDesign can safely fill it in */
        if (s.cover.design !== undefined && (typeof s.cover.design !== "object" || s.cover.design === null || Array.isArray(s.cover.design))) throw new Error("Invalid cover design");
        /* a kindergarten level has no periods at all outside the Kindergarten
           subject's lesson plans, so any other saved period list must be
           empty for it; the ECD units match by their string grade instead */
        var kgLP = isKG(s.controls.grade) && s.subject === "kg" && s.dtype === "lp";
        var periods = (isKG(s.controls.grade) && !kgLP) ? []
          : SUBJECTS[s.subject].curriculum().filter(function (t) { return kgLP ? t.grade === s.controls.grade : t.grade === +s.controls.grade; }).map(function (t) { return t.period; });
        if (!s.periods.every(function (id) { return periods.includes(id); }) || !s.sheets.every(function (id) { return Object.prototype.hasOwnProperty.call(SUBJECTS[s.subject].engine().SHEETS, id); })) throw new Error("Invalid unit or worksheet selection");
        if (s.cover.text && Object.values(s.cover.text).some(function (v) { return typeof v !== "string" || v.length > 240; })) throw new Error("Invalid cover text");
      },
      settings: function () {
        var controls = {}; savedControlIds.forEach(function (id) { var e = $("#" + id); controls[id] = e.type === "checkbox" ? e.checked : e.value; });
        return { subject: cur, mode: MODE, dtype: DOCTYPE, lpType: LP_PLAN_TYPE, controls: controls,
          periods: Array.from(document.querySelectorAll(".pk:checked"), function (c) { return c.value; }),
          sheets: Array.from(document.querySelectorAll(".sh:checked"), function (c) { return c.value; }),
          cover: JSON.parse(JSON.stringify(COVER)), images: JSON.parse(JSON.stringify(COVER_IMG)),
          /* HF is a parallel setting block: saved with the document so a
             teacher who saves a custom header / footer keeps it on restore */
          hf: { sheet: normalizeSheetHF(HF.sheet), plat: normalizePlatHF(HF.plat) } };
      },
      restore: function (s) {
        cur = s.subject; TRACK = S().wa ? "wa" : "curr"; MODE = s.mode; DOCTYPE = s.dtype; LP_PLAN_TYPE = s.lpType;
        curBand = bandOf(s.controls.grade).id;
        document.body.setAttribute("data-subject", cur);
        document.querySelectorAll("#tracks .track").forEach(function (b) { b.classList.toggle("on", b.dataset.t === TRACK); });
        renderSubjectTabs(); buildSheetList(); refreshGrades();
        savedControlIds.forEach(function (id) { var e = $("#" + id); if (e.type === "checkbox") e.checked = !!s.controls[id]; else e.value = s.controls[id]; });
        refreshPeriods();
        document.querySelectorAll(".pk").forEach(function (c) { c.checked = s.periods.includes(c.value); });
        document.querySelectorAll(".sh").forEach(function (c) { c.checked = s.sheets.includes(c.value); });
        Object.keys(COVER).forEach(function (k) { if (s.cover[k] !== undefined) COVER[k] = s.cover[k]; });
        COVER.design = normalizeDesign(s.cover.design);
        COVER.text = s.cover.text || {}; COVER_TEXT.set(COVER.text);
        COVER_IMG.logo = s.images.logo || null; COVER_IMG.bg = s.images.bg || null;
        Object.keys(CVMAP).forEach(function (id) { $("#" + id).value = COVER[CVMAP[id]] || ""; });
        $("#cvOn").checked = COVER.on; $("#cvBreak").checked = COVER.ownPage; $("#cvSubjectBg").checked = COVER.useSubjectArt;
        $("#cvFade").value = COVER.bgFade; $("#fadeVal").textContent = COVER.bgFade + "%";
        $("#cvBox").style.display = COVER.on ? "" : "none";
        NOTES_ON = $("#notes").checked;
        /* push the saved HF into the live designers and re-bind the controls
           so every value reappears in its panel */
        if (s.hf) {
          if (window.PACK_HF_SET) window.PACK_HF_SET(s.hf);
          else {
            HF.sheet = normalizeSheetHF(s.hf.sheet);
            HF.plat = normalizePlatHF(s.hf.plat);
            renderSheetHF(); renderPlatHF(); bindSheetHF(); bindPlatHF(); applyHF();
          }
        }
        paintSession(); paintDocType(); paintLpPlanTabs(); paintLpWeeks(); paintLpPresets(); renderTplGrid(); renderDesigner(); paintImgPrev(); applyFontSize(); syncBadges();
        generate();
      },
      redraw: function () { generate(); }
    });
    generate();
  });

  /* ---- dropdown summary badges ---- */
  function syncBadges() {
    function setb(id, txt) { var e = document.getElementById(id); if (e) e.textContent = txt; }
    function count(sel) { return document.querySelectorAll(sel).length; }

    var pkOn = count(".pk:checked"), pkAll = count(".pk");
    setb("nUnits", pkAll ? pkOn + " of " + pkAll : "");

    var shOn = count(".sh:checked"), shAll = count(".sh");
    setb("nSheets", shAll ? shOn + " of " + shAll : "");

    var parts = [];
    if (document.getElementById("notes") && document.getElementById("notes").checked) parts.push("notes");
    if (document.getElementById("tests") && document.getElementById("tests").checked) parts.push("tests");
    if (document.getElementById("exam") && document.getElementById("exam").checked) parts.push("exams");
    var kr = document.getElementById("keysRow");
    if (kr && kr.style.display !== "none" &&
        document.getElementById("keys") && document.getElementById("keys").checked) parts.push("keys");
    setb("nParts", parts.length ? parts.length + " included" : "none");

    var cv = document.getElementById("cvOn");
    if (cv && cv.checked) {
      var st = window.PACK_COVER_STATE, tp = window.PACK_COVER_TPL;
      var nm = st ? (st.tpl === "table" ? "Simple List"
                     : (tp && tp[st.tpl] ? tp[st.tpl].label : "on")) : "on";
      setb("nCover", nm);
    } else setb("nCover", "off");

    var f = document.getElementById("fsz");
    setb("nFmt", f ? (+f.value || 12) + "pt" : "");

    /* sheet header/footer badge: "on" or "off" so a teacher can see at a
       glance whether the customized running head will appear */
    setb("nSheetHF", (HF.sheet.on) ? "on" : "off");
    setb("nPlatHF", (HF.plat.hdr.on !== false || HF.plat.ftr.on) ? "on" : "off");
  }

  /* ---------------- header & footer designer wiring ----------------
     The two <details> blocks in body.html (ddSheetHF, ddPlatHF) carry every
     control referenced in the patch doc. Every control writes into HF.sheet
     or HF.plat immediately, persists to its own localStorage key, and asks
     applyHF() to repaint the preview. The live preview block inside each
     panel is rebuilt by paintSheetHFPreview / paintPlatHFPreview. */
  function relHF() { try { applyHF(); } catch (e) {} }
  /* every control is bound at most once; the data-hf-bound marker lets a
     restore that calls bindSheetHF() again safely skip the rebinding */
  function marked(el) { return el && el.dataset.hfBound === "1"; }
  function bindBool(id, side, key, after) {
    var el = document.getElementById(id);
    if (!el || marked(el)) return;
    el.dataset.hfBound = "1";
    el.addEventListener("change", function () {
      side[key] = el.checked;
      if (typeof after === "function") after();
      saveHF();
      relHF();
    });
  }
  function bindText(id, side, key, after) {
    var el = document.getElementById(id);
    if (!el || marked(el)) return;
    el.dataset.hfBound = "1";
    el.addEventListener("input", function () {
      side[key] = el.value;
      if (typeof after === "function") after();
      saveHF();
      relHF();
    });
  }
  function bindRange(id, side, key, fvId, fmt, after) {
    var el = document.getElementById(id);
    if (!el || marked(el)) return;
    el.dataset.hfBound = "1";
    var fv = fvId ? document.getElementById(fvId) : null;
    el.addEventListener("input", function () {
      side[key] = parseFloat(el.value);
      if (fv) fv.textContent = fmt ? fmt(el.value) : el.value;
      if (typeof after === "function") after();
      saveHF();
      relHF();
    });
  }

  function paintSheetHFPreview() {
    /* Live preview for the printed sheet header/footer designers. Updates the
       four preview lines (shHfPrevHL/HR/FL/FR/PG) with whatever HF holds
       right now, and the page-number span is hidden when the user opts out. */
    var sh = HF.sheet;
    function txt(side, which, fallback) {
      if (sh.on && side && side.on !== false && side[which]) return side[which];
      return fallback;
    }
    var hl = document.getElementById("shHfPrevHL");
    var hr = document.getElementById("shHfPrevHR");
    var fl = document.getElementById("shHfPrevFL");
    var fr = document.getElementById("shHfPrevFR");
    var pg = document.getElementById("shHfPrevPG");
    if (hl) hl.textContent = txt(sh.hdr, "l", "SUBJECT \u00b7 GRADE 5");
    if (hr) hr.textContent = txt(sh.hdr, "r", "Teacher's Copy");
    if (fl) fl.textContent = txt(sh.ftr, "l", "Liberian Elementary Curriculum \u00b7 Grade 5");
    if (fr) fr.textContent = txt(sh.ftr, "r", "Liberian Course Pack Generator");
    if (pg) pg.style.display = sh.on && sh.ftr && sh.ftr.pg !== false ? "" : "none";
    /* per-section show/hide */
    var box = document.getElementById("shHfBox");
    var hdrRow = document.getElementById("shHfHdrRow");
    var ftrRow = document.getElementById("shHfFtrRow");
    if (box) box.style.display = sh.on ? "" : "none";
    if (hdrRow) hdrRow.style.display = sh.on && sh.hdr && sh.hdr.on !== false ? "" : "none";
    if (ftrRow) ftrRow.style.display = sh.on && sh.ftr && sh.ftr.on !== false ? "" : "none";
  }
  function paintPlatHFPreview() {
    /* Live preview text of the platform chrome (top + bottom). The CSS in
       styles.css handles the actual colour and visibility for the chrome
       itself; this just rebuilds the preview area inside the panel. */
    var pl = HF.plat;
    var previewTop = document.getElementById("platHdPreview");
    var previewBot = document.getElementById("platFtPreview");
    if (previewTop) {
      previewTop.style.display = pl.hdr.on !== false ? "" : "none";
      var bg = pl.hdr.bg;
      if (bg) previewTop.style.background = "linear-gradient(135deg," + bg + "," + bg + ")";
      else previewTop.style.background = "";
      var titleEl = previewTop.querySelector(".plat-pv-title");
      if (titleEl) titleEl.style.fontSize = (pl.hdr.fs || 1.35) + "rem";
    }
    if (previewBot) {
      previewBot.style.display = pl.ftr.on ? "" : "none";
      var fbg = pl.ftr.bg;
      if (fbg) previewBot.style.background = "linear-gradient(135deg," + fbg + "," + fbg + ")";
      else previewBot.style.background = "";
      previewBot.style.fontSize = (pl.ftr.fs || 0.78) + "rem";
    }
  }
  window.PACK_PAINT_HF_PREVIEW = function () {
    paintSheetHFPreview();
    paintPlatHFPreview();
  };

  function bindSheetHF() {
    var sh = HF.sheet;
    function livePreview() { try { paintSheetHFPreview(); } catch (e) {} }
    bindBool("shHfOn", sh, "on", livePreview);
    bindBool("shHfHdrOn", sh.hdr, "on", livePreview);
    bindBool("shHfHdrBold", sh.hdr, "bold", livePreview);
    bindBool("shHfFtrOn", sh.ftr, "on", livePreview);
    bindBool("shHfPgNum", sh.ftr, "pg", livePreview);
    bindText("shHfHdrL", sh.hdr, "l", livePreview);
    bindText("shHfHdrR", sh.hdr, "r", livePreview);
    bindText("shHfFtrL", sh.ftr, "l", livePreview);
    bindText("shHfFtrR", sh.ftr, "r", livePreview);
    function setSwatch(id, side, key) {
      var inp = document.getElementById(id);
      if (!inp) return;
      if (!inp.dataset.hfBound) {
        inp.dataset.fallback = inp.value;
        inp.dataset.hfBound = "1";
        inp.addEventListener("input", function () {
          side[key] = inp.value.toLowerCase();
          saveHF();
          relHF();
          livePreview();
        });
        var auto = document.getElementById(id + "Auto");
        if (auto) auto.onclick = function () {
          side[key] = "";
          inp.value = inp.dataset.fallback || "#666666";
          saveHF();
          relHF();
          livePreview();
        };
      }
      inp.value = side[key] || inp.dataset.fallback || "#666666";
    }
    setSwatch("shHfHdrCol", sh.hdr, "col");
    setSwatch("shHfFtrCol", sh.ftr, "col");
    bindRange("shHfHdrFs", sh.hdr, "fs", "shHfHdrFsVal", function (v) { return v + "pt"; }, livePreview);
    bindRange("shHfFtrFs", sh.ftr, "fs", "shHfFtrFsVal", function (v) { return v + "pt"; }, livePreview);
    livePreview();
    var r = document.getElementById("shHfReset");
    if (r) r.onclick = function () {
      HF.sheet = defaultSheetHF();
      saveHF();
      renderSheetHF();
      livePreview();
      relHF();
      syncBadges();
    };
  }

  function bindPlatHF() {
    var pl = HF.plat;
    bindBool("platHdOn", pl.hdr, "on", paintPlatHFPreview);
    bindBool("platHdCrestOn", pl.hdr, "crest", paintPlatHFPreview);
    bindBool("platHdInstall", pl.hdr, "install", paintPlatHFPreview);
    bindBool("platFtOn", pl.ftr, "on", paintPlatHFPreview);
    bindText("platHdTitle", pl.hdr, "title", paintPlatHFPreview);
    bindText("platHdSub", pl.hdr, "sub", paintPlatHFPreview);
    bindText("platHdNote", pl.hdr, "note", paintPlatHFPreview);
    bindText("platFtL", pl.ftr, "l", paintPlatHFPreview);
    bindText("platFtR", pl.ftr, "r", paintPlatHFPreview);
    bindRange("platHdFs", pl.hdr, "fs", "platHdFsVal", function (v) { return v.toFixed(2) + "rem"; }, paintPlatHFPreview);
    bindRange("platFtFs", pl.ftr, "fs", "platFtFsVal", function (v) { return v.toFixed(2) + "rem"; }, paintPlatHFPreview);
    function setSw(id, side, key, fallback) {
      var inp = document.getElementById(id);
      if (!inp) return;
      if (!inp.dataset.hfBound) {
        inp.dataset.hfBound = "1";
        inp.addEventListener("input", function () {
          side[key] = inp.value.toLowerCase();
          saveHF();
          relHF();
          paintPlatHFPreview();
        });
        var auto = document.getElementById(id + "Auto");
        if (auto) auto.onclick = function () {
          side[key] = "";
          inp.value = fallback;
          saveHF();
          relHF();
          paintPlatHFPreview();
        };
      }
      inp.value = side[key] || fallback;
    }
    setSw("platHdBg", pl.hdr, "bg", "#0b3b8c");
    setSw("platFtBg", pl.ftr, "bg", "#0b3b8c");
    var r = document.getElementById("platHfReset");
    if (r) r.onclick = function () {
      HF.plat = defaultPlatHF();
      saveHF();
      paintPlatHFPreview();
      relHF();
      syncBadges();
    };
  }

  function renderSheetHF() {
    /* the panel lives in body.html; this just re-binds every control after a
       restore. Bindings are idempotent (re-running isn't harmful) but text
       value is set from HF once on load and on reset. */
    if (!document.getElementById("shHfOn")) return;
    var sh = HF.sheet;
    function setv(id, v, isCheck) {
      var el = document.getElementById(id);
      if (!el) return;
      if (isCheck) el.checked = !!v;
      else el.value = v == null ? "" : String(v);
    }
    setv("shHfOn", sh.on, true);
    setv("shHfHdrOn", sh.hdr.on !== false, true);
    setv("shHfHdrBold", sh.hdr.bold !== false, true);
    setv("shHfFtrOn", sh.ftr.on !== false, true);
    setv("shHfPgNum", sh.ftr.pg !== false, true);
    setv("shHfHdrL", sh.hdr.l);
    setv("shHfHdrR", sh.hdr.r);
    setv("shHfHdrFs", sh.hdr.fs || 9);
    setv("shHfHdrFsVal", (sh.hdr.fs || 9) + "pt");
    setv("shHfHdrCol", sh.hdr.col || "#666666");
    setv("shHfFtrL", sh.ftr.l);
    setv("shHfFtrR", sh.ftr.r);
    setv("shHfFtrFs", sh.ftr.fs || 9);
    setv("shHfFtrFsVal", (sh.ftr.fs || 9) + "pt");
    setv("shHfFtrCol", sh.ftr.col || "#666666");
  }
  function renderPlatHF() {
    if (!document.getElementById("platHdOn")) return;
    var pl = HF.plat;
    function setv(id, v, isCheck) {
      var el = document.getElementById(id);
      if (!el) return;
      if (isCheck) el.checked = !!v;
      else el.value = v == null ? "" : String(v);
    }
    setv("platHdOn", pl.hdr.on !== false, true);
    setv("platHdCrestOn", pl.hdr.crest !== false, true);
    setv("platHdInstall", pl.hdr.install !== false, true);
    setv("platFtOn", pl.ftr.on, true);
    setv("platHdTitle", pl.hdr.title);
    setv("platHdSub", pl.hdr.sub);
    setv("platHdNote", pl.hdr.note);
    setv("platHdFs", pl.hdr.fs || 1.35);
    setv("platHdFsVal", (pl.hdr.fs || 1.35).toFixed(2) + "rem");
    setv("platHdBg", pl.hdr.bg || "#0b3b8c");
    setv("platFtL", pl.ftr.l);
    setv("platFtR", pl.ftr.r);
    setv("platFtFs", pl.ftr.fs || 0.78);
    setv("platFtFsVal", (pl.ftr.fs || 0.78).toFixed(2) + "rem");
    setv("platFtBg", pl.ftr.bg || "#0b3b8c");
  }

  /* persistence on its own key: HF is independent of COVER, so a user can
     change one without losing the other */
  var HF_STORE = "lncpg.hf.v1";
  function saveHF() {
    try {
      HF.sheet = normalizeSheetHF(HF.sheet);
      HF.plat = normalizePlatHF(HF.plat);
      localStorage.setItem(HF_STORE, JSON.stringify(HF));
    } catch (e) { /* private mode or storage disabled */ }
  }
  function loadHF() {
    try {
      var raw = localStorage.getItem(HF_STORE);
      if (!raw) return;
      var o = JSON.parse(raw);
      if (o && typeof o === "object") {
        HF.sheet = normalizeSheetHF(o.sheet);
        HF.plat = normalizePlatHF(o.plat);
      }
    } catch (e) { /* corrupt: leave the defaults in place */ }
  }

  /* Initial render of the two header/footer designers happens before
     TEACHING.init so saved-control persistence and the .docx header can be
     written from the same HF state. */
  loadHF();
  renderSheetHF();
  renderPlatHF();
  bindSheetHF();
  bindPlatHF();
  paintSheetHFPreview();
  paintPlatHFPreview();
  /* applyHF() runs as soon as the DOM has read the platform chrome (.top,
     .crest, installApp, the new botFoot). Until that point, every GET on a
     vanilla selector would return null. */
  if (document.body) applyHF();
  document.addEventListener("DOMContentLoaded", function () { applyHF(); });

  /* ---- integrate HF into the saved settings that TEACHING carries ---- */
  document.addEventListener("DOMContentLoaded", function () {
    /* when TEACHING fires its settings callback, also include the HF block;
       when TEACHING restores a saved document, push HF back into the
       designer controls. The are integrated as a separate key. */
    /* expose HF to teaching.js so settings/restore can see it */
    window.PACK_HF_GET = function () {
      return { sheet: normalizeSheetHF(HF.sheet), plat: normalizePlatHF(HF.plat) };
    };
    window.PACK_HF_SET = function (hf) {
      HF.sheet = normalizeSheetHF(hf && hf.sheet);
      HF.plat = normalizePlatHF(hf && hf.plat);
      saveHF();
      renderSheetHF();
      renderPlatHF();
      bindSheetHF();
      bindPlatHF();
      applyHF();
    };
  });

  /* if TEACHING is already loaded on this page, make HF available before its
     DOMContentLoaded runs (this whole IIFE runs after all scripts are inlined
     via build.sh, but the deferred call style keeps both orders happy) */
  window.PACK_HF_GET = window.PACK_HF_GET || function () { return HF; };
})();
