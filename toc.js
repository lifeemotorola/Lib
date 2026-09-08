/* Contents page numbers — the table of contents names the page each part is on.

   Every pack builder writes the same Contents page: the "Contents" heading and
   one bullet per unit, followed by the period tests, the examinations and the
   answer keys. The builder cannot know where those parts will land, because the
   page breaks are decided later, when the pack is laid out on A4 sheets in
   app.js. So the renderer lays the pack out, calls back into this module with
   the page every block landed on, and this module stamps onto the contents
   list the number of the page each entry begins on.

   The numbers ride on the block as `pg` (one entry per item) instead of being
   written into the item text: the reader, the voice tutor and Emmanuel still
   read plain sentences, the printed sheet gets dotted leaders with the number
   in the right margin, and the Word export gets the same lines with a
   right-aligned tab stop.

   Page numbers are 1-based and count the cover sheet, exactly as the running
   footer "Page n of N" does — the number beside an entry is the number printed
   at the bottom of the page that entry begins on. */
(function (root) {
  "use strict";

  var HEAD = { h1: 1, h2: 1, h3: 1 };

  /* Lower-case, drop the markup the curriculum prose carries (**bold**) and the
     punctuation a title and a contents line disagree on — "·", ":", "—", "()" —
     so "Period 1: Set and Numeration" and "PERIOD 1 · Set and Numeration"
     become the same sentence. */
  function norm(s) {
    return String(s == null ? "" : s)
      .replace(/\*+/g, " ")
      .replace(/[\u2010-\u2015\u2212]/g, "-")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  function words(s) {
    var n = norm(s);
    return n ? n.split(" ") : [];
  }

  /* How well a contents line and a heading name the same thing:
     4 — the same words, 3 — one is the other with a little added
     (French lines carry the English gloss: "Period 3: Bonjour (Hello)"),
     0 — two different parts of the pack. */
  function score(a, b) {
    var ta = words(a), tb = words(b), n = Math.min(ta.length, tb.length), i = 0;
    if (!n) return 0;
    while (i < n && ta[i] === tb[i]) i++;
    if (i === n && ta.length === tb.length) return 4;
    return i === n ? 3 : 0;
  }

  /* The entries that name a part of the pack instead of a unit. `per` is the tag
     the builders put on those headings; `head` matches the heading text as
     well, because a WASSCE topic mock carries its topic's own period tag, so
     no tag can point at "the first mock". */
  var PARTS = [
    { re: /^answer keys?\b/, per: "keys", head: /answer keys?\b/ },
    { re: /\bexaminations?\b/, per: "exam", head: /\bexamination\b|\bmock\b/ },
    { re: /\b(tests?|mocks?)\b/, per: "", head: /\b(period|topic) (tests?|mocks?)\b/ }
  ];

  /* The contents list of a pack: the bullet list that follows the Contents
     heading. Returns { at, bul } with the index the list sits at, or null for
     a pack without one (a lesson plan, a cover sheet, a practice assessment). */
  function find(blocks) {
    for (var i = 0; i < blocks.length; i++) {
      var b = blocks[i];
      if (b.k !== "h3" || norm(b.t) !== "contents") continue;
      for (var j = i + 1; j < blocks.length; j++) {
        var n = blocks[j];
        if (n.k === "bul" && n.items && n.items.length) return { at: j, bul: n };
        /* a page break or another heading means this was not the contents list */
        if (n.k === "h1" || n.k === "h2" || n.k === "pagebreak") break;
      }
    }
    return null;
  }

  /* The index of the block a contents line begins on, -1 when the pack holds no
     heading the line names. Only blocks from `from` onwards are considered:
     the contents list introduces what comes after it, never the cover. */
  function target(item, blocks, from) {
    var line = norm(item), part = null, p;
    for (p = 0; p < PARTS.length; p++) {
      if (PARTS[p].re.test(line)) { part = PARTS[p]; break; }
    }
    var best = 0, at = -1, tagged = -1, headed = -1;
    for (var i = from; i < blocks.length; i++) {
      var b = blocks[i];
      if (HEAD[b.k]) {
        var s = score(line, b.t);
        if (s > best) { best = s; at = i; if (!part && best === 4) break; }  /* words agree: look no further */
      }
      if (part) {
        /* the builders tag the heading of every part of the pack, so follow the
           tag; the wording is only searched when a pack carries no tag */
        if (tagged < 0 && part.per && b.per === part.per) tagged = i;
        if (headed < 0 && (b.k === "h1" || b.k === "h2") && part.head.test(norm(b.t))) headed = i;
        if (tagged >= 0 || (headed >= 0 && !part.per)) break;
      }
    }
    /* a line that quotes a unit heading names that unit, even when its title
       also carries the word "test" or "examination" */
    if (part && best < 3) return tagged >= 0 ? tagged : headed;
    return at;
  }

  /* Write the page numbers onto the pack's contents list. `pageOf(i)` is the
     page the block at index i begins on. Returns true when the list changed,
     so the caller knows to lay the pack out again: numbers added to a contents
     line can move the page break under it. */
  function decorate(blocks, pageOf) {
    var c = find(blocks);
    if (!c) return false;
    var bul = c.bul, items = bul.items || [];
    var pg = items.map(function (item) {
      var at = target(item, blocks, c.at + 1);
      return at < 0 ? null : (pageOf(at) || null);
    });
    var sig = pg.join(",");
    if (sig === (bul._pg || "")) return false;
    var found = pg.some(function (n) { return !!n; });
    bul.pg = found ? pg : null;
    bul._pg = sig;
    /* the renderer caches measured heights per block: a list that changed has
       to be measured again before the next layout pass can be trusted */
    bul._rev = (bul._rev || 0) + 1;
    return found;
  }

  root.PACK_TOC = {
    decorate: decorate,
    contents: find,
    target: target,
    score: score,
    norm: norm
  };
})(typeof window !== "undefined" ? window : this);
