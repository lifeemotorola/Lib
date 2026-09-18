/* Book print sequence helper — shared module.
   Used by the duplex-print and fold-book tools built into index.html
   (app.js wires the modal in body.html) and by the standalone book.html.

   Two print sessions share one dialog:

   • Duplex — a printer that prints only one side at a time needs two
     passes to make a double-sided book:  1,3,5,... on the front, then the
     paper is flipped and 2,4,6,... is printed on the back.

   • Fold book — a saddle-stitched booklet. Two pages sit side by side on
     each face of a sheet ("2 pages per sheet", landscape); the stack is
     folded once down the middle and stapled on the fold. Page order is
     the classic imposition:  sheet 1 front = N,1  back = 2,N-1 and so on
     inwards. The paper can be A4 (folds to A5), A3 (folds to A4) or Legal
     (folds to 7 × 8½ in), offered in that sequence.

   Both turn a page count into front/back sequences, with copy buttons and
   a small saved-books list kept in localStorage under "printBooks". */
(function (root) {
  "use strict";

  /* Pure sequence builder: odd pages (front) and even pages (back). */
  function seq(pageCount, separator) {
    var odd = [], even = [], i;
    for (i = 1; i <= pageCount; i++) (i % 2 ? odd : even).push(i);
    return {
      odd: odd,
      even: even,
      oddN: odd.length,
      evenN: even.length,
      sheets: Math.ceil(pageCount / 2)
    };
  }

  /* Paper sizes for the fold book, in the order they are offered.
     `sheet` is the paper that goes into the printer, `folded` the size of
     the finished booklet page. Millimetres. */
  var PAPER = [
    { id: "a4",    label: "A4",    sheet: [210, 297], folded: [148, 210], foldedName: "A5" },
    { id: "a3",    label: "A3",    sheet: [297, 420], folded: [210, 297], foldedName: "A4" },
    { id: "legal", label: "Legal", sheet: [216, 356], folded: [178, 216], foldedName: "7 × 8\u00bd in" }
  ];
  function paper(id) {
    var i;
    for (i = 0; i < PAPER.length; i++) if (PAPER[i].id === id) return PAPER[i];
    return PAPER[0];
  }

  /* Pure imposition builder for a fold (saddle-stitch) booklet.
     The page count is padded up to a multiple of 4 — every sheet carries
     four pages, two on each face. Returns the front and back sequences in
     printer order (pairs: left page, right page per sheet face), the
     padded total, how many blank pages the end of the document needs and
     the paper description. */
  function fold(pageCount, paperId) {
    var n = Math.max(0, parseInt(pageCount, 10) || 0);
    var total = Math.ceil(n / 4) * 4;
    var sheets = total / 4;
    var front = [], back = [], k;
    for (k = 0; k < sheets; k++) {
      front.push(total - 2 * k, 1 + 2 * k);
      back.push(2 + 2 * k, total - 1 - 2 * k);
    }
    return {
      front: front,
      back: back,
      frontN: front.length,
      backN: back.length,
      pages: n,
      total: total,
      blanks: total - n,
      sheets: sheets,
      paper: paper(paperId)
    };
  }

  function storeKey() { return "printBooks"; }

  function loadBooks() {
    try { return JSON.parse(root.localStorage.getItem(storeKey()) || "[]"); }
    catch (e) { return []; }
  }
  function saveBooks(list) {
    try { root.localStorage.setItem(storeKey(), JSON.stringify(list)); }
    catch (e) { /* storage full / disabled: the sequences still work */ }
  }

  /* Wire the tool markup inside `rootEl` (default: whole document).
     Expected ids: bookName, pageCount, separator, bkGen, bkClear,
     bkCopyOdd, bkCopyEven, results, summary, oddSequence, oddCount,
     evenSequence, evenCount, bookHint, bookListItems.
     Returns { open, generate, clear, close, seq }. */
  function init(rootEl) {
    /* rootEl may be a document (standalone book.html) or a container
       element (index.html modal). Derive the document and its window. */
    var doc = (rootEl && rootEl.ownerDocument) ? rootEl.ownerDocument : rootEl;
    if (!doc || !doc.createElement) doc = root.document;
    var win = (doc && doc.defaultView) || root;
    /* Look inside the tool container first; the dialog's title and subtitle
       live in its header just outside it, so fall back to the document. */
    function $(id) {
      var scope = (rootEl && rootEl.querySelector) ? rootEl : doc;
      return scope.querySelector("#" + id) || (scope !== doc ? doc.querySelector("#" + id) : null);
    }

    var nameEl = $("bookName"), pagesEl = $("pageCount"), sepEl = $("separator");
    var modeEl = $("bookMode"), paperEl = $("paperSize"), paperF = $("paperField");
    var results = $("results"), summary = $("summary");
    var oddEl = $("oddSequence"), oddC = $("oddCount");
    var evenEl = $("evenSequence"), evenC = $("evenCount");
    var frontT = $("seqFrontTitle"), backT = $("seqBackTitle");
    var howEl = $("bookHowTo"), subEl = $("bookSub"), titleEl = $("bookTitleText");
    var hintEl = $("bookHint"), listEl = $("bookListItems");
    var saved = loadBooks();

    /* Fill the paper selector from PAPER so the order (A4, A3, Legal)
       lives in one place. */
    if (paperEl && !paperEl.options.length) {
      PAPER.forEach(function (p) {
        var o = doc.createElement("option");
        o.value = p.id;
        o.textContent = p.label + " \u2192 " + p.foldedName + " booklet";
        paperEl.appendChild(o);
      });
    }

    function mode() { return modeEl && modeEl.value === "fold" ? "fold" : "duplex"; }
    function paperId() { return paperEl ? paperEl.value : "a4"; }

    /* Relabel the dialog for the chosen session. */
    function applyMode() {
      var f = mode() === "fold";
      if (paperF) paperF.hidden = !f;
      if (rootEl && rootEl.classList) rootEl.classList.toggle("fold-mode", f);
      if (titleEl) titleEl.textContent = f ? "Fold book" : "Book print sequence";
      if (subEl) subEl.textContent = f
        ? "Page order for a folded, stapled booklet: two pages on each side of the sheet, printed front then back, folded once down the middle."
        : "Odd / even page sequences for duplex printing on a printer that prints one side at a time.";
      if (frontT) frontT.textContent = f ? "Front side (outer pages)" : "Front side (odd pages)";
      if (backT) backT.textContent = f ? "Back side (inner pages)" : "Back side (even pages)";
      if (howEl) {
        howEl.textContent = "";
        var steps = f ? [
          ["Set up:", " choose " + paper(paperId()).label + " paper, landscape, and \u201c2 pages per sheet\u201d in the print dialog."],
          ["Pass 1:", " copy the front sequence into your printer\u2019s page range. Print."],
          ["Flip:", " take the printed sheets and flip/reinsert them into the tray (same edge leading)."],
          ["Pass 2:", " copy the back sequence into your printer\u2019s page range. Print."],
          ["Fold", " the whole stack once down the middle and staple on the fold. Your booklet is ready!"]
        ] : [
          ["Pass 1:", " copy the odd pages sequence into your printer\u2019s page range. Print."],
          ["Flip:", " take the printed pages and flip/reinsert them into the printer tray."],
          ["Pass 2:", " copy the even pages sequence into your printer\u2019s page range. Print."],
          ["", "Your double-sided book is ready!"]
        ];
        steps.forEach(function (st) {
          var li = doc.createElement("li");
          if (st[0]) { var b = doc.createElement("b"); b.textContent = st[0]; li.appendChild(b); }
          li.appendChild(doc.createTextNode(st[1]));
          howEl.appendChild(li);
        });
      }
    }

    function separator() {
      var v = sepEl ? sepEl.value : ", ";
      return v === "\\n" ? "\n" : v;
    }

    function hint(msg) {
      if (!hintEl) return;
      hintEl.textContent = msg || "";
      hintEl.className = "book-hint" + (msg ? " show" : "");
    }

    function copyText(text, btn) {
      function done() {
        var old = btn.textContent;
        btn.textContent = "Copied!";
        btn.classList.add("copied");
        setTimeout(function () { btn.textContent = old; btn.classList.remove("copied"); }, 2000);
      }
      if (win.navigator && win.navigator.clipboard &&
          win.navigator.clipboard.writeText) {
        win.navigator.clipboard.writeText(text).then(done, function () { fallback(); });
      } else fallback();
      function fallback() {
        var ta = doc.createElement("textarea");
        ta.value = text;
        doc.body.appendChild(ta);
        ta.select();
        try { doc.execCommand("copy"); } catch (e) {}
        doc.body.removeChild(ta);
        done();
      }
    }

    function paintList() {
      if (!listEl) return;
      listEl.textContent = "";
      if (!saved.length) {
        var none = doc.createElement("div");
        none.className = "no-books";
        none.textContent = "No saved books yet. Give the book a name and generate to save it.";
        listEl.appendChild(none);
        return;
      }
      saved.forEach(function (book, index) {
        var item = doc.createElement("div");
        item.className = "book-item";

        var info = doc.createElement("div");
        info.className = "book-info";
        var nm = doc.createElement("div");
        nm.className = "book-name";
        nm.textContent = book.name;
        var pg = doc.createElement("div");
        pg.className = "book-pages";
        pg.textContent = book.pages + " pages \u00b7 " +
          (book.mode === "fold" ? "Fold book " + paper(book.paper).label + " \u00b7 " : "Duplex \u00b7 ") +
          (book.date || "");
        info.appendChild(nm); info.appendChild(pg);

        var act = doc.createElement("div");
        act.className = "book-actions";
        var view = doc.createElement("button");
        view.type = "button"; view.className = "btn-small btn-view";
        view.textContent = "View";
        view.addEventListener("click", function () {
          if (pagesEl) pagesEl.value = book.pages;
          if (nameEl) nameEl.value = book.name;
          if (modeEl) modeEl.value = book.mode === "fold" ? "fold" : "duplex";
          if (paperEl && book.paper) paperEl.value = book.paper;
          generate(book.pages, book.name, true);
          if (pagesEl && pagesEl.focus) pagesEl.focus();
        });
        var del = doc.createElement("button");
        del.type = "button"; del.className = "btn-small btn-delete";
        del.textContent = "Delete";
        del.addEventListener("click", function () {
          if (!win.confirm('Delete "' + book.name + '"?')) return;
          saved.splice(index, 1);
          saveBooks(saved);
          paintList();
        });
        act.appendChild(view); act.appendChild(del);

        item.appendChild(info); item.appendChild(act);
        listEl.appendChild(item);
      });
    }

    function summaryItem(label, value) {
      var it = doc.createElement("div");
      it.className = "summary-item";
      var n = doc.createElement("div");
      n.className = "number"; n.textContent = value;
      var l = doc.createElement("div");
      l.className = "label"; l.textContent = label;
      it.appendChild(n); it.appendChild(l);
      return it;
    }

    function generate(pageCount, name, noSave) {
      var n = parseInt(pageCount != null ? pageCount : (pagesEl && pagesEl.value), 10);
      if (!n || n < 1 || isNaN(n)) {
        hint("Enter a page count of at least 1.");
        return;
      }
      var nm = String(name != null ? name : (nameEl && nameEl.value)).trim();
      var sep = separator();
      var f = mode() === "fold";
      var r, p;
      applyMode();

      if (f) {
        r = fold(n, paperId());
        p = r.paper;
        if (oddEl) oddEl.textContent = r.front.join(sep);
        if (evenEl) evenEl.textContent = r.back.join(sep);
        if (oddC) oddC.textContent = r.frontN + " pages \u00b7 " + r.sheets + " sheet face" + (r.sheets === 1 ? "" : "s");
        if (evenC) evenC.textContent = r.backN + " pages \u00b7 " + r.sheets + " sheet face" + (r.sheets === 1 ? "" : "s");
      } else {
        r = seq(n, sep);
        if (oddEl) oddEl.textContent = r.odd.join(sep);
        if (evenEl) evenEl.textContent = r.even.join(sep);
        if (oddC) oddC.textContent = r.oddN + " pages";
        if (evenC) evenC.textContent = r.evenN + " pages";
      }

      if (summary) {
        summary.textContent = "";
        var h = doc.createElement("h3");
        h.textContent = (f ? "Fold book" : "Summary") + (nm ? ": " + nm : "");
        var grid = doc.createElement("div");
        grid.className = "summary-grid";
        if (f) {
          grid.appendChild(summaryItem("Document pages", n));
          grid.appendChild(summaryItem("Booklet pages", r.total));
          grid.appendChild(summaryItem("Sheets of " + p.label, r.sheets));
          grid.appendChild(summaryItem("Folded size", p.foldedName));
        } else {
          grid.appendChild(summaryItem("Total pages", n));
          grid.appendChild(summaryItem("Odd (front)", r.oddN));
          grid.appendChild(summaryItem("Even (back)", r.evenN));
          grid.appendChild(summaryItem("Sheets needed", r.sheets));
        }
        summary.appendChild(h); summary.appendChild(grid);
        if (f) {
          var note = doc.createElement("p");
          note.className = "summary-note";
          note.textContent = p.label + " sheet " + p.sheet[0] + " \u00d7 " + p.sheet[1] + " mm, folded to " +
            p.folded[0] + " \u00d7 " + p.folded[1] + " mm (" + p.foldedName + ")." +
            (r.blanks ? " A booklet needs a multiple of 4 pages: add " + r.blanks + " blank page" +
              (r.blanks === 1 ? "" : "s") + " at the end (page" + (r.blanks === 1 ? " " : "s ") +
              (r.blanks === 1 ? r.total : (n + 1) + "\u2013" + r.total) + ") so the sequence lines up."
              : " Page count is already a multiple of 4 \u2014 no blank pages needed.");
          summary.appendChild(note);
        }
      }
      if (results) results.classList.add("show");
      hint("");

      if (!noSave && nm) {
        var idx = -1, i;
        for (i = 0; i < saved.length; i++) if (saved[i].name === nm) { idx = i; break; }
        var book = {
          name: nm,
          pages: n,
          mode: f ? "fold" : "duplex",
          paper: f ? paperId() : undefined,
          date: new Date().toLocaleDateString()
        };
        if (idx >= 0) saved[idx] = book; else saved.push(book);
        saveBooks(saved);
        paintList();
      }
    }

    function clearAll() {
      if (pagesEl) pagesEl.value = "";
      if (nameEl) nameEl.value = "";
      if (results) results.classList.remove("show");
      hint("");
    }

    /* app.js calls open(pageCount, name, mode) to prefill from the
       generated pack; mode is "duplex" (default) or "fold". */
    function open(pageCount, name, which) {
      var n = parseInt(pageCount, 10);
      if (pagesEl) pagesEl.value = n > 0 ? n : "";
      if (nameEl) nameEl.value = n > 0 && name ? name : "";
      if (modeEl && which) modeEl.value = which === "fold" ? "fold" : "duplex";
      applyMode();
      hint("");
      if (n > 0) generate(n, name || null, true);
      else if (results) results.classList.remove("show");
    }

    function wire(btnId, fn) {
      var b = $(btnId);
      if (b) b.addEventListener("click", fn);
    }
    wire("bkGen", function () { generate(null, null, false); });
    wire("bkClear", clearAll);
    wire("bkCopyOdd", function () { if (oddEl && oddEl.textContent) copyText(oddEl.textContent, $( "bkCopyOdd" )); });
    wire("bkCopyEven", function () { if (evenEl && evenEl.textContent) copyText(evenEl.textContent, $("bkCopyEven")); });

    if (pagesEl) {
      pagesEl.addEventListener("keypress", function (e) {
        if (e.key === "Enter") generate(null, null, false);
      });
    }
    function regen() {
      applyMode();
      if (results && results.classList.contains("show")) generate(null, null, false);
    }
    if (sepEl) sepEl.addEventListener("change", regen);
    if (modeEl) modeEl.addEventListener("change", regen);
    if (paperEl) paperEl.addEventListener("change", regen);

    applyMode();
    paintList();
    return { open: open, generate: generate, clear: clearAll, seq: seq, fold: fold, mode: mode };
  }

  root.BOOK_TOOL = { seq: seq, fold: fold, PAPER: PAPER, paper: paper, init: init };
})(typeof window !== "undefined" ? window : this);
