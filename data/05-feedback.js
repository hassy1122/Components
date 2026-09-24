/* hasSy Component Library — data: Feedback & Alerts
   Every item.code is ONE complete standalone HTML document.
   Paste it into an .html file and open it in a browser. */
(function () {
  var C = (window.COMPONENTS = window.COMPONENTS || []);
  C.push({
    category: "Feedback & Alerts",
    items: [
      {
        id: "alert",
        name: "Alerts",
        desc: "Info, success, warning and danger alert banners with dismiss.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Alerts — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);display:grid;gap:12px}
.alert{display:flex;gap:14px;align-items:flex-start;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:15px 16px;position:relative;overflow:hidden;transition:.3s}
.alert.hide{opacity:0;transform:translateX(40px)}
.alert::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px}
.alert.info::before{background:#4da3ff}
.alert.success::before{background:var(--ok)}
.alert.warning::before{background:var(--accent)}
.alert.danger::before{background:var(--err)}
.ic{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;font-weight:800;font-size:.95rem;flex:0 0 auto}
.alert.info .ic{background:rgba(77,163,255,.15);color:#4da3ff}
.alert.success .ic{background:rgba(62,207,142,.15);color:var(--ok)}
.alert.warning .ic{background:rgba(255, 165, 0,.15);color:var(--accent)}
.alert.danger .ic{background:rgba(255,107,107,.15);color:var(--err)}
.txt{flex:1;min-width:0}
.txt b{display:block;font-size:.94rem;margin-bottom:2px}
.txt p{font-size:.87rem;color:var(--muted)}
.txt a{color:var(--accent);font-weight:700}
.txt a:hover{text-decoration:underline}
.x{background:transparent;border:0;color:var(--muted);font-size:1.15rem;line-height:1;cursor:pointer;padding:4px 6px;border-radius:8px;transition:.2s;flex:0 0 auto}
.x:hover{background:rgba(255,255,255,.09);color:var(--text)}
.bar{display:flex;justify-content:center;margin-top:4px}
.btn{border:0;cursor:pointer;border-radius:11px;padding:11px 20px;font-weight:700;font-size:.88rem;background:var(--accent);color:#14211f;transition:.2s}
.btn:hover{filter:brightness(1.08);transform:translateY(-1px)}
</style>
</head>
<body>
<div class="stage">
  <div class="stack" id="stack">
    <div class="alert info" role="alert">
      <span class="ic">i</span>
      <div class="txt"><b>Heads up!</b><p>Your free trial ends in 3 days. <a href="#">Upgrade now</a> to keep your projects.</p></div>
      <button class="x" aria-label="Dismiss alert">×</button>
    </div>
    <div class="alert success" role="alert">
      <span class="ic">✓</span>
      <div class="txt"><b>Payment received</b><p>Invoice #4821 for $249.00 was paid successfully.</p></div>
      <button class="x" aria-label="Dismiss alert">×</button>
    </div>
    <div class="alert warning" role="alert">
      <span class="ic">!</span>
      <div class="txt"><b>Disk almost full</b><p>You have used 92% of your storage. Consider archiving old builds.</p></div>
      <button class="x" aria-label="Dismiss alert">×</button>
    </div>
    <div class="alert danger" role="alert">
      <span class="ic">✕</span>
      <div class="txt"><b>Deployment failed</b><p>Build 4819 crashed during the test stage. <a href="#">View logs</a></p></div>
      <button class="x" aria-label="Dismiss alert">×</button>
    </div>
  </div>
  <div class="bar"><button class="btn" id="reset">Restore alerts</button></div>
</div>
<script>
var stack = document.getElementById('stack');
var initial = stack.innerHTML;
stack.addEventListener('click', function (e) {
  var b = e.target.closest('.x');
  if (!b) return;
  var a = b.closest('.alert');
  a.classList.add('hide');
  setTimeout(function () { if (a.parentNode) a.parentNode.removeChild(a); }, 300);
});
document.getElementById('reset').addEventListener('click', function () { stack.innerHTML = initial; });
</script>
</body>
</html>`
      },
      {
        id: "toast",
        name: "Toast",
        desc: "Toast notifications that slide in and auto-dismiss.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Toast — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{position:relative;width:min(680px,100%);min-height:370px;background:var(--panel);border:1px solid var(--line);border-radius:18px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:34px 26px;box-shadow:0 24px 60px rgba(0,0,0,.35);overflow:hidden}
.stage h2{font-size:1.15rem;letter-spacing:-.02em}
.stage .sub{color:var(--muted);font-size:.88rem;text-align:center;max-width:46ch}
.row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.btn{border:1px solid var(--line);cursor:pointer;border-radius:11px;padding:11px 18px;font-weight:700;font-size:.88rem;background:var(--panel-2);color:var(--text);transition:.2s}
.btn:hover{transform:translateY(-2px);border-color:var(--accent);color:var(--accent)}
.btn.primary{background:var(--accent);color:#14211f;border-color:var(--accent)}
.btn.primary:hover{color:#14211f;filter:brightness(1.08)}
.toasts{position:absolute;top:16px;right:16px;display:flex;flex-direction:column;gap:10px;width:min(300px,calc(100% - 32px));z-index:10}
.toast{background:var(--panel-2);border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:13px;padding:13px 14px;box-shadow:0 18px 40px rgba(0,0,0,.45);display:flex;gap:11px;align-items:flex-start;animation:tin .35s cubic-bezier(.22,1,.36,1);overflow:hidden;position:relative}
.toast.ok{border-left-color:var(--ok)}
.toast.err{border-left-color:var(--err)}
.toast.out{animation:tout .3s ease forwards}
@keyframes tin{from{opacity:0;transform:translateX(44px)}to{opacity:1;transform:none}}
@keyframes tout{to{opacity:0;transform:translateX(44px)}}
.ic{width:28px;height:28px;border-radius:9px;display:grid;place-items:center;font-weight:800;font-size:.9rem;flex:0 0 auto;background:rgba(255, 165, 0,.15);color:var(--accent)}
.toast.ok .ic{background:rgba(62,207,142,.15);color:var(--ok)}
.toast.err .ic{background:rgba(255,107,107,.15);color:var(--err)}
.toast b{display:block;font-size:.88rem}
.toast span{font-size:.78rem;color:var(--muted)}
.x{margin-left:auto;background:transparent;border:0;color:var(--muted);cursor:pointer;font-size:1rem;padding:0 2px;line-height:1}
.x:hover{color:var(--text)}
.prog{position:absolute;left:0;bottom:0;height:3px;width:100%;background:rgba(255,255,255,.22);transform:scaleX(1);transform-origin:left;animation:shrink 3.4s linear forwards}
@keyframes shrink{to{transform:scaleX(0)}}
</style>
</head>
<body>
<div class="stage">
  <div class="toasts" id="toasts" aria-live="polite"></div>
  <h2>Toast notifications</h2>
  <p class="sub">Messages slide in from the right, stack neatly and auto-dismiss after a few seconds.</p>
  <div class="row">
    <button class="btn primary" data-kind="ok">Success toast</button>
    <button class="btn" data-kind="err">Error toast</button>
    <button class="btn" data-kind="info">Info toast</button>
  </div>
</div>
<script>
var host = document.getElementById('toasts');
var icons = { ok: '✓', err: '✕', info: 'i' };
var messages = {
  ok: ['Profile saved', 'Your changes are live now.'],
  err: ['Upload failed', 'The file exceeds the 10 MB limit.'],
  info: ['New version available', 'Refresh to pick up build 4822.']
};
function dismiss(el) {
  if (el.classList.contains('out')) return;
  el.classList.add('out');
  setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 300);
}
function show(kind) {
  while (host.children.length >= 4) dismiss(host.firstElementChild);
  var el = document.createElement('div');
  el.className = 'toast ' + kind;
  el.innerHTML = '<span class="ic">' + icons[kind] + '</span><div><b>' + messages[kind][0] + '</b><span>' + messages[kind][1] + '</span></div><button class="x" aria-label="Close notification">×</button><i class="prog"></i>';
  el.querySelector('.x').addEventListener('click', function () { dismiss(el); });
  host.appendChild(el);
  setTimeout(function () { dismiss(el); }, 3400);
}
document.querySelectorAll('.row .btn').forEach(function (b) {
  b.addEventListener('click', function () { show(b.getAttribute('data-kind')); });
});
</script>
</body>
</html>`
      },
      {
        id: "badge",
        name: "Badges",
        desc: "Status badges and pills — new, sale, online, danger, muted.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Badges — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(640px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.card h2{font-size:1.08rem;letter-spacing:-.01em;margin-bottom:4px}
.card > p.intro{color:var(--muted);font-size:.88rem;margin-bottom:20px}
.grp + .grp{margin-top:18px;padding-top:18px;border-top:1px solid var(--line)}
.grp h4{font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-bottom:11px;font-weight:800}
.row{display:flex;flex-wrap:wrap;gap:9px;align-items:center}
.b{display:inline-flex;align-items:center;gap:6px;font-size:.76rem;font-weight:800;padding:6px 12px;border-radius:999px;letter-spacing:.03em;transition:.2s}
.b:hover{transform:translateY(-2px)}
.b.new{background:rgba(255, 165, 0,.16);color:var(--accent);border:1px solid rgba(255, 165, 0,.4)}
.b.sale{background:var(--brand);color:#fff;box-shadow:0 8px 18px rgba(255,92,92,.3)}
.b.online{background:rgba(62,207,142,.14);color:var(--ok);border:1px solid rgba(62,207,142,.4)}
.b.online::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--ok);box-shadow:0 0 0 3px rgba(62,207,142,.22)}
.b.offline{background:rgba(255,255,255,.06);color:var(--muted);border:1px solid var(--line)}
.b.offline::before{content:"";width:7px;height:7px;border-radius:50%;background:#5d7575}
.b.danger{background:rgba(255,107,107,.14);color:var(--err);border:1px solid rgba(255,107,107,.45)}
.b.beta{background:linear-gradient(135deg,var(--accent),var(--brand));color:#14211f}
.b.muted{background:rgba(255,255,255,.07);color:var(--muted);border:1px solid var(--line)}
.b.sq{border-radius:8px}
.b.count{background:var(--panel-2);color:var(--text);border:1px solid var(--line);padding:5px 5px 5px 11px}
.b.count b{background:var(--brand);color:#fff;border-radius:999px;min-width:19px;height:19px;display:grid;place-items:center;font-size:.66rem;padding:0 5px}
.b.lg{font-size:.86rem;padding:9px 16px}
.note{margin-top:20px;font-size:.8rem;color:var(--muted);text-align:center}
.note b{color:var(--accent)}
</style>
</head>
<body>
<div class="card">
  <h2>Badge library</h2>
  <p class="intro">Compact status labels for tables, cards and navigation.</p>
  <div class="grp">
    <h4>Status</h4>
    <div class="row">
      <span class="b new">● New</span>
      <span class="b sale">-30% Sale</span>
      <span class="b online">Online</span>
      <span class="b offline">Offline</span>
      <span class="b danger">Failed</span>
      <span class="b beta">Beta</span>
      <span class="b muted">Archived</span>
    </div>
  </div>
  <div class="grp">
    <h4>Counts and shapes</h4>
    <div class="row">
      <span class="b count">Inbox <b>12</b></span>
      <span class="b count">Alerts <b>3</b></span>
      <span class="b muted sq">SQUARE</span>
      <span class="b new">Large pill</span>
      <span class="b danger">Danger</span>
    </div>
  </div>
  <p class="note">Badges are pure CSS — combine the color classes with <b>.sq</b> or <b>.lg</b> for variants.</p>
</div>
</body>
</html>`
      },
      {
        id: "tooltip",
        name: "Tooltip",
        desc: "CSS tooltip on hover and focus with accessible label.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tooltip — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(640px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;box-shadow:0 24px 60px rgba(0,0,0,.35);overflow:hidden}
.head{padding:24px 28px 6px;text-align:center}
.head h2{font-size:1.1rem;letter-spacing:-.01em}
.head p{color:var(--muted);font-size:.87rem;margin-top:6px}
.row{display:flex;justify-content:center;align-items:center;gap:26px;flex-wrap:wrap;padding:64px 28px 70px}
.tip{position:relative;background:transparent;border:1px solid var(--line);color:var(--text);border-radius:12px;padding:12px 20px;font-weight:700;font-size:.9rem;cursor:pointer;transition:.2s}
.tip:hover,.tip:focus{border-color:var(--accent);color:var(--accent);outline:none}
.tip.primary{background:var(--accent);border-color:var(--accent);color:#14211f}
.tip.primary:hover,.tip.primary:focus{filter:brightness(1.08);color:#14211f}
.tip.icon{width:46px;height:46px;padding:0;border-radius:50%;display:grid;place-items:center;font-size:1.05rem}
.bubble{position:absolute;bottom:calc(100% + 13px);left:50%;transform:translate(-50%,8px);background:#0b1918;color:var(--text);font-size:.78rem;font-weight:600;padding:9px 13px;border-radius:10px;white-space:nowrap;box-shadow:0 14px 34px rgba(0,0,0,.55);opacity:0;visibility:hidden;transition:.2s;pointer-events:none;z-index:20}
.bubble::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:7px solid transparent;border-top-color:#0b1918}
.tip:hover .bubble,.tip:focus .bubble{opacity:1;visibility:visible;transform:translate(-50%,0)}
.tip.below .bubble{bottom:auto;top:calc(100% + 13px)}
.tip.below .bubble::after{top:auto;bottom:100%;border-top-color:transparent;border-bottom-color:#0b1918}
.foot{border-top:1px solid var(--line);padding:16px 24px;text-align:center;font-size:.8rem;color:var(--muted)}
.foot b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <div class="head">
    <h2>Tooltips, pure CSS</h2>
    <p>Each trigger carries its own label in a hidden span — shown on hover and keyboard focus.</p>
  </div>
  <div class="row">
    <button class="tip" aria-describedby="t1">Hover me<span class="bubble" id="t1" role="tooltip">Tooltips appear above the trigger</span></button>
    <button class="tip icon" aria-label="Keyboard shortcut" aria-describedby="t2">⌘K<span class="bubble" id="t2" role="tooltip">Open the command palette</span></button>
    <button class="tip primary" aria-describedby="t3">Delete project<span class="bubble" id="t3" role="tooltip">This action cannot be undone</span></button>
    <button class="tip below" aria-describedby="t4">More info<span class="bubble" id="t4" role="tooltip">Tooltip placed below the trigger</span></button>
  </div>
  <p class="foot">Hover or <b>Tab</b> to each button — labels are linked with aria-describedby.</p>
</div>
</body>
</html>`
      },
      {
        id: "popover",
        name: "Popover",
        desc: "Click-triggered popover panel with title and actions.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Popover — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{position:relative;width:min(560px,100%);min-height:340px;background:var(--panel);border:1px solid var(--line);border-radius:18px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:34px 26px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.stage h2{font-size:1.1rem;letter-spacing:-.01em}
.stage .sub{color:var(--muted);font-size:.87rem;text-align:center;max-width:44ch}
.anchor{position:relative}
.btn{border:0;cursor:pointer;background:var(--accent);color:#14211f;font-weight:700;padding:13px 22px;border-radius:12px;font-size:.93rem;transition:.2s}
.btn:hover{filter:brightness(1.08);transform:translateY(-1px)}
.pop{position:absolute;bottom:calc(100% + 16px);left:50%;transform:translate(-50%,10px);width:min(320px,86vw);background:var(--panel-2);border:1px solid var(--line);border-radius:16px;padding:20px;box-shadow:0 30px 70px rgba(0,0,0,.55);opacity:0;visibility:hidden;transition:.25s;z-index:10;text-align:left}
.pop.show{opacity:1;visibility:visible;transform:translate(-50%,0)}
.pop::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:9px solid transparent;border-top-color:var(--panel-2)}
.pop h3{font-size:1rem;margin-bottom:8px;letter-spacing:-.01em}
.pop p{font-size:.87rem;color:var(--muted);margin-bottom:14px}
.opts{display:grid;gap:8px;margin-bottom:16px}
.opt{display:flex;gap:10px;align-items:center;font-size:.86rem;background:rgba(0,0,0,.22);border:1px solid var(--line);border-radius:11px;padding:10px 12px;cursor:pointer;transition:.2s}
.opt:hover{border-color:rgba(255, 165, 0,.5)}
.opt input{accent-color:var(--accent)}
.acts{display:flex;gap:9px;justify-content:flex-end}
.acts button{border:0;cursor:pointer;border-radius:10px;padding:10px 16px;font-weight:700;font-size:.85rem;transition:.2s}
.cancel{background:transparent;border:1px solid var(--line) !important;color:var(--muted)}
.cancel:hover{color:var(--text);border-color:var(--muted) !important}
.ok-btn{background:var(--accent);color:#14211f}
.ok-btn:hover{filter:brightness(1.08)}
.status{font-size:.82rem;color:var(--muted);min-height:1.3em}
.status b{color:var(--ok)}
</style>
</head>
<body>
<div class="stage">
  <h2>Click-triggered popover</h2>
  <p class="sub">Opens on click, closes on outside click or the Escape key — with an arrow anchored to the button.</p>
  <div class="anchor" id="anchor">
    <button class="btn" id="trigger" aria-expanded="false" aria-controls="pop">Publish changes?</button>
    <div class="pop" id="pop" role="dialog" aria-label="Publish confirmation">
      <h3>Ready to publish?</h3>
      <p>Choose what should go live with this release.</p>
      <div class="opts">
        <label class="opt"><input type="radio" name="target" checked> Deploy to production</label>
        <label class="opt"><input type="radio" name="target"> Deploy to staging only</label>
      </div>
      <div class="acts">
        <button class="cancel" id="cancel">Cancel</button>
        <button class="ok-btn" id="confirm">Publish</button>
      </div>
    </div>
  </div>
  <p class="status" id="status">No release pending.</p>
</div>
<script>
var anchor = document.getElementById('anchor');
var trigger = document.getElementById('trigger');
var pop = document.getElementById('pop');
var status = document.getElementById('status');
function setOpen(open) {
  pop.classList.toggle('show', open);
  trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
}
trigger.addEventListener('click', function (e) {
  e.stopPropagation();
  setOpen(!pop.classList.contains('show'));
});
document.getElementById('cancel').addEventListener('click', function () { setOpen(false); });
document.getElementById('confirm').addEventListener('click', function () {
  setOpen(false);
  status.innerHTML = 'Release published <b>✓</b>';
});
document.addEventListener('click', function (e) { if (!anchor.contains(e.target)) setOpen(false); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
</script>
</body>
</html>`
      },
      {
        id: "notification-bell",
        name: "Notification Bell",
        desc: "Bell with count badge and a dropdown notification list.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Notification Bell — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.bar{position:relative;width:min(560px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.who{display:flex;align-items:center;gap:12px}
.ava{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:.85rem;color:#14211f;background:linear-gradient(135deg,var(--accent),var(--brand))}
.who b{display:block;font-size:.95rem}
.who span{font-size:.78rem;color:var(--muted)}
.anchor{position:relative}
.bell{position:relative;width:48px;height:48px;border-radius:14px;background:var(--panel-2);border:1px solid var(--line);cursor:pointer;font-size:1.25rem;display:grid;place-items:center;transition:.2s}
.bell:hover,.bell[aria-expanded="true"]{border-color:var(--accent);transform:translateY(-2px)}
.cnt{position:absolute;top:-8px;right:-8px;min-width:21px;height:21px;padding:0 5px;border-radius:999px;background:var(--brand);color:#fff;font-size:.66rem;font-weight:800;display:grid;place-items:center;border:2px solid var(--panel);box-shadow:0 5px 12px rgba(255,92,92,.5)}
.cnt.hidden{display:none}
.drop{position:absolute;top:calc(100% + 14px);right:0;width:min(340px,84vw);background:var(--panel-2);border:1px solid var(--line);border-radius:16px;box-shadow:0 30px 70px rgba(0,0,0,.55);opacity:0;visibility:hidden;transform:translateY(10px);transition:.25s;overflow:hidden;z-index:30}
.drop.show{opacity:1;visibility:visible;transform:none}
.dhead{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;border-bottom:1px solid var(--line)}
.dhead b{font-size:.92rem}
.dhead span{font-size:.72rem;font-weight:800;color:var(--accent)}
.nlist{padding:8px;display:grid;gap:4px}
.n{display:flex;gap:11px;padding:11px 12px;border-radius:12px;position:relative;transition:.2s}
.n:hover{background:rgba(255,255,255,.05)}
.n.unread{background:rgba(255, 165, 0,.09)}
.dot{position:absolute;top:14px;right:12px;width:8px;height:8px;border-radius:50%;background:var(--accent)}
.n:not(.unread) .dot{display:none}
.iava{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:.75rem;color:#14211f;flex:0 0 auto}
.iava.a{background:linear-gradient(135deg,var(--accent),var(--brand))}
.iava.b{background:linear-gradient(135deg,#3ecf8e,#4da3ff)}
.iava.c{background:linear-gradient(135deg,#7c5cff,#4da3ff)}
.ntxt{flex:1;min-width:0}
.ntxt p{font-size:.85rem;padding-right:12px}
.ntxt small{display:block;color:var(--muted);font-size:.75rem;margin-top:2px}
.dfoot{border-top:1px solid var(--line);padding:11px;text-align:center}
.dfoot button{background:transparent;border:0;color:var(--accent);font-weight:700;font-size:.83rem;cursor:pointer;padding:7px 12px;border-radius:9px;transition:.2s}
.dfoot button:hover{background:rgba(255, 165, 0,.13)}
.hint{width:min(560px,100%);text-align:center;color:var(--muted);font-size:.85rem}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div>
  <div class="bar">
    <div class="who"><div class="ava">AK</div><div><b>Ava Kingsley</b><span>Workspace admin</span></div></div>
    <div class="anchor" id="anchor">
      <button class="bell" id="bell" aria-label="Notifications, 3 unread" aria-expanded="false" aria-controls="drop">🔔<span class="cnt" id="cnt">3</span></button>
      <div class="drop" id="drop" role="dialog" aria-label="Notification list">
        <div class="dhead"><b>Notifications</b><span id="newCount">3 new</span></div>
        <div class="nlist">
          <div class="n unread"><div class="iava a">MC</div><div class="ntxt"><p><b>Maya Chen</b> assigned you a task</p><small>Review onboarding copy · 2m</small></div><span class="dot"></span></div>
          <div class="n unread"><div class="iava b">JL</div><div class="ntxt"><p><b>Jonas Lee</b> commented on PR #218</p><small>“Nice catch on the focus ring” · 26m</small></div><span class="dot"></span></div>
          <div class="n unread"><div class="iava c">SY</div><div class="ntxt"><p><b>Weekly digest</b> is ready</p><small>12 deploys · 4 incidents · 1h</small></div><span class="dot"></span></div>
        </div>
        <div class="dfoot"><button id="mark">Mark all as read</button></div>
      </div>
    </div>
  </div>
  <p class="hint">Click the <b>bell</b> to open the list — then mark everything as read.</p>
</div>
<script>
var anchor = document.getElementById('anchor');
var bell = document.getElementById('bell');
var drop = document.getElementById('drop');
function setOpen(open) {
  drop.classList.toggle('show', open);
  bell.setAttribute('aria-expanded', open ? 'true' : 'false');
}
bell.addEventListener('click', function (e) {
  e.stopPropagation();
  setOpen(!drop.classList.contains('show'));
});
document.getElementById('mark').addEventListener('click', function () {
  document.querySelectorAll('.n.unread').forEach(function (n) { n.classList.remove('unread'); });
  document.getElementById('cnt').classList.add('hidden');
  document.getElementById('newCount').textContent = 'All caught up';
  bell.setAttribute('aria-label', 'Notifications, none unread');
});
document.addEventListener('click', function (e) { if (!anchor.contains(e.target)) setOpen(false); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
</script>
</body>
</html>`
      },
      {
        id: "empty-state",
        name: "Empty State",
        desc: "Empty state with icon, message and primary call to action.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Empty State — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(480px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:46px 34px 40px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.icon{width:94px;height:94px;margin:0 auto 22px;border-radius:26px;background:rgba(255, 165, 0,.09);border:1px dashed rgba(255, 165, 0,.5);display:grid;place-items:center;animation:float 4s ease-in-out infinite}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
.icon svg{stroke:var(--accent)}
.card h2{font-size:1.35rem;letter-spacing:-.02em;margin-bottom:8px}
.card p{color:var(--muted);font-size:.92rem;max-width:38ch;margin:0 auto}
.actions{display:flex;gap:10px;justify-content:center;margin-top:26px;flex-wrap:wrap}
.btn{border:0;cursor:pointer;border-radius:12px;padding:13px 22px;font-weight:700;font-size:.92rem;background:var(--accent);color:#14211f;transition:.2s}
.btn:hover{filter:brightness(1.08);transform:translateY(-2px)}
.btn.ghost{background:transparent;border:1px solid var(--line);color:var(--text)}
.btn.ghost:hover{border-color:var(--muted);filter:none}
.foot{margin-top:18px;font-size:.8rem;color:var(--muted)}
.foot a{color:var(--accent);font-weight:700}
.foot a:hover{text-decoration:underline}
</style>
</head>
<body>
<div class="card">
  <div class="icon">
    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
  </div>
  <h2>No projects yet</h2>
  <p>Projects you create will show up here. Start with a blank canvas or pick a template to move faster.</p>
  <div class="actions">
    <button class="btn">Create project</button>
    <button class="btn ghost">Browse templates</button>
  </div>
  <p class="foot">Need a hand? <a href="#">Read the quick start →</a></p>
</div>
</body>
</html>`
      },
      {
        id: "error-404",
        name: "Error 404",
        desc: "404 error block with search field and back-home button.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Error 404 — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{position:relative;width:min(540px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:44px 34px 40px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.4);overflow:hidden}
.blob{position:absolute;width:230px;height:230px;border-radius:50%;filter:blur(70px);opacity:.3;pointer-events:none}
.blob.a{top:-90px;right:-70px;background:rgba(255, 165, 0,.55)}
.blob.b{bottom:-100px;left:-80px;background:rgba(255,92,92,.45)}
.inner{position:relative;z-index:1}
.code{font-size:clamp(4.6rem,17vw,7rem);font-weight:800;letter-spacing:-.05em;line-height:1;background:linear-gradient(135deg,var(--accent),var(--brand));-webkit-background-clip:text;background-clip:text;color:transparent}
.card h2{font-size:1.3rem;letter-spacing:-.02em;margin:14px 0 8px}
.card p{color:var(--muted);font-size:.92rem;max-width:40ch;margin:0 auto}
.search{display:flex;gap:9px;margin-top:26px}
.search input{flex:1;min-width:0;background:rgba(0,0,0,.28);border:1px solid var(--line);border-radius:12px;padding:13px 15px;color:var(--text);outline:none;transition:.2s}
.search input::placeholder{color:#6e8585}
.search input:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(255, 165, 0,.15)}
.search button{border:0;cursor:pointer;background:var(--accent);color:#14211f;font-weight:700;padding:13px 20px;border-radius:12px;transition:.2s}
.search button:hover{filter:brightness(1.08)}
.hint{margin-top:14px;font-size:.8rem;color:var(--muted);min-height:1.3em}
.home{margin-top:18px;display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:.9rem;color:var(--accent);padding:10px 16px;border-radius:11px;border:1px solid rgba(255, 165, 0,.4);transition:.2s;background:transparent;cursor:pointer}
.home:hover{background:rgba(255, 165, 0,.14);gap:11px}
</style>
</head>
<body>
<div class="card">
  <span class="blob a"></span>
  <span class="blob b"></span>
  <div class="inner">
    <div class="code">404</div>
    <h2>This page drifted off the map</h2>
    <p>The link may be outdated, or the page moved. Try searching, or head back to safety.</p>
    <form class="search" id="search">
      <input type="search" placeholder="Search the docs…" aria-label="Search the docs">
      <button type="submit">Search</button>
    </form>
    <p class="hint" id="hint">&nbsp;</p>
    <button class="home" id="home">← Back to home</button>
  </div>
</div>
<script>
var hint = document.getElementById('hint');
document.getElementById('search').addEventListener('submit', function (e) {
  e.preventDefault();
  hint.textContent = 'Search is disabled in this standalone demo file.';
});
document.getElementById('home').addEventListener('click', function () {
  hint.textContent = 'Imagine a smooth route back to the dashboard.';
});
</script>
</body>
</html>`
      }
    ]
  });
})();
