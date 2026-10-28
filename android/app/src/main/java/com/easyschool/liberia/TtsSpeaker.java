package com.easyschool.liberia;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.speech.tts.Voice;
import android.util.Log;
import android.webkit.WebView;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Set;

/**
 * The voice reader, spoken by the phone instead of by the browser.
 *
 * <p>Android's WebView does not implement the Web Speech synthesis API, so the
 * platform's "voice reader" would fall silent in the APK. shell.js therefore
 * replaces {@code window.speechSynthesis} and {@code SpeechSynthesisUtterance}
 * with a small shim that calls this class, which drives the device's own
 * text-to-speech engine. Offline voices, the teacher's installed accents and
 * the Man/Woman choice in the panel all keep working.
 */
final class TtsSpeaker implements TextToSpeech.OnInitListener {

    private static final String TAG = "EasySchoolTts";

    private final WebView web;
    private final Handler main = new Handler(Looper.getMainLooper());
    private TextToSpeech tts;
    private volatile boolean ready;

    /**
     * Utterances handed over before the engine finished starting. The page is
     * live long before Android has bound the speech service, and a reader that
     * is told "unsupported" at that moment stays silent for the whole session,
     * so the first words are held here instead.
     */
    private final List<Pending> buffered =
            Collections.synchronizedList(new ArrayList<Pending>());
    private static final int MAX_BUFFERED = 8;

    TtsSpeaker(WebView web) {
        this.web = web;
        try {
            tts = new TextToSpeech(web.getContext().getApplicationContext(), this);
        } catch (Throwable t) {
            Log.w(TAG, "no text-to-speech engine on this device", t);
        }
    }

    @Override
    public void onInit(int status) {
        final boolean ok = status == TextToSpeech.SUCCESS && tts != null;
        ready = ok;
        if (ok) {
            try {
                tts.setOnUtteranceProgressListener(progress);
            } catch (Throwable t) {
                Log.w(TAG, "cannot observe utterances", t);
            }
        }
        main.post(new Runnable() {
            @Override public void run() {
                if (ok) flush();
                else failBuffered();
                notifyVoices();
            }
        });
    }

    /**
     * The page asks whether speech is available before the engine has bound.
     * Answer optimistically — the engine object exists, so anything spoken now
     * is buffered and played the moment it is ready, which is what the reader
     * needs to keep its panel instead of showing "not supported".
     */
    boolean isReady() {
        return tts != null;
    }

    private void flush() {
        List<Pending> waiting;
        synchronized (buffered) {
            waiting = new ArrayList<Pending>(buffered);
            buffered.clear();
        }
        for (Pending item : waiting) item.run();
    }

    private void failBuffered() {
        List<Pending> waiting;
        synchronized (buffered) {
            waiting = new ArrayList<Pending>(buffered);
            buffered.clear();
        }
        for (Pending item : waiting) postEvent(item.id, "error");
    }

    /* ---------------------------------------------------------------- */
    /* Voices                                                            */
    /* ---------------------------------------------------------------- */

    String voicesJson() {
        JSONArray out = new JSONArray();
        if (!ready || tts == null) return out.toString();
        Set<Voice> voices;
        try {
            voices = tts.getVoices();
        } catch (Throwable t) {
            Log.w(TAG, "getVoices", t);
            return out.toString();
        }
        if (voices == null) return out.toString();
        for (Voice voice : voices) {
            if (voice == null) continue;
            try {
                Locale locale = voice.getLocale();
                JSONObject item = new JSONObject();
                item.put("name", label(voice, locale));
                item.put("lang", locale == null ? "" : locale.toLanguageTag());
                item.put("voiceURI", "android:" + voice.getName());
                item.put("localService", !voice.isNetworkConnectionRequired());
                item.put("default", false);
                out.put(item);
            } catch (Throwable ignored) {
                /* one odd voice must not hide the rest */
            }
        }
        return out.toString();
    }

    /**
     * The label is what the teacher reads in the voice list. The words
     * "female" and "male" are spelled out because the platform's own voice
     * chooser looks for them when it filters Man / Woman.
     */
    private static String label(Voice voice, Locale locale) {
        StringBuilder sb = new StringBuilder();
        if (locale != null) sb.append(locale.getDisplayName());
        if (sb.length() == 0) sb.append(voice.getName());
        String gender = "";
        try {
            Set<String> features = voice.getFeatures();
            if (features != null) {
                for (String feature : features) {
                    if (feature == null) continue;
                    String value = feature.toLowerCase(Locale.US);
                    if (value.equals("female")) gender = "female";
                    else if (value.equals("male")) gender = "male";
                }
            }
        } catch (Throwable ignored) {
        }
        if (!gender.isEmpty()) sb.append(" \u00b7 ").append(gender);
        if (voice.isNetworkConnectionRequired()) sb.append(" (online)");
        return sb.toString();
    }

