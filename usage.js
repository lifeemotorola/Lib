/* ============================================================
   usage.js — optional, on-device usage counting.

   WHY THIS EXISTS
   ---------------
   The platform works offline and sends nothing anywhere. That is the right
   default for a classroom, but it also means the owner cannot show a buyer,
   a ministry or a donor *any* evidence that the platform is used. This module
   closes that gap without giving up the privacy promise:

     - counting is OFF until the visitor switches it on,
     - the counters live in this browser's localStorage only,
     - there is no network call in this file — none, ever,
     - a report leaves the device only when somebody clicks
       "Export usage report", which downloads a plain .json file.

   So the numbers can be quoted in a tender, a pilot report or a sale
   memorandum, and no pupil, teacher or school is ever tracked online.
   ============================================================ */
(function () {
  "use strict";

  var KEY = "platformUsage.v1";
  var MAX_DAYS = 400;          /* keep storage small: about 13 months of days */
  var MAX_SUBJECTS = 200;

  /* The only events counted. Anything else is ignored, so a corrupt or
     hand-edited file cannot smuggle in unexpected fields. */
  var EVENTS = [
    "session",          /* the platform was opened */
    "generate_pack",    /* a course pack was generated */
    "generate_plan",    /* a lesson / weekly plan was generated */
    "export_docx",      /* a Word file was produced */
    "print",            /* Print / PDF was used */
    "save_library",     /* a document was saved to the teaching library */
    "assessment"        /* an assessment was built */
  ];

  var LABELS = {
    session: "Platform opened",
    generate_pack: "Course packs generated",
    generate_plan: "Lesson / weekly plans generated",
    export_docx: "Word (.docx) files exported",
    print: "Print / PDF runs",
    save_library: "Documents saved to the library",
    assessment: "Assessments built"
  };

  var state = null;

  function today() {
    try { return new Date().toISOString().slice(0, 10); } catch (e) { return "unknown"; }
  }
  function num(v) { return (typeof v === "number" && isFinite(v) && v >= 0) ? Math.floor(v) : 0; }
  function blank() {
    return { v: 1, enabled: false, org: "", since: today(), updated: null, counts: {}, days: {}, subjects: {} };
  }

  /* Read the stored counters, repairing anything that is missing or the wrong
     shape. A bad file must never break the platform, so every read is guarded
     and a failure falls back to an empty record. */
  function normalise(raw) {
    var out = blank();
    if (!raw || typeof raw !== "object") return out;
    out.enabled = raw.enabled === true;
    out.org = (typeof raw.org === "string") ? raw.org.slice(0, 120) : "";
    out.since = (typeof raw.since === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw.since)) ? raw.since : today();
    out.updated = (typeof raw.updated === "string") ? raw.updated.slice(0, 40) : null;

    if (raw.counts && typeof raw.counts === "object") {
      EVENTS.forEach(function (k) { if (raw.counts[k] !== undefined) out.counts[k] = num(raw.counts[k]); });
    }
    if (raw.days && typeof raw.days === "object") {
      Object.keys(raw.days).forEach(function (d) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) return;
        var day = {};
        var src = raw.days[d];
        if (typeof src === "number") { day.generate_pack = num(src); }
        else if (src && typeof src === "object") {
          EVENTS.forEach(function (k) { if (src[k] !== undefined) day[k] = num(src[k]); });
        }
        if (Object.keys(day).length) out.days[d] = day;
      });
      /* prune to the newest MAX_DAYS entries */
      var keys = Object.keys(out.days).sort();
      if (keys.length > MAX_DAYS) {
        keys.slice(0, keys.length - MAX_DAYS).forEach(function (k) { delete out.days[k]; });
      }
    }
    if (raw.subjects && typeof raw.subjects === "object") {
      Object.keys(raw.subjects).slice(0, MAX_SUBJECTS).forEach(function (s) {
        var src = raw.subjects[s];
        if (!src || typeof src !== "object") return;
        var per = {};
        EVENTS.forEach(function (k) { if (src[k] !== undefined) per[k] = num(src[k]); });
        if (Object.keys(per).length) out.subjects[String(s).slice(0, 40)] = per;
      });
    }
    return out;
  }

  function load() {
    if (state) return state;
    var raw = null;
    try { raw = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) { raw = null; }
    state = normalise(raw);
    return state;
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* full or blocked storage: counting quietly stops */ }
  }

  function bump(map, key, by) {
    map[key] = num(map[key]) + (by || 1);
  }

  /* ---------------------------------------------------------------
     track(name, meta) — the single entry point used by the platform.
     meta is optional and is only ever aggregated (subject id, grade
     band, session). No free text, no names, no document content.
     --------------------------------------------------------------- */
  function track(name, meta) {
    var s = load();
    if (!s.enabled) return false;
    if (EVENTS.indexOf(name) < 0) return false;
    var d = today();
    bump(s.counts, name);
    if (!s.days[d]) s.days[d] = {};
    bump(s.days[d], name);
    if (meta && typeof meta === "object") {
      var sub = meta.subject;
      if (typeof sub === "string" && sub) {
        sub = sub.slice(0, 40);
        if (!s.subjects[sub]) s.subjects[sub] = {};
        bump(s.subjects[sub], name);
      }
    }
    s.updated = new Date().toISOString();
    save();
    return true;
  }

  /* One "platform opened" per page load, counted only when counting is on. */
  function markSession() {
    var s = load();
    if (!s.enabled) return false;
    if (sessionStorage.getItem(KEY + ".session") === "1") return false;
    try { sessionStorage.setItem(KEY + ".session", "1"); } catch (e) { /* ignore */ }
    return track("session");
  }

  function total() {
    var s = load(), n = 0;
    EVENTS.forEach(function (k) { n += num(s.counts[k]); });
    return n;
  }

  /* Everything a pilot report needs, and nothing it does not. */
  function report() {
    var s = load();
    var counts = {};
    var worked = 0;
    EVENTS.forEach(function (k) {
      counts[k] = num(s.counts[k]);
      if (k !== "session") worked += counts[k];
    });
    var days = Object.keys(s.days).sort().map(function (d) {
      return { day: d, counts: s.days[d] };
    });
    var subjects = Object.keys(s.subjects).sort().map(function (id) {
      return { subject: id, counts: s.subjects[id] };
    });
    return {
      kind: "liberia-packs-usage",
      version: 1,
      organisation: s.org || null,
      counting_enabled: s.enabled,
      first_counted_day: s.since,
      last_event_at: s.updated,
      generated_at: new Date().toISOString(),
      totals: counts,
      documents_produced: worked,
      by_day: days,
      by_subject: subjects,
      privacy: "Counts are stored in this browser only. No data is uploaded by the platform."
    };
  }

  function filename() {
    var s = load();
    var org = (s.org || "").trim().replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return "usage-report" + (org ? "-" + org : "") + "-" + today() + ".json";
  }

  /* Download the report as a file. Deliberately the only way data leaves. */
  function exportFile() {
    var text = JSON.stringify(report(), null, 2);
    var blob = new Blob([text], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
    return text;
  }

  function reset() {
    state = blank();
    try { sessionStorage.removeItem(KEY + ".session"); } catch (e) { /* ignore */ }
    save();
  }

  function setEnabled(on) {
    var s = load();
    s.enabled = on === true;
    if (s.enabled && !s.since) s.since = today();
    save();
    return s.enabled;
  }

  function setOrg(name) {
    var s = load();
    s.org = (typeof name === "string") ? name.slice(0, 120) : "";
    save();
    return s.org;
  }

  /* Small human-readable block for the settings panel. */
  function summaryHTML() {
    var s = load();
    if (!s.enabled) {
      return '<p class="usg-off">Counting is <b>off</b>. Nothing is recorded until you switch it on.</p>';
    }
    var rows = EVENTS.filter(function (k) { return k !== "session"; }).map(function (k) {
      return "<tr><td>" + LABELS[k] + "</td><td><b>" + num(s.counts[k]) + "</b></td></tr>";
    }).join("");
    var opened = num(s.counts.session);
    if (!rows) rows = '<tr><td colspan="2">Nothing counted yet since ' + s.since + ".</td></tr>";
    return '<table class="usg-tbl"><tbody>' + rows + "</tbody></table>" +
      '<p class="usg-meta">Platform opened ' + opened + " time" + (opened === 1 ? "" : "s") +
      " &middot; counting since " + s.since +
      (s.org ? " &middot; " + escapeHTML(s.org) : "") +
      " &middot; stored on this device only</p>";
  }

  function escapeHTML(t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Wires the settings-panel controls. Safe to call with missing elements. */
  function init() {
    var on = document.getElementById("usgOn");
    var org = document.getElementById("usgOrg");
    var box = document.getElementById("usgSummary");
    var exp = document.getElementById("usgExport");
    var rst = document.getElementById("usgReset");
    var s = load();

    markSession();

    if (on) {
      on.checked = s.enabled;
      on.addEventListener("change", function () { setEnabled(on.checked); paint(); });
    }
    if (org) {
      org.value = s.org || "";
      org.addEventListener("change", function () { setOrg(org.value); paint(); });
    }
    if (exp) exp.addEventListener("click", function () { exportFile(); });
    if (rst) rst.addEventListener("click", function () { reset(); if (on) on.checked = false; paint(); });

    function paint() { if (box) box.innerHTML = summaryHTML(); }
    paint();
    return true;
  }

  window.USAGE = {
    EVENTS: EVENTS,
    LABELS: LABELS,
    enabled: function () { return load().enabled; },
    setEnabled: setEnabled,
    org: function () { return load().org; },
    setOrg: setOrg,
    track: track,
    markSession: markSession,
    report: report,
    exportFile: exportFile,
    reset: reset,
    total: total,
    summaryHTML: summaryHTML,
    init: init,
    /* test seam: exposed so tests/node can drive the module without a DOM */
    _load: load,
    _key: KEY
  };
})();
