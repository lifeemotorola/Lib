"""Senior High History browser regression against the built, offline index.html.

Run: python3 tests/history.py (Playwright + Chromium; see requirements.txt).
PW_CHROMIUM may point to another Chromium binary. Downloads use a temporary
folder, never the repository. No web server or AI service is needed.
"""
import os
from pathlib import Path
import tempfile
import xml.etree.ElementTree as ET
import zipfile

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
URL = ROOT.joinpath("index.html").as_uri()
KEY_TITLE = "ANSWER KEYS — TEACHER'S COPY"
PERIODS = ["I", "II", "III", "IV", "V", "VI"]


def click(page, selector):
    # Settings can be inside a closed details panel; invoke the real handler.
    page.locator(selector).evaluate("el => el.click()")


def set_value(page, selector, value):
    page.locator(selector).evaluate("""(el, value) => {
        el.value = value;
        el.dispatchEvent(new Event('change', {bubbles: true}));
    }""", str(value))


def generate(page):
    click(page, "#gen")
    assert page.locator("#doc .page").count() > 0


def check_a4(page):
    sizes = page.locator("#doc .page").evaluate_all(
        "pages => pages.map(p => [p.offsetWidth, p.offsetHeight])"
    )
    assert sizes and all(size == [794, 1123] for size in sizes), sizes[:3]


def export_docx(page, directory, expected_name, expected_text, teacher):
    with page.expect_download() as event:
        click(page, "#docx")
    download = event.value
    assert download.suggested_filename == expected_name, download.suggested_filename
    path = Path(directory, expected_name)
    download.save_as(path)
    with zipfile.ZipFile(path) as docx:
        assert docx.testzip() is None
        xml = docx.read("word/document.xml")
        document = ET.fromstring(xml)
        ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
        text = " ".join(document.itertext())
        assert expected_text in text, expected_text
        assert "HISTORY" in text.upper()
        if "Workbook" in expected_name:
            assert (KEY_TITLE in text) == teacher, "teacher-only keys in Word"
            assert any(name.startswith("word/media/") for name in docx.namelist()), "offline cover image"
        for size in document.findall(".//w:pgSz", ns):
            assert size.get("{" + ns["w"] + "}w") == "11906"
            assert size.get("{" + ns["w"] + "}h") == "16838"
    return path.stat().st_size


