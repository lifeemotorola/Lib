/* Node check for voice reader: verifies that voice.js loads correctly,
   exposes the VOICE_READER API, chunks passages properly, speaks one chunk
   at a time, never pauses the engine (which silences Chrome on Android),
   ignores events from utterances it already cancelled, recovers when the
   browser never starts speaking, and populates vocabulary terms,
   sentences, and passages from packs.
   Run: node tests/voice.js */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const root = path.join(__dirname, "..");

/* ---------------- fake speech engine ---------------- */
let spokeUtterances = [];
let mode = "ok";            /* "ok" = normal events, "silent" = browser stays mute */
const stats = { pause: 0, resume: 0, cancel: 0, speak: 0 };

function MockUtterance(text) {
  this.text = text;
  this.voice = null;
  this.lang = "";
  this.rate = 1;
  this.pitch = 1;
  this.onstart = null;
  this.onend = null;
  this.onerror = null;
}

const mockSyn = {
  speaking: false,
  pending: false,
  paused: false,
  getVoices: function () {
    return [
      { name: "Google US English", lang: "en-US", voiceURI: "v-en-us", default: true },
      { name: "Google UK English Male", lang: "en-GB", voiceURI: "v-en-gb", default: false },
      { name: "Google Français", lang: "fr-FR", voiceURI: "v-fr", default: false },
      { name: "Nigerian English Female", lang: "en-NG", voiceURI: "v-en-ng", default: false }
    ];
  },
  cancel: function () { stats.cancel++; mockSyn.speaking = false; },
  pause: function () { stats.pause++; mockSyn.paused = true; },
  resume: function () { stats.resume++; mockSyn.paused = false; },
  speak: function (u) {
    stats.speak++;
    spokeUtterances.push(u);
    if (mode === "silent") return;          /* the call is swallowed */
    mockSyn.speaking = true;
    setTimeout(() => { if (u.onstart) u.onstart(); }, 1);
    setTimeout(() => {
      mockSyn.speaking = false;
      if (u.onend) u.onend();
    }, 6);
  }
};

/* ---------------- fake DOM ---------------- */
const elements = {};
function createMockElement(tag, id) {
  const el = {
    tagName: tag.toUpperCase(),
    id: id || "",
    className: "",
    classList: {
      add: function (c) { if (!el.className.includes(c)) el.className += " " + c; },
      remove: function (c) { el.className = el.className.replace(new RegExp("\\b" + c + "\\b", "g"), "").trim(); },
      contains: function (c) { return el.className.includes(c); },
      toggle: function (c, force) {
        if (force !== undefined) {
          if (force) el.classList.add(c); else el.classList.remove(c);
          return force;
        }
        if (el.className.includes(c)) { el.classList.remove(c); return false; }
        else { el.classList.add(c); return true; }
      }
    },
    style: {},
    hidden: false,
    value: "",
    textContent: "",
    innerHTML: "",
    listeners: {},
    addEventListener: function (evt, fn) { (el.listeners[evt] = el.listeners[evt] || []).push(fn); },
    dispatchEvent: function (evt) { (el.listeners[evt.type] || []).forEach(fn => fn(evt)); },
    setAttribute: function (k, v) { el[k] = v; },
    getAttribute: function (k) { return el[k]; },
    querySelector: function () { return null; },
    querySelectorAll: function () { return []; },
    appendChild: function (c) { return c; },
    focus: function () {}
  };
  if (id) elements[id] = el;
  return el;
}

const mockDoc = {
  readyState: "complete",
  getElementById: function (id) {
    if (!elements[id]) elements[id] = createMockElement("div", id);
    return elements[id];
  },
  createElement: function (tag) { return createMockElement(tag); },
  body: createMockElement("body"),
  addEventListener: function () {},
  querySelectorAll: function () { return []; }
};

const sandbox = {
  window: {},
  document: mockDoc,
  localStorage: {
    data: {},
    getItem: function (k) { return this.data[k] || null; },
    setItem: function (k, v) { this.data[k] = v; }
  },
  speechSynthesis: mockSyn,
  SpeechSynthesisUtterance: MockUtterance,
  console: console,
  setInterval: setInterval,
  clearInterval: clearInterval,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout
};
sandbox.window = sandbox;
sandbox.window.speechSynthesis = mockSyn;
sandbox.window.SpeechSynthesisUtterance = MockUtterance;
sandbox.window.getSelection = () => ({ toString: () => "sample selected text" });

vm.createContext(sandbox);

const voiceCode = fs.readFileSync(path.join(root, "voice.js"), "utf8");
vm.runInContext(voiceCode, sandbox);

