# Meta Pixel conversion tracking via the thank-you page

## Where we are
- The Meta Pixel (ID 931336278913997) is installed site-wide in index.html and fires a PageView on every page.
- The /thank-you page fires a `Purchase` event once per visit, and reads `?value=` and `?currency=` from the URL so the purchase amount shows up in Meta.
- You've now set Momence to redirect buyers to https://balancestudios.ie/thank-you after checkout.

## What needs to happen

### 1. Pass the purchase value through the redirect (Momence side)
The pixel can only report a purchase value if the URL carries it. In Momence's redirect settings, set the thank-you URL to include the order total and currency if Momence supports placeholders, e.g.:
```
https://balancestudios.ie/thank-you?value={order_total}&currency=EUR
```
(Exact placeholder syntax depends on Momence — check their redirect/confirmation-page settings. If Momence can't inject the value, the Purchase event still fires, just without a revenue figure.)

### 2. Verify the click-to-purchase chain (Meta side)
- In Meta Events Manager, open the pixel → **Test events**, then run a real test: click through from a Meta ad (or append `?fbclid=test` is not enough — use the Events Manager test tool), buy on Momence, land on /thank-you, and confirm the `Purchase` event appears with value/currency.
- Check that the `fbclid` click ID survives the trip from the ad → site → Momence checkout → thank-you page. If Momence strips it, Meta can still attribute via the browser cookie (the pixel loads on both domains only if Momence's checkout pages also allow your pixel — worth checking whether Momence lets you add your pixel ID to their checkout; many booking platforms do).

### 3. Small code tweak on the thank-you page
- Read the value/currency from the URL as now, but also fall back gracefully if Momence passes different parameter names (e.g. `amount`, `total`). I'll adjust the page to accept the common variants once we know what Momence actually appends.
- Keep the once-per-visit guard so refreshes don't double-count.

### 4. Optional but recommended: exclude thank-you from PageView retargeting noise
Not required — skip unless you want clean audiences later.

## What I need from you
1. The exact redirect URL you've entered in Momence (so I can match the parameter names).
2. Whether Momence offers a setting to add your Meta Pixel ID to their checkout pages (usually under Marketing/Integrations in Momence settings).

## Steps after your answers
1. Update ThankYou.tsx to read Momence's actual parameter names.
2. Run a test purchase and confirm the Purchase event (with value) in Events Manager.
3. Publish.
