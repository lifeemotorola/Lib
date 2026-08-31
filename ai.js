/* ============================================================
   Emmanuel — the platform's AI tutor (served through the Groq API)
   Provides: chat tutor, question generator, explanations
   "Emmanuel" is the user-facing name of the model; the identifier sent to the
   API is kept in MODEL below.
   ============================================================ */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };

  /* ---- Groq API config ---- */
  var GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
  // Llama 3 70B model replaced per Groq deprecation:
  // llama3-70b-8192 decommissioned → openai/gpt-oss-120b (or qwen/qwen3.6-27b)
  var MODEL = "openai/gpt-oss-120b";     /* API identifier */
  var MODEL_NAME = "Emmanuel";           /* name shown to users */

  /* Emmanuel's portrait. build.sh inlines assets/emmanuel.png as a data URI in
     window.EMMANUEL_AVATAR so the single-file deliverable stays offline; when
     running from the unbuilt sources the relative file is used instead. If the
     picture cannot be loaded every avatar falls back to the 🤖 emoji. */
  var AVATAR_SRC = window.EMMANUEL_AVATAR || "assets/emmanuel.png";

  function avatarHTML(cls) {
    return '<img class="ai-avatar ' + cls + '" src="' + AVATAR_SRC + '" alt="' + MODEL_NAME + '">';
  }
  /* swap any portrait that fails to load for the emoji it replaced */
  function wireAvatars(root) {
    if (!root) return;
    var imgs = root.querySelectorAll("img.ai-avatar");
    Array.prototype.forEach.call(imgs, function (img) {
      img.onerror = function () {
        var span = document.createElement("span");
        span.className = img.className.replace("ai-avatar", "").trim();
        span.textContent = "🤖";
        if (img.parentNode) img.parentNode.replaceChild(span, img);
      };
    });
  }
  var STORE_KEY = "lncpg.groq.v1";

  // Support GitHub Actions environment variable: set META tag <meta name="groq-api-key" content="..."> 
  // or expose window.GROQ_API_KEY in GitHub Actions workflow for browser auto-population.
  var apiKey = (function () {
    // Check for GitHub-injected env var via meta tag (common for GitHub Pages)
    var meta = document.querySelector('meta[name="groq-api-key"]');
    if (meta && meta.content) return meta.content.trim();
    // Check for window.GROQ_API_KEY (set by GitHub Actions job)
    if (window.GROQ_API_KEY) return String(window.GROQ_API_KEY).trim();
    // Fall back to stored localStorage key
    try { return localStorage.getItem(STORE_KEY) || ""; } catch (e) {}
    // Fall back to hardcoded default (for local development)
    return "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";
  })();
  var chatHistory = [];     /* {role, content}[] */
  var isOpen = false;
  var isStreaming = false;

  /* ---- persistence ---- */
  function loadKey() {
    try { apiKey = localStorage.getItem(STORE_KEY) || ""; } catch (e) {}
  }
  function saveKey() {
    try { localStorage.setItem(STORE_KEY, apiKey); } catch (e) {}
  }

  /* ---- system prompt: context-aware ---- */
  function systemPrompt() {
    var s = window.PACK_CUR_SUBJECT || "the curriculum";
    var g = window.PACK_CUR_GRADE || "";
    var mode = (typeof window.PACK_MODE === "function") ? window.PACK_MODE() : "teacher";
    return "You are " + MODEL_NAME + ", an expert AI tutor for the Liberian National Curriculum. " +
      "Your name is " + MODEL_NAME + "; if asked who you are, say you are " + MODEL_NAME + ". " +
      "You are currently helping with " + s + (g ? ", Grade " + g : "") + ". " +
      "The user is in " + mode + " mode. " +
      "Be clear, encouraging, and age-appropriate. " +
      "Use examples from Liberian context when possible (local names, places, food, culture). " +
      "For younger grades (1-6), use simpler language. " +
      "For senior high (10-12), you can be more detailed and academic. " +
      "When generating questions, format them clearly with numbers. " +
      "When explaining, break concepts into steps. " +
      "Keep responses focused — usually 2-4 paragraphs unless asked for more. " +
      "If the user asks something unrelated to their studies, gently redirect them.";
  }

  /* ---- Groq API call ---- */
  function callGroq(messages, onChunk, onDone, onError) {
    if (!apiKey) { onError("Please enter your Groq API key in the " + MODEL_NAME + " settings."); return; }
    var body = {
      model: MODEL,
      messages: messages,
      temperature: 0.7,
      max_tokens: 6000,
      stream: true
    };
    var ctrl = new AbortController();
    window._aiAbort = ctrl;

    fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey
      },
      body: JSON.stringify(body),
      signal: ctrl.signal
    }).then(function (resp) {
      if (!resp.ok) {
        return resp.text().then(function (t) {
          var msg = "API error (" + resp.status + ")";
          try { var j = JSON.parse(t); if (j.error && j.error.message) msg = j.error.message; } catch (e) {}
          throw new Error(msg);
        });
      }
      var reader = resp.body.getReader();
      var dec = new TextDecoder();
      var buf = "";
      function pump() {
        reader.read().then(function (r) {
          if (r.done) { onDone(); return; }
          buf += dec.decode(r.value, { stream: true });
          var lines = buf.split("\n");
          buf = lines.pop();
          for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            if (!line || line === "data: [DONE]") continue;
            if (line.indexOf("data: ") === 0) {
              try {
                var d = JSON.parse(line.slice(6));
                var delta = d.choices && d.choices[0] && d.choices[0].delta;
                if (delta && delta.content) onChunk(delta.content);
              } catch (e) { /* skip bad chunks */ }
            }
          }
          pump();
        }).catch(function (e) {
          if (e.name === "AbortError") { onDone(); return; }
          onError(e.message || "Network error");
        });
      }
      pump();
    }).catch(function (e) {
      if (e.name === "AbortError") { onDone(); return; }
      onError(e.message || "Network error");
    });
  }

  /* ---- markdown-lite renderer ---- */
  function renderMd(text) {
    var s = text
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
      .replace(/\*([^*]+)\*/g, "<i>$1</i>")
      .replace(/`([^`]+)`/g, '<code>$1</code>');
    /* numbered lists */
    s = s.replace(/^(\d+)\.\s+(.+)$/gm, '<div class="ai-li"><span class="ai-n">$1.</span> $2</div>');
    /* bullet lists */
    s = s.replace(/^[-•]\s+(.+)$/gm, '<div class="ai-li"><span class="ai-b">•</span> $1</div>');
    /* paragraphs */
    s = s.replace(/\n\n+/g, '</p><p>');
    s = s.replace(/\n/g, "<br>");
    s = "<p>" + s + "</p>";
    s = s.replace(/<p><\/p>/g, "");
    /* headers */
    s = s.replace(/<p>### (.+?)(<br>|<\/p>)/g, '<h4>$1</h4>$2');
    s = s.replace(/<p>## (.+?)(<br>|<\/p>)/g, '<h3>$1</h3>$2');
    return s;
  }

  /* ---- chat panel DOM ---- */
  function buildPanel() {
    if ($("#aiPanel")) return;

    /* Floating toggle button */
    var fab = document.createElement("button");
    fab.id = "aiFab";
    fab.className = "ai-fab";
    fab.innerHTML = avatarHTML("ai-fab-ico") + '<span class="ai-fab-lab">' + MODEL_NAME + '</span>';
    fab.title = "Open " + MODEL_NAME + ", the AI tutor";
    fab.onclick = togglePanel;
    wireAvatars(fab);
    document.body.appendChild(fab);

    /* Chat panel */
    var panel = document.createElement("div");
    panel.id = "aiPanel";
    panel.className = "ai-panel";
    panel.hidden = true;
    panel.innerHTML =
      '<div class="ai-head">' +
        '<div class="ai-head-left">' +
          avatarHTML("ai-head-ico") +
          '<div class="ai-head-txt">' +
            '<b>' + MODEL_NAME + '</b>' +
            '<span class="ai-head-sub">AI tutor · Liberian National Curriculum</span>' +
          '</div>' +
        '</div>' +
        '<div class="ai-head-right">' +
          '<button class="ai-btn-icon" id="aiNewChat" title="New chat">🔄</button>' +
          '<button class="ai-btn-icon" id="aiClose" title="Close">✕</button>' +
        '</div>' +
      '</div>' +
      '<div class="ai-body" id="aiBody">' +
        '<div class="ai-welcome" id="aiWelcome">' +
          '<div class="ai-welcome-ico">' + avatarHTML("ai-welcome-img") + '</div>' +
          '<h3>Hello! I\'m ' + MODEL_NAME + ', your AI tutor</h3>' +
          '<p>I can help you with any subject in the Liberian curriculum. Try asking me to:</p>' +
          '<div class="ai-suggestions">' +
            '<button class="ai-sug" data-q="Explain the key concepts in the current study notes in simple terms">📖 Explain the study notes</button>' +
            '<button class="ai-sug" data-q="Generate 10 practice questions for this subject and grade">📝 Generate practice questions</button>' +
            '<button class="ai-sug" data-q="Create a short quiz with 5 multiple choice questions">❓ Create a quiz</button>' +
            '<button class="ai-sug" data-q="Give me a real-world example from Liberia that relates to this topic">🌍 Give a Liberian example</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="ai-input-wrap">' +
        '<textarea id="aiInput" placeholder="Ask a question about your studies..." rows="1"></textarea>' +
        '<button class="ai-send" id="aiSend" title="Send">➤</button>' +
        '<button class="ai-stop" id="aiStop" title="Stop" style="display:none">⏹</button>' +
      '</div>' +
      '<div class="ai-settings" id="aiSettings" style="display:none">' +
        '<div class="ai-set-head">' +
          '<b>⚙ ' + MODEL_NAME + ' Settings</b>' +
          '<button class="ai-btn-icon ai-set-close" id="aiSetClose">✕</button>' +
        '</div>' +
        '<label class="ai-set-label">Groq API Key' +
          '<input type="password" id="aiKeyInput" placeholder="gsk_...">' +
        '</label>' +
        '<p class="ai-set-hint">Get a free API key at <a href="https://console.groq.com" target="_blank" rel="noopener">console.groq.com</a>. <br>• To auto-load from GitHub: add a <code>&lt;meta name="groq-api-key" content="YOUR_KEY"</code> tag to your HTML, or set <code>window.GROQ_API_KEY</code> in your GitHub Actions workflow. <br>• Key is also saved to localStorage on this device for future sessions.</p>' +
        '<button class="ai-set-save" id="aiKeySave">Save Key</button>' +
      '</div>' +
      '<div class="ai-foot">' +
        '<button class="ai-foot-btn" id="aiSetBtn">⚙ Settings</button>' +
        '<span class="ai-foot-status" id="aiStatus"></span>' +
      '</div>';
    wireAvatars(panel);
    document.body.appendChild(panel);
    wirePanel();
  }

  function togglePanel() {
    isOpen = !isOpen;
    var p = $("#aiPanel"), f = $("#aiFab");
    if (p) p.hidden = !isOpen;
    if (f) f.classList.toggle("open", isOpen);
    if (isOpen) {
      var inp = $("#aiInput");
      if (inp) setTimeout(function () { inp.focus(); }, 100);
    }
  }

  function setStatus(txt) {
    var s = $("#aiStatus");
    if (s) s.textContent = txt || "";
  }

  function addMessage(role, content) {
    var body = $("#aiBody");
    if (!body) return null;
    /* hide welcome on first message */
    var w = $("#aiWelcome");
    if (w) w.style.display = "none";

    var msg = document.createElement("div");
    msg.className = "ai-msg ai-msg-" + role;
    if (role !== "user") {
      var av = document.createElement("span");
      av.className = "ai-msg-ico";
      av.innerHTML = avatarHTML("ai-msg-img");
      wireAvatars(av);
      msg.appendChild(av);
    }
    var bubble = document.createElement("div");
    bubble.className = "ai-bubble";
    if (role === "user") {
      bubble.textContent = content;
    } else {
      bubble.innerHTML = renderMd(content);
    }
    msg.appendChild(bubble);
    body.appendChild(msg);
    body.scrollTop = body.scrollHeight;
    return bubble;
  }

  function appendToBubble(bubble, text) {
    if (!bubble) return;
    bubble._raw = (bubble._raw || "") + text;
    bubble.innerHTML = renderMd(bubble._raw);
    var body = $("#aiBody");
    if (body) body.scrollTop = body.scrollHeight;
  }

  function send() {
    var inp = $("#aiInput");
    if (!inp) return;
    var text = inp.value.trim();
    if (!text || isStreaming) return;

    if (!apiKey) {
      addMessage("assistant", "⚠️ Please set your Groq API key first. Click **⚙ Settings** at the bottom of this panel, then paste your key.\n\nGet a free key at [console.groq.com](https://console.groq.com).");
      return;
    }

    addMessage("user", text);
    inp.value = "";
    inp.style.height = "auto";

    chatHistory.push({ role: "user", content: text });

    var msgs = [{ role: "system", content: systemPrompt() }].concat(chatHistory);
    var bubble = addMessage("assistant", "");

    isStreaming = true;
    showStreaming(true);
    setStatus("Thinking...");

    callGroq(msgs,
      function (chunk) {
        setStatus("Typing...");
        appendToBubble(bubble, chunk);
      },
      function () {
        isStreaming = false;
        showStreaming(false);
        setStatus("");
        if (bubble && bubble._raw) {
          chatHistory.push({ role: "assistant", content: bubble._raw });
        }
        /* Keep history manageable */
        if (chatHistory.length > 20) chatHistory = chatHistory.slice(-16);
      },
      function (err) {
        isStreaming = false;
        showStreaming(false);
        setStatus("");
        if (bubble) {
          bubble.innerHTML = '<span class="ai-err">⚠️ ' + esc(err) + '</span>';
        }
      }
    );
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function showStreaming(on) {
    var s = $("#aiSend"), t = $("#aiStop");
    if (s) s.style.display = on ? "none" : "";
    if (t) t.style.display = on ? "" : "none";
  }

  function stopStream() {
    if (window._aiAbort) {
      window._aiAbort.abort();
      window._aiAbort = null;
    }
  }

  function newChat() {
    chatHistory = [];
    var body = $("#aiBody");
    if (body) {
      body.innerHTML = "";
      var w = document.createElement("div");
      w.className = "ai-welcome";
      w.id = "aiWelcome";
      w.innerHTML =
        '<div class="ai-welcome-ico">🤖</div>' +
        '<h3>Chat cleared!</h3>' +
        '<p>Ask me anything about the Liberian curriculum.</p>' +
        '<div class="ai-suggestions">' +
          '<button class="ai-sug" data-q="Explain the key concepts in the current study notes in simple terms">📖 Explain the study notes</button>' +
          '<button class="ai-sug" data-q="Generate 10 practice questions for this subject and grade">📝 Generate practice questions</button>' +
          '<button class="ai-sug" data-q="Create a short quiz with 5 multiple choice questions">❓ Create a quiz</button>' +
          '<button class="ai-sug" data-q="Give me a real-world example from Liberia that relates to this topic">🌍 Give a Liberian example</button>' +
        '</div>';
      body.appendChild(w);
      wireSuggestionClicks();
    }
    setStatus("");
  }

  function wirePanel() {
    var closeBtn = $("#aiClose");
    if (closeBtn) closeBtn.onclick = togglePanel;

    var newBtn = $("#aiNewChat");
    if (newBtn) newBtn.onclick = newChat;

    var sendBtn = $("#aiSend");
    if (sendBtn) sendBtn.onclick = send;

    var stopBtn = $("#aiStop");
    if (stopBtn) stopBtn.onclick = stopStream;

    var inp = $("#aiInput");
    if (inp) {
      inp.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
      });
      inp.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = Math.min(this.scrollHeight, 120) + "px";
      });
    }

    /* settings panel */
    var setBtn = $("#aiSetBtn");
    var setPanel = $("#aiSettings");
    var setClose = $("#aiSetClose");
    if (setBtn && setPanel) {
      setBtn.onclick = function () {
        setPanel.style.display = setPanel.style.display === "none" ? "" : "none";
        var ki = $("#aiKeyInput");
        if (ki) ki.value = apiKey;
      };
    }
    if (setClose && setPanel) {
      setClose.onclick = function () { setPanel.style.display = "none"; };
    }
    var keySave = $("#aiKeySave");
    if (keySave) {
      keySave.onclick = function () {
        var ki = $("#aiKeyInput");
        apiKey = ki ? ki.value.trim() : "";
        saveKey();
        setStatus(apiKey ? "✓ Key saved" : "No key set");
        if (setPanel) setPanel.style.display = "none";
        setTimeout(function () { setStatus(""); }, 2000);
      };
    }

    wireSuggestionClicks();
  }

  function wireSuggestionClicks() {
    document.querySelectorAll(".ai-sug").forEach(function (btn) {
      btn.onclick = function () {
        var q = btn.getAttribute("data-q");
        var inp = $("#aiInput");
        if (inp && q) { inp.value = q; send(); }
      };
    });
  }

  /* ---- explain / generate / quiz helpers, callable from anywhere ---- */
  window.AI_EXPLAIN = function (text) {
    if (!isOpen) togglePanel();
    var inp = $("#aiInput");
    if (inp) {
      inp.value = "Please explain this in simple terms:\n\n" + text;
      send();
    }
  };

  /* ---- "Generate Questions" — called from rendered pages ---- */
  window.AI_GENERATE_QUESTIONS = function (subject, grade, topic, count) {
    if (!isOpen) togglePanel();
    var inp = $("#aiInput");
    if (inp) {
      inp.value = "Generate " + (count || 10) + " practice questions about " +
        (topic || subject) + " for Grade " + grade +
        ". Mix question types: short answer, multiple choice, and true/false. Include answers at the end.";
      send();
    }
  };

  /* ---- "Quiz Me" ---- */
  window.AI_QUIZ = function (subject, grade, topic) {
    if (!isOpen) togglePanel();
    var inp = $("#aiInput");
    if (inp) {
      inp.value = "Create a 5-question multiple choice quiz about " +
        (topic || subject) + " for Grade " + grade +
        ". Each question should have 4 options (A-D). Show the answers at the very end only.";
      send();
    }
  };

  /* ---- init ---- */
  function init() {
    loadKey();
    buildPanel();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
