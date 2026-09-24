const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');
const error = document.getElementById('formError');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.querySelector('#name');
  const email = form.querySelector('#email');
  const message = form.querySelector('#message');
  const agree = form.querySelector('#agree');

  [name, email, message].forEach((f) => f.classList.remove('is-invalid'));
  error.classList.remove('show');

  const invalid = [];
  if (!name.value.trim()) invalid.push(name);
  if (!email.value.trim() || !email.checkValidity()) invalid.push(email);
  if (!message.value.trim()) invalid.push(message);

  if (invalid.length) {
    invalid.forEach((f) => f.classList.add('is-invalid'));
    error.textContent = email === invalid[0] && email.value.trim()
      ? 'Please enter a valid email address.'
      : 'Please fill in all required fields.';
    error.classList.add('show');
    success.classList.remove('show');
    invalid[0].focus();
    return;
  }

  if (!agree.checked) {
    error.textContent = 'Please tick the consent checkbox to continue.';
    error.classList.add('show');
    success.classList.remove('show');
    agree.focus();
    return;
  }

  // Hook this up to your backend / API endpoint
  success.classList.add('show');
  form.reset();
});

form.addEventListener('input', () => {
  error.classList.remove('show');
  form.querySelectorAll('.is-invalid').forEach((f) => f.classList.remove('is-invalid'));
});
