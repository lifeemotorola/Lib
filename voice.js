/* ============================================================
   VOICE READER — pronounce difficult words & read sentences
   -----------------------------------------------------------------
   A floating "voice reader" that uses the browser's built-in Web
   Speech API (speechSynthesis). It reads a difficult word from the
   current subject, or a sentence, out loud. Because it uses the
   on-device voices there is NO network call and NO API key, so it
   works from a USB stick, offline, and behind any firewall.

   Customisation:
     - Person (Auto / Man / Woman)
     - Accent (including African English: Nigeria, Ghana, Kenya,
       South Africa, Liberia, Tanzania, plus US, UK, Australian,
       and French for the French subject)
     - Speed (rate) and Pitch

   It is deliberately OUTSIDE the printable session: the button and
   panel are hidden by @media print in styles.css, and it never
   injects a button into the generated sheets (.page/.pbody). The
   sheet content the teacher prints stays completely untouched.

   app.js calls window.VOICE_READER.loadFromPack(pack, subjectId,
   subjectLabel, grade) so the panel is populated with the words and
   sentences of whatever pack is on screen.
   ============================================================ */
(function () {
  "use strict";
  if (!("speechSynthesis" in window)) return;  /* browser can't speak: keep it absent */
  var syn = window.speechSynthesis;
  var Suffix = window.SpeechSynthesisUtterance;
  if (!Suffix) return;
  var documentRef = document;

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
  state.manualVoice = typeof state.manualVoice === "string" ? state.manualVoice : "";

  var voicesCache = [];
  function loadVoices() {
    voicesCache = syn.getVoices() || [];
    populateVoiceSelect();
    updateVoiceUsed();
  }
  if (typeof syn.onvoiceschanged !== "undefined") syn.onvoiceschanged = loadVoices;

  function pickVoice() {
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
     DOM — the floating button and panel are created here so body.html
     stays clean and the reader can be centred in its own module.
     ------------------------------------------------------------------ */
  function el(id) { return documentRef.getElementById(id); }

  var panelHTML =
    '<button class="vr-fab" id="vrFab" type="button" aria-label="Open voice reader" aria-expanded="false">' +
      '<svg class="ic" aria-hidden="true"><use href="#i-voice"/></svg>' +
      '<span class="vr-fab-lab">Voice reader</span>' +
    '</button>' +
    '<div class="vr-panel" id="vrPanel" role="dialog" aria-label="Voice reader" hidden>' +
      '<div class="vr-head">' +
        '<div class="vr-head-txt">' +
          '<svg class="ic" aria-hidden="true"><use href="#i-voice"/></svg>' +
          '<span><b>Voice reader</b><span class="vr-head-sub">Pronounce words &amp; read sentences</span></span>' +
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
          '<label for="vrInput">Type a word or sentence</label>' +
          '<textarea id="vrInput" rows="2" placeholder="e.g. haemoglobin — &#39;hem&#45;uh&#45;GLOH&#45;bin&#39;">' +
          '<div class="vr-txt-actions">' +
            '<button type="button" class="b1" id="vrSpeak"><svg class="ic" aria-hidden="true"><use href="#i-voice"/></svg><span>&nbsp; Speak</span></button>' +
            '<button type="button" class="b2" id="vrStop" hidden><svg class="ic" aria-hidden="true"><use href="#i-stop"/></svg><span>&nbsp; Stop</span></button>' +
          '</div>' +
        '</div>' +

        '<div class="vr-sec" id="vrPackSec" hidden>' +
          '<div class="vr-sec-head"><b>From this pack</b><span class="vr-pack-name" id="vrPackName"></span></div>' +
          '<div class="vr-tabs">' +
            '<button type="button" id="vrTabWords" class="on">Difficult words</button>' +
            '<button type="button" id="vrTabSent">Sentences</button>' +
          '</div>' +
          '<div class="vr-list" id="vrList"></div>' +
          '<p class="vr-note" id="vrPackNote"></p>' +
        '</div>' +

        '<p class="vr-note" id="vrNote">Reads with the voice your device provides, so you can hear a word or sentence spoken. There is no internet call — the browser&#39;s own speech engine does it, so it works offline. Africans voices are used when your device has one installed.</p>' +
      '</div>' +
    '</div>';

  var FAB = null, PANEL = null;

  function build() {
    var host = documentRef.createElement("div");
    host.style.display = "contents";            /* keep the two fixed nodes separate */
    host.innerHTML = panelHTML;
    documentRef.body.appendChild(host);
    FAB = el("vrFab");
    PANEL = el("vrPanel");

    /* ---- accent options ---- */
    var accentSel = el("vrAccent");
    for (var i = 0; i < ACCENTS.length; i++) {
      var o = documentRef.createElement("option");
      o.value = ACCENTS[i].id;
      o.textContent = ACCENTS[i].label;
      accentSel.appendChild(o);
    }
    accentSel.value = state.accent;

    /* gender */
    setGender(state.gender);
    el("vrRate").value = state.rate;
    el("vrPitch").value = state.pitch;
    el("vrRateVal").textContent = fmtRate(state.rate);
    el("vrPitchVal").textContent = fmtNum(state.pitch);

    wire();
    loadVoices();
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
    /* sort by language then name for a tidy list */
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
    } else if (syn.getVoices().length) {
      t.textContent = "Default voice";
    } else {
      t.textContent = "No voice found";
    }
  }

  /* ------------------------------------------------------------------
     Speaking
     ------------------------------------------------------------------ */
  function speaking() { return syn.speaking || syn.pending; }

  function speak(text) {
    text = String(text == null ? "" : text).trim();
    if (!text) return;
    if (!Suffix) return;
    syn.cancel();
    var u = new Suffix(text);
    var v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang || u.lang; }
    else {
      u.lang = state.subjectLang === "fr" ? "fr-FR" : "en-US";
    }
    u.rate = clamp(state.rate, 0.5, 1.6);
    u.pitch = clamp(state.pitch, 0.5, 1.5);
    u.onstart = function () { if (FAB) FAB.classList.add("speaking"); setSpeakingUI(true); };
    u.onend = function () { if (FAB) FAB.classList.remove("speaking"); setSpeakingUI(false); };
    u.onerror = function () { if (FAB) FAB.classList.remove("speaking"); setSpeakingUI(false); };
    syn.speak(u);
  }
  function stop() {
    syn.cancel();
    if (FAB) FAB.classList.remove("speaking");
    setSpeakingUI(false);
  }
  function clamp(n, lo, hi) { n = +n; return isNaN(n) ? lo : (n < lo ? lo : n > hi ? hi : n); }

  function setSpeakingUI(on) {
    var sp = el("vrSpeak"), st = el("vrStop");
    if (sp) sp.hidden = on;
    if (st) st.hidden = !on;
  }

  /* ------------------------------------------------------------------
     Word / sentence list from the generated pack.
     ------------------------------------------------------------------ */
  function collect(topics) {
    var words = [], wSeen = {};
    var sentences = [], sSeen = {};
    function addWord(w, src) {
      w = String(w == null ? "" : w).trim();
      if (!w || w.length > 40) return;
      var k = w.toLowerCase();
      if (wSeen[k]) return;
      wSeen[k] = 1;
      words.push({ w: w, src: src || "" });
    }
    function addSentence(s, src) {
      s = String(s == null ? "" : s).replace(/\s+/g, " ").trim();
      if (!s || s.length < 6 || s.length > 320) return;
      var k = s.toLowerCase();
      if (sSeen[k]) return;
      sSeen[k] = 1;
      sentences.push({ t: s, src: src || "" });
    }
    Array.prototype.forEach.call(topics || [], function (t) {
      var unit = t.title || "";
      (t.words || []).forEach(function (v) {
        addWord(v.w, unit);
        addWord(v.s, unit);
        addSentence(v.x, unit);
        addSentence(v.d, unit);
      });
      (t.terms || []).forEach(function (v) {
        addWord(v.t, unit);
        addSentence(v.x, unit);
        addSentence(v.d, unit);
      });
      (t.vocab || []).forEach(function (v) {
        addWord(v.fr, unit);
        addWord(v.en, unit);
        addSentence(v.fr, unit);
        addSentence(v.en, unit);
      });
      (t.sight || []).forEach(function (v) { addWord(v, unit); });
      (t.phonics || []).forEach(function (p) {
        (p.words || []).forEach(function (w) { addWord(w, unit); });
      });
      if (t.focus) t.focus.forEach(function (f) { addWord(f, unit); });
      if (t.passage && t.passage.text) addSentence(t.passage.text, unit);
      if (t.passage && t.passage.qs) t.passage.qs.forEach(function (q) {
        addSentence(q.q, unit); addSentence(q.a, unit);
      });
      (t.facts || []).forEach(function (f) { addSentence(f.q, unit); addSentence(f.a, unit); });
      (t.tf || []).forEach(function (f) { addSentence(f.s, unit); addSentence(f.why, unit); });
      (t.worked || []).forEach(function (w) { addSentence(w.q, unit); addSentence(w.a, unit); });
      (t.word || []).forEach(function (w) { addSentence(w.q, unit); addSentence(w.a, unit); });
      (t.drill || []).forEach(function (w) { addSentence(w.q, unit); addSentence(w.a, unit); });
    });
    return { words: words, sentences: sentences };
  }

  function loadFromPack(pack, subjectId, subjectLabel, grade) {
    state.subjectLang = subjectId === "fr" ? "fr" : "en";
    state.subjectName = subjectLabel || "";
    state.subjectGrade = grade ? ("Grade " + grade) : "";
    var col = collect(pack && pack.topics);
    state.words = col.words.slice(0, 120);
    state.sentences = col.sentences.slice(0, 120);
    state.packLoaded = true;
    /* When the accent is "Auto" the picker follows the subject automatically
       (French for French, African English for the rest) via state.subjectLang,
       so the dropdown can keep honestly showing "Auto — match the subject". */
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
      if (note) note.textContent =
        state.words.length + " words · " + state.sentences.length + " sentences from the current pack.";
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
      } else {
        if (!state.sentences.length) {
          html = '<div class="vr-empty">No sentences in this pack — type one above and press Speak.</div>';
        } else {
          html = state.sentences.map(function (s) {
            return '<button type="button" class="vr-sent" data-say="' + escAttr(s.t) + '">' +
              '<svg class="ic" aria-hidden="true"><use href="#i-play"/></svg><span class="t">' + escHtml(s.t) + '</span></button>';
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
    accentSel.onchange = function () { state.accent = accentSel.value; saveSettings(); updateVoiceUsed(); };
    var voiceSel = el("vrVoice");
    voiceSel.onchange = function () { state.manualVoice = voiceSel.value; saveSettings(); updateVoiceUsed(); };
    el("vrGender").addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("button") : null;
      if (!b) return;
      setGender(b.getAttribute("data-g"));
      saveSettings(); updateVoiceUsed();
    });
    var rate = el("vrRate");
    rate.oninput = function () { state.rate = +rate.value; el("vrRateVal").textContent = fmtRate(state.rate); saveSettings(); };
    var pitch = el("vrPitch");
    pitch.oninput = function () { state.pitch = +pitch.value; el("vrPitchVal").textContent = fmtNum(state.pitch); saveSettings(); };
    el("vrTest").onclick = function () {
      speak(state.subjectLang === "fr"
        ? "Bonjour. Comment allez-vous aujourd'hui ?"
        : "Good morning! This is how your voice reader will pronounce words for you.");
    };
    el("vrSpeak").onclick = function () { speak(el("vrInput").value); };
    el("vrStop").onclick = stop;
    el("vrInput").addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); speak(el("vrInput").value); }
    });
    el("vrTabWords").onclick = function () { tab = "words"; el("vrTabWords").className = "on"; el("vrTabSent").className = ""; renderList(); };
    el("vrTabSent").onclick = function () { tab = "sentences"; el("vrTabSent").className = "on"; el("vrTabWords").className = ""; renderList(); };
    el("vrList").addEventListener("click", function (e) {
      var btn = e.target.closest ? e.target.closest("[data-say]") : null;
      if (btn) speak(btn.getAttribute("data-say"));
    });

    /* Escape closes the panel; the FAB toggles it and the X button closes it */
    documentRef.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && PANEL && !PANEL.hidden) close();
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
      loadVoices();
      updateVoiceUsed();
      var input = el("vrInput");
      if (input) input.focus();
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
    isSpeaking: speaking,
    refresh: loadVoices
  };

  if (documentRef.readyState === "loading") {
    documentRef.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
