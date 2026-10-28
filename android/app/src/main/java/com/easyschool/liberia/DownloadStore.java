package com.easyschool.liberia;

import android.content.ContentValues;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Base64;
import android.util.Log;
import android.widget.Toast;

import org.json.JSONObject;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Turns the page's blob downloads into real files.
 *
 * <p>The platform hands the browser a Blob and clicks an {@code <a download>};
 * in the APK that click is caught by shell.js, which streams the blob here in
 * small base64 chunks. The chunks are written to a private temp file and only
 * published when the whole file has arrived, so a failed save never leaves a
 * truncated Word document in the teacher's Downloads folder.
 *
 * <p>Android 10+ publishes through MediaStore into
 * {@code Downloads/Easy School Liberia/} without any permission. Android 7-9
 * asks for the storage permission once; if it is refused the file still saves,
 * inside the app's own folder, and the toast says where it went.
 */
final class DownloadStore {

    private static final String TAG = "EasySchool";
    static final String FOLDER = "Easy School Liberia";

    private final MainActivity host;
    private final Map<String, Job> jobs = new LinkedHashMap<String, Job>();
    private final SavingDialog dialog;
    private int sequence = 0;

    DownloadStore(MainActivity host) {
        this.host = host;
        this.dialog = new SavingDialog(host);
    }

    /* ---------------------------------------------------------------- */
    /* The three calls shell.js makes                                    */
    /* ---------------------------------------------------------------- */

    String start(String rawName, String rawMime, long totalBytes) {
        String name = safeName(rawName);
        String mime = safeMime(rawMime, name);
        String handle;
        synchronized (jobs) {
            handle = "dl" + (++sequence);
            File dir = new File(host.getCacheDir(), "pending");
            if (!dir.exists() && !dir.mkdirs()) {
                Log.w(TAG, "cannot create " + dir);
                return "";
            }
            File temp = new File(dir, handle + "-" + System.currentTimeMillis() + ".part");
            try {
                Job job = new Job(handle, name, mime, temp, totalBytes);
                job.out = new FileOutputStream(temp);
                jobs.put(handle, job);
            } catch (IOException e) {
                Log.w(TAG, "cannot start " + name, e);
                toast(host.getString(R.string.save_failed, messageOf(e)));
                return "";
            }
        }

        host.runOnUiThread(new Runnable() {
            @Override public void run() {
                dialog.show(currentName());
            }
        });
        host.requestLegacyStoragePermission();
        return handle;
    }

    boolean append(String handle, String base64) {
        Job job;
        synchronized (jobs) {
            job = jobs.get(handle);
        }
        if (job == null || base64 == null) return false;
        try {
            byte[] chunk = Base64.decode(base64, Base64.DEFAULT);
            job.out.write(chunk);
            job.written += chunk.length;
            showProgress(job);
            return true;
        } catch (Throwable t) {
            Log.w(TAG, "append failed", t);
            return false;
        }
    }

    String finish(String handle) {
        Job job;
        synchronized (jobs) {
            job = jobs.remove(handle);
        }
        JSONObject out = new JSONObject();
        if (job == null) {
            return failure(out, "This save is no longer open");
        }
        try {
            job.close();
            Saved saved = publish(job);
            out.put("ok", true);
            out.put("name", job.name);
            out.put("location", saved.location);
            out.put("uri", saved.uri == null ? "" : saved.uri.toString());
            final String where = saved.location;
            host.runOnUiThread(new Runnable() {
                @Override public void run() {
                    Toast.makeText(host, host.getString(R.string.saved_to, where),
                            Toast.LENGTH_LONG).show();
                }
            });
        } catch (Throwable t) {
            Log.w(TAG, "finish failed", t);
            failure(out, messageOf(t));
            final String message = messageOf(t);
            host.runOnUiThread(new Runnable() {
                @Override public void run() {
                    Toast.makeText(host, host.getString(R.string.save_failed, message),
                            Toast.LENGTH_LONG).show();
                }
            });
        } finally {
            job.close();
            deleteQuietly(job.temp);
            host.runOnUiThread(new Runnable() {
                @Override public void run() { dialog.dismiss(); }
            });
        }
        return out.toString();
    }

