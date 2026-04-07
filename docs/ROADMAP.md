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
- [x] Multilingual support (EN/RU/TJ) — language toggle, external translation files (lang/*.json), browser auto-detection, localStorage persistence
- [x] Trilingual SEO — localized meta keywords, Open Graph tags, JSON-LD structured data
- [x] Favicon — inline SVG emoji (🌿)
- [x] Auto-load Dushanbe on page open — instant data, no button click
- [x] Save preferred city in localStorage — return visitors see their city automatically
- [x] Remove buttons — data loads on city dropdown change, GPS is a 📍 icon
- [x] Abort-and-replace pattern for rapid city switching
- [x] Mobile layout fix — language dropdown top-right, GPS icon inline, touch targets, spacing
- [x] Yellow/moderate contrast accessibility fix (dark text on yellow banner)
- [x] Language switcher as dropdown (replaces button toggles)

---

## Next Up

Priority: **High-Medium**

- [ ] Geo-targeting signals — `<meta>` geo tags for Tajikistan, register with Google Search Console, Yandex Webmaster (manual, postponed)

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
