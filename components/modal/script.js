const overlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelModal');
const addBtn = document.getElementById('addToCart');
const msg = document.getElementById('modalMsg');

let lastFocused = null;

function focusables() {
  return [...modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
    .filter((el) => !el.disabled && el.offsetParent !== null);
}

function openModal() {
  lastFocused = document.activeElement;
  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add('visible'));
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
}

function closeModal() {
  overlay.classList.remove('visible');
  document.body.style.overflow = '';
  const finish = () => {
    overlay.hidden = true;
    msg.textContent = '';
    lastFocused?.focus();
  };
  // Match reduced-motion / CSS transition length
  setTimeout(finish, 250);
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (overlay.hidden) return;

  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'Tab') {
    const els = focusables();
    if (!els.length) return;
    const first = els[0];
    const last = els[els.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

addBtn.addEventListener('click', () => {
  msg.textContent = 'Added to cart ✓';
  setTimeout(() => { msg.textContent = ''; }, 2000);
});
