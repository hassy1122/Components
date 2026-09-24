/* hasSy Component Library — data: Navigation
   Every item.code is ONE complete standalone HTML document.
   Paste it into an .html file and open it in a browser. */
(function () {
  var C = (window.COMPONENTS = window.COMPONENTS || []);
  C.push({
    category: "Navigation",
    items: [
      {
        id: "navbar",
        name: "Navbar",
        desc: "Sticky top bar with logo, dropdown submenu, CTA and mobile hamburger.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Navbar — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5}
button,input{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.nav{position:sticky;top:0;z-index:50;display:flex;align-items:center;gap:28px;padding:14px 26px;background:rgba(15,31,30,.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.logo{display:flex;align-items:center;gap:9px;font-weight:800;font-size:1.05rem;letter-spacing:-.02em}
.logo i{width:26px;height:26px;border-radius:8px;background:linear-gradient(135deg,var(--accent),#ff5c5c);display:inline-block}
.nav-links{display:flex;align-items:center;gap:4px;list-style:none;margin-left:8px}
.nav-links > li{position:relative}
.nav-links a{display:block;padding:9px 13px;border-radius:9px;font-size:.93rem;color:var(--muted);transition:.2s}
.nav-links a:hover,.nav-links a.active{color:var(--text);background:rgba(255,255,255,.07)}
.has-drop > a::after{content:"";display:inline-block;width:6px;height:6px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:rotate(45deg) translateY(-2px);margin-left:7px;transition:.2s}
.drop{position:absolute;top:calc(100% + 8px);left:0;min-width:210px;background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:8px;opacity:0;visibility:hidden;transform:translateY(8px);transition:.2s;box-shadow:0 18px 40px rgba(0,0,0,.4);list-style:none}
.has-drop:hover .drop,.has-drop:focus-within .drop{opacity:1;visibility:visible;transform:none}
.drop a{padding:9px 12px;font-size:.9rem;border-radius:8px}
.drop a:hover{background:rgba(255, 165, 0,.14);color:var(--accent)}
.nav-cta{margin-left:auto;display:flex;align-items:center;gap:10px}
.btn{border:0;cursor:pointer;background:var(--accent);color:#14211f;font-weight:700;padding:10px 18px;border-radius:10px;font-size:.9rem;transition:.2s}
.btn:hover{filter:brightness(1.08);transform:translateY(-1px)}
.btn.ghost{background:transparent;color:var(--text);border:1px solid var(--line)}
.burger{display:none;width:40px;height:40px;border-radius:10px;background:transparent;border:1px solid var(--line);cursor:pointer;flex-direction:column;gap:5px;align-items:center;justify-content:center}
.burger span{width:18px;height:2px;background:var(--text);border-radius:2px;transition:.25s}
.burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.burger.open span:nth-child(2){opacity:0}
.burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
.mobile-menu{display:none;flex-direction:column;gap:4px;padding:14px 20px 20px;background:var(--panel);border-bottom:1px solid var(--line)}
.mobile-menu a{padding:11px 12px;border-radius:9px;color:var(--muted);font-size:.95rem}
.mobile-menu a:hover{background:rgba(255,255,255,.06);color:var(--text)}
.mobile-menu.show{display:flex}
.hint{max-width:520px;margin:70px auto 0;text-align:center;color:var(--muted);font-size:.92rem;padding:0 20px}
.hint b{color:var(--accent)}
@media(max-width:820px){.nav-links,.nav-cta .btn.ghost{display:none}.burger{display:flex}}
</style>
</head>
<body>
<nav class="nav">
  <a class="logo" href="#"><i></i> Brandly</a>
  <ul class="nav-links">
    <li><a class="active" href="#">Home</a></li>
    <li class="has-drop"><a href="#">Products</a>
      <ul class="drop">
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Automations</a></li>
        <li><a href="#">Integrations</a></li>
        <li><a href="#">Changelog</a></li>
      </ul>
    </li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <div class="nav-cta">
    <button class="btn ghost">Sign in</button>
    <button class="btn">Get started</button>
    <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="#">Home</a><a href="#">Products</a><a href="#">Pricing</a><a href="#">Docs</a><a href="#">Contact</a>
</div>
<p class="hint">Hover <b>Products</b> for the dropdown · resize below 820px for the hamburger menu.</p>
<script>
var burger = document.getElementById('burger');
var menu = document.getElementById('mobileMenu');
burger.addEventListener('click', function () {
  burger.classList.toggle('open');
  menu.classList.toggle('show');
});
</script>
</body>
</html>`
      },
      {
        id: "sticky-navbar",
        name: "Sticky Navbar",
        desc: "Glassmorphism nav that adds a shadow and condenses after scrolling.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sticky Navbar — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);line-height:1.5}
button{font:inherit;color:inherit;cursor:pointer}
a{color:inherit;text-decoration:none}
.glass{position:fixed;top:0;left:0;right:0;z-index:60;display:flex;align-items:center;gap:24px;padding:18px 28px;background:rgba(15,31,30,.35);backdrop-filter:blur(14px) saturate(140%);border-bottom:1px solid transparent;transition:.35s ease}
.glass.scrolled{padding:10px 28px;background:rgba(15,31,30,.9);border-bottom-color:var(--line);box-shadow:0 10px 30px rgba(0,0,0,.35)}
.logo{font-weight:800;font-size:1.1rem;letter-spacing:-.02em;color:var(--accent)}
.links{display:flex;gap:6px;list-style:none}
.links a{padding:8px 13px;border-radius:9px;font-size:.92rem;color:var(--muted);transition:.2s}
.links a:hover{color:var(--text);background:rgba(255,255,255,.08)}
.spacer{margin-left:auto}
.btn{border:0;background:var(--accent);color:#14211f;font-weight:700;padding:10px 18px;border-radius:10px;font-size:.9rem;transition:.2s}
.btn:hover{filter:brightness(1.08)}
.hero{min-height:230vh;padding-top:140px}
.block{max-width:760px;margin:0 auto 46vh;padding:0 24px;text-align:center}
.block h2{font-size:clamp(1.5rem,4vw,2.4rem);letter-spacing:-.02em;margin-bottom:12px}
.block p{color:var(--muted);font-size:.98rem}
.kicker{color:var(--accent);font-size:.72rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;margin-bottom:10px}
</style>
</head>
<body>
<header class="glass" id="nav">
  <a class="logo" href="#">◆ Nexus</a>
  <ul class="links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Features</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Blog</a></li>
  </ul>
  <div class="spacer"></div>
  <button class="btn">Start free</button>
</header>
<main class="hero">
  <section class="block"><p class="kicker">Scroll down</p><h2>Compact on scroll</h2><p>The bar shrinks, gains blur and casts a shadow once you scroll past 40 pixels — pure CSS transition driven by one class.</p></section>
  <section class="block"><p class="kicker">Section 02</p><h2>Still with you</h2><p>It stays pinned to the top of the viewport for the whole page.</p></section>
  <section class="block"><p class="kicker">Section 03</p><h2>Glass, not clutter</h2><p>A translucent backdrop keeps content readable underneath.</p></section>
  <section class="block"><p class="kicker">Section 04</p><h2>Keep going</h2><p>Scroll back up to watch it expand again.</p></section>
</main>
<script>
var nav = document.getElementById('nav');
function onScroll(){ nav.classList.toggle('scrolled', window.scrollY > 40); }
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
</script>
</body>
</html>`
      },
      {
        id: "mega-menu",
        name: "Mega Menu",
        desc: "Wide hover panel with feature columns, promo tile and quick links.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mega Menu — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5}
button{font:inherit;color:inherit;cursor:pointer}
a{color:inherit;text-decoration:none}
.nav{display:flex;align-items:center;gap:26px;padding:16px 28px;border-bottom:1px solid var(--line);position:relative;z-index:40}
.logo{font-weight:800;font-size:1.05rem;color:var(--accent)}
.menu{display:flex;gap:6px;list-style:none}
.menu > li > a{display:block;padding:9px 14px;border-radius:9px;font-size:.93rem;color:var(--muted);transition:.2s}
.menu > li > a:hover,.menu > li.open > a{color:var(--text);background:rgba(255,255,255,.07)}
.spacer{margin-left:auto}
.btn{border:0;background:var(--accent);color:#14211f;font-weight:700;padding:10px 18px;border-radius:10px;font-size:.9rem}
.mega{position:absolute;top:100%;left:0;right:0;background:var(--panel);border-bottom:1px solid var(--line);box-shadow:0 30px 60px rgba(0,0,0,.45);opacity:0;visibility:hidden;transform:translateY(-8px);transition:.25s;padding:30px clamp(24px,5vw,60px)}
li.open .mega,.mega:hover{opacity:1;visibility:visible;transform:none}
.mega-grid{display:grid;grid-template-columns:repeat(3,1fr) 240px;gap:26px;max-width:1100px;margin:0 auto}
.mega h4{font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);margin-bottom:12px}
.mega ul{list-style:none;display:grid;gap:4px}
.mega ul a{display:flex;gap:10px;align-items:flex-start;padding:9px 10px;border-radius:10px;transition:.2s}
.mega ul a:hover{background:rgba(255,255,255,.06)}
.mega ul a i{font-style:normal;font-size:1.05rem;line-height:1.3}
.mega ul b{display:block;font-size:.9rem;font-weight:700}
.mega ul span{font-size:.78rem;color:var(--muted)}
.promo{background:linear-gradient(150deg,#2a1f10,#3a1414);border:1px solid rgba(255, 165, 0,.35);border-radius:14px;padding:18px}
.promo b{display:block;font-size:.98rem;margin-bottom:6px}
.promo p{font-size:.82rem;color:var(--muted);margin-bottom:12px}
.promo a{font-size:.85rem;font-weight:700;color:var(--accent)}
.hint{max-width:520px;margin:90px auto 0;text-align:center;color:var(--muted);font-size:.92rem;padding:0 20px}
.hint b{color:var(--accent)}
@media(max-width:900px){.mega-grid{grid-template-columns:1fr 1fr}.promo{display:none}}
@media(max-width:640px){.menu{display:none}.mega-grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<nav class="nav">
  <a class="logo" href="#">◆ Orbit</a>
  <ul class="menu">
    <li><a href="#">Home</a></li>
    <li id="prod"><a href="#">Products ▾</a>
      <div class="mega">
        <div class="mega-grid">
          <div><h4>Platform</h4><ul>
            <li><a href="#"><i>📊</i><span><b>Analytics</b><span>Realtime dashboards</span></span></a></li>
            <li><a href="#"><i>⚡</i><span><b>Automations</b><span>No-code workflows</span></span></a></li>
            <li><a href="#"><i>🧩</i><span><b>Integrations</b><span>120+ connectors</span></span></a></li>
          </ul></div>
          <div><h4>Solutions</h4><ul>
            <li><a href="#"><i>🛒</i><span><b>E-commerce</b><span>Stores &amp; checkout</span></span></a></li>
            <li><a href="#"><i>🎓</i><span><b>Education</b><span>Courses &amp; cohorts</span></span></a></li>
            <li><a href="#"><i>🏥</i><span><b>Healthcare</b><span>HIPAA ready</span></span></a></li>
          </ul></div>
          <div><h4>Resources</h4><ul>
            <li><a href="#"><i>📚</i><span><b>Docs</b><span>Guides &amp; API</span></span></a></li>
            <li><a href="#"><i>🏛️</i><span><b>Templates</b><span>Start in minutes</span></span></a></li>
            <li><a href="#"><i>🎧</i><span><b>Support</b><span>Talk to a human</span></span></a></li>
          </ul></div>
          <div class="promo"><b>New: AI Insights</b><p>Summarize any metric in plain language. Now in beta.</p><a href="#">Try it free →</a></div>
        </div>
      </div>
    </li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Company</a></li>
  </ul>
  <div class="spacer"></div>
  <button class="btn">Sign up</button>
</nav>
<p class="hint">Hover <b>Products ▾</b> to open the mega menu panel.</p>
<script>
var prod = document.getElementById('prod');
var link = prod.querySelector(':scope > a');
link.addEventListener('click', function (e) { e.preventDefault(); prod.classList.toggle('open'); });
document.addEventListener('click', function (e) { if (!prod.contains(e.target)) prod.classList.remove('open'); });
</script>
</body>
</html>`
      },
      {
        id: "hamburger-menu",
        name: "Hamburger Menu",
        desc: "Animated hamburger icon toggling a full-screen slide-in menu.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hamburger Menu — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5}
a{color:inherit;text-decoration:none}
.bar{display:flex;align-items:center;justify-content:space-between;padding:16px 22px;border-bottom:1px solid var(--line)}
.logo{font-weight:800;color:var(--accent)}
.burger{position:relative;z-index:90;width:46px;height:46px;border-radius:12px;background:var(--panel);border:1px solid var(--line);cursor:pointer;display:grid;place-items:center}
.burger i{position:relative;display:block;width:20px;height:2.5px;background:var(--text);border-radius:3px;transition:.3s}
.burger i::before,.burger i::after{content:"";position:absolute;left:0;width:20px;height:2.5px;background:var(--text);border-radius:3px;transition:.3s}
.burger i::before{top:-6.5px}.burger i::after{top:6.5px}
.burger.open i{background:transparent}
.burger.open i::before{top:0;transform:rotate(45deg)}
.burger.open i::after{top:0;transform:rotate(-45deg)}
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);opacity:0;visibility:hidden;transition:.3s;z-index:70}
.overlay.show{opacity:1;visibility:visible}
.panel{position:fixed;top:0;right:0;bottom:0;width:min(340px,86vw);background:var(--panel);border-left:1px solid var(--line);z-index:80;transform:translateX(105%);transition:transform .35s cubic-bezier(.22,1,.36,1);padding:90px 26px 26px;display:flex;flex-direction:column;gap:6px}
.panel.show{transform:none}
.panel a{padding:14px 16px;border-radius:12px;font-size:1.05rem;font-weight:600;color:var(--muted);transition:.2s;display:flex;justify-content:space-between}
.panel a:hover{background:rgba(255,255,255,.06);color:var(--text);transform:translateX(4px)}
.panel a::after{content:"→";color:var(--accent);opacity:.6}
.panel .sep{height:1px;background:var(--line);margin:12px 0}
.panel .foot{margin-top:auto;font-size:.82rem;color:var(--muted)}
.hint{max-width:480px;margin:80px auto 0;text-align:center;color:var(--muted);font-size:.92rem;padding:0 20px}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="bar">
  <span class="logo">◆ Pulse</span>
  <button class="burger" id="burger" aria-label="Open menu"><i></i></button>
</div>
<div class="overlay" id="overlay"></div>
<nav class="panel" id="panel" aria-label="Menu">
  <a href="#">Home</a>
  <a href="#">Features</a>
  <a href="#">Pricing</a>
  <a href="#">Blog</a>
  <div class="sep"></div>
  <a href="#">Sign in</a>
  <a href="#">Create account</a>
  <p class="foot">hello@pulse.app · © 2026</p>
</nav>
<p class="hint">Click the <b>hamburger</b> — it morphs into an X while the panel slides in. Press Esc or the backdrop to close.</p>
<script>
var burger = document.getElementById('burger');
var panel = document.getElementById('panel');
var overlay = document.getElementById('overlay');
function setOpen(open) {
  burger.classList.toggle('open', open);
  panel.classList.toggle('show', open);
  overlay.classList.toggle('show', open);
}
burger.addEventListener('click', function () { setOpen(!panel.classList.contains('show')); });
overlay.addEventListener('click', function () { setOpen(false); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
</script>
</body>
</html>`
      },
      {
        id: "sidebar-menu",
        name: "Sidebar Menu",
        desc: "Collapsible icon sidebar with active state and expandable section.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sidebar Menu — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5}
a{color:inherit;text-decoration:none}
.wrap{display:flex;min-height:100vh}
.side{width:250px;flex:0 0 250px;background:var(--panel);border-right:1px solid var(--line);padding:20px 14px;display:flex;flex-direction:column;gap:4px}
.brand{display:flex;align-items:center;gap:9px;font-weight:800;padding:6px 10px 18px;font-size:1.02rem}
.brand i{width:24px;height:24px;border-radius:7px;background:linear-gradient(135deg,var(--accent),#ff5c5c)}
.label{font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);padding:14px 12px 6px;font-weight:800}
.side a{display:flex;align-items:center;gap:11px;padding:10px 12px;border-radius:10px;font-size:.92rem;color:var(--muted);transition:.18s}
.side a:hover{background:rgba(255,255,255,.06);color:var(--text)}
.side a.on{background:rgba(255, 165, 0,.14);color:var(--accent);font-weight:700}
.side a .dot{margin-left:auto;width:7px;height:7px;border-radius:50%;background:var(--accent);display:none}
.side a.on .dot{display:block}
.sub{display:none;padding-left:30px}
.sub.open{display:block}
.grp > .caret{margin-left:auto;transition:.25s;font-size:.7rem;color:var(--muted)}
.grp.exp > .caret{transform:rotate(90deg)}
.main{flex:1;padding:34px clamp(20px,4vw,44px)}
.main h2{font-size:1.5rem;letter-spacing:-.02em;margin-bottom:10px}
.main p{color:var(--muted);max-width:60ch;font-size:.95rem}
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:14px;margin-top:24px}
.mini{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:18px}
.mini b{display:block;font-size:1.35rem}
.mini span{font-size:.8rem;color:var(--muted)}
@media(max-width:760px){.side{display:none}}
</style>
</head>
<body>
<div class="wrap">
  <aside class="side">
    <div class="brand"><i></i> Dashboard</div>
    <span class="label">General</span>
    <a class="on" href="#">🏠 Overview <span class="dot"></span></a>
    <a href="#">📈 Analytics</a>
    <a href="#">🧾 Orders <span class="dot"></span></a>
    <span class="label">Workspace</span>
    <a class="grp" id="grp" href="#">📦 Products <span class="caret">▶</span></a>
    <div class="sub" id="sub">
      <a href="#">All items</a>
      <a href="#">Categories</a>
      <a href="#">Inventory</a>
    </div>
    <a href="#">👥 Customers</a>
    <a href="#">⚙️ Settings</a>
  </aside>
  <main class="main">
    <h2>Overview</h2>
    <p>A compact sidebar with an active pill, notification dots and a collapsible sub-group. Click “Products” to expand it.</p>
    <div class="cards">
      <div class="mini"><b>8,412</b><span>Visitors</span></div>
      <div class="mini"><b>$12.4k</b><span>Revenue</span></div>
      <div class="mini"><b>318</b><span>Orders</span></div>
      <div class="mini"><b>4.9%</b><span>Conversion</span></div>
    </div>
  </main>
</div>
<script>
var grp = document.getElementById('grp');
var sub = document.getElementById('sub');
grp.addEventListener('click', function (e) {
  e.preventDefault();
  grp.classList.toggle('exp');
  sub.classList.toggle('open');
});
document.querySelectorAll('.side a').forEach(function (a) {
  a.addEventListener('click', function (e) {
    if (a.classList.contains('grp')) return;
    e.preventDefault();
    document.querySelectorAll('.side a.on').forEach(function (x) { x.classList.remove('on'); });
    a.classList.add('on');
  });
});
</script>
</body>
</html>`
      },
      {
        id: "breadcrumbs",
        name: "Breadcrumbs",
        desc: "Breadcrumb trail with slash separators, icons and current page.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Breadcrumbs — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
a{color:inherit;text-decoration:none}
.stack{width:min(680px,100%);display:grid;gap:22px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:26px}
.card h3{font-size:1.05rem;margin-bottom:6px}
.card p{color:var(--muted);font-size:.9rem}
.crumbs{display:flex;flex-wrap:wrap;align-items:center;gap:6px;font-size:.9rem;list-style:none}
.crumbs li{display:flex;align-items:center;gap:6px}
.crumbs a{color:var(--muted);padding:5px 9px;border-radius:8px;transition:.18s}
.crumbs a:hover{color:var(--accent);background:rgba(255, 165, 0,.12)}
.crumbs .sep{color:#4d6565;font-size:.8rem}
.crumbs .cur{color:var(--text);font-weight:700;padding:5px 9px;background:rgba(255,255,255,.07);border-radius:8px}
.crumbs.dots .sep{color:var(--accent)}
.crumbs.chev a,.crumbs.chev .cur{padding-left:0}
.badge{display:inline-block;font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;background:rgba(255, 165, 0,.16);color:var(--accent);padding:4px 9px;border-radius:999px;margin-bottom:12px}
</style>
</head>
<body>
<div class="stack">
  <div class="card">
    <span class="badge">Slash style</span>
    <ul class="crumbs">
      <li><a href="#">🏠 Home</a></li>
      <li><span class="sep">/</span></li>
      <li><a href="#">Catalog</a></li>
      <li><span class="sep">/</span></li>
      <li><a href="#">Audio</a></li>
      <li><span class="sep">/</span></li>
      <li><span class="cur">Headphones Pro</span></li>
    </ul>
    <h3 style="margin-top:18px">Headphones Pro</h3>
    <p>The current page sits in a highlighted pill so users always know where they are.</p>
  </div>
  <div class="card">
    <span class="badge">Chevron style</span>
    <ul class="crumbs chev dots">
      <li><a href="#">Docs</a></li>
      <li><span class="sep">›</span></li>
      <li><a href="#">Guides</a></li>
      <li><span class="sep">›</span></li>
      <li><a href="#">Deployment</a></li>
      <li><span class="sep">›</span></li>
      <li><span class="cur">Environment vars</span></li>
    </ul>
    <h3 style="margin-top:18px">Environment variables</h3>
    <p>Truncate long trails with an ellipsis item when depth gets deep.</p>
  </div>
</div>
</body>
</html>`
      },
      {
        id: "tabs",
        name: "Tabs",
        desc: "Horizontal tabs with sliding underline and animated panels.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tabs — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button{font:inherit;color:inherit;cursor:pointer}
.tabs{width:min(660px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.tablist{display:flex;position:relative;border-bottom:1px solid var(--line);background:rgba(0,0,0,.18)}
.tab{flex:1;padding:16px 12px;background:transparent;border:0;color:var(--muted);font-weight:700;font-size:.92rem;transition:.2s;position:relative;z-index:2}
.tab:hover{color:var(--text)}
.tab[aria-selected="true"]{color:var(--accent)}
.ind{position:absolute;bottom:-1px;height:3px;background:var(--accent);border-radius:3px;transition:.3s cubic-bezier(.22,1,.36,1);z-index:3}
.panels{padding:26px 26px 30px;min-height:190px}
.panel{display:none;animation:fade .35s ease}
.panel.on{display:block}
@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.panel h3{font-size:1.1rem;margin-bottom:8px}
.panel p{color:var(--muted);font-size:.94rem;margin-bottom:14px}
.panel ul{list-style:none;display:grid;gap:8px;font-size:.92rem}
.panel li::before{content:"✓";color:var(--accent);font-weight:800;margin-right:9px}
</style>
</head>
<body>
<div class="tabs">
  <div class="tablist" role="tablist" id="tablist">
    <button class="tab" role="tab" aria-selected="true">Overview</button>
    <button class="tab" role="tab" aria-selected="false">Features</button>
    <button class="tab" role="tab" aria-selected="false">FAQ</button>
    <span class="ind" id="ind"></span>
  </div>
  <div class="panels">
    <div class="panel on"><h3>Product overview</h3><p>A lightweight tab component built with ARIA roles, a sliding indicator and CSS-only panel transitions.</p><ul><li>Keyboard arrow navigation</li><li>No dependencies</li><li>2KB of JS</li></ul></div>
    <div class="panel"><h3>Feature highlights</h3><p>Switch tabs to see the fade-in panel animation. The underline glides between labels.</p><ul><li>Sliding indicator</li><li>ARIA tablist pattern</li><li>Responsive labels</li></ul></div>
    <div class="panel"><h3>Frequently asked</h3><p>Pair this with the Accordion component from the Data Display category for long-form answers.</p><ul><li>Works offline</li><li>Dark theme by default</li><li>Easy to recolor</li></ul></div>
  </div>
</div>
<script>
var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
var panels = Array.prototype.slice.call(document.querySelectorAll('.panel'));
var ind = document.getElementById('ind');
function moveInd(btn) { ind.style.width = btn.offsetWidth + 'px'; ind.style.left = btn.offsetLeft + 'px'; }
function select(i) {
  tabs.forEach(function (t, j) { t.setAttribute('aria-selected', j === i ? 'true' : 'false'); });
  panels.forEach(function (p, j) { p.classList.toggle('on', j === i); });
  moveInd(tabs[i]);
}
tabs.forEach(function (t, i) {
  t.addEventListener('click', function () { select(i); });
  t.addEventListener('keydown', function (e) {
    var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : -1;
    if (n >= 0 && n < tabs.length) { e.preventDefault(); tabs[n].focus(); select(n); }
  });
});
window.addEventListener('load', function () { moveInd(tabs[0]); });
window.addEventListener('resize', function () {
  var active = tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0];
  if (active) moveInd(active);
});
moveInd(tabs[0]);
</script>
</body>
</html>`
      },
      {
        id: "vertical-tabs",
        name: "Vertical Tabs",
        desc: "Side tab list with icons driving content panels on the right.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vertical Tabs — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button{font:inherit;color:inherit;cursor:pointer}
.vt{display:grid;grid-template-columns:230px 1fr;width:min(760px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.list{border-right:1px solid var(--line);padding:16px 12px;display:flex;flex-direction:column;gap:4px;background:rgba(0,0,0,.15)}
.vtab{display:flex;align-items:center;gap:11px;padding:13px 14px;border-radius:11px;background:transparent;border:0;color:var(--muted);font-size:.93rem;font-weight:600;text-align:left;transition:.2s;position:relative}
.vtab:hover{background:rgba(255,255,255,.06);color:var(--text)}
.vtab[aria-selected="true"]{background:rgba(255, 165, 0,.14);color:var(--accent)}
.vtab[aria-selected="true"]::before{content:"";position:absolute;left:-12px;top:20%;height:60%;width:3px;border-radius:3px;background:var(--accent)}
.body{padding:28px 28px 30px;min-height:280px}
.vpanel{display:none}
.vpanel.on{display:block;animation:slide .35s ease}
@keyframes slide{from{opacity:0;transform:translateX(14px)}to{opacity:1;transform:none}}
.vpanel .icon{width:46px;height:46px;border-radius:13px;display:grid;place-items:center;background:rgba(255, 165, 0,.15);border:1px solid rgba(255, 165, 0,.3);font-size:1.3rem;margin-bottom:14px}
.vpanel h3{font-size:1.15rem;margin-bottom:8px}
.vpanel p{color:var(--muted);font-size:.93rem;margin-bottom:14px}
.tags{display:flex;flex-wrap:wrap;gap:8px}
.tag{font-size:.75rem;font-weight:700;padding:6px 11px;border-radius:999px;background:rgba(255,255,255,.07);border:1px solid var(--line);color:var(--muted)}
@media(max-width:620px){.vt{grid-template-columns:1fr}.list{flex-direction:row;overflow-x:auto;border-right:0;border-bottom:1px solid var(--line)}.vtab[aria-selected="true"]::before{display:none}}
</style>
</head>
<body>
<div class="vt">
  <div class="list" role="tablist">
    <button class="vtab" role="tab" aria-selected="true">🎨 Design</button>
    <button class="vtab" role="tab" aria-selected="false">⚡ Performance</button>
    <button class="vtab" role="tab" aria-selected="false">🔒 Security</button>
    <button class="vtab" role="tab" aria-selected="false">🌐 Scale</button>
  </div>
  <div class="body">
    <div class="vpanel on"><div class="icon">🎨</div><h3>Design system</h3><p>Token-driven colors, spacing and radii keep every screen consistent. Swap the CSS variables and the whole component follows.</p><div class="tags"><span class="tag">Design tokens</span><span class="tag">Dark theme</span><span class="tag">WCAG AA</span></div></div>
    <div class="vpanel"><div class="icon">⚡</div><h3>Performance</h3><p>Zero dependencies, no framework runtime. Everything loads as plain files you can cache aggressively.</p><div class="tags"><span class="tag">&lt; 5KB</span><span class="tag">No build</span><span class="tag">Lazy load</span></div></div>
    <div class="vpanel"><div class="icon">🔒</div><h3>Security</h3><p>Sanitized inputs, CSP-friendly markup and no inline eval. Drop components into locked-down environments safely.</p><div class="tags"><span class="tag">CSP ready</span><span class="tag">No eval</span><span class="tag">Scoped CSS</span></div></div>
    <div class="vpanel"><div class="icon">🌐</div><h3>Scale</h3><p>From a landing page to a dashboard with hundreds of rows — the same components compose at any size.</p><div class="tags"><span class="tag">Responsive</span><span class="tag">Virtual-ready</span><span class="tag">i18n</span></div></div>
  </div>
</div>
<script>
var tabs = Array.prototype.slice.call(document.querySelectorAll('.vtab'));
var panels = Array.prototype.slice.call(document.querySelectorAll('.vpanel'));
tabs.forEach(function (t, i) {
  t.addEventListener('click', function () {
    tabs.forEach(function (x, j) { x.setAttribute('aria-selected', j === i ? 'true' : 'false'); });
    panels.forEach(function (p, j) { p.classList.toggle('on', j === i); });
  });
});
</script>
</body>
</html>`
      },
      {
        id: "pagination",
        name: "Pagination",
        desc: "Page numbers with prev/next, active state and smart ellipsis.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pagination — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button{font:inherit;color:inherit;cursor:pointer}
.wrap{width:min(640px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:30px 24px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.info{color:var(--muted);font-size:.9rem;margin-bottom:20px}
.info b{color:var(--accent)}
.pager{display:flex;justify-content:center;align-items:center;gap:6px;flex-wrap:wrap;list-style:none}
.pg{min-width:40px;height:40px;padding:0 10px;border-radius:11px;border:1px solid var(--line);background:transparent;color:var(--muted);font-weight:700;font-size:.9rem;transition:.18s;display:grid;place-items:center}
.pg:hover:not(:disabled):not(.on){border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}
.pg.on{background:var(--accent);border-color:var(--accent);color:#14211f}
.pg:disabled{opacity:.35;cursor:not-allowed}
.pg.gap{border:0;background:transparent;pointer-events:none}
.note{margin-top:18px;font-size:.8rem;color:var(--muted)}
</style>
</head>
<body>
<div class="wrap">
  <p class="info">Showing <b>21–30</b> of <b>128</b> results</p>
  <ul class="pager" id="pager"></ul>
  <p class="note">Click a page — the active pill jumps and edge buttons disable automatically.</p>
</div>
<script>
var total = 13, current = 4;
var pager = document.getElementById('pager');
function btn(label, page, cls, disabled) {
  var li = document.createElement('li');
  var b = document.createElement('button');
  b.className = 'pg' + (cls ? ' ' + cls : '');
  b.textContent = label;
  if (disabled) b.disabled = true;
  if (page !== null) b.addEventListener('click', function () { current = page; render(); });
  li.appendChild(b);
  return li;
}
function render() {
  pager.innerHTML = '';
  pager.appendChild(btn('‹', current - 1, '', current === 1));
  var pages = [];
  for (var i = 1; i <= total; i++) {
    if (i === 1 || i === total || Math.abs(i - current) <= 1) pages.push(i);
    else if (pages[pages.length - 1] !== '...') pages.push('...');
  }
  pages.forEach(function (p) {
    if (p === '...') pager.appendChild(btn('…', null, 'gap', true));
    else pager.appendChild(btn(String(p), p, p === current ? 'on' : '', false));
  });
  pager.appendChild(btn('›', current + 1, '', current === total));
}
render();
</script>
</body>
</html>`
      },
      {
        id: "stepper",
        name: "Stepper",
        desc: "Multi-step wizard with completed, current and locked steps.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Stepper — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--ok:#3ecf8e;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button{font:inherit;color:inherit;cursor:pointer}
.card{width:min(640px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:30px 28px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.steps{display:flex;list-style:none;margin-bottom:28px}
.step{flex:1;text-align:center;position:relative;font-size:.78rem;color:var(--muted)}
.step::before{content:"";position:absolute;top:17px;left:-50%;width:100%;height:3px;background:var(--line);z-index:0}
.step:first-child::before{display:none}
.step .n{position:relative;z-index:1;width:36px;height:36px;margin:0 auto 8px;border-radius:50%;display:grid;place-items:center;background:var(--bg);border:2px solid var(--line);font-weight:800;font-size:.85rem;transition:.3s}
.step.done .n,.step.done::before{background:var(--ok);border-color:var(--ok);color:#0c2018}
.step.done::before{background:var(--ok)}
.step.now .n{border-color:var(--accent);color:var(--accent);box-shadow:0 0 0 5px rgba(255, 165, 0,.18)}
.step.now{color:var(--text);font-weight:700}
.panel{min-height:140px}
.panel h3{font-size:1.1rem;margin-bottom:8px}
.panel p{color:var(--muted);font-size:.93rem;margin-bottom:14px}
.field{display:grid;gap:6px;margin-bottom:12px}
.field label{font-size:.8rem;font-weight:700;color:var(--muted)}
.field input{background:rgba(0,0,0,.25);border:1px solid var(--line);border-radius:10px;padding:11px 13px;color:var(--text);outline:none;transition:.2s}
.field input:focus{border-color:var(--accent)}
.summary{background:rgba(0,0,0,.22);border:1px dashed var(--line);border-radius:12px;padding:14px;font-size:.88rem;color:var(--muted);display:grid;gap:6px}
.summary b{color:var(--text)}
.actions{display:flex;justify-content:space-between;gap:10px;margin-top:22px}
.btn{border:0;border-radius:11px;padding:11px 22px;font-weight:700;font-size:.9rem;transition:.2s}
.btn.primary{background:var(--accent);color:#14211f}
.btn.primary:hover{filter:brightness(1.08)}
.btn.ghost{background:transparent;border:1px solid var(--line);color:var(--muted)}
.btn.ghost:hover{color:var(--text);border-color:var(--muted)}
.btn:disabled{opacity:.4;cursor:not-allowed}
</style>
</head>
<body>
<div class="card">
  <ul class="steps" id="steps">
    <li class="step now"><span class="n">1</span>Account</li>
    <li class="step"><span class="n">2</span>Company</li>
    <li class="step"><span class="n">3</span>Payment</li>
    <li class="step"><span class="n">4</span>Done</li>
  </ul>
  <div class="panel" id="panel"></div>
  <div class="actions">
    <button class="btn ghost" id="back">← Back</button>
    <button class="btn primary" id="next">Continue →</button>
  </div>
</div>
<script>
var step = 0;
var steps = Array.prototype.slice.call(document.querySelectorAll('.step'));
var panel = document.getElementById('panel');
var back = document.getElementById('back');
var next = document.getElementById('next');
var views = [
  '<h3>Create your account</h3><p>Step one of four — we only need the basics.</p><div class="field"><label>Email</label><input type="email" placeholder="you@company.com"></div><div class="field"><label>Password</label><input type="password" placeholder="Min. 8 characters"></div>',
  '<h3>Company details</h3><p>Tell us where you work so we can tailor the workspace.</p><div class="field"><label>Company name</label><input type="text" placeholder="Acme Inc."></div><div class="field"><label>Team size</label><input type="text" placeholder="11–50"></div>',
  '<h3>Payment method</h3><p>This demo does not send anything anywhere.</p><div class="field"><label>Card number</label><input type="text" placeholder="4242 4242 4242 4242"></div><div class="field"><label>Expiry / CVC</label><input type="text" placeholder="12/29 · 123"></div>',
  '<h3>All set! 🎉</h3><p>Your workspace is ready to go.</p><div class="summary"><span>Plan: <b>Pro (14-day trial)</b></span><span>Seats: <b>5</b></span><span>Billing: <b>Monthly</b></span></div>'
];
function render() {
  steps.forEach(function (s, i) {
    s.classList.toggle('done', i < step);
    s.classList.toggle('now', i === step);
    s.querySelector('.n').textContent = i < step ? '✓' : String(i + 1);
  });
  panel.innerHTML = views[step];
  back.disabled = step === 0;
  next.textContent = step === views.length - 1 ? 'Finish ✓' : 'Continue →';
}
back.addEventListener('click', function () { if (step > 0) { step--; render(); } });
next.addEventListener('click', function () { if (step < views.length - 1) { step++; render(); } else { step = 0; render(); } });
render();
</script>
</body>
</html>`
      },
      {
        id: "bottom-nav",
        name: "Bottom Nav",
        desc: "Mobile bottom navigation bar with active indicator and badges.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bottom Nav — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5;padding-bottom:96px;display:flex;flex-direction:column;align-items:center}
.screen{width:min(430px,100%);min-height:100vh;padding:34px 22px 110px;position:relative}
.screen h2{font-size:1.35rem;letter-spacing:-.02em;margin-bottom:8px}
.screen p{color:var(--muted);font-size:.92rem}
.tiles{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:22px}
.tile{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:16px}
.tile b{display:block;font-size:1.2rem}
.tile span{font-size:.78rem;color:var(--muted)}
.bnav{position:fixed;left:50%;transform:translateX(-50%);bottom:16px;width:min(420px,calc(100% - 24px));display:flex;justify-content:space-around;background:rgba(22,48,47,.92);backdrop-filter:blur(12px);border:1px solid var(--line);border-radius:20px;padding:8px;box-shadow:0 18px 40px rgba(0,0,0,.5);z-index:50}
.bitem{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:9px 4px;border-radius:14px;background:transparent;border:0;color:var(--muted);font-size:.66rem;font-weight:700;cursor:pointer;transition:.2s;position:relative}
.bitem .ic{font-size:1.15rem;line-height:1;transition:.2s}
.bitem:hover{color:var(--text)}
.bitem.on{color:var(--accent);background:rgba(255, 165, 0,.13)}
.bitem.on .ic{transform:translateY(-2px) scale(1.12)}
.cnt{position:absolute;top:4px;right:calc(50% - 20px);min-width:16px;height:16px;padding:0 4px;border-radius:999px;background:#ff5c5c;color:#fff;font-size:.6rem;display:grid;place-items:center;font-weight:800}
</style>
</head>
<body>
<div class="screen">
  <h2>Home</h2>
  <p>A thumb-friendly bottom bar for mobile apps and progressive web apps. Tap the icons to move the active pill.</p>
  <div class="tiles">
    <div class="tile"><b>1,204</b><span>Orders today</span></div>
    <div class="tile"><b>$3.4k</b><span>Revenue</span></div>
    <div class="tile"><b>96%</b><span>Uptime</span></div>
    <div class="tile"><b>17</b><span>Open tickets</span></div>
  </div>
</div>
<nav class="bnav" aria-label="Primary">
  <button class="bitem on"><span class="ic">🏠</span>Home</button>
  <button class="bitem"><span class="ic">🔍</span>Search</button>
  <button class="bitem"><span class="ic">🛒</span>Cart<span class="cnt">3</span></button>
  <button class="bitem"><span class="ic">❤️</span>Saved</button>
  <button class="bitem"><span class="ic">👤</span>Profile</button>
</nav>
<script>
document.querySelectorAll('.bitem').forEach(function (b) {
  b.addEventListener('click', function () {
    document.querySelector('.bitem.on').classList.remove('on');
    b.classList.add('on');
    document.querySelector('.screen h2').textContent = b.textContent.replace(/[0-9]/g, '').trim();
  });
});
</script>
</body>
</html>`
      },
      {
        id: "anchor-nav",
        name: "Anchor Nav",
        desc: "In-page section nav with a gliding underline and scroll spy.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Anchor Nav — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);line-height:1.5}
a{color:inherit;text-decoration:none}
.anchorbar{position:sticky;top:0;z-index:40;background:rgba(15,31,30,.9);backdrop-filter:blur(10px);border-bottom:1px solid var(--line);display:flex;justify-content:center}
.anchors{display:flex;gap:2px;position:relative;overflow-x:auto;max-width:100%;padding:0 12px;list-style:none}
.anchors a{padding:16px 16px;font-size:.9rem;font-weight:700;color:var(--muted);white-space:nowrap;transition:.2s}
.anchors a:hover{color:var(--text)}
.anchors a.on{color:var(--accent)}
.underline{position:absolute;bottom:0;height:3px;background:var(--accent);border-radius:3px 3px 0 0;transition:.35s cubic-bezier(.22,1,.36,1)}
section{max-width:720px;margin:0 auto;padding:70px 24px 30px;scroll-margin-top:64px}
section h2{font-size:1.45rem;letter-spacing:-.02em;margin-bottom:10px}
section p{color:var(--muted);font-size:.95rem}
.chiprow{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}
.chip{font-size:.78rem;font-weight:700;padding:7px 12px;border-radius:999px;background:rgba(255,255,255,.07);border:1px solid var(--line);color:var(--muted)}
</style>
</head>
<body>
<nav class="anchorbar">
  <ul class="anchors" id="anchors">
    <li><a class="on" href="#s1">Getting started</a></li>
    <li><a href="#s2">Installation</a></li>
    <li><a href="#s3">Usage</a></li>
    <li><a href="#s4">API</a></li>
    <span class="underline" id="ul"></span>
  </ul>
</nav>
<section id="s1"><h2>Getting started</h2><p>This bar sticks under the header and glides its underline to whichever section you are reading. Scroll or click the links.</p><div class="chiprow"><span class="chip">Scroll spy</span><span class="chip">Sticky</span><span class="chip">No deps</span></div></section>
<section id="s2"><h2>Installation</h2><p>Copy the markup, the styles and the small script into your page. Nothing to install, nothing to compile.</p><div class="chiprow"><span class="chip">Plain HTML</span><span class="chip">Plain CSS</span><span class="chip">Plain JS</span></div></section>
<section id="s3"><h2>Usage</h2><p>Point each anchor at a section id. The script watches the viewport and moves the underline as sections cross the threshold.</p><div class="chiprow"><span class="chip">IntersectionObserver</span><span class="chip">Smooth scroll</span></div></section>
<section id="s4"><h2>API</h2><p>No public API — it is declarative. Add a link, add a section, done. Customize the glow through the accent CSS variable.</p><div class="chiprow"><span class="chip">Declarative</span><span class="chip">Themeable</span></div></section>
<script>
var links = Array.prototype.slice.call(document.querySelectorAll('.anchors a'));
var ul = document.getElementById('ul');
function place(a) { ul.style.width = a.offsetWidth + 'px'; ul.style.left = a.offsetLeft + 'px'; }
function setActive(a) { links.forEach(function (l) { l.classList.toggle('on', l === a); }); place(a); }
links.forEach(function (a) {
  a.addEventListener('click', function () { setActive(a); });
});
var map = {};
links.forEach(function (l) { var id = l.getAttribute('href').slice(1); var s = document.getElementById(id); if (s) map[id] = l; });
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting && map[e.target.id]) setActive(map[e.target.id]); });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(map).forEach(function (id) { io.observe(document.getElementById(id)); });
}
place(links[0]);
window.addEventListener('resize', function () { var on = document.querySelector('.anchors a.on'); if (on) place(on); });
</script>
</body>
</html>`
      }
    ]
  });
})();
