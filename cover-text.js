/* Blank overrides are intentional; absent keys continue to auto-fill. */
(function (root) {
  "use strict";
  var defaults = {}, overrides = {}, save = function () {}, refresh = function () {};
  var fields = {
    title: "Main cover title", subtitle: "Book type / subtitle", line: "Curriculum / level line", subject: "Subject value",
    schoolLabel: "School label", subjectLabel: "Subject label", classLabel: "Class label", teacherLabel: "Teacher label",
    pupilLabel: "Pupil / name label", termLabel: "Term label (simple list)", yearLabel: "Year label (simple list)", termYearLabel: "Term / year label (designed covers)",
    noteLabel: "Note label", inspireLabel: "Default message label", inspireText: "Default message text",
    organization: "Organization footer", detailLabel: "Table detail heading", entryLabel: "Table entry heading"
  };
  function get(key) { return Object.prototype.hasOwnProperty.call(overrides, key) ? overrides[key] : defaults[key] || ""; }
  function paint() {
    var box = document.getElementById("coverTextFields"); if (!box) return;
    Object.keys(fields).forEach(function (key) {
      var input = document.getElementById("coverText-" + key);
      if (!input) {
        var label = document.createElement("label"); label.className = "tw-field";
        label.textContent = fields[key]; input = document.createElement("input"); input.type = "text";
        input.id = "coverText-" + key; input.maxLength = key === "line" || key === "inspireText" ? 220 : 100;
        var row = document.createElement("div"); row.className = "tw-cover-row";
        var reset = document.createElement("button"); reset.type = "button"; reset.textContent = "Auto";
        reset.setAttribute("aria-label", "Reset " + fields[key] + " to automatic");
        reset.onclick = function () { delete overrides[key]; save(overrides); refresh(); paint(); };
        input.onchange = function () { overrides[key] = input.value; save(overrides); refresh(); paint(); };
        row.append(input, reset); label.appendChild(row); box.appendChild(label);
      }
      if (document.activeElement !== input) input.value = get(key);
      input.dataset.automatic = Object.prototype.hasOwnProperty.call(overrides, key) ? "false" : "true";
      input.title = input.dataset.automatic === "true" ? "Automatically filled — edit to override" : "Custom text — Auto restores the default";
    });
  }
  function prepare(opts, d, cover, teacher) {
    var subject = String(d.title || "").split("—")[0].trim() || "Course Pack";
    defaults = { title: subject, subtitle: teacher ? "Teacher's Lesson Book" : "Pupil Workbook", line: d.line || "", subject: subject,
      schoolLabel: "School", subjectLabel: "Subject", classLabel: "Class", teacherLabel: "Teacher", pupilLabel: "Name",
      termLabel: "Term", yearLabel: "Year", termYearLabel: cover.term ? "Term" : "Term / Year",
      noteLabel: "Note", inspireLabel: "Inspire", inspireText: "Teach · Encourage · Achieve",
      organization: opts.subjectId === "ci" ? "Civics · Original teaching resource" : opts.subjectId && opts.subjectId.charAt(0) === "w" ? "WASSCE · Syllabus-aligned practice" : "Liberian National Curriculum",
      detailLabel: "Detail", entryLabel: "Entry" };
    if (opts.subjectId === "ci") defaults.line = "Civics · Grade " + opts.grade + " · Original teaching resource; teacher review required";
    if (root.TEACHING && root.TEACHING.isAssessment()) defaults.subtitle = "Practice Assessment";
    paint();
    var result = {}; Object.keys(fields).forEach(function (key) { result[key] = get(key); }); return result;
  }
  function init(cover, onSave, onRefresh) {
    overrides = cover.text || {}; save = function (v) { cover.text = v; onSave(); }; refresh = onRefresh;
    document.getElementById("coverTextReset").onclick = function () { overrides = {}; save(overrides); refresh(); paint(); };
    paint();
  }
  root.COVER_TEXT = { prepare: prepare, init: init, set: function (value) { overrides = value || {}; paint(); },
    label: function (b, key, fallback) { return b.labels && Object.prototype.hasOwnProperty.call(b.labels, key) ? b.labels[key] : fallback; } };
})(window);
