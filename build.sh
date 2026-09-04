#!/bin/bash
# Builds the single-file offline deliverable index.html from the source parts.
set -e
cd "$(dirname "$0")"
{
  echo '<!DOCTYPE html>'
  echo '<html lang="en">'
  echo '<head>'
  echo '<meta charset="utf-8">'
  echo '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
  echo '<meta name="color-scheme" content="light">'
  echo '<meta name="theme-color" content="#0b3b8c">'
  echo '<meta name="application-name" content="Liberia Packs">'
  echo '<link rel="manifest" href="manifest.webmanifest">'
  echo '<link rel="apple-touch-icon" href="assets/icons/apple-touch-icon.png">'
  if [ -f assets/icons/favicon-48.png ]; then
    printf '<link rel="icon" type="image/png" sizes="48x48" href="data:image/png;base64,'
    base64 -w0 assets/icons/favicon-48.png
    echo '">'
  fi
  echo '<title>Liberian Course Pack Generator &middot; English, Phonics, French, General Science, Mathematics, Social Studies, Religious &amp; Moral Education, Physical Education, Biology, Chemistry, Physics, Economics, English Grammar &amp; Geography</title>'
  echo '<style>'
  cat styles.css
  echo '</style>'
  echo '</head>'
  cat body.html
  # Inline SVG icon sprite. Emoji rendered inconsistently across devices (and
  # were missing entirely on some school PCs and older Android builds), so the
  # interface draws real icons instead. Inlined to stay offline and single-file.
  cat icons.svg.html
  # "Are you human?" (Cloudflare Turnstile). The site key is public by design
  # — it only identifies the widget — so it is a repository *variable*, not a
  # secret. Leave it unset and the human check stays switched off, which is
  # what offline/USB copies need. The matching TURNSTILE_SECRET_KEY stays on
  # the server (Pages secret or Worker secret) and is never built in.
  if [ -n "${TURNSTILE_SITE_KEY:-}" ]; then
    echo "<script>window.TURNSTILE_SITE_KEY=\"${TURNSTILE_SITE_KEY}\";</script>"
  fi
  # AI endpoint. The Groq API key lives only on the proxy Worker (see worker/);
  # the page just needs the Worker's URL. Provisioned once as the GitHub
  # repository variable AI_PROXY_URL (or secret; the value is not sensitive).
  # When not set, ai.js's built-in PROXY_URL constant is used (empty = the
  # tutor shows a "not connected" message instead of making calls).
  if [ -n "${AI_PROXY_URL:-}" ]; then
    echo "<script>window.AI_PROXY_URL=\"${AI_PROXY_URL}\";</script>"
  fi
  # Emmanuel's portrait, inlined as a data URI so the deliverable stays offline
  if [ -f assets/emmanuel.png ]; then
    echo '<script>'
    printf 'window.EMMANUEL_AVATAR="data:image/png;base64,'
    base64 -w0 assets/emmanuel.png
    printf '";'
    echo
    echo '</script>'
  fi
  # Real, subject-matched cover photographs/artwork. Keep these in the page so
  # a Mathematics cover still shows mathematics when opened from a USB stick.
  echo '<script>window.SUBJECT_COVER_ART={'
  first=1
  for id in en pho fr sc ma ss rm pe bi ch ph ec eg gg li wa; do
    img="assets/covers/$id.png"
    [ -f "$img" ] || continue
    if [ "$first" -eq 0 ]; then printf ','; fi
    first=0
    # quoted key: the WASSCE ids contain a hyphen, which is not a bare JS identifier
    printf '"%s":{url:"data:image/png;base64,' "$id"
    base64 -w0 "$img"
    printf '",mime:"image/png",w:480,h:640}'
  done
  echo '};</script>'
  # data-pho.js builds PHO_CURRICULUM from EN_CURRICULUM and EG_CURRICULUM,
  # so it must load after both data-en.js and data-eg.js.
  for f in humancheck.js data-en.js data-fr.js data-fr79.js data-fr1012.js data-sc.js data-sc79.js data-ma.js data-ma79.js data-ma-sh.js data-ss.js data-ss79.js data-rm.js data-rm79.js data-pe.js data-pe79.js data-bi.js data-ch.js data-ph.js data-ec.js data-eg.js data-pho.js data-gg.js data-li.js data-wa.js data-wa-ma.js data-wa-en.js data-wa-bio.js data-wa-bio2.js data-wa-ch.js data-wa-ph.js data-wa-ec.js data-wa-gg.js data-wa-his.js data-wa-ag.js data-wa-li.js data-wa-crs.js gen-en.js gen-pho.js gen-fr.js gen-sc.js gen-ma.js gen-ma79.js gen-ma-sh.js gen-ss.js gen-rm.js gen-pe.js gen-li.js gen-wa.js book.js ai.js app.js; do
    echo '<script>'
    cat "$f"
    echo '</script>'
  done
  echo '</body>'
  echo '</html>'
} > index.html
echo "built index.html ($(wc -c < index.html) bytes)"
