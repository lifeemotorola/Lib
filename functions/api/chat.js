/* ============================================================
   AI tutor proxy — Cloudflare Pages Function.
   Route: POST /api/chat (same origin as the site).

   This is the easiest way to run the proxy: when the whole site is
   hosted on Cloudflare Pages, set ONE encrypted environment variable:

     Cloudflare dashboard → Workers & Pages → your Pages project →
     Settings → Variables and Secrets → Add:
       name  = GROQ_API_KEY
       value = your gsk_... key
       type  = Secret (encrypted)
     then Deployments → Redeploy (or just push to GitHub).

   No Worker, no URL to configure, no CORS setup: ai.js calls
   /api/chat on the same domain automatically.

   (For GitHub Pages or other static hosts that can't run server code,
   use worker/groq-proxy.js — a standalone Cloudflare Worker — instead.)
   ============================================================ */

var GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";

/* Keep in sync with MODEL in ai.js. A public proxy should not become a
   general-purpose Groq relay. */
var ALLOWED_MODELS = [
  "openai/gpt-oss-120b",
  "qwen/qwen3.6-27b"
];

/* Best-effort per-IP rate limit (ephemeral; resets when the isolate
   recycles). */
var RATE_LIMIT = 60;       /* requests per visitor ... */
var RATE_WINDOW = 60000;   /* ... per 60 s */

var rateBuckets = new Map();

function rateLimited(ip) {
  var now = Date.now();
  var bucket = rateBuckets.get(ip);
  if (!bucket || now - bucket.start > RATE_WINDOW) {
    bucket = { start: now, count: 0 };
    rateBuckets.set(ip, bucket);
  }
  bucket.count++;
  if (rateBuckets.size > 5000) {
    rateBuckets.forEach(function (b, key) {
      if (now - b.start > RATE_WINDOW) rateBuckets.delete(key);
    });
  }
  return bucket.count > RATE_LIMIT;
}

function jsonError(message, status, origin) {
  var headers = { "Content-Type": "application/json" };
  if (origin) headers["Access-Control-Allow-Origin"] = origin;
  return new Response(JSON.stringify({ error: { message: message } }), {
    status: status,
    headers: headers
  });
}

/* Same-origin browser calls send an Origin matching this site; curl and
   server-to-server calls send none. We allow those, plus localhost and
   *.github.io (in case the front end is hosted elsewhere). Anything else
   is rejected. */
function allowedOrigin(request) {
  var origin = request.headers.get("Origin");
  if (!origin) return "";
  var host;
  try { host = new URL(origin).hostname; } catch (e) { return null; }
  var self;
  try { self = new URL(request.url).hostname; } catch (e) { self = ""; }
  if (host === self) return origin;
  if (host === "localhost" || host === "127.0.0.1") return origin;
  if (host === "htmlpreview.github.io") return origin;
  if (host.endsWith(".github.io")) return origin;
  return null;
}

async function handle(request, env) {
  var origin = allowedOrigin(request);
  if (origin === null) return jsonError("Origin not allowed", 403, "");

  if (!env || !env.GROQ_API_KEY) {
    return jsonError(
      "The AI tutor is not configured yet: the GROQ_API_KEY secret is not set on this site.",
      500, origin
    );
  }

  var ip = request.headers.get("CF-Connecting-IP") ||
           request.headers.get("X-Forwarded-For") || "unknown";
  if (rateLimited(ip)) {
    return jsonError("Too many requests — please slow down a little.", 429, origin);
  }

  var payload;
  try {
    payload = JSON.parse(await request.text() || "{}");
  } catch (e) {
    return jsonError("Invalid request body", 400, origin);
  }

  if (!payload || !Array.isArray(payload.messages) || payload.messages.length === 0) {
    return jsonError("messages are required", 400, origin);
  }
  if (ALLOWED_MODELS.indexOf(payload.model) === -1) {
    return jsonError("Model not allowed", 400, origin);
  }
  if (JSON.stringify(payload.messages).length > 100000) {
    return jsonError("Conversation too long", 413, origin);
  }

  var forward = {
    model: payload.model,
    messages: payload.messages,
    temperature: typeof payload.temperature === "number" ? payload.temperature : 0.7,
    max_tokens: Math.min(Number(payload.max_tokens) || 6000, 6000),
    stream: true
  };

  var resp;
  try {
    resp = await fetch(GROQ_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + env.GROQ_API_KEY
      },
      body: JSON.stringify(forward)
    });
  } catch (e) {
    return jsonError("Could not reach the AI service. Please try again.", 502, origin);
  }

  var headers = new Headers(resp.headers);
  if (origin) headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Vary", "Origin");
  return new Response(resp.body, { status: resp.status, headers: headers });
}

export function onRequestOptions(context) {
  var origin = allowedOrigin(context.request);
  if (origin === null) return new Response(null, { status: 403 });
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      "Vary": "Origin"
    }
  });
}

export function onRequestPost(context) {
  return handle(context.request, context.env);
}

export function onRequest(context) {
  /* GETs and other methods are not part of the API. */
  if (context.request.method === "OPTIONS") return onRequestOptions(context);
  if (context.request.method === "POST") return onRequestPost(context);
  return jsonError("Method not allowed", 405, allowedOrigin(context.request) || "");
}
