# Pricing page refresh

Make the pricing page match the calmer look of the new Class Types and Our Studios pages, and make choosing a pack quicker on phones. All prices, pack sizes and Momence links stay the same.

## What's wrong now
- Heavy boxed cards with thick borders, bold (not italic) headings, and gradient buttons on every card. Feels busy.
- "Popular" sits on both the 1-class and 10-class packs, so neither stands out.
- No price per class on packs, so the value of bigger packs is hidden.
- Five pack cards stack into a long scroll on phones.
- "Valid 310 days" / "Valid 610 days" on the 10 and 20 packs look like typos (still unconfirmed).

## New layout (top to bottom)
1. **Header** - italic "pick your pack." with sage dot, one short line: buy a pack, then book any of the 6 studios.
2. **Reformer / Mat, Barre & Yoga toggle** - slimmer sage pill switch (kept).
3. **Intro offer feature** - wide strip with a real studio photo on one side and "3 classes for €50." in big italic serif on the other, with a single sage "Claim intro offer" button. First-time clients only, 30 days.
4. **Class packs as a clean list** - one row per pack: "10 classes" | €215 | €21.50 per class | validity | "Buy". Thin dividers, no boxes. A "best value" sage tag on one pack only. On phones each row is compact, so all five fit on about one screen.
5. **Memberships** - same row style, with price per class and "renews monthly" note; one "most popular" tag.
6. **How it works** - three small steps: buy - book in the app - arrive 10 mins early.
7. **Short FAQ** (tap to open) - Can I use my pack at any studio? Do classes roll over? Can I share my pack? What's the cancellation policy?

All "Buy" buttons keep opening Momence in a new tab. The bottom book bar stays hidden here.

## Questions to confirm while building
- Should the 10-class pack say 310 days and 20-class 610 days, or something else (e.g. 120 / 180)?
- Which pack should carry "best value"? Default: 10 classes.

## Technical details
- Rewrite src/pages/Pricing.tsx using a single PACKS / MEMBERSHIPS data array per class type; compute per-class price from price/classes.
- Replace inline hex gradients with sage design tokens; remove `border-primary` (renders pink).
- FAQ via existing shadcn Accordion. Intro photo from existing src/assets studio shots.
- Verify on 390px and desktop with Playwright.
