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
    }
  };

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

  function coverRow(label, value) { return [label, value || ""]; }

  window.PACK_COVER = function (opts, d) {
    var out = [];
    if (!COVER.on) {
      out.push({ k: "h1", t: d.title });
      out.push({ k: "h2", t: isTeacher() ? "Teacher's Copy \u00b7 Worksheets & Answer Keys" : d.sub });
      out.push({ k: "p", t: d.line, i: true });
      out.push({ k: "space" });
      out.push({ k: "table", head: ["Pupil's name", "School", "Class", "Year"],
        rows: [["", "", "Grade " + opts.grade, ""]] });
      out.push({ k: "space" });
      return out;
    }
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
    rows.push(coverRow("Class", COVER.classname || ("Grade " + opts.grade)));
    rows.push(coverRow("School", COVER.school));
    if (!isTeacher()) rows.push(coverRow("Teacher", COVER.teacher));
    rows.push(coverRow("Term", COVER.term));
    rows.push(coverRow("Year", COVER.year));
    out.push({ k: "table", head: ["Detail", "Entry"], rows: rows });
    out.push({ k: "space" });
    if (COVER.note) { out.push({ k: "p", t: COVER.note, c: true, i: true }); out.push({ k: "space" }); }
    if (COVER.ownPage) out.push({ k: "pagebreak" });
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
  }

  /* the grade list is taken from the subject's own curriculum, so English
     offers Grades 1-9 while the other subjects offer Grades 1-6 */
  function refreshGrades() {
    var sel = $("#grade"), prev = +sel.value || 1;
    var gs = [];
    S().curriculum().forEach(function (t) { if (gs.indexOf(t.grade) < 0) gs.push(t.grade); });
    gs.sort(function (a, b) { return a - b; });
    sel.innerHTML = "";
    gs.forEach(function (g) {
      var o = document.createElement("option");
      o.value = g; o.textContent = "Grade " + g;
      sel.appendChild(o);
    });
    sel.value = gs.indexOf(prev) >= 0 ? prev : gs[0];
    /* Grades 7-9 come from a separate Junior High curriculum guide, so name
       the subject the guide actually uses rather than hard-coding English. */
    var JH_NAME = { en: "English &mdash; Language Arts", sc: "General Science", ma: "Mathematics", ss: "Social Studies", fr: "French", pe: "Physical Education", rm: "Religious &amp; Moral Education" };
    var jh = $("#jhNote");
    if (jh) {
      var hasJH = gs.some(function (g) { return g > 6; });
      jh.style.display = hasJH ? "" : "none";
      if (hasJH) {
        jh.innerHTML = "Grades 7&ndash;9 follow the Junior High <b>" +
          (JH_NAME[cur] || S().label) + "</b> curriculum.";
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
  }

  /* ---------------- screen renderer ---------------- */
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function nl(s) { return esc(s).replace(/\n/g, "<br>"); }

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
    runhead.left = S().label + " \u00b7 " + (o.grade >= 7 ? "Junior High Grade " : "Grade ") + o.grade;
    runhead.right = isTeacher() ? "Teacher's Copy \u00b7 Answer Keys Included" : "Pupil Workbook & Assessment Pack";
    /* name the grade actually being generated, not the whole band */
    var band = "Liberian " + (o.grade >= 7 ? "Junior High" : "Elementary") +
      " Curriculum \u00b7 Grade " + o.grade;
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
        types +
        '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/></Types>',
      "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>',
      "word/_rels/document.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
        rels +
        '<Relationship Id="rIdF" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/></Relationships>',
      "word/styles.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
        '<w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/><w:sz w:val="' + dsz(28) + '"/><w:szCs w:val="' + dsz(28) + '"/></w:rPr></w:rPrDefault></w:docDefaults>' +
        '<w:style w:type="table" w:styleId="TableGrid"><w:name w:val="Table Grid"/></w:style></w:styles>',
      "word/footer1.xml": footerXml,
      "word/document.xml": doc
    };
    Object.keys(parts).forEach(function (k) { files[k] = parts[k]; });
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
      var data = enc.encode(files[name]), nm = enc.encode(name), crc = crc32(data);
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
    pack = S().engine().buildPack(o);
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
        pe: { h1: "1F7A3D", h2: "2E9E55", fill: "DEF2E4" }
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
    }
    Object.keys(CVMAP).concat(["cvOn", "cvBreak"]).forEach(function (id) {
      var el = $("#" + id);
      if (el) el.addEventListener("input", readCover);
      if (el) el.addEventListener("change", readCover);
    });
    if ($("#cvYear") && !$("#cvYear").value) $("#cvYear").value = COVER.year;
    readCover();

    $("#allon").onclick = function () { document.querySelectorAll(".sh,.pk").forEach(function (c) { c.checked = true; }); };
    $("#alloff").onclick = function () { document.querySelectorAll(".sh").forEach(function (c) { c.checked = false; }); };
    generate();
  });
})();
