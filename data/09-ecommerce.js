/* hasSy Component Library — data: E-commerce
   Every item.code is ONE complete standalone HTML document.
   Paste it into an .html file and open it in a browser. */
(function () {
  var C = (window.COMPONENTS = window.COMPONENTS || []);
  C.push({
    category: "E-commerce",
    items: [
      {
        id: "cart-drawer",
        name: "Cart Drawer",
        desc: "Slide-out cart with line items, quantity steppers and total.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cart Drawer — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.top{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;border-bottom:1px solid var(--line)}
.logo{display:flex;align-items:center;gap:9px;font-weight:800}
.logo i{width:24px;height:24px;border-radius:7px;background:linear-gradient(135deg,var(--accent),var(--brand))}
.cartbtn{display:flex;align-items:center;gap:8px;background:var(--accent);color:#14211f;font-weight:800;font-size:.9rem;padding:10px 16px;border:0;border-radius:11px;cursor:pointer;transition:.2s}
.cartbtn:hover{filter:brightness(1.08);transform:translateY(-1px)}
.cnt{background:#14211f;color:var(--accent);font-size:.72rem;min-width:20px;height:20px;border-radius:999px;display:grid;place-items:center;padding:0 5px}
.page{max-width:1000px;margin:0 auto;padding:30px 24px 70px}
.page h2{font-size:1.4rem;letter-spacing:-.02em}
.sub{color:var(--muted);font-size:.92rem;margin-top:6px}
.sub b{color:var(--accent)}
.list{display:grid;gap:12px;margin-top:22px}
.prow{display:flex;gap:14px;align-items:center;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:12px 14px;transition:.2s}
.prow:hover{border-color:rgba(255, 165, 0,.35);background:var(--panel-2)}
.th{width:60px;height:60px;border-radius:11px;flex:0 0 auto;position:relative;overflow:hidden}
.th::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.3),transparent 55%)}
.t1{background:linear-gradient(135deg,#ffa500,#ff5c5c)}
.t2{background:linear-gradient(135deg,#1d3b39,#3ecf8e)}
.t3{background:linear-gradient(135deg,#3b1515,#ffd9ad)}
.info{flex:1}
.info b{display:block;font-size:.95rem}
.info span{font-size:.8rem;color:var(--muted)}
.price{font-weight:800;color:var(--accent)}
.backdrop{position:fixed;inset:0;background:rgba(0,0,0,.55);opacity:0;visibility:hidden;transition:.3s;z-index:60}
.backdrop.show{opacity:1;visibility:visible}
.drawer{position:fixed;top:0;right:0;bottom:0;width:min(400px,92vw);background:var(--panel);border-left:1px solid var(--line);z-index:70;transform:translateX(105%);transition:transform .4s cubic-bezier(.22,1,.36,1);display:flex;flex-direction:column;box-shadow:-20px 0 60px rgba(0,0,0,.5)}
.drawer.show{transform:none}
.dhead{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid var(--line)}
.dhead b{display:block;font-size:1.05rem}
.dsub{font-size:.75rem;color:var(--muted)}
.close{width:36px;height:36px;border-radius:10px;background:rgba(0,0,0,.25);border:1px solid var(--line);color:var(--muted);cursor:pointer;transition:.2s}
.close:hover{color:var(--text);border-color:var(--accent)}
.ditems{flex:1;overflow-y:auto;padding:14px 18px;display:grid;gap:12px;align-content:start}
.ditem{display:flex;gap:12px;background:var(--panel-2);border:1px solid var(--line);border-radius:12px;padding:10px}
.ditem .th{width:52px;height:52px}
.dmeta{flex:1;min-width:0}
.dmeta b{display:block;font-size:.88rem}
.dmeta span{font-size:.75rem;color:var(--muted)}
.drow{display:flex;align-items:center;justify-content:space-between;margin-top:8px}
.step{display:inline-flex;align-items:center;border:1px solid var(--line);border-radius:9px;overflow:hidden;background:rgba(0,0,0,.25)}
.step button{width:28px;height:28px;background:transparent;border:0;color:var(--muted);cursor:pointer;transition:.15s}
.step button:hover{background:rgba(255, 165, 0,.18);color:var(--accent)}
.step .q{width:30px;text-align:center;font-size:.85rem;font-weight:700}
.lt{font-size:.88rem;font-weight:800;color:var(--accent)}
.dfoot{border-top:1px solid var(--line);padding:16px 20px 20px;display:grid;gap:8px;background:rgba(0,0,0,.18)}
.srow{display:flex;justify-content:space-between;font-size:.88rem;color:var(--muted)}
.srow.total{font-size:1.05rem;color:var(--text);font-weight:800}
.checkout{margin-top:8px;border:0;background:var(--accent);color:#14211f;font-weight:800;padding:13px;border-radius:12px;cursor:pointer;transition:.2s}
.checkout:hover{filter:brightness(1.08)}
</style>
</head>
<body>
<header class="top">
  <a class="logo" href="#"><i></i> hasSy Store</a>
  <button class="cartbtn" id="open" aria-haspopup="dialog">🛒 Cart <span class="cnt" id="cnt">4</span></button>
</header>
<main class="page">
  <h2>Weekly drops</h2>
  <p class="sub">Tap <b>Open cart</b> — steppers inside the drawer recompute line totals, shipping and the badge live.</p>
  <div class="list">
    <div class="prow"><span class="th t1"></span><div class="info"><b>Nova Headphones</b><span>Over-ear · Midnight</span></div><span class="price">$49.00</span></div>
    <div class="prow"><span class="th t2"></span><div class="info"><b>Pulse Smartwatch</b><span>42mm · Graphite</span></div><span class="price">$32.00</span></div>
    <div class="prow"><span class="th t3"></span><div class="info"><b>Echo Buds</b><span>True wireless · Sand</span></div><span class="price">$18.00</span></div>
  </div>
</main>
<div class="backdrop" id="backdrop"></div>
<aside class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Shopping cart" aria-hidden="true">
  <div class="dhead">
    <div><b>Your cart</b><span class="dsub" id="dsub">4 items</span></div>
    <button class="close" id="close" aria-label="Close cart">✕</button>
  </div>
  <div class="ditems">
    <div class="ditem" data-price="49">
      <span class="th t1"></span>
      <div class="dmeta"><b>Nova Headphones</b><span>Midnight</span>
        <div class="drow">
          <div class="step"><button class="minus" aria-label="Decrease Nova Headphones quantity">−</button><span class="q">2</span><button class="plus" aria-label="Increase Nova Headphones quantity">+</button></div>
          <span class="lt">$98.00</span>
        </div>
      </div>
    </div>
    <div class="ditem" data-price="32">
      <span class="th t2"></span>
      <div class="dmeta"><b>Pulse Smartwatch</b><span>Graphite</span>
        <div class="drow">
          <div class="step"><button class="minus" aria-label="Decrease Pulse Smartwatch quantity">−</button><span class="q">1</span><button class="plus" aria-label="Increase Pulse Smartwatch quantity">+</button></div>
          <span class="lt">$32.00</span>
        </div>
      </div>
    </div>
    <div class="ditem" data-price="18">
      <span class="th t3"></span>
      <div class="dmeta"><b>Echo Buds</b><span>Sand</span>
        <div class="drow">
          <div class="step"><button class="minus" aria-label="Decrease Echo Buds quantity">−</button><span class="q">1</span><button class="plus" aria-label="Increase Echo Buds quantity">+</button></div>
          <span class="lt">$18.00</span>
        </div>
      </div>
    </div>
  </div>
  <div class="dfoot">
    <div class="srow"><span>Subtotal</span><span id="sub">$148.00</span></div>
    <div class="srow"><span>Shipping</span><span id="ship">Free</span></div>
    <div class="srow total"><span>Total</span><span id="tot">$148.00</span></div>
    <button class="checkout">Checkout →</button>
  </div>
</aside>
<script>
var drawer = document.getElementById('drawer');
var backdrop = document.getElementById('backdrop');
function setOpen(open) {
  drawer.classList.toggle('show', open);
  backdrop.classList.toggle('show', open);
  drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
  document.body.style.overflow = open ? 'hidden' : '';
}
document.getElementById('open').addEventListener('click', function () { setOpen(true); });
document.getElementById('close').addEventListener('click', function () { setOpen(false); });
backdrop.addEventListener('click', function () { setOpen(false); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
var items = Array.prototype.slice.call(document.querySelectorAll('.ditem'));
function recalc() {
  var subtotal = 0, count = 0;
  items.forEach(function (item) {
    var price = Number(item.getAttribute('data-price'));
    var q = Number(item.querySelector('.q').textContent);
    subtotal += price * q;
    count += q;
    item.querySelector('.lt').textContent = '$' + (price * q).toFixed(2);
  });
  var ship = subtotal >= 100 || subtotal === 0 ? 0 : 9;
  document.getElementById('sub').textContent = '$' + subtotal.toFixed(2);
  document.getElementById('ship').textContent = ship === 0 ? 'Free' : '$' + ship.toFixed(2);
  document.getElementById('tot').textContent = '$' + (subtotal + ship).toFixed(2);
  document.getElementById('cnt').textContent = String(count);
  document.getElementById('dsub').textContent = count + (count === 1 ? ' item' : ' items');
}
items.forEach(function (item) {
  var q = item.querySelector('.q');
  item.querySelector('.minus').addEventListener('click', function () {
    var n = Number(q.textContent);
    if (n > 1) { q.textContent = String(n - 1); recalc(); }
  });
  item.querySelector('.plus').addEventListener('click', function () {
    var n = Number(q.textContent);
    if (n < 9) { q.textContent = String(n + 1); recalc(); }
  });
});
recalc();
</script>
</body>
</html>`
      },
      {
        id: "product-grid",
        name: "Product Grid",
        desc: "Product listing grid with badges and quick-add buttons.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Product Grid — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.wrap{width:min(1020px,100%)}
.head{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;margin-bottom:24px}
.head h2{font-size:1.4rem;letter-spacing:-.02em}
.chips{display:flex;gap:8px;flex-wrap:wrap}
.chip{background:rgba(0,0,0,.25);border:1px solid var(--line);color:var(--muted);font-size:.82rem;font-weight:700;padding:8px 15px;border-radius:999px;cursor:pointer;transition:.2s}
.chip:hover{color:var(--text);border-color:var(--muted)}
.chip.on{background:rgba(255, 165, 0,.15);border-color:rgba(255, 165, 0,.45);color:var(--accent)}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(215px,1fr));gap:16px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:16px;overflow:hidden;transition:.25s;display:flex;flex-direction:column}
.card:hover{transform:translateY(-5px);border-color:rgba(255, 165, 0,.4);box-shadow:0 20px 44px rgba(0,0,0,.38)}
.thumb{position:relative;aspect-ratio:4/3;overflow:hidden}
.emo{position:absolute;inset:0;display:grid;place-items:center;font-size:3rem;filter:drop-shadow(0 10px 20px rgba(0,0,0,.45))}
.p1{background:linear-gradient(135deg,#ffa500,#ff5c5c)}
.p2{background:linear-gradient(135deg,#1d3b39,#3ecf8e)}
.p3{background:linear-gradient(135deg,#3b1515,#ffd9ad)}
.p4{background:linear-gradient(135deg,#0f1f1e,#2f6f6b)}
.badge{position:absolute;top:10px;left:10px;font-size:.68rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:5px 10px;border-radius:999px;z-index:1}
.b-sale{background:var(--brand);color:#fff}
.b-new{background:var(--accent);color:#14211f}
.b-hot{background:rgba(0,0,0,.6);color:var(--text);border:1px solid rgba(255,255,255,.25)}
.fav{position:absolute;top:8px;right:8px;width:34px;height:34px;border-radius:50%;background:rgba(0,0,0,.45);border:1px solid var(--line);color:#cfdcda;cursor:pointer;z-index:1;transition:.2s}
.fav:hover{background:rgba(0,0,0,.7);transform:scale(1.08)}
.fav.on{color:var(--brand);border-color:rgba(255,92,92,.5)}
.b{padding:14px 16px 16px;display:flex;flex-direction:column;gap:5px;flex:1}
.cat{font-size:.68rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.b h3{font-size:.98rem}
.stars{color:var(--accent);font-size:.8rem;letter-spacing:1px}
.stars span{color:var(--muted);letter-spacing:0;margin-left:5px}
.pr{display:flex;align-items:baseline;gap:9px;margin-top:4px}
.pr b{font-size:1.15rem;letter-spacing:-.02em}
.pr s{color:var(--muted);font-size:.85rem}
.add{margin-top:12px;border:1px solid var(--line);background:rgba(255,255,255,.05);color:var(--text);font-weight:800;font-size:.85rem;padding:11px;border-radius:11px;cursor:pointer;transition:.2s}
.add:hover{background:var(--accent);border-color:var(--accent);color:#14211f}
.add.ok{background:var(--ok);border-color:var(--ok);color:#0c2018}
</style>
</head>
<body>
<div class="wrap">
  <header class="head">
    <h2>New arrivals</h2>
    <div class="chips" id="chips">
      <button class="chip on">All</button>
      <button class="chip">Audio</button>
      <button class="chip">Wearables</button>
      <button class="chip">Home</button>
    </div>
  </header>
  <div class="grid">
    <article class="card">
      <div class="thumb p1"><span class="badge b-sale">-25%</span><button class="fav" aria-label="Save Nova Headphones" aria-pressed="false">♥</button><span class="emo">🎧</span></div>
      <div class="b"><span class="cat">Audio</span><h3>Nova Headphones</h3><span class="stars">★★★★★ <span>4.8 · 214</span></span><div class="pr"><b>$129.00</b><s>$179.00</s></div><button class="add">Add to cart</button></div>
    </article>
    <article class="card">
      <div class="thumb p2"><span class="badge b-new">New</span><button class="fav" aria-label="Save Pulse Watch" aria-pressed="false">♥</button><span class="emo">⌚</span></div>
      <div class="b"><span class="cat">Wearables</span><h3>Pulse Watch</h3><span class="stars">★★★★☆ <span>4.6 · 98</span></span><div class="pr"><b>$89.00</b></div><button class="add">Add to cart</button></div>
    </article>
    <article class="card">
      <div class="thumb p3"><button class="fav" aria-label="Save Echo Buds" aria-pressed="false">♥</button><span class="emo">🎵</span></div>
      <div class="b"><span class="cat">Audio</span><h3>Echo Buds</h3><span class="stars">★★★★★ <span>4.9 · 342</span></span><div class="pr"><b>$59.00</b><s>$69.00</s></div><button class="add">Add to cart</button></div>
    </article>
    <article class="card">
      <div class="thumb p4"><span class="badge b-hot">Hot</span><button class="fav" aria-label="Save Lumen Lamp" aria-pressed="false">♥</button><span class="emo">💡</span></div>
      <div class="b"><span class="cat">Home</span><h3>Lumen Lamp</h3><span class="stars">★★★★☆ <span>4.5 · 76</span></span><div class="pr"><b>$45.00</b></div><button class="add">Add to cart</button></div>
    </article>
  </div>
</div>
<script>
Array.prototype.slice.call(document.querySelectorAll('.add')).forEach(function (b) {
  b.addEventListener('click', function () {
    if (b.classList.contains('ok')) return;
    var t = b.textContent;
    b.classList.add('ok');
    b.textContent = '✓ Added';
    setTimeout(function () { b.classList.remove('ok'); b.textContent = t; }, 1400);
  });
});
Array.prototype.slice.call(document.querySelectorAll('.chip')).forEach(function (c) {
  c.addEventListener('click', function () {
    Array.prototype.slice.call(document.querySelectorAll('.chip')).forEach(function (x) { x.classList.remove('on'); });
    c.classList.add('on');
  });
});
Array.prototype.slice.call(document.querySelectorAll('.fav')).forEach(function (f) {
  f.addEventListener('click', function () {
    var on = f.classList.toggle('on');
    f.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
});
</script>
</body>
</html>`
      },
      {
        id: "price-tag",
        name: "Price Tag",
        desc: "Price display with original price, discount percent and currency variants.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Price Tag — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.wrap{width:min(760px,100%)}
.head{text-align:center;margin-bottom:26px}
.kick{font-size:.72rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
.head h2{font-size:1.5rem;letter-spacing:-.02em;margin-top:8px}
.head p{color:var(--muted);font-size:.92rem;margin-top:6px}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.v{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:20px;transition:.2s}
.v:hover{border-color:rgba(255, 165, 0,.35);background:var(--panel-2)}
.lab{display:block;font-size:.68rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
.row{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.now{font-weight:800;font-size:1.6rem;letter-spacing:-.02em;color:var(--accent)}
.was{font-weight:600;font-size:.95rem;color:var(--muted);text-decoration:line-through}
.off{background:rgba(255,92,92,.16);color:var(--brand);font-size:.72rem;font-weight:800;padding:4px 9px;border-radius:999px}
.xl{font-size:2.3rem;font-weight:800;letter-spacing:-.03em}
.suf{font-size:.85rem;color:var(--muted);font-weight:600}
.curs{display:flex;flex-wrap:wrap;gap:8px}
.cur{background:rgba(0,0,0,.25);border:1px solid var(--line);border-radius:10px;padding:9px 13px;font-weight:700;font-size:.9rem;transition:.2s}
.cur:hover{border-color:var(--accent);color:var(--accent)}
.pill{display:inline-flex;align-items:center;gap:9px;background:linear-gradient(120deg,rgba(255, 165, 0,.2),rgba(255,92,92,.16));border:1px solid rgba(255, 165, 0,.35);border-radius:999px;padding:10px 18px;font-weight:800}
.pill s{color:var(--muted);font-weight:600;font-size:.88rem}
.free{font-size:1.7rem;font-weight:800;color:var(--ok);letter-spacing:-.02em}
.note{font-size:.82rem;color:var(--muted);margin-top:6px}
@media(max-width:560px){.grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="wrap">
  <header class="head">
    <span class="kick">Price tag</span>
    <h2>One price component, every context</h2>
    <p>Sizes, strikethroughs, discount pills and currency variants — all driven by the same tokens.</p>
  </header>
  <div class="grid">
    <div class="v"><span class="lab">Basic</span><div class="row"><span class="now">$49.00</span></div><p class="note">Single price, accent color.</p></div>
    <div class="v"><span class="lab">Discounted</span><div class="row"><span class="now">$55.50</span><span class="was">$74.00</span><span class="off">-25%</span></div><p class="note">Current, original and badge.</p></div>
    <div class="v"><span class="lab">Featured / SaaS</span><div class="row"><span class="xl">$12</span><span class="suf">per seat / month</span></div><p class="note">Oversized headline pricing.</p></div>
    <div class="v"><span class="lab">Currencies</span><div class="curs"><span class="cur">US$12.99</span><span class="cur">€12,99</span><span class="cur">£10.99</span><span class="cur">¥1,980</span></div><p class="note">Locale-ready formats.</p></div>
    <div class="v"><span class="lab">Compact pill</span><div class="row"><span class="pill"><s>$40</s> Only $19</span></div><p class="note">Great inside cards and tables.</p></div>
    <div class="v"><span class="lab">Included</span><div class="row"><span class="free">Free</span></div><p class="note">With any annual plan · save $96.</p></div>
  </div>
</div>
</body>
</html>`
      },
      {
        id: "quantity-stepper",
        name: "Quantity Stepper",
        desc: "Minus/plus quantity control with min and max limits.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Quantity Stepper — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(460px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:28px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.prow{display:flex;gap:14px;align-items:center;padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid var(--line)}
.th{width:58px;height:58px;border-radius:12px;flex:0 0 auto;background:linear-gradient(135deg,#1d3b39,#3ecf8e);position:relative;overflow:hidden}
.th::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.3),transparent 55%)}
.prow b{display:block;font-size:.98rem}
.prow span{font-size:.85rem;color:var(--accent);font-weight:700}
.lab{display:block;font-size:.78rem;font-weight:700;color:var(--muted);margin-bottom:10px}
.stepper{display:inline-flex;align-items:center;border:1px solid var(--line);border-radius:14px;background:rgba(0,0,0,.25);overflow:hidden}
.sbtn{width:48px;height:48px;background:transparent;border:0;color:var(--text);font-size:1.25rem;cursor:pointer;transition:.18s}
.sbtn:hover:not(:disabled){background:rgba(255, 165, 0,.16);color:var(--accent)}
.sbtn:disabled{opacity:.3;cursor:not-allowed}
.val{width:58px;height:48px;display:grid;place-items:center;font-weight:800;font-size:1.05rem;border-left:1px solid var(--line);border-right:1px solid var(--line)}
.limits{display:flex;gap:14px;margin-top:14px;font-size:.8rem;color:var(--muted)}
.limits b{color:var(--text)}
.line{margin-top:16px;padding:13px 15px;background:rgba(0,0,0,.22);border:1px dashed var(--line);border-radius:12px;font-size:.88rem;color:var(--muted)}
.line b{color:var(--accent);font-weight:800}
.hint{margin-top:14px;font-size:.82rem;color:var(--muted)}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="card">
  <div class="prow"><span class="th"></span><div><b>Pulse Smartwatch</b><span>$89.00</span></div></div>
  <span class="lab" id="qlab">Quantity</span>
  <div class="stepper" role="group" aria-labelledby="qlab">
    <button class="sbtn" id="minus" aria-label="Decrease quantity">−</button>
    <span class="val" id="val" aria-live="polite">1</span>
    <button class="sbtn" id="plus" aria-label="Increase quantity">+</button>
  </div>
  <div class="limits"><span>Min <b>1</b></span><span>Max <b>10</b></span><span>Step <b>1</b></span></div>
  <p class="line" id="line" aria-live="polite">Line total: $89.00 — 1 unit</p>
  <p class="hint">Buttons <b>disable</b> automatically at the bounds — try holding them down.</p>
</div>
<script>
var MIN = 1, MAX = 10, UNIT = 89;
var val = document.getElementById('val');
var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var line = document.getElementById('line');
function sync() {
  var n = Number(val.textContent);
  minus.disabled = n <= MIN;
  plus.disabled = n >= MAX;
  line.textContent = 'Line total: $' + (n * UNIT).toFixed(2) + ' — ' + n + (n === 1 ? ' unit' : ' units');
}
minus.addEventListener('click', function () {
  var n = Number(val.textContent);
  if (n > MIN) { val.textContent = String(n - 1); sync(); }
});
plus.addEventListener('click', function () {
  var n = Number(val.textContent);
  if (n < MAX) { val.textContent = String(n + 1); sync(); }
});
sync();
</script>
</body>
</html>`
      },
      {
        id: "star-rating",
        name: "Star Rating",
        desc: "Interactive star rating with hover preview.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Star Rating — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stack{width:min(560px,100%);display:grid;gap:18px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:24px;box-shadow:0 20px 50px rgba(0,0,0,.3)}
.card h3{font-size:1.02rem;margin-bottom:4px}
.card .sub{font-size:.85rem;color:var(--muted);margin-bottom:16px}
.stars{display:inline-flex;gap:6px}
.star{font-size:2rem;line-height:1;padding:2px;background:transparent;border:0;color:#3a5453;cursor:pointer;transition:transform .15s,color .15s}
.star:hover{color:var(--accent)}
.star.on{color:var(--accent)}
.star.pop{transform:scale(1.2)}
.stars.ro .star{font-size:1.4rem;cursor:default;color:#3a5453}
.stars.ro .star.on{color:var(--accent)}
.readout{margin-top:14px;font-size:.9rem;color:var(--muted)}
.readout b{color:var(--accent)}
.rr{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.rr p{font-size:.88rem;color:var(--muted)}
.rr b{color:var(--text)}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
</style>
</head>
<body>
<div class="stack">
  <div class="card">
    <h3>Rate this product</h3>
    <p class="sub">Hover to preview, click to lock in your score.</p>
    <div class="stars" id="stars" role="group" aria-label="Rating">
      <button type="button" class="star" data-v="1" aria-label="1 star">★</button>
      <button type="button" class="star" data-v="2" aria-label="2 stars">★</button>
      <button type="button" class="star" data-v="3" aria-label="3 stars">★</button>
      <button type="button" class="star" data-v="4" aria-label="4 stars">★</button>
      <button type="button" class="star" data-v="5" aria-label="5 stars">★</button>
    </div>
    <p class="readout" id="readout" aria-live="polite">Hover to preview · click to rate</p>
  </div>
  <div class="card">
    <h3>Read-only display</h3>
    <p class="sub">Static average shown on listing cards.</p>
    <div class="rr">
      <div class="stars ro" role="img" aria-label="Rated 4 out of 5">
        <span class="star on">★</span><span class="star on">★</span><span class="star on">★</span><span class="star on">★</span><span class="star">★</span>
      </div>
      <p><b>4.0</b> · 128 reviews</p>
    </div>
  </div>
</div>
<script>
var stars = Array.prototype.slice.call(document.querySelectorAll('#stars .star'));
var readout = document.getElementById('readout');
var current = 0;
function paint(n) {
  stars.forEach(function (s, k) { s.classList.toggle('on', k < n); });
}
stars.forEach(function (s, i) {
  s.addEventListener('mouseenter', function () {
    paint(i + 1);
    s.classList.add('pop');
    readout.textContent = 'Preview: ' + (i + 1) + ' out of 5';
  });
  s.addEventListener('mouseleave', function () {
    s.classList.remove('pop');
    paint(current);
    if (current === 0) readout.textContent = 'Hover to preview · click to rate';
  });
  s.addEventListener('focus', function () { paint(i + 1); });
  s.addEventListener('blur', function () { paint(current); });
  s.addEventListener('click', function () {
    current = i + 1;
    paint(current);
    readout.innerHTML = 'You rated <b>' + current + ' out of 5</b> — thank you!';
  });
});
document.getElementById('stars').addEventListener('mouseleave', function () { paint(current); });
</script>
</body>
</html>`
      },
      {
        id: "order-summary",
        name: "Order Summary",
        desc: "Checkout summary with line items, discount and total.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Order Summary — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(520px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
.top h2{font-size:1.15rem;letter-spacing:-.01em}
.step{font-size:.72rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);background:rgba(255, 165, 0,.13);border:1px solid rgba(255, 165, 0,.3);padding:5px 11px;border-radius:999px}
.items{display:grid;gap:12px}
.item{display:flex;gap:12px;align-items:center}
.th{width:48px;height:48px;border-radius:10px;flex:0 0 auto;position:relative;overflow:hidden}
.th::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.3),transparent 55%)}
.t1{background:linear-gradient(135deg,#ffa500,#ff5c5c)}
.t2{background:linear-gradient(135deg,#1d3b39,#3ecf8e)}
.t3{background:linear-gradient(135deg,#3b1515,#ffd9ad)}
.item .m{flex:1;min-width:0}
.item b{display:block;font-size:.9rem}
.item span{font-size:.78rem;color:var(--muted)}
.item .p{font-weight:800;font-size:.92rem}
.div{height:1px;background:var(--line);margin:18px 0}
.srow{display:flex;justify-content:space-between;font-size:.9rem;color:var(--muted);padding:5px 0}
.srow b{color:var(--text);font-weight:700}
.srow .ok{color:var(--ok);font-weight:800}
.code{font-size:.72rem;font-weight:800;background:rgba(62,207,142,.14);border:1px solid rgba(62,207,142,.35);color:var(--ok);padding:3px 9px;border-radius:999px;margin-right:8px}
.save{display:flex;gap:9px;align-items:center;background:rgba(62,207,142,.1);border:1px solid rgba(62,207,142,.3);border-radius:12px;padding:11px 13px;font-size:.84rem;color:var(--ok);margin-top:14px}
.trow{display:flex;justify-content:space-between;align-items:baseline;margin-top:16px;padding-top:16px;border-top:1px solid var(--line)}
.trow span{font-size:.95rem;font-weight:700}
.trow b{font-size:1.6rem;letter-spacing:-.03em;color:var(--accent)}
.checkout{width:100%;margin-top:18px;border:0;background:var(--accent);color:#14211f;font-weight:800;font-size:.95rem;padding:14px;border-radius:12px;cursor:pointer;transition:.2s}
.checkout:hover{filter:brightness(1.08);transform:translateY(-1px)}
.secure{text-align:center;font-size:.78rem;color:var(--muted);margin-top:12px}
</style>
</head>
<body>
<div class="card">
  <div class="top"><h2>Order summary</h2><span class="step">Step 3 of 4</span></div>
  <div class="items">
    <div class="item"><span class="th t1"></span><div class="m"><b>Nova Headphones</b><span>Midnight · Qty 1</span></div><span class="p">$129.00</span></div>
    <div class="item"><span class="th t2"></span><div class="m"><b>Pulse Smartwatch</b><span>Graphite · Qty 1</span></div><span class="p">$59.00</span></div>
    <div class="item"><span class="th t3"></span><div class="m"><b>Braided USB-C cable</b><span>2m · Qty 1</span></div><span class="p">$19.00</span></div>
  </div>
  <div class="div"></div>
  <div class="srow"><span><span class="code">SAVE10</span>Discount</span><span class="ok">−$20.70</span></div>
  <div class="srow"><span>Subtotal</span><b>$207.00</b></div>
  <div class="srow"><span>Shipping</span><span class="ok">Free</span></div>
  <div class="srow"><span>Estimated tax</span><b>$14.90</b></div>
  <div class="save">🎉 You saved $20.70 with SAVE10 — free shipping unlocked.</div>
  <div class="trow"><span>Total</span><b>$201.20</b></div>
  <button class="checkout">Proceed to checkout →</button>
  <p class="secure">🔒 Secure checkout · 30-day returns · 2-year warranty</p>
</div>
</body>
</html>`
      },
      {
        id: "coupon-input",
        name: "Coupon Field",
        desc: "Promo code input with apply button and validation message.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Coupon Field — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(460px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
h3{font-size:1.05rem;margin-bottom:6px}
.sub{font-size:.88rem;color:var(--muted);margin-bottom:18px}
.form{display:flex;gap:8px}
.form input{flex:1;min-width:0;background:rgba(0,0,0,.25);border:1px solid var(--line);border-radius:12px;padding:13px 15px;color:var(--text);outline:none;transition:.2s;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.form input::placeholder{color:#6d8484;letter-spacing:.04em;text-transform:none;font-weight:500}
.form input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(255, 165, 0,.18)}
.form input.good{border-color:var(--ok)}
.form input.bad{border-color:var(--err)}
.apply{border:0;background:var(--accent);color:#14211f;font-weight:800;padding:0 22px;border-radius:12px;cursor:pointer;transition:.2s}
.apply:hover{filter:brightness(1.08)}
.msg{min-height:20px;margin-top:11px;font-size:.86rem;color:var(--muted)}
.msg.err{color:var(--err)}
.msg.ok{color:var(--ok)}
.tot{display:flex;justify-content:space-between;align-items:center;margin-top:18px;padding-top:16px;border-top:1px solid var(--line);font-size:.9rem;color:var(--muted)}
.tot b{font-size:1.35rem;letter-spacing:-.02em;color:var(--text)}
.tot b.cut{color:var(--ok)}
.hint{margin-top:12px;font-size:.78rem;color:var(--muted)}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="card">
  <h3>Have a promo code?</h3>
  <p class="sub">Enter it below — the total updates the moment it validates.</p>
  <form class="form" id="form" novalidate>
    <label class="sr" for="code">Promo code</label>
    <input id="code" type="text" placeholder="e.g. SAVE10" autocomplete="off" spellcheck="false" aria-describedby="msg">
    <button class="apply" type="submit">Apply</button>
  </form>
  <p class="msg" id="msg" aria-live="polite">Try <b>SAVE10</b> for 10% off your order.</p>
  <div class="tot"><span>Order total</span><b id="tot">$201.20</b></div>
  <p class="hint">Codes are case-insensitive · one code per order</p>
</div>
<script>
var form = document.getElementById('form');
var input = document.getElementById('code');
var msg = document.getElementById('msg');
var tot = document.getElementById('tot');
var BASE = 201.2;
var applied = false;
function setMsg(text, cls) {
  msg.textContent = text;
  msg.className = 'msg' + (cls ? ' ' + cls : '');
  input.classList.remove('good', 'bad');
  if (cls) input.classList.add(cls === 'ok' ? 'good' : 'bad');
}
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var v = input.value.trim().toUpperCase();
  if (!v) { setMsg('Enter a promo code first.', 'err'); input.focus(); return; }
  if (v === 'SAVE10') {
    if (applied) { setMsg('SAVE10 is already applied to this order.', 'err'); return; }
    applied = true;
    setMsg('SAVE10 applied — 10% off your order.', 'ok');
    tot.textContent = '$' + (BASE * 0.9).toFixed(2);
    tot.classList.add('cut');
  } else {
    setMsg('Invalid code "' + v + '" is not active.', 'err');
  }
});
</script>
</body>
</html>`
      },
      {
        id: "add-to-cart-bar",
        name: "Add-to-Cart Bar",
        desc: "Sticky bottom bar with product, price and add-to-cart CTA.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Add-to-Cart Bar — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.page{max-width:860px;margin:0 auto;padding:36px 24px 150px}
.hero{display:flex;gap:24px;align-items:flex-start}
.ph{width:210px;height:210px;flex:0 0 auto;border-radius:16px;background:linear-gradient(135deg,#ffa500,#ff5c5c);position:relative;overflow:hidden;border:1px solid var(--line)}
.ph::after{content:"🎧";position:absolute;inset:0;display:grid;place-items:center;font-size:4rem;filter:drop-shadow(0 12px 24px rgba(0,0,0,.45))}
.cat{font-size:.7rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--accent)}
h1{font-size:clamp(1.5rem,3vw,2rem);letter-spacing:-.02em;margin:8px 0}
.rate{color:var(--accent);font-size:.9rem}
.rate span{color:var(--muted);margin-left:7px}
.pr{display:flex;align-items:baseline;gap:11px;margin:12px 0}
.pr b{font-size:1.8rem;letter-spacing:-.03em}
.pr s{color:var(--muted)}
.pr .off{background:rgba(255,92,92,.16);color:var(--brand);font-size:.72rem;font-weight:800;padding:4px 10px;border-radius:999px}
.desc{color:var(--muted);font-size:.95rem;max-width:52ch}
.tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.tag{font-size:.76rem;font-weight:700;background:rgba(0,0,0,.25);border:1px solid var(--line);color:var(--muted);padding:6px 12px;border-radius:999px}
.h3{margin:34px 0 10px;font-size:1.1rem}
.p{color:var(--muted);font-size:.94rem;margin-bottom:10px;max-width:70ch}
.ul{list-style:none;display:grid;gap:9px;color:var(--muted);font-size:.92rem;margin-top:6px}
.ul li::before{content:"✓";color:var(--ok);font-weight:800;margin-right:10px}
.bar{position:fixed;left:50%;transform:translateX(-50%);bottom:14px;width:min(720px,calc(100% - 24px));display:flex;align-items:center;gap:14px;background:rgba(22,48,47,.94);backdrop-filter:blur(12px);border:1px solid var(--line);border-radius:18px;padding:12px 14px;box-shadow:0 18px 50px rgba(0,0,0,.55);z-index:50}
.mini{width:46px;height:46px;border-radius:11px;flex:0 0 auto;background:linear-gradient(135deg,#ffa500,#ff5c5c);position:relative;overflow:hidden}
.mini::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.35),transparent 55%)}
.binfo{flex:1;min-width:0}
.binfo b{display:block;font-size:.92rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.binfo span{font-size:.78rem;color:var(--muted)}
.bprice{font-weight:800;font-size:1.05rem;white-space:nowrap}
.add{border:0;background:var(--accent);color:#14211f;font-weight:800;font-size:.9rem;padding:13px 20px;border-radius:12px;cursor:pointer;transition:.25s;min-width:150px;text-align:center;white-space:nowrap}
.add:hover{filter:brightness(1.08);transform:translateY(-1px)}
.add.done{background:var(--ok);color:#0c2018;transform:scale(1.04)}
@media(max-width:680px){.hero{flex-direction:column}.ph{width:100%;height:180px}}
@media(max-width:560px){.mini{display:none}.bprice{font-size:.95rem}.add{min-width:0;padding:13px 14px}}
</style>
</head>
<body>
<main class="page">
  <div class="hero">
    <span class="ph" role="img" aria-label="Nova Headphones product photo"></span>
    <div>
      <span class="cat">Audio · Limited edition</span>
      <h1>Nova Headphones</h1>
      <p class="rate">★★★★★ <span>4.8 · 214 reviews</span></p>
      <div class="pr"><b>$129.00</b><s>$179.00</s><span class="off">-28%</span></div>
      <p class="desc">Adaptive noise cancelling, 40-hour battery and memory-foam cushions in a featherweight 240g frame.</p>
      <div class="tags"><span class="tag">Active ANC</span><span class="tag">40h battery</span><span class="tag">USB-C fast charge</span></div>
    </div>
  </div>
  <h3 class="h3">Details</h3>
  <p class="p">Tuned by Grammy-winning engineers, Nova balances a warm low end with articulate highs that never fatigue. Multipoint Bluetooth keeps your laptop and phone connected at once.</p>
  <p class="p">The memory-foam cushions self-adjust to any head shape, and the fold-flat design slips into the included hard case — perfect for commuters and frequent flyers.</p>
  <ul class="ul">
    <li>Hybrid adaptive noise cancelling with transparency mode</li>
    <li>40-hour battery, 5-minute quick charge gives 4 hours</li>
    <li>Replaceable pads and a 2-year warranty included</li>
  </ul>
</main>
<div class="bar" role="region" aria-label="Add to cart">
  <span class="mini" aria-hidden="true"></span>
  <div class="binfo"><b>Nova Headphones</b><span>Midnight · In stock</span></div>
  <span class="bprice">$129.00</span>
  <button class="add" id="add">Add to cart</button>
</div>
<script>
var add = document.getElementById('add');
add.addEventListener('click', function () {
  if (add.classList.contains('done')) return;
  add.classList.add('done');
  add.textContent = '✓ Added to cart';
  setTimeout(function () {
    add.classList.remove('done');
    add.textContent = 'Add to cart';
  }, 1800);
});
</script>
</body>
</html>`
      }
    ]
  });
})();
