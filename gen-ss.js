/* Social Studies exercise generation engine.
   Emits the SAME block model as the English, French, Science and Maths engines,
   so the shared renderer and .docx exporter are reused. Registered on window.GEN_SS.
   Social Studies (grades 1-9) uses this engine directly; Economics (ec) and
   Geography (gg, grades 10-12) supply their own curriculum and reuse it, passing
   their own display name so worksheets/exams carry the correct subject title. */
(function (root) {
  "use strict";

  /* roman period ("I".."VI") -> its number, for the user-facing "Period n" labels */
  function periodNo(p) {
    var i = ["I", "II", "III", "IV", "V", "VI"].indexOf(String(p));
    return i < 0 ? p : i + 1;
  }


  /* The display name of the subject currently being rendered. Social Studies is
     the default; subjects that reuse this engine (Economics, Geography) set it
     via opts.subjectLine in buildPack so no worksheet ever reads "Social Studies"
     inside another subject's pack. */
  var SUBJ = "Social Studies";

  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function shuffle(arr, r) {
    var a = (arr || []).slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pick(arr, n, r) { return shuffle(arr || [], r).slice(0, Math.min(n, (arr || []).length)); }
  function dots(n) { var s = ""; for (var i = 0; i < (n || 22); i++) s += "."; return s; }
  var LET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  /* ---------------- worksheet generators ---------------- */

  /* A · Key terms glossary */
  function wsTerms(t) {
    return {
      blocks: [
        { k: "h3", t: "A · Key Terms — " + SUBJ + " Vocabulary" },
        { k: "instr", t: "Read each term after your teacher. Copy the term, its meaning and the example into your " + SUBJ + " notebook." },
        { k: "table", head: ["Key term", "What it means", "Example"],
          rows: t.terms.map(function (v) { return [v.t, v.d, v.x]; }) }
      ], key: []
    };
  }

  /* B · Match term to meaning */
  function wsMatch(t, n, r) {
    var sel = pick(t.terms, n, r);
    if (!sel.length) return null;
    var right = shuffle(sel, r);
    return {
      blocks: [
        { k: "h3", t: "B · Match the Term to its Meaning" },
        { k: "instr", t: "Write the letter of the correct meaning beside each term." },
        { k: "cols",
          a: sel.map(function (v, i) { return (i + 1) + ". " + v.t + "  ______"; }),
          b: right.map(function (v, i) { return LET[i] + ". " + v.d; }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.t + " → " + LET[right.indexOf(v)] + " (" + v.d + ")"; })
    };
  }

  /* C · Fill in the blanks from a word box */
  function wsCloze(t, n, r) {
    var pool = (t.terms || []).filter(function (v) {
      return v.x && v.x.toLowerCase().indexOf(v.t.toLowerCase()) >= 0;
    });
    var sel = pick(pool, n, r);
    if (!sel.length) return null;
    var bank = shuffle(sel.map(function (v) { return v.t; }), r);
    var items = sel.map(function (v) {
      var re = new RegExp(v.t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      return v.x.replace(re, "__________");
    });
    return {
      blocks: [
        { k: "h3", t: "C · Fill in the Blanks" },
        { k: "instr", t: "Choose the correct word from the box and write it in the blank space." },
        { k: "p", t: "WORD BOX:   " + bank.join("  ·  ") },
        { k: "num", items: items }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.t + "  — " + v.d; })
    };
  }

  /* D · True or false */
  function wsTF(t, n, r) {
    var sel = pick(t.tf, n, r);
    if (!sel.length) return null;
    return {
      blocks: [
        { k: "h3", t: "D · True or False" },
        { k: "instr", t: "Write TRUE or FALSE beside each statement. If the statement is false, write the correct answer under it." },
        { k: "num", items: sel.map(function (v) { return v.s + "   __________"; }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.a.toUpperCase() + " — " + v.why; })
    };
  }

  /* E · Short answer (recall) */
  function wsShort(t, n, r) {
    var sel = pick(t.facts, n, r);
    if (!sel.length) return null;
    return {
      blocks: [
        { k: "h3", t: "E · Short Answer Questions" },
        { k: "instr", t: "Answer each question in a complete sentence." },
        { k: "num", items: sel.map(function (v) { return v.q + "\n" + dots(52); }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.a; })
    };
  }

  /* F · Multiple choice built from the key terms */
  function wsMcq(t, n, r) {
    var sel = pick(t.terms, n, r);
    if (sel.length < 2) return null;
    var items = [], key = [];
    sel.forEach(function (v) {
      var d = pick((t.terms || []).filter(function (x) { return x.t !== v.t; }), 3, r);
      var opts = shuffle(d.map(function (x) { return x.d; }).concat([v.d]), r);
      items.push("“" + v.t + "” means:\n     " + opts.map(function (o, j) { return "(" + "abcd"[j] + ") " + o; }).join("\n     "));
      key.push("(" + "abcd"[opts.indexOf(v.d)] + ") " + v.d);
    });
    return {
      blocks: [
        { k: "h3", t: "F · Multiple Choice" },
        { k: "instr", t: "Circle the letter of the correct answer." },
        { k: "num", items: items }
      ],
      key: key.map(function (kk, i) { return (i + 1) + ". " + kk; })
    };
  }

  /* G · Classification / sorting */
  function wsSort(t, n, r) {
    var c = t.sort;
    if (!c || !c.groups || !c.groups.length) return null;
    var all = [];
    c.groups.forEach(function (g) { g.items.forEach(function (it) { all.push({ i: it, g: g.name }); }); });
    var mixed = shuffle(all, r);
    var rows = [];
    var maxRows = Math.max.apply(null, c.groups.map(function (g) { return g.items.length; })) + 1;
    for (var i = 0; i < maxRows; i++) rows.push(c.groups.map(function () { return ""; }));
    return {
      blocks: [
        { k: "h3", t: "G · Classification — " + c.title },
        { k: "instr", t: "Write each item from the box into the correct column of the table." },
        { k: "p", t: "BOX:   " + mixed.map(function (x) { return x.i; }).join("  ·  ") },
        { k: "table", head: c.groups.map(function (g) { return g.name; }), rows: rows }
      ],
      key: c.groups.map(function (g) { return g.name + ": " + g.items.join(", "); })
    };
  }

  /* H · Map work / locate and explain */
  function wsMap(t) {
    var d = t.mapwork;
    if (!d || !d.items || !d.items.length) return null;
    return {
      blocks: [
        { k: "h3", t: "H · Map Work and Chart — " + d.title },
        { k: "instr", t: d.caption },
        { k: "table", head: ["Place / part / date", "What it is, where it is, or why it matters"],
          rows: d.items.map(function (p) { return [p.p, ""]; }) },
        { k: "p", t: "Drawing space — draw and label the map or chart below:" },
        { k: "lines", n: 8 }
      ],
      key: d.items.map(function (p, i) { return (i + 1) + ". " + p.p + " — " + p.f; })
    };
  }

  /* I · Source / case study comprehension */
  function wsCase(t) {
    var c = t.casestudy;
    if (!c || !c.questions || !c.questions.length) return null;
    return {
      blocks: [
        { k: "h3", t: "I · Case Study — " + c.title },
        { k: "instr", t: "Read the passage carefully, then answer the questions in complete sentences." },
        { k: "p", t: c.text },
        { k: "space" },
        { k: "num", items: c.questions.map(function (q) { return q.q + "\n" + dots(52); }) }
      ],
      key: c.questions.map(function (q, i) { return (i + 1) + ". " + q.a; })
    };
  }

  /* Worked calculations — only rendered for units that supply t.worked.
     Each entry is {q, steps:[], a}. Subjects without calculations simply omit
     the field and the sheet is skipped. */
  function wsWorked(t, n, r) {
    var w = t.worked;
    if (!w || !w.length) return null;
    var sel = pick(w, Math.min(n, w.length), r);
    var blocks = [
      { k: "h3", t: "L \u00b7 Calculations and Data \u2014 show all your working" },
      { k: "instr", t: "Set out each answer step by step. Show the formula you use, substitute the values, and give the final answer with its correct unit." }
    ];
    var key = [];
    sel.forEach(function (x, i) {
      blocks.push({ k: "p", t: (i + 1) + ". " + x.q });
      blocks.push({ k: "lines", n: 4 });
      key.push((i + 1) + ". " + x.a + "   [" + x.steps.join(" \u2192 ") + "]");
    });
    return { blocks: blocks, key: key };
  }

  /* J · Apply it — civic reasoning */
  function wsApply(t, n, r) {
    var sel = pick(t.apply, n, r);
    if (!sel.length) return null;
    return {
      blocks: [
        { k: "h3", t: "J · Think and Apply" },
        { k: "instr", t: "Think carefully and answer in full sentences. Give a reason for each answer." },
        { k: "num", items: sel.map(function (v) { return v.q + "\n" + dots(52) + "\n" + dots(52); }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.a; })
    };
  }

  /* K · Enquiry / civic action project */
  function wsProject(t) {
    var p = t.project;
    if (!p) return null;
    return {
      blocks: [
        { k: "h3", t: "K · Enquiry Project — " + p.title },
        { k: "instr", t: p.brief + " Work carefully and be polite to everybody you speak with." },
        { k: "p", t: "STEPS TO FOLLOW:" },
        { k: "num", items: p.steps },
        { k: "space" },
        { k: "p", t: "MY FINDINGS:" },
        { k: "lines", n: 6 },
        { k: "p", t: "WHAT I CONCLUDE:" },
        { k: "lines", n: 3 }
      ],
      key: ["Marking guide — award marks for: " + p.criteria.join("; ") + "."]
    };
  }

  /* L · Civic journal */
  function wsJournal(t) {
    return {
      blocks: [
        { k: "h3", t: "L · My " + SUBJ + " Journal" },
        { k: "instr", t: "Complete this page in your own words. Neat drawings earn marks." },
        { k: "p", t: "1. Today's topic: " + t.title },
        { k: "p", t: "2. Three new words I learned and what they mean:" },
        { k: "lines", n: 3 },
        { k: "p", t: "3. One thing I found out about my own community or country:" },
        { k: "lines", n: 2 },
        { k: "p", t: "4. Draw and label a map, chart or picture from this unit:" },
        { k: "lines", n: 8 },
        { k: "p", t: "5. One way I can be a better citizen because of this unit:" },
        { k: "lines", n: 2 }
      ],
      key: ["Open response. Award marks for correct use of key terms, an accurate fact about Liberia, and a neat labelled drawing."]
    };
  }

  /* M · Debate and discussion */
  function wsDebate(t, n, r) {
    var sel = pick(t.apply, 2, r);
    if (!sel.length) return null;
    return {
      blocks: [
        { k: "h3", t: "M · Class Debate and Discussion" },
        { k: "instr", t: "Work in mixed groups. Choose ONE question. Half the group argues FOR and half argues AGAINST. Write your points before you speak." },
        { k: "num", items: sel.map(function (v) { return v.q; }) },
        { k: "space" },
        { k: "p", t: "OUR POINTS — FOR:" },
        { k: "lines", n: 4 },
        { k: "p", t: "OUR POINTS — AGAINST:" },
        { k: "lines", n: 4 },
        { k: "p", t: "WHAT THE CLASS DECIDED:" },
        { k: "lines", n: 2 }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". Suggested line of argument: " + v.a; })
    };
  }

  /* N · Vocabulary and spelling test */
  function wsSpelling(t, n, r) {
    var sel = pick(t.terms, n, r);
    if (!sel.length) return null;
    return {
      blocks: [
        { k: "h3", t: "N · Vocabulary & Spelling Test — Key Terms" },
        { k: "instr", t: "Your teacher will read each key term. Write it correctly, then write its meaning." },
        { k: "table", head: ["No.", "Key term", "Meaning"],
          rows: sel.map(function (v, i) { return [String(i + 1), "", ""]; }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.t + " — " + v.d; })
    };
  }

  var SHEETS = {
    terms:    { label: "Key terms glossary",          fn: function (t) { return wsTerms(t); } },
    match:    { label: "Match term to meaning",       fn: wsMatch },
    cloze:    { label: "Fill in the blanks",          fn: wsCloze },
    tf:       { label: "True or false",               fn: wsTF },
    short:    { label: "Short answer questions",      fn: wsShort },
    mcq:      { label: "Multiple choice",             fn: wsMcq },
    sort:     { label: "Classification & sorting",    fn: wsSort },
    map:      { label: "Map work & charts",           fn: function (t) { return wsMap(t); } },
    casestudy:{ label: "Case study comprehension",    fn: function (t) { return wsCase(t); } },
    apply:    { label: "Think and apply",             fn: wsApply },
    project:  { label: "Enquiry project",             fn: function (t) { return wsProject(t); } },
    debate:   { label: "Class debate",                fn: wsDebate },
    journal:  { label: "Social Studies journal",      fn: function (t) { return wsJournal(t); } },
    spelling: { label: "Vocabulary & spelling test",  fn: wsSpelling },
    worked:   { label: "Calculations & data",         fn: function (t, n, r) { return wsWorked(t, n, r); } }
  };

  /* ---------------- period test ---------------- */
  function periodTest(t, r) {
    var blocks = [], key = [], q = 0, each = 2, n = 5;
    blocks.push({ k: "h2", t: "PERIOD TEST — Grade " + t.grade + ", Period " + t.period, per: t.period });
    blocks.push({ k: "p", t: "Topic: " + t.title + "   ·   Semester " + t.sem });
    blocks.push({ k: "table", head: ["Name", "Class", "Date", "Score"],
      rows: [["", "Grade " + t.grade, "", "     / " + (n * 4 * each)]] });
    blocks.push({ k: "instr", t: "Answer ALL questions. Write clearly. Each question carries " + each + " marks." });

    function sec(title, instr, items, keys) {
      blocks.push({ k: "h3", t: title + "   (" + items.length * each + " marks)" });
      blocks.push({ k: "instr", t: instr });
      blocks.push({ k: "num", items: items, start: q + 1 });
      keys.forEach(function (kk, i) { key.push((q + i + 1) + ". " + kk); });
      q += items.length;
    }

    var a = pick(t.terms, n, r);
    sec("SECTION A — Key terms", "Write the meaning of each term.",
      a.map(function (v) { return v.t + "  " + dots(28); }), a.map(function (v) { return v.d; }));

    var b = pick(t.terms, n, r), bi = [], bk = [];
    b.forEach(function (v) {
      var d = pick(t.terms.filter(function (x) { return x.t !== v.t; }), 3, r);
      var op = shuffle(d.map(function (x) { return x.d; }).concat([v.d]), r);
      bi.push("“" + v.t + "” means:\n     " + op.map(function (o, j) { return "(" + "abcd"[j] + ") " + o; }).join("\n     "));
      bk.push("(" + "abcd"[op.indexOf(v.d)] + ") " + v.d);
    });
    sec("SECTION B — Multiple choice", "Circle the correct letter.", bi, bk);

    var c = pick(t.tf, n, r);
    if (c.length) {
      sec("SECTION C — True or false", "Write TRUE or FALSE on the line.",
        c.map(function (v) { return v.s + "  __________"; }),
        c.map(function (v) { return v.a.toUpperCase() + " — " + v.why; }));
    }

    var d2 = pick(t.facts, n, r);
    if (d2.length) {
      sec("SECTION D — Short answer", "Answer in complete sentences.",
        d2.map(function (v) { return v.q + "\n" + dots(46); }), d2.map(function (v) { return v.a; }));
    }

    return { blocks: blocks, key: key, marks: q * each };
  }

  /* ---------------- semester exam ---------------- */
  function semesterExam(topics, sem, r) {
    var tpool = [], fpool = [], tfpool = [], apool = [], mpool = [], cpool = [];
    topics.forEach(function (t) {
      (t.terms || []).forEach(function (v) { tpool.push(v); });
      (t.facts || []).forEach(function (v) { fpool.push(v); });
      (t.tf || []).forEach(function (v) { tfpool.push(v); });
      (t.apply || []).forEach(function (v) { apool.push(v); });
      if (t.mapwork) mpool.push(t.mapwork);
      if (t.casestudy) cpool.push(t.casestudy);
    });
    var g = topics[0].grade, blocks = [], key = [], q = 0, each = 2, n = 10;

    blocks.push({ k: "h2", t: "SEMESTER " + sem.toUpperCase() + " EXAMINATION — GRADE " + g + " " + SUBJ.toUpperCase(), per: "exam" });
    blocks.push({ k: "table", head: ["Name", "Class", "Date", "Score"],
      rows: [["", "Grade " + g, "", "     / " + (n * 4 * each + 10)]] });
    blocks.push({ k: "p", t: "Topics covered: " + topics.map(function (t) { return t.title; }).join(" · ") });
    blocks.push({ k: "instr", t: "Time: 1 hour 30 minutes. Answer ALL questions. Each question in Sections A to D carries " + each + " marks." });

    function sec(title, instr, items, keys) {
      blocks.push({ k: "h3", t: title + "   (" + items.length * each + " marks)" });
      blocks.push({ k: "instr", t: instr });
      blocks.push({ k: "num", items: items, start: q + 1 });
      keys.forEach(function (kk, i) { key.push((q + i + 1) + ". " + kk); });
      q += items.length;
    }

    var a = pick(tpool, n, r);
    sec("SECTION A — " + SUBJ + " vocabulary", "Write the meaning of each term.",
      a.map(function (v) { return v.t + "  " + dots(26); }), a.map(function (v) { return v.d; }));

    var b = pick(tpool, n, r), bi = [], bk = [];
    b.forEach(function (v) {
      var d = pick(tpool.filter(function (x) { return x.t !== v.t; }), 3, r);
      var op = shuffle(d.map(function (x) { return x.d; }).concat([v.d]), r);
      bi.push("“" + v.t + "” means:\n     " + op.map(function (o, j) { return "(" + "abcd"[j] + ") " + o; }).join("\n     "));
      bk.push("(" + "abcd"[op.indexOf(v.d)] + ") " + v.d);
    });
    sec("SECTION B — Multiple choice", "Circle the correct letter.", bi, bk);

    var c = pick(tfpool, n, r);
    if (c.length) {
      sec("SECTION C — True or false", "Write TRUE or FALSE on the line.",
        c.map(function (v) { return v.s + "  __________"; }),
        c.map(function (v) { return v.a.toUpperCase() + " — " + v.why; }));
    }

    var d2 = pick(fpool, n, r);
    if (d2.length) {
      sec("SECTION D — Short answer", "Answer each question in complete sentences.",
        d2.map(function (v) { return v.q + "\n" + dots(46); }), d2.map(function (v) { return v.a; }));
    }

    /* Section E — map work and civic reasoning */
    var mp = pick(mpool, 1, r)[0];
    blocks.push({ k: "h3", t: "SECTION E — Map work and civic reasoning   (10 marks)" });
    if (mp) {
      blocks.push({ k: "instr", t: "1. Draw and label: " + mp.title + ". Beside each label, state what it is or why it matters. (6 marks)" });
      blocks.push({ k: "lines", n: 8 });
      key.push("Section E (1) — " + mp.title + ": " + mp.items.map(function (p) { return p.p + " = " + p.f; }).join("; "));
    }
    var ap = pick(apool, 2, r);
    if (ap.length) {
      blocks.push({ k: "instr", t: "2. Answer BOTH questions below, giving a reason each time. (4 marks)" });
      blocks.push({ k: "num", items: ap.map(function (v) { return v.q + "\n" + dots(50); }) });
      ap.forEach(function (v, i) { key.push("Section E (2." + (i + 1) + ") " + v.a); });
    }

    return { blocks: blocks, key: key, marks: q * each + 10 };
  }

  /* ---------------- pack builder ---------------- */
  function buildPack(opts) {
    var r = rng(opts.seed || 1);
    /* Subjects that reuse this engine (Economics, Geography) pass their own
       display name; default to Social Studies. */
    SUBJ = opts.subjectLine || "Social Studies";
    /* the caller may supply its own curriculum (Economics reuses this engine);
       fall back to Social Studies when none is given */
    var SRC = opts.curriculum || SS_CURRICULUM;
    var topics = SRC.filter(function (t) {
      return t.grade === opts.grade && (!opts.topics || opts.topics.indexOf(t.period) >= 0);
    });
    var doc = [], keys = [], toc = [];

    doc.push.apply(doc, PACK_COVER(opts, {
      title: (opts.subjectName || "SOCIAL STUDIES") + " — GRADE " + opts.grade,
      sub: "Pupil Workbook & Assessment Pack",
      line: (opts.bandName || "Elementary") + " " + (opts.subjectLine || "Social Studies") +
            " · Liberian National Curriculum"
    }));
    doc.push({ k: "h3", t: "Contents" });
    topics.forEach(function (t, i) { toc.push("Period " + periodNo(t.period) + ": " + t.title); });
    if (opts.tests) toc.push("Period tests — one after each period");
    if (opts.exam) toc.push("Semester examinations (Semester One & Two)");
    if (opts.keys) toc.push("Answer keys — for the teacher");
    doc.push({ k: "bul", items: toc });
    doc.push({ k: "h3", t: "How to Use This Workbook" });
    doc.push({ k: "bul", items: [
      "Read the key terms first and copy them into your notebook.",
      "Answer every question in complete sentences unless you are told otherwise.",
      "For map work, use a ruler and colour your maps neatly. Always add a key.",
      "For enquiry projects, be polite to everyone you interview and thank them.",
      "Listen to the views of others in debates, even when you disagree."
    ] });
    doc.push({ k: "p", t: "Inclusive and differentiated learning is emphasised: work individually or in small mixed groups according to ability, gender, learning style and age.", i: true });
    doc.push({ k: "pagebreak" });

    topics.forEach(function (t, i) {
      doc.push({ k: "h1", t: "PERIOD " + periodNo(t.period) + " · " + t.title, per: t.period });
      doc.push({ k: "p", t: t.subtitle + "   ·   Semester " + t.sem });
      doc.push.apply(doc, UNIT_NOTES(t, periodNo(t.period)));
      doc.push({ k: "space" });

      var ukey = [];
      opts.sheets.forEach(function (id) {
        var s = SHEETS[id]; if (!s) return;
        var out = s.fn(t, opts.perEx, r);
        if (!out) return;
        doc = doc.concat(out.blocks);
        doc.push({ k: "space" });
        if (out.key.length) ukey.push({ h: out.blocks[0].t, lines: out.key });
      });
      if (ukey.length) keys.push({ title: "Period " + periodNo(t.period) + " — " + t.title, sections: ukey });

      if (opts.tests) {
        doc.push({ k: "pagebreak" });
        var pt = periodTest(t, r);
        doc = doc.concat(pt.blocks);
        keys.push({ title: "Period Test — " + t.title + " (" + pt.marks + " marks)",
                    sections: [{ h: "Answers", lines: pt.key }] });
      }
      doc.push({ k: "pagebreak" });
    });

    if (opts.exam) {
      ["One", "Two"].forEach(function (sem) {
        var st = topics.filter(function (t) { return t.sem === sem; });
        if (!st.length) return;
        var ex = semesterExam(st, sem, r);
        doc = doc.concat(ex.blocks);
        doc.push({ k: "pagebreak" });
        keys.push({ title: "Semester " + sem + " Examination (" + ex.marks + " marks)",
                    sections: [{ h: "Answers", lines: ex.key }] });
      });
    }

    if (opts.keys && keys.length) {
      doc.push({ k: "h1", t: "ANSWER KEYS — TEACHER'S COPY", per: "keys" });
      doc.push({ k: "p", t: "Detach or keep separately. Not for pupils.", i: true });
      doc.push({ k: "instr", t: "Each answer is given with the reason or method behind it. When you mark, do not only tick or cross — point the learner to the step in the explanation that they missed." });
      keys.forEach(function (kk) {
        doc.push({ k: "h2", t: kk.title });
        kk.sections.forEach(function (s) {
          doc.push({ k: "h3", t: s.h });
          doc.push({ k: "bul", items: s.lines });
        });
      });
    }

    return { blocks: doc, topics: topics };
  }

  root.GEN_SS = { buildPack: buildPack, SHEETS: SHEETS };
})(window);
