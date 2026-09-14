/* Node check for the offline shell (sw.js).  Zero-dependency:
     run with  node tests/sw.js

   Verifies the things that used to leave some devices without a working
   offline copy while others were fine:
     - install caches every shell entry independently, so one flaky asset
       (a weak connection, a full cache, a 404) can no longer make the
       whole install fail and leave the device with nothing
     - every page is cached under its OWN url — an earlier build stored
       every navigation under "./index.html", so a device that had once
       opened the duplex book tool could get the wrong page back offline
     - offline navigation serves the cached copy of the requested page,
       then falls back to the app shell for anything else
     - subresources are cache-first; non-GET and cross-origin requests
       (the Turnstile script) bypass the worker
     - activate clears old shell versions and claims clients
   Run: node tests/sw.js */

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const src = fs.readFileSync(path.join(__dirname, "..", "sw.js"), "utf8");

/* ---------------- fake service worker environment ---------------- */

function normKey(k) {
  let s = k;
  if (s && typeof s === "object" && s.url) s = s.url;
  /* Relative keys ("./index.html") resolve against the worker's location,
     exactly like real cache keys do. */
  s = new URL(String(s), "https://lib.example/Lib/sw.js").pathname;
  return s.replace(/^\//, "");
}

function makeHarness() {
  const listeners = { install: [], activate: [], fetch: [] };
  const cachesMap = new Map();      /* cache name -> Map(normKey -> response) */
  const networkMap = new Map();     /* normKey -> { ok, status, body } */
  /* Tests seed the "server" through this object; keys are normalized the
     same way cache keys are. */
  const network = {
    set: function (url, opts) { networkMap.set(normKey(url), opts); },
    get: function (url) { return networkMap.get(normKey(url)); }
  };
  let fetchFails = false;
  let skipWaitingCalls = 0;
  let claimCalls = 0;

  function makeResponse(url, opts) {
    opts = opts || {};
    const ok = opts.ok !== false;
    const r = {
      ok: ok,
      status: opts.status || (ok ? 200 : 404),
      url: String(url),
      body: opts.body !== undefined ? opts.body : "body:" + url,
      clone: function () { return makeResponse(r.url, { ok: r.ok, status: r.status, body: r.body }); }
    };
    return r;
  }

  function networkFetch(url) {
    const key = normKey(url);
    if (fetchFails) return Promise.reject(new Error("network down"));
    const hit = networkMap.get(key);
    if (!hit) return Promise.reject(new Error("network 404 for " + key));
    return Promise.resolve(makeResponse(key, hit));
  }

  function cacheFor(name) {
    if (!cachesMap.has(name)) cachesMap.set(name, new Map());
    const m = cachesMap.get(name);
    return {
      add: function (url) {
        const key = normKey(url);
        return networkFetch(url).then(function (res) { m.set(key, res); });
      },
      put: function (key, res) { m.set(normKey(key), res); return Promise.resolve(); },
      match: function (key) { return Promise.resolve(m.get(normKey(key))); }
    };
  }

  const cachesAPI = {
    open: function (name) { return Promise.resolve(cacheFor(name)); },
    match: function (req) {
      const key = normKey(req);
      for (const m of cachesMap.values()) if (m.has(key)) return Promise.resolve(m.get(key));
      return Promise.resolve(undefined);
    },
    keys: function () { return Promise.resolve([...cachesMap.keys()]); },
    delete: function (name) { return Promise.resolve(cachesMap.delete(name)); }
  };

  const selfObj = {
    location: { origin: "https://lib.example", href: "https://lib.example/Lib/sw.js" },
    addEventListener: function (type, fn) { listeners[type].push(fn); },
    skipWaiting: function () { skipWaitingCalls++; return Promise.resolve(); },
    clients: { claim: function () { claimCalls++; return Promise.resolve(); } }
  };

  const sandbox = {
    self: selfObj,
    caches: cachesAPI,
    fetch: networkFetch,
    console: console,
    URL: URL,
    Promise: Promise,
    setTimeout: setTimeout,
    clearTimeout: clearTimeout
  };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox);

  function dispatch(type, evt) {
    const waits = [];
    let responded = null;
    evt = Object.assign({
      waitUntil: function (p) { waits.push(p); },
      respondWith: function (p) { responded = p; }
    }, evt || {});
    (listeners[type] || []).forEach(function (fn) { fn(evt); });
    return { waits: waits, responded: responded, evt: evt };
  }

  return {
    network: network,
    caches: cachesAPI,
    dispatch: dispatch,
    setOffline: function (v) { fetchFails = v; },
    cacheHas: function (name, key) {
      const m = cachesMap.get(name);
      return !!(m && m.has(normKey(key)));
    },
    cacheEntries: function (name) {
      return [...((cachesMap.get(name) || new Map())).keys()];
    },
    skipWaitingCalls: function () { return skipWaitingCalls; },
    claimCalls: function () { return claimCalls; },
    APP_SHELL: sandbox.APP_SHELL,
    CACHE_NAME: sandbox.CACHE_NAME
  };
}

/* ---------------- checks ---------------- */

