## Update Taster Classes page with June 2026 schedule

I fetched all 9 Momence booking links. Here's what I'll put on `/taster-classes` (sorted chronologically):

| # | Date | Time | Instructor |
|---|------|------|------------|
| 1 | Sat, Jun 6, 2026 | 11:00 AM | Lara |
| 2 | Mon, Jun 8, 2026 | 12:30 PM | Val |
| 3 | Wed, Jun 10, 2026 | 8:00 PM | Val |
| 4 | Sat, Jun 13, 2026 | 10:00 AM | Angela |
| 5 | Mon, Jun 15, 2026 | 7:00 PM | Lisa |
| 6 | Thu, Jun 18, 2026 | 10:30 AM | Lisa |
| 7 | Fri, Jun 19, 2026 | 9:30 AM | Val |
| 8 | Tue, Jun 23, 2026 | 12:30 PM | Lisa |
| 9 | Sun, Jun 28, 2026 | 9:00 AM | Val |

## Changes

- Edit `src/pages/TasterClasses.tsx`: replace the 4-entry `tasterLinks` array with the 9 entries above, each pointing to its correct Momence URL.
- Button labels will use the existing format: `"Sat, Jun 6, 2026 · 11:00 AM"` (no instructor name, to match current style). Let me know if you'd like instructor names included.
- No other layout/styling changes — the existing grid stacks all 9 buttons cleanly on mobile and desktop.