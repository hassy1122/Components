/* hasSy Component Library — data: Data Display
   Every item.code is ONE complete standalone HTML document.
   Paste it into an .html file and open it in a browser. */
(function () {
  var C = (window.COMPONENTS = window.COMPONENTS || []);
  C.push({
    category: "Data Display",
    items: [
      {
        id: "table",
        name: "Data Table",
        desc: "Responsive data table with zebra rows and status cells.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Data Table — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.top{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:20px 22px 16px}
.top h3{font-size:1.05rem}
.top p{font-size:.82rem;color:var(--muted)}
.badge{font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;background:rgba(255,153,67,.16);color:var(--accent);padding:5px 11px;border-radius:999px;white-space:nowrap}
.scroll{overflow-x:auto}
table{width:100%;border-collapse:collapse;min-width:560px}
thead th{text-align:left;font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);font-weight:800;padding:12px 22px;background:rgba(0,0,0,.2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
tbody td{padding:13px 22px;font-size:.9rem;border-bottom:1px solid rgba(255,255,255,.06);white-space:nowrap}
tbody tr:nth-child(even){background:rgba(255,255,255,.03)}
tbody tr{transition:.15s}
tbody tr:hover{background:rgba(255,153,67,.07)}
.mono{font-variant-numeric:tabular-nums;color:var(--accent);font-weight:700}
.who{display:flex;align-items:center;gap:10px}
.av{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font-size:.66rem;font-weight:800;color:#14211f;flex:0 0 auto}
.g1{background:linear-gradient(135deg,#ff9f43,#ff5c5c)}
.g2{background:linear-gradient(135deg,#3ecf8e,#0f9b8e)}
.g3{background:linear-gradient(135deg,#5c7cfa,#a55eea)}
.g4{background:linear-gradient(135deg,#f7b733,#fc4a1a)}
.pill{display:inline-flex;align-items:center;gap:7px;font-size:.74rem;font-weight:800;padding:5px 11px;border-radius:999px}
.pill::before{content:"";width:6px;height:6px;border-radius:50%;background:currentColor}
.pill.ok{background:rgba(62,207,142,.14);color:var(--ok)}
.pill.warn{background:rgba(255,153,67,.15);color:var(--accent)}
.pill.err{background:rgba(255,107,107,.14);color:var(--err)}
.pill.info{background:rgba(255,255,255,.08);color:var(--muted)}
.tfoot{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:14px 22px;font-size:.8rem;color:var(--muted);background:rgba(0,0,0,.18)}
.tfoot a{color:var(--accent);font-weight:700}
.tfoot a:hover{text-decoration:underline}
@media(max-width:560px){.top{flex-direction:column;align-items:flex-start}}
</style>
</head>
<body>
<div class="card">
  <div class="top">
    <div><h3>Recent orders</h3><p>Zebra rows, hover highlight and colored status pills.</p></div>
    <span class="badge">6 rows</span>
  </div>
  <div class="scroll">
    <table>
      <thead><tr><th>Order</th><th>Customer</th><th>Status</th><th>Total</th><th>Date</th></tr></thead>
      <tbody>
        <tr><td class="mono">#1042</td><td><span class="who"><i class="av g1">AM</i>Ana Meyer</span></td><td><span class="pill ok">Paid</span></td><td>$128.00</td><td>Sep 12</td></tr>
        <tr><td class="mono">#1041</td><td><span class="who"><i class="av g2">RK</i>Ravi Kapoor</span></td><td><span class="pill warn">Pending</span></td><td>$64.50</td><td>Sep 12</td></tr>
        <tr><td class="mono">#1040</td><td><span class="who"><i class="av g3">TJ</i>Tessa Jordan</span></td><td><span class="pill ok">Paid</span></td><td>$310.20</td><td>Sep 11</td></tr>
        <tr><td class="mono">#1039</td><td><span class="who"><i class="av g4">LO</i>Luis Ortega</span></td><td><span class="pill err">Failed</span></td><td>$19.99</td><td>Sep 11</td></tr>
        <tr><td class="mono">#1038</td><td><span class="who"><i class="av g2">SN</i>Sara Nilsson</span></td><td><span class="pill info">Refunded</span></td><td>$88.00</td><td>Sep 10</td></tr>
        <tr><td class="mono">#1037</td><td><span class="who"><i class="av g1">DW</i>Diego Wu</span></td><td><span class="pill warn">Processing</span></td><td>$142.75</td><td>Sep 10</td></tr>
      </tbody>
    </table>
  </div>
  <div class="tfoot"><span>Showing 6 of 128 orders</span><a href="#">View all orders →</a></div>
</div>
</body>
</html>`
      },
      {
        id: "timeline",
        name: "Timeline",
        desc: "Vertical timeline with icons, titles and timestamps.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Timeline — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px 26px 24px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.top{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:22px}
.top h3{font-size:1.05rem}
.top p{font-size:.82rem;color:var(--muted)}
.badge{font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;background:rgba(255,153,67,.16);color:var(--accent);padding:5px 11px;border-radius:999px;white-space:nowrap}
.tl{position:relative;list-style:none}
.tl::before{content:"";position:absolute;left:17px;top:10px;bottom:10px;width:2px;background:linear-gradient(var(--line),rgba(255,153,67,.4),var(--line))}
.tl li{display:grid;grid-template-columns:36px 1fr;gap:16px;padding-bottom:20px;position:relative}
.tl li:last-child{padding-bottom:0}
.dot{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font-size:.9rem;background:var(--panel-2);border:2px solid var(--line);z-index:1;box-shadow:0 0 0 4px var(--panel)}
.dot.ok{background:rgba(62,207,142,.16);border-color:rgba(62,207,142,.55);color:var(--ok)}
.dot.warn{background:rgba(255,153,67,.16);border-color:rgba(255,153,67,.55);color:var(--accent)}
.dot.info{background:rgba(92,124,250,.16);border-color:rgba(92,124,250,.5);color:#8ea2ff}
.dot.mute{color:var(--muted)}
.box{background:var(--panel-2);border:1px solid var(--line);border-radius:13px;padding:14px 16px;transition:.2s}
.box:hover{border-color:rgba(255,153,67,.4);transform:translateX(4px)}
.box .row{display:flex;align-items:baseline;justify-content:space-between;gap:12px;flex-wrap:wrap}
.box b{font-size:.94rem}
.box time{font-size:.75rem;color:var(--muted);font-weight:700;white-space:nowrap}
.box p{font-size:.86rem;color:var(--muted);margin-top:5px}
</style>
</head>
<body>
<div class="card">
  <div class="top">
    <div><h3>Activity timeline</h3><p>Events with icons, titles and relative timestamps.</p></div>
    <span class="badge">Today</span>
  </div>
  <ol class="tl">
    <li><span class="dot ok">✓</span><div class="box"><div class="row"><b>Deployment succeeded</b><time>2 min ago</time></div><p>v2.4.1 promoted to production across 6 regions.</p></div></li>
    <li><span class="dot warn">⚠</span><div class="box"><div class="row"><b>Performance warning</b><time>26 min ago</time></div><p>API p95 latency crossed 400 ms on the checkout route.</p></div></li>
    <li><span class="dot info">🧾</span><div class="box"><div class="row"><b>Invoice paid</b><time>3 hours ago</time></div><p>$240.00 charged to the card ending in 4242.</p></div></li>
    <li><span class="dot mute">👤</span><div class="box"><div class="row"><b>Teammate invited</b><time>Yesterday</time></div><p>kai@studio.io joined the workspace as a viewer.</p></div></li>
    <li><span class="dot ok">🗄</span><div class="box"><div class="row"><b>Nightly backup completed</b><time>Yesterday</time></div><p>Snapshot stored successfully (1.2 GB, encrypted).</p></div></li>
  </ol>
</div>
</body>
</html>`
      },
      {
        id: "accordion",
        name: "Accordion",
        desc: "FAQ accordion with smooth height transitions.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Accordion — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.top{margin-bottom:18px}
.top h3{font-size:1.05rem}
.top p{font-size:.84rem;color:var(--muted)}
.list{display:grid;gap:10px}
.item{background:var(--panel-2);border:1px solid var(--line);border-radius:13px;overflow:hidden;transition:.25s}
.item.open{border-color:rgba(255,153,67,.45);box-shadow:0 8px 24px rgba(0,0,0,.28)}
.q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:16px 18px;background:transparent;border:0;text-align:left;font-weight:700;font-size:.95rem;color:var(--text);cursor:pointer;transition:.2s}
.q:hover{color:var(--accent)}
.item.open .q{color:var(--accent)}
.plus{width:26px;height:26px;border-radius:8px;background:rgba(255,255,255,.07);border:1px solid var(--line);display:grid;place-items:center;font-size:.95rem;color:var(--muted);transition:.3s cubic-bezier(.22,1,.36,1);flex:0 0 auto}
.item.open .plus{transform:rotate(45deg);background:rgba(255,153,67,.16);border-color:rgba(255,153,67,.5);color:var(--accent)}
.a{max-height:0;overflow:hidden;transition:max-height .35s ease}
.a p{padding:0 18px 17px;font-size:.9rem;color:var(--muted)}
.a p b{color:var(--text)}
.hint{margin-top:16px;font-size:.78rem;color:var(--muted);text-align:center}
</style>
</head>
<body>
<div class="card">
  <div class="top"><h3>Frequently asked questions</h3><p>Single-open accordion — expanding one answer collapses the others.</p></div>
  <div class="list">
    <div class="item open">
      <button class="q" aria-expanded="true">What is the hasSy Component Library?<span class="plus">+</span></button>
      <div class="a"><p>A set of <b>plain HTML, CSS and vanilla JS</b> components you can paste straight into a page. No frameworks, no build step, no dependencies.</p></div>
    </div>
    <div class="item">
      <button class="q" aria-expanded="false">Do I need a build step?<span class="plus">+</span></button>
      <div class="a"><p>Never. Every component ships as one standalone document — copy the markup, adjust the CSS variables and you are done.</p></div>
    </div>
    <div class="item">
      <button class="q" aria-expanded="false">Can I use these commercially?<span class="plus">+</span></button>
      <div class="a"><p>Yes. Use them in client work and products without attribution. The palette lives entirely in a handful of CSS custom properties.</p></div>
    </div>
    <div class="item">
      <button class="q" aria-expanded="false">How do I change the color theme?<span class="plus">+</span></button>
      <div class="a"><p>Override the variables on <b>:root</b> — accent, panel, line and text. Every component inherits the tokens automatically.</p></div>
    </div>
  </div>
  <p class="hint">Click a question to expand it — only one panel stays open.</p>
</div>
<script>
var items = Array.prototype.slice.call(document.querySelectorAll('.item'));
items.forEach(function (item) {
  var btn = item.querySelector('.q');
  var body = item.querySelector('.a');
  btn.addEventListener('click', function () {
    var isOpen = item.classList.contains('open');
    items.forEach(function (other) {
      other.classList.remove('open');
      other.querySelector('.a').style.maxHeight = '';
      other.querySelector('.q').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
var first = document.querySelector('.item.open .a');
if (first) first.style.maxHeight = first.scrollHeight + 'px';
</script>
</body>
</html>`
      },
      {
        id: "progress-bar",
        name: "Progress Bar",
        desc: "Labeled progress bars with colors and animated fill.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Progress Bar — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.top{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:22px}
.top h3{font-size:1.05rem}
.top p{font-size:.82rem;color:var(--muted)}
.badge{font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;background:rgba(255,153,67,.16);color:var(--accent);padding:5px 11px;border-radius:999px}
.bar{margin-bottom:18px}
.meta{display:flex;justify-content:space-between;align-items:baseline;gap:12px;font-size:.87rem;margin-bottom:8px}
.meta b{font-weight:700}
.meta span{color:var(--muted);font-variant-numeric:tabular-nums;font-weight:700;font-size:.8rem}
.track{height:11px;border-radius:999px;background:rgba(0,0,0,.35);border:1px solid var(--line);overflow:hidden}
.fill{height:100%;border-radius:999px;width:0;animation:grow 1.4s cubic-bezier(.22,1,.36,1) forwards}
@keyframes grow{from{width:0}to{width:var(--w)}}
.fill.a{--w:72%;background:linear-gradient(90deg,#ff9f43,#ffc46b);box-shadow:0 0 14px rgba(255,153,67,.45)}
.fill.b{--w:48%;background:linear-gradient(90deg,#5c7cfa,#8ea2ff);box-shadow:0 0 14px rgba(92,124,250,.4)}
.fill.c{--w:91%;background:linear-gradient(90deg,#3ecf8e,#7ee7bf);box-shadow:0 0 14px rgba(62,207,142,.4)}
.fill.d{--w:34%;background:linear-gradient(90deg,#ff5c5c,#ff8f8f);box-shadow:0 0 14px rgba(255,92,92,.4)}
.sub{font-size:.76rem;color:var(--muted);margin-top:7px}
.ind{position:relative;height:11px;border-radius:999px;background:rgba(0,0,0,.35);border:1px solid var(--line);overflow:hidden}
.ind::after{content:"";position:absolute;top:0;left:0;height:100%;width:36%;border-radius:999px;background:linear-gradient(90deg,transparent,var(--accent),transparent);animation:slide 1.25s ease-in-out infinite}
@keyframes slide{0%{left:-40%}100%{left:105%}}
.sep{height:1px;background:var(--line);margin:22px 0 18px}
</style>
</head>
<body>
<div class="card">
  <div class="top"><div><h3>Storage &amp; jobs</h3><p>Animated fills on load, plus an indeterminate variant.</p></div><span class="badge">Live</span></div>
  <div class="bar"><div class="meta"><b>Video export</b><span>72%</span></div><div class="track"><div class="fill a"></div></div></div>
  <div class="bar"><div class="meta"><b>Storage used</b><span>48%</span></div><div class="track"><div class="fill b"></div></div><p class="sub">4.8 GB of 10 GB on the Pro plan</p></div>
  <div class="bar"><div class="meta"><b>Test coverage</b><span>91%</span></div><div class="track"><div class="fill c"></div></div></div>
  <div class="bar"><div class="meta"><b>Error budget spent</b><span>34%</span></div><div class="track"><div class="fill d"></div></div></div>
  <div class="sep"></div>
  <div class="bar" style="margin-bottom:0"><div class="meta"><b>Syncing changes</b><span>Working…</span></div><div class="ind"></div></div>
</div>
</body>
</html>`
      },
      {
        id: "avatar",
        name: "Avatar",
        desc: "Avatars with initials, sizes and an online status dot.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Avatar — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:0 24px 60px rgba(0,0,0,.35);display:grid;gap:22px}
.top{display:flex;align-items:center;justify-content:space-between;gap:14px}
.top h3{font-size:1.05rem}
.top p{font-size:.82rem;color:var(--muted)}
.badge{font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;background:rgba(255,153,67,.16);color:var(--accent);padding:5px 11px;border-radius:999px}
.profile{display:flex;align-items:center;gap:16px;background:var(--panel-2);border:1px solid var(--line);border-radius:14px;padding:18px 20px}
.profile .av{width:64px;height:64px;font-size:1.15rem}
.profile b{display:block;font-size:1.05rem}
.profile span{font-size:.85rem;color:var(--muted)}
.state{display:inline-flex;align-items:center;gap:7px;font-size:.74rem;font-weight:800;margin-top:8px;background:rgba(62,207,142,.13);color:var(--ok);padding:5px 11px;border-radius:999px}
.state::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--ok);box-shadow:0 0 8px var(--ok)}
.av{position:relative;border-radius:50%;display:grid;place-items:center;font-weight:800;color:#14211f;background:linear-gradient(135deg,#ff9f43,#ff5c5c);border:2px solid var(--panel);flex:0 0 auto;transition:.2s}
.av:hover{transform:translateY(-3px) scale(1.05);z-index:2}
.g1{background:linear-gradient(135deg,#ff9f43,#ff5c5c)}
.g2{background:linear-gradient(135deg,#3ecf8e,#0f9b8e)}
.g3{background:linear-gradient(135deg,#5c7cfa,#a55eea)}
.g4{background:linear-gradient(135deg,#f7b733,#fc4a1a)}
.g5{background:linear-gradient(135deg,#26d0ce,#5c7cfa)}
.st{position:absolute;right:-1px;bottom:-1px;width:13px;height:13px;border-radius:50%;background:var(--ok);border:2.5px solid var(--panel)}
.st.away{background:var(--accent)}
.st.busy{background:var(--err)}
.st.off{background:#4d6565}
.lbl{font-size:.66rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.sizes{display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap}
.sz{display:grid;justify-items:center;gap:8px;font-size:.7rem;color:var(--muted);font-weight:700}
.xs{width:30px;height:30px;font-size:.62rem}
.sm{width:38px;height:38px;font-size:.74rem}
.md{width:46px;height:46px;font-size:.86rem}
.lg{width:60px;height:60px;font-size:1.05rem}
.xl{width:80px;height:80px;font-size:1.4rem}
@media(max-width:520px){.profile{flex-direction:column;text-align:center}}
</style>
</head>
<body>
<div class="card">
  <div class="top"><div><h3>Avatars</h3><p>Initials on gradient discs, five sizes and a status ring dot.</p></div><span class="badge">Profile</span></div>
  <div class="profile">
    <span class="av g1 xl">AM<span class="st"></span></span>
    <div><b>Ana Meyer</b><span>ana@hassy.dev · Product designer</span><div class="state">Online now</div></div>
  </div>
  <span class="lbl">Sizes</span>
  <div class="sizes">
    <span class="sz"><span class="av g2 xs">JS</span>XS</span>
    <span class="sz"><span class="av g3 sm">RK</span>SM</span>
    <span class="sz"><span class="av g4 md">TJ<span class="st away"></span></span>MD</span>
    <span class="sz"><span class="av g5 lg">LO<span class="st busy"></span></span>LG</span>
    <span class="sz"><span class="av g1 xl">SN<span class="st off"></span></span>XL</span>
  </div>
</div>
</body>
</html>`
      },
      {
        id: "avatar-group",
        name: "Avatar Group",
        desc: "Overlapping avatar stack with a +N overflow chip.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Avatar Group — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:0 24px 60px rgba(0,0,0,.35);display:grid;gap:24px}
.top{display:flex;align-items:center;justify-content:space-between;gap:14px}
.top h3{font-size:1.05rem}
.top p{font-size:.82rem;color:var(--muted)}
.badge{font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;background:rgba(255,153,67,.16);color:var(--accent);padding:5px 11px;border-radius:999px}
.block{background:var(--panel-2);border:1px solid var(--line);border-radius:14px;padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}
.block .info b{display:block;font-size:.95rem}
.block .info span{font-size:.78rem;color:var(--muted)}
.group{display:flex;align-items:center}
.av{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:.82rem;color:#14211f;border:3px solid var(--panel-2);margin-left:-13px;transition:.22s cubic-bezier(.22,1,.36,1);position:relative;cursor:default}
.av:first-child{margin-left:0}
.av:hover{transform:translateY(-6px);z-index:5;border-color:var(--accent);box-shadow:0 10px 22px rgba(0,0,0,.45)}
.g1{background:linear-gradient(135deg,#ff9f43,#ff5c5c)}
.g2{background:linear-gradient(135deg,#3ecf8e,#0f9b8e)}
.g3{background:linear-gradient(135deg,#5c7cfa,#a55eea)}
.g4{background:linear-gradient(135deg,#f7b733,#fc4a1a)}
.g5{background:linear-gradient(135deg,#26d0ce,#5c7cfa)}
.more{background:rgba(255,153,67,.18);color:var(--accent);border:3px solid var(--panel-2);font-size:.78rem}
.av .st{position:absolute;right:-2px;bottom:-2px;width:12px;height:12px;border-radius:50%;background:var(--ok);border:2.5px solid var(--panel-2)}
.av .st.away{background:var(--accent)}
.av .st.busy{background:var(--err)}
.av.sm{width:34px;height:34px;font-size:.68rem;margin-left:-10px;border-width:2.5px}
.av.sm:first-child{margin-left:0}
.av.xs{width:28px;height:28px;font-size:.6rem;margin-left:-9px;border-width:2.5px}
.av.xs:first-child{margin-left:0}
.link{font-size:.82rem;font-weight:700;color:var(--accent)}
.link:hover{text-decoration:underline}
</style>
</head>
<body>
<div class="card">
  <div class="top"><div><h3>Avatar groups</h3><p>Overlapping stack with hover lift and a +N overflow chip.</p></div><span class="badge">Teams</span></div>
  <div class="block">
    <div class="info"><b>Design team</b><span>8 members · 3 online</span></div>
    <div class="group">
      <span class="av g1">AM<span class="st"></span></span>
      <span class="av g2">RK<span class="st"></span></span>
      <span class="av g3">TJ<span class="st away"></span></span>
      <span class="av g4">LO</span>
      <span class="av g5">SN<span class="st busy"></span></span>
      <span class="av more">+3</span>
    </div>
  </div>
  <div class="block">
    <div class="info"><b>Reviewers on PR #482</b><span>Assigned this morning</span></div>
    <div class="group">
      <span class="av sm g3">DW</span>
      <span class="av sm g2">KP<span class="st"></span></span>
      <span class="av sm g4">EL</span>
      <span class="av sm more">+5</span>
    </div>
  </div>
  <div class="block">
    <div class="info"><b>Online now</b><span>Compact stack for dense UI</span></div>
    <div style="display:flex;align-items:center;gap:14px">
      <div class="group">
        <span class="av xs g5">HR<span class="st"></span></span>
        <span class="av xs g1">MT<span class="st"></span></span>
        <span class="av xs g2">CV<span class="st"></span></span>
      </div>
      <a class="link" href="#">See all →</a>
    </div>
  </div>
</div>
</body>
</html>`
      },
      {
        id: "chips",
        name: "Filter Chips",
        desc: "Selectable filter chips with checkmark state.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Filter Chips — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.top{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:20px}
.top h3{font-size:1.05rem}
.top p{font-size:.82rem;color:var(--muted)}
.badge{font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;background:rgba(255,153,67,.16);color:var(--accent);padding:5px 11px;border-radius:999px}
.lbl{font-size:.66rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:12px}
.chips{display:flex;flex-wrap:wrap;gap:10px}
.chip{display:inline-flex;align-items:center;gap:8px;padding:9px 16px;border-radius:999px;background:var(--panel-2);border:1px solid var(--line);color:var(--muted);font-size:.87rem;font-weight:700;cursor:pointer;transition:.2s}
.chip:hover{border-color:rgba(255,153,67,.45);color:var(--text);transform:translateY(-2px)}
.chip .ck{max-width:0;opacity:0;overflow:hidden;font-size:.78rem;color:var(--accent);transition:.24s cubic-bezier(.22,1,.36,1)}
.chip.on{background:rgba(255,153,67,.14);border-color:rgba(255,153,67,.55);color:var(--accent);box-shadow:0 6px 18px rgba(255,153,67,.14)}
.chip.on .ck{max-width:16px;opacity:1}
.chip .n{font-size:.72rem;font-weight:800;background:rgba(0,0,0,.3);border-radius:999px;padding:2px 8px;color:inherit;opacity:.75}
.sep{height:1px;background:var(--line);margin:22px 0}
.note{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;font-size:.86rem;color:var(--muted);background:rgba(0,0,0,.2);border:1px dashed var(--line);border-radius:12px;padding:13px 16px}
.note b{color:var(--accent);font-variant-numeric:tabular-nums}
.link{background:transparent;border:0;color:var(--accent);font-weight:700;cursor:pointer;font-size:.86rem;transition:.18s}
.link:hover{text-decoration:underline}
</style>
</head>
<body>
<div class="card">
  <div class="top"><div><h3>Filter chips</h3><p>Multi-select chips with an animated checkmark and live count.</p></div><span class="badge">Multi-select</span></div>
  <span class="lbl">Status</span>
  <div class="chips" id="chips">
    <button class="chip on" aria-pressed="true"><span class="ck">✓</span>All<span class="n">128</span></button>
    <button class="chip on" aria-pressed="true"><span class="ck">✓</span>Active<span class="n">64</span></button>
    <button class="chip" aria-pressed="false"><span class="ck">✓</span>Draft<span class="n">21</span></button>
    <button class="chip" aria-pressed="false"><span class="ck">✓</span>Archived<span class="n">33</span></button>
    <button class="chip" aria-pressed="false"><span class="ck">✓</span>Flagged<span class="n">7</span></button>
    <button class="chip" aria-pressed="false"><span class="ck">✓</span>Shared<span class="n">12</span></button>
  </div>
  <div class="sep"></div>
  <div class="note"><span><b id="count">2</b> of 6 filters selected</span><button class="link" id="clear">Clear all</button></div>
</div>
<script>
var chips = document.getElementById('chips');
var count = document.getElementById('count');
var list = Array.prototype.slice.call(chips.querySelectorAll('.chip'));
function update() {
  var on = list.filter(function (c) { return c.classList.contains('on'); });
  count.textContent = String(on.length);
}
list.forEach(function (chip) {
  chip.addEventListener('click', function () {
    chip.classList.toggle('on');
    chip.setAttribute('aria-pressed', chip.classList.contains('on') ? 'true' : 'false');
    update();
  });
});
document.getElementById('clear').addEventListener('click', function () {
  list.forEach(function (c) { c.classList.remove('on'); c.setAttribute('aria-pressed', 'false'); });
  update();
});
update();
</script>
</body>
</html>`
      },
      {
        id: "divider",
        name: "Divider",
        desc: "Solid, dashed and labeled divider variants.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Divider — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.top{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:8px}
.top h3{font-size:1.05rem}
.top p{font-size:.82rem;color:var(--muted)}
.badge{font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;background:rgba(255,153,67,.16);color:var(--accent);padding:5px 11px;border-radius:999px}
.grp{padding:18px 0;border-bottom:1px solid rgba(255,255,255,.05)}
.grp:last-child{border-bottom:0;padding-bottom:4px}
.lbl{display:block;font-size:.66rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
.demo{display:flex;align-items:center;gap:16px;font-size:.88rem;color:var(--muted)}
.demo b{color:var(--text);font-weight:700}
.dv{height:1px;background:var(--line);width:100%}
.dv.thick{height:3px;border-radius:3px;background:linear-gradient(90deg,var(--accent),rgba(255,153,67,.15))}
.dv.dashed{background:none;border-top:1px dashed rgba(255,255,255,.24);height:0}
.dv.dots{background:none;border-top:2px dotted rgba(255,255,255,.3);height:0}
.dv.lab{display:flex;align-items:center;gap:14px;height:auto;background:none}
.dv.lab::before,.dv.lab::after{content:"";flex:1;height:1px;background:var(--line)}
.dv.lab span{font-size:.7rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);white-space:nowrap}
.dv.lab.accent::before,.dv.lab.accent::after{background:rgba(255,153,67,.4)}
.dv.lab.accent span{color:var(--accent)}
.dv.lab.soft::before,.dv.lab.soft::after{background:rgba(255,255,255,.07)}
.dv.lab.soft span{letter-spacing:.04em;text-transform:none;font-weight:600;font-size:.8rem;color:#7f9696}
@media(max-width:560px){.demo{flex-direction:column;gap:10px;text-align:center}}
</style>
</head>
<body>
<div class="card">
  <div class="top"><div><h3>Divider variants</h3><p>Solid, gradient, dashed, dotted and labeled separators.</p></div><span class="badge">Layout</span></div>
  <div class="grp"><span class="lbl">Solid</span><div class="demo"><b>Section A</b><div class="dv"></div><b>Section B</b></div></div>
  <div class="grp"><span class="lbl">Gradient accent</span><div class="demo"><b>Featured</b><div class="dv thick"></div><b>Regular</b></div></div>
  <div class="grp"><span class="lbl">Dashed</span><div class="demo"><b>Shipping</b><div class="dv dashed"></div><b>Billing</b></div></div>
  <div class="grp"><span class="lbl">Dotted</span><div class="demo"><b>Today</b><div class="dv dots"></div><b>Tomorrow</b></div></div>
  <div class="grp"><span class="lbl">Labeled</span><div class="dv lab"><span>Or continue with</span></div></div>
  <div class="grp"><span class="lbl">Labeled · accent</span><div class="dv lab accent"><span>✦ End of results ✦</span></div></div>
  <div class="grp"><span class="lbl">Labeled · soft</span><div class="dv lab soft"><span>no more activity below</span></div></div>
</div>
</body>
</html>`
      },
      {
        id: "kbd",
        name: "Keyboard Keys",
        desc: "Kbd keycaps and shortcut combinations for docs UI.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Keyboard Keys — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.top{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:6px}
.top h3{font-size:1.05rem}
.top p{font-size:.82rem;color:var(--muted)}
.badge{font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;background:rgba(255,153,67,.16);color:var(--accent);padding:5px 11px;border-radius:999px}
.grp{padding:18px 0;border-bottom:1px solid rgba(255,255,255,.05)}
.grp:last-child{border-bottom:0;padding-bottom:2px}
.lbl{display:block;font-size:.66rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-bottom:13px}
.keys{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
kbd{display:inline-grid;place-items:center;min-width:34px;height:34px;padding:0 11px;border-radius:9px;background:linear-gradient(180deg,#25403f,#1a3231);border:1px solid rgba(255,255,255,.14);border-bottom-width:3px;font-family:var(--font);font-size:.78rem;font-weight:800;color:var(--text);box-shadow:0 3px 0 rgba(0,0,0,.35);transition:.16s}
kbd:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}
kbd.lg{height:42px;min-width:42px;font-size:.92rem;border-radius:11px;padding:0 15px}
kbd.sm{height:26px;min-width:26px;font-size:.68rem;padding:0 8px;border-radius:7px;border-bottom-width:2px}
kbd.hot{background:linear-gradient(180deg,#3a2c14,#2a1f10);border-color:rgba(255,153,67,.5);color:var(--accent)}
kbd.danger{background:linear-gradient(180deg,#3a1a1a,#2a1212);border-color:rgba(255,107,107,.5);color:var(--err)}
.combo{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 14px;background:var(--panel-2);border:1px solid var(--line);border-radius:12px;margin-bottom:10px;transition:.2s}
.combo:last-child{margin-bottom:0}
.combo:hover{border-color:rgba(255,153,67,.4);transform:translateX(4px)}
.combo .name{font-size:.9rem;font-weight:600}
.combo .keys{gap:5px;flex-wrap:nowrap}
.combo .plus{font-size:.72rem;color:#5f7878;font-weight:800}
.hint{margin-top:16px;font-size:.86rem;color:var(--muted);display:flex;align-items:center;gap:9px;flex-wrap:wrap;background:rgba(0,0,0,.2);border:1px dashed var(--line);border-radius:12px;padding:13px 16px}
</style>
</head>
<body>
<div class="card">
  <div class="top"><div><h3>Keyboard shortcuts</h3><p>Keycaps and combinations for docs, settings and command UIs.</p></div><span class="badge">Docs</span></div>
  <div class="grp"><span class="lbl">Single keys</span><div class="keys"><kbd>Esc</kbd><kbd>Tab</kbd><kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>Shift</kbd><kbd>Enter</kbd><kbd>⌫</kbd></div></div>
  <div class="grp"><span class="lbl">Sizes</span><div class="keys" style="align-items:center"><kbd class="sm">Q</kbd><kbd>W</kbd><kbd class="lg">Space</kbd><kbd class="hot">K</kbd><kbd class="danger">Del</kbd></div></div>
  <div class="grp">
    <span class="lbl">Combinations</span>
    <div class="combo"><span class="name">Open command palette</span><span class="keys"><kbd>Ctrl</kbd><span class="plus">+</span><kbd class="hot">K</kbd></span></div>
    <div class="combo"><span class="name">Quick save</span><span class="keys"><kbd>Ctrl</kbd><span class="plus">+</span><kbd>S</kbd></span></div>
    <div class="combo"><span class="name">Rename item</span><span class="keys"><kbd>F2</kbd></span></div>
    <div class="combo"><span class="name">Force delete</span><span class="keys"><kbd>Ctrl</kbd><span class="plus">+</span><kbd>Shift</kbd><span class="plus">+</span><kbd class="danger">Del</kbd></span></div>
  </div>
  <p class="hint">Try it: press <kbd class="sm">Ctrl</kbd><kbd class="sm">K</kbd> or <kbd class="sm">⌘</kbd><kbd class="sm">K</kbd> in any modern app to summon search.</p>
</div>
</body>
</html>`
      },
      {
        id: "code-block",
        name: "Code Block",
        desc: "Code snippet panel with language label and copy button.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Code Block — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%)}
.stage h3{font-size:1.1rem;margin-bottom:6px}
.stage > p{color:var(--muted);font-size:.9rem;max-width:54ch;margin-bottom:18px}
.code{background:var(--panel);border:1px solid var(--line);border-radius:16px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.bar{display:flex;align-items:center;gap:12px;padding:12px 16px;background:rgba(0,0,0,.25);border-bottom:1px solid var(--line)}
.dots{display:flex;gap:6px}
.dots i{width:11px;height:11px;border-radius:50%;background:#3a4f4f}
.dots i:first-child{background:#ff6b6b}
.dots i:nth-child(2){background:#ff9f43}
.dots i:last-child{background:#3ecf8e}
.file{font-size:.78rem;color:var(--muted);font-weight:700}
.lang{font-size:.66rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;background:rgba(255,153,67,.16);color:var(--accent);padding:4px 10px;border-radius:999px}
.copy{margin-left:auto;display:inline-flex;align-items:center;gap:7px;border:1px solid var(--line);background:var(--panel-2);color:var(--muted);font-size:.78rem;font-weight:700;padding:7px 14px;border-radius:9px;cursor:pointer;transition:.2s}
.copy:hover{border-color:rgba(255,153,67,.5);color:var(--accent)}
.copy.ok{background:rgba(62,207,142,.15);border-color:rgba(62,207,142,.5);color:var(--ok)}
pre{margin:0;padding:20px 20px 22px;overflow-x:auto;background:var(--panel-2)}
code{font-family:ui-monospace,"Cascadia Code",Consolas,"Courier New",monospace;font-size:.85rem;line-height:1.7;color:#cfe0e0;white-space:pre}
.t{color:var(--accent)}
.a{color:#8ea2ff}
.s{color:var(--ok)}
.c{color:#6d8585;font-style:italic}
.k{color:#ff8f8f}
.hint{margin-top:14px;font-size:.8rem;color:var(--muted);text-align:center}
</style>
</head>
<body>
<div class="stage">
  <h3>Code block</h3>
  <p>Snippet panel with window chrome, language badge and a copy button that falls back gracefully.</p>
  <div class="code">
    <div class="bar">
      <span class="dots"><i></i><i></i><i></i></span>
      <span class="file">profile-card.html</span>
      <span class="lang">HTML</span>
      <button class="copy" id="copy">⧉ Copy</button>
    </div>
    <pre><code id="snippet"><span class="c">&lt;!-- reusable profile card --&gt;</span>
<span class="t">&lt;div</span> <span class="a">class</span>=<span class="s">"card"</span><span class="t">&gt;</span>
  <span class="t">&lt;h3&gt;</span>Welcome back<span class="t">&lt;/h3&gt;</span>
  <span class="t">&lt;p&gt;</span>You have 3 new notifications.<span class="t">&lt;/p&gt;</span>
  <span class="t">&lt;button</span> <span class="a">class</span>=<span class="s">"btn"</span><span class="t">&gt;</span>Open inbox<span class="t">&lt;/button&gt;</span>
<span class="t">&lt;/div&gt;</span>

<span class="k">.card</span> {
  padding: <span class="s">20px</span>;
  border: <span class="s">1px</span> solid <span class="s">#23403e</span>;
  border-radius: <span class="s">14px</span>;
  background: <span class="s">#16302f</span>;
}</code></pre>
  </div>
  <p class="hint">Hit Copy — the raw text lands on your clipboard, syntax colors excluded.</p>
</div>
<script>
var copy = document.getElementById('copy');
var snippet = document.getElementById('snippet');
function done() {
  copy.textContent = '✓ Copied!';
  copy.classList.add('ok');
  setTimeout(function () {
    copy.textContent = '⧉ Copy';
    copy.classList.remove('ok');
  }, 1600);
}
function fallback() {
  var ta = document.createElement('textarea');
  ta.value = snippet.textContent;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  done();
}
copy.addEventListener('click', function () {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(snippet.textContent).then(done, fallback);
  } else {
    fallback();
  }
});
</script>
</body>
</html>`
      }
    ]
  });
})();
