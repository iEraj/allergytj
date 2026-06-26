export default async function handler(req, res) {
  var TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  var CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  if (!TOKEN || !CHAT_ID) {
    res.status(500).json({ error: 'Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID' });
    return;
  }

  // Dushanbe coordinates and region
  var LAT = 38.5598;
  var LNG = 68.774;
  var ELEV = 800;

  var TREE_SEASON =  [0, 1, 2, 4, 3, 1, 0, 0, 0, 0, 0, 0];
  var GRASS_SEASON = [0, 0, 0, 1, 3, 4, 3, 1, 0, 0, 0, 0];
  var WEED_SEASON =  [0, 0, 0, 0, 0, 1, 2, 4, 4, 2, 0, 0];
  var DRS = { tree: 1.0, grass: 1.0, weed: 1.0 };

  function getSeasonalBase(arr, date) {
    var m = date.getMonth();
    var d = date.getDate();
    var dim = new Date(date.getFullYear(), m + 1, 0).getDate();
    var cur = arr[m];
    var next = arr[(m + 1) % 12];
    return cur + (next - cur) * (d / dim);
  }

  function weatherFactor(temp, hum, wind, precip, code) {
    var tf = temp > 30 ? 1.25 : temp > 25 ? 1.15 : temp > 18 ? 1.05 : temp > 10 ? 0.95 : temp > 5 ? 0.7 : 0.4;
    var hf = hum < 35 ? 1.15 : hum < 50 ? 1.05 : hum < 65 ? 1.0 : hum < 80 ? 0.85 : 0.7;
    var wf = wind > 25 ? 1.2 : wind > 15 ? 1.1 : wind > 8 ? 1.0 : 0.95;
    var pf = precip > 20 ? 0.1 : precip > 10 ? 0.2 : precip > 5 ? 0.3 : precip > 1 ? 0.5 : precip > 0 ? 0.85 : 1.0;
    var cf = 1.0;
    if (code >= 95) cf = 0.5;
    else if (code >= 80 && code <= 82) cf = 0.6;
    else if (code >= 71 && code <= 77) cf = 0.5;
    else if (code >= 61 && code <= 67) cf = 0.7;
    else if (code >= 51 && code <= 57) cf = 0.8;
    else if (code >= 45 && code <= 48) cf = 0.85;
    return Math.max(0.1, Math.min(1.6, tf * hf * wf * pf * cf));
  }

  function computeRisk(base, wf) {
    return Math.max(0, Math.min(4, base * wf));
  }

  var RISK_TJ = ['Нест', 'Паст', 'Миёна', 'Баланд', 'Хеле баланд'];
  var RISK_RU = ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'];
  var RISK_EN = ['None', 'Low', 'Moderate', 'High', 'Very High'];
  var RISK_EMOJI = ['⚪', '🟢', '🟡', '🟠', '🔴'];

  var AQI_TJ = ['Хуб', 'Миёна', 'Носолим (ГҲ)', 'Носолим', 'Хеле носолим'];
  var AQI_RU = ['Хорошее', 'Умеренное', 'Вредное (ЧГ)', 'Вредное', 'Очень вредное'];
  var AQI_EN = ['Good', 'Moderate', 'Unhealthy (SG)', 'Unhealthy', 'Very Unhealthy'];
  var AQI_EMOJI = ['🟢', '🟡', '🟠', '🔴', '🟣'];

  function riskIdx(score) { return Math.min(Math.round(score), 4); }
  function aqiIdx(aqi) { return aqi <= 50 ? 0 : aqi <= 100 ? 1 : aqi <= 150 ? 2 : aqi <= 200 ? 3 : 4; }

  function uvEmoji(uv) {
    if (uv >= 11) return '🟣';
    if (uv >= 8) return '🔴';
    if (uv >= 6) return '🟠';
    if (uv >= 3) return '🟡';
    return '🟢';
  }

  var WX_TJ = {0:'Осмон соф',1:'Асосан соф',2:'Қисман абрнок',3:'Абрнок',45:'Туман',48:'Тумани сарди сахт',51:'Бориши сабук',53:'Бориши миёна',55:'Бориши ғафс',61:'Борони сабук',63:'Борони миёна',65:'Борони сахт',71:'Барфи сабук',73:'Барфи миёна',75:'Барфи сахт',80:'Борон',81:'Борони миёна',82:'Борони сахт',95:'Тӯфони барқӣ',96:'Тӯфони барқӣ + жола',99:'Тӯфони барқӣ + жолаи сахт'};
  var WX_RU = {0:'Ясно',1:'Преимущественно ясно',2:'Переменная облачность',3:'Облачно',45:'Туман',48:'Изморозь',51:'Лёгкая морось',53:'Морось',55:'Сильная морось',61:'Небольшой дождь',63:'Дождь',65:'Сильный дождь',71:'Лёгкий снег',73:'Снег',75:'Сильный снег',80:'Ливень',81:'Ливень средний',82:'Сильный ливень',95:'Гроза',96:'Гроза с градом',99:'Сильная гроза с градом'};
  var WX_EN = {0:'Clear sky',1:'Mainly clear',2:'Partly cloudy',3:'Overcast',45:'Fog',48:'Depositing rime fog',51:'Light drizzle',53:'Drizzle',55:'Dense drizzle',61:'Slight rain',63:'Moderate rain',65:'Heavy rain',71:'Slight snow',73:'Moderate snow',75:'Heavy snow',80:'Rain showers',81:'Moderate showers',82:'Violent showers',95:'Thunderstorm',96:'Thunderstorm + hail',99:'Thunderstorm + heavy hail'};

  try {
    // Fetch weather and AQI in parallel
    var wxUrl = 'https://api.open-meteo.com/v1/forecast?latitude=' + LAT + '&longitude=' + LNG +
      '&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code,uv_index' +
      '&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Asia/Dushanbe&forecast_days=1';
    var aqUrl = 'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=' + LAT + '&longitude=' + LNG +
      '&current=us_aqi,pm2_5,pm10&timezone=Asia/Dushanbe';

    var [wxRes, aqRes] = await Promise.all([fetch(wxUrl), fetch(aqUrl)]);
    var wx = await wxRes.json();
    var aq = await aqRes.json();

    var cur = wx.current || {};
    var temp = cur.temperature_2m;
    var hum = cur.relative_humidity_2m;
    var wind = cur.wind_speed_10m;
    var precip = cur.precipitation || 0;
    var code = cur.weather_code || 0;
    var uv = cur.uv_index;

    var now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Dushanbe' }));

    var wf = weatherFactor(temp, hum, wind, precip, code);
    var treeRisk = computeRisk(getSeasonalBase(TREE_SEASON, now) * DRS.tree, wf);
    var grassRisk = computeRisk(getSeasonalBase(GRASS_SEASON, now) * DRS.grass, wf);
    var weedRisk = computeRisk(getSeasonalBase(WEED_SEASON, now) * DRS.weed, wf);
    var overall = Math.max(treeRisk, grassRisk, weedRisk);
    var ri = riskIdx(overall);

    var aqi = aq.current ? aq.current.us_aqi : null;
    var pm25 = aq.current ? aq.current.pm2_5 : null;
    var pm10 = aq.current ? aq.current.pm10 : null;
    var ai = aqi != null ? aqiIdx(aqi) : null;

    var tempMax = wx.daily ? wx.daily.temperature_2m_max[0] : null;
    var tempMin = wx.daily ? wx.daily.temperature_2m_min[0] : null;

    var dateStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');

    // Build trilingual message
    var lines = [];

    // ── Tajik section ──
    lines.push('🌿 <b>AllergyTJ — Душанбе</b>');
    lines.push('📅 ' + dateStr);
    lines.push('');
    lines.push(RISK_EMOJI[ri] + ' <b>Хатари гардолуд: ' + overall.toFixed(1) + '/4 — ' + RISK_TJ[ri] + '</b>');
    lines.push('🌳 Дарахтон: ' + treeRisk.toFixed(1) + '  |  🌾 Алаф: ' + grassRisk.toFixed(1) + '  |  🌿 Бегона: ' + weedRisk.toFixed(1));
    lines.push('');
    if (aqi != null) {
      lines.push(AQI_EMOJI[ai] + ' Сифати ҳаво: US AQI ' + aqi + ' — ' + AQI_TJ[ai]);
      if (pm25 != null) lines.push('    PM2.5: ' + pm25.toFixed(1) + ' мкг/м³' + (pm10 != null ? '  |  PM10: ' + pm10.toFixed(1) + ' мкг/м³' : ''));
    }
    lines.push('🌡 ' + Math.round(temp) + '°C (' + (WX_TJ[code] || '') + ')' + (tempMax != null ? '  ↑' + Math.round(tempMax) + '° ↓' + Math.round(tempMin) + '°' : ''));
    if (uv != null) lines.push(uvEmoji(Math.round(uv)) + ' Индекси УФ: ' + Math.round(uv));
    lines.push('💧 ' + hum + '%  |  💨 ' + Math.round(wind) + ' км/с');

    lines.push('');
    lines.push('— — — — — — — — — —');
    lines.push('');

    // ── Russian section ──
    lines.push('🌿 <b>AllergyTJ — Душанбе</b>');
    lines.push('');
    lines.push(RISK_EMOJI[ri] + ' <b>Пыльцевой риск: ' + overall.toFixed(1) + '/4 — ' + RISK_RU[ri] + '</b>');
    lines.push('🌳 Деревья: ' + treeRisk.toFixed(1) + '  |  🌾 Трава: ' + grassRisk.toFixed(1) + '  |  🌿 Сорняки: ' + weedRisk.toFixed(1));
    lines.push('');
    if (aqi != null) {
      lines.push(AQI_EMOJI[ai] + ' Качество воздуха: US AQI ' + aqi + ' — ' + AQI_RU[ai]);
      if (pm25 != null) lines.push('    PM2.5: ' + pm25.toFixed(1) + ' мкг/м³' + (pm10 != null ? '  |  PM10: ' + pm10.toFixed(1) + ' мкг/м³' : ''));
    }
    lines.push('🌡 ' + Math.round(temp) + '°C (' + (WX_RU[code] || '') + ')' + (tempMax != null ? '  ↑' + Math.round(tempMax) + '° ↓' + Math.round(tempMin) + '°' : ''));
    if (uv != null) lines.push(uvEmoji(Math.round(uv)) + ' УФ-индекс: ' + Math.round(uv));
    lines.push('💧 ' + hum + '%  |  💨 ' + Math.round(wind) + ' км/ч');

    lines.push('');
    lines.push('— — — — — — — — — —');
    lines.push('');

    // ── English section ──
    lines.push('🌿 <b>AllergyTJ — Dushanbe</b>');
    lines.push('');
    lines.push(RISK_EMOJI[ri] + ' <b>Pollen Risk: ' + overall.toFixed(1) + '/4 — ' + RISK_EN[ri] + '</b>');
    lines.push('🌳 Trees: ' + treeRisk.toFixed(1) + '  |  🌾 Grass: ' + grassRisk.toFixed(1) + '  |  🌿 Weeds: ' + weedRisk.toFixed(1));
    lines.push('');
    if (aqi != null) {
      lines.push(AQI_EMOJI[ai] + ' Air Quality: US AQI ' + aqi + ' — ' + AQI_EN[ai]);
      if (pm25 != null) lines.push('    PM2.5: ' + pm25.toFixed(1) + ' µg/m³' + (pm10 != null ? '  |  PM10: ' + pm10.toFixed(1) + ' µg/m³' : ''));
    }
    lines.push('🌡 ' + Math.round(temp) + '°C (' + (WX_EN[code] || '') + ')' + (tempMax != null ? '  ↑' + Math.round(tempMax) + '° ↓' + Math.round(tempMin) + '°' : ''));
    if (uv != null) lines.push(uvEmoji(Math.round(uv)) + ' UV Index: ' + Math.round(uv));
    lines.push('💧 ' + hum + '%  |  💨 ' + Math.round(wind) + ' km/h');

    lines.push('');
    lines.push('🔗 <a href="https://allergy.tj">allergy.tj</a>');

    var text = lines.join('\n');

    // Send to Telegram
    var tgUrl = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage';
    var tgRes = await fetch(tgUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    });
    var tgData = await tgRes.json();

    if (!tgData.ok) {
      res.status(500).json({ error: 'Telegram API error', details: tgData });
      return;
    }

    res.status(200).json({ ok: true, risk: overall.toFixed(1), aqi: aqi });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
