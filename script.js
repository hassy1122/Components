/* hasSy library showcase — rendering, copy-code, previews, animations, scrollspy */

(function initData() {
  window.LIB = { cats: [], items: [], total: 0 };
  (window.COMPONENTS || []).forEach(function (group) {
    if (!group || !group.items || !group.items.length) return;
    window.LIB.cats.push({ name: group.category, items: group.items });
    group.items.forEach(function (item) {
      window.LIB.items.push(item);
      window.LIB.total += 1;
    });
  });
})();

/* ---------- Helpers ---------- */
function slugify(str) {
  return String(str).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function el(tag, cls, text) {
  var node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
}

function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).catch(function () { return fallbackCopy(text); });
  }
  return Promise.resolve(fallbackCopy(text));
}

function fallbackCopy(text) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (e) { /* noop */ }
  document.body.removeChild(ta);
}

/* ---------- Dynamic counts ---------- */
(function setCounts() {
  var total = window.LIB.total;
  var cats = window.LIB.cats.length;
  var map = {
    eyebrowCount: total, heroCount: total, statComponents: total, introCount: total,
    footerCount: total, statCategories: cats, eyebrowCats: cats
  };
  Object.keys(map).forEach(function (id) {
    var node = document.getElementById(id);
    if (node) node.textContent = String(map[id]);
  });
})();

/* ---------- Sidebar (TOC) ---------- */
(function buildToc() {
  var box = document.getElementById('tocComponents');
  if (!box) return;
  window.LIB.cats.forEach(function (cat) {
    var title = el('p', 'toc-title', cat.name);
    title.setAttribute('data-cat-title', slugify(cat.name));
    box.appendChild(title);
    var ul = el('ul');
    cat.items.forEach(function (item) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + item.id;
      a.textContent = item.name;
      a.setAttribute('data-search', (item.name + ' ' + cat.name + ' ' + (item.desc || '')).toLowerCase());
      li.appendChild(a);
      ul.appendChild(li);
    });
    box.appendChild(ul);
  });
})();

/* ---------- Library sections ---------- */
(function buildLibrary() {
  var root = document.getElementById('libraryRoot');
  if (!root) return;
  var num = 0;

  window.LIB.cats.forEach(function (cat) {
    var catSlug = slugify(cat.name);

    var head = el('div', 'cat-head reveal');
    head.id = 'cat-' + catSlug;
    var h = el('h3', 'cat-name', cat.name);
    var count = el('span', 'cat-count', String(cat.items.length));
    head.appendChild(h);
    head.appendChild(count);
    root.appendChild(head);

    var grid = el('div', 'comp-grid');
    cat.items.forEach(function (item) {
      num += 1;
      grid.appendChild(buildCard(item, num));
    });
    root.appendChild(grid);
  });

  function buildCard(item, n) {
    var art = el('article', 'comp reveal');
    art.id = item.id;

    var top = el('div', 'comp-top');
    var numEl = el('span', 'comp-num', n < 10 ? '00' + n : n < 100 ? '0' + n : String(n));
    var meta = el('div', 'comp-meta');
    var h4 = el('h4', 'comp-title', item.name);
    var desc = el('p', 'comp-desc', item.desc || '');
    meta.appendChild(h4);
    meta.appendChild(desc);
    top.appendChild(numEl);
    top.appendChild(meta);

    var tools = el('div', 'comp-tools');
    var btnCode = el('button', 'tool', 'Show code');
    btnCode.type = 'button';
    btnCode.setAttribute('data-act', 'code');
    btnCode.setAttribute('aria-expanded', 'false');
    var btnCopy = el('button', 'tool tool-primary', 'Copy code');
    btnCopy.type = 'button';
    btnCopy.setAttribute('data-act', 'copy');
    var btnOpen = el('button', 'tool tool-ghost', 'Open demo ↗');
    btnOpen.type = 'button';
    btnOpen.setAttribute('data-act', 'open');
    tools.appendChild(btnCopy);
    tools.appendChild(btnCode);
    tools.appendChild(btnOpen);

    var frame = el('div', 'comp-frame');
    frame.setAttribute('data-frame', '');
    frame.appendChild(el('div', 'frame-hint', 'Preparing preview…'));

    var codeWrap = el('div', 'comp-code');
    codeWrap.hidden = true;
    var pre = document.createElement('pre');
    var code = document.createElement('code');
    pre.appendChild(code);
    codeWrap.appendChild(pre);

    art.appendChild(top);
    art.appendChild(tools);
    art.appendChild(frame);
    art.appendChild(codeWrap);
    art._code = item.code;
    art._codeNode = code;
    art._codeFilled = false;
    return art;
  }
})();

/* ---------- Toolbar actions: copy / show / open ---------- */
(function toolbarActions() {
  var root = document.getElementById('libraryRoot');
  if (!root) return;

  root.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.tool') : null;
    if (!btn) return;
    var card = btn.closest('.comp');
    if (!card) return;
    var act = btn.getAttribute('data-act');

    if (act === 'copy') {
      copyText(card._code || '');
      var prev = btn.textContent;
      btn.textContent = 'Copied ✓';
      btn.classList.add('is-done');
      setTimeout(function () {
        btn.textContent = prev;
        btn.classList.remove('is-done');
      }, 1600);
    }

    if (act === 'code') {
      var wrap = card.querySelector('.comp-code');
      if (!card._codeFilled) {
        card._codeNode.textContent = card._code || '';
        card._codeFilled = true;
      }
      var open = wrap.hidden;
      wrap.hidden = !open;
      btn.textContent = open ? 'Hide code' : 'Show code';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      card.classList.toggle('code-open', open);
      if (open) wrap.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    if (act === 'open') {
      var blob = new Blob([card._code || ''], { type: 'text/html' });
      var url = URL.createObjectURL(blob);
      window.open(url, '_blank', 'noopener');
      setTimeout(function () { URL.revokeObjectURL(url); }, 30000);
    }
  });
})();

