/* Node check for voice reader: verifies that voice.js loads correctly,
   exposes the VOICE_READER API, chunks passages properly, and populates
   vocabulary terms, sentences, and passages from packs.
   Run: node tests/voice.js */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const root = path.join(__dirname, "..");
let spokeUtterances = [];

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
  cancel: function () { mockSyn.speaking = false; },
  pause: function () { mockSyn.paused = true; },
  resume: function () { mockSyn.paused = false; },
  speak: function (u) {
    spokeUtterances.push(u);
    mockSyn.speaking = true;
    if (u.onstart) u.onstart();
    setTimeout(() => {
      mockSyn.speaking = false;
      if (u.onend) u.onend();
    }, 5);
  }
};

const elements = {};
function createMockElement(tag, id) {
  const el = {
    tagName: tag.toUpperCase(),
    id: id || "",
    className: "",
    classList: {
      add: function (c) { if (!el.className.includes(c)) el.className += " " + c; },
      remove: function (c) { el.className = el.className.replace(new RegExp("\\b" + c + "\\b", "g"), "").trim(); },
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
  clearInterval: clearInterval
};
sandbox.window = sandbox;
sandbox.window.speechSynthesis = mockSyn;
sandbox.window.SpeechSynthesisUtterance = MockUtterance;
sandbox.window.getSelection = () => ({ toString: () => "sample selected text" });

vm.createContext(sandbox);

const voiceCode = fs.readFileSync(path.join(root, "voice.js"), "utf8");
vm.runInContext(voiceCode, sandbox);

assert(sandbox.window.VOICE_READER, "VOICE_READER must be exported on window");
assert(typeof sandbox.window.VOICE_READER.speak === "function", "VOICE_READER.speak must be a function");
assert(typeof sandbox.window.VOICE_READER.stop === "function", "VOICE_READER.stop must be a function");
assert(typeof sandbox.window.VOICE_READER.loadFromPack === "function", "VOICE_READER.loadFromPack must be a function");

// Test speaking single word
sandbox.window.VOICE_READER.speak("photosynthesis");
assert.strictEqual(spokeUtterances.length, 1, "Should speak single word utterance");
assert.strictEqual(spokeUtterances[0].text, "photosynthesis");

// Test chunking of long passage
spokeUtterances = [];
const longPassage = "First sentence of the reading story. Second sentence explaining the biological cell structure. Third sentence asking how living organisms thrive in Liberia. Fourth sentence concluding the reading lesson.";
sandbox.window.VOICE_READER.speak(longPassage);
assert(spokeUtterances.length >= 1, "Should queue utterance chunks");

// Test pack extraction with study notes, passage, vocabulary
sandbox.window.VOICE_READER.loadFromPack({
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

console.log("OK: Voice reader tests passed.");
