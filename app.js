/* Course-pack generator UI: renders the block model to screen, exports .docx / print. */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  var pack = null;

  var DEFAULT_SHEETS = ["vocab", "match", "fr2en", "en2fr", "mcq", "missing", "scramble", "copy", "write", "oral"];

  function opts() {
    var per = [];
    document.querySelectorAll(".pk:checked").forEach(function (c) { per.push(c.value); });
    var sh = [];
    document.querySelectorAll(".sh:checked").forEach(function (c) { sh.push(c.value); });
    return {
      grade: +$("#grade").value,
      topics: per.length ? per : null,
      sheets: sh.length ? sh : ["vocab"],
      perEx: +$("#perEx").value,
      seed: +$("#seed").value || 1,
      tests: $("#tests").checked,
      exam: $("#exam").checked,
      keys: $("#keys").checked
    };
  }

  /* ---------------- controls ---------------- */
  function buildControls() {
    var sh = $("#sheets");
    sh.innerHTML = "";
    Object.keys(GEN.SHEETS).forEach(function (id) {
      var lab = document.createElement("label");
      lab.className = "chk";
      lab.innerHTML = '<input type="checkbox" class="sh" value="' + id + '"' +
        (DEFAULT_SHEETS.indexOf(id) >= 0 ? " checked" : "") + '><span>' + GEN.SHEETS[id].label + '</span>';
      sh.appendChild(lab);
    });
    refreshPeriods();
  }

  function refreshPeriods() {
    var g = +$("#grade").value, box = $("#periods");
    box.innerHTML = "";
    CURRICULUM.filter(function (t) { return t.grade === g; }).forEach(function (t) {
      var lab = document.createElement("label");
      lab.className = "chk";
      lab.innerHTML = '<input type="checkbox" class="pk" value="' + t.period + '" checked>' +
        '<span><b>P' + t.period + '</b> ' + t.fr + '</span>';
      box.appendChild(lab);
    });
  }

  /* ---------------- screen renderer ---------------- */
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function nl(s) { return esc(s).replace(/\n/g, "<br>"); }

  function render(blocks) {
    var h = "", pg = 1;
    h += '<div class="page">';
    blocks.forEach(function (b) {
      switch (b.k) {
        case "h1": h += "<h1>" + esc(b.t) + "</h1>"; break;
        case "h2": h += "<h2>" + esc(b.t) + "</h2>"; break;
        case "h3": h += "<h3>" + esc(b.t) + "</h3>"; break;
        case "p": h += "<p" + (b.i ? ' class="it"' : "") + ">" + nl(b.t) + "</p>"; break;
        case "instr": h += '<p class="instr">' + nl(b.t) + "</p>"; break;
        case "bul":
          h += "<ul>" + b.items.map(function (x) { return "<li>" + nl(x) + "</li>"; }).join("") + "</ul>"; break;
        case "num":
          h += '<ol' + (b.start ? ' start="' + b.start + '"' : "") + ">" +
            b.items.map(function (x) { return "<li>" + nl(x) + "</li>"; }).join("") + "</ol>"; break;
        case "cols":
          h += '<div class="cols"><ol class="ca">' + b.a.map(function (x) { return "<li>" + nl(x) + "</li>"; }).join("") +
            '</ol><ul class="cb">' + b.b.map(function (x) { return "<li>" + nl(x) + "</li>"; }).join("") + "</ul></div>";
          break;
        case "table":
          h += "<table><thead><tr>" + b.head.map(function (x) { return "<th>" + esc(x) + "</th>"; }).join("") + "</tr></thead><tbody>" +
            b.rows.map(function (r) {
              return "<tr>" + r.map(function (c) { return "<td>" + (c ? esc(c) : "&nbsp;") + "</td>"; }).join("") + "</tr>";
            }).join("") + "</tbody></table>";
          break;
        case "lines":
          for (var i = 0; i < b.n; i++) h += '<div class="wl"></div>';
          break;
        case "space": h += '<div class="sp"></div>'; break;
        case "rule": h += "<hr>"; break;
        case "pagebreak": pg++; h += '</div><div class="page">'; break;
      }
    });
    h += "</div>";
    $("#doc").innerHTML = h;
    $("#pageN").textContent = pg;
  }

  /* ---------------- .docx export (WordprocessingML, no library) ---------------- */
  function xe(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  function runs(text, opt) {
    opt = opt || {};
    var props = "<w:rPr>" +
      (opt.b ? "<w:b/>" : "") + (opt.i ? "<w:i/>" : "") +
      (opt.sz ? '<w:sz w:val="' + opt.sz + '"/><w:szCs w:val="' + opt.sz + '"/>' : "") +
      (opt.color ? '<w:color w:val="' + opt.color + '"/>' : "") +
      (opt.font ? '<w:rFonts w:ascii="' + opt.font + '" w:hAnsi="' + opt.font + '"/>' : "") +
      "</w:rPr>";
    // split on newlines -> <w:br/>
    var parts = String(text).split("\n");
    var out = "";
    parts.forEach(function (p, i) {
      out += "<w:r>" + props + (i ? "<w:br/>" : "") +
        '<w:t xml:space="preserve">' + xe(p) + "</w:t></w:r>";
    });
    return out;
  }
  function para(text, opt) {
    opt = opt || {};
    var pPr = "<w:pPr>" +
      (opt.align ? '<w:jc w:val="' + opt.align + '"/>' : "") +
      (opt.ind ? '<w:ind w:left="' + opt.ind + '"/>' : "") +
      '<w:spacing w:before="' + (opt.before || 0) + '" w:after="' + (opt.after == null ? 60 : opt.after) + '"/>' +
      (opt.shade ? '<w:shd w:val="clear" w:fill="' + opt.shade + '"/>' : "") +
      (opt.border ? '<w:pBdr><w:bottom w:val="single" w:sz="8" w:color="1F4E9C"/></w:pBdr>' : "") +
      (opt.pageBreak ? "<w:pageBreakBefore/>" : "") +
      "</w:pPr>";
    return "<w:p>" + pPr + runs(text, opt) + "</w:p>";
  }
  function tableXml(head, rows) {
    var cols = head.length;
    var w = Math.floor(9360 / cols);
    var x = '<w:tbl><w:tblPr><w:tblStyle w:val="TableGrid"/><w:tblW w:w="9360" w:type="dxa"/>' +
      '<w:tblBorders>' +
      ['top','left','bottom','right','insideH','insideV'].map(function (s) {
        return '<w:' + s + ' w:val="single" w:sz="6" w:color="9AB3D9"/>';
      }).join("") + '</w:tblBorders></w:tblPr>';
    x += "<w:tr>" + head.map(function (hh) {
      return '<w:tc><w:tcPr><w:tcW w:w="' + w + '" w:type="dxa"/><w:shd w:val="clear" w:fill="DCE6F5"/></w:tcPr>' +
        para(hh, { b: true, sz: 20, after: 20 }) + "</w:tc>";
    }).join("") + "</w:tr>";
    rows.forEach(function (r) {
      x += "<w:tr>" + r.map(function (c, i) {
        var cell = (c === "" || c == null) ? " " : c;
        return '<w:tc><w:tcPr><w:tcW w:w="' + w + '" w:type="dxa"/></w:tcPr>' +
          para(cell, { sz: 20, after: 20, b: i === 0 && cell !== " " }) + "</w:tc>";
      }).join("") + "</w:tr>";
    });
    return x + "</w:tbl>" + para("", { after: 80, sz: 8 });
  }

  function toDocx(blocks) {
    var body = "";
    blocks.forEach(function (b) {
      switch (b.k) {
        case "h1": body += para(b.t, { b: true, sz: 34, color: "0B3B8C", before: 200, after: 100, border: true }); break;
        case "h2": body += para(b.t, { b: true, sz: 27, color: "1E5FD0", before: 160, after: 80 }); break;
        case "h3": body += para(b.t, { b: true, sz: 23, color: "12203A", before: 140, after: 70 }); break;
        case "p":  body += para(b.t, { sz: 21, i: !!b.i }); break;
        case "instr": body += para(b.t, { sz: 20, i: true, color: "44546A", shade: "F2F6FC" }); break;
        case "bul": b.items.forEach(function (x) { body += para("•  " + x, { sz: 21, ind: 260 }); }); break;
        case "num": b.items.forEach(function (x, i) {
            body += para(((b.start || 1) + i) + ".  " + x, { sz: 21, ind: 260, after: 90 }); }); break;
        case "cols": {
          var n = Math.max(b.a.length, b.b.length), rows = [];
          for (var i = 0; i < n; i++) rows.push([b.a[i] || "", b.b[i] || ""]);
          body += tableXml(["French", "English"], rows);
          break;
        }
        case "table": body += tableXml(b.head, b.rows); break;
        case "lines": for (var j = 0; j < b.n; j++) body += para("_______________________________________________________________", { sz: 21, after: 140, color: "AAAAAA" }); break;
        case "space": body += para("", { sz: 14 }); break;
        case "rule": body += para("", { border: true, sz: 10 }); break;
        case "pagebreak": body += '<w:p><w:pPr><w:pageBreakBefore/></w:pPr></w:p>'; break;
      }
    });

    var doc = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
      "<w:body>" + body +
      '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/>' +
      '<w:pgMar w:top="1000" w:right="1000" w:bottom="1000" w:left="1200" w:header="708" w:footer="708" w:gutter="0"/>' +
      "</w:sectPr></w:body></w:document>";

    var files = {
      "[Content_Types].xml":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
        '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
        '<Default Extension="xml" ContentType="application/xml"/>' +
        '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
        '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>' +
        "</Types>",
      "_rels/.rels":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
        "</Relationships>",
      "word/_rels/document.xml.rels":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
        "</Relationships>",
      "word/styles.xml":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
        '<w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/><w:sz w:val="21"/></w:rPr></w:rPrDefault></w:docDefaults>' +
        '<w:style w:type="table" w:styleId="TableGrid"><w:name w:val="Table Grid"/></w:style>' +
        "</w:styles>",
      "word/document.xml": doc
    };
    return makeZip(files);
  }

  /* ---- minimal ZIP writer (STORE, no compression) ---- */
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
    function u16(n){return [n&255,(n>>8)&255];}
    function u32(n){return [n&255,(n>>8)&255,(n>>16)&255,(n>>24)&255];}
    Object.keys(files).forEach(function (name) {
      var data = enc.encode(files[name]), nm = enc.encode(name), crc = crc32(data);
      var lf = [].concat([80,75,3,4], u16(20), u16(0), u16(0), u16(0), u16(0),
        u32(crc), u32(data.length), u32(data.length), u16(nm.length), u16(0));
      chunks.push(new Uint8Array(lf), nm, data);
      central.push({ nm: nm, crc: crc, len: data.length, off: off });
      off += lf.length + nm.length + data.length;
    });
    var cd = [], cdLen = 0;
    central.forEach(function (f) {
      var h = [].concat([80,75,1,2], u16(20), u16(20), u16(0), u16(0), u16(0), u16(0),
        u32(f.crc), u32(f.len), u32(f.len), u16(f.nm.length),
        u16(0), u16(0), u16(0), u16(0), u32(0), u32(f.off));
      cd.push(new Uint8Array(h), f.nm);
      cdLen += h.length + f.nm.length;
    });
    var end = new Uint8Array([].concat([80,75,5,6], u16(0), u16(0),
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
    pack = GEN.buildPack(o);
    render(pack.blocks);
    $("#meta").textContent = pack.topics.length + " unit(s) · " +
      o.sheets.length + " exercise type(s) · seed " + o.seed;
    $("#exportbar").style.display = "flex";
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildControls();
    $("#grade").onchange = function () { refreshPeriods(); };
    $("#gen").onclick = generate;
    $("#reseed").onclick = function () {
      $("#seed").value = Math.floor(Math.random() * 9999) + 1; generate();
    };
    $("#print").onclick = function () { window.print(); };
    $("#docx").onclick = function () {
      if (!pack) return;
      download(toDocx(pack.blocks), "French_Grade" + opts().grade + "_Workbook.docx");
    };
    $("#allon").onclick = function () {
      document.querySelectorAll(".sh,.pk").forEach(function (c) { c.checked = true; });
    };
    $("#alloff").onclick = function () {
      document.querySelectorAll(".sh").forEach(function (c) { c.checked = false; });
    };
    generate();
  });
})();
