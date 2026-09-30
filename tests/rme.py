"""Grades 6–12 RME browser/export regression against the built offline app.

Run: python3 tests/rme.py (requirements.txt + Playwright Chromium).
PW_CHROMIUM may point to another Chromium executable. Downloads are temporary.
Checks all 42 expanded lessons in student/teacher packs, A4 layout, Word export,
period and notes controls, and extended objectives in weekly lesson plans.
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
    page.locator(selector).evaluate("el => el.click()")


def set_value(page, selector, value):
    page.locator(selector).evaluate("""(el, value) => {
        el.value = value;
        el.dispatchEvent(new Event('change', {bubbles: true}));
    }""", str(value))


def select_grade(page, grade):
    band = "el" if grade == 6 else "jh" if grade < 10 else "sh"
    click(page, f".bandtab[data-b='{band}']")
    set_value(page, "#grade", grade)


def select_periods(page, periods):
    page.locator("#periods .pk").evaluate_all(
        "(els, periods) => els.forEach(el => el.checked = periods.includes(el.value))", periods
    )


def generate(page):
    click(page, "#gen")
    assert page.locator("#doc .page").count() > 0


def check_a4(page):
    sizes = page.locator("#doc .page").evaluate_all(
        "pages => pages.map(p => [p.offsetWidth, p.offsetHeight])"
    )
    assert sizes and all(size == [794, 1123] for size in sizes), sizes[:3]


def export_docx(page, directory, grade, teacher, expected_markers):
    with page.expect_download() as event:
        click(page, "#docx")
    download = event.value
    suffix = "Teacher_Copy" if teacher else "Student"
    expected_name = f"Religious_and_Moral_Education_Grade{grade}_Workbook_{suffix}.docx"
    assert download.suggested_filename == expected_name, download.suggested_filename
    path = Path(directory, expected_name)
    download.save_as(path)
    with zipfile.ZipFile(path) as docx:
        assert docx.testzip() is None
        document = ET.fromstring(docx.read("word/document.xml"))
        text = " ".join(document.itertext())
        assert (KEY_TITLE in text) == teacher, "teacher-only keys in Word"
        for marker in expected_markers:
            assert marker in text, f"Grade {grade}: missing Word content {marker}"
        assert "Guided Classroom Enquiry" in text and "Extended Review" in text
        assert any(name.startswith("word/media/") for name in docx.namelist()), "offline artwork missing"
        ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
        for size in document.findall(".//w:pgSz", ns):
            assert size.get("{" + ns["w"] + "}w") == "11906"
            assert size.get("{" + ns["w"] + "}h") == "16838"
    return path.stat().st_size


with sync_playwright() as playwright, tempfile.TemporaryDirectory(prefix="lib-rme-") as directory:
    launch = {"args": ["--no-sandbox", "--disable-dev-shm-usage"]}
    if os.environ.get("PW_CHROMIUM"):
        launch["executable_path"] = os.environ["PW_CHROMIUM"]
    browser = playwright.chromium.launch(**launch)
    context = browser.new_context(viewport={"width": 1500, "height": 1000}, accept_downloads=True)
    context.set_offline(True)
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto(URL)
    page.wait_for_selector(".subtab[data-s='rm']")
    click(page, ".subtab[data-s='rm']")
    set_value(page, "#perEx", 4)
    assert page.evaluate("RM_FULL_612.length") == 42
    assert page.evaluate("RM_CURRICULUM.filter(u => u.rmeFullDetails).length") == 42

    for grade in range(6, 13):
        select_grade(page, grade)
        assert page.locator("#periods .pk").evaluate_all("els => els.map(el => el.value)") == PERIODS
        select_periods(page, PERIODS)
        extras = page.evaluate("grade => RM_FULL_612.filter(u => u.grade === grade)", grade)
        markers = [next(block["t"] for block in extra["study"] if block["k"] == "h3") for extra in extras]
        for mode in ["student", "teacher"]:
            click(page, f"#session .sess[data-m='{mode}']")
            generate(page)
            text = page.locator("#doc").inner_text()
            assert page.evaluate("PACK_CUR_GRADE") == grade
            assert (KEY_TITLE in text) == (mode == "teacher")
            assert "not required to adopt a belief" in text and "fictional cases" in text
            assert "Source status:" in text
            if grade >= 10:
                assert "not an official Senior High RME syllabus" in text
            for marker in markers:
                assert marker in text, f"Grade {grade}: missing screen section {marker}"
            for heading in ["Further Learning Goals", "Guided Classroom Enquiry", "Check Your Understanding — Extended Review"]:
                assert page.locator("#doc h3").evaluate_all(
                    "(els, heading) => els.filter(el => el.textContent === heading).length", heading
                ) == 6, (grade, mode, heading)
            assert page.locator("#doc h2").evaluate_all(
                "els => els.filter(el => el.textContent.startsWith('PERIOD TEST')).length"
            ) == 6
            check_a4(page)
            size = export_docx(page, directory, grade, mode == "teacher", markers)
            print(f"OK: RME Grade {grade}, {mode}, six expanded periods, A4, offline Word ({size} bytes)")

    # All period selectors still produce exactly one original unit and its supplement.
    for period in PERIODS:
        select_periods(page, [period])
        generate(page)
        assert "1 unit(s)" in page.locator("#meta").inner_text()
        extra = page.evaluate("period => RM_FULL_612.find(u => u.grade === 12 && u.period === period)", period)
        marker = next(block["t"] for block in extra["study"] if block["k"] == "h3")
        assert marker in page.locator("#doc").inner_text()
        assert page.locator("#doc h3").evaluate_all(
            "els => els.filter(el => el.textContent === 'Further Learning Goals').length"
        ) == 1
    click(page, "#notes")
    generate(page)
    assert "Detailed Study" not in page.locator("#doc").inner_text()
    click(page, "#notes")
    generate(page)
    assert "Detailed Study" in page.locator("#doc").inner_text()

    # Weekly plans consume the same extended unit objectives without new controls.
    click(page, "#dtype .sess[data-d='lp']")
    click(page, "#lpPlanTabs .sess[data-pt='weekly']")
    click(page, "#lpWeekPresets .lp-w[data-w='4']")
    for grade in range(6, 13):
        select_grade(page, grade)
        select_periods(page, ["I"])
        generate(page)
        text = page.locator("#doc").inner_text()
        assert "TEACHER’S LESSON PLAN" in text
        assert "Week 4 of 4:" in text
        objectives = page.evaluate("grade => RM_FULL_612.find(u => u.grade === grade && u.period === 'I').objectives", grade)
        assert all(objective in text for objective in objectives), (grade, "extended objectives missing from plan")
        check_a4(page)
    assert not errors, errors
    context.close()
    browser.close()
    print("RME browser checks passed: all 42 expanded lessons, student/teacher isolation, offline Word and weekly plans.")
