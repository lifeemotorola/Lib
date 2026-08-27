/* Exercise generation engine — builds pupil worksheets from curriculum vocabulary.
   Every generator returns a BLOCK LIST, the shared document model consumed by
   both the on-screen renderer and the .docx exporter.

   Block kinds:
     {k:'h1'|'h2'|'h3', t:string}
     {k:'p', t:string, i?:bool}          i = italic
     {k:'instr', t:string}
     {k:'num', items:[string]}           numbered question lines
     {k:'bul', items:[string]}
     {k:'table', head:[..], rows:[[..]]}
     {k:'cols', a:[string], b:[string]}  two lettered/numbered columns (matching)
     {k:'rule'} {k:'space'} {k:'pagebreak'}
     {k:'lines', n:int}                  blank writing lines
*/
(function (root) {
  "use strict";

  /* ---------- seeded RNG (mulberry32) ---------- */
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
  function pick(arr, n, r) { return shuffle(arr, r).slice(0, Math.min(n, arr.length)); }
  var LET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  /* strip a leading article so word puzzles stay fair */
  function bare(fr) {
    return fr.replace(/^(le |la |les |l'|un |une |des )/i, "").trim();
  }
  function dots(n) { var s = ""; for (var i = 0; i < (n || 22); i++) s += "."; return s; }

  /* =================================================================
     WORKSHEET GENERATORS  — each returns {blocks:[], key:[]}
     ================================================================= */

  /* 1 · Vocabulary reference table */
  function wsVocab(t) {
    return {
      blocks: [
        { k: "h3", t: "A · Vocabulaire — Word List" },
        { k: "instr", t: "Study these words. Say each one aloud after your teacher, then copy them into your exercise book." },
        {
          k: "table",
          head: ["French", "Say it like", "English"],
          rows: t.vocab.map(function (v) { return [v.fr, v.say, v.en]; })
        }
      ],
      key: []
    };
  }

  /* 2 · Matching — French column vs shuffled English column */
  function wsMatch(t, n, r) {
    var sel = pick(t.vocab, n, r);
    var right = shuffle(sel, r);
    var key = sel.map(function (v, i) {
      return (i + 1) + ". " + v.fr + " → " + LET[right.indexOf(v)] + " (" + v.en + ")";
    });
    return {
      blocks: [
        { k: "h3", t: "B · Associez — Matching" },
        { k: "instr", t: "Write the letter of the correct English meaning beside each French word." },
        {
          k: "cols",
          a: sel.map(function (v, i) { return (i + 1) + ". " + v.fr + "  ______"; }),
          b: right.map(function (v, i) { return LET[i] + ". " + v.en; })
        }
      ],
      key: key
    };
  }

  /* 3 · French → English translation */
  function wsFr2En(t, n, r) {
    var sel = pick(t.vocab, n, r);
    return {
      blocks: [
        { k: "h3", t: "C · Traduisez en anglais — French to English" },
        { k: "instr", t: "Write the English meaning of each French word on the line." },
        { k: "num", items: sel.map(function (v) { return v.fr + "  " + dots(26); }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.en; })
    };
  }

  /* 4 · English → French translation */
  function wsEn2Fr(t, n, r) {
    var sel = pick(t.vocab, n, r);
    return {
      blocks: [
        { k: "h3", t: "D · Traduisez en français — English to French" },
        { k: "instr", t: "Write the French word on the line. Remember the accents." },
        { k: "num", items: sel.map(function (v) { return v.en + "  " + dots(26); }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.fr; })
    };
  }

  /* 5 · Multiple choice */
  function wsMcq(t, n, r) {
    var sel = pick(t.vocab, n, r), key = [], items = [];
    sel.forEach(function (v, i) {
      var distract = pick(t.vocab.filter(function (x) { return x.fr !== v.fr; }), 3, r);
      var opts = shuffle(distract.map(function (d) { return d.en; }).concat([v.en]), r);
      items.push("What does “" + v.fr + "” mean?\n     " +
        opts.map(function (o, j) { return "(" + "abcd"[j] + ") " + o; }).join("   "));
      key.push((i + 1) + ". (" + "abcd"[opts.indexOf(v.en)] + ") " + v.en);
    });
    return {
      blocks: [
        { k: "h3", t: "E · Choix multiple — Multiple Choice" },
        { k: "instr", t: "Circle the letter of the correct answer." },
        { k: "num", items: items }
      ],
      key: key
    };
  }

  /* 6 · Missing letters */
  function wsMissing(t, n, r) {
    var sel = pick(t.vocab, n, r), key = [], items = [];
    sel.forEach(function (v, i) {
      var w = bare(v.fr), out = "", removed = 0;
      var target = Math.max(1, Math.round(w.replace(/[^A-Za-zÀ-ÿ]/g, "").length / 3));
      for (var c = 0; c < w.length; c++) {
        var ch = w[c];
        if (/[A-Za-zÀ-ÿ]/.test(ch) && c > 0 && removed < target && r() < 0.45) { out += "_"; removed++; }
        else out += ch;
      }
      items.push(out.split("").join(" ") + "   ( " + v.en + " )");
      key.push((i + 1) + ". " + w);
    });
    return {
      blocks: [
        { k: "h3", t: "F · Complétez — Fill in the Missing Letters" },
        { k: "instr", t: "The English meaning is in brackets. Write the missing letters to complete each French word." },
        { k: "num", items: items }
      ],
      key: key
    };
  }

  /* 7 · Unscramble */
  function wsScramble(t, n, r) {
    var sel = pick(t.vocab, n, r), key = [], items = [];
    sel.forEach(function (v, i) {
      var w = bare(v.fr);
      var mixed = shuffle(w.replace(/\s/g, "").split(""), r).join(" ");
      items.push(mixed + "   ( " + v.en + " )   " + dots(16));
      key.push((i + 1) + ". " + w);
    });
    return {
      blocks: [
        { k: "h3", t: "G · Remettez en ordre — Unscramble the Word" },
        { k: "instr", t: "The letters are mixed up. Write the correct French word on the line." },
        { k: "num", items: items }
      ],
      key: key
    };
  }

  /* 8 · Copy / handwriting practice */
  function wsCopy(t, n, r) {
    var sel = pick(t.vocab, n, r);
    return {
      blocks: [
        { k: "h3", t: "H · Copiez — Handwriting Practice" },
        { k: "instr", t: "Copy each French word neatly three times on the lines." },
        {
          k: "table",
          head: ["French word", "Copy 1", "Copy 2", "Copy 3"],
          rows: sel.map(function (v) { return [v.fr, "", "", ""]; })
        }
      ],
      key: []
    };
  }

  /* 9 · Sentence / dialogue writing */
  function wsWrite(t, r) {
    var sel = pick(t.vocab, 4, r);
    var items = sel.map(function (v) { return "Write a sentence in French using: " + v.fr; });
    items.push("Draw and label three things from this lesson in French.");
    return {
      blocks: [
        { k: "h3", t: "I · Expression écrite — Writing" },
        { k: "instr", t: "Answer in your best handwriting. Use a full line for each answer." },
        { k: "num", items: items.map(function (x) { return x + "\n" + dots(52) + "\n" + dots(52); }) }
      ],
      key: ["Accept any correct sentence that uses the word properly and is spelled correctly.",
            "Award marks for accents, spelling and word order."]
    };
  }

  /* 10 · Oral / dictation list (pupil reads aloud; teacher dictates) */
  function wsOral(t, n, r) {
    var sel = pick(t.vocab, n, r);
    return {
      blocks: [
        { k: "h3", t: "J · Dictée et lecture — Dictation & Reading Aloud" },
        { k: "instr", t: "PUPIL: read each word aloud to your teacher. TEACHER: then dictate the words for the pupil to write." },
        { k: "table", head: ["French", "Say it like", "Read aloud ✓", "Written correctly ✓"],
          rows: sel.map(function (v) { return [v.fr, v.say, "", ""]; }) },
        { k: "space" },
        { k: "p", t: "Dictation — write the words your teacher says:" },
        { k: "lines", n: 4 }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.fr; })
    };
  }

  /* =================================================================
     PERIOD TEST — a marked paper drawn from one topic
     ================================================================= */
  function periodTest(t, r, marksTarget) {
    var blocks = [], key = [], q = 0;
    var each = 2;
    var nPer = Math.max(4, Math.round((marksTarget || 40) / (each * 4)));

    blocks.push({ k: "h2", t: "PERIOD TEST — Grade " + t.grade + ", Period " + t.period });
    blocks.push({ k: "p", t: "Topic: " + t.fr + " (" + t.en + ")   ·   Semester " + t.sem });
    blocks.push({ k: "table", head: ["Name", "Class", "Date", "Score"], rows: [["", "Grade " + t.grade, "", "     / " + (nPer * 4 * each)]] });
    blocks.push({ k: "instr", t: "Answer ALL questions. Write clearly. Each question carries " + each + " marks." });

    function section(title, instr, items, keys) {
      blocks.push({ k: "h3", t: title + "   (" + (items.length * each) + " marks)" });
      blocks.push({ k: "instr", t: instr });
      blocks.push({ k: "num", items: items, start: q + 1 });
      keys.forEach(function (kk, i) { key.push((q + i + 1) + ". " + kk); });
      q += items.length;
    }

    var s1 = pick(t.vocab, nPer, r);
    section("SECTION A — Translate into English", "Write the English meaning.",
      s1.map(function (v) { return v.fr + "  " + dots(24); }),
      s1.map(function (v) { return v.en; }));

    var s2 = pick(t.vocab, nPer, r);
    section("SECTION B — Translate into French", "Write the French word. Include accents.",
      s2.map(function (v) { return v.en + "  " + dots(24); }),
      s2.map(function (v) { return v.fr; }));

    var s3 = pick(t.vocab, nPer, r), s3i = [], s3k = [];
    s3.forEach(function (v) {
      var d = pick(t.vocab.filter(function (x) { return x.fr !== v.fr; }), 3, r);
      var opts = shuffle(d.map(function (x) { return x.en; }).concat([v.en]), r);
      s3i.push("“" + v.fr + "” means:\n     " + opts.map(function (o, j) { return "(" + "abcd"[j] + ") " + o; }).join("   "));
      s3k.push("(" + "abcd"[opts.indexOf(v.en)] + ") " + v.en);
    });
    section("SECTION C — Multiple choice", "Circle the correct letter.", s3i, s3k);

    var s4 = pick(t.vocab, nPer, r);
    section("SECTION D — Spelling", "Your teacher will read each word. Write it in French.",
      s4.map(function () { return dots(30); }),
      s4.map(function (v) { return v.fr; }));

    return { blocks: blocks, key: key, marks: nPer * 4 * each };
  }

  /* =================================================================
     SEMESTER EXAM — spans every topic in a semester
     ================================================================= */
  function semesterExam(topics, sem, r) {
    var pool = [];
    topics.forEach(function (t) {
      t.vocab.forEach(function (v) { pool.push({ v: v, t: t }); });
    });
    var g = topics[0].grade;
    var blocks = [], key = [], q = 0, each = 2, n = 10;

    blocks.push({ k: "h2", t: "SEMESTER " + sem.toUpperCase() + " EXAMINATION — GRADE " + g + " FRENCH" });
    blocks.push({ k: "table", head: ["Name", "Class", "Date", "Score"], rows: [["", "Grade " + g, "", "     / " + (n * 4 * each)]] });
    blocks.push({ k: "p", t: "Topics covered: " + topics.map(function (t) { return t.fr; }).join(" · ") });
    blocks.push({ k: "instr", t: "Time: 1 hour. Answer ALL questions. Each question carries " + each + " marks." });

    function sec(title, instr, items, keys) {
      blocks.push({ k: "h3", t: title + "   (" + items.length * each + " marks)" });
      blocks.push({ k: "instr", t: instr });
      blocks.push({ k: "num", items: items, start: q + 1 });
      keys.forEach(function (kk, i) { key.push((q + i + 1) + ". " + kk); });
      q += items.length;
    }

    var a = pick(pool, n, r);
    sec("SECTION A — French to English", "Write the English meaning.",
      a.map(function (x) { return x.v.fr + "  " + dots(24); }), a.map(function (x) { return x.v.en; }));

    var b = pick(pool, n, r);
    sec("SECTION B — English to French", "Write the French word with correct accents.",
      b.map(function (x) { return x.v.en + "  " + dots(24); }), b.map(function (x) { return x.v.fr; }));

    var c = pick(pool, n, r), ci = [], ck = [];
    c.forEach(function (x) {
      var d = pick(pool.filter(function (y) { return y.v.fr !== x.v.fr; }), 3, r);
      var opts = shuffle(d.map(function (y) { return y.v.en; }).concat([x.v.en]), r);
      ci.push("“" + x.v.fr + "” means:\n     " + opts.map(function (o, j) { return "(" + "abcd"[j] + ") " + o; }).join("   "));
      ck.push("(" + "abcd"[opts.indexOf(x.v.en)] + ") " + x.v.en);
    });
    sec("SECTION C — Multiple choice", "Circle the correct letter.", ci, ck);

    var dsel = pick(topics, Math.min(5, topics.length), r);
    var di = dsel.map(function (t) {
      var w = pick(t.vocab, 1, r)[0];
      return "Write one sentence in French using “" + w.fr + "”.\n" + dots(52);
    });
    di.push("Name any five words you have learned this semester, in French, with their English meanings.\n" + dots(52) + "\n" + dots(52));
    sec("SECTION D — Written expression", "Answer in complete sentences.", di,
      di.map(function () { return "Accept any correct, well-spelled French sentence using the word."; }));

    return { blocks: blocks, key: key, marks: n * 4 * each };
  }

  /* =================================================================
     PACK BUILDER
     ================================================================= */
  var SHEETS = {
    vocab:    { label: "Vocabulary word list",        fn: function (t, n, r) { return wsVocab(t); } },
    match:    { label: "Matching exercise",           fn: wsMatch },
    fr2en:    { label: "French → English translation",fn: wsFr2En },
    en2fr:    { label: "English → French translation",fn: wsEn2Fr },
    mcq:      { label: "Multiple choice",             fn: wsMcq },
    missing:  { label: "Missing letters",             fn: wsMissing },
    scramble: { label: "Unscramble the word",         fn: wsScramble },
    copy:     { label: "Handwriting / copy practice", fn: wsCopy },
    write:    { label: "Sentence writing",            fn: function (t, n, r) { return wsWrite(t, r); } },
    oral:     { label: "Dictation & reading aloud",   fn: wsOral }
  };

  /* opts = {grade, sheets:[ids], perEx:int, seed:int, tests:bool, exam:bool, keys:bool, topics:[periods]} */
  function buildPack(opts) {
    var r = rng(opts.seed || 1);
    var topics = FR_CURRICULUM.filter(function (t) {
      return t.grade === opts.grade && (!opts.topics || opts.topics.indexOf(t.period) >= 0);
    });
    var doc = [], keys = [], toc = [];

    /* ---- cover ---- */
    doc.push({ k: "h1", t: "FRENCH — GRADE " + opts.grade });
    doc.push({ k: "h2", t: "Pupil Workbook & Assessment Pack" });
    doc.push({ k: "p", t: "Elementary French · Liberian National Curriculum", i: true });
    doc.push({ k: "space" });
    doc.push({ k: "table", head: ["Pupil's name", "School", "Class", "Year"], rows: [["", "", "Grade " + opts.grade, ""]] });
    doc.push({ k: "space" });
    doc.push({ k: "h3", t: "Contents" });
    topics.forEach(function (t, i) {
      toc.push("Unit " + (i + 1) + " — Period " + t.period + ": " + t.fr + " (" + t.en + ")");
    });
    if (opts.tests) toc.push("Period tests — one after each unit");
    if (opts.exam) toc.push("Semester examinations (Semester One & Two)");
    if (opts.keys) toc.push("Answer keys — for the teacher");
    doc.push({ k: "bul", items: toc });
    doc.push({ k: "p", t: "General objectives: appreciate the uniqueness of another language; recognize the value of knowing and speaking another language.", i: true });
    doc.push({ k: "pagebreak" });

    /* ---- units ---- */
    topics.forEach(function (t, i) {
      doc.push({ k: "h1", t: "UNIT " + (i + 1) + " · " + t.fr });
      doc.push({ k: "p", t: t.en + "   ·   Period " + t.period + "   ·   Semester " + t.sem });
      doc.push({ k: "instr", t: "What you will learn: " + t.objectives.slice(0, 3).join("; ") + "." });
      doc.push({ k: "p", t: "Remember: " + t.note.replace(/<[^>]+>/g, "") });
      if (t.extra) {
        doc.push({ k: "h3", t: t.extra.title });
        doc.push({ k: "bul", items: t.extra.items });
      }
      doc.push({ k: "space" });

      var ukey = [];
      opts.sheets.forEach(function (id) {
        var s = SHEETS[id]; if (!s) return;
        var out = s.fn(t, opts.perEx, r);
        doc = doc.concat(out.blocks);
        doc.push({ k: "space" });
        if (out.key.length) ukey.push({ h: out.blocks[0].t, lines: out.key });
      });
      if (ukey.length) keys.push({ title: "Unit " + (i + 1) + " — " + t.fr, sections: ukey });

      if (opts.tests) {
        doc.push({ k: "pagebreak" });
        var pt = periodTest(t, r, 40);
        doc = doc.concat(pt.blocks);
        keys.push({ title: "Period Test — " + t.fr + " (" + pt.marks + " marks)", sections: [{ h: "Answers", lines: pt.key }] });
      }
      if (i < topics.length - 1 || opts.exam || opts.keys) doc.push({ k: "pagebreak" });
    });

    /* ---- exams ---- */
    if (opts.exam) {
      ["One", "Two"].forEach(function (sem) {
        var st = topics.filter(function (t) { return t.sem === sem; });
        if (!st.length) return;
        var ex = semesterExam(st, sem, r);
        doc = doc.concat(ex.blocks);
        doc.push({ k: "pagebreak" });
        keys.push({ title: "Semester " + sem + " Examination (" + ex.marks + " marks)", sections: [{ h: "Answers", lines: ex.key }] });
      });
    }

    /* ---- keys ---- */
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

  root.GEN_FR = { buildPack: buildPack, SHEETS: SHEETS, rng: rng };
})(window);
