"""Offline teaching-workspace integration tests.
Run: python3 tests/teaching.py (Playwright Chromium; optional PW_CHROMIUM).
Uses temporary downloads only. Exercises real UI, IndexedDB, print and Word.
"""
import json
import os
from pathlib import Path
import tempfile
import zipfile
from playwright.sync_api import sync_playwright, expect

ROOT = Path(__file__).resolve().parent.parent


def click(page, selector):
    page.locator(selector).evaluate("el => el.click()")


def value(page, selector, val):
    page.locator(selector).evaluate("""(el, value) => {
      el.value = value; el.dispatchEvent(new Event('input', {bubbles:true}));
      el.dispatchEvent(new Event('change', {bubbles:true}));
    }""", str(val))


def download(page, directory, selector="#docx"):
    with page.expect_download() as event:
        click(page, selector)
    d = event.value
    path = Path(directory, d.suggested_filename)
    d.save_as(path)
    if path.suffix == ".docx":
        with zipfile.ZipFile(path) as z:
            return z.read("word/document.xml").decode()
    return json.loads(path.read_text())


with sync_playwright() as pw, tempfile.TemporaryDirectory() as directory:
    launch = {"headless": True, "args": ["--no-sandbox", "--disable-dev-shm-usage"]}
    if os.environ.get("PW_CHROMIUM"):
        launch["executable_path"] = os.environ["PW_CHROMIUM"]
    browser = pw.chromium.launch(**launch)
    context = browser.new_context(viewport={"width": 1450, "height": 1000}, accept_downloads=True)
    context.set_offline(True)
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.on("dialog", lambda dialog: dialog.accept())
    page.goto(ROOT.joinpath("index.html").as_uri())
    assert page.locator("#doc .page").count()
    click(page, '[data-s="ci"]')
    assert page.locator("#grade").input_value() == "7"
    assert page.locator(".pk").count() == 6
    assert "Original" in page.locator("#doc").inner_text()
    # Small deterministic worksheet pack.
    page.evaluate("""() => {
      document.querySelectorAll('.pk').forEach((e,i)=>e.checked=i===0);
      document.querySelectorAll('.sh').forEach(e=>e.checked=e.value==='short');
      ['notes','tests','exam'].forEach(id=>document.getElementById(id).checked=false);
      document.getElementById('notes').dispatchEvent(new Event('change'));
    }""")
    value(page, "#perEx", 3)
    click(page, "#gen")
    click(page, '[data-tw-open="editor"]')
    body = page.locator("#twBody")
    card = body.locator(".tw-card").first
    expect(card.get_by_label("Question wording", exact=False)).to_be_visible()
    card.get_by_label("Question wording", exact=False).fill("CUSTOM QUESTION: Explain responsible citizenship.")
    card.get_by_label("Answer and marking guidance", exact=True).fill("SECRET KEY: caring for shared resources and respecting rights.")
    card.get_by_label("Question marks", exact=False).fill("5")
    card.get_by_role("button", name="Apply question", exact=True).click()
    card.get_by_role("button", name="Move down", exact=True).click()
    assert "CUSTOM QUESTION" in body.locator(".tw-card").nth(1).get_by_label("Question wording", exact=False).input_value()
    # Remove another question, keeping pairing and numbering.
    body.locator(".tw-card").first.get_by_role("button", name="Remove", exact=True).click()
    assert body.locator(".tw-card").count() == 2
    assert body.locator(".tw-card").first.get_by_label("Question marks", exact=False).input_value() == "5"
    other = body.locator(".tw-card").nth(1)
    before = other.get_by_label("Question wording", exact=False).input_value()
    other.get_by_role("button", name="Replace this question", exact=True).click()
    assert body.locator(".tw-card").nth(1).get_by_label("Question wording", exact=False).input_value() != before
    body.get_by_role("button", name="Add teacher-written worksheet", exact=True).click()
    custom = body.locator(".tw-card").first
    custom.get_by_label("Question wording", exact=False).fill("Write the decimal estimate discussed in class.")
    custom.get_by_label("Answer and marking guidance", exact=True).fill("3.14")
    custom.get_by_role("button", name="Apply question", exact=True).click()
    # Decimal answers are not confused with question-number prefixes.
    expect(custom.get_by_label("Answer and marking guidance", exact=True)).to_have_value("3.14")
    click(page, "#twClose")
    teacher = download(page, directory)
    assert "CUSTOM QUESTION" in teacher and "SECRET KEY" in teacher and "3.14" in teacher
    click(page, '[data-m="student"]')
    student = download(page, directory)
    assert "CUSTOM QUESTION" in student and "SECRET KEY" not in student and "3.14" not in student
    assert "ANSWER KEYS" not in page.locator("#doc").inner_text()
    click(page, '[data-tw-open="library"]')
    expect(body).to_contain_text("Switch to Teacher session")
    assert body.locator('input[type="file"]').count() == 0
    click(page, "#twClose")
    click(page, '[data-m="teacher"]')
    assert "SECRET KEY" in page.locator("#doc").inner_text()
    # Auto-filled cover text remains overridable, and edits survive cover changes.
    value(page, "#coverText-title", "My Civic Learning Book")
    value(page, "#coverText-schoolLabel", "Institution")
    value(page, "#coverText-organization", "Our Community School")
    value(page, "#coverText-inspireText", "Learn with purpose")
    value(page, "#cvSchool", "Test Academy")
    assert page.locator(".cv-t1").text_content() == "My Civic Learning Book"
    assert "Institution:" in page.locator(".cv-panel").text_content()
    assert "SECRET KEY" in page.locator("#doc").inner_text()
    teacher = download(page, directory)
    assert "My Civic Learning Book" in teacher and "Institution" in teacher and "Our Community School" in teacher
    # Persist complete snapshot and settings, then prove reload/reopen works.
    click(page, '[data-tw-open="library"]')
    body.get_by_label("Pack or lesson-plan name").fill("Civics edited master")
    body.get_by_label("Class / term", exact=False).fill("7A / Term One")
    body.get_by_role("button", name="Save current document", exact=True).click()
    expect(body.locator(".tw-library")).to_contain_text("Civics edited master")
    backup = download(page, directory, '#twBody button:has-text("Export library backup")')
    assert len(backup["records"]) == 1
    # Schema rejects executable image URLs and malformed blocks, without writes.
    invalid = json.loads(json.dumps(backup))
    invalid["records"][0]["state"]["base"][0]["bg"] = 'https://example.com/")><img src=x onerror=alert(1)>'
    payload = Path(directory, "bad.json")
    payload.write_text(json.dumps(invalid))
    body.get_by_label("Import backup", exact=False).set_input_files(payload)
    expect(page.locator("#twStatus")).to_contain_text("embedded PNG or JPEG")
    click(page, "#twClose")
    page.reload()
    click(page, '[data-tw-open="library"]')
    expect(body.locator(".tw-library")).to_contain_text("Civics edited master")
    body.locator(".tw-library .tw-card").first.get_by_role("button", name="Open", exact=True).click()
    assert page.locator("#grade").input_value() == "7"
    assert page.locator("#subjects .on").get_attribute("data-s") == "ci"
    assert "CUSTOM QUESTION" in page.locator("#doc").inner_text() and "SECRET KEY" in page.locator("#doc").inner_text()
    assert page.locator(".cv-t1").text_content() == "My Civic Learning Book"
    # Import duplicates safely, rename and delete a copy.
    click(page, '[data-tw-open="library"]')
    valid = Path(directory, "good.json")
    valid.write_text(json.dumps(backup))
    body.get_by_label("Import backup", exact=False).set_input_files(valid)
    expect(body.locator(".tw-library .tw-card")).to_have_count(2)
    body.locator(".tw-library .tw-card").first.get_by_role("button", name="Duplicate", exact=True).click()
    expect(body.locator(".tw-library .tw-card")).to_have_count(3)
    body.locator(".tw-library .tw-card").first.get_by_role("button", name="Delete", exact=True).click()
    expect(body.locator(".tw-library .tw-card")).to_have_count(2)
    click(page, "#twClose")
    # Assessment blueprint validates totals and available pool.
    click(page, '[data-tw-open="assessment"]')
    body.get_by_label("Target total marks").fill("21")
    body.get_by_role("button", name="Build assessment", exact=True).click()
    expect(page.locator("#twStatus")).to_contain_text("match the blueprint")
    body.get_by_label("Target total marks").fill("20")
    body.get_by_role("button", name="Build assessment", exact=True).click()
    expect(body.locator(".tw-total")).to_contain_text("15 questions · 20 total marks")
    first = body.locator(".tw-card").first
    first.get_by_label("Marks", exact=True).fill("4")
    first.get_by_label("Expected answer / model response").fill("ASSESSMENT SECRET ANSWER")
    first.get_by_label("Marking scheme / partial-credit rubric").fill("One mark for each of four accurate points.")
    first.get_by_role("button", name="Apply question", exact=True).click()
    expect(body.locator(".tw-total")).to_contain_text("23 total marks")
    click(page, "#twClose")
    assert "Total: 23 marks" in page.locator("#doc").inner_text()
    click(page, '[data-tpl="table"]')
    assert "Institution" in page.locator("#doc").inner_text()
    assert "My Civic Learning Book" in page.locator("#doc").inner_text()
    table_export = download(page, directory)
    assert "Institution" in table_export and "Total: 23 marks" in table_export
    click(page, '[data-tpl="classic"]')
    teacher = download(page, directory)
    assert "ASSESSMENT SECRET ANSWER" in teacher and "Total: 23 marks" in teacher
    click(page, '[data-m="student"]')
    student = download(page, directory)
    assert "ASSESSMENT SECRET ANSWER" not in student and "Total: 23 marks" in student
    click(page, '[data-m="teacher"]')
    click(page, '[data-tw-open="library"]')
    body.get_by_label("Pack or lesson-plan name").fill("Civics assessment")
    body.get_by_role("button", name="Save current document", exact=True).click()
    expect(body.locator(".tw-library")).to_contain_text("Civics assessment")
    click(page, "#twClose")
    page.reload()
    click(page, '[data-tw-open="library"]')
    body.locator(".tw-library .tw-card").filter(has_text="Civics assessment").get_by_role("button", name="Open", exact=True).click()
    assert "ASSESSMENT SECRET ANSWER" in page.locator("#doc").inner_text()
    assert "Total: 23 marks" in page.locator("#doc").inner_text()
    # All six Civics grades generate lessons and workbooks.
    click(page, '[data-tw-open="assessment"]')
    body.get_by_role("button", name="Return to course pack", exact=True).click()
    click(page, "#twClose")
    for band, grades in [("jh", [7, 8, 9]), ("sh", [10, 11, 12])]:
        click(page, f'[data-b="{band}"]')
        for grade in grades:
            value(page, "#grade", grade)
            click(page, "#gen")
            assert "Civics" in page.locator("#meta").inner_text()
            assert page.locator(".pk").count() == 6
            click(page, '[data-d="lp"]')
            assert "CIVICS" in page.locator("#doc").inner_text().upper()
            click(page, '[data-d="pack"]')
    # Save/reopen a weekly lesson plan, including its timing and teacher details.
    click(page, '[data-d="lp"]')
    click(page, '[data-pt="weekly"]')
    value(page, "#lpWeeks", 3)
    value(page, "#cvTeacher", "Teacher Example")
    click(page, '[data-tw-open="library"]')
    body.get_by_label("Pack or lesson-plan name").fill("Civics weekly plan")
    body.get_by_role("button", name="Save current document", exact=True).click()
    expect(body.locator(".tw-library")).to_contain_text("Civics weekly plan")
    click(page, "#twClose")
    page.reload()
    click(page, '[data-tw-open="library"]')
    body.locator(".tw-library .tw-card").filter(has_text="Civics weekly plan").get_by_role("button", name="Open", exact=True).click()
    assert page.locator("#lpWeeks").input_value() == "3"
    assert "Teacher Example" in page.locator("#doc").inner_text()
    assert "WEEKLY" in page.locator("#doc").inner_text()
    click(page, '[data-d="pack"]')
    # Automatic reset follows the current subject; old overrides do not leak.
    click(page, "#coverTextReset")
    assert page.locator(".cv-t1").text_content() == "CIVICS"
    click(page, '[data-s="hi"]')
    assert page.locator(".cv-t1").text_content() == "HISTORY"
    # Long user text remains inside the A4 cover (scaled rather than clipped).
    value(page, "#coverText-title", "A very long customized cover title " * 3)
    value(page, "#coverText-schoolLabel", "A long customized institution label")
    assert page.locator(".cv-content").evaluate("""e => {
      const art=e.closest('.cvart').getBoundingClientRect();
      return Array.from(e.querySelectorAll('.cv-head,.cv-panel,.cv-foot')).every(n => n.getBoundingClientRect().bottom <= art.bottom);
    }""")
    page.set_viewport_size({"width": 390, "height": 844})
    click(page, '[data-tw-open="library"]')
    expect(page.locator("#twTitle")).to_be_visible()
    assert page.locator("#teachingDialog").evaluate("e=>e.scrollWidth<=e.clientWidth+1")
    page.emulate_media(media="print")
    assert page.locator(".teaching-toolbar").evaluate("e=>getComputedStyle(e).display") == "none"
    assert page.locator("#teachingDialog").evaluate("e=>getComputedStyle(e).display") == "none"
    page.emulate_media(media="screen")
    click(page, "#twClose")
    assert not errors, errors
    browser.close()
    print("OK: offline library, backups, paired editor, assessment totals/keys, customizable covers, Civics 7–12, Word, print and mobile.")
