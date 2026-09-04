# Liberian National Curriculum Course Pack Generator

An **offline, single-file web app** that generates printable course packs for the
Liberian National Curriculum: pupil workbooks, period tests, semester
examinations and teacher's answer keys — in **English, French, General
Science, Mathematics, Social Studies, Religious & Moral Education, Physical
Education, Biology, Chemistry, Physics, Economics, English Grammar,
Geography and Literature**, Grades 1–12, all A4-exact on screen, in print and in Word.

Everything runs from one HTML file with **no server and no internet**
(`index.html`, about 3.5 MB). It has no dependencies at runtime — the
`.docx` exporter is built by hand and images are resized in a canvas
so the whole thing stays self-contained.

## Features

- **14 subjects** with real curriculum content (6 units per grade per subject)
- **Teacher-first platform** — the session opens in **Teacher** mode (the
  platform is built for teachers; the teacher copy adds full answer keys with
  reasons and methods). A **Student** session remains for clean pupil packs;
  keys never leak into a student pack
- **10+ exercise types per subject** (vocabulary, matching, cloze, true/false,
  short answer, MCQ, diagrams, experiments, word problems, challenges, ...),
  each backed by a deterministic generator with a **variant seed** — Test A /
  Test B share the same questions, just shuffled
- **Study notes** for every unit: key ideas, worked examples and common
  mistakes — and for Social Studies, General Science, English, Mathematics,
  French, Religious & Moral Education and Physical Education Grades 1–9
  (Mathematics and French also Grades 10–12) and Biology, Chemistry, Physics, Economics,
  English Grammar and Geography Grades 10–12, the full **course text**,
  transcribed verbatim from the official curriculum guide
- **Customizable cover**: template choice, 14 built-in subject-matched PNG
  backgrounds (equations for Mathematics, laboratory imagery for Science,
  books for Literature, and so on), school name (persisted), uploaded logo or
  replacement background, pupil/teacher/term/year fields, and emoji crest
- **Pagination engineered for A4** (794 × 1123 px sheets, fixed geometry),
  with a responsive preview that scales the sheet instead of resizing it
- **Export**: `.docx` (student or teacher copy) and **Print / PDF** with
  print-specific CSS
- **Duplex print helper** — odd/even page sequences so an A4 workbook can be
  printed double-sided on a printer that only prints one side at a time
- Settings persist in `localStorage` (subject, grade, cover details, images)
- **Installable on Android and PC** as a Progressive Web App, with the Liberia
  flag-map favicon and offline app icon

## Quick start

1. **Open `index.html`** in any modern browser (Chrome/Edge/Firefox). That's it —
   it works offline from a USB stick, a school computer with no internet, or
   `file://`.
2. Pick **Session → Subject → Level → Grade**, choose the units and exercise
   types you want, then **⚙ Generate course pack**.
3. **⬇ Word (.docx)** to edit in Word, or **🖨 Print / PDF** for paper.

Rebuilding `index.html` from the source parts (e.g. after editing content):

```bash
bash build.sh
```

### Install on Android or PC

The original `index.html` can still be opened directly and used offline. To
install the platform like an app, serve the repository over HTTPS (or
`localhost` during development), open `index.html` in Chrome or Edge, and use
the **Install app** button when it appears.

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

- **Android:** open the site in Chrome, tap **Install app** (or browser menu →
  **Add to Home screen**), then confirm.
- **Windows/macOS/Linux:** open the site in Chrome or Edge, click **Install
  app**, then confirm. It opens in its own window and remains available offline.

A service worker stores the generated single-file app and its icons after the
first successful visit. Installation requires HTTP/HTTPS because browsers do
not allow service workers from a `file://` URL.

## Using the generator

