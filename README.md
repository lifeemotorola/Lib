# Liberian National Curriculum Course Pack Generator

An **offline, single-file web app** that generates printable course packs for the
Liberian National Curriculum: pupil workbooks, period tests, semester
examinations and teacher's answer keys — in **English, Phonics, French, General
Science, Mathematics, Social Studies, Religious & Moral Education, Physical
Education, Biology, Chemistry, Physics, Economics, English Grammar,
Geography, History, Civics, Literature and Kindergarten**, Grades 1–12, all A4-exact on screen, in print and in Word.
It also plans **KG-I and KG-II teacher's lesson plans** from the national ECD
theme planners, and designs **KG-I and KG-II cover pages** for work the school
prepares itself.

Everything runs from one HTML file with **no server and no internet**
(`index.html`, about 11 MB). It has no dependencies at runtime — the
`.docx` exporter is built by hand and images are resized in a canvas
so the whole thing stays self-contained.

## Features

- **17 National Curriculum subjects** (the 16 graded subjects plus **Kindergarten**, which plans ECD lessons on KG-I and KG-II), plus **Civics supplementary teaching resources for Grades 7–12** (six Civics units per grade)
- **Teacher-first platform** — the session opens in **Teacher** mode (the
  platform is built for teachers; the teacher copy adds full answer keys with
  reasons and methods). A **Student** session remains for clean pupil packs;
  keys never leak into a student pack
- **10+ exercise types per subject** (vocabulary, matching, cloze, true/false,
  short answer, MCQ, diagrams, experiments, word problems, challenges, ...),
  each backed by a deterministic generator with a **variant seed** — Test A /
  Test B share the same questions, just shuffled
- **Teacher's Lesson & Weekly Unit Plans** — a Document switch (Course pack /
  Lesson plan) supports both **Daily Lesson Plans** and **Weekly Unit Plans**
  calibrated to the regular Liberian school sector where each unit runs for **3 or 4 weeks**
  until completion. Includes **Weekly Plan Adjustments** tailored to teacher planning:
  - **Planning format**: choose between a **Daily Plan** (timed day-by-day lesson
    plans with weekly adjustment milestones and 4 timed stages summing to the exact duration)
    or a **Weekly Plan** (week-by-week unit scheme covering Week 1, Week 2, Week 3, Week 4
    with weekly objectives, procedures, aids, methods, formative evaluations, assignments,
    and period culmination).
  - **Unit duration**: quick presets for **3 weeks** or **4 weeks** (the Liberian standard)
    or custom week counts.
  - **Weekly plan adjustments**: customizable adjustment strategies (**Standard progression**,
    **Remedial & reinforcement** with diagnostic scaffolding, and **Accelerated / Exam prep**),
    plus custom teacher adjustment notes embedded directly on every weekly and daily plan.
- **Study notes** for every unit: key ideas, worked examples and common
  mistakes — and for Social Studies, General Science, English, Mathematics,
  French, Religious & Moral Education and Physical Education Grades 1–9
  (Mathematics, French and Phonics also Grades 10–12) and Biology, Chemistry, Physics, Economics,
  English Grammar and Geography Grades 10–12, the full **course text**,
  transcribed verbatim from the official curriculum guide. **Senior High
  History (Grades 10–12)** includes explanatory study notes and exercises
  aligned to the uploaded History guide, with source pages recorded per unit
- **Voice reader (offline)** — a floating "voice reader" that pronounces the
  difficult words of the current subject or reads any sentence aloud, using the
  browser's built-in speech engine (no internet, no key, works from a USB
  stick). It is customisable: choose a **Man**, **Woman** or **Auto** voice and
  an **accent** — including African English (Nigeria, Ghana, Kenya, South
  Africa, Liberia, Tanzania), US, UK and Australian English, and French for the
  French subject — plus reading **speed** and **pitch**. It lives entirely
  outside the printable session: the button and panel are hidden in print and
  never appear on a generated sheet
- **Customizable cover**: template choice, 17 built-in subject-matched PNG
  backgrounds (equations for Mathematics, laboratory imagery for Science,
  books for Literature, and so on), school name (persisted), uploaded logo or
  replacement background, pupil/teacher/term/year fields, and emoji crest — plus
  a full **cover designer**: five colour pickers (border band, title ink,
  accent, paper, warm bar) each with an *Auto* button that hands the colour back
  to the chosen template, a choice of **eight drawn emblems**, a **title size**
  slider (60–150%), a retypable **level line**, and **eleven show/hide switches**
  for every element of the sheet (school name, motto, emblem, rule, level line,
  details panel, colour strip, corner leaves, corner dots, footer note,
  organization line). The designer is saved on the device, travels with any
  document saved in the teaching library, and is applied on screen, in print and
  in the `.docx` export as far as Word allows
