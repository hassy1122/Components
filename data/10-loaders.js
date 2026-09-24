/* hasSy Component Library — data: Loaders & Progress
   Every item.code is ONE complete standalone HTML document.
   Paste it into an .html file and open it in a browser. */
(function () {
  var C = (window.COMPONENTS = window.COMPONENTS || []);
  C.push({
    category: "Loaders & Progress",
    items: [
      {
        id: "spinner",
        name: "Spinners",
        desc: "Circular loading spinners — ring, bounce and pulse variants.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Spinners — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:34px 28px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.head{text-align:center;margin-bottom:28px}
.kicker{font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
h2{font-size:1.35rem;letter-spacing:-.02em;margin-top:7px}
.sub{color:var(--muted);font-size:.9rem;margin-top:7px}
.row{display:flex;justify-content:center;gap:22px;flex-wrap:wrap}
.cell{display:flex;flex-direction:column;align-items:center;gap:16px;background:var(--panel-2);border:1px solid var(--line);border-radius:14px;padding:24px 26px;min-width:136px;transition:.25s}
.cell:hover{border-color:rgba(255,153,67,.45);transform:translateY(-4px);box-shadow:0 16px 34px rgba(0,0,0,.35)}
.cap{font-size:.7rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.ring{display:block;width:44px;height:44px;border-radius:50%;border:3.5px solid rgba(255,255,255,.1);border-top-color:var(--accent);border-right-color:var(--accent);animation:spin .9s linear infinite}
.bounce{display:flex;gap:7px}
.bounce i{width:11px;height:11px;border-radius:50%;background:var(--accent);animation:bounce .95s ease-in-out infinite}
.bounce i:nth-child(2){background:var(--brand);animation-delay:.15s}
.bounce i:nth-child(3){background:var(--ok);animation-delay:.3s}
.pulse{display:block;width:44px;height:44px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ffc078,var(--accent));animation:pulse 1.3s ease-in-out infinite;box-shadow:0 0 26px rgba(255,153,67,.35)}
.sep{height:1px;background:var(--line);margin:28px 0 24px}
.foot{display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:11px;border:0;cursor:pointer;background:var(--accent);color:#14211f;font-weight:700;padding:13px 24px;border-radius:11px;font-size:.92rem;transition:.22s;box-shadow:0 10px 24px rgba(255,153,67,.28)}
.btn:hover{filter:brightness(1.08);transform:translateY(-2px)}
.btn:active{transform:translateY(0)}
.mini{display:block;width:16px;height:16px;border-radius:50%;border:2.5px solid rgba(20,33,31,.3);border-top-color:#14211f;animation:spin .8s linear infinite}
.hint{margin-top:24px;text-align:center;font-size:.82rem;color:var(--muted)}
.hint b{color:var(--accent)}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes bounce{0%,80%,100%{transform:translateY(0);opacity:.5}40%{transform:translateY(-9px);opacity:1}}
@keyframes pulse{0%,100%{transform:scale(.82);opacity:.6}50%{transform:scale(1);opacity:1}}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
</style>
</head>
<body>
<div class="stage">
  <div class="head">
    <span class="kicker">Loaders</span>
    <h2>Spinners</h2>
    <p class="sub">Three pure-CSS variants — ring, bounce and pulse.</p>
  </div>
  <div class="row">
    <div class="cell"><span class="ring" role="status" aria-label="Loading"></span><span class="cap">Ring</span></div>
    <div class="cell"><span class="bounce" role="status" aria-label="Loading"><i></i><i></i><i></i></span><span class="cap">Bounce</span></div>
    <div class="cell"><span class="pulse" role="status" aria-label="Loading"></span><span class="cap">Pulse</span></div>
  </div>
  <div class="sep"></div>
  <div class="foot">
    <button class="btn"><span class="mini" aria-hidden="true"></span> Saving changes</button>
    <span class="cap">Inline in a button</span>
  </div>
  <p class="hint">Hover a card for a subtle lift — animations honor <b>prefers-reduced-motion</b>.</p>
</div>
</body>
</html>`
      },
      {
        id: "skeleton",
        name: "Skeleton",
        desc: "Shimmer skeleton placeholders for a card and a list.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Skeleton — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 28px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.head{text-align:center;margin-bottom:26px}
.kicker{font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
h2{font-size:1.35rem;letter-spacing:-.02em;margin-top:7px}
.sub{color:var(--muted);font-size:.9rem;margin-top:7px}
.grid{display:grid;grid-template-columns:1.15fr 1fr;gap:18px}
@media(max-width:640px){.grid{grid-template-columns:1fr}}
.col{display:grid;gap:11px;align-content:start}
.cap{font-size:.7rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);padding-left:2px}
.sk-card{background:var(--panel-2);border:1px solid var(--line);border-radius:14px;padding:16px}
.sk{position:relative;overflow:hidden;background:rgba(255,255,255,.06);border-radius:8px}
.sk::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 25%,rgba(255,255,255,.1) 50%,transparent 75%);transform:translateX(-100%);animation:shimmer 1.5s infinite}
.sk-cover{height:104px;border-radius:10px;margin-bottom:15px}
.sk-line{height:11px;margin-bottom:9px}
.w80{width:80%}
.w60{width:60%}
.w45{width:45%}
.sk-meta{display:flex;align-items:center;gap:11px;margin-top:15px}
.sk-ava{width:34px;height:34px;border-radius:50%;flex:0 0 34px}
.sk-lines{flex:1;display:grid;gap:7px}
.list{background:var(--panel-2);border:1px solid var(--line);border-radius:14px;padding:16px;display:grid;gap:16px;align-content:start}
.lrow{display:flex;gap:12px;align-items:center}
.lrow .sk-ava{flex:0 0 38px;width:38px;height:38px}
.lrow .lines{flex:1;display:grid;gap:8px}
.note{margin-top:22px;text-align:center;font-size:.82rem;color:var(--muted)}
.note b{color:var(--accent)}
@keyframes shimmer{to{transform:translateX(100%)}}
@media(prefers-reduced-motion:reduce){.sk::after{animation:none;opacity:.4}}
</style>
</head>
<body>
<div class="stage">
  <div class="head">
    <span class="kicker">Loaders</span>
    <h2>Skeleton placeholders</h2>
    <p class="sub">A shimmer sweep over a content card and a three-row list.</p>
  </div>
  <div class="grid">
    <div class="col">
      <span class="cap">Card skeleton</span>
      <div class="sk-card" aria-busy="true" aria-label="Loading card">
        <div class="sk sk-cover"></div>
        <div class="sk sk-line"></div>
        <div class="sk sk-line w80"></div>
        <div class="sk sk-line w60"></div>
        <div class="sk-meta">
          <div class="sk sk-ava"></div>
          <div class="sk-lines">
            <div class="sk sk-line w45" style="margin:0"></div>
            <div class="sk sk-line w60" style="margin:0;height:9px"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <span class="cap">List skeleton</span>
      <div class="list" aria-busy="true" aria-label="Loading list">
        <div class="lrow"><div class="sk sk-ava"></div><div class="lines"><div class="sk sk-line" style="margin:0"></div><div class="sk sk-line w60" style="margin:0;height:9px"></div></div></div>
        <div class="lrow"><div class="sk sk-ava"></div><div class="lines"><div class="sk sk-line w80" style="margin:0"></div><div class="sk sk-line w45" style="margin:0;height:9px"></div></div></div>
        <div class="lrow"><div class="sk sk-ava"></div><div class="lines"><div class="sk sk-line w60" style="margin:0"></div><div class="sk sk-line w80" style="margin:0;height:9px"></div></div></div>
      </div>
    </div>
  </div>
  <p class="note">Swap the <b>.sk</b> blocks for real content when your data arrives.</p>
</div>
</body>
</html>`
      },
      {
        id: "loading-dots",
        name: "Loading Dots",
        desc: "Bouncing dots indicator with staggered delays.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Loading Dots — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 28px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.head{text-align:center;margin-bottom:26px}
.kicker{font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
h2{font-size:1.35rem;letter-spacing:-.02em;margin-top:7px}
.sub{color:var(--muted);font-size:.9rem;margin-top:7px}
.stack{display:grid;gap:14px}
.demo{background:var(--panel-2);border:1px solid var(--line);border-radius:14px;padding:20px 22px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;transition:.22s}
.demo:hover{border-color:rgba(255,153,67,.4)}
.cap{font-size:.7rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.dots{display:inline-flex;gap:6px;align-items:center;vertical-align:middle}
.dots i{width:8px;height:8px;border-radius:50%;background:var(--accent);animation:jump .9s ease-in-out infinite}
.dots i:nth-child(2){animation-delay:.15s;opacity:.7}
.dots i:nth-child(3){animation-delay:.3s;opacity:.45}
.inline{display:flex;align-items:center;gap:11px;font-size:.95rem;font-weight:600}
.pill{display:inline-flex;align-items:center;gap:13px;background:rgba(0,0,0,.28);border:1px solid var(--line);border-radius:999px;padding:13px 22px;box-shadow:inset 0 1px 0 rgba(255,255,255,.04)}
.pill span{font-size:.86rem;color:var(--muted);font-weight:600}
.dots.lg i{width:12px;height:12px;background:var(--brand)}
.btn{display:inline-flex;align-items:center;gap:12px;border:0;cursor:pointer;background:transparent;color:var(--text);border:1px solid var(--line);padding:12px 20px;border-radius:11px;font-size:.88rem;font-weight:700;transition:.22s}
.btn:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}
.note{margin-top:22px;text-align:center;font-size:.82rem;color:var(--muted)}
.note b{color:var(--accent)}
@keyframes jump{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-7px)}}
@media(prefers-reduced-motion:reduce){.dots i{animation:none;opacity:.85}}
</style>
</head>
<body>
<div class="stage">
  <div class="head">
    <span class="kicker">Loaders</span>
    <h2>Loading Dots</h2>
    <p class="sub">Staggered bounce delays make three dots feel alive.</p>
  </div>
  <div class="stack">
    <div class="demo">
      <span class="cap">Inline with text</span>
      <span class="inline">Fetching your conversations <span class="dots" role="status" aria-label="Loading"><i></i><i></i><i></i></span></span>
    </div>
    <div class="demo">
      <span class="cap">Standalone</span>
      <span class="pill"><span class="dots" role="status" aria-label="Loading"><i></i><i></i><i></i></span><span>Please wait…</span></span>
    </div>
    <div class="demo">
      <span class="cap">Large variant</span>
      <button class="btn">Connecting <span class="dots lg" role="status" aria-label="Loading"><i></i><i></i><i></i></span></button>
    </div>
  </div>
  <p class="note">Each dot delays <b>150ms</b> after the previous one.</p>
</div>
</body>
</html>`
      },
      {
        id: "typing-indicator",
        name: "Typing Indicator",
        desc: "Chat-style typing bubble with animated dots.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Typing Indicator — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.chat{width:min(480px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;box-shadow:0 24px 60px rgba(0,0,0,.35);overflow:hidden}
.chead{display:flex;align-items:center;gap:12px;padding:18px 20px;border-bottom:1px solid var(--line);background:rgba(0,0,0,.15)}
.ava{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--brand));display:grid;place-items:center;font-weight:800;font-size:.9rem;color:#14211f;flex:0 0 40px}
.chead b{display:block;font-size:.95rem}
.online{display:flex;align-items:center;gap:6px;font-size:.76rem;color:var(--ok)}
.online i{width:7px;height:7px;border-radius:50%;background:var(--ok);box-shadow:0 0 8px rgba(62,207,142,.8);display:inline-block}
.msgs{padding:20px;display:grid;gap:16px}
.msg{display:flex;gap:10px;align-items:flex-end}
.ava.sm{width:30px;height:30px;font-size:.7rem;flex:0 0 30px}
.stack{display:grid;gap:5px;max-width:80%}
.name{font-size:.7rem;font-weight:800;color:var(--muted);letter-spacing:.04em}
.bubble{background:var(--panel-2);border:1px solid var(--line);padding:12px 15px;border-radius:16px 16px 16px 5px;font-size:.92rem}
.time{font-size:.67rem;color:var(--muted)}
.typing .bubble{display:flex;gap:6px;align-items:center;padding:16px 17px}
.tdot{width:8px;height:8px;border-radius:50%;background:var(--muted);animation:tdot 1.25s ease-in-out infinite}
.tdot:nth-child(2){animation-delay:.18s}
.tdot:nth-child(3){animation-delay:.36s}
.status{font-size:.78rem;color:var(--muted);font-style:italic;padding-left:40px}
.inputbar{display:flex;gap:10px;padding:14px 16px;border-top:1px solid var(--line);background:rgba(0,0,0,.15)}
.fake-input{flex:1;background:rgba(0,0,0,.3);border:1px solid var(--line);border-radius:11px;padding:11px 14px;color:var(--muted);font-size:.88rem}
.send{width:42px;height:42px;border:0;border-radius:11px;background:var(--accent);color:#14211f;font-size:1rem;cursor:pointer;transition:.2s}
.send:hover{filter:brightness(1.08);transform:translateY(-2px)}
@keyframes tdot{0%,60%,100%{transform:translateY(0);opacity:.4}30%{transform:translateY(-5px);opacity:1}}
@media(prefers-reduced-motion:reduce){.tdot{animation:none;opacity:.7}}
</style>
</head>
<body>
<div class="chat">
  <div class="chead">
    <span class="ava">AM</span>
    <div><b>Alex Morgan</b><span class="online"><i></i> Online now</span></div>
  </div>
  <div class="msgs">
    <div class="msg">
      <span class="ava sm">AM</span>
      <div class="stack">
        <span class="name">ALEX</span>
        <div class="bubble">Hey! Did you see the new component showcase? The loaders section looks so smooth. ✨</div>
        <span class="time">10:14</span>
      </div>
    </div>
    <div class="msg typing">
      <span class="ava sm">AM</span>
      <div class="stack">
        <div class="bubble" role="status" aria-label="Alex is typing"><span class="tdot"></span><span class="tdot"></span><span class="tdot"></span></div>
      </div>
    </div>
    <p class="status">Alex is typing…</p>
  </div>
  <div class="inputbar">
    <div class="fake-input">Type a message…</div>
    <button class="send" aria-label="Send message">➤</button>
  </div>
</div>
</body>
</html>`
      },
      {
        id: "radial-progress",
        name: "Radial Progress",
        desc: "SVG circular progress ring with percentage labels.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Radial Progress — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:34px 28px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.head{text-align:center;margin-bottom:30px}
.kicker{font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
h2{font-size:1.35rem;letter-spacing:-.02em;margin-top:7px}
.sub{color:var(--muted);font-size:.9rem;margin-top:7px}
.row{display:flex;justify-content:center;gap:30px;flex-wrap:wrap}
.cell{display:flex;flex-direction:column;align-items:center;gap:14px;background:var(--panel-2);border:1px solid var(--line);border-radius:14px;padding:24px 26px;min-width:150px;transition:.25s}
.cell:hover{border-color:rgba(255,153,67,.45);transform:translateY(-4px);box-shadow:0 16px 34px rgba(0,0,0,.35)}
.ring{position:relative;width:120px;height:120px}
svg{width:120px;height:120px;display:block}
svg circle{fill:none;stroke-width:9;stroke-linecap:round;transform:rotate(-90deg);transform-origin:50% 50%}
.track{stroke:rgba(255,255,255,.08)}
.val{stroke-dasharray:264;stroke-dashoffset:264;stroke:var(--accent)}
.val.a{animation:fill25 1.2s cubic-bezier(.22,1,.36,1) forwards}
.val.b{stroke:var(--brand);animation:fill60 1.2s cubic-bezier(.22,1,.36,1) .15s forwards}
.val.c{stroke:var(--ok);animation:fill90 1.2s cubic-bezier(.22,1,.36,1) .3s forwards}
.pct{position:absolute;inset:0;display:grid;place-items:center;font-weight:800;font-size:1.3rem;letter-spacing:-.02em}
.cap{font-size:.72rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.meta{font-size:.78rem;color:var(--muted);text-align:center}
.meta b{color:var(--text)}
.note{margin-top:26px;text-align:center;font-size:.82rem;color:var(--muted)}
.note b{color:var(--accent)}
@keyframes fill25{to{stroke-dashoffset:198}}
@keyframes fill60{to{stroke-dashoffset:106}}
@keyframes fill90{to{stroke-dashoffset:26}}
@media(prefers-reduced-motion:reduce){.val{animation-duration:.01ms!important}}
</style>
</head>
<body>
<div class="stage">
  <div class="head">
    <span class="kicker">Loaders</span>
    <h2>Radial progress</h2>
    <p class="sub">SVG stroke-dasharray rings that draw themselves on load.</p>
  </div>
  <div class="row">
    <div class="cell">
      <div class="ring">
        <svg viewBox="0 0 100 100" role="img" aria-label="25 percent">
          <circle class="track" cx="50" cy="50" r="42"></circle>
          <circle class="val a" cx="50" cy="50" r="42"></circle>
        </svg>
        <span class="pct">25%</span>
      </div>
      <span class="cap">Storage</span>
      <span class="meta">5 GB of <b>20 GB</b> used</span>
    </div>
    <div class="cell">
      <div class="ring">
        <svg viewBox="0 0 100 100" role="img" aria-label="60 percent">
          <circle class="track" cx="50" cy="50" r="42"></circle>
          <circle class="val b" cx="50" cy="50" r="42"></circle>
        </svg>
        <span class="pct">60%</span>
      </div>
      <span class="cap">Course</span>
      <span class="meta">12 of <b>20 lessons</b></span>
    </div>
    <div class="cell">
      <div class="ring">
        <svg viewBox="0 0 100 100" role="img" aria-label="90 percent">
          <circle class="track" cx="50" cy="50" r="42"></circle>
          <circle class="val c" cx="50" cy="50" r="42"></circle>
        </svg>
        <span class="pct">90%</span>
      </div>
      <span class="cap">Uptime</span>
      <span class="meta">Last <b>30 days</b></span>
    </div>
  </div>
  <p class="note">Circumference is <b>264</b> — offset equals 264 minus your percentage.</p>
</div>
</body>
</html>`
      },
      {
        id: "top-progress-bar",
        name: "Top Progress Bar",
        desc: "Thin animated progress bar pinned to the top of the page.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Top Progress Bar — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ff9f43;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.bar{position:fixed;top:0;left:0;height:4px;width:0;z-index:99;background:linear-gradient(90deg,var(--accent),var(--brand),var(--accent));background-size:200% 100%;box-shadow:0 0 14px rgba(255,153,67,.75);transition:width .35s ease,opacity .5s ease;animation:sweep 1.1s linear infinite}
@keyframes sweep{to{background-position:200% 0}}
.wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:40px 26px}
.card{width:min(560px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:36px 32px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35);position:relative;overflow:hidden}
.card::before{content:"";position:absolute;top:-70px;left:50%;width:240px;height:240px;margin-left:-120px;background:radial-gradient(circle,rgba(255,153,67,.18),transparent 70%);pointer-events:none}
.kicker{font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
h2{font-size:1.4rem;letter-spacing:-.02em;margin-top:8px;position:relative}
.sub{color:var(--muted);font-size:.92rem;margin-top:8px;position:relative}
.meter{margin:26px auto 6px;max-width:380px;height:10px;border-radius:999px;background:rgba(0,0,0,.35);border:1px solid var(--line);overflow:hidden;position:relative}
.meter i{display:block;height:100%;width:0;border-radius:999px;background:linear-gradient(90deg,var(--accent),var(--brand));transition:width .35s ease;box-shadow:0 0 12px rgba(255,153,67,.5)}
.status{font-size:.88rem;color:var(--muted);font-variant-numeric:tabular-nums;position:relative}
.status.done{color:var(--ok);font-weight:700}
.btn{margin-top:24px;border:0;cursor:pointer;background:var(--accent);color:#14211f;font-weight:700;padding:13px 26px;border-radius:11px;font-size:.92rem;transition:.22s;box-shadow:0 12px 28px rgba(255,153,67,.3);position:relative}
.btn:hover{filter:brightness(1.08);transform:translateY(-2px)}
.btn:active{transform:translateY(0)}
.hint{margin-top:18px;font-size:.8rem;color:var(--muted);position:relative}
.hint b{color:var(--accent)}
@media(prefers-reduced-motion:reduce){.bar{animation:none}}
</style>
</head>
<body>
<div class="bar" id="bar" role="progressbar" aria-label="Page load progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div>
<div class="wrap">
  <div class="card">
    <span class="kicker">Loaders</span>
    <h2>Top progress bar</h2>
    <p class="sub">A 4px bar pinned to the very top edge, driven by one width transition.</p>
    <div class="meter"><i id="meter"></i></div>
    <p class="status" id="status" aria-live="polite">Preparing… 0%</p>
    <button class="btn" id="reload">⟳ Reload demo</button>
    <p class="hint">Runs automatically on load — click <b>Reload</b> to see it again.</p>
  </div>
</div>
<script>
var bar = document.getElementById('bar');
var meter = document.getElementById('meter');
var status = document.getElementById('status');
var timer;
function load() {
  clearInterval(timer);
  var w = 0;
  bar.style.opacity = '1';
  bar.style.width = '0%';
  meter.style.width = '0%';
  status.className = 'status';
  status.textContent = 'Preparing… 0%';
  bar.setAttribute('aria-valuenow', '0');
  bar.offsetWidth;
  timer = setInterval(function () {
    w = w + Math.random() * 16 + 8;
    if (w >= 90) {
      clearInterval(timer);
      bar.style.width = '100%';
      meter.style.width = '100%';
      status.textContent = 'Complete — 100%';
      status.className = 'status done';
      bar.setAttribute('aria-valuenow', '100');
      setTimeout(function () { bar.style.opacity = '0'; }, 750);
      return;
    }
    bar.style.width = w + '%';
    meter.style.width = w + '%';
    var n = Math.floor(w);
    status.textContent = 'Loading… ' + n + '%';
    bar.setAttribute('aria-valuenow', String(n));
  }, 170);
}
document.getElementById('reload').addEventListener('click', load);
window.addEventListener('load', load);
</script>
</body>
</html>`
      }
    ]
  });
})();
