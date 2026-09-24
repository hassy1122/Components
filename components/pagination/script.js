const TOTAL_PAGES = 8;
let current = 1;

const pageList = document.getElementById('pageList');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageHeading = document.getElementById('pageHeading');
const pageStatus = document.getElementById('pageStatus');

function pagesAround() {
  // Always show 1, TOTAL_PAGES, and up to 4 around current with ellipsis gaps
  const pages = new Set([1, TOTAL_PAGES]);
  for (let p = current - 1; p <= current + 1; p++) {
    if (p >= 1 && p <= TOTAL_PAGES) pages.add(p);
  }
  if (current <= 3) [2, 3, 4].forEach((p) => p <= TOTAL_PAGES && pages.add(p));
  if (current >= TOTAL_PAGES - 2) {
    [TOTAL_PAGES - 3, TOTAL_PAGES - 2, TOTAL_PAGES - 1].forEach((p) => p >= 1 && pages.add(p));
  }
  return [...pages].sort((a, b) => a - b);
}

function render() {
  const visible = pagesAround();
  pageList.innerHTML = '';

  let prevPage = 0;
  visible.forEach((p) => {
    if (p - prevPage > 1) {
      const li = document.createElement('li');
      li.className = 'ellipsis';
      li.textContent = '…';
      li.setAttribute('aria-hidden', 'true');
      pageList.appendChild(li);
    }

    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = p;
    if (p === current) {
      btn.setAttribute('aria-current', 'page');
      btn.setAttribute('aria-label', `Page ${p}, current page`);
    } else {
      btn.setAttribute('aria-label', `Go to page ${p}`);
    }
    btn.addEventListener('click', () => goTo(p));
    li.appendChild(btn);
    pageList.appendChild(li);
    prevPage = p;
  });

  prevBtn.disabled = current === 1;
  nextBtn.disabled = current === TOTAL_PAGES;
  pageHeading.textContent = `Showing page ${current} of ${TOTAL_PAGES}`;
}

function goTo(p) {
  if (p < 1 || p > TOTAL_PAGES || p === current) return;
  current = p;
  render();
  pageStatus.textContent = `Page ${current} selected`;
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

render();