- **Kindergarten — KG-I and KG-II lesson plans and cover pages**: a Kindergarten
  level band lists both kindergarten levels for every national-curriculum
  subject, with its own generated `kg.png` artwork and a bright Kindergarten
  cover template. On the **Kindergarten** subject a lesson plan is built from
  the transcribed national ECD theme units (`data-kg.js`); everywhere else the
  two levels stay **cover-page levels**, so choosing one produces the
  customizable cover sheet alone — never invented worksheets
- **Pagination engineered for A4** (794 × 1123 px sheets, fixed geometry),
  with a responsive preview that scales the sheet instead of resizing it
- **A Contents page that names the page**: every pack lists its periods, its
  period tests, its examination papers and its answer keys with the number of
  the page each of them begins on — entry on the left, dotted leaders across,
  the number in the right margin — in the preview, on paper and in the `.docx`.
  The numbers are read off the finished layout, so they stay true when
  something re-flowes the pack: another font size, study notes switched off, a
  worksheet edited in the teaching workspace
- **Export**: `.docx` (student or teacher copy) and **Print / PDF** with
  print-specific CSS
- **Duplex print helper** — odd/even page sequences so an A4 workbook can be
  printed double-sided on a printer that only prints one side at a time
- Settings persist in `localStorage` (subject, grade, cover details, images)
- **Installable on Android and PC** as a Progressive Web App, with the Liberia
  flag-map favicon and offline app icon

## Teaching workspace: library, editing and assessment

Use the **Your teaching workspace** toolbar above the document preview. All
three tools work offline, including from the single-file USB copy. Switch to
**Teacher** session to manage teaching documents or edit answers.

### Saved teaching library

- Save a named copy of the current course pack, assessment or daily/weekly
  lesson plan, including settings, question edits, answer keys, cover text and
  uploaded artwork. Saving creates a new copy; it does not overwrite earlier work.
- Search by name, subject, grade, class or term; open, duplicate, rename or delete
  saved copies. Documents are kept locally in **IndexedDB**, not on a server.
- **Export library backup** produces a JSON file for another device or USB.
  **Export current document backup** also works when device storage is unavailable.
  Import accepts versioned `.json` backups up to **25 MB / 100 documents**, validates
  every record before writing, and adds new copies without replacing existing work.
- **Backups may contain teacher answer keys and personal cover details. Do not
  distribute them to pupils.** Student Word/print exports omit the answer-key
  section; the Teacher/Student switch is a document-format choice, not authentication.
- Clearing browser/site data deletes the library. A `file://` copy and a hosted
  copy may have separate browser storage, so use backups to move between them.

### Worksheet question editor

Choose **Edit questions**, then a worksheet. For numbered worksheets with a
one-to-one answer key, change questions, answers and optional marks; reorder or
remove paired questions; replace a question with an unused generated alternative;
or add teacher-written questions. Shared headings, instructions and passages
are editable too. Replacements do not change the rest of the pack or its seed.

Word banks, matching tables and other complex worksheets use a whole-worksheet
editor with a companion key. Automatic question movement/replacement is disabled
when correspondence cannot be established safely. Teachers must review both the
question content and key after changing shared material. Existing fixed-format
period/semester tests are unchanged; use **Assessment builder** for an editable
marked test. Lesson-plan prose can still be edited after Word export.

Click **Apply** to put form edits into the preview. Applied changes survive cover,
font-size and Teacher/Student changes and feed both Word and Print/PDF. Edited
selections are retained as drafts during the current session, but **save to the
library or export a backup before closing/reloading** to retain them permanently.

### Assessment builder

Choose topics, a title, duration, target total and a blueprint of multiple-choice,
true/false, short-answer and essay questions. Each type has a question count,
marks per question and optional suggested thinking level (Recall, Understanding,
Application). The builder checks totals and available unique questions; it never
silently duplicates questions to fill a shortage. Availability varies by subject
and topic; select more topics, lower counts, or start a blank assessment when needed.

