#!/usr/bin/env python3
"""Insert the Android bridge into the built single-file platform.

The platform ships as ONE self-contained index.html (see ../../build.sh). The
Android app uses that same file untouched, except for one <script> block added
between the app's markers, so:

  * the website, the USB copies and the APK are all built from the same source
  * the bridge is easy to find and to remove
  * re-running the build never stacks two copies of the bridge

Usage: inject-shell.py <index.html> <out.html> <shell.js>
"""
import sys

START = "<!-- easy-school-android-shell:start -->"
END = "<!-- easy-school-android-shell:end -->"


def main() -> int:
    if len(sys.argv) != 4:
        print(__doc__, file=sys.stderr)
        return 2
    src, out, shell = sys.argv[1], sys.argv[2], sys.argv[3]

    with open(src, "r", encoding="utf-8", errors="surrogateescape") as handle:
        html = handle.read()
    with open(shell, "r", encoding="utf-8") as handle:
        script = handle.read()

    # build.sh refuses to inline a file that carries a literal closing script
    # tag; the same rule applies here, for the same reason.
    if "</script>" in script:
        print("ERROR: %s contains a literal closing script tag" % shell, file=sys.stderr)
        return 1

    # Idempotent: drop an earlier injection, wherever it was.
    while START in html:
        head, rest = html.split(START, 1)
        if END not in rest:
            print("ERROR: unbalanced markers in %s" % src, file=sys.stderr)
            return 1
        _, tail = rest.split(END, 1)
        html = head + tail

    marker = "<body"
    at = html.find(marker)
    if at < 0:
        print("ERROR: no <body> in %s" % src, file=sys.stderr)
        return 1
    close = html.find(">", at)
    if close < 0:
        print("ERROR: unterminated <body> tag in %s" % src, file=sys.stderr)
        return 1

    block = (
        "\n" + START + "\n"
        "<script>\n" + script + "\n</script>\n"
        + END + "\n"
    )
    html = html[: close + 1] + block + html[close + 1:]

    with open(out, "w", encoding="utf-8", errors="surrogateescape") as handle:
        handle.write(html)
    print("staged %s (%.1f MB)" % (out, len(html.encode("utf-8")) / 1e6))
    return 0


if __name__ == "__main__":
    sys.exit(main())
