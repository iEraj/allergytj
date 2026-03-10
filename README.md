# AllergyTJ

Tajikistan Seasonal Allergy Tracker — pollen risk forecast based on seasonal flora data + live weather.

**No API key needed.** Just run and open.

**Live**: https://allergytj.vercel.app

## Features

- **32 cities** across all regions of Tajikistan
- **Pollen risk estimation** — combines seasonal pollen calendar with real-time weather (temperature, humidity, wind, precipitation)
- **5-day forecast** — daily pollen risk outlook based on weather forecast
- **Air quality** — live US AQI, PM2.5, PM10 data
- **Seasonal calendar** — month-by-month pollen guide for local allergens (poplar, mugwort, chenopod, etc.), always visible
- **GPS detection** — auto-finds nearest city (HTTPS only)

## How it works

No pollen monitoring stations exist in Tajikistan. AllergyTJ estimates pollen risk by combining:

1. **Seasonal pollen calendar** — monthly intensity data for Tajikistan's known allergenic flora (poplar, cottonwood, willow, birch, plane tree, mulberry, grasses, mugwort, chenopod, ragweed)
2. **Live weather from Open-Meteo** — temperature, humidity, wind, and precipitation adjust the seasonal baseline up or down (hot + dry + windy = higher risk, rain/snow = lower)
3. **Air quality from Open-Meteo CAMS** — real PM2.5, PM10, US AQI data

## Run locally

```bash
pip install flask
python api_proxy.py
```

Open http://localhost:5000

## Tech

- `index.html` — entire frontend (HTML + CSS + JS, zero dependencies)
- `api_proxy.py` — Flask server that serves the HTML file
- No API key, no build step, no framework

## Data sources

- **Weather**: [Open-Meteo Forecast API](https://open-meteo.com/en/docs) — temperature, humidity, wind, precipitation
- **Air quality**: [Open-Meteo Air Quality API](https://open-meteo.com/en/docs/air-quality-api) — PM2.5, PM10, US AQI
- **Seasonal calendar**: Curated from Tajikistan's known allergenic flora

Built by Eraj Ismatulloev using Claude Code
