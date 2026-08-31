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
  echo '<title>Liberian Course Pack Generator &middot; English, French, General Science, Mathematics, Social Studies, Religious &amp; Moral Education, Physical Education, Biology, Chemistry, Physics, Economics, English Grammar &amp; Geography</title>'
  echo '<style>'
  cat styles.css
  echo '</style>'
  echo '</head>'
  cat body.html
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
  for id in en fr sc ma ss rm pe bi ch ph ec eg gg li; do
    img="assets/covers/$id.png"
    [ -f "$img" ] || continue
    if [ "$first" -eq 0 ]; then printf ','; fi
    first=0
    printf '%s:{url:"data:image/png;base64,' "$id"
    base64 -w0 "$img"
    printf '",mime:"image/png",w:480,h:640}'
  done
  echo '};</script>'
  for f in data-en.js data-fr.js data-fr79.js data-fr1012.js data-sc.js data-sc79.js data-ma.js data-ma79.js data-ma-sh.js data-ss.js data-ss79.js data-rm.js data-rm79.js data-pe.js data-pe79.js data-bi.js data-ch.js data-ph.js data-ec.js data-eg.js data-gg.js data-li.js gen-en.js gen-fr.js gen-sc.js gen-ma.js gen-ma79.js gen-ma-sh.js gen-ss.js gen-rm.js gen-pe.js gen-li.js book.js ai.js app.js; do
    echo '<script>'
    cat "$f"
    echo '</script>'
  done
  echo '</body>'
  echo '</html>'
} > index.html
echo "built index.html ($(wc -c < index.html) bytes)"
