/* ============================================================
   shell.js — the Android app's bridge into the platform.

   This file is NOT part of the website. The Android build inserts it at the
   top of the built index.html, inside the APK only, so the platform itself
   stays exactly the single file that ships to GitHub Pages and USB sticks.

   It adds the four things a WebView cannot do on its own:

     1. printing            — window.print() becomes the Android print
                              dialog (with "Save as PDF" among the printers)
     2. saving a file       — the .docx packs the platform generates are
                              streamed into the phone's Downloads folder
     3. speaking            — the voice reader is served by the device's
                              text-to-speech engine
     4. going back          — the Back button closes whatever is open before
                              it closes the app

   Written in ES5 on purpose: the platform runs on old school tablets whose
   system WebView may be years behind.
   ============================================================ */
(function () {
  "use strict";

  var win = window;
  var doc = document;
  /* Avoid a literal closing script tag: build.sh refuses to inline one. */
  var CLOSE = "<" + "/script>";
  if (!win || !doc) return;

  var shell = win.AndroidShell;
  var root = doc.documentElement;
  if (root && root.className.indexOf("android-app") < 0) {
    root.className += " android-app";
  }

  /* ----------------------------------------------------------------
     The bridge may be missing (a debug build served from a plain server):
     leave the platform untouched rather than half-wire it.
     ---------------------------------------------------------------- */
  if (!shell) return;

  var bridge = shell;   /* bound before any helper captures it */

  function toast(message) {
    try {
      if (bridge && bridge.toast) bridge.toast(String(message || ""));
    } catch (e) { /* ignore */ }
  }

  /* ----------------------------------------------------------------
     In-app styling: the platform is already installed, so its "Install
     app" prompt and its offline-preparation note are noise here. The
     printable sheets themselves are never touched.
     ---------------------------------------------------------------- */
  function addStyle() {
    if (!doc.head) return;
    var style = doc.createElement("style");
    style.id = "android-shell-style";
    style.type = "text/css";
    style.textContent = [
      ".install-app{display:none !important}",
      "#installStatus{display:none !important}",
      /* the app is the shell: no rubber-band bounce at the top of the page */
      "html.android-app,html.android-app body{overscroll-behavior:none}",
      /* the platform's dialogs sit above the phone's navigation bar */
      ".ai-panel,#vrPanel{padding-bottom:env(safe-area-inset-bottom,0px)}"
    ].join("\n");
    doc.head.appendChild(style);
  }

  /* ================================================================
     1. PRINTING
     ================================================================ */
  var nativePrint = win.print;

  function print() {
    var title = "";
    try {
      title = doc.title || "";
    } catch (e) {
      title = "";
    }
    try {
      bridge.print(title);
    } catch (err) {
      /* the bridge is gone: fall back to the browser's own dialog */
      if (nativePrint) {
        try { nativePrint.call(win); } catch (e2) { nativePrint(); }
      }
    }
  }

  try {
    win.print = print;
  } catch (e) {
    try { Object.defineProperty(win, "print", { value: print, writable: true }); } catch (e2) {}
  }

  /* ================================================================
     2. SAVING FILES
     The platform builds a Blob, makes an object URL and clicks an anchor
     with a `download` attribute. Both halves are captured here: the blob
     is remembered when its URL is made, and the click is answered by
     streaming the blob into the phone's Downloads folder.
     ================================================================ */
  var blobs = {};
  var createdAt = {};

  var nativeCreate = win.URL && win.URL.createObjectURL;
  var nativeRevoke = win.URL && win.URL.revokeObjectURL;

  if (nativeCreate) {
    win.URL.createObjectURL = function (obj) {
      var url = nativeCreate.call(win.URL, obj);
      try {
        blobs[url] = obj;
        createdAt[url] = Date.now();
      } catch (e) { /* ignore */ }
      return url;
    };
  }
  if (nativeRevoke) {
    win.URL.revokeObjectURL = function (url) {
      try {
        delete blobs[url];
        delete createdAt[url];
      } catch (e) { /* ignore */ }
      return nativeRevoke.call(win.URL, url);
    };
  }

  /* Old object URLs that the platform forgot to revoke must not hold a
     whole pack in memory for the rest of the session. */
  setInterval(function () {
    var now = Date.now();
    for (var url in createdAt) {
      if (Object.prototype.hasOwnProperty.call(createdAt, url) && now - createdAt[url] > 120000) {
        delete blobs[url];
        delete createdAt[url];
        if (nativeRevoke) {
          try { nativeRevoke.call(win.URL, url); } catch (e) { /* ignore */ }
        }
      }
    }
  }, 60000);

  function base64(bytes) {
    var out = "";
    var step = 0x8000;                 /* keeps String.fromCharCode off the stack limit */
    for (var i = 0; i < bytes.length; i += step) {
      out += String.fromCharCode.apply(null, bytes.subarray(i, i + step));
    }
    return win.btoa(out);
  }

  var saving = false;

  function saveBlob(blob, name) {
    if (!blob || saving) return;
    saving = true;
    var handle = "";
    try {
      handle = bridge.startDownload(name || "Easy School document", blob.type || "", blob.size || 0);
    } catch (e) {
      handle = "";
    }
    if (!handle) {
      saving = false;
      toast("Could not start saving this file.");
      return;
    }

    var CHUNK = 256 * 1024;
    var offset = 0;

    function cleanup() {
      saving = false;
    }

    function fail(message) {
      try { bridge.cancelDownload(handle); } catch (e) { /* ignore */ }
      cleanup();
      toast(message || "Could not save this file. Check the free space on this device.");
    }

    function finish() {
      var result = "";
      try {
        result = bridge.finishDownload(handle);
      } catch (e) {
        result = "";
      }
      cleanup();
      if (!result) return;
      var parsed = null;
      try { parsed = JSON.parse(result); } catch (e) { parsed = null; }
      if (parsed && parsed.ok === false) fail(parsed.error);
      /* success is announced by the app itself, with the folder it went to */
    }

    function next() {
      if (offset >= blob.size) {
        finish();
        return;
      }
      var slice = blob.slice(offset, Math.min(offset + CHUNK, blob.size));
      var reader = new FileReader();
      reader.onload = function () {
        var ok = false;
        try {
          ok = bridge.appendDownload(handle, base64(new Uint8Array(reader.result)));
        } catch (e) {
          ok = false;
        }
        if (!ok) {
          fail("");
          return;
        }
        offset += CHUNK;
        /* yield to the UI between chunks so the "Saving…" card keeps painting */
        win.setTimeout(next, 0);
      };
      reader.onerror = function () { fail(""); };
      try {
        reader.readAsArrayBuffer(slice);
      } catch (e) {
        fail("");
      }
    }

    if (!blob.size) {
      finish();
      return;
    }
    next();
  }

  function fileNameFor(anchor) {
    var name = anchor.getAttribute("download") || "";
    try { name = decodeURIComponent(name); } catch (e) { /* keep as-is */ }
    if (!name) {
      var url = anchor.getAttribute("href") || "";
      var guess = url.split("?")[0].split("/").pop();
      name = guess && guess.indexOf("blob:") !== 0 ? guess : "Easy School document";
    }
    return name;
  }

  doc.addEventListener("click", function (event) {
    var target = event.target;
    while (target && target.nodeName !== "A") target = target.parentNode;
    if (!target || target.nodeName !== "A") return;
    if (!target.hasAttribute("download")) return;
    var href = target.getAttribute("href") || "";
    var blob = blobs[href];
    if (!blob) {
      /* not one of ours (or already revoked) — let the WebView have it */
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    saveBlob(blob, fileNameFor(target));
  }, true);

  /* ================================================================
     3. SPEECH
     Android's WebView has no speechSynthesis. The platform only needs a
     handful of properties and events, so a small shim over the device's
     text-to-speech engine is enough — the voice reader then behaves
     exactly as it does in Chrome, offline voices included.
     ================================================================ */
  var ttsReady = false;
  try {
    ttsReady = !!(bridge.ttsAvailable && bridge.ttsAvailable());
  } catch (e) {
    ttsReady = false;
  }

  if (ttsReady) {
    var voices = [];
    var voiceListeners = [];
    var queue = {};
    var generation = 0;
    var speakingCount = 0;
    var pendingCount = 0;
    var pausedFlag = false;
    var sequence = 0;

    function fire(type) {
      var synth = win.speechSynthesis;
      var handler = synth["on" + type];
      var event = { type: type, target: synth };
      if (typeof handler === "function") {
        try { handler.call(synth, event); } catch (e) { /* ignore */ }
      }
      for (var i = 0; i < voiceListeners.length; i++) {
        try { voiceListeners[i].call(synth, event); } catch (e) { /* ignore */ }
      }
    }

    function refreshVoices() {
      var raw = "[]";
      try { raw = bridge.ttsVoices() || "[]"; } catch (e) { raw = "[]"; }
      var list = [];
      try { list = JSON.parse(raw) || []; } catch (e) { list = []; }
      var out = [];
      for (var i = 0; i < list.length; i++) {
        var v = list[i] || {};
        out.push({
          name: String(v.name || ""),
          lang: String(v.lang || ""),
          voiceURI: String(v.voiceURI || ""),
          localService: v.localService !== false,
          "default": !!v["default"]
        });
      }
      voices = out;
      setTimeout(function () { fire("voiceschanged"); }, 0);
      return voices;
    }

    function Utterance(text) {
      this.text = text == null ? "" : String(text);
      this.lang = "";
      this.rate = 1;
      this.pitch = 1;
      this.volume = 1;
      this.voice = null;
      this.onstart = null;
      this.onend = null;
      this.onerror = null;
      this.onboundary = null;
      this.onpause = null;
      this.onresume = null;
      this.onmark = null;
    }

    function forget(id) {
      pendingCount = Math.max(0, pendingCount - 1);
      if (pendingCount === 0) speakingCount = 0;
      if (queue[id]) delete queue[id];
    }

    win.__androidTtsEvent = function (id, kind) {
      var entry = queue[id];
      if (!entry) return;
      if (kind === "start") {
        pendingCount = Math.max(0, pendingCount - 1);
        speakingCount++;
        if (typeof entry.onstart === "function") {
          try { entry.onstart({ type: "start", charIndex: 0, utterance: entry }); } catch (e) { /* ignore */ }
        }
        return;
      }
      if (kind === "end") {
        speakingCount = Math.max(0, speakingCount - 1);
        forget(id);
        if (typeof entry.onend === "function") {
          try { entry.onend({ type: "end", charIndex: entry.text.length, utterance: entry }); } catch (e) { /* ignore */ }
        }
        return;
      }
      speakingCount = Math.max(0, speakingCount - 1);
      forget(id);
      if (typeof entry.onerror === "function") {
        try { entry.onerror({ type: "error", error: "synthesis-failed", utterance: entry }); } catch (e) { /* ignore */ }
      }
    };

    win.__androidTtsVoices = function () {
      refreshVoices();
    };

    var synth = {
      speaking: false,
      pending: false,
      paused: false,
      onvoiceschanged: null,
      getVoices: function () {
        return voices;
      },
      speak: function (utterance) {
        if (!utterance) return;
        var id = "u" + (++sequence) + "-" + generation;
        queue[id] = utterance;
        pendingCount++;
        try {
          bridge.ttsSpeak(
            id,
            String(utterance.text || ""),
            String(utterance.lang || ""),
            utterance.voice && utterance.voice.voiceURI ? String(utterance.voice.voiceURI) : "",
            typeof utterance.rate === "number" ? utterance.rate : 1,
            typeof utterance.pitch === "number" ? utterance.pitch : 1,
            typeof utterance.volume === "number" ? utterance.volume : 1
          );
        } catch (e) {
          forget(id);
          if (typeof utterance.onerror === "function") {
            try { utterance.onerror({ type: "error", error: "synthesis-failed" }); } catch (e2) { /* ignore */ }
          }
        }
      },
      cancel: function () {
        generation++;
        var open = queue;
        queue = {};
        speakingCount = 0;
        pendingCount = 0;
        var ids = [];
        for (var id in open) {
          if (Object.prototype.hasOwnProperty.call(open, id)) ids.push(id);
        }
        try { bridge.ttsStop(); } catch (e) { /* ignore */ }
        for (var i = 0; i < ids.length; i++) {
          var u = open[ids[i]];
          if (u && typeof u.onend === "function") {
            /* the reader waits for onend to move on; a cancel is not an error */
            try { u.onend({ type: "end", charIndex: 0, utterance: u }); } catch (e) { /* ignore */ }
          }
        }
      },
      pause: function () {
        /* the engine has no pause: stop, and let the reader start again */
        pausedFlag = true;
        try { bridge.ttsStop(); } catch (e) { /* ignore */ }
      },
      resume: function () {
        pausedFlag = false;
      },
      addEventListener: function (type, handler) {
        if (type === "voiceschanged" && typeof handler === "function") voiceListeners.push(handler);
      },
      removeEventListener: function (type, handler) {
        if (type !== "voiceschanged") return;
        for (var i = voiceListeners.length - 1; i >= 0; i--) {
          if (voiceListeners[i] === handler) voiceListeners.splice(i, 1);
        }
      }
    };

    /* `speaking` and `pending` are read by the platform's voice reader on
       every tick, so they are kept live rather than set once. */
    try {
      Object.defineProperty(synth, "speaking", { get: function () { return speakingCount > 0; } });
      Object.defineProperty(synth, "pending", { get: function () { return pendingCount > 0; } });
      Object.defineProperty(synth, "paused", { get: function () { return pausedFlag; } });
    } catch (e) {
      /* an older WebView keeps the plain booleans; the reader still works */
    }

    try {
      win.speechSynthesis = synth;
      win.SpeechSynthesisUtterance = Utterance;
    } catch (e) {
      try {
        Object.defineProperty(win, "speechSynthesis", { value: synth });
        Object.defineProperty(win, "SpeechSynthesisUtterance", { value: Utterance });
      } catch (e2) { /* nothing else to try */ }
    }

    /* The engine lists its voices a moment after it starts; fetch them now and
       again when the platform first asks, so the Man / Woman list is never
       permanently empty. */
    refreshVoices();
    setTimeout(function () { refreshVoices(); }, 800);
    setTimeout(function () { refreshVoices(); }, 3000);
  }

  /* ================================================================
     4. BACK BUTTON
     Returns true when the page closed something, so the app knows the
     press was used. The order matches what is visually on top.
     ================================================================ */
  function visible(el) {
    if (!el) return false;
    if (el.hidden) return false;
    if (el.hasAttribute && el.hasAttribute("hidden")) return false;
    if (el.open === true) return true;               /* <dialog open> */
    var style = win.getComputedStyle ? win.getComputedStyle(el) : null;
    if (style && (style.display === "none" || style.visibility === "hidden")) return false;
    return true;
  }

  function click(id) {
    var el = doc.getElementById(id);
    if (!el || !visible(el)) return false;
    try {
      el.click();
      return true;
    } catch (e) {
      return false;
    }
  }

  win.__androidBack = function () {
    /* 1. the teaching tools dialog */
    var teaching = doc.getElementById("teachingDialog");
    if (teaching && teaching.hasAttribute("open")) {
      if (click("twClose")) return true;
      try {
        teaching.close();
        return true;
      } catch (e) { /* ignore */ }
    }

    /* 2. the book print sequence */
    var book = doc.getElementById("bookMask");
    if (visible(book)) {
      if (click("bkClose")) return true;
      book.hidden = true;
      doc.body.classList.remove("book-open");
      return true;
    }

    /* 3. the AI tutor */
    var ai = doc.getElementById("aiPanel");
    if (visible(ai)) {
      if (click("aiClose")) return true;
      ai.hidden = true;
      return true;
    }

    /* 4. the voice reader */
    var voice = doc.getElementById("vrPanel");
    if (visible(voice)) {
      if (click("vrClose")) return true;
      voice.hidden = true;
      return true;
    }

    /* 5. the settings drawer on a phone */
    if (doc.body.classList.contains("panel-open")) {
      doc.body.classList.remove("panel-open");
      return true;
    }

    return false;
  };

  /* ================================================================
     Opening a link the app cannot show itself (support mail, a website)
     belongs in the phone's browser, not in a WebView with no address bar.
     ================================================================ */
  var nativeOpen = win.open;
  win.open = function (url) {
    if (url) {
      try {
        bridge.openExternal(String(url));
        return null;
      } catch (e) { /* fall through */ }
    }
    return nativeOpen ? nativeOpen.apply(win, arguments) : null;
  };

  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", addStyle);
  } else {
    addStyle();
  }
})();
