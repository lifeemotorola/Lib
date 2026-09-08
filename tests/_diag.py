"""Temporary CI diagnostic: dump the real rendered running head for History.

Not part of the suite; added to find a CI-only failure and removed afterwards.
"""
import json
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

TARGET = sys.argv[1] if len(sys.argv) > 1 else str(
    Path(__file__).resolve().parent.parent.joinpath("index.html"))
URL = Path(TARGET).as_uri()

with sync_playwright() as pw:
    b = pw.chromium.launch(args=["--no-sandbox", "--disable-dev-shm-usage"])
    ctx = b.new_context(viewport={"width": 1500, "height": 1000}, accept_downloads=True)
    ctx.set_offline(True)
    pg = ctx.new_page()
    errs = []
    pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.goto(URL)
    pg.wait_for_selector(".subtab[data-s='hi']")
    pg.locator(".subtab[data-s='hi']").evaluate("el => el.click()")
    pg.wait_for_timeout(300)
    out = {
        "grade_options": pg.locator("#grade option").evaluate_all("els=>els.map(e=>e.value)"),
        "band_tabs": pg.locator("#bands .bandtab").evaluate_all("els=>els.map(e=>e.dataset.b)"),
        "grade_value": pg.eval_on_selector("#grade", "e=>e.value"),
        "jhNote": pg.eval_on_selector("#jhNote", "e=>e.textContent.slice(0,80)"),
    }
    pg.eval_on_selector("#grade", """e=>{e.value='10';e.dispatchEvent(new Event('change',{bubbles:true}))}""")
    pg.locator("#session .sess[data-m='student']").evaluate("el=>el.click()")
    pg.wait_for_timeout(200)
    pg.locator("#gen").evaluate("el=>el.click()")
    pg.wait_for_timeout(900)
    out["pages"] = pg.locator("#doc .page").count()
    out["meta"] = pg.eval_on_selector("#meta", "e=>e.textContent")
    out["phead_first"] = pg.locator("#doc .phead span").first.inner_text()
    out["pcur_subject"] = pg.evaluate("PACK_CUR_SUBJECT")
    out["pcur_grade"] = pg.evaluate("PACK_CUR_GRADE")
    out["pcur_grade_type"] = pg.evaluate("typeof PACK_CUR_GRADE")
    txt = pg.locator("#doc").inner_text()
    out["has_expected"] = "HISTORY \u00b7 SENIOR HIGH GRADE 10" in txt
    out["doc_head"] = txt[:260].replace("\n", " / ")
    out["noncover_pages"] = pg.locator("#doc .page:not(.coverpage)").count()
    out["phead_content_first"] = pg.locator(
        "#doc .page:not(.coverpage) .phead").first.inner_text().replace("\n", " | ")
    out["phead_transform"] = pg.locator(
        "#doc .page:not(.coverpage) .phead span").first.evaluate(
        "e=>getComputedStyle(e).textTransform")
    out["inner_len"] = len(txt)
    out["inner_has_upper_senior"] = "SENIOR HIGH" in txt
    out["textcontent_has_plain"] = "Senior High Grade 10" in pg.eval_on_selector("#doc", "e=>e.textContent")
    out["upper_hits"] = pg.evaluate(
        """() => { const t = document.querySelector('#doc').innerText.toUpperCase();
             const i = t.indexOf('SENIOR HIGH'); return i < 0 ? 'none' : t.slice(i-40, i+60); }""")
    out["pageerrors"] = errs[:3]
    b.close()
out["target"] = Path(TARGET).name
print("DIAG " + json.dumps(out, ensure_ascii=False))
