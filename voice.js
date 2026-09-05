/* ============================================================
   VOICE READER — pronounce difficult words & read sentences
   -----------------------------------------------------------------
   A floating "voice reader" that uses the browser's built-in Web
   Speech API (speechSynthesis). It reads a difficult word from the
   current subject, a sentence, or a full reading passage out loud.
   Because it uses the on-device voices there is NO network call
   and NO API key, so it works from a USB stick, offline, and behind
   any firewall.

   Customisation:
     - Person (Auto / Man / Woman)
     - Accent (including African English: Nigeria, Ghana, Kenya,
       South Africa, Liberia, Tanzania, plus US, UK, Australian,
       and French for the French subject)
     - Speed (rate) and Pitch

   Features:
     - Pronounces difficult words and key terms from any subject
     - Reads sentences, worked examples, and definitions
     - Reads full reading comprehension passages and stories
     - "Read selection" button & floating select-to-read pill on page
     - Utterance keepalive & chunking for long text (prevents Chrome cutoff)
     - Utterance retention (prevents Chrome garbage collection bug)
     - Interactive play/stop on chips, sentences, passages

   It is deliberately OUTSIDE the printable session: the button and
   panel are hidden by @media print in styles.css, and it never
   injects a button into the generated sheets (.page/.pbody). The
   sheet content the teacher prints stays completely untouched.

   app.js calls window.VOICE_READER.loadFromPack(pack, subjectId,
   subjectLabel, grade) so the panel is populated with the words,
   sentences, and passages of whatever pack is on screen.
   ============================================================ */
