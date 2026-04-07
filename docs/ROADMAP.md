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

---

## Phase 1 — Polish and Reliability

Priority: **High** | Goal: Production-ready quality

- [ ] Add a favicon and Open Graph meta tags for social sharing
- [ ] Add offline support with a service worker (cache last-viewed city)
- [ ] Add loading skeleton/shimmer states instead of plain text status
- [ ] Handle API errors gracefully with user-friendly messages and retry
- [ ] Add "last updated" timestamp to show data freshness
- [ ] Add a brief "About" or "How it works" section accessible from the UI

## Phase 2 — Enhanced User Experience

Priority: **Medium** | Goal: Make it stickier and more useful daily

- [ ] Save preferred city in localStorage so it loads automatically on return
- [ ] Add allergy symptom tips/recommendations based on current risk level
- [ ] Add push notification support (daily pollen alert for selected city)
- [ ] Dark mode toggle
- [ ] Multilingual support (Tajik, Russian, English)
- [ ] Add hourly pollen risk breakdown (morning vs afternoon vs evening)
- [ ] Share button — generate a shareable snapshot/link of current conditions

## Phase 3 — Data and Coverage

Priority: **Medium** | Goal: Better accuracy and broader reach

- [ ] Refine pollen calendar with elevation-adjusted bloom timing (highland cities bloom later)
- [ ] Add more granular regional allergen data (e.g., Dushanbe urban vs Khatlon agricultural)
- [ ] Cross-reference with historical weather patterns for trend analysis
- [ ] Add neighboring regions (border cities of Uzbekistan, Kyrgyzstan, Afghanistan)
- [ ] Integrate UV index data alongside pollen and AQI

## Phase 4 — Platform Growth

Priority: **Lower** | Goal: Expand reach and community

- [ ] Progressive Web App (PWA) — installable on mobile home screens
- [ ] Personal allergy profile — let users mark which allergens affect them, personalize risk
- [ ] Community reporting — let users submit "how I feel today" to crowdsource pollen data
- [ ] Monthly/seasonal summary reports (trends over time)
- [ ] Public API endpoint for other apps to consume AllergyTJ data

---

## Design Principles

These guide decisions when evaluating new features:

1. **Zero config** — No API keys, no accounts, no sign-up. Works immediately.
2. **Single-file simplicity** — Resist splitting until complexity genuinely demands it.
3. **Offline-first mindset** — Tajikistan has variable connectivity. Cache aggressively.
4. **Accuracy over precision** — The model is an estimate. Communicate uncertainty honestly.
5. **Tajikistan first** — Features should serve the local context before generalizing.
