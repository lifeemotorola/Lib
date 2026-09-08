"""Temporary CI diagnostic: dump the real rendered running head for History.

Not part of the suite; added to find a CI-only failure and removed afterwards.
"""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

URL = Path(__file__).resolve().parent.parent.joinpath("index.html").as_uri()

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
    out["pageerrors"] = errs[:3]
    b.close()
print("DIAG " + json.dumps(out, ensure_ascii=False))
