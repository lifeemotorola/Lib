/* ============================================================
   Groq API proxy — Cloudflare Worker.

   The browser app NEVER sees the Groq API key: the key lives as a
   Worker secret (GROQ_API_KEY), and the app calls this Worker instead
   of api.groq.com. The Worker:

     - adds the Authorization header from its own secret
     - forwards the (already streaming) response
     - enforces an Origin allowlist (CORS)
     - rate limits per visitor IP (best effort, no storage config)

   Deploy (one time):
     cd worker
     npm install -g wrangler        # or use: npx wrangler
     wrangler secret put GROQ_API_KEY
     wrangler deploy

   Then point the app at the printed worker URL:
     AI_PROXY_URL=https://your-worker.workers.dev bash build.sh

   Settings (optional, per environment — see wrangler.toml):
     ALLOWED_ORIGINS   extra browser origins, comma separated
                       (your GitHub Pages URL is already allowed by
                       default; add custom domains when needed)
   ============================================================ */

var GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";

/* Only these models may be requested — a public proxy should not be a
   general-purpose Groq relay. Keep in sync with MODEL in ai.js. */
var ALLOWED_MODELS = [
  "openai/gpt-oss-120b",
  "qwen/qwen3.6-27b"
];

/* Best-effort per-IP rate limit (ephemeral; resets when the isolate
   recycles). */
var RATE_LIMIT = 60;       /* requests per visitor ... */
var RATE_WINDOW = 60000;   /* ... per 60 s */

function jsonError(message, status, origin) {
  var headers = { "Content-Type": "application/json" };
  if (origin) headers["Access-Control-Allow-Origin"] = origin;
  return new Response(JSON.stringify({ error: { message: message } }), {
    status: status,
    headers: headers
  });
}

/* Allowed browser origins. The github.io origin for any GitHub user or
   project page is accepted; plus http://localhost for local development,
   plus anything the operator lists in the ALLOWED_ORIGINS env var. */
function isAllowedOrigin(origin, env) {
  if (!origin) return false;
  var host;
  try { host = new URL(origin).hostname; } catch (e) { return false; }
  if (host === "localhost" || host === "127.0.0.1") return true;
  if (host === "htmlpreview.github.io") return true;
  if (host.endsWith(".github.io")) return true;
  if (env && env.ALLOWED_ORIGINS) {
    var extra = String(env.ALLOWED_ORIGINS).split(",").map(function (s) {
      try { return new URL(s.trim()).hostname; } catch (e) { return ""; }
    });
    if (extra.indexOf(host) !== -1) return true;
  }
  return false;
}

var rateBuckets = new Map();

function rateLimited(ip) {
  var now = Date.now();
  var bucket = rateBuckets.get(ip);
  if (!bucket || now - bucket.start > RATE_WINDOW) {
    bucket = { start: now, count: 0 };
    rateBuckets.set(ip, bucket);
  }
  bucket.count++;
  /* opportunistic cleanup */
  if (rateBuckets.size > 5000) {
    rateBuckets.forEach(function (b, key) {
      if (now - b.start > RATE_WINDOW) rateBuckets.delete(key);
    });
  }
  return bucket.count > RATE_LIMIT;
}

export default {
  fetch: function (request, env) {
    var origin = request.headers.get("Origin") || "";
    var allowedOrigin = isAllowedOrigin(origin, env) ? origin : "";

    /* CORS preflight */
    if (request.method === "OPTIONS") {
      if (!allowedOrigin) return new Response(null, { status: 403 });
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
          "Vary": "Origin"
        }
      });
    }

    if (request.method !== "POST") {
      return jsonError("Method not allowed", 405, allowedOrigin);
    }
    if (!allowedOrigin) {
      return jsonError("Origin not allowed", 403, "");
    }
    if (!env || !env.GROQ_API_KEY) {
      return jsonError("The AI tutor is not configured on this server.", 500, allowedOrigin);
    }

    var ip = request.headers.get("CF-Connecting-IP") ||
             request.headers.get("X-Forwarded-For") || "unknown";
    if (rateLimited(ip)) {
      return jsonError("Too many requests — please slow down a little.", 429, allowedOrigin);
    }

    /* Parse and validate the request body */
    return request.text().then(function (text) {
      var payload;
      try {
        payload = JSON.parse(text || "{}");
      } catch (e) {
        return jsonError("Invalid request body", 400, allowedOrigin);
      }
      return handleBody(payload, env, allowedOrigin);
    });
  }
};

function handleBody(payload, env, origin) {
  if (!payload || !Array.isArray(payload.messages) || payload.messages.length === 0) {
    return jsonError("messages are required", 400, origin);
  }
  if (ALLOWED_MODELS.indexOf(payload.model) === -1) {
    return jsonError("Model not allowed", 400, origin);
  }
  if (JSON.stringify(payload.messages).length > 100000) {
    return jsonError("Conversation too long", 413, origin);
  }

  /* Only chat completions pass through; force streaming on (the app UI
     streams). No other Groq endpoints are exposed. */
  var forward = {
    model: payload.model,
    messages: payload.messages,
    temperature: typeof payload.temperature === "number" ? payload.temperature : 0.7,
    max_tokens: Math.min(Number(payload.max_tokens) || 6000, 6000),
    stream: true
  };

  return fetch(GROQ_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + env.GROQ_API_KEY
    },
    body: JSON.stringify(forward)
  }).then(function (resp) {
    var headers = new Headers(resp.headers);
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Vary", "Origin");
    return new Response(resp.body, {
      status: resp.status,
      headers: headers
    });
  }).catch(function () {
    return jsonError("Could not reach the AI service. Please try again.", 502, origin);
  });
}
