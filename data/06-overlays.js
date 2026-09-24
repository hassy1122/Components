/* hasSy Component Library — data: Overlays & Popups
   Every item.code is ONE complete standalone HTML document.
   Paste it into an .html file and open it in a browser. */
(function () {
  var C = (window.COMPONENTS = window.COMPONENTS || []);
  C.push({
    category: "Overlays & Popups",
    items: [
      {
        id: "modal",
        name: "Modal",
        desc: "Dialog with dimmed backdrop, close button, Esc and click-outside dismiss.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Modal — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:54px 30px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.stage h3{font-size:1.15rem;letter-spacing:-.01em;margin-bottom:8px}
.stage p{color:var(--muted);font-size:.92rem;max-width:46ch;margin:0 auto 24px}
.btn{border:0;cursor:pointer;background:var(--accent);color:#14211f;font-weight:700;padding:12px 24px;border-radius:11px;font-size:.92rem;transition:.2s;box-shadow:0 10px 24px rgba(255, 165, 0,.22)}
.btn:hover{filter:brightness(1.08);transform:translateY(-2px)}
.btn:active{transform:none}
.btn.ghost{background:transparent;color:var(--muted);border:1px solid var(--line);box-shadow:none}
.btn.ghost:hover{color:var(--text);border-color:var(--muted);transform:none}
.backdrop{position:fixed;inset:0;background:rgba(0,0,0,.62);backdrop-filter:blur(7px);display:grid;place-items:center;padding:22px;opacity:0;visibility:hidden;transition:.28s;z-index:90}
.backdrop.show{opacity:1;visibility:visible}
.modal{position:relative;width:min(430px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:30px 28px 26px;transform:translateY(20px) scale(.96);transition:.3s cubic-bezier(.22,1,.36,1);box-shadow:0 34px 80px rgba(0,0,0,.55)}
.backdrop.show .modal{transform:none}
.icon{width:50px;height:50px;border-radius:14px;background:rgba(255, 165, 0,.15);border:1px solid rgba(255, 165, 0,.3);display:grid;place-items:center;font-size:1.5rem;margin-bottom:16px}
.modal h2{font-size:1.2rem;letter-spacing:-.01em;margin-bottom:8px}
.modal p{color:var(--muted);font-size:.92rem;margin-bottom:22px}
.x{position:absolute;top:14px;right:14px;width:32px;height:32px;border-radius:9px;background:rgba(255,255,255,.06);border:1px solid var(--line);color:var(--muted);cursor:pointer;transition:.18s;display:grid;place-items:center;font-size:.85rem}
.x:hover{background:rgba(255,107,107,.16);border-color:rgba(255,107,107,.45);color:var(--err)}
.row{display:flex;gap:10px;justify-content:flex-end}
</style>
</head>
<body>
<div class="stage">
  <h3>Modal dialog</h3>
  <p>Dimmed blur backdrop, slide-up panel and a close button — Esc or a click outside the card dismisses it too.</p>
  <button class="btn" id="openBtn">Open modal</button>
</div>
<div class="backdrop" id="backdrop">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="mTitle">
    <button class="x" id="closeBtn" aria-label="Close dialog">✕</button>
    <div class="icon">🚀</div>
    <h2 id="mTitle">Deploy to production?</h2>
    <p>Your build will ship to every region in about two minutes. You can keep working while it runs.</p>
    <div class="row">
      <button class="btn ghost" id="cancelBtn">Cancel</button>
      <button class="btn" id="okBtn">Deploy now</button>
    </div>
  </div>
</div>
<script>
var backdrop = document.getElementById('backdrop');
var openBtn = document.getElementById('openBtn');
var closeBtn = document.getElementById('closeBtn');
var cancelBtn = document.getElementById('cancelBtn');
var okBtn = document.getElementById('okBtn');
function setOpen(on) {
  backdrop.classList.toggle('show', on);
  if (on) closeBtn.focus(); else openBtn.focus();
}
openBtn.addEventListener('click', function () { setOpen(true); });
closeBtn.addEventListener('click', function () { setOpen(false); });
cancelBtn.addEventListener('click', function () { setOpen(false); });
okBtn.addEventListener('click', function () { setOpen(false); });
backdrop.addEventListener('click', function (e) { if (e.target === backdrop) setOpen(false); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
</script>
</body>
</html>`
      },
      {
        id: "confirm-dialog",
        name: "Confirm Dialog",
        desc: "Destructive-action confirmation with cancel and confirm buttons.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Confirm Dialog — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:44px 30px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.stage h3{font-size:1.15rem;margin-bottom:8px}
.stage > p{color:var(--muted);font-size:.92rem;max-width:48ch;margin:0 auto 22px}
.btn{border:0;cursor:pointer;border-radius:11px;padding:12px 22px;font-weight:700;font-size:.92rem;transition:.2s}
.btn.danger{background:var(--err);color:#2a0d0d;box-shadow:0 10px 24px rgba(255,107,107,.22)}
.btn.danger:hover{filter:brightness(1.07);transform:translateY(-2px)}
.btn.ghost{background:transparent;color:var(--muted);border:1px solid var(--line)}
.btn.ghost:hover{color:var(--text);border-color:var(--muted)}
.result{margin-top:22px;font-size:.88rem;color:var(--muted);display:flex;align-items:center;justify-content:center;gap:9px;background:rgba(0,0,0,.22);border:1px dashed var(--line);border-radius:11px;padding:13px 16px;transition:.25s}
.result::before{content:"●";font-size:.6rem;color:#4d6565}
.result.ok{border-color:rgba(62,207,142,.4)}
.result.ok::before{color:var(--ok)}
.result.bad{border-color:rgba(255,107,107,.45);color:#ffb4b4}
.result.bad::before{color:var(--err)}
.backdrop{position:fixed;inset:0;background:rgba(0,0,0,.62);backdrop-filter:blur(7px);display:grid;place-items:center;padding:22px;opacity:0;visibility:hidden;transition:.26s;z-index:90}
.backdrop.show{opacity:1;visibility:visible}
.dialog{position:relative;width:min(420px,100%);background:var(--panel);border:1px solid var(--line);border-left:4px solid var(--err);border-radius:16px;padding:28px 26px 24px;transform:translateY(16px) scale(.96);transition:.3s cubic-bezier(.22,1,.36,1);box-shadow:0 34px 80px rgba(0,0,0,.55)}
.backdrop.show .dialog{transform:none}
.warn{width:50px;height:50px;border-radius:14px;background:rgba(255,107,107,.14);border:1px solid rgba(255,107,107,.35);display:grid;place-items:center;font-size:1.5rem;margin-bottom:14px}
.dialog h2{font-size:1.15rem;margin-bottom:8px}
.dialog p{color:var(--muted);font-size:.92rem;margin-bottom:22px}
.dialog p b{color:var(--text)}
.row{display:flex;gap:10px;justify-content:flex-end}
.x{position:absolute;top:14px;right:14px;width:30px;height:30px;border-radius:8px;background:rgba(255,255,255,.06);border:1px solid var(--line);color:var(--muted);cursor:pointer;transition:.18s}
.x:hover{color:var(--err);border-color:rgba(255,107,107,.4)}
</style>
</head>
<body>
<div class="stage">
  <h3>Destructive confirmation</h3>
  <p>Pauses the user before an irreversible action, then reports the outcome on a live result line below.</p>
  <button class="btn danger" id="delBtn">Delete project…</button>
  <p class="result" id="result">No action taken yet.</p>
</div>
<div class="backdrop" id="backdrop">
  <div class="dialog" role="alertdialog" aria-modal="true" aria-labelledby="dTitle" aria-describedby="dDesc">
    <button class="x" id="xBtn" aria-label="Close dialog">✕</button>
    <div class="warn">⚠️</div>
    <h2 id="dTitle">Delete “Atlas API”?</h2>
    <p id="dDesc">All endpoints, keys and logs tied to <b>Atlas API</b> will be permanently removed. This action cannot be undone.</p>
    <div class="row">
      <button class="btn ghost" id="cancelBtn">Cancel</button>
      <button class="btn danger" id="confirmBtn">Yes, delete it</button>
    </div>
  </div>
</div>
<script>
var backdrop = document.getElementById('backdrop');
var delBtn = document.getElementById('delBtn');
var xBtn = document.getElementById('xBtn');
var cancelBtn = document.getElementById('cancelBtn');
var confirmBtn = document.getElementById('confirmBtn');
var result = document.getElementById('result');
function show(cls, text) {
  result.className = 'result ' + cls;
  result.textContent = text;
}
function setOpen(on) {
  backdrop.classList.toggle('show', on);
  if (on) confirmBtn.focus(); else delBtn.focus();
}
delBtn.addEventListener('click', function () { setOpen(true); });
xBtn.addEventListener('click', function () { setOpen(false); });
cancelBtn.addEventListener('click', function () { setOpen(false); show('', 'Cancelled — nothing was changed.'); });
confirmBtn.addEventListener('click', function () { setOpen(false); show('bad', 'Confirmed — “Atlas API” was deleted.'); });
backdrop.addEventListener('click', function (e) { if (e.target === backdrop) { setOpen(false); show('', 'Dismissed — nothing was changed.'); } });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && backdrop.classList.contains('show')) { setOpen(false); show('', 'Dismissed with Esc — nothing was changed.'); } });
</script>
</body>
</html>`
      },
      {
        id: "dropdown-menu",
        name: "Dropdown Menu",
        desc: "Menu button with items, separators and a danger action.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dropdown Menu — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:64px 30px 34px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35);position:relative}
.stage h3{font-size:1.15rem;margin-bottom:8px}
.stage .lead{color:var(--muted);font-size:.92rem;max-width:46ch;margin:0 auto 24px}
.dd{position:relative;display:inline-block}
.trigger{border:1px solid var(--line);background:var(--panel-2);color:var(--text);font-weight:700;font-size:.92rem;padding:11px 18px;border-radius:11px;cursor:pointer;display:inline-flex;align-items:center;gap:9px;transition:.2s}
.trigger:hover{border-color:rgba(255, 165, 0,.5);color:var(--accent)}
.trigger[aria-expanded="true"]{border-color:var(--accent);color:var(--accent);box-shadow:0 0 0 4px rgba(255, 165, 0,.15)}
.trigger .caret{transition:.25s;font-size:.7rem}
.trigger[aria-expanded="true"] .caret{transform:rotate(180deg)}
.menu{position:absolute;top:calc(100% + 10px);left:50%;transform:translate(-50%,10px);min-width:236px;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:8px;opacity:0;visibility:hidden;transition:.22s cubic-bezier(.22,1,.36,1);box-shadow:0 22px 50px rgba(0,0,0,.5);text-align:left;z-index:40}
.menu.show{opacity:1;visibility:visible;transform:translate(-50%,0)}
.mi{width:100%;display:flex;align-items:center;gap:11px;padding:10px 12px;border:0;background:transparent;color:var(--muted);font-size:.9rem;font-weight:600;border-radius:9px;cursor:pointer;transition:.15s;text-align:left}
.mi:hover{background:rgba(255, 165, 0,.13);color:var(--accent)}
.mi .ic{width:22px;text-align:center;font-size:.95rem}
.mi kbd{margin-left:auto;font-size:.66rem;font-weight:800;color:var(--muted);background:rgba(255,255,255,.07);border:1px solid var(--line);border-radius:6px;padding:2px 7px}
.mi:hover kbd{color:var(--accent);border-color:rgba(255, 165, 0,.4)}
.mi.danger{color:#ff9b9b}
.mi.danger:hover{background:rgba(255,107,107,.14);color:var(--err)}
.sep{height:1px;background:var(--line);margin:7px 6px}
.note{margin-top:26px;font-size:.86rem;color:var(--muted);background:rgba(0,0,0,.22);border:1px dashed var(--line);border-radius:11px;padding:12px 16px;display:inline-block}
.note b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <h3>Dropdown menu</h3>
  <p class="lead">Menu button with grouped actions, separators and a danger item. Click anywhere outside to dismiss.</p>
  <div class="dd">
    <button class="trigger" id="trigger" aria-haspopup="menu" aria-expanded="false">Row actions <span class="caret">▼</span></button>
    <div class="menu" id="menu" role="menu">
      <button class="mi" role="menuitem" data-act="Edit item"><span class="ic">✏️</span>Edit item<kbd>E</kbd></button>
      <button class="mi" role="menuitem" data-act="Duplicate"><span class="ic">📄</span>Duplicate<kbd>D</kbd></button>
      <button class="mi" role="menuitem" data-act="Copy link"><span class="ic">🔗</span>Copy link</button>
      <div class="sep"></div>
      <button class="mi" role="menuitem" data-act="Archive"><span class="ic">📦</span>Archive</button>
      <button class="mi" role="menuitem" data-act="Move to folder"><span class="ic">📁</span>Move to folder</button>
      <div class="sep"></div>
      <button class="mi danger" role="menuitem" data-act="Delete"><span class="ic">🗑️</span>Delete permanently</button>
    </div>
  </div>
  <p class="note" id="note">Pick an action from the menu — the choice appears here.</p>
</div>
<script>
var trigger = document.getElementById('trigger');
var menu = document.getElementById('menu');
var note = document.getElementById('note');
function setMenu(on) {
  menu.classList.toggle('show', on);
  trigger.setAttribute('aria-expanded', on ? 'true' : 'false');
}
trigger.addEventListener('click', function (e) {
  e.stopPropagation();
  setMenu(!menu.classList.contains('show'));
});
document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !trigger.contains(e.target)) setMenu(false);
});
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
Array.prototype.forEach.call(menu.querySelectorAll('.mi'), function (item) {
  item.addEventListener('click', function () {
    setMenu(false);
    note.innerHTML = 'You chose <b>' + item.getAttribute('data-act') + '</b>';
  });
});
</script>
</body>
</html>`
      },
      {
        id: "side-drawer",
        name: "Side Drawer",
        desc: "Right slide-in panel with backdrop and Esc to close.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Side Drawer — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:54px 30px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.stage h3{font-size:1.15rem;margin-bottom:8px}
.stage p{color:var(--muted);font-size:.92rem;max-width:47ch;margin:0 auto 24px}
.btn{border:0;cursor:pointer;background:var(--accent);color:#14211f;font-weight:700;padding:12px 24px;border-radius:11px;font-size:.92rem;transition:.2s;box-shadow:0 10px 24px rgba(255, 165, 0,.22)}
.btn:hover{filter:brightness(1.08);transform:translateY(-2px)}
.backdrop{position:fixed;inset:0;background:rgba(0,0,0,.55);backdrop-filter:blur(5px);opacity:0;visibility:hidden;transition:.3s;z-index:90}
.backdrop.show{opacity:1;visibility:visible}
.drawer{position:fixed;top:0;right:0;bottom:0;width:min(370px,92vw);background:var(--panel);border-left:1px solid var(--line);z-index:95;transform:translateX(105%);transition:transform .38s cubic-bezier(.22,1,.36,1);display:flex;flex-direction:column;box-shadow:-28px 0 70px rgba(0,0,0,.5)}
.drawer.show{transform:none}
.dhead{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:20px 22px;border-bottom:1px solid var(--line)}
.dhead .t{display:flex;align-items:center;gap:11px}
.dhead .t i{width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--brand));display:grid;place-items:center;font-style:normal;font-size:1rem}
.dhead h3{font-size:1rem}
.dhead span{font-size:.75rem;color:var(--muted)}
.x{width:32px;height:32px;border-radius:9px;background:rgba(255,255,255,.06);border:1px solid var(--line);color:var(--muted);cursor:pointer;transition:.18s;display:grid;place-items:center}
.x:hover{background:rgba(255,107,107,.16);color:var(--err);border-color:rgba(255,107,107,.4)}
.dbody{flex:1;overflow-y:auto;padding:20px 22px;display:grid;gap:12px;align-content:start}
.lbl{font-size:.66rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-top:6px}
.setting{display:flex;align-items:center;justify-content:space-between;gap:14px;background:var(--panel-2);border:1px solid var(--line);border-radius:12px;padding:14px 16px;transition:.2s}
.setting:hover{border-color:rgba(255, 165, 0,.35)}
.setting b{display:block;font-size:.9rem}
.setting span{font-size:.78rem;color:var(--muted)}
.switch{position:relative;width:44px;height:26px;flex:0 0 auto}
.switch input{position:absolute;inset:0;width:100%;height:100%;opacity:0;margin:0;cursor:pointer;z-index:2}
.track{position:absolute;inset:0;background:rgba(0,0,0,.35);border:1px solid var(--line);border-radius:999px;transition:.25s}
.track::after{content:"";position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--muted);transition:.25s}
.switch input:checked + .track{background:rgba(255, 165, 0,.3);border-color:var(--accent)}
.switch input:checked + .track::after{transform:translateX(18px);background:var(--accent)}
.switch input:focus-visible + .track{box-shadow:0 0 0 3px rgba(255, 165, 0,.35)}
.dfoot{padding:16px 22px;border-top:1px solid var(--line);display:flex;gap:10px;background:rgba(0,0,0,.18)}
.dfoot .btn{flex:1;padding:12px 16px}
.ghost{background:transparent;color:var(--muted);border:1px solid var(--line);box-shadow:none}
.ghost:hover{color:var(--text);border-color:var(--muted);transform:none}
</style>
</head>
<body>
<div class="stage">
  <h3>Side drawer</h3>
  <p>A right-hand panel glides over a blurred backdrop. Press Esc or click the backdrop to slide it away.</p>
  <button class="btn" id="openBtn">Open settings drawer</button>
</div>
<div class="backdrop" id="backdrop"></div>
<aside class="drawer" id="drawer" role="dialog" aria-modal="true" aria-labelledby="dTitle" aria-hidden="true">
  <div class="dhead">
    <div class="t"><i>⚙️</i><div><h3 id="dTitle">Preferences</h3><span>Workspace settings</span></div></div>
    <button class="x" id="closeBtn" aria-label="Close drawer">✕</button>
  </div>
  <div class="dbody">
    <span class="lbl">Notifications</span>
    <div class="setting"><div><b>Email alerts</b><span>Deployment and billing events</span></div><label class="switch"><input type="checkbox" checked><span class="track"></span></label></div>
    <div class="setting"><div><b>Weekly digest</b><span>Summary every Monday, 9:00</span></div><label class="switch"><input type="checkbox"><span class="track"></span></label></div>
    <span class="lbl">Deployments</span>
    <div class="setting"><div><b>Auto-deploy</b><span>Ship on merge to main</span></div><label class="switch"><input type="checkbox" checked><span class="track"></span></label></div>
    <div class="setting"><div><b>Require approval</b><span>Two-person rule for prod</span></div><label class="switch"><input type="checkbox"><span class="track"></span></label></div>
  </div>
  <div class="dfoot">
    <button class="btn ghost" id="cancelBtn">Discard</button>
    <button class="btn" id="saveBtn">Save changes</button>
  </div>
</aside>
<script>
var backdrop = document.getElementById('backdrop');
var drawer = document.getElementById('drawer');
var openBtn = document.getElementById('openBtn');
var closeBtn = document.getElementById('closeBtn');
var cancelBtn = document.getElementById('cancelBtn');
var saveBtn = document.getElementById('saveBtn');
function setOpen(on) {
  backdrop.classList.toggle('show', on);
  drawer.classList.toggle('show', on);
  drawer.setAttribute('aria-hidden', on ? 'false' : 'true');
  if (on) closeBtn.focus(); else openBtn.focus();
}
openBtn.addEventListener('click', function () { setOpen(true); });
closeBtn.addEventListener('click', function () { setOpen(false); });
cancelBtn.addEventListener('click', function () { setOpen(false); });
saveBtn.addEventListener('click', function () { setOpen(false); });
backdrop.addEventListener('click', function () { setOpen(false); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
</script>
</body>
</html>`
      },
      {
        id: "command-palette",
        name: "Command Palette",
        desc: "Cmd/Ctrl+K style command palette with live filtering.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Command Palette — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:50px 30px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.stage h3{font-size:1.15rem;margin-bottom:8px}
.stage p{color:var(--muted);font-size:.92rem;max-width:48ch;margin:0 auto 22px}
.keys{display:flex;gap:7px;justify-content:center;margin-bottom:24px}
kbd{display:inline-grid;place-items:center;min-width:32px;height:32px;padding:0 10px;border-radius:8px;background:linear-gradient(180deg,#25403f,#1a3231);border:1px solid rgba(255,255,255,.14);border-bottom-width:3px;font-size:.78rem;font-weight:800;color:var(--text)}
.btn{border:0;cursor:pointer;background:var(--accent);color:#14211f;font-weight:700;padding:12px 24px;border-radius:11px;font-size:.92rem;transition:.2s;box-shadow:0 10px 24px rgba(255, 165, 0,.22)}
.btn:hover{filter:brightness(1.08);transform:translateY(-2px)}
.status{margin-top:22px;font-size:.85rem;color:var(--muted);background:rgba(0,0,0,.22);border:1px dashed var(--line);border-radius:11px;padding:12px 16px;display:inline-block;max-width:100%}
.status b{color:var(--ok)}
.wrap{position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(7px);z-index:90;opacity:0;visibility:hidden;transition:.22s;padding:13vh 20px 20px;display:flex;justify-content:center;align-items:flex-start}
.wrap.show{opacity:1;visibility:visible}
.k{width:min(560px,100%);background:var(--panel);border:1px solid var(--line);border-radius:16px;overflow:hidden;transform:translateY(-16px) scale(.98);transition:.25s cubic-bezier(.22,1,.36,1);box-shadow:0 34px 80px rgba(0,0,0,.6)}
.wrap.show .k{transform:none}
.ktop{display:flex;align-items:center;gap:12px;padding:16px 18px;border-bottom:1px solid var(--line)}
.ktop .mag{color:var(--accent);font-size:1.05rem}
.ktop input{flex:1;background:transparent;border:0;outline:none;font-size:1rem;color:var(--text)}
.ktop input::placeholder{color:var(--muted)}
.esc{font-size:.66rem;font-weight:800;color:var(--muted);background:rgba(255,255,255,.07);border:1px solid var(--line);padding:4px 8px;border-radius:7px}
.list{list-style:none;max-height:330px;overflow-y:auto;padding:8px}
.row{display:flex;align-items:center;gap:12px;padding:11px 12px;border-radius:11px;cursor:pointer;transition:.15s;font-size:.92rem;color:var(--muted)}
.row .ic{width:30px;height:30px;border-radius:9px;background:rgba(255,255,255,.06);display:grid;place-items:center;font-size:.95rem;flex:0 0 auto}
.row .sp{margin-left:auto;font-size:.68rem;font-weight:800;letter-spacing:.06em;color:#5f7878;white-space:nowrap}
.row:hover,.row.sel{background:rgba(255, 165, 0,.14);color:var(--accent)}
.row.sel .sp{color:var(--accent)}
.empty{display:none;padding:30px 16px;text-align:center;color:var(--muted);font-size:.9rem}
.kfoot{display:flex;justify-content:space-between;gap:10px;padding:11px 16px;border-top:1px solid var(--line);font-size:.74rem;color:var(--muted);background:rgba(0,0,0,.2)}
.kfoot b{color:var(--text)}
</style>
</head>
<body>
<div class="stage">
  <h3>Command palette</h3>
  <p>The universal Cmd/Ctrl+K overlay: type to filter the command list instantly, then click or press Enter on the highlighted row.</p>
  <div class="keys"><kbd>Ctrl</kbd><kbd>or</kbd><kbd>⌘</kbd><kbd>K</kbd></div>
  <button class="btn" id="openBtn">Open palette</button>
  <p class="status" id="status">Palette closed — press <b>Ctrl + K</b> to open it.</p>
</div>
<div class="wrap" id="wrap">
  <div class="k" role="dialog" aria-modal="true" aria-label="Command palette">
    <div class="ktop"><span class="mag">⌕</span><input id="input" type="text" placeholder="Type a command or search…" autocomplete="off" spellcheck="false"><span class="esc">ESC</span></div>
    <ul class="list" id="list">
      <li class="row" data-k="open dashboard home"><span class="ic">📊</span><span>Open dashboard</span><span class="sp">G D</span></li>
      <li class="row" data-k="create new project"><span class="ic">➕</span><span>Create new project</span><span class="sp">C N</span></li>
      <li class="row" data-k="search documentation docs help"><span class="ic">📚</span><span>Search documentation</span><span class="sp">?</span></li>
      <li class="row" data-k="toggle dark mode theme"><span class="ic">🌙</span><span>Toggle dark mode</span><span class="sp">⌘ ⇧ L</span></li>
      <li class="row" data-k="invite team member"><span class="ic">👥</span><span>Invite team member</span><span class="sp">I T</span></li>
      <li class="row" data-k="view analytics report"><span class="ic">📈</span><span>View analytics report</span><span class="sp">A R</span></li>
      <li class="row" data-k="go to billing settings"><span class="ic">💳</span><span>Go to billing settings</span><span class="sp">B B</span></li>
      <li class="row" data-k="sign out of account"><span class="ic">🚪</span><span>Sign out of account</span><span class="sp">Q</span></li>
    </ul>
    <div class="empty" id="empty">No commands match your search.</div>
    <div class="kfoot"><span id="count">8 of 8 commands</span><span><b>↑↓</b> navigate · <b>Enter</b> run · <b>Esc</b> close</span></div>
  </div>
</div>
<script>
var wrap = document.getElementById('wrap');
var input = document.getElementById('input');
var list = document.getElementById('list');
var count = document.getElementById('count');
var empty = document.getElementById('empty');
var status = document.getElementById('status');
var openBtn = document.getElementById('openBtn');
var rows = Array.prototype.slice.call(list.querySelectorAll('.row'));
function visibleRows() {
  return rows.filter(function (r) { return r.style.display !== 'none'; });
}
function markFirst() {
  rows.forEach(function (r) { r.classList.remove('sel'); });
  var vis = visibleRows();
  if (vis.length) vis[0].classList.add('sel');
}
function filter() {
  var q = input.value.toLowerCase();
  var shown = 0;
  rows.forEach(function (r) {
    var hit = r.getAttribute('data-k').indexOf(q) !== -1;
    r.style.display = hit ? '' : 'none';
    if (hit) shown++;
  });
  count.textContent = shown + ' of ' + rows.length + ' commands';
  empty.style.display = shown ? 'none' : 'block';
  markFirst();
}
function setOpen(on) {
  wrap.classList.toggle('show', on);
  if (on) { input.value = ''; filter(); input.focus(); }
}
function run(row) {
  status.innerHTML = 'Ran command: <b>' + row.children[1].textContent + '</b>';
  setOpen(false);
}
openBtn.addEventListener('click', function () { setOpen(true); });
input.addEventListener('input', filter);
rows.forEach(function (r) { r.addEventListener('click', function () { run(r); }); });
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    var vis = visibleRows();
    if (vis.length) run(vis[0]);
  }
});
wrap.addEventListener('click', function (e) { if (e.target === wrap) setOpen(false); });
document.addEventListener('keydown', function (e) {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    setOpen(!wrap.classList.contains('show'));
  } else if (e.key === 'Escape') {
    setOpen(false);
  }
});
</script>
</body>
</html>`
      },
      {
        id: "lightbox",
        name: "Lightbox",
        desc: "Image lightbox with prev, next, counter and close.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lightbox — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:34px 28px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.stage h3{font-size:1.15rem;margin-bottom:6px}
.stage > p{color:var(--muted);font-size:.92rem;max-width:52ch;margin-bottom:20px}
.thumbs{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.thumb{aspect-ratio:4/3;border-radius:14px;border:2px solid transparent;cursor:pointer;display:grid;place-items:center;font-size:2.2rem;transition:.22s;position:relative;overflow:hidden}
.thumb::after{content:attr(data-label);position:absolute;left:0;right:0;bottom:0;padding:8px 10px;font-size:.72rem;font-weight:700;color:#fff;background:linear-gradient(transparent,rgba(0,0,0,.55))}
.thumb:hover{transform:translateY(-4px);border-color:rgba(255,255,255,.3);box-shadow:0 14px 30px rgba(0,0,0,.4)}
.thumb.on{border-color:var(--accent);box-shadow:0 0 0 3px rgba(255, 165, 0,.28)}
.t1{background:linear-gradient(135deg,#ffa500,#ff5c5c)}
.t2{background:linear-gradient(135deg,#3ecf8e,#0f9b8e)}
.t3{background:linear-gradient(135deg,#5c7cfa,#a55eea)}
.lb{position:fixed;inset:0;background:rgba(0,0,0,.86);backdrop-filter:blur(8px);z-index:90;display:grid;place-items:center;padding:26px;opacity:0;visibility:hidden;transition:.28s}
.lb.show{opacity:1;visibility:visible}
.frame{width:min(760px,100%);transform:scale(.96);transition:.3s cubic-bezier(.22,1,.36,1);position:relative}
.lb.show .frame{transform:none}
.badge{position:absolute;top:-40px;left:2px;font-size:.72rem;font-weight:800;letter-spacing:.08em;background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.16);padding:6px 13px;border-radius:999px;color:var(--text)}
.viewport{position:relative}
.slide{display:none;aspect-ratio:16/10;border-radius:18px;place-items:center;font-size:5rem;box-shadow:0 30px 80px rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.08)}
.slide.on{display:grid;animation:pop .35s ease}
@keyframes pop{from{opacity:0;transform:scale(.97)}to{opacity:1;transform:none}}
.nav{position:absolute;top:50%;transform:translateY(-50%);width:46px;height:46px;border-radius:50%;background:rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.22);color:#fff;cursor:pointer;font-size:1.15rem;transition:.2s;display:grid;place-items:center;backdrop-filter:blur(6px)}
.nav:hover{background:var(--accent);color:#14211f;border-color:var(--accent)}
.prev{left:14px}
.next{right:14px}
.cap{display:flex;justify-content:space-between;align-items:center;gap:14px;margin-top:15px;font-size:.9rem;color:var(--muted)}
.cap b{color:var(--text);font-weight:700}
.lb-x{position:absolute;top:-44px;right:2px;width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;cursor:pointer;transition:.2s;display:grid;place-items:center}
.lb-x:hover{background:var(--err);border-color:var(--err)}
</style>
</head>
<body>
<div class="stage">
  <h3>Lightbox gallery</h3>
  <p>Click a thumbnail to open the full viewer — step through with the arrows, counter and keyboard, close with Esc.</p>
  <div class="thumbs">
    <div class="thumb t1" data-i="0" data-label="Sunset ridge" role="button" tabindex="0">🌅</div>
    <div class="thumb t2" data-i="1" data-label="Pine valley" role="button" tabindex="0">🌲</div>
    <div class="thumb t3" data-i="2" data-label="Night skyline" role="button" tabindex="0">🌌</div>
  </div>
</div>
<div class="lb" id="lb">
  <div class="frame">
    <span class="badge" id="counter">1 / 3</span>
    <button class="lb-x" id="closeBtn" aria-label="Close lightbox">✕</button>
    <div class="viewport">
      <div class="slide t1 on">🌅</div>
      <div class="slide t2">🌲</div>
      <div class="slide t3">🌌</div>
      <button class="nav prev" id="prev" aria-label="Previous image">‹</button>
      <button class="nav next" id="next" aria-label="Next image">›</button>
    </div>
    <div class="cap"><b id="capTitle">Sunset ridge</b><span id="capMeta">Shot on 12 Sep · 4:52 PM</span></div>
  </div>
</div>
<script>
var lb = document.getElementById('lb');
var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
var thumbs = Array.prototype.slice.call(document.querySelectorAll('.thumb'));
var counter = document.getElementById('counter');
var capTitle = document.getElementById('capTitle');
var capMeta = document.getElementById('capMeta');
var titles = ['Sunset ridge', 'Pine valley', 'Night skyline'];
var metas = ['Shot on 12 Sep · 4:52 PM', 'Shot on 08 Sep · 7:14 AM', 'Shot on 01 Sep · 11:36 PM'];
var i = 0;
function show(n) {
  i = (n + slides.length) % slides.length;
  slides.forEach(function (s, j) { s.classList.toggle('on', j === i); });
  thumbs.forEach(function (t, j) { t.classList.toggle('on', j === i); });
  counter.textContent = (i + 1) + ' / ' + slides.length;
  capTitle.textContent = titles[i];
  capMeta.textContent = metas[i];
}
function openLb(n) { show(n); lb.classList.add('show'); }
function closeLb() { lb.classList.remove('show'); }
thumbs.forEach(function (t) {
  t.addEventListener('click', function () { openLb(parseInt(t.getAttribute('data-i'), 10)); });
  t.addEventListener('keydown', function (e) { if (e.key === 'Enter') openLb(parseInt(t.getAttribute('data-i'), 10)); });
});
document.getElementById('prev').addEventListener('click', function () { show(i - 1); });
document.getElementById('next').addEventListener('click', function () { show(i + 1); });
document.getElementById('closeBtn').addEventListener('click', closeLb);
lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', function (e) {
  if (!lb.classList.contains('show')) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') { e.preventDefault(); show(i - 1); }
  if (e.key === 'ArrowRight') { e.preventDefault(); show(i + 1); }
});
</script>
</body>
</html>`
      }
    ]
  });
})();
