package com.easyschool.liberia;

import android.app.Activity;
import android.app.Dialog;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;

/**
 * The "Saving …" card shown while a generated pack is streamed into Downloads.
 * Deliberately built in code: one less layout file, and it matches the
 * platform's blue-and-white look without pulling in a design library.
 */
final class SavingDialog {

    private final Activity activity;
    private Dialog dialog;
    private ProgressBar bar;
    private TextView percent;
    private TextView name;

    SavingDialog(Activity activity) {
        this.activity = activity;
    }

    void show(String fileName) {
        try {
            if (dialog == null) dialog = build();
            if (name != null) name.setText(fileName == null ? "" : fileName);
            if (percent != null) percent.setText("");
            if (bar != null) {
                bar.setIndeterminate(true);
                bar.setProgress(0);
            }
            if (!dialog.isShowing() && !activity.isFinishing()) dialog.show();
        } catch (Throwable ignored) {
            /* a failed dialog must never lose the teacher's file */
        }
    }

    void progress(int value) {
        try {
            if (dialog == null || !dialog.isShowing()) return;
            if (bar != null) {
                if (bar.isIndeterminate()) bar.setIndeterminate(false);
                bar.setProgress(Math.max(0, Math.min(100, value)));
            }
            if (percent != null) percent.setText(value + "%");
        } catch (Throwable ignored) {
        }
    }

    void dismiss() {
        try {
            if (dialog != null && dialog.isShowing()) dialog.dismiss();
        } catch (Throwable ignored) {
        }
    }

    private Dialog build() {
        int pad = dp(20);

        LinearLayout root = new LinearLayout(activity);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setPadding(pad, pad, pad, pad);
        root.setMinimumWidth(dp(280));
        GradientDrawable background = new GradientDrawable();
        background.setColor(Color.WHITE);
        background.setCornerRadius(dp(16));
        root.setBackground(background);

        TextView title = new TextView(activity);
        title.setText(R.string.saving_title);
        title.setTextSize(TypedValue.COMPLEX_UNIT_SP, 16);
        title.setTextColor(0xFF0B3B8C);
        title.setTypeface(title.getTypeface(), android.graphics.Typeface.BOLD);
        root.addView(title);

        name = new TextView(activity);
        name.setTextSize(TypedValue.COMPLEX_UNIT_SP, 13);
        name.setTextColor(0xFF4B5A72);
        name.setPadding(0, dp(4), 0, dp(14));
        root.addView(name, new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        bar = new ProgressBar(activity, null, android.R.attr.progressBarStyleHorizontal);
        bar.setMax(100);
        bar.setIndeterminate(true);
        bar.setProgressTintList(android.content.res.ColorStateList.valueOf(0xFF0B3B8C));
        root.addView(bar, new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, dp(6)));

        percent = new TextView(activity);
        percent.setTextSize(TypedValue.COMPLEX_UNIT_SP, 12);
        percent.setTextColor(0xFF6B7A90);
        percent.setGravity(Gravity.END);
        percent.setPadding(0, dp(6), 0, 0);
        root.addView(percent, new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        FrameLayout holder = new FrameLayout(activity);
        holder.setPadding(dp(28), 0, dp(28), 0);
        holder.addView(root);

        Dialog d = new Dialog(activity);
        d.requestWindowFeature(Window.FEATURE_NO_TITLE);
        d.setContentView(holder);
        d.setCancelable(false);
        d.setCanceledOnTouchOutside(false);

        Window window = d.getWindow();
        if (window != null) {
            window.addFlags(WindowManager.LayoutParams.FLAG_DIM_BEHIND);
            WindowManager.LayoutParams params = window.getAttributes();
            params.dimAmount = 0.35f;
            window.setAttributes(params);
            window.setLayout(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
            window.setGravity(Gravity.CENTER);
        }
        return d;
    }

    private int dp(int value) {
        return (int) (value * activity.getResources().getDisplayMetrics().density + 0.5f);
    }
}
