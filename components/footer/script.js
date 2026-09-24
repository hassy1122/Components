const newsletterForm = document.getElementById('newsletterForm');
const newsletterMsg = document.getElementById('newsletterMsg');
const backToTop = document.getElementById('backToTop');
const toast = document.getElementById('toast');

let toastTimer = null;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail');
  newsletterMsg.textContent = `Thanks — ${email.value} is on the list.`;
  newsletterForm.reset();
});

document.querySelectorAll('[data-social]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showToast(`${link.dataset.social} is a placeholder link in this demo.`);
  });
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