    private void notifyVoices() {
        eval("window.__androidTtsVoices&&window.__androidTtsVoices();");
    }

    /* ---------------------------------------------------------------- */
    /* Speaking                                                          */
    /* ---------------------------------------------------------------- */

    void speak(final String id, final String text, final String lang, final String voiceName,
               final float rate, final float pitch, float unusedVolume) {
        if (id == null) return;
        if (text == null || text.trim().isEmpty()) {
            postEvent(id, "end");
            return;
        }
        if (tts == null) {
            postEvent(id, "error");
            return;
        }
        if (!ready) {
            synchronized (buffered) {
                if (buffered.size() < MAX_BUFFERED) {
                    buffered.add(new Pending(id) {
                        @Override void run() { speak(id, text, lang, voiceName, rate, pitch, 1f); }
                    });
                } else {
                    postEvent(id, "error");
                }
            }
            return;
        }
        try {
            Voice voice = findVoice(voiceName);
            if (voice != null) {
                tts.setVoice(voice);
            } else if (lang != null && !lang.isEmpty()) {
                /* Missing data for this language is not fatal: the engine keeps
                   its current voice and still speaks, which is what a reader
                   with a single installed language needs. */
                tts.setLanguage(Locale.forLanguageTag(lang));
            }
            tts.setSpeechRate(clamp(rate, 0.5f, 2.0f));
            tts.setPitch(clamp(pitch, 0.5f, 2.0f));
            int result = tts.speak(text, TextToSpeech.QUEUE_ADD, (Bundle) null, id);
            if (result != TextToSpeech.SUCCESS) postEvent(id, "error");
        } catch (Throwable t) {
            Log.w(TAG, "speak", t);
            postEvent(id, "error");
        }
    }

    void stop() {
        synchronized (buffered) {
            /* a stop is also "forget what has not been spoken yet" */
            buffered.clear();
        }
        try {
            if (tts != null) tts.stop();
        } catch (Throwable ignored) {
        }
    }

    void shutdown() {
        stop();
        try {
            if (tts != null) tts.shutdown();
        } catch (Throwable ignored) {
        }
        tts = null;
        ready = false;
    }

    private Voice findVoice(String name) {
        if (name == null || name.isEmpty() || tts == null) return null;
        try {
            Set<Voice> voices = tts.getVoices();
            if (voices == null) return null;
            for (Voice voice : voices) {
                if (voice != null && name.equals(voice.getName())) return voice;
            }
        } catch (Throwable ignored) {
        }
        return null;
    }

    /** One utterance held until the engine is up. */
    private abstract static class Pending {
        final String id;

        Pending(String id) {
            this.id = id;
        }

        abstract void run();
    }

    private static float clamp(float value, float min, float max) {
        if (Float.isNaN(value)) return 1f;
        return Math.max(min, Math.min(max, value));
    }

    /* ---------------------------------------------------------------- */
    /* Events back into the page                                         */
    /* ---------------------------------------------------------------- */

    private final UtteranceProgressListener progress = new UtteranceProgressListener() {
        @Override public void onStart(String utteranceId) {
            postEvent(utteranceId, "start");
        }

        @Override public void onDone(String utteranceId) {
            postEvent(utteranceId, "end");
        }

        @Override public void onError(String utteranceId) {
            postEvent(utteranceId, "error");
        }

        @Override public void onStop(String utteranceId, boolean interrupted) {
            postEvent(utteranceId, "error");
        }
    };

    private void postEvent(String id, String kind) {
        if (id == null) return;
        eval("window.__androidTtsEvent&&window.__androidTtsEvent("
                + JSONObject.quote(id) + "," + JSONObject.quote(kind) + ");");
    }

    private void eval(final String js) {
        main.post(new Runnable() {
            @Override public void run() {
                try {
                    if (web != null) web.evaluateJavascript(js, null);
                } catch (Throwable ignored) {
                }
            }
        });
    }
}
