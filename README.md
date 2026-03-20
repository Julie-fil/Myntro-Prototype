# Myntro — Multi-page prototype

Static HTML + Tailwind (CDN). **No build step** — open locally or host on GitHub Pages.

## Pages

| File | Description |
|------|-------------|
| **`index.html`** | Home — hero, value props, “What we offer” cards, how it works, FAQs, support, CTA |
| **`overnight.html`** | Overnight money — hero + liquidity story + link to fixed-term |
| **`fixed-term.html`** | Fixed-term deposits — full investment calculator (`js/calculator.js`) |
| **`about.html`** | About us — mission/vision, pillars, Swedish security, team placeholders |
| **`contact.html`** | Contact — simple form (prototype only) |

## Shared assets

- **`css/site.css`** — custom classes (nav pills, typography helpers)
- **`js/calculator.js`** — product tiles + compound interest (loaded on `fixed-term.html` only)
- **`js/faq.js`** — FAQ accordion (loaded on `index.html` only)
- **`assets/myntro-logo.png`** — header logo

## Preview

From this folder:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Open **http://127.0.0.1:8765/** and use the top navigation to move between pages.

## GitHub Pages

Set Pages to deploy from branch `main`, folder `/` (root of repo). Entry point: `index.html`.
