/* ============================================================
   "Are you human?" — Cloudflare Turnstile gate for the platform.

   A Turnstile card covers the site until the visitor passes it. The token
   the widget issues is handed to the AI tutor, which sends it with every
   chat request; the server-side proxy verifies it (functions/api/chat.js
   on Cloudflare Pages, worker/groq-proxy.js for static hosts).

   Configuration — both optional, and neither is required for the app to
   run:

     window.TURNSTILE_SITE_KEY            injected by build.sh from the
                                          TURNSTILE_SITE_KEY variable
     <meta name="turnstile-site-key" ...> or set it by hand in the page

   The site key is public by design (it only identifies the widget); the
   matching secret key stays on the server.

   With no site key the gate stays off entirely — that is what offline and
   USB copies (file://) need, and what keeps the test suites clean. So does
   a visitor with no connection: the check cannot run offline, so it is not
   asked for.

   Public API (window.HUMAN_CHECK):

     enabled()        true when a site key is configured
     token()          a token that is still good to send, or "" if none
     requestToken()   Promise<string>; renews the token quietly and only
                      shows the card if the visitor has to act
     verify(note)     Promise<string>; shows the card and resolves once the
                      visitor passes (or chooses to continue without)
     consume(token)   marks a token spent — Turnstile tokens are single use
   ============================================================ */
