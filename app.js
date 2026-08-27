/* Unified platform: subject switching (English / French), shared renderer + .docx export. */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  var pack = null;

  var SUBJECTS = {
    en: {
      label: "English", flag: "📘", accent: "#0b6b3a",
      curriculum: function () { return EN_CURRICULUM; },
      engine: function () { return GEN_EN; },
      defaults: ["words", "match", "cloze", "phonics", "grammar", "pairs", "mcq", "passage", "write", "spelling"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "English_Grade" + g + "_Workbook.docx"; }
    },
    fr: {
      label: "French", flag: "🇫🇷", accent: "#0b3b8c",
      curriculum: function () { return FR_CURRICULUM; },
      engine: function () { return GEN_FR; },
      defaults: ["vocab", "match", "fr2en", "en2fr", "mcq", "missing", "scramble", "copy", "write", "oral"],
      titleOf: function (t) { return t.fr; },
      file: function (g) { return "French_Grade" + g + "_Workbook.docx"; }
    },
    sc: {
      label: "General Science", flag: "🔬", accent: "#7a2e12",
      curriculum: function () { return SC_CURRICULUM; },
      engine: function () { return GEN_SC; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "classify", "diagram", "experiment", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "General_Science_Grade" + g + "_Workbook.docx"; }
    },
    ma: {
      label: "Mathematics", flag: "🔢", accent: "#5b2a86",
      curriculum: function () { return MA_CURRICULUM; },
      engine: function () { return GEN_MA; },
      defaults: ["terms", "worked", "drills", "drills2", "mcq", "word", "show", "challenge", "mental"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Mathematics_Grade" + g + "_Workbook.docx"; }
    },
    ss: {
      label: "Social Studies", flag: "🌍", accent: "#0d6a6a",
      curriculum: function () { return SS_CURRICULUM; },
      engine: function () { return GEN_SS; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "sort", "map", "casestudy", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Social_Studies_Grade" + g + "_Workbook.docx"; }
    },
    rm: {
      label: "Religious & Moral", flag: "🕊️", accent: "#8a5a00",
      curriculum: function () { return RM_CURRICULUM; },
      engine: function () { return GEN_RM; },
      defaults: ["terms", "match", "cloze", "tf", "short", "mcq", "sort", "compare", "casestudy", "apply"],
      titleOf: function (t) { return t.title; },
      file: function (g) { return "Religious_and_Moral_Education_Grade" + g + "_Workbook.docx"; }
    }
  };
  var cur = "en";
  function S() { return SUBJECTS[cur]; }

  function opts() {
    var per = [], sh = [];
    document.querySelectorAll(".pk:checked").forEach(function (c) { per.push(c.value); });
    document.querySelectorAll(".sh:checked").forEach(function (c) { sh.push(c.value); });
    return {
      grade: +$("#grade").value,
      topics: per.length ? per : null,
      sheets: sh.length ? sh : [S().defaults[0]],
      perEx: +$("#perEx").value,
      seed: +$("#seed").value || 1,
      tests: $("#tests").checked,
      exam: $("#exam").checked,
      keys: $("#keys").checked
    };
  }

  /* ---------------- controls ---------------- */
  function renderSubjectTabs() {
    var box = $("#subjects"); box.innerHTML = "";
    Object.keys(SUBJECTS).forEach(function (id) {
      var s = SUBJECTS[id];
      var b = document.createElement("button");
      b.className = "subtab" + (id === cur ? " on" : "");
      b.innerHTML = '<span class="fl">' + s.flag + "</span>" + s.label;
      b.onclick = function () {
        if (cur === id) return;
        cur = id;
        document.body.setAttribute("data-subject", id);
        renderSubjectTabs(); buildSheetList(); refreshPeriods(); generate();
      };
      box.appendChild(b);
    });
  }

  function buildSheetList() {
    var sh = $("#sheets"); sh.innerHTML = "";
    var eng = S().engine(), def = S().defaults;
    Object.keys(eng.SHEETS).forEach(function (id) {
      var lab = document.createElement("label");
      lab.className = "chk";
      lab.innerHTML = '<input type="checkbox" class="sh" value="' + id + '"' +
        (def.indexOf(id) >= 0 ? " checked" : "") + '><span>' + eng.SHEETS[id].label + "</span>";
      sh.appendChild(lab);
    });
  }

  function refreshPeriods() {
    var g = +$("#grade").value, box = $("#periods");
    box.innerHTML = "";
    S().curriculum().filter(function (t) { return t.grade === g; }).forEach(function (t) {
      var lab = document.createElement("label");
      lab.className = "chk";
      lab.innerHTML = '<input type="checkbox" class="pk" value="' + t.period + '" checked>' +
        "<span><b>P" + t.period + "</b> " + S().titleOf(t) + "</span>";
      box.appendChild(lab);
    });
  }

  /* ---------------- screen renderer ---------------- */
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function nl(s) { return esc(s).replace(/\n/g, "<br>"); }

  var runhead = { left: "", right: "", foot: "" };
  function setRunning(o) {
    runhead.left = S().label + " \u00b7 Grade " + o.grade;
    runhead.right = "Pupil Workbook & Assessment Pack";
    runhead.foot = "Liberian Elementary Curriculum \u00b7 Grades 1\u20136   |   Name: ____________   School: ____________";
  }
  function bandTop() {
    return '<div class="phead"><span>' + esc(runhead.left) + '</span><span>' + esc(runhead.right) + "</span></div>";
  }
  function bandBottom(n, total) {
    return '<div class="pfoot"><span>' + esc(runhead.foot) + '</span><span>Page ' + n + " of " + total + "</span></div>";
  }

  /* Renders to real A4 sheets. Content is measured and flowed so nothing is clipped:
     a block that will not fit the remaining height of a sheet moves to the next sheet. */
  function blockHtml(b) {
    switch (b.k) {
      case "h1": return "<h1>" + esc(b.t) + "</h1>";
      case "h2": return "<h2>" + esc(b.t) + "</h2>";
      case "h3": return "<h3>" + esc(b.t) + "</h3>";
      case "p": return "<p" + (b.i ? ' class="it"' : "") + ">" + nl(b.t) + "</p>";
      case "instr": return '<p class="instr">' + nl(b.t) + "</p>";
      case "bul": return "<ul>" + b.items.map(function (x) { return "<li>" + nl(x) + "</li>"; }).join("") + "</ul>";
      case "num": return "<ol" + (b.start ? ' start="' + b.start + '"' : "") + ">" +
        b.items.map(function (x) { return "<li>" + nl(x) + "</li>"; }).join("") + "</ol>";
      case "cols": return '<div class="cols"><ol class="ca">' +
        b.a.map(function (x) { return "<li>" + nl(x) + "</li>"; }).join("") + '</ol><ul class="cb">' +
        b.b.map(function (x) { return "<li>" + nl(x) + "</li>"; }).join("") + "</ul></div>";
      case "table": return "<table><thead><tr>" +
        b.head.map(function (x) { return "<th>" + esc(x) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        b.rows.map(function (r) {
          return "<tr>" + r.map(function (c) { return "<td>" + (c ? esc(c) : "&nbsp;") + "</td>"; }).join("") + "</tr>";
        }).join("") + "</tbody></table>";
      case "lines": { var o = ""; for (var i = 0; i < b.n; i++) o += '<div class="wl"></div>'; return o; }
      case "space": return '<div class="sp"></div>';
      case "rule": return "<hr>";
      default: return "";
    }
  }

  /* split a bul/num/lines block so a long list can continue on the next sheet */
  function splitBlock(b, frac) {
    if (b.k === "bul" || b.k === "num") {
      var n = Math.max(1, Math.floor(b.items.length * frac));
      if (n >= b.items.length) return null;
      var head = { k: b.k, items: b.items.slice(0, n), start: b.start };
      var tail = { k: b.k, items: b.items.slice(n), start: (b.start || 1) + n };
      return [head, tail];
    }
    if (b.k === "lines") {
      var m = Math.max(1, Math.floor(b.n * frac));
      if (m >= b.n) return null;
      return [{ k: "lines", n: m }, { k: "lines", n: b.n - m }];
    }
    if (b.k === "table" && b.rows.length > 2) {
      var q = Math.max(1, Math.floor(b.rows.length * frac));
      if (q >= b.rows.length) return null;
      return [{ k: "table", head: b.head, rows: b.rows.slice(0, q) },
              { k: "table", head: b.head, rows: b.rows.slice(q) }];
    }
    return null;
  }

  var runhead = { left: "", right: "", foot: "" };
  function setRunning(o) {
    runhead.left = S().label + " \u00b7 Grade " + o.grade;
    runhead.right = "Pupil Workbook & Assessment Pack";
    runhead.foot = "Liberian Elementary Curriculum \u00b7 Grades 1\u20136   |   Name: ____________________   School: ____________________";
  }
  function bandTop() {
    return '<div class="phead"><span>' + esc(runhead.left) + '</span><span>' + esc(runhead.right) + "</span></div>";
  }
  function bandBottom(n, total) {
    return '<div class="pfoot"><span>' + esc(runhead.foot) + '</span><span>Page ' + n + " of " + total + "</span></div>";
  }

  function render(blocks) {
    var doc = $("#doc");
    /* off-screen A4 sheet used only to measure how much fits */
    var probe = document.createElement("div");
    probe.className = "page measure";
    probe.innerHTML = bandTop() + '<div class="pbody"></div>' + bandBottom(1, 1);
    doc.innerHTML = "";
    doc.appendChild(probe);
    var pbody = probe.querySelector(".pbody");
    /* usable height = full A4 sheet minus padding and the header / footer bands */
    var budget = probe.clientHeight
      - parseFloat(getComputedStyle(probe).paddingTop)
      - parseFloat(getComputedStyle(probe).paddingBottom)
      - probe.querySelector(".phead").offsetHeight
      - probe.querySelector(".pfoot").offsetHeight
      - 16;
    if (!budget || budget < 100) budget = 900;   /* fallback if hidden or unstyled */

    var pages = [], cur = [], used = 0;
    var queue = blocks.slice();

    function flush() { pages.push(cur); cur = []; used = 0; }

    function measure(b) {
      pbody.innerHTML = blockHtml(b);
      return pbody.getBoundingClientRect().height;
    }

    while (queue.length) {
      var b = queue.shift();
      if (b.k === "pagebreak") { flush(); continue; }
      var h = measure(b);
      if (used + h <= budget || !cur.length && h > budget) {
        /* fits, or is a single oversized block that must start its own sheet */
        if (used + h <= budget) { cur.push(b); used += h; continue; }
      }
      if (used + h > budget) {
        var room = budget - used;
        var parts = room > 60 ? splitBlock(b, room / h) : null;
        if (parts) {
          cur.push(parts[0]);
          flush();
          queue.unshift(parts[1]);
          continue;
        }
        if (cur.length) { flush(); queue.unshift(b); continue; }
        /* single block taller than one sheet and unsplittable: let it overflow its own sheet */
        cur.push(b); flush();
      }
    }
    if (cur.length) flush();
    if (!pages.length) pages = [[]];

    var total = pages.length;
    doc.innerHTML = pages.map(function (bl, i) {
      return '<div class="page">' + bandTop() + '<div class="pbody">' +
        bl.map(blockHtml).join("") + "</div>" + bandBottom(i + 1, total) + "</div>";
    }).join("");
    $("#pageN").textContent = total;
  }

  /* ---------------- .docx export ---------------- */
  function xe(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  function runs(text, opt) {
    opt = opt || {};
    var props = "<w:rPr>" + (opt.b ? "<w:b/>" : "") + (opt.i ? "<w:i/>" : "") +
      (opt.sz ? '<w:sz w:val="' + opt.sz + '"/><w:szCs w:val="' + opt.sz + '"/>' : "") +
      (opt.color ? '<w:color w:val="' + opt.color + '"/>' : "") + "</w:rPr>";
    return String(text).split("\n").map(function (p, i) {
      return "<w:r>" + props + (i ? "<w:br/>" : "") + '<w:t xml:space="preserve">' + xe(p) + "</w:t></w:r>";
    }).join("");
  }
  function para(text, opt) {
    opt = opt || {};
    var pPr = "<w:pPr>" + (opt.align ? '<w:jc w:val="' + opt.align + '"/>' : "") +
      (opt.ind ? '<w:ind w:left="' + opt.ind + '"/>' : "") +
      '<w:spacing w:before="' + (opt.before || 0) + '" w:after="' + (opt.after == null ? 60 : opt.after) + '"/>' +
      (opt.shade ? '<w:shd w:val="clear" w:fill="' + opt.shade + '"/>' : "") +
      (opt.border ? '<w:pBdr><w:bottom w:val="single" w:sz="8" w:color="' + (opt.bc || "1F4E9C") + '"/></w:pBdr>' : "") +
      (opt.pageBreak ? "<w:pageBreakBefore/>" : "") + "</w:pPr>";
    return "<w:p>" + pPr + runs(text, opt) + "</w:p>";
  }
  function tableXml(head, rows, hdrFill) {
    var w = Math.floor(10206 / head.length);
    var x = '<w:tbl><w:tblPr><w:tblStyle w:val="TableGrid"/><w:tblW w:w="10206" w:type="dxa"/><w:tblBorders>' +
      ["top", "left", "bottom", "right", "insideH", "insideV"].map(function (s) {
        return "<w:" + s + ' w:val="single" w:sz="6" w:color="9AB3D9"/>';
      }).join("") + "</w:tblBorders></w:tblPr>";
    x += "<w:tr>" + head.map(function (hh) {
      return '<w:tc><w:tcPr><w:tcW w:w="' + w + '" w:type="dxa"/><w:shd w:val="clear" w:fill="' + (hdrFill || "DCE6F5") + '"/></w:tcPr>' +
        para(hh, { b: true, sz: 26, after: 20 }) + "</w:tc>";
    }).join("") + "</w:tr>";
    rows.forEach(function (r) {
      x += "<w:tr>" + r.map(function (c, i) {
        var cell = (c === "" || c == null) ? " " : c;
        return '<w:tc><w:tcPr><w:tcW w:w="' + w + '" w:type="dxa"/></w:tcPr>' +
          para(cell, { sz: 26, after: 20, b: i === 0 && cell !== " " }) + "</w:tc>";
      }).join("") + "</w:tr>";
    });
    return x + "</w:tbl>" + para("", { after: 80, sz: 8 });
  }

  function toDocx(blocks, theme, head) {
    var C1 = theme.h1, C2 = theme.h2, FILL = theme.fill;
    head = head || { left: "", right: "", foot: "" };
    var body = "";
    blocks.forEach(function (b) {
      switch (b.k) {
        case "h1": body += para(b.t, { b: true, sz: 40, color: C1, before: 200, after: 100, border: true, bc: C1 }); break;
        case "h2": body += para(b.t, { b: true, sz: 34, color: C2, before: 160, after: 80 }); break;
        case "h3": body += para(b.t, { b: true, sz: 30, color: "12203A", before: 140, after: 70 }); break;
        case "p": body += para(b.t, { sz: 28, i: !!b.i }); break;
        case "instr": body += para(b.t, { sz: 26, i: true, color: "44546A", shade: "F2F6FC" }); break;
        case "bul": b.items.forEach(function (x) { body += para("•  " + x, { sz: 28, ind: 260 }); }); break;
        case "num": b.items.forEach(function (x, i) {
          body += para(((b.start || 1) + i) + ".  " + x, { sz: 28, ind: 260, after: 90 }); }); break;
        case "cols": {
          var n = Math.max(b.a.length, b.b.length), rows = [];
          for (var i = 0; i < n; i++) rows.push([b.a[i] || "", b.b[i] || ""]);
          body += tableXml(["Word", "Meaning"], rows, FILL); break;
        }
        case "table": body += tableXml(b.head, b.rows, FILL); break;
        case "lines": for (var j = 0; j < b.n; j++) body += para("_______________________________________________________________", { sz: 28, after: 160, color: "AAAAAA" }); break;
        case "space": body += para("", { sz: 18 }); break;
        case "rule": body += para("", { border: true, sz: 10 }); break;
        case "pagebreak": body += "<w:p><w:pPr><w:pageBreakBefore/></w:pPr></w:p>"; break;
      }
    });

    var NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ' +
      'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"';
    var SM = '<w:rPr><w:sz w:val="16"/><w:szCs w:val="16"/><w:color w:val="666666"/></w:rPr>';

    var headerXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      "<w:hdr " + NS + '><w:p><w:pPr><w:tabs><w:tab w:val="right" w:pos="10206"/></w:tabs>' +
      '<w:spacing w:before="0" w:after="0"/>' +
      '<w:pBdr><w:bottom w:val="single" w:sz="6" w:color="' + C2 + '"/></w:pBdr></w:pPr>' +
      '<w:r><w:rPr><w:b/><w:sz w:val="16"/><w:szCs w:val="16"/><w:color w:val="' + C1 + '"/></w:rPr>' +
      '<w:t xml:space="preserve">' + xe(head.left) + "</w:t></w:r>" +
      "<w:r>" + SM + "<w:tab/></w:r>" +
      "<w:r>" + SM + '<w:t xml:space="preserve">' + xe(head.right) + "</w:t></w:r></w:p></w:hdr>";

    function fld(instr) {
      return '<w:fldSimple w:instr=" ' + instr + ' "><w:r>' + SM + "<w:t>1</w:t></w:r></w:fldSimple>";
    }
    var footerXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      "<w:ftr " + NS + '><w:p><w:pPr><w:tabs><w:tab w:val="right" w:pos="10206"/></w:tabs>' +
      '<w:spacing w:before="0" w:after="0"/>' +
      '<w:pBdr><w:top w:val="single" w:sz="6" w:color="' + C2 + '"/></w:pBdr></w:pPr>' +
      "<w:r>" + SM + '<w:t xml:space="preserve">' + xe(head.foot) + "</w:t></w:r>" +
      "<w:r>" + SM + "<w:tab/></w:r>" +
      "<w:r>" + SM + '<w:t xml:space="preserve">Page </w:t></w:r>' + fld("PAGE") +
      "<w:r>" + SM + '<w:t xml:space="preserve"> of </w:t></w:r>' + fld("NUMPAGES") +
      "</w:p></w:ftr>";

    var doc = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      "<w:document " + NS + "><w:body>" + body +
      '<w:sectPr><w:headerReference w:type="default" r:id="rId2"/>' +
      '<w:footerReference w:type="default" r:id="rId3"/>' +
      '<w:pgSz w:w="11906" w:h="16838"/>' +
      '<w:pgMar w:top="794" w:right="851" w:bottom="680" w:left="851" w:header="397" w:footer="340" w:gutter="0"/>' +
      "</w:sectPr></w:body></w:document>";

    return makeZip({
      "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
        '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
        '<Default Extension="xml" ContentType="application/xml"/>' +
        '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
        '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>' +
        '<Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/>' +
        '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/></Types>',
      "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>',
      "word/_rels/document.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
        '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/>' +
        '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/></Relationships>',
      "word/styles.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
        '<w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/><w:sz w:val="28"/><w:szCs w:val="28"/></w:rPr></w:rPrDefault></w:docDefaults>' +
        '<w:style w:type="table" w:styleId="TableGrid"><w:name w:val="Table Grid"/></w:style></w:styles>',
      "word/header1.xml": headerXml,
      "word/footer1.xml": footerXml,
      "word/document.xml": doc
    });
  }

  var CRC = (function () {
    var t = new Uint32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  })();
  function crc32(buf) {
    var c = 0xFFFFFFFF;
    for (var i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }
  function makeZip(files) {
    var enc = new TextEncoder(), chunks = [], central = [], off = 0;
    function u16(n) { return [n & 255, (n >> 8) & 255]; }
    function u32(n) { return [n & 255, (n >> 8) & 255, (n >> 16) & 255, (n >> 24) & 255]; }
    Object.keys(files).forEach(function (name) {
      var data = enc.encode(files[name]), nm = enc.encode(name), crc = crc32(data);
      var lf = [].concat([80, 75, 3, 4], u16(20), u16(0), u16(0), u16(0), u16(0),
        u32(crc), u32(data.length), u32(data.length), u16(nm.length), u16(0));
      chunks.push(new Uint8Array(lf), nm, data);
      central.push({ nm: nm, crc: crc, len: data.length, off: off });
      off += lf.length + nm.length + data.length;
    });
    var cd = [], cdLen = 0;
    central.forEach(function (f) {
      var h = [].concat([80, 75, 1, 2], u16(20), u16(20), u16(0), u16(0), u16(0), u16(0),
        u32(f.crc), u32(f.len), u32(f.len), u16(f.nm.length),
        u16(0), u16(0), u16(0), u16(0), u32(0), u32(f.off));
      cd.push(new Uint8Array(h), f.nm); cdLen += h.length + f.nm.length;
    });
    var end = new Uint8Array([].concat([80, 75, 5, 6], u16(0), u16(0),
      u16(central.length), u16(central.length), u32(cdLen), u32(off), u16(0)));
    var all = chunks.concat(cd, [end]);
    var total = all.reduce(function (s, a) { return s + a.length; }, 0);
    var out = new Uint8Array(total), p = 0;
    all.forEach(function (a) { out.set(a, p); p += a.length; });
    return new Blob([out], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  }
  function download(blob, name) {
    var u = URL.createObjectURL(blob), a = document.createElement("a");
    a.href = u; a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(u); a.remove(); }, 1500);
  }

  /* ---------------- actions ---------------- */
  function generate() {
    var o = opts();
    pack = S().engine().buildPack(o);
    setRunning(o);
    render(pack.blocks);
    $("#meta").textContent = S().label + " · Grade " + o.grade + " · " + pack.topics.length +
      " unit(s) · " + o.sheets.length + " exercise type(s) · seed " + o.seed;
    $("#exportbar").style.display = "flex";
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.body.setAttribute("data-subject", cur);
    renderSubjectTabs(); buildSheetList(); refreshPeriods();
    $("#grade").onchange = refreshPeriods;
    $("#gen").onclick = generate;
    $("#reseed").onclick = function () { $("#seed").value = Math.floor(Math.random() * 9999) + 1; generate(); };
    $("#print").onclick = function () { window.print(); };
    $("#docx").onclick = function () {
      if (!pack) return;
      var THEMES = {
        en: { h1: "0B6B3A", h2: "12864B", fill: "DCF0E4" },
        fr: { h1: "0B3B8C", h2: "1E5FD0", fill: "DCE6F5" },
        sc: { h1: "7A2E12", h2: "B4541F", fill: "FBE6D5" },
        ma: { h1: "5B2A86", h2: "8247B5", fill: "EBDFF7" },
        ss: { h1: "0D6A6A", h2: "128F8F", fill: "D8F0EE" },
        rm: { h1: "8A5A00", h2: "B8860B", fill: "F7EBD0" }
      };
      var theme = THEMES[cur] || THEMES.en;
      download(toDocx(pack.blocks, theme, runhead), S().file(opts().grade));
    };
    $("#allon").onclick = function () { document.querySelectorAll(".sh,.pk").forEach(function (c) { c.checked = true; }); };
    $("#alloff").onclick = function () { document.querySelectorAll(".sh").forEach(function (c) { c.checked = false; }); };
    generate();
  });
})();
