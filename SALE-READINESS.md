# Getting the platform ready to sell

A working checklist. Status is honest: **[done]** means it is in this branch,
**[owner]** means only you can do it, **[lawyer]** means do not improvise.

Ordered by how much each item moves the price, not by how easy it is.

---

## Phase 0 — Ownership (blocking: nothing sells until this is clean)

| # | Item | Status | Effort | Why it matters |
|---|---|---|---|---|
| 1 | Put the real copyright holder in `LICENSE` (currently `[OWNER LEGAL NAME — REPLACE BEFORE PUBLISHING]`) | **[owner]** | 10 min | A buyer's first question is "who signs, and who gets the money?" |
| 2 | Confirm you are the only author, or get a one-page written assignment from anyone who wrote content or code (paid or not) | **[owner]** | 1–2 weeks | An unassigned contributor is a claim on the sale price. |
| 3 | Decide and document the MoE position on the transcribed curriculum | **[owner]** | 2–4 weeks | See `NOTICE.md`. You cannot sell exclusive rights to the national curriculum; say so first, in writing. |
| 4 | Exclude `uploads/` (23 MB of third-party and MoE PDFs) from anything you distribute or hand over | **[owner]** | 1 hour | Not licensed for redistribution. |
| 5 | Review the WASSCE / WAEC naming and keep the "original practice assessments" wording | **[owner]** | 1 hour | Trademark risk that is free to avoid. |
| 6 | Register the product name as a trade mark in Liberia | **[owner]** | weeks, low cost | Removes "what exactly am I buying?". |

Fastest safe move if you want to sell quickly: publish the code under the MIT
licence in `LICENSE` and sell **content, printing, services and support** on
top. The code is the funnel; the content is the asset.

## Phase 1 — Evidence (this is what actually raises the price)

| # | Item | Status | Effort | Why it matters |
|---|---|---|---|---|
| 7 | On-device usage counters, so you can prove usage without tracking anyone | **[done]** `usage.js` + settings panel + `tests/usage.js` | — | Buyers do not pay for potential; they pay for numbers. |
| 8 | Turn counting on in every school you can reach, and ask for their exported report at the end of term | **[owner]** | ongoing | Turns "some schools use it" into "3,412 packs, 118 print runs, 6 schools, 1 term". |
| 9 | Measure the **cost of one printed pack** at a Monrovia shop and at a rural shop | **[owner]** | 1 day | Every price in `PRICING.md` depends on this number. |
| 10 | Run one measured pilot: 5–10 schools, 1 term, pre/post check + a teacher time diary | **[owner]** | 1 term | The single largest price multiplier available to you. |
| 11 | Collect three short written testimonials from head teachers | **[owner]** | 1 week | Cheap, and it shortens due diligence. |
| 12 | Publish a one-page impact brief with the real numbers | **[owner]** | 1 day | The artefact you actually send to buyers. |

## Phase 2 — Make it buyable

| # | Item | Status | Effort | Why it matters |
|---|---|---|---|---|
| 13 | White-label branding in one file | **[done]** `brand.js` + `data-brand` hooks | — | A publisher or chain will not ship a product named after someone else. |
| 14 | `PRIVACY.md` (plain statement for schools), `SECURITY.md`, `ARCHITECTURE.md` | **[done]** | — | Answers 90% of a technical/safeguarding review before it starts. |
| 15 | `PRICING.md` with tiers and the print-led model | **[done]** | — | You need a number ready before the first meeting. |
| 16 | A physical, printed, bound sample pack to hand across the table | **[owner]** | 1 day | Sells better than any screenshot. |
| 17 | A 12-slide demo script: problem → offline demo → printed pack → price | **[owner]** | 1 day | Reusable for every buyer. |
| 18 | Deployment guide for a school/IT admin (install, USB copy, print settings) | **[owner]** | 1 day | Removes "our teachers won't manage it". |

## Phase 3 — Engineering hygiene (credibility, not code quality)

| # | Item | Status | Effort |
|---|---|---|---|
| 19 | All Node tests run in CI on every push | **[done]** (`.github/workflows/test.yml` now runs all eleven) | — |
| 20 | `.gitignore` covers build output, `.env`, keys | **[done]** | — |
| 21 | Branch protection on `main` with required checks | **[owner]** | 10 min |
| 22 | Dependabot / dependency review (dev dependencies only) | **[owner]** | 10 min |
| 23 | Shrink the repository (58 MB today: 23 MB of `uploads/` PDFs, 11.9 MB built `index.html`) | **[owner]** | 1–2 hours |
| 24 | Tag releases and keep a `CHANGELOG.md` | **[owner]** | ongoing |
| 25 | Run the Playwright suites (`ui.py`, `regress.py`, `teaching.py`) nightly rather than never | **[owner]** | 1 hour |
| 26 | Rotate the Groq key at handover (seller revokes, buyer provisions) | **[owner]** | 10 min |

## Phase 4 — Commercial paperwork

| # | Item | Status | Effort |
|---|---|---|---|
| 27 | Licence agreement template — school / county / national / OEM-rebrand | **[lawyer]** | 1–2 weeks |
| 28 | Support & SLA terms (response time, content updates, what happens at exam time) | **[owner]** + **[lawyer]** | 1 week |
| 29 | Safeguarding / data-handling annex (base it on `PRIVACY.md`) | **[lawyer]** | days |
| 30 | Source escrow + a 4-week handover and training plan for the buyer's developers | **[owner]** | 1 week |
| 31 | Decide the selling entity (sole proprietor vs. company) — it changes tax and who signs | **[owner]** + accountant | weeks |

## Phase 5 — The 90-day sale plan

**Days 1–30 — proof.** Switch on counting everywhere you can. Run the print
cost measurement. Fix items 1, 4 and 5. Print the sample pack. Write the
one-page brief.

**Days 31–60 — pilot.** Sign 3–5 schools onto a free-or-cheap one-term pilot in
exchange for their usage reports and a testimonial. In parallel, take the brief
to: the Ministry of Education; the World Bank / GPE implementing partners in
Monrovia; a publisher; two school chains; a telco CSR programme. Ask each the
same question: *what would you need to see to buy this?*

**Days 61–90 — close.** Convert the warmest conversation into a paid pilot or a
national licence quotation using `PRICING.md`. Get the MoE alignment letter.
Then decide: licence it, raise money against it, or sell the IP — with numbers
instead of hope.

## What changed in this branch

- `usage.js` — optional, **network-free** usage counters with a settings panel
  (Usage & privacy) and a JSON export. Off by default; `tests/usage.js` fails
  the build if a network call is ever added.
- `brand.js` — white-label configuration: product name, short name, tutor name,
  support address, footer text. The AI tutor and the page title now follow it.
- `LICENSE` (MIT, code only), `NOTICE.md` (content and third-party positions),
  `SECURITY.md`, `PRIVACY.md`, `ARCHITECTURE.md`, `PRICING.md`.
- CI now runs every Node test; `.gitignore` extended.
- Hooks counted: packs and plans generated, Word exports, print runs, library
  saves.
