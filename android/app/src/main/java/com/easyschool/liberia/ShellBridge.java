package com.easyschool.liberia;

import android.content.pm.PackageInfo;
import android.os.Build;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

import org.json.JSONObject;

/**
 * The object the page sees as {@code window.AndroidShell}.
 *
 * <p>Only the primitives the platform cannot do in a WebView live here:
 * printing, saving a generated .docx, picking a file and text-to-speech.
 * Everything else is the platform's own JavaScript.
 *
 * <p>These methods are called on a WebView worker thread, never on the UI
 * thread, so anything touching a View is posted to the main thread.
 */
final class ShellBridge {

    private static final String TAG = "EasySchool";

    private final MainActivity host;
    private final AssetServer assets;
    private final DownloadStore downloads;
    private TtsSpeaker tts;

    ShellBridge(MainActivity host, DownloadStore downloads) {
        this.host = host;
        this.assets = new AssetServer(host.getAssets());
        this.downloads = downloads;
    }

    void attachTts(TtsSpeaker speaker) {
        this.tts = speaker;
    }

    AssetServer assets() {
        return assets;
    }

    void shutdown() {
        downloads.closeAll();
    }

    /* ---------------------------------------------------------------- */
    /* About the app                                                     */
    /* ---------------------------------------------------------------- */

    @JavascriptInterface
    public String appInfo() {
        JSONObject out = new JSONObject();
        try {
            out.put("platform", "android");
            out.put("sdk", Build.VERSION.SDK_INT);
            out.put("package", host.getPackageName());
            PackageInfo info = host.getPackageManager().getPackageInfo(host.getPackageName(), 0);
            out.put("versionName", info.versionName == null ? "" : info.versionName);
            out.put("versionCode", Build.VERSION.SDK_INT >= 28 ? info.getLongVersionCode() : info.versionCode);
        } catch (Throwable t) {
            Log.w(TAG, "appInfo", t);
        }
        return out.toString();
    }

    @JavascriptInterface
    public void toast(final String message) {
        if (message == null || message.trim().isEmpty()) return;
        host.runOnUiThread(new Runnable() {
            @Override public void run() {
                Toast.makeText(host, message, Toast.LENGTH_SHORT).show();
            }
        });
    }

    @JavascriptInterface
    public void openExternal(String url) {
        host.openExternal(url);
    }

    /* ---------------------------------------------------------------- */
    /* Printing                                                          */
    /* ---------------------------------------------------------------- */

    @JavascriptInterface
    public void print(String jobTitle) {
        host.printDocument(jobTitle);
    }

    /* ---------------------------------------------------------------- */
    /* Saving a generated file                                           */
    /* ---------------------------------------------------------------- */

    @JavascriptInterface
    public String startDownload(String name, String mime, double totalBytes) {
        return downloads.start(name, mime, (long) totalBytes);
    }

    @JavascriptInterface
    public boolean appendDownload(String handle, String base64) {
        return downloads.append(handle, base64);
    }

    @JavascriptInterface
    public String finishDownload(String handle) {
        return downloads.finish(handle);
    }

    @JavascriptInterface
    public void cancelDownload(String handle) {
        downloads.cancel(handle);
    }

    /* ---------------------------------------------------------------- */
    /* Speech                                                            */
    /* ---------------------------------------------------------------- */

    @JavascriptInterface
    public boolean ttsAvailable() {
        return tts != null && tts.isReady();
    }

    @JavascriptInterface
    public String ttsVoices() {
        return tts == null ? "[]" : tts.voicesJson();
    }

    @JavascriptInterface
    public void ttsSpeak(String id, String text, String lang, String voice,
                         double rate, double pitch, double volume) {
        if (tts == null) return;
        tts.speak(id, text, lang, voice, (float) rate, (float) pitch, (float) volume);
    }

    @JavascriptInterface
    public void ttsStop() {
        if (tts != null) tts.stop();
    }
}
