/* Node check for the Android bridge (android/web/shell/shell.js).  Zero deps:
     run with  node tests/android-shell.js

   The bridge is what turns the platform into an app, and none of it can be
   exercised in a desktop browser, so it is checked here against a fake
   AndroidShell + a small DOM stand-in:

     - window.print() goes to the device's print dialog, not a browser dialog
     - a generated .docx leaves the page as a real file: the blob is streamed
       in base64 chunks, then finished (and a failed save is reported, never
       silently dropped)
     - the speech shim exposes the exact surface voice.js uses, and an engine
       event (end / error) fires the utterance callbacks the reader waits for
     - cancel() releases every waiting utterance instead of leaving the
       reader stuck on one that will never finish
     - Back closes the top-most dialog and only then leaves the app
     - the bridge stays inert when AndroidShell is absent, so a browser build
       cannot half-wire itself
   Run: node tests/android-shell.js */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const SHELL = path.join(__dirname, "..", "android", "web", "shell", "shell.js");
const source = fs.readFileSync(SHELL, "utf8");

/* ---------------- a small DOM ---------------- */

function makeElement(tag, props) {
  const el = Object.assign({
    tagName: String(tag || "div").toUpperCase(),
    nodeName: String(tag || "div").toUpperCase(),
    id: "",
    className: "",
    textContent: "",
    hidden: false,
    children: [],
    attributes: {},
    listeners: {},
    hasAttribute(name) { return Object.prototype.hasOwnProperty.call(this.attributes, name); },
    getAttribute(name) { return this.hasAttribute(name) ? this.attributes[name] : null; },
    setAttribute(name, value) { this.attributes[name] = String(value); },
    removeAttribute(name) { delete this.attributes[name]; },
    appendChild(child) { this.children.push(child); child.parentNode = this; return child; },
    addEventListener(type, fn) { (this.listeners[type] = this.listeners[type] || []).push(fn); },
    removeEventListener() {},
    click() {
      if (typeof this.onclick === "function") this.onclick({ target: this });
      const list = this.listeners.click || [];
      for (const fn of list) fn({ target: this });
      return true;
    },
    classListContains() { return false; }
  }, props || {});
  el.classList = {
    add(c) { if (!el.className.split(" ").includes(c)) el.className = (el.className + " " + c).trim(); },
    remove(c) { el.className = el.className.split(" ").filter((x) => x && x !== c).join(" "); },
    contains(c) { return el.className.split(" ").includes(c); },
    toggle(c) { if (el.classList.contains(c)) el.classList.remove(c); else el.classList.add(c); }
  };
  return el;
}

