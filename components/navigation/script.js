const crumbList = document.getElementById('crumbList');
const pageStage = document.getElementById('pageStage');

const trail = ['home', 'tours', 'desert', 'booking'];

function showPage(page) {
  const depth = trail.indexOf(page);
  if (depth === -1) return;

  pageStage.querySelectorAll('.page-view').forEach((view) => {
    view.hidden = view.dataset.view !== page;
  });

  crumbList.innerHTML = '';
  trail.slice(0, depth + 1).forEach((id) => {
    const li = document.createElement('li');
    if (id === page) {
      const span = document.createElement('span');
      span.textContent = titleFor(id);
      span.setAttribute('aria-current', 'page');
      li.appendChild(span);
    } else {
      const a = document.createElement('a');
      a.href = '#';
      a.dataset.page = id;
      a.textContent = titleFor(id);
      li.appendChild(a);
    }
    crumbList.appendChild(li);
  });
}

function titleFor(id) {
  return { home: 'Home', tours: 'Tours', desert: 'Desert Safari', booking: 'Booking' }[id];
}

showPage('home');

crumbList.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-page]');
  if (!link) return;
  e.preventDefault();
  showPage(link.dataset.page);
  pageStage.querySelector('.page-view:not([hidden]) h2').focus?.();
});
