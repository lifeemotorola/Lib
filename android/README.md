# Easy School Liberia for Android

The platform, installable on a phone or tablet. The APK contains the same
`index.html` the website serves — all 19 subjects, Grades 1–12, KG lesson
plans, the teaching library, printable packs and teacher answer keys — and
runs with **no server, no account and no internet**.

| | |
|---|---|
| Package | `com.easyschool.liberia` |
| Minimum Android | 7.0 (API 24) |
| Target Android | 14 (API 34) |
| Permissions | `INTERNET` (the optional AI tutor), `WRITE_EXTERNAL_STORAGE` on Android 7–9 only (saving a pack) |
| App size | ≈10 MB, the whole platform inside |
| Dependencies | none — no AndroidX, no libraries |

## Install it

1. Build the APK (below) or download it from **Releases** / the run's
   **Artifacts** in GitHub Actions.
2. Copy it to the phone and tap it. Android will ask permission to install
   apps from this source — allow it once.
3. Open **Easy School Liberia**. It works immediately, in airplane mode.

Nothing is downloaded on first run: the platform ships inside the app.

## Build it

### GitHub Actions (canonical)

`.github/workflows/android.yml` builds and signs the APK on every push that
touches the platform or `android/`, and attaches it to a Release when a `v*`
tag is pushed:

```bash
git tag v1.0.0 && git push origin v1.0.0
```

### Locally, with an Android SDK

```bash
bash android/build.sh             # stages the web app, then gradle assembleRelease
bash android/build.sh --fresh     # rebuild index.html from source first
```

Requires JDK 17+, `ANDROID_HOME` and Gradle 8.9 (or Android Studio, which
opens `android/` as a normal project).

### Locally, with no Android SDK at all

The offline toolchain uses `aapt2`, `ecj`, `d8` and `apksigner` directly:

```bash
export ATOOLS=/path/to/tools        # aapt2, android.jar, d8.jar, ecj-*.jar, apksigner.jar
export JAVA_HOME=/path/to/jdk
bash android/build.sh --manual
```

It produces the same app: the result is aligned by `tools/zipalign.py` (which
does what the SDK's zipalign does — Android 11+ refuses to install an APK whose
`resources.arsc` is not stored uncompressed and 4-byte aligned) and signed by
`apksigner`. It needs `python3` as well as the JDK.

Both paths write `android/build/outputs/Easy-School-Liberia-<version>.apk`.

## What the app adds to the page

The platform is unchanged inside the APK. `android/web/shell/shell.js` is a
small bridge, injected between the two markers
`easy-school-android-shell:start/end` when the package is staged, that gives
the four things a WebView cannot do itself:

| Web behaviour | In the app |
|---|---|
| `window.print()` | Android's print dialog, with **Save as PDF** among the destinations. The platform's own print stylesheet decides the pages. |
| An exported `.docx` | Streamed into **Downloads/Easy School Liberia/**, with a "Saving…" card. Android 10+ needs no permission; 7–9 asks once and, if refused, saves into the app's own folder and says where. |
| The voice reader | The device's text-to-speech engine, through a `speechSynthesis` shim — the online and offline voices the phone already has, including African English accents, still listed as Man/Woman. |
| The Back button | Closes what is open (teaching tools, book sequence, tutor, voice reader, settings drawer) and only then leaves the app. |

Everything else — settings, the teaching library in IndexedDB, uploaded logos
— is the platform's own storage, kept per device exactly as in a browser. The
page is served from `https://appassets.androidplatform.net/` (answered from
the APK, never the network) rather than `file://`, because a `file://`
document has an opaque origin and would lose localStorage and IndexedDB.

## Updating the platform

1. Change the platform as usual (`app.js`, `styles.css`, a `data-*.js` file).
2. Run `bash build.sh` and commit `index.html` — the website and the APK are
   built from the same file.
3. Bump `android:versionCode` (and usually `android:versionName`) in
   `android/app/src/main/AndroidManifest.xml`.
4. Rebuild, or push a new `v*` tag to let Actions publish it.

Teachers' data survives the update: it lives in the app's WebView storage,
which an update (same package, same signing key) keeps.

## Signing, and why it matters

Android only installs an update signed by the **same key** as the version
already on the phone. A build signed with a throwaway key (the default when
no secret is configured) installs fine, but a later build cannot update it —
the teacher has to uninstall and lose the device's saved settings and library.

For anything beyond a test, create one keystore and store it in the repository
secrets, not in the repo:

```bash
keytool -genkeypair -keystore easy-school.jks -alias easy-school \
  -keyalg RSA -keysize 2048 -validity 10950
base64 -w0 easy-school.jks      # → ANDROID_KEYSTORE_BASE64
```

Then set `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`,
`ANDROID_KEY_ALIAS` and `ANDROID_KEY_PASSWORD` under
**Settings → Secrets and variables → Actions**. Keep a copy of the keystore
somewhere safe: losing it is the same as losing the ability to update.

The manual build creates `android/keystore/release.jks` on first use
(git-ignored) and reuses it afterwards — keep that file.

## White-labelling

`android/app/src/main/res/values/strings.xml` holds the app name and the
messages; `colors.xml` holds the brand colours; the launcher artwork lives in
`res/mipmap-*` and `res/drawable-nodpi/`. The product name, tutor name and
footer inside the app come from `brand.js` at the repository root — one object,
shared with the website.

## What is deliberately not here

- **No background sync, no analytics, no account.** The app never calls home.
- **No bundled voices.** The voice reader uses the voices Android already
  provides (most phones have an offline English one). A device with no TTS
  engine simply shows the reader's existing "unsupported" note.
- **The AI tutor needs the internet.** It is the only network feature, it is
  hidden while the device is offline, and it talks to the Cloudflare Worker
  proxy whose URL is baked in at build time from the `AI_PROXY_URL` variable —
  the Groq key never enters the APK. A build without that variable simply
  shows the tutor's "not connected" state.
- **No Play Store listing.** This is a sideloaded APK. A Play release would
  need the same build uploaded as an `.aab` and a Play Console account; the
  Gradle project here is ready for `bundleRelease` when that day comes.

## Layout

```
android/
  build.sh                 stage the web app + build (Gradle or offline tools)
  settings.gradle          Gradle project
  build.gradle             AGP version
  app/
    build.gradle           module config (minSdk 24, targetSdk 34, no deps)
    src/main/
      AndroidManifest.xml  one activity, no permissions beyond Internet + storage
      java/com/easyschool/liberia/
        MainActivity.java  WebView host: asset origin, print, file picker, back
        AssetServer.java   serves the platform out of assets over https
        ShellBridge.java   the window.AndroidShell object the page sees
        DownloadStore.java blob → Downloads, atomically
        TtsSpeaker.java    the device's text-to-speech engine
        SavingDialog.java  the "Saving…" card
      res/                 theme, launcher icons, splash, one layout
  web/shell/shell.js       the bridge injected into index.html inside the APK
  tools/inject-shell.py    the injection, marked and idempotent
  tools/manual-build.sh    aapt2 + ecj + d8 + apksigner, no SDK
```

Tests: `node tests/android-shell.js` (zero dependencies) checks the bridge —
printing, the save pipeline, the speech shim against what `voice.js` actually
calls, the Back behaviour, and that it stays inert outside the app.
