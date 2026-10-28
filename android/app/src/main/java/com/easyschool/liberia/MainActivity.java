package com.easyschool.liberia;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintManager;
import android.util.Log;
import android.view.View;
import android.webkit.ConsoleMessage;
import android.webkit.DownloadListener;
import android.webkit.JsResult;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

/**
 * The one screen of the Android app: the offline Easy School Liberia platform
 * in a WebView, plus the handful of things a web page cannot do by itself —
 * printing, saving a .docx into Downloads, picking a logo from the device and
 * speaking through the system text-to-speech engine.
 *
 * <p>The page itself is byte-for-byte the platform that ships on GitHub Pages
 * and on USB sticks; {@code android/web/shell/shell.js} bridges the two and is
 * injected at build time.
 */
public class MainActivity extends Activity {

    private static final String TAG = "EasySchool";
    private static final String HOME = AssetServer.ORIGIN + "/index.html";

    private static final int REQ_PICK_FILE = 4101;
    private static final int REQ_STORAGE = 4102;

    private static final long EXIT_WINDOW_MS = 2500L;

    private WebView web;
    private View splash;
    private ShellBridge bridge;
    private TtsSpeaker tts;
    private ValueCallback<Uri[]> fileCallback;
    private long lastBackAt = 0L;
    private boolean splashGone = false;
    private boolean loadErrorShown = false;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        setContentView(R.layout.activity_main);

        web = (WebView) findViewById(R.id.web);
        splash = findViewById(R.id.splash);

        configureWebView();

        DownloadStore downloads = new DownloadStore(this);
        bridge = new ShellBridge(this, downloads);
        tts = new TtsSpeaker(web);
        bridge.attachTts(tts);

        web.addJavascriptInterface(bridge, "AndroidShell");

        registerBackCallback();

        if (state != null && web.restoreState(state) != null) {
            /* Coming back from a process death: the platform restores the
               teacher's settings and library from localStorage/IndexedDB. */
            hideSplash();
        } else {
            web.loadUrl(HOME);
        }

