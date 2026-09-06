/* Teacher's Lesson Plan builder.
   Fills the standard Liberian "TEACHER'S LESSON PLAN" form for each selected
   period, from the curriculum data the platform already carries (objectives,
   key ideas, worked examples, the unit's questions) and the lesson duration
   the teacher sets. One plan per selected period; the duration splits into
   Introduction / Main activities / Summary / Evaluation, and the minutes are
   written into each stage so they add up to the whole lesson.

   Emits the SAME block model as the gen-*.js engines (so the screen renderer,
   the print layout and the .docx exporter are shared) plus one new block kind,
   "formtable": a bordered table with no header row, for the form fields.
   Registered on window.LESSON_PLAN; called by app.js when the Document type
   is "Lesson plan". */
(function () {
  "use strict";

  function rng(seed) {
    var a = (seed || 1) >>> 0;
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

  /* curriculum prose carries <b> tags and **bold** markup; the form is plain */
  function plain(x) {
    return String(x == null ? "" : x)
      .replace(/<[^>]+>/g, "")
      .replace(/\*\*/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }
  function firstSentence(s) {
    s = plain(s);
    if (!s) return "";
    var m = s.match(/^[^.!?]+[.!?]?/);
    return m ? m[0].trim() : s;
  }
  function joinList(a) {
    if (!a.length) return "";
    if (a.length === 1) return a[0];
    if (a.length === 2) return a[0] + " and " + a[1];
    return a.slice(0, -1).join(", ") + " and " + a[a.length - 1];
  }

  /* ---------------- unit field access (every subject, defensive) ---------------- */
  function objList(t) {
    if (t.objectives && t.objectives.length) return t.objectives.map(plain);
    if (t.outcomes && t.outcomes.length) return t.outcomes.map(plain);
    return [];
  }
  function termNames(t) {
    var out = [];
    (t.terms || t.words || []).forEach(function (v) {
      var n = v.t || v.w;
      if (n && out.indexOf(n) < 0) out.push(n);
    });
    (t.vocab || []).forEach(function (v) {
      if (v.fr && out.indexOf(v.fr) < 0) out.push(v.fr);
    });
    return out;
  }
  function studyHeads(t) {
    var out = [];
    (t.study || []).forEach(function (b) {
      if ((b.k === "h3" || b.k === "h2") && b.t && out.indexOf(b.t) < 0) out.push(b.t);
    });
    return out;
  }
  function hasStudyTable(t) {
    return (t.study || []).some(function (b) { return b.k === "table"; });
  }
  function opener(t) {
    var p = "";
    (t.study || []).forEach(function (b) { if (!p && b.k === "p") p = plain(b.t); });
    return p || plain(t.note);
  }
  function neighbor(t, SRC, dir) {
    var g = (SRC || []).filter(function (u) { return u.grade === t.grade; });
    var i = -1;
    for (var k = 0; k < g.length; k++) if (g[k].period === t.period) { i = k; break; }
    if (i < 0) return null;
    return g[i + dir] || null;
  }
  function firstWorked(t) {
    var v = (t.worked && t.worked[0]) || (t.apply && t.apply[0]) || (t.grammar && t.grammar[0]);
    return v ? plain(v.q) : "";
  }
  /* a question for the assignment that the plan has not already used */
  function homeQuestion(t, used) {
    var cands = [];
    ["apply", "short", "worked", "mcq", "facts", "grammar"].forEach(function (k) {
      (t[k] || []).forEach(function (v) { if (v.q) cands.push(plain(v.q)); });
    });
    for (var i = 0; i < cands.length; i++) {
      if (!used[cands[i]]) return cands[i];
    }
    return "";   /* every question is already on the plan: don't repeat one */
  }

  /* ---------------- time split: the minutes the teacher set ----------------
     Introduction and summary hold a tenth each, evaluation a little more
     (questions must be answerable in the time left), main activities take
     whatever remains. Everything rounds to 5-minute marks. */
  function round5(x) { return Math.max(5, Math.round(x / 5) * 5); }
  function splitTime(D) {
    D = Math.max(15, Math.min(240, Math.round(+D || 40)));
    var intro = Math.min(10, round5(D * 0.10));
    var sum = Math.min(10, round5(D * 0.10));
    var ev = Math.min(15, round5(D * 0.15));
    var main = D - intro - sum - ev;
    if (main < 15) { intro = 5; sum = 5; ev = 5; main = D - 15; }
    return { total: D, intro: intro, main: main, sum: sum, ev: ev };
  }

  /* ---------------- stage content, mined from the unit ---------------- */
  var METHOD_POOL = {
    en: ["Question and answer (oral)", "Reading aloud and modelling", "Guided practice", "Pair and group work", "Drill and repetition", "Examples from the pupils' own lives"],
    eg: ["Question and answer", "Analysis of example sentences", "Guided practice", "Pair work", "Drill and correction"],
    pho: ["Choral reading and drill", "Listening and speaking", "Modelling and repetition", "Guided practice", "Rhythm and games"],
    fr: ["Question and answer (dialogue)", "Choral repetition", "Listening and speaking", "Guided practice", "Use of pictures and real objects"],
    sc: ["Demonstration and experiment", "Question and answer", "Guided discovery", "Group work", "Use of real objects and pictures"],
    bi: ["Demonstration and experiment", "Question and answer", "Use of specimens and models", "Guided discovery", "Group work"],
    ch: ["Demonstration and experiment", "Question and answer", "Guided practice", "Group work", "Use of real objects and apparatus"],
    ph: ["Demonstration and experiment", "Question and answer", "Guided practice", "Group work", "Use of real objects and apparatus"],
    ma: ["Guided practice and drill", "Modelling worked examples on the board", "Question and answer", "Pair and group work", "Real-life problems"],
    ss: ["Discussion and class debate", "Case study and problem solving", "Use of maps, pictures and real examples", "Question and answer", "Group work"],
    ec: ["Discussion and class debate", "Problem solving with real examples", "Use of maps, pictures and tables", "Question and answer", "Group work"],
    gg: ["Use of maps, pictures and the globe", "Question and answer", "Guided practice", "Group work", "Observation of the environment"],
    rm: ["Discussion", "Storytelling and role play", "Question and answer", "Group work", "Personal reflection"],
    pe: ["Demonstration", "Practical performance", "Question and answer", "Group and pair work", "Use of simple equipment"],
    li: ["Reading and discussion", "Question and answer", "Role play", "Group work", "Guided analysis of the text"],
    wa: ["Question and answer", "Guided practice and drill", "Modelling solved examples on the board", "Pair and group work", "Examination-style practice"]
  };
  function methodFor(subjId, r) {
    var pool = METHOD_POOL[subjId] || METHOD_POOL.wa;
    return shuffle(pool, r).slice(0, 4);
  }
  function aidsFor(t) {
    var a = ["Textbook and lesson notes", "Blackboard, chalk and duster"];
    var names = termNames(t);
    if (names.length) a.push("Word cards / flashcards \u2014 " + names.slice(0, 3).join(", "));
    if (hasStudyTable(t)) a.push("Charts, tables and diagrams drawn from the course text");
    if (t.experiment && t.experiment.length) a.push("Practical materials for the class investigation");
    if (t.passage && t.passage.text) a.push("Printed reading passage");
    if (t.phonics && t.phonics.length) a.push("Letter cards and sound-pattern charts");
    if (t.map || t.mapwork) a.push("Outline map of Liberia and place names");
    if (t.devices && t.devices.length) a.push("Excerpts from the set text");
    return a.slice(0, 6);
  }
  function exerciseNames(t) {
    var e = [];
    if (t.terms || t.words) e.push("the key-terms table");
    if (t.phonics && t.phonics.length) e.push("sound and pattern practice");
    if (t.grammar && t.grammar.length) e.push("the grammar items");
    if (t.cloze && t.cloze.length) e.push("fill-in-the-blank sentences");
    if (t.passage && t.passage.text) e.push("the reading passage and its questions");
    if (t.match && t.match.length) e.push("matching the terms to their meanings");
    if (t.pairs && t.pairs.length) e.push("the word pairs (synonyms, antonyms)");
    if (t.mcq && t.mcq.length) e.push("multiple-choice questions");
    if (t.tf && t.tf.length) e.push("the true and false statements");
    if (t.worked && t.worked.length) e.push("the worked examples");
    if (t.drills || t.drills2) e.push("the practice questions");
    if (t.short || t.apply) e.push("short-answer questions");
    if (t.sort && t.sort.length) e.push("sorting the examples into groups");
    if (t.casestudy && t.casestudy.length) e.push("the case study");
    if (t.map || t.mapwork) e.push("the map work");
    if (t.experiment && t.experiment.length) e.push("the practical investigation");
    if (t.devices && t.devices.length) e.push("the quotation questions");
    return e.slice(0, 4);
  }

  /* three evaluation questions, one of each kind when the unit offers it;
     used[] keeps them away from a question the plan already works on */
  function evalItems(t, r, used) {
    used = used || {};
    var kinds = { mcq: [], tf: [], worked: [], short: [], apply: [], grammar: [], facts: [], pass: [] };
    (t.mcq || []).forEach(function (v) {
      kinds.mcq.push({ q: plain(v.q), a: plain(v.o[v.a]) + (v.why ? " (" + plain(v.why) + ")" : "") });
    });
    (t.tf || []).forEach(function (v) {
      kinds.tf.push({ q: "State whether this is true or false, and correct it if it is false: " + plain(v.s),
                      a: plain(v.a) + (v.why ? " \u2014 " + plain(v.why) : "") });
    });
    ["worked", "short", "apply", "grammar", "facts"].forEach(function (k) {
      (t[k] || []).forEach(function (v) {
        if (!v.q) return;
        kinds[k].push({ q: plain(v.q), a: plain(v.a) + (v.why ? " (" + plain(v.why) + ")" : "") });
      });
    });
    if (t.passage && t.passage.qs) (t.passage.qs || []).forEach(function (v) {
      if (!v.q) return;
      kinds.pass.push({ q: plain(v.q), a: plain(v.a) });
    });
    var order = ["mcq", "tf", "worked", "short", "apply", "grammar", "facts", "pass"];
    var chosen = [];
    order.forEach(function (k) {
      if (!kinds[k].length || chosen.length >= 3) return;
      var list = shuffle(kinds[k], r);
      for (var i = 0; i < list.length; i++) {
        if (!used[list[i].q]) { chosen.push(list[i]); break; }
      }
    });
    var all = [];
    order.forEach(function (k) { all = all.concat(kinds[k]); });
    if (chosen.length < 3) {
      shuffle(all, r).forEach(function (v) {
        if (chosen.length >= 3) return;
        if (chosen.indexOf(v) < 0 && !used[v.q]) chosen.push(v);
      });
    }
    return chosen.slice(0, 3);
  }

  /* ---------------- the form itself ---------------- */
  function build(opts) {
    var r = rng(opts.seed || 1);
    var SRC = opts.curriculum || [];
    var topics = SRC.filter(function (t) {
      return t.grade === opts.grade && (!opts.topics || opts.topics.indexOf(t.period) >= 0);
    });
    var D = Math.max(15, Math.min(240, Math.round(+opts.lpMin || 40)));
    var time = splitTime(D);
    var subj = plain(opts.subjectLine || opts.subjectName || "Lesson");
    var gradeTxt = opts.wa ? "Grade 12 (WASSCE)" : "Grade " + opts.grade;
    var teacher = plain(opts.teacherName) || "____________________";
    var doc = [];

    topics.forEach(function (t, i) {
      var objs = objList(t);
      var nObj = D <= 45 ? 2 : D <= 75 ? 3 : D <= 110 ? 4 : 5;
      var names = termNames(t);
      var heads = studyHeads(t);
      var open = opener(t);
      var prev = neighbor(t, SRC, -1), next = neighbor(t, SRC, 1);

      /* ---- header fields of the form ---- */
      doc.push({ k: "h1", t: "TEACHER\u2019S LESSON PLAN", c: true, per: t.period });
      doc.push({ k: "formtable", rows: [
        [{ t: "Teacher: " + teacher }, { t: "Date: ____________________" }],
        [{ t: "Grade: " + gradeTxt }, { t: "Subject: " + subj }],
        [{ t: "Duration: " + D + " minutes" }, { t: "Topic: " + plain(t.title) }]
      ] });

      doc.push({ k: "h3", t: "Instructional Objectives" });
      doc.push({ k: "num", items: objs.slice(0, Math.max(1, Math.min(nObj, objs.length))) });

      doc.push({ k: "formtable", rows: [
        [{ t: "Teacher Aids", b: 1, c: 1 }, { t: "Teaching Method", b: 1, c: 1 }],
        [{ t: aidsFor(t).map(function (a) { return "\u2022 " + a; }).join("\n") },
         { t: methodFor(opts.subjectId || "", r).map(function (m) { return "\u2022 " + m; }).join("\n") }]
      ] });

      /* ---- Presentation & Procedures (Classroom Activities) ---- */
      doc.push({ k: "h2", t: "Presentation & Procedures (Classroom Activities)" });

      var intro = ["Greeting and attendance. The teacher greets the class, takes attendance and settles the pupils into mixed-ability groups."];
      if (prev) intro.push("Review of the previous period (" + plain(prev.title) + "). The teacher asks two or three recall questions; the pupils answer orally and gaps are corrected on the spot.");
      else intro.push("Starter. The teacher sets a short question to check what the pupils already know about the topic.");
      intro.push("Introducing the lesson. The teacher writes the topic on the board, reads the objectives and tells the pupils exactly what they will be able to do by the end of the period.");
      if (open) intro.push("Advance organiser. The teacher raises the idea that opens the period: " + firstSentence(open));
      doc.push({ k: "h3", t: "Initial Activities / Introduction (" + time.intro + " min)" });
      doc.push({ k: "num", items: intro });

      var main = [];
      var head = heads.length ? heads.slice(0, 2).join("; ") : plain(t.subtitle || t.title);
      var pres = "Presentation of the new content. The teacher explains the key points of the period (" + head + ") using examples from the course text; pupils listen, ask questions and note the main points.";
      if (names.length) pres += " Key terms are defined on the board: " + names.slice(0, 3).join(", ") + ".";
      main.push(pres);
      var gw = firstWorked(t);
      if (gw) main.push("Guided practice. The teacher and pupils work through \u201c" + gw + "\u201d together, step by step; the pupils give the answer at each step and the teacher corrects.");
      var ex = exerciseNames(t);
      if (ex.length) main.push("Pupil practice. In their groups the pupils do " + joinList(ex) + "; the teacher circulates, listens, answers questions and notes the mistakes to correct later.");
      if (D > 90) main.push("Correction and feedback. Each group gives one answer; the teacher marks it, explains the wrong ones with reasons, and repeats the part that was difficult.");
      doc.push({ k: "h3", t: "Developmental Activities (Main Activities) (" + time.main + " min)" });
      doc.push({ k: "num", items: main });

      var sum = [];
      sum.push("Recap. The pupils state, in their own words, what the period taught" + (names.length ? " and name the key terms: " + names.slice(0, 3).join(", ") : "") + ".");
      if (objs.length) sum.push("The teacher summarises the lesson: by now the pupils can " +
        joinList(objs.slice(0, 2).map(function (o) { return o.charAt(0).toLowerCase() + o.slice(1); })) + ".");
      sum.push("Correction. The pupils copy the corrected points into their exercise books.");
      sum.push("The teacher gives the assignment and announces the next lesson" + (next ? " \u2014 " + plain(next.title) : "") + ".");
      doc.push({ k: "h3", t: "Summary Conclusion (" + time.sum + " min)" });
      doc.push({ k: "num", items: sum });

      /* ---- Evaluation ---- */
      var evUsed = {};
      if (gw) evUsed[gw] = 1;
      var ev = evalItems(t, r, evUsed);
      doc.push({ k: "h2", t: "Evaluation (" + time.ev + " min)" });
      if (ev.length) {
        doc.push({ k: "num", items: ev.map(function (e) { return e.q; }) });
        doc.push({ k: "p", t: "Model answers (for the teacher):" });
        doc.push({ k: "num", items: ev.map(function (e) { return e.a; }) });
      } else {
        doc.push({ k: "p", t: "The teacher asks three oral questions drawn from the objectives; the pupils answer in complete sentences." });
      }

      /* ---- Assignment ---- */
      var asg = [];
      if (names.length) asg.push("Copy the key terms and their meanings into your exercise book: " + names.slice(0, 4).join(", ") + ".");
      var used = {};
      if (gw) used[gw] = 1;
      ev.forEach(function (e) { used[e.q] = 1; });
      var hq = homeQuestion(t, used);
      if (hq) asg.push("Answer in your exercise book: " + hq.replace(/\.\s*$/, "") + ".");
      asg.push("Preview the next lesson" + (next ? " \u2014 " + plain(next.title) : "") + ": read the course text and bring one question.");
      doc.push({ k: "h3", t: "Assignment" });
      doc.push({ k: "num", items: asg });

      if (i < topics.length - 1) doc.push({ k: "pagebreak" });
    });

    return { blocks: doc, topics: topics };
  }

  window.LESSON_PLAN = { build: build, splitTime: splitTime };
})();
