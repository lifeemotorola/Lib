/* Node check for Emmanuel, the AI tutor (ai.js).
   Verifies the things that used to leave the tutor silent for good:
     - a failed request says so in the chat instead of vanishing, and the
       composer comes back so the next question can be asked
     - a request that never answers is given up on after a while
     - Stop always frees the composer, even before any reply arrives
     - a good answer is streamed into the bubble and kept in history
   Run: node tests/ai.js */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const root = path.join(__dirname, "..");

/* ---------------- fake DOM ---------------- */
const byId = {};
const bySel = {};

function element(tag) {
  const el = {
    tagName: String(tag || "div").toUpperCase(),
    className: "",
    children: [],
    style: {},
    hidden: false,
    value: "",
    textContent: "",
    innerHTML: "",
    scrollTop: 0,
    scrollHeight: 0,
    parentNode: null,
    listeners: {},
    classList: {
      add: function (c) { if (!el.className.includes(c)) el.className += " " + c; },
      remove: function (c) { el.className = el.className.replace(new RegExp("\\b" + c + "\\b", "g"), "").trim(); },
      contains: function (c) { return el.className.includes(c); },
      toggle: function (c, force) {
        if (force !== undefined) { if (force) el.classList.add(c); else el.classList.remove(c); return force; }
        if (el.className.includes(c)) { el.classList.remove(c); return false; }
        el.classList.add(c); return true;
      }
    },
    appendChild: function (c) { c.parentNode = el; el.children.push(c); return c; },
    removeChild: function (c) {
      const i = el.children.indexOf(c);
      if (i >= 0) el.children.splice(i, 1);
      c.parentNode = null;
      return c;
    },
    addEventListener: function (evt, fn) { (el.listeners[evt] = el.listeners[evt] || []).push(fn); },
    setAttribute: function () {},
    getAttribute: function () { return null; },
    querySelector: function () { return null; },
    querySelectorAll: function () { return []; },
    focus: function () {}
  };
  return el;
}

/* Only the nodes ai.js really puts in the page exist here. Asking for an
   unknown selector answers null, which is also how the module finds out
   that its panel has not been built yet. */
function pick(key, map) {
  return map[key] || null;
}
["#aiBody", "#aiInput", "#aiSend", "#aiStop", "#aiStatus"].forEach((sel) => {
  const el = element("div");
  el.id = sel.slice(1);
  bySel[sel] = el;
});

const mockDoc = {
  readyState: "complete",
  createElement: function (tag) { return element(tag); },
  querySelector: function (sel) { return pick(sel, bySel); },
  querySelectorAll: function () { return []; },
  addEventListener: function () {},
  body: element("body")
};

/* ---------------- fake network ---------------- */
let fetchImpl = null;
let fetchCalls = 0;

function sseChunks(pieces) {
  return pieces.map((p) => "data: " + JSON.stringify({ choices: [{ delta: { content: p } }] }) + "\n\n");
}

function okStream(pieces) {
  let i = 0;
  const enc = new TextEncoder();
  return Promise.resolve({
    ok: true,
    body: {
      getReader: function () {
        return {
          read: function () {
            if (i >= pieces.length) return Promise.resolve({ done: true });
            return Promise.resolve({ done: false, value: enc.encode(pieces[i++]) });
          }
        };
      }
    }
  });
}

/* ---------------- sandbox ---------------- */
const sandbox = {
  window: {},
  document: mockDoc,
  console: console,
  AbortController: AbortController,
  TextEncoder: TextEncoder,
  TextDecoder: TextDecoder,
  Promise: Promise,
  JSON: JSON,
  setTimeout: (fn, ms) => setTimeout(fn, Math.max(1, Math.round((ms || 0) / 100))),
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterval: clearInterval
};
sandbox.window = sandbox;
sandbox.window.AI_PROXY_URL = "https://proxy.test/api/chat";
sandbox.fetch = function (url, opts) {
  fetchCalls++;
  return fetchImpl(url, opts);
};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "ai.js"), "utf8"), sandbox);

const body = () => bySel["#aiBody"];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const input = () => bySel["#aiInput"];
const sendBtn = () => bySel["#aiSend"];
const stopBtn = () => bySel["#aiStop"];
const status = () => bySel["#aiStatus"];

