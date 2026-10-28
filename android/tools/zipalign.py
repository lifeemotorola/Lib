#!/usr/bin/env python3
"""A zipalign that needs nothing but Python.

Android 11+ refuses to install an APK whose resources.arsc is compressed or not
aligned on a 4-byte boundary, and the asset manager maps uncompressed entries
faster when they are aligned. Gradle's build does this for us; the offline
toolchain (tools/manual-build.sh) does not have the SDK's zipalign, so this
script does the same job:

  * every STORED entry's data is padded, through its local extra field, to a
    4-byte boundary (the padding is a well-formed extra block with id 0, which
    is exactly what zipalign emits and what every reader skips)
  * entries are rewritten with their real sizes in the local header, so a data
    descriptor is no longer needed
  * the central directory and the end-of-central-directory record are rebuilt
    with the new offsets

Compressed entries are copied byte for byte: no recompression, so the CRCs in
the archive stay valid.

Usage: zipalign.py <in.apk> <out.apk> [alignment]
"""
import struct
import sys

LOCAL_SIG = 0x04034B50
CENTRAL_SIG = 0x02014B50
EOCD_SIG = 0x06054B50
ALIGN = 4


class Entry(object):
    __slots__ = ("version", "flags", "method", "mtime", "mdate", "crc",
                 "csize", "usize", "name", "extra", "comment", "attributes",
                 "payload", "offset")


def read_entries(data):
    at = data.rfind(b"PK\x05\x06")
    if at < 0:
        raise SystemExit("zipalign: not a ZIP archive")
    (sig, disk, cd_disk, n_disk, n_total, cd_size, cd_off,
     comment_len) = struct.unpack_from("<IHHHHIIH", data, at)
    comment = data[at + 22: at + 22 + comment_len]
    if n_total == 0xFFFF or cd_off == 0xFFFFFFFF or cd_size == 0xFFFFFFFF:
        raise SystemExit("zipalign: ZIP64 archives are not supported (not needed for an APK)")

    entries = []
    pos = cd_off
    for _ in range(n_total):
        (csig, version, needed, flags, method, mtime, mdate, crc, csize, usize,
         name_len, extra_len, ccomment_len, disk_start, int_attr, ext_attr,
         local_off) = struct.unpack_from("<IHHHHHHIIIHHHHHII", data, pos)
        if csig != CENTRAL_SIG:
            raise SystemExit("zipalign: corrupt central directory")
        name = data[pos + 46: pos + 46 + name_len]
        extra = data[pos + 46 + name_len: pos + 46 + name_len + extra_len]
        entry_comment = data[pos + 46 + name_len + extra_len:
                             pos + 46 + name_len + extra_len + ccomment_len]
        pos += 46 + name_len + extra_len + ccomment_len

        (lsig, lversion, lflags, lmethod, ltime, ldate, lcrc, lcsize, lusize,
         lname_len, lextra_len) = struct.unpack_from("<IHHHHHIIIHH", data, local_off)
        if lsig != LOCAL_SIG:
            raise SystemExit("zipalign: corrupt local header")
        data_start = local_off + 30 + lname_len + lextra_len
        payload = data[data_start: data_start + csize]

        entry = Entry()
        entry.version = version
        entry.flags = flags & ~0x0008          # sizes are written for real below
        entry.method = method
        entry.mtime = mtime
        entry.mdate = mdate
        entry.crc = crc
        entry.csize = csize
        entry.usize = usize
        entry.name = name
        entry.extra = extra
        entry.comment = entry_comment
        entry.attributes = (int_attr, ext_attr, disk_start, needed)
        entry.payload = payload
        entry.offset = 0
        entries.append(entry)
    return entries, comment


def padding_for(extra, offset, name_len, align):
    """The extra block that puts this entry's data on a boundary."""
    start = offset + 30 + name_len + len(extra)
    pad = (-start) % align
    if pad == 0:
        return extra
    if pad < 4:
        pad += align                       # a padding block needs a 4-byte header
    body = pad - 4
    return extra + struct.pack("<HH", 0, body) + b"\x00" * body


def write_apk(entries, comment, out_path, align):
    out = bytearray()
    central = bytearray()
    for entry in entries:
        entry.offset = len(out)
        extra = entry.extra
        if entry.method == 0:              # stored: what zipalign actually aligns
            extra = padding_for(extra, entry.offset, len(entry.name), align)
        out += struct.pack("<IHHHHHIIIHH", LOCAL_SIG, 20, entry.flags, entry.method,
                           entry.mtime, entry.mdate, entry.crc, entry.csize,
                           entry.usize, len(entry.name), len(extra))
        out += entry.name + extra + entry.payload

        int_attr, ext_attr, disk_start, needed = entry.attributes
        # The central directory must describe the same extra field as the
        # local header: readers (Python's zipfile among them, and some
        # installers) trust the central copy when locating the data.
        central += struct.pack("<IHHHHHHIIIHHHHHII", CENTRAL_SIG, entry.version,
                               needed, entry.flags, entry.method, entry.mtime,
                               entry.mdate, entry.crc, entry.csize, entry.usize,
                               len(entry.name), len(extra),
                               len(entry.comment), disk_start, int_attr,
                               ext_attr, entry.offset)
        central += entry.name + extra + entry.comment

    cd_off = len(out)
    out += central
    out += struct.pack("<IHHHHIIH", EOCD_SIG, 0, 0, len(entries), len(entries),
                       len(central), cd_off, len(comment))
    out += comment

    with open(out_path, "wb") as handle:
        handle.write(out)


def main():
    if len(sys.argv) < 3:
        print(__doc__, file=sys.stderr)
        return 2
    src, dst = sys.argv[1], sys.argv[2]
    align = int(sys.argv[3]) if len(sys.argv) > 3 else ALIGN
    with open(src, "rb") as handle:
        data = handle.read()
    entries, comment = read_entries(data)
    write_apk(entries, comment, dst, align)
    print("zipalign: %d entries, %d-byte alignment → %s" % (len(entries), align, dst))
    return 0


if __name__ == "__main__":
    sys.exit(main())
