/* Offline teaching workspace. Content is stored as data, never editable HTML.
   Worksheet wrappers capture question/key pairs before the shared generators
   flatten them into printable blocks. The same compiled blocks feed PDF/Word. */
(function (root) {
  "use strict";
  var clone = function (v) { return JSON.parse(JSON.stringify(v)); };
  var api, state, captured = [], drafts = {}, dirty = false, selected = 0, activeTab = "library";
  var $ = function (s) { return document.querySelector(s); };
  function el(tag, text, cls) { var n = document.createElement(tag); if (text != null) n.textContent = text; if (cls) n.className = cls; return n; }
  function button(text, fn) { var b = el("button", text, "b2" + (/^(Save current|Build assessment|Apply |Add question|Start blank)/.test(text) ? " tw-primary" : "")); b.type = "button"; b.onclick = fn; return b; }
  function field(parent, label, value, multiline) {
    var l = el("label", label, "tw-field"), input = el(multiline ? "textarea" : "input");
    if (!multiline) input.type = "text";
    input.value = value == null ? "" : value; input.maxLength = multiline ? 12000 : 240;
    l.appendChild(input); parent.appendChild(l); return input;
  }
  function message(text, error) { var n = $("#twStatus"); if (n) { n.textContent = text; n.classList.toggle("error", !!error); } }
  function changed() { dirty = true; state.edited = true; api.redraw(); message("Changes applied to the preview and exports. Save to your teaching library to keep them."); }
  function rng(seed) { return function () { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; }; }
  function unnumber(s) { return String(s || "").replace(/^\s*\d+[.)]\s+/, ""); }
  function numbered(keys) { return keys.map(function (v, i) { return (i + 1) + ". " + v; }); }

  function wrap(engine) {
    Object.keys(engine.SHEETS).forEach(function (id) {
      var sheet = engine.SHEETS[id]; if (sheet._teachingWrapped) return;
      var original = sheet.fn; sheet._original = original; sheet._teachingWrapped = true;
      sheet.fn = function (topic, count, random) {
        var out = original.apply(this, arguments);
        if (out && out.blocks && out.blocks.length && out.key && out.key.length) {
          var gid = "worksheet-" + captured.length;
          out.blocks.forEach(function (b) { b._worksheet = gid; });
          out.key._worksheetKey = gid;
          var nums = out.blocks.filter(function (b) { return b.k === "num"; });
          // Only offer structural question edits when correspondence is unambiguous.
          var paired = !["cloze", "missing"].includes(id) && nums.length === 1 && nums[0].items.length === out.key.length &&
            out.key.every(function (k, i) { return new RegExp("^\\s*" + (i + 1) + "[.)]\\s").test(k); });
          captured.push({ id: gid, sheet: id, period: topic.period, grade: topic.grade,
            title: "Period " + topic.period + " · " + (out.blocks[0].t || sheet.label),
            blocks: clone(out.blocks), keys: paired ? out.key.map(unnumber) : clone(out.key), paired: paired, plainKeys: true, custom: false });
        }
        return out;
      };
    });
  }
  function begin(engine, signature) {
    captured = []; wrap(engine);
    if (signature && state && state.signature !== signature) { if (state.edited) drafts[state.signature] = state; state = drafts[signature] || null; selected = 0; }
  }
  function accept(pack, signature) {
    pack.blocks.forEach(function (b) { if (b.items && b.items._worksheetKey) b._worksheetKey = b.items._worksheetKey; });
    if (state && state.signature !== signature && state.edited) drafts[state.signature] = state;
    if (!state || state.signature !== signature) {
      state = drafts[signature] || { signature: signature, base: clone(pack.blocks), groups: clone(captured), assessment: null };
      selected = 0;
    }
    state.groups.forEach(function (g) { if (g.paired && !g.plainKeys) { if (!g.custom) g.keys = g.keys.map(unnumber); g.plainKeys = true; } });
    // Cover formatting is independent of content edits; always refresh the cover.
    var cut = pack.blocks.findIndex(function (b) { return b.k === "h3" && b.t === "Contents"; });
    var oldCut = state.base.findIndex(function (b) { return b.k === "h3" && b.t === "Contents"; });
    if (cut >= 0 && oldCut >= 0) state.base = clone(pack.blocks.slice(0, cut)).concat(state.base.slice(oldCut));
    return compile();
  }
  function groupBlocks(g) {
    var blocks = clone(g.blocks);
    if (g.paired && g.marks) {
      var num = blocks.find(function (b) { return b.k === "num"; });
      num.items = num.items.map(function (q, i) { return q + (g.marks[i] ? "   (" + g.marks[i] + " marks)" : ""); });
    }
    return blocks;
  }
  function assessmentBlocks(a, teacher) {
    var total = a.questions.reduce(function (n, q) { return n + q.marks; }, 0);
    var b = [{ k: "h1", t: a.title, per: "exam" },
      { k: "p", t: "Original practice assessment · " + api.subject().label + " · Grade " + api.options().grade },
      { k: "p", t: "Time: " + a.duration + " minutes · Total: " + total + " marks" },
      { k: "table", head: ["Name", "Class", "Date", "Score"], rows: [["", "Grade " + api.options().grade, "", "/ " + total]] },
      { k: "instr", t: a.instructions }];
    a.questions.forEach(function (q, i) {
      b.push({ k: "h3", t: "Question " + (i + 1) + " · " + q.type + " · " + q.marks + " mark" + (q.marks === 1 ? "" : "s") });
      b.push({ k: "p", t: q.question });
      if (q.type !== "Multiple choice" && q.type !== "True / false") b.push({ k: "lines", n: q.type === "Essay" ? 10 : 3 });
    });
    if (teacher) {
      b.push({ k: "pagebreak" }, { k: "h1", t: "ANSWER KEYS — TEACHER'S COPY", per: "keys" });
      a.questions.forEach(function (q, i) { b.push({ k: "h3", t: "Question " + (i + 1) + " · " + q.marks + " marks" + (q.level ? " · " + q.level : "") },
        { k: "p", t: q.answer }, { k: "p", t: "Marking guidance: " + q.rubric }); });
    }
    return b;
  }
  function compile() {
    if (!state) return [];
    var teacher = api.options().keys, seen = Object.create(null), out = [], keysStarted = false;
    if (state.assessment) {
      var cover = clone(state.base.filter(function (b) { return b._cover; }));
      // Backward-compatible with snapshots saved before cover blocks were tagged.
      if (!cover.length) { var first = state.base.find(function (b) { return b.k === "covart"; }); if (first) cover = [clone(first), { k: "pagebreak" }]; }
      return cover.concat(assessmentBlocks(state.assessment, teacher));
    }
    var groups = Object.create(null);
    state.groups.forEach(function (g) { groups[g.id] = g; });
    state.base.forEach(function (b) {
      if (b.per === "keys" || (b.k === "h1" && /^ANSWER KEYS/.test(b.t))) keysStarted = true;
      if (keysStarted && !teacher) return;
      if (b._worksheet && groups[b._worksheet]) {
        if (!seen[b._worksheet]) { out = out.concat(groupBlocks(groups[b._worksheet])); seen[b._worksheet] = true; }
      } else if (b._worksheetKey && groups[b._worksheetKey]) {
        var g = groups[b._worksheetKey]; out.push({ k: "bul", items: g.paired ? numbered(g.keys.map(function (k, i) { return k + (g.marks && g.marks[i] ? " (" + g.marks[i] + " marks)" : ""); })) : g.keys.slice() });
      } else {
        var c = clone(b);
        if (!teacher && c.k === "bul") c.items = c.items.filter(function (s) { return !/^Answer keys — for the teacher$/.test(s); });
        out.push(c);
      }
    });
    var custom = state.groups.filter(function (g) { return g.custom; });
    if (custom.length) {
      var keyIndex = out.findIndex(function (b) { return b.per === "keys"; });
      var extra = [{ k: "pagebreak" }, { k: "h2", t: "Teacher-written practice", per: "custom" }];
      custom.forEach(function (g) { extra = extra.concat(groupBlocks(g)); });
      if (keyIndex < 0) out = out.concat(extra); else out.splice.apply(out, [Math.max(0, keyIndex), 0].concat(extra, [{ k: "pagebreak" }]));
      if (teacher) {
        if (keyIndex < 0) out.push({ k: "pagebreak" }, { k: "h1", t: "ANSWER KEYS — TEACHER'S COPY", per: "keys" });
        custom.forEach(function (g) { out.push({ k: "h3", t: g.title }, { k: "bul", items: numbered(g.keys) }); });
      }
    }
    return out;
  }

  // IndexedDB leaves room for complete packs and uploaded artwork. No server/account.
  var dbPromise;
  function database() {
    if (!dbPromise) dbPromise = new Promise(function (resolve, reject) {
      var r = indexedDB.open("liberia-teaching-library", 1);
      r.onupgradeneeded = function () { r.result.createObjectStore("packs", { keyPath: "id" }); };
      r.onsuccess = function () { resolve(r.result); }; r.onerror = function () { reject(r.error); };
    });
    return dbPromise;
  }
  async function storage(action, value) {
    var db = await database();
    return new Promise(function (resolve, reject) {
      var tx = db.transaction("packs", action === "getAll" ? "readonly" : "readwrite");
      var r = tx.objectStore("packs")[action](value);
      tx.oncomplete = function () { resolve(r.result); };
      tx.onerror = tx.onabort = function () { reject(tx.error || new Error("Storage unavailable")); };
    });
  }
  function uid() { return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10); }
  function fail(e) { message("Could not complete that action: " + e.message + ". Your current preview is still available; export a backup if device storage is full or unavailable.", true); }
  function downloadJSON(value, name) {
    var url = URL.createObjectURL(new Blob([JSON.stringify(value)], { type: "application/json" }));
    var a = el("a"); a.href = url; a.download = name; a.click(); setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
  }
  function validate(record) {
    if (!record || record.version !== 1 || typeof record.name !== "string" || record.name.length > 240 || typeof record.folder !== "string" || record.folder.length > 240 || typeof record.updated !== "string" || !Number.isFinite(Date.parse(record.updated)) ||
        !record.settings || !api.hasSubject(record.settings.subject) || !record.state ||
        typeof record.state.signature !== "string" || !Array.isArray(record.state.base) || !Array.isArray(record.state.groups)) throw new Error("Invalid teaching-library file");
    var total = 0;
    function walk(v, depth) {
      if (++total > 250000 || depth > 30) throw new Error("Backup is too complex");
      if (typeof v === "string" && v.length > 3000000) throw new Error("Backup field is too large");
      if (v && typeof v === "object") Object.keys(v).forEach(function (k) {
        if (["__proto__", "prototype", "constructor"].indexOf(k) >= 0) throw new Error("Unsafe backup field");
        if (["url", "bg", "logo"].indexOf(k) >= 0 && typeof v[k] === "string" && v[k] && !/^data:image\/(png|jpeg);base64,[A-Za-z0-9+/=]+$/.test(v[k])) throw new Error("Backup images must be embedded PNG or JPEG data");
        walk(v[k], depth + 1);
      });
    }
    walk(record, 0);
    function text(s) { return typeof s === "string" && s.length <= 12000; }
    function strings(a) { return Array.isArray(a) && a.length <= 2000 && a.every(text); }
    function block(b) {
      if (!b || typeof b.k !== "string") return false;
      if (["h1", "h2", "h3", "p", "instr"].includes(b.k)) return text(b.t);
      if (["bul", "num"].includes(b.k)) return strings(b.items) && (b.start == null || Number.isInteger(b.start) && b.start > 0);
      if (b.k === "cols") return strings(b.a) && strings(b.b);
      if (b.k === "table") return strings(b.head) && b.head.length > 0 && Array.isArray(b.rows) && b.rows.every(strings);
      if (b.k === "formtable") return Array.isArray(b.rows) && b.rows.every(function (r) { return Array.isArray(r) && r.every(function (c) { return text(c) || c && text(c.t); }); });
      if (b.k === "covart") return text(b.title1) && text(b.title2) && (!b.labels || Object.values(b.labels).every(text));
      if (b.k === "lines") return Number.isInteger(b.n) && b.n >= 0 && b.n <= 100;
      return ["space", "rule", "pagebreak"].includes(b.k);
    }
    if (!record.state.base.every(block) || !record.state.groups.every(function (g) {
      return g && text(g.id) && /^(worksheet-\d+|custom-[a-z0-9-]+)$/.test(g.id) && (!g.marks || Array.isArray(g.marks) && g.marks.length === g.keys.length && g.marks.every(function (n) { return Number.isInteger(n) && n >= 0 && n <= 100; })) && text(g.title) && Array.isArray(g.blocks) && g.blocks.every(block) && strings(g.keys) &&
        (!g.paired || g.blocks.filter(function (b) { return b.k === "num"; }).length === 1 && g.blocks.find(function (b) { return b.k === "num"; }).items.length === g.keys.length);
    })) throw new Error("Invalid document blocks in backup");
    var a = record.state.assessment;
    if (a && (!text(a.title) || !text(a.instructions) || !Number.isInteger(a.duration) || a.duration < 1 || a.duration > 600 ||
      !Array.isArray(a.questions) || a.questions.length < 1 || a.questions.length > 100 || !a.questions.every(function (q) { return text(q.question) && text(q.answer) && text(q.rubric) && text(q.type) && (!q.level || ["Recall", "Understanding", "Application"].includes(q.level)) && Number.isInteger(q.marks) && q.marks > 0 && q.marks <= 100; }))) throw new Error("Invalid assessment in backup");
    api.validateSettings(record.settings);
    return record;
  }
  async function libraryUI(box) {
    if (!api.options().teacher) { box.appendChild(el("p", "Switch to Teacher session to manage the teaching library. Library backups can contain answer keys and are not for pupil distribution.")); return; }
    box.appendChild(el("p", "Keep complete packs, edited questions and lesson plans on this device. Back up regularly: clearing browser data removes the library.", "hint"));
    var name = field(box, "Pack or lesson-plan name", api.subject().label + " · Grade " + api.options().grade);
    var className = field(box, "Class / term (for organization)", api.cover().classname + " / " + api.cover().term);
    box.appendChild(button("Save current document", async function () {
      if (!name.value.trim()) return message("Give this document a name.", true);
      try {
        var record = { version: 1, id: uid(), name: name.value.trim(), folder: className.value.trim(), updated: new Date().toISOString(), settings: api.settings(), state: clone(state) };
        await storage("put", record); dirty = false; show("library"); message("Saved on this device. Use Export backup to move your library to another device.");
      } catch (e) { fail(e); }
    }));
    var tools = el("div", null, "tw-actions"); box.appendChild(tools);
    tools.appendChild(button("Export library backup", async function () {
      try { downloadJSON({ format: "liberia-teaching-library", version: 1, records: await storage("getAll") }, "Teaching-library-backup.json"); } catch (e) { fail(e); }
    }));
    tools.appendChild(button("Export current document backup", function () {
      downloadJSON({ format: "liberia-teaching-library", version: 1, records: [{ version: 1, id: uid(), name: name.value.trim() || "Teaching document", folder: className.value, updated: new Date().toISOString(), settings: api.settings(), state: clone(state) }] }, "Teaching-document.json");
    }));
    var upload = field(box, "Import backup (.json, maximum 25 MB)", ""); upload.type = "file"; upload.accept = ".json,application/json";
    upload.onchange = async function () {
      var f = upload.files[0]; if (!f) return;
      try {
        if (f.size > 25 * 1024 * 1024) throw new Error("Backup is larger than 25 MB");
        var data = JSON.parse(await f.text());
        if (data.format !== "liberia-teaching-library" || data.version !== 1 || !Array.isArray(data.records) || data.records.length > 100) throw new Error("Unsupported backup format");
        data.records.forEach(validate); // Validate all records before writing any.
        var db = await database();
        await new Promise(function (resolve, reject) {
          var tx = db.transaction("packs", "readwrite");
          data.records.forEach(function (r) { r.id = uid(); tx.objectStore("packs").put(r); });
          tx.oncomplete = resolve; tx.onerror = tx.onabort = function () { reject(tx.error); };
        });
        show("library"); message("Imported " + data.records.length + " document(s). Existing documents were not overwritten.");
      } catch (e) { fail(e); }
    };
    var search = field(box, "Search by name, class, term or subject", ""); search.type = "search";
    var list = el("div", null, "tw-library"); box.appendChild(list);
    try {
      var records = await storage("getAll");
      function paint() {
        list.replaceChildren(); var query = search.value.toLowerCase();
        var matches = records.filter(function (r) { return (r.name + " " + r.folder + " " + api.subjectLabel(r.settings.subject) + " Grade " + r.settings.controls.grade).toLowerCase().includes(query); });
        if (!matches.length) list.appendChild(el("p", "No saved documents found. Save your first document above.", "hint"));
        matches.sort(function (a, b) { return b.updated.localeCompare(a.updated); }).forEach(function (r) {
          var card = el("article", null, "tw-card"); card.appendChild(el("h3", r.name));
          card.appendChild(el("p", api.subjectLabel(r.settings.subject) + " · Grade " + r.settings.controls.grade + " · " + (r.folder || "") + " · " + (r.state.assessment ? "Assessment" : r.settings.dtype === "lp" ? "Lesson plan" : "Course pack") + " · " + new Date(r.updated).toLocaleDateString(), "hint"));
          var actions = el("div", null, "tw-actions");
          actions.appendChild(button("Open", function () {
            try { validate(r); if (dirty && !confirm("Open this saved document? Unsaved changes to the current document will be replaced.")) return;
              state = clone(r.state); drafts = {}; dirty = false; api.restore(clone(r.settings)); close(); message("Opened “" + r.name + "”. Save again to keep a revised copy.");
            } catch (e) { fail(e); }
          }));
          actions.appendChild(button("Duplicate", async function () { try { var copy = clone(r); copy.id = uid(); copy.name = (copy.name + " (copy)").slice(0, 240); copy.updated = new Date().toISOString(); await storage("put", copy); show("library"); } catch (e) { fail(e); } }));
          actions.appendChild(button("Rename", async function () { var n = prompt("Document name", r.name); if (!n || !n.trim()) return; try { r.name = n.trim().slice(0, 240); await storage("put", r); show("library"); } catch (e) { fail(e); } }));
          actions.appendChild(button("Delete", async function () { if (!confirm("Delete “" + r.name + "” from this device?")) return; try { await storage("delete", r.id); show("library"); } catch (e) { fail(e); } }));
          card.appendChild(actions); list.appendChild(card);
        });
      }
      search.oninput = paint; paint();
    } catch (e) { fail(e); }
  }
  function numeric(parent, label, value, min, max) { var n = field(parent, label, value); n.type = "number"; n.min = min; n.max = max; n.step = "1"; return n; }
  function selectField(parent, label, values, value) {
    var l = el("label", label, "tw-field"), s = el("select");
    values.forEach(function (v) { var o = el("option", v.label || v); o.value = v.value == null ? v : v.value; s.appendChild(o); });
    s.value = value; l.appendChild(s); parent.appendChild(l); return s;
  }
  function editorUI(box) {
    if (!api.options().teacher) { box.appendChild(el("p", "Switch to Teacher session to edit questions and their answer keys.")); return; }
    if (state.assessment) { box.appendChild(el("p", "Your assessment has its own question and marking-scheme editor.")); box.appendChild(button("Edit assessment", function () { show("assessment"); })); return; }
    if (api.options().dtype === "lp") { box.appendChild(el("p", "Save and reopen lesson plans in the library. The question editor is for course-pack worksheets; lesson-plan wording can also be edited after Word export.")); return; }
    box.appendChild(el("p", "Edit worksheet questions and their matching keys. Changes survive cover/session changes and are included in Word and print. For a custom marked test, use Assessment builder.", "hint"));
    box.appendChild(button("Add teacher-written worksheet", function () {
      var id = "custom-" + uid(); state.groups.push({ id: id, custom: true, paired: true, plainKeys: true, title: "Teacher-written questions", blocks: [{ k: "h3", t: "Teacher-written questions" }, { k: "num", items: ["Write your question here."] }], keys: ["Write the expected answer and marking guidance here."] });
      selected = state.groups.length - 1; changed(); show("editor");
    }));
    if (!state.groups.length) { box.appendChild(el("p", "No editable worksheets in this selection. Choose exercise types and generate a pack, or add your own worksheet.")); return; }
    selected = Math.min(selected, state.groups.length - 1);
    var chooser = selectField(box, "Worksheet", state.groups.map(function (g, i) { return { value: i, label: g.title }; }), selected);
    chooser.onchange = function () { selected = +chooser.value; show("editor"); };
    var g = state.groups[selected];
    if (g.paired) {
      var nums = g.blocks.find(function (b) { return b.k === "num"; });
      if (!g.marks) g.marks = nums.items.map(function () { return 0; });
      var shared = el("details"); shared.appendChild(el("summary", "Edit worksheet heading, directions and shared passage"));
      var sharedEdits = [];
      g.blocks.forEach(function (b) { if (typeof b.t === "string") { var input = field(shared, b.k === "h3" ? "Worksheet heading" : "Shared " + b.k + " text", b.t, true); sharedEdits.push(function () { b.t = input.value; }); } });
      shared.appendChild(button("Apply shared text", function () { sharedEdits.forEach(function (f) { f(); }); changed(); })); box.appendChild(shared);
      nums.items.forEach(function (q, i) {
        var card = el("article", null, "tw-card"); card.appendChild(el("h3", "Question " + (i + 1)));
        var question = field(card, "Question wording (include options or marks if needed)", q, true);
        var answer = field(card, "Answer and marking guidance", g.keys[i], true);
        var marks = numeric(card, "Question marks (0 = unmarked practice)", g.marks[i] || 0, 0, 100);
        var actions = el("div", null, "tw-actions");
        actions.appendChild(button("Apply question", function () {
          if (!question.value.trim() || !answer.value.trim() || !marks.value || !marks.checkValidity()) return message("Both a question and its answer, plus valid marks, are required.", true);
          g.marks[i] = +marks.value;
          nums.items[i] = question.value.trim(); g.keys[i] = answer.value.trim(); changed();
        }));
        function move(to) { if (to < 0 || to >= nums.items.length) return; var q = nums.items.splice(i, 1)[0], a = g.keys.splice(i, 1)[0], m = g.marks.splice(i, 1)[0]; nums.items.splice(to, 0, q); g.keys.splice(to, 0, a); g.marks.splice(to, 0, m); changed(); show("editor"); }
        var up = button("Move up", function () { move(i - 1); }); up.disabled = i === 0; actions.appendChild(up);
        var down = button("Move down", function () { move(i + 1); }); down.disabled = i === nums.items.length - 1; actions.appendChild(down);
        if (!g.custom) actions.appendChild(button("Replace this question", function () {
          var t = api.subject().curriculum().find(function (t) { return t.grade === g.grade && t.period === g.period; });
          var s = api.subject().engine().SHEETS[g.sheet], candidate, found;
          for (var attempt = 0; attempt < 15 && !found; attempt++) {
            candidate = s._original(t, Math.max(8, nums.items.length), rng((Date.now() + attempt * 953) >>> 0));
            var nb = candidate && candidate.blocks.filter(function (b) { return b.k === "num"; });
            if (nb && nb.length === 1 && nb[0].items.length === candidate.key.length) {
              var j = nb[0].items.findIndex(function (v) { return !nums.items.includes(v); });
              if (j >= 0) { nums.items[i] = nb[0].items[j]; g.keys[i] = unnumber(candidate.key[j]); found = true; }
            }
          }
          if (!found) return message("No unused alternative is available for this worksheet. Edit the wording or add your own question.");
          changed(); show("editor");
        }));
        actions.appendChild(button("Remove", function () { if (nums.items.length === 1) return message("Keep at least one question in the worksheet.", true); if (!confirm("Remove this question and its answer?")) return; nums.items.splice(i, 1); g.keys.splice(i, 1); g.marks.splice(i, 1); changed(); show("editor"); }));
        card.appendChild(actions); box.appendChild(card);
      });
      box.appendChild(button("Add question and answer", function () { nums.items.push("Write your question here."); g.keys.push("Write the expected answer and marking guidance here."); g.marks.push(0); changed(); show("editor"); }));
    } else {
      box.appendChild(el("p", "This worksheet has a shared word bank, table, passage or rubric. Edit its content and companion answer key together; automatic question reordering is disabled to protect their correspondence.", "hint"));
      var edits = [];
      g.blocks.forEach(function (b, bi) {
        function bind(obj, key, label) { var input = field(box, label, obj[key], true); edits.push(function () { obj[key] = input.value; }); }
        if (typeof b.t === "string") bind(b, "t", "Block " + (bi + 1) + " · " + b.k);
        ["items", "head", "a", "b"].forEach(function (key) { if (Array.isArray(b[key])) b[key].forEach(function (v, i) { bind(b[key], i, "Block " + (bi + 1) + " · " + key + " " + (i + 1)); }); });
        if (b.rows) b.rows.forEach(function (r, ri) { r.forEach(function (v, ci) { bind(r, ci, "Row " + (ri + 1) + ", column " + (ci + 1)); }); });
      });
      g.keys.forEach(function (k, i) { var input = field(box, "Answer / rubric " + (i + 1), k, true); edits.push(function () { g.keys[i] = input.value; }); });
      box.appendChild(button("Apply worksheet and answer key", function () { edits.forEach(function (f) { f(); }); changed(); }));
    }
  }

  var TYPES = ["Multiple choice", "True / false", "Short answer", "Essay"];
  function poolFor(topics) {
    var pool = [];
    topics.forEach(function (t) {
      var topic = t.title || t.fr;
      var terms = t.terms || (t.words || []).map(function (v) { return { t: v.w, d: v.d }; });
      terms.forEach(function (v, i) {
        if (!v.t || !v.d) return;
        var distractors = terms.filter(function (x) { return x.d && x.d !== v.d; }).map(function (x) { return x.d; }).filter(function (s, j, a) { return a.indexOf(s) === j; }).slice(0, 3);
        if (distractors.length === 3) {
          var choices = distractors.slice(), pos = i % 4; choices.splice(pos, 0, v.d);
          pool.push({ type: TYPES[0], level: "Recall", topic: topic, question: "What does “" + v.t + "” mean?\n" + choices.map(function (c, j) { return "ABCD"[j] + ". " + c; }).join("\n"), answer: "ABCD"[pos] + ". " + v.d, rubric: "Award the mark for the correct option." });
        }
        pool.push({ type: TYPES[2], level: "Understanding", topic: topic, question: "Explain the meaning of “" + v.t + "”.", answer: v.d, rubric: "Award credit for the correct meaning, accepting equivalent wording. Allocate partial credit to each essential idea before administering the test." });
      });
      (t.tf || []).forEach(function (v) { if (v.s && v.a != null) pool.push({ type: TYPES[1], level: "Recall", topic: topic, question: v.s + " True or false?", answer: String(v.a) + (v.why ? " — " + v.why : ""), rubric: "Award the mark for the correct True/False response." }); });
      ["facts", "apply", "debate"].forEach(function (key) {
        (Array.isArray(t[key]) ? t[key] : []).forEach(function (v) { if (v.q && v.a) pool.push({ type: key === "debate" ? TYPES[3] : TYPES[2], level: key === "facts" ? "Understanding" : "Application", topic: topic, question: v.q, answer: String(v.a), rubric: key === "debate" ? "Suggested rubric: accurate content 40%; supporting reasons/examples 40%; organization and clarity 20%. Convert these to whole marks before use." : "Accept equivalent correct reasoning. Set partial-credit points for the essential ideas before use." }); });
      });
      (t.mcq || []).forEach(function (v) {
        if (v.q && Array.isArray(v.o) && Number.isInteger(v.a) && v.a >= 0 && v.a < v.o.length) {
          pool.push({ type: TYPES[0], level: "Application", topic: topic, question: v.q + "\n" + v.o.map(function (x, i) { return "ABCD"[i] + ". " + x; }).join("\n"),
            answer: "ABCD"[v.a] + ". " + v.o[v.a] + (v.why ? " — " + v.why : ""), rubric: "Award the mark for the correct option." });
        }
      });
      (t.essay || []).forEach(function (v) {
        if (v.q && Array.isArray(v.outline) && v.outline.length) pool.push({ type: TYPES[3], level: "Application", topic: topic, question: v.q,
          answer: v.outline.join("\n"), rubric: "Allocate marks to the model-response points before administering the paper. Accept equivalent correct explanations and supporting examples." });
      });
    });
    return pool.filter(function (q, i, a) { return a.findIndex(function (x) { return x.question === q.question; }) === i; });
  }
  function assessmentUI(box) {
    if (!api.options().teacher || api.options().dtype === "lp") { box.appendChild(el("p", "Choose Teacher session and Course pack to build an assessment.")); return; }
    box.appendChild(el("p", "Build an original practice test from selected curriculum topics, then review every question and its marking scheme. Totals always follow the actual questions. This is not an official WAEC past paper.", "hint"));
    var a = state.assessment;
    if (!a) {
      var title = field(box, "Assessment title", api.subject().label + " · Practice assessment");
      var duration = numeric(box, "Duration (minutes)", 60, 1, 600);
      var target = numeric(box, "Target total marks", 20, 1, 1000);
      var topics = api.subject().curriculum().filter(function (t) { return t.grade === api.options().grade; });
      var topicBox = el("fieldset"); topicBox.appendChild(el("legend", "Topics to assess")); box.appendChild(topicBox);
      var topicChecks = topics.map(function (t) { var l = el("label", null, "chk"), c = el("input"); c.type = "checkbox"; c.checked = !api.options().topics || api.options().topics.includes(t.period); l.append(c, el("span", "Period " + t.period + " · " + (t.title || t.fr))); topicBox.appendChild(l); return c; });
      box.appendChild(el("p", "Thinking levels are suggested classifications, not official examination weightings. Review and adjust them for your learners.", "hint"));
      var rows = [];
      TYPES.forEach(function (type, i) { var row = el("div", null, "tw-grid"); row.appendChild(el("strong", type)); var count = numeric(row, "Number of questions", i < 2 ? 5 : i === 2 ? 5 : 0, 0, 50); var marks = numeric(row, "Marks each", i < 2 ? 1 : i === 2 ? 2 : 10, 1, 100); var level = selectField(row, "Thinking level", ["Any", "Recall", "Understanding", "Application"], "Any"); rows.push({ type: type, count: count, marks: marks, level: level }); box.appendChild(row); });
      var summary = el("p", "", "tw-total"); box.appendChild(summary);
      function sum() { var total = rows.reduce(function (n, r) { return n + (+r.count.value * +r.marks.value); }, 0); summary.textContent = "Blueprint: " + total + " marks / target " + target.value; return total; }
      rows.forEach(function (r) { r.count.oninput = r.marks.oninput = sum; }); target.oninput = sum; sum();
      box.appendChild(button("Build assessment", function () {
        if (![duration, target].concat(rows.flatMap(function (r) { return [r.count, r.marks]; })).every(function (n) { return n.value !== "" && n.checkValidity(); })) return message("Use whole numbers within the displayed limits.", true);
        if (!title.value.trim() || sum() !== +target.value) return message("Enter a title and match the blueprint marks to your target.", true);
        var chosen = topics.filter(function (t, i) { return topicChecks[i].checked; });
        if (!chosen.length) return message("Select at least one topic.", true);
        var pool = poolFor(chosen), random = rng(api.options().seed), questions = [];
        for (var i = 0; i < rows.length; i++) {
          var r = rows[i], available = pool.filter(function (q) { return q.type === r.type && (r.level.value === "Any" || q.level === r.level.value); });
          for (var j = available.length - 1; j > 0; j--) { var k = Math.floor(random() * (j + 1)), temp = available[j]; available[j] = available[k]; available[k] = temp; }
          if (available.length < +r.count.value) return message(r.type + ": only " + available.length + " unique questions available in these topics. Lower the count, select more topics, or start a blank assessment and add your own.", true);
          available.slice(0, +r.count.value).forEach(function (q) { q = clone(q); q.marks = +r.marks.value; questions.push(q); });
        }
        if (!questions.length || questions.length > 100) return message("Choose between 1 and 100 questions.", true);
        state.assessment = { title: title.value.trim(), duration: +duration.value, instructions: "Answer all questions. Marks are shown beside each question.", questions: questions };
        changed(); show("assessment");
      }));
      box.appendChild(button("Start blank assessment", function () {
        if (!duration.checkValidity() || !title.value.trim()) return message("Enter a title and a valid duration.", true);
        state.assessment = { title: title.value.trim(), duration: +duration.value, instructions: "Answer all questions. Marks are shown beside each question.", questions: [{ type: TYPES[2], question: "Write your question here.", answer: "Write the expected answer here.", marks: 2, rubric: "State how each mark is earned." }] }; changed(); show("assessment");
      }));
      return;
    }
    var heading = field(box, "Assessment title", a.title), minutes = numeric(box, "Duration (minutes)", a.duration, 1, 600), instructions = field(box, "Instructions", a.instructions, true);
    box.appendChild(button("Apply assessment details", function () { if (!heading.value.trim() || !minutes.value || !minutes.checkValidity()) return message("Enter a title and valid duration.", true); a.title = heading.value.trim(); a.duration = +minutes.value; a.instructions = instructions.value; changed(); }));
    box.appendChild(el("p", a.questions.length + " questions · " + a.questions.reduce(function (n, q) { return n + q.marks; }, 0) + " total marks", "tw-total"));
    a.questions.forEach(function (q, i) {
      var card = el("article", null, "tw-card"); card.appendChild(el("h3", "Question " + (i + 1) + (q.topic ? " · " + q.topic : "")));
      var type = selectField(card, "Question type", TYPES, q.type), level = selectField(card, "Thinking level", ["Recall", "Understanding", "Application"], q.level || "Understanding"), marks = numeric(card, "Marks", q.marks, 1, 100);
      var question = field(card, "Question (include all answer options for multiple choice)", q.question, true), answer = field(card, "Expected answer / model response", q.answer, true), rubric = field(card, "Marking scheme / partial-credit rubric", q.rubric, true);
      var actions = el("div", null, "tw-actions");
      actions.appendChild(button("Apply question", function () { if (!marks.value || !marks.checkValidity() || !question.value.trim() || !answer.value.trim() || !rubric.value.trim()) return message("Complete question, answer, marking guidance and valid marks.", true); Object.assign(q, { type: type.value, level: level.value, marks: +marks.value, question: question.value.trim(), answer: answer.value.trim(), rubric: rubric.value.trim() }); changed(); show("assessment"); }));
      ["Move up", "Move down"].forEach(function (label, dir) { var to = i + (dir ? 1 : -1); var b = button(label, function () { a.questions.splice(to, 0, a.questions.splice(i, 1)[0]); changed(); show("assessment"); }); b.disabled = to < 0 || to >= a.questions.length; actions.appendChild(b); });
      actions.appendChild(button("Remove", function () { if (a.questions.length === 1) return message("Keep at least one question.", true); if (!confirm("Remove question and marking scheme?")) return; a.questions.splice(i, 1); changed(); show("assessment"); }));
      card.appendChild(actions); box.appendChild(card);
    });
    box.appendChild(button("Add question", function () { if (a.questions.length >= 100) return message("Maximum 100 questions.", true); a.questions.push({ type: TYPES[2], question: "Write your question here.", answer: "Write the expected answer here.", marks: 2, rubric: "State how each mark is earned." }); changed(); show("assessment"); }));
    box.appendChild(button("Return to course pack", function () { if (!confirm("Discard this assessment and return to the underlying course pack? Save it to the library first if you want to keep it.")) return; state.assessment = null; changed(); show("assessment"); }));
  }
  var returnFocus;
  function show(tab) {
    activeTab = tab; var modal = $("#teachingDialog");
    if (!modal.open) { returnFocus = document.activeElement; modal.showModal(); }
    $("#twTitle").textContent = { library: "Teaching library", editor: "Question editor", assessment: "Assessment builder" }[tab];
    document.querySelectorAll("[data-tw-tab]").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.twTab === tab ? "true" : "false"); });
    var box = $("#twBody"); box.replaceChildren();
    if (tab === "library") libraryUI(box); else if (tab === "editor") editorUI(box); else assessmentUI(box);
    modal.scrollTop = 0;
  }
  function close() { $("#teachingDialog").close(); if (returnFocus) returnFocus.focus(); }
  function init(adapter) {
    api = adapter;
    $("#twClose").onclick = close;
    document.querySelectorAll("[data-tw-open]").forEach(function (b) { b.onclick = function () { show(b.dataset.twOpen); }; });
    document.querySelectorAll("[data-tw-tab]").forEach(function (b) { b.onclick = function () { show(b.dataset.twTab); }; });
    root.addEventListener("beforeunload", function (e) { if (dirty) { e.preventDefault(); e.returnValue = ""; } });
  }
  root.TEACHING = { init: init, begin: begin, accept: accept, compile: compile, validate: validate,
    poolFor: poolFor, assessmentBlocks: assessmentBlocks, assessmentInfo: function () { if (!state || !state.assessment) return ""; var a = state.assessment; return a.title + " · " + a.questions.length + " questions · " + a.questions.reduce(function (n, q) { return n + q.marks; }, 0) + " marks · " + a.duration + " minutes"; }, isAssessment: function () { return !!(state && state.assessment); } };
})(window);