with sync_playwright() as playwright, tempfile.TemporaryDirectory(prefix="lib-history-") as directory:
    launch = {"args": ["--no-sandbox", "--disable-dev-shm-usage"]}
    if os.environ.get("PW_CHROMIUM"):
        launch["executable_path"] = os.environ["PW_CHROMIUM"]
    browser = playwright.chromium.launch(**launch)
    context = browser.new_context(viewport={"width": 1500, "height": 1000}, accept_downloads=True)
    # The deliverable must work with the network disconnected.
    context.set_offline(True)
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto(URL)
    page.wait_for_selector(".subtab[data-s='hi']")
    assert page.locator(".subtab[data-s='whis']").count() == 0
    assert page.locator(".subtab[data-s='hi']").inner_text().strip() == "History"
    assert "History" in page.title()
    click(page, ".subtab[data-s='hi']")
    assert page.locator("#grade option").evaluate_all("els => els.map(el => el.value)") == ["10", "11", "12"]
    assert "Senior High" in page.locator("#jhNote").inner_text()
    assert "History" in page.locator("#jhNote").inner_text()
    assert page.locator("#sheets .sh:checked").count() == 11
    assert "Social Studies" not in page.locator("#sheets").inner_text()
    assert page.locator(".subtab[data-s='hi'] use").get_attribute("href") == "#i-sub-his"
    assert page.evaluate("""() => document.querySelector('#doc .cv-bg').style.backgroundImage
        .includes(window.SUBJECT_COVER_ART.ss.url)"""), "world-history artwork available offline"
    assert page.evaluate("getComputedStyle(document.body).getPropertyValue('--bleu').trim()") == "#8a5a00"

    for grade in [10, 11, 12]:
        set_value(page, "#grade", grade)
        assert page.locator("#periods .pk").evaluate_all("els => els.map(el => el.value)") == PERIODS
        expected_titles = page.evaluate("grade => HI_CURRICULUM.filter(u => u.grade === grade).map(u => u.title)", grade)
        for mode in ["student", "teacher"]:
            click(page, f"#session .sess[data-m='{mode}']")
            generate(page)
            text = page.locator("#doc").inner_text()
            assert f"HISTORY · SENIOR HIGH GRADE {grade}" in text
            assert (KEY_TITLE in text) == (mode == "teacher")
            assert "Study Notes" in text
            assert "SEMESTER ONE EXAMINATION" in text and "SEMESTER TWO EXAMINATION" in text
            for title in expected_titles:
                assert title in text, title
            tests = page.locator("#doc h2").evaluate_all(
                "els => els.filter(el => el.textContent.startsWith('PERIOD TEST')).length"
            )
            assert tests == 6
            assert "Social Studies" not in text and "WASSCE History" not in text
            assert page.evaluate("PACK_CUR_SUBJECT") == "History"
            assert page.evaluate("PACK_CUR_GRADE") == grade
            check_a4(page)
            suffix = "Teacher_Copy" if mode == "teacher" else "Student"
            size = export_docx(page, directory, f"History_Grade{grade}_Workbook_{suffix}.docx",
                               expected_titles[0], mode == "teacher")
            print(f"OK: History Grade {grade}, {mode}, six periods, A4, Word ({size} bytes)")

    # Period selection and the study-notes toggle operate on real History data.
    page.locator("#periods .pk").evaluate_all("els => els.forEach(el => el.checked = el.value === 'II')")
    generate(page)
    assert "1 unit(s)" in page.locator("#meta").inner_text()
    assert "Foreign Policy of Liberia" in page.locator("#doc").inner_text()
    assert "Seven Selected Liberian Presidents" not in page.locator("#doc").inner_text()
    click(page, "#notes")
    assert "Study Notes" not in page.locator("#doc").inner_text()
    click(page, "#notes")
    assert "Study Notes" in page.locator("#doc").inner_text()

    # Both teacher planning formats and standard 3/4-week durations.
    click(page, "#dtype .sess[data-d='lp']")
    for grade in [10, 11, 12]:
        set_value(page, "#grade", grade)
        page.locator("#periods .pk").evaluate_all("els => els.forEach(el => el.checked = el.value === 'I')")
        for plan_type in ["daily", "weekly"]:
            click(page, f"#lpPlanTabs .sess[data-pt='{plan_type}']")
            for weeks in [3, 4]:
                click(page, f"#lpWeekPresets .lp-w[data-w='{weeks}']")
                set_value(page, "#lpMin", 45)
                generate(page)
                text = page.locator("#doc").inner_text()
                assert "TEACHER’S LESSON PLAN" in text
                assert "Subject: History" in text
                assert "Weekly Plan Adjustment" in text
                assert f"{weeks} weeks/unit" in page.locator("#meta").inner_text()
                assert "Examination-style practice" not in text
                if plan_type == "weekly":
                    assert f"Week {weeks} of {weeks}:" in text
                check_a4(page)
        export_docx(page, directory, f"History_Grade{grade}_Weekly_Plan_Teacher_Copy.docx",
                    "Weekly Plan Adjustment", True)
        print(f"OK: History Grade {grade}, daily/weekly lesson plans, 3/4 weeks and Word")

    # Switching tracks must not replace, duplicate or re-grade WASSCE History.
    click(page, "#dtype .sess[data-d='pack']")
    click(page, "#tracks .track[data-t='wa']")
    assert page.locator(".subtab[data-s='hi']").count() == 0
    click(page, ".subtab[data-s='whis']")
    assert page.locator("#grade option").evaluate_all("els => els.map(el => el.value)") == ["12"]
    assert page.locator("#periods .pk").count() == 13
    assert page.evaluate("PACK_CUR_SUBJECT") == "WASSCE History"
    click(page, "#tracks .track[data-t='curr']")
    click(page, ".subtab[data-s='hi']")
    assert page.locator("#grade option").count() == 3
    assert page.locator("#periods .pk").count() == 6

    # Actual print output and filename use History, not its shared engine.
    page.locator("#periods .pk").evaluate_all("els => els.forEach(el => el.checked = el.value === 'I')")
    generate(page)
    page.evaluate("window.print = () => { window.__printedTitle = document.title; }")
    click(page, "#print")
    assert page.evaluate("window.__printedTitle").startswith("History_Grade")
    page.evaluate("window.dispatchEvent(new Event('afterprint'))")
    pdf = page.pdf(format="A4", print_background=True, prefer_css_page_size=True)
    assert pdf.startswith(b"%PDF") and len(pdf) > 10000
    print(f"OK: separate WASSCE History, offline cover and PDF ({len(pdf)} bytes)")

    # Mobile preview retains fixed A4 geometry and fits the viewport.
    page.set_viewport_size({"width": 375, "height": 812})
    page.wait_for_function("parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--ps')) < 1")
    check_a4(page)
    assert page.locator("#doc .page").first.evaluate("el => el.getBoundingClientRect().width") <= 377
    assert page.evaluate("Math.max(document.body.scrollWidth, document.documentElement.scrollWidth)") <= 377
    assert not errors, errors
    browser.close()
    print("OK: History mobile layout and no browser errors; all checks passed.")
