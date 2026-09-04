#!/usr/bin/env python3
"""UI / layout regression for the course pack platform.

Guards the panel redesign: the three always-visible choices, the five
collapsible dropdown sections, their live count badges, the sticky
action bar, and no horizontal overflow on any device.

Run:  python3 tests/ui.py
"""
import sys, pathlib
from playwright.sync_api import sync_playwright

HTML = "file://" + str(pathlib.Path(__file__).resolve().parent.parent / "index.html")
DDS = ["ddUnits", "ddSheets", "ddParts", "ddCover", "ddFmt"]
BADGES = ["nUnits", "nSheets", "nParts", "nCover", "nFmt"]
DEVICES = [
    ("Smart TV 4K", 3840, 2160), ("Desktop 1440p", 2560, 1440),
    ("Laptop 1366", 1366, 768), ("iPad portrait", 768, 1024),
    ("Tablet small", 600, 960), ("iPhone SE", 375, 667),
    ("Small handset", 320, 568),
]
bad = []


def badges(pg):
    return pg.evaluate(
        "(ids)=>ids.map(i=>{const e=document.getElementById(i);return e?e.textContent:null})", BADGES)


with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1366, "height": 900})
    pg.goto(HTML); pg.wait_for_timeout(900)

    # --- 0. install metadata and Liberia-map favicon are present ---
    pwa = pg.evaluate("""()=>({
        manifest:document.querySelector('link[rel="manifest"]')?.getAttribute('href'),
        favicon:document.querySelector('link[rel="icon"]')?.getAttribute('href'),
        touch:document.querySelector('link[rel="apple-touch-icon"]')?.getAttribute('href'),
        install:!!document.getElementById('installApp')
    })""")
    if pwa["manifest"] != "manifest.webmanifest" or not (pwa["favicon"] or "").startswith("data:image/png;base64,"):
        bad.append(f"PWA manifest or inlined favicon missing: {pwa}")
    if pwa["touch"] != "assets/icons/apple-touch-icon.png" or not pwa["install"]:
        bad.append(f"touch icon or install control missing: {pwa}")

    # --- 1. the three key choices are visible without opening anything ---
    for sel, name in [("#session", "session"), ("#subjects", "subject"), ("#grade", "grade")]:
        if not pg.eval_on_selector(sel, "e=>e.offsetHeight>0"):
            bad.append(f"{name} not visible by default")

    # --- 2. every dropdown starts closed, opens, and closes again ---
    for d in DDS:
        if pg.eval_on_selector(f"#{d}", "e=>e.open"):
            bad.append(f"{d} should start closed")
        pg.eval_on_selector(f"#{d}>summary", "e=>e.click()"); pg.wait_for_timeout(90)
        if not pg.eval_on_selector(f"#{d} .dd-b", "e=>e.offsetHeight>0"):
            bad.append(f"{d} body not shown after opening")
        pg.eval_on_selector(f"#{d}>summary", "e=>e.click()"); pg.wait_for_timeout(90)
        if pg.eval_on_selector(f"#{d}", "e=>e.open"):
            bad.append(f"{d} did not close")

    # --- 3. badges exist and track the controls they summarise ---
    init = badges(pg)
    if any(x in (None, "") for x in init):
        bad.append(f"empty badge at start: {init}")
    print("  badges start:", init)

    pg.eval_on_selector("#ddUnits>summary", "e=>e.click()")
    pg.eval_on_selector("#pkNone", "e=>e.click()"); pg.wait_for_timeout(120)
    if not badges(pg)[0].startswith("0 of"):
        bad.append("units badge did not fall to 0")
    pg.eval_on_selector("#pkAll", "e=>e.click()"); pg.wait_for_timeout(120)
    u = badges(pg)[0]
    if u.split(" of ")[0] != u.split(" of ")[1]:
        bad.append(f"units badge not full after Select all: {u}")

    pg.eval_on_selector("#ddSheets>summary", "e=>e.click()")
    pg.eval_on_selector("#alloff", "e=>e.click()"); pg.wait_for_timeout(120)
    if not badges(pg)[1].startswith("0 of"):
        bad.append("sheets badge did not fall to 0")
    pg.eval_on_selector("#allon", "e=>e.click()"); pg.wait_for_timeout(120)

    pg.eval_on_selector("#fsz", "e=>{e.value='16';e.dispatchEvent(new Event('input',{bubbles:true}))}")
    pg.wait_for_timeout(200)
    if badges(pg)[4] != "16pt":
        bad.append(f"format badge wrong: {badges(pg)[4]}")
    pg.eval_on_selector("#fsz", "e=>{e.value='12';e.dispatchEvent(new Event('input',{bubbles:true}))}")
    pg.wait_for_timeout(200)

    # teacher session must reveal the answer-key option and count it at once
    before = badges(pg)[2]
    pg.eval_on_selector(".sess[data-m='teacher']", "e=>e.click()"); pg.wait_for_timeout(700)
    after = badges(pg)[2]
    if before == after:
        bad.append(f"pack-contents badge ignored the teacher switch ({before})")
    print(f"  contents badge student={before} teacher={after}")
    pg.eval_on_selector(".sess[data-m='student']", "e=>e.click()"); pg.wait_for_timeout(600)

    # switching subject must rebuild both lists and their badges
    pg.eval_on_selector(".subtab[data-s='ma']", "e=>e.click()"); pg.wait_for_timeout(800)
    if badges(pg)[1] in (None, "", "0 of 0"):
        bad.append("sheets badge broken after subject switch")
    pg.eval_on_selector(".subtab[data-s='en']", "e=>e.click()"); pg.wait_for_timeout(800)

    # --- 3b. customization: subject artwork, templates, auto fields, persistence ---
    art = pg.evaluate("""()=>{const a=window.SUBJECT_COVER_ART||{};
        return {ids:Object.keys(a), png:Object.values(a).every(x=>x.url.startsWith('data:image/png;base64,')),
                unique:new Set(Object.values(a).map(x=>x.url)).size};}""")
    expected_art = {"en", "pho", "fr", "sc", "ma", "ss", "rm", "pe", "bi", "ch", "ph", "ec", "eg", "gg", "li"}
    if set(art["ids"]) != expected_art or not art["png"] or art["unique"] != 15:
        bad.append(f"subject cover artwork incomplete or duplicated: {art}")
    pg.eval_on_selector("#ddCover>summary", "e=>e.click()"); pg.wait_for_timeout(150)
    tpls = pg.eval_on_selector_all(".tplbtn", "e=>e.map(x=>x.dataset.tpl)")
    print("  cover templates:", tpls)
    if len(tpls) < 6:
        bad.append(f"expected 6 cover templates, found {len(tpls)}")
    pg.eval_on_selector("#cvSchool",
        "e=>{e.value='Test Academy';e.dispatchEvent(new Event('input',{bubbles:true}))}")
    pg.wait_for_timeout(200)
    for t in tpls:
        pg.eval_on_selector(f".tplbtn[data-tpl='{t}']", "e=>e.click()")
        pg.wait_for_timeout(900)
        r = pg.evaluate("""()=>{const p=document.querySelector('.page'),
              c=document.querySelector('.cvart');
            return {w:p.offsetWidth,h:p.offsetHeight,art:!!c,
                    over:c?(c.scrollHeight>c.clientHeight+2):false,
                    txt:document.querySelector('.page').innerText};}""")
        if r["w"] != 794 or r["h"] != 1123:
            bad.append(f"cover {t}: sheet {r['w']}x{r['h']} not A4")
        if r["over"]:
            bad.append(f"cover {t}: artwork overflows the sheet")
        # subject and class must appear on every cover, whatever the template
        if "SUBJECT" not in r["txt"].upper() or "CLASS" not in r["txt"].upper():
            bad.append(f"cover {t}: missing Subject/Class")
        if "Test Academy" not in r["txt"]:
            bad.append(f"cover {t}: school name not shown")
    # school details persist across a reload
    pg.eval_on_selector("#cvSave", "e=>e.click()"); pg.wait_for_timeout(300)
    pg.reload(); pg.wait_for_timeout(1200)
    if pg.eval_on_selector("#cvSchool", "e=>e.value") != "Test Academy":
        bad.append("school name did not persist across reload")
    pg.evaluate("()=>localStorage.removeItem('lncpg.cover.v1')")

    # --- 3c. logo and background uploads ---
    FIX = pathlib.Path(__file__).resolve().parent / "fixtures"
    pg.eval_on_selector("#ddCover>summary", "e=>e.click()"); pg.wait_for_timeout(150)
    pg.eval_on_selector(".tplbtn[data-tpl='classic']", "e=>e.click()"); pg.wait_for_timeout(700)
    pg.set_input_files("#upLogo", str(FIX / "logo.png")); pg.wait_for_timeout(1600)
    pg.set_input_files("#upBg", str(FIX / "bg.jpg")); pg.wait_for_timeout(2000)
    r = pg.evaluate("""()=>{const c=document.querySelector('.cvart'),
          p=document.querySelector('.page');
        return {logo:!!c.querySelector('.cv-logo img'), bg:!!c.querySelector('.cv-bg'),
                w:p.offsetWidth, h:p.offsetHeight,
                over:c.scrollHeight>c.clientHeight+2,
                fade:getComputedStyle(document.getElementById('fadeRow')).display};}""")
    print("  uploads:", r)
    if not r["logo"]:
        bad.append("uploaded logo did not render on the cover")
    if not r["bg"]:
        bad.append("uploaded background did not render on the cover")
    if r["over"]:
        bad.append("cover overflows the sheet once images are added")
    if r["w"] != 794 or r["h"] != 1123:
        bad.append(f"cover with images not A4: {r['w']}x{r['h']}")
    if r["fade"] == "none":
        bad.append("fade control hidden although a background is set")

    # the fade slider must drive the veil opacity
    pg.eval_on_selector("#cvFade",
        "e=>{e.value='40';e.dispatchEvent(new Event('input',{bubbles:true}))}")
    pg.wait_for_timeout(1100)
    op = pg.eval_on_selector(".cv-veil", "e=>e.style.opacity")
    if op not in ("0.40", "0.4"):
        bad.append(f"fade slider did not set veil opacity (got {op})")

    # removing uploads restores the emoji crest and bundled subject artwork
    pg.eval_on_selector("#rmBg", "e=>e.click()"); pg.wait_for_timeout(1100)
    pg.eval_on_selector("#rmLogo", "e=>e.click()"); pg.wait_for_timeout(1100)
    r2 = pg.evaluate("""()=>{const c=document.querySelector('.cvart');
        return {logo:!!c.querySelector('.cv-logo img'), bg:!!c.querySelector('.cv-bg'),
                crest:!!c.querySelector('.cv-emblem'),
                subjectLabel:document.querySelector('#upBgPrev small')?.textContent};}""")
    if r2["logo"]:
        bad.append("Remove did not clear the uploaded logo")
    if not r2["bg"] or r2["subjectLabel"] != "Subject artwork":
        bad.append("removing custom background did not restore subject artwork")
    if not r2["crest"]:
        bad.append("emoji crest did not return after the logo was removed")
    pg.evaluate("()=>localStorage.removeItem('lncpg.coverimg.v1')")

    # --- 4. generate still works from the sticky bar ---
    pg.eval_on_selector("#gen", "e=>e.click()"); pg.wait_for_timeout(1200)
    n = pg.evaluate("()=>document.querySelectorAll('.page').length")
    if n < 1:
        bad.append("generate produced no pages")
    print("  generated pages:", n)
    pg.close()

    # --- 4b. the preview sheet is never cut off at any width ---
    # Regression: a `transform-origin: top center` scaled the sheet about the
    # centre of its fixed 794px layout box. Where the column was narrower than
    # the sheet that centre sat right of the column centre, so the preview hung
    # past the right edge and looked half hidden.
    print("  preview fit:")
    for w in (1920, 1400, 1200, 1120, 1080, 1040, 1000, 985, 900, 850, 800, 700, 600, 375):
        pg = b.new_page(viewport={"width": w, "height": 900})
        pg.goto(HTML); pg.wait_for_timeout(700)
        if pg.eval_on_selector("#panelToggle", "e=>getComputedStyle(e).display") != "none":
            pg.eval_on_selector("#panelToggle", "e=>e.click()"); pg.wait_for_timeout(200)
        pg.eval_on_selector("#gen", "e=>{e.scrollIntoView({block:'center'});e.click();}")
        pg.wait_for_timeout(1300)
        r = pg.evaluate("""()=>{const m=document.querySelector('main'),
              s=document.querySelector('.page');
            const mr=m.getBoundingClientRect(), rc=s.getBoundingClientRect(),
                  de=document.documentElement;
            return {ps:parseFloat(getComputedStyle(de).getPropertyValue('--ps')),
              visW:Math.round(rc.width),
              gapL:Math.round(rc.left-mr.left), gapR:Math.round(mr.right-rc.right),
              offView: rc.left<-1 || rc.right>window.innerWidth+1,
              hScroll: de.scrollWidth>de.clientWidth+1};}""")
        # never clipped by the viewport, and no horizontal scrollbar
        if r["offView"]:
            bad.append(f"preview {w}px: sheet runs outside the viewport")
        if r["hScroll"]:
            bad.append(f"preview {w}px: horizontal scrollbar appeared")
        # centred in the column, except on phones where an 8px bleed is intended
        if w > 640 and abs(r["gapL"] - r["gapR"]) > 3:
            bad.append(f"preview {w}px: off-centre (L{r['gapL']} R{r['gapR']})")
        print(f"    {w:>5}px scale={r['ps']:.3f} sheet={r['visW']}px "
              f"gaps L{r['gapL']}/R{r['gapR']} clipped={r['offView']}")
        pg.close()

    # --- 5. layout holds on every device, action bar always reachable ---
    for name, w, h in DEVICES:
        pg = b.new_page(viewport={"width": w, "height": h})
        pg.goto(HTML); pg.wait_for_timeout(700)
        if pg.eval_on_selector("#panelToggle", "e=>getComputedStyle(e).display") != "none":
            pg.eval_on_selector("#panelToggle", "e=>e.click()"); pg.wait_for_timeout(300)
        r = pg.evaluate("""()=>{
            const de=document.documentElement, g=document.querySelector('#gen');
            const gr=g.getBoundingClientRect();
            return {sw:de.scrollWidth, cw:de.clientWidth,
                    genVisible: gr.width>0 && gr.height>0,
                    ddCount: document.querySelectorAll('.dd').length};
        }""")
        over = r["sw"] > r["cw"] + 1
        ok = (not over) and r["genVisible"] and r["ddCount"] == 5
        print(f"  {name:15s} {w}x{h} overflow={over} gen={r['genVisible']} dds={r['ddCount']} ok={ok}")
        if over:
            bad.append(f"{name}: horizontal overflow {r['sw']}>{r['cw']}")
        if not r["genVisible"]:
            bad.append(f"{name}: generate button not visible")
        if r["ddCount"] != 5:
            bad.append(f"{name}: expected 5 dropdowns, found {r['ddCount']}")
        pg.close()
    # --- 6. duplex print helper (book print sequence) ---
    pg = b.new_page(viewport={"width": 1366, "height": 900})
    pg.goto(HTML); pg.wait_for_timeout(800)
    pg.eval_on_selector("#gen", "e=>e.click()"); pg.wait_for_timeout(1200)
    n = int(pg.eval_on_selector("#pageN", "e=>e.textContent"))
    pg.eval_on_selector("#dup", "e=>e.click()"); pg.wait_for_timeout(250)
    if pg.eval_on_selector("#bookMask", "e=>e.hidden"):
        bad.append("duplex helper did not open")
    if not pg.eval_on_selector("#results", "e=>e.classList.contains('show')"):
        bad.append("duplex helper did not auto-generate the open pack")
    got = pg.eval_on_selector("#pageCount", "e=>e.value")
    if int(got) != n:
        bad.append(f"duplex prefill {got} != pack pages {n}")
    odd = pg.eval_on_selector("#oddSequence", "e=>e.textContent")
    even = pg.eval_on_selector("#evenSequence", "e=>e.textContent")
    exp_odd = ",".join(str(i) for i in range(1, n + 1, 2))
    exp_even = ",".join(str(i) for i in range(2, n + 1, 2))
    if odd != exp_odd or even != exp_even:
        bad.append(f"duplex sequences wrong for {n} pages")
    if pg.eval_on_selector("#summary", "e=>e.textContent").find(str((n + 1) // 2)) < 0:
        bad.append("duplex summary sheets count missing")
    pg.eval_on_selector("#bkClear", "e=>e.click()"); pg.wait_for_timeout(120)
    if pg.eval_on_selector("#results", "e=>e.classList.contains('show')"):
        bad.append("duplex clear did not hide results")
    pg.eval_on_selector("#pageCount", "e=>{e.value='7';e.dispatchEvent(new Event('input',{bubbles:true}))}")
    pg.eval_on_selector("#bkGen", "e=>e.click()"); pg.wait_for_timeout(200)
    odd = pg.eval_on_selector("#oddSequence", "e=>e.textContent")
    even = pg.eval_on_selector("#evenSequence", "e=>e.textContent")
    if odd != "1, 3, 5, 7" or even != "2, 4, 6":
        bad.append(f"duplex manual 7-page run wrong: {odd!r} / {even!r}")
    pg.eval_on_selector("#bkClose", "e=>e.click()"); pg.wait_for_timeout(150)
    if not pg.eval_on_selector("#bookMask", "e=>e.hidden"):
        bad.append("duplex helper did not close")
    print(f"  duplex helper: pack pages={n} odd/even ok")
    pg.close()

    b.close()

print("\nBAD:", bad)
sys.exit(1 if bad else 0)
