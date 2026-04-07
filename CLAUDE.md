# CLAUDE.md — AllergyTJ

## Project Overview

AllergyTJ is a seasonal allergy (pollen risk) tracker for Tajikistan. It estimates pollen levels by combining a curated seasonal pollen calendar with live weather and air quality data from Open-Meteo. No pollen monitoring stations exist in Tajikistan, so the model is inference-based.

**Live site**: https://allergytj.vercel.app

## Architecture

This is a **zero-dependency static site** — the entire app lives in a single `index.html` file (HTML + CSS + inline JS). There is no build step, no framework, and no bundler.

- `index.html` — Complete frontend: UI, pollen calendar data, risk algorithm, API calls to Open-Meteo
- `api_proxy.py` — Local development only. Flask server that serves `index.html` on `localhost:5000`
- `vercel.json` — Production deployment config (static hosting, security headers, SPA rewrite)

### Data flow

1. Page loads → auto-fetches data for Dushanbe (or last saved city from localStorage)
2. User changes city dropdown → data fetches instantly (no button, `onchange` trigger)
3. GPS icon (📍) finds nearest city and fetches automatically
4. Frontend calls Open-Meteo Forecast API for weather (temp, humidity, wind, precipitation)
5. Frontend calls Open-Meteo Air Quality API for AQI, PM2.5, PM10
6. JS combines weather with the built-in seasonal pollen calendar to compute risk scores
7. All computation happens client-side — no backend needed in production
8. Rapid city changes use abort-and-replace (`_fetchId`) to prevent stale data

### External APIs (no keys required)

- `https://api.open-meteo.com` — Weather forecast (primary)
- `https://wttr.in` — Weather fallback (used when Open-Meteo is down)
- `https://air-quality-api.open-meteo.com` — Air quality (CAMS, always fetched independently)

### Weather API Fallback (3-tier)

The app uses a sequential fallback to handle weather API outages:

| Tier | Source | Timeout | Coverage | UI indicator |
|------|--------|---------|----------|--------------|
| 1 | Open-Meteo | 6s | Full weather + 5-day forecast | None (normal) |
| 2 | wttr.in | 5s | Current weather + 2-day forecast | Yellow warning |
| 3 | Seasonal-only | — | Calendar baseline, no weather adjustment | Red warning |

- Air quality is **always fetched independently** — never blocked by weather failures
- The wttr.in adapter (`fetchWeatherFromWttr`) reshapes its response to match the exact Open-Meteo structure so all render functions work unchanged
- `mapWttrWeatherCode` converts WWO weather codes to WMO codes used by `wxDescription()`
- `fetchWithTimeout` uses `AbortController` to properly cancel requests on timeout

### Internationalization (i18n)

The app supports 3 languages: English, Russian, and Tajik.

- **Translation files**: `lang/en.json`, `lang/ru.json`, `lang/tj.json` (~148 keys each)
- **`t(key, params)`** helper looks up the current language, falls back to English, then to the raw key
- **`setLanguage(lang)`** updates all DOM text (via `data-i18n` sweep), city dropdown, buttons, calendar, meta tags, OG tags, and JSON-LD
- **Browser auto-detection**: First visit detects `navigator.language` (ru → Russian, tg/tj → Tajik, else English)
- **localStorage persistence**: Saved as `allergytj-lang`, restored on page load
- **Language code**: Tajik uses `tj` internally, `tg` for `<html lang>` attribute (ISO 639-1)
- **Re-render on switch**: `lastRenderState` stores fetch results so language switch re-renders without re-fetching

### SEO and Discoverability

- Localized `<meta description>`, `<meta keywords>`, Open Graph tags (`og:title`, `og:description`, `og:locale`)
- JSON-LD structured data (`WebApplication` schema for Google/Yandex rich results)
- Inline SVG emoji favicon (🌿)
- All meta tags update dynamically on language switch

## Development

### Run locally

```bash
pip install -r requirements.txt
python api_proxy.py
```

Opens at http://localhost:5000. The Flask server is only a convenience wrapper — it just serves the static HTML file.

### Alternative (no Python)

Open `index.html` directly in a browser. GPS auto-detection requires HTTPS, so it won't work over `file://`, but city selection works fine.

## Deployment

### Vercel (production)

The site deploys as a **static site** on Vercel. Key config in `vercel.json`:
- `outputDirectory: "."` — serves from the repo root
- SPA rewrite: all routes → `index.html`
- Security headers: CSP, HSTS, X-Frame-Options, etc.

Push to `master` triggers auto-deploy via Vercel Git integration.

### Manual deployment

Since the app is a single static HTML file, it can be deployed anywhere that serves static files:
1. Copy `index.html` to the hosting root
2. Ensure the server allows outbound requests to `api.open-meteo.com`, `air-quality-api.open-meteo.com`, and `wttr.in`
3. HTTPS is required for GPS geolocation to work

## Conventions

- **Single-file frontend**: All HTML, CSS, and JS stay in `index.html`. Do not split into separate files unless the app grows significantly.
- **No API keys**: The app must remain zero-config. Only use free, keyless APIs.
- **No build step**: No webpack, no npm, no transpilation. Keep it simple.
- **32 cities**: City data is embedded in the JS. When adding cities, include lat/lon and region. **Important**: GPS city matching uses `parseFloat()` comparison, not string comparison, because JS drops trailing zeros from numbers (e.g., `68.7740` → `"68.774"`).
- **Pollen calendar**: Monthly intensity values (0-10 scale) per allergen are hardcoded in JS. Update these based on botanical/clinical data for Tajikistan.

## Files to never commit

- `.env`, credentials, API keys
- `__pycache__/`, `*.pyc`
- `.vercel/` (contains project-specific IDs)
- `node_modules/` (shouldn't exist, but just in case)
