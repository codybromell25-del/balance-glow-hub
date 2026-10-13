# Returning-visitor nudge + cookie consent

## On your Meta question
No. Missing a cookie banner is **not** why Meta numbers look off. Right now Meta is counting *more* than a compliant setup would, because it runs for everyone without asking. The usual reasons Meta numbers look off are:
- iPhone privacy settings and ad blockers stop the pixel from loading.
- The booking and payment happen inside Momence, so Meta never sees the purchase.

A banner makes the site legally compliant in Ireland/EU, but Meta will count a bit *less*, because it only sees visitors who click Accept. Ad clicks and views are still counted either way.

## What visitors will see
1. **Cookie banner** (first visit, bottom of the screen, balance styling): "Accept" and "Reject" given equal weight, plus a short link to the cookie policy. A small "Cookie settings" link in the footer lets people change their mind later.
2. **"Still thinking?" intro offer popup**: shown once on a visitor's 2nd (or later) visit if they haven't clicked through to buy or book yet. It shows a short message, a photo and a button to the intro offer page. It appears after a few seconds and won't show again for 7 days if they close it.
3. The popup won't show on booking, checkout or careers pages, or to anyone who has already clicked a Buy/Book/intro offer button.

## How it decides who is "slow to buy"
- The visitor's own browser keeps a small note: number of visits, whether they've ever clicked a Buy/Book/intro offer button, and when they last closed the popup.
- "Visits" just means separate trips to the site. Someone who comes today and again tomorrow has made 2 visits.
- Anyone who has **ever** clicked Buy or Book on that phone or computer is marked as a customer and never sees the popup again.
- Limits: a customer who bought on a different phone, booked only through the Momence app, or cleared their browser history may see the popup once. Closing it hides it for 7 days, and the popup sends them to the intro offer page, where Momence checks who is eligible.
- None of this is sent anywhere. It only runs if they accepted cookies.

## Tracking changes
- Meta Pixel, Google Analytics and Clarity stop loading until the visitor accepts (EU law). Visitors outside the EU/UK aren't asked, and tracking runs as normal for them.
- Each acceptance or rejection is saved with the date and the version of the banner wording, so you have a record of consent.
- The cookie and privacy pages are updated to describe the popup and the consent choice.

## Technical details
- New `CookieConsent` component and `consent` helper using localStorage (`balance_consent` = {choice, version, timestamp}). Region check via `/cdn-cgi/trace`; show the banner on failure.
- Move the GA, Clarity and fbq loaders out of `index.html` into a `loadTrackers()` that runs after consent (or right away outside consent regions). Withdrawing consent stops future loads.
- New `ReturningVisitorPopup` (shadcn Dialog) mounted in App, excluded on `/booking/*`, `/careers` and `/intro-offer`. A delegated click listener on links to momence/stripe/`/intro-offer`/`/pricing` sets `converted=true`.
- Fire `fbq('trackCustom','ReturningVisitorNudge')` when the popup shows, so you can build a Meta audience from it.
- Footer gets a "Cookie settings" link. Update the Cookies and Privacy pages.
