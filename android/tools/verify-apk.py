#!/usr/bin/env python3
"""Check a built APK without any Android tooling.

Run after every build (the CI workflow and both local paths do):

    python3 android/tools/verify-apk.py android/build/outputs/Easy-School-Liberia-1.0.0.apk

It answers the questions that decide whether a phone will accept and run the
app, using nothing but the Python standard library:

  * is the archive intact (every CRC)?
  * is the platform actually inside it, with the Android bridge injected?
  * is resources.arsc stored and 4-byte aligned? Android 11+ refuses to
    install an APK where it is not, and a missing zipalign is otherwise a
    silent, device-specific failure.
  * are the launcher icon, the splash mark and the manifest where they
    should be?

Exit code 0 means the APK is structurally installable. Check the signature
separately with apksigner (or `gradle` output), and the manifest with
`aapt2 dump badging`.
"""
import sys
import zipfile

REQUIRED = [
    "AndroidManifest.xml",
    "resources.arsc",
    "classes.dex",
    "assets/www/index.html",
    "assets/www/book.html",
    "assets/www/book.js",
    "assets/www/manifest.webmanifest",
    "res/mipmap-xxxhdpi-v4/ic_launcher.png",
    "res/drawable-nodpi-v4/splash_mark.png",
]

BRIDGE_MARKERS = [
    "easy-school-android-shell:start",
    "easy-school-android-shell:end",
    "__androidBack",          # the Back handler shell.js installs
    "AndroidShell",           # the bridge object the page is given
]


def data_offset(apk, info):
    return info.header_offset + 30 + len(info.filename.encode("utf-8")) + len(info.extra)


def main():
    if len(sys.argv) != 2:
        print(__doc__, file=sys.stderr)
        return 2
    path = sys.argv[1]
    problems = []

    try:
        apk = zipfile.ZipFile(path)
    except Exception as exc:                      # noqa: BLE001 - report, do not raise
        print("FAIL: %s is not a readable APK: %s" % (path, exc), file=sys.stderr)
        return 1

    bad = apk.testzip()
    if bad:
        problems.append("corrupt entry: %s" % bad)

    names = set(apk.namelist())
    for wanted in REQUIRED:
        if wanted not in names:
            problems.append("missing from the APK: %s" % wanted)

    # The platform, and the bridge that makes it an app, are really in there.
    if "assets/www/index.html" in names:
        page = apk.read("assets/www/index.html").decode("utf-8", "replace")
        for marker in BRIDGE_MARKERS:
            if marker not in page:
                problems.append("the packaged page is missing %r" % marker)
        if not page.rstrip().endswith("</html>"):
            problems.append("the packaged page is truncated")
        body = page.find("<body")
        bridge = page.find("easy-school-android-shell:start")
        if body < 0 or bridge < body or bridge - body > 400:
            problems.append("the bridge is not at the top of the page's <body>")
        if len(page) < 5_000_000:
            problems.append("the packaged page is suspiciously small (%d bytes)" % len(page))

    # Android 11+ install requirement.
    if "resources.arsc" in names:
        arsc = apk.getinfo("resources.arsc")
        if arsc.compress_type != 0:
            problems.append("resources.arsc is compressed; Android 11+ will refuse the install")
        elif data_offset(apk, arsc) % 4:
            problems.append("resources.arsc is not 4-byte aligned (run the zipalign step)")

    unaligned = [i.filename for i in apk.infolist()
                 if i.compress_type == 0 and data_offset(apk, i) % 4]
    if unaligned:
        problems.append("%d stored entries are not 4-byte aligned (first: %s)"
                        % (len(unaligned), unaligned[0]))

    icons = [n for n in names if n.startswith("res/mipmap-")]
    if len(icons) < 8:
        problems.append("expected legacy + adaptive launcher icons, found %d" % len(icons))

    if problems:
        for problem in problems:
            print("FAIL: " + problem, file=sys.stderr)
        return 1

    print("OK: %s" % path)
    print("    %d entries, %.1f MB, platform page %.1f MB, resources.arsc stored and aligned"
          % (len(names), _size(path) / 1e6,
             len(apk.read("assets/www/index.html")) / 1e6))
    return 0


def _size(path):
    import os
    return os.path.getsize(path)


if __name__ == "__main__":
    sys.exit(main())
