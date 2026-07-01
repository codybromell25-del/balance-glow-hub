## Site-wide font update: Libre Baskerville (italic) headings + Raleway body

### What changes
- **Headings**: Libre Baskerville, italic — the "cursive" script look from the preview.
- **Body**: Raleway — replaces Aileron everywhere.

### Implementation

1. **`index.html`**
   - Keep the Raleway Google Font link (already added for the preview).
   - Remove the Aileron font link/reference once no longer used.

2. **`tailwind.config.ts`**
   - Update the `fontFamily` tokens:
     - `body` / `sans` → `['Raleway', 'sans-serif']`
     - `heading` → `['Libre Baskerville', 'serif']` (already set)
   - This flips every `font-body`, `font-sans`, and default text to Raleway automatically.

3. **`src/index.css`**
   - Update the base `body` font-family to Raleway.
   - Add a global rule so all headings (`h1`–`h6` using `font-heading`) render in italic by default, matching the preview.
   - Remove any lingering Aileron `@font-face` or references.

4. **Spot-check overrides**
   - Search for hardcoded `font-family` inline styles (e.g. `HeroSection`, `FontPreview`, `SocialProofBar`) and either remove them (so they inherit the new tokens) or update them to Raleway / Libre Baskerville italic to stay consistent.
   - Confirm headings that should NOT be italic (e.g. nav logo "balance", small labels) get an explicit `not-italic` class so we don't over-italicize UI chrome.

5. **Cleanup**
   - Delete `src/pages/FontPreview.tsx` and its route from `src/App.tsx` once you're happy with the site-wide rollout (optional — I can keep it if you want a reference page).

### Quick questions before I build
1. Should **every heading** be italic (matching the preview exactly), or only the large display headings (hero, section titles) with smaller headings/subheads staying upright?
2. Keep the `/font-preview` page live afterwards, or remove it?