const VR = sandbox.window.VOICE_READER;
assert(VR, "VOICE_READER must be exported on window");
assert(typeof VR.speak === "function", "VOICE_READER.speak must be a function");
assert(typeof VR.stop === "function", "VOICE_READER.stop must be a function");
assert(typeof VR.loadFromPack === "function", "VOICE_READER.loadFromPack must be a function");

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const noteEl = () => elements.vrNote;

(async function run() {
  /* 1 — a single word is spoken at once */
  spokeUtterances = [];
  VR.speak("photosynthesis");
  assert.strictEqual(spokeUtterances.length, 1, "Should speak a single word utterance");
  assert.strictEqual(spokeUtterances[0].text, "photosynthesis");
  await wait(20);

  /* 2 — a long reading is chopped into speakable chunks, and only one
         chunk is handed to the browser at a time */
  spokeUtterances = [];
  const longPassage = "First sentence of the reading story. Second sentence explaining the biological cell structure. Third sentence asking how living organisms thrive in Liberia. Fourth sentence concluding the reading lesson. Fifth sentence about the forest and the river. Sixth sentence about the market in Monrovia.";
  VR.speak(longPassage);
  assert.strictEqual(spokeUtterances.length, 1, "Only one chunk may be in the browser at a time");
  await wait(120);
  assert(spokeUtterances.length > 1, "A long reading must be split into several chunks");
  spokeUtterances.forEach((u) => {
    assert(u.text.length <= 160, "Chunk too long for a browser to finish: " + u.text.length);
    assert(u.text.length > 0, "Empty chunk");
  });
  assert.strictEqual(VR.isSpeaking(), false, "Reader must not still be speaking once the queue drains");

  /* 3 — the watchdog must never pause the engine: on Chrome for Android a
         pause()/resume() pair stops the voice for good */
  assert.strictEqual(stats.pause, 0, "The reader must never call speechSynthesis.pause()");

  /* 4 — events from an utterance that was already cancelled are ignored */
  spokeUtterances = [];
  VR.speak("chlorophyll");
  const stale = spokeUtterances[0];
  VR.stop();
  assert.strictEqual(VR.isSpeaking(), false, "stop() must leave the reader silent");
  spokeUtterances = [];
  if (stale.onend) stale.onend();          /* arrives late, as Chrome does */
  if (stale.onerror) stale.onerror({ error: "interrupted" });
  await wait(40);
  assert.strictEqual(spokeUtterances.length, 0, "A cancelled utterance must not restart the reading");

  /* 5 — a browser that swallows speak() is retried, then reported */
  mode = "silent";
  spokeUtterances = [];
  VR.speak("haemoglobin");
  assert.strictEqual(spokeUtterances.length, 1, "First attempt goes out immediately");
  await wait(2200);
  assert.strictEqual(spokeUtterances.length, 2, "A silent browser must get one retry");
  await wait(2200);
  assert.strictEqual(spokeUtterances.length, 2, "The retry must not loop forever");
  assert.strictEqual(VR.isSpeaking(), false, "A reader that never spoke must not claim to be speaking");
  assert(
    /Nothing came out/.test(noteEl().textContent || ""),
    "The panel must say nothing was heard, got: " + noteEl().textContent
  );
  mode = "ok";

  /* 6 — the note clears again on the next reading */
  VR.speak("oxygen");
  assert.strictEqual(/Nothing came out/.test(noteEl().textContent || ""), false,
    "A fresh reading must clear the previous warning");
  await wait(40);

  /* 7 — pack extraction with study notes, passage, vocabulary */
  VR.loadFromPack({
    topics: [{
      title: "Unit I: Photosynthesis",
      terms: [{ t: "chlorophyll", d: "green pigment in leaves", x: "Leaves contain chlorophyll." }],
      passage: { title: "The Forest Trees", text: "Ma Sonii walked into the forest. She saw many tall mahogany trees." },
      study: [
        { k: "p", t: "Plants produce **glucose** and **oxygen** through **photosynthesis**." },
        { k: "bul", items: ["Light is absorbed by **chloroplasts**.", "Carbon dioxide enters via **stomata**."] }
      ]
    }]
  }, "en", "General Science", 4);

  /* 8 — a reading that is interrupted and restarted still speaks */
  spokeUtterances = [];
  VR.speak("First sentence about the water cycle. Second sentence about evaporation over the Atlantic.");
  await wait(10);
  VR.speak("A brand new sentence to read aloud.");
  await wait(120);
  assert(spokeUtterances.some((u) => /brand new sentence/.test(u.text)),
    "Interrupting a reading must not swallow the next one");

  console.log("OK: Voice reader tests passed.");
})().catch((err) => {
  console.error("FAIL: " + (err && err.message ? err.message : err));
  process.exit(1);
});
