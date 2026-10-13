# Site audit: look and feel and ease of use

Based on the Home, Pricing, Our Studios, Classes and Limerick pages, checked on phone and desktop. 90% of your visitors are on phones, so phone fixes come first.

## Fix first (errors visitors notice)
1. **Limerick says "Opening May 2026"** on Our Studios. That date has passed, so it makes the site look out of date. Change it to its opening hours or "Now open".
2. **Pricing: the 10 class pack says "Valid 310 days".** This looks like a typo (110? 10 months?). Please confirm the real number.
3. **Home page text says "Limerick Launch Offer Now Live"** in the Google description. That's old, so update it to the intro offer.

## Home page
4. **The main buttons are unclear.** "View More" doesn't tell people what happens next. Use "Claim intro offer, 3 for €50" as the main button and "Find a studio" as the second.
5. **The offer gets lost.** "Our Intro Offer: 3 Classes for €50" is thin text over a dark photo. Make it a clear badge or pill so it's the first thing people read.
6. **On desktop, the text touches the left edge** of the screen. Give it breathing room so it lines up with the logo.
7. **Studio photos have no extra info.** Each card shows only a name. Add the class types (Reformer, Mat, Barre) and a small "Book" button so people don't need an extra tap.
8. **The stats row** ("10,000 +") has an odd gap before the plus sign. Tidy the spacing.
9. **Add a short "New here? How it works" strip** (Buy a pack, Book in the app, Turn up) for first-timers. Bounce rate is around 50–60%.

## Navigation
10. **Desktop menu has 9 items** and feels crowded. Group Education, Careers and Our Story under "More", and make "Book" a filled button.
11. **On phones, the menu bar is tall** (about 110px) and eats into the screen. Slim it down.
12. **Add a sticky "Book a class" bar at the bottom on phones**, so the main action is always one tap away.
13. **The "Download our app" bar** is cut off or nearly hidden on phones. Show it properly or remove it on mobile.

## Pricing
14. **Very long scroll on phones.** Each pack is a tall card. Use slimmer cards and show the price per class (e.g. €21.50/class) so better value is obvious.
15. **Explain before people pay.** Add a short "What happens after I buy?" note and 3 quick FAQs (cancellation, what to bring, first class) under the packs.

## Our Studios
16. **The wording "let's make magic happen!"** feels off-brand next to "for those who expect more". Use calmer, premium copy.
17. **Add a photo to each studio card.** Right now they're text-only boxes, while the home page uses beautiful photos.

## General polish
18. **Use the same headline style everywhere** (some pages say "Pick Your Pack.", others don't).
19. **Gentle fade-in effects when scrolling**, used the same way on every page.
20. **Speed:** the large photos slow down phones. Shrink them and load them only when needed to cut waiting time.

## Suggested order
- **Round 1:** items 1–3, 4–5, 12 (quick wins with the biggest impact on bookings)
- **Round 2:** 7, 9, 10, 11, 14, 15
- **Round 3:** everything else

## Technical details
- Files: HeroSection, LocationsSection, SocialProofBar, Navigation, AnnouncementBanner, Pricing, OurStudios, Index SEO description.
- Sticky mobile bar: a new component in App, hidden on `/booking/*`, using plain `<a>` links (Momence reload rule).
- Images: convert to webp/avif, add `loading="lazy"`, and set width/height.
- All colours come from the existing tokens (cream, black, sage). No new colours.
