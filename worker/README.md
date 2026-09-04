# AI proxy — Cloudflare Pages Function or standalone Worker

> **Hosting the whole site on Cloudflare Pages?** You don't need anything in
> this folder. The same proxy ships at `functions/api/chat.js` and runs inside
> your Pages project at the same-origin URL `/api/chat` automatically. Just set
> one encrypted variable in **Pages → Settings → Variables and Secrets**:
> `GROQ_API_KEY` = your `gsk_...` key, then redeploy. This standalone Worker is
> only needed for static hosts (GitHub Pages, Netlify, USB...) that can't run
> server code.

---

The platform's AI tutor ("Emmanuel") calls a server-side proxy instead of
`api.groq.com` directly. The Groq API key lives **only** in the Worker — it is
never sent to browsers, never committed, and never built into `index.html`.

The Worker:

- attaches `Authorization: Bearer <GROQ_API_KEY>` from its own secret,
- streams the model's response straight back to the browser,
- accepts requests **only** from allowed browser origins
  (`localhost`, `*.github.io`, plus anything in `ALLOWED_ORIGINS`),
- rejects anything except chat-completion requests for the tutor's model,
- rate limits visitors (best effort: 60 requests/minute per IP).

## Deploy (about 5 minutes, free tier)

1. Create a free Cloudflare account and a Groq key at
   [console.groq.com](https://console.groq.com) (start free).
2. From this `worker/` directory:

   ```bash
   npx wrangler login
   npx wrangler deploy
   ```

   Wrangler prints the Worker URL, e.g.
   `https://liberia-packs-ai.<your-subdomain>.workers.dev`.
3. Store the Groq key as a Worker secret (asked once, never shown again):

   ```bash
   npx wrangler secret put GROQ_API_KEY
   ```

   Paste the `gsk_...` key when prompted.
   Optional, and recommended: paste the Turnstile **secret** key from
   **Cloudflare → Turnstile → your site** to switch the "Are you human?"
   check on:

   ```bash
   npx wrangler secret put TURNSTILE_SECRET_KEY
   ```

   Set `TURNSTILE_SITE_KEY` (the public half) as a repository **variable** so
   `build.sh` bakes it into the page — see the README. The Worker only
   enforces the check while this secret exists; without it, requests without
   a token are served exactly as before.
5. Tell the app where the Worker is:
   - **GitHub Pages build:** repository → Settings → Secrets and variables →
     Actions → **Variables** → new variable `AI_PROXY_URL` = the Worker URL.
     The next deploy of `.github/workflows/deploy.yml` bakes it in.
   - **Local build:** `AI_PROXY_URL=https://…workers.dev/ bash build.sh`
   - **Any host without rebuilding:** put
     `<meta name="ai-proxy-url" content="https://…workers.dev/">` in the page
     `<head>`, or set `window.AI_PROXY_URL` before `ai.js` loads.

## Optional: custom domain or extra origins

Allowed origins are `localhost`, `127.0.0.1`, `*.github.io` and
`htmlpreview.github.io` by default. To serve the app from another domain, add
it in `wrangler.toml`:

```toml
[vars]
ALLOWED_ORIGINS = "https://liberia-packs.example.org"
```

then `npx wrangler deploy` again.

## CI deploys (optional)

A ready-made workflow ships at `github/deploy-worker.workflow.yml`. It deploys
the Worker automatically when files in `worker/` change. Enable it:

```bash
cp github/deploy-worker.workflow.yml .github/workflows/deploy-worker.yml
```

then add repository secrets `CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit) and
`CLOUDFLARE_ACCOUNT_ID`. The `GROQ_API_KEY` Worker secret is still set once by
hand with `wrangler secret put` (step 3).

## Security notes

- **Rotate the Groq key if it was ever committed or shipped in an old
  `index.html`.** Any key that appeared in a public repo or public page should
  be considered burned — revoke it at console.groq.com and put the new one in
  the Worker only.
- The Worker is open to the allowed origins by design (pupils/teachers use it
  with no login). The model allow-list, body-size limit and rate limit keep
  abuse cheap; set `TURNSTILE_SECRET_KEY` to add Cloudflare's "Are you human?"
  check on top of them (the page then sends a token with every request).
