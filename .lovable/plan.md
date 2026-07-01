Build a standalone preview page at `/font-preview` so the user can see how the homepage looks with Raleway body text and Libre Baskerville italic headings before committing site-wide.

## Plan

1. **Load Raleway font**
   - Add Google Fonts link for Raleway (400, 500, 600) to `index.html`.

2. **Create preview page**
   - New file: `src/pages/FontPreview.tsx`
   - Reconstruct key homepage sections (hero, stats bar, locations grid snippet) using copied/reused components.
   - Apply scoped font overrides:
     - Body text → `font-family: 'Raleway', sans-serif`
     - All headings → `font-family: 'Libre Baskerville', serif; font-style: italic` for the cursive/script effect
   - Add a floating pill label so the user knows they are on a preview page.

3. **Wire up route**
   - Add `/font-preview` route in `src/App.tsx`.
   - No nav link — user navigates directly via URL.
   - Page is `noindex` so it does not appear in search.

4. **Cleanup**
   - The font link in `index.html` stays even if the preview is removed later; the site only uses Raleway when explicitly told to, so the live site is unaffected until the user approves.

This gives the user a side-by-side-style preview without touching the production homepage.