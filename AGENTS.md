# AGENTS.md

## Technical & architecture rules

- Microsoft Clarity analytics: the tracking script (project ID `upky6ovmbb`) lives in `index.html`; data is pulled through the `clarity-report` edge function using the `CLARITY_API_TOKEN` secret (Clarity Data Export API, `https://www.clarity.ms/export-data/api/v1/project-live-insights`, `numOfDays` 1–3, up to 3 dimensions: Browser, Device, Country/Region, OS, Source, Medium, Campaign, Channel, URL). Traffic-report builds should combine this with project analytics; never surface the token.
