/* ============================================================
   BACK TO TOP — the platform's return-to-the-top control.

   A course pack runs to dozens of A4 sheets, so getting back to the
   subject, grade and period controls at the top means dragging the
   scrollbar the whole way back up through the printed document. This
   module adds one floating button, bottom right, that appears once the
   reader is a long way down and returns the page to the top in a press.

   Like the AI tutor and the voice reader it is deliberately OUTSIDE the
   printable session: the button is hidden by @media print in styles.css
   and is only ever appended to <body>, never injected into a generated
   sheet (.page/.pbody), so it cannot reach a pupil's workbook or the
   Word export.

   It reads two ids it does not own — #aiFab and #aiPanel — so the two
   bottom-right controls never sit on top of each other. Nothing else is
   shared: if ai.js is missing, or has not booted yet, or has hidden
   itself because the device went offline, this button simply drops back
   into the corner it would otherwise share and carries on.
   ============================================================ */
(function () {
  "use strict";

  var win = typeof window !== "undefined" ? window : (typeof global !== "undefined" ? global : this);
  var doc = win.document || (typeof document !== "undefined" ? document : null);
  if (!doc) return;                 /* no document to scroll: stay silent */

  /* A sheet is 1123px tall, so half a sheet of scroll is about the point
     where walking back up by hand stops being worth it. Below that the
     button stays out of the way. */
  var THRESHOLD = 500;

  var BTN = null;

  function byId(id) {
    return doc.getElementById ? doc.getElementById(id) : null;
  }

  /* Where the page is scrolled to, read the way each generation of
     browser spells it — some of the school PCs this runs on predate
     window.scrollY. */
  function pageY() {
    if (typeof win.scrollY === "number") return win.scrollY;
    if (typeof win.pageYOffset === "number") return win.pageYOffset;
    var d = doc.documentElement, b = doc.body;
    return (d && d.scrollTop) || (b && b.scrollTop) || 0;
  }

  /* "On screen" = not hidden, and still has a box. styles.css sets
     .ai-fab[hidden]{display:none}, and ai.js hides that button when the
     device is offline, so an offline device reports a zero-size rect and
     the back-to-top button takes the corner back. */
  function onScreen(node) {
    if (!node || node.hidden) return false;
    if (typeof node.getBoundingClientRect !== "function") return true;
    var r = node.getBoundingClientRect();
    return !!(r && (r.width > 0 || r.height > 0));
  }

  /* The AI tutor's chat panel opens over this same corner. The button
     stands down while it is open rather than sitting underneath it: a
     control a mouse cannot reach but a keyboard still can is worse than
     no control at all. */
  function cornerCovered() {
    var panel = byId("aiPanel");
    return !!panel && !panel.hidden;
  }

  function sync() {
    if (!BTN) return;
    var covered = cornerCovered();
    BTN.classList.toggle("btt-stacked", onScreen(byId("aiFab")) && !covered);
    BTN.hidden = covered || pageY() < THRESHOLD;
  }

  function toTop() {
    var reduced = !!(win.matchMedia && win.matchMedia("(prefers-reduced-motion: reduce)").matches);
    var root = doc.documentElement;
    if (!reduced && root && root.style && "scrollBehavior" in root.style) {
      win.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else if (typeof win.scrollTo === "function") {
      win.scrollTo(0, 0);
    }
    sync();
  }

  function build() {
    if (byId("bttBtn")) return;                       /* built once */
    if (!doc.body || typeof doc.body.appendChild !== "function") return;
    var b = doc.createElement("button");
    b.id = "bttBtn";
    b.type = "button";
    b.className = "btt-fab no-print";
    b.title = "Back to top";
    b.setAttribute("aria-label", "Back to top");
    b.innerHTML = '<svg class="ic" aria-hidden="true"><use href="#i-top"/></svg>';
    b.hidden = true;                                  /* shown by sync() */
    if (typeof b.addEventListener === "function") b.addEventListener("click", toTop);
    else b.onclick = toTop;
    doc.body.appendChild(b);
    BTN = b;
    sync();
  }

  function wire() {
    if (typeof win.addEventListener !== "function") return;
    win.addEventListener("scroll", sync, { passive: true });
    win.addEventListener("resize", sync);
    /* ai.js shows and hides its own button on the connection events and
       opens its panel on a click. Re-checking once after either — on the
       next turn of the event loop, once the DOM has settled — keeps this
       button honest without it needing to know more about the tutor than
       the two ids above. */
    win.addEventListener("online", sync);
    win.addEventListener("offline", sync);
    if (typeof doc.addEventListener === "function") {
      doc.addEventListener("click", function () { setTimeout(sync, 0); }, true);
    }
  }

  win.BACK_TO_TOP = {
    sync: sync,
    toTop: toTop,
    threshold: THRESHOLD
  };

  if (doc.readyState === "loading" && typeof doc.addEventListener === "function") {
    doc.addEventListener("DOMContentLoaded", function () { build(); wire(); });
  } else {
    build();
    wire();
  }
})();