/* ---------- Lazy preview iframes ---------- */
(function lazyPreviews() {
  var frames = document.querySelectorAll('[data-frame]');
  if (!frames.length) return;

  function hydrate(frame) {
    if (frame.dataset.done) return;
    frame.dataset.done = '1';
    var card = frame.closest('.comp');
    if (!card) return;
    var iframe = document.createElement('iframe');
    iframe.className = 'frame-view';
    iframe.setAttribute('title', (card.querySelector('.comp-title') || {}).textContent || 'Component preview');
    iframe.setAttribute('sandbox', 'allow-scripts');
    iframe.setAttribute('loading', 'lazy');
    iframe.srcdoc = card._code || '';
    frame.innerHTML = '';
    frame.appendChild(iframe);
  }

  function hydrateNearViewport() {
    var vh = window.innerHeight || 800;
    frames.forEach(function (f) {
      if (f.dataset.done) return;
      var r = f.getBoundingClientRect();
      if (r.top < vh + 500 && r.bottom > -500) hydrate(f);
    });
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          hydrate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '400px 0px 400px 0px' });
    frames.forEach(function (f) { io.observe(f); });
  } else {
    frames.forEach(hydrate);
  }

  window.addEventListener('load', function () {
    setTimeout(hydrateNearViewport, 150);
  });
  setTimeout(hydrateNearViewport, 1200);
})();

/* ---------- Sidebar expand (mobile) + filter ---------- */
(function tocFilter() {
  var input = document.getElementById('tocSearch');
  var empty = document.getElementById('tocEmpty');
  var expand = document.getElementById('tocExpand');
  var toc = document.querySelector('.toc');

  if (expand && toc) {
    expand.addEventListener('click', function () {
      var open = toc.classList.toggle('expanded');
      expand.setAttribute('aria-expanded', open ? 'true' : 'false');
      expand.textContent = open ? '☰ Hide list' : '☰ Contents';
    });
  }
  if (!input) return;

  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase();
    var groups = document.querySelectorAll('#tocComponents .toc-title');
    var shown = 0;

    groups.forEach(function (title) {
      var ul = title.nextElementSibling;
      if (!ul || ul.tagName !== 'UL') return;
      var visible = 0;
      ul.querySelectorAll('li').forEach(function (li) {
        var a = li.querySelector('a');
        var hay = a ? a.getAttribute('data-search') || a.textContent.toLowerCase() : '';
        var hit = !q || hay.indexOf(q) !== -1;
        li.hidden = !hit;
        if (hit) visible += 1;
      });
      var showGroup = visible > 0;
      title.hidden = !showGroup;
      ul.hidden = !showGroup;
      shown += visible;
    });

    if (empty) empty.hidden = shown > 0;
  });
})();

/* ---------- Signature text animations ---------- */
(function initSignatureAnimations() {
  function splitWords(nodeEl) {
    var nodes = Array.prototype.slice.call(nodeEl.childNodes);
    var words = [];
    nodes.forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.split(/\s+/).filter(Boolean).forEach(function (w) { words.push({ text: w, cls: '' }); });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        var t = node.textContent.trim();
        if (t) words.push({ text: t, cls: node.className || '' });
      }
    });
    if (!words.length) return;
    nodeEl.setAttribute('aria-label', words.map(function (w) { return w.text; }).join(' '));
    nodeEl.textContent = '';
    words.forEach(function (w, i) {
      var outer = el('span', 'word');
      var inner = el('span', 'word-inner' + (w.cls ? ' ' + w.cls : ''), w.text);
      inner.style.setProperty('--i', i);
      outer.appendChild(inner);
      nodeEl.appendChild(outer);
      nodeEl.appendChild(document.createTextNode(' '));
    });
  }

  document.querySelectorAll('.word-drop').forEach(splitWords);

  document.querySelectorAll('.reveal').forEach(function (nodeEl) {
    var siblings = Array.prototype.slice.call(nodeEl.parentElement ? nodeEl.parentElement.children : []).filter(function (s) {
      return s.classList && s.classList.contains('reveal');
    });
    nodeEl.style.setProperty('--i', Math.max(0, siblings.indexOf(nodeEl)));
  });

  var targets = document.querySelectorAll('.reveal, .word-drop');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add('is-visible'); });
  }

  setTimeout(function () {
    document.querySelectorAll('.reveal, .word-drop').forEach(function (nodeEl) { nodeEl.classList.add('is-visible'); });
  }, 2500);
})();

/* ---------- Sidebar scrollspy ---------- */
(function initScrollspy() {
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
  if (!tocLinks.length || !('IntersectionObserver' in window)) return;

  var linkById = new Map();
  tocLinks.forEach(function (a) { linkById.set(a.getAttribute('href').slice(1), a); });

  var sections = Array.prototype.slice.call(linkById.keys())
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  if (!sections.length) return;

  var activeLink = null;
  var setActive = function (id) {
    var link = linkById.get(id);
    if (!link || link === activeLink) return;
    if (activeLink) activeLink.classList.remove('active');
    link.classList.add('active');
    activeLink = link;
  };

  var io = new IntersectionObserver(function (entries) {
    var visible = entries
      .filter(function (e) { return e.isIntersecting; })
      .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
    if (visible[0]) setActive(visible[0].target.id);
  }, { rootMargin: '-12% 0px -65% 0px', threshold: [0, 0.2, 0.5, 1] });
  sections.forEach(function (s) { io.observe(s); });
  setActive(sections[0].id);
})();
