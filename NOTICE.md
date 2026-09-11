# Notice — what is yours, what is not, what is risky

This file exists because the platform bundles three different kinds of
material, and a buyer's lawyer will separate them within ten minutes. Being
explicit about it is worth more than any feature on the platform.

## 1. Original material (yours to sell)

- All application code (`app.js`, `gen-*.js`, `teaching.js`, `lesson.js`,
  `voice.js`, `ai.js`, `usage.js`, `brand.js`, `book.js`, `toc.js`,
  `cover-text.js`, `humancheck.js`, `build.sh`, `styles.css`, `body.html`,
  `tests/`).
- The `.docx` writer, the A4 pagination engine, the cover designer, the
  exercise generators and the deterministic seed scheme.
- **Original teaching content**, written for this project:
  - Civics, Grades 7–12 — 36 units (`data-ci.js`). No Civics syllabus was
    supplied, so these are original resources, not an official transcription.
  - Senior High History, Grades 10–12 — 18 units of original explanatory
    notes aligned to the uploaded guide (`data-hi.js`), with source file and
    page numbers recorded per unit.

## 2. Transcribed Ministry of Education material (NOT yours — licensed use only)

Fifteen subjects carry study notes and course text **transcribed verbatim from
the official Liberian National Curriculum guides**: English, Phonics, French,
General Science, Mathematics, Social Studies, Religious & Moral Education,
Physical Education (Grades 1–9 and 1–12 where stated), and Biology, Chemistry,
Physics, Economics, English Grammar, Geography, Literature (Grades 10–12).

The underlying curriculum is the property of the **Ministry of Education,
Republic of Liberia**. What you own is the transcription, selection,
structuring and the surrounding generated material — not the curriculum.

**Consequences for a sale:**

- You cannot grant a buyer *exclusive* rights to Liberian curriculum content.
  Nobody can.
- A buyer receives your transcription and your platform, and needs their own
  relationship with the MoE for the underlying curriculum — which, for a
  ministry, publisher or donor, they either already have or can obtain.
- Say this out loud in the sale memorandum. Volunteering it builds more trust
  than being caught on it, and it costs you nothing.

## 3. Third-party material and marks (check before you ship)

| Item | Status | Action |
|---|---|---|
| **WASSCE / WAEC** name and syllabus structure | "WASSCE" and "WAEC" are marks of the **West African Examinations Council**. The WASSCE track is practice material aligned to publicly available syllabi, **not** official WAEC past papers. | Do not imply endorsement. Keep the "original practice assessments, not official WAEC past papers" wording in the UI and in any marketing. |
| **PDFs in `uploads/`** (English 1-6.pdf, Chemistry 10-12.pdf, Economics 10-12.pdf, ENGLISH GRAMMAR 10-12.pdf, ECE curriculum PDFs, the 2025–26 academic calendar) | Third-party / MoE documents used as transcription sources. ~23 MB. **Not licensed for redistribution.** | Exclude `uploads/` from any distributed or sold bundle. Keep it as your private source folder, or ship it only with written MoE permission. |
| **Groq** (AI model provider) | Service provider. The API key lives only in the Cloudflare Worker/Pages secret — never in the browser or in this repo. | Buyer must open their own Groq account; the tutor stops working at handover until they do. |
| **Cloudflare** (Pages, Workers, Turnstile) | Service provider, free tiers in use. | Buyer takes over the account, or you migrate the proxy to their host. |
| **Liberia flag / map emblem** in `assets/icons/` | A national symbol drawn for this project. | Fine to use; do not claim it as a trade mark. |
| **`assets/emmanuel.png`** and the tutor name | A personal name and portrait currently wired into `ai.js` and the header. | Now white-labelled: set `window.APP_BRAND = { tutor: "…" }` (see `brand.js`) before shipping to a licensee. Replace the portrait if the buyer supplies their own. |

## 4. What is still undecided (owner decisions, not engineering)

- **Copyright holder name** — `LICENSE` still says `[OWNER LEGAL NAME — REPLACE
  BEFORE PUBLISHING]`. A company, a sole proprietor, or a co-founder changes
  who signs the sale agreement and who pays tax on it.
- **Contributor provenance** — confirm there are no other authors with a claim
  (contractors, co-teachers who wrote content, anyone paid in cash). If there
  are, get a short written assignment **before** a buyer finds them.
- **Trade mark** — the product name is unregistered. Registration in Liberia
  is inexpensive relative to the sale price and removes the last "what exactly
  am I buying?" question.
- **Curriculum alignment review** — a written MoE or county education office
  review of the 36 Civics and 18 History units converts "original, unverified"
  into "reviewed", which is worth more than any feature on this list.
