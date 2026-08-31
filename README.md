# Liberian National Curriculum Course Pack Generator

An **offline, single-file web app** that generates printable course packs for the
Liberian National Curriculum: pupil workbooks, period tests, semester
examinations and teacher's answer keys — in **English, French, General
Science, Mathematics, Social Studies, Religious & Moral Education, Physical
Education, Biology, Chemistry, Physics, Economics, English Grammar and
Geography**, Grades 1–12, all A4-exact on screen, in print and in Word.

Everything runs from one HTML file with **no server and no internet**
(`index.html`, about 3.5 MB). It has no dependencies at runtime — the
`.docx` exporter is built by hand and images are resized in a canvas
so the whole thing stays self-contained.

## Features

- **13 subjects** with real curriculum content (6 units per grade per subject)
- **Student / Teacher modes** — the teacher copy adds full answer keys with
  reasons and methods; keys never leak into a student pack
- **10+ exercise types per subject** (vocabulary, matching, cloze, true/false,
  short answer, MCQ, diagrams, experiments, word problems, challenges, ...),
  each backed by a deterministic generator with a **variant seed** — Test A /
  Test B share the same questions, just shuffled
- **Study notes** for every unit: key ideas, worked examples and common mistakes
- **Customizable cover**: template choice, school name (persisted), uploaded
  logo & background photo, pupil/teacher/term/year fields, emoji crest
- **Pagination engineered for A4** (794 × 1123 px sheets, fixed geometry),
  with a responsive preview that scales the sheet instead of resizing it
- **Export**: `.docx` (student or teacher copy) and **Print / PDF** with
  print-specific CSS
- **Duplex print helper** — odd/even page sequences so an A4 workbook can be
  printed double-sided on a printer that only prints one side at a time
- Settings persist in `localStorage` (subject, grade, cover details, images)

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

## Using the generator

| Control | What it does |
|---|---|
| **Session** | `Student` or `Teacher`. Teacher adds the answer-key pack contents. |
| **Subject** | One of the 13 subjects; Biology/Chemistry/Physics reuse the Science engine, and Economics/Geography reuse the Social Studies engine. |
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
| French (`fr`) | 1–9 | 6 | 54 |
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

> **Known limitation:** Grades 10–12 are covered by Mathematics and by
> Biology, Chemistry, Physics, Economics, English Grammar and Geography; the
> other elementary and junior-high subjects stop at Grade 9.

## Project layout

| File | Purpose |
|---|---|
| `index.html` | **The deliverable** — the built single-file app (generated by `build.sh`; commit it when sources change). |
| `body.html` | Page markup (header, settings panel, action bar, duplex-print dialog). |
| `styles.css` | All styling, including A4 sheet geometry and `@media print` rules. |
| `app.js` | The platform: subject registry, settings UI, block renderer, A4 pagination, `.docx` packager, cover builder, persistence. |
| `data-*.js` | Curriculum content per subject (`data-en.js`, `data-ma79.js` = Junior High part, `data-bi.js`, ...). |
| `gen-*.js` | Exercise-generation engines per subject (some share an engine, e.g. `bi`/`ch`/`ph` use `gen-sc.js`, and `ec`/`gg` use `gen-ss.js`). |
| `book.js` | Duplex print sequence helper — shared by the built-in dialog **and** `book.html`. |
| `book.html` | Standalone version of the duplex print helper (dark theme), loads `book.js`. |
| `build.sh` | Concatenates styles + markup + scripts into `index.html`. |
| `tests/` | Playwright UI regressions (`ui.py`), all-subject regression (`regress.py`), pure sequence unit test (`book.js`). |
| `requirements.txt` | Python test dependencies. |

### How the content is organized

- Each `data-*.js` file declares one curriculum array; Junior High content
  comes from a `*79.js` file that is merged in (`FR_CURRICULUM.push(...)`),
  and Senior High Mathematics from `data-ma-sh.js`
  (`MA_CURRICULUM.push.apply(MA_CURRICULUM, MA_CURRICULUM_SH)`). The Senior
  High generators live in `gen-ma-sh.js`, which adds its `_sh` drills and
  methods to the shared `GEN_MA` object.
- Every unit looks roughly like
  `{grade, period, sem, icon, title, subtitle, outcomes, objectives, note,
  focus, terms[], worked[], drills[], word[], challenge[], activities[]}`
  (French uses `fr`/`en`/`vocab[]`; each subject carries the fields its
  engine needs). The note field may contain simple `<b>/<i>` markup.
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
