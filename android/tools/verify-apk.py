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
import struct
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
]

# Names inside the resource table, not file paths: AGP shortens resource paths
# in a release build, so the icon cannot be found by looking for a file called
# ic_launcher.png. The manifest refers to it by name, so the name survives.
REQUIRED_RESOURCE_NAMES = [b"ic_launcher", b"splash_mark"]

BRIDGE_MARKERS = [
    "easy-school-android-shell:start",
    "easy-school-android-shell:end",
    "__androidBack",          # the Back handler shell.js installs
    "AndroidShell",           # the bridge object the page is given
]


def data_offset(apk, info):
    """Where this entry's bytes really start.

    The LOCAL header is the one that counts: that is where the data follows,
    and zipalign (the SDK's and ours) pads the local extra field to align it.
    The central directory keeps its own copy of the extra field, which may be
    shorter — reading it, as a naive checker does, reports false misalignment
    for a perfectly aligned Gradle build.
    """
    fp = apk.fp
    here = fp.tell()
    try:
        fp.seek(info.header_offset)
        header = fp.read(30)
    finally:
        fp.seek(here)
    if len(header) < 30:
        return info.header_offset + 30 + len(info.filename.encode("utf-8")) + len(info.extra)
    name_len = struct.unpack_from("<H", header, 26)[0]
    extra_len = struct.unpack_from("<H", header, 28)[0]
    return info.header_offset + 30 + name_len + extra_len


def main():
    if len(sys.argv) != 2:
        print(__doc__, file=sys.stderr)
        return 2
    path = sys.argv[1]
    problems = []
    notes = []

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

    # Launcher artwork: legacy bitmaps for every density plus the adaptive
    # icon definitions. Paths may have been shortened by AGP, so count them.
    if "resources.arsc" in names:
        table = apk.read("resources.arsc")
        for wanted in REQUIRED_RESOURCE_NAMES:
            if wanted not in table:
                # Advisory only: a release build is allowed to shorten resource
                # names, and the count check below is what really guards this.
                notes.append("resource name %r not found verbatim (AGP may have "
                             "shortened it)" % wanted.decode())
    pngs = [n for n in names if n.startswith("res/") and n.lower().endswith(".png")]
    adaptive = [n for n in names if n.startswith("res/") and n.lower().endswith(".xml")]
    if len(pngs) < 6 or not adaptive:
        problems.append("launcher artwork looks incomplete: %d png, %d xml under res/"
                        % (len(pngs), len(adaptive)))

    if problems:
        for problem in problems:
            print("FAIL: " + problem, file=sys.stderr)
        return 1

    for note in notes:
        print("note: " + note)
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
