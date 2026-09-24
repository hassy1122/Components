/* hasSy Component Library — data: Forms & Inputs
   Every item.code is ONE complete standalone HTML document.
   Paste it into an .html file and open it in a browser. */
(function () {
  var C = (window.COMPONENTS = window.COMPONENTS || []);
  C.push({
    category: "Forms & Inputs",
    items: [
      {
        id: "text-input",
        name: "Text Input",
        desc: "Labeled text field with focus ring and error helper state.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Text Input — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:24px;max-width:52ch}
.field{display:grid;gap:7px;margin-bottom:18px}
.field:last-of-type{margin-bottom:0}
.field label{font-size:.8rem;font-weight:800;letter-spacing:.04em;color:var(--muted)}
.field input{width:100%;background:rgba(0,0,0,.25);border:1.5px solid var(--line);border-radius:12px;padding:13px 15px;color:var(--text);font-size:.95rem;outline:none;transition:border-color .2s,box-shadow .2s,background .2s}
.field input::placeholder{color:#6f8585}
.field input:hover{border-color:rgba(255,255,255,.22)}
.field input:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(255, 165, 0,.16);background:rgba(0,0,0,.35)}
.field.bad input{border-color:var(--err)}
.field.bad input:focus{box-shadow:0 0 0 4px rgba(255,107,107,.18)}
.field.bad label{color:var(--err)}
.help{font-size:.78rem;color:var(--muted)}
.field.bad .help{color:var(--err)}
.field.ok .help{color:var(--ok)}
.hint{margin-top:22px;font-size:.8rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Text field</span>
  <h1>Labels, focus ring, helper text</h1>
  <p class="lede">Every field is wired with a real label, aria-describedby helpers and a soft accent ring on focus. The second field shows the error treatment.</p>
  <div class="field ok">
    <label for="ws">Workspace name</label>
    <input id="ws" type="text" value="Aurora Labs" placeholder="e.g. Aurora Labs" aria-describedby="wsHelp">
    <p class="help" id="wsHelp">✓ Available — this name is free to use.</p>
  </div>
  <div class="field bad">
    <label for="api">API key</label>
    <input id="api" type="text" value="sk_live_51H" aria-invalid="true" aria-describedby="apiHelp" placeholder="Paste your key">
    <p class="help" id="apiHelp">⚠ Keys must be at least 24 characters long.</p>
  </div>
  <p class="hint">Click into a field to see the <b>focus ring</b> · the red field keeps aria-invalid for screen readers.</p>
</div>
</body>
</html>`
      },
      {
        id: "floating-label",
        name: "Floating Label",
        desc: "Label that floats up on focus or when the field has a value.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Floating Label — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:24px;max-width:52ch}
.float{position:relative;margin-bottom:16px}
.float input{width:100%;background:rgba(0,0,0,.25);border:1.5px solid var(--line);border-radius:12px;padding:24px 15px 9px;color:var(--text);font-size:.98rem;outline:none;transition:border-color .2s,box-shadow .2s,background .2s}
.float input::placeholder{color:transparent}
.float label{position:absolute;left:15px;top:50%;transform:translateY(-50%);color:var(--muted);pointer-events:none;transition:.2s cubic-bezier(.22,1,.36,1);font-size:.95rem}
.float input:hover{border-color:rgba(255,255,255,.22)}
.float input:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(255, 165, 0,.16);background:rgba(0,0,0,.35)}
.float input:focus + label,.float input:not(:placeholder-shown) + label{top:11px;transform:none;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;font-weight:800;color:var(--accent)}
.hint{margin-top:6px;font-size:.8rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Floating label</span>
  <h1>One field, two positions</h1>
  <p class="lede">Pure CSS: the label rides at the center while the field is empty, then shrinks to a caption on focus or whenever a value is present.</p>
  <div class="float">
    <input id="f1" type="email" placeholder=" " value="ada@lovelace.dev">
    <label for="f1">Email address</label>
  </div>
  <div class="float">
    <input id="f2" type="text" placeholder=" ">
    <label for="f2">Full name</label>
  </div>
  <div class="float">
    <input id="f3" type="password" placeholder=" " value="secret123">
    <label for="f3">Password</label>
  </div>
  <p class="hint">First field starts floated because it has a value · clear it to watch the label drop back down.</p>
</div>
</body>
</html>`
      },
      {
        id: "textarea",
        name: "Textarea",
        desc: "Resizable textarea with a live character counter (JS).",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Textarea — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:22px;max-width:52ch}
.lrow{display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin-bottom:7px}
.lrow label{font-size:.8rem;font-weight:800;letter-spacing:.04em;color:var(--muted)}
.cnt{font-size:.78rem;font-weight:800;color:var(--muted);font-variant-numeric:tabular-nums;transition:color .2s}
.cnt.near{color:var(--err)}
textarea{width:100%;background:rgba(0,0,0,.25);border:1.5px solid var(--line);border-radius:12px;padding:14px 15px;color:var(--text);font-size:.95rem;outline:none;resize:vertical;min-height:130px;max-height:260px;line-height:1.6;transition:border-color .2s,box-shadow .2s,background .2s}
textarea::placeholder{color:#6f8585}
textarea:hover{border-color:rgba(255,255,255,.22)}
textarea:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(255, 165, 0,.16);background:rgba(0,0,0,.35)}
.help{margin-top:8px;font-size:.78rem;color:var(--muted)}
.hint{margin-top:20px;font-size:.8rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Multiline</span>
  <h1>Textarea with live counter</h1>
  <p class="lede">Resizable by the corner grip, capped at 200 characters with a counter that turns red as you approach the limit.</p>
  <div class="lrow">
    <label for="msg">Release notes</label>
    <span class="cnt" id="cnt">0 / 200</span>
  </div>
  <textarea id="msg" maxlength="200" rows="5" placeholder="Describe what changed in this release..."></textarea>
  <p class="help">Markdown supported · mention issue numbers with #123.</p>
  <p class="hint">Type away — the <b>counter</b> updates on every input event.</p>
</div>
<script>
var ta = document.getElementById('msg');
var cnt = document.getElementById('cnt');
function upd() {
  cnt.textContent = ta.value.length + ' / 200';
  cnt.classList.toggle('near', ta.value.length > 180);
}
ta.addEventListener('input', upd);
upd();
</script>
</body>
</html>`
      }
      ,
      {
        id: "select",
        name: "Select",
        desc: "Styled native select dropdown with custom chevron.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Select — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:24px;max-width:52ch}
.field{display:grid;gap:7px;margin-bottom:18px}
.field label{font-size:.8rem;font-weight:800;letter-spacing:.04em;color:var(--muted)}
.sel{position:relative}
.sel select{width:100%;appearance:none;-webkit-appearance:none;background:rgba(0,0,0,.25);border:1.5px solid var(--line);border-radius:12px;padding:13px 44px 13px 15px;color:var(--text);font-size:.95rem;outline:none;cursor:pointer;transition:border-color .2s,box-shadow .2s,background .2s}
.sel select:hover{border-color:rgba(255,255,255,.22)}
.sel select:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(255, 165, 0,.16);background:rgba(0,0,0,.35)}
.sel::after{content:"";position:absolute;right:18px;top:50%;width:9px;height:9px;border-right:2.5px solid var(--accent);border-bottom:2.5px solid var(--accent);transform:translateY(-70%) rotate(45deg);pointer-events:none}
.sel select option{background:#16302f;color:#eef4f4}
.sel select option:disabled{color:#6f8585}
.help{font-size:.78rem;color:var(--muted)}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.hint{margin-top:20px;font-size:.8rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
@media(max-width:560px){.grid2{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Native select</span>
  <h1>Dropdown, our theme applied</h1>
  <p class="lede">A real select element with the default arrow stripped and a CSS chevron drawn on top — keyboard, touch and screen readers all keep working.</p>
  <div class="field">
    <label for="region">Deploy region</label>
    <div class="sel">
      <select id="region">
        <option>Europe (Frankfurt)</option>
        <option>US East (Virginia)</option>
        <option>Asia Pacific (Singapore)</option>
        <option disabled>South America (São Paulo) — full</option>
      </select>
    </div>
    <p class="help">Closest region keeps latency under 30 ms.</p>
  </div>
  <div class="grid2">
    <div class="field">
      <label for="plan">Plan</label>
      <div class="sel">
        <select id="plan">
          <option>Starter — free</option>
          <option selected>Pro — $29 / mo</option>
          <option>Scale — $99 / mo</option>
        </select>
      </div>
    </div>
    <div class="field">
      <label for="freq">Billing frequency</label>
      <div class="sel">
        <select id="freq">
          <option>Monthly</option>
          <option>Yearly (save 20%)</option>
        </select>
      </div>
    </div>
  </div>
  <p class="hint">Use <b>Tab</b> then the arrow keys — no custom JS required.</p>
</div>
</body>
</html>`
      },
      {
        id: "custom-select",
        name: "Custom Select",
        desc: "Accessible listbox-style dropdown with keyboard support.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Custom Select — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:46px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:24px;max-width:52ch}
.lbl{display:block;font-size:.8rem;font-weight:800;letter-spacing:.04em;color:var(--muted);margin-bottom:7px}
.csel{position:relative;max-width:380px}
.ctrig{width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;background:rgba(0,0,0,.25);border:1.5px solid var(--line);border-radius:12px;padding:13px 15px;color:var(--text);font-size:.95rem;cursor:pointer;text-align:left;transition:border-color .2s,box-shadow .2s,background .2s}
.ctrig:hover{border-color:rgba(255,255,255,.22)}
.ctrig:focus-visible{outline:none;border-color:var(--accent);box-shadow:0 0 0 4px rgba(255, 165, 0,.16)}
.ctrig .cval{color:#6f8585}
.ctrig .cval.set{color:var(--text);font-weight:600}
.cchev{color:var(--accent);font-size:.75rem;transition:transform .25s}
.ctrig[aria-expanded="true"] .cchev{transform:rotate(180deg)}
.clist{position:absolute;top:calc(100% + 8px);left:0;right:0;background:var(--panel-2);border:1px solid var(--line);border-radius:13px;padding:7px;list-style:none;margin:0;box-shadow:0 22px 48px rgba(0,0,0,.5);opacity:0;visibility:hidden;transform:translateY(8px);transition:.2s cubic-bezier(.22,1,.36,1);z-index:30}
.clist.open{opacity:1;visibility:visible;transform:none}
.clist li{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 13px;border-radius:9px;font-size:.9rem;cursor:pointer;transition:background .15s,color .15s;outline:none}
.clist li:hover,.clist li:focus{background:rgba(255,255,255,.08);color:var(--text)}
.clist li i{font-style:normal;font-size:.75rem;color:var(--muted)}
.clist li[data-sel]{background:rgba(255, 165, 0,.16);color:var(--accent);font-weight:700}
.clist li[data-sel]::after{content:"✓";font-weight:800}
.clist li[data-sel] i{display:none}
.help{margin-top:12px;font-size:.78rem;color:var(--muted)}
.hint{margin-top:22px;font-size:.8rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Listbox</span>
  <h1>Custom select, full keyboard</h1>
  <p class="lede">A button paired with a role=listbox — click to open, arrows to move, Enter to choose, Escape to dismiss and return focus.</p>
  <span class="lbl" id="fwLabel">Framework</span>
  <div class="csel">
    <button type="button" class="ctrig" id="ctrig" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="fwLabel cval">
      <span class="cval" id="cval">Choose an option</span><span class="cchev">▼</span>
    </button>
    <ul class="clist" id="clist" role="listbox" aria-labelledby="fwLabel">
      <li role="option" tabindex="-1" data-v="Vanilla JS" aria-selected="false">Vanilla JS <i>0 deps</i></li>
      <li role="option" tabindex="-1" data-v="Preact" aria-selected="false">Preact <i>3 KB</i></li>
      <li role="option" tabindex="-1" data-v="Svelte" aria-selected="false">Svelte <i>compiled</i></li>
      <li role="option" tabindex="-1" data-v="Solid" aria-selected="false">Solid <i>fine-grained</i></li>
      <li role="option" tabindex="-1" data-v="Vue" aria-selected="false">Vue <i>progressive</i></li>
    </ul>
  </div>
  <p class="help">Pick the stack that ships smallest for your bundle budget.</p>
  <p class="hint">Try <b>Arrow keys</b>, <b>Enter</b> and <b>Escape</b> after opening the menu.</p>
</div>
<script>
var trig = document.getElementById('ctrig');
var list = document.getElementById('clist');
var val = document.getElementById('cval');
var opts = Array.prototype.slice.call(list.querySelectorAll('[role="option"]'));
function isOpen() { return list.classList.contains('open'); }
function open() {
  list.classList.add('open');
  trig.setAttribute('aria-expanded', 'true');
  var cur = opts.filter(function (o) { return o.hasAttribute('data-sel'); })[0] || opts[0];
  cur.focus();
}
function close(back) {
  list.classList.remove('open');
  trig.setAttribute('aria-expanded', 'false');
  if (back) trig.focus();
}
function choose(o) {
  opts.forEach(function (x) {
    x.removeAttribute('data-sel');
    x.setAttribute('aria-selected', 'false');
  });
  o.setAttribute('data-sel', '');
  o.setAttribute('aria-selected', 'true');
  val.textContent = o.getAttribute('data-v');
  val.classList.add('set');
  close(true);
}
trig.addEventListener('click', function () { isOpen() ? close(true) : open(); });
trig.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); open(); }
});
opts.forEach(function (o, i) {
  o.addEventListener('click', function () { choose(o); });
  o.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); opts[(i + 1) % opts.length].focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); opts[(i - 1 + opts.length) % opts.length].focus(); }
    if (e.key === 'Home') { e.preventDefault(); opts[0].focus(); }
    if (e.key === 'End') { e.preventDefault(); opts[opts.length - 1].focus(); }
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(o); }
    if (e.key === 'Escape') { e.preventDefault(); close(true); }
    if (e.key === 'Tab') close(false);
  });
});
document.addEventListener('click', function (e) {
  if (!list.contains(e.target) && !trig.contains(e.target)) close(false);
});
</script>
</body>
</html>`
      },
      {
        id: "radio-group",
        name: "Radio Group",
        desc: "Card-style radio options with a selected highlight.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Radio Group — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:22px;max-width:52ch}
fieldset{border:0}
legend{font-size:.8rem;font-weight:800;letter-spacing:.04em;color:var(--muted);margin-bottom:12px;padding:0}
.opts{display:grid;gap:12px}
.opt{position:relative;display:flex;gap:14px;align-items:flex-start;background:rgba(0,0,0,.2);border:1.5px solid var(--line);border-radius:14px;padding:16px 18px;cursor:pointer;transition:border-color .2s,background .2s,box-shadow .2s,transform .18s}
.opt:hover{border-color:rgba(255, 165, 0,.5);transform:translateY(-1px)}
.opt:has(input:checked){border-color:var(--accent);background:rgba(255, 165, 0,.1);box-shadow:0 0 0 4px rgba(255, 165, 0,.12)}
.opt input{position:absolute;opacity:0;pointer-events:none}
.mark{flex:0 0 auto;width:21px;height:21px;border-radius:50%;border:2px solid var(--muted);display:grid;place-items:center;transition:.2s;margin-top:2px}
.opt input:checked + .mark{border-color:var(--accent)}
.opt input:checked + .mark::after{content:"";width:11px;height:11px;border-radius:50%;background:var(--accent);animation:pop .25s cubic-bezier(.22,1.7,.36,1)}
.opt input:focus-visible + .mark{box-shadow:0 0 0 4px rgba(255, 165, 0,.35)}
@keyframes pop{from{transform:scale(0)}to{transform:scale(1)}}
.otxt b{display:block;font-size:.95rem;margin-bottom:3px}
.otxt span{font-size:.82rem;color:var(--muted)}
.price{margin-left:auto;font-weight:800;font-size:.95rem;color:var(--accent);white-space:nowrap}
.hint{margin-top:20px;font-size:.8rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Radio cards</span>
  <h1>Pick one plan</h1>
  <p class="lede">Real radio inputs stay in the tab order and arrow-key group; the card chrome reacts through :has(:checked) with a glowing accent ring.</p>
  <fieldset>
    <legend>Choose a billing plan</legend>
    <div class="opts">
      <label class="opt">
        <input type="radio" name="plan" value="starter">
        <span class="mark"></span>
        <span class="otxt"><b>Starter</b><span>1 project, community support</span></span>
        <span class="price">$0</span>
      </label>
      <label class="opt">
        <input type="radio" name="plan" value="pro" checked>
        <span class="mark"></span>
        <span class="otxt"><b>Pro</b><span>Unlimited projects, priority email</span></span>
        <span class="price">$29</span>
      </label>
      <label class="opt">
        <input type="radio" name="plan" value="scale">
        <span class="mark"></span>
        <span class="otxt"><b>Scale</b><span>SSO, audit logs, 24/7 chat</span></span>
        <span class="price">$99</span>
      </label>
    </div>
  </fieldset>
  <p class="hint">Arrow keys move within the group · <b>Space</b> selects the focused card.</p>
</div>
</body>
</html>`
      }
      ,
      {
        id: "checkbox-group",
        name: "Checkbox Group",
        desc: "Custom checkbox list with select-all control.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Checkbox Group — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:22px;max-width:52ch}
.cb{appearance:none;-webkit-appearance:none;width:20px;height:20px;border:2px solid var(--muted);border-radius:6px;cursor:pointer;position:relative;transition:background .15s,border-color .15s,box-shadow .15s;flex:0 0 auto;margin:0}
.cb:hover{border-color:var(--accent)}
.cb:checked{background:var(--accent);border-color:var(--accent)}
.cb:checked::after{content:"";position:absolute;left:5.5px;top:1.5px;width:5px;height:10px;border:solid #14211f;border-width:0 2.5px 2.5px 0;transform:rotate(45deg)}
.cb:indeterminate{background:var(--accent);border-color:var(--accent)}
.cb:indeterminate::after{content:"";position:absolute;left:3px;top:7px;width:10px;height:2.5px;background:#14211f;border-radius:2px}
.cb:focus-visible{outline:none;box-shadow:0 0 0 4px rgba(255, 165, 0,.3)}
.master{display:flex;align-items:center;gap:12px;padding:14px 16px;background:rgba(0,0,0,.25);border:1px solid var(--line);border-radius:12px;margin-bottom:12px;cursor:pointer}
.master span{font-weight:800;font-size:.92rem}
.items{display:grid;gap:8px;list-style:none}
.item{display:flex;align-items:center;gap:12px;padding:13px 16px;background:rgba(0,0,0,.15);border:1px solid transparent;border-radius:12px;cursor:pointer;transition:background .18s,border-color .18s,transform .18s}
.item:hover{background:rgba(255,255,255,.05);transform:translateX(3px)}
.item:has(.cb:checked){border-color:rgba(255, 165, 0,.35);background:rgba(255, 165, 0,.08)}
.item .meta{display:flex;flex-direction:column}
.item .meta b{font-size:.9rem}
.item .meta span{font-size:.76rem;color:var(--muted)}
.tagdot{margin-left:auto;font-size:.7rem;font-weight:800;padding:4px 10px;border-radius:999px;background:rgba(255,255,255,.07);color:var(--muted)}
.count{margin-top:16px;font-size:.8rem;color:var(--muted)}
.count b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Multi select</span>
  <h1>Checkboxes with select-all</h1>
  <p class="lede">The master box drives every item and reflects partial state with an indeterminate dash — click children to see it flip automatically.</p>
  <label class="master"><input type="checkbox" class="cb" id="all" checked><span>Select all channels</span></label>
  <ul class="items" id="items">
    <li><label class="item"><input type="checkbox" class="cb" checked><span class="meta"><b>Email digests</b><span>Weekly summary of activity</span></span><span class="tagdot">Primary</span></label></li>
    <li><label class="item"><input type="checkbox" class="cb" checked><span class="meta"><b>Push notifications</b><span>Mentions and direct replies</span></span><span class="tagdot">Mobile</span></label></li>
    <li><label class="item"><input type="checkbox" class="cb" checked><span class="meta"><b>Slack alerts</b><span>Post to #team-updates</span></span><span class="tagdot">Workspace</span></label></li>
    <li><label class="item"><input type="checkbox" class="cb"><span class="meta"><b>SMS fallback</b><span>Only for critical incidents</span></span><span class="tagdot">Urgent</span></label></li>
    <li><label class="item"><input type="checkbox" class="cb"><span class="meta"><b>Product news</b><span>Changelog and feature drops</span></span><span class="tagdot">Monthly</span></label></li>
  </ul>
  <p class="count" id="count"><b>3</b> of 5 selected</p>
</div>
<script>
var all = document.getElementById('all');
var boxes = Array.prototype.slice.call(document.querySelectorAll('.item .cb'));
var count = document.getElementById('count');
function update() {
  var n = boxes.filter(function (b) { return b.checked; }).length;
  all.checked = n === boxes.length;
  all.indeterminate = n > 0 && n < boxes.length;
  count.innerHTML = '<b>' + n + '</b> of ' + boxes.length + ' selected';
}
all.addEventListener('change', function () {
  boxes.forEach(function (b) { b.checked = all.checked; });
  update();
});
boxes.forEach(function (b) { b.addEventListener('change', update); });
update();
</script>
</body>
</html>`
      },
      {
        id: "toggle-switch",
        name: "Toggle Switch",
        desc: "iOS-style switch with label and on/off states.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Toggle Switch — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:22px;max-width:52ch}
.rows{display:grid;gap:12px}
.sw{display:flex;align-items:center;gap:14px;background:rgba(0,0,0,.2);border:1px solid var(--line);border-radius:14px;padding:16px 18px;cursor:pointer;transition:border-color .2s,background .2s}
.sw:hover{border-color:rgba(255, 165, 0,.4)}
.sw input{position:absolute;opacity:0;pointer-events:none}
.track{flex:0 0 auto;width:50px;height:29px;border-radius:999px;background:rgba(255,255,255,.14);position:relative;transition:background .25s,box-shadow .25s;order:2;margin-left:auto}
.knob{position:absolute;top:3px;left:3px;width:23px;height:23px;border-radius:50%;background:#fff;box-shadow:0 3px 8px rgba(0,0,0,.35);transition:transform .25s cubic-bezier(.22,1.4,.36,1)}
.sw input:checked + .track{background:var(--ok);box-shadow:0 0 0 4px rgba(62,207,142,.18)}
.sw input:checked + .track .knob{transform:translateX(21px)}
.sw input:focus-visible + .track{box-shadow:0 0 0 4px rgba(255, 165, 0,.4)}
.swtxt{display:flex;flex-direction:column;gap:2px}
.swtxt b{font-size:.95rem}
.swtxt span{font-size:.8rem;color:var(--muted)}
.state{margin-top:18px;display:flex;gap:10px;flex-wrap:wrap}
.chip{font-size:.8rem;font-weight:800;padding:8px 15px;border-radius:999px;background:rgba(0,0,0,.25);border:1px solid var(--line);color:var(--muted);transition:.2s}
.chip.on{border-color:rgba(62,207,142,.5);color:var(--ok);background:rgba(62,207,142,.1)}
.hint{margin-top:20px;font-size:.8rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Switch</span>
  <h1>Native checkbox, styled track</h1>
  <p class="lede">Each row is a real checkbox plus a label — the knob slides with a springy curve and the summary chips below mirror the live state.</p>
  <div class="rows">
    <label class="sw">
      <span class="swtxt"><b>Dark interface</b><span>Dim the UI after sunset</span></span>
      <input type="checkbox" id="s1" checked>
      <span class="track"><span class="knob"></span></span>
    </label>
    <label class="sw">
      <span class="swtxt"><b>Email reports</b><span>Send a digest every Monday</span></span>
      <input type="checkbox" id="s2">
      <span class="track"><span class="knob"></span></span>
    </label>
    <label class="sw">
      <span class="swtxt"><b>Two-factor auth</b><span>Required for all team members</span></span>
      <input type="checkbox" id="s3" checked>
      <span class="track"><span class="knob"></span></span>
    </label>
  </div>
  <div class="state">
    <span class="chip on" id="c1">Dark: on</span>
    <span class="chip" id="c2">Reports: off</span>
    <span class="chip on" id="c3">2FA: on</span>
  </div>
  <p class="hint">Toggle a row — the chip flips between <b>on</b> and <b>off</b> instantly.</p>
</div>
<script>
function wire(id, chipId, name) {
  var input = document.getElementById(id);
  var chip = document.getElementById(chipId);
  input.addEventListener('change', function () {
    chip.textContent = name + ': ' + (input.checked ? 'on' : 'off');
    chip.classList.toggle('on', input.checked);
  });
}
wire('s1', 'c1', 'Dark');
wire('s2', 'c2', 'Reports');
wire('s3', 'c3', '2FA');
</script>
</body>
</html>`
      },
      {
        id: "range-slider",
        name: "Range Slider",
        desc: "Range slider with a live value bubble above the thumb.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Range Slider — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:44px 34px 36px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:38px;max-width:52ch}
.slider{position:relative;padding-top:36px}
.bubble{position:absolute;top:0;transform:translateX(-50%);background:var(--accent);color:#14211f;font-weight:800;font-size:.85rem;padding:5px 12px;border-radius:9px;transition:background .2s;pointer-events:none}
.bubble::after{content:"";position:absolute;left:50%;bottom:-5px;transform:translateX(-50%) rotate(45deg);width:10px;height:10px;background:var(--accent);border-radius:2px}
input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:8px;border-radius:999px;background:rgba(255,255,255,.12);outline:none;cursor:pointer}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:28px;height:28px;border-radius:50%;background:#fff;border:6px solid var(--accent);box-shadow:0 4px 14px rgba(0,0,0,.45);transition:transform .15s}
input[type=range]::-webkit-slider-thumb:hover{transform:scale(1.1)}
input[type=range]::-moz-range-thumb{width:28px;height:28px;border-radius:50%;background:#fff;border:6px solid var(--accent);box-shadow:0 4px 14px rgba(0,0,0,.45)}
input[type=range]::-moz-range-track{height:8px;border-radius:999px;background:transparent}
input[type=range]:focus-visible{box-shadow:none}
input[type=range]:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 5px rgba(255, 165, 0,.35)}
.scale{display:flex;justify-content:space-between;margin-top:12px;font-size:.75rem;color:var(--muted);font-weight:700}
.readout{margin-top:30px;display:flex;align-items:baseline;justify-content:center;gap:10px}
.readout b{font-size:2.4rem;letter-spacing:-.03em;color:var(--accent);font-variant-numeric:tabular-nums}
.readout span{font-size:.85rem;color:var(--muted)}
.hint{margin-top:18px;font-size:.8rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Slider</span>
  <h1>Value bubble follows the thumb</h1>
  <p class="lede">The bubble is positioned with a calc() string derived from the current value, while the track fill is repainted as a live gradient.</p>
  <div class="slider">
    <div class="bubble" id="bubble">64</div>
    <input type="range" id="rng" min="0" max="100" step="1" value="64" aria-label="Team seats">
    <div class="scale"><span>0</span><span>25</span><span>50</span><span>75</span><span>100</span></div>
  </div>
  <div class="readout"><b id="out">64</b><span>seats on the Pro plan</span></div>
  <p class="hint">Drag the thumb with the mouse or use <b>arrow keys</b> once focused.</p>
</div>
<script>
var rng = document.getElementById('rng');
var bubble = document.getElementById('bubble');
var out = document.getElementById('out');
function update() {
  var v = Number(rng.value);
  var mn = Number(rng.min);
  var mx = Number(rng.max);
  var p = (v - mn) / (mx - mn);
  bubble.textContent = v;
  bubble.style.left = 'calc(14px + (100% - 28px) * ' + p + ')';
  rng.style.background = 'linear-gradient(90deg,var(--accent) ' + (p * 100) + '%,rgba(255,255,255,.12) ' + (p * 100) + '%)';
  out.textContent = v;
}
rng.addEventListener('input', update);
update();
</script>
</body>
</html>`
      }
      ,
      {
        id: "file-upload",
        name: "File Upload",
        desc: "Drag-and-drop upload zone that lists chosen file names.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>File Upload — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:22px;max-width:52ch}
.drop{border:2px dashed var(--line);border-radius:16px;background:rgba(0,0,0,.2);padding:34px 20px;text-align:center;cursor:pointer;transition:border-color .2s,background .2s,transform .2s;display:grid;gap:6px;justify-items:center}
.drop:hover{border-color:rgba(255, 165, 0,.5);background:rgba(255, 165, 0,.05)}
.drop.over{border-color:var(--accent);background:rgba(255, 165, 0,.12);transform:scale(1.01)}
.drop:focus-within{border-color:var(--accent);box-shadow:0 0 0 4px rgba(255, 165, 0,.15)}
.drop .ic{width:52px;height:52px;border-radius:50%;background:rgba(255, 165, 0,.15);border:1px solid rgba(255, 165, 0,.35);display:grid;place-items:center;font-size:1.4rem;transition:transform .25s}
.drop.over .ic{transform:translateY(-4px) scale(1.08)}
.drop p{font-size:.95rem;color:var(--muted)}
.drop p b{color:var(--text)}
.drop .link{color:var(--accent);font-weight:800;text-decoration:underline;cursor:pointer}
.drop small{font-size:.76rem;color:#6f8585}
.flist{list-style:none;display:grid;gap:8px;margin-top:16px}
.frow{display:flex;align-items:center;gap:12px;background:rgba(0,0,0,.25);border:1px solid var(--line);border-radius:12px;padding:11px 14px;animation:fade .3s ease}
@keyframes fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.frow .ic{font-size:1rem}
.frow .fname{font-size:.88rem;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.frow .fsize{margin-left:auto;font-size:.76rem;color:var(--muted);white-space:nowrap}
.frow .rm{border:0;background:transparent;color:var(--muted);cursor:pointer;font-size:.95rem;padding:4px 7px;border-radius:7px;transition:.15s}
.frow .rm:hover{color:var(--err);background:rgba(255,107,107,.15)}
.empty{margin-top:16px;font-size:.82rem;color:#6f8585;text-align:center}
.hint{margin-top:14px;font-size:.8rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Upload</span>
  <h1>Drop zone with file list</h1>
  <p class="lede">Drag files onto the card or click to browse — names and sizes appear below. Nothing is uploaded; this demo only reads the File API.</p>
  <div class="drop" id="drop" tabindex="0" role="button" aria-label="Upload files by dropping or pressing Enter">
    <span class="ic" aria-hidden="true">⬆</span>
    <p><b>Drop files here</b> or <label class="link" for="file">browse</label></p>
    <small>PNG, JPG, PDF or ZIP up to 10 MB</small>
    <input type="file" id="file" multiple hidden>
  </div>
  <p class="empty" id="empty">No files chosen yet.</p>
  <ul class="flist" id="flist"></ul>
  <p class="hint">Try dragging an image from your desktop onto the <b>drop zone</b>.</p>
</div>
<script>
var drop = document.getElementById('drop');
var input = document.getElementById('file');
var list = document.getElementById('flist');
var empty = document.getElementById('empty');
var files = [];
function fmt(b) {
  if (b < 1024) return b + ' B';
  if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
  return (b / 1048576).toFixed(1) + ' MB';
}
function render() {
  list.innerHTML = '';
  empty.hidden = files.length > 0;
  files.forEach(function (f, i) {
    var li = document.createElement('li');
    li.className = 'frow';
    var ic = document.createElement('span');
    ic.className = 'ic';
    ic.textContent = '📄';
    var name = document.createElement('span');
    name.className = 'fname';
    name.textContent = f.name;
    var size = document.createElement('span');
    size.className = 'fsize';
    size.textContent = fmt(f.size);
    var rm = document.createElement('button');
    rm.className = 'rm';
    rm.type = 'button';
    rm.setAttribute('aria-label', 'Remove ' + f.name);
    rm.textContent = '✕';
    rm.addEventListener('click', function () { files.splice(i, 1); render(); });
    li.appendChild(ic);
    li.appendChild(name);
    li.appendChild(size);
    li.appendChild(rm);
    list.appendChild(li);
  });
}
function addMany(arr) {
  for (var i = 0; i < arr.length; i++) files.push(arr[i]);
  render();
}
input.addEventListener('change', function () { addMany(input.files); });
drop.addEventListener('click', function (e) {
  if (e.target.tagName !== 'LABEL') input.click();
});
drop.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); }
});
['dragenter', 'dragover'].forEach(function (ev) {
  drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('over'); });
});
['dragleave', 'drop'].forEach(function (ev) {
  drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove('over'); });
});
drop.addEventListener('drop', function (e) {
  if (e.dataTransfer && e.dataTransfer.files) addMany(e.dataTransfer.files);
});
render();
</script>
</body>
</html>`
      },
      {
        id: "search-bar",
        name: "Search Bar",
        desc: "Search field with icon, clear button and a keyboard shortcut hint.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Search Bar — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:38px 30px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;max-width:47ch;margin:0 auto 26px}
.sbar{display:flex;align-items:center;gap:12px;background:rgba(0,0,0,.3);border:1.5px solid var(--line);border-radius:14px;padding:6px 8px 6px 16px;max-width:520px;margin:0 auto;transition:border-color .2s,box-shadow .2s,background .2s}
.sbar:focus-within{border-color:var(--accent);box-shadow:0 0 0 4px rgba(255, 165, 0,.16);background:rgba(0,0,0,.4)}
.sic{display:grid;place-items:center;color:var(--accent);flex:0 0 auto}
.sbar input{flex:1;min-width:0;background:transparent;border:0;outline:none;color:var(--text);font-size:.97rem;padding:11px 0}
.sbar input::placeholder{color:#6f8585}
.sbar input::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none;display:none}
.sx{flex:0 0 auto;width:34px;height:34px;border-radius:9px;border:1px solid var(--line);background:var(--panel-2);color:var(--muted);cursor:pointer;display:grid;place-items:center;transition:.18s;font-size:.85rem}
.sx:hover{border-color:var(--err);color:var(--err);background:rgba(255,107,107,.12)}
.sx:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255, 165, 0,.4)}
kbd{font-family:inherit;font-size:.72rem;font-weight:800;color:var(--muted);background:rgba(255,255,255,.07);border:1px solid var(--line);border-bottom-width:2px;border-radius:7px;padding:5px 9px;white-space:nowrap;flex:0 0 auto}
.tips{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:22px}
.tip{font-size:.78rem;font-weight:700;padding:7px 14px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid var(--line);color:var(--muted)}
.hint{margin-top:20px;font-size:.8rem;color:var(--muted)}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Search</span>
  <h1>Icon, clear, shortcut</h1>
  <p class="lede">A magnifier on the left, a clear button that appears when there is text, and a kbd hint advertising the global shortcut.</p>
  <div class="sbar" id="sbar">
    <span class="sic" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><line x1="16.5" y1="16.5" x2="21" y2="21"></line></svg>
    </span>
    <input type="search" id="q" placeholder="Search components, docs, guides..." aria-label="Search the library" autocomplete="off">
    <button type="button" class="sx" id="sx" aria-label="Clear search" hidden>✕</button>
    <kbd id="kbd">Ctrl K</kbd>
  </div>
  <div class="tips">
    <span class="tip">Buttons</span><span class="tip">Forms</span><span class="tip">Navigation</span><span class="tip">Feedback</span>
  </div>
  <p class="hint">Press <b>Ctrl K</b> (or Cmd K) anywhere to jump into the field.</p>
</div>
<script>
var q = document.getElementById('q');
var sx = document.getElementById('sx');
var kbd = document.getElementById('kbd');
if (navigator.platform && navigator.platform.indexOf('Mac') === 0) kbd.textContent = 'Cmd K';
function sync() { sx.hidden = !q.value; }
q.addEventListener('input', sync);
sx.addEventListener('click', function () { q.value = ''; sync(); q.focus(); });
document.addEventListener('keydown', function (e) {
  if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
    e.preventDefault();
    q.focus();
    q.select();
  }
  if (e.key === 'Escape' && document.activeElement === q && q.value) {
    q.value = '';
    sync();
  }
});
sync();
</script>
</body>
</html>`
      },
      {
        id: "otp-input",
        name: "OTP Input",
        desc: "6-box verification code inputs with auto-advance.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OTP Input — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:38px 30px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;max-width:46ch;margin:0 auto 28px}
.otp{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
.otp input{width:52px;height:60px;text-align:center;font-size:1.5rem;font-weight:800;background:rgba(0,0,0,.3);border:1.5px solid var(--line);border-radius:13px;color:var(--text);outline:none;transition:border-color .18s,box-shadow .18s,background .18s,transform .18s}
.otp input:hover{border-color:rgba(255,255,255,.25)}
.otp input:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(255, 165, 0,.16);background:rgba(0,0,0,.42);transform:translateY(-2px)}
.otp input.filled{border-color:rgba(255, 165, 0,.55);background:rgba(255, 165, 0,.1)}
.status{margin-top:24px;display:inline-flex;gap:9px;align-items:center;background:rgba(0,0,0,.25);border:1px dashed var(--line);border-radius:999px;padding:9px 18px;font-size:.85rem;color:var(--muted);transition:.2s}
.status.ok{color:var(--ok);border-color:rgba(62,207,142,.5)}
.verify{margin-top:22px;border:0;border-radius:12px;background:var(--accent);color:#14211f;font-weight:800;font-size:.92rem;padding:13px 34px;cursor:pointer;transition:.2s;box-shadow:0 12px 26px rgba(255, 165, 0,.3)}
.verify:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-2px)}
.verify:focus-visible{outline:none;box-shadow:0 0 0 4px rgba(255, 165, 0,.4)}
.verify:disabled{opacity:.4;cursor:not-allowed;box-shadow:none}
.hint{margin-top:20px;font-size:.8rem;color:var(--muted)}
.hint b{color:var(--accent)}
@media(max-width:480px){.otp input{width:44px;height:54px;font-size:1.3rem}}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Verification</span>
  <h1>Six digits, one flow</h1>
  <p class="lede">Type a digit and focus hops to the next box; Backspace retreats and clears, arrows nudge, and pasting a full code distributes across every box.</p>
  <div class="otp" id="otp" role="group" aria-label="6 digit verification code">
    <input type="text" inputmode="numeric" maxlength="1" autocomplete="one-time-code" aria-label="Digit 1">
    <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 2">
    <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 3">
    <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 4">
    <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 5">
    <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 6">
  </div>
  <p class="status" id="status">Enter all 6 digits to continue</p>
  <div><button type="button" class="verify" id="verify" disabled>Verify code</button></div>
  <p class="hint">Demo code: type anything — <b>the button unlocks</b> at 6 digits.</p>
</div>
<script>
var boxes = Array.prototype.slice.call(document.querySelectorAll('#otp input'));
var status = document.getElementById('status');
var verify = document.getElementById('verify');
function digit(ch) {
  var c = ch.charCodeAt(0);
  return c >= 48 && c <= 57;
}
function code() {
  return boxes.map(function (b) { return b.value; }).join('');
}
function update() {
  boxes.forEach(function (b) { b.classList.toggle('filled', b.value !== ''); });
  var full = code().length === 6;
  verify.disabled = !full;
  status.classList.toggle('ok', full);
  status.textContent = full ? 'Code complete: ' + code() : 'Enter all 6 digits to continue';
}
boxes.forEach(function (b, i) {
  b.addEventListener('input', function () {
    if (b.value) {
      var ch = b.value.charAt(b.value.length - 1);
      b.value = digit(ch) ? ch : '';
      if (b.value && i < boxes.length - 1) boxes[i + 1].focus();
    }
    update();
  });
  b.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace' && !b.value && i > 0) {
      e.preventDefault();
      boxes[i - 1].value = '';
      boxes[i - 1].focus();
      update();
    }
    if (e.key === 'ArrowLeft' && i > 0) { e.preventDefault(); boxes[i - 1].focus(); }
    if (e.key === 'ArrowRight' && i < boxes.length - 1) { e.preventDefault(); boxes[i + 1].focus(); }
  });
  b.addEventListener('paste', function (e) {
    e.preventDefault();
    var t = (e.clipboardData || window.clipboardData).getData('text') || '';
    var n = 0;
    for (var k = 0; k < t.length && i + n < boxes.length; k++) {
      var ch = t.charAt(k);
      if (digit(ch)) { boxes[i + n].value = ch; n++; }
    }
    var next = i + n < boxes.length ? i + n : boxes.length - 1;
    boxes[next].focus();
    update();
  });
});
verify.addEventListener('click', function () {
  status.classList.add('ok');
  status.textContent = '✓ Verified — code accepted';
  verify.textContent = 'Verified';
  verify.disabled = true;
});
update();
</script>
</body>
</html>`
      }
      ,
      {
        id: "password-input",
        name: "Password Input",
        desc: "Show/hide toggle with a live strength meter.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Password Input — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:34px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:24px;max-width:52ch}
.lrow{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:7px}
.lrow label{font-size:.8rem;font-weight:800;letter-spacing:.04em;color:var(--muted)}
.peek{border:1px solid var(--line);background:var(--panel-2);color:var(--accent);font-size:.76rem;font-weight:800;padding:5px 13px;border-radius:8px;cursor:pointer;transition:.18s}
.peek:hover{border-color:var(--accent);background:rgba(255, 165, 0,.14)}
.peek:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255, 165, 0,.4)}
.pwrap{position:relative}
.pwrap input{width:100%;background:rgba(0,0,0,.25);border:1.5px solid var(--line);border-radius:12px;padding:13px 15px;color:var(--text);font-size:.98rem;letter-spacing:.06em;outline:none;transition:border-color .2s,box-shadow .2s,background .2s}
.pwrap input::placeholder{color:#6f8585;letter-spacing:normal}
.pwrap input:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(255, 165, 0,.16);background:rgba(0,0,0,.35)}
.meter{display:flex;gap:6px;margin-top:12px}
.meter span{flex:1;height:7px;border-radius:99px;background:rgba(255,255,255,.1);transition:background .3s}
.meter span.on.c1{background:var(--err)}
.meter span.on.c2{background:#ffb020}
.meter span.on.c3{background:var(--accent)}
.meter span.on.c4{background:var(--ok)}
.srow{display:flex;justify-content:space-between;gap:12px;margin-top:10px;font-size:.78rem;color:var(--muted)}
.srow .lbl{font-weight:800;transition:color .3s}
.lbl.c1{color:var(--err)}
.lbl.c2{color:#ffb020}
.lbl.c3{color:var(--accent)}
.lbl.c4{color:var(--ok)}
.tips{display:grid;gap:6px;margin-top:16px;list-style:none;font-size:.8rem;color:var(--muted)}
.tips li::before{content:"○ ";color:var(--muted)}
.tips li.yes::before{content:"✓ ";color:var(--ok)}
.hint{margin-top:18px;font-size:.8rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Password</span>
  <h1>Peek toggle + strength meter</h1>
  <p class="lede">The eye button flips the input type for screen and keyboard users, while four bars score length, variety and symbols as you type.</p>
  <div class="lrow">
    <label for="pw">Create password</label>
    <button type="button" class="peek" id="peek" aria-pressed="false" aria-controls="pw">Show</button>
  </div>
  <div class="pwrap">
    <input id="pw" type="password" placeholder="At least 8 characters" autocomplete="new-password">
  </div>
  <div class="meter" id="meter" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
  <div class="srow"><span class="lbl" id="lbl">Strength: —</span><span id="len">0 chars</span></div>
  <ul class="tips">
    <li id="t1">8 characters or more</li>
    <li id="t2">Upper and lower case letters</li>
    <li id="t3">At least one number</li>
    <li id="t4">At least one symbol</li>
  </ul>
  <p class="hint">Toggle <b>Show</b> to reveal the value — the meter keeps scoring either way.</p>
</div>
<script>
var pw = document.getElementById('pw');
var peek = document.getElementById('peek');
var meter = document.getElementById('meter');
var lbl = document.getElementById('lbl');
var len = document.getElementById('len');
var names = ['Strength: —', 'Strength: Weak', 'Strength: Fair', 'Strength: Good', 'Strength: Strong'];
peek.addEventListener('click', function () {
  var show = pw.type === 'password';
  pw.type = show ? 'text' : 'password';
  peek.textContent = show ? 'Hide' : 'Show';
  peek.setAttribute('aria-pressed', show ? 'true' : 'false');
  pw.focus();
});
pw.addEventListener('input', function () {
  var v = pw.value;
  var hasLetter = false;
  var hasDigit = false;
  var hasUpper = false;
  var hasLower = false;
  var hasSymbol = false;
  for (var i = 0; i < v.length; i++) {
    var c = v.charCodeAt(i);
    if (c >= 48 && c <= 57) hasDigit = true;
    else if (c >= 65 && c <= 90) { hasLetter = true; hasUpper = true; }
    else if (c >= 97 && c <= 122) { hasLetter = true; hasLower = true; }
    else hasSymbol = true;
  }
  var s = 0;
  if (v.length >= 8) s++;
  if (v.length >= 12) s++;
  if (hasLetter && hasDigit) s++;
  if (hasSymbol) s++;
  if (v.length > 0 && s === 0) s = 1;
  var bars = meter.children;
  for (var b = 0; b < bars.length; b++) {
    bars[b].className = b < s ? 'on c' + s : '';
  }
  lbl.textContent = names[s];
  lbl.className = 'lbl' + (s > 0 ? ' c' + s : '');
  len.textContent = v.length + ' chars';
  document.getElementById('t1').className = v.length >= 8 ? 'yes' : '';
  document.getElementById('t2').className = (hasUpper && hasLower) ? 'yes' : '';
  document.getElementById('t3').className = hasDigit ? 'yes' : '';
  document.getElementById('t4').className = hasSymbol ? 'yes' : '';
});
</script>
</body>
</html>`
      },
      {
        id: "input-group",
        name: "Input Group",
        desc: "Field with prefix and suffix addons, like currency or domain.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Input Group — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:24px;max-width:52ch}
.ex{margin-bottom:20px}
.ex:last-of-type{margin-bottom:0}
.exl{display:block;font-size:.8rem;font-weight:800;letter-spacing:.04em;color:var(--muted);margin-bottom:7px}
.ig{display:flex;align-items:stretch;background:rgba(0,0,0,.25);border:1.5px solid var(--line);border-radius:12px;overflow:hidden;transition:border-color .2s,box-shadow .2s}
.ig:hover{border-color:rgba(255,255,255,.22)}
.ig:focus-within{border-color:var(--accent);box-shadow:0 0 0 4px rgba(255, 165, 0,.16)}
.ig .pre,.ig .suf{display:grid;place-items:center;background:var(--panel-2);color:var(--muted);font-weight:800;font-size:.88rem;padding:0 15px;white-space:nowrap}
.ig .pre{border-right:1px solid var(--line)}
.ig .suf{border-left:1px solid var(--line);color:var(--accent)}
.ig input{flex:1;min-width:0;border:0;background:transparent;padding:13px 14px;color:var(--text);font-size:.96rem;outline:none}
.ig input::placeholder{color:#6f8585}
.help{margin-top:7px;font-size:.78rem;color:var(--muted)}
.hint{margin-top:24px;font-size:.8rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Addons</span>
  <h1>Prefix and suffix segments</h1>
  <p class="lede">Addons share one border and highlight together on focus-within — perfect for currency amounts, handles and domains.</p>
  <div class="ex">
    <span class="exl">Monthly price</span>
    <div class="ig">
      <span class="pre" aria-hidden="true">$</span>
      <input type="text" value="49" aria-label="Amount in dollars">
      <span class="suf">.00 USD</span>
    </div>
    <p class="help">Charged monthly, cancel any time.</p>
  </div>
  <div class="ex">
    <span class="exl">Custom domain</span>
    <div class="ig">
      <span class="pre" aria-hidden="true">www.</span>
      <input type="text" value="my-startup" aria-label="Domain name">
      <span class="suf">.com</span>
    </div>
    <p class="help">Free SSL certificate included.</p>
  </div>
  <p class="hint">Focus either field — the <b>whole group</b> lights up as one control.</p>
</div>
</body>
</html>`
      },
      {
        id: "contact-form",
        name: "Contact Form",
        desc: "Contact form with required-field validation and success state.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact Form — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.card{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:34px 30px;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.card h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;margin-bottom:24px;max-width:52ch}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.field{display:grid;gap:6px;margin-bottom:16px}
.field.full{grid-column:1 / -1}
.field label{font-size:.8rem;font-weight:800;letter-spacing:.04em;color:var(--muted)}
.field label .req{color:var(--brand)}
.field input,.field textarea{width:100%;background:rgba(0,0,0,.25);border:1.5px solid var(--line);border-radius:12px;padding:12px 15px;color:var(--text);font-size:.95rem;outline:none;transition:border-color .2s,box-shadow .2s,background .2s}
.field textarea{resize:vertical;min-height:110px;line-height:1.6}
.field input::placeholder,.field textarea::placeholder{color:#6f8585}
.field input:focus,.field textarea:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(255, 165, 0,.16);background:rgba(0,0,0,.35)}
.field.bad input,.field.bad textarea{border-color:var(--err)}
.field.bad input:focus,.field.bad textarea:focus{box-shadow:0 0 0 4px rgba(255,107,107,.16)}
.msg{font-size:.76rem;color:var(--err);min-height:16px}
.submit{width:100%;border:0;border-radius:12px;background:var(--accent);color:#14211f;font-weight:800;font-size:.96rem;padding:14px 22px;cursor:pointer;transition:.2s;box-shadow:0 14px 30px rgba(255, 165, 0,.3);margin-top:6px}
.submit:hover{filter:brightness(1.08);transform:translateY(-2px)}
.submit:focus-visible{outline:none;box-shadow:0 0 0 4px rgba(255, 165, 0,.4)}
.done{display:none;text-align:center;padding:22px 6px 8px}
.done .ok-ic{width:64px;height:64px;margin:0 auto 16px;border-radius:50%;background:rgba(62,207,142,.15);border:2px solid var(--ok);color:var(--ok);font-size:1.7rem;display:grid;place-items:center;animation:pop .4s cubic-bezier(.22,1.7,.36,1)}
@keyframes pop{from{transform:scale(.4);opacity:0}to{transform:scale(1);opacity:1}}
.done h3{font-size:1.2rem;margin-bottom:8px}
.done p{color:var(--muted);font-size:.92rem;margin-bottom:20px}
.card.sent form{display:none}
.card.sent .done{display:block}
.ghost{border:1px solid var(--line);background:transparent;color:var(--muted);font-weight:700;font-size:.88rem;padding:11px 24px;border-radius:11px;cursor:pointer;transition:.2s}
.ghost:hover{border-color:var(--accent);color:var(--accent)}
.ghost:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255, 165, 0,.4)}
.hint{margin-top:18px;font-size:.78rem;color:var(--muted);text-align:center}
.hint b{color:var(--accent)}
@media(max-width:560px){.grid2{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="card" id="card">
  <span class="eyebrow">Contact</span>
  <h1>Drop us a line</h1>
  <p class="lede">Required fields are validated on submit — errors focus the first problem, a valid payload flips the card into its success state.</p>
  <form id="form" novalidate>
    <div class="grid2">
      <div class="field" id="f-name">
        <label for="name">Name <span class="req">*</span></label>
        <input id="name" type="text" placeholder="Ada Lovelace" autocomplete="name">
        <p class="msg" id="m-name"></p>
      </div>
      <div class="field" id="f-email">
        <label for="email">Email <span class="req">*</span></label>
        <input id="email" type="email" placeholder="ada@company.com" autocomplete="email">
        <p class="msg" id="m-email"></p>
      </div>
      <div class="field full" id="f-body">
        <label for="body">Message <span class="req">*</span></label>
        <textarea id="body" placeholder="Tell us a little about your project..."></textarea>
        <p class="msg" id="m-body"></p>
      </div>
    </div>
    <button type="submit" class="submit">Send message</button>
  </form>
  <div class="done" id="done" role="status">
    <div class="ok-ic">✓</div>
    <h3>Message sent</h3>
    <p>Thanks for reaching out — a human replies within one business day.</p>
    <button type="button" class="ghost" id="again">Send another</button>
  </div>
  <p class="hint">Nothing leaves the browser — validation runs <b>entirely on-device</b>.</p>
</div>
<script>
var card = document.getElementById('card');
var form = document.getElementById('form');
function setErr(id, text) {
  document.getElementById('f-' + id).classList.toggle('bad', !!text);
  document.getElementById('m-' + id).textContent = text || '';
}
function isEmail(v) {
  var at = v.indexOf('@');
  if (at < 1) return false;
  return v.indexOf('.', at + 1) > at + 1;
}
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var body = document.getElementById('body');
  var first = null;
  setErr('name', '');
  setErr('email', '');
  setErr('body', '');
  if (!name.value.trim()) { setErr('name', 'Please tell us your name.'); first = first || name; }
  if (!isEmail(email.value.trim())) { setErr('email', 'Enter a valid email address.'); first = first || email; }
  if (body.value.trim().length < 10) { setErr('body', 'Message must be at least 10 characters.'); first = first || body; }
  if (first) { first.focus(); return; }
  card.classList.add('sent');
});
document.getElementById('again').addEventListener('click', function () {
  form.reset();
  setErr('name', '');
  setErr('email', '');
  setErr('body', '');
  card.classList.remove('sent');
  document.getElementById('name').focus();
});
</script>
</body>
</html>`
      },
      {
        id: "newsletter-form",
        name: "Newsletter Form",
        desc: "Inline email signup with validation feedback.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Newsletter Form — hasSy UI</title>
<style>
:root{--bg:#0f1f1e;--panel:#16302f;--panel-2:#1d3b39;--line:rgba(255,255,255,.1);--text:#eef4f4;--muted:#a2b5b5;--accent:#ffa500;--brand:#ff5c5c;--ok:#3ecf8e;--err:#ff6b6b;--r:14px;--font:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font)}
body{background:var(--bg);color:var(--text);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:26px;line-height:1.5}
button,input,select,textarea{font:inherit;color:inherit}
a{color:inherit;text-decoration:none}
.stage{width:min(680px,100%);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:36px 30px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.eyebrow{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}
.stage h1{font-size:1.4rem;letter-spacing:-.02em;margin:8px 0 6px}
.lede{color:var(--muted);font-size:.92rem;max-width:46ch;margin:0 auto 24px}
.nl{display:flex;gap:10px;max-width:480px;margin:0 auto;flex-wrap:wrap}
.nl input{flex:1;min-width:200px;background:rgba(0,0,0,.3);border:1.5px solid var(--line);border-radius:12px;padding:14px 16px;color:var(--text);font-size:.95rem;outline:none;transition:border-color .2s,box-shadow .2s,background .2s}
.nl input::placeholder{color:#6f8585}
.nl input:hover{border-color:rgba(255,255,255,.22)}
.nl input:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(255, 165, 0,.16);background:rgba(0,0,0,.4)}
.nl input.bad{border-color:var(--err);box-shadow:0 0 0 4px rgba(255,107,107,.15)}
.nl input.good{border-color:var(--ok);box-shadow:0 0 0 4px rgba(62,207,142,.14)}
.nl button{border:0;border-radius:12px;background:var(--accent);color:#14211f;font-weight:800;font-size:.93rem;padding:14px 26px;cursor:pointer;transition:.2s;box-shadow:0 12px 26px rgba(255, 165, 0,.3);white-space:nowrap}
.nl button:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-2px)}
.nl button:focus-visible{outline:none;box-shadow:0 0 0 4px rgba(255, 165, 0,.4)}
.nl button:disabled{background:var(--ok);box-shadow:0 12px 26px rgba(62,207,142,.3);cursor:default;color:#0b2019}
.msg{min-height:22px;margin-top:14px;font-size:.85rem;font-weight:700}
.msg.err{color:var(--err)}
.msg.ok{color:var(--ok)}
.fine{margin-top:6px;font-size:.75rem;color:#6f8585}
.hint{margin-top:20px;font-size:.8rem;color:var(--muted)}
.hint b{color:var(--accent)}
@media(max-width:480px){.nl input{min-width:100%}.nl button{width:100%}}
</style>
</head>
<body>
<div class="stage">
  <span class="eyebrow">Newsletter</span>
  <h1>One-line email signup</h1>
  <p class="lede">Inline validation gives instant, polite feedback — fix the address and the button locks into a green subscribed state.</p>
  <form class="nl" id="nl" novalidate>
    <input type="email" id="mail" placeholder="you@company.com" aria-label="Email address" aria-describedby="msg fine" autocomplete="email">
    <button type="submit" id="btn">Subscribe</button>
  </form>
  <p class="msg" id="msg" role="status" aria-live="polite"></p>
  <p class="fine" id="fine">One digest per month · unsubscribe in a click.</p>
  <p class="hint">Try submitting an invalid address to see the <b>error feedback</b>.</p>
</div>
<script>
var nl = document.getElementById('nl');
var mail = document.getElementById('mail');
var btn = document.getElementById('btn');
var msg = document.getElementById('msg');
function isEmail(v) {
  var at = v.indexOf('@');
  if (at < 1) return false;
  return v.indexOf('.', at + 1) > at + 1;
}
mail.addEventListener('input', function () {
  if (btn.disabled) return;
  mail.classList.remove('bad', 'good');
  msg.textContent = '';
  msg.className = 'msg';
});
nl.addEventListener('submit', function (e) {
  e.preventDefault();
  if (btn.disabled) return;
  var v = mail.value.trim();
  if (!isEmail(v)) {
    mail.classList.add('bad');
    mail.classList.remove('good');
    msg.textContent = 'Please enter a valid email address.';
    msg.className = 'msg err';
    mail.focus();
    return;
  }
  mail.classList.remove('bad');
  mail.classList.add('good');
  msg.textContent = '✓ You are on the list — check your inbox for a welcome note.';
  msg.className = 'msg ok';
  btn.textContent = 'Subscribed';
  btn.disabled = true;
  mail.readOnly = true;
});
</script>
</body>
</html>`
      }
    ]
  });
})();
