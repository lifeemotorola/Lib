# Architecture & handover notes

Written for the person who maintains this after the original author steps away.
Everything here is verifiable from the repository in a few minutes.

## 1. What ships

One file: **`index.html` (~11.9 MB)**. It contains the CSS, the markup, the
icon sprite, the 17 subject cover images as data URIs, the tutor portrait and
all 40+ scripts, inlined by `build.sh`. It opens from `file://`, from a USB
stick, from any static host, with no server and no internet.

```bash
bash build.sh        # rebuild index.html from the source parts; commit the result
```

Deployment (GitHub Pages today, Cloudflare Pages optional) copies
`index.html`, `manifest.webmanifest`, `sw.js`, `book.html`, `book.js` and
`assets/`. See `.github/workflows/deploy.yml`.

## 2. Module map

| Layer | Files | Responsibility |
|---|---|---|
| Branding | `brand.js` | White-label strings (`window.APP_BRAND`): product name, short name, tutor name, support address, footer text. Edit one object to rebrand. |
| Usage | `usage.js` | Optional on-device counters. **No network call** — enforced by `tests/usage.js`. |
| Content | `data-*.js` | One curriculum array per subject. Junior/Senior High parts are merged in (`data-ma79.js`, `data-ma-sh.js`, `data-fr79.js`, `data-fr1012.js`, `data-*79.js`). |
| Generation | `gen-*.js` | Deterministic exercise engines per subject. Physics/Biology/Chemistry reuse `gen-sc.js`; Economics/Geography/History reuse `gen-ss.js`; Phonics, Literature, Mathematics and WASSCE have their own. |
| Presentation | `app.js` | Subject registry, settings UI, block renderer, A4 pagination, `.docx` packager, cover builder, persistence, WASSCE track. The largest file (3.3k lines) and the one to read last. |
| Teaching tools | `teaching.js`, `lesson.js` | Teaching workspace: IndexedDB library, question editor, assessment builder; daily and weekly lesson/unit plan builders. |
| Extras | `ai.js` (tutor), `voice.js` (speech), `humancheck.js` (Turnstile), `book.js` (duplex print), `toc.js` (contents page numbers), `cover-text.js` (cover wording) | Independent features; each degrades quietly if unavailable. |
| Build & tests | `build.sh`, `tests/` | See below. |

## 3. The block model — the one idea worth understanding first

Every generator emits **the same block model**, and one renderer handles it:

```js
{ k: "h3" | "p" | "bul" | "num" | "table" | "mcq" | "rule" | ..., t/head/rows/... }
```

Because of this, adding a subject does not require touching pagination, the
`.docx` exporter, print CSS or the contents page. That is why the platform
covers 18 subjects with a small codebase: the variation lives in the data and
the generators, not in the rendering.

## 4. Data model

A unit looks roughly like:

```js
{ grade, period, sem, icon, title, subtitle, outcomes, objectives, note,
  focus, terms[], worked[], drills[], word[], challenge[], activities[], study[] }
```

`study[]` is optional and takes priority when present: it is a block list
(`h3`/`p`/`bul`/`num`/`rule`/`table`) rendered **verbatim**, used for the
sections transcribed from the official curriculum guides. Inline `**bold**`
is supported in `p`/`bul`/`num`/`instr` text but not inside table cells.

Generators are **deterministic and seeded**: the same seed always produces the
same questions, so a student pack and its teacher key match question for
question, and Test A / Test B are the same questions shuffled. Never introduce
`Math.random()` into a generator — use the seeded helper.

## 5. Rendering, pagination and export

- Sheets are fixed at **794 × 1123 px** (A4 at 96 dpi). The preview scales the
  sheet; it never resizes it. `tests/regress.py` asserts this across every
  subject × grade × session × font size × viewport.
- The contents page reads page numbers **off the finished layout**, so entries
  stay correct when study notes are switched off or a worksheet is edited.
