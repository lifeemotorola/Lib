#!/bin/bash
# Offline APK build — no Gradle, no Android SDK, no network.
#
# GitHub Actions uses Gradle (the canonical build). This script exists for the
# machine that has nothing but a JDK and four tools, which is exactly the
# environment this project is developed in:
#
#   ATOOLS=<dir with aapt2, android.jar, d8.jar, ecj-*.jar, apksigner.jar>
#   JAVA_HOME=<jdk>
#   bash android/tools/manual-build.sh
#
# It produces the same APK content: the web app in assets/www, the manifest and
# resources compiled by aapt2, the Java sources compiled by ecj, dexed by d8,
# aligned by tools/zipalign.py (Android 11+ requires resources.arsc to be stored
# uncompressed and 4-byte aligned) and signed by apksigner.
set -euo pipefail

cd "$(dirname "$0")/.."
HERE="$(pwd)"

: "${ATOOLS:?set ATOOLS to the directory holding aapt2, android.jar, d8.jar, ecj-*.jar and apksigner.jar}"
: "${JAVA_HOME:?set JAVA_HOME to a JDK 17 or newer}"
[ -x "$ATOOLS/aapt2" ] || chmod +x "$ATOOLS/aapt2" 2>/dev/null || true

JAVA="$JAVA_HOME/bin/java"
JAVAC_JAR="$(ls "$ATOOLS"/ecj-*.jar | head -1)"

