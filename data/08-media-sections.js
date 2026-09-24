/* hasSy Component Library — data: Media & Sections
   Every item.code is ONE complete standalone HTML document.
   Paste it into an .html file and open it in a browser. */
(function () {
  var C = (window.COMPONENTS = window.COMPONENTS || []);
  C.push({
    category: "Media & Sections",
    items: [
      {
        id: "hero",
        name: "Hero Section",
        desc: "Hero with gradient headline, subcopy, dual CTAs and trust row.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hero Section — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.hero{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:90px 24px;overflow:hidden;background:radial-gradient(900px 480px at 50% -12%,rgba(255,153,67,.16),transparent 60%),radial-gradient(760px 430px at 85% 112%,rgba(255,92,92,.12),transparent 62%)}
.hero::after{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.055) 1px,transparent 1px);background-size:26px 26px;-webkit-mask-image:radial-gradient(580px 400px at 50% 42%,#000,transparent 74%);mask-image:radial-gradient(580px 400px at 50% 42%,#000,transparent 74%);pointer-events:none}
.in{position:relative;z-index:1;max-width:820px;display:flex;flex-direction:column;align-items:center;gap:20px}
.pill{display:inline-flex;align-items:center;gap:8px;font-size:.8rem;font-weight:700;color:var(--accent);background:rgba(255,153,67,.12);border:1px solid rgba(255,153,67,.35);padding:7px 15px;border-radius:999px}
.pill i{width:7px;height:7px;border-radius:50%;background:var(--ok);box-shadow:0 0 0 4px rgba(62,207,142,.18)}
h1{font-size:clamp(2.1rem,6vw,3.9rem);line-height:1.08;letter-spacing:-.03em;font-weight:800}
h1 .g{background:linear-gradient(95deg,#ffd9ad,var(--accent) 48%,var(--brand));-webkit-background-clip:text;background-clip:text;color:transparent}
.lead{color:var(--muted);font-size:clamp(.98rem,2vw,1.12rem);max-width:56ch}
.ctas{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:4px}
.btn{border:0;cursor:pointer;font-weight:800;font-size:.95rem;padding:14px 26px;border-radius:12px;transition:.22s}
.btn.primary{background:var(--accent);color:#14211f;box-shadow:0 12px 30px rgba(255,153,67,.32)}
.btn.primary:hover{transform:translateY(-2px);filter:brightness(1.07)}
.btn.ghost{background:rgba(255,255,255,.05);color:var(--text);border:1px solid var(--line)}
.btn.ghost:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}
.trust{display:flex;align-items:center;gap:12px;margin-top:14px;flex-wrap:wrap;justify-content:center}
.avs{display:flex}
.avs span{width:36px;height:36px;border-radius:50%;border:2px solid var(--bg);display:grid;place-items:center;font-size:.72rem;font-weight:800;margin-left:-10px;color:#14211f}
.avs span:first-child{margin-left:0}
.av1{background:linear-gradient(135deg,#ffd9ad,var(--accent))}
.av2{background:linear-gradient(135deg,#ffb3b3,var(--brand))}
.av3{background:linear-gradient(135deg,#9ff0d0,var(--ok))}
.av4{background:linear-gradient(135deg,#cfd8ff,#8ea2ff)}
.trust p{font-size:.88rem;color:var(--muted);text-align:left}
.trust b{color:var(--text)}
.logos{display:flex;flex-wrap:wrap;gap:10px 26px;justify-content:center;margin-top:18px;padding-top:20px;border-top:1px solid var(--line);width:min(620px,100%)}
.logos span{font-size:.82rem;font-weight:800;letter-spacing:.18em;color:#5d7676;text-transform:uppercase;transition:.2s}
.logos span:hover{color:var(--accent)}
@media(max-width:520px){.trust p{text-align:center}}
</style>
</head>
<body>
<section class="hero">
  <div class="in">
    <span class="pill"><i></i> Version 2.0 — now with AI insights</span>
    <h1>Ship interfaces<br><span class="g">people love to use</span></h1>
    <p class="lead">A dark-first component library with 120+ accessible building blocks. Copy, paste and launch a polished product this afternoon.</p>
    <div class="ctas">
      <button class="btn primary">Start free trial</button>
      <button class="btn ghost">▶ Watch demo</button>
    </div>
    <div class="trust">
      <div class="avs"><span class="av1">AK</span><span class="av2">MJ</span><span class="av3">RS</span><span class="av4">+9</span></div>
      <p><b>12,000+</b> teams build with hasSy<br>★★★★★ 4.9 average rating</p>
    </div>
    <div class="logos"><span>Acme</span><span>Northwind</span><span>Hexa</span><span>Lumen</span><span>Vertex</span></div>
  </div>
</section>
</body>
</html>`
      },
      {
        id: "cta",
        name: "CTA Banner",
        desc: "Call-to-action band with gradient background and buttons.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CTA Banner — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.band{position:relative;width:min(900px,100%);border-radius:20px;padding:46px 32px;text-align:center;overflow:hidden;background:linear-gradient(135deg,var(--panel-2) 0%,#2b1c11 55%,#3b1515 100%);border:1px solid rgba(255,153,67,.32);box-shadow:0 30px 70px rgba(0,0,0,.45)}
.band::before{content:"";position:absolute;top:-150px;right:-90px;width:340px;height:340px;border-radius:50%;background:radial-gradient(circle,rgba(255,153,67,.38),transparent 68%)}
.band::after{content:"";position:absolute;bottom:-160px;left:-100px;width:320px;height:320px;border-radius:50%;background:radial-gradient(circle,rgba(255,92,92,.28),transparent 68%)}
.in{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:16px}
.kick{font-size:.72rem;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:var(--accent)}
.band h2{font-size:clamp(1.6rem,4vw,2.5rem);letter-spacing:-.025em;line-height:1.15;max-width:18ch}
.band h2 em{font-style:normal;color:var(--accent)}
.band p{color:var(--muted);font-size:.98rem;max-width:52ch}
.ctas{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:6px}
.btn{border:0;cursor:pointer;font-weight:800;font-size:.93rem;padding:13px 24px;border-radius:12px;transition:.22s}
.btn.primary{background:var(--accent);color:#14211f;box-shadow:0 12px 28px rgba(255,153,67,.3)}
.btn.primary:hover{transform:translateY(-2px);filter:brightness(1.07)}
.btn.ghost{background:transparent;color:var(--text);border:1px solid rgba(255,255,255,.22)}
.btn.ghost:hover{border-color:var(--text);transform:translateY(-2px)}
.note{font-size:.82rem;color:var(--muted);display:flex;flex-wrap:wrap;gap:6px 16px;justify-content:center;margin-top:4px}
.note span::before{content:"✓";color:var(--ok);font-weight:800;margin-right:7px}
</style>
</head>
<body>
<section class="band">
  <div class="in">
    <span class="kick">Limited time</span>
    <h2>Get <em>3 months free</em> on every annual plan</h2>
    <p>Join 12,000+ teams shipping faster with the hasSy design system. Offer ends Friday — no code needed.</p>
    <div class="ctas">
      <button class="btn primary">Claim the deal</button>
      <button class="btn ghost">Compare plans</button>
    </div>
    <div class="note"><span>Cancel anytime</span><span>Unlimited projects</span><span>Priority support</span></div>
  </div>
</section>
</body>
</html>`
      },
      {
        id: "feature-grid",
        name: "Feature Grid",
        desc: "Three-column feature grid with icon tiles.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Feature Grid — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.wrap{width:min(1020px,100%)}
.head{text-align:center;margin-bottom:30px}
.kick{font-size:.72rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
.head h2{font-size:clamp(1.5rem,3.4vw,2.1rem);letter-spacing:-.02em;margin-top:8px}
.head p{color:var(--muted);margin-top:8px;font-size:.95rem}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:24px 22px;transition:.25s}
.card:hover{transform:translateY(-5px);border-color:rgba(255,153,67,.4);box-shadow:0 18px 40px rgba(0,0,0,.35);background:var(--panel-2)}
.ic{width:46px;height:46px;border-radius:13px;display:grid;place-items:center;font-size:1.3rem;background:linear-gradient(135deg,rgba(255,153,67,.25),rgba(255,92,92,.18));border:1px solid rgba(255,153,67,.3);margin-bottom:14px}
.card h3{font-size:1rem;margin-bottom:6px}
.card p{color:var(--muted);font-size:.88rem}
.card a{display:inline-block;margin-top:12px;font-size:.85rem;font-weight:700;color:var(--accent);transition:.2s}
.card a:hover{letter-spacing:.02em}
@media(max-width:860px){.grid{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="wrap">
  <header class="head">
    <span class="kick">Why hasSy</span>
    <h2>Everything you need to launch faster</h2>
    <p>Six pillars that keep your product consistent, accessible and quick to ship.</p>
  </header>
  <div class="grid">
    <article class="card"><div class="ic">⚡</div><h3>Blazing fast</h3><p>Zero-runtime CSS with no framework overhead — pages stay under 50KB.</p><a href="#">Learn more →</a></article>
    <article class="card"><div class="ic">🎨</div><h3>Token driven</h3><p>Swap a handful of CSS variables and the entire palette follows along.</p><a href="#">Learn more →</a></article>
    <article class="card"><div class="ic">📊</div><h3>Built-in analytics</h3><p>Privacy-friendly charts and funnels wired up out of the box.</p><a href="#">Learn more →</a></article>
    <article class="card"><div class="ic">🔒</div><h3>Secure by default</h3><p>CSP-friendly markup, no eval and scoped styles for locked-down apps.</p><a href="#">Learn more →</a></article>
    <article class="card"><div class="ic">🔌</div><h3>120+ integrations</h3><p>Connect the tools you already use in a couple of clicks.</p><a href="#">Learn more →</a></article>
    <article class="card"><div class="ic">🧩</div><h3>Composable parts</h3><p>Mix and match 120+ components — they always speak the same language.</p><a href="#">Learn more →</a></article>
  </div>
</div>
</body>
</html>`
      },
      {
        id: "footer",
        name: "Footer",
        desc: "Multi-column footer with link groups, newsletter and socials.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Footer — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{min-height:100vh;display:flex;flex-direction:column}
.hint{margin:70px auto auto;padding:0 20px;text-align:center;font-size:.9rem;color:var(--muted)}
.hint b{color:var(--accent)}
.foot{width:100%;background:var(--panel);border-top:1px solid var(--line);padding:44px clamp(20px,5vw,60px) 22px}
.cols{display:grid;grid-template-columns:1.7fr 1fr 1fr 1fr;gap:30px;max-width:1100px;margin:0 auto}
.logo{display:flex;align-items:center;gap:9px;font-weight:800;font-size:1.05rem;letter-spacing:-.02em}
.logo i{width:26px;height:26px;border-radius:8px;background:linear-gradient(135deg,var(--accent),var(--brand))}
.tag{color:var(--muted);font-size:.9rem;margin:12px 0 16px;max-width:34ch}
.news{display:flex;gap:8px;max-width:360px}
.news input{flex:1;min-width:0;background:rgba(0,0,0,.28);border:1px solid var(--line);border-radius:11px;padding:11px 13px;color:var(--text);outline:none;transition:.2s}
.news input::placeholder{color:#6d8484}
.news input:focus{border-color:var(--accent)}
.news button{border:0;background:var(--accent);color:#14211f;font-weight:800;padding:0 18px;border-radius:11px;cursor:pointer;transition:.2s}
.news button:hover{filter:brightness(1.08)}
.msg{font-size:.8rem;color:var(--muted);margin-top:9px;min-height:18px}
.msg.err{color:var(--err)}
.msg.ok{color:var(--ok)}
.col h4{font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);margin-bottom:14px;font-weight:800}
.col ul{list-style:none;display:grid;gap:9px}
.col a{font-size:.9rem;color:var(--muted);transition:.2s}
.col a:hover{color:var(--text);transform:translateX(3px);display:inline-block}
.bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;max-width:1100px;margin:32px auto 0;padding-top:18px;border-top:1px solid var(--line);font-size:.82rem;color:var(--muted)}
.socials{display:flex;gap:8px}
.socials a{width:36px;height:36px;border-radius:10px;border:1px solid var(--line);display:grid;place-items:center;font-size:.85rem;font-weight:800;color:var(--muted);transition:.2s}
.socials a:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
@media(max-width:880px){.cols{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.cols{grid-template-columns:1fr}.bar{flex-direction:column;text-align:center}}
</style>
</head>
<body>
<div class="stage">
  <p class="hint">Full-bleed footer — <b>resize</b> the window to watch the columns reflow.</p>
  <footer class="foot">
    <div class="cols">
      <div>
        <a class="logo" href="#"><i></i> hasSy</a>
        <p class="tag">Dark-first components for teams that ship on deadlines.</p>
        <form class="news" id="news" novalidate>
          <label class="sr" for="email">Email address</label>
          <input id="email" type="email" placeholder="you@company.com" autocomplete="email">
          <button type="submit">Join</button>
        </form>
        <p class="msg" id="msg" aria-live="polite">Monthly digest. No spam, ever.</p>
      </div>
      <div class="col"><h4>Product</h4><ul><li><a href="#">Components</a></li><li><a href="#">Templates</a></li><li><a href="#">Pricing</a></li><li><a href="#">Changelog</a></li></ul></div>
      <div class="col"><h4>Resources</h4><ul><li><a href="#">Documentation</a></li><li><a href="#">Figma kit</a></li><li><a href="#">Blog</a></li><li><a href="#">Support</a></li></ul></div>
      <div class="col"><h4>Company</h4><ul><li><a href="#">About</a></li><li><a href="#">Careers</a></li><li><a href="#">Privacy</a></li><li><a href="#">Terms</a></li></ul></div>
    </div>
    <div class="bar">
      <span>© 2026 hasSy Labs · Crafted on deep teal</span>
      <div class="socials">
        <a href="#" aria-label="X">𝕏</a>
        <a href="#" aria-label="LinkedIn">in</a>
        <a href="#" aria-label="YouTube">▶</a>
        <a href="#" aria-label="Email">✉</a>
      </div>
    </div>
  </footer>
</div>
<script>
var form = document.getElementById('news');
var input = document.getElementById('email');
var msg = document.getElementById('msg');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var v = input.value.trim();
  if (v.indexOf('@') === -1) {
    msg.textContent = 'Please enter a valid email address.';
    msg.className = 'msg err';
    input.focus();
  } else {
    msg.textContent = 'Subscribed — welcome aboard!';
    msg.className = 'msg ok';
    form.reset();
  }
});
</script>
</body>
</html>`
      },
      {
        id: "page-header",
        name: "Page Header",
        desc: "Page header with breadcrumb, title and action buttons.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Page Header — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.ph{width:min(880px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px 28px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.crumbs{display:flex;flex-wrap:wrap;align-items:center;gap:6px;font-size:.87rem;list-style:none}
.crumbs li{display:flex;align-items:center;gap:6px}
.crumbs a{color:var(--muted);padding:4px 8px;border-radius:7px;transition:.18s}
.crumbs a:hover{color:var(--accent);background:rgba(255,153,67,.12)}
.crumbs .sep{color:#4d6565}
.crumbs .cur{color:var(--text);font-weight:700;padding:4px 8px;background:rgba(255,255,255,.07);border-radius:7px}
.row{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:18px;margin-top:16px}
h1{font-size:clamp(1.5rem,3vw,2rem);letter-spacing:-.02em;margin-bottom:8px}
.sub{color:var(--muted);font-size:.94rem;max-width:58ch}
.acts{display:flex;flex-wrap:wrap;gap:10px}
.btn{border:0;cursor:pointer;font-weight:700;font-size:.9rem;padding:11px 18px;border-radius:11px;transition:.2s}
.btn.primary{background:var(--accent);color:#14211f;box-shadow:0 10px 24px rgba(255,153,67,.28)}
.btn.primary:hover{transform:translateY(-2px);filter:brightness(1.07)}
.btn.ghost{background:transparent;color:var(--text);border:1px solid var(--line)}
.btn.ghost:hover{border-color:var(--accent);color:var(--accent)}
.btn.icon{width:44px;padding:0;display:grid;place-items:center}
.meta{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:24px;padding-top:20px;border-top:1px solid var(--line)}
.meta b{display:block;font-size:1.15rem;letter-spacing:-.02em}
.meta span{font-size:.78rem;color:var(--muted)}
@media(max-width:640px){.meta{grid-template-columns:1fr 1fr}}
</style>
</head>
<body>
<div class="ph">
  <nav aria-label="Breadcrumb">
    <ul class="crumbs">
      <li><a href="#">Home</a></li><li class="sep">/</li>
      <li><a href="#">Library</a></li><li class="sep">/</li>
      <li><a href="#">Media</a></li><li class="sep">/</li>
      <li><span class="cur">Hero Section</span></li>
    </ul>
  </nav>
  <div class="row">
    <div>
      <h1>Hero Section</h1>
      <p class="sub">Full-bleed hero with gradient headline, dual calls-to-action and a social proof row.</p>
    </div>
    <div class="acts">
      <button class="btn ghost">↓ Export</button>
      <button class="btn ghost icon" aria-label="More options">⋯</button>
      <button class="btn primary">+ New page</button>
    </div>
  </div>
  <div class="meta">
    <div><b>18</b><span>Sections</span></div>
    <div><b>4.9</b><span>Avg. rating</span></div>
    <div><b>2.1k</b><span>Downloads</span></div>
    <div><b>2 days</b><span>Since update</span></div>
  </div>
</div>
</body>
</html>`
      },
      {
        id: "gallery",
        name: "Gallery Grid",
        desc: "Responsive image gallery with hover zoom captions.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gallery Grid — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.wrap{width:min(1020px,100%)}
.head{text-align:center;margin-bottom:26px}
.kick{font-size:.72rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
.head h2{font-size:clamp(1.4rem,3.2vw,2rem);letter-spacing:-.02em;margin-top:8px}
.head p{color:var(--muted);font-size:.93rem;margin-top:6px}
.grid{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:150px;gap:12px}
.tile{position:relative;border-radius:14px;overflow:hidden;border:1px solid var(--line);cursor:pointer;outline:none}
.big{grid-column:span 2;grid-row:span 2}
.ph{position:absolute;inset:0;transition:transform .45s ease}
.ph::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 28% 26%,rgba(255,255,255,.28),transparent 52%),radial-gradient(circle at 78% 80%,rgba(0,0,0,.3),transparent 55%)}
.tile:hover .ph,.tile:focus-visible .ph{transform:scale(1.09)}
.tile:focus-visible{border-color:var(--accent)}
.cap{position:absolute;left:0;right:0;bottom:0;padding:34px 14px 12px;background:linear-gradient(transparent,rgba(0,0,0,.82));transform:translateY(10px);opacity:0;transition:.3s;z-index:1}
.tile:hover .cap,.tile:focus-visible .cap{transform:none;opacity:1}
.cap b{display:block;font-size:.9rem}
.cap span{font-size:.75rem;color:#c9d6d6}
.g1{background:linear-gradient(135deg,#ff9f43,#ff5c5c)}
.g2{background:linear-gradient(135deg,#1d3b39,#3ecf8e)}
.g3{background:linear-gradient(140deg,#2a1f10,#ff9f43)}
.g4{background:linear-gradient(135deg,#3b1515,#ff8a8a)}
.g5{background:linear-gradient(135deg,#16302f,#2f6f6b)}
.g6{background:linear-gradient(135deg,#0f1f1e,#ff9f43)}
.g7{background:linear-gradient(135deg,#53371b,#ffd9ad)}
@media(max-width:760px){.grid{grid-template-columns:repeat(2,1fr);grid-auto-rows:130px}}
@media(hover:none){.cap{opacity:1;transform:none}}
</style>
</head>
<body>
<div class="wrap">
  <header class="head">
    <span class="kick">Gallery</span>
    <h2>Moments from the community</h2>
    <p>Gradient placeholders — hover or focus a tile to zoom and reveal its caption.</p>
  </header>
  <div class="grid">
    <figure class="tile big" tabindex="0" aria-label="Sunset dunes"><div class="ph g1"></div><figcaption class="cap"><b>Sunset dunes</b><span>Shot on 35mm · Morocco</span></figcaption></figure>
    <figure class="tile" tabindex="0" aria-label="Lagoon"><div class="ph g2"></div><figcaption class="cap"><b>Lagoon</b><span>Drone · Norway</span></figcaption></figure>
    <figure class="tile" tabindex="0" aria-label="Amber coast"><div class="ph g3"></div><figcaption class="cap"><b>Amber coast</b><span>Golden hour · Portugal</span></figcaption></figure>
    <figure class="tile" tabindex="0" aria-label="Coral room"><div class="ph g4"></div><figcaption class="cap"><b>Coral room</b><span>Studio light · Berlin</span></figcaption></figure>
    <figure class="tile" tabindex="0" aria-label="Deep pine"><div class="ph g5"></div><figcaption class="cap"><b>Deep pine</b><span>Trail run · Alps</span></figcaption></figure>
    <figure class="tile" tabindex="0" aria-label="Night market"><div class="ph g6"></div><figcaption class="cap"><b>Night market</b><span>Street · Taipei</span></figcaption></figure>
    <figure class="tile" tabindex="0" aria-label="Sandstone"><div class="ph g7"></div><figcaption class="cap"><b>Sandstone</b><span>Hike · Utah</span></figcaption></figure>
  </div>
</div>
</body>
</html>`
      },
      {
        id: "carousel",
        name: "Carousel",
        desc: "Slide carousel with arrows, dots and keyboard support.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Carousel — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.car{width:min(800px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.35);outline:none}
.car:focus-visible{border-color:var(--accent);box-shadow:0 0 0 3px rgba(255,153,67,.3)}
.viewport{position:relative}
.track{display:flex;transition:transform .55s cubic-bezier(.22,1,.36,1)}
.slide{flex:0 0 100%;position:relative;height:330px}
.art{position:absolute;inset:0}
.art::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 24% 30%,rgba(255,255,255,.25),transparent 55%)}
.s1{background:linear-gradient(135deg,#ff9f43,#ff5c5c)}
.s2{background:linear-gradient(135deg,#1d3b39,#3ecf8e)}
.s3{background:linear-gradient(140deg,#0f1f1e,#2f6f6b 70%,#7ce0c0)}
.s4{background:linear-gradient(140deg,#3b1515,#ff9f43)}
.txt{position:absolute;left:0;right:0;bottom:0;padding:56px 26px 22px;background:linear-gradient(transparent,rgba(0,0,0,.85));z-index:1}
.tag{display:inline-block;font-size:.68rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.25);padding:4px 10px;border-radius:999px;margin-bottom:8px}
.txt h3{font-size:1.25rem;letter-spacing:-.02em}
.txt p{font-size:.88rem;color:#cfdcda;max-width:52ch;margin-top:4px}
.nav{position:absolute;top:50%;transform:translateY(-50%);width:42px;height:42px;border-radius:50%;background:rgba(15,31,30,.75);backdrop-filter:blur(6px);border:1px solid var(--line);color:var(--text);cursor:pointer;font-size:1.1rem;display:grid;place-items:center;z-index:2;transition:.2s}
.nav:hover{background:var(--accent);color:#14211f;border-color:var(--accent)}
.prev{left:14px}
.next{right:14px}
.bar{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:13px 18px;border-top:1px solid var(--line);background:rgba(0,0,0,.18)}
.count{font-size:.8rem;color:var(--muted);font-weight:700;letter-spacing:.08em}
.count b{color:var(--accent)}
.dots{display:flex;gap:8px}
.dot{width:9px;height:9px;padding:0;border:0;border-radius:999px;background:#3a5453;cursor:pointer;transition:.25s}
.dot:hover{background:var(--muted)}
.dot.on{width:26px;background:var(--accent)}
</style>
</head>
<body>
<div class="car" id="car" tabindex="0" role="region" aria-roledescription="carousel" aria-label="Featured collections">
  <div class="viewport">
    <div class="track" id="track">
      <div class="slide"><div class="art s1"></div><div class="txt"><span class="tag">Collection 01</span><h3>Aurora gradient</h3><p>Warm amber bleeding into coral — perfect for hero washes and promo bands.</p></div></div>
      <div class="slide"><div class="art s2"></div><div class="txt"><span class="tag">Collection 02</span><h3>Deep teal calm</h3><p>Our signature panel color lifted into a soft, confidence-building wash.</p></div></div>
      <div class="slide"><div class="art s3"></div><div class="txt"><span class="tag">Collection 03</span><h3>Midnight lagoon</h3><p>Near-black teal with a luminous edge for cinematic section breaks.</p></div></div>
      <div class="slide"><div class="art s4"></div><div class="txt"><span class="tag">Collection 04</span><h3>Ember glow</h3><p>Ember reds melting into orange — built for limited-time offer banners.</p></div></div>
    </div>
    <button class="nav prev" id="prev" aria-label="Previous slide">‹</button>
    <button class="nav next" id="next" aria-label="Next slide">›</button>
  </div>
  <div class="bar">
    <span class="count" id="count"><b>01</b> / 04</span>
    <div class="dots" id="dots" role="tablist" aria-label="Choose slide">
      <button class="dot on" role="tab" aria-selected="true" aria-label="Slide 1"></button>
      <button class="dot" role="tab" aria-selected="false" aria-label="Slide 2"></button>
      <button class="dot" role="tab" aria-selected="false" aria-label="Slide 3"></button>
      <button class="dot" role="tab" aria-selected="false" aria-label="Slide 4"></button>
    </div>
    <span class="count">← → keys</span>
  </div>
</div>
<script>
var car = document.getElementById('car');
var track = document.getElementById('track');
var count = document.getElementById('count');
var dots = Array.prototype.slice.call(document.querySelectorAll('.dot'));
var i = 0;
function pad(n) { return n < 10 ? '0' + n : String(n); }
function go(n) {
  i = (n + dots.length) % dots.length;
  track.style.transform = 'translateX(-' + (i * 100) + '%)';
  dots.forEach(function (d, k) {
    d.classList.toggle('on', k === i);
    d.setAttribute('aria-selected', k === i ? 'true' : 'false');
  });
  count.innerHTML = '<b>' + pad(i + 1) + '</b> / ' + pad(dots.length);
}
document.getElementById('prev').addEventListener('click', function () { go(i - 1); });
document.getElementById('next').addEventListener('click', function () { go(i + 1); });
dots.forEach(function (d, k) { d.addEventListener('click', function () { go(k); }); });
car.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); go(i - 1); }
});
</script>
</body>
</html>`
      },
      {
        id: "video-embed",
        name: "Video Embed",
        desc: "Responsive 16:9 video placeholder with play overlay.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Video Embed — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(840px,100%)}
.vid{position:relative;aspect-ratio:16/9;border-radius:18px;overflow:hidden;border:1px solid var(--line);cursor:pointer;background:linear-gradient(140deg,#1d3b39 0%,#2a1a10 55%,#3b1515 100%);box-shadow:0 26px 60px rgba(0,0,0,.45);transition:.3s}
.vid::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 22% 28%,rgba(255,153,67,.35),transparent 48%),radial-gradient(circle at 80% 76%,rgba(255,92,92,.3),transparent 50%)}
.play{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2;width:78px;height:78px;border-radius:50%;border:0;background:var(--accent);color:#14211f;font-size:1.5rem;cursor:pointer;box-shadow:0 14px 40px rgba(255,153,67,.45);transition:.3s;display:grid;place-items:center}
.play span{padding-left:5px}
.play:hover{transform:translate(-50%,-50%) scale(1.09)}
.play:focus-visible{outline:3px solid #fff;outline-offset:3px}
.vid.playing .play{opacity:0;transform:translate(-50%,-50%) scale(.5);pointer-events:none}
.ring{position:absolute;left:50%;top:50%;width:78px;height:78px;border-radius:50%;border:2px solid rgba(255,153,67,.7);transform:translate(-50%,-50%);opacity:0;z-index:1;pointer-events:none}
.vid.playing .ring{animation:pulse 1.6s ease-out infinite}
@keyframes pulse{0%{opacity:.85;transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-50%) scale(2.5)}}
.chip{position:absolute;left:16px;bottom:16px;z-index:2;display:flex;align-items:center;gap:9px;background:rgba(0,0,0,.55);backdrop-filter:blur(8px);border:1px solid var(--line);border-radius:999px;padding:8px 14px;font-size:.82rem;font-weight:700;opacity:0;transform:translateY(8px);transition:.3s;pointer-events:none}
.vid.playing .chip{opacity:1;transform:none}
.eq{display:flex;align-items:flex-end;gap:3px;height:14px}
.eq i{width:3px;background:var(--accent);border-radius:2px;height:5px;animation:eq .9s ease-in-out infinite}
.eq i:nth-child(2){animation-delay:.15s}
.eq i:nth-child(3){animation-delay:.3s}
@keyframes eq{0%,100%{height:5px}50%{height:14px}}
.prog{position:absolute;left:0;bottom:0;height:3px;width:0;background:var(--accent);z-index:2}
.vid.playing .prog{animation:fill 9s linear infinite}
@keyframes fill{from{width:0}to{width:100%}}
.meta{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:16px}
.meta h3{font-size:1rem}
.tg{font-size:.75rem;font-weight:700;color:var(--muted);background:rgba(0,0,0,.25);border:1px solid var(--line);padding:5px 11px;border-radius:999px}
.hint{margin-top:12px;font-size:.85rem;color:var(--muted)}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <div class="vid" id="vid" role="button" tabindex="0" aria-label="Play video">
    <span class="ring" aria-hidden="true"></span>
    <button class="play" id="play" aria-label="Play video" aria-pressed="false"><span>▶</span></button>
    <span class="chip" aria-hidden="true"><span class="eq"><i></i><i></i><i></i></span> Playing — Nova Headphones</span>
    <span class="prog" aria-hidden="true"></span>
  </div>
  <div class="meta">
    <h3>Product tour — 2 min 31 s</h3>
    <span class="tg">1080p</span>
    <span class="tg">Captions</span>
    <span class="tg">No account needed</span>
  </div>
  <p class="hint">Click the poster to <b>play</b> — pulse ring, equalizer and progress bar are pure CSS. Click again to pause.</p>
</div>
<script>
var vid = document.getElementById('vid');
var play = document.getElementById('play');
function toggle() {
  var on = vid.classList.toggle('playing');
  vid.setAttribute('aria-label', on ? 'Pause video' : 'Play video');
  play.setAttribute('aria-pressed', on ? 'true' : 'false');
  play.setAttribute('aria-label', on ? 'Pause video' : 'Play video');
}
vid.addEventListener('click', toggle);
vid.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
});
</script>
</body>
</html>`
      }
    ]
  });
})();
