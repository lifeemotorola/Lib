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
  echo '<title>Liberian Course Pack Generator &middot; English, French, General Science, Mathematics, Social Studies, Religious &amp; Moral Education &amp; Physical Education</title>'
  echo '<style>'
  cat styles.css
  echo '</style>'
  echo '</head>'
  cat body.html
  for f in data-en.js data-fr.js data-fr79.js data-sc.js data-sc79.js data-ma.js data-ma79.js data-ss.js data-ss79.js data-rm.js data-rm79.js data-pe.js data-pe79.js data-bi.js data-ch.js data-ec.js gen-en.js gen-fr.js gen-sc.js gen-ma.js gen-ma79.js gen-ss.js gen-rm.js gen-pe.js book.js app.js; do
    echo '<script>'
    cat "$f"
    echo '</script>'
  done
  echo '</body>'
  echo '</html>'
} > index.html
echo "built index.html ($(wc -c < index.html) bytes)"
