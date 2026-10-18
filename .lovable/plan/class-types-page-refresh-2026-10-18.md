# Class types page refresh

## What's wrong today
- Seven identical boxed cards with thick sage borders, icon circles and bullet lists: heavy and repetitive.
- The difficulty dots use the pink brand colour (not allowed), and the headings are bold rather than the house italic serif.
- There are no photos, so every class looks the same.

## New look (phone-first, chic)
1. **Quick jump strip** under the intro: small pills (Classic, Sculpt, Challenge, Gentle Flow, Mat, Barre, Yoga) that scroll sideways on phones and jump to each class.
2. **Editorial class sections** instead of boxes. Each class gets:
   - a large rounded photo (alternating left and right on desktop, stacked on phones)
   - a big italic serif name with a sage dot, e.g. "sculpt."
   - a one-line "who it's for" and a sage intensity bar (1–5) with a label
   - 3 short points (trimmed from 5) and small chips showing where it runs (e.g. "Limerick · Kildare")
   - a sage "Book" button plus a quiet "View timetable" link
3. **Thin dividers** and generous cream space between classes, with no borders or shadows.
4. **Final section** "not sure where to start?" keeps the Classic recommendation and the "View our studios" button, styled to match the thank-you page.

## Photos
- Until your photos arrive, I'll use the existing real studio photos on the site (no stock).
- Please **don't share your WeTransfer login**. Download the files and drop them straight into this chat. I'll match one photo to each class.

## Technical details
- Rewrite `src/pages/Classes.tsx` only. Remove the inline gradient styles and the `bg-primary` dots, and use the `sage` token, `font-heading italic` and the existing scroll animation.
- Booking links stay as plain `<a>` tags (Momence reload rule).
- Check the page on phone and desktop with Playwright.
