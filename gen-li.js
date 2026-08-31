/* Literature exercise generation engine — Senior High Literature in English,
   Grades 10-12.
   Emits the SAME block model as the other engines, so the renderer and the
   .docx exporter are shared. Registered on window.GEN_LI.

   Unit shape it expects (see data-li.js):
     grade · period · sem · icon · title · subtitle · outcomes[] · objectives[]
     · note · study[]
     · terms[]       {t,d,x}          literary term or device, meaning, example
     · quotes[]      {q,w,dev,why}    quotation, the work it comes from, the
                                      device it carries, and its effect
     · characters[]  {n,w,d}          character, the work, and the role played
     · themes[]      {t,w,ev}         theme, the work, and textual evidence
     · facts[]       {q,a}            recall questions answered in sentences
     · tf[]          {s,a,why}        true / false with the reason
     · apply[]       {q,a}            appreciation and applied reasoning
     · passage       {title,text,qs[]}  an extract with comprehension questions
     · write[]       {p,guide}        essay and creative writing prompts
     · activities[] · materials[] · assessment[]

   Per the project rule the digital research links listed in the source guide
   (literarydevices.net, study.com, vocabulary.com, poetryfoundation.org and
   the rest) are omitted: the pack must stay fully offline. The set texts and
   textbooks named in the guide are kept as text references. */