- The `.docx` exporter is hand-written (no library): it builds the OOXML
  package, including images resized in a canvas, so the deliverable stays
  dependency-free.
- Teacher/Student is a **format** decision made at export time. Student exports
  omit the answer-key section.

## 6. Persistence

| Store | Holds | Notes |
|---|---|---|
| `localStorage` | settings, cover details, cover designer, header/footer, usage counters | Small, synchronous |
| IndexedDB | teaching library (saved documents) | Versioned; import validates every record, caps at 25 MB / 100 documents |
| Export/import | `.json` backups, `doc` files | Backups may contain answer keys — never distribute them to pupils |

## 7. The AI tutor (the only online feature)

Browser → `window.AI_PROXY_URL` (or same-origin `/api/chat`) → a **server-side
proxy** (`functions/api/chat.js` on Cloudflare Pages, or `worker/groq-proxy.js`
as a standalone Worker) → Groq.

The Groq key lives only in the proxy's secret store. It is never in the repo
and never in `index.html`. The proxy enforces an origin allowlist, a model
allow-list and a rate limit; Turnstile (`humancheck.js`) is optional and is
automatically skipped on `file://` copies. When the proxy is unreachable the
tutor says nothing (no error text, no key details) and everything else keeps
working — `tests/ai.js` guards that behaviour. When the device is offline
(`navigator.onLine === false`, plus the browser's `online`/`offline` events)
the tutor also hides itself: the floating button and panel disappear, a
question still in flight is ended (whatever already arrived is kept, an
empty answer becomes a connection note), and the button returns when the
connection does — `tests/ai.js` guards this too.

**At handover:** the buyer must create their own Groq account and set their own
secret. The seller should revoke the old key.

## 8. Tests

Dependency-free Node tests (run in CI on every push):

```bash
node tests/book.js              # duplex print sequences
node tests/notes-verbatim.js    # transcribed study notes render as authored
node tests/cover-kg.js          # KG-I/KG-II cover levels + cover designer
node tests/toc.js               # contents page numbers
node tests/voice.js             # speech reader chunking and recovery
node tests/ai.js                # tutor failure handling
node tests/header-footer.js     # sheet + platform header/footer
node tests/history.js           # Senior High History
node tests/kg-lesson.js         # Kindergarten ECD lesson plans
node tests/civics-teaching.js   # all 36 Civics units
node tests/usage.js             # usage counters and the no-network guarantee
```

Browser tests (Playwright; `pip install -r requirements.txt`):

```bash
python tests/ui.py        # panel, covers, uploads, duplex, responsive
python tests/regress.py   # every subject × grade × session, A4 geometry, no key leakage
python tests/history.py   # History track controls, packs, plans, exports
python tests/teaching.py  # library save/reopen, import/export, question editing
```

`tests/lesson-e2e.js` and `tests/weekly-plan-e2e.js` need `jsdom`
(`npm i jsdom`) and drive the built `index.html` end to end; they are not in CI
today.

## 9. Adding a subject or content

1. Add units to (or create) a `data-*.js` file following the existing shape.
2. Register the subject in `SUBJECTS` in `app.js` (label, accent, curriculum,
   engine, defaults, file naming). Reusing another subject's engine is normal.
3. `bash build.sh`, open `index.html`, check A4 geometry and the Word export.
4. Run the Node tests; add the subject to `tests/notes-verbatim.js` if it gains
   `study[]` blocks.

## 10. Known constraints to tell a buyer honestly

- The AI tutor needs internet; the rest does not.
- Printing is the real cost of using the platform, not the software.
- 15 subjects' notes are transcriptions of MoE curriculum guides; Civics and
  Senior High History are original content aligned to a supplied guide
  (see `NOTICE.md`).
- The WASSCE track is original practice material, not official WAEC papers.
- `uploads/` holds source PDFs that are **not** licensed for redistribution and
  must be excluded from any distributed bundle.