    void cancel(String handle) {
        Job job;
        synchronized (jobs) {
            job = jobs.remove(handle);
        }
        if (job != null) {
            job.close();
            deleteQuietly(job.temp);
        }
        host.runOnUiThread(new Runnable() {
            @Override public void run() { dialog.dismiss(); }
        });
    }

    /** Called when the activity goes away; nothing is published half-written. */
    void closeAll() {
        List<Job> open;
        synchronized (jobs) {
            open = new ArrayList<Job>(jobs.values());
            jobs.clear();
        }
        for (Job job : open) {
            job.close();
            deleteQuietly(job.temp);
        }
        host.runOnUiThread(new Runnable() {
            @Override public void run() { dialog.dismiss(); }
        });
    }

    /* ---------------------------------------------------------------- */
    /* Publishing                                                        */
    /* ---------------------------------------------------------------- */

    private static final class Saved {
        final String location;
        final Uri uri;

        Saved(String location, Uri uri) {
            this.location = location;
            this.uri = uri;
        }
    }

    private Saved publish(Job job) throws IOException {
        if (Build.VERSION.SDK_INT >= 29) return publishModern(job);
        return publishLegacy(job);
    }

    private Saved publishModern(Job job) throws IOException {
        ContentValues values = new ContentValues();
        values.put(MediaStore.MediaColumns.DISPLAY_NAME, job.name);
        values.put(MediaStore.MediaColumns.MIME_TYPE, job.mime);
        values.put(MediaStore.MediaColumns.RELATIVE_PATH,
                Environment.DIRECTORY_DOWNLOADS + "/" + FOLDER);
        values.put(MediaStore.MediaColumns.IS_PENDING, 1);

        Uri collection = MediaStore.Downloads.getContentUri(MediaStore.VOLUME_EXTERNAL_PRIMARY);
        Uri uri = host.getContentResolver().insert(collection, values);
        if (uri == null) throw new IOException("the Downloads folder refused the file");

        OutputStream out = null;
        try {
            out = host.getContentResolver().openOutputStream(uri);
            if (out == null) throw new IOException("the new file could not be opened");
            copy(job.temp, out);
        } catch (IOException e) {
            host.getContentResolver().delete(uri, null, null);
            throw e;
        } finally {
            closeQuietly(out);
        }

        ContentValues done = new ContentValues();
        done.put(MediaStore.MediaColumns.IS_PENDING, 0);
        host.getContentResolver().update(uri, done, null, null);
        return new Saved("Downloads/" + FOLDER, uri);
    }

    private Saved publishLegacy(Job job) throws IOException {
        boolean publicFolder = host.checkSelfPermission(
                android.Manifest.permission.WRITE_EXTERNAL_STORAGE)
                == android.content.pm.PackageManager.PERMISSION_GRANTED;

        File base;
        if (publicFolder) {
            base = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
        } else {
            File external = host.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
            base = external != null ? external : new File(host.getFilesDir(), "downloads");
        }
        File dir = new File(base, FOLDER);
        if (!dir.exists() && !dir.mkdirs()) throw new IOException("the folder could not be created");

        File dest = unique(dir, job.name);
        FileOutputStream out = null;
        try {
            out = new FileOutputStream(dest);
            copy(job.temp, out);
        } finally {
            closeQuietly(out);
        }
        MediaScannerConnection.scanFile(host, new String[]{ dest.getAbsolutePath() },
                new String[]{ job.mime }, null);

        if (publicFolder) return new Saved("Downloads/" + FOLDER, null);
        return new Saved("Android/data/" + host.getPackageName() + "/files/Download/" + FOLDER, null);
    }

    private static File unique(File dir, String name) {
        File candidate = new File(dir, name);
        if (!candidate.exists()) return candidate;
        String base = name;
        String ext = "";
        int dot = name.lastIndexOf('.');
        if (dot > 0) {
            base = name.substring(0, dot);
            ext = name.substring(dot);
        }
        for (int n = 2; n < 999; n++) {
            candidate = new File(dir, base + " (" + n + ")" + ext);
            if (!candidate.exists()) return candidate;
        }
        return new File(dir, base + "-" + System.currentTimeMillis() + ext);
    }

