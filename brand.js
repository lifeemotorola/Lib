/* ============================================================
   brand.js — white-label configuration.

   A school chain, a publisher or a ministry licensing this platform will want
   their own name on it, not the author's. Every buyer-facing string therefore
   lives in ONE object, `window.APP_BRAND`, which a licensee edits here (or
   overrides with a single script tag placed before this file loads):

       window.APP_BRAND = {
         product: "Rising Academies · Course Pack Generator",
         short:   "Rising Packs",
         tutor:   "Rising Tutor",
         support: "support@rising.example"
       };

   NOTE: never write a literal closing script tag inside any file that
   build.sh inlines — it ends the inlined script early and breaks the page.

   Nothing else needs to change: the header, the footer, the document title and
   the AI tutor's name all follow this object. Leaving it untouched keeps the
   original Liberian National Curriculum branding exactly as it is today.

   This file never renames or removes curriculum content, and never touches
   the Ministry of Education material the notes are transcribed from.
   ============================================================ */
(function () {
  "use strict";

  var DEFAULTS = {
    product: "Liberian National Curriculum &middot; Course Pack Generator",
    short: "Liberia Packs",
    tutor: "Emmanuel",
    support: "",
    footerLeft: "Liberian National Curriculum",
    footerRight: "Course Pack Generator",
    /* docTitle is deliberately empty by default. The page's <title> is not
       decoration: it lists every subject (which the tests rely on) and the
       platform rewrites it with the document name when printing. Only set
       docTitle when a licensee really wants their own wording there. */
    docTitle: ""
  };

  function str(v, fallback, max) {
    return (typeof v === "string" && v.trim()) ? v.slice(0, max || 160) : fallback;
  }

  var over = (typeof window.APP_BRAND === "object" && window.APP_BRAND) || {};
  var cfg = {
    product: str(over.product, DEFAULTS.product, 240),
    short: str(over.short, DEFAULTS.short, 60),
    tutor: str(over.tutor, DEFAULTS.tutor, 60),
    support: str(over.support, DEFAULTS.support, 160),
    footerLeft: str(over.footerLeft, DEFAULTS.footerLeft, 160),
    footerRight: str(over.footerRight, DEFAULTS.footerRight, 160),
    docTitle: str(over.docTitle, DEFAULTS.docTitle, 240)
  };

  /* Publish the merged configuration so every module reads the same object. */
  window.APP_BRAND = cfg;

  function textOf(v) { return String(v).replace(/&middot;/g, "·").replace(/&amp;/g, "&"); }

  /* Replace the text of anything marked data-brand="<key>". Cheap, declarative,
     and impossible to get wrong: a missing attribute is simply skipped. */
  function apply() {
    try {
      /* Only a licensee who explicitly sets docTitle gets a different
         browser title. The default is to leave it alone. */
      if (cfg.docTitle && document.title) document.title = textOf(cfg.docTitle);
      var nodes = document.querySelectorAll("[data-brand]");
      Array.prototype.forEach.call(nodes, function (el) {
        var key = el.getAttribute("data-brand");
        if (key === "product" || key === "short" || key === "tutor" || key === "footerLeft" || key === "footerRight") {
          el.textContent = textOf(cfg[key]);
        } else if (key === "support") {
          if (cfg.support) {
            el.textContent = cfg.support;
            el.setAttribute("href", "mailto:" + cfg.support);
          } else {
            el.hidden = true;
          }
        }
      });
    } catch (e) { /* branding must never break the platform */ }
    return true;
  }

  window.BRAND = { cfg: cfg, apply: apply };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }
})();