| Control | What it does |
|---|---|
| **Session** | `Student` or `Teacher`. Teacher adds the answer-key pack contents. |
| **Subject** | One of the 14 subjects; Biology/Chemistry/Physics reuse the Science engine, and Economics/Geography reuse the Social Studies engine, and Literature has its own engine. |
| **Level / Grade** | Education band (Elementary, Junior High, Senior High) and grade; a subject only shows the bands it covers. |
| **Units to include** | Select the curriculum periods per grade. |
| **Exercise types** | Which worksheets each unit gets. |
| **Pack contents** | Study notes, period tests, semester exams, answer keys (teacher only). |
| **Customization** | Cover template, school name, logo/background uploads, pupil/teacher/term/year, emoji crest. |
| **Format & text size** | Body size (8–20 pt), questions per exercise, and the **variant seed**. |

The **seed** makes packs reproducible: the same seed always produces exactly
the same questions, so a student copy and its teacher copy match question for
question. *New random variant* just picks a new seed.

### Duplex printing a workbook

If your printer prints one side at a time, click **📖 Duplex print** in the
action bar (it pre-fills the current pack's page count):

1. **Pass 1** — copy the **odd pages** sequence into the printer's page range and print.
2. Flip the printed pages and reinsert them into the tray.
3. **Pass 2** — copy the **even pages** sequence and print.

The helper also shows how many sheets you'll need and remembers books you've
named (saved in `localStorage` as `printBooks`). A standalone version of the
same tool lives in `book.html`.

## Subjects and coverage

| Subject | Grades | Units per grade | Total units |
|---|---|---|---|
| English (`en`) | 1–9 | 6 | 54 |
| French (`fr`) | 1–12 | 6 | 72 |
| General Science (`sc`) | 1–9 | 6 | 54 |
| Mathematics (`ma`) | 1–12 | 6 for 1–9; 11 / 8 / 23 for 10 / 11 / 12 | 96 |
| Social Studies (`ss`) | 1–9 | 6 | 54 |
| Religious & Moral Education (`rm`) | 1–9 | 6 | 54 |
| Physical Education (`pe`) | 1–9 | 6 | 54 |
| Biology (`bi`) | 10–12 | 6 | 18 |
| Chemistry (`ch`) | 10–12 | 6 | 18 |
| Physics (`ph`) | 10–12 | 6 | 18 |
| Economics (`ec`) | 10–12 | 6 | 18 |
| English Grammar (`eg`) | 10–12 | 6 | 18 |
| Geography (`gg`) | 10–12 | 6 | 18 |
| Literature (`li`) | 10–12 | 6 | 18 |

> **Known limitation:** Grades 10–12 are covered by Mathematics, French and
> by Biology, Chemistry, Physics, Economics, English Grammar, Geography and
> Literature; the other elementary and junior-high subjects stop at Grade 9.

## Emmanuel, the AI tutor — a key that never touches the browser

The tutor is powered by Groq, but the Groq API key is **never** shipped in the
page, in `ai.js`, or in any secret that reaches the browser. A tiny
server-side proxy holds the key; the browser calls the proxy. This matters: a
key baked into a static page or a public repo is scraped and revoked
automatically by Groq within hours, and can be abused for your quota.

### Recommended: host the site on Cloudflare Pages (easiest)

Cloudflare Pages runs a serverless proxy *inside* the same site — no separate
Worker to deploy and no URL to configure. The proxy ships in this repo at
`functions/api/chat.js`; the app calls `/api/chat` on its own domain
automatically.

1. Create a fresh key at [console.groq.com/keys](https://console.groq.com/keys)
   (and delete/revoke any old key — a key that ever appeared in a public page
   is burned).
2. Publish this repo to **Cloudflare Pages** (Workers & Pages → Create →
   connect the GitHub repo). Build command can be empty; output directory the
   repo root (or whatever serves `index.html`).
3. In the Pages project: **Settings → Variables and Secrets → Add variable**:
   - Name: `GROQ_API_KEY`
   - Value: the `gsk_...` key
   - Type: **Secret** (encrypted)
4. **Deployments → Redeploy** (or push to GitHub). Done — the tutor works.

### Alternative: GitHub Pages (or any static host)

Static hosts can't run the proxy themselves, so deploy it as a standalone
free Cloudflare Worker instead — full steps in [`worker/README.md`](worker/README.md).
Short version:

```bash
cd worker && npx wrangler deploy && npx wrangler secret put GROQ_API_KEY
```

Then set the GitHub repository **variable** (Settings → Secrets and variables
→ Actions → **Variables**) `AI_PROXY_URL` to the printed Worker URL
(`https://liberia-packs-ai.<you>.workers.dev/`), and install the deploy
workflow once:

```bash
mkdir -p .github/workflows && cp github/pages-deploy.workflow.yml .github/workflows/deploy.yml
```

`ai.js` finds the proxy in this order: `window.AI_PROXY_URL` (injected by
`build.sh` from the `AI_PROXY_URL` variable) → `<meta name="ai-proxy-url">` →
same-origin `/api/chat` (the Pages Function above) → the `PROXY_URL` constant
in `ai.js`. If none is reachable the tutor shows a friendly "not connected"
message and the rest of the app works normally.

Both proxies only accept chat-completion requests for the tutor's model, only
from your site's origin, and rate-limit visitors.

> **Rotate any Groq key that was ever committed or built into an `index.html`**
> — revoke it at [console.groq.com](https://console.groq.com) and give the new
> key to the proxy only (Pages secret or `wrangler secret`).

> **Offline note:** the curriculum content, books and printing work fully
> offline; the AI tutor needs an internet connection (it calls an online
> model), as it always did — only the key handling changed.

## Project layout

| File | Purpose |
|---|---|
| `index.html` | **The deliverable** — the built single-file app (generated by `build.sh`; commit it when sources change). |
| `body.html` | Page markup (header, settings panel, action bar, duplex-print dialog). |
| `styles.css` | All styling, including A4 sheet geometry and `@media print` rules. |
| `app.js` | The platform: subject registry, settings UI, block renderer, A4 pagination, `.docx` packager, cover builder, persistence. |
| `data-*.js` | Curriculum content per subject (`data-en.js`, `data-ma79.js` = Junior High part, `data-bi.js`, ...). |
| `gen-*.js` | Exercise-generation engines per subject (some share an engine, e.g. `bi`/`ch`/`ph` use `gen-sc.js`, and `ec`/`gg` use `gen-ss.js`; Literature has its own, `gen-li.js`). |
| `book.js` | Duplex print sequence helper — shared by the built-in dialog **and** `book.html`. |
| `book.html` | Standalone version of the duplex print helper (dark theme), loads `book.js`. |
| `manifest.webmanifest` / `sw.js` | Android/desktop installation metadata and offline app shell. |
| `assets/icons/` | Liberia flag-map favicon, touch icon and installable-app icons. |
| `functions/api/chat.js` | Cloudflare **Pages Function**: same-origin AI proxy at `/api/chat` used automatically when the site is hosted on Cloudflare Pages (set the `GROQ_API_KEY` Pages secret). |
| `worker/` | Standalone Cloudflare **Worker** proxy for static hosts that can't run server code (GitHub Pages etc.): holds the Groq key, enforces the Origin allowlist, model allow-list and rate limiting. Deploy instructions in `worker/README.md`. |
| `github/pages-deploy.workflow.yml` | Ready-made GitHub Actions workflow: builds `index.html` with the `AI_PROXY_URL` variable and deploys to Pages. Copy it to `.github/workflows/deploy.yml` once. |
| `github/deploy-worker.workflow.yml` | Optional ready-made workflow: deploys the Worker automatically when `worker/` changes. Copy it to `.github/workflows/deploy-worker.yml` and add `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` repository secrets to enable it. |
| `build.sh` | Concatenates styles + markup + scripts into `index.html` and inlines the favicon and cover art. |
| `tests/` | Playwright UI regressions (`ui.py`), all-subject regression (`regress.py`), pure sequence unit test (`book.js`), and `notes-verbatim.js` (dependency-free Node check that every `study[]` block list renders as-is, per subject — Social Studies, General Science, English, Mathematics and French (Grades 1–12), Religious & Moral Education and Physical Education Grades 1–9, and Biology, Chemistry, Physics, Economics, English Grammar, Geography and Literature Grades 10–12 today; add a subject to its `SUBJECTS` list when its units gain `study` blocks, and `grades: N` (or `grades: {from: a, to: b}` for a band) once every unit in that range carries its own list). |
| `requirements.txt` | Python test dependencies. |

### How the content is organized

- Each `data-*.js` file declares one curriculum array; Junior High content
  comes from a `*79.js` file that is merged in (`FR_CURRICULUM.push(...)`),
  Senior High French from `data-fr1012.js`
  (`FR_CURRICULUM.push.apply(FR_CURRICULUM, FR_CURRICULUM_1012)`),
  and Senior High Mathematics from `data-ma-sh.js`
  (`MA_CURRICULUM.push.apply(MA_CURRICULUM, MA_CURRICULUM_SH)`). The Senior
  High generators live in `gen-ma-sh.js`, which adds its `_sh` drills and
  methods to the shared `GEN_MA` object.
- Every unit looks roughly like
  `{grade, period, sem, icon, title, subtitle, outcomes, objectives, note,
  focus, terms[], worked[], drills[], word[], challenge[], activities[]}`
  (French uses `fr`/`en`/`vocab[]`; each subject carries the fields its
  engine needs). The note field may contain simple `<b>/<i>` markup.
- A unit may also carry `study[]` — a block list (`h3`/`p`/`bul`/`num`/`rule`,
  plus `table`/`cols`) transcribed **as-is from the official course text**.
  When present, the Study Notes page renders it verbatim instead of the
  auto-assembled page. Any `p`/`bul`/`num`/`instr` text supports inline
  `**bold**` markup (converted to `<b>`), used for key terms throughout the
  course text — but not inside `table` cells, which are escaped, not
  rendered. Single `*asterisks*` are not converted, so example words and
  sentences are quoted instead of italicised. All 14 subjects now carry full
  verbatim notes derived from their curriculum guides — Social Studies,
  General Science, English, Mathematics, French, Religious & Moral Education
  and Physical Education, Grades 1–9 (54 units each, plus the 42 Senior High
  Mathematics units and the 18 Senior High French units), and Biology,
  Chemistry, Physics, Economics, English
  Grammar, Geography and Literature, Grades 10–12 (18 units each) — with the
  guide page range of each unit recorded in a comment above its list.
- Generators emit a **uniform block model**
  (`{k:"h3"|"p"|"table"|"num"|"bul"|"mcq"|..., t/head/rows/...}`), so one
  renderer handles pagination and one exporter builds Word for every subject.

### Adding content or a subject

1. Add units to (or create) a `data-*.js` file following the existing shape.
2. Register the subject in `SUBJECTS` in `app.js` (label, flag, accent,
   curriculum, engine, defaults, title/filename) — or reuse another subject's
   engine like Biology does.
3. `bash build.sh` and open `index.html` locally to check it.
4. Run the tests below.

## Building and testing

```bash
# rebuild the single-file app
bash build.sh

# unit test for the duplex-print helper (no dependencies)
node tests/book.js

# verbatim study-notes check (no dependencies): executes the real
# UNIT_NOTES/blockHtml/rich sources against the data files
node tests/notes-verbatim.js

# UI regressions (needs Playwright + Chromium)
python3 -m pip install -r requirements.txt
python3 -m playwright install chromium
python3 tests/ui.py          # panel, covers, uploads, duplex helper, responsive
python3 tests/regress.py     # every subject/grade/session, font sizes, devices
```

`tests/ui.py` guards the settings panel, cover templates, image uploads,
A4 sheet geometry, and the duplex dialog. `tests/regress.py` walks every
subject × grade × session at several font sizes and viewports and asserts the
A4 sheet never changes size, pages never leak answer keys in student mode, and
no horizontal scrollbar appears.

## License

No license file is included yet. Ask the repository owner before
redistributing the curriculum content or the generated packs.
