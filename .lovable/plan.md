# SEO deep dive: helping balance rank higher on Google

## Where you stand today (Semrush estimates, Irish market)
- Roughly 930 visits a month from Google, across 74 search terms.
- Your strongest terms:
  - "balance pilates", "pilates kildare" and "reformer pilates kildare": #1
  - "pilates limerick" (about 1,000 searches a month), "reformer pilates limerick" and "pilates bray": #3
  - "pilates classes limerick": #4
  - "pilates wicklow": #7
  - "pilates studio" (about 1,900 searches a month): #13, which is page 2
- **The big finding:** for every town search, Google shows your home page, never the studio page. A dedicated, rich Limerick or Bray page usually beats a general home page. That's the main reason you're #3 rather than #1.
- Google Search Console isn't connected, so we can't yet see real clicks or which pages Google has indexed.

## The plan, in order of impact

### 1. Turn each studio page into the page Google picks for that town
For each of Limerick, Clane, Kildare, Blessington, Enfield and Bray:
- A clear title, for example "Reformer Pilates Limerick | balance studios".
- A short description under 160 characters that mentions the town.
- A main heading like "Reformer Pilates in Limerick".
- About 150 to 250 words of real local text:
  - where the studio is and nearby landmarks
  - parking
  - the classes that run there (following the class rules: Enfield Reformer only; Yoga at Limerick and Kildare)
  - who it suits
  - the intro offer
- A small "Pilates near Limerick" FAQ.
- Local business details for Google (address, hours, phone, map) on every studio page, so each one can appear in the map results.

### 2. Link to the studio pages more strongly
- The home page studio section and the footer will link to each studio with wording like "Reformer Pilates Limerick", not just "Limerick".
- Class types and pricing pages will link to the studios too.

### 3. Fix what Google's scan flagged
- The home page main heading is only "balance". Add hidden-but-readable wording ("Reformer Pilates studios in Limerick, Kildare, Wicklow & Meath") while the design stays exactly the same.
- Shorten the titles and descriptions that are too long: home, About, Pricing and the studio pages.
- Add question-and-answer details to the FAQ page so Google understands it.
- Give the icon-only buttons and the footer form fields proper names. This helps both Google and screen readers.
- Update the sitemap: add the missing real pages (Limerick booking, mat classes, gentle flow) and leave out test and hidden pages.
- Add a short AI summary file so ChatGPT and similar tools describe balance correctly.

### 4. Connect Google Search Console (needs you)
- Connect it in chat with one tap, verify the site, then submit the sitemap. This needs one publish.
- After that, I can show real Google clicks and confirm each studio page is indexed.

### 5. Things only you can do (biggest outside win)
- **Google Business Profile for each studio:** fill it in fully, add photos, post weekly, and ask happy clients for reviews. This drives the map results for "pilates near me".
- Get mentioned by local sites: Limerick and Kildare news, gyms, physios and wedding or wellness blogs.

### 6. Later, optional
- Blog posts aimed at searches people actually make, such as "reformer pilates for beginners" or "what to wear to reformer pilates". I'd pick these using Semrush data first.
- Bigger technical step: the site is built so Google sees each page only after it loads. Moving it to Lovable's newer setup ([what that gives you](https://lovable.dev/blog/building-apps-using-tanstack-start)) means every page arrives ready-made for Google. That helps, but it isn't urgent; steps 1 to 4 come first.

## What I need from you
- Phone number and any nearby landmark or parking details per studio that aren't already on the site. Otherwise I'll use what's there and won't make anything up.

## Technical details
- Per-studio SEO props and `LocalBusiness` JSON-LD in `StudioPage.tsx` via the existing `SEO` (Helmet) component. Add an sr-only span inside the home h1.
- `FAQPage` JSON-LD built from the FAQ data array.
- Audit `aria-label`s in Navigation, OurStudios and Footer.
- `public/sitemap.xml`: add `/booking/limerick`, `/booking/mat-classes` and `/booking/gentle-flow`; exclude `/test-booking` and `/locations` if it's a duplicate.
- New `public/llms.txt`.
- Search Console: connect, add the META tag to `index.html`, publish, verify, submit the sitemap.
