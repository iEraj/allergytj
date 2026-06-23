# AllergyTJ

**Pollen risk & air quality tracker for Tajikistan** — combines seasonal flora data, live weather, and real-time air quality monitoring for 30 cities.

To my knowledge, Tajikistan does not yet have a public pollen monitoring network. AllergyTJ bridges that gap by estimating pollen risk from curated botanical data and real-time weather conditions, alongside live air quality data (US AQI, PM2.5, PM10, and 4 other pollutants) from the EU Copernicus CAMS satellite model.

**Live**: [allergy.tj](https://allergy.tj)

---

## Features

- **30 cities** across all regions of Tajikistan
- **4-tab app** — Dashboard, Forecast, Regions, Insights with clean path-based routing (`/en/forecast`, `/ru/regions`, `/insights`)
- **Dashboard** — circular SVG risk gauge, context-aware weather recommendations, hero weather block, top allergen triggers with severity bars, live AQI card with pollutant breakdown, daily health tip, nearby regions strip
- **Pollen risk estimation** — combines seasonal pollen calendar with real-time weather (temperature, humidity, wind, precipitation)
- **5-day forecast** — daily pollen risk outlook with allergen chips, trend chart, and contextual insight tips
- **Regional pollen map** — interactive SVG map of Tajikistan with GADM boundaries, 30 city dots, per-region weather, city sidebar sorted by risk
- **Push notifications** — browser-only pollen/UV alerts with quiet hours, bell icon settings overlay
- **Hourly breakdown** — morning/afternoon/evening risk scores using per-period weather
- **Air quality** — live US AQI with full 6-pollutant breakdown (O₃, PM2.5, PM10, NO₂, SO₂, CO)
- **UV index** — real-time UV data from Open-Meteo, color-coded by severity
- **Insights tab** — "What's Active Now" allergen cards, 12-month timeline calendar, 11 knowledge cards (incl. Cross-Reactivity Guide)
- **GPS detection** — auto-finds nearest city (HTTPS required)
- **Zero config** — no API keys, no build step, no framework, no external fonts
- **Trilingual** — English, Russian, and Tajik with browser auto-detection and URL-based language routing (`/en/`, `/ru/`, `/tj/`)
- **PWA** — installable on mobile/desktop, offline support, service worker caching
- **Auto-refresh** — weather data refreshes every 15 minutes and on returning to a stale tab; "Updated X min ago" timestamp on Dashboard
- **3-tier weather fallback** — automatically switches to backup weather source (wttr.in) or seasonal-only mode if the primary API is down
- **Dark mode** — toggle with OS preference detection, persisted across sessions
- **SEO-ready** — Open Graph image, JSON-LD (WebApplication + FAQPage + BreadcrumbList), canonical URLs with language prefixes, geo meta tags, dynamic page title per city, translation preload hints, robots.txt, sitemap.xml with language alternates, hreflang tags, brand-matched SVG favicon
- **Secure** — A+ Mozilla HTTP Observatory; strict CSP with SHA-256 script hashes, HSTS preload, zero inline event handlers
- **Accessible** — WCAG AA color contrast, semantic HTML landmarks, ARIA labels
- **Share button** — share current pollen conditions via native share or clipboard copy

## How It Works

AllergyTJ estimates pollen risk by combining three data sources:

1. **Seasonal pollen calendar** — monthly intensity data for Tajikistan's known allergenic flora (poplar, cottonwood, willow, birch, plane tree, mulberry, grasses, mugwort, chenopod, ragweed)
2. **Live weather** from [Open-Meteo](https://open-meteo.com/en/docs) — temperature, humidity, wind, and precipitation adjust the seasonal baseline (hot + dry + windy = higher risk; rain/snow = lower)
3. **Air quality** from [Open-Meteo CAMS](https://open-meteo.com/en/docs/air-quality-api) — real PM2.5, PM10, US AQI data

All computation runs client-side. No backend is needed in production.

## Quick Start

### Run locally (Python)

```bash
pip install -r requirements.txt
python api_proxy.py
```

Open [http://localhost:5000](http://localhost:5000)

### Run locally (no Python)

Open `index.html` directly in a browser. City selection works immediately; GPS requires HTTPS.

## Project Structure

```
AllergyTJ/
├── index.html          # Frontend structure (HTML + CSS + structured data)
├── app.js              # All application JavaScript (rendering, routing, API calls)
├── sw.js               # Service worker (PWA caching, offline support)
├── manifest.json       # PWA manifest (app identity, icons, display mode)
├── build_html.py       # Build script: generates per-language HTML + copies assets to dist/
├── package.json        # Node config (ESM for serverless function)
├── lang/
│   ├── en.json         # English translations (~402 keys)
│   ├── ru.json         # Russian translations
│   └── tj.json         # Tajik translations
├── icons/              # PWA icons (10 PNGs + 2 master SVGs)
│   ├── icon.svg        # Standard icon source
│   └── icon-maskable.svg # Android adaptive icon (80% safe zone)
├── api/
│   └── og.js           # Vercel serverless function (bot-aware OG tags per language)
├── api_proxy.py        # Local dev server (Flask, serves index.html)
├── build_icons.py      # Dev tool: rasterizes SVG icons to all PWA PNGs via cairosvg
├── vercel.json         # Vercel deployment config + security headers + language routing
├── robots.txt          # Search engine crawl directives (incl. AI crawler allow rules)
├── sitemap.xml         # Generated sitemap (102 URLs with hreflang alternates)
├── og-image.png        # Tajik OG image (1200×630)
├── og-image-en.png     # English OG image
├── og-image-ru.png     # Russian OG image
├── requirements.txt    # Python dependencies (flask)
├── CLAUDE.md           # Development guidelines and architecture
├── testing/
│   └── build_map_paths.py  # Dev tool: GADM polygon simplification + city containment
├── docs/
│   ├── ROADMAP.md      # Product roadmap and planned features
│   └── PRD.md          # Product requirements document
├── dist/               # Build output (gitignored) — Vercel serves from here
├── .gitignore
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE             # MIT
└── README.md
```

## Deployment

### Vercel (production)

The site deploys as a static site + one serverless function on Vercel. Pushing to `master` triggers auto-deploy.

Configuration in `vercel.json`:
- `framework: null` (prevents auto-detection)
- `buildCommand: "python3 build_html.py"` — generates per-language HTML files + copies static assets to `dist/`
- `outputDirectory: "dist"` — Vercel serves from the build output
- Bot-detecting rewrites — social media bots (Telegram, Facebook, Twitter, etc.) get language-specific OG tags via `api/og.js` serverless function
- Language routing rewrites (`/en/*`, `/ru/*` → pre-rendered HTML)
- Security headers (CSP A+ with SHA-256 hashes, HSTS preload, X-Frame-Options, etc.)

### Manual / other hosting

Copy `index.html` and `app.js` to any static file server. Requirements:
- Outbound HTTPS to `api.open-meteo.com`, `air-quality-api.open-meteo.com`, and `wttr.in`
- HTTPS for GPS geolocation (optional but recommended)

## Data Sources

| Source | Provides | Role | Key required |
|--------|----------|------|--------------|
| [Open-Meteo Forecast API](https://open-meteo.com/en/docs) | Temperature, humidity, wind, precipitation | Primary weather | No |
| [wttr.in](https://wttr.in) | Temperature, humidity, wind, precipitation | Weather fallback | No |
| [Open-Meteo Air Quality API](https://open-meteo.com/en/docs/air-quality-api) | PM2.5, PM10, US AQI | Air quality | No |
| Curated seasonal calendar | Monthly pollen intensity by allergen | Baseline data | N/A |

## Tech Stack

- **Frontend**: Vanilla HTML + CSS + JS (two files, zero dependencies)
- **Local dev**: Python / Flask
- **Hosting**: Vercel (static)
- **APIs**: Open-Meteo (free, no key)

## License

[MIT](LICENSE) © 2026 Eraj Ismatulloev

Built solo with AI-assisted development.
