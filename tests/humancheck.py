#!/usr/bin/env python3
"""Human check ("Are you human?") and the AI tutor's quiet failures.

Guards two things:

  * the Cloudflare Turnstile card covers the platform until the visitor
    passes it, then gets out of the way — and stays switched off entirely
    when no site key is configured, which is what offline and USB copies
    need;
  * Emmanuel never repeats what the proxy told it. A failed request may
    say that it failed — silence is what made the tutor look dead — but
    it stays short, offers a way to ask again, and never mentions key
    names, hosting details, status codes or the proxy's own wording.

The widget itself is stubbed, so the suite runs without reaching
challenges.cloudflare.com.

Run:  python3 tests/humancheck.py
"""
import functools, http.server, pathlib, re, socketserver, sys, threading
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE_KEY = "1x00000000000000000000AA"          # Cloudflare's always-pass test key
SENSITIVE = ("GROQ", "secret", "Cloudflare", "proxy", "deploy", "API error", "not configured")
bad = []


def keyless(route):
    """Serve the checkout as it looks with no TURNSTILE_SITE_KEY configured.

    The committed index.html ships with the live site key baked in by
    build.sh, so its assignment is stripped before the no-key assertions
    run — those guard the humancheck.js behaviour, not the deployment."""
    response = route.fetch()
    body = re.sub(r'<script>window\.TURNSTILE_SITE_KEY="[^"]*";</script>',
                  "", response.text())
    route.fulfill(response=response, body=body)


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):               # keep the test output readable
        pass


def serve():
    """Serve the checkout over http:// — the check is off on file:// by design."""
    handler = functools.partial(Quiet, directory=str(ROOT))
    httpd = socketserver.TCPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd, "http://127.0.0.1:%d/index.html" % httpd.server_address[1]


# A stand-in for window.turnstile: counts renders/resets and hands back a
# token on demand, so the flow can be driven without a network round trip.
STUB = """
window.TURNSTILE_SITE_KEY = "%s";
window.__ts = { renders: 0, resets: 0 };
window.turnstile = {
  render: function (el, opts) {
    window.__ts.renders++;
    window.__ts.sitekey = opts.sitekey;
    window.turnstile.pass = function (token) { opts.callback(token); };
    return "widget";
  },
  reset: function () { window.__ts.resets++; }
};
""" % SITE_KEY


with sync_playwright() as p:
    b = p.chromium.launch()
    httpd, url = serve()
    try:
        # ---- 1. no site key → the gate stays off --------------------------
        pg = b.new_page()
        pg.route("**/*", keyless)
        pg.goto(url); pg.wait_for_timeout(900)
        if pg.query_selector("#hcVeil"):
            bad.append("human check shown without a site key")
        state = pg.evaluate("()=>({api:!!window.HUMAN_CHECK, on:window.HUMAN_CHECK&&window.HUMAN_CHECK.enabled(), t:window.HUMAN_CHECK&&window.HUMAN_CHECK.token()})")
        if not state["api"]:
            bad.append("window.HUMAN_CHECK missing")
        if state["on"] is not False or state["t"] != "":
            bad.append(f"human check should be off and hold no token: {state}")
        pg.close()

        # ---- 2. site key → the card covers the platform, then clears ------
        pg = b.new_page()
        pg.add_init_script(STUB)
        pg.goto(url); pg.wait_for_timeout(900)
        veil = pg.query_selector("#hcVeil")
        if not veil:
            bad.append("no human check card with a site key configured")
        else:
            cls = pg.get_attribute("#hcVeil", "class") or ""
            if "hc-quiet" in cls:
                bad.append("card did not cover the platform on load")
            if "Are you human?" not in pg.inner_text("#hcVeil"):
                bad.append("card does not ask 'Are you human?'")
        if pg.evaluate("()=>window.__ts.renders") != 1:
            bad.append("Turnstile widget not rendered once")
        if pg.evaluate("()=>window.__ts.sitekey") != SITE_KEY:
            bad.append("widget rendered with the wrong site key")

        pg.evaluate("()=>window.turnstile.pass('token-1')"); pg.wait_for_timeout(200)
        if "hc-quiet" not in (pg.get_attribute("#hcVeil", "class") or ""):
            bad.append("card stayed up after the visitor passed")
        if pg.evaluate("()=>document.body.classList.contains('hc-locked')"):
            bad.append("page left locked after passing")
        if pg.evaluate("()=>window.HUMAN_CHECK.token()") != "token-1":
            bad.append("token not held after passing")

        # spending the token, then renewing it quietly
        pg.evaluate("()=>window.HUMAN_CHECK.consume('token-1')")
        if pg.evaluate("()=>window.HUMAN_CHECK.token()") != "":
            bad.append("spent token offered again")
        pg.evaluate("()=>window.HUMAN_CHECK.requestToken()"); pg.wait_for_timeout(200)
        if pg.evaluate("()=>window.__ts.resets") < 1:
            bad.append("widget not reset to mint a fresh token")
        if "hc-quiet" not in (pg.get_attribute("#hcVeil", "class") or ""):
            bad.append("renewal interrupted the visitor")
        pg.close()

        # ---- 3. the tutor keeps a wordy failure to itself -----------------
        # The gate is off here too so the chat test does not sit behind the
        # human-check card (the card itself is covered by tests 1 and 2).
        # A failed request is now allowed to say so — a tutor that says
        # nothing looks broken — but it must stay short, hand the composer
        # back, and repeat none of the proxy's own wording.
        calls = {"n": 0}

        def failing(route):
            calls["n"] += 1
            route.fulfill(status=500, content_type="application/json",
                          body='{"error":{"message":"The AI tutor is not '
                               'configured yet: the GROQ_API_KEY secret is '
                               'not set on this site."}}')

        pg = b.new_page()
        pg.route("**/*", keyless)
        pg.route("**/api/chat", failing)
        pg.goto(url); pg.wait_for_timeout(900)
        pg.click("#aiFab")
        pg.fill("#aiInput", "Explain photosynthesis")
        pg.click("#aiSend")
        pg.wait_for_timeout(1200)
        if calls["n"] != 1:
            bad.append(f"question not sent to the proxy: {calls['n']}")
        panel = pg.inner_text("#aiPanel")
        for word in SENSITIVE:
            if word.lower() in panel.lower():
                bad.append(f"tutor leaked {word!r}")
        if not pg.query_selector(".ai-err"):
            bad.append("a failed reply was left unsaid — the visitor is told nothing")
        if not pg.query_selector(".ai-retry"):
            bad.append("a failed reply offers no way to ask again")
        err = pg.inner_text(".ai-err") if pg.query_selector(".ai-err") else ""
        if len(err.strip()) > 200:
            bad.append(f"failure note is not short: {err!r}")
        if "Explain photosynthesis" not in panel:
            bad.append("the visitor's own question was removed")
        if pg.inner_text("#aiStatus").strip():
            bad.append("status line still showing after a failure")
        if pg.is_hidden("#aiSend") or pg.is_visible("#aiStop"):
            bad.append("composer left unusable after a failure")

        # the way forward has to work: asking again sends the question again
        if pg.query_selector(".ai-retry"):
            pg.click(".ai-retry"); pg.wait_for_timeout(900)
            if calls["n"] != 2:
                bad.append(f"'Try again' did not resend the question: {calls['n']}")
            if pg.is_hidden("#aiSend") or pg.is_visible("#aiStop"):
                bad.append("composer left unusable after retrying")
        pg.close()

    finally:
        httpd.shutdown()
    b.close()

print("\nBAD:", bad)
sys.exit(1 if bad else 0)
