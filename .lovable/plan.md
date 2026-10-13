# Instagram strip on the home page

Add a "Follow us on Instagram" strip to the home page, sitting between the testimonials and the footer.

## What it looks like

- A row of 6 square photos that scrolls sideways on phones and shows as a neat grid on computers.
- Heading in the brand's italic serif: "follow the journey" with "@balancereformer" underneath.
- Tapping any photo opens your Instagram profile (@balancereformer) in a new tab.
- Soft sage hover effect on each photo; matches the cream/black/sage brand, no pink anywhere.

## The photos

- Hand-picked: I'll use 6 of the best existing studio photos already on the site as the starting set.
- If you'd rather show real Instagram posts, send me 6–8 favourites (or screenshot them) and I'll swap them in — takes a minute.

## Technical details

- New component `src/components/home/InstagramStrip.tsx`, added to `src/pages/Index.tsx` after `TestimonialsSection`.
- Plain `<a>` links to https://www.instagram.com/balancereformer/ (new tab, `rel="noopener"`).
- Images lazy-loaded so the page stays fast and scrolling stays smooth on phones.
- No backend, no tokens, nothing to maintain.