Edit each question, expected answer, marks and partial-credit/essay rubric;
add, remove or reorder questions. Printed scores and totals follow the actual
questions. Teacher exports include the marking scheme; student exports do not.
Save an assessment before **Return to course pack** if you want to keep it.
All papers are **original practice assessments**, not official WAEC past papers.
Thinking levels and marking suggestions require teacher review.

### Customizable auto-filled covers

Open **Customization → Customize all cover titles & labels**. Main title,
subtitle, curriculum/level line, subject value, detail labels, default message,
and organization footer can all be overridden. Fields initially show the
subject/session defaults. Once edited, an override remains fixed; **Auto** resets
one field, and **Reset all cover text to automatic** resets all title/label overrides.
A custom blank suppresses that text. School, class, pupil, teacher, term, year,
motto and note remain editable in the existing cover fields above.

Overrides are remembered locally and included in saved documents and Word/print
exports. Designed covers combine term/year on one row; the Simple List template
uses separately customizable Term and Year labels. Long cover text wraps and the
on-screen/printed cover content scales down to remain within its A4 sheet.

### The cover designer

Open **Customization**. Under the template picker the **Cover designer** tunes the
chosen template without changing the A4 geometry:

| Control | What it does |
|---|---|
| **Cover colours** | Five pickers — border band, title ink, accent, paper and warm bar. **Auto** returns one colour to the template; *Use the template's colours* returns all five. |
| **Emblem** | Any of eight drawn emblems (apple, building blocks, pencil, star, sun, plant, book, Liberian flag) instead of the template's own. An uploaded logo still wins, then a typed crest. |
| **Title size** | 60–150% of the template's title, scaled on screen, in print and in Word. |
| **Level line** | The italic line under the title. Blank prints the automatic curriculum and level line. |
| **Show on the cover** | Eleven switches: school name, motto, emblem/logo, rule & book icon, level line, details panel, colour strip, corner leaves, corner dots, footer note, organization line. |

Every setting is validated on load — a bad colour, an unknown emblem or an
out-of-range scale falls back to the template — is stored on the device with the
school's details, and is carried inside any document saved in the teaching
library. The colours, emblem, title size and switches apply to the five designed
templates; the Simple List template is plain text.

### Kindergarten — KG-I and KG-II lesson plans and cover pages

**Kindergarten** appears as a level band alongside Elementary, Junior High and
Senior High, and lists **KG-I** and **KG-II**. Its band tab reads **KG** so the
level row stays narrow on a handset. It is also a subject of its own: pick
**National Curriculum → Kindergarten**, pick the level, tick the theme units
and generate a **Lesson plan** — daily or weekly, 2 weeks per unit — built from
the transcribed ECD planners, with songs, learning centers, small groups and
observation checkpoints instead of exercise books. The plan file is named after
the level, for example `Kindergarten_KG-I_Lesson_Plan_Teacher_Copy.docx`.

Outside those lesson plans the two levels are deliberately **cover-page
levels**. No other kindergarten material is transcribed on this platform, so the
platform will not invent worksheets for them: pick any other subject, pick the
level, design the cover, then **Print / PDF** or **Word (.docx)** — the file is
named after the subject and level, for example
`English_KG-II_Cover_Student.docx`. The unit list is empty with a note saying
so, the cover's Class row reads `KG-I` or `KG-II`, its subtitle reads
*Kindergarten I Cover Page*, and its footer reads *Kindergarten · Liberian
National Curriculum* rather than claiming curriculum content.

The Kindergarten band is offered only where it produces something:

- in the **National Curriculum** track — never in the WASSCE track, which is a
  Grade 12 examination;
- for a **Course pack** on any subject — and for a **Lesson plan** only on the
  **Kindergarten** subject, whose ECD units fill the plan; on every other
  subject the band and its two levels disappear from the level picker the
  moment the document switch moves to Lesson plan and return when it moves
  back;
- and never by default, so every subject still opens on its own lowest grade.

