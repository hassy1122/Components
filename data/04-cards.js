/* hasSy Component Library — data: Cards
   Every item.code is ONE complete standalone HTML document.
   Paste it into an .html file and open it in a browser. */
(function () {
  var C = (window.COMPONENTS = window.COMPONENTS || []);
  C.push({
    category: "Cards",
    items: [
      {
        id: "profile-card",
        name: "Profile Card",
        desc: "Profile card with avatar, role, stats and follow button.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Profile Card — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{display:flex;flex-direction:column;align-items:center;gap:16px;width:min(440px,100%)}
.card{width:100%;background:var(--panel);border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.4);transition:.3s}
.card:hover{transform:translateY(-4px);border-color:rgba(255,153,67,.35)}
.cover{height:104px;background:linear-gradient(135deg,var(--accent),var(--brand) 55%,#7c5cff);position:relative}
.cover .tag{position:absolute;top:14px;right:14px;background:rgba(0,0,0,.32);border:1px solid rgba(255,255,255,.25);color:#fff;font-size:.68rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:5px 11px;border-radius:999px}
.who{padding:0 26px 26px;text-align:center}
.avatar{width:88px;height:88px;border-radius:50%;margin:-44px auto 12px;background:conic-gradient(from 210deg,var(--accent),var(--brand),#7c5cff,var(--accent));display:grid;place-items:center;border:4px solid var(--panel);position:relative}
.avatar i{width:74px;height:74px;border-radius:50%;background:var(--panel-2);display:grid;place-items:center;font-style:normal;font-weight:800;font-size:1.5rem}
.who h2{font-size:1.22rem;letter-spacing:-.02em}
.who .role{color:var(--accent);font-size:.85rem;font-weight:700;margin-top:2px}
.who .bio{color:var(--muted);font-size:.87rem;margin-top:8px}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:18px 0}
.stat{background:var(--panel-2);border:1px solid var(--line);border-radius:12px;padding:10px 6px;text-align:center}
.stat b{display:block;font-size:1.05rem}
.stat span{font-size:.68rem;color:var(--muted);text-transform:uppercase;letter-spacing:.07em}
.actions{display:flex;gap:10px}
.btn{flex:1;border:0;cursor:pointer;border-radius:12px;padding:12px 16px;font-weight:700;font-size:.92rem;background:var(--accent);color:#14211f;transition:.2s}
.btn:hover{filter:brightness(1.08);transform:translateY(-1px)}
.btn.ghost{background:transparent;border:1px solid var(--line);color:var(--text)}
.btn.ghost:hover{border-color:var(--muted);filter:none}
.btn.following{background:rgba(62,207,142,.14);color:var(--ok);border:1px solid rgba(62,207,142,.5)}
.hint{color:var(--muted);font-size:.85rem;text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <div class="card">
    <div class="cover"><span class="tag">Pro member</span></div>
    <div class="who">
      <div class="avatar"><i>AK</i></div>
      <h2>Ava Kingsley</h2>
      <p class="role">Product Designer</p>
      <p class="bio">Crafting calm interfaces and design systems in Berlin.</p>
      <div class="stats">
        <div class="stat"><b>248</b><span>Posts</span></div>
        <div class="stat"><b>12.4k</b><span>Followers</span></div>
        <div class="stat"><b>317</b><span>Following</span></div>
      </div>
      <div class="actions">
        <button class="btn ghost">Message</button>
        <button class="btn" id="follow">Follow</button>
      </div>
    </div>
  </div>
  <p class="hint">Click <b>Follow</b> to toggle the state.</p>
</div>
<script>
var follow = document.getElementById('follow');
follow.addEventListener('click', function () {
  var on = follow.classList.toggle('following');
  follow.textContent = on ? 'Following ✓' : 'Follow';
});
</script>
</body>
</html>`
      },
      {
        id: "product-card",
        name: "Product Card",
        desc: "Product card with image placeholder, price, rating and add-to-cart.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Product Card — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{display:flex;flex-direction:column;align-items:center;gap:16px;width:min(360px,100%)}
.card{width:100%;background:var(--panel);border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.4);transition:.3s}
.card:hover{transform:translateY(-4px);border-color:rgba(255,153,67,.4)}
.thumb{position:relative;aspect-ratio:4/3;background:linear-gradient(150deg,#1d3b39,#2b4f4c 55%,#3a2a1a);display:grid;place-items:center;overflow:hidden}
.thumb::after{content:"";position:absolute;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle,rgba(255,153,67,.35),transparent 65%)}
.art{font-size:4.2rem;position:relative;z-index:1;filter:drop-shadow(0 14px 22px rgba(0,0,0,.45));transition:.35s}
.card:hover .art{transform:scale(1.08) rotate(-4deg)}
.chip{position:absolute;z-index:2;font-size:.7rem;font-weight:800;letter-spacing:.05em;padding:5px 10px;border-radius:999px}
.chip.off{top:12px;left:12px;background:var(--brand);color:#fff}
.chip.wish{top:12px;right:12px;width:34px;height:34px;display:grid;place-items:center;background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.18);cursor:pointer;color:#fff;transition:.2s;font-size:.95rem}
.chip.wish:hover{background:var(--brand);border-color:var(--brand)}
.body{padding:18px 18px 20px}
.brand{font-size:.68rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--accent)}
.body h3{font-size:1.05rem;letter-spacing:-.01em;margin:6px 0 8px}
.rate{display:flex;align-items:center;gap:7px;font-size:.82rem;color:var(--muted)}
.stars{color:var(--accent);letter-spacing:2px;font-size:.9rem}
.price{display:flex;align-items:baseline;gap:9px;margin:14px 0 16px}
.price b{font-size:1.5rem;letter-spacing:-.02em}
.price s{color:var(--muted);font-size:.95rem}
.price .save{margin-left:auto;font-size:.7rem;font-weight:800;color:var(--ok);background:rgba(62,207,142,.14);padding:5px 9px;border-radius:999px}
.btn{width:100%;border:0;cursor:pointer;background:var(--accent);color:#14211f;font-weight:700;padding:13px 16px;border-radius:12px;font-size:.93rem;transition:.2s}
.btn:hover{filter:brightness(1.08)}
.btn.added{background:var(--ok);color:#0c2018}
.hint{color:var(--muted);font-size:.85rem;text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <div class="card">
    <div class="thumb">
      <span class="chip off">-24%</span>
      <button class="chip wish" aria-label="Save to wishlist">♥</button>
      <span class="art">🎧</span>
    </div>
    <div class="body">
      <span class="brand">Aurora Audio</span>
      <h3>Studio Wireless Headphones</h3>
      <div class="rate"><span class="stars">★★★★★</span> 4.9 · 218 reviews</div>
      <div class="price"><b>$189</b><s>$249</s><span class="save">Save $60</span></div>
      <button class="btn" id="add">Add to cart</button>
    </div>
  </div>
  <p class="hint">Click <b>Add to cart</b> — it confirms, then resets.</p>
</div>
<script>
var add = document.getElementById('add');
var timer;
add.addEventListener('click', function () {
  if (add.classList.contains('added')) return;
  add.classList.add('added');
  add.textContent = 'Added ✓';
  clearTimeout(timer);
  timer = setTimeout(function () {
    add.classList.remove('added');
    add.textContent = 'Add to cart';
  }, 1600);
});
</script>
</body>
</html>`
      },
      {
        id: "pricing-card",
        name: "Pricing Card",
        desc: "Pricing plan with feature list and a highlighted popular tier.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pricing Card — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.grid{width:min(680px,100%);display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:start}
.plan{background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:28px 24px 26px;position:relative;box-shadow:0 20px 50px rgba(0,0,0,.3);transition:.3s}
.plan:hover{transform:translateY(-4px)}
.plan.pop{border-color:rgba(255,153,67,.55);background:linear-gradient(180deg,rgba(255,153,67,.1),var(--panel) 45%);box-shadow:0 28px 64px rgba(0,0,0,.45)}
.ribbon{position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:var(--accent);color:#14211f;font-size:.66rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:6px 14px;border-radius:999px;white-space:nowrap}
.tier{font-size:.72rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.plan.pop .tier{color:var(--accent)}
.amount{display:flex;align-items:baseline;gap:6px;margin:12px 0 4px}
.amount b{font-size:2.4rem;letter-spacing:-.03em}
.amount span{color:var(--muted);font-size:.9rem}
.tag{color:var(--muted);font-size:.86rem;margin-bottom:18px}
.feats{list-style:none;display:grid;gap:10px;font-size:.9rem;margin-bottom:22px}
.feats li{display:flex;gap:10px;align-items:flex-start}
.feats li::before{content:"✓";color:var(--ok);font-weight:800}
.feats li.no{color:var(--muted)}
.feats li.no::before{content:"✕";color:#4d6565}
.btn{width:100%;border:0;cursor:pointer;border-radius:12px;padding:13px 16px;font-weight:700;font-size:.93rem;background:var(--accent);color:#14211f;transition:.2s}
.btn:hover{filter:brightness(1.08);transform:translateY(-1px)}
.btn.ghost{background:transparent;border:1px solid var(--line);color:var(--text)}
.btn.ghost:hover{border-color:var(--accent);color:var(--accent);filter:none}
.note{grid-column:1/-1;text-align:center;color:var(--muted);font-size:.85rem}
.note b{color:var(--accent)}
@media(max-width:560px){.grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="grid">
  <div class="plan">
    <span class="tier">Starter</span>
    <div class="amount"><b>$12</b><span>/ month</span></div>
    <p class="tag">For solo makers shipping their first product.</p>
    <ul class="feats">
      <li>1 project</li>
      <li>5 GB storage</li>
      <li>Community support</li>
      <li class="no">Custom domains</li>
      <li class="no">Team seats</li>
    </ul>
    <button class="btn ghost">Choose Starter</button>
  </div>
  <div class="plan pop">
    <span class="ribbon">Most popular</span>
    <span class="tier">Professional</span>
    <div class="amount"><b>$29</b><span>/ month</span></div>
    <p class="tag">For growing teams that need room to scale.</p>
    <ul class="feats">
      <li>Unlimited projects</li>
      <li>200 GB storage</li>
      <li>Priority support</li>
      <li>Custom domains</li>
      <li>10 team seats</li>
    </ul>
    <button class="btn">Choose Professional</button>
  </div>
  <p class="note">Both plans include a <b>14-day free trial</b> — cancel anytime.</p>
</div>
</body>
</html>`
      },
      {
        id: "blog-card",
        name: "Blog Card",
        desc: "Article card with tag, meta row and read-more link.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Blog Card — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{display:flex;flex-direction:column;align-items:center;width:min(440px,100%)}
.card{width:100%;background:var(--panel);border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.4);transition:.3s}
.card:hover{transform:translateY(-5px);border-color:rgba(255,153,67,.35)}
.cover{height:168px;background:linear-gradient(135deg,#22423f,#3a2c16 70%);position:relative;display:flex;align-items:flex-end;padding:16px;overflow:hidden}
.cover::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 80% 20%,rgba(255,153,67,.4),transparent 50%),radial-gradient(circle at 15% 85%,rgba(255,92,92,.3),transparent 45%)}
.cover::after{content:"✦";position:absolute;top:18px;right:26px;font-size:2rem;color:rgba(255,255,255,.35)}
.tag{position:relative;z-index:1;background:rgba(15,31,30,.78);border:1px solid rgba(255,255,255,.16);color:var(--accent);font-size:.68rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:6px 12px;border-radius:999px}
.body{padding:20px 22px 22px}
.meta{display:flex;align-items:center;gap:9px;font-size:.78rem;color:var(--muted);margin-bottom:10px;flex-wrap:wrap}
.meta .dot{width:4px;height:4px;border-radius:50%;background:#4d6565}
.body h2{font-size:1.2rem;letter-spacing:-.02em;line-height:1.32;margin-bottom:8px}
.body p{color:var(--muted);font-size:.9rem;margin-bottom:16px}
.more{display:inline-flex;align-items:center;gap:8px;color:var(--accent);font-weight:700;font-size:.88rem;padding:9px 15px;border-radius:11px;border:1px solid rgba(255,153,67,.35);transition:.2s}
.more:hover{background:rgba(255,153,67,.14);gap:12px}
.hint{margin-top:16px;color:var(--muted);font-size:.85rem;text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <article class="card">
    <div class="cover"><span class="tag">Design systems</span></div>
    <div class="body">
      <div class="meta"><span>Sep 24, 2026</span><span class="dot"></span><span>6 min read</span><span class="dot"></span><span>By Ava K.</span></div>
      <h2>Tokens first: shipping a dark theme in one sprint</h2>
      <p>How a small set of CSS variables kept nine product surfaces consistent — and cut our design QA time in half.</p>
      <a class="more" href="#">Read article <span>→</span></a>
    </div>
  </article>
  <p class="hint">Hover the card to <b>lift it</b> and nudge the arrow.</p>
</div>
</body>
</html>`
      },
      {
        id: "stats-card",
        name: "Stats Card",
        desc: "KPI card with value, delta and mini bar sparkline.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Stats Card — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stack{width:min(460px,100%);display:grid;gap:14px}
.kpi{background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:22px 24px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
.label{font-size:.7rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:var(--muted)}
.delta{display:inline-block;font-size:.76rem;font-weight:800;padding:5px 10px;border-radius:999px;background:rgba(62,207,142,.14);color:var(--ok)}
.delta.down{background:rgba(255,107,107,.14);color:var(--err)}
.value{font-size:2.2rem;font-weight:800;letter-spacing:-.03em}
.sub{font-size:.83rem;color:var(--muted);margin-top:2px}
.spark{display:flex;align-items:flex-end;gap:5px;height:66px;margin-top:18px}
.spark span{flex:1;border-radius:4px 4px 2px 2px;background:linear-gradient(180deg,rgba(255,153,67,.85),rgba(255,153,67,.22));transition:.25s}
.spark span:hover{background:linear-gradient(180deg,var(--accent),rgba(255,153,67,.55));transform:scaleY(1.05);transform-origin:bottom}
.minis{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.mini{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:18px 20px;box-shadow:0 18px 44px rgba(0,0,0,.3);transition:.25s}
.mini:hover{border-color:rgba(255,153,67,.4);transform:translateY(-3px)}
.mini .label{display:block;margin-bottom:6px}
.mini b{font-size:1.45rem;letter-spacing:-.02em}
.mini .sub{margin-top:6px}
@media(max-width:420px){.minis{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="stack">
  <div class="kpi">
    <div class="top"><span class="label">Monthly revenue</span><span class="delta">▲ 12.4%</span></div>
    <div class="value">$84,320</div>
    <p class="sub">vs. $75,010 last month</p>
    <div class="spark" role="img" aria-label="Revenue trend sparkline rising over 12 weeks">
      <span style="height:34%"></span><span style="height:48%"></span><span style="height:40%"></span><span style="height:56%"></span><span style="height:50%"></span><span style="height:68%"></span><span style="height:60%"></span><span style="height:74%"></span><span style="height:66%"></span><span style="height:82%"></span><span style="height:78%"></span><span style="height:96%"></span>
    </div>
  </div>
  <div class="minis">
    <div class="mini"><span class="label">Active users</span><b>24,318</b><p class="sub"><span class="delta">▲ 3.1%</span></p></div>
    <div class="mini"><span class="label">Bounce rate</span><b>32.8%</b><p class="sub"><span class="delta down">▼ 1.6%</span></p></div>
  </div>
</div>
</body>
</html>`
      },
      {
        id: "testimonial-card",
        name: "Testimonial Card",
        desc: "Quote card with author, role and star rating.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Testimonial Card — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(520px,100%);background:var(--panel);border:1px solid var(--line);border-left:3px solid var(--accent);border-radius:18px;padding:28px 30px 24px;position:relative;box-shadow:0 24px 60px rgba(0,0,0,.35);transition:.3s}
.card:hover{transform:translateY(-4px);box-shadow:0 30px 66px rgba(0,0,0,.45)}
.mark{position:absolute;top:12px;right:24px;font-size:4.5rem;line-height:1;font-weight:800;color:rgba(255,153,67,.16);pointer-events:none}
.stars{color:var(--accent);letter-spacing:3px;font-size:.95rem;margin-bottom:14px}
.card blockquote{font-size:1.02rem;line-height:1.68;position:relative;z-index:1}
.who{display:flex;align-items:center;gap:13px;margin-top:22px;padding-top:18px;border-top:1px solid var(--line)}
.ava{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:.92rem;color:#14211f;background:linear-gradient(135deg,var(--accent),var(--brand));flex:0 0 auto}
.who b{display:block;font-size:.95rem}
.who span{font-size:.8rem;color:var(--muted)}
.verified{margin-left:auto;font-size:.66rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--ok);background:rgba(62,207,142,.13);border:1px solid rgba(62,207,142,.35);padding:5px 10px;border-radius:999px}
@media(max-width:430px){.verified{display:none}}
</style>
</head>
<body>
<div class="card">
  <span class="mark">”</span>
  <div class="stars" aria-label="Rated 5 out of 5">★★★★★</div>
  <blockquote>“We replaced three separate tools with hasSy and shipped our new dashboard in a week. The components look like they were designed by our own team.”</blockquote>
  <div class="who">
    <div class="ava">MR</div>
    <div><b>Marco Reyes</b><span>CTO, Northwind Labs</span></div>
    <span class="verified">Verified</span>
  </div>
</div>
</body>
</html>`
      },
      {
        id: "team-card",
        name: "Team Card",
        desc: "Team member card revealing social links on hover.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Team Card — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{display:flex;flex-direction:column;align-items:center;gap:16px;width:min(660px,100%)}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;width:100%}
.card{background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:28px 22px 24px;text-align:center;transition:.3s;overflow:hidden}
.card:hover,.card:focus-within{border-color:rgba(255,153,67,.45);transform:translateY(-5px);box-shadow:0 24px 54px rgba(0,0,0,.4)}
.ava{width:84px;height:84px;margin:0 auto 14px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:1.6rem;color:#14211f}
.ava.a{background:linear-gradient(135deg,var(--accent),var(--brand))}
.ava.b{background:linear-gradient(135deg,#3ecf8e,#4da3ff)}
.card h3{font-size:1.1rem;letter-spacing:-.01em}
.card .role{color:var(--accent);font-size:.82rem;font-weight:700;margin-top:3px}
.card .bio{color:var(--muted);font-size:.85rem;margin:10px 0 18px}
.socials{display:flex;justify-content:center;gap:9px;opacity:0;transform:translateY(16px);transition:.35s}
.card:hover .socials,.card:focus-within .socials{opacity:1;transform:none}
.socials a{width:40px;height:40px;border-radius:11px;display:grid;place-items:center;background:var(--panel-2);border:1px solid var(--line);font-size:.78rem;font-weight:800;color:var(--muted);transition:.2s}
.socials a:hover,.socials a:focus-visible{background:var(--accent);color:#14211f;border-color:var(--accent);transform:translateY(-3px);outline:none}
.hint{color:var(--muted);font-size:.85rem;text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <div class="grid">
    <div class="card">
      <div class="ava a">JM</div>
      <h3>Jonas Meyer</h3>
      <p class="role">Frontend Engineer</p>
      <p class="bio">Builds fast, accessible interfaces and way too many CSS side projects.</p>
      <div class="socials">
        <a href="#" aria-label="LinkedIn profile">in</a>
        <a href="#" aria-label="X profile">X</a>
        <a href="#" aria-label="GitHub profile">gh</a>
        <a href="#" aria-label="Send email">✉</a>
      </div>
    </div>
    <div class="card">
      <div class="ava b">PN</div>
      <h3>Priya Nair</h3>
      <p class="role">Data Scientist</p>
      <p class="bio">Turns messy event streams into dashboards people actually read.</p>
      <div class="socials">
        <a href="#" aria-label="LinkedIn profile">in</a>
        <a href="#" aria-label="X profile">X</a>
        <a href="#" aria-label="GitHub profile">gh</a>
        <a href="#" aria-label="Send email">✉</a>
      </div>
    </div>
  </div>
  <p class="hint">Hover a card (or <b>Tab</b> into it) to reveal the social links.</p>
</div>
</body>
</html>`
      },
      {
        id: "flip-card",
        name: "Flip Card",
        desc: "3D flip card revealing extra details on the back.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flip Card — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{display:flex;flex-direction:column;align-items:center;gap:18px}
.flip{width:min(330px,100%);height:400px;perspective:1200px;cursor:pointer;outline:none;border-radius:18px}
.flip:focus-visible{box-shadow:0 0 0 3px rgba(255,153,67,.7)}
.inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .7s cubic-bezier(.22,1,.36,1)}
.flip:hover .inner,.flip:focus .inner,.flip.flipped .inner{transform:rotateY(180deg)}
.face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:18px;border:1px solid var(--line);padding:30px 26px;box-shadow:0 24px 60px rgba(0,0,0,.45);display:flex;flex-direction:column}
.front{background:linear-gradient(150deg,var(--panel-2),var(--panel));align-items:center;justify-content:center;text-align:center;gap:6px}
.front .emoji{font-size:3.6rem;filter:drop-shadow(0 12px 20px rgba(0,0,0,.4))}
.front h3{font-size:1.3rem;letter-spacing:-.02em;margin-top:8px}
.front p{color:var(--muted);font-size:.88rem;max-width:24ch}
.front .tip{margin-top:18px;font-size:.7rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);border:1px dashed rgba(255,153,67,.45);padding:8px 14px;border-radius:999px}
.back{background:linear-gradient(150deg,#2a1c10,var(--panel));transform:rotateY(180deg);justify-content:center}
.back .kicker{font-size:.66rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--accent)}
.back h3{font-size:1.25rem;margin:8px 0 10px}
.back p{color:var(--muted);font-size:.88rem;margin-bottom:16px}
.back ul{list-style:none;display:grid;gap:9px;font-size:.88rem;margin-bottom:22px}
.back li::before{content:"✓";color:var(--ok);font-weight:800;margin-right:9px}
.btn{border:0;cursor:pointer;background:var(--accent);color:#14211f;font-weight:700;padding:13px 16px;border-radius:12px;font-size:.92rem;transition:.2s;margin-top:auto}
.btn:hover{filter:brightness(1.08)}
.hint{color:var(--muted);font-size:.85rem;text-align:center}
.hint b{color:var(--accent)}
@media(max-width:380px){.flip{height:430px}}
</style>
</head>
<body>
<div class="stage">
  <div class="flip" tabindex="0" aria-label="Flip card, hover or focus to see the back">
    <div class="inner">
      <div class="face front">
        <span class="emoji">🪐</span>
        <h3>Aurora Pro X</h3>
        <p>Premium plan for teams that ship every day.</p>
        <span class="tip">Hover or focus to flip</span>
      </div>
      <div class="face back">
        <span class="kicker">What is inside</span>
        <h3>Everything, unlimited</h3>
        <p>Full access to every workspace feature with priority support.</p>
        <ul>
          <li>Unlimited projects and seats</li>
          <li>Advanced analytics</li>
          <li>SSO and audit logs</li>
          <li>99.9% uptime SLA</li>
        </ul>
        <button class="btn">Start 14-day trial</button>
      </div>
    </div>
  </div>
  <p class="hint">Hover, <b>focus</b> or tap the card to flip it in 3D.</p>
</div>
<script>
var flip = document.querySelector('.flip');
flip.addEventListener('click', function (e) {
  if (e.target.closest('.btn')) return;
  flip.classList.toggle('flipped');
});
</script>
</body>
</html>`
      },
      {
        id: "feature-card",
        name: "Feature Card",
        desc: "Feature card with icon tile, title and description.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Feature Card — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);display:flex;flex-direction:column;gap:16px}
.head{text-align:center}
.head h2{font-size:1.35rem;letter-spacing:-.02em}
.head p{color:var(--muted);font-size:.9rem;margin-top:6px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.f{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:22px 20px;transition:.25s}
.f:hover{transform:translateY(-5px);border-color:rgba(255,153,67,.45);box-shadow:0 20px 44px rgba(0,0,0,.4)}
.ic{width:46px;height:46px;border-radius:13px;display:grid;place-items:center;font-size:1.3rem;background:rgba(255,153,67,.14);border:1px solid rgba(255,153,67,.32);margin-bottom:14px;transition:.25s}
.f:hover .ic{background:var(--accent);transform:rotate(-6deg) scale(1.05)}
.f h3{font-size:1rem;margin-bottom:6px;letter-spacing:-.01em}
.f p{font-size:.86rem;color:var(--muted)}
.foot{text-align:center;font-size:.8rem;color:var(--muted)}
.foot b{color:var(--accent)}
@media(max-width:640px){.grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="stage">
  <div class="head">
    <h2>Everything you need to ship</h2>
    <p>Three building blocks, one consistent visual language.</p>
  </div>
  <div class="grid">
    <div class="f"><div class="ic">⚡</div><h3>Automations</h3><p>Trigger workflows from any event — no code, no cron jobs to babysit.</p></div>
    <div class="f"><div class="ic">📊</div><h3>Analytics</h3><p>Realtime dashboards that answer “what changed?” before you ask.</p></div>
    <div class="f"><div class="ic">🧩</div><h3>Integrations</h3><p>120+ connectors for the tools your team already lives in every day.</p></div>
  </div>
  <p class="foot">Hover a card to see the <b>lift and icon pop</b> effect.</p>
</div>
</body>
</html>`
      },
      {
        id: "media-card",
        name: "Media Card",
        desc: "Media card with thumbnail, duration chip and play button.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Media Card — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{display:flex;flex-direction:column;align-items:center;gap:16px;width:min(400px,100%)}
.card{width:100%;background:var(--panel);border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.4);transition:.3s}
.card:hover{transform:translateY(-4px);border-color:rgba(255,153,67,.35)}
.thumb{position:relative;aspect-ratio:16/9;background:linear-gradient(135deg,#2a1f3d,#16302f 45%,#3a2412);display:grid;place-items:center;overflow:hidden}
.thumb::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 30% 30%,rgba(124,92,255,.42),transparent 55%),radial-gradient(circle at 75% 70%,rgba(255,153,67,.38),transparent 50%)}
.new{position:absolute;top:12px;left:12px;background:var(--brand);color:#fff;font-size:.64rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:5px 10px;border-radius:999px;z-index:2}
.dur{position:absolute;bottom:12px;right:12px;background:rgba(0,0,0,.78);font-size:.72rem;font-weight:700;padding:4px 9px;border-radius:8px;letter-spacing:.05em;z-index:2}
.play{position:relative;z-index:2;width:64px;height:64px;border-radius:50%;border:0;background:rgba(255,255,255,.16);backdrop-filter:blur(8px);color:#fff;font-size:1.3rem;display:grid;place-items:center;cursor:pointer;padding-left:5px;transition:.25s;box-shadow:0 14px 32px rgba(0,0,0,.45)}
.card:hover .play,.play.playing{background:var(--accent);color:#14211f;transform:scale(1.08)}
.play.playing{padding-left:0}
.prog{position:absolute;left:0;bottom:0;height:4px;width:100%;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform 9s linear;z-index:3}
.play.playing ~ .prog{transform:scaleX(1)}
.body{padding:16px 18px 18px}
.cat{font-size:.64rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:var(--accent)}
.body h3{font-size:1.03rem;margin:7px 0 8px;letter-spacing:-.01em}
.meta{font-size:.8rem;color:var(--muted);display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.meta .dot{width:4px;height:4px;border-radius:50%;background:#4d6565}
.hint{color:var(--muted);font-size:.85rem;text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <div class="card">
    <div class="thumb">
      <span class="new">New</span>
      <button class="play" id="play" aria-label="Play video">▶</button>
      <span class="dur">12:04</span>
      <span class="prog"></span>
    </div>
    <div class="body">
      <span class="cat">Tutorial</span>
      <h3>Building a dark theme with CSS variables</h3>
      <div class="meta"><span>1.2k views</span><span class="dot"></span><span>3 days ago</span><span class="dot"></span><span>hasSy Studio</span></div>
    </div>
  </div>
  <p class="hint">Press <b>▶</b> — the button flips to pause and a progress bar runs.</p>
</div>
<script>
var play = document.getElementById('play');
play.addEventListener('click', function () {
  var on = play.classList.toggle('playing');
  play.textContent = on ? '❚❚' : '▶';
  play.setAttribute('aria-label', on ? 'Pause video' : 'Play video');
});
</script>
</body>
</html>`
      },
      {
        id: "notification-card",
        name: "Notification Card",
        desc: "In-app notification with unread dot, avatar and relative time.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Notification Card — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.wrap{width:min(460px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.4)}
.head{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid var(--line)}
.head b{font-size:.98rem}
.head span{font-size:.74rem;font-weight:800;color:var(--accent);background:rgba(255,153,67,.14);padding:5px 11px;border-radius:999px}
.list{padding:10px;display:grid;gap:6px}
.n{display:flex;gap:13px;padding:14px 16px;border-radius:14px;position:relative;transition:.2s}
.n.unread{background:var(--panel-2)}
.n:hover{background:rgba(255,255,255,.06)}
.ava{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:.85rem;color:#14211f;flex:0 0 auto}
.ava.a{background:linear-gradient(135deg,var(--accent),var(--brand))}
.ava.b{background:linear-gradient(135deg,#3ecf8e,#4da3ff)}
.txt{flex:1;min-width:0}
.txt p{font-size:.9rem}
.txt b{font-weight:700}
.txt small{display:block;color:var(--muted);font-size:.78rem;margin-top:3px}
.time{font-size:.72rem;color:var(--muted);flex:0 0 auto;padding-top:2px}
.dot{position:absolute;top:15px;right:14px;width:9px;height:9px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 4px rgba(255,153,67,.16)}
.n:not(.unread) .dot{display:none}
.foot{padding:14px 20px;border-top:1px solid var(--line);text-align:center}
.foot a{font-size:.84rem;font-weight:700;color:var(--accent);padding:7px 14px;border-radius:9px;transition:.2s}
.foot a:hover{background:rgba(255,153,67,.13)}
</style>
</head>
<body>
<div class="wrap">
  <div class="head"><b>Notifications</b><span>2 new</span></div>
  <div class="list">
    <div class="n unread">
      <div class="ava a">MC</div>
      <div class="txt"><p><b>Maya Chen</b> mentioned you in <b>#design-system</b></p><small>“Can you review the token diff?”</small></div>
      <span class="time">2m</span>
      <span class="dot" aria-label="Unread"></span>
    </div>
    <div class="n unread">
      <div class="ava b">TS</div>
      <div class="txt"><p><b>Deploy succeeded</b> on <b>production</b></p><small>Build 4821 is live · 34s</small></div>
      <span class="time">14m</span>
      <span class="dot" aria-label="Unread"></span>
    </div>
  </div>
  <div class="foot"><a href="#">View all notifications</a></div>
</div>
</body>
</html>`
      },
      {
        id: "hover-card",
        name: "Hover Actions Card",
        desc: "Card with a sliding overlay of quick actions on hover.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hover Actions Card — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{display:flex;flex-direction:column;align-items:center;gap:16px;width:min(420px,100%)}
.card{position:relative;width:100%;border-radius:18px;overflow:hidden;border:1px solid var(--line);box-shadow:0 24px 60px rgba(0,0,0,.4);cursor:pointer;transition:.3s;background:var(--panel)}
.card:hover{transform:translateY(-4px);border-color:rgba(255,153,67,.4)}
.art{height:270px;background:linear-gradient(140deg,#16302f,#3a2a12 55%,#4a1f1f);position:relative;display:flex;align-items:flex-end;padding:22px}
.art::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 70% 25%,rgba(255,153,67,.42),transparent 55%),radial-gradient(circle at 20% 80%,rgba(124,92,255,.3),transparent 50%)}
.caption{position:relative;z-index:1}
.caption b{display:block;font-size:1.18rem;letter-spacing:-.01em}
.caption span{font-size:.82rem;color:rgba(238,244,244,.75)}
.overlay{position:absolute;left:0;right:0;bottom:0;background:rgba(15,31,30,.94);backdrop-filter:blur(10px);border-top:1px solid var(--line);padding:14px;display:flex;gap:9px;transform:translateY(110%);transition:.35s cubic-bezier(.22,1,.36,1);z-index:2}
.card:hover .overlay,.card:focus-within .overlay,.card.open .overlay{transform:none}
.act{flex:1;border:1px solid var(--line);background:var(--panel-2);color:var(--text);border-radius:11px;padding:11px 8px;font-size:.82rem;font-weight:700;cursor:pointer;transition:.2s;display:flex;align-items:center;justify-content:center;gap:6px}
.act:hover,.act:focus-visible{border-color:var(--accent);color:var(--accent);transform:translateY(-2px);outline:none}
.act.liked{background:rgba(255,92,92,.16);border-color:rgba(255,92,92,.5);color:var(--brand)}
.hint{color:var(--muted);font-size:.85rem;text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <div class="card" id="card">
    <div class="art">
      <div class="caption"><b>Golden hour, Lisbon</b><span>Photo by Ava K. · 24 likes</span></div>
    </div>
    <div class="overlay">
      <button class="act" id="like">♥ Like</button>
      <button class="act">🔗 Share</button>
      <button class="act">⋯ More</button>
    </div>
  </div>
  <p class="hint">Hover to slide the actions up — or <b>tap the card</b> on touch devices.</p>
</div>
<script>
var card = document.getElementById('card');
var like = document.getElementById('like');
card.addEventListener('click', function (e) {
  if (e.target.closest('.act')) return;
  card.classList.toggle('open');
});
like.addEventListener('click', function () {
  var on = like.classList.toggle('liked');
  like.textContent = on ? '♥ Liked' : '♥ Like';
});
document.addEventListener('click', function (e) {
  if (!card.contains(e.target)) card.classList.remove('open');
});
</script>
</body>
</html>`
      }
    ]
  });
})();
