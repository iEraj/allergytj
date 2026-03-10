# AllergyTJ

Real-time pollen levels for cities across Tajikistan, powered by Open-Meteo Air Quality API.

**No API key needed.** Just run and open.

## Features

- **13 Tajik cities** — Dushanbe, Khujand, Bokhtar, Kulob, Khorugh, and more
- **GPS detection** — auto-finds nearest city
- **Current pollen levels** — tree, grass, weed counts with risk indicators (grains/m³)
- **5-day forecast** — daily pollen outlook
- **Seasonal calendar** — month-by-month pollen guide for local allergens (poplar, mugwort, chenopod, etc.), always visible

## Run

```bash
pip install flask
cd CentralAsia_AllergyTracker
python api_proxy.py
```

Open http://localhost:5000

## How it works

- `index.html` — entire frontend (HTML + CSS + JS, zero dependencies), calls Open-Meteo directly
- `api_proxy.py` — Flask server that serves the HTML file

Open-Meteo's Air Quality API provides pollen data (alder, birch, grass, mugwort, olive, ragweed) for any lat/lng globally, for free, with no API key. The frontend calls it directly via CORS.

## Data sources

- **Live data**: [Open-Meteo Air Quality API](https://open-meteo.com/en/docs/air-quality-api) — pollen counts in grains/m³
- **Seasonal calendar**: Curated from Tajikistan's known allergenic flora — poplar, cottonwood, willow, birch, plane tree, mulberry, grasses, mugwort (Artemisia), chenopod, ragweed
