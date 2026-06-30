Hide the Taster Classes page from the site.

**Changes:**
1. **Navigation** — Remove "Taster Classes" from the desktop and mobile menu in `src/components/Navigation.tsx`.
2. **Routing** — Remove the `/taster-classes` route from `src/App.tsx`. Visitors hitting that URL will fall through to the 404 page.