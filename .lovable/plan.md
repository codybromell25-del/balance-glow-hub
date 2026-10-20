# Intro offer pop-up for first-time visitors (+ cookie banner)

## Do we need "accept cookies" for this?
Not for the pop-up itself. Remembering "this person has already seen the pop-up" is a small note kept on their own phone, which counts as part of how the site works, so it doesn't need consent.

The site does need a cookie banner for another reason. The Meta Pixel tracks visitors for ads, and in Ireland that's only allowed once a visitor agrees. Right now the pixel runs for everyone and there's no banner, so it's worth fixing both together.

## What visitors will see
1. **First visit:** a slim cream cookie bar sits at the bottom with two equal buttons, "Accept" and "Reject", plus a link to /cookies.
2. **Then:** about 4 seconds after they choose, the intro offer pop-up appears once. It has the balance look: a studio photo, "new here?" in the italic heading font, "3 Reformer classes for €50", a sage "Claim intro offer" button that opens Momence in a new tab, and a "Maybe later" link.
3. **Return visits:** neither the bar nor the pop-up appears again (the pop-up comes back if they clear their browser).
4. **Not shown on:** /thank-you, the six studio pages, /pricing, /booking/* and the Limerick coming-soon page, which already has its own pop-up. Those visitors are already buying or booking.

## Tracking
- The Meta Pixel only starts after "Accept". If someone rejects, there's no tracking.
- The /thank-you Purchase event follows the same rule.
- Expected impact: Meta will report fewer events, because only people who accept are counted. That's normal and legally required.

## Technical details
- New `CookieConsent.tsx` saves `balance_consent` = accepted/rejected in localStorage and fires a `consent-changed` event.
- index.html: wrap the pixel in a `window.loadMetaPixel()` function that only runs when consent is accepted (on load if already accepted, or when the visitor clicks Accept). ThankYou.tsx checks for consent before tracking.
- New `IntroOfferPopup.tsx` uses the shadcn Dialog, waits for a consent choice, shows after 4s if `balance_intro_seen` isn't set, sets that flag when shown, and skips the excluded routes. The link is a plain `<a>` to the existing intro offer URL.
- Both components are mounted once in App.tsx.
- Phone first (393px). I'll check with Playwright on phone and desktop: first visit, return visit and excluded pages.