The printed companion lessons live in `kg-lessons/`: a complete 4-week
`KG-1-Staying-Healthy-and-Safe-Lessons.md` and
`KG-2-Staying-Healthy-and-Safe-Lessons.md` for the model theme, written from
the same planners.

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
| **Subject** | One of the 16 National Curriculum subjects; Biology/Chemistry/Physics reuse the Science engine, and Economics/Geography/History reuse the Social Studies engine, and Literature and Phonics have their own engines. |
| **Level / Grade** | Education band (Elementary, Junior High, Senior High) and grade; a subject only shows the bands it covers. |
| **Units to include** | Select the curriculum periods per grade. |
| **Exercise types** | Which worksheets each unit gets. |
| **Pack contents** | Study notes, period tests, semester exams, answer keys (teacher only). |
| **Customization** | Cover template, school name, logo/background uploads, pupil/teacher/term/year, emoji crest. |
| **Voice reader** | The floating 🔊 button (bottom-left) pronounces the current pack's difficult words or any sentence you type — pick a **Man/Woman** voice and an **accent** (African/US/UK/Australian/French), then **Speed** & **Pitch**. It uses the device's own speech engine, so it works offline. Long readings are spoken a sentence or two at a time and watched while they play, so a browser that stops talking cannot leave the reader stuck — and the panel says so if nothing comes out at all. It never appears on printed sheets. |
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
| Phonics (`pho`) | 1–12 | 6 | 72 |
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
| History (`hi`) | 10–12 | 6 | 18 |
| Civics (`ci`, supplementary) | 7–12 | 6 | 36 |
| Literature (`li`) | 10–12 | 6 | 18 |
| Kindergarten (`kg`, lesson plans) | KG-I–KG-II | 2 theme units | 4 |

> **Coverage:** Mathematics, French and **Phonics** span Grades 1–12, and
> Biology, Chemistry, Physics, Economics, English Grammar, Geography, History and
> Literature cover Grades 10–12; the other elementary and junior-high
> subjects stop at Grade 9. **Kindergarten** spans KG-I–KG-II with 2 ECD theme
> units per level (lesson plans only; packs stay cover-only).

### Civics — Grades 7–12

Choose **National Curriculum → Civics**, then Junior High or Senior High.
There are six original supplementary units per grade:

| Grade | Focus |
|---|---|
| 7 | Belonging, fair rules, diversity, national symbols, peaceful conflict resolution, service |
| 8 | Government, three branches, local administration, elections, rights, public budgets |
| 9 | Media literacy, safe schools, disability inclusion, integrity, environment, advocacy |
| 10 | Liberia's constitutional framework, rule of law, rights, oversight, constitutional change, reconciliation |
| 11 | Public service, procurement, accounts, policy evaluation, development, disaster readiness |
| 12 | International cooperation, regional peace, migration, trade, digital citizenship, civic inquiry |

`data-ci.js` supplies study notes, glossary terms, worked scenario reasoning,
worksheets, tests, teacher keys, projects and daily/weekly lesson-plan inputs.
It reuses the Social Studies exercise engine and bundled artwork. No new network
service or download is needed.

**Source status:** no dedicated Civics syllabus was supplied in this repository.
These units are original teaching resources, **not an official Liberian Civics
syllabus transcription or WASSCE examination material**. Compare them with the
school's approved scheme of work before classroom use. Scenarios are fictional;
activities do not require learners to disclose political affiliations, private
information or traumatic experiences.

### Senior High History

Choose **National Curriculum → History → Grade 10, 11 or 12**. History is
separate from **WASSCE → WASSCE History**, which remains the Grade 12 exam track.
All six periods per grade support student and teacher course packs, study
notes, worksheets, period tests, semester exams, daily/weekly lesson plans,
Word export and Print/PDF, including offline use.

- **Grade 10:** African historical evidence; Ethiopia and Swahili civilization;
  Liberian state and society; Ghana, Mali and Songhai; other African states;
  the slave trade, exploration and colonization.
- **Grade 11:** early foundations of European history; Greece, Macedonia and
  Rome; Christianity and the Reformations; medieval society; industrialization
  and the Enlightenment; imperialism, revolutions and the world wars.
- **Grade 12:** Liberia's civil war and peace process; foreign policy; seven
  selected presidents; economic history; Africa and the UN; eastern African
  independence struggles.

`data-hi.js` follows `uploads/History 10-12.pdf`, pp. 2–34. Ghana, Mali and
Songhai are combined in Grade 10 Period IV, as in the guide. The study notes
and practice questions are **original explanatory material aligned to the
guide**, not a verbatim transcription or official examination questions.
The guide's election-list typo is clarified as 2005 rather than 2000, and
later medieval universities are distinguished from its 500–1000 heading.
History reuses the existing world-history classroom cover image, so no
additional download or runtime service is needed.

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

### "Are you human?" — Cloudflare Turnstile

