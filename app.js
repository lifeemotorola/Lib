/* Unified platform: subject switching (English / French), shared renderer + .docx export. */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  var pack = null;

  var SUBJECTS = {
    en: {
      label: "English", flag: "📘", accent: "#0b6b3a",
      curriculum: function () { return EN_CURRICULUM; },
      engine: function () { return GEN_EN; },
      defaults: ["words", "match", "cloze", "phonics", "grammar", "pairs", "mcq", "passage", "write", "spelling"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "English_Grade" + g + "_Workbook.docx"; }
    },
    fr: {
      label: "French", flag: "🇫🇷", accent: "#0b3b8c",
      curriculum: function () { return FR_CURRICULUM; },
      engine: function () { return GEN_FR; },
      defaults: ["vocab", "match", "fr2en", "en2fr", "mcq", "missing", "scramble", "copy", "write", "oral"],
      titleOf: function (t) { return t.fr; },
      file: function (g) { return "French_Grade" + g + "_Workbook.docx"; }
    },
    sc: {
      label: "General Science", flag: "🔬", accent: "#7a2e12",
      curriculum: function () { return SC_CURRICULUM; },
      engine: function () { return GEN_SC; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "classify", "diagram", "experiment", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "General_Science_Grade" + g + "_Workbook.docx"; }
    },
    ma: {
      label: "Mathematics", flag: "🔢", accent: "#5b2a86",
      curriculum: function () { return MA_CURRICULUM; },
      engine: function () { return GEN_MA; },
      defaults: ["terms", "worked", "drills", "drills2", "mcq", "word", "show", "challenge", "mental"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Mathematics_Grade" + g + "_Workbook.docx"; }
    },
    ss: {
      label: "Social Studies", flag: "🌍", accent: "#0d6a6a",
      curriculum: function () { return SS_CURRICULUM; },
      engine: function () { return GEN_SS; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "sort", "map", "casestudy", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Social_Studies_Grade" + g + "_Workbook.docx"; }
    },
    rm: {
      label: "Religious & Moral", flag: "🕊️", accent: "#8a5a00",
      curriculum: function () { return RM_CURRICULUM; },
      engine: function () { return GEN_RM; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "sort", "compare", "casestudy", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Religious_and_Moral_Education_Grade" + g + "_Workbook.docx"; }
    },
    pe: {
      label: "Physical Education", flag: "\ud83c\udfc3", accent: "#1f7a3d",
      curriculum: function () { return PE_CURRICULUM; },
      engine: function () { return GEN_PE; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "sort", "compare", "casestudy", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Physical_Education_Grade" + g + "_Workbook.docx"; }
    },
    bi: {
      label: "Biology", flag: "\uD83E\uDDEC", accent: "#0f5132",
      curriculum: function () { return BI_CURRICULUM; },
      engine: function () { return GEN_SC; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "classify", "diagram", "experiment", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Biology_Grade" + g + "_Workbook.docx"; }
    },
    ch: {
      label: "Chemistry", flag: "\u2697\uFE0F", accent: "#7a1f5c",
      curriculum: function () { return CH_CURRICULUM; },
      engine: function () { return GEN_SC; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "worked", "classify", "diagram", "experiment", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Chemistry_Grade" + g + "_Workbook.docx"; }
    },
    ec: {
      label: "Economics", flag: "\uD83D\uDCB9", accent: "#1f5f7a",
      curriculum: function () { return EC_CURRICULUM; },
      engine: function () { return GEN_SS; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "worked", "sort", "map", "casestudy", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Economics_Grade" + g + "_Workbook.docx"; }
    },
    eg: {
      label: "English Grammar", flag: "\u270D\uFE0F", accent: "#7a4a12",
      curriculum: function () { return EG_CURRICULUM; },
      engine: function () { return GEN_EN; },
      packName: "English Grammar",
      defaults: ["words", "match", "cloze", "grammar", "pairs", "mcq", "passage", "write", "spelling", "phonics"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "English_Grammar_Grade" + g + "_Workbook.docx"; }
    },
    gg: {
      label: "Geography", flag: "\uD83D\uDDFA\uFE0F", accent: "#1f6b4f",
      curriculum: function () { return GG_CURRICULUM; },
      engine: function () { return GEN_SS; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "worked", "sort", "map", "casestudy", "project", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Geography_Grade" + g + "_Workbook.docx"; }
    }
  };

  /* ---------------- education bands ----------------
     Grades map to the three bands of the Liberian system. The band selector
     filters the grade dropdown; a subject only shows the bands it covers. */
  var BANDS = [
    { id: "el", label: "Elementary", short: "Elementary", lo: 1, hi: 6 },
    { id: "jh", label: "Junior High", short: "Junior High", lo: 7, hi: 9 },
    { id: "sh", label: "Senior High", short: "Senior High", lo: 10, hi: 12 }
  ];
  function bandOf(g) {
    for (var i = 0; i < BANDS.length; i++) if (g >= BANDS[i].lo && g <= BANDS[i].hi) return BANDS[i];
    return BANDS[0];
  }
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

  /* ---------------- on-screen help ----------------
     Short plain-language description of every exercise type, shown under its
     checkbox so a teacher knows what each sheet actually produces. */
  var SHEET_HELP = {
    terms:"A reference list of the unit's key terms with meanings and examples.",
    words:"A reference list of the unit's vocabulary with syllables, meanings and example sentences.",
    match:"Learners match each term to its meaning by writing the correct letter.",
    cloze:"Sentences with a word removed; learners choose the missing word from a word box.",
    tf:"True or false statements; learners must correct the false ones.",
    short:"Recall questions answered in complete sentences on ruled lines.",
    mcq:"Multiple choice questions built from the unit's terms, with four options each.",
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
    phonics:"Sound and spelling patterns with space to add words of the same pattern.",
    grammar:"Grammar items to correct or complete, each with a reason in the answer key.",
    pairs:"Synonyms, antonyms, homophones and other word pairs.",
    passage:"A reading passage followed by comprehension questions.",
    write:"Guided sentence and paragraph writing.",
    spelling:"Spelling and dictation practice with syllable division.",
    copy:"Handwriting practice: learners copy each word neatly (elementary only).",
    worked:"Worked examples showing every step of the method before practice begins.",
    drills:"A set of practice questions on the unit's main skill.",
    drills2:"A second, mixed practice set with different questions.",
    show:"Long-form questions where learners must show all their working.",
    word:"Word problems requiring a number sentence, working and a labelled answer.",
    challenge:"Harder extension questions for learners who finish early.",
    vocab:"The unit's vocabulary with pronunciation guidance.",
    dialogue:"A short conversation to read, complete and act out.",
    journal:"A personal reflection page.",
    story:"A story followed by reflection questions.",
    debate:"A discussion motion with rules and space to plan arguments."
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

    out.push({ k: "h2", t: "Study Notes \u2014 Unit " + n + ": " + title });
    out.push({ k: "instr", t: "Read this page before you begin the exercises. It explains the ideas the unit is built on, shows you a worked example, and warns you about the mistakes learners most often make." });

    /* 1 - what this unit is about */
    out.push({ k: "h3", t: "1 \u00b7 What this unit is about" });
    out.push({ k: "p", t: stripTags(t.note) });
    if (t.objectives && t.objectives.length) {
      out.push({ k: "p", t: "By the end of this unit you should be able to:" });
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
    out.push({ k: "h3", t: "5 \u00b7 How to work through this unit" });
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

  /* ---------------- session mode: student | teacher ----------------
     Both sessions use the same seven curriculums and the same worksheets.
     Student = clean pupil materials, no answers anywhere.
     Teacher = identical worksheets plus every answer key, marked as the
     teacher's copy in the cover, running head and footer. */
  var MODE = "student";
  function isTeacher() { return MODE === "teacher"; }
  window.PACK_MODE = function () { return MODE; };

  /* ---------------- customizable cover page ----------------
     COVER holds user-entered details. PACK_COVER() is called by every gen-*.js
     engine to build the opening pages of the pack. */
  var COVER = {
    on: true,
    tpl: "classic",          /* designed template id, or "table" for the plain list */
    bgFade: 78,              /* how strongly the paper veils the background photo, % */
    school: "",
    motto: "",
    pupil: "",
    teacher: "",
    classname: "",
    term: "",
    year: String(new Date().getFullYear()),
    crest: "\ud83d\udcda",
    note: "",
    ownPage: true
  };
  window.PACK_COVER_STATE = COVER;

  /* Designed cover templates. Each is a CSS variant of one proven layout, so
     adding a template never changes the geometry of the A4 sheet. */
  var COVER_TPL = {
    classic: { label: "Classic Cream",  cls: "cv-classic", emblem: "\ud83c\udf4e", leaf: "#7fa87f", dash: true  },
    liberia: { label: "Liberian Blue",  cls: "cv-liberia", emblem: "\ud83c\uddf1\ud83c\uddf7", leaf: "#7d93bf", dash: false },
    forest:  { label: "Forest Green",   cls: "cv-forest",  emblem: "\ud83c\udf3f", leaf: "#4f9a76", dash: true  },
    sunrise: { label: "Sunrise Warm",   cls: "cv-sunrise", emblem: "\u2600\ufe0f", leaf: "#dba05a", dash: false },
    plain:   { label: "Plain / Ink Saver", cls: "cv-plain", emblem: "\ud83d\udcd8", leaf: "#9aa3ad", dash: false }
  };
  window.PACK_COVER_TPL = COVER_TPL;

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
  var COVER_IMG = { logo: null, bg: null };      /* {url, w, h, mime} */
  window.PACK_COVER_IMG = COVER_IMG;

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

    /* Class and subject always appear on a cover, whatever the user typed.
       d.title is like "ECONOMICS \u2014 GRADE 11"; take the subject from before
       the dash so the cover names the subject on its own line. */
    var subject = String(d.title || "").split("\u2014")[0].trim() || "Course Pack";
    var klass = COVER.classname || ("Grade " + opts.grade);

    if (!COVER.on) {
      out.push({ k: "h1", t: d.title });
      out.push({ k: "h2", t: isTeacher() ? "Teacher's Copy \u00b7 Worksheets & Answer Keys" : d.sub });
      out.push({ k: "p", t: d.line, i: true });
      out.push({ k: "space" });
      out.push({ k: "table", head: ["Pupil's name", "School", "Class", "Subject"],
        rows: [["", COVER.school || "", klass, subject]] });
      out.push({ k: "space" });
      return out;
    }

    /* ---- plain table cover (the original behaviour, kept as a choice) ---- */
    if (COVER.tpl === "table") {
      if (COVER.school) out.push({ k: "p", t: COVER.crest + "  " + COVER.school, c: true, big: true });
      if (COVER.motto) out.push({ k: "p", t: COVER.motto, c: true, i: true });
      out.push({ k: "rule" });
      out.push({ k: "space" });
      out.push({ k: "h1", t: d.title, c: true });
      out.push({ k: "h2", t: isTeacher() ? "Teacher's Copy \u00b7 Worksheets & Answer Keys" : d.sub, c: true });
      out.push({ k: "p", t: d.line, c: true, i: true });
      out.push({ k: "space" });
      var rows = [];
      if (isTeacher()) rows.push(coverRow("Teacher", COVER.teacher));
      else rows.push(coverRow("Pupil's name", COVER.pupil));
      rows.push(coverRow("Subject", subject));
      rows.push(coverRow("Class", klass));
      rows.push(coverRow("School", COVER.school));
      if (!isTeacher()) rows.push(coverRow("Teacher", COVER.teacher));
      rows.push(coverRow("Term", COVER.term));
      rows.push(coverRow("Year", COVER.year));
      out.push({ k: "table", head: ["Detail", "Entry"], rows: rows });
      out.push({ k: "space" });
      if (COVER.note) { out.push({ k: "p", t: COVER.note, c: true, i: true }); out.push({ k: "space" }); }
      if (COVER.ownPage) out.push({ k: "pagebreak" });
      return out;
    }

    /* ---- designed cover: one block occupying a whole sheet ---- */
    out.push({
      k: "covart",
      tpl: COVER.tpl,
      school: COVER.school,
      motto: COVER.motto,
      title1: subject,
      title2: isTeacher() ? "Teacher's Lesson Book" : "Pupil Workbook",
      line: d.line,
      subject: subject,
      klass: klass,
      teacher: COVER.teacher,
      pupil: COVER.pupil,
      term: COVER.term,
      year: COVER.year,
      crest: COVER.crest,
      note: COVER.note,
      logo: COVER_IMG.logo ? COVER_IMG.logo.url : "",
      bg: COVER_IMG.bg ? COVER_IMG.bg.url : "",
      bgFade: COVER.bgFade,
      teacherCopy: isTeacher()
    });
    out.push({ k: "pagebreak" });
    return out;
  };

  var cur = "en";
  function S() { return SUBJECTS[cur]; }

  function opts() {
    var per = [], sh = [];
    document.querySelectorAll(".pk:checked").forEach(function (c) { per.push(c.value); });
    document.querySelectorAll(".sh:checked").forEach(function (c) { sh.push(c.value); });
    return {
      grade: +$("#grade").value,
      topics: per.length ? per : null,
      sheets: sh.length ? sh : [S().defaults[0]],
      perEx: +$("#perEx").value,
      fsz: FSZ(),
      seed: +$("#seed").value || 1,
      tests: $("#tests").checked,
      exam: $("#exam").checked,
      keys: isTeacher() ? $("#keys").checked : false,
      teacher: isTeacher()
    };
  }

  /* ---------------- controls ---------------- */
  function renderSubjectTabs() {
    var box = $("#subjects"); box.innerHTML = "";
    Object.keys(SUBJECTS).forEach(function (id) {
      var s = SUBJECTS[id];
      var b = document.createElement("button");
      b.className = "subtab" + (id === cur ? " on" : "");
      b.setAttribute("data-s", id);
      b.innerHTML = '<span class="fl">' + s.flag + "</span>" + s.label;
      b.onclick = function () {
        if (cur === id) return;
        cur = id;
        document.body.setAttribute("data-subject", id);
        renderSubjectTabs(); buildSheetList(); refreshGrades(); refreshPeriods(); generate();
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
     offers Grades 1-9 while the other subjects offer Grades 1-6 */
  function refreshGrades() {
    var sel = $("#grade"), prev = +sel.value || 1;
    var gs = [];
    S().curriculum().forEach(function (t) { if (gs.indexOf(t.grade) < 0) gs.push(t.grade); });
    gs.sort(function (a, b) { return a - b; });

    /* which bands does this subject actually cover? */
    var avail = BANDS.filter(function (b) {
      return gs.some(function (g) { return g >= b.lo && g <= b.hi; });
    });
    if (!avail.some(function (b) { return b.id === curBand; })) curBand = avail[0].id;

    /* band selector: shown only when the subject spans more than one band */
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
        bw.style.display = "none";
      }
    }

    var band = BANDS.filter(function (b) { return b.id === curBand; })[0] || BANDS[0];
    var shown = gs.filter(function (g) { return g >= band.lo && g <= band.hi; });
    if (!shown.length) shown = gs;

    sel.innerHTML = "";
    shown.forEach(function (g) {
      var o = document.createElement("option");
      o.value = g; o.textContent = "Grade " + g;
      sel.appendChild(o);
    });
    sel.value = shown.indexOf(prev) >= 0 ? prev : shown[0];

    /* Grades outside the elementary band come from their own curriculum guide,
       so name the subject as that guide actually titles it. */
    var JH_NAME = { en: "English &mdash; Language Arts", sc: "General Science", ma: "Mathematics", ss: "Social Studies", fr: "French", pe: "Physical Education", rm: "Religious &amp; Moral Education", bi: "Biology", ch: "Chemistry", ec: "Economics", eg: "English Grammar", gg: "Geography" };
    var jh = $("#jhNote");
    if (jh) {
      if (curBand === "el") {
        jh.style.display = "none";
      } else {
        jh.style.display = "";
        jh.innerHTML = "Grades " + band.lo + "&ndash;" + band.hi + " follow the " +
          band.label + " <b>" + (JH_NAME[cur] || S().label) + "</b> curriculum.";
      }
    }
  }

  function refreshPeriods() {
    var g = +$("#grade").value, box = $("#periods");
    box.innerHTML = "";
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

  /* ---- designed cover artwork ----
     Builds a full-sheet cover from the chosen template. Everything is inline
     CSS and SVG, so it renders identically offline and in print. */
  function coverArtHtml(b) {
    var t = COVER_TPL[b.tpl] || COVER_TPL.classic;
    function row(icon, label, value) {
      return '<div class="cv-row"><span class="cv-ico">' + icon + '</span>' +
        '<span class="cv-lab">' + esc(label) + ':</span>' +
        '<span class="cv-val">' + esc(value || "") + "</span></div>";
    }
    var rows = "";
    rows += row("\ud83c\udfeb", "School", b.school);
    rows += row("\ud83d\udcd6", "Subject", b.subject);
    rows += row("\ud83c\udf93", "Class", b.klass);
    rows += b.teacherCopy
      ? row("\ud83d\udc69\u200d\ud83c\udfeb", "Teacher", b.teacher)
      : row("\ud83d\udc64", "Name", b.pupil);
    rows += row("\ud83d\udcc5", b.term ? "Term" : "Term / Year",
                [b.term, b.year].filter(Boolean).join("   \u00b7   "));

    var note = b.note
      ? '<div class="cv-note"><b>Note</b>' + esc(b.note) + "</div>"
      : '<div class="cv-note"><b>Inspire</b>Teach \u00b7 Encourage \u00b7 Achieve</div>';

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
    var emblem = b.logo
      ? '<div class="cv-logo"><img src="' + b.logo + '" alt=""></div>'
      : '<div class="cv-emblem">' + (b.crest || t.emblem) + "</div>";

    return '<div class="cvart ' + t.cls + (b.bg ? " hasbg" : "") + '">' +
      bgLayer +
      '<div class="cv-leaf cv-lt">' + leafSvg(t.leaf) + "</div>" +
      '<div class="cv-leaf cv-rb">' + leafSvg(t.leaf) + "</div>" +
      '<div class="cv-dots cv-dtr"><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
      '<div class="cv-head">' +
        (b.school ? '<div class="cv-school">' + esc(b.school) + "</div>" : "") +
        (b.motto ? '<div class="cv-motto">' + esc(b.motto) + "</div>" : "") +
        emblem +
        '<h1 class="cv-t1' + sizeCls + '">' + esc(b.title1) + "</h1>" +
        '<div class="cv-t2">' + esc(b.title2) + "</div>" +
        '<div class="cv-rule"><span></span><b>\ud83d\udcd6</b><span></span></div>' +
        '<p class="cv-sub">' + esc(b.line || "") + "</p>" +
      "</div>" +
      '<div class="cv-panel' + (t.dash ? " dash" : "") + '">' + rows + "</div>" +
      '<div class="cv-strip">' +
        '<i style="height:13mm;background:' + t.leaf + '"></i>' +
        '<i style="height:18mm;background:var(--cv-warm)"></i>' +
        '<i style="height:10mm;background:var(--cv-accent)"></i>' +
        '<i style="height:16mm;background:var(--cv-ink);opacity:.8"></i>' +
        '<i style="height:12mm;background:var(--cv-warm);opacity:.7"></i>' +
      "</div>" +
      '<div class="cv-foot">' + note +
        '<div class="cv-org">Liberian National Curriculum</div></div>' +
      "</div>";
  }

  /* Renders to real A4 sheets. Content is measured and flowed so nothing is clipped:
     a block that will not fit the remaining height of a sheet moves to the next sheet. */
  function blockHtml(b) {
    switch (b.k) {
      case "h1": return "<h1" + (b.c ? ' class="ctr"' : "") + ">" + esc(b.t) + "</h1>";
      case "h2": return "<h2" + (b.c ? ' class="ctr"' : "") + ">" + esc(b.t) + "</h2>";
      case "h3": return "<h3" + (b.c ? ' class="ctr"' : "") + ">" + esc(b.t) + "</h3>";
      case "p": return "<p class=\"" + (b.i ? "it " : "") + (b.c ? "ctr " : "") + (b.big ? "cbig" : "") + "\">" + nl(b.t) + "</p>";
      case "instr": return '<p class="instr">' + nl(b.t) + "</p>";
      case "bul": return "<ul>" + b.items.map(function (x) { return "<li>" + nl(x) + "</li>"; }).join("") + "</ul>";
      case "num": return "<ol" + (b.start ? ' start="' + b.start + '"' : "") + ">" +
        b.items.map(function (x) { return "<li>" + nl(x) + "</li>"; }).join("") + "</ol>";
      case "cols": return '<div class="cols"><ol class="ca">' +
        b.a.map(function (x) { return "<li>" + nl(x) + "</li>"; }).join("") + '</ol><ul class="cb">' +
        b.b.map(function (x) { return "<li>" + nl(x) + "</li>"; }).join("") + "</ul></div>";
      case "table": return "<table><thead><tr>" +
        b.head.map(function (x) { return "<th>" + esc(x) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        b.rows.map(function (r) {
          return "<tr>" + r.map(function (c) { return "<td>" + (c ? esc(c) : "&nbsp;") + "</td>"; }).join("") + "</tr>";
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
    if (p === "exam") return "Semester Examinations";
    if (p === "keys") return "Answer Keys";
    return "Period " + (PERIOD_NO[p] || p);
  }

  function setRunning(o) {
    var bnd = bandOf(o.grade);
    runhead.left = S().label + " \u00b7 " +
      (bnd.id === "el" ? "Grade " : bnd.label + " Grade ") + o.grade;
    runhead.right = isTeacher() ? "Teacher's Copy \u00b7 Answer Keys Included" : "Pupil Workbook & Assessment Pack";
    /* name the grade actually being generated, not the whole band */
    var band = "Liberian " + bnd.label + " Curriculum \u00b7 Grade " + o.grade;
    runhead.foot = isTeacher()
      ? band + "   |   TEACHER'S COPY \u2014 not for pupil distribution"
      : band + "   |   Name: ____________________   School: ____________________";
  }
  function bandTop(per) {
    var left = runhead.left + (per ? " \u00b7 " + periodLabel(per) : "");
    return '<div class="phead"><span>' + esc(left) + '</span><span>' + esc(runhead.right) + "</span></div>";
  }
  function bandBottom(n, total) {
    return '<div class="pfoot"><span>' + esc(runhead.foot) + '</span><span>Page ' + n + " of " + total + "</span></div>";
  }

  function render(blocks) {
    var doc = $("#doc");
    /* Pagination must be viewport-independent: measuring while the preview is
       transform-scaled mixes scaled rects with unscaled layout heights and
       produces different page breaks per device. Neutralise the scale for the
       duration of the measuring pass, then restore it via fitPreview(). */
    var prevPs = document.documentElement.style.getPropertyValue("--ps");
    document.documentElement.style.setProperty("--ps", "1");
    /* off-screen A4 sheet used only to measure how much fits */
    var probe = document.createElement("div");
    probe.className = "page measure";
    probe.innerHTML = bandTop() + '<div class="pbody"></div>' + bandBottom(1, 1);
    doc.innerHTML = "";
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

    var pages = [], cur = [], used = 0;
    var queue = blocks.slice();
    /* the period a sheet belongs to, carried forward until a new unit starts */
    var curPer = "", pagePer = [];

    function flush() { pages.push(cur); pagePer.push(curPer); cur = []; used = 0; }

    function measure(b) {
      pbody.innerHTML = blockHtml(b);
      /* offsetHeight is layout px, unaffected by any ancestor transform */
      return pbody.offsetHeight;
    }

    while (queue.length) {
      var b = queue.shift();
      if (b.per) curPer = b.per;          /* a new unit, test or section begins */
      if (b.k === "pagebreak") { flush(); continue; }
      if (b.k === "covart") {           /* a designed cover owns a whole sheet */
        if (cur.length) flush();
        cur.push(b); flush();
        continue;
      }
      var h = measure(b);
      if (used + h <= budget || !cur.length && h > budget) {
        /* fits, or is a single oversized block that must start its own sheet */
        if (used + h <= budget) { cur.push(b); used += h; continue; }
      }
      if (used + h > budget) {
        var room = budget - used;
        var parts = room > 60 ? splitBlock(b, room / h) : null;
        if (parts) {
          cur.push(parts[0]);
          flush();
          queue.unshift(parts[1]);
          continue;
        }
        if (cur.length) { flush(); queue.unshift(b); continue; }
        /* single block taller than one sheet and unsplittable: let it overflow its own sheet */
        cur.push(b); flush();
      }
    }
    if (cur.length) flush();
    if (!pages.length) { pages = [[]]; pagePer = [""]; }

    var total = pages.length;
    doc.innerHTML = pages.map(function (bl, i) {
      var isCover = bl.length === 1 && bl[0].k === "covart";
      if (isCover) {
        return '<div class="page coverpage"><div class="pbody">' +
          blockHtml(bl[0]) + "</div></div>";
      }
      return '<div class="page">' + bandTop(pagePer[i]) + '<div class="pbody">' +
        bl.map(blockHtml).join("") + "</div>" + bandBottom(i + 1, total) + "</div>";
    }).join("");
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
        case "bul": b.items.forEach(function (x) { body += para("•  " + x, { sz: 28, ind: 260 }); }); break;
        case "num": b.items.forEach(function (x, i) {
          body += para(((b.start || 1) + i) + ".  " + x, { sz: 28, ind: 260, after: 90 }); }); break;
        case "cols": {
          var n = Math.max(b.a.length, b.b.length), rows = [];
          for (var i = 0; i < n; i++) rows.push([b.a[i] || "", b.b[i] || ""]);
          body += tableXml(["Word", "Meaning"], rows, FILL); break;
        }
        case "table": body += tableXml(b.head, b.rows, FILL); break;
        case "lines": for (var j = 0; j < b.n; j++) body += para("_______________________________________________________________", { sz: 28, after: 160, color: "AAAAAA" }); break;
        case "space": body += para("", { sz: 18 }); break;
        case "rule": body += para("", { border: true, sz: 10 }); break;
        case "covart": {
          /* Word cannot reproduce the CSS artwork, so the same information is
             laid out as a formal centred title block with a details table. */
          body += para("", { sz: 40 });
          var bgId = b.bg ? addImage(b.bg, "image/jpeg") : null;
          if (bgId) {
            /* the photo is placed as a banner above the title: Word cannot tint
               a full-bleed background reliably across versions */
            body += picXml(bgId, 1400, 620, 165);
            body += para("", { sz: 20 });
          }
          var logoId = b.logo ? addImage(b.logo, "image/png") : null;
          if (logoId) body += picXml(logoId, 520, 260, 55);
          else if (b.crest) body += para(b.crest, { sz: 72, align: "center", after: 60 });
          if (b.school) body += para(b.school, { b: true, sz: 40, color: C1, align: "center", after: 40 });
          if (b.motto) body += para(b.motto, { i: true, sz: 26, align: "center", after: 120 });
          body += para("", { border: true, sz: 10 });
          body += para(b.title1.toUpperCase(), { b: true, sz: 64, color: C1, align: "center", before: 220, after: 60 });
          body += para(b.title2, { b: true, sz: 38, color: C2, align: "center", after: 60 });
          if (b.line) body += para(b.line, { i: true, sz: 26, align: "center", after: 200 });
          var cr = [];
          cr.push(["School", b.school || ""]);
          cr.push(["Subject", b.subject || ""]);
          cr.push(["Class", b.klass || ""]);
          cr.push(b.teacherCopy ? ["Teacher", b.teacher || ""] : ["Name", b.pupil || ""]);
          cr.push(["Term", b.term || ""]);
          cr.push(["Year", b.year || ""]);
          body += tableXml(["Detail", "Entry"], cr, FILL);
          if (b.note) body += para(b.note, { i: true, sz: 26, align: "center", before: 200 });
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
  function generate() {
    var o = opts();
    /* subjects that share another subject's engine supply their own data
       and cover wording */
    var sj = S();
    if (sj.curriculum) o.curriculum = sj.curriculum();
    o.subjectName = (sj.packName || sj.label).toUpperCase();
    o.subjectLine = sj.packName || sj.label;
    o.bandName = bandOf(o.grade).label;
    pack = sj.engine().buildPack(o);
    setRunning(o);
    render(pack.blocks);
    $("#meta").textContent = S().label + " · Grade " + o.grade + " · " + pack.topics.length +
      " unit(s) · " + o.sheets.length + " exercise type(s) · seed " + o.seed;
    $("#exportbar").style.display = "flex";
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.body.setAttribute("data-subject", cur);
    renderSubjectTabs(); buildSheetList(); refreshGrades(); refreshPeriods();

    /* keep the preview fitted to the viewport on resize and rotation */
    window.addEventListener("resize", fitSoon);
    window.addEventListener("orientationchange", fitSoon);
    fitPreview();

    /* collapsible settings panel on tablet and phone */
    var pt = $("#panelToggle");
    if (pt) {
      pt.onclick = function () {
        var open = document.body.classList.toggle("panel-open");
        pt.setAttribute("aria-expanded", open ? "true" : "false");
        fitSoon();
      };
    }
    /* after generating on a small screen, collapse the panel so the
       pack is what the user actually sees */
    function collapseIfNarrow() {
      if (window.matchMedia("(max-width:980px)").matches) {
        document.body.classList.remove("panel-open");
        if (pt) pt.setAttribute("aria-expanded", "false");
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
    $("#print").onclick = function () { window.print(); };
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
        ec: { h1: "1F5F7A", h2: "2E86A8", fill: "DCEDF5" },
        eg: { h1: "7A4A12", h2: "A8681E", fill: "F7E8D2" },
        gg: { h1: "1F6B4F", h2: "2E8B6A", fill: "DCF0E7" }
      };
      var theme = THEMES[cur] || THEMES.en;
      var fn = S().file(opts().grade).replace(/\.docx$/, (isTeacher() ? "_Teacher_Copy" : "_Student") + ".docx");
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
      if (n) n.textContent = isTeacher()
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
    paintSession();

    /* cover page fields -> COVER, applied at generate time */
    var CVMAP = { cvSchool: "school", cvMotto: "motto", cvPupil: "pupil", cvTeacher: "teacher",
      cvClass: "classname", cvTerm: "term", cvYear: "year", cvCrest: "crest", cvNote: "note" };
    function readCover() {
      COVER.on = $("#cvOn").checked;
      COVER.ownPage = $("#cvBreak").checked;
      Object.keys(CVMAP).forEach(function (id) {
        var el = $("#" + id);
        if (el) COVER[CVMAP[id]] = el.value.trim();
      });
      $("#cvBox").style.display = COVER.on ? "" : "none";
      if (typeof saveCover === "function") saveCover();
    }
    Object.keys(CVMAP).concat(["cvOn", "cvBreak"]).forEach(function (id) {
      var el = $("#" + id);
      if (el) el.addEventListener("input", readCover);
      if (el) el.addEventListener("change", readCover);
    });
    if ($("#cvYear") && !$("#cvYear").value) $("#cvYear").value = COVER.year;

    /* ---- template picker ---- */
    var TPL_SW = {
      classic: ["#1b2a52", "#fdf6e9", "#5a9367"],
      liberia: ["#0d2c6b", "#fbfaf6", "#c8102e"],
      forest:  ["#12403a", "#f2f9f4", "#2f8f6d"],
      sunrise: ["#b35c1e", "#fff7ec", "#d98324"],
      plain:   ["#1f2937", "#ffffff", "#4b5563"],
      table:   ["#5d6b85", "#ffffff", "#9aa3ad"]
    };
    function renderTplGrid() {
      var g = $("#tplGrid");
      if (!g) return;
      g.innerHTML = "";
      var ids = Object.keys(COVER_TPL).concat(["table"]);
      ids.forEach(function (id) {
        var label = id === "table" ? "Simple List" : COVER_TPL[id].label;
        var c = TPL_SW[id] || TPL_SW.plain;
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
          syncBadges();
          generate();
        };
        g.appendChild(btn);
      });
      var h = $("#tplHint");
      if (h) h.textContent = COVER.tpl === "table"
        ? "A plain details table \u2014 fastest to print and uses least ink."
        : "A full designed cover sheet. Subject and Class are filled in automatically.";
    }

    /* ---- persistence: the school's details are remembered on this device ---- */
    var STORE = "lncpg.cover.v1";
    var PERSIST = ["school", "motto", "crest", "teacher", "term", "year", "tpl", "bgFade"];
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
        var back = { school: "cvSchool", motto: "cvMotto", crest: "cvCrest",
                     teacher: "cvTeacher", term: "cvTerm", year: "cvYear" };
        Object.keys(back).forEach(function (k) {
          var el = $("#" + back[k]);
          if (el && COVER[k]) el.value = COVER[k];
        });
      } catch (e) { /* corrupt or unavailable storage: fall back to defaults */ }
    }
    loadCover();
    renderTplGrid();

    /* ---- logo and background uploads ---- */
    function paintImgPrev() {
      var lp = $("#upLogoPrev"), bp = $("#upBgPrev");
      if (lp) {
        lp.className = "upprev" + (COVER_IMG.logo ? " has" : "");
        lp.innerHTML = COVER_IMG.logo
          ? '<img src="' + COVER_IMG.logo.url + '" alt="">'
          : "<span>No logo</span>";
      }
      if (bp) {
        bp.className = "upprev bgp" + (COVER_IMG.bg ? " has" : "");
        bp.innerHTML = COVER_IMG.bg
          ? '<img src="' + COVER_IMG.bg.url + '" alt="">'
          : "<span>No background</span>";
      }
      var fr = $("#fadeRow");
      if (fr) fr.style.display = COVER_IMG.bg ? "" : "none";
    }
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
      COVER_IMG.logo = null; COVER_IMG.bg = null;
      try { localStorage.removeItem(STORE); localStorage.removeItem(ISTORE); } catch (e) {}
      paintImgPrev(); upMsg("");
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
  }
})();
