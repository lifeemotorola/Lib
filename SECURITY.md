# Security policy

## Scope

The platform is a **static, single-file web application**. There is no server,
no database, no login and no account. That removes most of the usual attack
surface, and this file exists mainly so a buyer's security reviewer can confirm
it in two minutes rather than two days.

| Question | Answer |
|---|---|
| Does the platform send data anywhere? | No, by default. Course packs, saved documents and settings stay in the browser (`localStorage` / IndexedDB). **Exception:** the AI tutor sends the text of the question the user types to a server-side proxy, which forwards it to Groq. Nothing is sent when the tutor is not used, and nothing is sent offline. |
| Is there authentication? | No. The **Teacher / Student** switch is a *document format* choice, not a security control — it decides whether an answer-key section is included in the file that is produced. Anyone can flip it. This is documented in the README and must stay documented. |
| Does the built page contain secrets? | It must never. The Groq API key lives only in the Cloudflare Worker / Pages secret store. `worker/groq-proxy.js` and `functions/api/chat.js` read it from the environment. |
| Where could a secret leak? | A key committed to the repo, or baked into `index.html` by `build.sh`. Rotate immediately at <https://console.groq.com>. A key that has ever appeared in a public page is burned. |
| Third-party runtime code | Only the Cloudflare Turnstile widget (`humancheck.js`), loaded from Cloudflare and skipped entirely on `file://` and offline copies. No other external script is loaded at runtime. |
| Dependencies | None at runtime. `requirements.txt` (Playwright) and, for two end-to-end tests, `jsdom` are developer-only. |
| Service worker | `sw.js` caches the app shell for offline use. It caches same-origin files only. |

## Reporting a vulnerability

Open a GitHub issue, or email the address in `APP_BRAND.support` once it is
set. Please include:

- what you did, and what happened instead of what you expected;
- whether it reproduces from a `file://` copy (offline) or only when hosted;
- the browser and version.

Expected response: acknowledgement within 5 working days, a fix or a
documented decision within 30 days.

## Data handling for schools

- Saved documents (teaching library) live in **IndexedDB on that device**.
  Clearing browser/site data deletes them. That is by design and is stated in
  the UI.
- Library backups (`.json`) **may contain teacher answer keys and pupils'
  names**. They must not be distributed to pupils. The README says so; keep
  that warning in any rebranded version.
- **Usage counting** (`usage.js`) is off by default, stores counts in
  `localStorage` on the same device, and contains no network call at all —
  `tests/usage.js` fails the build if a fetch, XHR, beacon or WebSocket ever
  appears in that file. Reports leave the device only as a file the user
  downloads and chooses to send.

## Hardening checklist before a commercial deployment

1. Serve over HTTPS (required for the service worker and for installation).
2. Keep the Groq key server-side only; enforce the Origin allowlist in
   `worker/groq-proxy.js` / `functions/api/chat.js`.
3. Enable Turnstile (`TURNSTILE_SITE_KEY` + secret) so the tutor quota cannot
   be drained by a script — and confirm it stays disabled on offline/USB
   copies, which the build already handles.
4. Re-run `bash build.sh` from a clean checkout and confirm no secret appears
   in the generated `index.html`.
5. Rotate keys at handover: the seller revokes theirs, the buyer provisions
   their own.
