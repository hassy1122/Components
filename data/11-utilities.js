/* hasSy Component Library — data: Utilities & Extras
   Every item.code is ONE complete standalone HTML document.
   Paste it into an .html file and open it in a browser. */
(function () {
  var C = (window.COMPONENTS = window.COMPONENTS || []);
  C.push({
    category: "Utilities & Extras",
    items: [
      {
        id: "back-to-top",
        name: "Back to Top",
        desc: "Floating back-to-top button that appears after scrolling.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Back to Top — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.hero{max-width:760px;margin:0 auto;padding:90px 24px 40px;text-align:center}
.kicker{font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
h1{font-size:clamp(1.8rem,5vw,2.6rem);letter-spacing:-.03em;margin-top:12px}
.lead{color:var(--muted);font-size:1rem;margin-top:12px;max-width:52ch;margin-left:auto;margin-right:auto}
.blocks{max-width:760px;margin:0 auto;padding:0 24px 120px;display:grid;gap:26px}
.block{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:30px 28px;box-shadow:0 18px 44px rgba(0,0,0,.3)}
.block h2{font-size:1.25rem;letter-spacing:-.02em;margin-bottom:8px}
.block p{color:var(--muted);font-size:.94rem}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}
.chip{font-size:.76rem;font-weight:700;padding:6px 12px;border-radius:999px;background:rgba(255,153,67,.14);color:var(--accent);border:1px solid rgba(255,153,67,.3)}
.num{display:inline-grid;place-items:center;width:34px;height:34px;border-radius:10px;background:rgba(255,153,67,.15);color:var(--accent);font-weight:800;font-size:.85rem;margin-bottom:14px}
.totop{position:fixed;right:24px;bottom:24px;width:50px;height:50px;border-radius:50%;border:0;background:var(--accent);color:#14211f;font-size:1.3rem;font-weight:800;cursor:pointer;box-shadow:0 16px 36px rgba(0,0,0,.45);opacity:0;visibility:hidden;transform:translateY(16px);transition:.3s cubic-bezier(.22,1,.36,1);z-index:60;display:grid;place-items:center}
.totop.show{opacity:1;visibility:visible;transform:translateY(0)}
.totop:hover{filter:brightness(1.1);transform:translateY(-4px);box-shadow:0 22px 44px rgba(255,153,67,.35)}
.totop:focus-visible{outline:3px solid var(--text);outline-offset:3px}
.progress{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,var(--accent),var(--brand));width:0;z-index:50;transition:width .1s linear}
.foot{text-align:center;color:var(--muted);font-size:.84rem;padding:0 24px 70px}
@media(prefers-reduced-motion:reduce){.totop{transition:none}}
</style>
</head>
<body>
<div class="progress" id="progress"></div>
<header class="hero">
  <span class="kicker">Utilities</span>
  <h1>Keep scrolling…</h1>
  <p class="lead">This demo page is intentionally tall so you can watch the floating button appear, track your scroll progress and glide you back to the top.</p>
</header>
<main class="blocks" id="content"></main>
<p class="foot">The button fades in past 400px and hides again near the top.</p>
<button class="totop" id="totop" aria-label="Back to top">↑</button>
<script>
var content = document.getElementById('content');
var titles = ['Blazing fast', 'Zero dependencies', 'Dark by default', 'Fully accessible', 'Responsive layouts', 'Easy to theme'];
var bodies = [
  'Every component ships as plain HTML, CSS and vanilla JS — nothing to compile, nothing to download from a CDN.',
  'No frameworks, no build step. Copy a file, open it in the browser and it works, even offline.',
  'The deep teal palette with an orange accent is baked into CSS variables you can override in one line.',
  'Buttons, tabs and toggles carry proper ARIA roles, focus rings and reduced-motion fallbacks.',
  'Grid and flex layouts collapse gracefully down to 320px without horizontal scrolling.',
  'Swap the tokens in :root and the whole component — hover states, shadows and borders — follows along.'
];
for (var i = 0; i < titles.length; i++) {
  var b = document.createElement('article');
  b.className = 'block';
  b.innerHTML = '<span class="num">' + (i + 1) + '</span><h2>' + titles[i] + '</h2><p>' + bodies[i] + '</p><div class="chips"><span class="chip">Section ' + (i + 1) + '</span><span class="chip">Scroll me</span></div>';
  content.appendChild(b);
}
var btn = document.getElementById('totop');
var bar = document.getElementById('progress');
function onScroll() {
  var y = window.scrollY || document.documentElement.scrollTop;
  btn.classList.toggle('show', y > 400);
  var h = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
btn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>
</body>
</html>`
      },
      {
        id: "marquee",
        name: "Marquee",
        desc: "Infinite scrolling ticker with pause on hover.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Marquee — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(760px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 0 30px;box-shadow:0 24px 60px rgba(0,0,0,.35);overflow:hidden}
.head{padding:0 30px;text-align:center;margin-bottom:24px}
.kicker{font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
h2{font-size:1.35rem;letter-spacing:-.02em;margin-top:7px}
.sub{color:var(--muted);font-size:.9rem;margin-top:7px}
.ticker{position:relative;overflow:hidden;padding:14px 0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.ticker + .ticker{margin-top:6px}
.ticker.alt .track{animation-duration:34s;animation-direction:reverse}
.track{display:flex;width:max-content;gap:0;animation:scroll 28s linear infinite}
.ticker:hover .track,.ticker:focus-within .track{animation-play-state:paused}
.item{display:flex;align-items:center;gap:10px;padding:0 24px;font-size:.95rem;font-weight:700;color:var(--muted);white-space:nowrap}
.item .emoji{font-size:1.15rem}
.item .dot{width:6px;height:6px;border-radius:50%;background:rgba(255,153,67,.5)}
.item.hl{color:var(--accent)}
.badge{font-size:.7rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;background:rgba(255,153,67,.16);color:var(--accent);border:1px solid rgba(255,153,67,.35);padding:3px 9px;border-radius:999px}
.note{padding:22px 30px 0;text-align:center;font-size:.82rem;color:var(--muted)}
.note b{color:var(--accent)}
@keyframes scroll{to{transform:translateX(-50%)}}
@media(prefers-reduced-motion:reduce){.track{animation:none}}
</style>
</head>
<body>
<div class="stage">
  <div class="head">
    <span class="kicker">Utilities</span>
    <h2>Marquee ticker</h2>
    <p class="sub">Duplicated content track loops seamlessly — hover to pause either row.</p>
  </div>
  <div class="ticker" tabindex="0" aria-label="Announcements ticker">
    <div class="track">
      <span class="item"><span class="emoji">🚀</span> v2.4 shipped with dark mode</span><span class="dot"></span>
      <span class="item hl"><span class="badge">New</span> Skeleton loaders are live</span><span class="dot"></span>
      <span class="item"><span class="emoji">🎉</span> 10,000 developers joined</span><span class="dot"></span>
      <span class="item"><span class="emoji">📦</span> 60+ components and counting</span><span class="dot"></span>
      <span class="item"><span class="emoji">⚡</span> Zero dependencies, pure CSS</span><span class="dot"></span>
      <span class="item"><span class="emoji">🚀</span> v2.4 shipped with dark mode</span><span class="dot"></span>
      <span class="item hl"><span class="badge">New</span> Skeleton loaders are live</span><span class="dot"></span>
      <span class="item"><span class="emoji">🎉</span> 10,000 developers joined</span><span class="dot"></span>
      <span class="item"><span class="emoji">📦</span> 60+ components and counting</span><span class="dot"></span>
      <span class="item"><span class="emoji">⚡</span> Zero dependencies, pure CSS</span><span class="dot"></span>
    </div>
  </div>
  <div class="ticker alt" tabindex="0" aria-label="Tips ticker">
    <div class="track">
      <span class="item"><span class="emoji">💡</span> Tip: override :root tokens to rebrand</span><span class="dot"></span>
      <span class="item"><span class="emoji">🎨</span> Orange accent on deep teal</span><span class="dot"></span>
      <span class="item"><span class="emoji">⌨️</span> Every demo is one HTML file</span><span class="dot"></span>
      <span class="item"><span class="emoji">🌙</span> Designed for dark UIs first</span><span class="dot"></span>
      <span class="item"><span class="emoji">♿</span> ARIA roles on interactive parts</span><span class="dot"></span>
      <span class="item"><span class="emoji">💡</span> Tip: override :root tokens to rebrand</span><span class="dot"></span>
      <span class="item"><span class="emoji">🎨</span> Orange accent on deep teal</span><span class="dot"></span>
      <span class="item"><span class="emoji">⌨️</span> Every demo is one HTML file</span><span class="dot"></span>
      <span class="item"><span class="emoji">🌙</span> Designed for dark UIs first</span><span class="dot"></span>
      <span class="item"><span class="emoji">♿</span> ARIA roles on interactive parts</span><span class="dot"></span>
    </div>
  </div>
  <p class="note">Edge fades use a CSS <b>mask-image</b> gradient · the second row scrolls in reverse.</p>
</div>
</body>
</html>`
      },
      {
        id: "share-buttons",
        name: "Share Buttons",
        desc: "Social share row with icons and hover labels.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Share Buttons — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(560px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:34px 30px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.kicker{font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
h2{font-size:1.35rem;letter-spacing:-.02em;margin-top:8px}
.sub{color:var(--muted);font-size:.9rem;margin-top:8px}
.preview{margin-top:22px;background:var(--panel-2);border:1px dashed var(--line);border-radius:14px;padding:18px 20px;text-align:left}
.thumb{height:96px;border-radius:10px;background:linear-gradient(135deg,rgba(255,153,67,.35),rgba(255,92,92,.3)),radial-gradient(circle at 80% 20%,rgba(62,207,142,.3),transparent 55%);display:grid;place-items:center;font-size:1.6rem;margin-bottom:12px}
.preview h3{font-size:1rem}
.preview p{font-size:.83rem;color:var(--muted);margin-top:4px}
.share{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:24px}
.sbtn{position:relative;display:grid;place-items:center;width:52px;height:52px;border-radius:50%;background:var(--panel-2);border:1px solid var(--line);color:var(--muted);cursor:pointer;transition:.22s}
.sbtn svg{width:20px;height:20px;fill:currentColor}
.sbtn:hover{transform:translateY(-4px);border-color:transparent;color:#fff}
.sbtn.x:hover{background:#000}
.sbtn.fb:hover{background:#1877f2}
.sbtn.li:hover{background:#0a66c2}
.sbtn.wa:hover{background:#25d366;color:#0c2a17}
.sbtn.cp:hover,.sbtn.copied{background:var(--accent);color:#14211f}
.sbtn:focus-visible{outline:3px solid var(--accent);outline-offset:3px}
.tip{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(4px);background:#0a1413;color:var(--text);border:1px solid var(--line);font-size:.7rem;font-weight:700;padding:5px 10px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:.2s}
.sbtn:hover .tip,.sbtn:focus-visible .tip{opacity:1;transform:translateX(-50%) translateY(0)}
.note{margin-top:22px;font-size:.8rem;color:var(--muted)}
.note b{color:var(--ok)}
.toast{position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);background:var(--panel-2);border:1px solid rgba(62,207,142,.5);color:var(--ok);font-size:.85rem;font-weight:700;padding:11px 20px;border-radius:999px;opacity:0;pointer-events:none;transition:.3s;z-index:70;box-shadow:0 14px 34px rgba(0,0,0,.45)}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
</style>
</head>
<body>
<div class="card">
  <span class="kicker">Utilities</span>
  <h2>Share this article</h2>
  <p class="sub">Hover an icon for its label · click copy for instant feedback.</p>
  <div class="preview">
    <div class="thumb">📘</div>
    <h3>Building a design system with plain HTML</h3>
    <p>6 min read · hassy.dev/blog/design-system</p>
  </div>
  <div class="share">
    <a class="sbtn x" href="https://twitter.com/intent/tweet?text=Building%20a%20design%20system%20with%20plain%20HTML" target="_blank" rel="noopener" aria-label="Share on X">
      <span class="tip">Share on X</span>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    </a>
    <a class="sbtn fb" href="https://www.facebook.com/sharer/sharer.php" target="_blank" rel="noopener" aria-label="Share on Facebook">
      <span class="tip">Share on Facebook</span>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 23.977v-8.385H7.078v-3.592h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.972H15.83c-1.491 0-1.956.931-1.956 1.886v2.264h3.328l-.532 3.592h-2.796v8.385C19.612 23.094 24 18.1 24 12.073z"/></svg>
    </a>
    <a class="sbtn li" href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noopener" aria-label="Share on LinkedIn">
      <span class="tip">Share on LinkedIn</span>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
    </a>
    <a class="sbtn wa" href="https://wa.me/?text=Building%20a%20design%20system%20with%20plain%20HTML" target="_blank" rel="noopener" aria-label="Share on WhatsApp">
      <span class="tip">Share on WhatsApp</span>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
    <button class="sbtn cp" id="copyBtn" aria-label="Copy link">
      <span class="tip" id="copyTip">Copy link</span>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3a3 3 0 00-3 3v1H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-1h1a2 2 0 002-2V8a2 2 0 00-2-2h-1V6a3 3 0 00-3-3H9zm0 2h6a1 1 0 011 1v1H8V6a1 1 0 011-1zM5 9h10v10H5V9z"/></svg>
    </button>
  </div>
  <p class="note" id="note">Ready to share — click <b>copy</b> to grab the link.</p>
</div>
<div class="toast" id="toast" role="status">Link copied to clipboard</div>
<script>
var btn = document.getElementById('copyBtn');
var tip = document.getElementById('copyTip');
var toast = document.getElementById('toast');
var note = document.getElementById('note');
btn.addEventListener('click', function () {
  var url = window.location.href;
  function done() {
    btn.classList.add('copied');
    tip.textContent = 'Copied!';
    note.innerHTML = 'Link copied — paste it <b>anywhere</b>.';
    toast.classList.add('show');
    setTimeout(function () {
      btn.classList.remove('copied');
      tip.textContent = 'Copy link';
      toast.classList.remove('show');
    }, 2000);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(done).catch(function () {
      var ta = document.createElement('textarea');
      ta.value = url;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      done();
    });
  } else {
    var ta2 = document.createElement('textarea');
    ta2.value = url;
    ta2.style.position = 'fixed';
    ta2.style.opacity = '0';
    document.body.appendChild(ta2);
    ta2.select();
    document.execCommand('copy');
    document.body.removeChild(ta2);
    done();
  }
});
</script>
</body>
</html>`
      },
      {
        id: "emoji-reactions",
        name: "Emoji Reactions",
        desc: "Reaction bar with counts and a toggled state.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Emoji Reactions — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(540px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.kicker{font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
h2{font-size:1.35rem;letter-spacing:-.02em;margin-top:8px}
.post{margin-top:20px;background:var(--panel-2);border:1px solid var(--line);border-radius:14px;padding:20px}
.post p{font-size:.93rem;color:var(--text)}
.post .meta{display:flex;align-items:center;gap:10px;margin-top:14px;font-size:.78rem;color:var(--muted)}
.who{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--brand));display:grid;place-items:center;font-weight:800;font-size:.7rem;color:#14211f}
.reactions{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}
.rx{display:inline-flex;align-items:center;gap:9px;padding:9px 16px;border-radius:999px;background:var(--panel-2);border:1px solid var(--line);color:var(--muted);font-size:.9rem;font-weight:700;cursor:pointer;transition:.2s}
.rx .em{font-size:1.1rem;line-height:1}
.rx .n{min-width:2ch;text-align:center;font-variant-numeric:tabular-nums}
.rx:hover{border-color:var(--accent);transform:translateY(-3px);box-shadow:0 10px 24px rgba(0,0,0,.35)}
.rx:focus-visible{outline:3px solid var(--accent);outline-offset:3px}
.rx.on{background:rgba(255,153,67,.16);border-color:var(--accent);color:var(--accent)}
.rx.pop{animation:pop .35s cubic-bezier(.22,1,.36,1)}
@keyframes pop{0%{transform:scale(1)}40%{transform:scale(1.22)}100%{transform:scale(1)}}
.hint{margin-top:20px;font-size:.8rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
@media(prefers-reduced-motion:reduce){.rx{transition:none}.rx.pop{animation:none}}
</style>
</head>
<body>
<div class="card">
  <span class="kicker">Utilities</span>
  <h2>How did this post land?</h2>
  <div class="post">
    <p>Shipped the new loader pack today — spinners, skeletons, dots and a radial progress ring. All pure CSS, all under 4KB. Would love your reactions! 🔥</p>
    <div class="meta"><span class="who">JR</span> Jules R. · 2h ago · 1.2k views</div>
  </div>
  <div class="reactions" role="group" aria-label="Reactions">
    <button class="rx" aria-pressed="false"><span class="em">🔥</span><span class="n">128</span></button>
    <button class="rx" aria-pressed="false"><span class="em">👏</span><span class="n">64</span></button>
    <button class="rx" aria-pressed="false"><span class="em">❤️</span><span class="n">42</span></button>
    <button class="rx" aria-pressed="false"><span class="em">🎉</span><span class="n">31</span></button>
    <button class="rx" aria-pressed="false"><span class="em">🤔</span><span class="n">7</span></button>
  </div>
  <p class="hint">Click a reaction to <b>toggle</b> it — selected pills glow orange.</p>
</div>
<script>
var btns = document.querySelectorAll('.rx');
btns.forEach(function (b) {
  b.addEventListener('click', function () {
    var count = b.querySelector('.n');
    var n = parseInt(count.textContent, 10);
    var on = b.classList.toggle('on');
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    count.textContent = String(on ? n + 1 : n - 1);
    b.classList.remove('pop');
    void b.offsetWidth;
    b.classList.add('pop');
  });
});
</script>
</body>
</html>`
      },
      {
        id: "chat-bubble",
        name: "Chat Bubbles",
        desc: "Conversation bubbles for both sides with avatars and time.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Chat Bubbles — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.chat{width:min(520px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.chead{display:flex;align-items:center;gap:12px;padding:16px 20px;background:rgba(0,0,0,.18);border-bottom:1px solid var(--line)}
.ava{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:.85rem;color:#14211f;flex:0 0 40px}
.ava.a{background:linear-gradient(135deg,#ffb46e,var(--accent))}
.ava.b{background:linear-gradient(135deg,#8ee6c1,var(--ok))}
.chead b{display:block;font-size:.95rem}
.chead span{font-size:.76rem;color:var(--ok)}
.msgs{padding:22px 20px;display:grid;gap:16px;background:radial-gradient(circle at 15% 10%,rgba(255,153,67,.05),transparent 45%)}
.msg{display:flex;gap:10px;align-items:flex-end;max-width:86%}
.msg.out{margin-left:auto;flex-direction:row-reverse}
.ava.sm{width:30px;height:30px;font-size:.68rem;flex:0 0 30px}
.bubble{padding:12px 16px;border-radius:16px 16px 16px 4px;background:var(--panel-2);border:1px solid var(--line);font-size:.92rem}
.msg.out .bubble{background:linear-gradient(135deg,var(--accent),#ff8a3d);color:#14211f;font-weight:600;border-color:transparent;border-radius:16px 16px 4px 16px;box-shadow:0 8px 20px rgba(255,153,67,.25)}
.stamp{font-size:.67rem;color:var(--muted);margin-top:6px;display:flex;gap:6px;align-items:center}
.msg.out .stamp{justify-content:flex-end}
.stamp .ok{color:var(--ok);font-weight:800}
.day{justify-self:center;font-size:.7rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);background:rgba(0,0,0,.25);border:1px solid var(--line);padding:4px 12px;border-radius:999px}
.typing{display:flex;gap:5px;padding:14px 16px;border-radius:16px 16px 16px 4px;background:var(--panel-2);border:1px solid var(--line)}
.typing i{width:7px;height:7px;border-radius:50%;background:var(--muted);animation:blink 1.2s ease-in-out infinite}
.typing i:nth-child(2){animation-delay:.18s}
.typing i:nth-child(3){animation-delay:.36s}
@keyframes blink{0%,60%,100%{transform:translateY(0);opacity:.4}30%{transform:translateY(-5px);opacity:1}}
@media(prefers-reduced-motion:reduce){.typing i{animation:none;opacity:.7}}
</style>
</head>
<body>
<div class="chat">
  <div class="chead">
    <span class="ava a">AM</span>
    <div><b>Alex Morgan</b><span>● Online</span></div>
  </div>
  <div class="msgs">
    <span class="day">Today</span>
    <div class="msg">
      <span class="ava sm a">AM</span>
      <div class="stack">
        <div class="bubble">Hey! Did you get a chance to review the mockups?</div>
        <div class="stamp">10:12 AM</div>
      </div>
    </div>
    <div class="msg out">
      <span class="ava sm b">ME</span>
      <div class="stack">
        <div class="bubble">Yes — the new dashboard looks great 🔥 Shipping feedback now.</div>
        <div class="stamp">10:14 AM <span class="ok">✓✓</span></div>
      </div>
    </div>
    <div class="msg">
      <span class="ava sm a">AM</span>
      <div class="stack">
        <div class="bubble">Awesome. I will prep the release notes for Friday then.</div>
        <div class="stamp">10:15 AM</div>
      </div>
    </div>
    <div class="msg out">
      <span class="ava sm b">ME</span>
      <div class="stack">
        <div class="bubble">Perfect, thanks! Ping me if anything blocks you.</div>
        <div class="stamp">10:16 AM <span class="ok">✓✓</span></div>
      </div>
    </div>
    <div class="msg">
      <span class="ava sm a">AM</span>
      <div class="typing" aria-label="Alex is typing"><i></i><i></i><i></i></div>
    </div>
  </div>
</div>
</body>
</html>`
      },
      {
        id: "comment",
        name: "Comment",
        desc: "Comment item with avatar, timestamp and reply/like actions.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Comment — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.wrap{width:min(560px,100%);display:grid;gap:16px}
.head{text-align:center}
.kicker{font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
h2{font-size:1.35rem;letter-spacing:-.02em;margin-top:8px}
.cmt{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:20px 22px;box-shadow:0 18px 46px rgba(0,0,0,.3);transition:.22s}
.cmt:hover{border-color:rgba(255,153,67,.35)}
.top{display:flex;gap:13px;align-items:flex-start}
.ava{width:42px;height:42px;border-radius:50%;flex:0 0 42px;display:grid;place-items:center;font-weight:800;font-size:.85rem;color:#14211f}
.ava.maya{background:linear-gradient(135deg,#ffb46e,var(--accent))}
.ava.tom{background:linear-gradient(135deg,#8ee6c1,var(--ok))}
.body{flex:1;min-width:0}
.who{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.who b{font-size:.95rem}
.tag{font-size:.62rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;background:rgba(62,207,142,.15);color:var(--ok);border:1px solid rgba(62,207,142,.35);padding:2px 8px;border-radius:999px}
.time{font-size:.76rem;color:var(--muted)}
.text{font-size:.93rem;color:#d5e2e2;margin-top:7px}
.text .mention{color:var(--accent);font-weight:700}
.acts{display:flex;gap:6px;margin-top:13px;flex-wrap:wrap}
.act{display:inline-flex;align-items:center;gap:7px;background:transparent;border:1px solid transparent;border-radius:10px;padding:8px 13px;color:var(--muted);font-size:.83rem;font-weight:700;cursor:pointer;transition:.18s}
.act:hover{background:rgba(255,255,255,.07);color:var(--text)}
.act:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.act .heart{font-size:.95rem;line-height:1}
.act.like{color:var(--brand)}
.act.like .n{color:var(--brand);font-variant-numeric:tabular-nums}
.act.like:not(.on){color:var(--muted)}
.act.like:not(.on) .n{color:var(--muted)}
.reply{margin:16px 0 0 54px;background:var(--panel-2);border:1px solid var(--line);border-radius:14px;padding:16px 18px}
.reply .ava{width:34px;height:34px;flex:0 0 34px;font-size:.72rem}
.reply .text{font-size:.88rem}
.composer{display:flex;gap:10px;align-items:center;background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:12px 14px}
.composer input{flex:1;background:rgba(0,0,0,.28);border:1px solid var(--line);border-radius:11px;padding:11px 14px;color:var(--text);font-size:.9rem;outline:none;transition:.2s}
.composer input:focus{border-color:var(--accent)}
.composer input::placeholder{color:#7d9191}
.send{border:0;background:var(--accent);color:#14211f;font-weight:800;padding:11px 18px;border-radius:11px;cursor:pointer;transition:.2s}
.send:hover{filter:brightness(1.08)}
@media(prefers-reduced-motion:reduce){.act,.cmt{transition:none}}
</style>
</head>
<body>
<div class="wrap">
  <div class="head">
    <span class="kicker">Utilities</span>
    <h2>Comments</h2>
  </div>
  <article class="cmt">
    <div class="top">
      <span class="ava maya">MK</span>
      <div class="body">
        <div class="who"><b>Maya Kaur</b><span class="tag">Author</span><span class="time">· 2 hours ago</span></div>
        <p class="text">This loader pack saved us an entire sprint. The shimmer skeleton in particular looks identical to what the big platforms ship. <span class="mention">@design-team</span> should adopt it everywhere.</p>
        <div class="acts">
          <button class="act like on" aria-pressed="true"><span class="heart">♥</span> Like <span class="n">24</span></button>
          <button class="act">↩ Reply</button>
          <button class="act">↗ Share</button>
          <button class="act">⋯ More</button>
        </div>
      </div>
    </div>
    <div class="reply">
      <div class="top">
        <span class="ava tom">TR</span>
        <div class="body">
          <div class="who"><b>Tom Reyes</b><span class="time">· 47 minutes ago</span></div>
          <p class="text">Agreed — copied it straight into our staging app. Zero tweaks needed.</p>
          <div class="acts">
            <button class="act like" aria-pressed="false"><span class="heart">♡</span> Like <span class="n">6</span></button>
            <button class="act">↩ Reply</button>
          </div>
        </div>
      </div>
    </div>
  </article>
  <form class="composer" onsubmit="return false">
    <input type="text" placeholder="Add a comment…" aria-label="Add a comment">
    <button class="send" type="submit">Post</button>
  </form>
</div>
<script>
document.querySelectorAll('.act.like').forEach(function (b) {
  b.addEventListener('click', function () {
    var on = b.classList.toggle('on');
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    var n = b.querySelector('.n');
    var count = parseInt(n.textContent, 10);
    n.textContent = String(on ? count + 1 : count - 1);
    b.querySelector('.heart').textContent = on ? '♥' : '♡';
  });
});
</script>
</body>
</html>`
      },
      {
        id: "mini-calendar",
        name: "Mini Calendar",
        desc: "Compact month grid with today and selected day highlights.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mini Calendar — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.cal{width:min(360px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:24px 22px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.kicker{font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);text-align:center}
.month{display:flex;align-items:center;justify-content:space-between;margin-top:10px;margin-bottom:16px}
.month h2{font-size:1.15rem;letter-spacing:-.02em}
.nav{display:flex;gap:6px}
.nav button{width:34px;height:34px;border-radius:10px;background:var(--panel-2);border:1px solid var(--line);color:var(--muted);cursor:pointer;font-size:.9rem;transition:.18s}
.nav button:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}
.nav button:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.dow,.days{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center}
.dow span{font-size:.66rem;font-weight:800;letter-spacing:.08em;color:var(--muted);padding:6px 0;text-transform:uppercase}
.days{margin-top:4px}
.day{position:relative;height:40px;border-radius:11px;background:var(--panel-2);border:1px solid var(--line);color:var(--text);font-size:.86rem;cursor:pointer;transition:.16s;display:grid;place-items:center}
.day:hover{border-color:var(--accent);transform:translateY(-2px)}
.day:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.day.empty{background:transparent;border-color:transparent;cursor:default;pointer-events:none}
.day.today::after{content:"";position:absolute;bottom:5px;left:50%;transform:translateX(-50%);width:5px;height:5px;border-radius:50%;background:var(--brand)}
.day.sel{background:var(--accent);border-color:var(--accent);color:#14211f;font-weight:800;box-shadow:0 8px 20px rgba(255,153,67,.35)}
.day.sel.today::after{background:#14211f}
.legend{display:flex;justify-content:space-between;align-items:center;margin-top:16px;padding-top:14px;border-top:1px solid var(--line);font-size:.78rem;color:var(--muted)}
.legend .sel-out{color:var(--accent);font-weight:800}
.dotkey{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--brand);margin-right:6px}
@media(prefers-reduced-motion:reduce){.day,.nav button{transition:none}}
</style>
</head>
<body>
<div class="cal">
  <p class="kicker">September 2026</p>
  <div class="month">
    <h2 id="monthLabel">Sep 2026</h2>
    <div class="nav">
      <button aria-label="Previous month">‹</button>
      <button aria-label="Next month">›</button>
    </div>
  </div>
  <div class="dow" aria-hidden="true"><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span></div>
  <div class="days" id="days" role="grid" aria-label="September 2026"></div>
  <div class="legend">
    <span><span class="dotkey"></span>Today · 24th</span>
    <span>Selected: <span class="sel-out" id="selOut">24 Sep</span></span>
  </div>
</div>
<script>
var days = document.getElementById('days');
var selOut = document.getElementById('selOut');
var TODAY = 24;
var INITIAL_SEL = 12;
for (var i = 0; i < 1; i++) {
  var e = document.createElement('button');
  e.className = 'day empty';
  e.innerHTML = '&nbsp;';
  e.disabled = true;
  days.appendChild(e);
}
for (var d = 1; d <= 30; d++) {
  var b = document.createElement('button');
  b.className = 'day';
  b.textContent = String(d);
  b.setAttribute('role', 'gridcell');
  b.setAttribute('aria-label', d + ' September 2026');
  if (d === TODAY) b.classList.add('today');
  if (d === INITIAL_SEL) b.classList.add('sel');
  days.appendChild(b);
}
selOut.textContent = INITIAL_SEL + ' Sep';
days.addEventListener('click', function (e) {
  var btn = e.target.closest('.day');
  if (!btn || btn.classList.contains('empty')) return;
  var prev = days.querySelector('.day.sel');
  if (prev) prev.classList.remove('sel');
  btn.classList.add('sel');
  selOut.textContent = parseInt(btn.textContent, 10) + ' Sep';
});
</script>
</body>
</html>`
      },
      {
        id: "digital-clock",
        name: "Digital Clock",
        desc: "Live digital clock with date, updating every second.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Digital Clock — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.clock{width:min(460px,100%);background:var(--panel);border:1px solid var(--line);border-radius:20px;padding:40px 34px;text-align:center;box-shadow:0 28px 70px rgba(0,0,0,.4);position:relative;overflow:hidden}
.clock::before{content:"";position:absolute;top:-80px;left:50%;width:280px;height:280px;margin-left:-140px;background:radial-gradient(circle,rgba(255,153,67,.16),transparent 70%);pointer-events:none}
.kicker{font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);position:relative}
.time{position:relative;font-size:clamp(2.8rem,12vw,4.2rem);font-weight:800;letter-spacing:-.04em;font-variant-numeric:tabular-nums;margin-top:16px;text-shadow:0 0 40px rgba(255,153,67,.25)}
.time .sec{color:var(--accent);font-size:.55em;font-weight:700}
.date{position:relative;font-size:1rem;color:var(--muted);margin-top:6px}
.meta{position:relative;display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:22px}
.pill{font-size:.74rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;background:rgba(255,153,67,.14);color:var(--accent);border:1px solid rgba(255,153,67,.3);padding:6px 13px;border-radius:999px}
.pill.ghost{background:rgba(255,255,255,.05);color:var(--muted);border-color:var(--line)}
.pill .live{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--ok);margin-right:7px;animation:pulse 1s ease-in-out infinite;vertical-align:1px}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
@media(prefers-reduced-motion:reduce){.pill .live{animation:none}}
</style>
</head>
<body>
<div class="clock">
  <p class="kicker">Local time</p>
  <div class="time" id="time" aria-live="off">00:00<span class="sec">:00</span></div>
  <p class="date" id="date">Loading date…</p>
  <div class="meta">
    <span class="pill"><span class="live"></span>Live</span>
    <span class="pill ghost" id="tz">Zone</span>
    <span class="pill ghost">24-hour</span>
  </div>
</div>
<script>
var timeEl = document.getElementById('time');
var dateEl = document.getElementById('date');
var tzEl = document.getElementById('tz');
function tick() {
  var now = new Date();
  var t = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  var parts = t.split(':');
  timeEl.innerHTML = parts[0] + ':' + parts[1] + '<span class="sec">:' + parts[2] + '</span>';
  dateEl.textContent = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
try {
  var zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  tzEl.textContent = zone ? zone.split('_').join(' ') : 'Local';
} catch (err) {
  tzEl.textContent = 'Local';
}
tick();
setInterval(tick, 1000);
</script>
</body>
</html>`
      },
      {
        id: "theme-switch",
        name: "Theme Switch",
        desc: "Dark/light toggle that actually restyles the demo.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Theme Switch — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5;transition:background .4s ease,color .4s ease}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
body.light{--bg:#f4f6f5;--panel:#ffffff;--panel-2:#eef1f0;--line:rgba(16,42,40,.14);--text:#10231f;--muted:#5c7573}
.card{width:min(520px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:30px;box-shadow:0 24px 60px rgba(0,0,0,.25);transition:background .4s ease,border-color .4s ease,box-shadow .4s ease}
body.light .card{box-shadow:0 20px 50px rgba(16,42,40,.12)}
.row{display:flex;align-items:center;justify-content:space-between;gap:16px}
.kicker{font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
h2{font-size:1.3rem;letter-spacing:-.02em;margin-top:7px}
.sub{color:var(--muted);font-size:.88rem;margin-top:6px}
.switch{position:relative;width:64px;height:34px;flex:0 0 64px}
.switch input{position:absolute;opacity:0;width:100%;height:100%;margin:0;cursor:pointer;z-index:2}
.track{position:absolute;inset:0;border-radius:999px;background:var(--panel-2);border:1px solid var(--line);transition:.3s}
.thumb{position:absolute;top:3px;left:3px;width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,var(--accent),#ff7a3d);transition:.3s cubic-bezier(.22,1,.36,1);display:grid;place-items:center;font-size:.8rem;box-shadow:0 4px 12px rgba(0,0,0,.3)}
.switch input:checked ~ .track{background:rgba(255,153,67,.2);border-color:rgba(255,153,67,.55)}
.switch input:checked ~ .thumb{transform:translateX(30px)}
.switch input:focus-visible ~ .track{outline:3px solid var(--accent);outline-offset:3px}
.sample{margin-top:24px;background:var(--panel-2);border:1px solid var(--line);border-radius:14px;padding:20px;transition:background .4s ease,border-color .4s ease}
.sample h3{font-size:1rem}
.sample p{font-size:.87rem;color:var(--muted);margin-top:7px}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:16px}
.stat{background:var(--panel);border:1px solid var(--line);border-radius:11px;padding:12px 10px;text-align:center;transition:background .4s ease,border-color .4s ease}
.stat b{display:block;font-size:1.15rem;color:var(--accent)}
.stat span{font-size:.68rem;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
.actions{display:flex;gap:10px;margin-top:20px;flex-wrap:wrap}
.btn{border:0;border-radius:11px;padding:12px 22px;font-weight:800;font-size:.9rem;cursor:pointer;transition:.2s}
.btn.primary{background:var(--accent);color:#14211f;box-shadow:0 10px 26px rgba(255,153,67,.3)}
.btn.primary:hover{filter:brightness(1.08);transform:translateY(-2px)}
.btn.ghost{background:transparent;border:1px solid var(--line);color:var(--muted)}
.btn.ghost:hover{color:var(--text);border-color:var(--accent)}
.hint{margin-top:18px;font-size:.78rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="card">
  <div class="row">
    <div>
      <span class="kicker">Utilities</span>
      <h2>Appearance</h2>
      <p class="sub">Flip the switch — every token below re-renders live.</p>
    </div>
    <label class="switch">
      <input type="checkbox" id="themeToggle" aria-label="Toggle light theme">
      <span class="track"></span>
      <span class="thumb" id="thumb">🌙</span>
    </label>
  </div>
  <div class="sample">
    <h3>Weekly report</h3>
    <p>Tokens such as panel, line and text are CSS variables — the theme swap costs a single class on the body element.</p>
    <div class="stats">
      <div class="stat"><b>8.4k</b><span>Sessions</span></div>
      <div class="stat"><b>3.2%</b><span>CTR</span></div>
      <div class="stat"><b>$918</b><span>Revenue</span></div>
    </div>
  </div>
  <div class="actions">
    <button class="btn primary">Export CSV</button>
    <button class="btn ghost">View details</button>
  </div>
  <p class="hint">Current theme: <b id="modeLabel">Dark</b> — try light mode.</p>
</div>
<script>
var toggle = document.getElementById('themeToggle');
var thumb = document.getElementById('thumb');
var label = document.getElementById('modeLabel');
toggle.addEventListener('change', function () {
  var light = toggle.checked;
  document.body.classList.toggle('light', light);
  thumb.textContent = light ? '☀️' : '🌙';
  label.textContent = light ? 'Light' : 'Dark';
});
</script>
</body>
</html>`
      },
      {
        id: "scroll-hint",
        name: "Scroll Hint",
        desc: "Animated scroll-down indicator with a mouse glyph.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Scroll Hint — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(520px,100%);background:var(--panel);border:1px solid var(--line);border-radius:20px;padding:56px 34px 48px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35);position:relative;overflow:hidden}
.stage::before{content:"";position:absolute;top:-100px;left:50%;width:320px;height:320px;margin-left:-160px;background:radial-gradient(circle,rgba(255,153,67,.14),transparent 70%);pointer-events:none}
.kicker{font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);position:relative}
h1{font-size:clamp(1.6rem,6vw,2.2rem);letter-spacing:-.03em;margin-top:14px;position:relative}
.lead{color:var(--muted);font-size:.94rem;margin-top:12px;max-width:36ch;margin-left:auto;margin-right:auto;position:relative}
.hint{display:flex;flex-direction:column;align-items:center;gap:16px;margin-top:44px;position:relative}
.mouse{width:32px;height:52px;border:2.5px solid var(--muted);border-radius:18px;position:relative;transition:.3s}
.mouse:hover{border-color:var(--accent)}
.wheel{position:absolute;top:9px;left:50%;margin-left:-2.5px;width:5px;height:10px;border-radius:4px;background:var(--accent);animation:wheel 1.8s ease-in-out infinite}
.chev{color:var(--muted);font-size:1rem;animation:bounce 1.8s ease-in-out infinite}
.label{font-size:.74rem;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:var(--muted);animation:fade 1.8s ease-in-out infinite}
@keyframes wheel{0%{transform:translateY(0);opacity:1}70%{transform:translateY(20px);opacity:0}100%{transform:translateY(0);opacity:0}}
@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
@keyframes fade{0%,100%{opacity:.5}50%{opacity:1}}
.footer{margin-top:40px;padding-top:20px;border-top:1px solid var(--line);font-size:.8rem;color:var(--muted);position:relative}
.footer b{color:var(--accent)}
@media(prefers-reduced-motion:reduce){.wheel,.chev,.label{animation:none}.wheel{top:18px}}
</style>
</head>
<body>
<div class="stage">
  <span class="kicker">Utilities</span>
  <h1>Welcome aboard</h1>
  <p class="lead">A quiet cue that tells visitors there is more below the fold — no arrows, no clutter.</p>
  <div class="hint">
    <div class="mouse" role="img" aria-label="Scroll down indicator"><span class="wheel"></span></div>
    <span class="chev">⌄</span>
    <span class="label">Scroll down</span>
  </div>
  <p class="footer">Pair it with a <b>hero section</b> and remove it once the user starts scrolling.</p>
</div>
</body>
</html>`
      }
    ]
  });
})();
