/* hasSy Component Library — data: Buttons
   Every item.code is ONE complete standalone HTML document.
   Paste it into an .html file and open it in a browser. */
(function () {
  var C = (window.COMPONENTS = window.COMPONENTS || []);
  C.push({
    category: "Buttons",
    items: [
      {
        id: "button-variants",
        name: "Button Set",
        desc: "Solid, soft and ghost button variants with hover and focus states.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Button Set — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:26px;max-width:52ch}
.row{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
.row + .row{margin-top:20px}
.tag{width:100%;font-size:.66rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);font-weight:800;margin-bottom:2px}
.btn{border:0;cursor:pointer;border-radius:11px;padding:11px 20px;font-weight:700;font-size:.9rem;transition:transform .18s,box-shadow .18s,background .18s,color .18s,filter .18s}
.btn:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255,153,67,.4)}
.btn:active{transform:translateY(0) scale(.97)}
.btn.solid{background:var(--accent);color:#14211f}
.btn.solid:hover{filter:brightness(1.08);transform:translateY(-2px);box-shadow:0 12px 24px rgba(255,153,67,.32)}
.btn.ok{background:var(--ok);color:#0b2019}
.btn.ok:hover{filter:brightness(1.08);transform:translateY(-2px);box-shadow:0 12px 24px rgba(62,207,142,.3)}
.btn.soft{background:rgba(255,153,67,.15);color:var(--accent)}
.btn.soft:hover{background:rgba(255,153,67,.26);transform:translateY(-2px)}
.btn.soft.err{background:rgba(255,107,107,.14);color:var(--err)}
.btn.soft.err:hover{background:rgba(255,107,107,.26)}
.btn.ghost{background:transparent;color:var(--text);border:1px solid var(--line)}
.btn.ghost:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}
.hint{margin-top:26px;font-size:.8rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Variants</span>
  <h1>One button, three weights</h1>
  <p class="lede">Solid carries the main action, soft adds quiet emphasis and ghost keeps the page calm — all sharing one radius and focus ring.</p>
  <div class="row"><span class="tag">Solid</span>
    <button class="btn solid">Get started</button>
    <button class="btn ok">Approve</button>
    <button class="btn solid">Book a demo</button>
  </div>
  <div class="row"><span class="tag">Soft</span>
    <button class="btn soft">Continue</button>
    <button class="btn soft">Invite team</button>
    <button class="btn soft err">Delete project</button>
  </div>
  <div class="row"><span class="tag">Ghost</span>
    <button class="btn ghost">Cancel</button>
    <button class="btn ghost">Preview</button>
    <button class="btn ghost">Read docs</button>
  </div>
  <p class="hint">Hover to lift a button · press <b>Tab</b> to reveal the focus ring · click for the press state.</p>
</div>
</body>
</html>`
      },
      {
        id: "outline-button",
        name: "Outline Button",
        desc: "Outlined action button that fills on hover.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Outline Button — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:34px 30px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;max-width:46ch;margin:0 auto 28px}
.actions{display:flex;flex-wrap:wrap;gap:16px;justify-content:center;align-items:center}
.btn-o{position:relative;overflow:hidden;isolation:isolate;border:2px solid var(--accent);background:transparent;color:var(--accent);border-radius:12px;padding:13px 28px;font-weight:800;font-size:.95rem;cursor:pointer;transition:color .25s,transform .2s,box-shadow .25s}
.btn-o::before{content:"";position:absolute;inset:0;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform .32s cubic-bezier(.22,1,.36,1);z-index:-1}
.btn-o:hover{color:#14211f;transform:translateY(-2px);box-shadow:0 14px 30px rgba(255,153,67,.35)}
.btn-o:hover::before{transform:scaleX(1)}
.btn-o:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255,153,67,.4)}
.btn-o:active{transform:translateY(0) scale(.98)}
.btn-o.pill{border-radius:999px;padding:13px 34px}
.btn-o.neutral{border-color:var(--line);color:var(--text)}
.btn-o.neutral::before{background:rgba(255,255,255,.9)}
.btn-o.neutral:hover{border-color:rgba(255,255,255,.9);color:#14211f;box-shadow:0 14px 30px rgba(0,0,0,.35)}
.btn-o.sm{padding:9px 20px;font-size:.85rem}
.hint{margin-top:28px;font-size:.8rem;color:var(--muted)}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Outline</span>
  <h1>Fill sweeps in from the left</h1>
  <p class="lede">The border stays put while a pseudo-element wipes the accent across the button — text flips to dark for contrast.</p>
  <div class="actions">
    <button class="btn-o">Start free trial</button>
    <button class="btn-o pill">See pricing →</button>
    <button class="btn-o neutral">Documentation</button>
    <button class="btn-o sm">Skip for now</button>
  </div>
  <p class="hint">Hover each button to trigger the <b>sweep fill</b> · works at any size.</p>
</div>
</body>
</html>`
      },
      {
        id: "icon-button",
        name: "Icon Button",
        desc: "Square icon-only button with aria-label and tooltip title.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Icon Button — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:26px;max-width:52ch}
.row{display:flex;flex-wrap:wrap;gap:14px;align-items:center}
.row + .row{margin-top:22px}
.tag{width:100%;font-size:.66rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);font-weight:800}
.ib{width:46px;height:46px;border-radius:13px;display:grid;place-items:center;background:var(--panel-2);border:1px solid var(--line);color:var(--text);font-size:1.15rem;cursor:pointer;transition:transform .18s,box-shadow .2s,border-color .2s,color .2s,background .2s}
.ib:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-3px);box-shadow:0 12px 24px rgba(0,0,0,.4)}
.ib:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255,153,67,.4)}
.ib:active{transform:translateY(0) scale(.94)}
.ib.solid{background:var(--accent);border-color:var(--accent);color:#14211f}
.ib.solid:hover{color:#14211f;filter:brightness(1.08)}
.ib.ghost{background:transparent}
.ib.danger:hover{border-color:var(--err);color:var(--err);background:rgba(255,107,107,.12);box-shadow:0 12px 24px rgba(255,107,107,.22)}
.ib.round{border-radius:50%}
.ib.sm{width:38px;height:38px;font-size:.95rem;border-radius:11px}
.hint{margin-top:26px;font-size:.8rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Icon only</span>
  <h1>Compact controls with real labels</h1>
  <p class="lede">Every button carries an aria-label for screen readers and a title tooltip for pointer users — hover any icon to see it.</p>
  <div class="row"><span class="tag">Default set</span>
    <button class="ib" aria-label="Settings" title="Settings">⚙</button>
    <button class="ib" aria-label="Add to favorites" title="Add to favorites">♥</button>
    <button class="ib danger" aria-label="Close" title="Close">✕</button>
    <button class="ib" aria-label="Edit" title="Edit">✎</button>
    <button class="ib" aria-label="Share" title="Share">↗</button>
  </div>
  <div class="row"><span class="tag">Variants</span>
    <button class="ib solid round" aria-label="Add item" title="Add item">＋</button>
    <button class="ib ghost" aria-label="Refresh" title="Refresh">⟳</button>
    <button class="ib sm" aria-label="More options" title="More options">⋮</button>
    <button class="ib sm solid" aria-label="Play" title="Play">▶</button>
    <button class="ib round danger" aria-label="Delete" title="Delete">🗑</button>
  </div>
  <p class="hint">Hover for the <b>native tooltip</b> · Tab through to check the focus ring.</p>
</div>
</body>
</html>`
      }
      ,
      {
        id: "button-group",
        name: "Button Group",
        desc: "Connected segmented control with an active selection.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Button Group — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:34px 30px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;max-width:48ch;margin:0 auto 26px}
.seg{display:inline-flex;background:rgba(0,0,0,.28);border:1px solid var(--line);border-radius:14px;padding:5px;gap:4px;flex-wrap:wrap;justify-content:center}
.seg button{border:0;background:transparent;color:var(--muted);font-weight:700;font-size:.9rem;padding:10px 20px;border-radius:10px;cursor:pointer;transition:.2s}
.seg button:hover{color:var(--text);background:rgba(255,255,255,.06)}
.seg button[aria-pressed="true"]{background:var(--accent);color:#14211f;box-shadow:0 6px 16px rgba(255,153,67,.35)}
.seg button:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255,153,67,.4)}
.seg.icons button{padding:9px 16px;font-size:1rem}
.status{margin-top:24px;display:inline-flex;gap:9px;align-items:center;background:rgba(0,0,0,.25);border:1px dashed var(--line);border-radius:999px;padding:9px 18px;font-size:.85rem;color:var(--muted)}
.status b{color:var(--accent)}
.hint{margin-top:22px;font-size:.8rem;color:var(--muted)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Segmented</span>
  <h1>Connected button group</h1>
  <p class="lede">Buttons share one container and border rhythm so the active pill reads as a single selection, not four separate controls.</p>
  <div class="seg" id="seg" role="group" aria-label="Chart range">
    <button type="button" aria-pressed="false">Day</button>
    <button type="button" aria-pressed="true">Week</button>
    <button type="button" aria-pressed="false">Month</button>
    <button type="button" aria-pressed="false">Year</button>
  </div>
  <div style="height:16px"></div>
  <div class="seg icons" id="seg2" role="group" aria-label="View mode">
    <button type="button" aria-pressed="true" title="Grid view">▦</button>
    <button type="button" aria-pressed="false" title="List view">☰</button>
    <button type="button" aria-pressed="false" title="Timeline view">≣</button>
  </div>
  <p class="status">Selected range: <b id="out">Week</b></p>
  <p class="hint">Click a segment — the accent pill snaps over and the status below updates.</p>
</div>
<script>
function wire(id, outId) {
  var seg = document.getElementById(id);
  var out = outId ? document.getElementById(outId) : null;
  var btns = seg.querySelectorAll('button');
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      btns.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      if (out && b.textContent.trim()) out.textContent = b.textContent.trim();
    });
  });
}
wire('seg', 'out');
wire('seg2', null);
</script>
</body>
</html>`
      },
      {
        id: "fab",
        name: "Floating Action Button",
        desc: "FAB that expands into a speed-dial of secondary actions.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Floating Action Button — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5;padding:26px}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{max-width:560px;background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;max-width:50ch}
.status{margin-top:20px;display:inline-flex;gap:8px;align-items:center;background:rgba(0,0,0,.25);border:1px dashed var(--line);border-radius:999px;padding:9px 18px;font-size:.85rem;color:var(--muted)}
.status b{color:var(--ok)}
.dial{position:fixed;right:34px;bottom:102px;display:flex;flex-direction:column;gap:14px;align-items:flex-end;z-index:55}
.it{display:flex;align-items:center;gap:10px;opacity:0;transform:translateY(18px) scale(.85);pointer-events:none;transition:.28s cubic-bezier(.22,1,.36,1)}
.fabwrap.open .it{opacity:1;transform:none;pointer-events:auto}
.fabwrap.open .it:nth-child(1){transition-delay:.05s}
.fabwrap.open .it:nth-child(2){transition-delay:.1s}
.fabwrap.open .it:nth-child(3){transition-delay:.15s}
.it .lbl{background:var(--panel-2);border:1px solid var(--line);color:var(--text);font-size:.8rem;font-weight:700;padding:7px 12px;border-radius:9px;box-shadow:0 8px 20px rgba(0,0,0,.45);white-space:nowrap}
.it button{width:46px;height:46px;border-radius:50%;border:1px solid var(--line);background:var(--panel);color:var(--text);font-size:1.05rem;cursor:pointer;transition:.2s;box-shadow:0 10px 24px rgba(0,0,0,.45);display:grid;place-items:center}
.it button:hover{background:var(--accent);border-color:var(--accent);color:#14211f;transform:scale(1.08)}
.it button:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255,153,67,.5)}
.fab{position:fixed;right:26px;bottom:26px;width:60px;height:60px;border-radius:50%;border:0;background:linear-gradient(135deg,var(--accent),var(--brand));color:#fff;font-size:1.75rem;line-height:1;cursor:pointer;box-shadow:0 16px 34px rgba(255,92,92,.4);z-index:60;transition:transform .25s,box-shadow .25s;display:grid;place-items:center}
.fab:hover{transform:scale(1.07);box-shadow:0 20px 40px rgba(255,92,92,.5)}
.fab:focus-visible{outline:none;box-shadow:0 0 0 4px rgba(255,153,67,.45)}
.fab span{display:block;transition:transform .35s cubic-bezier(.22,1,.36,1)}
.fabwrap.open .fab span{transform:rotate(135deg)}
@media(max-width:520px){.it .lbl{display:none}}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Speed dial</span>
  <h1>Floating action button</h1>
  <p class="lede">Pinned to the bottom-right corner, the primary FAB rotates its plus into a cross and fans out three secondary actions. Escape or an outside tap collapses it again.</p>
  <p class="status">Last action: <b id="status">none yet</b></p>
</div>
<div class="fabwrap" id="fabwrap">
  <div class="dial">
    <div class="it"><span class="lbl">New document</span><button type="button" data-act="New document" aria-label="New document">📄</button></div>
    <div class="it"><span class="lbl">Upload photo</span><button type="button" data-act="Upload photo" aria-label="Upload photo">🖼</button></div>
    <div class="it"><span class="lbl">Compose note</span><button type="button" data-act="Compose note" aria-label="Compose note">✎</button></div>
  </div>
  <button type="button" class="fab" id="fab" aria-expanded="false" aria-label="Open quick actions"><span>＋</span></button>
</div>
<script>
var wrap = document.getElementById('fabwrap');
var fab = document.getElementById('fab');
var status = document.getElementById('status');
function setOpen(open) {
  wrap.classList.toggle('open', open);
  fab.setAttribute('aria-expanded', open ? 'true' : 'false');
}
fab.addEventListener('click', function (e) {
  e.stopPropagation();
  setOpen(!wrap.classList.contains('open'));
});
wrap.querySelectorAll('.it button').forEach(function (b) {
  b.addEventListener('click', function () {
    status.textContent = b.getAttribute('data-act');
    setOpen(false);
  });
});
document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) setOpen(false); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
</script>
</body>
</html>`
      },
      {
        id: "loading-button",
        name: "Loading Button",
        desc: "Shows a spinner, disables itself, then confirms success.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Loading Button — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:38px 30px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;max-width:46ch;margin:0 auto 28px}
.btn-load{display:inline-flex;align-items:center;gap:11px;border:0;border-radius:13px;background:var(--accent);color:#14211f;font-weight:800;font-size:.98rem;padding:15px 34px;cursor:pointer;transition:background .3s,transform .18s,box-shadow .25s;box-shadow:0 14px 30px rgba(255,153,67,.3)}
.btn-load:hover:not(:disabled){filter:brightness(1.07);transform:translateY(-2px)}
.btn-load:focus-visible{outline:none;box-shadow:0 0 0 4px rgba(255,153,67,.4)}
.btn-load:disabled{cursor:wait;opacity:.92}
.btn-load .spin{display:none;width:17px;height:17px;border-radius:50%;border:2.5px solid rgba(20,33,31,.3);border-top-color:#14211f;animation:spin .7s linear infinite}
.btn-load.busy .spin{display:block}
.btn-load.done{background:var(--ok);box-shadow:0 14px 30px rgba(62,207,142,.32);cursor:default}
@keyframes spin{to{transform:rotate(360deg)}}
.state{margin-top:26px;display:inline-flex;gap:9px;align-items:center;background:rgba(0,0,0,.25);border:1px dashed var(--line);border-radius:999px;padding:9px 18px;font-size:.85rem;color:var(--muted)}
.dot{width:8px;height:8px;border-radius:50%;background:var(--accent);transition:.3s}
.state.ok .dot{background:var(--ok)}
.state.ok{color:var(--ok)}
.hint{margin-top:20px;font-size:.8rem;color:var(--muted)}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Async state</span>
  <h1>Busy, then done</h1>
  <p class="lede">Click the button: it swaps the label for a spinner, locks itself against double submits, then flashes a green confirmation before resetting.</p>
  <button type="button" class="btn-load" id="save">
    <span class="spin" aria-hidden="true"></span>
    <span class="lbl">Save changes</span>
  </button>
  <p class="state" id="state"><span class="dot"></span><span id="stateTxt">Idle — ready to save</span></p>
  <p class="hint">The button sets <b>disabled</b> and <b>aria-busy</b> while the fake request runs.</p>
</div>
<script>
var btn = document.getElementById('save');
var lbl = btn.querySelector('.lbl');
var state = document.getElementById('state');
var stateTxt = document.getElementById('stateTxt');
btn.addEventListener('click', function () {
  if (btn.disabled) return;
  btn.classList.add('busy');
  btn.disabled = true;
  btn.setAttribute('aria-busy', 'true');
  lbl.textContent = 'Saving...';
  stateTxt.textContent = 'Sending request...';
  setTimeout(function () {
    btn.classList.remove('busy');
    btn.classList.add('done');
    btn.removeAttribute('aria-busy');
    lbl.textContent = '✓ Saved';
    state.classList.add('ok');
    stateTxt.textContent = 'Success — changes are live';
    setTimeout(function () {
      btn.classList.remove('done');
      btn.disabled = false;
      lbl.textContent = 'Save changes';
      state.classList.remove('ok');
      stateTxt.textContent = 'Idle — ready to save';
    }, 1600);
  }, 1800);
});
</script>
</body>
</html>`
      }
      ,
      {
        id: "split-button",
        name: "Split Button",
        desc: "Primary action plus a dropdown of related actions.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Split Button — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:70px 30px 56px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;max-width:46ch;margin:0 auto 30px}
.split{position:relative;display:inline-flex}
.split .main{border:0;background:var(--accent);color:#14211f;font-weight:800;font-size:.93rem;padding:13px 24px;cursor:pointer;border-radius:12px 0 0 12px;transition:.2s}
.split .main:hover{filter:brightness(1.08)}
.split .caret{border:0;border-left:1px solid rgba(20,33,31,.28);background:var(--accent);color:#14211f;font-size:.7rem;padding:13px 15px;cursor:pointer;border-radius:0 12px 12px 0;transition:.2s}
.split .caret:hover,.split .caret[aria-expanded="true"]{filter:brightness(1.12)}
.split .main:focus-visible,.split .caret:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255,153,67,.45)}
.smenu{position:absolute;top:calc(100% + 10px);left:0;min-width:236px;background:var(--panel-2);border:1px solid var(--line);border-radius:13px;padding:7px;list-style:none;box-shadow:0 22px 48px rgba(0,0,0,.5);opacity:0;visibility:hidden;transform:translateY(8px);transition:.2s;z-index:30;text-align:left}
.smenu.open{opacity:1;visibility:visible;transform:none}
.smenu button{width:100%;display:flex;gap:10px;align-items:center;border:0;background:transparent;color:var(--text);text-align:left;padding:10px 12px;border-radius:9px;font-size:.88rem;cursor:pointer;transition:.15s}
.smenu button:hover{background:rgba(255,153,67,.16);color:var(--accent)}
.smenu button:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255,153,67,.4)}
.smenu .sep{height:1px;background:var(--line);margin:6px 4px}
.smenu .note{font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:800;padding:7px 12px 3px;list-style:none}
.hint{margin-top:26px;font-size:.8rem;color:var(--muted)}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Split action</span>
  <h1>Primary + related menu</h1>
  <p class="lede">The wide half runs the default action; the caret half opens a menu of alternatives. Escape or an outside click closes it.</p>
  <div class="split">
    <button type="button" class="main" id="main">Publish</button>
    <button type="button" class="caret" id="caret" aria-haspopup="menu" aria-expanded="false" aria-label="More publish options">▾</button>
    <ul class="smenu" id="smenu" role="menu">
      <li><button type="button" role="menuitem" data-label="Publish">🚀 Publish now</button></li>
      <li><button type="button" role="menuitem" data-label="Schedule">🗓 Schedule for later</button></li>
      <li><button type="button" role="menuitem" data-label="Draft">📝 Save as draft</button></li>
      <li class="sep" role="separator"></li>
      <li><button type="button" role="menuitem" data-label="Preview">👁 Open preview</button></li>
      <li class="note">Last published 2 days ago</li>
    </ul>
  </div>
  <p class="hint">Click <b>Publish</b> for the default action · use the <b>caret</b> to pick an alternative.</p>
</div>
<script>
var main = document.getElementById('main');
var caret = document.getElementById('caret');
var menu = document.getElementById('smenu');
function setOpen(open) {
  menu.classList.toggle('open', open);
  caret.setAttribute('aria-expanded', open ? 'true' : 'false');
}
caret.addEventListener('click', function (e) { e.stopPropagation(); setOpen(!menu.classList.contains('open')); });
menu.querySelectorAll('[role="menuitem"]').forEach(function (b) {
  b.addEventListener('click', function () {
    main.textContent = b.getAttribute('data-label');
    setOpen(false);
    main.focus();
  });
});
main.addEventListener('click', function () { main.textContent = 'Publish'; main.blur(); });
document.addEventListener('click', function (e) { if (!menu.contains(e.target) && e.target !== caret) setOpen(false); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setOpen(false); caret.focus(); } });
</script>
</body>
</html>`
      },
      {
        id: "toggle-button",
        name: "Toggle Button",
        desc: "Press-to-toggle button with aria-pressed state.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Toggle Button — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:34px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:26px;max-width:52ch}
.row{display:flex;flex-wrap:wrap;gap:14px;align-items:center}
.tgl{border:1.5px solid var(--line);background:transparent;color:var(--muted);font-weight:700;font-size:.92rem;padding:12px 22px;border-radius:12px;cursor:pointer;display:inline-flex;align-items:center;gap:10px;transition:background .22s,border-color .22s,color .22s,transform .18s,box-shadow .22s}
.tgl:hover{border-color:rgba(255,153,67,.55);color:var(--text);transform:translateY(-2px)}
.tgl:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255,153,67,.4)}
.tgl[aria-pressed="true"]{background:rgba(255,153,67,.16);border-color:var(--accent);color:var(--accent);box-shadow:0 0 0 4px rgba(255,153,67,.12)}
.tgl .ic{font-size:1.05rem;transition:transform .3s cubic-bezier(.22,1.6,.36,1)}
.tgl[aria-pressed="true"] .ic{transform:scale(1.2) rotate(-8deg)}
.tgl.pill{border-radius:999px}
.tgl.solid[aria-pressed="true"]{background:var(--accent);color:#14211f}
.state{margin-top:26px;display:flex;flex-wrap:wrap;gap:10px}
.chip{font-size:.8rem;font-weight:700;padding:8px 14px;border-radius:999px;background:rgba(0,0,0,.25);border:1px solid var(--line);color:var(--muted)}
.chip b{color:var(--accent)}
.chip.on{border-color:rgba(255,153,67,.4)}
.hint{margin-top:24px;font-size:.8rem;color:var(--muted)}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Press state</span>
  <h1>Buttons that remember</h1>
  <p class="lede">Each button keeps its own aria-pressed state, so assistive tech announces pressed or not pressed — inspect them in dev tools while clicking.</p>
  <div class="row">
    <button type="button" class="tgl" id="fav" aria-pressed="false" data-off="Favorite" data-on="Favorited" data-ic-off="☆" data-ic-on="★">
      <span class="ic">☆</span><span class="lbl">Favorite</span>
    </button>
    <button type="button" class="tgl pill" id="bell" aria-pressed="true" data-off="Muted" data-on="Notify me" data-ic-off="🔕" data-ic-on="🔔">
      <span class="ic">🔔</span><span class="lbl">Notify me</span>
    </button>
    <button type="button" class="tgl solid" id="follow" aria-pressed="false" data-off="Follow" data-on="Following" data-ic-off="＋" data-ic-on="✓">
      <span class="ic">＋</span><span class="lbl">Follow</span>
    </button>
  </div>
  <div class="state">
    <span class="chip" id="c1">Favorite: <b>off</b></span>
    <span class="chip on" id="c2">Notify me: <b>on</b></span>
    <span class="chip" id="c3">Follow: <b>off</b></span>
  </div>
  <p class="hint">State lives in <b>aria-pressed</b> — styling follows the attribute, never a class.</p>
</div>
<script>
function wire(btnId, chipId) {
  var b = document.getElementById(btnId);
  var chip = document.getElementById(chipId);
  b.addEventListener('click', function () {
    var on = b.getAttribute('aria-pressed') !== 'true';
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    b.querySelector('.ic').textContent = b.getAttribute(on ? 'data-ic-on' : 'data-ic-off');
    b.querySelector('.lbl').textContent = b.getAttribute(on ? 'data-on' : 'data-off');
    chip.innerHTML = b.querySelector('.lbl').textContent + ': <b>' + (on ? 'on' : 'off') + '</b>';
    chip.classList.toggle('on', on);
  });
}
wire('fav', 'c1');
wire('bell', 'c2');
wire('follow', 'c3');
</script>
</body>
</html>`
      },
      {
        id: "badge-button",
        name: "Badge Button",
        desc: "Action button carrying a notification count badge.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Badge Button — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:34px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:26px;max-width:52ch}
.row{display:flex;flex-wrap:wrap;gap:16px;align-items:center}
.bb{position:relative;border:1px solid var(--line);background:var(--panel-2);color:var(--text);font-weight:700;font-size:.9rem;padding:12px 20px;border-radius:12px;cursor:pointer;display:inline-flex;align-items:center;gap:10px;transition:transform .18s,border-color .2s,box-shadow .2s}
.bb:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px);box-shadow:0 12px 26px rgba(0,0,0,.35)}
.bb:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255,153,67,.4)}
.bb.solid{background:var(--accent);border-color:var(--accent);color:#14211f}
.bb.solid:hover{color:#14211f;filter:brightness(1.07)}
.ib{width:48px;height:48px;border-radius:14px;justify-content:center;padding:0}
.cnt{min-width:23px;height:23px;padding:0 7px;border-radius:999px;background:var(--brand);color:#fff;font-size:.72rem;font-weight:800;display:grid;place-items:center;box-shadow:0 4px 12px rgba(255,92,92,.5);transition:.25s}
.ib .cnt{position:absolute;top:-8px;right:-8px;min-width:20px;height:20px;font-size:.65rem}
.cnt.hide{display:none}
.cnt.pop{animation:pop .4s cubic-bezier(.22,1.7,.36,1)}
@keyframes pop{0%{transform:scale(.3);opacity:0}100%{transform:scale(1);opacity:1}}
.tools{display:flex;gap:12px;margin-top:26px;flex-wrap:wrap}
.ghost{border:1px dashed var(--line);background:transparent;color:var(--muted);font-weight:700;font-size:.85rem;padding:11px 18px;border-radius:11px;cursor:pointer;transition:.2s}
.ghost:hover{border-color:var(--accent);color:var(--accent)}
.ghost:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255,153,67,.4)}
.note{margin-top:18px;font-size:.8rem;color:var(--muted)}
.note b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Count badge</span>
  <h1>Buttons with a number attached</h1>
  <p class="lede">A pill badge rides in the corner of the control. Click the inbox to mark everything read — the badge pops out; push a new notification to bring it back.</p>
  <div class="row">
    <button type="button" class="bb" id="inbox">
      📥 Inbox <span class="cnt" id="cnt">12</span>
    </button>
    <button type="button" class="bb solid" id="cart">
      🛒 Cart <span class="cnt">3</span>
    </button>
    <button type="button" class="bb ib" id="bell" aria-label="Notifications, 7 unread" title="Notifications">
      🔔 <span class="cnt" id="dot">7</span>
    </button>
  </div>
  <div class="tools">
    <button type="button" class="ghost" id="push">Simulate notification</button>
    <button type="button" class="ghost" id="reset">Reset demo</button>
  </div>
  <p class="note" id="note"><b>12</b> unread messages in the inbox.</p>
</div>
<script>
var cnt = document.getElementById('cnt');
var dot = document.getElementById('dot');
var note = document.getElementById('note');
var inbox = document.getElementById('inbox');
var bell = document.getElementById('bell');
var cart = document.getElementById('cart');
var count = 12;
var bellCount = 7;
function paint() {
  cnt.textContent = count;
  cnt.classList.toggle('hide', count === 0);
  dot.textContent = bellCount;
  dot.classList.toggle('hide', bellCount === 0);
  bell.setAttribute('aria-label', 'Notifications, ' + bellCount + ' unread');
  note.innerHTML = count === 0
    ? 'Inbox is <b>all clear</b> — push a notification to see the badge return.'
    : '<b>' + count + '</b> unread messages in the inbox.';
}
function pop(el) {
  el.classList.remove('pop');
  void el.offsetWidth;
  el.classList.add('pop');
}
inbox.addEventListener('click', function () { count = 0; paint(); });
bell.addEventListener('click', function () { bellCount = 0; paint(); });
document.getElementById('push').addEventListener('click', function () {
  count += 1;
  bellCount += 1;
  paint();
  pop(cnt);
  pop(dot);
});
document.getElementById('reset').addEventListener('click', function () {
  count = 12;
  bellCount = 7;
  paint();
  pop(cnt);
  pop(dot);
});
cart.addEventListener('click', function () { pop(cart.querySelector('.cnt')); });
paint();
</script>
</body>
</html>`
      }
      ,
      {
        id: "gradient-button",
        name: "Gradient Button",
        desc: "Gradient button with glow shadow and shine sweep on hover.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gradient Button — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:44px 30px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;max-width:47ch;margin:0 auto 32px}
.btn-g{position:relative;overflow:hidden;border:0;border-radius:14px;padding:16px 38px;font-weight:800;font-size:1rem;color:#fff;background:linear-gradient(135deg,var(--accent) 0%,var(--brand) 100%);box-shadow:0 14px 32px rgba(255,92,92,.35);cursor:pointer;transition:transform .22s,box-shadow .22s;isolation:isolate}
.btn-g::after{content:"";position:absolute;top:0;left:-90%;width:55%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent);transform:skewX(-22deg);transition:left .65s ease}
.btn-g:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 22px 46px rgba(255,153,67,.5)}
.btn-g:hover::after{left:140%}
.btn-g:active{transform:translateY(-1px) scale(.99)}
.btn-g:focus-visible{outline:none;box-shadow:0 0 0 4px rgba(255,153,67,.45),0 22px 46px rgba(255,153,67,.45)}
.btn-g.pill{border-radius:999px}
.btn-g.small{padding:12px 26px;font-size:.9rem;box-shadow:0 12px 26px rgba(255,92,92,.3)}
.btn-g.cool{background:linear-gradient(135deg,#3ecf8e 0%,#2bb0d8 100%);box-shadow:0 14px 32px rgba(62,207,142,.32)}
.btn-g.cool:hover{box-shadow:0 22px 46px rgba(62,207,142,.45)}
.actions{display:flex;flex-wrap:wrap;gap:18px;justify-content:center;align-items:center}
.hint{margin-top:32px;font-size:.8rem;color:var(--muted)}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Gradient</span>
  <h1>Warm gradient with a shine sweep</h1>
  <p class="lede">An orange-to-coral diagonal fill, a soft colored glow underneath and a skewed highlight that races across the surface on hover.</p>
  <div class="actions">
    <button type="button" class="btn-g">Upgrade to Pro</button>
    <button type="button" class="btn-g pill">Claim offer →</button>
    <button type="button" class="btn-g cool pill">Start free</button>
    <button type="button" class="btn-g small">Remind me</button>
  </div>
  <p class="hint">Hover to watch the <b>shine sweep</b> and the glow bloom · keyboard focus gets an accent ring too.</p>
</div>
</body>
</html>`
      },
      {
        id: "copy-button",
        name: "Copy Button",
        desc: "Copies text to the clipboard and confirms with a checkmark.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Copy Button — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:38px 30px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;max-width:46ch;margin:0 auto 28px}
.key-card{display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;background:rgba(0,0,0,.28);border:1px solid var(--line);border-radius:14px;padding:18px 20px;text-align:left}
.klabel{display:block;font-size:.66rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);font-weight:800;margin-bottom:6px}
.key{display:block;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:1.15rem;letter-spacing:.12em;color:var(--accent);font-weight:700}
.copy{border:0;border-radius:11px;background:var(--accent);color:#14211f;font-weight:800;font-size:.9rem;padding:12px 24px;cursor:pointer;display:inline-flex;gap:9px;align-items:center;transition:.22s;box-shadow:0 10px 24px rgba(255,153,67,.3)}
.copy:hover{filter:brightness(1.08);transform:translateY(-2px)}
.copy:focus-visible{outline:none;box-shadow:0 0 0 4px rgba(255,153,67,.4)}
.copy:active{transform:translateY(0) scale(.98)}
.copy.ok{background:var(--ok);box-shadow:0 10px 24px rgba(62,207,142,.32)}
.note{margin-top:18px;font-size:.82rem;color:var(--muted)}
.note.good{color:var(--ok)}
.hint{margin-top:14px;font-size:.78rem;color:#6f8585}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Clipboard</span>
  <h1>Copy with confirmation</h1>
  <p class="lede">Uses the async Clipboard API when available and falls back to a temporary textarea plus execCommand — then flashes a green check.</p>
  <div class="key-card">
    <div>
      <span class="klabel">License key</span>
      <code class="key" id="key">HS-9F2A-XK41-77QP</code>
    </div>
    <button type="button" class="copy" id="copy"><span class="ic" aria-hidden="true">⧉</span><span class="lbl">Copy</span></button>
  </div>
  <p class="note" id="note" role="status">Press the button to copy the key.</p>
  <p class="hint">Works offline · <b>no permissions</b> needed for the fallback path.</p>
</div>
<script>
var copy = document.getElementById('copy');
var lbl = copy.querySelector('.lbl');
var note = document.getElementById('note');
var key = document.getElementById('key');
var timer = null;
function done() {
  copy.classList.add('ok');
  copy.querySelector('.ic').textContent = '✓';
  lbl.textContent = 'Copied';
  note.textContent = 'Key copied to your clipboard.';
  note.classList.add('good');
  clearTimeout(timer);
  timer = setTimeout(function () {
    copy.classList.remove('ok');
    copy.querySelector('.ic').textContent = '⧉';
    lbl.textContent = 'Copy';
    note.textContent = 'Press the button to copy the key.';
    note.classList.remove('good');
  }, 2200);
}
function fallback(text) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.top = '-1000px';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(ta);
  done();
}
copy.addEventListener('click', function () {
  var text = key.textContent;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, function () { fallback(text); });
  } else {
    fallback(text);
  }
});
</script>
</body>
</html>`
      },
      {
        id: "ripple-button",
        name: "Ripple Button",
        desc: "Material-style click ripple expanding from the pointer.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ripple Button — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:40px 30px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;max-width:47ch;margin:0 auto 30px}
.actions{display:flex;flex-wrap:wrap;gap:18px;justify-content:center;align-items:center}
.rb{position:relative;overflow:hidden;border:0;border-radius:13px;font-weight:800;font-size:.98rem;padding:15px 34px;cursor:pointer;transition:transform .18s,box-shadow .22s,filter .22s;isolation:isolate;touch-action:manipulation}
.rb.solid{background:var(--accent);color:#14211f;box-shadow:0 12px 28px rgba(255,153,67,.3)}
.rb.solid:hover{filter:brightness(1.08);transform:translateY(-2px);box-shadow:0 18px 36px rgba(255,153,67,.42)}
.rb.ghost{background:transparent;color:var(--accent);border:2px solid var(--accent)}
.rb.ghost:hover{background:rgba(255,153,67,.1);transform:translateY(-2px)}
.rb.dark{background:var(--panel-2);color:var(--text);border:1px solid var(--line);box-shadow:0 12px 26px rgba(0,0,0,.35)}
.rb.dark:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}
.rb:focus-visible{outline:none;box-shadow:0 0 0 4px rgba(255,153,67,.4)}
.rb:active{transform:translateY(0) scale(.98)}
.ripple{position:absolute;border-radius:50%;background:rgba(255,255,255,.5);transform:scale(0);opacity:.7;animation:rip .6s ease-out forwards;pointer-events:none;z-index:1}
.rb.ghost .ripple{background:rgba(255,153,67,.45)}
.rb.dark .ripple{background:rgba(255,153,67,.35)}
@keyframes rip{to{transform:scale(1);opacity:0}}
.rb span{position:relative;z-index:2}
.hint{margin-top:30px;font-size:.8rem;color:var(--muted)}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Material</span>
  <h1>Ripple from the pointer</h1>
  <p class="lede">Click anywhere on a button — a circular wave expands from the exact point you pressed and fades out, just like Android touch feedback.</p>
  <div class="actions">
    <button type="button" class="rb solid rbx"><span>Deploy now</span></button>
    <button type="button" class="rb ghost rbx"><span>Run tests</span></button>
    <button type="button" class="rb dark rbx"><span>View logs</span></button>
  </div>
  <p class="hint">Try clicking the <b>corners</b> — the ripple is centered on your pointer, not the button.</p>
</div>
<script>
var btns = document.querySelectorAll('.rbx');
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    var rect = btn.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height);
    var r = document.createElement('span');
    r.className = 'ripple';
    r.style.width = size + 'px';
    r.style.height = size + 'px';
    r.style.left = (e.clientX - rect.left - size / 2) + 'px';
    r.style.top = (e.clientY - rect.top - size / 2) + 'px';
    btn.appendChild(r);
    r.addEventListener('animationend', function () {
      if (r.parentNode) r.parentNode.removeChild(r);
    });
  });
});
</script>
</body>
</html>`
      }
    ]
  });
})();
