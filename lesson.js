/* Teacher's Lesson Plan and Weekly Unit Plan builder.
   Fills the standard Liberian lesson and weekly unit plans for each selected
   period, according to the regular Liberia school sector unit duration (3 or 4 weeks).
   Supports both:
     1. Daily Plan: Day-by-day lesson plans across the unit's 3 or 4 weeks until completed,
        with weekly plan adjustments, stage timings (Introduction / Main activities / Summary /
        Evaluation summing to the lesson duration), aids, methods, evaluation and assignments.
     2. Weekly Plan: Comprehensive Teacher's Weekly Unit Plan with week-by-week unit breakdown
        (Week 1, Week 2, Week 3, Week 4 / until unit completion), weekly objectives, procedures,
        teacher aids, methods, weekly plan adjustments, evaluations, and period culmination.

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

  /* ---------------- weekly plan adjustment generator ----------------
     In the regular Liberia school sector, every unit runs for 3 or 4 weeks.
     This helper calculates the weekly adjustment instructions and remedial
     pacing for Week w of W weeks (3 or 4 weeks). */
  function weeklyAdjustment(w, W, adjMode, customAdjNote, t) {
    var terms = termNames(t);
    var kw = terms.slice(0, 2).join(", ") || "core vocabulary";
    var adj = "";
    if (adjMode === "remedial") {
      if (w === 1) {
        adj = "Diagnostic Baseline & Scaffolding: Screen pupils for prerequisite skill gaps in " + kw + "; use word cards and concrete visual demonstrations; allot 10 min on Day 3 for small-group reading & handwriting support.";
      } else if (w === 2) {
        adj = "Step-by-Step Guided Reinforcement: Break multi-step exercises into single guided drills; monitor exercise books continuously; run a dedicated 15-minute remedial clinic on Day 4 for pupils struggling with foundational concepts.";
      } else if (w === 3 && W >= 4) {
        adj = "Targeted Error Correction: Review errors from Week 2 assignments; re-explain difficult concepts using peer study partners and concrete models before moving to application tasks.";
      } else {
        adj = "Mastery Catch-up & Scaffolded Assessment: Conduct targeted re-checks on remedial objectives prior to the unit test; provide extra thinking time and oral clarification of assessment questions for struggling readers.";
      }
    } else if (adjMode === "accelerated") {
      if (w === 1) {
        adj = "Fast-Track Foundation & Enrichment: Rapid diagnostic check on Day 1; fast-track basic definitions to allow early engagement with challenging concepts; provide extension problems for early finishers.";
      } else if (w === 2) {
        adj = "Intensive Practice & Higher-Order Thinking: Introduce complex multi-step problems and WASSCE/Liberian curriculum standard questions; encourage pupil-led chalkboard demonstrations.";
      } else if (w === 3 && W >= 4) {
        adj = "Real-World Application & Speed Drills: Set timed exercise sets and practical case study investigations; emphasize precision, rapid computation, and concise written explanation.";
      } else {
        adj = "Unit Mastery Period Examination: Administer full-length timed unit evaluation; conduct immediate rubric-based feedback and exam technique coaching; preview upcoming unit topics.";
      }
    } else {
      /* standard progression */
      if (w === 1) {
        adj = "Baseline Diagnostic & Orientation: Administer a 5-min diagnostic starter on prerequisite knowledge on Day 1; pre-teach key terms (" + kw + ") on chalkboard; pace introduction to ensure firm grasp of foundational definitions.";
      } else if (w === 2) {
        adj = "Mid-Unit Formative Check & Guided Practice: Inspect exercise books on Day 3 to identify common misconceptions in core principles; pair struggling learners with study partners during guided practice; adjust pacing if additional modelling is required.";
      } else if (w === 3 && W >= 4) {
        adj = "Application & Practical Scaffolding: Form mixed-ability groups for practical investigations / case studies; check group understanding before independent work; provide guided hints for application tasks.";
      } else {
        adj = "Consolidation, Remedial Review & Unit Assessment: Dedicate Days 1–2 to reviewing unit objectives and addressing outstanding pupil questions; administer the Unit Period Assessment on Day 3/4; conduct item analysis and record post-assessment remedial actions.";
      }
    }
    if (customAdjNote) {
      adj += " \u2014 Teacher's Note: " + plain(customAdjNote);
    }
    return adj;
  }

  /* ---------------- weekly plan builder (Unit Scheme & Weekly Plans) ---------------- */
  function buildWeeklyPlan(opts, SRC, topics) {
    var r = rng(opts.seed || 1);
    var W = Math.max(1, Math.min(6, Math.round(+opts.lpWeeks || 4)));
    var D = Math.max(15, Math.min(240, Math.round(+opts.lpMin || 40)));
    var daysPerWeek = Math.max(1, Math.min(7, Math.round(+opts.lpDays || 5)));
    var weeklyMin = daysPerWeek * D;
    var adjMode = opts.lpAdjMode || "standard";
    var customAdjNote = plain(opts.lpAdjNote);
    var subj = plain(opts.subjectLine || opts.subjectName || "Lesson");
    var gradeTxt = opts.wa ? "Grade 12 (WASSCE)" : "Grade " + opts.grade;
    var teacher = plain(opts.teacherName) || "____________________";
    var doc = [];

    topics.forEach(function (t, i) {
      var objs = objList(t);
      var names = termNames(t);
      var heads = studyHeads(t);
      var open = opener(t);
      var prev = neighbor(t, SRC, -1), next = neighbor(t, SRC, 1);
      var evAll = evalItems(t, r, {});

      /* Header: Teacher's Weekly Unit Plan */
      doc.push({ k: "h1", t: "TEACHER\u2019S LESSON PLAN", c: true, per: t.period });
      doc.push({ k: "formtable", rows: [
        [{ t: "Teacher: " + teacher }, { t: "Date: ____________________" }],
        [{ t: "Grade: " + gradeTxt }, { t: "Subject: " + subj }],
        [{ t: "Duration: " + daysPerWeek + " days \u00d7 " + D + " min (" + weeklyMin + " min/week)" }, { t: "Topic: " + plain(t.title) }],
        [{ t: "Unit Duration: " + W + " Weeks (Liberia School Sector)" },
         { t: "Plan Format: Teacher's Weekly Unit Plan (Weeks 1 to " + W + ")" }]
      ] });

      doc.push({ k: "h3", t: "Instructional Objectives" });
      doc.push({ k: "num", items: objs.length ? objs : ["Master the core concepts, skills and applications of " + plain(t.title) + "."] });

      doc.push({ k: "formtable", rows: [
        [{ t: "Teacher Aids", b: 1, c: 1 }, { t: "Teaching Method", b: 1, c: 1 }],
        [{ t: aidsFor(t).map(function (a) { return "\u2022 " + a; }).join("\n") },
         { t: methodFor(opts.subjectId || "", r).map(function (m) { return "\u2022 " + m; }).join("\n") }]
      ] });

      /* Master Weekly Plan Adjustment Table */
      doc.push({ k: "h2", t: "Weekly Plan Adjustment & Progression Scheme (Weeks 1 to " + W + " Until Unit Completion)" });
      var adjRows = [
        [{ t: "Week", b: 1, c: 1 }, { t: "Weekly Focus / Subtopic", b: 1, c: 1 }, { t: "Weekly Plan Adjustment & Remedial Strategy", b: 1, c: 1 }]
      ];
      for (var w = 1; w <= W; w++) {
        var wFocus = "";
        if (w === 1) wFocus = heads[0] || "Foundations & Key Vocabulary";
        else if (w === 2) wFocus = heads[1] || "Core Developmental Skills & Principles";
        else if (w === 3 && W >= 4) wFocus = heads[2] || "Applied Investigations & Practice";
        else wFocus = "Consolidation, Remedial Review & Unit Assessment";
        var wAdj = weeklyAdjustment(w, W, adjMode, customAdjNote, t);
        adjRows.push([
          { t: "Week " + w, b: 1, c: 1 },
          { t: wFocus },
          { t: wAdj }
        ]);
      }
      doc.push({ k: "formtable", rows: adjRows });

      /* Week-by-Week Detailed Instructional Plan */
      for (var wk = 1; wk <= W; wk++) {
        var isLast = (wk === W);
        var subhead = "";
        if (wk === 1) subhead = heads[0] || "Foundations & Key Vocabulary";
        else if (wk === 2) subhead = heads[1] || "Core Developmental Skills & Guided Practice";
        else if (wk === 3 && W >= 4) subhead = heads[2] || "Applied Practice, Investigation & Case Study";
        else subhead = "Consolidation, Remedial Review & Unit Period Assessment";

        var wObjs = [];
        if (objs.length >= W) {
          var sIdx = Math.floor((wk - 1) * objs.length / W);
          var eIdx = Math.floor(wk * objs.length / W);
          wObjs = objs.slice(sIdx, Math.max(sIdx + 1, eIdx));
        } else {
          if (wk === 1) wObjs = [objs[0] || ("Identify foundational concepts and vocabulary of " + plain(t.title))];
          else if (wk === 2) wObjs = [objs[1] || objs[0] || ("Apply principles and solve practice problems in " + plain(t.title))];
          else if (wk === 3 && W >= 4) wObjs = [objs[2] || objs[1] || objs[0] || ("Investigate real-world applications in " + plain(t.title))];
          else wObjs = ["Synthesise all unit concepts, correct learning errors, and demonstrate mastery on the unit period assessment."];
        }

        doc.push({ k: "h2", t: "Week " + wk + " of " + W + ": " + subhead });

        var wAdjText = weeklyAdjustment(wk, W, adjMode, customAdjNote, t);
        doc.push({ k: "formtable", rows: [
          [{ t: "Week: " + wk + " of " + W + " (" + weeklyMin + " min / " + daysPerWeek + " periods)" }, { t: "Subtopic: " + subhead }],
          [{ t: "Weekly Objectives:\n" + wObjs.map(function (o, idx) { return (idx + 1) + ". " + o; }).join("\n") },
           { t: "Weekly Plan Adjustment & Remedial Strategy:\n\u2022 " + wAdjText }]
        ] });

        /* Classroom Procedures across the week */
        doc.push({ k: "h3", t: "Classroom Procedures & Activities across Week " + wk });
        var proc = [];
        if (wk === 1) {
          proc.push("Starter & Orientation (Days 1–2): Teacher introduces " + plain(t.title) + " and conducts diagnostic checks on prerequisite knowledge; writes key terms (" + (names.slice(0, 3).join(", ") || "core terms") + ") on the chalkboard.");
          proc.push("Developmental Instruction (Days 2–4): Teacher explains core concepts with textbook examples; pupils engage in choral repetition, vocabulary drills, and guided workbook exercises.");
          proc.push("Weekly Consolidation (Day " + daysPerWeek + "): Pupils review weekly terms in pairs; teacher administers weekly formative check and sets home assignment.");
        } else if (wk === 2) {
          proc.push("Review & Introduction (Day 1): Review Week 1 foundational concepts and check homework; teacher introduces developmental subtopic (" + subhead + ").");
          proc.push("Guided Practice & Group Work (Days 2–4): Teacher models step-by-step worked examples on the chalkboard; pupils work in mixed-ability pairs solving textbook drills while teacher corrects misconceptions.");
          proc.push("Weekly Formative Check (Day " + daysPerWeek + "): Oral quiz and formative written drill; teacher marks exercise books and assigns remedial practice.");
        } else if (wk === 3 && W >= 4) {
          proc.push("Advance Organiser (Day 1): Teacher connects previous skills to real-world applications and investigation tasks.");
          proc.push("Practical Exploration & Problem Solving (Days 2–4): Pupils work in small groups on case studies, practical investigations, or multi-step problem sets; group presentations at the board.");
          proc.push("Weekly Review (Day " + daysPerWeek + "): Synthesis of group findings; teacher highlights common errors and reviews assignment.");
        } else {
          proc.push("Comprehensive Unit Review (Days 1–2): Teacher reviews all instructional objectives of the unit (" + plain(t.title) + "); targeted remedial clinic for struggling pupils.");
          proc.push("Unit Period Assessment (Day 3/4): Teacher administers the unit evaluation / period test; pupils work independently.");
          proc.push("Post-Assessment Feedback & Reflection (Day " + daysPerWeek + "): Model answers shared on the chalkboard; pupils record corrections; teacher notes outcomes for the next unit (" + (next ? plain(next.title) : "Semester Review") + ").");
        }
        doc.push({ k: "num", items: proc });

        /* Evaluation for the week */
        var wEv = evAll.slice((wk - 1) % evAll.length, ((wk - 1) % evAll.length) + 2);
        if (!wEv.length && evAll.length) wEv = [evAll[0]];
        doc.push({ k: "h3", t: "Weekly Evaluation (Week " + wk + ")" });
        if (wEv.length) {
          doc.push({ k: "num", items: wEv.map(function (e) { return e.q; }) });
          doc.push({ k: "p", t: "Model answers (for the teacher):" });
          doc.push({ k: "num", items: wEv.map(function (e) { return e.a; }) });
        } else {
          doc.push({ k: "p", t: "The teacher administers three oral and written questions based on the week's objectives." });
        }

        /* Assignment for the week */
        doc.push({ k: "h3", t: "Weekly Assignment (Week " + wk + ")" });
        var wAsg = [];
        if (names.length && wk === 1) wAsg.push("Copy and define the key terms in your exercise book: " + names.slice(0, 4).join(", ") + ".");
        wAsg.push("Complete the weekly review exercises in the pupil workbook for " + subhead + ".");
        if (isLast) wAsg.push("Prepare for the marking period assessment: review all study notes for " + plain(t.title) + ".");
        else wAsg.push("Preview next week's subtopic and bring one written question to class.");
        doc.push({ k: "num", items: wAsg });

        if (wk < W) doc.push({ k: "rule" });
      }

      /* End-of-Unit Period Culmination */
      doc.push({ k: "h2", t: "End-of-Unit Culmination & Period Assessment (Unit Complete)" });
      doc.push({ k: "p", t: "The teacher completes the " + W + "-week unit on " + plain(t.title) + ". All instructional objectives have been taught, adjusted weekly for pupil pacing, evaluated through formative checks, and consolidated with the marking period assessment." });

      if (i < topics.length - 1) doc.push({ k: "pagebreak" });
    });

    return { blocks: doc, topics: topics };
  }

  /* ---------------- daily lesson plan builder (with weekly adjustment) ---------------- */
  function buildDailyPlan(opts, SRC, topics) {
    var r = rng(opts.seed || 1);
    var W = Math.max(1, Math.min(6, Math.round(+opts.lpWeeks || 4)));
    var D = Math.max(15, Math.min(240, Math.round(+opts.lpMin || 40)));
    var time = splitTime(D);
    var adjMode = opts.lpAdjMode || "standard";
    var customAdjNote = plain(opts.lpAdjNote);
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
        [{ t: "Duration: " + D + " minutes" }, { t: "Topic: " + plain(t.title) }],
        [{ t: "Unit Duration: " + W + " Weeks (Liberia Sector)" },
         { t: "Plan Scope: Daily Lesson Plan (Weekly Adjustments Applied)" }]
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

      /* ---- Weekly Plan Adjustment & Remedial Section across the 3 or 4 weeks ---- */
      var wAdjRows = [
        [{ t: "Week", b: 1, c: 1 }, { t: "Weekly Plan Adjustment & Remedial Pacing (" + W + " Weeks Total)", b: 1, c: 1 }]
      ];
      for (var w = 1; w <= W; w++) {
        wAdjRows.push([
          { t: "Week " + w, b: 1, c: 1 },
          { t: weeklyAdjustment(w, W, adjMode, customAdjNote, t) }
        ]);
      }
      doc.push({ k: "h3", t: "Weekly Plan Adjustment & Remedial Scheme (Unit Duration: " + W + " Weeks)" });
      doc.push({ k: "formtable", rows: wAdjRows });

      if (i < topics.length - 1) doc.push({ k: "pagebreak" });
    });

    return { blocks: doc, topics: topics };
  }

  /* ---------------- main dispatch ---------------- */
  function build(opts) {
    opts = opts || {};
    var SRC = opts.curriculum || [];
    var topics = SRC.filter(function (t) {
      return t.grade === opts.grade && (!opts.topics || opts.topics.indexOf(t.period) >= 0);
    });
    if (opts.lpPlanType === "weekly") {
      return buildWeeklyPlan(opts, SRC, topics);
    }
    return buildDailyPlan(opts, SRC, topics);
  }

  window.LESSON_PLAN = {
    build: build,
    splitTime: splitTime,
    weeklyAdjustment: weeklyAdjustment
  };
})();
