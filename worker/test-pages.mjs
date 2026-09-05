/* Dependency-free Node test for the Cloudflare Pages Function
   (functions/api/chat.js — the same-origin proxy).
   Run: node worker/test-pages.mjs
   Mocks fetch() so no network/key is needed. */
import assert from "node:assert";
import { readFileSync } from "node:fs";

/* Cloudflare Pages expects functions/api/chat.js (ESM syntax, .js extension).
   Load it as a data-URL module so Node treats it as ESM without needing a
   package.json "type":"module" inside functions/. */
const src = readFileSync(new URL("../functions/api/chat.js", import.meta.url), "utf8");
const fn = await import("data:text/javascript;base64," + Buffer.from(src).toString("base64"));

const SITE = "https://liberia-packs.pages.dev";
const ENV = { GROQ_API_KEY: "gsk_test" };
let lastUpstream = null;

globalThis.fetch = async function (url, init) {
  lastUpstream = { url, init };
  return new Response("data: {ok:true}\n\n", {
    status: 200,
    headers: { "Content-Type": "text/event-stream" }
  });
};

function context(method, body, headers, env) {
  return {
    request: new Request(SITE + "/api/chat", {
      method: method,
      headers: Object.assign({ Origin: SITE, "CF-Connecting-IP": "1.2.3.4" }, headers || {}),
      body: body || undefined
    }),
    env: env || ENV
  };
}

let passed = 0;
async function check(name, f) {
  try { await f(); passed++; console.log("  ok - " + name); }
  catch (e) { console.error("FAIL - " + name + "\n   " + e.message); process.exitCode = 1; }
}

await check("OPTIONS preflight allowed (same origin)", async () => {
  const r = await fn.onRequestOptions(context("OPTIONS"));
  assert.equal(r.status, 204);
  assert.equal(r.headers.get("Access-Control-Allow-Origin"), SITE);
});

await check("OPTIONS from foreign origin rejected", async () => {
  const r = await fn.onRequestOptions(context("OPTIONS", null, { Origin: "https://evil.example.com" }));
  assert.equal(r.status, 403);
});

await check("POST from foreign origin rejected", async () => {
  const r = await fn.onRequestPost(
    context("POST", JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "user", content: "hi" }] }),
      { Origin: "https://evil.example.com", "Content-Type": "application/json" }));
  assert.equal(r.status, 403);
});

await check("same-origin POST streams upstream with bearer key", async () => {
  const r = await fn.onRequestPost(
    context("POST", JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "user", content: "hi" }] }),
      { "Content-Type": "application/json" }));
  assert.equal(r.status, 200);
  assert.equal(lastUpstream.init.headers.Authorization, "Bearer gsk_test");
  assert.equal(JSON.parse(lastUpstream.init.body).stream, true);
  assert.ok(!(await r.text()).includes("gsk_test"));
});

await check("no origin (server-to-server/curl) still allowed", async () => {
  const ctx = context("POST", JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "x", content: "y" }] }),
    { "Content-Type": "application/json" });
  ctx.request = new Request(SITE + "/api/chat", {
    method: "POST",
    headers: { "CF-Connecting-IP": "5.5.5.5", "Content-Type": "application/json" },
    body: JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "user", content: "hi" }] })
  });
  const r = await fn.onRequestPost(ctx);
  assert.equal(r.status, 200);
});

await check("missing GROQ_API_KEY → friendly 500", async () => {
  const r = await fn.onRequestPost(
    context("POST", JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "user", content: "hi" }] }),
      { "Content-Type": "application/json" }, {}));
  assert.equal(r.status, 500);
});

await check("request without turnstile is allowed (never blocks Emmanuel)", async () => {
  const r = await fn.onRequestPost(
    context("POST", JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "user", content: "hi" }] }),
      { "Content-Type": "application/json" }, { GROQ_API_KEY: "gsk_test" }));
  assert.equal(r.status, 200);
});

await check("bad model → 400", async () => {
  const r = await fn.onRequestPost(
    context("POST", JSON.stringify({ model: "evil-model", messages: [{ role: "user", content: "hi" }] }),
      { "Content-Type": "application/json" }));
  assert.equal(r.status, 400);
});

await check("GET → 405 via onRequest", async () => {
  const r = await fn.onRequest(context("GET"));
  assert.equal(r.status, 405);
});

await check("rate limit after RATE_LIMIT", async () => {
  let last;
  for (let i = 0; i < 65; i++) {
    last = await fn.onRequestPost(
      context("POST", JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "user", content: "x" }] }),
        { "Content-Type": "application/json", "CF-Connecting-IP": "7.7.7.7" }));
  }
  assert.equal(last.status, 429);
});

console.log(passed + " checks passed");
