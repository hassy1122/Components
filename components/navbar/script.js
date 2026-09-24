const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const toursItem = document.getElementById('toursItem');
const toursToggle = document.getElementById('toursToggle');
const bookBtn = document.getElementById('bookBtn');
const toast = document.getElementById('toast');

let toastTimer = null;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function setMenu(open) {
  navLinks.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
}

menuToggle.addEventListener('click', () => {
  setMenu(!navLinks.classList.contains('open'));
});

function setDropdown(open) {
  toursItem.classList.toggle('open', open);
  toursToggle.setAttribute('aria-expanded', String(open));
}

toursToggle.addEventListener('click', (e) => {
  e.preventDefault();
  setDropdown(!toursItem.classList.contains('open'));
});

document.addEventListener('click', (e) => {
  if (!toursItem.contains(e.target)) setDropdown(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (toursItem.classList.contains('open')) {
    setDropdown(false);
    toursToggle.focus();
  }
  if (navLinks.classList.contains('open')) {
    setMenu(false);
    menuToggle.focus();
  }
});

bookBtn.addEventListener('click', () => {
  showToast('Booking flow would open here — this is a UI demo.');
});
