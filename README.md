# Myntro — Landing + investment calculator

Single-page HTML + Tailwind (CDN) matching the Myntro desktop design: navy header (Register / Login), hero, value props, calculator, features, how it works, FAQ, support, CTA, footer.

## Investment calculator

The calculator block mirrors **`myntro-investment-calculator`** (`npm run dev` → [http://localhost:3000](http://localhost:3000)):

- Three selectable product cards (2.45% / 2.50% / 2.60% p.a.), annual compounding: `P × (1 + r)^t`
- Minimum €5,000 · formatted EUR input · **Your expected returns** + yellow **Interest earned** pill
- Same structure as the Next.js page (person icon on cards, navy border on selection)

## Preview

```bash
cd myntro-prototype
python3 -m http.server 8765
```

Open [http://localhost:8765/](http://localhost:8765/).

## Fonts

- **Playfair Display** — headlines  
- **Source Sans Pro** — body & UI  

Images are CSS placeholders (rounded); swap for real assets when ready.
