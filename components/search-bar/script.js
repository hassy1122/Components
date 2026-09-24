const input = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const results = document.getElementById('results');
const status = document.getElementById('searchStatus');
const form = document.getElementById('searchForm');

const tours = [
  { name: 'Desert Safari Tour', tag: 'Adventure' },
  { name: 'City Heritage Walk', tag: 'Culture' },
  { name: 'Mountain Trek Package', tag: 'Hiking' },
  { name: 'Sunset Cruise', tag: 'Relax' },
];

let activeIndex = -1;

function closeList() {
  results.innerHTML = '';
  activeIndex = -1;
  input.setAttribute('aria-expanded', 'false');
}

function openList(matches) {
  results.innerHTML = '';
  activeIndex = -1;

  if (matches.length === 0) {
    const li = document.createElement('li');
    li.className = 'no-match';
    li.textContent = 'No tours match your search.';
    results.appendChild(li);
  } else {
    matches.forEach((tour, i) => {
      const li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', 'false');
      li.dataset.index = i;
      li.innerHTML = `${tour.name} <span class="tag">${tour.tag}</span>`;
      results.appendChild(li);
    });
  }

  input.setAttribute('aria-expanded', 'true');
}

function setActive(index) {
  const options = results.querySelectorAll('li[role="option"]');
  if (!options.length) return;
  activeIndex = (index + options.length) % options.length;
  options.forEach((opt, i) => {
    opt.setAttribute('aria-selected', String(i === activeIndex));
  });
  options[activeIndex].scrollIntoView({ block: 'nearest' });
}

input.addEventListener('input', () => {
  const q = input.value.trim().toLowerCase();
  clearBtn.hidden = q.length === 0;

  if (!q) {
    closeList();
    status.textContent = `${tours.length} tours available`;
    return;
  }

  const matches = tours.filter((t) => t.name.toLowerCase().includes(q));
  openList(matches);
  status.textContent = `${matches.length} result${matches.length !== 1 ? 's' : ''} for "${input.value.trim()}"`;
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    setActive(activeIndex + 1);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    setActive(activeIndex - 1);
  } else if (e.key === 'Enter') {
    const options = results.querySelectorAll('li[role="option"]');
    if (activeIndex >= 0 && options[activeIndex]) {
      e.preventDefault();
      input.value = options[activeIndex].textContent.replace(/\s+\w+$/, '').trim();
      closeList();
      status.textContent = `Selected: ${input.value}`;
    }
  } else if (e.key === 'Escape') {
    closeList();
    input.value = '';
    clearBtn.hidden = true;
    status.textContent = `${tours.length} tours available`;
  }
});

results.addEventListener('click', (e) => {
  const opt = e.target.closest('li[role="option"]');
  if (!opt) return;
  input.value = opt.textContent.replace(/\s+\w+$/, '').trim();
  closeList();
  status.textContent = `Selected: ${input.value}`;
  input.focus();
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  clearBtn.hidden = true;
  closeList();
  status.textContent = `${tours.length} tours available`;
  input.focus();
});

form.addEventListener('submit', (e) => e.preventDefault());

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrap')) closeList();
});