function makeHarness(options) {
  const opts = options || {};
  const body = makeElement("body");
  const head = makeElement("head");
  const documentElement = makeElement("html");
  const byId = {};

  const listeners = {};
  const doc = {
    readyState: "complete",
    title: "English Grade 5 Workbook",
    documentElement,
    head,
    body,
    createElement: (tag) => makeElement(tag),
    getElementById: (id) => byId[id] || null,
    addEventListener: (type, fn) => { (listeners[type] = listeners[type] || []).push(fn); },
    removeEventListener: () => {},
    querySelector: () => null
  };

  const objectUrls = new Map();
  const timers = [];
  const win = {
    document: doc,
    btoa: (s) => Buffer.from(s, "binary").toString("base64"),
    atob: (s) => Buffer.from(s, "base64").toString("binary"),
    setTimeout: (fn) => { timers.push(fn); return timers.length; },
    clearTimeout: () => {},
    setInterval: () => 0,
    clearInterval: () => {},
    getComputedStyle: () => ({ display: "block", visibility: "visible" }),
    JSON,
    Uint8Array,
    URL: {
      createObjectURL(blob) {
        const url = "blob:https://appassets.androidplatform.net/obj-" + (objectUrls.size + 1);
        objectUrls.set(url, blob);
        return url;
      },
      revokeObjectURL(url) { objectUrls.delete(url); }
    },
    FileReader: function FileReader() {
      this.result = null;
      this.onload = null;
      this.onerror = null;
      this.readAsArrayBuffer = (slice) => {
        const bytes = slice && slice._bytes ? slice._bytes : Buffer.alloc(0);
        this.result = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
        if (this.onload) this.onload();
      };
    },
    navigator: { onLine: true },
    open: () => null,
    print: () => { win.__browserPrintCalled = true; }
  };

  const bridge = {
    printed: [],
    toasted: [],
    opened: [],
    downloads: [],
    ttsCalls: [],
    print(title) { this.printed.push(title); },
    toast(message) { this.toasted.push(message); },
    openExternal(url) { this.opened.push(url); },
    startDownload(name, mime, size) {
      this.downloads.push({ name, mime, size, chunks: [], finished: null, cancelled: false });
      return "dl" + this.downloads.length;
    },
    appendDownload(handle, base64) {
      const job = this.downloads[Number(String(handle).replace("dl", "")) - 1];
      if (!job) return false;
      job.chunks.push(base64);
      return true;
    },
    finishDownload(handle) {
      const job = this.downloads[Number(String(handle).replace("dl", "")) - 1];
      if (!job) return "{\"ok\":false,\"error\":\"no such download\"}";
      job.finished = true;
      return "{\"ok\":true,\"location\":\"Downloads/Easy School Liberia\"}";
    },
    cancelDownload(handle) {
      const job = this.downloads[Number(String(handle).replace("dl", "")) - 1];
      if (job) job.cancelled = true;
    },
    ttsAvailable() { return opts.tts !== false; },
    ttsVoices() {
      return JSON.stringify([
        { name: "English (Nigeria) · female", lang: "en-NG", voiceURI: "android:en-ng-x-ngn-local", localService: true },
        { name: "English (United States) · male", lang: "en-US", voiceURI: "android:en-us-x-iom-local", localService: true }
      ]);
    },
    ttsSpeak(id, text, lang, voice, rate, pitch, volume) {
      this.ttsCalls.push({ id, text, lang, voice, rate, pitch, volume });
    },
    ttsStop() { this.stopped = (this.stopped || 0) + 1; }
  };

  win.AndroidShell = opts.noBridge ? undefined : bridge;

  const context = vm.createContext(Object.assign(win, {
    window: win,
    document: doc,
    AndroidShell: win.AndroidShell,
    console
  }));

  return {
    win, doc, bridge, context, byId, listeners, timers, head, documentElement,
    /** run the queued timers (the download loop yields between chunks) */
    drain(limit) {
      let guard = 0;
      while (timers.length && guard++ < (limit || 10000)) {
        const fn = timers.shift();
        fn();
      }
    }
  };
}

function load(h) {
  vm.runInContext(source, h.context, { filename: "android/web/shell/shell.js" });
  return h;
}

/* ---------------- 1. printing ---------------- */

{
  const h = load(makeHarness());
  h.win.print();
  assert.deepStrictEqual(h.bridge.printed, ["English Grade 5 Workbook"],
    "window.print must ask the device to print, with the document name");
  assert.ok(!h.win.__browserPrintCalled, "the browser print dialog must not be used inside the app");
  console.log("ok  print goes to the Android print dialog");
}

/* ---------------- 2. saving a file ---------------- */

function makeBlob(bytes, type) {
  return {
    type: type,
    size: bytes.length,
    slice(startAt, endAt) {
      const part = bytes.subarray(startAt, endAt);
      return { type: type, size: part.length, _bytes: part };
    }
  };
}

