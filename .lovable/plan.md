

# Fix Google Indexing and Dead Link Redirects

## Problem Summary

Google is reporting "redirect not found" errors because:
1. **No SPA fallback routing** - When Google accesses pages like `/studio/clane` directly, the server doesn't know to serve the app
2. **Dead shop link in sitemap** - The sitemap includes `/shop` but no route exists for it
3. **Static canonical URL conflict** - The `index.html` has a hardcoded canonical URL pointing to homepage, which may override page-specific canonical tags
4. **No automatic redirect for broken links** - Dead links show a static 404 page instead of redirecting to homepage

---

## What I'll Do

### 1. Create SPA Redirect File
Create `public/_redirects` with rules that tell the hosting platform to serve the app for all routes, allowing React Router to handle navigation properly.

### 2. Remove Shop from Sitemap
Remove the `/shop` entry from `public/sitemap.xml` since the shop page is not active.

### 3. Update 404 Page with Auto-Redirect
Modify the NotFound page to automatically redirect users to the homepage after 3 seconds. This ensures:
- Users don't get stuck on broken pages
- Google sees clear redirect behaviour
- Smooth user experience with countdown message

### 4. Remove Static Canonical from index.html
Remove the hardcoded `<link rel="canonical" href="https://balancestudios.ie/">` from the HTML head, since each page already sets its own canonical URL through the SEO component. Having both can confuse search engines.

---

## Technical Details

| File | Action |
|------|--------|
| `public/_redirects` | Create new - SPA routing configuration |
| `public/sitemap.xml` | Edit - Remove shop entry (lines 48-53) |
| `src/pages/NotFound.tsx` | Edit - Add 3-second auto-redirect with countdown |
| `index.html` | Edit - Remove static canonical tag (line 45) |

### NotFound Page Behaviour
```text
User lands on unknown route
         |
         v
Show "Page not found" message
with 3-second countdown
         |
         v
Auto-redirect to homepage
(also provide immediate button)
```

---

## Expected Results

After publishing these changes:
- All valid pages will be properly served when accessed directly via URL
- Any dead or unknown links will automatically redirect to the homepage
- Google will be able to crawl and index all studio pages correctly
- No more "redirect not found" errors in Search Console
- Cleaner sitemap with only active pages

