/* WASSCE (WAEC) examination pack engine.
   Emits the SAME block model as the other engines, so the shared renderer and
   the .docx exporter are reused. Registered on window.GEN_WA.

   Content source: the official WAEC WASSCE syllabuses, transcribed per subject
   into data-wa-*.js (one unit per syllabus topic). The pack a WASSCE session
   produces is built the way the real examination is built:
     · Study notes   — the syllabus contents and notes for each topic (verbatim)
     · Objective     — Paper-1 style multiple choice, options a–d, with the
                       marked answer and the reason in the key
     · Theory        — Paper-2 style structured/essay questions with model
                       answer outlines in the key
     · Topic mock    — a short mixed mock after each topic
     · WASSCE mock   — a composite Paper 1 + Paper 2 mock over all selected
                       topics, styled on the real scheme of examination
   Teacher session = the same papers plus every answer key, marked as the
   teacher's copy. Student session = clean papers, no answers anywhere. */
(function (root) {
  "use strict";

  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + (Math.imul(t ^ t >>> 7, 61 | t) ^ t);
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
  var LET = "abcd";

  /* ---------------- objective (Paper 1 style) ----------------
     Uses the unit's curated WASSCE-style bank first; top it up with items
     built from the key terms when the bank is smaller than requested. */
  function objectiveItems(t, n, r, allTerms) {
    var out = [], used = {};
    (t.mcq || []).forEach(function (q) { used[q.q] = 1; });
    pick(t.mcq || [], n, r).forEach(function (q) {
      out.push({ q: q.q, o: q.o.slice(), a: q.a, why: q.why || "" });
    });
    var pool = (allTerms || []).filter(function (v) { return v.d; });
    while (out.length < n && pool.length >= 4) {
      var v = pick(pool, 1, r)[0];
      if (!v) break;
      var others = pick(pool.filter(function (x) { return x.t !== v.t; }), 3, r);
      if (others.length < 3) break;
      var o = shuffle(others.map(function (x) { return x.d; }).concat([v.d]), r);
      out.push({
        q: "Which statement best describes " + v.t + "?",
        o: o, a: o.indexOf(v.d), why: v.d
      });
      pool = pool.filter(function (x) { return x.t !== v.t; });
    }
    return out;
  }

  function wsObjective(t, n, r, allTerms) {
    var items = objectiveItems(t, n, r, allTerms);
    if (!items.length) return null;
    var blocks = [
      { k: "h3", t: "Objective Practice — WASSCE Paper 1 style" },
      { k: "instr", t: "For each question choose the correct option (a–d) and write its letter in the space provided. In the real paper these questions are set as fifty multiple-choice items." }
    ];
    var key = [];
    items.forEach(function (it, i) {
      blocks.push({ k: "p", t: (i + 1) + ".  " + it.q });
      blocks.push({ k: "bul", items: it.o.map(function (o, j) { return LET[j] + ". " + o; }) });
      blocks.push({ k: "p", t: "Answer: __________", c: true });
      key.push((i + 1) + ".  (" + LET[it.a] + ") " + it.o[it.a] + (it.why ? "  — " + it.why : ""));
    });
    return { blocks: blocks, key: key };
  }

  /* ---------------- theory (Paper 2 style) ----------------
     Model answers are outlines in the key only; the pupil paper gets ruled
     answer space. */
  function wsTheory(t, n, r) {
    var items = pick(t.essay || [], n, r);
    if (!items.length) return null;
    var blocks = [
      { k: "h3", t: "Theory & Structured Questions — WASSCE Paper 2 style" },
      { k: "instr", t: "Answer the question(s) below in full, structured form. Points carry marks: state the principle, apply it to the question and, where asked, support with a named example." }
    ];
    var key = [];
    items.forEach(function (e, i) {
      blocks.push({ k: "p", t: (i + 1) + ".  " + e.q + "   (" + (e.marks || 10) + " marks)" });
      blocks.push({ k: "lines", n: Math.min(12, 4 + Math.floor((e.marks || 10) / 2)) });
      key.push((i + 1) + ".  " + e.q);
      (e.outline || []).forEach(function (line) { key.push("      • " + line); });
    });
    return { blocks: blocks, key: key };
  }

  /* ---------------- true or false ---------------- */
  function wsTF(t, n, r) {
    var items = pick(t.tf || [], n, r);
    if (!items.length) return null;
    var blocks = [
      { k: "h3", t: "True or False" },
      { k: "instr", t: "Write TRUE or FALSE beside each statement. Where the statement is false, write the correct statement under it." }
    ];
    var key = [];
    items.forEach(function (v, i) {
      blocks.push({ k: "p", t: (i + 1) + ".  " + v.s + "   __________" });
      if (String(v.a).toLowerCase() === "false") blocks.push({ k: "lines", n: 1 });
      key.push((i + 1) + ".  " + v.a.toUpperCase() + (v.why ? " — " + v.why : ""));
    });
    return { blocks: blocks, key: key };
  }

  /* ---------------- key terms glossary ---------------- */
  function wsTerms(t) {
    if (!t.terms || !t.terms.length) return null;
    return {
      blocks: [
        { k: "h3", t: "Key Terms — WASSCE Vocabulary" },
        { k: "instr", t: "Learn each term with its meaning. WASSCE objective questions frequently test these definitions in context." },
        { k: "table", head: ["Term", "Meaning", "Example / note"],
          rows: t.terms.map(function (v) { return [v.t, v.d, v.x || ""]; }) }
      ], key: []
    };
  }

  /* ---------------- short answer (structured recall) ---------------- */
  function wsShort(t, n, r) {
    var items = pick(t.terms || [], n, r);
    if (!items.length) return null;
    var blocks = [
      { k: "h3", t: "Short Answer — structured questions" },
      { k: "instr", t: "Answer each question in a single accurate sentence. In WASSCE Paper 2, short-structured questions carry 5–10 marks each." }
    ];
    var key = [];
    items.forEach(function (v, i) {
      blocks.push({ k: "p", t: (i + 1) + ".  Define or explain: " + v.t + ".   (2 marks)" });
      blocks.push({ k: "lines", n: 2 });
      key.push((i + 1) + ".  " + v.d);
    });
    return { blocks: blocks, key: key };
  }

  var SHEETS = {
    objective: { label: "Objective practice (Paper 1 style)", fn: function (t, n, r, all) { return wsObjective(t, n, r, all); } },
    theory:    { label: "Theory & structured (Paper 2 style)", fn: function (t, n, r) { return wsTheory(t, n, r); } },
    tf:        { label: "True or false",                       fn: wsTF },
    terms:     { label: "Key terms glossary",                  fn: function (t) { return wsTerms(t); } },
    short:     { label: "Short answer (structured)",           fn: wsShort }
  };

  /* ---------------- topic mock (period test) ---------------- */
  function topicMock(t, r, allTerms) {
    var blocks = [], key = [];
    var nObj = 10, objEach = 2, essayEach = 10;
    var meta = t._meta || {};
    blocks.push({ k: "h2", t: "TOPIC MOCK — WASSCE STYLE: " + (meta.name || "") + " · Topic " + t.period, per: t.period });
    blocks.push({ k: "p", t: "Topic: " + t.title });
    blocks.push({ k: "table", head: ["Name", "Class", "Date", "Score"],
      rows: [["", "Grade 12", "", "     / " + (nObj * objEach + essayEach)]] });
    blocks.push({ k: "instr", t: "Time: 30 minutes. Section A carries " + objEach + " marks per question; the theory question carries " + essayEach + " marks. Answer all questions in Section A and the theory question." });

    blocks.push({ k: "h3", t: "SECTION A — Objective   (" + nObj * objEach + " marks)" });
    blocks.push({ k: "instr", t: "Choose the correct option (a–d) for each question." });
    var items = objectiveItems(t, nObj, r, allTerms);
    items.forEach(function (it, i) {
      blocks.push({ k: "p", t: (i + 1) + ".  " + it.q });
      blocks.push({ k: "bul", items: it.o.map(function (o, j) { return LET[j] + ". " + o; }) });
      key.push("A" + (i + 1) + ".  (" + LET[it.a] + ") " + it.o[it.a] + (it.why ? "  — " + it.why : ""));
    });

    var es = pick(t.essay || [], 1, r);
    if (es.length) {
      blocks.push({ k: "h3", t: "SECTION B — Theory   (" + essayEach + " marks)" });
      blocks.push({ k: "p", t: "1.  " + es[0].q + "   (" + (es[0].marks || essayEach) + " marks)" });
      blocks.push({ k: "lines", n: 10 });
      key.push("B1.  " + es[0].q);
      (es[0].outline || []).forEach(function (line) { key.push("      • " + line); });
    }
    return { blocks: blocks, key: key, marks: nObj * objEach + (es.length ? essayEach : 0) };
  }

  /* ---------------- WASSCE composite mock (semester exam slot) ----------------
     Styled on the real scheme of examination for the subject: an objective
     Paper 1 followed by a Paper 2 with two essay questions. */
  function wassceMock(topics, r, opts) {
    var meta = (opts || {}).waMeta || {};
    var blocks = [], key = [];
    var nObj = 25, objEach = 1, essayEach = 20;

    blocks.push({ k: "h2", t: "WASSCE MOCK EXAMINATION — " + (meta.name || "") + " (GRADE 12)", per: "exam" });
    blocks.push({ k: "table", head: ["Name", "Index no.", "Date", "Score"],
      rows: [["", "", "", "     / " + (nObj * objEach + 2 * essayEach)]] });
    (meta.papers || []).forEach(function (p) {
      blocks.push({ k: "p", t: p.n + ": " + p.d, i: true });
    });
    blocks.push({ k: "instr", t: "This mock follows the WASSCE scheme of examination on a reduced scale: 25 objective questions (Paper 1) and two essay questions (Paper 2). Work exactly as you would in the real examination — no calculator where forbidden, no aids in Paper 2." });

    var pool = [], seen = {};
    topics.forEach(function (t) {
      (t.mcq || []).forEach(function (q) { if (!seen[q.q]) { seen[q.q] = 1; pool.push(q); } });
    });
    var allTerms = [];
    topics.forEach(function (t) { (t.terms || []).forEach(function (v) { allTerms.push(v); }); });

    blocks.push({ k: "h3", t: "PAPER 1 — OBJECTIVE   (" + nObj + " × " + objEach + " = " + nObj + " marks)" });
    blocks.push({ k: "instr", t: "Answer ALL questions. Each question is followed by four suggested answers lettered a to d. Choose the correct answer." });
    var chosen = pick(pool, nObj, r);
    while (chosen.length < nObj && allTerms.length >= 4) {
      var v = pick(allTerms.filter(function (x) { return x.d; }), 1, r)[0];
      if (!v) break;
      var others = pick(allTerms.filter(function (x) { return x.t !== v.t; }), 3, r);
      if (others.length < 3) break;
      var o = shuffle(others.map(function (x) { return x.d; }).concat([v.d]), r);
      chosen.push({ q: "Which statement best describes " + v.t + "?", o: o, a: o.indexOf(v.d), why: v.d });
      allTerms = allTerms.filter(function (x) { return x.t !== v.t; });
    }
    chosen.forEach(function (it, i) {
      blocks.push({ k: "p", t: (i + 1) + ".  " + it.q });
      blocks.push({ k: "bul", items: it.o.map(function (o, j) { return LET[j] + ". " + o; }) });
      key.push((i + 1) + ".  (" + LET[it.a] + ") " + it.o[it.a] + (it.why ? "  — " + it.why : ""));
    });
    blocks.push({ k: "pagebreak" });

    blocks.push({ k: "h3", t: "PAPER 2 — ESSAY   (2 × " + essayEach + " = " + 2 * essayEach + " marks)" });
    var esp = [];
    topics.forEach(function (t) { (t.essay || []).forEach(function (e) { esp.push(e); }); });
    var es2 = pick(esp, 2, r);
    blocks.push({ k: "instr", t: "Answer BOTH questions in full, structured form. State the principle, apply it, and support with named examples where the question asks." });
    es2.forEach(function (e, i) {
      blocks.push({ k: "p", t: (i + 1) + ".  " + e.q + "   (" + (e.marks || essayEach) + " marks)" });
      blocks.push({ k: "lines", n: 14 });
      key.push("Paper 2 · " + (i + 1) + ".  " + e.q);
      (e.outline || []).forEach(function (line) { key.push("      • " + line); });
    });
    if (!es2.length) blocks.push({ k: "p", t: "No essay bank for the selected topics — set theory questions from the syllabus notes." });

    return { blocks: blocks, key: key, marks: nObj * objEach + (es2.length ? es2.length * essayEach : 0) };
  }

  /* ---------------- pack builder ---------------- */
  function buildPack(opts) {
    var r = rng(opts.seed || 1);
    var SRC = opts.curriculum || [];
    var meta = opts.waMeta || {};
    var topics = SRC.filter(function (t) {
      return t.grade === opts.grade && (!opts.topics || opts.topics.indexOf(t.period) >= 0);
    });
    var allTerms = [];
    SRC.forEach(function (t) { (t.terms || []).forEach(function (v) { allTerms.push(v); }); });
    topics.forEach(function (t) { t._meta = meta; });

    var doc = [], keys = [], toc = [];

    doc.push.apply(doc, PACK_COVER(opts, {
      title: (opts.subjectName || "WASSCE") + " — GRADE 12",
      sub: "Pupil Workbook & Assessment Pack",
      line: "WASSCE · West African Senior School Certificate Examination · Grade 12"
    }));

    /* WASSCE at a glance: scheme of examination for this subject */
    doc.push({ k: "h3", t: "WASSCE at a glance — " + (meta.name || "") });
    if (meta.preamble) doc.push({ k: "p", t: meta.preamble });
    if (meta.aims && meta.aims.length) {
      doc.push({ k: "h3", t: "Aims and objectives of the syllabus" });
      doc.push({ k: "bul", items: meta.aims });
    }
    if (meta.papers && meta.papers.length) {
      doc.push({ k: "h3", t: "Scheme of examination" });
      doc.push({ k: "bul", items: meta.papers.map(function (p) { return p.n + " — " + p.d; }) });
      doc.push({ k: "p", t: "Grading: A1 (75–100) Excellent · B2 (70–74) Very good · B3 (65–69) Good · C4–C6 (50–64) Credit · D7 (45–49) Pass · E8–E9 (0–44) Fail. A credit pass (C6 and above) is the general requirement for university admission.", i: true });
    }

    doc.push({ k: "h3", t: "Contents" });
    topics.forEach(function (t) { toc.push("Topic " + t.period + ": " + t.title); });
    if (opts.tests) toc.push("Topic mocks — one after each topic");
    if (opts.exam) toc.push("WASSCE mock examination (Paper 1 + Paper 2)");
    if (opts.keys) toc.push("Answer keys — for the teacher");
    doc.push({ k: "bul", items: toc });
    doc.push({ k: "h3", t: "How to use this pack for WASSCE revision" });
    doc.push({ k: "bul", items: [
      "Read each topic's syllabus notes first — they are the exact scope from which the questions are set.",
      "Learn the key terms, then do the objective practice. Check every mark against the answer key and note the reason for each miss.",
      "Do theory questions in full, timed sentences — WASSCE essays are marked on points, structure and named examples.",
      "Finish with a topic mock, then the full WASSCE mock under real examination conditions (timed, no aids where the paper forbids them)."
    ] });
    doc.push({ k: "pagebreak" });

    topics.forEach(function (t, i) {
      doc.push({ k: "h1", t: "TOPIC " + t.period + " · " + t.title, per: t.period });
      doc.push({ k: "p", t: t.subtitle || "" });
      doc.push.apply(doc, UNIT_NOTES(t, t.period));
      doc.push({ k: "space" });

      var ukey = [];
      opts.sheets.forEach(function (id) {
        var s = SHEETS[id]; if (!s) return;
        var out = s.fn(t, opts.perEx, r, allTerms);
        if (!out) return;
        doc = doc.concat(out.blocks);
        doc.push({ k: "space" });
        if (out.key.length) ukey.push({ h: out.blocks[0].t, lines: out.key });
      });
      if (ukey.length) keys.push({ title: "Topic " + t.period + " — " + t.title, sections: ukey });

      if (opts.tests) {
        doc.push({ k: "pagebreak" });
        var tm = topicMock(t, r, allTerms);
        doc = doc.concat(tm.blocks);
        keys.push({ title: "Topic Mock — " + t.title + " (" + tm.marks + " marks)",
                    sections: [{ h: "Answers", lines: tm.key }] });
      }
      doc.push({ k: "pagebreak" });
    });

    if (opts.exam) {
      var ex = wassceMock(topics, r, opts);
      doc = doc.concat(ex.blocks);
      doc.push({ k: "pagebreak" });
      keys.push({ title: "WASSCE Mock Examination (" + ex.marks + " marks)",
                  sections: [{ h: "Answers", lines: ex.key }] });
    }

    if (opts.keys && keys.length) {
      doc.push({ k: "h1", t: "ANSWER KEYS — TEACHER'S COPY", per: "keys" });
      doc.push({ k: "p", t: "Detach or keep separately. Not for pupils.", i: true });
      doc.push({ k: "instr", t: "Each objective answer carries the reason behind it, and each theory answer an outline of the points the examiner expects. When you mark, do not only tick or cross — point the candidate to the point in the outline that was missed." });
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

  root.GEN_WA = { buildPack: buildPack, SHEETS: SHEETS };
})(window);