    private static void copy(File from, OutputStream to) throws IOException {
        InputStream in = null;
        try {
            in = new FileInputStream(from);
            byte[] buffer = new byte[64 * 1024];
            int read;
            while ((read = in.read(buffer)) != -1) to.write(buffer, 0, read);
            to.flush();
        } finally {
            closeQuietly(in);
        }
    }

    /* ---------------------------------------------------------------- */
    /* Helpers                                                           */
    /* ---------------------------------------------------------------- */

    private void showProgress(final Job job) {
        if (job.total <= 0) return;
        final int percent = (int) Math.min(100L, (job.written * 100L) / job.total);
        host.runOnUiThread(new Runnable() {
            @Override public void run() { dialog.progress(percent); }
        });
    }

    private String currentName() {
        synchronized (jobs) {
            for (Job job : jobs.values()) return job.name;
        }
        return "";
    }

    private static String failure(JSONObject out, String message) {
        try {
            out.put("ok", false);
            out.put("error", message);
        } catch (Throwable ignored) {
        }
        return out.toString();
    }

    private void toast(final String message) {
        host.runOnUiThread(new Runnable() {
            @Override public void run() {
                Toast.makeText(host, message, Toast.LENGTH_LONG).show();
            }
        });
    }

    private static String messageOf(Throwable t) {
        if (t == null) return "unknown error";
        String message = t.getMessage();
        return message == null || message.isEmpty() ? t.getClass().getSimpleName() : message;
    }

    /** A file name that is safe on every Android file system. */
    static String safeName(String raw) {
        String name = raw == null ? "" : raw.trim();
        int slash = Math.max(name.lastIndexOf('/'), name.lastIndexOf('\\'));
        if (slash >= 0) name = name.substring(slash + 1);
        name = name.replaceAll("[\\p{Cntrl}]", "");
        name = name.replaceAll("[:*?\"<>|]", "-");
        if (name.isEmpty() || name.equals(".") || name.equals("..")) name = "Easy School document";
        if (name.length() > 120) {
            String ext = "";
            int dot = name.lastIndexOf('.');
            if (dot > 0 && name.length() - dot <= 12) ext = name.substring(dot);
            name = name.substring(0, Math.max(1, 120 - ext.length())) + ext;
        }
        return name;
    }

    /** The platform names .docx files itself; anything else gets a sane type. */
    static String safeMime(String raw, String name) {
        String mime = raw == null ? "" : raw.trim();
        if (mime.startsWith("application/") || mime.startsWith("image/")
                || mime.startsWith("text/") || mime.startsWith("audio/")) {
            return mime;
        }
        if (name.endsWith(".docx")) {
            return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        }
        if (name.endsWith(".doc")) return "application/msword";
        if (name.endsWith(".pdf")) return "application/pdf";
        if (name.endsWith(".html")) return "text/html";
        if (name.endsWith(".png")) return "image/png";
        if (name.endsWith(".jpg") || name.endsWith(".jpeg")) return "image/jpeg";
        return "application/octet-stream";
    }

    private static void closeQuietly(OutputStream out) {
        if (out == null) return;
        try {
            out.close();
        } catch (IOException ignored) {
        }
    }

    private static void closeQuietly(InputStream in) {
        if (in == null) return;
        try {
            in.close();
        } catch (IOException ignored) {
        }
    }

    private static void deleteQuietly(File file) {
        if (file != null && file.exists() && !file.delete()) {
            Log.w(TAG, "could not delete " + file);
        }
    }

    /* ---------------------------------------------------------------- */

    private static final class Job {
        final String handle;
        final String name;
        final String mime;
        final File temp;
        final long total;
        FileOutputStream out;
        long written = 0;

        Job(String handle, String name, String mime, File temp, long total) {
            this.handle = handle;
            this.name = name;
            this.mime = mime;
            this.temp = temp;
            this.total = total;
        }

        void close() {
            closeQuietly(out);
            out = null;
        }
    }
}