(async function main() {
  let bad = 0;
  async function t(label, fn) {
    try {
      await fn();
      console.log("  ok  " + label);
    } catch (e) {
      bad++;
      console.log("  FAIL " + label);
      console.log("       " + String((e && e.message) || e).split("\n")[0]);
    }
  }

  await t("install caches every shell entry, tolerating one missing asset", async () => {
    const h = makeHarness();
    const missing = "./assets/icons/apple-touch-icon.png";
    for (const url of h.APP_SHELL) {
      if (url !== missing) h.network.set(url, { ok: true });
    }
    const d = h.dispatch("install");
    await Promise.all(d.waits);   /* must not reject */
    for (const url of h.APP_SHELL) {
      if (url === missing) {
        assert(!h.cacheHas(h.CACHE_NAME, url), url + " must stay absent");
      } else {
        assert(h.cacheHas(h.CACHE_NAME, url), url + " must be cached");
      }
    }
    assert.strictEqual(h.skipWaitingCalls(), 1, "install must finish with skipWaiting");
  });

  await t("install completes even when nothing can be cached", async () => {
    const h = makeHarness();   /* no network entries at all */
    const d = h.dispatch("install");
    await Promise.all(d.waits);   /* must not reject */
    assert.strictEqual(h.skipWaitingCalls(), 1, "the worker must still activate");
  });

  await t("a navigated page is cached under its own URL, not over index.html", async () => {
    const h = makeHarness();
    h.network.set("https://lib.example/Lib/book.html", { ok: true, body: "BOOK" });
    const req = { method: "GET", url: "https://lib.example/Lib/book.html", mode: "navigate" };
    const d = h.dispatch("fetch", { request: req });
    const res = await d.responded;
    assert(res && res.body === "BOOK", "the live response is returned");
    assert(h.cacheHas(h.CACHE_NAME, "/Lib/book.html"), "book.html must be cached under its own path");
    assert(!h.cacheHas(h.CACHE_NAME, "./index.html"), "the index.html shell entry must not be overwritten");
  });

  await t("offline navigation serves the cached copy of the requested page", async () => {
    const h = makeHarness();
    h.network.set("https://lib.example/Lib/book.html", { ok: true, body: "BOOK" });
    const req = { method: "GET", url: "https://lib.example/Lib/book.html", mode: "navigate" };
    await h.dispatch("fetch", { request: req }).responded;   /* one online visit */
    h.setOffline(true);
    const res = await h.dispatch("fetch", { request: req }).responded;
    assert(res && res.body === "BOOK", "the cached page is served");
  });

  await t("offline navigation falls back to the app shell for unknown pages", async () => {
    const h = makeHarness();
    h.network.set("index.html", { ok: true, body: "APP" });
    await Promise.all(h.dispatch("install").waits);
    h.setOffline(true);
    const req = { method: "GET", url: "https://lib.example/Lib/anything-else.html", mode: "navigate" };
    const res = await h.dispatch("fetch", { request: req }).responded;
    assert(res && res.body === "APP", "the shell is served for uncached pages");
  });

  await t("subresources are served from the cache first", async () => {
    const h = makeHarness();
    h.network.set("manifest.webmanifest", { ok: true, body: "MANIFEST" });
    await Promise.all(h.dispatch("install").waits);
    h.setOffline(true);
    const req = { method: "GET", url: "https://lib.example/Lib/manifest.webmanifest", mode: "no-cors" };
    const res = await h.dispatch("fetch", { request: req }).responded;
    assert(res && res.body === "MANIFEST", "cached subresource is served offline");
  });

  await t("missing subresources are fetched and stored for next time", async () => {
    const h = makeHarness();
    h.network.set("https://lib.example/Lib/extra.js", { ok: true, body: "EXTRA" });
    const req = { method: "GET", url: "https://lib.example/Lib/extra.js", mode: "no-cors" };
    const res = await h.dispatch("fetch", { request: req }).responded;
    assert(res && res.body === "EXTRA", "the live response is returned");
    assert(h.cacheHas(h.CACHE_NAME, "https://lib.example/Lib/extra.js"), "and cached under its URL");
  });

  await t("non-GET requests bypass the worker", () => {
    const h = makeHarness();
    const d = h.dispatch("fetch", {
      request: { method: "POST", url: "https://lib.example/Lib/index.html", mode: "navigate" }
    });
    assert.strictEqual(d.responded, null, "POST must not be handled");
  });

  await t("cross-origin requests (e.g. the Turnstile script) bypass the worker", () => {
    const h = makeHarness();
    const d = h.dispatch("fetch", {
      request: { method: "GET", url: "https://challenges.cloudflare.com/turnstile/v0/api.js", mode: "cors" }
    });
    assert.strictEqual(d.responded, null, "cross-origin fetches must go straight to the network");
  });

  await t("activate clears old shell versions and claims clients", async () => {
    const h = makeHarness();
    await h.caches.open(h.CACHE_NAME).then(function (c) { return c.put("./index.html", { ok: true, body: "APP" }); });
    const old = await h.caches.open("liberia-course-packs-v8");
    await old.put("./index.html", { ok: true, body: "OLD" });
    const d = h.dispatch("activate");
    await Promise.all(d.waits);
    const names = await h.caches.keys();
    assert(!names.includes("liberia-course-packs-v8"), "the old shell cache is deleted");
    assert(names.includes(h.CACHE_NAME), "the current shell cache is kept");
    assert.strictEqual(h.claimCalls(), 1, "clients are claimed");
  });

  console.log(bad ? "\nFAILED: " + bad : "\nALL SERVICE WORKER TESTS PASSED");
  process.exit(bad ? 1 : 0);
})();
