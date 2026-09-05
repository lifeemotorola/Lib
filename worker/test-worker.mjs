/* Dependency-free Node test for the Groq proxy Worker.
   Run: node worker/test-worker.mjs
   Mocks fetch() so no network/Groq key is needed. */
import assert from "node:assert";
import worker from "./groq-proxy.js";

const ORIGIN_OK = "https://lifeemotorola.github.io";
const ORIGIN_BAD = "https://evil.example.com";
const ENV = { GROQ_API_KEY: "gsk_test" };

let lastUpstream = null;

globalThis.fetch = async function (url, init) {
  lastUpstream = { url, init };
  return new Response("data: {ok:true}\n\n", {
    status: 200,
    headers: { "Content-Type": "text/event-stream" }
  });
};

function call(method, body, headers) {
  return worker.fetch(
    new Request("https://proxy.example/", {
      method: method,
      headers: Object.assign({ "Origin": ORIGIN_OK, "CF-Connecting-IP": "1.2.3.4" }, headers || {}),
      body: body || undefined
    }),
    ENV
  );
}

let passed = 0;
async function check(name, fn) {
  try { await fn(); passed++; console.log("  ok - " + name); }
  catch (e) { console.error("FAIL - " + name + "\n   " + e.message); process.exitCode = 1; }
}

await check("OPTIONS preflight allowed for github.io", async () => {
  const r = await call("OPTIONS", null);
  assert.equal(r.status, 204);
  assert.equal(r.headers.get("Access-Control-Allow-Origin"), ORIGIN_OK);
});

await check("OPTIONS preflight rejected for foreign origin", async () => {
  const r = await worker.fetch(
    new Request("https://proxy.example/", { method: "OPTIONS", headers: { Origin: ORIGIN_BAD } }),
    ENV
  );
  assert.equal(r.status, 403);
});

await check("GET rejected", async () => {
  const r = await worker.fetch(
    new Request("https://proxy.example/", { method: "GET", headers: { Origin: ORIGIN_OK } }),
    ENV
  );
  assert.equal(r.status, 405);
});

await check("POST from foreign origin rejected", async () => {
  const r = await worker.fetch(
    new Request("https://proxy.example/", {
      method: "POST",
      headers: { Origin: ORIGIN_BAD, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "user", content: "hi" }] })
    }),
    ENV
  );
  assert.equal(r.status, 403);
});

await check("missing GROQ_API_KEY → 500", async () => {
  const r = await worker.fetch(
    new Request("https://proxy.example/", {
      method: "POST",
      headers: { Origin: ORIGIN_OK },
      body: JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "user", content: "hi" }] })
    }),
    {}
  );
  assert.equal(r.status, 500);
});

await check("request without turnstile is allowed (never blocks Emmanuel)", async () => {
  const r = await worker.fetch(
    new Request("https://proxy.example/", {
      method: "POST",
      headers: { Origin: ORIGIN_OK, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "user", content: "hi" }] })
    }),
    ENV
  );
  assert.equal(r.status, 200);
});

await check("invalid JSON → 400", async () => {
  const r = await call("POST", "not json{", { "Content-Type": "application/json" });
  assert.equal(r.status, 400);
});

await check("missing messages → 400", async () => {
  const r = await call("POST", JSON.stringify({ model: "openai/gpt-oss-120b" }),
    { "Content-Type": "application/json" });
  assert.equal(r.status, 400);
});

await check("disallowed model → 400", async () => {
  const r = await call("POST",
    JSON.stringify({ model: "llama-guard-3-8b", messages: [{ role: "user", content: "hi" }] }),
    { "Content-Type": "application/json" });
  assert.equal(r.status, 400);
});

await check("valid request → streamed upstream with bearer, no key leaks to client", async () => {
  const r = await call("POST",
    JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "user", content: "hi" }], stream: true }),
    { "Content-Type": "application/json" });
  assert.equal(r.status, 200);
  assert.equal(r.headers.get("Access-Control-Allow-Origin"), ORIGIN_OK);
  assert.equal(lastUpstream.url, "https://api.groq.com/openai/v1/chat/completions");
  assert.equal(lastUpstream.init.headers.Authorization, "Bearer gsk_test");
  const sent = JSON.parse(lastUpstream.init.body);
  assert.equal(sent.stream, true);
  const text = await r.text();
  assert.ok(!text.includes("gsk_test"), "key must not appear in response");
});

await check("client Authorization header is ignored", async () => {
  const r = await call("POST",
    JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "user", content: "hi" }] }),
    { "Content-Type": "application/json", Authorization: "Bearer gsk_attacker" });
  assert.equal(r.status, 200);
  assert.equal(lastUpstream.init.headers.Authorization, "Bearer gsk_test");
});

await check("rate limit kicks in after RATE_LIMIT", async () => {
  const r429 = await (async () => {
    let last;
    for (let i = 0; i < 65; i++) {
      last = await worker.fetch(
        new Request("https://proxy.example/", {
          method: "POST",
          headers: { Origin: ORIGIN_OK, "CF-Connecting-IP": "9.9.9.9" },
          body: JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "user", content: "x" }] })
        }),
        ENV
      );
    }
    return last;
  })();
  assert.equal(r429.status, 429);
});

await check("ALLOWED_ORIGINS env adds custom domain", async () => {
  const r = await worker.fetch(
    new Request("https://proxy.example/", { method: "OPTIONS", headers: { Origin: "https://packs.example.org" } }),
    { ALLOWED_ORIGINS: "https://packs.example.org" }
  );
  assert.equal(r.status, 204);
});

console.log(passed + " checks passed");
