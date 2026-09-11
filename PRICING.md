# Pricing & commercial models

Internal working sheet, not a public price list. Grounded in Liberia's actual
education financing: an education budget of **US$132.9M for FY2026** (goods &
services US$16.6M across 2,000+ schools) [1](https://allafrica.com/stories/202511200654.html),
a **GPE system-transformation grant of US$29.63M for 2025–2029** with the World
Bank as grant agent [2](https://www.globalpartnership.org/where-we-work/liberia),
and a market of **6,394 schools / 1,274,610 students / 64,785 teaching staff**
[3](https://www.emis-moe-lib.org/).

## The core insight

Money in Liberian education sits in **materials procurement and printing**, not
in software subscriptions. A World Bank procurement run distributed 1.4 million
pieces of supplementary material to 2,489 schools [4](https://documents1.worldbank.org/curated/en/481011575583469840/txt/Liberia-Education-Sector-Analysis.txt).
Sell into that budget line, not into a SaaS line that barely exists.

## Models

### A. Licensing (software)

| Customer | Price | Notes |
|---|---|---|
| Individual teacher | **Free** | The offline single file. Distribution, goodwill, and the pipeline for everything below. |
| Single school | **US$50–200 / year** | Unlimited generation; bring your own printer. |
| School chain / NGO (10–50 schools) | **US$1,500–5,000 / year** | Includes onboarding and a branded build. |
| County education office | **US$10,000–25,000 / year** | Branded covers, county-wide training. |
| National MoE / donor site licence | **US$75,000–150,000 / year**, or **US$250,000–400,000** for a national build + localisation + 3 years' support | The realistic ceiling for a Liberian education software contract. |

### B. Print-and-deliver (the model to lead with)

Charge **US$0.50–2.00 per pupil per term** for a printed, bound, branded course
pack. The software stays free; the paper is the product.

- 1,274,610 students × 3 terms × US$0.50 = ~US$1.9M at full coverage (a
  ceiling to quote, not a forecast).
- 5% coverage ≈ **US$190k / year**, recurring, and it matches how schools and
  donors already buy materials.
- **Before quoting anything, measure it:** print one Grade 4 English pack at a
  Monrovia shop and one rural shop, and record cost per pack and per page.
  Every number above depends on that.

### C. Services

| Service | Price |
|---|---|
| School onboarding + teacher training | US$500–2,000 per school |
| Content localisation / new subject or grade band | US$5,000–25,000 |
| Custom branding build (`brand.js`) + icons | US$1,000–5,000 |
| Annual support & content updates | 15–20% of licence value |

### D. Selling the company / IP outright

| State of the asset | Defensible price |
|---|---|
| Today (no traction, no MoE relationship, no licence clarity) | **US$10k–60k** cash, more with an earn-out |
| After 12 months: 10+ paying schools, an MoE pilot letter, usage reports showing 5,000+ packs | **US$150k–500k** |
| As a strategic acquisition by a publisher, school operator or telco CSR programme with national reach | US$250k–1M, but only once the revenue exists to underwrite it |

Replacement-cost support for those numbers: ~21k lines of authored code plus
72k lines of curriculum data across 694 units — roughly **6,800–11,200 hours**
of work, i.e. **US$150k–400k** at blended market rates. That is a floor for a
build-vs-buy conversation, not a price.

## What moves the number most

| Lever | Effect on price |
|---|---|
| A signed MoE pilot or alignment letter | Largest single multiplier. Turns "someone's side project" into "a ministry-reviewed tool". |
| Usage evidence (see `usage.js`) | Converts "I think schools use it" into a number a buyer can underwrite. |
| 10 paying customers | Moves the conversation from asset sale to revenue multiple (3–5× ARR). |
| Licence and IP clarity (`LICENSE`, `NOTICE.md`) | Removes the first legal objection and shortens due diligence by weeks. |
| White-labelling (`brand.js`) | Makes it sellable to a publisher or chain that wants its own name on it. |
| A trademark | Removes "what exactly am I buying?" |

## Discount policy

Never discount to zero for an institution. Free for individual teachers (that
is the funnel); always a paid line item for a school, county or ministry, even
if nominal — a free institutional licence is worth less than a cheap one,
because nobody implements what they did not buy.
