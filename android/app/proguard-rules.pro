# Nothing is minified (see app/build.gradle), so this file only exists for the
# day someone turns it on: the JavaScript bridge is reached by name from the
# WebView, so it must survive any shrinking.
-keepclassmembers class com.easyschool.liberia.ShellBridge {
    @android.webkit.JavascriptInterface <methods>;
}
-keep class com.easyschool.liberia.ShellBridge { *; }
