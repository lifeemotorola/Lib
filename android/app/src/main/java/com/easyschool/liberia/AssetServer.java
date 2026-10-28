package com.easyschool.liberia;

import android.content.res.AssetManager;
import android.webkit.WebResourceResponse;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

/**
 * Serves the offline platform out of the APK's assets.
 *
 * <p>The page is loaded from {@code https://appassets.androidplatform.net/}
 * rather than {@code file:///android_asset/…} on purpose: a file:// document
 * has an opaque origin, which switches off localStorage and IndexedDB. Over a
 * normal https origin everything the platform saves (settings, the teaching
 * library, uploaded logos) behaves exactly as it does on a website, and the
 * origin never leaves the device because every request is answered here from
 * the APK.
 */
final class AssetServer {

    /** The origin the WebView sees. Any other https host is the outside world. */
    static final String ORIGIN = "https://appassets.androidplatform.net";

    /** Folder inside assets/ that holds the built web app. */
    private static final String ROOT = "www";

    private final AssetManager assets;
    private final Map<String, String> headers = new HashMap<String, String>();

    AssetServer(AssetManager assets) {
        this.assets = assets;
        headers.put("Cache-Control", "no-cache");
        headers.put("X-Content-Type-Options", "nosniff");
    }

    static boolean handles(String url) {
        return url != null && url.startsWith(ORIGIN + "/");
    }

    /** Answers one request, or returns a 404 page for a missing asset. */
    WebResourceResponse open(String url) {
        String path = pathOf(url);
        if (path == null) return notFound();

        /* The tutor falls back to a same-origin "/api/chat" when no proxy URL
           was baked into the page at build time. A request arriving here means
           exactly that, so answer with the platform's own "not connected in
           this copy" state instead of a 404 the tutor would read as a fault. */
        if (path.equals("/api/chat")) {
            byte[] body = ("{\"error\":{\"code\":\"no_proxy\",\"message\":"
                    + "\"This copy of the app has no tutor server. Everything else works offline.\"}}")
                    .getBytes();
            return new WebResourceResponse("application/json", "utf-8", 503, "Not Configured",
                    headers, new ByteArrayInputStream(body));
        }

        String mime = mimeOf(path);
        InputStream in = stream(ROOT + path);
        if (in == null && path.endsWith("/")) in = stream(ROOT + path + "index.html");
        if (in == null) {
            /* A directory without a trailing slash (the app never asks for one,
               but a mistyped link might): try its index.html. */
            in = stream(ROOT + path + "/index.html");
        }
        if (in == null) return notFound();
        return new WebResourceResponse(mime, charsetOf(mime), 200, "OK", headers, in);
    }

    /**
     * The URL path, normalised: no query string, no fragment, no traversal and
     * "/" meaning the app's entry page.
     */
    private static String pathOf(String url) {
        String path = url.substring(ORIGIN.length());
        int cut = path.indexOf('?');
        if (cut >= 0) path = path.substring(0, cut);
        cut = path.indexOf('#');
        if (cut >= 0) path = path.substring(0, cut);
        if (path.isEmpty() || path.equals("/")) path = "/index.html";
        if (path.contains("..") || path.contains("\\") || path.indexOf('\0') >= 0) return null;
        return path;
    }

    private InputStream stream(String assetPath) {
        try {
            return assets.open(assetPath, AssetManager.ACCESS_STREAMING);
        } catch (IOException e) {
            return null;
        }
    }

    private WebResourceResponse notFound() {
        byte[] body = "Not found in the app package.".getBytes();
        return new WebResourceResponse("text/plain", "utf-8", 404, "Not Found", headers,
                new ByteArrayInputStream(body));
    }

    private static String charsetOf(String mime) {
        if (mime.startsWith("text/") || mime.equals("application/javascript")
                || mime.equals("application/json") || mime.equals("image/svg+xml")
                || mime.equals("application/manifest+json")) {
            return "utf-8";
        }
        return null;
    }

    private static String mimeOf(String path) {
        String ext = "";
        int dot = path.lastIndexOf('.');
        if (dot >= 0) ext = path.substring(dot + 1).toLowerCase(Locale.US);
        if (ext.equals("html") || ext.equals("htm")) return "text/html";
        if (ext.equals("js") || ext.equals("mjs")) return "application/javascript";
        if (ext.equals("css")) return "text/css";
        if (ext.equals("json")) return "application/json";
        if (ext.equals("webmanifest")) return "application/manifest+json";
        if (ext.equals("svg")) return "image/svg+xml";
        if (ext.equals("png")) return "image/png";
        if (ext.equals("jpg") || ext.equals("jpeg")) return "image/jpeg";
        if (ext.equals("gif")) return "image/gif";
        if (ext.equals("webp")) return "image/webp";
        if (ext.equals("ico")) return "image/x-icon";
        if (ext.equals("woff")) return "font/woff";
        if (ext.equals("woff2")) return "font/woff2";
        if (ext.equals("ttf")) return "font/ttf";
        if (ext.equals("otf")) return "font/otf";
        if (ext.equals("mp3")) return "audio/mpeg";
        if (ext.equals("wav")) return "audio/wav";
        if (ext.equals("mp4")) return "video/mp4";
        if (ext.equals("pdf")) return "application/pdf";
        if (ext.equals("txt")) return "text/plain";
        return "application/octet-stream";
    }
}
