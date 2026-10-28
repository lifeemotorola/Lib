#!/bin/bash
# Builds the Android APK.
#
#   bash android/build.sh              # Gradle if an Android SDK is available
#   bash android/build.sh --fresh      # rebuild index.html from source first
#   bash android/build.sh --manual     # offline toolchain (see tools/manual-build.sh)
#
# Both paths stage the SAME web app: the platform's index.html with
# web/shell/shell.js injected, next to book.html, book.js, the manifest and
# assets/. The APK therefore contains exactly what the website serves.
set -euo pipefail

cd "$(dirname "$0")"
HERE="$(pwd)"
ROOT="$(cd .. && pwd)"

FRESH=0
MODE="auto"
for arg in "$@"; do
  case "$arg" in
    --fresh) FRESH=1 ;;
    --manual) MODE="manual" ;;
    --gradle) MODE="gradle" ;;
    -h|--help) sed -n '2,12p' "$0"; exit 0 ;;
    *) echo "unknown option: $arg" >&2; exit 2 ;;
  esac
done

VERSION_NAME="$(sed -n 's/.*android:versionName="\([^"]*\)".*/\1/p' app/src/main/AndroidManifest.xml | head -1)"
VERSION_CODE="$(sed -n 's/.*android:versionCode="\([^"]*\)".*/\1/p' app/src/main/AndroidManifest.xml | head -1)"
: "${VERSION_NAME:=1.0.0}"
: "${VERSION_CODE:=1}"

if [ "$FRESH" = "1" ]; then
  echo "== rebuilding index.html from source =="
  ( cd "$ROOT" && bash build.sh )
fi

if [ ! -f "$ROOT/index.html" ]; then
  echo "ERROR: $ROOT/index.html is missing — run 'bash build.sh' in the repo root." >&2
  exit 1
fi

echo "== staging the web app into the app package =="
WWW="app/src/main/assets/www"
rm -rf "$WWW"
mkdir -p "$WWW/assets"
python3 tools/inject-shell.py "$ROOT/index.html" "$WWW/index.html" web/shell/shell.js
cp "$ROOT/book.html" "$ROOT/book.js" "$ROOT/manifest.webmanifest" "$WWW/"
cp -R "$ROOT/assets/." "$WWW/assets/"
# The platform's own test suites and the PDFs stay out of the APK.
rm -f "$WWW/assets/README.md" "$WWW/assets/covers/README.md" "$WWW/assets/icons/README.md"
echo "   www: $(du -sh "$WWW" | cut -f1)"

if [ "$MODE" = "auto" ]; then
  if [ -n "${ANDROID_HOME:-}${ANDROID_SDK_ROOT:-}" ] && command -v gradle >/dev/null 2>&1; then
    MODE="gradle"
  elif [ -n "${ATOOLS:-}" ] && [ -n "${JAVA_HOME:-}" ]; then
    MODE="manual"
  else
    echo "ERROR: no Android SDK + Gradle, and no ATOOLS/JAVA_HOME for the offline toolchain." >&2
    echo "       See android/README.md — GitHub Actions builds this on every tag." >&2
    exit 1
  fi
fi

if [ "$MODE" = "gradle" ]; then
  echo "== gradle assembleRelease =="
  gradle --no-daemon :app:assembleRelease
  OUT="app/build/outputs/apk/release"
else
  echo "== offline toolchain =="
  bash tools/manual-build.sh
  OUT="build/outputs"
fi

APK="$(ls -t "$OUT"/*.apk 2>/dev/null | head -1 || true)"
if [ -z "$APK" ]; then
  echo "ERROR: the build produced no APK in $OUT" >&2
  exit 1
fi

FINAL="build/outputs/Easy-School-Liberia-${VERSION_NAME}.apk"
mkdir -p "$(dirname "$FINAL")"
if [ "$(cd "$(dirname "$APK")" && pwd)/$(basename "$APK")" != "$(cd "$(dirname "$FINAL")" && pwd)/$(basename "$FINAL")" ]; then
  cp "$APK" "$FINAL"
fi
echo "== verifying the APK =="
python3 tools/verify-apk.py "$FINAL"

echo
echo "APK: $FINAL ($(du -h "$FINAL" | cut -f1))"
