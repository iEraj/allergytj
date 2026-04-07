# AllergyTJ

**Seasonal allergy tracker for Tajikistan** — pollen risk forecast powered by seasonal flora data and live weather.

No pollen monitoring stations exist in Tajikistan. AllergyTJ fills the gap by estimating pollen risk from curated botanical data and real-time weather conditions.

**Live**: [allergytj.vercel.app](https://allergytj.vercel.app)

---

## Features

- **32 cities** across all regions of Tajikistan
- **Pollen risk estimation** — combines seasonal pollen calendar with real-time weather (temperature, humidity, wind, precipitation)
- **5-day forecast** — daily pollen risk outlook based on weather forecast
- **Air quality** — live US AQI, PM2.5, PM10 data
- **Seasonal calendar** — month-by-month pollen guide for local allergens (poplar, mugwort, chenopod, etc.)
- **GPS detection** — auto-finds nearest city (HTTPS required)
- **Zero config** — no API keys, no build step, no framework
- **3-tier weather fallback** — automatically switches to backup weather source (wttr.in) or seasonal-only mode if the primary API is down

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
├── index.html          # Entire frontend (HTML + CSS + JS) — the app
├── api_proxy.py        # Local dev server (Flask, serves index.html)
├── vercel.json         # Vercel deployment config + security headers
├── requirements.txt    # Python dependencies (flask)
├── CLAUDE.md           # Development guidelines and architecture
├── docs/
│   └── ROADMAP.md      # Product roadmap and planned features
├── .gitignore
└── README.md
```

## Deployment

### Vercel (production)

The site is deployed as a static site on Vercel. Pushing to `master` triggers auto-deploy.

Configuration is in `vercel.json`:
- Static output from repo root
- SPA rewrite (all routes serve `index.html`)
- Security headers (CSP, HSTS, X-Frame-Options, etc.)

### Manual / other hosting

Copy `index.html` to any static file server. Requirements:
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

- **Frontend**: Vanilla HTML + CSS + JS (single file, zero dependencies)
- **Local dev**: Python / Flask
- **Hosting**: Vercel (static)
- **APIs**: Open-Meteo (free, no key)

## License

All rights reserved. Built by [Eraj Ismatulloev](https://github.com/eismatulloev) using Claude Code.
