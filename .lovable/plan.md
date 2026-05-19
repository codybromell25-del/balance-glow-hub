# Two hidden ad landing pages — Limerick

Build two standalone, conversion-focused landing pages designed for paid ads. Both are hidden from the main site (not linked in nav/footer, excluded from sitemap, `noindex`), include the phrase **"It's all about balance"**, and use the existing brand system (sage primary, Libre Baskerville headings, cream background).

Both follow the same structural pattern as `src/pages/IntroOfferLimerick.tsx` (minimal logo-only header, hero, single offer card, social proof, what-to-expect, final CTA, tiny footer) — but each is single-offer (not two) and ad-optimised.

---

## Page 1 — Limerick Reformer ad page

- **Route:** `/limerick-reformer-opening`
- **File:** `src/pages/AdsLimerickReformer.tsx`
- **Offer:** 3 Reformer Pilates classes for **€50**
- **CTA link:** `https://momence.com/balance/membership/Launch-offer---3-Reformer-classes-for-%E2%82%AC45/766017` (existing intro Momence link — user confirmed "send to the normal 3 for 50 intro offer")
- **Imagery:** real studio photography. User will upload images one-by-one — page will start with the existing Limerick studio photos already in `src/assets/` (limerick-studio-2..6, intro-offer-hero) as placeholders, then swap as new uploads arrive.

## Page 2 — Limerick Mat / Barre / Yoga ad page

- **Route:** `/limerick-mat-opening`
- **File:** `src/pages/AdsLimerickMatBarreYoga.tsx`
- **Offer:** 3 Mat / Barre / Yoga classes for **€40** (mix & match, 30-day expiry from first class)
- **CTA link:** `https://momence.com/balance/membership/Intro-Offer---3-Mat-%2F-Barre-%2F-Yoga-classes-for-%E2%82%AC40/771466`
- **Imagery:** approved stock photography of mat pilates, barre and yoga movements (3 high-quality stock images sourced and saved into `src/assets/stock/`). Hero image will be a strong mat/barre/yoga stock shot.
- **Location messaging:** Limerick-only ("the only balance studio offering all three").

---

## Shared structure (both pages)

1. **Logo-only header** (no nav, removes exit paths — standard ad-LP pattern)
2. **Hero** — full-bleed image, headline, sub, offer chip, single primary CTA button
3. **Offer card** — price, what's included (4 bullets), big CTA
4. **"It's all about balance" brand band** — short copy section featuring the tagline prominently
5. **What to expect** — 3-icon grid (arrive early / wear comfy / we guide you)
6. **Social proof / studio imagery band**
7. **Final CTA** — repeat offer + button
8. **Tiny footer** — copyright + Terms link only (no nav)

## Hiding from main site

- **Not** added to `Navigation.tsx` or `Footer.tsx`
- **Not** added to `public/sitemap.xml`
- `<SEO noindex />` on both pages
- Routes added to `src/App.tsx` only

## Ad / conversion optimisations

- Single CTA repeated 3× per page (hero, offer card, final CTA) — same Momence URL, all `target="_blank"`
- Above-the-fold price + CTA visible without scroll on mobile
- No external links except the Momence checkout
- Fast LCP: hero image preloaded, all other imagery `loading="lazy"`
- Sticky mobile CTA bar (bottom of viewport on small screens) for instant tap-to-buy
- Urgency microcopy ("Limited time", "Limerick launch offer")
- Trust signals: small-group, expert-led, beginner-friendly bullets

## Files to add/change

**New:**
- `src/pages/AdsLimerickReformer.tsx`
- `src/pages/AdsLimerickMatBarreYoga.tsx`
- `src/assets/stock/` — 3 stock images (mat, barre, yoga) for page 2

**Edited:**
- `src/App.tsx` — register two new routes

**Not edited:** `Navigation.tsx`, `Footer.tsx`, `sitemap.xml` (keeps them hidden).

## After approval

I'll build both pages immediately using existing Limerick studio assets for page 1. As you upload new reformer images one-by-one, I'll slot them into page 1. For page 2 I'll source stock images for mat / barre / yoga.