/* The composer is usable when the Send button is back and Stop is hidden. */
function composerFree() {
  return sendBtn().style.display !== "none" && stopBtn().style.display === "none";
}

/* All the text inside a chat row, however deeply it is nested. */
function deepText(el) {
  if (!el) return "";
  const own = el.textContent || "";
  const kids = (el.children || []).map(deepText).join(" ");
  return (own + " " + kids).trim();
}

function ask(text) {
  input().value = text;
  input().listeners.keydown && input().listeners.keydown.forEach((fn) => fn({ key: "Enter", shiftKey: false, preventDefault() {} }));
}

(async function run() {
  /* ---------- 1. a failed request is reported, not swallowed ---------- */
  fetchImpl = () => Promise.reject(new Error("network down"));
  const before = body().children.length;
  ask("Explain photosynthesis");
  assert.strictEqual(composerFree(), false, "Stop must replace Send while a question is out");
  await wait(150);
  assert.strictEqual(composerFree(), true, "A failure must hand the composer back");
  const rows = body().children;
  assert(rows.length > before, "The question and a reply must appear in the chat");
  const bubble = rows[rows.length - 1].children.find((c) => /ai-bubble/.test(c.className));
  assert(bubble, "There must be a reply bubble");
  assert(/couldn't reply/i.test(bubble.children.map((c) => c.textContent).join(" ")),
    "The visitor must be told the reply failed");
  const retry = bubble.children.find((c) => /ai-retry/.test(c.className));
  assert(retry, "The failed reply must offer a way to try again");

  /* ---------- 2. a request that never answers is given up on ---------- */
  fetchImpl = () => new Promise(() => {});          /* hangs forever */
  ask("What is evaporation?");
  assert.strictEqual(composerFree(), false, "The turn must be running straight after Send");
  await wait(1200);                                  /* FIRST_TOKEN_WAIT / 100 = 300 ms */
  assert.strictEqual(composerFree(), true, "A request that never answers must time out");
  assert(/too long|stopped waiting/i.test(status().textContent + " " +
    deepText(body().children[body().children.length - 1])),
    "The visitor must be told the tutor gave up: " +
    deepText(body().children[body().children.length - 1]));

  /* ---------- 3. Stop frees the composer even before any reply ---------- */
  fetchImpl = () => new Promise(() => {});
  ask("Tell me about the water cycle");
  assert.strictEqual(composerFree(), false);
  stopBtn().onclick();
  assert.strictEqual(composerFree(), true, "Stop must always free the composer");

  /* ---------- 4. a good answer streams in and is remembered ---------- */
  fetchImpl = () => okStream(sseChunks(["The ", "water ", "cycle ", "has four stages."]));
  ask("Summarise the water cycle");
  await wait(300);
  assert.strictEqual(composerFree(), true, "A finished answer must hand the composer back");
  const lastRow = body().children[body().children.length - 1];
  const answer = lastRow.children.find((c) => /ai-bubble/.test(c.className));
  assert.strictEqual(answer._raw, "The water cycle has four stages.", "The streamed answer must be complete");
  assert.strictEqual(status().textContent, "", "The status line must clear after an answer");
  assert(fetchCalls >= 4, "Every question must reach the proxy");

  /* ---------- 5. Emmanuel works immediately without waiting on human check ---------- */
  let humanCheckTokenChecked = false;
  sandbox.window.HUMAN_CHECK = {
    enabled: () => true,
    token: () => { humanCheckTokenChecked = true; return ""; }
  };
  fetchImpl = () => okStream(sseChunks(["Emmanuel ", "works ", "instantly."]));
  ask("Can you help me?");
  await wait(300);
  assert.strictEqual(composerFree(), true, "Composer must be free after reply");
  const helperRow = body().children[body().children.length - 1];
  const helperBubble = helperRow.children.find((c) => /ai-bubble/.test(c.className));
  assert.strictEqual(helperBubble._raw, "Emmanuel works instantly.");
  assert.strictEqual(humanCheckTokenChecked, true, "Checked token synchronously without blocking");

  console.log("OK: AI tutor (Emmanuel) tests passed.");
})().catch((err) => {
  console.error("FAIL: " + (err && err.message ? err.message : err));
  process.exit(1);
});
