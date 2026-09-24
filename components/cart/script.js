const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const cartEmpty = document.getElementById('cartEmpty');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutMsg = document.getElementById('checkoutMsg');

function formatMoney(n) {
  return '$' + n.toFixed(2);
}

function recalcCart() {
  const items = cartItems.querySelectorAll('.cart-item');
  let total = 0;
  let count = 0;

  items.forEach((item) => {
    const price = parseFloat(item.dataset.price);
    const qty = parseInt(item.querySelector('.qty-value').textContent, 10);
    total += price * qty;
    count += qty;
  });

  cartCount.textContent = `${count} item${count !== 1 ? 's' : ''}`;
  cartSubtotal.textContent = formatMoney(total);
  cartTotal.textContent = formatMoney(total);

  const empty = items.length === 0;
  cartEmpty.hidden = !empty;
  cartItems.hidden = empty;
  checkoutBtn.disabled = empty;
  if (empty) {
    checkoutMsg.textContent = '';
  } else {
    cartEmpty.textContent = 'Your cart is empty — browse the product grid to add tours.';
  }
}

cartItems.addEventListener('click', (e) => {
  const item = e.target.closest('.cart-item');
  if (!item) return;

  const qtyEl = item.querySelector('.qty-value');
  let qty = parseInt(qtyEl.textContent, 10);

  if (e.target.classList.contains('plus')) {
    qty += 1;
    qtyEl.textContent = qty;
    recalcCart();
  } else if (e.target.classList.contains('minus')) {
    qty = Math.max(1, qty - 1);
    qtyEl.textContent = qty;
    recalcCart();
  } else if (e.target.classList.contains('remove-btn')) {
    item.remove();
    recalcCart();
  }
});

checkoutBtn.addEventListener('click', () => {
  checkoutMsg.textContent = 'Checkout demo — connect your payment provider here.';
});

recalcCart();