MANIFEST="app/src/main/AndroidManifest.xml"
VERSION_NAME="$(sed -n 's/.*android:versionName="\([^"]*\)".*/\1/p' "$MANIFEST" | head -1)"
VERSION_CODE="$(sed -n 's/.*android:versionCode="\([^"]*\)".*/\1/p' "$MANIFEST" | head -1)"
: "${VERSION_NAME:=1.0.0}"
: "${VERSION_CODE:=1}"

BUILD="build"
rm -rf "$BUILD"
mkdir -p "$BUILD/res" "$BUILD/gen" "$BUILD/classes" "$BUILD/dex" "$BUILD/outputs"

if [ ! -d app/src/main/assets/www ]; then
  echo "ERROR: app/src/main/assets/www is missing — run 'bash android/build.sh' instead." >&2
  exit 1
fi

echo "== 1/7 aapt2 compile =="
"$ATOOLS/aapt2" compile --dir app/src/main/res -o "$BUILD/res/resources.zip"

echo "== 2/7 aapt2 link =="
"$ATOOLS/aapt2" link \
  -o "$BUILD/base.apk" \
  -I "$ATOOLS/android.jar" \
  --manifest "$MANIFEST" \
  -A app/src/main/assets \
  -0 png -0 jpg -0 jpeg -0 webp -0 woff -0 woff2 \
  "$BUILD/res/resources.zip" \
  --java "$BUILD/gen" \
  --min-sdk-version 24 \
  --target-sdk-version 34 \
  --version-code "$VERSION_CODE" \
  --version-name "$VERSION_NAME" \
  --auto-add-overlay

echo "== 3/7 compile Java =="
find app/src/main/java -name '*.java' > "$BUILD/sources.txt"
find "$BUILD/gen" -name '*.java' >> "$BUILD/sources.txt"
"$JAVA" -jar "$JAVAC_JAR" \
  -source 8 -target 8 -nowarn \
  -bootclasspath "$ATOOLS/android.jar" \
  -classpath "$ATOOLS/android.jar" \
  -d "$BUILD/classes" \
  @"$BUILD/sources.txt"

echo "== 4/7 dex =="
find "$BUILD/classes" -name '*.class' > "$BUILD/classes.txt"
"$JAVA" -cp "$ATOOLS/d8.jar" com.android.tools.r8.D8 \
  --release --min-api 24 \
  --lib "$ATOOLS/android.jar" \
  --output "$BUILD/dex" \
  $(cat "$BUILD/classes.txt")
cp "$BUILD/base.apk" "$BUILD/unsigned.apk"
( cd "$BUILD/dex" && zip -q -X "$HERE/$BUILD/unsigned.apk" classes.dex )

echo "== 5/7 zipalign =="
# Android 11+ will not install an APK whose resources.arsc is not stored
# uncompressed and 4-byte aligned, and the SDK's zipalign is exactly what
# Gradle runs. tools/zipalign.py does the same job here (python3 only).
python3 tools/zipalign.py "$BUILD/unsigned.apk" "$BUILD/aligned.apk"
python3 - "$BUILD/aligned.apk" <<'CHECK'
import sys, zipfile
apk = zipfile.ZipFile(sys.argv[1])
assert apk.testzip() is None, "the archive is corrupt"
bad = []
for info in apk.infolist():
    if info.compress_type != 0:
        continue
    offset = info.header_offset + 30 + len(info.filename.encode()) + len(info.extra)
    if offset % 4:
        bad.append(info.filename)
assert not bad, "stored entries are not 4-byte aligned: %s" % ", ".join(bad[:5])
arsc = apk.getinfo("resources.arsc")
assert arsc.compress_type == 0, "resources.arsc must be stored, not compressed"
offset = arsc.header_offset + 30 + len(arsc.filename.encode()) + len(arsc.extra)
assert offset % 4 == 0, "resources.arsc is not aligned (Android 11+ would refuse the install)"
print("   resources.arsc stored and aligned at %d; every stored entry is aligned" % offset)
CHECK

echo "== 6/7 sign =="
KEYSTORE="${ANDROID_KEYSTORE_PATH:-keystore/release.jks}"
STORE_PASS="${ANDROID_KEYSTORE_PASSWORD:-easy-school-liberia}"
KEY_ALIAS="${ANDROID_KEY_ALIAS:-easy-school}"
KEY_PASS="${ANDROID_KEY_PASSWORD:-easy-school-liberia}"
if [ ! -f "$KEYSTORE" ]; then
  echo "   creating $KEYSTORE (keep it: Android only accepts updates signed with the same key)"
  mkdir -p "$(dirname "$KEYSTORE")"
  "$JAVA_HOME/bin/keytool" -genkeypair \
    -keystore "$KEYSTORE" -alias "$KEY_ALIAS" \
    -keyalg RSA -keysize 2048 -validity 10950 \
    -storepass "$STORE_PASS" -keypass "$KEY_PASS" \
    -dname "CN=Easy School Liberia, O=Easy School Liberia, C=LR" >/dev/null 2>&1
fi

"$JAVA" -jar "$ATOOLS/apksigner.jar" sign \
  --ks "$KEYSTORE" --ks-pass "pass:$STORE_PASS" \
  --ks-key-alias "$KEY_ALIAS" --key-pass "pass:$KEY_PASS" \
  --min-sdk-version 24 \
  --out "$BUILD/outputs/Easy-School-Liberia-${VERSION_NAME}.apk" \
  "$BUILD/aligned.apk" 2>&1 | grep -v '^WARNING' || true

echo "== 7/7 verify =="
"$JAVA" -jar "$ATOOLS/apksigner.jar" verify --min-sdk-version 24 \
  "$BUILD/outputs/Easy-School-Liberia-${VERSION_NAME}.apk" 2>&1 | grep -v '^WARNING' || true
"$ATOOLS/aapt2" dump badging "$BUILD/outputs/Easy-School-Liberia-${VERSION_NAME}.apk" \
  | grep -E "^(package|sdkVersion|targetSdkVersion|application-label|launchable-activity)" || true

echo
echo "APK: $HERE/$BUILD/outputs/Easy-School-Liberia-${VERSION_NAME}.apk ($(du -h "$BUILD/outputs/Easy-School-Liberia-${VERSION_NAME}.apk" | cut -f1))"
