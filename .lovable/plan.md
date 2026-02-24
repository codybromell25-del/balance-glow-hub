
# Fix Dynamic Meta Data: Remove Hardcoded Tags from index.html

## Problem
The `index.html` file contains hardcoded `<title>`, `<meta name="description">`, Open Graph, and Twitter Card tags. These are the homepage-specific values, but since this is a Single Page Application, every route loads the same `index.html` first. The `react-helmet-async` `<SEO>` component on each page is supposed to override these dynamically, but the static tags are interfering -- crawlers and link previews often pick up the hardcoded homepage values instead of the page-specific ones.

## Solution
Remove all dynamic meta tags from `index.html` and let `react-helmet-async` manage them entirely on a per-page basis. Keep only the tags that are truly global and should never change (viewport, robots, favicons, fonts, tracking scripts, geo tags, Google verification).

## What Gets Removed from index.html
- Line 49: `<title>balance studios | for those who expect more</title>`
- Line 50: `<meta name="description" content="...">` 
- Line 51: `<meta name="author" content="balance studios">`
- Lines 75-83: All `<meta property="og:...">` tags
- Lines 85-89: All `<meta name="twitter:...">` tags

## What Stays in index.html (unchanged)
- Google Site Verification
- Tracking scripts (GA, GTM, Clarity, Meta Pixel)
- Viewport, robots directive
- Favicon and manifest links
- Theme color
- Geo tags for local SEO
- Font preconnects and stylesheets
- Noscript fallback content

## Why This Works
Each page already has a `<SEO>` component that sets title, description, canonical, OG, and Twitter tags dynamically. By removing the static duplicates from `index.html`, `react-helmet-async` becomes the single source of truth, and every route will display its own unique metadata.

## Technical Details

**File changed:** `index.html` -- remove 11 lines of hardcoded meta tags (title, description, author, OG block, Twitter block).

No other files need changes. All pages already have their `<SEO>` component with unique props configured from the previous update.
