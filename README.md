# hasSy Component Library

A collection of **108 modular UI components** built with plain HTML, CSS, and vanilla JavaScript.
No build tools, no frameworks — open `index.html` and copy any component with one click.

---

## Quick start

```
npx serve .
```

or simply open `index.html` in a browser.

---

## How it works

| Piece | File(s) | Purpose |
|---|---|---|
| Showcase page | `index.html`, `style.css`, `script.js` | Hero, sidebar TOC, live previews, copy-code |
| Component data | `data/01-navigation.js` … `data/11-utilities.js` | 108 complete, standalone HTML documents |

Every component is stored as **one complete HTML document** (markup + `<style>` + optional `<script>`).
In the showcase:

1. **Copy code** — copies the full document to your clipboard.
2. Paste into a `component.html` file and open it — the component works as-is.
3. **Show code** — expands the same code inline.
4. **Open demo** — opens the component in a new tab.
5. **Sidebar** — grouped under category headings; click any entry to jump straight to it. Use the filter box to search.

---

## Categories (108 components)

| # | Category | Count | Examples |
|---|---|---|---|
| 1 | Navigation | 12 | Navbar, Mega Menu, Tabs, Pagination, Stepper, Bottom Nav |
| 2 | Buttons | 12 | Button Set, FAB, Loading, Split, Ripple, Gradient |
| 3 | Forms & Inputs | 16 | Floating Label, Custom Select, OTP, Password, File Upload |
| 4 | Cards | 12 | Profile, Product, Pricing, Flip, Testimonial, Team |
| 5 | Feedback & Alerts | 8 | Alerts, Toast, Tooltip, Popover, Bell, Empty State |
| 6 | Overlays & Popups | 6 | Modal, Confirm, Drawer, Command Palette, Lightbox |
| 7 | Data Display | 10 | Table, Timeline, Accordion, Progress, Avatars, Chips |
| 8 | Media & Sections | 8 | Hero, CTA, Footer, Gallery, Carousel, Video Embed |
| 9 | E-commerce | 8 | Cart Drawer, Product Grid, Star Rating, Coupon, Order Summary |
| 10 | Loaders & Progress | 6 | Spinners, Skeleton, Typing Dots, Radial Progress |
| 11 | Utilities & Extras | 10 | Back to Top, Marquee, Clock, Theme Switch, Calendar |

---

## Design tokens

Shared by every component (`:root` in each document):

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0f1f1e` | Page background |
| `--panel` | `#16302f` | Panel / card surface |
| `--panel-2` | `#1d3b39` | Raised surface |
| `--line` | `rgba(255,255,255,.1)` | Borders |
| `--text` / `--muted` | `#eef4f4` / `#a2b5b5` | Text |
| `--accent` | `#ff9f43` | Primary accent |
| `--brand` | `#ff5c5c` | Secondary accent |
| `--ok` / `--err` | `#3ecf8e` / `#ff6b6b` | Success / error |

Recolor a component by editing these variables — nothing else changes.

---

## Adding a component

Create or edit a file in `data/` following the existing structure:

```js
(function () {
  var C = (window.COMPONENTS = window.COMPONENTS || []);
  C.push({
    category: "Buttons",
    items: [
      { id: "my-button", name: "My Button", desc: "One-line description.", code: `<!DOCTYPE html> ... </html>` }
    ]
  });
})();
```

Then add a `<script src="data/your-file.js"></script>` tag in `index.html` before `script.js`.
The sidebar, category headings, numbering and counts update automatically.

**Rules for `code`:** one complete HTML document; no backticks, no `${`, no backslashes inside the string.

---

## Legacy demos

The `components/` folder contains 10 older standalone demo pages (navbar, footer, form, cart,
product-box, navigation, search-bar, pagination, modal, badge). The showcase page supersedes them
but they remain usable on their own.

---

## License

MIT
