#!/bin/bash
# Builds the single-file offline deliverable index.html from the source parts.
set -e
cd "$(dirname "$0")"
{
  echo '<!DOCTYPE html>'
  echo '<html lang="en">'
  echo '<head>'
  echo '<meta charset="utf-8">'
  echo '<meta name="viewport" content="width=device-width, initial-scale=1">'
  echo '<title>Liberian Course Pack Generator &middot; English, French, General Science, Mathematics, Social Studies &amp; Religious &amp; Moral Education</title>'
  echo '<style>'
  cat styles.css
  echo '</style>'
  echo '</head>'
  cat body.html
  for f in data-en.js data-fr.js data-sc.js data-ma.js data-ss.js data-rm.js gen-en.js gen-fr.js gen-sc.js gen-ma.js gen-ss.js gen-rm.js app.js; do
    echo '<script>'
    cat "$f"
    echo '</script>'
  done
  echo '</body>'
  echo '</html>'
} > index.html
echo "built index.html ($(wc -c < index.html) bytes)"
