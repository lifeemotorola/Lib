/* Phonics & word study exercise generation engine.
   Emits the SAME block model as the English engine, so the renderer and the
   .docx exporter are shared. Registered on window.GEN_PHO. */
(function (root) {
  "use strict";

  /* roman period ("I".."VI") -> its number, for the user-facing "Period n" labels */
  function periodNo(p) {
    var i = ["I", "II", "III", "IV", "V", "VI"].indexOf(String(p));
    return i < 0 ? p : i + 1;
  }

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

  function band(g) { return g <= 6 ? "el" : g <= 9 ? "jh" : "sh"; }
  function chunk(words) { return words.map(function (w) { return "·" + w; }).join(" "); }

  /* word -> the pattern it belongs to (first match wins) */
  function wordPattern(t) {
    var m = Object.create(null);
    (t.phonics || []).forEach(function (p) {
      p.words.forEach(function (w) {
        var key = String(w).toLowerCase();
        if (!m[key]) m[key] = p.p;
      });
    });
    return m;
  }

  /* ---------------- worksheet generators ---------------- */

  /* A · Pattern study table */
  function wsPatterns(t) {
    if (!t.phonics || !t.phonics.length) return null;
    return {
      blocks: [
        { k: "h3", t: "A · Sound and Pattern Study" },
        { k: "instr", t: "Study each pattern and its example words. Say the sound, then write two more words of your own for every pattern." },
        { k: "table", head: ["Pattern / sound", "What it says", "Example words", "My word 1", "My word 2"],
          rows: t.phonics.map(function (p) { return [p.p, p.label, p.words.slice(0, 6).join(", "), "", ""]; }) }
      ], key: []
    };
  }

  /* B · Word list with syllables, meaning and sentence */
  function wsWords(t) {
    return {
      blocks: [
        { k: "h3", t: "B · Word List — Say, Read and Copy" },
        { k: "instr", t: "Read each word aloud after your teacher. Copy the word, its syllables and its meaning into your exercise book." },
        { k: "table", head: ["Word", "Syllables / how to say it", "Meaning", "Used in a sentence"],
          rows: (t.words || []).map(function (v) { return [v.w, v.s, v.d, v.x]; }) }
      ], key: []
    };
  }

  /* C · Match word to meaning */
  function wsMatch(t, n, r) {
    var sel = pick(t.words, n, r), right = shuffle(sel, r);
    return {
      blocks: [
        { k: "h3", t: "C · Match the Word to its Meaning" },
        { k: "instr", t: "Write the letter of the correct meaning beside each word." },
        { k: "cols",
          a: sel.map(function (v, i) { return (i + 1) + ". " + v.w + "  ______"; }),
          b: right.map(function (v, i) { return LET[i] + ". " + v.d; }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.w + " → " + LET[right.indexOf(v)] + " (" + v.d + ")"; })
    };
  }

  /* D · Blend or split the word */
  function wsBlend(t, n, r) {
    var sel = pick(t.words, n, r), items = [], key = [];
    sel.forEach(function (v, i) {
      if (t.grade <= 2) {
        items.push("Blend the sounds: " + chunk(v.w.split("")) + "  →  ______");
      } else {
        items.push("Break the word into parts/syllables: " + v.w + "  →  ______");
      }
      key.push((i + 1) + ". " + v.w + (t.grade <= 2 ? "" : "  (" + v.s + ")"));
    });
    return {
      blocks: [
        { k: "h3", t: "D · Blend It and Break It" },
        { k: "instr", t: t.grade <= 2
          ? "Say the sounds one after another, quickly, until they run together into the word."
          : "Say the word, break it into its parts or syllables, then write the whole word." },
        { k: "num", items: items }
      ], key: key
    };
  }

  /* E · Which pattern does the word use? */
  function wsFamily(t, n, r) {
    var wp = wordPattern(t);
    var pool = (t.words || []).filter(function (v) { return wp[String(v.w).toLowerCase()]; });
    if (!pool.length) return null;
    var sel = pick(pool, n, r), items = [], key = [];
    sel.forEach(function (v, i) {
      items.push("The word “" + v.w + "” follows the pattern  ______");
      key.push((i + 1) + ". " + v.w + " → " + wp[String(v.w).toLowerCase()]);
    });
    return {
      blocks: [
        { k: "h3", t: "E · Which Pattern?" },
        { k: "instr", t: "Write the sound, ending or word part the word follows." },
        { k: "num", items: items }
      ], key: key
    };
  }

  /* F · Complete the word (first letter given) */
  function wsComplete(t, n, r) {
    var sel = pick(t.phonics, Math.min(3, (t.phonics || []).length), r), items = [], key = [];
    sel.forEach(function (p) {
      var w = pick(p.words, 1, r)[0];
      if (!w) return;
      var hidden = w[0] + " " + w.slice(1).split("").map(function () { return "_"; }).join(" ");
      items.push("Pattern " + p.p + " — complete the word:  " + hidden + "   (" + w.length + " letters)");
      key.push(items.length + ". " + w);
    });
    if (!items.length) return null;
    return {
      blocks: [
        { k: "h3", t: "F · Complete the Word" },
        { k: "instr", t: "Each word follows the pattern given. The first letter is already there — finish the word." },
        { k: "num", items: items }
      ], key: key
    };
  }

  /* G · Odd one out */
  function wsOdd(t, n, r) {
    var pats = (t.phonics || []).filter(function (p) { return p.words.length >= 5; });
    if (!pats.length) pats = t.phonics || [];
    var all = (t.words || []).map(function (v) { return v.w; });
    var items = [], key = [], done = 0, guard = 0;
    while (done < n && guard < 40) {
      guard++;
      var p = pick(pats, 1, r)[0]; if (!p) break;
      var four = pick(p.words, 4, r);
      if (four.length < 4) continue;
      var other = pick(all.filter(function (w) { return p.words.indexOf(w) < 0; }), 1, r)[0];
      if (!other) continue;
      var line = shuffle(four.concat([other]), r);
      items.push("Circle the word that does NOT belong:  " + line.join("  ·  "));
      key.push((done + 1) + ". " + other + " — it does not follow the pattern “" + p.p + "” (" + p.label + ").");
      done++;
    }
    if (!items.length) return null;
    return {
      blocks: [
        { k: "h3", t: "G · Odd One Out" },
        { k: "instr", t: "Four words follow one pattern; one word does not. Find it and say why." },
        { k: "num", items: items }
      ], key: key
    };
  }

  /* H · Unscramble the word */
  function wsUnscramble(t, n, r) {
    var sel = pick(t.words, n, r), items = [], key = [];
    sel.forEach(function (v, i) {
      var letters = v.w.split("");
      var sc = letters.slice();
      do { sc = shuffle(letters, r); } while (sc.join("") === v.w && letters.length > 1 && r() < 0.9);
      items.push("Rearrange the letters to make a word:  " + sc.join("  ") + "  →  ______");
      key.push((i + 1) + ". " + v.w + "  (" + v.d + ")");
    });
    return {
      blocks: [
        { k: "h3", t: "H · Build the Word" },
        { k: "instr", t: "The letters are mixed up. Put them in the right order and write the word." },
        { k: "num", items: items }
      ], key: key
    };
  }

  /* I · Build new words / word study */
  function wsBuild(t, n, r) {
    var sel = pick(t.phonics, Math.min(n, (t.phonics || []).length), r);
    if (!sel.length) return null;
    var items = [], key = [];
    sel.forEach(function (p, i) {
      if (t.grade >= 10) {
        items.push("Pattern “" + p.p + "” (" + p.label + "): build TWO new words, then use one in a sentence.\n     " + dots(40));
        key.push((i + 1) + ". Accept any real words containing “" + p.p + "” — e.g. " + p.words.slice(0, 2).join(", ") + " — with a correct sentence.");
      } else if (t.grade >= 7) {
        items.push("Use the pattern “" + p.p + "” (" + p.label + ") to build TWO new words.\n     " + dots(40));
        key.push((i + 1) + ". Accept any real words containing “" + p.p + "” — e.g. " + p.words.slice(0, 2).join(", ") + ".");
      } else {
        items.push("Say the sound “" + p.p + "” (" + p.label + "), then write TWO new words with the same sound.\n     " + dots(40));
        key.push((i + 1) + ". Accept any real words containing the pattern — e.g. " + p.words.slice(0, 2).join(", ") + ".");
      }
    });
    return {
      blocks: [
        { k: "h3", t: "I · Word Building" },
        { k: "instr", t: "Use the pattern of this unit to build new words of your own. Say them aloud and check the spelling." },
        { k: "num", items: items }
      ], key: key
    };
  }

  /* J · Spelling and dictation */
  function wsSpelling(t, n, r) {
    var sel = pick(t.words, n, r);
    var blocks = [
      { k: "h3", t: "J · Spelling and Dictation" },
      { k: "instr", t: "PUPIL: read each word aloud and copy it twice. TEACHER: then dictate the words for the pupil to write from memory." },
      { k: "table", head: ["Word", "Syllables / how to say it", "Copy 1", "Copy 2"],
        rows: sel.map(function (v) { return [v.w, v.s, "", ""]; }) },
      { k: "space" },
      { k: "p", t: "Dictation — write the words your teacher reads:" },
      { k: "lines", n: 5 }
    ];
    if (t.sight && t.sight.length) {
      blocks.push({ k: "space" });
      blocks.push({ k: "p", t: "Words to know on sight for this unit:" });
      blocks.push({ k: "p", t: t.sight.join("   ·   ") });
    }
    return { blocks: blocks, key: sel.map(function (v, i) { return (i + 1) + ". " + v.w; }) };
  }

  /* K · Sentence writing */
  function wsWrite(t, r) {
    var sel = pick(t.words, 4, r);
    var items = sel.map(function (v) { return "Write your own sentence using the word “" + v.w + "”."; });
    items.push("Write three sentences about the sounds and patterns you studied in this unit.");
    return {
      blocks: [
        { k: "h3", t: "K · Sentences with the New Words" },
        { k: "instr", t: "Begin each sentence with a capital letter and end it with the correct punctuation mark." },
        { k: "num", items: items.map(function (x) { return x + "\n" + dots(52) + "\n" + dots(52); }) }
      ],
      key: ["Accept any correct sentence that uses the word properly.",
            "Award marks for capital letters, punctuation, spelling and sense."]
    };
  }

  var SHEETS = {
    patterns:    { label: "Sound & pattern study",          fn: wsPatterns },
    words:       { label: "Word list — say, read, copy",    fn: function (t) { return wsWords(t); } },
    match:       { label: "Match word to meaning",          fn: wsMatch },
    blend:       { label: "Blend it & break it",            fn: wsBlend },
    family:      { label: "Which pattern?",                 fn: wsFamily },
    complete:    { label: "Complete the word",              fn: wsComplete },
    odd:         { label: "Odd one out",                    fn: wsOdd },
    unscramble:  { label: "Build the word (unscramble)",    fn: wsUnscramble },
    build:       { label: "Word building",                  fn: wsBuild },
    write:       { label: "Sentences with new words",       fn: function (t, n, r) { return wsWrite(t, r); } },
    spelling:    { label: "Spelling & dictation",           fn: wsSpelling }
  };

  /* ---------------- period test ---------------- */
  function periodTest(t, r) {
    var blocks = [], key = [], q = 0, each = 2, n = 5;
    blocks.push({ k: "h2", t: "PERIOD TEST — Grade " + t.grade + ", Period " + t.period + " · PHONICS", per: t.period });
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

    /* A — which pattern? */
    var wp = wordPattern(t);
    var fam = (t.words || []).filter(function (v) { return wp[String(v.w).toLowerCase()]; });
    if (fam.length) {
      var a = pick(fam, n, r);
      sec("SECTION A — Sound patterns", "Write the pattern each word follows.",
        a.map(function (v) { return "“" + v.w + "” follows the pattern  ______"; }),
        a.map(function (v) { return v.w + " → " + wp[String(v.w).toLowerCase()]; }));
    }

    /* B — complete the word (first letter given) */
    var sel2 = pick(t.phonics, Math.min(3, (t.phonics || []).length), r), bi = [], bk = [];
    sel2.forEach(function (p) {
      var w = pick(p.words, 1, r)[0];
      if (!w) return;
      bi.push("Pattern " + p.p + " — complete the word:  " + w[0] + " " +
        w.slice(1).split("").map(function () { return "_"; }).join(" "));
      bk.push(w);
    });
    if (bi.length) sec("SECTION B — Complete the word", "The first letter is given.", bi, bk);

    /* C — blend / parts / word building */
    var b = pick(t.words, n, r), ci = [], ck = [];
    b.forEach(function (v) {
      if (t.grade <= 2) {
        ci.push("Blend the sounds: " + chunk(v.w.split("")) + "  →  ______");
      } else if (t.grade <= 9) {
        ci.push("Break the word into parts: " + v.w + "  →  ______");
      } else {
        ci.push("Build one new word with the same pattern as “" + v.w + "”  →  ______");
      }
      ck.push(v.w + (t.grade > 2 && t.grade <= 9 ? "  (" + v.s + ")" : ""));
    });
    sec("SECTION C — Word parts", t.grade <= 2
      ? "Say the sounds one after another until they run together."
      : t.grade <= 9
        ? "Say the word, then write it in parts or syllables."
        : "Write a real word using the pattern of this period.", ci, ck);

    /* D — spelling */
    var d2 = pick(t.words, n, r);
    sec("SECTION D — Spelling", "Your teacher will read each word. Write it correctly.",
      d2.map(function () { return dots(30); }), d2.map(function (v) { return v.w; }));

    /* E — use the words */
    var e = pick(t.words, 4, r);
    sec("SECTION E — Use the words", t.grade <= 6
      ? "Write one sentence for each word."
      : "Write the meaning of each word, then use it in a sentence.",
      e.map(function (v) { return v.w + ":  " + dots(44); }),
      e.map(function (v) { return v.w + " — " + v.d + ". Accept any correct sentence."; }));

    return { blocks: blocks, key: key, marks: q * each };
  }

  /* ---------------- semester exam ---------------- */
  function semesterExam(topics, sem, r) {
    var wpool = [], ppool = [];
    topics.forEach(function (t) {
      (t.words || []).forEach(function (v) { wpool.push(v); });
      (t.phonics || []).forEach(function (p) { ppool.push(p); });
    });
    var g = topics[0].grade, blocks = [], key = [], q = 0, each = 2, n = 10;

    blocks.push({ k: "h2", t: "SEMESTER " + sem.toUpperCase() + " EXAMINATION — GRADE " + g + " PHONICS", per: "exam" });
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

    /* A — which word uses the pattern? */
    var a = pick(ppool, n, r), ai = [], ak = [];
    a.forEach(function (p) {
      var w = pick(p.words, 1, r)[0];
      if (!w) return;
      var others = pick(wpool.map(function (v) { return v.w; }).filter(function (x) { return x !== w; }), 3, r);
      var opts = shuffle(others.concat([w]), r);
      ai.push("Which word follows the pattern “" + p.p + "” (" + p.label + ")?\n     " +
        opts.map(function (o, j) { return "(" + "abcd"[j] + ") " + o; }).join("\n     "));
      ak.push("(" + "abcd"[opts.indexOf(w)] + ") " + w);
    });
    sec("SECTION A — Pattern recognition", "Circle the letter of the correct word.", ai, ak);

    /* B — complete the word */
    var b = pick(ppool, n, r), bi = [], bk = [];
    b.forEach(function (p) {
      var w = pick(p.words, 1, r)[0];
      if (!w) return;
      bi.push("Pattern " + p.p + " — complete the word:  " + w[0] + " " +
        w.slice(1).split("").map(function () { return "_"; }).join(" "));
      bk.push(w);
    });
    sec("SECTION B — Complete the word", "Finish each word using the pattern given.", bi, bk);

    /* C — word parts */
    var c = pick(wpool, n, r), ci = [], ck = [];
    c.forEach(function (v) {
      if (g <= 2) {
        ci.push("Blend the sounds: " + chunk(v.w.split("")) + "  →  ______");
      } else if (g <= 9) {
        ci.push("Break the word into parts: " + v.w + "  →  ______");
      } else {
        ci.push("Build one new word with the same pattern as “" + v.w + "”  →  ______");
      }
      ck.push(v.w + (g > 2 && g <= 9 ? "  (" + v.s + ")" : ""));
    });
    sec("SECTION C — Word parts", "Read the word, then write it in parts, sounds or a new word of the same pattern.", ci, ck);

    /* D — spelling */
    var d2 = pick(wpool, n, r);
    sec("SECTION D — Spelling", "Your teacher will read each word. Write it correctly.",
      d2.map(function () { return dots(28); }), d2.map(function (v) { return v.w; }));

    /* E — meanings and sentences */
    var e = pick(wpool, n, r);
    sec("SECTION E — Meanings and sentences", g <= 6
      ? "Write one sentence for each word."
      : "Write the meaning of each word, then use it in a sentence.",
      e.map(function (v) { return v.w + ":  " + dots(36) + "\n" + dots(36); }),
      e.map(function (v) { return v.w + " — " + v.d + ". Accept any correct sentence."; }));

    return { blocks: blocks, key: key, marks: q * each };
  }

  /* ---------------- pack builder ---------------- */
  function buildPack(opts) {
    var r = rng(opts.seed || 1);
    var SRC = opts.curriculum || PHO_CURRICULUM;
    var topics = SRC.filter(function (t) {
      return t.grade === opts.grade && (!opts.topics || opts.topics.indexOf(t.period) >= 0);
    });
    var doc = [], keys = [], toc = [];

    doc.push.apply(doc, PACK_COVER(opts, {
      title: (opts.subjectName || "PHONICS") + " — GRADE " + opts.grade,
      sub: "Pupil Workbook & Assessment Pack",
      line: (opts.bandName || "Elementary") + " " + (opts.subjectLine || "Phonics") +
            " · Liberian National Curriculum"
    }));
    doc.push({ k: "h3", t: "Contents" });
    topics.forEach(function (t, i) { toc.push("Period " + periodNo(t.period) + ": " + t.title); });
    if (opts.tests) toc.push("Period tests — one after each period");
    if (opts.exam) toc.push("Semester examinations (Semester One & Two)");
    if (opts.keys) toc.push("Answer keys — for the teacher");
    doc.push({ k: "bul", items: toc });
    doc.push({ k: "p", t: "Phonics is taught by ear first, then by eye: say the sound, read the word, spell the word. Work in small mixed groups and always say the patterns aloud.", i: true });
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
      doc.push({ k: "h1", t: "ANSWER KEYS — TEACHER'S COPY", per: "keys" });
      doc.push({ k: "p", t: "Detach or keep separately. Not for pupils.", i: true });
      doc.push({ k: "instr", t: "Each answer is given with the reason or method behind it. When you mark, do not only tick or cross — point the learner to the sound or pattern they missed." });
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

  root.GEN_PHO = { buildPack: buildPack, SHEETS: SHEETS };
})(window);
