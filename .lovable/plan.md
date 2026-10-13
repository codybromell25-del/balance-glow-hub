# Centre the mobile hero composition

## Problem (measured)
On phones everything in the hero starts at 16px from the left and stops 63px short of the right edge — the copy and buttons sit left-of-centre with dead space on the right.

## Change (mobile only, desktop unchanged)

`src/components/home/HeroSection.tsx`:

1. Copy block: `w-[80vw]` + `mx-auto` + `text-center` on mobile so the badge, "balance." and "It's all about balance." are horizontally centred inside the 80% band. The "REFORMER PILATES" divider row is centred too.
2. Buttons block: `w-[80vw]` + `mx-auto` so the two full-width pills sit centred with equal margins (~31px each side). Buttons keep their current styling (sage "Claim intro offer", ghost "Find a studio") and stay pinned to the bottom of the photo with `mt-auto`.
3. Desktop (md and up) keeps the current left-aligned layout — `md:w-auto`, `md:text-left` (restore), no centring.

## Why centre everything rather than just the buttons
Mixed alignment (left text, centred buttons) looks like a bug. One centred stack reads intentional and suits the photo.

## Verify
Playwright at 393x779: check the badge, h1, tagline and both buttons are centred (equal left/right margins) and nothing overlaps the bottom "Prices / Book a class" bar; then check 1280px desktop is unchanged. Build must be clean.
