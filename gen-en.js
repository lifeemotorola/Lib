/* English exercise generation engine.
   Emits the SAME block model as the French engine, so the renderer and the
   .docx exporter are shared. Registered on window.GEN_EN. */
(function (root) {
  "use strict";

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
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pick(arr, n, r) { return shuffle(arr || [], r).slice(0, Math.min(n, (arr || []).length)); }
  function dots(n) { var s = ""; for (var i = 0; i < (n || 22); i++) s += "."; return s; }
  var LET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  /* ---------------- worksheet generators ---------------- */

  /* A · Vocabulary word list */
  function wsWords(t) {
    return {
      blocks: [
        { k: "h3", t: "A · Vocabulary — Word List" },
        { k: "instr", t: "Read each word aloud after your teacher. Copy the word and its meaning into your exercise book." },
        { k: "table", head: ["Word", "Syllables", "Meaning", "Used in a sentence"],
          rows: t.words.map(function (v) { return [v.w, v.s, v.d, v.x]; }) }
      ], key: []
    };
  }

  /* B · Match word to meaning */
  function wsMatch(t, n, r) {
    var sel = pick(t.words, n, r), right = shuffle(sel, r);
    return {
      blocks: [
        { k: "h3", t: "B · Match the Word to its Meaning" },
        { k: "instr", t: "Write the letter of the correct meaning beside each word." },
        { k: "cols",
          a: sel.map(function (v, i) { return (i + 1) + ". " + v.w + "  ______"; }),
          b: right.map(function (v, i) { return LET[i] + ". " + v.d; }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.w + " → " + LET[right.indexOf(v)] + " (" + v.d + ")"; })
    };
  }

  /* C · Fill in the blank from the word list */
  function wsCloze(t, n, r) {
    var sel = pick(t.words.filter(function (v) {
      return v.x && v.x.toLowerCase().indexOf(v.w.toLowerCase()) >= 0;
    }), n, r);
    if (!sel.length) return null;
    var bank = shuffle(sel.map(function (v) { return v.w; }), r);
    var items = sel.map(function (v) {
      var re = new RegExp(v.w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      return v.x.replace(re, "__________");
    });
    return {
      blocks: [
        { k: "h3", t: "C · Fill in the Blanks" },
        { k: "instr", t: "Choose the correct word from the box and write it in the blank space." },
        { k: "p", t: "WORD BOX:   " + bank.join("  ·  ") },
        { k: "num", items: items }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.w; })
    };
  }

  /* D · Phonics / word families */
  function wsPhonics(t, n, r) {
    if (!t.phonics || !t.phonics.length) return null;
    var blocks = [
      { k: "h3", t: "D · Phonics and Word Building" },
      { k: "instr", t: "Say each sound aloud. Then write two more words of your own for each pattern." }
    ];
    var rows = t.phonics.map(function (p) {
      return [p.p + "  (" + p.label + ")", p.words.slice(0, 5).join(", "), "", ""];
    });
    blocks.push({ k: "table", head: ["Sound / pattern", "Example words", "My word 1", "My word 2"], rows: rows });
    var sel = pick(t.phonics, Math.min(3, t.phonics.length), r), items = [], key = [];
    sel.forEach(function (p) {
      var w = pick(p.words, 1, r)[0];
      if (!w) return;
      var hidden = w[0] + " " + w.slice(1).split("").map(function () { return "_"; }).join(" ");
      items.push("Pattern " + p.p + " — complete the word:  " + hidden + "   (" + w.length + " letters)");
      key.push(items.length + ". " + w);
    });
    if (items.length) {
      blocks.push({ k: "space" });
      blocks.push({ k: "instr", t: "Complete each word. The first letter is given." });
      blocks.push({ k: "num", items: items });
    }
    return { blocks: blocks, key: key };
  }

  /* E · Grammar practice */
  function wsGrammar(t, n, r) {
    if (!t.grammar || !t.grammar.length) return null;
    var sel = pick(t.grammar, n, r);
    return {
      blocks: [
        { k: "h3", t: "E · Grammar Practice" },
        { k: "instr", t: "Read each item carefully and write your answer on the line." },
        { k: "num", items: sel.map(function (g) { return g.q + "\n     Answer: " + dots(34); }) }
      ],
      key: sel.map(function (g, i) { return (i + 1) + ". " + g.a + "   — " + g.why; })
    };
  }

  /* F · Word relationships (synonym / antonym / plural / contraction ...) */
  function wsPairs(t, n, r) {
    if (!t.pairs || !t.pairs.length) return null;
    var sel = pick(t.pairs, n, r), items = [], key = [];
    sel.forEach(function (p, i) {
      var flip = r() < 0.5;
      var given = flip ? p.b : p.a, want = flip ? p.a : p.b;
      items.push("Write the " + p.kind + " of “" + given + "”:  " + dots(20));
      key.push((i + 1) + ". " + want + "   (" + p.kind + ")");
    });
    return {
      blocks: [
        { k: "h3", t: "F · Word Relationships" },
        { k: "instr", t: "Synonym = same meaning · Antonym = opposite meaning · Plural = more than one · Contraction = two words joined." },
        { k: "num", items: items }
      ], key: key
    };
  }

  /* G · Multiple choice on word meaning */
  function wsMcq(t, n, r) {
    var sel = pick(t.words, n, r), items = [], key = [];
    sel.forEach(function (v, i) {
      var d = pick(t.words.filter(function (x) { return x.w !== v.w; }), 3, r);
      var opts = shuffle(d.map(function (x) { return x.d; }).concat([v.d]), r);
      items.push("What does “" + v.w + "” mean?\n     " +
        opts.map(function (o, j) { return "(" + "abcd"[j] + ") " + o; }).join("\n     "));
      key.push((i + 1) + ". (" + "abcd"[opts.indexOf(v.d)] + ") " + v.d);
    });
    return {
      blocks: [
        { k: "h3", t: "G · Multiple Choice" },
        { k: "instr", t: "Circle the letter of the correct meaning." },
        { k: "num", items: items }
      ], key: key
    };
  }

  /* H · Reading comprehension passage */
  function wsPassage(t) {
    if (!t.passage) return null;
    var p = t.passage;
    return {
      blocks: [
        { k: "h3", t: "H · Reading Comprehension" },
        { k: "instr", t: "Read the passage twice — once silently and once aloud. Then answer the questions in complete sentences." },
        { k: "h3", t: p.title },
        { k: "p", t: p.text },
        { k: "space" },
        { k: "instr", t: "Answer in complete sentences." },
        { k: "num", items: p.qs.map(function (q) { return q.q + "\n" + dots(52) + "\n" + dots(52); }) }
      ],
      key: p.qs.map(function (q, i) { return (i + 1) + ". " + q.a; })
    };
  }

  /* I · Sentence writing */
  function wsWrite(t, r) {
    var sel = pick(t.words, 4, r);
    var items = sel.map(function (v) { return "Write your own sentence using the word “" + v.w + "”."; });
    items.push("Write three sentences about what you learned in this unit.");
    return {
      blocks: [
        { k: "h3", t: "I · Sentence and Paragraph Writing" },
        { k: "instr", t: "Begin each sentence with a capital letter and end it with the correct punctuation mark." },
        { k: "num", items: items.map(function (x) { return x + "\n" + dots(52) + "\n" + dots(52); }) }
      ],
      key: ["Accept any correct sentence that uses the word properly.",
            "Award marks for capital letters, punctuation, spelling and sense."]
    };
  }

  /* J · Spelling and dictation */
  function wsSpelling(t, n, r) {
    var sel = pick(t.words, n, r);
    var blocks = [
      { k: "h3", t: "J · Spelling and Dictation" },
      { k: "instr", t: "PUPIL: read each word aloud and copy it twice. TEACHER: then dictate the words for the pupil to write from memory." },
      { k: "table", head: ["Word", "Syllables", "Copy 1", "Copy 2"],
        rows: sel.map(function (v) { return [v.w, v.s, "", ""]; }) },
      { k: "space" },
      { k: "p", t: "Dictation — write the words your teacher reads:" },
      { k: "lines", n: 5 }
    ];
    if (t.sight && t.sight.length) {
      blocks.push({ k: "space" });
      blocks.push({ k: "p", t: "High-frequency / sight words for this unit:" });
      blocks.push({ k: "p", t: t.sight.join("   ·   ") });
    }
    return { blocks: blocks, key: sel.map(function (v, i) { return (i + 1) + ". " + v.w; }) };
  }

  /* K · Handwriting */
  function wsCopy(t, n, r) {
    var sel = pick(t.words, n, r);
    return {
      blocks: [
        { k: "h3", t: "K · Handwriting Practice" },
        { k: "instr", t: "Copy each word neatly three times. Keep your letters on the line." },
        { k: "table", head: ["Word", "Copy 1", "Copy 2", "Copy 3"],
          rows: sel.map(function (v) { return [v.w, "", "", ""]; }) }
      ], key: []
    };
  }

  var SHEETS = {
    words:    { label: "Vocabulary word list",       fn: function (t) { return wsWords(t); } },
    match:    { label: "Match word to meaning",      fn: wsMatch },
    cloze:    { label: "Fill in the blanks",         fn: wsCloze },
    phonics:  { label: "Phonics & word building",    fn: wsPhonics },
    grammar:  { label: "Grammar practice",           fn: wsGrammar },
    pairs:    { label: "Synonyms, antonyms & pairs", fn: wsPairs },
    mcq:      { label: "Multiple choice",            fn: wsMcq },
    passage:  { label: "Reading comprehension",      fn: function (t) { return wsPassage(t); } },
    write:    { label: "Sentence writing",           fn: function (t, n, r) { return wsWrite(t, r); } },
    spelling: { label: "Spelling & dictation",       fn: wsSpelling },
    copy:     { label: "Handwriting practice",       fn: wsCopy }
  };

  /* ---------------- period test ---------------- */
  function periodTest(t, r) {
    var blocks = [], key = [], q = 0, each = 2, n = 5;
    blocks.push({ k: "h2", t: "PERIOD TEST — Grade " + t.grade + ", Period " + t.period });
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

    var a = pick(t.words, n, r);
    sec("SECTION A — Word meanings", "Write the meaning of each word.",
      a.map(function (v) { return v.w + "  " + dots(28); }), a.map(function (v) { return v.d; }));

    var b = pick(t.words, n, r), bi = [], bk = [];
    b.forEach(function (v) {
      var d = pick(t.words.filter(function (x) { return x.w !== v.w; }), 3, r);
      var opts = shuffle(d.map(function (x) { return x.d; }).concat([v.d]), r);
      bi.push("“" + v.w + "” means:\n     " + opts.map(function (o, j) { return "(" + "abcd"[j] + ") " + o; }).join("\n     "));
      bk.push("(" + "abcd"[opts.indexOf(v.d)] + ") " + v.d);
    });
    sec("SECTION B — Multiple choice", "Circle the correct letter.", bi, bk);

    if (t.grammar && t.grammar.length) {
      var c = pick(t.grammar, n, r);
      sec("SECTION C — Grammar", "Write the correct answer on the line.",
        c.map(function (g) { return g.q + "  " + dots(20); }), c.map(function (g) { return g.a; }));
    }

    var d2 = pick(t.words, n, r);
    sec("SECTION D — Spelling", "Your teacher will read each word. Write it correctly.",
      d2.map(function () { return dots(30); }), d2.map(function (v) { return v.w; }));

    return { blocks: blocks, key: key, marks: q * each };
  }

  /* ---------------- semester exam ---------------- */
  function semesterExam(topics, sem, r) {
    var wpool = [], gpool = [];
    topics.forEach(function (t) {
      (t.words || []).forEach(function (v) { wpool.push(v); });
      (t.grammar || []).forEach(function (g) { gpool.push(g); });
    });
    var g = topics[0].grade, blocks = [], key = [], q = 0, each = 2, n = 10;

    blocks.push({ k: "h2", t: "SEMESTER " + sem.toUpperCase() + " EXAMINATION — GRADE " + g + " ENGLISH" });
    blocks.push({ k: "table", head: ["Name", "Class", "Date", "Score"],
      rows: [["", "Grade " + g, "", "     / " + (n * 4 * each)]] });
    blocks.push({ k: "p", t: "Topics covered: " + topics.map(function (t) { return t.title; }).join(" · ") });
    blocks.push({ k: "instr", t: "Time: 1 hour 30 minutes. Answer ALL questions. Each question carries " + each + " marks." });

    function sec(title, instr, items, keys) {
      blocks.push({ k: "h3", t: title + "   (" + items.length * each + " marks)" });
      blocks.push({ k: "instr", t: instr });
      blocks.push({ k: "num", items: items, start: q + 1 });
      keys.forEach(function (kk, i) { key.push((q + i + 1) + ". " + kk); });
      q += items.length;
    }

    var a = pick(wpool, n, r);
    sec("SECTION A — Vocabulary", "Write the meaning of each word.",
      a.map(function (v) { return v.w + "  " + dots(26); }), a.map(function (v) { return v.d; }));

    var b = pick(wpool, n, r), bi = [], bk = [];
    b.forEach(function (v) {
      var d = pick(wpool.filter(function (x) { return x.w !== v.w; }), 3, r);
      var opts = shuffle(d.map(function (x) { return x.d; }).concat([v.d]), r);
      bi.push("“" + v.w + "” means:\n     " + opts.map(function (o, j) { return "(" + "abcd"[j] + ") " + o; }).join("\n     "));
      bk.push("(" + "abcd"[opts.indexOf(v.d)] + ") " + v.d);
    });
    sec("SECTION B — Multiple choice", "Circle the correct letter.", bi, bk);

    if (gpool.length) {
      var c = pick(gpool, n, r);
      sec("SECTION C — Grammar and usage", "Write the correct answer on the line.",
        c.map(function (x) { return x.q + "  " + dots(18); }), c.map(function (x) { return x.a; }));
    }

    /* Section D — comprehension, drawn from one topic's passage */
    var withP = topics.filter(function (t) { return t.passage; });
    if (withP.length) {
      var t2 = pick(withP, 1, r)[0], p = t2.passage;
      blocks.push({ k: "h3", t: "SECTION D — Reading comprehension   (" + p.qs.length * each + " marks)" });
      blocks.push({ k: "instr", t: "Read the passage and answer the questions in complete sentences." });
      blocks.push({ k: "h3", t: p.title });
      blocks.push({ k: "p", t: p.text });
      blocks.push({ k: "num", items: p.qs.map(function (x) { return x.q + "\n" + dots(50); }), start: q + 1 });
      p.qs.forEach(function (x, i) { key.push((q + i + 1) + ". " + x.a); });
      q += p.qs.length;
    }

    blocks.push({ k: "h3", t: "SECTION E — Composition   (10 marks)" });
    blocks.push({ k: "instr", t: "Write ONE composition of at least ten sentences on any topic below." });
    blocks.push({ k: "bul", items: ["My Village", "A Day I Will Never Forget", "The Person I Admire Most", "Why Education Is Important"] });
    blocks.push({ k: "lines", n: 12 });
    key.push("Composition — award marks for: content and ideas (4), grammar and agreement (3), spelling and punctuation (2), neatness (1).");

    return { blocks: blocks, key: key, marks: q * each + 10 };
  }

  /* ---------------- pack builder ---------------- */
  function buildPack(opts) {
    var r = rng(opts.seed || 1);
    var topics = EN_CURRICULUM.filter(function (t) {
      return t.grade === opts.grade && (!opts.topics || opts.topics.indexOf(t.period) >= 0);
    });
    var doc = [], keys = [], toc = [];

    doc.push({ k: "h1", t: "ENGLISH — GRADE " + opts.grade });
    doc.push({ k: "h2", t: "Pupil Workbook & Assessment Pack" });
    doc.push({ k: "p", t: "Elementary English · Liberian National Curriculum", i: true });
    doc.push({ k: "space" });
    doc.push({ k: "table", head: ["Pupil's name", "School", "Class", "Year"], rows: [["", "", "Grade " + opts.grade, ""]] });
    doc.push({ k: "space" });
    doc.push({ k: "h3", t: "Contents" });
    topics.forEach(function (t, i) { toc.push("Unit " + (i + 1) + " — Period " + t.period + ": " + t.title); });
    if (opts.tests) toc.push("Period tests — one after each unit");
    if (opts.exam) toc.push("Semester examinations (Semester One & Two)");
    if (opts.keys) toc.push("Answer keys — for the teacher");
    doc.push({ k: "bul", items: toc });
    doc.push({ k: "p", t: "Inclusive and differentiated learning is emphasised: individual seat work or work in small mixed groups according to gender, ability and learning styles.", i: true });
    doc.push({ k: "pagebreak" });

    topics.forEach(function (t, i) {
      doc.push({ k: "h1", t: "UNIT " + (i + 1) + " · " + t.title });
      doc.push({ k: "p", t: t.subtitle + "   ·   Period " + t.period + "   ·   Semester " + t.sem });
      doc.push({ k: "instr", t: "What you will learn: " + t.objectives.slice(0, 3).join("; ") + "." });
      doc.push({ k: "p", t: "Remember: " + t.note.replace(/<[^>]+>/g, "") });
      if (t.focus && t.focus.length) {
        doc.push({ k: "p", t: "Skills focus: " + t.focus.join(" · ") });
      }
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
      if (i < topics.length - 1 || opts.exam || opts.keys) doc.push({ k: "pagebreak" });
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
      doc.push({ k: "h1", t: "ANSWER KEYS — TEACHER'S COPY" });
      doc.push({ k: "p", t: "Detach or keep separately. Not for pupils.", i: true });
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

  root.GEN_EN = { buildPack: buildPack, SHEETS: SHEETS };
})(window);
