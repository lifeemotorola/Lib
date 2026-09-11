# Privacy — plain statement for schools, parents and ministries

This is the document to hand a head teacher, a county education officer or a
donor's safeguarding lead. It is deliberately short and free of legal padding.

## In one sentence

The platform runs entirely on the device it is opened on: it collects nothing,
transmits nothing, and has no account, no login and no analytics.

## What is stored, and where

| Data | Where it lives | Who can read it |
|---|---|---|
| Chosen subject, grade, cover details, school name | `localStorage` on that device | Anyone using that device/browser |
| Saved course packs, lesson plans, assessments (teaching library) | **IndexedDB** on that device | Anyone using that device/browser |
| Uploaded logo or cover background | `localStorage` on that device | Anyone using that device/browser |
| Usage counts, **if switched on** (off by default) | `localStorage` on that device | Anyone using that device/browser |

Clearing the browser's site data deletes all of it. Nothing is recoverable
afterwards — which is why the platform warns you to export a backup.

## What leaves the device

- **Nothing**, when the platform is used offline or for printing and Word
  exports.
- **The AI tutor only:** the text of the question a user types (plus a small
  amount of context about the current subject and pack) is sent to the
  project's server-side proxy and on to Groq to generate an answer. The tutor
  needs an internet connection and is clearly labelled as the only online
  feature. No pupil name, school name or saved document is sent with it.
- **Usage reports only when you export one:** the counters produce a `.json`
  file that the user downloads and decides whether to email anywhere. The
  platform never sends it.

## What the platform does not do

- No analytics, no tracking pixels, no advertising, no third-party scripts
  other than the Cloudflare Turnstile widget when it is enabled (and never on
  an offline or USB copy).
- No cookies.
- No pupil accounts, and therefore no pupil data held by the platform.
- No cross-device sync. Moving work between devices is a manual export/import
  of a backup file.

## Safeguarding notes for schools

- A saved library backup may contain **teacher answer keys and pupils'
  names**. Do not circulate backups to pupils. This warning appears in the
  README and should stay in any rebranded version.
- The **Teacher / Student** switch is a formatting choice, not a login: it
  controls whether an answer key is included in the file produced. Do not rely
  on it to keep answers from pupils who have the Teacher copy open.
- Generated Civics content is written so that activities never ask a learner
  to disclose political affiliation, private information or traumatic
  experience. Keep that constraint if you add content.

## If you are the Ministry or a donor

You can verify every claim above without trusting this document:

```bash
git clone <repo> && cd Lib
bash build.sh                 # rebuild the single file from source
grep -nE "fetch\(|XMLHttpRequest|sendBeacon|WebSocket" usage.js   # must return nothing
node tests/usage.js           # fails the build if a network call is ever added
```

The offline claims are enforced by tests, not by promises.