(function (root) {
  "use strict";

  var SUBJ = "Literature";

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

  /* A · Glossary of literary terms and devices */
  function wsTerms(t) {
    if (!t.terms || !t.terms.length) return null;
    return {
      blocks: [
        { k: "h3", t: "A · Literary Terms and Devices — Reference List" },
        { k: "instr", t: "Read each term and its meaning. Copy the list into your literature notebook and add one example of your own to each." },
        { k: "table", head: ["Term", "What it means", "Example"],
          rows: t.terms.map(function (v) { return [v.t, v.d, v.x]; }) }
      ],
      key: []
    };
  }

  /* B · Match term to meaning */
  function wsMatch(t, n, r) {
    if (!t.terms || !t.terms.length) return null;
    var sel = pick(t.terms, n, r), right = shuffle(sel, r);
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

  /* C · Fill in the blank — the term is removed from its own example */
  function wsCloze(t, n, r) {
    var pool = (t.terms || []).filter(function (v) {
      return v.x && v.x.toLowerCase().indexOf(v.t.toLowerCase()) >= 0;
    });
    if (!pool.length) return null;
    var sel = pick(pool, n, r);
    var bank = shuffle(sel.map(function (v) { return v.t; }), r);
    var items = sel.map(function (v) {
      var re = new RegExp(v.t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      return v.x.replace(re, "__________");
    });
    return {
      blocks: [
        { k: "h3", t: "C · Fill in the Blanks" },
        { k: "instr", t: "Fill each blank with the correct term from the box. Each term is used once." },
        { k: "p", t: "WORD BOX:   " + bank.join("   ·   ") },
        { k: "num", items: items }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.t + "  — " + v.d; })
    };
  }

  /* D · Identify the device in a quotation */
  function wsDevices(t, n, r) {
    if (!t.quotes || !t.quotes.length) return null;
    var sel = pick(t.quotes, n, r);
    return {
      blocks: [
        { k: "h3", t: "D · Name the Device and the Work" },
        { k: "instr", t: "Read each quotation. Name the work it comes from, name the device used, and say what effect the writer achieves." },
        { k: "num", items: sel.map(function (v) {
            return "“" + v.q + "”\nWork: " + dots(26) + "   Device: " + dots(20) + "\nEffect: " + dots(46);
          }) }
      ],
      key: sel.map(function (v, i) {
        return (i + 1) + ". " + v.w + " — " + v.dev + ". " + v.why;
      })
    };
  }

  /* E · Characters and their roles */
  function wsCharacters(t, n, r) {
    if (!t.characters || !t.characters.length) return null;
    var sel = pick(t.characters, n, r), right = shuffle(sel, r);
    return {
      blocks: [
        { k: "h3", t: "E · Who's Who — Characters and their Roles" },
        { k: "instr", t: "Match each character to the description of the part they play. Write the letter in the space." },
        { k: "cols",
          a: sel.map(function (v, i) { return (i + 1) + ". " + v.n + " (" + v.w + ")  ______"; }),
          b: right.map(function (v, i) { return LET[i] + ". " + v.d; }) },
        { k: "space" },
        { k: "p", t: "Choose ONE character from the list. In the space below, explain in your own words how that character changes during the work, and what the change tells the reader." },
        { k: "lines", n: 6 }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.n + " → " + LET[right.indexOf(v)] + " (" + v.d + ", in " + v.w + ")"; })
    };
  }

  /* F · Themes and textual evidence */
  function wsThemes(t, n, r) {
    if (!t.themes || !t.themes.length) return null;
    var sel = pick(t.themes, n, r);
    return {
      blocks: [
        { k: "h3", t: "F · Themes and Textual Evidence" },
        { k: "instr", t: "A theme is the idea the work is really about. For each theme, name the work and give the evidence from the text that supports it. No evidence, no mark." },
        { k: "num", items: sel.map(function (v) {
            return "Theme: " + v.t + "\nWork: " + dots(28) + "\nEvidence from the text: " + dots(40) + "\n" + dots(52);
          }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.t + " — " + v.w + ": " + v.ev; })
    };
  }

  /* G · True or false */
  function wsTF(t, n, r) {
    if (!t.tf || !t.tf.length) return null;
    var sel = pick(t.tf, n, r);
    return {
      blocks: [
        { k: "h3", t: "G · True or False" },
        { k: "instr", t: "Write TRUE or FALSE. Then rewrite every false statement so that it is true." },
        { k: "num", items: sel.map(function (v) { return v.s + "  __________\nCorrection: " + dots(44); }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.a.toUpperCase() + " — " + v.why; })
    };
  }

  /* H · Short answer questions */
  function wsShort(t, n, r) {
    if (!t.facts || !t.facts.length) return null;
    var sel = pick(t.facts, n, r);
    return {
      blocks: [
        { k: "h3", t: "H · Short Answer Questions" },
        { k: "instr", t: "Answer in complete sentences. One mark is for the fact and one mark for the sentence it stands in." },
        { k: "num", items: sel.map(function (v) { return v.q + "\n" + dots(52) + "\n" + dots(52); }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.a; })
    };
  }

  /* I · Multiple choice */
  function wsMcq(t, n, r) {
    if (!t.terms || !t.terms.length) return null;
    var sel = pick(t.terms, n, r), items = [], key = [];
    sel.forEach(function (v) {
      var d = pick(t.terms.filter(function (x) { return x.t !== v.t; }), 3, r);
      var opts = shuffle(d.map(function (x) { return x.d; }).concat([v.d]), r);
      items.push("“" + v.t + "” means:\n     " + opts.map(function (o, j) { return "(" + "abcd"[j] + ") " + o; }).join("\n     "));
      key.push("(" + "abcd"[opts.indexOf(v.d)] + ") " + v.d);
    });
    return {
      blocks: [
        { k: "h3", t: "I · Multiple Choice" },
        { k: "instr", t: "Circle the letter of the best answer." },
        { k: "num", items: items }
      ],
      key: key.map(function (kk, i) { return (i + 1) + ". " + kk; })
    };
  }

  /* J · Extract and comprehension */
  function wsPassage(t) {
    if (!t.passage) return null;
    var p = t.passage;
    return {
      blocks: [
        { k: "h3", t: "J · Extract — " + p.title },
        { k: "instr", t: "Read the extract carefully. Work out who is speaking, to whom, and what is at stake before you answer." },
        { k: "p", t: p.text },
        { k: "space" },
        { k: "num", items: p.qs.map(function (q) { return q.q + "\n" + dots(50) + "\n" + dots(50); }) }
      ],
      key: p.qs.map(function (q, i) { return (i + 1) + ". " + q.a; })
    };
  }

  /* K · Essay and creative writing */
  function wsWrite(t, n, r) {
    if (!t.write || !t.write.length) return null;
    var sel = pick(t.write, n, r);
    return {
      blocks: [
        { k: "h3", t: "K · Essay and Creative Writing" },
        { k: "instr", t: "Plan before you write. Every paragraph must carry one point and the evidence that supports it. Write in continuous prose, not in notes." },
        { k: "num", items: sel.map(function (v) { return v.p + "\n" + v.guide; }) },
        { k: "space" },
        { k: "p", t: "MY PLAN (point — evidence — explanation):" },
        { k: "lines", n: 4 },
        { k: "p", t: "MY ANSWER:" },
        { k: "lines", n: 12 }
      ],
      key: sel.map(function (v, i) {
        return (i + 1) + ". Marking guide — " + v.p + " " + v.guide;
      })
    };
  }

  /* L · Appreciation and applied reasoning */
  function wsAppreciate(t, n, r) {
    if (!t.apply || !t.apply.length) return null;
    var sel = pick(t.apply, n, r);
    return {
      blocks: [
        { k: "h3", t: "L · Think and Appreciate" },
        { k: "instr", t: "Think carefully and answer in full sentences. Give a reason and, where you can, a reference to the text for each answer." },
        { k: "num", items: sel.map(function (v) { return v.q + "\n" + dots(52) + "\n" + dots(52); }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.a; })
    };
  }

  /* M · Vocabulary and spelling test */
  function wsSpelling(t, n, r) {
    if (!t.terms || !t.terms.length) return null;
    var sel = pick(t.terms, n, r);
    return {
      blocks: [
        { k: "h3", t: "M · Vocabulary & Spelling Test — Literary Terms" },
        { k: "instr", t: "Your teacher will read each term. Write it correctly, then write its meaning." },
        { k: "table", head: ["No.", "Term", "Meaning"],
          rows: sel.map(function (v, i) { return [String(i + 1), "", ""]; }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.t + " — " + v.d; })
    };
  }

  /* N · Literature journal */
  function wsJournal(t) {
    return {
      blocks: [
        { k: "h3", t: "N · My Literature Journal" },
        { k: "instr", t: "Complete this page in your own words. There is no single right answer — there is only evidence and honesty." },
        { k: "p", t: "1. The work we are studying: " + t.title },
        { k: "p", t: "2. Three new literary terms I learned and what they mean:" },
        { k: "lines", n: 3 },
        { k: "p", t: "3. The line or moment I remember best from this unit, and why:" },
        { k: "lines", n: 3 },
        { k: "p", t: "4. How the work connects to something in my own community:" },
        { k: "lines", n: 3 },
        { k: "p", t: "5. One question I still want to ask the class:" },
        { k: "lines", n: 2 }
      ],
      key: ["Open response. Award marks for the correct use of at least three literary terms, a quotation or moment recalled accurately, and a connection made to the learner's own experience."]
    };
  }

  var SHEETS = {
    terms:      { label: "Literary terms glossary",     fn: function (t) { return wsTerms(t); } },
    match:      { label: "Match term to meaning",       fn: wsMatch },
    cloze:      { label: "Fill in the blanks",          fn: wsCloze },
    devices:    { label: "Name the device in a quote",  fn: wsDevices },
    characters: { label: "Characters and their roles",  fn: wsCharacters },
    themes:     { label: "Themes & textual evidence",   fn: wsThemes },
    tf:         { label: "True or false",               fn: wsTF },
    short:      { label: "Short answer questions",      fn: wsShort },
    mcq:        { label: "Multiple choice",             fn: wsMcq },
    passage:    { label: "Extract comprehension",       fn: function (t) { return wsPassage(t); } },
    write:      { label: "Essay & creative writing",    fn: wsWrite },
    appreciate: { label: "Think and appreciate",        fn: wsAppreciate },
    spelling:   { label: "Vocabulary & spelling test",  fn: wsSpelling },
    journal:    { label: "Literature journal",          fn: function (t) { return wsJournal(t); } }
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
      if (!items.length) return;
      blocks.push({ k: "h3", t: title + "   (" + items.length * each + " marks)" });
      blocks.push({ k: "instr", t: instr });
      blocks.push({ k: "num", items: items, start: q + 1 });
      keys.forEach(function (kk, i) { key.push((q + i + 1) + ". " + kk); });
      q += items.length;
    }

    var a = pick(t.terms, n, r);
    sec("SECTION A — Literary terms", "Write the meaning of each term.",
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
    sec("SECTION C — True or false", "Write TRUE or FALSE, then correct the false ones.",
      c.map(function (v) { return v.s + "  __________"; }),
      c.map(function (v) { return v.a.toUpperCase() + " — " + v.why; }));

    var d2 = pick(t.facts, n, r);
    sec("SECTION D — Short answer", "Answer in complete sentences.",
      d2.map(function (v) { return v.q + "\n" + dots(46); }), d2.map(function (v) { return v.a; }));

    return { blocks: blocks, key: key, marks: q * each };
  }

  /* ---------------- semester exam ---------------- */
  function semesterExam(topics, sem, r) {
    var tpool = [], fpool = [], tfpool = [], qpool = [], thpool = [], apool = [], ppool = [];
    topics.forEach(function (t) {
      (t.terms || []).forEach(function (v) { tpool.push(v); });
      (t.facts || []).forEach(function (v) { fpool.push(v); });
      (t.tf || []).forEach(function (v) { tfpool.push(v); });
      (t.quotes || []).forEach(function (v) { qpool.push(v); });
      (t.themes || []).forEach(function (v) { thpool.push(v); });
      (t.apply || []).forEach(function (v) { apool.push(v); });
      if (t.passage) ppool.push(t.passage);
    });
    var g = topics[0].grade, blocks = [], key = [], q = 0, each = 2, n = 10;

    blocks.push({ k: "h2", t: "SEMESTER " + sem.toUpperCase() + " EXAMINATION — GRADE " + g + " " + SUBJ.toUpperCase(), per: "exam" });
    blocks.push({ k: "table", head: ["Name", "Class", "Date", "Score"],
      rows: [["", "Grade " + g, "", "     / " + (n * 4 * each + 10)]] });
    blocks.push({ k: "p", t: "Topics covered: " + topics.map(function (t) { return t.title; }).join(" · ") });
    blocks.push({ k: "instr", t: "Time: 1 hour 30 minutes. Answer ALL questions. Each question in Sections A to D carries " + each + " marks." });

    function sec(title, instr, items, keys) {
      if (!items.length) return;
      blocks.push({ k: "h3", t: title + "   (" + items.length * each + " marks)" });
      blocks.push({ k: "instr", t: instr });
      blocks.push({ k: "num", items: items, start: q + 1 });
      keys.forEach(function (kk, i) { key.push((q + i + 1) + ". " + kk); });
      q += items.length;
    }

    var a = pick(tpool, n, r);
    sec("SECTION A — Literary terms", "Write the meaning of each term.",
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
    sec("SECTION C — True or false", "Write TRUE or FALSE, then correct the false ones.",
      c.map(function (v) { return v.s + "  __________"; }),
      c.map(function (v) { return v.a.toUpperCase() + " — " + v.why; }));

    var d2 = pick(fpool, n, r);
    sec("SECTION D — Short answer", "Answer each question in complete sentences.",
      d2.map(function (v) { return v.q + "\n" + dots(46); }), d2.map(function (v) { return v.a; }));

    /* Section E — unseen appreciation (10 marks) */
    blocks.push({ k: "h3", t: "SECTION E — Appreciation   (10 marks)" });
    var qp = pick(qpool, 2, r);
    if (qp.length) {
      blocks.push({ k: "instr", t: "1. For EACH quotation below, name the device used and explain the effect the writer achieves. (6 marks)" });
      blocks.push({ k: "num", items: qp.map(function (v) {
        return "“" + v.q + "”\nDevice: " + dots(22) + "   Effect: " + dots(30);
      }) });
      qp.forEach(function (v, i) { key.push("Section E (1." + (i + 1) + ") " + v.dev + " — " + v.why); });
    }
    var ap = pick(apool, 2, r);
    if (ap.length) {
      blocks.push({ k: "instr", t: "2. Answer BOTH questions, giving a reason and a reference to the text each time. (4 marks)" });
      blocks.push({ k: "num", items: ap.map(function (v) { return v.q + "\n" + dots(50) + "\n" + dots(50); }) });
      ap.forEach(function (v, i) { key.push("Section E (2." + (i + 1) + ") " + v.a); });
    }

    return { blocks: blocks, key: key, marks: q * each + 10 };
  }

  /* ---------------- pack builder ---------------- */
  function buildPack(opts) {
    var r = rng(opts.seed || 1);
    SUBJ = opts.subjectLine || "Literature";
    var SRC = opts.curriculum || LI_CURRICULUM;
    var topics = SRC.filter(function (t) {
      return t.grade === opts.grade && (!opts.topics || opts.topics.indexOf(t.period) >= 0);
    });
    var doc = [], keys = [], toc = [];

    doc.push.apply(doc, PACK_COVER(opts, {
      title: (opts.subjectName || "LITERATURE") + " — GRADE " + opts.grade,
      sub: "Pupil Workbook & Assessment Pack",
      line: (opts.bandName || "Senior High") + " " + (opts.subjectLine || "Literature") +
            " · Liberian National Curriculum"
    }));
    doc.push({ k: "h3", t: "Contents" });
    topics.forEach(function (t, i) { toc.push("Unit " + (i + 1) + " — Period " + t.period + ": " + t.title); });
    if (opts.tests) toc.push("Period tests — one after each unit");
    if (opts.exam) toc.push("Semester examinations (Semester One & Two)");
    if (opts.keys) toc.push("Answer keys — for the teacher");
    doc.push({ k: "bul", items: toc });
    doc.push({ k: "h3", t: "How to Use This Workbook" });
    doc.push({ k: "bul", items: [
      "Read the study notes first. Every unit in this pack is built on them.",
      "Learn the literary terms: they are the tools you use to write about a text.",
      "Never state a theme, a device or a judgement without the evidence that supports it.",
      "Quote accurately. A short quotation used well beats a long one used loosely.",
      "For drama and poetry, read aloud. Literature was made to be heard as well as read."
    ] });
    doc.push({ k: "p", t: "A learner-centered approach is emphasised. Inclusive and differentiated learning is used throughout: work individually or in small mixed groups according to gender, ability, age and learning style.", i: true });
    doc.push({ k: "pagebreak" });

    topics.forEach(function (t, i) {
      doc.push({ k: "h1", t: "UNIT " + (i + 1) + " · " + t.title, per: t.period });
      doc.push({ k: "p", t: t.subtitle + "   ·   Period " + t.period + "   ·   Semester " + t.sem });
      doc.push.apply(doc, UNIT_NOTES(t, i + 1));
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
      if (ukey.length) keys.push({ title: "Unit " + (i + 1) + " — " + t.title, sections: ukey });

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
      doc.push({ k: "instr", t: "Each answer is given with the reason or the effect behind it. When you mark, do not only tick or cross — point the learner to the step in the explanation that they missed." });
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

  root.GEN_LI = { buildPack: buildPack, SHEETS: SHEETS };
})(window);