(function () {
  "use strict";
  var win = typeof window !== "undefined" ? window : (typeof global !== "undefined" ? global : this);
  var syn = win.speechSynthesis;
  var Utterance = win.SpeechSynthesisUtterance;
  if (!Utterance) return;
  var documentRef = typeof document !== "undefined" ? document : null;
  if (!documentRef) return;

  function setTimer(fn, ms) {
    if (typeof win.setInterval === "function") return win.setInterval(fn, ms);
    if (typeof setInterval === "function") return setInterval(fn, ms);
    return null;
  }
  function clearTimer(id) {
    if (!id) return;
    if (typeof win.clearInterval === "function") win.clearInterval(id);
    else if (typeof clearInterval === "function") clearInterval(id);
  }
  /* one-shot timers, used by the watchdogs below */
  function after(fn, ms) {
    if (typeof win.setTimeout === "function") return win.setTimeout(fn, ms);
    if (typeof setTimeout === "function") return setTimeout(fn, ms);
    return null;
  }
  function clearAfter(id) {
    if (!id) return;
    if (typeof win.clearTimeout === "function") win.clearTimeout(id);
    else if (typeof clearTimeout === "function") clearTimeout(id);
  }

  var $ = function (s, r) { return (r || documentRef).querySelector(s); };

  /* ------------------------------------------------------------------
     Local persistence of the reader's own settings (independent of the
     pack settings) so a teacher's favourite voice is remembered.
     ------------------------------------------------------------------ */
  var KEY = "voiceReader.settings";
  function allSettings() {
    /* only the reader's own choices are persisted, never the transient pack data */
    return {
      gender: state.gender,
      accent: state.accent,
      rate: state.rate,
      pitch: state.pitch,
      manualVoice: state.manualVoice
    };
  }
  function readSettings() {
    try { return JSON.parse(window.localStorage.getItem(KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveSettings() {
    try { window.localStorage.setItem(KEY, JSON.stringify(allSettings())); }
    catch (e) { /* private mode: ignore */ }
  }

  /* ------------------------------------------------------------------
     Region/accents. People may not have an African English voice
     installed (that depends on the device), so accent selection picks
     the closest available voice and the panel says which one is used.
     "auto" follows the subject: French for the French subject,
     African English for English/Phonics, plain English otherwise.
     ------------------------------------------------------------------ */
  var ACCENTS = [
    { id: "auto", label: "Auto — match the subject", langs: null },
    { id: "en-afr", label: "English (African)", langs: ["en-ng", "en-gh", "en-ke", "en-za", "en-lr", "en-tz", "en-ngn", "en-ea-af"] },
    { id: "en-ng", label: "English (Nigeria)", langs: ["en-ng", "en-ngh"] },
    { id: "en-gh", label: "English (Ghana)", langs: ["en-gh"] },
    { id: "en-ke", label: "English (Kenya)", langs: ["en-ke"] },
    { id: "en-za", label: "English (South Africa)", langs: ["en-za"] },
    { id: "en-lr", label: "English (Liberia)", langs: ["en-lr"] },
    { id: "en-tz", label: "English (Tanzania)", langs: ["en-tz"] },
    { id: "en-us", label: "English (United States)", langs: ["en-us"] },
    { id: "en-gb", label: "English (United Kingdom)", langs: ["en-gb"] },
    { id: "en-au", label: "English (Australia)", langs: ["en-au"] },
    { id: "fr", label: "French", langs: ["fr", "fr-fr", "fr-ca", "fr-cm", "fr-ht"] },
    { id: "en-any", label: "English (any)", langs: ["en"] }
  ];
  function accentById(id) {
    for (var i = 0; i < ACCENTS.length; i++) if (ACCENTS[i].id === id) return ACCENTS[i];
    return ACCENTS[0];
  }

  /* Guess a voice's person from its metadata. Names differ by OS, so this
     is a best-effort map; voices we cannot tell are left "unknown" and are
     only used when the chosen person has no matching voice. */
  var FEMALE_RE = /(female|samantha|victoria|karen|moira|tessa|fiona|zira|ava|jenny|aria|salli|joanna|kendra|kimberly|hazel|ivy|emma|amy|allison|nicki|sonja|catherine|veena|mia|libby|girl|lucia|paula|helena|milena|yuki|sayaka|kyoko|amelie|amelea|nicole|alice|maria|vicki|michelle|christy|susan|frankie|ana|marisol|lola|carmen|monica|luciana|miguelita|kanya|olivia|alva|vietnam|mei|ting|hina|nora|matilda|hannah|tanya|donna|ellena|ida|clara|estelle|paulina|joana|joana|marcela|luciana|sara|juli|daniela|catalina|sol|valentina|sofia|eugenia|inga|zofia|ewgenia|kasia|edwina|lee|yuna|minji|su|angel|emily|shelby|nathaniel_?|chloe)/i;
  var MALE_RE = /(male|daniel|david|mark|james|fred|alex|aaron|arthur|george|thomas|oliver|roger|gordon|reed|bruce|albert|nicky|jorge|diego|juan|carlos|enrique|miguel|rishi|nikhil|ravi|rahul|carl|guy|peter|brian|christopher|ryan|nathan|chip|gordon|dashiell|filip|niki|pavel|zuzana|maurizio|claudio|filippo|matteo|lars|magnus|joakim|johan|henrik|mathias|simon|mikael|steffan|nils|daniel|bastian|stefan|volker|marcel|thomas|heiner|joshua|william|steven|eric|james|george|victor|oscar|raul|kepa|lydia|marc|hans|leo|karl|paul|sebastian|joseph|ted|melvin|yuri|oleg|pavel|dmitri|konstantin|cesar|jeff|tom|ben|sam|max|jeffrey|rudolph|tommy)/i;
  function voiceGender(v) {
    if (!v) return "unknown";
    if (FEMALE_RE.test(v.name)) return "female";
    if (MALE_RE.test(v.name)) return "male";
    return "unknown";
  }

  /* Score an available voice against a chosen accent (language tag list). */
  function accentScore(lang, langs) {
    lang = String(lang || "").toLowerCase();
    if (!langs || !langs.length) return 2;               /* auto: neutral */
    var best = -1;
    for (var i = 0; i < langs.length; i++) {
      var a = String(langs[i]).toLowerCase();
      if (!a) continue;
      if (lang === a) best = Math.max(best, 5);          /* exact "en-ng"  */
      else if (lang.indexOf(a) === 0) best = Math.max(best, 4);  /* "en-ng-ng" */
      else if (a.indexOf(lang) === 0) best = Math.max(best, 3);  /* "en" vs "en-ng" */
      else if (lang.split("-")[0] === a.split("-")[0]) best = Math.max(best, 1);
    }
    return best;
  }

  /* ------------------------------------------------------------------
     State + the reader's chosen voice.
     ------------------------------------------------------------------ */
  var state = readSettings();
  state.gender = state.gender || "auto";
  state.accent = state.accent || "auto";
  state.rate = typeof state.rate === "number" ? state.rate : 1;
  state.pitch = typeof state.pitch === "number" ? state.pitch : 1;
  state.subjectLang = "en";
  state.subjectName = "";
  state.subjectGrade = "";
  state.packLoaded = false;
  state.words = [];
  state.sentences = [];
  state.passages = [];
  state.manualVoice = typeof state.manualVoice === "string" ? state.manualVoice : "";

  var voicesCache = [];
  function loadVoices() {
    if (!syn) return;
    voicesCache = syn.getVoices() || [];
    populateVoiceSelect();
    updateVoiceUsed();
  }
  if (syn) {
    if (syn.addEventListener) syn.addEventListener("voiceschanged", loadVoices);
    syn.onvoiceschanged = loadVoices;
  }

  /* Chrome hands the voice list over asynchronously and sometimes only
     after a nudge, so poll briefly instead of trusting a first, empty
     getVoices(): a reader that believes there are no voices stays quiet. */
  var voicePoll = null;
  function primeVoices() {
    loadVoices();
    if (!syn || voicesCache.length) return;
    var tries = 0;
    if (voicePoll) clearTimer(voicePoll);
    voicePoll = setTimer(function () {
      tries++;
      loadVoices();
      if (voicesCache.length || tries >= 12) {
        clearTimer(voicePoll);
        voicePoll = null;
      }
    }, 250);
  }

  function pickVoice() {
    if (!voicesCache.length && syn) voicesCache = syn.getVoices() || [];
    /* manual override */
    if (state.manualVoice) {
      for (var i = 0; i < voicesCache.length; i++) {
        if (voicesCache[i].voiceURI === state.manualVoice) return voicesCache[i];
      }
    }
    var acc = accentById(state.accent);
    var langs = acc.langs;
    if (state.accent === "auto") {
      langs = (state.subjectLang === "fr")
        ? ["fr", "fr-fr", "fr-ca"]
        : ["en-ng", "en-gh", "en-ke", "en-za", "en-lr", "en-tz", "en"];
    }
    var gender = state.gender;
    var best = null, bestScore = -1e9;
    for (var j = 0; j < voicesCache.length; j++) {
      var v = voicesCache[j];
      var score = accentScore(v.lang, langs);
      if (gender !== "auto") {
        var g = voiceGender(v);
        if (g === "unknown") score -= 5;
        else if (g !== gender) score -= 20;   /* person is the primary choice */
      }
      if (v.default) score += 0.5;
      if (v.localService) score += 0.2;      /* prefer offline voices on school computers */
      if (score > bestScore) { bestScore = score; best = v; }
    }
    return best || voicesCache[0] || null;
  }

  /* ------------------------------------------------------------------
     Speech engine
     ------------------------------------------------------------------
     One chunk is handed to the browser at a time; the rest wait in our
     own queue. Handing a whole reading over in one go is exactly what
     makes Chrome fall silent after about fifteen seconds and never fire
     `onend` again — and the usual pause()/resume() keepalive stops the
     voice outright on Chrome for Android, so this never pauses. Every
     chunk is watched instead: when the browser never reports back the
     chunk is dropped and the reading carries on with the next one.
     ------------------------------------------------------------------ */
  var CHUNK_MAX = 160;        /* characters per utterance */
  var START_WAIT = 1800;      /* how long to wait for the first sound */
  var KEEPALIVE_MS = 5000;    /* watchdog tick — resume only, never pause */

  /* Bumped by stop() and speak(), so an event arriving from an utterance
     that has already been cancelled can be recognised and ignored. */
  var session = 0;
  var queue = [];             /* chunks still to speak */
  var curChunk = "";          /* the chunk the browser is saying now */
  var curUtter = null;
  var activeUtterances = [];  /* Chrome garbage-collects loose utterances */
  var isSpeakingState = false;
  var stallTimer = null;
  var keepAliveTimer = null;
  var startTimer = null;
  var startAttempts = 0;
  var started = false;
  var activePlayingElement = null;

  /* Split text into speakable sentence/phrase chunks. Short chunks are what
     keep a long reading alive: browsers that cut speech off after a while
     never do it inside a single short utterance. */
  function chunkText(text, maxLen) {
    maxLen = maxLen || CHUNK_MAX;
    text = cleanText(text);
    if (!text) return [];
    if (text.length <= maxLen) return [text];

    var chunks = [];
    var sentences = text.match(/[^.!?;\n]+[.!?;\n]+|[^.!?;\n]+$/g) || [text];
    var current = "";

    for (var i = 0; i < sentences.length; i++) {
      var s = sentences[i].trim();
      if (!s) continue;
      if (s.length > maxLen) {
        /* A sentence with no full stop anywhere: fall back to words, and to
           hard cuts for a single word longer than a whole chunk. */
        var words = s.split(/\s+/);
        for (var j = 0; j < words.length; j++) {
          var w = words[j];
          while (w.length > maxLen) {
            if (current) { chunks.push(current); current = ""; }
            chunks.push(w.slice(0, maxLen));
            w = w.slice(maxLen);
          }
          if ((current + " " + w).trim().length <= maxLen) {
            current = (current + " " + w).trim();
          } else {
            if (current) chunks.push(current);
            current = w;
          }
        }
      } else if ((current + " " + s).trim().length <= maxLen) {
        current = (current + " " + s).trim();
      } else {
        if (current) chunks.push(current);
        current = s;
      }
    }
    if (current) chunks.push(current);
    return chunks;
  }

  function clearSpeechTimers() {
    if (stallTimer) { clearAfter(stallTimer); stallTimer = null; }
    if (keepAliveTimer) { clearTimer(keepAliveTimer); keepAliveTimer = null; }
    if (startTimer) { clearAfter(startTimer); startTimer = null; }
  }

  function speaking() {
    return isSpeakingState || !!(syn && (syn.speaking || syn.pending));
  }

  /* Cancel whatever is in flight and invalidate anything still to come. */
  function resetSpeech() {
    session++;
    clearSpeechTimers();
    queue = [];
    curChunk = "";
    curUtter = null;
    activeUtterances = [];
    startAttempts = 0;
    started = false;
    if (syn) {
      try { syn.cancel(); } catch (e) {}
      try { if (syn.paused && syn.resume) syn.resume(); } catch (e) {}
      /* Chrome finishes cancelling asynchronously. A second nudge a moment
         later clears a queue that is stuck — but only when nothing new has
         started speaking in the meantime. */
      var mine = session;
      after(function () {
        if (session === mine && syn) { try { syn.cancel(); } catch (e) {} }
      }, 80);
    }
  }

  function stop() {
    resetSpeech();
    isSpeakingState = false;
    if (FAB) FAB.classList.remove("speaking");
    setSpeakingUI(false);
    clearActivePlaying();
  }

  function finish(my, onComplete) {
    if (my !== session) return;
    clearSpeechTimers();
    isSpeakingState = false;
    if (FAB) FAB.classList.remove("speaking");
    setSpeakingUI(false);
    clearActivePlaying();
    if (typeof onComplete === "function") onComplete();
  }

  /* How long a chunk may take before we decide the browser has stopped
     talking to us: twice as long as it should need, plus a margin. */
  function stallBudget(text) {
    var rate = clamp(state.rate, 0.5, 1.6);
    var ms = ((String(text == null ? "" : text).length / (14 * rate)) * 2 + 6) * 1000;
    return Math.max(8000, Math.min(40000, ms));
  }

  function armStall(my, onComplete, text) {
    if (stallTimer) clearAfter(stallTimer);
    stallTimer = after(function () {
      stallTimer = null;
      if (my !== session) return;
      /* No `onend` came back — drop this chunk and carry on with the next. */
      try { syn.cancel(); } catch (e) {}
      curUtter = null;
      playNext(my, onComplete);
    }, stallBudget(text));
  }

  /* Chrome sometimes swallows a speak() call and stays silent without
     firing a single event. Give it one retry, then say so in the panel. */
  function startCheck(my, onComplete) {
    startTimer = null;
    if (my !== session || started) return;
    startAttempts++;
    if (startAttempts > 1) {
      finish(my, onComplete);
      setNote(NOTE_SILENT);
      return;
    }
    try { syn.cancel(); } catch (e) {}
    curUtter = null;
    if (curChunk) queue.unshift(curChunk);
    startTimer = after(function () { startCheck(my, onComplete); }, START_WAIT);
    playNext(my, onComplete);
  }

  function playNext(my, onComplete) {
    if (my !== session) return;
    if (!queue.length) { finish(my, onComplete); return; }

    curChunk = queue.shift();
    var u = new Utterance(curChunk);
    /* Re-read the settings for every chunk, so changing voice or speed
       while a long reading is playing takes effect straight away. */
    var v = pickVoice();
    if (v) u.voice = v;
    u.lang = (v && v.lang) || (state.subjectLang === "fr" ? "fr-FR" : "en-US");
    u.rate = clamp(state.rate, 0.5, 1.6);
    u.pitch = clamp(state.pitch, 0.5, 1.5);

    activeUtterances.push(u);        /* keep the reference: Chrome GCs loose ones */
    if (activeUtterances.length > 8) activeUtterances.splice(0, activeUtterances.length - 8);
    curUtter = u;

    var settled = false;
    function advance() {
      if (settled || my !== session) return;
      settled = true;
      started = true;                 /* any event at all means it did speak */
      if (stallTimer) { clearAfter(stallTimer); stallTimer = null; }
      if (startTimer) { clearAfter(startTimer); startTimer = null; }
      curUtter = null;
      playNext(my, onComplete);
    }

    u.onstart = function () {
      if (my !== session) return;
      started = true;
      if (startTimer) { clearAfter(startTimer); startTimer = null; }
      if (FAB) FAB.classList.add("speaking");
      setSpeakingUI(true);
    };
    u.onend = advance;
    u.onerror = function (ev) {
      if (my !== session) return;
      var err = (ev && ev.error) || "";
      if (err === "interrupted" || err === "canceled") return;   /* we stopped it */
      advance();
    };

    try {
      if (syn.paused && syn.resume) syn.resume();
      syn.speak(u);
    } catch (err) {
      advance();
      return;
    }
    armStall(my, onComplete, curChunk);
  }

  function speak(text, onComplete, targetEl) {
    text = cleanText(text);
    if (!text) return;
    if (!syn || !Utterance) { setNote(NOTE_UNSUPPORTED); return; }

    var wasBusy = speaking();
    resetSpeech();                    /* stops the previous reading, if any */
    if (targetEl) setActivePlaying(targetEl);

    var chunks = chunkText(text, CHUNK_MAX);
    if (!chunks.length) return;

    var my = session;
    queue = chunks;
    started = false;
    startAttempts = 0;
    setNote("");
    isSpeakingState = true;
    if (FAB) FAB.classList.add("speaking");
    setSpeakingUI(true);

    /* Chrome can drop a speak() issued in the same tick as a cancel(), so
       when we had to interrupt something we give it a moment to settle. */
    var delay = wasBusy ? 70 : 0;

    keepAliveTimer = setTimer(function () {
      if (my !== session) return;
      /* Resume only: pausing here is what kills the voice on Android. */
      try { if (syn && syn.paused && syn.resume) syn.resume(); } catch (e) {}
    }, KEEPALIVE_MS);

    startTimer = after(function () { startCheck(my, onComplete); }, START_WAIT + delay);

    if (delay) after(function () { playNext(my, onComplete); }, delay);
    else playNext(my, onComplete);
  }

  function handlePlayClick(btn, text) {
    if (activePlayingElement === btn && speaking()) {
      stop();
      return;
    }
    speak(text, null, btn);
  }

  function setActivePlaying(elem) {
    clearActivePlaying();
    activePlayingElement = elem;
    if (elem && elem.classList) elem.classList.add("vr-active");
  }

  function clearActivePlaying() {
    if (activePlayingElement && activePlayingElement.classList) {
      activePlayingElement.classList.remove("vr-active");
    }
    activePlayingElement = null;
    var all = documentRef.querySelectorAll(".vr-active");
    for (var i = 0; i < all.length; i++) all[i].classList.remove("vr-active");
  }

  function clamp(n, lo, hi) { n = +n; return isNaN(n) ? lo : (n < lo ? lo : n > hi ? hi : n); }

  function setSpeakingUI(on) {
    var sp = el("vrSpeak"), st = el("vrStop");
    if (sp) sp.hidden = on;
    if (st) st.hidden = !on;
  }

  function getSelectedText() {
    var sel = window.getSelection ? window.getSelection() : null;
    return sel ? sel.toString().trim() : "";
  }

  /* ------------------------------------------------------------------
     DOM — the floating button and panel are created here so body.html
     stays clean and the reader can be centred in its own module.
     ------------------------------------------------------------------ */
  function el(id) { return documentRef.getElementById(id); }

  /* Messages shown in the panel's footnote. The reader is silent about
     anything it cannot fix, so these say what to do next, not what broke. */
  var NOTE_DEFAULT = "Reads with the voice your device provides, so you can hear a word or sentence spoken. Works offline with browser speech synthesis. Select any text on a worksheet to read it aloud.";
  var NOTE_SILENT = "Nothing came out. Check that the device is not muted and that its volume is up, then press Speak again.";
  var NOTE_UNSUPPORTED = "This browser has no speech engine, so the voice reader cannot speak here. The packs, printing and Word export all still work.";

  /* The panel's footnote doubles as the reader's status line. */
  function setNote(msg) {
    var n = el("vrNote");
    if (!n) return;
    n.textContent = msg || NOTE_DEFAULT;
    if (n.classList) n.classList.toggle("vr-note-warn", !!msg);
  }

  var panelHTML =
    '<button class="vr-fab" id="vrFab" type="button" aria-label="Open voice reader" aria-expanded="false">' +
      '<svg class="ic" aria-hidden="true"><use href="#i-voice"/></svg>' +
      '<span class="vr-fab-lab">Voice reader</span>' +
    '</button>' +
    '<button class="vr-sel-pill no-print" id="vrSelPill" type="button" aria-label="Read selected text" hidden>' +
      '<svg class="ic" aria-hidden="true"><use href="#i-voice"/></svg><span>Read selection</span>' +
    '</button>' +
    '<div class="vr-panel" id="vrPanel" role="dialog" aria-label="Voice reader" hidden>' +
      '<div class="vr-head">' +
        '<div class="vr-head-txt">' +
          '<svg class="ic" aria-hidden="true"><use href="#i-voice"/></svg>' +
          '<span><b>Voice reader</b><span class="vr-head-sub">Pronounce words, read sentences &amp; stories</span></span>' +
        '</div>' +
        '<button type="button" class="vr-x" id="vrClose" aria-label="Close"><svg class="ic" aria-hidden="true"><use href="#i-close"/></svg></button>' +
      '</div>' +
      '<div class="vr-body">' +
        '<div class="vr-sec">' +
          '<div class="vr-sec-head"><b>Choose a voice</b><span class="vr-pack-name" id="vrVoiceUsed"></span></div>' +
          '<div class="vr-row">' +
            '<span class="vr-lab">Person</span>' +
            '<div class="vr-seg" id="vrGender">' +
              '<button type="button" data-g="auto">Auto</button>' +
              '<button type="button" data-g="male">Man</button>' +
              '<button type="button" data-g="female">Woman</button>' +
            '</div>' +
          '</div>' +
          '<div class="vr-row">' +
            '<label for="vrAccent">Accent</label>' +
            '<select id="vrAccent"></select>' +
          '</div>' +
          '<div class="vr-row">' +
            '<label for="vrVoice">Voice</label>' +
            '<select id="vrVoice"><option value="">Auto — pick for me</option></select>' +
          '</div>' +
          '<div class="vr-row">' +
            '<label for="vrRate">Speed</label>' +
            '<input type="range" id="vrRate" min="0.5" max="1.6" step="0.05" value="1">' +
            '<b id="vrRateVal">1.0x</b>' +
          '</div>' +
          '<div class="vr-row">' +
            '<label for="vrPitch">Pitch</label>' +
            '<input type="range" id="vrPitch" min="0.5" max="1.5" step="0.05" value="1">' +
            '<b id="vrPitchVal">1.0</b>' +
          '</div>' +
          '<button type="button" class="vr-test" id="vrTest"><svg class="ic" aria-hidden="true"><use href="#i-play"/></svg>&nbsp; Test voice</button>' +
        '</div>' +

        '<div class="vr-txt">' +
          '<label for="vrInput">Type or select a word, sentence or passage</label>' +
          '<textarea id="vrInput" rows="2" placeholder="e.g. haemoglobin — &#39;hem&#45;uh&#45;GLOH&#45;bin&#39;"></textarea>' +
          '<div class="vr-txt-actions">' +
            '<button type="button" class="b1" id="vrSpeak"><svg class="ic" aria-hidden="true"><use href="#i-voice"/></svg><span>&nbsp; Speak</span></button>' +
            '<button type="button" class="b3 vr-sel-btn" id="vrReadSel"><svg class="ic" aria-hidden="true"><use href="#i-type"/></svg><span>&nbsp; Read selection</span></button>' +
            '<button type="button" class="b2" id="vrStop" hidden><svg class="ic" aria-hidden="true"><use href="#i-stop"/></svg><span>&nbsp; Stop</span></button>' +
          '</div>' +
        '</div>' +

        '<div class="vr-sec" id="vrPackSec" hidden>' +
          '<div class="vr-sec-head"><b>From this pack</b><span class="vr-pack-name" id="vrPackName"></span></div>' +
          '<div class="vr-tabs">' +
            '<button type="button" id="vrTabWords" class="on">Difficult words</button>' +
            '<button type="button" id="vrTabSent">Sentences</button>' +
            '<button type="button" id="vrTabPassages">Passages &amp; Stories</button>' +
          '</div>' +
          '<div class="vr-list" id="vrList"></div>' +
          '<p class="vr-note" id="vrPackNote"></p>' +
        '</div>' +

        '<p class="vr-note" id="vrNote">' + NOTE_DEFAULT + '</p>' +
      '</div>' +
    '</div>';

  var FAB = null, PANEL = null;

  function build() {
    if (documentRef.getElementById("vrFab")) return;
    var host = documentRef.createElement("div");
    host.style.display = "contents";
    host.innerHTML = panelHTML;
    documentRef.body.appendChild(host);
    FAB = el("vrFab");
    PANEL = el("vrPanel");

    /* ---- accent options ---- */
    var accentSel = el("vrAccent");
    if (accentSel) {
      for (var i = 0; i < ACCENTS.length; i++) {
        var o = documentRef.createElement("option");
        o.value = ACCENTS[i].id;
        o.textContent = ACCENTS[i].label;
        accentSel.appendChild(o);
      }
      accentSel.value = state.accent;
    }

    /* gender */
    setGender(state.gender);
    if (el("vrRate")) {
      el("vrRate").value = state.rate;
      el("vrRateVal").textContent = fmtRate(state.rate);
    }
    if (el("vrPitch")) {
      el("vrPitch").value = state.pitch;
      el("vrPitchVal").textContent = fmtNum(state.pitch);
    }

    wire();
    primeVoices();
    renderList();
  }

  function setGender(g) {
    state.gender = g;
    var buttons = PANEL ? PANEL.querySelectorAll("#vrGender button") : [];
    Array.prototype.forEach.call(buttons, function (b) {
      b.className = b.getAttribute("data-g") === g ? "on" : "";
    });
  }

  function fmtRate(r) { return r.toFixed(2).replace(/\.?0+$/, "") + "x"; }
  function fmtNum(n) { return n.toFixed(2).replace(/\.?0+$/, ""); }

  function populateVoiceSelect() {
    var sel = el("vrVoice");
    if (!sel) return;
    var manual = state.manualVoice;
    sel.innerHTML = '<option value="">Auto — pick for me</option>';
    var sorted = voicesCache.slice().sort(function (a, b) {
      return (a.lang || "").localeCompare(b.lang || "") || a.name.localeCompare(b.name);
    });
    sorted.forEach(function (v) {
      var o = documentRef.createElement("option");
      o.value = v.voiceURI;
      var g = voiceGender(v);
      var tag = g === "male" ? " (Man)" : g === "female" ? " (Woman)" : "";
      o.textContent = v.name + " — " + (v.lang || "?") + tag;
      sel.appendChild(o);
    });
    sel.value = manual;
  }

  function updateVoiceUsed() {
    var v = pickVoice();
    var t = el("vrVoiceUsed");
    if (!t) return;
    if (v) {
      t.textContent = v.name + " · " + (v.lang || "");
    } else if (voicesCache.length) {
      t.textContent = "Default voice";
    } else {
      t.textContent = "Default system voice";
    }
  }

  /* ------------------------------------------------------------------
     Word / sentence / passage list from the generated pack.
     ------------------------------------------------------------------ */
  function cleanText(s) {
    return String(s == null ? "" : s)
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\s+/g, " ")
      .trim();
  }

  function collect(topics) {
    var words = [], wSeen = {};
    var sentences = [], sSeen = {};
    var passages = [], pSeen = {};

    function addWord(w, src) {
      w = cleanText(w).replace(/[.,;:!?()"“”]/g, "").trim();
      if (!w || w.length > 50 || w.length < 2) return;
      var k = w.toLowerCase();
      if (wSeen[k]) return;
      wSeen[k] = 1;
      words.push({ w: w, src: src || "" });
    }

    function addSentence(s, src) {
      s = cleanText(s);
      if (!s || s.length < 5 || s.length > 600) return;
      var k = s.toLowerCase();
      if (sSeen[k]) return;
      sSeen[k] = 1;
      sentences.push({ t: s, src: src || "" });
    }

    function addPassage(p, title, src) {
      p = String(p == null ? "" : p).trim();
      if (!p || p.length < 15) return;
      var k = p.toLowerCase();
      if (pSeen[k]) return;
      pSeen[k] = 1;
      passages.push({ title: title || "Reading Passage", text: p, src: src || "" });
      var sents = p.split(/(?<=[.!?])\s+/);
      sents.forEach(function (st) { addSentence(st, src); });
    }

    function extractFromStudy(studyBlocks, unit) {
      if (!Array.isArray(studyBlocks)) return;
      studyBlocks.forEach(function (b) {
        if (!b) return;
        if (b.t) {
          addSentence(b.t, unit);
          var boldMatches = String(b.t).match(/\*\*([^*]+)\*\*/g);
          if (boldMatches) {
            boldMatches.forEach(function (m) {
              var term = m.replace(/\*\*/g, "").trim();
              if (term.length <= 40) addWord(term, unit);
            });
          }
        }
        if (b.items && Array.isArray(b.items)) {
          b.items.forEach(function (it) {
            addSentence(it, unit);
            var boldMatches = String(it).match(/\*\*([^*]+)\*\*/g);
            if (boldMatches) {
              boldMatches.forEach(function (m) {
                var term = m.replace(/\*\*/g, "").trim();
                if (term.length <= 40) addWord(term, unit);
              });
            }
          });
        }
        if (b.rows && Array.isArray(b.rows)) {
          b.rows.forEach(function (row) {
            if (Array.isArray(row)) {
              row.forEach(function (cell) {
                if (typeof cell === "string") {
                  if (cell.length <= 30 && cell.split(" ").length <= 3) addWord(cell, unit);
                  else addSentence(cell, unit);
                }
              });
            }
          });
        }
      });
    }

    Array.prototype.forEach.call(topics || [], function (t) {
      var unit = t.title || t.fr || "";
      if (t.subtitle) addSentence(t.subtitle, unit);
      if (t.title) addWord(t.title, unit);
      if (t.fr) addWord(t.fr, unit);
      if (t.en) addWord(t.en, unit);

      if (t.study) extractFromStudy(t.study, unit);

      (t.words || []).forEach(function (v) {
        if (typeof v === "string") { addWord(v, unit); return; }
        addWord(v.w, unit);
        addWord(v.s, unit);
        addSentence(v.x, unit);
        addSentence(v.d, unit);
      });
      (t.terms || []).forEach(function (v) {
        if (typeof v === "string") { addWord(v, unit); return; }
        addWord(v.t, unit);
        addSentence(v.x, unit);
        addSentence(v.d, unit);
      });
      (t.vocab || []).forEach(function (v) {
        addWord(v.fr, unit);
        addWord(v.en, unit);
        addSentence(v.fr, unit);
        addSentence(v.en, unit);
        if (v.say) addWord(v.say, unit);
      });
      if (t.extra) {
        if (Array.isArray(t.extra)) {
          t.extra.forEach(function (v) {
            if (typeof v === "string") addSentence(v, unit);
            else {
              if (v.fr) addWord(v.fr, unit);
              if (v.en) addWord(v.en, unit);
            }
          });
        } else if (t.extra.items && Array.isArray(t.extra.items)) {
          t.extra.items.forEach(function (it) { addSentence(it, unit); });
        }
      }
      (t.sight || []).forEach(function (v) { addWord(v, unit); });
      (t.phonics || []).forEach(function (p) {
        (p.words || []).forEach(function (w) { addWord(w, unit); });
      });
      if (t.focus) t.focus.forEach(function (f) { addWord(f, unit); });
      
      if (t.passage) {
        if (t.passage.text) addPassage(t.passage.text, t.passage.title, unit);
        if (t.passage.qs) t.passage.qs.forEach(function (q) {
          addSentence(q.q, unit); addSentence(q.a, unit);
        });
      }
      (t.facts || []).forEach(function (f) { addSentence(f.q, unit); addSentence(f.a, unit); });
      (t.tf || []).forEach(function (f) { addSentence(f.s, unit); addSentence(f.why, unit); });
      (t.worked || []).forEach(function (w) { addSentence(w.q, unit); addSentence(w.a, unit); });
      (t.word || []).forEach(function (w) { addSentence(w.q, unit); addSentence(w.a, unit); });
      (t.drill || []).forEach(function (w) { addSentence(w.q, unit); addSentence(w.a, unit); });
      (t.grammar || []).forEach(function (g) { addSentence(g.q, unit); addSentence(g.why, unit); });
      (t.pairs || []).forEach(function (p) { addWord(p.a, unit); addWord(p.b, unit); });
      (t.apply || []).forEach(function (a) { addSentence(a.q, unit); addSentence(a.a, unit); });
      (t.mcq || []).forEach(function (m) {
        addSentence(m.q, unit);
        (m.o || []).forEach(function (o) { addSentence(o, unit); });
        if (m.why) addSentence(m.why, unit);
      });
      (t.essay || []).forEach(function (e) {
        addSentence(e.q, unit);
        (e.outline || []).forEach(function (line) { addSentence(line, unit); });
      });
      (t.quotes || []).forEach(function (q) { addSentence(q.q, unit); if (q.ctx) addSentence(q.ctx, unit); });
      (t.characters || []).forEach(function (c) { addWord(c.n, unit); addSentence(c.d, unit); });
      (t.themes || []).forEach(function (th) { addWord(th.t, unit); addSentence(th.d, unit); });
      if (t.casestudy) {
        if (t.casestudy.text) addPassage(t.casestudy.text, t.casestudy.title, unit);
        (t.casestudy.questions || []).forEach(function (q) { addSentence(q.q, unit); addSentence(q.a, unit); });
      }
    });

    return { words: words, sentences: sentences, passages: passages };
  }

  function loadFromPack(pack, subjectId, subjectLabel, grade) {
    state.subjectLang = subjectId === "fr" ? "fr" : "en";
    state.subjectName = subjectLabel || "";
    state.subjectGrade = grade ? ("Grade " + grade) : "";
    var col = collect(pack && pack.topics);
    state.words = col.words.slice(0, 150);
    state.sentences = col.sentences.slice(0, 150);
    state.passages = col.passages.slice(0, 50);
    state.packLoaded = true;
    saveSettings();
    renderList();
  }

  var tab = "words";

  function renderList() {
    if (!PANEL) return;
    var sec = el("vrPackSec");
    if (!sec) return;
    if (state.packLoaded) {
      sec.hidden = false;
      var nm = el("vrPackName");
      if (nm) nm.textContent = state.subjectName + (state.subjectGrade ? " · " + state.subjectGrade : "");
      var note = el("vrPackNote");
      if (note) {
        note.textContent = state.words.length + " words · " + state.sentences.length + " sentences" +
          (state.passages.length ? " · " + state.passages.length + " passages" : "") + " from the current pack.";
      }
      var list = el("vrList");
      var html = "";
      if (tab === "words") {
        if (!state.words.length) {
          html = '<div class="vr-empty">No vocabulary/terms in this pack — type a word above and press Speak.</div>';
        } else {
          html = '<div class="vr-chips">' + state.words.map(function (w) {
            return '<button type="button" class="vr-chip" data-say="' + escAttr(w.w) + '" title="' + escAttr(w.src) + '">' +
              '<svg class="ic" aria-hidden="true"><use href="#i-play"/></svg><span>' + escHtml(w.w) + '</span></button>';
          }).join("") + '</div>';
        }
      } else if (tab === "sentences") {
        if (!state.sentences.length) {
          html = '<div class="vr-empty">No sentences in this pack — type one above and press Speak.</div>';
        } else {
          html = state.sentences.map(function (s) {
            return '<button type="button" class="vr-sent" data-say="' + escAttr(s.t) + '">' +
              '<svg class="ic" aria-hidden="true"><use href="#i-play"/></svg><span class="t">' + escHtml(s.t) + '</span></button>';
          }).join("");
        }
      } else if (tab === "passages") {
        if (!state.passages.length) {
          html = '<div class="vr-empty">No reading passages in this pack — select words or sentences above to hear them.</div>';
        } else {
          html = state.passages.map(function (p) {
            return '<div class="vr-passage-card">' +
              '<div class="vr-passage-head">' +
                '<b>' + escHtml(p.title) + '</b>' +
                '<button type="button" class="vr-passage-btn" data-say="' + escAttr(p.text) + '" title="Read passage">' +
                  '<svg class="ic" aria-hidden="true"><use href="#i-play"/></svg><span>&nbsp; Listen</span>' +
                '</button>' +
              '</div>' +
              '<p class="vr-passage-txt">' + escHtml(p.text) + '</p>' +
            '</div>';
          }).join("");
        }
      }
      list.innerHTML = html;
    }
  }

  function escHtml(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function escAttr(s) { return escHtml(s).replace(/"/g, "&quot;"); }

  /* ------------------------------------------------------------------
     Wiring
     ------------------------------------------------------------------ */
  function wire() {
    if (!FAB) return;
    FAB.onclick = toggle;
    el("vrClose").onclick = close;

    var accentSel = el("vrAccent");
    if (accentSel) {
      accentSel.onchange = function () {
        state.accent = accentSel.value;
        saveSettings();
        updateVoiceUsed();
      };
    }
    var voiceSel = el("vrVoice");
    if (voiceSel) {
      voiceSel.onchange = function () {
        state.manualVoice = voiceSel.value;
        saveSettings();
        updateVoiceUsed();
      };
    }
    var genderBox = el("vrGender");
    if (genderBox) {
      genderBox.addEventListener("click", function (e) {
        var b = e.target.closest ? e.target.closest("button") : null;
        if (!b) return;
        setGender(b.getAttribute("data-g"));
        saveSettings();
        updateVoiceUsed();
      });
    }
    var rate = el("vrRate");
    if (rate) {
      rate.oninput = function () {
        state.rate = +rate.value;
        el("vrRateVal").textContent = fmtRate(state.rate);
        saveSettings();
      };
    }
    var pitch = el("vrPitch");
    if (pitch) {
      pitch.oninput = function () {
        state.pitch = +pitch.value;
        el("vrPitchVal").textContent = fmtNum(state.pitch);
        saveSettings();
      };
    }
    el("vrTest").onclick = function () {
      if (activePlayingElement === el("vrTest") && speaking()) {
        stop();
        return;
      }
      var testText = (state.subjectLang === "fr")
        ? "Bonjour! Voici comment votre lecteur vocal va prononcer les mots pour vous."
        : "Good morning! This is how your voice reader will pronounce words for you.";
      speak(testText, null, el("vrTest"));
    };
    el("vrSpeak").onclick = function () {
      var val = (el("vrInput").value || "").trim();
      if (!val) {
        var sel = getSelectedText();
        if (sel) {
          el("vrInput").value = sel;
          val = sel;
        } else if (state.passages && state.passages.length) {
          val = state.passages[0].text;
          el("vrInput").value = val;
        } else if (state.words && state.words.length) {
          val = state.words.slice(0, 10).map(function (w) { return w.w; }).join(", ");
          el("vrInput").value = val;
        } else {
          val = (state.subjectLang === "fr")
            ? "Bonjour! Tapez ou sélectionnez un mot ou une phrase à lire."
            : "Good morning! Please type or select a word or sentence to read.";
          el("vrInput").value = val;
        }
      }
      speak(val, null, el("vrSpeak"));
    };
    var readSelBtn = el("vrReadSel");
    if (readSelBtn) {
      readSelBtn.onclick = function () {
        var sel = getSelectedText();
        if (sel) {
          el("vrInput").value = sel;
          speak(sel, null, readSelBtn);
        } else {
          var msg = (state.subjectLang === "fr")
            ? "Veuillez d'abord sélectionner du texte sur la feuille."
            : "Please highlight or select text on the worksheet first.";
          speak(msg, null, readSelBtn);
        }
      };
    }
    el("vrStop").onclick = stop;
    el("vrInput").addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        el("vrSpeak").click();
      }
    });
    el("vrTabWords").onclick = function () {
      tab = "words";
      el("vrTabWords").className = "on";
      el("vrTabSent").className = "";
      if (el("vrTabPassages")) el("vrTabPassages").className = "";
      renderList();
    };
    el("vrTabSent").onclick = function () {
      tab = "sentences";
      el("vrTabSent").className = "on";
      el("vrTabWords").className = "";
      if (el("vrTabPassages")) el("vrTabPassages").className = "";
      renderList();
    };
    var tabPassages = el("vrTabPassages");
    if (tabPassages) {
      tabPassages.onclick = function () {
        tab = "passages";
        tabPassages.className = "on";
        el("vrTabWords").className = "";
        el("vrTabSent").className = "";
        renderList();
      };
    }
    el("vrList").addEventListener("click", function (e) {
      var btn = e.target.closest ? e.target.closest("[data-say]") : null;
      if (btn) {
        var textToSay = btn.getAttribute("data-say");
        handlePlayClick(btn, textToSay);
      }
    });

    /* Escape closes the panel; the FAB toggles it and the X button closes it */
    documentRef.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && PANEL && !PANEL.hidden) close();
    });

    /* Floating selection pill on doc */
    var selPill = el("vrSelPill");
    if (selPill) {
      selPill.onclick = function (e) {
        e.stopPropagation();
        var sel = getSelectedText();
        if (sel) {
          if (el("vrInput")) el("vrInput").value = sel;
          speak(sel, null, selPill);
        }
        selPill.hidden = true;
      };
    }

    function updateSelectionPill() {
      var pill = el("vrSelPill");
      if (!pill) return;
      var sel = window.getSelection ? window.getSelection() : null;
      var text = sel ? sel.toString().trim() : "";
      if (!text || text.length < 2 || text.length > 2000) {
        pill.hidden = true;
        return;
      }
      try {
        var range = sel.getRangeAt(0);
        var rect = range.getBoundingClientRect();
        if (rect && rect.width > 0 && rect.height > 0) {
          var top = rect.bottom + window.scrollY + 6;
          var left = rect.left + window.scrollX + (rect.width / 2) - 60;
          left = Math.max(10, Math.min(window.innerWidth - 130, left));
          pill.style.position = "absolute";
          pill.style.top = top + "px";
          pill.style.left = left + "px";
          pill.hidden = false;
        }
      } catch (err) {
        pill.hidden = true;
      }
    }

    documentRef.addEventListener("mouseup", function (e) {
      if (e.target && (e.target.closest("#vrPanel") || e.target.closest("#vrFab") || e.target.closest("#vrSelPill"))) {
        return;
      }
      setTimeout(updateSelectionPill, 10);
    });
    documentRef.addEventListener("touchend", function (e) {
      if (e.target && (e.target.closest("#vrPanel") || e.target.closest("#vrFab") || e.target.closest("#vrSelPill"))) {
        return;
      }
      setTimeout(updateSelectionPill, 10);
    });
    documentRef.addEventListener("selectionchange", function () {
      var sel = window.getSelection ? window.getSelection() : null;
      var text = sel ? sel.toString().trim() : "";
      if (!text && el("vrSelPill")) el("vrSelPill").hidden = true;
    });
  }

  function toggle() {
    if (!PANEL) return;
    var open = PANEL.hidden;
    PANEL.hidden = !open;
    if (FAB) {
      FAB.classList.toggle("open", open);
      FAB.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) FAB.classList.remove("speaking");
    }
    if (open) {
      /* refresh the voice list in case voices arrived late */
      primeVoices();
      updateVoiceUsed();
      var sel = getSelectedText();
      var input = el("vrInput");
      if (input) {
        if (sel) input.value = sel;
        input.focus();
      }
    }
  }

  function close() {
    if (!PANEL) return;
    PANEL.hidden = true;
    if (FAB) {
      FAB.classList.remove("open");
      FAB.setAttribute("aria-expanded", "false");
    }
  }

  /* ------------------------------------------------------------------
     Public API used by app.js
     ------------------------------------------------------------------ */
  window.VOICE_READER = {
    loadFromPack: loadFromPack,
    speak: speak,
    stop: stop,
    open: toggle,
    close: close,
    isSpeaking: speaking,
    refresh: loadVoices
  };

  if (documentRef.readyState === "loading") {
    documentRef.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