(function () {
  "use strict";

  var API_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  var STORE_KEY = "humancheck.v1";
  var TOKEN_TTL = 240000;   /* Turnstile tokens live 300 s — renew a little early */
  var QUIET_WAIT = 5000;    /* a quiet renewal gets this long before the card shows */
  var ESCAPE_WAIT = 8000;   /* after this long without a widget, offer a way out */
  var BROKEN_COOLDOWN = 60000;  /* before trying a failed widget again */

  /* ---- site key ---- */
  function siteKey() {
    if (window.TURNSTILE_SITE_KEY) return String(window.TURNSTILE_SITE_KEY).trim();
    var meta = document.querySelector('meta[name="turnstile-site-key"]');
    if (meta && meta.content && meta.content.indexOf("__") !== 0) return meta.content.trim();
    return "";
  }

  var KEY = siteKey();
  /* No key, or a file:// copy opened from a USB stick: no gate at all. */
  var OFF = !KEY || location.protocol === "file:";

  var token = "", tokenAt = 0, spent = true;
  var apiReady = false, apiBroken = false, apiBrokenAt = 0, skipped = false;
  var widgetId = null;
  var veil = null, noteEl = null, slot = null, skipBtn = null;
  var waiters = [];
  var loadQueue = [], loading = false;
  var quietTimer = null, escapeTimer = null, lastKick = 0;

  /* ---- remembering the pass for this browser session ---- */
  function restore() {
    try {
      var raw = window.sessionStorage.getItem(STORE_KEY);
      if (!raw) return;
      var saved = JSON.parse(raw);
      if (saved && saved.skip) { skipped = true; return; }
      if (saved && saved.t && Date.now() - saved.at < TOKEN_TTL) {
        token = saved.t; tokenAt = saved.at; spent = false;
      }
    } catch (e) { /* private mode / no storage — simply ask again */ }
  }

  function remember() {
    try {
      if (skipped) {
        window.sessionStorage.setItem(STORE_KEY, JSON.stringify({ skip: true }));
      } else if (token && !spent) {
        window.sessionStorage.setItem(STORE_KEY, JSON.stringify({ t: token, at: tokenAt }));
      } else {
        window.sessionStorage.removeItem(STORE_KEY);
      }
    } catch (e) {}
  }

  /* A token is only worth sending while it is fresh and unspent. */
  function fresh() {
    return (!spent && token && Date.now() - tokenAt < TOKEN_TTL) ? token : "";
  }

  /* ---- the card ---- */
  function build() {
    if (veil || !document.body) return;
    veil = document.createElement("div");
    veil.id = "hcVeil";
    veil.className = "hc-veil hc-quiet";
    veil.setAttribute("aria-hidden", "true");
    veil.setAttribute("role", "dialog");
    veil.setAttribute("aria-modal", "true");
    veil.setAttribute("aria-labelledby", "hcTitle");
    veil.innerHTML =
      '<div class="hc-card">' +
        '<div class="hc-badge"><svg class="ic" aria-hidden="true"><use href="#i-crest"/></svg></div>' +
        '<h2 id="hcTitle">Are you human?</h2>' +
        '<p class="hc-note" id="hcNote">Please complete the check to open the Liberian course packs.</p>' +
        '<div class="hc-slot" id="hcSlot"></div>' +
        '<button type="button" class="hc-skip" id="hcSkip" hidden>Continue without verifying</button>' +
        '<p class="hc-foot">This keeps automated software off the Emmanuel AI tutor.</p>' +
      '</div>';
    document.body.appendChild(veil);
    noteEl = veil.querySelector("#hcNote");
    slot = veil.querySelector("#hcSlot");
    skipBtn = veil.querySelector("#hcSkip");
    skipBtn.onclick = skip;
  }

  function show(note) {
    build();
    if (!veil) return;
    if (note && noteEl) noteEl.textContent = note;
    clearTimeout(quietTimer);
    veil.classList.remove("hc-quiet");
    veil.removeAttribute("aria-hidden");
    document.body.classList.add("hc-locked");
    armEscape();
  }

  function isQuiet() {
    return !veil || veil.classList.contains("hc-quiet");
  }

  function hide() {
    clearTimeout(quietTimer);
    clearTimeout(escapeTimer);
    if (veil) veil.classList.add("hc-quiet");
    document.body.classList.remove("hc-locked");
  }

  function armEscape() {
    clearTimeout(escapeTimer);
    escapeTimer = setTimeout(function () {
      if (fresh()) return;
      if (skipBtn) skipBtn.hidden = false;
    }, ESCAPE_WAIT);
  }

  function skip() {
    skipped = true;
    remember();
    hide();
    settle("");
  }

  /* ---- Cloudflare's script ---- */
  function loadApi(next) {
    /* The host page may already have loaded Turnstile itself. */
    if (window.turnstile && window.turnstile.render) { apiReady = true; next(); return; }
    if (apiReady) { next(); return; }
    if (broken()) { next(); return; }
    loadQueue.push(next);
    if (loading) return;
    loading = true;
    var s = document.createElement("script");
    s.src = API_SRC;
    s.async = true;
    s.crossOrigin = "anonymous";
    s.referrerPolicy = "no-referrer-when-downgrade";
    s.onload = function () {
      apiReady = !!(window.turnstile && window.turnstile.render);
      flushLoadQueue();
    };
    s.onerror = function () {
      giveUp(isQuiet());     /* offline, or challenges.cloudflare.com blocked */
      flushLoadQueue();
    };
    (document.head || document.body).appendChild(s);
  }

  function flushLoadQueue() {
    loading = false;
    var queue = loadQueue.slice();
    loadQueue.length = 0;
    queue.forEach(function (fn) {
      try { fn(); } catch (e) {}
    });
  }

  /* Ask the widget for a token. `force` starts a new attempt even if one is
     only moments old (the card has just been put in front of the visitor, or
     a quiet renewal went nowhere). */
  function kick(force) {
    if (broken()) { giveUp(isQuiet()); return; }
    var now = Date.now();
    if (!force && now - lastKick < 1500) return;
    lastKick = now;
    if (widgetId === null) render(); else renew();
  }

  /* A failure lasts one cooldown, not the whole visit: somebody may well
     have come back online since. */
  function broken() {
    return apiBroken && Date.now() - apiBrokenAt < BROKEN_COOLDOWN;
  }

  function render() {
    if (widgetId !== null || !apiReady || !slot) return;
    try {
      widgetId = window.turnstile.render(slot, {
        sitekey: KEY,
        theme: "light",
        size: "flexible",
        callback: onPass,
        "expired-callback": onExpire,
        "timeout-callback": onExpire,
        "error-callback": function () { giveUp(isQuiet()); }
      });
    } catch (e) { giveUp(isQuiet()); }
  }

  /* Mint a fresh token from the widget we already have. */
  function renew() {
    if (widgetId === null) { render(); return; }
    try { window.turnstile.reset(widgetId); } catch (e) { giveUp(isQuiet()); }
  }

  /* ---- widget callbacks ---- */
  function onPass(value) {
    if (!value) return;
    token = value;
    tokenAt = Date.now();
    spent = false;
    skipped = false;
    remember();
    hide();
    settle(token);
  }

  /* Expired or timed out: drop the token. A renewal that was meant to happen
     quietly now needs the visitor, so put the card in front of them. */
  function onExpire() {
    token = "";
    spent = true;
    remember();
    if (skipBtn) skipBtn.hidden = false;
    if (isQuiet()) { show(); kick(true); }
  }

  /* The widget could not run. Let people through rather than lock them out
     of an app that works perfectly well offline — and when the visitor is
     not actually waiting on the card, stay quiet about it: the request
     still goes out, and the proxy decides what to do. */
  function giveUp(quiet) {
    apiBroken = true;
    apiBrokenAt = Date.now();
    if (!quiet) {
      if (skipBtn) skipBtn.hidden = false;
      show();
    }
    settle("");
  }

  function settle(value) {
    var pending = waiters.slice();
    waiters.length = 0;
    clearTimeout(quietTimer);
    clearTimeout(escapeTimer);
    pending.forEach(function (w) {
      try { w.resolve(value); } catch (e) {}
    });
  }

  /* ---- asking for a token ----
     `loud` shows the card straight away (page load, or the proxy asked for
     a new check). Otherwise the renewal happens quietly and the card only
     appears if the visitor is actually needed. */
  function acquire(note, loud) {
    return new Promise(function (resolve) {
      var current = fresh();
      if (current) { resolve(current); return; }
      waiters.push({ resolve: resolve, note: note });
      if (waiters.length > 1) {          /* a check is already under way */
        if (loud) show(note);
        return;
      }
      if (loud) {
        show(note);
      } else {
        clearTimeout(quietTimer);
        /* A renewal nobody is waiting on: try quietly first, and only put the
           card up if the visitor turns out to be needed. */
        quietTimer = setTimeout(function () { show(note); kick(true); }, QUIET_WAIT);
      }
      loadApi(function () { kick(true); });
    });
  }

  /* ---- public API ---- */
  window.HUMAN_CHECK = {
    enabled: function () { return !OFF; },
    token: function () { return fresh(); },
    requestToken: function () {
      if (OFF || skipped) return Promise.resolve("");
      return acquire("", false);
    },
    verify: function (note) {
      if (OFF) return Promise.resolve("");
      return acquire(note || "", true);
    },
    consume: function (value) {
      if (value && value === token) {
        spent = true;
        remember();
      }
    }
  };

  if (OFF) return;

  /* ---- boot: gate the platform until the visitor is checked ---- */
  function boot() {
    restore();
    if (fresh() || skipped) return;                    /* already checked */
    if (navigator.onLine === false) return;            /* offline copy */
    acquire("Please complete the check to open the Liberian course packs.", true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
