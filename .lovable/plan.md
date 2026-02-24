
# Add SEO Meta Data to All Routes

## Summary
Several pages are missing the `<SEO>` component and therefore have no custom page titles, descriptions, or canonical URLs. This plan adds unique, descriptive meta data to every route that currently lacks it.

## Pages Already Covered (no changes needed)
- Home, About, Classes, Pricing, Locations, OurStudios, GiftCards, FAQ, Terms, Blogs, Shop, NotFound, Limerick, WorkshopAnestiMano, BookAll, BookingGentleFlow, BookingMatClasses
- All 5 Studio pages (Clane, Kildare, Blessington, Enfield, Bray) -- handled via StudioPage component

## Pages Missing SEO (8 files to update)

| Page | Title | Description | Canonical |
|------|-------|-------------|-----------|
| **Schedule** | Class Schedule \| balance studios | View live class schedules across all 5 balance studios. Book Reformer Pilates in Clane, Kildare, Blessington, Enfield & Bray. | /schedule |
| **BookingBray** | Book Bray \| balance studios | Book your Reformer Pilates class at balance Bray. View available times and reserve your spot. | /booking/bray |
| **BookingClane** | Book Clane \| balance studios | Book your Reformer Pilates class at balance Clane. View available times and reserve your spot. | /booking/clane |
| **BookingEnfield** | Book Enfield \| balance studios | Book your Reformer Pilates class at balance Enfield. View available times and reserve your spot. | /booking/enfield |
| **BookingKildare** | Book Kildare \| balance studios | Book your Reformer Pilates class at balance Kildare Town. View available times and reserve your spot. | /booking/kildare |
| **BookingBlessington** | Book Blessington \| balance studios | Book your Reformer Pilates class at balance Blessington. View available times and reserve your spot. | /booking/blessington |
| **TestBooking** | Test Booking \| balance studios | Test booking page. | noindex |
| **Instructors** | Our Instructors \| balance studios | Meet the expert Reformer Pilates instructors at balance studios. Fully qualified, passionate, and dedicated to helping you move better. | /instructors |

## Technical Details
- Import `SEO` from `@/components/SEO` in each file
- Add `<SEO title="..." description="..." canonical="..." />` as the first child inside the outermost `<div>` or fragment
- TestBooking gets `noindex={true}` since it's a test page
- All meta data follows the existing lowercase "balance studios" brand convention
