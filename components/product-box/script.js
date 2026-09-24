document.querySelectorAll('.product-box').forEach((box) => {
  const title = box.querySelector('h3').textContent;
  const wishlist = box.querySelector('.wishlist-btn');
  const addBtn = box.querySelector('.orange-btn');
  const msg = box.querySelector('.action-msg');

  wishlist.addEventListener('click', () => {
    const active = wishlist.getAttribute('aria-pressed') === 'true';
    wishlist.setAttribute('aria-pressed', String(!active));
    wishlist.textContent = active ? '♡' : '♥';
    wishlist.setAttribute(
      'aria-label',
      `${active ? 'Add' : 'Remove'} ${title} ${active ? 'to' : 'from'} wishlist`
    );
    msg.textContent = active ? '' : 'Saved to wishlist ♥';
    setTimeout(() => { if (msg.textContent.startsWith('Saved')) msg.textContent = ''; }, 1800);
  });

  addBtn.addEventListener('click', () => {
    msg.textContent = 'Added to cart ✓';
    setTimeout(() => { msg.textContent = ''; }, 1800);
  });
});