The platform opens behind a Cloudflare Turnstile card, so automated software
does not quietly spend the AI quota. It is one small widget, free, and it
costs a real visitor at most a single click.

1. In the Cloudflare dashboard: **Turnstile → Add site**. Add your site's
   hostname, choose the managed (non-interactive) mode, and create it.
2. Put the **site key** into the build — it is public by design, it only
   identifies the widget. The built `index.html` is committed with it, so a
   Cloudflare Pages deployment that serves the repo root gets the live card
   immediately; to change the key, run `TURNSTILE_SITE_KEY=0x… bash build.sh`
   and commit `index.html` again. If you rebuild via GitHub Actions instead,
   leave it as an Actions **variable** (`TURNSTILE_SITE_KEY`) and the workflow
   bakes it in.
3. Add the **secret key** on the server that verifies tokens:
   - **Cloudflare Pages:** Settings → Variables and Secrets →
     `TURNSTILE_SECRET_KEY` (type *Secret*), then redeploy.
   - **Standalone Worker:** `npx wrangler secret put TURNSTILE_SECRET_KEY`.

The page asks the widget for a token and sends it with every tutor request;
the proxy checks it against the secret before it calls Groq. When the token
has expired the tutor quietly asks the visitor to confirm themselves again
and re-sends the question on its own.

Nothing is enforced until step 3 — leave the secret unset and both proxies
behave exactly as they did before. The card is switched off just as
thoroughly when there is no site key, and on `file://` copies and offline
visits, because the check cannot run there and a USB copy of the course
packs must never be locked out by it.

