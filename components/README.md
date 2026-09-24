# Component Library — built to match your Navbar reference

Same conventions as your original `now.html` / `now.css`: plain HTML + CSS (+ vanilla JS where interactive),
system font stack (`system-ui, -apple-system, "Segoe UI", Arial, sans-serif`), a `* { margin:0; padding:0; box-sizing:border-box }` reset, and the same color system:

- Dark background: `#1a2e2e`
- Link red: `#ff5c5c`
- Accent/CTA orange: `orange` (dark text on orange fills for AA contrast)

Each folder is fully self-contained — open its `index.html` directly in a browser, no build step needed.

## Folders

| Folder | What it is |
|---|---|
| `navbar/` | Improved navbar — dropdown submenu (hover/focus/click), mobile hamburger toggle, sticky |
| `footer/` | Multi-column footer with newsletter signup, social links, back-to-top |
| `form/` | Contact/booking form with client-side validation + success state |
| `cart/` | Shopping cart panel — live quantity controls, remove item, running total, empty state |
| `product-box/` | Product card grid — badges, wishlist toggle (`aria-pressed`), rating, add-to-cart |
| `navigation/` | Breadcrumb trail that switches demo pages in place (no reload) |
| `search-bar/` | Search input with live suggestions, arrow keys, Enter to select, Esc to clear |
| `pagination/` | Page navigation with prev/next, smart ellipsis, disabled edges |
| `modal/` | Quick-view popup — focus trap, role="dialog", click-outside & Esc to close |
| `badge/` | Reusable status/label tags (New, Sale, In Stock, Sold Out, etc.) — CSS only |

## Using these together

All components share the same CSS variable names (`--bg-dark`, `--accent-orange`, etc.) at the top of each
stylesheet, so if you want one global stylesheet instead of per-component ones, you can merge them and the
colors will stay consistent site-wide. Swap the `.product-img` / `.item-img` / `.modal-img` gray placeholder
boxes for real `<img>` tags once you have product photos (e.g. from your Shopify store).

## Demo pages

Each component opens as a standalone demo page with a header explaining the interactions.
Interactive components ship with `script.js` (navbar, footer, form, cart, product-box,
navigation, search-bar, pagination, modal); `badge/` is CSS-only.
