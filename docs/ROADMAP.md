# AllergyTJ — Product Roadmap

> Last updated: 2026-04-07

## Completed

- [x] Core pollen risk estimation engine (seasonal calendar + weather modifiers)
- [x] 32 cities across all regions of Tajikistan
- [x] 5-day pollen risk forecast
- [x] Air quality display (US AQI, PM2.5, PM10)
- [x] Seasonal pollen calendar (month-by-month allergen guide)
- [x] GPS auto-detection of nearest city
- [x] Responsive mobile-first design
- [x] Vercel deployment with security headers (CSP, HSTS)
- [x] Local Flask dev server
- [x] 3-tier weather API fallback (Open-Meteo → wttr.in → seasonal-only)
- [x] Decoupled air quality fetch (independent of weather)
- [x] Project documentation (CLAUDE.md, updated README)

---

## Phase 1 — Reach and Discoverability

Priority: **Highest** | Goal: Users in Tajikistan can find and use this site

- [ ] Multilingual support — Russian/Tajik/English toggle; all UI text, city names, allergen names, risk labels, and advice in all 3 languages
- [ ] Trilingual SEO — `<html lang>` switching, `hreflang` alternate links, localized `<title>`, `<meta description>`, and `<meta keywords>` in EN/RU/TJ so search engines index the site for allergy/pollen queries in all 3 languages
- [ ] Open Graph + social meta tags — localized OG title/description for WhatsApp/Telegram sharing (primary sharing channels in Tajikistan)
- [ ] Favicon — branded icon for browser tabs and bookmarks
- [ ] Structured data (JSON-LD) — schema.org markup for health/weather tool so search engines understand what the page is
- [ ] Geo-targeting signals — proper `<meta>` geo tags for Tajikistan, register with Google Search Console, Yandex Webmaster (Yandex is widely used in Central Asia)

## Phase 2 — Instant, Frictionless Experience

Priority: **High** | Goal: Open the page, get your answer

- [ ] Auto-load Dushanbe on page open — show pollen risk immediately without requiring a button click
- [ ] Save preferred city in localStorage so it auto-loads on return visits
- [ ] Remove "Get Pollen Risk" / "Use GPS" buttons — data loads on city selection, GPS becomes a small icon or link
- [ ] Calm, focused UI — lead with risk banner + pollen cards; collapse weather details, AQI, forecast, and calendar behind expandable sections
- [ ] Reduce visual noise — fewer competing colors, more whitespace between sections, tighter typography scale (3-4 sizes max)

## Phase 3 — Daily Utility

Priority: **Medium** | Goal: Make it stickier and useful every day

- [ ] Allergy symptom tips/recommendations based on current risk level
- [ ] Offline support with a service worker (cache last-viewed city for spotty connectivity)
- [ ] "Last updated" timestamp to show data freshness
- [ ] UV index alongside pollen and AQI (Open-Meteo provides this)
- [ ] About / How it works section accessible from the UI
- [ ] Loading skeleton/shimmer states instead of plain text status
- [ ] Share button — shareable snapshot/link of current conditions

## Phase 4 — Accuracy and Polish

Priority: **Medium-Low** | Goal: Better data, cleaner experience

- [ ] Refine pollen calendar with elevation-adjusted bloom timing (highland cities bloom later)
- [ ] Add more granular regional allergen data (e.g., Dushanbe urban vs Khatlon agricultural)
- [ ] Cross-reference with historical weather patterns for trend analysis
- [ ] Dark mode toggle
- [ ] Hourly pollen risk breakdown (morning vs afternoon vs evening)

## Phase 5 — Platform Growth (requires backend)

Priority: **Lower** | Goal: Expand reach and engagement

- [ ] Progressive Web App (PWA) — installable on mobile home screens
- [ ] Push notification support (daily pollen alert for selected city) — *requires backend/service worker*
- [ ] Personal allergy profile — let users mark which allergens affect them, personalize risk
- [ ] Community reporting — let users submit "how I feel today" to crowdsource pollen data — *requires backend*
- [ ] Monthly/seasonal summary reports (trends over time)
- [ ] Public API endpoint for other apps to consume AllergyTJ data — *requires backend*

---

## Design Principles

These guide decisions when evaluating new features:

1. **Zero config** — No API keys, no accounts, no sign-up. Works immediately.
2. **Single-file simplicity** — Resist splitting until complexity genuinely demands it.
3. **Offline-first mindset** — Tajikistan has variable connectivity. Cache aggressively.
4. **Accuracy over precision** — The model is an estimate. Communicate uncertainty honestly.
5. **Tajikistan first** — This app serves Tajikistan only. Every feature should fit the local context.