        /* Never leave a splash on screen because a page event went missing. */
        web.postDelayed(new Runnable() {
            @Override public void run() { hideSplash(); }
        }, 12000L);
    }

    /* ------------------------------------------------------------------ */
    /* WebView plumbing                                                   */
    /* ------------------------------------------------------------------ */

    @SuppressWarnings("deprecation")
    private void configureWebView() {
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);
        s.setJavaScriptCanOpenWindowsAutomatically(false);
        s.setSupportMultipleWindows(false);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setUseWideViewPort(true);
        s.setLoadWithOverviewMode(false);
        s.setSupportZoom(true);
        s.setBuiltInZoomControls(true);
        s.setDisplayZoomControls(false);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        /* The sheets are a fixed A4 size; letting the system font scale stretch
           them would break every page break. The platform has its own font-size
           control for readers who need larger text. */
        s.setTextZoom(100);
        if (Build.VERSION.SDK_INT >= 29) {
            try {
                s.setForceDark(WebSettings.FORCE_DARK_OFF);
            } catch (Throwable ignored) {
                /* some OEM WebViews do not implement it; light is the default */
            }
        }

        web.setBackgroundColor(0xFFE9EEF7);      /* the platform's page colour */
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        web.setWebViewClient(new ShellClient());
        web.setWebChromeClient(new ShellChrome());
        web.setDownloadListener(new DownloadListener() {
            @Override
            public void onDownloadStart(String url, String userAgent,
                                        String contentDisposition, String mimeType,
                                        long contentLength) {
                /* Every export the platform makes is a blob: URL, which reaches
                   the bridge through shell.js. A real http(s) link is somebody
                   else's file: hand it to the browser, which knows how to
                   download it. */
                if (url != null && (url.startsWith("http://") || url.startsWith("https://"))) {
                    openExternal(url);
                }
            }
        });

        if (isDebuggable()) {
            WebView.setWebContentsDebuggingEnabled(true);
        }
    }

    private boolean isDebuggable() {
        return (getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0;
    }

    private final class ShellClient extends WebViewClient {

        @Override
        public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
            Uri uri = request == null ? null : request.getUrl();
            String url = uri == null ? null : uri.toString();
            if (AssetServer.handles(url)) {
                return bridge.assets().open(url);
            }
            return null;
        }

        @SuppressWarnings("deprecation")
        @Override
        public WebResourceResponse shouldInterceptRequest(WebView view, String url) {
            if (AssetServer.handles(url)) return bridge.assets().open(url);
            return null;
        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            Uri uri = request == null ? null : request.getUrl();
            return routeExternal(uri == null ? null : uri.toString());
        }

        @SuppressWarnings("deprecation")
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            return routeExternal(url);
        }

        @Override
        public void onPageCommitVisible(WebView view, String url) {
            hideSplash();
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            hideSplash();
        }

        @Override
        public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
            if (request != null && request.isForMainFrame()) showLoadError();
        }
    }

    /**
     * Keeps the platform inside the WebView and sends everything else to the
     * phone. Returns true when the request was taken over.
     */
    private boolean routeExternal(String url) {
        if (url == null || url.isEmpty()) return false;
        if (url.startsWith(AssetServer.ORIGIN + "/")) return false;   /* the app */
        if (url.startsWith("about:") || url.startsWith("blob:") || url.startsWith("data:")) return false;
        if (url.startsWith("javascript:")) return true;                /* never */
        openExternal(url);
        return true;
    }

    private final class ShellChrome extends WebChromeClient {

        @Override
        public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback,
                                         FileChooserParams params) {
            if (fileCallback != null) {
                fileCallback.onReceiveValue(null);
                fileCallback = null;
            }
            fileCallback = callback;
            Intent intent;
            try {
                intent = params.createIntent();
            } catch (Throwable t) {
                intent = new Intent(Intent.ACTION_GET_CONTENT);
                intent.setType("*/*");
            }
            if (params.getMode() == FileChooserParams.MODE_OPEN_MULTIPLE) {
                intent.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
            }
            try {
                startActivityForResult(Intent.createChooser(intent, getString(R.string.choose_file)),
                        REQ_PICK_FILE);
            } catch (ActivityNotFoundException e) {
                deliverFiles(null);
                Toast.makeText(MainActivity.this, R.string.no_file_picker, Toast.LENGTH_LONG).show();
                return false;
            }
            return true;
        }

        @Override
        public boolean onConsoleMessage(ConsoleMessage message) {
            if (message != null) {
                Log.println(levelOf(message.messageLevel()), TAG + "/web", message.message()
                        + " (line " + message.lineNumber() + ")");
            }
            return true;
        }

        @Override
        public boolean onJsAlert(WebView view, String url, String message, final JsResult result) {
            new AlertDialog.Builder(MainActivity.this)
                    .setMessage(message)
                    .setPositiveButton(android.R.string.ok, new DialogInterface.OnClickListener() {
                        @Override public void onClick(DialogInterface d, int which) { result.confirm(); }
                    })
                    .setOnCancelListener(new DialogInterface.OnCancelListener() {
                        @Override public void onCancel(DialogInterface d) { result.cancel(); }
                    })
                    .show();
            return true;
        }

        @Override
        public boolean onJsConfirm(WebView view, String url, String message, final JsResult result) {
            new AlertDialog.Builder(MainActivity.this)
                    .setMessage(message)
                    .setPositiveButton(android.R.string.ok, new DialogInterface.OnClickListener() {
                        @Override public void onClick(DialogInterface d, int which) { result.confirm(); }
                    })
                    .setNegativeButton(android.R.string.cancel, new DialogInterface.OnClickListener() {
                        @Override public void onClick(DialogInterface d, int which) { result.cancel(); }
                    })
                    .setOnCancelListener(new DialogInterface.OnCancelListener() {
                        @Override public void onCancel(DialogInterface d) { result.cancel(); }
                    })
                    .show();
            return true;
        }

        @Override
        public void onPermissionRequest(final PermissionRequest request) {
            /* The platform never asks for the camera or the microphone. */
            try {
                request.deny();
            } catch (Throwable ignored) {
            }
        }
    }

    private static int levelOf(ConsoleMessage.MessageLevel level) {
        if (level == null) return Log.INFO;
        switch (level) {
            case ERROR: return Log.ERROR;
            case WARNING: return Log.WARN;
            case DEBUG: return Log.DEBUG;
            default: return Log.INFO;
        }
    }

    /* ------------------------------------------------------------------ */
    /* Files                                                              */
    /* ------------------------------------------------------------------ */

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode != REQ_PICK_FILE) {
            super.onActivityResult(requestCode, resultCode, data);
            return;
        }
        if (resultCode != RESULT_OK || data == null) {
            deliverFiles(null);
            return;
        }
        if (data.getClipData() != null) {
            int count = data.getClipData().getItemCount();
            Uri[] uris = new Uri[count];
            for (int i = 0; i < count; i++) uris[i] = data.getClipData().getItemAt(i).getUri();
            deliverFiles(uris);
        } else if (data.getData() != null) {
            deliverFiles(new Uri[]{ data.getData() });
        } else {
            deliverFiles(null);
        }
    }

    private void deliverFiles(Uri[] uris) {
        ValueCallback<Uri[]> callback = fileCallback;
        fileCallback = null;
        if (callback != null) callback.onReceiveValue(uris);
    }

    /** Called by the download store before writing to public storage on API < 29. */
    void requestLegacyStoragePermission() {
        if (Build.VERSION.SDK_INT >= 29) return;
        if (checkSelfPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE)
                == PackageManager.PERMISSION_GRANTED) {
            return;
        }
        try {
            requestPermissions(new String[]{ android.Manifest.permission.WRITE_EXTERNAL_STORAGE },
                    REQ_STORAGE);
        } catch (Throwable t) {
            Log.w(TAG, "storage permission request failed", t);
        }
    }

    /* ------------------------------------------------------------------ */
    /* Printing                                                           */
    /* ------------------------------------------------------------------ */

    /**
     * Runs the platform's own print stylesheet through Android's print
     * framework: the teacher gets the system print dialog, with "Save as PDF"
     * among the destinations, exactly like printing the web page in Chrome.
     * Called from shell.js when the page calls window.print().
     */
    void printDocument(final String jobTitle) {
        runOnUiThread(new Runnable() {
            @Override public void run() {
                try {
                    PrintManager manager = (PrintManager) getSystemService(Context.PRINT_SERVICE);
                    String name = jobTitle == null ? "" : jobTitle.trim();
                    /* the page's title is the document name at print time; a
                       stray one can be a whole subject list, so keep it short */
                    if (name.length() > 80) name = name.substring(0, 80).trim();
                    if (name.isEmpty()) name = getString(R.string.app_name);
                    PrintDocumentAdapter adapter = web.createPrintDocumentAdapter(name);
                    PrintAttributes attrs = new PrintAttributes.Builder()
                            .setMediaSize(PrintAttributes.MediaSize.ISO_A4)
                            .setMinMargins(PrintAttributes.Margins.NO_MARGINS)
                            .build();
                    manager.print(name, adapter, attrs);
                } catch (Throwable t) {
                    Log.w(TAG, "print failed", t);
                    Toast.makeText(MainActivity.this, R.string.print_unavailable,
                            Toast.LENGTH_LONG).show();
                }
            }
        });
    }

    /* ------------------------------------------------------------------ */
    /* Leaving the app                                                    */
    /* ------------------------------------------------------------------ */

    void openExternal(String url) {
        if (url == null) return;
        final String target = url.trim();
        if (target.isEmpty()) return;
        if (!(target.startsWith("http://") || target.startsWith("https://")
                || target.startsWith("mailto:") || target.startsWith("tel:")
                || target.startsWith("sms:") || target.startsWith("intent:"))) {
            return;
        }
        runOnUiThread(new Runnable() {
            @Override public void run() {
                try {
                    Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(target));
                    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    startActivity(intent);
                } catch (ActivityNotFoundException e) {
                    Toast.makeText(MainActivity.this, R.string.no_browser, Toast.LENGTH_LONG).show();
                } catch (Throwable t) {
                    Log.w(TAG, "cannot open " + target, t);
                }
            }
        });
    }

    private void registerBackCallback() {
        if (Build.VERSION.SDK_INT < 33) return;
        /* The API 33 types live in their own class so that a device running
           Android 7-12 never has to resolve them while loading this one. */
        BackCompat.register(this);
    }

    /** Android 13+ predictive back; only ever loaded on API 33 and newer. */
    private static final class BackCompat {
        static void register(final MainActivity activity) {
            try {
                activity.getOnBackInvokedDispatcher().registerOnBackInvokedCallback(
                        android.window.OnBackInvokedDispatcher.PRIORITY_DEFAULT,
                        new android.window.OnBackInvokedCallback() {
                            @Override public void onBackInvoked() { activity.handleBack(); }
                        });
            } catch (Throwable t) {
                Log.w(TAG, "predictive back unavailable", t);
            }
        }
    }

    @Override
    @SuppressWarnings("deprecation")
    public void onBackPressed() {
        handleBack();
    }

    /**
     * Back closes whatever the page has open (a dialog, the tutor, the voice
     * reader, the settings drawer) before it leaves the app — the page owns
     * that decision, so it is asked first.
     */
    private void handleBack() {
        if (web == null) {
            finish();
            return;
        }
        web.evaluateJavascript(
                "(function(){try{return !!(window.__androidBack&&window.__androidBack())}catch(e){return false}})()",
                new ValueCallback<String>() {
                    @Override public void onReceiveValue(String value) {
                        if ("true".equals(value)) return;
                        if (web != null && web.canGoBack()) {
                            web.goBack();
                            return;
                        }
                        confirmExit();
                    }
                });
    }

    private void confirmExit() {
        long now = System.currentTimeMillis();
        if (now - lastBackAt < EXIT_WINDOW_MS) {
            finish();
            return;
        }
        lastBackAt = now;
        Toast.makeText(this, R.string.press_back_again, Toast.LENGTH_SHORT).show();
    }

    /* ------------------------------------------------------------------ */
    /* Lifecycle                                                          */
    /* ------------------------------------------------------------------ */

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        if (web != null) web.saveState(outState);
    }

    @Override
    protected void onDestroy() {
        if (tts != null) tts.shutdown();
        if (bridge != null) bridge.shutdown();
        if (web != null) {
            web.loadUrl("about:blank");
            web.removeJavascriptInterface("AndroidShell");
            web.destroy();
            web = null;
        }
        super.onDestroy();
    }

    /* ------------------------------------------------------------------ */
    /* Splash and failure                                                 */
    /* ------------------------------------------------------------------ */

    private void hideSplash() {
        if (splashGone || splash == null) return;
        splashGone = true;
        splash.animate().alpha(0f).setDuration(220).withEndAction(new Runnable() {
            @Override public void run() {
                if (splash != null) splash.setVisibility(View.GONE);
            }
        }).start();
    }

    private void showLoadError() {
        if (loadErrorShown || isFinishing()) return;
        loadErrorShown = true;
        hideSplash();
        new AlertDialog.Builder(this)
                .setTitle(R.string.load_error_title)
                .setMessage(R.string.load_error_body)
                .setCancelable(false)
                .setPositiveButton(R.string.reload, new DialogInterface.OnClickListener() {
                    @Override public void onClick(DialogInterface d, int which) {
                        loadErrorShown = false;
                        if (web != null) web.loadUrl(HOME);
                    }
                })
                .setNegativeButton(android.R.string.cancel, new DialogInterface.OnClickListener() {
                    @Override public void onClick(DialogInterface d, int which) { finish(); }
                })
                .show();
    }
}