> **The tutor says nothing when a request fails** — no error text, no status
> codes, no key or hosting details. An unanswered question is simply taken
> back. The reason is logged as a short code in the browser console for the
> site owner, and never shown to a pupil.

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
| `data-*.js` | Curriculum content per subject (`data-en.js`, `data-pho.js` = Phonics Grades 1–12, `data-ma79.js` = Junior High part, `data-bi.js`, `data-kg.js` = Kindergarten ECD units, ...). |
| `gen-*.js` | Exercise-generation engines per subject (some share an engine, e.g. `bi`/`ch`/`ph` use `gen-sc.js`, and `ec`/`gg`/`hi` use `gen-ss.js`; Literature has its own, `gen-li.js`, and Phonics its own, `gen-pho.js`). |
| `book.js` | Duplex print sequence helper — shared by the built-in dialog **and** `book.html`. |
| `book.html` | Standalone version of the duplex print helper (dark theme), loads `book.js`. |
| `ai.js` | The Emmanuel AI tutor: chat panel, streaming answers, and the quiet failure handling described below. |
| `voice.js` | The offline voice reader: a floating button + panel (built with the browser's `speechSynthesis`) that pronounces the pack's difficult words or any typed sentence, with person (Man/Woman/Auto), African/other accents, speed and pitch controls. `app.js` feeds it the generated pack via `window.VOICE_READER.loadFromPack(pack, subjectId, label, grade)`. Hidden in print. |
| `humancheck.js` | "Are you human?" — the Cloudflare Turnstile card that covers the platform until the visitor passes it. Switched off unless a `TURNSTILE_SITE_KEY` is baked in by `build.sh`. |
| `manifest.webmanifest` / `sw.js` | Android/desktop installation metadata and offline app shell. |
| `assets/icons/` | Liberia flag-map favicon, touch icon and installable-app icons. |
| `functions/api/chat.js` | Cloudflare **Pages Function**: same-origin AI proxy at `/api/chat` used automatically when the site is hosted on Cloudflare Pages (set the `GROQ_API_KEY` Pages secret, and `TURNSTILE_SECRET_KEY` to enforce the human check). |
| `worker/` | Standalone Cloudflare **Worker** proxy for static hosts that can't run server code (GitHub Pages etc.): holds the Groq key, enforces the Origin allowlist, model allow-list and rate limiting. Deploy instructions in `worker/README.md`. |
| `github/pages-deploy.workflow.yml` | Ready-made GitHub Actions workflow: builds `index.html` with the `AI_PROXY_URL` variable and deploys to Pages. Copy it to `.github/workflows/deploy.yml` once. |
| `github/deploy-worker.workflow.yml` | Optional ready-made workflow: deploys the Worker automatically when `worker/` changes. Copy it to `.github/workflows/deploy-worker.yml` and add `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` repository secrets to enable it. |
| `build.sh` | Concatenates styles + markup + scripts into `index.html` and inlines the favicon and cover art; also bakes in `AI_PROXY_URL` and `TURNSTILE_SITE_KEY` when those variables are set. |
| `tests/` | Playwright UI regressions (`ui.py`), all-subject regression (`regress.py`), the human-check and quiet-failure guard (`humancheck.py`), pure sequence unit test (`book.js`), `notes-verbatim.js` (dependency-free Node check that every `study[]` block list renders as-is, per subject — Social Studies, General Science, English, Phonics, Mathematics and French (Grades 1–12), Religious & Moral Education and Physical Education Grades 1–9, and Biology, Chemistry, Physics, Economics, English Grammar, Geography, History and Literature Grades 10–12 today; add a subject to its `SUBJECTS` list when its units gain `study` blocks, and `grades: N` (or `grades: {from: a, to: b}` for a band) once every unit in that range carries its own list). Three dependency-free Node checks sit alongside them: `tests/cover-kg.js` (the KG-I / KG-II cover-page levels, the cover-designer state normalizer, `designVars()`, `coverArtHtml()` show/hide and colour output, the kindergarten cover wording in `cover-text.js`, and that `kg.png` and the designer markup survive the build), `tests/kg-lesson.js` (the Kindergarten ECD units through the real plan builders: ECD daily/weekly wording, no exercise books or chalkboards, other subjects untouched, `data-kg.js` and the KG tab icon survive the build), `tests/voice.js` (the voice reader: chunking, one utterance at a time, no `pause()`, cancelled utterances ignored, silent-browser recovery) and `tests/ai.js` (Emmanuel: failures reported, hangs given up on, Stop always frees the composer, answers streamed and remembered). |
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
  sentences are quoted instead of italicised. The original 15 subjects carry
  notes derived from their curriculum guides — Social Studies,
  General Science, English, Mathematics, French, Religious & Moral Education
  and Physical Education, Grades 1–9 (54 units each, plus the 42 Senior High
  Mathematics units, the 18 Senior High French units and the 72 Phonics units
  covering Grades 1–12), and Biology,
  Chemistry, Physics, Economics, English
  Grammar, Geography and Literature, Grades 10–12 (18 units each) — with the
  guide page range of each unit recorded in a comment above its list. History
  adds 18 units of original explanatory notes aligned to the uploaded guide,
  with machine-readable `source.file` and `source.pages` fields. The renderer
  preserves these authored blocks as-is too; the rendering test does not claim
  that authored explanations are verbatim text from the PDF.
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

# Senior High History coverage, worksheets, keys and lesson plans (no dependencies)
node tests/history.js

# KG-I / KG-II cover-page levels and the cover designer (no dependencies)
node tests/cover-kg.js

# Kindergarten ECD units and lesson-plan wording (no dependencies)
node tests/kg-lesson.js

# contents page numbers: the matcher that tells each Contents line which page
# its part begins on (no dependencies)
node tests/toc.js

# voice reader and AI tutor (no dependencies)
node tests/voice.js
node tests/ai.js

# UI regressions (needs Playwright + Chromium)
python3 -m pip install -r requirements.txt
python3 -m playwright install chromium
python3 tests/ui.py          # panel, covers, uploads, duplex helper, responsive
python3 tests/regress.py     # every subject/grade/session, font sizes, devices
python3 tests/history.py     # History track/grade controls, packs, plans, exports
```

`tests/ui.py` guards the settings panel, cover templates, image uploads,
A4 sheet geometry, the duplex dialog, and the kindergarten cover-page levels with
the cover designer driving the sheet live. `tests/regress.py` walks every
subject × grade × session at several font sizes and viewports and asserts the
A4 sheet never changes size, pages never leak answer keys in student mode, and
no horizontal scrollbar appears.

### Teaching-workspace regression checks

```bash
node tests/civics-teaching.js
python3 tests/teaching.py
```

The dependency-free Node test covers all 36 Civics units, default worksheets,
period/semester tests, daily/weekly plans, deterministic generation, linked keys,
student filtering and assessment pools. The Playwright test covers offline
IndexedDB save/reopen, duplicate/delete/import/export, malformed-backup rejection,
question/key pairing and replacement, assessment edits/totals, teacher/student
Word exports, saved lesson plans, automatic/custom cover text, print visibility
and mobile layout. Set `PW_CHROMIUM` to use a non-default Chromium executable.

## License

No license file is included yet. Ask the repository owner before
redistributing the curriculum content or the generated packs.
