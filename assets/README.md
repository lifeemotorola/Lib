# assets

## `emmanuel.png` — the portrait of Emmanuel, the AI tutor

Currently **320 × 320, 30 KB, transparent background**. It was cut from the
photograph committed as `tests/fixtures/converted_image (4).jpeg`: that JPEG had
the checkerboard "transparency" pattern baked into its pixels, so the backdrop
was flood-filled away from the corners (`-fuzz 8%`), the head and shoulders were
cropped square, and the result was reduced to 192 colours to keep the inlined
data URI small.

To replace it, drop a new photo here as **`assets/emmanuel.png`** and run
`./build.sh`.

`build.sh` inlines the file into `index.html` as a base64 data URI
(`window.EMMANUEL_AVATAR`), so the single-file deliverable keeps working
offline from a USB stick with no extra files to carry.

Guidelines for the picture:

- **Square-ish crop, head and shoulders.** It is displayed as a circle
  (30–76 px on screen), so anything wider than a portrait crop loses the face.
- **PNG**, ideally 256×256 to 512×512. Keep it under ~150 KB — every byte is
  embedded in `index.html`, which is loaded from disk on school computers.
- Transparent backgrounds are fine; the avatar sits on a pale blue disc.

If the file is missing, every avatar falls back to the 🤖 emoji automatically,
so the app never shows a broken image.

Where the portrait appears (all screen-only — never in the printed pack):

| Place | Size |
| --- | --- |
| Floating "Emmanuel" button, bottom right | 30 px (34 px on phones) |
| Chat panel header | 32 px |
| Welcome screen inside the panel | 76 px |
| Beside each of Emmanuel's chat replies | 26 px |
