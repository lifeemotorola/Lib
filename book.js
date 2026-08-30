/* Book print sequence helper — shared module.
   Used by the duplex-print tool built into index.html (app.js wires the
   modal in body.html) and by the standalone book.html page.

   A printer that prints only one side at a time needs two passes to make
   a double-sided book:  1,3,5,... on the front, then the paper is flipped
   and 2,4,6,... is printed on the back. This module turns a page count
   into those two sequences, with copy buttons and a small saved-books
   list kept in localStorage under the key "printBooks". */
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
    function $(id) { return (rootEl && rootEl.querySelector ? rootEl : doc).querySelector("#" + id); }

    var nameEl = $("bookName"), pagesEl = $("pageCount"), sepEl = $("separator");
    var results = $("results"), summary = $("summary");
    var oddEl = $("oddSequence"), oddC = $("oddCount");
    var evenEl = $("evenSequence"), evenC = $("evenCount");
    var hintEl = $("bookHint"), listEl = $("bookListItems");
    var saved = loadBooks();

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
        btn.textContent = "✔ Copied!";
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
        nm.textContent = "📖 " + book.name;
        var pg = doc.createElement("div");
        pg.className = "book-pages";
        pg.textContent = book.pages + " pages · " + (book.date || "");
        info.appendChild(nm); info.appendChild(pg);

        var act = doc.createElement("div");
        act.className = "book-actions";
        var view = doc.createElement("button");
        view.type = "button"; view.className = "btn-small btn-view";
        view.textContent = "View";
        view.addEventListener("click", function () {
          if (pagesEl) pagesEl.value = book.pages;
          if (nameEl) nameEl.value = book.name;
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
      var r = seq(n, sep);

      if (oddEl) oddEl.textContent = r.odd.join(sep);
      if (evenEl) evenEl.textContent = r.even.join(sep);
      if (oddC) oddC.textContent = r.oddN + " pages";
      if (evenC) evenC.textContent = r.evenN + " pages";

      if (summary) {
        summary.textContent = "";
        var h = doc.createElement("h3");
        h.textContent = "Summary" + (nm ? ": " + nm : "");
        var grid = doc.createElement("div");
        grid.className = "summary-grid";
        grid.appendChild(summaryItem("Total pages", n));
        grid.appendChild(summaryItem("Odd (front)", r.oddN));
        grid.appendChild(summaryItem("Even (back)", r.evenN));
        grid.appendChild(summaryItem("Sheets needed", r.sheets));
        summary.appendChild(h); summary.appendChild(grid);
      }
      if (results) results.classList.add("show");
      hint("");

      if (!noSave && nm) {
        var idx = -1, i;
        for (i = 0; i < saved.length; i++) if (saved[i].name === nm) { idx = i; break; }
        var book = {
          name: nm,
          pages: n,
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

    /* app.js calls open(pageCount, name) to prefill from the generated pack */
    function open(pageCount, name) {
      var n = parseInt(pageCount, 10);
      if (pagesEl) pagesEl.value = n > 0 ? n : "";
      if (nameEl) nameEl.value = n > 0 && name ? name : "";
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
    if (sepEl) {
      sepEl.addEventListener("change", function () {
        if (results && results.classList.contains("show")) generate(null, null, false);
      });
    }

    paintList();
    return { open: open, generate: generate, clear: clearAll, seq: seq };
  }

  root.BOOK_TOOL = { seq: seq, init: init };
})(typeof window !== "undefined" ? window : this);