{
  const h = load(makeHarness());

  /* The platform's own download(): a blob, an object URL, then a click on an
     anchor carrying a download attribute. */
  const bytes = Buffer.alloc(600 * 1024, 7);          /* 600 KB: three chunks */
  const blob = makeBlob(bytes,
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  const url = h.win.URL.createObjectURL(blob);

  const anchor = makeElement("a");
  anchor.setAttribute("href", url);
  anchor.setAttribute("download", "English_Grade5_Workbook.docx");
  anchor.parentNode = h.doc.body;

  let defaultPrevented = false;
  let stopped = false;
  const clickHandler = (h.listeners.click || [])[0];
  assert.ok(clickHandler, "the bridge must listen for the platform's download clicks");

  clickHandler({
    target: anchor,
    preventDefault() { defaultPrevented = true; },
    stopPropagation() { stopped = true; }
  });
  h.drain();

  assert.ok(defaultPrevented, "the WebView's own download must be cancelled");
  assert.ok(stopped, "the click must not reach the page as well");
  assert.strictEqual(h.bridge.downloads.length, 1, "exactly one save is started");
  const job = h.bridge.downloads[0];
  assert.strictEqual(job.name, "English_Grade5_Workbook.docx", "the file keeps the platform's name");
  assert.strictEqual(job.size, 600 * 1024);
  assert.strictEqual(job.chunks.length, 3, "600 KB arrives in three chunks, not one huge string");
  const rebuilt = Buffer.concat(job.chunks.map((b64) => Buffer.from(b64, "base64")));
  assert.strictEqual(rebuilt.length, bytes.length, "every byte arrives");
  assert.ok(rebuilt.equals(bytes), "the bytes are unchanged");
  assert.strictEqual(job.finished, true, "the save is finished only after the last chunk");

  /* An anchor that is not a blob download belongs to the WebView. */
  const link = makeElement("a");
  link.setAttribute("href", "https://example.org/report.pdf");
  let passedThrough = false;
  clickHandler({ target: link, preventDefault() { passedThrough = true; }, stopPropagation() {} });
  assert.ok(!passedThrough, "an ordinary link is not swallowed by the save path");
  assert.strictEqual(h.bridge.downloads.length, 1, "and it starts no save");

  /* Revoking forgets the blob, so a stale click cannot save the wrong file. */
  h.win.URL.revokeObjectURL(url);
  clickHandler({ target: anchor, preventDefault() {}, stopPropagation() {} });
  assert.strictEqual(h.bridge.downloads.length, 1, "a revoked object URL is not saved again");
  console.log("ok  a generated pack is streamed to the phone and finished");
}

/* ---------------- 2b. a refused save is reported ---------------- */

{
  const h = load(makeHarness());
  h.bridge.startDownload = () => "";            /* the device refuses */
  const blob = makeBlob(Buffer.alloc(10), "application/pdf");
  const anchor = makeElement("a");
  anchor.setAttribute("href", h.win.URL.createObjectURL(blob));
  anchor.setAttribute("download", "x.pdf");
  const handler = (h.listeners.click || [])[0];
  handler({ target: anchor, preventDefault() {}, stopPropagation() {} });
  h.drain();
  assert.ok(h.bridge.toasted.length >= 1, "a refused save must say so instead of failing quietly");
  assert.ok(/could not/i.test(h.bridge.toasted[0]), "with a plain explanation");
  console.log("ok  a save the device refuses is reported to the teacher");
}

/* ---------------- 2c. a failed chunk cancels cleanly ---------------- */

{
  const h = load(makeHarness());
  let appended = 0;
  h.bridge.appendDownload = () => { appended++; return appended < 2; };   /* dies on chunk 2 */
  const blob = makeBlob(Buffer.alloc(600 * 1024, 1), "application/pdf");
  const anchor = makeElement("a");
  anchor.setAttribute("href", h.win.URL.createObjectURL(blob));
  anchor.setAttribute("download", "big.pdf");
  const handler = (h.listeners.click || [])[0];
  handler({ target: anchor, preventDefault() {}, stopPropagation() {} });
  h.drain();
  assert.strictEqual(h.bridge.downloads[0].cancelled, true,
    "a half-written file is cancelled, never finished");
  assert.strictEqual(h.bridge.downloads[0].finished, null);
  assert.ok(h.bridge.toasted.length >= 1, "and the teacher is told");
  console.log("ok  a save that fails midway never publishes a truncated file");
}

/* ---------------- 3. speech ---------------- */

{
  const h = load(makeHarness());
  const synth = h.win.speechSynthesis;
  assert.ok(synth, "the speech shim must replace the missing WebView API");
  assert.strictEqual(typeof h.win.SpeechSynthesisUtterance, "function");

  const voices = synth.getVoices();
  assert.strictEqual(voices.length, 2, "the device's voices are listed");
  assert.strictEqual(voices[0].lang, "en-NG");
  assert.ok(/female/.test(voices[0].name), "gender words survive so the Man/Woman filter works");

  let changed = 0;
  synth.addEventListener("voiceschanged", () => { changed++; });
  h.win.__androidTtsVoices();
  h.drain();
  assert.ok(changed >= 1, "voiceschanged reaches the reader");

  const u = new h.win.SpeechSynthesisUtterance("Hello class, open your books.");
  u.lang = "en-NG";
  u.rate = 0.9;
  u.pitch = 1.1;
  u.voice = voices[0];
  let started = 0, ended = 0;
  u.onstart = () => { started++; };
  u.onend = () => { ended++; };

  synth.speak(u);
  assert.strictEqual(h.bridge.ttsCalls.length, 1, "speak reaches the engine");
  const call = h.bridge.ttsCalls[0];
  assert.strictEqual(call.text, "Hello class, open your books.");
  assert.strictEqual(call.lang, "en-NG");
  assert.strictEqual(call.voice, "android:en-ng-x-ngn-local");
  assert.strictEqual(call.rate, 0.9);
  assert.strictEqual(call.pitch, 1.1);
  assert.strictEqual(synth.pending, true, "a queued utterance is pending");

  h.win.__androidTtsEvent(call.id, "start");
  assert.strictEqual(started, 1, "onstart fires");
  assert.strictEqual(synth.speaking, true);
  h.win.__androidTtsEvent(call.id, "end");
  assert.strictEqual(ended, 1, "onend fires — the reader advances on it");
  assert.strictEqual(synth.speaking, false);

  /* an engine error must reach the reader, which then skips the sentence */
  const bad = new h.win.SpeechSynthesisUtterance("second");
  let errors = 0;
  bad.onerror = () => { errors++; };
  synth.speak(bad);
  const badId = h.bridge.ttsCalls[h.bridge.ttsCalls.length - 1].id;
  h.win.__androidTtsEvent(badId, "error");
  assert.strictEqual(errors, 1, "a failed sentence is reported");
  console.log("ok  the voice reader speaks through the device engine");
}

/* ---------------- 3b. cancel releases everything ---------------- */

{
  const h = load(makeHarness());
  const synth = h.win.speechSynthesis;
  const ended = [];

  const first = new h.win.SpeechSynthesisUtterance("one");
  first.onend = () => ended.push("one");
  const second = new h.win.SpeechSynthesisUtterance("two");
  second.onend = () => ended.push("two");

  synth.speak(first);
  h.win.__androidTtsEvent(h.bridge.ttsCalls[0].id, "start");
  synth.speak(second);
  synth.cancel();

  assert.ok(h.bridge.stopped >= 1, "the device engine is stopped");
  assert.deepStrictEqual(ended.sort(), ["one", "two"],
    "every waiting utterance is released, so the reader cannot stall");
  assert.strictEqual(synth.pending, false);
  assert.strictEqual(synth.speaking, false);

  /* events from the cancelled generation are ignored */
  h.win.__androidTtsEvent(h.bridge.ttsCalls[0].id, "end");
  assert.deepStrictEqual(ended.sort(), ["one", "two"], "a stale event does not fire twice");
  console.log("ok  cancel frees the reader instead of stranding it");
}

/* ---------------- 4. the back button ---------------- */

{
  const h = load(makeHarness());
  let twClicks = 0;

  const teaching = makeElement("dialog", { id: "teachingDialog" });
  teaching.setAttribute("open", "");
  /* the platform's own close button is what back has to use, so the dialog is
     tidied exactly as a tap would tidy it (focus, library refresh) */
  const twClose = makeElement("button", { id: "twClose" });
  twClose.onclick = () => { twClicks++; teaching.removeAttribute("open"); };
  h.byId.teachingDialog = teaching;
  h.byId.twClose = twClose;

  assert.strictEqual(h.win.__androidBack(), true, "back is consumed while the dialog is open");
  assert.strictEqual(twClicks, 1, "the dialog closes through its own close button");
  assert.strictEqual(h.win.__androidBack(), false, "closed: the next back may leave the app");
  console.log("ok  back closes the teaching tools first");
}

{
  const h = load(makeHarness());

  const book = makeElement("div", { id: "bookMask" });
  h.byId.bookMask = book;
  h.byId.bkClose = makeElement("button", { id: "bkClose" });
  h.byId.bkClose.onclick = () => { book.hidden = true; };
  assert.strictEqual(h.win.__androidBack(), true, "back closes the book sequence");
  assert.strictEqual(book.hidden, true);

  const ai = makeElement("div", { id: "aiPanel" });
  ai.hidden = false;
  h.byId.aiPanel = ai;
  h.byId.aiClose = makeElement("button", { id: "aiClose" });
  h.byId.aiClose.onclick = () => { ai.hidden = true; };
  assert.strictEqual(h.win.__androidBack(), true, "back closes the tutor");
  assert.strictEqual(ai.hidden, true);

  const vr = makeElement("div", { id: "vrPanel" });
  vr.hidden = false;
  h.byId.vrPanel = vr;
  h.byId.vrClose = makeElement("button", { id: "vrClose" });
  h.byId.vrClose.onclick = () => { vr.hidden = true; };
  assert.strictEqual(h.win.__androidBack(), true, "back closes the voice reader");
  assert.strictEqual(vr.hidden, true);

  h.doc.body.className = "panel-open";
  assert.strictEqual(h.win.__androidBack(), true, "back closes the settings drawer");
  assert.ok(!/panel-open/.test(h.doc.body.className));

  assert.strictEqual(h.win.__androidBack(), false, "nothing open: the app may leave");
  console.log("ok  back closes what is open, then leaves the app");
}


/* ---------------- 5. inert without the bridge ---------------- */

{
  const h = load(makeHarness({ noBridge: true }));
  const before = h.win.print;
  h.win.print();
  assert.strictEqual(h.win.print, before, "without AndroidShell the page keeps its own print");
  assert.strictEqual(typeof h.win.speechSynthesis, "undefined",
    "no shim is installed where the browser has a real speech engine");
  assert.strictEqual(h.win.__androidBack, undefined, "no back handler without the bridge");
  console.log("ok  the bridge stays out of the way when it is not inside the app");
}

/* ---------------- 6. the app marks its own document ---------------- */

{
  const h = load(makeHarness());
  assert.ok(/android-app/.test(h.documentElement.className),
    "the page is marked as running inside the app");
  const style = h.head.children.find((el) => el.id === "android-shell-style");
  assert.ok(style, "the in-app stylesheet is installed");
  assert.ok(/install-app/.test(style.textContent),
    "the browser-only 'Install app' prompt is hidden inside the app");
  assert.ok(!/</.test(style.textContent), "nothing in the injected CSS can close the tag early");
  console.log("ok  the platform knows it is the app");
}

/* ---------------- 6b. the shim covers what voice.js actually calls ---------------- */

{
  /* voice.js is the only consumer of the speech API, and it cannot be run in
     a WebView debugger easily, so the contract is checked directly: every
     member voice.js touches must exist on the shim. A typo here means a
     teacher's voice reader goes silent — the one failure this platform is
     built to avoid. */
  const voiceSource = fs.readFileSync(path.join(__dirname, "..", "voice.js"), "utf8");
  const h = load(makeHarness());
  const synth = h.win.speechSynthesis;
  const Utterance = h.win.SpeechSynthesisUtterance;

  const synthMembers = new Set();
  const utteranceMembers = new Set();
  let match;
  const synRe = /\bsyn\.([A-Za-z_$][\w$]*)/g;
  while ((match = synRe.exec(voiceSource))) synthMembers.add(match[1]);
  const uRe = /\bu\.([A-Za-z_$][\w$]*)\s*=/g;
  while ((match = uRe.exec(voiceSource))) utteranceMembers.add(match[1]);

  assert.ok(synthMembers.size > 0 && utteranceMembers.size > 0, "the scan found voice.js's speech calls");
  for (const name of synthMembers) {
    assert.ok(name in synth, "speechSynthesis is missing " + name + " (voice.js uses it)");
  }
  const utterance = new Utterance("check");
  for (const name of utteranceMembers) {
    assert.ok(name in utterance, "SpeechSynthesisUtterance is missing " + name + " (voice.js sets it)");
  }
  assert.ok(synthMembers.has("getVoices") && synthMembers.has("speak") && synthMembers.has("cancel"),
    "the scan really did see voice.js's core calls");
  console.log("ok  every speech call voice.js makes exists on the shim (" +
    synthMembers.size + " synthesis, " + utteranceMembers.size + " utterance members)");
}

/* ---------------- 7. the bridge is inlined safely ---------------- */

{
  assert.ok(source.indexOf("</script>") < 0,
    "shell.js must not contain a literal closing script tag (build.sh rule)");
  for (const token of ["=>", "??", "?."]) {
    assert.ok(source.indexOf(token) < 0, "shell.js must stay ES5 for old WebViews: found " + token);
  }
  /* comments mention things like "let the reader start again": test the code */
  const code = source.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
  assert.ok(!/\b(const|let)\s/.test(code), "shell.js must not use const/let");
  console.log("ok  the bridge is ES5 and safe to inline");
}

console.log("\nandroid shell: all checks passed");
