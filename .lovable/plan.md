
# Plan: Create Hidden Mat Classes Booking Page

## Overview
Create a dedicated booking page for Mat Classes that is accessible via a direct link from the Class Types page but not visible in the site navigation. This page will embed the Momence booking widget filtered specifically for mat classes using the tag ID you provided.

---

## What Will Change

### 1. New Page: Mat Classes Booking
- **Location**: `/booking/mat-classes`
- **Not in navigation**: The page won't appear in the menu - only accessible via direct link
- **Design**: Matches existing booking pages with the Balance Studios styling
- **Content includes**:
  - Page title: "Book Mat Classes"
  - Subtitle: "Traditional Pilates on the mat - available at Kildare Town only"
  - Embedded Momence widget filtered by tag ID `240428`

### 2. Update Mat Class Card Link
- Change the "Book Class" button on the Mat Class card from the external Momence membership link to the new internal page (`/booking/mat-classes`)
- Uses standard `<a href>` tag (not React Link) to ensure full page reload - this is the workaround for the known Momence widget loading limitation

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/pages/BookingMatClasses.tsx` | Create new booking page with Momence widget |
| `src/App.tsx` | Add route for `/booking/mat-classes` |
| `src/pages/Classes.tsx` | Update Mat Class bookingLink to `/booking/mat-classes` |

---

## Technical Details

### Momence Widget Configuration
The widget will use your provided embed code with:
- `host_id`: 62930
- `tag_ids`: [240428] (filters to mat classes only)
- `location_ids`: [] (shows all locations, though mat is Kildare only)
- `default_filter`: show-all

### Script Loading Pattern
Following the established pattern from other booking pages:
- Script injected via `useEffect` on component mount
- Cleanup on unmount to prevent memory leaks
- Container div with `id="ribbon-schedule"` for widget placement
