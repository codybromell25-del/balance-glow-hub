# Swap hero image on Mat/Barre/Yoga ad page

Replace the stock studio hero on `/limerick-mat-opening` with the uploaded balance studio interior photo (reformer studio shot with sage walls, mirrors, and the "balance" signage).

## Changes

1. **Copy** the uploaded image into the project:
   - `user-uploads://Kildare_3.jpg` → `src/assets/balance-studio-interior-hero.jpg`

2. **Edit** `src/pages/AdsLimerickMatBarreYoga.tsx`:
   - Swap the hero import from `@/assets/stock/stock-mby-hero.jpg` to the new asset.
   - Keep everything else identical (the three class-type cards still use the mat / barre / yoga stock images, as previously approved).

## Note

The image is a reformer pilates interior (not a mat/barre/yoga shot), but it's a real balance studio photo which fits the brand "no stock photos for hero" preference. The class-type cards below still visually represent mat, barre and yoga via the stock images.
