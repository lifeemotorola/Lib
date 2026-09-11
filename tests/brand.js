/* Node check for the white-label configuration (brand.js).
   Guards the promise that a licensee can rebrand in one place, and the
   equally important promise that the default build changes nothing:

     - defaults keep the original Liberian branding
     - an override renames the product, the tutor and the footer
     - document.title is NOT touched unless docTitle is set explicitly
       (the title lists every subject, and printing rewrites it)
     - a missing element, a bad override or a thrown error never breaks
       the page

   Run: node tests/brand.js */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const root = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(root, "brand.js"), "utf8");

/* A tiny DOM: just enough for querySelectorAll("[data-brand]"). */
function makeDom(attrs) {
  const nodes = attrs.map(function (a) {
    return {
      _attr: a,
      textContent: "original",
      hidden: false,
      getAttribute: function (k) { return k === "data-brand" ? a : null; },
      setAttribute: function () {}
    };
  });
  return {
    title: "Liberian Course Pack Generator &middot; English, Phonics, ..., History, ...",
    readyState: "complete",
    listeners: {},
    addEventListener: function (e, fn) { this.listeners[e] = fn; },
    querySelectorAll: function (sel) { return sel === "[data-brand]" ? nodes : []; },
    _nodes: nodes
  };
}

function load(override, dom) {
  const document = dom || makeDom(["product", "tutor", "support"]);
  const sandbox = {
    console: console,
    document: document,
    Array: Array,
    String: String
  };
  sandbox.window = sandbox;
  if (override) sandbox.APP_BRAND = override;
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox, { filename: "brand.js" });
  return { cfg: sandbox.window.APP_BRAND, BRAND: sandbox.window.BRAND, document: document };
}

/* ---------------- 1. defaults change nothing user-visible ---------------- */
{
  const dom = makeDom(["product", "short", "tutor", "support", "footerLeft", "footerRight"]);
  const { cfg } = load(undefined, dom);
  assert.strictEqual(cfg.tutor, "Emmanuel", "the default tutor name is unchanged");
  assert.strictEqual(cfg.short, "Liberia Packs");
  assert.ok(cfg.product.indexOf("Liberian National Curriculum") === 0);
  assert.strictEqual(cfg.docTitle, "", "docTitle is empty by default");
  assert.strictEqual(dom.title.indexOf("History") >= 0, true,
    "the default build must NOT rewrite the document title — tests and printing depend on it");
  /* an unset support address hides the element rather than printing "undefined" */
  assert.strictEqual(dom._nodes[3].hidden, true, "no support address means no support element");
}

/* ---------------- 2. a licensee override renames everything ---------------- */
{
  const dom = makeDom(["product", "short", "tutor", "support", "footerLeft", "footerRight"]);
  const { cfg } = load({
    product: "Rising Academies &middot; Course Pack Generator",
    short: "Rising Packs",
    tutor: "Rising Tutor",
    support: "help@rising.example"
  }, dom);
  assert.strictEqual(cfg.tutor, "Rising Tutor");
  assert.strictEqual(cfg.short, "Rising Packs");
  const nodes = dom._nodes;
  assert.strictEqual(nodes[0].textContent, "Rising Academies · Course Pack Generator");
  assert.strictEqual(nodes[1].textContent, "Rising Packs");
  assert.strictEqual(nodes[2].textContent, "Rising Tutor");
  assert.strictEqual(nodes[3].textContent, "help@rising.example");
  assert.strictEqual(nodes[3].hidden, false, "a provided support address is shown");
  assert.strictEqual(dom.title.indexOf("History") >= 0, true,
    "an override without docTitle still leaves the document title alone");
}

/* ---------------- 3. docTitle is the only way to change the title ---------------- */
{
  const dom = makeDom(["product"]);
  load({ product: "Anything", docTitle: "Rising Academies · Course Packs" }, dom);
  assert.strictEqual(dom.title, "Rising Academies · Course Packs");
}

/* ---------------- 4. bad input is repaired, never fatal ---------------- */
{
  const { cfg } = load({ tutor: 42, product: null, support: {}, short: "   " });
  assert.strictEqual(cfg.tutor, "Emmanuel", "a non-string tutor falls back to the default");
  assert.ok(cfg.product.indexOf("Liberian National Curriculum") === 0);
  assert.strictEqual(cfg.support, "");
  assert.strictEqual(cfg.short, "Liberia Packs");
}
{
  /* a DOM with no branded elements at all must not throw */
  const { BRAND } = load({ tutor: "X" }, makeDom([]));
  assert.strictEqual(BRAND.apply(), true);
}

/* ---------------- 5. the rest of the platform reads the same object ---------------- */
{
  const ai = fs.readFileSync(path.join(root, "ai.js"), "utf8");
  assert.ok(/window\.APP_BRAND && window\.APP_BRAND\.tutor/.test(ai),
    "ai.js must take the tutor name from the brand configuration");
  assert.ok(/brand\.js/.test(fs.readFileSync(path.join(root, "build.sh"), "utf8")),
    "build.sh must inline brand.js");
}

console.log("OK: white-label branding (brand.js) tests passed.");
