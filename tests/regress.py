"""Regression: every subject/grade/session at the default 12pt, plus a
responsive sweep and a font-size sweep. Kept in the workspace so it
survives /tmp being cleared.

If the default playwright browser is not installed (offline sandboxes),
point PW_CHROMIUM at any recent chromium/chrome executable (with its
supporting libs on LD_LIBRARY_PATH) and the suite runs against that."""
from playwright.sync_api import sync_playwright
import os
import pathlib
# resolve index.html next to this test, so the suite runs in any checkout
URL=pathlib.Path(__file__).resolve().parent.parent.joinpath('index.html').as_uri()
PW_CHROMIUM=os.environ.get('PW_CHROMIUM') or None
SUBS=['en','pho','fr','sc','ma','ss','rm','pe','bi','ch','ph','ec','eg','gg']
DEV=[("Smart TV 4K",3840,2160),("Desktop 1440p",2560,1440),("Laptop 1366",1366,768),
     ("iPad portrait",768,1024),("Tablet small",600,960),("iPhone SE",375,667),
     ("Small handset",320,568)]
bad=[]
with sync_playwright() as p:
    b=p.chromium.launch(args=['--no-sandbox'],
                        **({"executable_path":PW_CHROMIUM} if PW_CHROMIUM else {}))

    # ---- packs: all subjects, all grades, both sessions, default 12pt ----
    ctx=b.new_context(viewport={'width':1600,'height':1000}); pg=ctx.new_page()
    errs=[]; pg.on("pageerror",lambda e:errs.append(str(e)))
    pg.goto(URL); pg.wait_for_timeout(600)
    assert pg.eval_on_selector("#fsz","e=>e.value")=="12","default must be 12pt"
    for sess in ("student","teacher"):
        pg.eval_on_selector(f".sess[data-m='{sess}']","e=>e.click()"); pg.wait_for_timeout(150)
        for s in SUBS:
            pg.eval_on_selector(f".subtab[data-s='{s}']","e=>e.click()"); pg.wait_for_timeout(250)
            # a subject may span several bands; the grade list shows one band at
            # a time, so walk every band tab that is offered
            bands=pg.eval_on_selector_all(".bandtab","e=>e.map(x=>x.dataset.b)") or [None]
            grades=[]
            for bnd in bands:
                if bnd:
                    pg.eval_on_selector(f".bandtab[data-b='{bnd}']","e=>e.click()"); pg.wait_for_timeout(250)
                for gv in pg.eval_on_selector_all("#grade option","o=>o.map(x=>x.value)"):
                    grades.append((bnd,gv))
            for bnd,g in grades:
                if bnd:
                    pg.eval_on_selector(f".bandtab[data-b='{bnd}']","e=>e.click()"); pg.wait_for_timeout(200)
                pg.eval_on_selector("#grade",f"e=>{{e.value='{g}';e.dispatchEvent(new Event('change',{{bubbles:true}}));}}")
                pg.wait_for_timeout(200)
                pg.eval_on_selector("#gen","e=>e.click()"); pg.wait_for_timeout(900)
                r=pg.evaluate("""()=>{const ps=[...document.querySelectorAll('.page')];
                  return {n:ps.length,w:ps[0].offsetWidth,h:ps[0].offsetHeight,
                          fs:getComputedStyle(ps[0]).fontSize,
                          keys:document.body.innerText.includes('Answer Key')};}""")
                if r['w']!=794 or r['h']!=1123: bad.append((sess,s,g,"A4",r))
                if r['fs']!="16px": bad.append((sess,s,g,"fs",r['fs']))
                if not r['n']: bad.append((sess,s,g,"empty",r))
                if sess=="student" and r['keys']: bad.append((sess,s,g,"keys leaked",1))
    print("packs done, page errors:",errs[:3])
    ctx.close()

    # ---- WASSCE track: all subjects, both sessions, default 12pt ----
    ctx=b.new_context(viewport={'width':1600,'height':1000}); pg=ctx.new_page()
    errs=[]; pg.on("pageerror",lambda e:errs.append(str(e)))
    pg.goto(URL); pg.wait_for_timeout(600)
    pg.eval_on_selector("#tracks .track[data-t='wa']","e=>e.click()"); pg.wait_for_timeout(400)
    WASUBS=['wma','wen','wbio','wch','wph','weco','wgg','whis','wag','wali','wcrs']
    for sess in ("student","teacher"):
        pg.eval_on_selector(f".sess[data-m='{sess}']","e=>e.click()"); pg.wait_for_timeout(150)
        for s in WASUBS:
            pg.eval_on_selector(f".subtab[data-s='{s}']","e=>e.click()"); pg.wait_for_timeout(250)
            grades=pg.eval_on_selector_all("#grade option","o=>o.map(x=>x.value)")
            for g in grades:
                pg.eval_on_selector("#grade",f"e=>{{e.value='{g}';e.dispatchEvent(new Event('change',{{bubbles:true}}));}}")
                pg.wait_for_timeout(200)
                pg.eval_on_selector("#gen","e=>e.click()"); pg.wait_for_timeout(900)
                r=pg.evaluate("""()=>{const ps=[...document.querySelectorAll('.page')];
                  return {n:ps.length,w:ps[0].offsetWidth,h:ps[0].offsetHeight,
                          fs:getComputedStyle(ps[0]).fontSize,
                          keys:document.body.innerText.includes('Answer Key')};}""")
                if r['w']!=794 or r['h']!=1123: bad.append((sess,s,g,"A4",r))
                if r['fs']!="16px": bad.append((sess,s,g,"fs",r['fs']))
                if not r['n']: bad.append((sess,s,g,"empty",r))
                if sess=="student" and r['keys']: bad.append((sess,s,g,"keys leaked",1))
    print("wassce done, page errors:",errs[:3])
    # back to the National Curriculum track
    pg.eval_on_selector("#tracks .track[data-t='curr']","e=>e.click()"); pg.wait_for_timeout(300)
    ctx.close()

    # ---- font-size sweep ----
    ctx=b.new_context(viewport={'width':1600,'height':1000}); pg=ctx.new_page()
    pg.goto(URL); pg.wait_for_timeout(500)
    pg.eval_on_selector("#gen","e=>e.click()"); pg.wait_for_timeout(1400)
    last=0
    for v,exp in [("8","10.6667px"),("12","16px"),("14","18.6667px"),("20","26.6667px")]:
        pg.eval_on_selector("#fsz",f"e=>{{e.value='{v}';e.dispatchEvent(new Event('input',{{bubbles:true}}));}}")
        pg.wait_for_timeout(1100)
        r=pg.evaluate("""()=>{const p=document.querySelector('.page');
          return {fs:getComputedStyle(p).fontSize,w:p.offsetWidth,h:p.offsetHeight,
                  n:document.querySelectorAll('.page').length};}""")
        if r['fs']!=exp: bad.append(("fsz",v,r['fs']))
        if r['w']!=794 or r['h']!=1123: bad.append(("fsz A4",v,r))
        if r['n']<last: bad.append(("fsz pages not monotonic",v,r['n'],last))
        last=r['n']
        print(f"  {v}pt -> {r['fs']} {r['w']}x{r['h']} pages={r['n']}")
    ctx.close()

    # ---- responsive sweep at default 12pt ----
    for name,w,h in DEV:
        ctx=b.new_context(viewport={'width':w,'height':h}); pg=ctx.new_page()
        pg.goto(URL); pg.wait_for_timeout(500)
        if pg.eval_on_selector("#panelToggle","e=>getComputedStyle(e).display")!="none":
            pg.eval_on_selector("#panelToggle","e=>e.click()"); pg.wait_for_timeout(250)
        pg.eval_on_selector("#gen","e=>{e.scrollIntoView({block:'center'});e.click();}")
        pg.wait_for_timeout(1500)
        r=pg.evaluate("""()=>{const p=document.querySelector('.page');
          const r=p.getBoundingClientRect();
          return {w:p.offsetWidth,h:p.offsetHeight,rw:r.width,
                  n:document.querySelectorAll('.page').length,
                  sw:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
                  vw:window.innerWidth};}""")
        ok = r['w']==794 and r['h']==1123 and r['rw']<=r['vw']+2 and r['sw']<=r['vw']+2
        if not ok: bad.append((name,r))
        print(f"  {name:16} {w}x{h} sheet={r['w']}x{r['h']} scaled={r['rw']:.0f} pages={r['n']} ok={ok}")
        ctx.close()
    b.close()
print("\nBAD:",bad)
