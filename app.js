var ICON_SVG = {
eco:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
dark_mode:'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
light_mode:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
location_on:'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
my_location:'<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',
share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
thermostat:'<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>',
water_drop:'<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>',
humidity_percentage:'<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>',
wb_sunny:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
air:'<path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/>',
health_and_safety:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9 12h6"/><path d="M12 9v6"/>',
chevron_right:'<path d="m9 18 6-6-6-6"/>',
map:'<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
landscape:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
schedule:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
science:'<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
dashboard:'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
calendar_month:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
lightbulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
keyboard_arrow_up:'<path d="m18 15-6-6-6 6"/>',
park:'<path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"/><path d="M12 22v-3"/>',
grass:'<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
psychiatry:'<path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"/><circle cx="12" cy="8" r="2"/><path d="M12 10v12"/><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"/><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"/>',
wb_twilight:'<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>',
thunderstorm:'<path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path d="m13 12-3 5h4l-3 5"/>',
cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
partly_cloudy_day:'<path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>',
foggy:'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 17H7"/><path d="M17 21H9"/>',
check_circle:'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
hourglass_empty:'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
rainy:'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>',
rainy_light:'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M8 19v1"/><path d="M8 14v1"/><path d="M16 19v1"/><path d="M16 14v1"/><path d="M12 21v1"/><path d="M12 16v1"/>',
rainy_heavy:'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m9.2 22 3-7"/><path d="m9 13-3 7"/><path d="m17 13-3 7"/>',
weather_snowy:'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M8 15h.01"/><path d="M8 19h.01"/><path d="M12 17h.01"/><path d="M12 21h.01"/><path d="M16 15h.01"/><path d="M16 19h.01"/>',
trending_up:'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
trending_down:'<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/>',
settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
bell_off:'<path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"/><path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><line x1="2" x2="22" y1="2" y2="22"/>',
x_icon:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
alert_triangle:'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
edit:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
send:'<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>'
};

function mIcon(name, cls) {
  var svg = ICON_SVG[name] || '';
  return '<svg class="icon' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24">' + svg + '</svg>';
}

// Replace static icon spans with inline SVGs
document.querySelectorAll('span.icon').forEach(function(el) {
  var name = el.textContent.trim();
  if (ICON_SVG[name]) {
    var svg = mIcon(name, el.classList.contains('filled') ? 'filled' : '');
    var tmp = document.createElement('span');
    tmp.innerHTML = svg;
    el.replaceWith(tmp.firstChild);
  }
});

// ── Base URL for SEO tags ──
var SITE_BASE = "https://allergy.tj";

// ── Language detection (must run before tab routing) ──
var _pathLang = (function() {
  var m = window.location.pathname.match(/^\/(en|ru)(\/|$)/);
  return m ? m[1] : null;
})();
var LANG = _pathLang || localStorage.getItem("allergytj-lang") || "tj";

// ── City dropdown helpers ──
function getSelectedCityIndex() {
  var sel = document.getElementById("city-select");
  return parseInt(sel.options[sel.selectedIndex].dataset.idx, 10);
}

function selectCityByIndex(idx) {
  var sel = document.getElementById("city-select");
  for (var i = 0; i < sel.options.length; i++) {
    if (parseInt(sel.options[i].dataset.idx, 10) === idx) {
      sel.selectedIndex = i;
      return;
    }
  }
}

var TJ_ALPHABET = "АБВГҒДЕЁЖЗИӢЙКЛМНОПРСТУӮФХҲЧҶШЪЭЮЯ";

function sortCityDropdown() {
  var sel = document.getElementById("city-select");
  var selectedIdx = parseInt(sel.options[sel.selectedIndex].dataset.idx, 10);
  var opts = Array.prototype.slice.call(sel.options);
  var locale = LANG === 'tj' ? undefined : (LANG === 'ru' ? 'ru' : 'en');
  opts.sort(function(a, b) {
    if (LANG === 'tj') return tjCompare(a.text, b.text);
    return a.text.localeCompare(b.text, locale);
  });
  while (sel.firstChild) sel.removeChild(sel.firstChild);
  for (var i = 0; i < opts.length; i++) sel.appendChild(opts[i]);
  selectCityByIndex(selectedIdx);
}

function tjCompare(a, b) {
  var al = a.toLowerCase(), bl = b.toLowerCase();
  var len = Math.min(al.length, bl.length);
  for (var i = 0; i < len; i++) {
    var ai = TJ_ALPHABET.indexOf(al[i].toUpperCase());
    var bi = TJ_ALPHABET.indexOf(bl[i].toUpperCase());
    if (ai < 0) ai = al.charCodeAt(i) + 1000;
    if (bi < 0) bi = bl.charCodeAt(i) + 1000;
    if (ai !== bi) return ai - bi;
  }
  return al.length - bl.length;
}

// ── Tab Routing ──
var TABS = ['dashboard','forecast','regions','insights'];

function getTabFromPath() {
  var parts = location.pathname.replace(/\/+$/, '').split('/');
  var last = parts[parts.length - 1];
  return TABS.indexOf(last) >= 0 ? last : 'dashboard';
}

function buildTabPath(lang, tabName) {
  var langPrefix = lang === 'tj' ? '' : '/' + lang;
  return tabName === 'dashboard' ? (langPrefix || '/') : langPrefix + '/' + tabName;
}

function updateNavHrefs() {
  document.querySelectorAll('[data-tab]').forEach(function(el) {
    el.setAttribute('href', buildTabPath(LANG, el.getAttribute('data-tab')));
  });
  var brand = document.querySelector('.nav-brand');
  if (brand) brand.setAttribute('href', buildTabPath(LANG, 'dashboard'));
}

function switchTab(tabName, evt, skipPush) {
  if (evt) evt.preventDefault();
  document.querySelectorAll('.tab-content').forEach(function(el) {
    el.classList.remove('active');
  });
  document.querySelectorAll('.nav-links a, .bottom-nav a').forEach(function(el) {
    el.classList.toggle('active', el.getAttribute('data-tab') === tabName);
  });
  var target = document.getElementById('tab-' + tabName);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0 });
  var newPath = buildTabPath(LANG, tabName);
  if (!skipPush && location.pathname !== newPath) history.pushState(null, '', newPath);
  var bcld = document.getElementById("breadcrumbld");
  if (bcld) {
    var langPrefix = LANG === 'tj' ? '' : '/' + LANG;
    try { var bc = JSON.parse(bcld.textContent); bc.itemListElement[1].name = t("nav." + tabName); bc.itemListElement[1].item = SITE_BASE + langPrefix + '/' + tabName; bc.itemListElement[0].item = SITE_BASE + (langPrefix || '/'); bcld.textContent = JSON.stringify(bc); } catch(e) {}
  }
  if (_regionUpdatedInterval) { clearInterval(_regionUpdatedInterval); _regionUpdatedInterval = null; }
  if (tabName === 'regions') {
    renderRegionsTab();
    updateRegionTimestamp();
    _regionUpdatedInterval = setInterval(updateRegionTimestamp, 60000);
  }
}

(function() {
  // Backwards compat: old hash URLs like /en/#forecast → /en/forecast
  if (location.hash) {
    var hashTab = location.hash.slice(1);
    if (TABS.indexOf(hashTab) >= 0) {
      history.replaceState(null, '', buildTabPath(LANG, hashTab));
    }
  }
  var tab = getTabFromPath();
  switchTab(tab, null, location.pathname.indexOf('/city/') >= 0);
  updateNavHrefs();
  document.querySelectorAll('.nav-links a[data-tab]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      switchTab(this.getAttribute('data-tab'));
    });
  });
  document.querySelectorAll('.bottom-nav a[data-tab]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      switchTab(this.getAttribute('data-tab'));
    });
  });
  window.addEventListener('popstate', function() {
    var tab = getTabFromPath();
    if (TABS.indexOf(tab) >= 0) switchTab(tab);
  });
})();

// ── Dashboard Render ──
var HEALTH_TIPS = [
  { month: [2,3,4], key: "tip.windowsClosed" },
  { month: [4,5,6], key: "tip.showerEvening" },
  { month: [6,7,8], key: "tip.earlyMorning" },
  { month: [7,8,9], key: "tip.nasal" },
  { month: [0,1,10,11], key: "tip.hepaFilter" },
];

function getDailyTip() {
  var m = new Date().getMonth();
  for (var i = 0; i < HEALTH_TIPS.length; i++) {
    if (HEALTH_TIPS[i].month.indexOf(m) >= 0) {
      var text = t(HEALTH_TIPS[i].key);
      return text !== HEALTH_TIPS[i].key ? text : null;
    }
  }
  return null;
}

function buildRecommendation(overall, wxData) {
  if (overall < 0.5) return t("rec.none");

  var wxReason = "";
  if (wxData) {
    if (wxData.precip > 1) wxReason = t("rec.wx.rain");
    else if (wxData.temp > 28 && wxData.humidity < 40) wxReason = t("rec.wx.hotDry");
    else if (wxData.temp > 25) wxReason = t("rec.wx.warm");
    else if (wxData.wind > 15) wxReason = t("rec.wx.windy");
  }

  if (overall >= 3.5) return t("rec.vhigh", { wx: wxReason });
  if (overall >= 2.5) return t("rec.high", { wx: wxReason });
  if (overall >= 1.5) return t("rec.moderate", { wx: wxReason });
  return t("rec.low", { wx: wxReason });
}

function renderDashboard(overallRisk, treeRisk, grassRisk, weedRisk, wxData, cityIndex, now, personalRisk) {
  var cityName = t("city." + cityIndex);
  var displayRisk = personalRisk != null ? personalRisk : overallRisk;
  var info = getRiskInfo(displayRisk);

  // City name + dynamic title + geo tags
  document.getElementById("dash-city-name").textContent = cityName + " | " + t("dash.pollenAndAir");
  document.title = cityName + " | " + t("dash.pollenAndAir") + " — AllergyTJ";
  var c = CITIES[cityIndex];
  var geoPos = document.querySelector('meta[name="geo.position"]');
  if (geoPos) geoPos.setAttribute("content", c.lat + ";" + c.lng);
  var icbm = document.querySelector('meta[name="ICBM"]');
  if (icbm) icbm.setAttribute("content", c.lat + ", " + c.lng);
  var geoPlace = document.querySelector('meta[name="geo.placename"]');
  if (geoPlace) geoPlace.setAttribute("content", cityName);

  // Context-aware recommendation
  var recEl = document.getElementById("dash-recommendation");
  recEl.textContent = buildRecommendation(displayRisk, wxData);

  // Risk Gauge
  var circumference = 2 * Math.PI * 84; // ~527.79
  var riskPct = Math.min(displayRisk / 4, 1);
  var offset = circumference * (1 - riskPct * 0.75); // 75% of circle max
  var arc = document.getElementById("dash-gauge-arc");
  arc.style.strokeDashoffset = offset;
  arc.style.stroke = info.bg;
  document.getElementById("dash-gauge-risk").textContent = info.label;
  document.getElementById("dash-gauge-risk").style.color = info.color;
  var gaugeYours = document.getElementById("dash-gauge-yours");
  var gaugeStaticLabel = document.querySelector(".dash-gauge-label");
  if (gaugeYours) {
    gaugeYours.textContent = personalRisk != null ? t("profile.yourRisk") : "";
    gaugeYours.style.display = personalRisk != null ? "" : "none";
  }
  if (gaugeStaticLabel) {
    gaugeStaticLabel.style.display = personalRisk != null ? "none" : "";
  }
  document.getElementById("dash-gauge-score").textContent = displayRisk.toFixed(1) + " / 4";
  var gaugeSecondary = document.getElementById("dash-gauge-secondary");
  if (gaugeSecondary) {
    if (personalRisk != null) {
      gaugeSecondary.textContent = t("profile.generalRisk") + ": " + overallRisk.toFixed(1);
      gaugeSecondary.style.display = "";
    } else {
      gaugeSecondary.textContent = "";
      gaugeSecondary.style.display = "none";
    }
  }
  document.getElementById("dash-gauge-glow").style.background = info.bg;

  // Dashboard Weather Hero
  if (wxData) {
    document.getElementById("dash-wx-icon").innerHTML = wxIcon(wxData.wxCode || 0);
    document.getElementById("dash-wx-temp").innerHTML = Math.round(wxData.temp) + '°<span class="unit">C</span>';
    document.getElementById("dash-wx-now").textContent = wxDescription(wxData.wxCode || 0);
    var humDesc = wxData.humidity < 35 ? t("wx.dry") : wxData.humidity > 70 ? t("wx.humid") : t("wx.comfortable");
    document.getElementById("dash-wx-desc").textContent = humDesc;
    var uvVal = wxData.uv != null ? wxData.uv.toFixed(1) : "—";
    var uvC = uvColor(wxData.uv);
    var precipVal = wxData.precip != null ? wxData.precip.toFixed(1) : "0.0";
    document.getElementById("dash-wx-stats").innerHTML =
      '<div class="dash-wx-stat"><div class="dash-wx-stat-icon">' + mIcon('humidity_percentage') + '</div><div class="dash-wx-stat-val">' + Math.round(wxData.humidity) + '%</div><div class="dash-wx-stat-label">' + t("wx.label.humidity") + '</div></div>' +
      '<div class="dash-wx-stat"><div class="dash-wx-stat-icon">' + mIcon('air') + '</div><div class="dash-wx-stat-val">' + Math.round(wxData.wind) + ' km/h</div><div class="dash-wx-stat-label">' + t("wx.label.wind") + '</div></div>' +
      '<div class="dash-wx-stat"><div class="dash-wx-stat-icon">' + mIcon('wb_sunny') + '</div><div class="dash-wx-stat-val" style="color:' + uvC + '">' + uvVal + '</div><div class="dash-wx-stat-label">' + t("wx.label.uv") + '</div></div>' +
      '<div class="dash-wx-stat"><div class="dash-wx-stat-icon">' + mIcon('rainy') + '</div><div class="dash-wx-stat-val">' + precipVal + ' mm</div><div class="dash-wx-stat-label">' + t("wx.label.rainToday") + '</div></div>';
  } else {
    document.getElementById("dash-wx-stats").innerHTML = '';
  }

  // Top Triggers
  var profile = getAllergenProfile();
  var triggers = [
    { icon: "park", name: t("pollen.tree"), sub: t("species.tree"), risk: treeRisk, cat: "tree" },
    { icon: "grass", name: t("pollen.grass"), sub: t("species.grass"), risk: grassRisk, cat: "grass" },
    { icon: "psychiatry", name: t("pollen.weed"), sub: t("species.weed"), risk: weedRisk, cat: "weed" },
  ];
  triggers.sort(function(a, b) { return b.risk - a.risk; });

  var triggerHtml = triggers.map(function(tr) {
    var ti = getRiskInfo(tr.risk);
    var barPct = Math.min(tr.risk / 4 * 100, 100);
    var badge = profile && profileHasCategory(profile, tr.cat) ? '<span class="dash-trigger-yours">' + t("profile.yours") + '</span>' : '';
    return '<div class="dash-trigger-row">' +
      '<div class="dash-trigger-left">' +
        '<div class="dash-trigger-icon">' + mIcon(tr.icon) + '</div>' +
        '<div><div class="dash-trigger-name">' + tr.name + badge + '</div>' +
        '<div class="dash-trigger-sub">' + (tr.sub || '') + '</div></div>' +
      '</div>' +
      '<div class="dash-trigger-right">' +
        '<div class="dash-trigger-severity" style="color:' + ti.color + '">' + ti.label + '</div>' +
        '<div class="dash-trigger-bar"><div class="dash-trigger-bar-fill" style="width:' + barPct + '%;background:' + ti.color + '"></div></div>' +
      '</div>' +
    '</div>';
  }).join('');
  document.getElementById("dash-trigger-rows").innerHTML = triggerHtml;

  // Allergen Profile section
  renderAllergenProfile();

  // Health Tip
  var tipText = getDailyTip();
  var tipEl = document.getElementById("dash-tip-text");
  if (tipText) {
    tipEl.textContent = tipText;
  } else {
    tipEl.textContent = t("tip.default") !== "tip.default" ? t("tip.default") : "Check the forecast for the best time to go outside.";
  }

  // Nearby Regions
  renderNearbyRegions(cityIndex, now);
}

var _profileExpanded = false;

function renderAllergenProfile() {
  var container = document.getElementById("allergen-profile");
  if (!container) return;
  var profile = getAllergenProfile();

  if (!profile && !_profileExpanded) {
    container.innerHTML = '<div class="profile-invite">' +
      '<span>' + mIcon('health_and_safety') + ' ' + t("profile.setup") + '</span>' +
      '<button class="profile-setup-btn" id="profile-setup-btn">' + t("profile.setupBtn") + '</button>' +
    '</div>';
    return;
  }

  if (!_profileExpanded && profile) {
    var chipHtml = profile.species.map(function(idx) {
      return '<span class="profile-chip-display">' + t("cal." + idx) + '</span>';
    }).join('');
    container.innerHTML = '<div class="profile-summary">' +
      '<div class="profile-summary-label">' + mIcon('health_and_safety') + ' ' + t("profile.title") + '</div>' +
      '<div class="profile-chips-row">' + chipHtml + '</div>' +
      '<button class="profile-edit-btn" id="profile-edit-btn">' + mIcon('edit') + '</button>' +
    '</div>';
    return;
  }

  var selected = profile ? profile.species.slice() : [];
  var categories = [
    { label: t("profile.categoryTree"), indices: [0,1,2,3,4] },
    { label: t("profile.categoryGrass"), indices: [5] },
    { label: t("profile.categoryWeed"), indices: [6,7,8] },
  ];
  var html = '<div class="profile-selector">';
  html += '<div class="profile-selector-title">' + mIcon('health_and_safety') + ' ' + t("profile.title") + '</div>';
  for (var c = 0; c < categories.length; c++) {
    var cat = categories[c];
    html += '<div class="profile-cat-label">' + cat.label + '</div><div class="profile-cat-chips">';
    for (var j = 0; j < cat.indices.length; j++) {
      var si = cat.indices[j];
      var sel = selected.indexOf(si) !== -1 ? ' selected' : '';
      html += '<button class="profile-species-chip' + sel + '" data-species="' + si + '">' + t("cal." + si) + '</button>';
    }
    html += '</div>';
  }
  html += '<div class="profile-actions">';
  if (profile) html += '<button class="profile-clear-btn" id="profile-clear-btn">' + t("profile.clear") + '</button>';
  html += '<button class="profile-done-btn" id="profile-done-btn">' + t("profile.done") + '</button>';
  html += '</div></div>';
  container.innerHTML = html;
}

function toggleProfileExpand() {
  _profileExpanded = !_profileExpanded;
  renderAllergenProfile();
}

function saveProfileFromSelector() {
  var chips = document.querySelectorAll('.profile-species-chip.selected');
  var species = [];
  for (var i = 0; i < chips.length; i++) {
    species.push(parseInt(chips[i].getAttribute('data-species'), 10));
  }
  saveAllergenProfile(species);
  _profileExpanded = false;
  if (lastRenderState) {
    var s = lastRenderState;
    reRenderWithProfile(s);
  } else {
    renderAllergenProfile();
  }
}

function clearProfile() {
  saveAllergenProfile(null);
  _profileExpanded = false;
  if (lastRenderState) {
    reRenderWithProfile(lastRenderState);
  } else {
    renderAllergenProfile();
  }
}

function reRenderWithProfile(s) {
  var now = new Date();
  var elev = s.cityElev || BASELINE_ELEV;
  var rg = s.reg || REGIONS.drs;
  var adjNow = adjustDateForElevation(now, elev);
  var wxFactor = 1.0;

  if (s.weatherTier === 1 || s.weatherTier === 2) {
    var curWx = s.wx.current;
    var daily = s.wx.daily;
    var periodWx = s.wx.hourly ? getCurrentPeriodWeather(s.wx.hourly, now) : null;
    if (periodWx) {
      wxFactor = weatherFactor(periodWx.temp, periodWx.humidity, periodWx.wind, periodWx.precip, periodWx.wxCode);
    } else {
      var todayTemp = daily.temperature_2m_max[0];
      var todayHumidity = daily.relative_humidity_2m_mean ? daily.relative_humidity_2m_mean[0] : curWx.relative_humidity_2m;
      var todayWind = daily.wind_speed_10m_max[0];
      var todayPrecip = daily.precipitation_sum[0];
      var todayWxCode = daily.weather_code[0];
      wxFactor = weatherFactor(todayTemp, todayHumidity, todayWind, todayPrecip, todayWxCode);
    }
    if (curWx && curWx.weather_code !== undefined) {
      var curFactor = weatherFactor(curWx.temperature_2m, curWx.relative_humidity_2m, curWx.wind_speed_10m, curWx.precipitation, curWx.weather_code);
      if (curFactor < wxFactor) wxFactor = curFactor;
    }
  }

  var treeRisk = computeRisk(getSeasonalBase(TREE_SEASON, adjNow) * rg.tree, wxFactor);
  var grassRisk = computeRisk(getSeasonalBase(GRASS_SEASON, adjNow) * rg.grass, wxFactor);
  var weedRisk = computeRisk(getSeasonalBase(WEED_SEASON, adjNow) * rg.weed, wxFactor);
  var overallRisk = Math.max(treeRisk, grassRisk, weedRisk);
  var profile = getAllergenProfile();
  var personalRisk = computePersonalRisk(profile, adjNow, rg, wxFactor);

  var wxData = null;
  if (s.weatherTier === 1 || s.weatherTier === 2) {
    wxData = { temp: curWx.temperature_2m, humidity: curWx.relative_humidity_2m, wind: curWx.wind_speed_10m, precip: s.wx.daily.precipitation_sum[0], wxCode: curWx.weather_code, uv: curWx.uv_index };
  }

  renderBanner(personalRisk != null ? personalRisk : overallRisk, t("city." + s.cityIndex), wxFactor, wxData);
  renderDashboard(overallRisk, treeRisk, grassRisk, weedRisk, wxData, s.cityIndex, now, personalRisk);
}

function renderNearbyRegions(cityIndex, now) {
  var current = CITIES[cityIndex];
  if (!current) return;

  var distances = [];
  for (var i = 0; i < CITIES.length; i++) {
    if (i === cityIndex) continue;
    var c = CITIES[i];
    var dist = Math.hypot(c.lat - current.lat, c.lng - current.lng) * 111;
    distances.push({ idx: i, dist: dist, city: c });
  }
  distances.sort(function(a, b) { return a.dist - b.dist; });
  var nearest = distances.slice(0, 3);

  var adjNow = adjustDateForElevation(now, current.elev || BASELINE_ELEV);
  var html = nearest.map(function(n) {
    var r = REGIONS[n.city.region] || REGIONS.drs;
    var adjD = adjustDateForElevation(now, n.city.elev || BASELINE_ELEV);
    var treeR = computeRisk(getSeasonalBase(TREE_SEASON, adjD) * r.tree, 1.0);
    var grassR = computeRisk(getSeasonalBase(GRASS_SEASON, adjD) * r.grass, 1.0);
    var weedR = computeRisk(getSeasonalBase(WEED_SEASON, adjD) * r.weed, 1.0);
    var peak = Math.max(treeR, grassR, weedR);
    var info = getRiskInfo(peak);
    return '<div class="dash-nearby-card" style="border-left-color:' + info.color + '">' +
      '<div><div class="dash-nearby-name">' + t("city." + n.idx) + '</div>' +
      '<div class="dash-nearby-dist">' + Math.round(n.dist) + ' km</div></div>' +
      '<div><div class="dash-nearby-risk" style="color:' + info.color + '">' + info.label + '</div></div>' +
    '</div>';
  }).join('');
  document.getElementById("dash-nearby").innerHTML = html;
}

// Translation data loaded from lang/*.json files
var T = { en: {}, ru: {}, tj: {} };

async function loadTranslations(lang) {
  if (Object.keys(T[lang]).length > 0) return; // already loaded
  try {
    var res = await fetch("/lang/" + lang + ".json");
    if (res.ok) T[lang] = await res.json();
  } catch (e) {
    console.warn("Failed to load " + lang + " translations:", e.message);
  }
}

function t(key, params) {
  var s = (T[LANG] && T[LANG][key]) || (T["en"] && T["en"][key]) || key;
  if (params) {
    Object.keys(params).forEach(function(k) {
      s = s.replace("{" + k + "}", params[k]);
    });
  }
  return s;
}

var lastRenderState = null;

// ── Cities ──
var CITIES = [
  { idx: 0,  lat: 37.5882, lng: 68.6589, elev: 390,  region: "khatlon" },  // Balkh
  { idx: 1,  lat: 37.8364, lng: 68.7650, elev: 430,  region: "khatlon" },  // Bokhtar
  { idx: 2,  lat: 40.2342, lng: 69.6948, elev: 300,  region: "sughd" },    // Buston
  { idx: 3,  lat: 38.0975, lng: 69.3341, elev: 649,  region: "khatlon" },  // Danghara
  { idx: 4,  lat: 38.5598, lng: 68.7740, elev: 800,  region: "drs" },      // Dushanbe
  { idx: 5,  lat: 37.4922, lng: 69.4036, elev: 450,  region: "khatlon" },  // Farkhor
  { idx: 6,  lat: 40.2187, lng: 69.7247, elev: 400,  region: "sughd" },    // Ghafurov
  { idx: 7,  lat: 40.2647, lng: 69.7894, elev: 347,  region: "sughd" },    // Guliston
  { idx: 8,  lat: 37.6567, lng: 69.6292, elev: 440,  region: "khatlon" },  // Hamadoni
  { idx: 9,  lat: 38.5253, lng: 68.5514, elev: 802,  region: "drs" },      // Hisor
  { idx: 10, lat: 40.1265, lng: 70.6253, elev: 863,  region: "sughd" },    // Isfara
  { idx: 11, lat: 36.7167, lng: 71.6167, elev: 2535, region: "gbao" },     // Ishkashim
  { idx: 12, lat: 39.9142, lng: 69.0033, elev: 992,  region: "sughd" },    // Istaravshan
  { idx: 13, lat: 37.5383, lng: 71.5128, elev: 2200, region: "gbao" },     // Khorog
  { idx: 14, lat: 40.2833, lng: 69.6333, elev: 300,  region: "sughd" },    // Khujand
  { idx: 15, lat: 40.2982, lng: 70.4194, elev: 410,  region: "sughd" },    // Konibodom
  { idx: 16, lat: 37.9139, lng: 69.8028, elev: 580,  region: "khatlon" },  // Kulob
  { idx: 17, lat: 38.1702, lng: 73.9667, elev: 3618, region: "gbao" },     // Murghab
  { idx: 18, lat: 38.3833, lng: 69.3167, elev: 885,  region: "khatlon" },  // Norak
  { idx: 19, lat: 38.7173, lng: 69.7088, elev: 1348, region: "valleys" },   // Obigarm
  { idx: 20, lat: 39.4952, lng: 67.6093, elev: 996,  region: "sughd" },    // Panjakent
  { idx: 21, lat: 39.0287, lng: 70.3745, elev: 1355, region: "valleys" },   // Rasht
  { idx: 22, lat: 38.7826, lng: 69.8708, elev: 1230, region: "valleys" },   // Roghun
  { idx: 23, lat: 37.4000, lng: 67.8333, elev: 367,  region: "khatlon" },  // Shahritus
  { idx: 24, lat: 40.1522, lng: 69.3708, elev: 350,  region: "sughd" },    // Spitamen
  { idx: 25, lat: 38.5065, lng: 68.2248, elev: 708,  region: "drs" },      // Tursunzoda
  { idx: 26, lat: 38.5563, lng: 69.0135, elev: 870,  region: "drs" },      // Vahdat
  { idx: 27, lat: 37.7149, lng: 68.8346, elev: 426,  region: "khatlon" },  // Vakhsh
  { idx: 28, lat: 37.8040, lng: 69.6442, elev: 475,  region: "khatlon" },  // Vose'
  { idx: 29, lat: 38.3167, lng: 69.0833, elev: 655,  region: "khatlon" },  // Yovon
];

var CITY_SLUGS = {
  'balkh':0,'bokhtar':1,'buston':2,'danghara':3,'dushanbe':4,
  'farkhor':5,'ghafurov':6,'guliston':7,'hamadoni':8,'hisor':9,
  'isfara':10,'ishkashim':11,'istaravshan':12,'khorog':13,'khujand':14,
  'konibodom':15,'kulob':16,'murghab':17,'norak':18,'obigarm':19,
  'panjakent':20,'rasht':21,'roghun':22,'shahritus':23,'spitamen':24,
  'tursunzoda':25,'vahdat':26,'vakhsh':27,'vose':28,'yovon':29
};

function getCityFromPath() {
  var parts = location.pathname.split('/');
  var ci = parts.indexOf('city');
  if (ci >= 0 && ci + 1 < parts.length) {
    var slug = parts[ci + 1].toLowerCase();
    if (slug in CITY_SLUGS) return CITY_SLUGS[slug];
  }
  return -1;
}

// ── Regional pollen multipliers ──
// Based on FAO crop data, land cover surveys, and vegetation studies.
// Dushanbe/DRS is the baseline (1.0) since the pollen calendar was calibrated there.
var REGIONS = {
  drs:     { tree: 1.0, grass: 1.0, weed: 1.0 },
  khatlon: { tree: 0.8, grass: 1.3, weed: 1.1 },
  sughd:   { tree: 1.0, grass: 1.1, weed: 0.9 },
  gbao:    { tree: 0.3, grass: 0.3, weed: 0.4 },
  valleys: { tree: 0.8, grass: 0.7, weed: 0.9 },
};

// ── Seasonal Pollen Intensity (0-4 per month) ──
// Based on known Tajik flora. Each category has species + monthly intensity.
var TREE_SEASON =  [0, 1, 2, 4, 3, 1, 0, 0, 0, 0, 0, 0]; // poplar, willow, birch, plane tree peak Apr
var GRASS_SEASON = [0, 0, 0, 1, 3, 4, 3, 1, 0, 0, 0, 0]; // grass peaks Jun
var WEED_SEASON =  [0, 0, 0, 0, 0, 1, 2, 4, 4, 2, 0, 0]; // mugwort, chenopod, ragweed peak Aug-Sep

// Species names now come from translations: t("species.tree"), t("species.grass"), t("species.weed")

// ── Calendar data for the static table ──
var SEASONAL = [
  { name: "Poplar / Cottonwood", months: [0,1,3,4,3,1,0,0,0,0,0,0] },
  { name: "Willow",              months: [0,1,2,3,2,0,0,0,0,0,0,0] },
  { name: "Birch / Alder",       months: [0,0,2,3,2,0,0,0,0,0,0,0] },
  { name: "Plane Tree",          months: [0,0,1,3,3,1,0,0,0,0,0,0] },
  { name: "Mulberry",            months: [0,0,0,2,3,2,0,0,0,0,0,0] },
  { name: "Grass (general)",     months: [0,0,0,1,3,4,3,1,0,0,0,0] },
  { name: "Mugwort (Artemisia)", months: [0,0,0,0,0,1,2,4,4,2,0,0] },
  { name: "Chenopod / Pigweed",  months: [0,0,0,0,0,1,3,4,3,1,0,0] },
  { name: "Ragweed",             months: [0,0,0,0,0,0,1,3,3,1,0,0] },
];
var MONTH_LABELS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var CAL_CLASSES = ["cal-none","cal-low","cal-mod","cal-high","cal-vhigh"];
var SPECIES_CATEGORY = ['tree','tree','tree','tree','tree','grass','weed','weed','weed'];
var ALLERGEN_PROFILE_KEY = 'allergytj-allergen-profile';

function getAllergenProfile() {
  try {
    var raw = localStorage.getItem(ALLERGEN_PROFILE_KEY);
    if (!raw) return null;
    var p = JSON.parse(raw);
    if (!p || !Array.isArray(p.species) || p.species.length === 0) return null;
    var valid = p.species.filter(function(i) { return typeof i === 'number' && i >= 0 && i < 9; });
    if (valid.length === 0) return null;
    return { species: valid, version: p.version || 1 };
  } catch (e) { return null; }
}

function saveAllergenProfile(speciesArray) {
  if (!speciesArray || speciesArray.length === 0) {
    localStorage.removeItem(ALLERGEN_PROFILE_KEY);
    return;
  }
  localStorage.setItem(ALLERGEN_PROFILE_KEY, JSON.stringify({ species: speciesArray, version: 1 }));
}

function computePersonalRisk(profile, adjDate, reg, wxFactor) {
  if (!profile || !profile.species || profile.species.length === 0) return null;
  var maxRisk = 0;
  for (var i = 0; i < profile.species.length; i++) {
    var idx = profile.species[i];
    var cat = SPECIES_CATEGORY[idx];
    var mul = cat === 'tree' ? reg.tree : (cat === 'grass' ? reg.grass : reg.weed);
    var base = getSeasonalBase(SEASONAL[idx].months, adjDate) * mul;
    var risk = computeRisk(base, wxFactor);
    if (risk > maxRisk) maxRisk = risk;
  }
  return maxRisk;
}

function profileHasCategory(profile, category) {
  if (!profile) return false;
  for (var i = 0; i < profile.species.length; i++) {
    if (SPECIES_CATEGORY[profile.species[i]] === category) return true;
  }
  return false;
}

// ── Risk level colors (labels/advice come from translations) ──
var RISK_LEVELS = [
  { color: "#757575", bg: "#e0e0e0", badge: "badge-low" },
  { color: "#2e7d32", bg: "#1b5e20", badge: "badge-low" },
  { color: "#8c6d00", bg: "#f9a825", badge: "badge-moderate" },
  { color: "#d84315", bg: "#bf360c", badge: "badge-high" },
  { color: "#c62828", bg: "#b71c1c", badge: "badge-veryhigh" },
];

function getRiskInfo(score) {
  var idx = Math.min(Math.round(score), 4);
  var r = RISK_LEVELS[idx];
  return { label: t("risk." + idx + ".label"), color: r.color, bg: r.bg, badge: r.badge, advice: t("risk." + idx + ".advice") };
}

// ── Weather modifier ──
// Adjusts seasonal base score based on current weather conditions
function weatherFactor(temp, humidity, wind, precip, wxCode) {
  var tf;
  if (temp > 30) tf = 1.25;
  else if (temp > 25) tf = 1.15;
  else if (temp > 18) tf = 1.05;
  else if (temp > 10) tf = 0.95;
  else if (temp > 5) tf = 0.7;
  else tf = 0.4;

  var hf;
  if (humidity < 35) hf = 1.15;
  else if (humidity < 50) hf = 1.05;
  else if (humidity < 65) hf = 1.0;
  else if (humidity < 80) hf = 0.85;
  else hf = 0.7;

  var wf;
  if (wind > 25) wf = 1.2;
  else if (wind > 15) wf = 1.1;
  else if (wind > 8) wf = 1.0;
  else wf = 0.95;

  var pf;
  if (precip > 20) pf = 0.1;
  else if (precip > 10) pf = 0.2;
  else if (precip > 5) pf = 0.3;
  else if (precip > 1) pf = 0.5;
  else if (precip > 0) pf = 0.85;
  else pf = 1.0;

  var cf = 1.0;
  if (wxCode >= 95) cf = 0.5;
  else if (wxCode >= 80 && wxCode <= 82) cf = 0.6;
  else if (wxCode >= 71 && wxCode <= 77) cf = 0.5;
  else if (wxCode >= 61 && wxCode <= 67) cf = 0.7;
  else if (wxCode >= 51 && wxCode <= 57) cf = 0.8;
  else if (wxCode >= 45 && wxCode <= 48) cf = 0.85;

  var factor = tf * hf * wf * pf * cf;
  return Math.max(0.1, Math.min(1.6, factor));
}

function computeRisk(seasonBase, wxFactor) {
  return Math.max(0, Math.min(4, seasonBase * wxFactor));
}

// ── Elevation-adjusted bloom timing (Hopkins' Bioclimatic Law) ──
// Highland cities bloom later; lowland cities bloom slightly earlier.
// Baseline: Dushanbe (800m), where the pollen calendar was calibrated.
var BASELINE_ELEV = 800;
var ELEV_DAYS_PER_100M = 2;

function adjustDateForElevation(date, elev) {
  var offsetDays = Math.round((elev - BASELINE_ELEV) / 100 * ELEV_DAYS_PER_100M);
  var adj = new Date(date.getTime());
  adj.setDate(adj.getDate() - offsetDays);
  return adj;
}

// ── Current period weather (for banner + pollen cards) ──
function getCurrentPeriodWeather(hourlyData, now) {
  if (!hourlyData || !hourlyData.time) return null;
  var todayStr = now.getFullYear() + "-" +
    String(now.getMonth() + 1).padStart(2, "0") + "-" +
    String(now.getDate()).padStart(2, "0");
  var currentHour = now.getHours();
  var periods = [
    { start: 6, end: 12 },
    { start: 12, end: 18 },
    { start: 18, end: 24 },
  ];
  var active = null;
  for (var p = 0; p < periods.length; p++) {
    if (currentHour >= periods[p].start && currentHour < periods[p].end) {
      active = periods[p]; break;
    }
  }
  if (!active) return null;
  var temps = [], humids = [], winds = [], precips = [], wxCodes = [];
  for (var i = 0; i < hourlyData.time.length; i++) {
    var ts = hourlyData.time[i];
    if (ts.slice(0, 10) !== todayStr) continue;
    var hr = parseInt(ts.slice(11, 13), 10);
    if (hr >= active.start && hr < active.end) {
      temps.push(hourlyData.temperature_2m[i]);
      humids.push(hourlyData.relative_humidity_2m[i]);
      winds.push(hourlyData.wind_speed_10m[i]);
      precips.push(hourlyData.precipitation[i]);
      if (hourlyData.weather_code) wxCodes.push(hourlyData.weather_code[i]);
    }
  }
  if (temps.length === 0) return null;
  var avg = function(arr) { return arr.reduce(function(a, b) { return a + b; }, 0) / arr.length; };
  var sum = function(arr) { return arr.reduce(function(a, b) { return a + b; }, 0); };
  return {
    temp: avg(temps),
    humidity: avg(humids),
    wind: Math.max.apply(null, winds),
    precip: sum(precips),
    wxCode: wxCodes.length > 0 ? Math.max.apply(null, wxCodes) : 0
  };
}

// ── Hourly pollen risk breakdown (morning / afternoon / evening) ──
function computeHourlyBreakdown(hourlyData, now, cityElev, reg) {
  if (!hourlyData || !hourlyData.time) return null;
  var todayStr = now.getFullYear() + "-" +
    String(now.getMonth() + 1).padStart(2, "0") + "-" +
    String(now.getDate()).padStart(2, "0");
  var currentHour = now.getHours();

  var periods = [
    { key: "morning", start: 6, end: 12 },
    { key: "afternoon", start: 12, end: 18 },
    { key: "evening", start: 18, end: 24 },
  ];

  var results = [];
  for (var p = 0; p < periods.length; p++) {
    var per = periods[p];
    var temps = [], humids = [], winds = [], precips = [], wxCodes = [];

    for (var i = 0; i < hourlyData.time.length; i++) {
      var ts = hourlyData.time[i];
      if (ts.slice(0, 10) !== todayStr) continue;
      var hr = parseInt(ts.slice(11, 13), 10);
      if (hr >= per.start && hr < per.end) {
        temps.push(hourlyData.temperature_2m[i]);
        humids.push(hourlyData.relative_humidity_2m[i]);
        winds.push(hourlyData.wind_speed_10m[i]);
        precips.push(hourlyData.precipitation[i]);
        if (hourlyData.weather_code) wxCodes.push(hourlyData.weather_code[i]);
      }
    }
    if (temps.length === 0) continue;

    var avg = function(arr) { return arr.reduce(function(a, b) { return a + b; }, 0) / arr.length; };
    var sum = function(arr) { return arr.reduce(function(a, b) { return a + b; }, 0); };
    var avgTemp = avg(temps);
    var avgHumid = avg(humids);
    var maxWind = Math.max.apply(null, winds);
    var totalPrecip = sum(precips);
    var dominantWxCode = wxCodes.length > 0 ? Math.max.apply(null, wxCodes) : 0;

    var wxFactor = weatherFactor(avgTemp, avgHumid, maxWind, totalPrecip, dominantWxCode);
    var adjNow = adjustDateForElevation(now, cityElev || BASELINE_ELEV);
    var r = reg || REGIONS.drs;
    var treeR = computeRisk(getSeasonalBase(TREE_SEASON, adjNow) * r.tree, wxFactor);
    var grassR = computeRisk(getSeasonalBase(GRASS_SEASON, adjNow) * r.grass, wxFactor);
    var weedR = computeRisk(getSeasonalBase(WEED_SEASON, adjNow) * r.weed, wxFactor);

    results.push({
      key: per.key,
      risk: Math.max(treeR, grassR, weedR),
      temp: Math.round(avgTemp),
      wind: Math.round(maxWind),
      precip: totalPrecip.toFixed(1),
      past: currentHour >= per.end,
    });
  }
  return results.length > 0 ? results : null;
}

function renderHourlyBreakdown(blocks) {
  var container = document.getElementById("hourly-cards");
  var title = document.getElementById("hourly-title");
  if (!blocks || blocks.length === 0) {
    container.innerHTML = "";
    title.style.display = "none";
    container.style.display = "none";
    return;
  }
  title.style.display = "";
  container.style.display = "";

  var icons = { morning: mIcon('wb_twilight'), afternoon: mIcon('wb_sunny'), evening: mIcon('dark_mode') };

  container.innerHTML = blocks.map(function(b) {
    var info = getRiskInfo(b.risk);
    var cls = b.past ? " hourly-past" : "";
    return '<div class="hourly-card' + cls + '">' +
      '<div class="hourly-icon">' + icons[b.key] + '</div>' +
      '<div class="hourly-period">' + t("hourly." + b.key) + '</div>' +
      '<div class="hourly-hours">' + t("hourly.hours." + b.key) + '</div>' +
      '<div class="hourly-risk" style="color:' + info.color + '">' + info.label + '</div>' +
      '<div class="hourly-bar" style="background:' + info.color + ';opacity:0.7"></div>' +
      '<div class="hourly-detail">' + b.temp + '°C · ' + t("fc.wind", { kmh: b.wind }) +
        (parseFloat(b.precip) > 0 ? ' · ' + b.precip + 'mm' : '') + '</div>' +
      (b.past ? '<div class="hourly-past-label">' + t("hourly.past") + '</div>' : '') +
      '</div>';
  }).join("");
}

// ── Build Calendar ──
function buildCalendar() {
  // Legacy table removed — timeline calendar renders dynamically via renderTimelineCalendar()
}

// ── Interpolate seasonal base for a specific date ──
function getSeasonalBase(seasonArr, date) {
  var month = date.getMonth();
  var day = date.getDate();
  var daysInMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
  var frac = day / daysInMonth;

  var cur = seasonArr[month];
  var next = seasonArr[(month + 1) % 12];
  // Smooth interpolation between months
  return cur + (next - cur) * frac;
}

// ── Weather description ──
function wxDescription(code) {
  var key = "wx." + code;
  var val = T[LANG][key] || T["en"][key];
  return val || "\u2014";
}

// ── AQI rating ──
function aqiInfo(aqi) {
  var idx = aqi <= 50 ? 0 : aqi <= 100 ? 1 : aqi <= 150 ? 2 : aqi <= 200 ? 3 : 4;
  var colors = ["#1b5e20", "#8c6d00", "#bf360c", "#b71c1c", "#4a148c"];
  return { label: t("aqi." + idx + ".label"), color: colors[idx], desc: t("aqi." + idx + ".desc"), idx: idx };
}

function whoComparisonHtml(pm25) {
  if (pm25 == null) return '';
  var WHO_24H = 15;
  var WHO_ANNUAL = 5;
  if (pm25 < WHO_ANNUAL) {
    return '<div class="aqi-who-badge aqi-who-ok">' + mIcon('check_circle') + ' ' + t("aqi.who.withinGuideline") + '</div>';
  }
  if (pm25 >= WHO_24H) {
    var x = Math.round(pm25 / WHO_24H * 10) / 10;
    return '<div class="aqi-who-badge">' + mIcon('alert_triangle') + ' ' + t("aqi.who.above24h", { x: x }) + '</div>';
  }
  return '<div class="aqi-who-badge aqi-who-caution">' + mIcon('info') + ' ' + t("aqi.who.aboveAnnual") + '</div>';
}

function aqiHealthContextHtml(idx) {
  var general = t("aqi.health." + idx + ".general");
  if (!general || general === "aqi.health." + idx + ".general") return '';
  var html = '<div class="aqi-health-context aqi-health-tier-' + idx + '"><div class="aqi-health-general">' + general + '</div>';
  var vulnerable = t("aqi.health." + idx + ".vulnerable");
  if (vulnerable && vulnerable !== "aqi.health." + idx + ".vulnerable") {
    html += '<div class="aqi-health-vulnerable">' + mIcon('info') + '<span>' + vulnerable + '</span></div>';
    var actions = [];
    for (var i = 1; i <= 3; i++) {
      var a = t("aqi.health." + idx + ".action" + i);
      if (a && a !== "aqi.health." + idx + ".action" + i) actions.push('<li>' + a + '</li>');
    }
    if (actions.length) html += '<ul class="aqi-health-actions">' + actions.join('') + '</ul>';
  }
  html += '</div>';
  return html;
}

function aqiActionCardHtml(aqi) {
  if (aqi == null || aqi <= 100) return '';
  var tier, actions = [];
  actions.push(t("aqi.action.reduce"));
  if (aqi > 300) {
    tier = 4;
    actions.push(t("aqi.action.stayIndoors"));
    actions.push(t("aqi.action.windows"));
    actions.push(t("aqi.action.mask"));
    actions.push(t("aqi.action.purifier"));
    actions.push(t("aqi.action.emergency"));
  } else if (aqi > 200) {
    tier = 3;
    actions.push(t("aqi.action.stayIndoors"));
    actions.push(t("aqi.action.windows"));
    actions.push(t("aqi.action.mask"));
    actions.push(t("aqi.action.purifier"));
  } else if (aqi > 150) {
    tier = 2;
    actions.push(t("aqi.action.sensitive"));
    actions.push(t("aqi.action.windows"));
  } else {
    tier = 1;
  }
  var items = actions.map(function(a) { return '<li>' + a + '</li>'; }).join('');
  return '<div class="aqi-action-card aqi-action-tier-' + tier + '">' +
    '<div class="aqi-action-title">' + mIcon('health_and_safety') + ' ' + t("aqi.action.title") + '</div>' +
    '<ol class="aqi-action-list">' + items + '</ol></div>';
}

function renderAqiSafetyBanner(aq) {
  var banner = document.getElementById("aqi-safety-banner");
  if (!banner) return;
  var aqi = aq && aq.current ? aq.current.us_aqi : null;
  if (aqi == null || aqi <= 150) {
    banner.style.display = 'none';
    return;
  }
  var tier;
  if (aqi > 300) tier = 'hazardous';
  else if (aqi > 200) tier = 'veryUnhealthy';
  else tier = 'unhealthy';
  banner.className = 'aqi-safety-banner aqi-banner-' + tier;
  document.getElementById("aqi-banner-title").textContent = t("aqi.banner." + tier + ".title");
  document.getElementById("aqi-banner-text").textContent = t("aqi.banner." + tier + ".text");
  banner.style.display = 'flex';
}

// ── Fetch with timeout (AbortController) ──
function fetchWithTimeout(url, ms) {
  var controller = new AbortController();
  var timeout = setTimeout(function() { controller.abort(); }, ms);
  return fetch(url, { signal: controller.signal })
    .finally(function() { clearTimeout(timeout); });
}

// ── Air quality fetch (independent, never blocks weather) ──
async function fetchAirQuality(lat, lng) {
  try {
    var aqUrl = "https://air-quality-api.open-meteo.com/v1/air-quality?" + new URLSearchParams({
      latitude: lat, longitude: lng,
      current: "pm2_5,pm10,ozone,nitrogen_dioxide,sulphur_dioxide,carbon_monoxide,us_aqi,us_aqi_pm2_5,us_aqi_pm10,us_aqi_ozone,us_aqi_nitrogen_dioxide,us_aqi_sulphur_dioxide,us_aqi_carbon_monoxide",
      hourly: "us_aqi,us_aqi_pm2_5,us_aqi_pm10,us_aqi_ozone,us_aqi_nitrogen_dioxide,us_aqi_sulphur_dioxide,us_aqi_carbon_monoxide",
      forecast_days: "5",
      timezone: "auto",
    });
    var res = await fetchWithTimeout(aqUrl, 6000);
    return await res.json();
  } catch (e) {
    console.warn("Air quality fetch failed:", e.message);
    return null;
  }
}

// ── wttr.in WWO → WMO weather code mapping ──
// wttr.in uses World Weather Online codes; our wxDescription() uses WMO codes.
// See: https://www.worldweatheronline.com/developer/api/docs/weather-icons.aspx
function mapWttrWeatherCode(wwoCode) {
  var code = parseInt(wwoCode);
  var map = {
    113: 0,   // Clear/Sunny → Clear sky
    116: 2,   // Partly cloudy
    119: 3,   // Cloudy → Overcast
    122: 3,   // Overcast
    143: 45,  // Mist → Fog
    176: 61,  // Patchy rain → Slight rain
    179: 71,  // Patchy snow → Slight snow
    182: 61,  // Patchy sleet
    185: 51,  // Patchy freezing drizzle → Light drizzle
    200: 95,  // Thundery outbreaks → Thunderstorm
    227: 71,  // Blowing snow → Slight snow
    230: 75,  // Blizzard → Heavy snow
    248: 45,  // Fog
    260: 48,  // Freezing fog → Rime fog
    263: 51,  // Patchy light drizzle
    266: 53,  // Light drizzle → Moderate drizzle
    281: 51,  // Freezing drizzle
    284: 55,  // Heavy freezing drizzle → Dense drizzle
    293: 61,  // Patchy light rain
    296: 61,  // Light rain
    299: 63,  // Moderate rain at times
    302: 63,  // Moderate rain
    305: 65,  // Heavy rain at times
    308: 65,  // Heavy rain
    311: 61,  // Light freezing rain
    314: 63,  // Moderate freezing rain
    317: 61,  // Light sleet
    320: 63,  // Moderate sleet
    323: 71,  // Patchy light snow
    326: 71,  // Light snow
    329: 73,  // Patchy moderate snow
    332: 73,  // Moderate snow
    335: 75,  // Patchy heavy snow
    338: 75,  // Heavy snow
    353: 80,  // Light rain shower
    356: 81,  // Moderate rain shower
    359: 82,  // Torrential rain shower
    362: 80,  // Light sleet shower
    365: 81,  // Moderate sleet shower
    368: 71,  // Light snow shower
    371: 73,  // Moderate snow shower
    386: 95,  // Patchy thunderstorm with rain
    389: 99,  // Moderate/heavy thunderstorm with rain
    392: 96,  // Patchy thunderstorm with snow
    395: 99,  // Moderate/heavy thunderstorm with snow
  };
  return map[code] !== undefined ? map[code] : 3; // default to overcast
}

// ── wttr.in adapter: reshapes response to match Open-Meteo structure ──
// Expected wttr.in format=j1 response shape:
//   { current_condition: [{ temp_C, humidity, windspeedKmph, weatherCode, ... }],
//     weather: [{ date, maxtempC, mintempC, hourly: [{ precipMM, windspeedKmph, humidity, weatherCode }] }] }
async function fetchWeatherFromWttr(lat, lng) {
  var url = "https://wttr.in/" + lat + "," + lng + "?format=j1";
  var res = await fetchWithTimeout(url, 5000);
  if (!res.ok) throw new Error("HTTP " + res.status);
  var data = await res.json();

  // Validate response shape (wttr.in may return Cloudflare challenge or unexpected format)
  if (!data || !data.current_condition || !data.current_condition[0] || !data.weather) {
    throw new Error("Invalid wttr.in response shape");
  }

  var cur = data.current_condition[0];
  var forecasts = data.weather; // 3 days: today + 2

  var current = {
    temperature_2m: parseFloat(cur.temp_C),
    relative_humidity_2m: parseInt(cur.humidity),
    wind_speed_10m: parseFloat(cur.windspeedKmph),
    precipitation: 0,
    weather_code: mapWttrWeatherCode(cur.weatherCode),
    uv_index: null,
  };

  var daily = {
    time: [],
    temperature_2m_max: [],
    temperature_2m_min: [],
    precipitation_sum: [],
    wind_speed_10m_max: [],
    relative_humidity_2m_mean: [],
    weather_code: [],
  };

  for (var i = 0; i < forecasts.length; i++) {
    var day = forecasts[i];
    daily.time.push(day.date);
    daily.temperature_2m_max.push(parseFloat(day.maxtempC));
    daily.temperature_2m_min.push(parseFloat(day.mintempC));

    var totalPrecip = 0;
    var maxWind = 0;
    var totalHumidity = 0;
    var hours = day.hourly;
    for (var h = 0; h < hours.length; h++) {
      totalPrecip += parseFloat(hours[h].precipMM);
      var w = parseFloat(hours[h].windspeedKmph);
      if (w > maxWind) maxWind = w;
      totalHumidity += parseInt(hours[h].humidity);
    }
    daily.precipitation_sum.push(totalPrecip);
    daily.wind_speed_10m_max.push(maxWind);
    daily.relative_humidity_2m_mean.push(Math.round(totalHumidity / hours.length));
    // Use midday hour (index 4 of 8 3-hour slots) for daily weather code
    var middayIdx = Math.min(4, hours.length - 1);
    daily.weather_code.push(mapWttrWeatherCode(hours[middayIdx].weatherCode));
  }

  var hourly = { time: [], temperature_2m: [], relative_humidity_2m: [], wind_speed_10m: [], precipitation: [], weather_code: [] };
  var todayFc = forecasts[0];
  if (todayFc && todayFc.hourly) {
    for (var j = 0; j < todayFc.hourly.length; j++) {
      var slot = todayFc.hourly[j];
      var slotHour = parseInt(slot.time) / 100;
      hourly.time.push(todayFc.date + "T" + String(slotHour).padStart(2, "0") + ":00");
      hourly.temperature_2m.push(parseFloat(slot.tempC));
      hourly.relative_humidity_2m.push(parseInt(slot.humidity));
      hourly.wind_speed_10m.push(parseFloat(slot.windspeedKmph));
      hourly.precipitation.push(parseFloat(slot.precipMM));
      hourly.weather_code.push(mapWttrWeatherCode(slot.weatherCode));
    }
  }

  return { current: current, daily: daily, hourly: hourly };
}

// ── Tier notice rendering ──
function renderTierNotice(tier) {
  var el = document.getElementById("tier-notice");
  if (tier === 1) {
    el.style.display = "none";
  } else if (tier === 2) {
    el.style.display = "";
    el.style.color = "#f9a825";
    el.style.fontWeight = "600";
    el.textContent = t("tier.2");
  } else if (tier === 3) {
    el.style.display = "";
    el.style.color = "#e53935";
    el.style.fontWeight = "600";
    el.textContent = t("tier.3");
  }
}

// ── Dashboard "last updated" timestamp ──
var _dashWxTimestamp = null;
var _dashUpdatedInterval = null;

function updateDashTimestamp() {
  var el = document.getElementById("dash-updated");
  if (!el || !_dashWxTimestamp) { if (el) el.style.display = "none"; return; }
  var mins = Math.floor((Date.now() - _dashWxTimestamp) / 60000);
  el.textContent = mins < 1 ? t("dash.updatedJustNow") : t("dash.updatedMinAgo", { min: mins });
  el.style.display = "";
}

// ── Fetch Data (3-tier fallback) ──
var _fetchId = 0; // abort-and-replace: each call gets an incrementing ID
async function fetchData() {
  var myId = ++_fetchId; // capture this call's ID

  var sel = document.getElementById("city-select");
  var parts = sel.value.split(",");
  var lat = parts[0], lng = parts[1];
  var cityName = sel.options[sel.selectedIndex].text;

  var fcCityEl = document.getElementById("forecast-city-name");
  if (fcCityEl) fcCityEl.textContent = cityName;

  var status = document.getElementById("status");
  var fcTitle = document.getElementById("forecast-title");

  var cityIndex = getSelectedCityIndex();
  var cityElev = CITIES[cityIndex] ? CITIES[cityIndex].elev : BASELINE_ELEV;
  var reg = REGIONS[CITIES[cityIndex] ? CITIES[cityIndex].region : "drs"] || REGIONS.drs;
  localStorage.setItem("allergytj-city", sel.value);

  status.className = "status";
  status.textContent = t("status.fetching", { city: cityName });
  document.getElementById("share-btn").disabled = true;
  document.getElementById("results").style.display = "none";
  var skel = document.getElementById("results-skeleton");
  skel.style.display = "";
  skel.querySelector(".skel-strip").style.display = "";
  skel.querySelector(".skel-forecast-grid").style.display = "";
  var skelTrend = skel.querySelector(".skel-fc-trend");
  if (skelTrend) skelTrend.style.display = "";
  var skelLabels = skel.querySelectorAll(".skel-label");
  if (skelLabels[1]) skelLabels[1].style.display = "";
  document.getElementById("tier-notice").style.display = "none";

  var wx = null;
  var weatherTier = 0;

  // Air quality: fetch independently (never blocks weather)
  var aqPromise = fetchAirQuality(lat, lng);

  // Tier 1: Open-Meteo
  try {
    var wxUrl = "https://api.open-meteo.com/v1/forecast?" + new URLSearchParams({
      latitude: lat, longitude: lng,
      current: "temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code,uv_index",
      hourly: "temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code",
      daily: "temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,relative_humidity_2m_mean,weather_code",
      forecast_days: "6",
      timezone: "auto",
    });
    var wxRes = await fetchWithTimeout(wxUrl, 6000);
    if (!wxRes.ok) throw new Error("HTTP " + wxRes.status);
    wx = await wxRes.json();
    if (wx.error) throw new Error(wx.reason || wx.error);
    weatherTier = 1;
  } catch (e) {
    console.warn("Open-Meteo failed:", e.message);
  }

  // Tier 2: wttr.in (only if Tier 1 failed)
  if (!weatherTier) {
    status.textContent = t("status.backupTrying");
    try {
      wx = await fetchWeatherFromWttr(lat, lng);
      weatherTier = 2;
    } catch (e) {
      console.warn("wttr.in failed:", e.message);
    }
  }

  // Tier 3: seasonal-only (both APIs failed)
  if (!weatherTier) {
    weatherTier = 3;
  }

  // Await air quality
  var aq = await aqPromise;

  // Abort if a newer fetchData() call has started
  if (myId !== _fetchId) return;

  // Render based on tier
  try {
    var now = new Date();

    if (weatherTier === 1 || weatherTier === 2) {
      var curWx = wx.current;
      var daily = wx.daily;

      // Daily values (always needed for weather strip and forecast)
      var todayPrecip = daily.precipitation_sum[0];
      var todayWxCode = daily.weather_code[0];

      // Use current period's hourly weather for banner + pollen cards, fall back to daily totals
      var periodWx = wx.hourly ? getCurrentPeriodWeather(wx.hourly, now) : null;
      var wxData, wxFactor;
      if (periodWx) {
        wxData = periodWx;
        wxFactor = weatherFactor(periodWx.temp, periodWx.humidity, periodWx.wind, periodWx.precip, periodWx.wxCode);
      } else {
        var todayTemp = daily.temperature_2m_max[0];
        var todayHumidity = daily.relative_humidity_2m_mean ? daily.relative_humidity_2m_mean[0] : curWx.relative_humidity_2m;
        var todayWind = daily.wind_speed_10m_max[0];
        wxData = {temp: todayTemp, humidity: todayHumidity, wind: todayWind, precip: todayPrecip, wxCode: todayWxCode};
        wxFactor = weatherFactor(todayTemp, todayHumidity, todayWind, todayPrecip, todayWxCode);
      }
      // Real-time override: if current observations are more suppressive than
      // the period forecast (e.g. thunderstorm the forecast missed), use them
      if (curWx && curWx.weather_code !== undefined) {
        var curWxData = {temp: curWx.temperature_2m, humidity: curWx.relative_humidity_2m, wind: curWx.wind_speed_10m, precip: curWx.precipitation, wxCode: curWx.weather_code};
        var curFactor = weatherFactor(curWxData.temp, curWxData.humidity, curWxData.wind, curWxData.precip, curWxData.wxCode);
        if (curFactor < wxFactor) {
          wxFactor = curFactor;
          wxData = curWxData;
        }
      }
      var adjNow = adjustDateForElevation(now, cityElev);
      var treeBase = getSeasonalBase(TREE_SEASON, adjNow) * reg.tree;
      var grassBase = getSeasonalBase(GRASS_SEASON, adjNow) * reg.grass;
      var weedBase = getSeasonalBase(WEED_SEASON, adjNow) * reg.weed;

      var treeRisk = computeRisk(treeBase, wxFactor);
      var grassRisk = computeRisk(grassBase, wxFactor);
      var weedRisk = computeRisk(weedBase, wxFactor);
      var overallRisk = Math.max(treeRisk, grassRisk, weedRisk);
      var _profile = getAllergenProfile();
      var _personalRisk = computePersonalRisk(_profile, adjNow, reg, wxFactor);

      renderBanner(_personalRisk != null ? _personalRisk : overallRisk, cityName, wxFactor, wxData);
      renderPollenCards(treeRisk, grassRisk, weedRisk, now);
      renderDashboard(overallRisk, treeRisk, grassRisk, weedRisk,
        { temp: curWx.temperature_2m, humidity: curWx.relative_humidity_2m, wind: curWx.wind_speed_10m, precip: todayPrecip, wxCode: curWx.weather_code, uv: curWx.uv_index },
        cityIndex, now, _personalRisk);
      renderInsights(cityIndex);

      var hourlyBlocks = wx.hourly ? computeHourlyBreakdown(wx.hourly, now, cityElev, reg) : null;
      renderHourlyBreakdown(hourlyBlocks);

      renderWeather(curWx.temperature_2m, curWx.relative_humidity_2m, curWx.wind_speed_10m,
                    todayPrecip, curWx.weather_code, todayWxCode, curWx.uv_index);
      renderForecast(daily, now, cityElev, reg);

      document.getElementById("weather-strip").style.display = "";
      fcTitle.textContent = weatherTier === 2 ? t("section.forecast2") : t("section.forecast5");
      var _notifRisk = _personalRisk != null ? _personalRisk : overallRisk;
      var _notifUv = curWx.uv_index;

    } else {
      // Tier 3: seasonal-only, no weather adjustment
      var wxFactor = 1.0;
      var adjNow = adjustDateForElevation(now, cityElev);
      var treeBase = getSeasonalBase(TREE_SEASON, adjNow) * reg.tree;
      var grassBase = getSeasonalBase(GRASS_SEASON, adjNow) * reg.grass;
      var weedBase = getSeasonalBase(WEED_SEASON, adjNow) * reg.weed;

      var treeRisk = computeRisk(treeBase, wxFactor);
      var grassRisk = computeRisk(grassBase, wxFactor);
      var weedRisk = computeRisk(weedBase, wxFactor);
      var overallRisk = Math.max(treeRisk, grassRisk, weedRisk);
      var _profile = getAllergenProfile();
      var _personalRisk = computePersonalRisk(_profile, adjNow, reg, wxFactor);

      renderBanner(_personalRisk != null ? _personalRisk : overallRisk, cityName, wxFactor, null);
      renderPollenCards(treeRisk, grassRisk, weedRisk, now);
      renderDashboard(overallRisk, treeRisk, grassRisk, weedRisk, null, cityIndex, now, _personalRisk);
      renderInsights(cityIndex);
      renderHourlyBreakdown(null);

      document.getElementById("weather-strip").style.display = "none";
      document.getElementById("forecast-cards").innerHTML = "";
      document.getElementById("forecast-trend").innerHTML = "";
      document.getElementById("forecast-aqi-cards").innerHTML = "";
      fcTitle.textContent = t("section.forecastNone");
      var _notifRisk = _personalRisk != null ? _personalRisk : overallRisk;
      var _notifUv = null;
    }

    // Air quality: always render independently
    if (aq) {
      renderAqi(aq);
      renderAqiForecast(aq, daily);
      renderAqiSafetyBanner(aq);
    } else {
      document.getElementById("aqi-card").innerHTML = '<div style="color:var(--muted)">' + t("aqi.unavailable") + '</div>';
      renderAqiSafetyBanner(null);
      document.getElementById("forecast-aqi-cards").innerHTML = '';
    }

    // Store render state for language switch re-render
    lastRenderState = { weatherTier: weatherTier, wx: wx, aq: aq, cityIndex: cityIndex, cityElev: cityElev, reg: reg };

    renderTierNotice(weatherTier);
    var skel = document.getElementById("results-skeleton");
    if (weatherTier === 3) {
      skel.querySelector(".skel-strip").style.display = "none";
      skel.querySelector(".skel-forecast-grid").style.display = "none";
      var skelTrend = skel.querySelector(".skel-fc-trend");
      if (skelTrend) skelTrend.style.display = "none";
      var skelLabels = skel.querySelectorAll(".skel-label");
      if (skelLabels[1]) skelLabels[1].style.display = "none";
    }
    skel.style.display = "none";
    document.getElementById("results").style.display = "block";
    document.getElementById("share-btn").disabled = false;
    status.textContent = "";
    checkAndNotify(_notifRisk, _notifUv, aq);
    _regionWxCache = null;
    if (document.getElementById('tab-regions').classList.contains('active')) renderRegionsTab();

    _dashWxTimestamp = Date.now();
    updateDashTimestamp();
    if (_dashUpdatedInterval) clearInterval(_dashUpdatedInterval);
    _dashUpdatedInterval = setInterval(updateDashTimestamp, 60000);

  } catch (e) {
    document.getElementById("results-skeleton").style.display = "none";
    status.className = "status error";
    status.textContent = t("status.error");
    console.error(e);
  } finally {
    // no button to re-enable
  }
}

function renderBanner(overall, cityName, wxFactor, wxData) {
  var info = getRiskInfo(overall);
  var banner = document.getElementById("risk-banner");
  banner.style.background = info.bg;
  var riskIdx = Math.min(Math.round(overall), 4);
  banner.style.color = (riskIdx === 0 || riskIdx === 2) ? "#000" : "white";
  document.getElementById("banner-level").textContent = info.label + " " + t("pollen.riskSuffix");

  var wxNote = "";
  if (wxData && wxFactor < 1.0) {
    var reasons = [];
    if (wxData.wxCode >= 95) reasons.push(t("wx.reason.thunderstorm"));
    else if (wxData.wxCode >= 71 && wxData.wxCode <= 77) reasons.push(t("wx.reason.snow"));
    else if (wxData.precip > 1) reasons.push(t("wx.reason.rain"));
    if (wxData.temp < 5) reasons.push(t("wx.reason.cold"));
    if (wxData.humidity >= 75) reasons.push(t("wx.reason.humid"));
    else if (wxData.humidity >= 65) reasons.push(t("wx.reason.moist"));
    if (wxData.wind < 5) reasons.push(t("wx.reason.calm"));
    if (reasons.length > 0) {
      var joined = reasons.join(", ");
      if (wxFactor <= 0.3) wxNote = " " + t("wx.mod.strongSuppress", {reasons: joined});
      else wxNote = " " + t("wx.mod.reducing", {reasons: joined});
    }
  } else if (wxData && wxFactor > 1.0) {
    var reasons = [];
    if (wxData.temp > 25) reasons.push(t("wx.reason.hot"));
    if (wxData.humidity < 50) reasons.push(t("wx.reason.dry"));
    if (wxData.wind > 15) reasons.push(t("wx.reason.windy"));
    if (reasons.length > 0) {
      var joined = reasons.join(", ");
      if (wxFactor >= 1.3) wxNote = " " + t("wx.mod.amplifying", {reasons: joined});
      else wxNote = " " + t("wx.mod.slightElevating", {reasons: joined});
    }
  }

  document.getElementById("banner-desc").textContent = cityName + " \u2014 " + info.advice + wxNote;
}

function renderPollenCards(tree, grass, weed, now) {
  var month = now.getMonth();
  var cards = [
    { type: t("pollen.tree"), risk: tree, species: getActiveSpecies("tree", TREE_SEASON, month) },
    { type: t("pollen.grass"), risk: grass, species: getActiveSpecies("grass", GRASS_SEASON, month) },
    { type: t("pollen.weed"), risk: weed, species: getActiveSpecies("weed", WEED_SEASON, month) },
  ];

  var container = document.getElementById("pollen-cards");
  container.innerHTML = cards.map(function(c) {
    var info = getRiskInfo(c.risk);
    return '<div class="pollen-card" style="border-top-color:' + info.color + '">' +
      '<div class="type">' + c.type + '</div>' +
      '<div class="risk-label" style="color:' + info.color + '">' + info.label + '</div>' +
      '<span class="badge ' + info.badge + '">' + c.risk.toFixed(1) + ' / 4</span>' +
      (c.species ? '<div class="allergens">' + c.species + '</div>' : '') +
      '</div>';
  }).join("");
}

function getActiveSpecies(speciesKey, seasonArr, month) {
  if (seasonArr[month] === 0) return t("pollen.notInSeason");
  return t("species." + speciesKey);
}

function wxIcon(code) {
  if (code >= 95) return mIcon('thunderstorm');
  if (code >= 80) return mIcon('rainy_heavy');
  if (code >= 71) return mIcon('weather_snowy');
  if (code >= 61) return mIcon('rainy');
  if (code >= 51) return mIcon('rainy_light');
  if (code >= 45) return mIcon('foggy');
  if (code === 3) return mIcon('cloud');
  if (code === 2) return mIcon('partly_cloudy_day');
  if (code === 1) return mIcon('partly_cloudy_day');
  return mIcon('wb_sunny');
}

function uvColor(val) {
  if (val == null) return "var(--muted)";
  if (val >= 11) return "#7b2ff7";
  if (val >= 8) return "#d32f2f";
  if (val >= 6) return "#e65100";
  if (val >= 3) return "#f9a825";
  return "#388e3c";
}

function uvShareInfo(val) {
  if (val >= 11) return { color: "#6a1b9a", label: t("share.uvExtreme") };
  if (val >= 8) return { color: "#c62828", label: t("share.uvVeryHigh") };
  if (val >= 6) return { color: "#d84315", label: t("share.uvHigh") };
  if (val >= 3) return { color: "#7a6200", label: t("share.uvModerate") };
  return { color: "#2e7d32", label: t("share.uvLow") };
}

function renderWeather(temp, humidity, wind, todayPrecip, code, dailyCode, uv) {
  var strip = document.getElementById("weather-strip");
  var nowDesc = wxDescription(code);
  var dayDesc = wxDescription(dailyCode);
  var uvVal = uv !== null && uv !== undefined ? uv.toFixed(1) : "\u2014";
  var windUnit = t("fc.wind", {kmh: ""}).replace(/^/, "").trim();
  var icon = wxIcon(code);
  var uvC = uvColor(uv);

  strip.innerHTML =
    '<div class="wx-hero">' +
      '<div class="wx-hero-icon">' + icon + '</div>' +
      '<div class="wx-hero-temp">' + Math.round(temp) + '\u00B0</div>' +
      '<div class="wx-hero-condition">' +
        '<div class="wx-now">' + nowDesc + '</div>' +
        '<div>' + t("wx.label.todayOverall") + ': ' + dayDesc + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="wx-stats">' +
      '<div><div class="wx-stat-icon">' + mIcon('water_drop') + '</div><div class="wx-stat-val">' + humidity + '%</div><div class="wx-stat-label">' + t("wx.label.humidity") + '</div></div>' +
      '<div><div class="wx-stat-icon">' + mIcon('air') + '</div><div class="wx-stat-val">' + wind + ' ' + windUnit + '</div><div class="wx-stat-label">' + t("wx.label.wind") + '</div></div>' +
      '<div><div class="wx-stat-icon">' + mIcon('rainy') + '</div><div class="wx-stat-val">' + todayPrecip + ' mm</div><div class="wx-stat-label">' + t("wx.label.rainToday") + '</div></div>' +
      '<div><div class="wx-stat-icon">' + mIcon('wb_sunny') + '</div><div class="wx-stat-val" style="color:' + uvC + '">' + uvVal + '</div><div class="wx-stat-label">' + t("wx.label.uv") + '</div></div>' +
    '</div>';
}

function renderAqi(aq) {
  var card = document.getElementById("aqi-card");
  var cur = aq.current || {};
  var aqi = cur.us_aqi;

  if (aqi == null) {
    card.innerHTML = '<div style="color:var(--muted)">' + t("aqi.unavailable") + '</div>';
    return;
  }

  var info = aqiInfo(aqi);

  var pollutants = [
    { key: "o3", val: cur.ozone, sub: cur.us_aqi_ozone },
    { key: "pm25", val: cur.pm2_5, sub: cur.us_aqi_pm2_5 },
    { key: "pm10", val: cur.pm10, sub: cur.us_aqi_pm10 },
    { key: "no2", val: cur.nitrogen_dioxide, sub: cur.us_aqi_nitrogen_dioxide },
    { key: "so2", val: cur.sulphur_dioxide, sub: cur.us_aqi_sulphur_dioxide },
    { key: "co", val: cur.carbon_monoxide, sub: cur.us_aqi_carbon_monoxide },
  ];

  pollutants.sort(function(a, b) {
    if (a.sub == null) return 1;
    if (b.sub == null) return -1;
    return b.sub - a.sub;
  });

  var dominant = pollutants[0] && pollutants[0].sub != null ? pollutants[0] : null;

  var rows = pollutants.map(function(p) {
    var isDom = p === dominant;
    var valRound = p.val != null ? Math.round(p.val * 10) / 10 : null;
    var valStr = valRound != null ? valRound + " µg/m³" : "—";
    var subStr = p.sub != null ? p.sub : "—";
    var subInfo = p.sub != null ? aqiInfo(p.sub) : null;
    var subColor = subInfo ? subInfo.color : "var(--muted)";
    var barPct = p.sub != null ? Math.min(p.sub / 150 * 100, 100) : 0;

    return '<div class="aqi-row' + (isDom ? ' aqi-dom' : '') + '">' +
      '<span class="pol-name">' + t("aqi.pol." + p.key) + '</span>' +
      '<span class="pol-val">' + valStr + '</span>' +
      '<span class="pol-sub" style="color:' + subColor + '">' + subStr + '</span>' +
      '<span class="pol-bar"><span class="pol-bar-fill" style="width:' + barPct + '%;background:' + subColor + '"></span></span>' +
    '</div>';
  }).join("");

  var dustNote = (dominant && dominant.key === 'pm10')
    ? '<div class="aqi-dust-note">' + mIcon('air') + '<span>' + t("aqi.dustNote") + '</span></div>'
    : '';

  card.innerHTML =
    '<div class="aqi-summary">' +
      '<div class="aqi-circle" style="background:' + info.color + '">' +
        '<div class="aqi-num">' + aqi + '</div>' +
        '<div class="aqi-lbl">' + t("aqi.usAqi") + '</div>' +
      '</div>' +
      '<div class="aqi-details">' +
        '<div class="aqi-status" style="color:' + info.color + '">' + info.label + '</div>' +
        '<div class="aqi-desc" style="color:' + info.color + '">' + info.desc + '</div>' +
        (dominant ? '<div class="aqi-dominant-label">' + t("aqi.dominant") + ': <strong>' + t("aqi.pol." + dominant.key) + '</strong></div>' : '') +
        whoComparisonHtml(cur.pm2_5) +
      '</div>' +
    '</div>' +
    '<div class="aqi-breakdown">' + rows + '</div>' +
    aqiHealthContextHtml(info.idx) +
    aqiActionCardHtml(aqi) +
    dustNote +
    '<div class="aqi-disclaimer">' + t("aqi.disclaimer") + '</div>';
}

function aggregateAqiForecast(aq) {
  if (!aq || !aq.hourly || !aq.hourly.time) return [];
  var h = aq.hourly;
  var byDay = {};
  for (var i = 0; i < h.time.length; i++) {
    var day = h.time[i].slice(0, 10);
    if (!byDay[day]) byDay[day] = { aqi: [], pm25: [], pm10: [], o3: [], no2: [], so2: [], co: [] };
    if (h.us_aqi[i] != null) byDay[day].aqi.push(h.us_aqi[i]);
    if (h.us_aqi_pm2_5 && h.us_aqi_pm2_5[i] != null) byDay[day].pm25.push(h.us_aqi_pm2_5[i]);
    if (h.us_aqi_pm10 && h.us_aqi_pm10[i] != null) byDay[day].pm10.push(h.us_aqi_pm10[i]);
    if (h.us_aqi_ozone && h.us_aqi_ozone[i] != null) byDay[day].o3.push(h.us_aqi_ozone[i]);
    if (h.us_aqi_nitrogen_dioxide && h.us_aqi_nitrogen_dioxide[i] != null) byDay[day].no2.push(h.us_aqi_nitrogen_dioxide[i]);
    if (h.us_aqi_sulphur_dioxide && h.us_aqi_sulphur_dioxide[i] != null) byDay[day].so2.push(h.us_aqi_sulphur_dioxide[i]);
    if (h.us_aqi_carbon_monoxide && h.us_aqi_carbon_monoxide[i] != null) byDay[day].co.push(h.us_aqi_carbon_monoxide[i]);
  }
  var days = Object.keys(byDay).sort();
  var result = [];
  for (var d = 0; d < days.length; d++) {
    var b = byDay[days[d]];
    // CAMS coverage ends mid-window: a trailing day with only a few overnight
    // hours would report a misleadingly low "daily peak" — require most of the day
    if (b.aqi.length < 20) continue;
    var maxAqi = Math.max.apply(null, b.aqi);
    var subs = [
      { key: "pm25", max: b.pm25.length ? Math.max.apply(null, b.pm25) : 0 },
      { key: "pm10", max: b.pm10.length ? Math.max.apply(null, b.pm10) : 0 },
      { key: "o3", max: b.o3.length ? Math.max.apply(null, b.o3) : 0 },
      { key: "no2", max: b.no2.length ? Math.max.apply(null, b.no2) : 0 },
      { key: "so2", max: b.so2.length ? Math.max.apply(null, b.so2) : 0 },
      { key: "co", max: b.co.length ? Math.max.apply(null, b.co) : 0 },
    ];
    subs.sort(function(a, b) { return b.max - a.max; });
    result.push({ date: days[d], aqi: maxAqi, dominantKey: subs[0].key, subs: subs });
  }
  return result;
}

function renderAqiForecast(aq, daily) {
  var container = document.getElementById("forecast-aqi-cards");
  var title = document.getElementById("forecast-aqi-title");
  if (!container) return;

  var forecast = aggregateAqiForecast(aq);
  if (forecast.length < 2) {
    container.innerHTML = '';
    if (title) title.style.display = 'none';
    return;
  }
  if (title) title.style.display = '';

  var today = forecast[0].date;
  var days = forecast.slice(1, 5);

  var WEEKDAYS_EN = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var WEEKDAYS_RU = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
  var WEEKDAYS_TJ = ["Яш","Дш","Сш","Чш","Пш","Ҷм","Шб"];
  var weekdays = LANG === "ru" ? WEEKDAYS_RU : LANG === "tj" ? WEEKDAYS_TJ : WEEKDAYS_EN;

  var cards = days.map(function(d) {
    var info = aqiInfo(d.aqi);
    var dt = new Date(d.date + "T12:00:00");
    var dayName = weekdays[dt.getDay()] + ", " + t("month." + dt.getMonth()) + " " + dt.getDate();
    var topSubs = d.subs.filter(function(s) { return s.max > 0; });
    var subRows = topSubs.map(function(s) {
      var si = aqiInfo(s.max);
      var pct = Math.min(s.max / 150 * 100, 100);
      return '<div class="fc-aqi-sub">' +
        '<span class="fc-aqi-sub-name">' + t("aqi.pol." + s.key) + '</span>' +
        '<span class="fc-aqi-sub-val" style="color:' + si.color + '">' + Math.round(s.max) + '</span>' +
        '<span class="fc-aqi-sub-bar"><span style="width:' + pct + '%;background:' + si.color + '"></span></span>' +
      '</div>';
    }).join("");

    return '<div class="fc-aqi-card" style="border-top: 4px solid ' + info.color + '">' +
      '<div class="fc-aqi-header">' +
        '<div class="fc-aqi-day">' + dayName + '</div>' +
        '<div class="fc-aqi-score" style="background:' + info.color + '">' + Math.round(d.aqi) + '<span class="fc-aqi-scale">US AQI</span></div>' +
      '</div>' +
      '<div class="fc-aqi-label" style="color:' + info.color + '">' + info.label + '</div>' +
      '<div class="fc-aqi-subs">' + subRows + '</div>' +
    '</div>';
  }).join("");

  container.innerHTML = cards;
}

function getActiveChips(date, cityElev, reg) {
  var adjD = adjustDateForElevation(date, cityElev || BASELINE_ELEV);
  var r = reg || REGIONS.drs;
  var chips = [];
  if (getSeasonalBase(TREE_SEASON, adjD) * r.tree >= 0.5) chips.push({ key: "tree", label: t("chip.tree") });
  if (getSeasonalBase(GRASS_SEASON, adjD) * r.grass >= 0.5) chips.push({ key: "grass", label: t("chip.grass") });
  if (getSeasonalBase(WEED_SEASON, adjD) * r.weed >= 0.5) chips.push({ key: "weed", label: t("chip.weed") });
  return chips;
}

function getForecastTip(days) {
  var hl = t("fc.tip.headline");
  for (var i = 0; i < days.length; i++) {
    if (days[i].dayPrecip > 5) {
      return { headline: hl, body: t("fc.tip.rainClear", { day: days[i].shortLabel }), icon: "rainy" };
    }
  }
  for (var j = 1; j < days.length; j++) {
    if (days[j - 1].peak > 2 && days[j].peak < 1.5) {
      return { headline: hl, body: t("fc.tip.riskDrop", { day: days[j].shortLabel }), icon: "trending_down" };
    }
  }
  if (days.length >= 3) {
    var rising = true;
    for (var k = 1; k < days.length; k++) {
      if (days[k].peak <= days[k - 1].peak) { rising = false; break; }
    }
    if (rising) return { headline: hl, body: t("fc.tip.rising"), icon: "trending_up" };
  }
  var allLow = true;
  for (var m = 0; m < days.length; m++) {
    if (days[m].peak > 0.5) { allLow = false; break; }
  }
  if (allLow) return { headline: hl, body: t("fc.tip.allClear"), icon: "eco" };
  return { headline: hl, body: t("fc.tip.default"), icon: "eco" };
}

function buildTrendSpline(days) {
  if (days.length < 2) return "";
  var pad = 20, w = (days.length - 1) * 60 + pad * 2, h = 100;
  var pts = [];
  for (var i = 0; i < days.length; i++) {
    pts.push({ x: pad + i * 60, y: h - 10 - (days[i].peak / 4) * (h - 20) });
  }
  var path = "M" + pts[0].x + " " + pts[0].y;
  for (var i = 1; i < pts.length; i++) {
    var cpx = (pts[i - 1].x + pts[i].x) / 2;
    path += " Q " + cpx + " " + pts[i - 1].y + " " + pts[i].x + " " + pts[i].y;
  }
  var fillPath = path + " L " + pts[pts.length - 1].x + " " + h + " L " + pts[0].x + " " + h + " Z";
  var circles = "";
  for (var i = 0; i < pts.length; i++) {
    circles += '<circle cx="' + pts[i].x + '" cy="' + pts[i].y + '" r="5" fill="' + days[i].info.color + '" stroke="var(--card)" stroke-width="2"/>';
  }
  return '<svg class="fc-trend-spline" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="xMidYMid meet">' +
    '<path class="fc-spline-fill" d="' + fillPath + '"/>' +
    '<path class="fc-spline-line" d="' + path + '"/>' +
    circles + '</svg>';
}

function renderForecast(daily, now, cityElev, reg) {
  var container = document.getElementById("forecast-cards");
  var trendContainer = document.getElementById("forecast-trend");

  var WEEKDAYS_EN = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var WEEKDAYS_RU = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
  var WEEKDAYS_TJ = ["Яш","Дш","Сш","Чш","Пш","Ҷм","Шб"];
  var weekdays = LANG === "ru" ? WEEKDAYS_RU : LANG === "tj" ? WEEKDAYS_TJ : WEEKDAYS_EN;

  var days = [];
  var r = reg || REGIONS.drs;
  for (var i = 1; i <= 5 && i < daily.time.length; i++) {
    var d = new Date(daily.time[i] + "T12:00:00");
    var label = weekdays[d.getDay()] + ", " + t("month." + d.getMonth()) + " " + d.getDate();
    var shortLabel = weekdays[d.getDay()];
    var dayTemp = daily.temperature_2m_max[i];
    var dayLow = daily.temperature_2m_min[i];
    var dayPrecip = daily.precipitation_sum[i];
    var dayWind = daily.wind_speed_10m_max[i];
    var dayHumidity = daily.relative_humidity_2m_mean ? daily.relative_humidity_2m_mean[i] : 50;
    var fcWxCode = daily.weather_code[i];
    var wf = weatherFactor(dayTemp, dayHumidity, dayWind, dayPrecip, fcWxCode);
    var adjD = adjustDateForElevation(d, cityElev || BASELINE_ELEV);
    var treeR = computeRisk(getSeasonalBase(TREE_SEASON, adjD) * r.tree, wf);
    var grassR = computeRisk(getSeasonalBase(GRASS_SEASON, adjD) * r.grass, wf);
    var weedR = computeRisk(getSeasonalBase(WEED_SEASON, adjD) * r.weed, wf);
    var peak = Math.max(treeR, grassR, weedR);
    var info = getRiskInfo(peak);
    var chips = getActiveChips(d, cityElev, reg);
    days.push({ d: d, label: label, shortLabel: shortLabel, dayTemp: dayTemp, dayLow: dayLow,
      dayPrecip: dayPrecip, dayWind: dayWind, fcWxCode: fcWxCode, peak: peak, info: info, chips: chips });
  }

  var tip = getForecastTip(days);
  var tipShort = days.length < 4 ? " fc-tip-short" : "";
  var html = "";
  for (var j = 0; j < days.length; j++) {
    var dy = days[j];
    var chipsHtml = dy.chips.map(function(c) {
      return '<span class="fc-chip fc-chip-' + c.key + '">' + c.label + '</span>';
    }).join("");
    html += '<div class="fc-card" style="border-top-color:' + dy.info.color + '">' +
      '<div>' +
        '<div class="fc-card-header">' +
          '<span class="fc-card-date">' + dy.label + '</span>' +
          (dy.fcWxCode >= 0 ? '<span class="fc-card-wx">' + wxIcon(dy.fcWxCode) + '</span>' : '') +
        '</div>' +
        '<div class="fc-card-risk" style="color:' + dy.info.color + '">' + dy.info.label + '</div>' +
        (chipsHtml ? '<div class="fc-card-chips">' + chipsHtml + '</div>' : '') +
      '</div>' +
      '<div class="fc-card-conditions">' + (dy.fcWxCode >= 0 ? Math.round(dy.dayLow) + '\u00B0 / ' + Math.round(dy.dayTemp) + '\u00B0C \u00B7 ' + wxDescription(dy.fcWxCode) : t("fc.seasonalEstimate")) + '</div>' +
    '</div>';
    if (j === 2) {
      html += '<div class="fc-tip' + tipShort + '">' +
        '<div class="fc-tip-inner">' +
          '<div class="fc-tip-icon">' + mIcon(tip.icon) + '</div>' +
          '<h3>' + tip.headline + '</h3>' +
          '<p>' + tip.body + '</p>' +
        '</div>' +
        '<div class="fc-tip-bg">' + mIcon("psychiatry") + '</div>' +
      '</div>';
    }
  }
  if (days.length > 0 && days.length <= 2) {
    html += '<div class="fc-tip fc-tip-short">' +
      '<div class="fc-tip-inner">' +
        '<div class="fc-tip-icon">' + mIcon(tip.icon) + '</div>' +
        '<h3>' + tip.headline + '</h3>' +
        '<p>' + tip.body + '</p>' +
      '</div>' +
      '<div class="fc-tip-bg">' + mIcon("psychiatry") + '</div>' +
    '</div>';
  }
  container.innerHTML = html;

  if (trendContainer && days.length > 0) {
    var barsHtml = "", labelsHtml = "";
    for (var b = 0; b < days.length; b++) {
      var barH = Math.max(4, (days[b].peak / 4) * 100);
      barsHtml += '<div class="fc-trend-col">' +
        '<div class="fc-trend-bar" style="height:' + barH + '%;background:' + days[b].info.color + '">' +
          '<span class="fc-trend-tooltip">' + days[b].label + ': ' + days[b].info.label + ' (' + days[b].peak.toFixed(1) + ')</span>' +
        '</div></div>';
      labelsHtml += '<span>' + days[b].label + '</span>';
    }
    var splineHtml = buildTrendSpline(days);
    var splineLabels = days.map(function(dy) { return '<span>' + dy.shortLabel + '</span>'; }).join("");
    trendContainer.innerHTML = '<div class="fc-trend">' +
      '<h3>' + t("fc.trendTitle") + '</h3>' +
      '<div class="fc-trend-bars">' + barsHtml + '</div>' +
      '<div class="fc-trend-labels fc-labels-bar">' + labelsHtml + '</div>' +
      splineHtml +
      '<div class="fc-trend-labels fc-labels-spline" style="display:none">' + splineLabels + '</div>' +
    '</div>';
  } else if (trendContainer) {
    trendContainer.innerHTML = "";
  }
}

// ── GPS ──
function useGPS() {
  var status = document.getElementById("status");
  var gpsBtn = document.getElementById("gps-btn");

  if (!navigator.geolocation) {
    status.className = "status error";
    status.textContent = t("status.geoNotSupported");
    return;
  }

  gpsBtn.classList.add("locating");
  gpsBtn.innerHTML = mIcon('hourglass_empty');
  status.className = "status";
  status.textContent = t("status.gettingLocation");

  navigator.geolocation.getCurrentPosition(
    function(pos) {
      var latitude = pos.coords.latitude;
      var longitude = pos.coords.longitude;
      var nearest = CITIES[0], minDist = Infinity;
      CITIES.forEach(function(c) {
        var dist = Math.hypot(c.lat - latitude, c.lng - longitude);
        if (dist < minDist) { minDist = dist; nearest = c; }
      });

      var sel = document.getElementById("city-select");
      for (var i = 0; i < sel.options.length; i++) {
        var parts = sel.options[i].value.split(",");
        if (parseFloat(parts[0]) === nearest.lat && parseFloat(parts[1]) === nearest.lng) {
          sel.selectedIndex = i;
          break;
        }
      }

      status.textContent = t("status.located", { city: t("city." + nearest.idx) });
      gpsBtn.classList.remove("locating");
      gpsBtn.innerHTML = mIcon('my_location');
      fetchData();
    },
    function(err) {
      status.className = "status error";
      if (err.code === 1) {
        status.textContent = t("status.geoPermission");
      } else if (err.code === 3) {
        status.textContent = t("status.geoTimeout");
      } else {
        status.textContent = t("status.geoFailed");
      }
      gpsBtn.classList.remove("locating");
      gpsBtn.innerHTML = mIcon('my_location');
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
  );
}

// ── Shared meta tag updater (used by setLanguage and init) ──
function updateMetaTags(lang) {
  document.title = t("title");
  var metaDesc = document.getElementById("meta-desc");
  if (metaDesc) metaDesc.setAttribute("content", t("meta.desc"));
  var metaKw = document.getElementById("meta-keywords");
  if (metaKw) metaKw.setAttribute("content", t("meta.keywords"));
  var ogTitle = document.getElementById("og-title");
  if (ogTitle) ogTitle.setAttribute("content", t("og.title"));
  var ogDesc = document.getElementById("og-desc");
  if (ogDesc) ogDesc.setAttribute("content", t("meta.desc"));
  var ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute("content", lang === "tj" ? "tg" : lang);
  var twTitle = document.getElementById("twitter-title");
  if (twTitle) twTitle.setAttribute("content", t("og.title"));
  var twDesc = document.getElementById("twitter-desc");
  if (twDesc) twDesc.setAttribute("content", t("meta.desc"));
  var jsonld = document.getElementById("jsonld");
  if (jsonld) {
    try { var ld = JSON.parse(jsonld.textContent); ld.description = t("meta.desc"); jsonld.textContent = JSON.stringify(ld); } catch(e) {}
  }
  var canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", SITE_BASE + (lang === "tj" ? "/" : "/" + lang + "/"));
  document.querySelectorAll('link[hreflang]').forEach(function(el) {
    var hl = el.getAttribute("hreflang");
    if (hl === "x-default" || hl === "tg") {
      el.setAttribute("href", SITE_BASE + "/");
    } else {
      el.setAttribute("href", SITE_BASE + "/" + hl + "/");
    }
  });
  var ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", SITE_BASE + (lang === "tj" ? "/" : "/" + lang + "/"));
  var ogImageFile = lang === "tj" ? "/og-image.png" : "/og-image-" + lang + ".png";
  var ogImage = document.getElementById("og-image");
  if (ogImage) ogImage.setAttribute("content", SITE_BASE + ogImageFile);
  var ogImageAlt = document.getElementById("og-image-alt");
  if (ogImageAlt) ogImageAlt.setAttribute("content", t("og.title"));
  var twImage = document.getElementById("twitter-image");
  if (twImage) twImage.setAttribute("content", SITE_BASE + ogImageFile);
}

// ── Language switching ──
async function setLanguage(lang) {
  LANG = lang;
  localStorage.setItem("allergytj-lang", lang);
  var currentTab = getTabFromPath();
  if (location.pathname.indexOf('/city/') >= 0) {
    var parts = location.pathname.split('/');
    var ci = parts.indexOf('city');
    var slug = parts[ci + 1];
    var prefix = lang === 'tj' ? '' : '/' + lang;
    history.replaceState(null, '', prefix + '/city/' + slug);
  } else {
    history.replaceState(null, '', buildTabPath(lang, currentTab));
  }
  await loadTranslations(lang);
  await loadTranslations("en");
  document.documentElement.lang = lang === "tj" ? "tg" : lang;

  document.querySelectorAll(".lang-btn").forEach(function(btn) {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  updateMetaTags(lang);
  updateNavHrefs();

  // Update city dropdown text and re-sort for new language
  var sel = document.getElementById("city-select");
  for (var i = 0; i < sel.options.length; i++) {
    sel.options[i].text = t("city." + sel.options[i].dataset.idx);
  }
  sortCityDropdown();

  // Rebuild calendar with translated month/allergen names
  buildCalendar();

  // Re-render results if visible (from stored state, no re-fetch)
  if (lastRenderState && document.getElementById("results").style.display !== "none") {
    var s = lastRenderState;
    var now = new Date();
    var cityName = t("city." + s.cityIndex);
    var fcCityEl = document.getElementById("forecast-city-name");
    if (fcCityEl) fcCityEl.textContent = cityName;
    var elev = s.cityElev || BASELINE_ELEV;
    var rg = s.reg || REGIONS.drs;
    var adjNow = adjustDateForElevation(now, elev);

    if (s.weatherTier === 1 || s.weatherTier === 2) {
      var curWx = s.wx.current;
      var daily = s.wx.daily;
      var periodWx = s.wx.hourly ? getCurrentPeriodWeather(s.wx.hourly, now) : null;
      var wxData, wxFactor;
      if (periodWx) {
        wxData = periodWx;
        wxFactor = weatherFactor(periodWx.temp, periodWx.humidity, periodWx.wind, periodWx.precip, periodWx.wxCode);
      } else {
        var todayTemp = daily.temperature_2m_max[0];
        var todayHumidity = daily.relative_humidity_2m_mean ? daily.relative_humidity_2m_mean[0] : curWx.relative_humidity_2m;
        var todayWind = daily.wind_speed_10m_max[0];
        var todayPrecip = daily.precipitation_sum[0];
        var todayWxCode = daily.weather_code[0];
        wxData = {temp: todayTemp, humidity: todayHumidity, wind: todayWind, precip: todayPrecip, wxCode: todayWxCode};
        wxFactor = weatherFactor(todayTemp, todayHumidity, todayWind, todayPrecip, todayWxCode);
      }
      if (curWx && curWx.weather_code !== undefined) {
        var curWxData = {temp: curWx.temperature_2m, humidity: curWx.relative_humidity_2m, wind: curWx.wind_speed_10m, precip: curWx.precipitation, wxCode: curWx.weather_code};
        var curFactor = weatherFactor(curWxData.temp, curWxData.humidity, curWxData.wind, curWxData.precip, curWxData.wxCode);
        if (curFactor < wxFactor) {
          wxFactor = curFactor;
          wxData = curWxData;
        }
      }
      var treeRisk = computeRisk(getSeasonalBase(TREE_SEASON, adjNow) * rg.tree, wxFactor);
      var grassRisk = computeRisk(getSeasonalBase(GRASS_SEASON, adjNow) * rg.grass, wxFactor);
      var weedRisk = computeRisk(getSeasonalBase(WEED_SEASON, adjNow) * rg.weed, wxFactor);
      var overallRisk = Math.max(treeRisk, grassRisk, weedRisk);
      var _prof = getAllergenProfile();
      var _pRisk = computePersonalRisk(_prof, adjNow, rg, wxFactor);

      renderBanner(_pRisk != null ? _pRisk : overallRisk, cityName, wxFactor, wxData);
      renderPollenCards(treeRisk, grassRisk, weedRisk, now);
      var todayPrecip = daily.precipitation_sum[0];
      var todayWxCode = daily.weather_code[0];
      renderDashboard(overallRisk, treeRisk, grassRisk, weedRisk,
        { temp: curWx.temperature_2m, humidity: curWx.relative_humidity_2m, wind: curWx.wind_speed_10m, precip: todayPrecip, wxCode: curWx.weather_code, uv: curWx.uv_index },
        s.cityIndex, now, _pRisk);
      renderInsights(s.cityIndex);
      var hourlyBlocks = s.wx.hourly ? computeHourlyBreakdown(s.wx.hourly, now, elev, rg) : null;
      renderHourlyBreakdown(hourlyBlocks);
      renderWeather(curWx.temperature_2m, curWx.relative_humidity_2m, curWx.wind_speed_10m,
                    todayPrecip, curWx.weather_code, todayWxCode, curWx.uv_index);
      renderForecast(daily, now, elev, rg);
      document.getElementById("forecast-title").textContent = s.weatherTier === 2 ? t("section.forecast2") : t("section.forecast5");
    } else {
      var wxFactor = 1.0;
      var treeRisk = computeRisk(getSeasonalBase(TREE_SEASON, adjNow) * rg.tree, wxFactor);
      var grassRisk = computeRisk(getSeasonalBase(GRASS_SEASON, adjNow) * rg.grass, wxFactor);
      var weedRisk = computeRisk(getSeasonalBase(WEED_SEASON, adjNow) * rg.weed, wxFactor);
      var overallRisk = Math.max(treeRisk, grassRisk, weedRisk);
      var _prof = getAllergenProfile();
      var _pRisk = computePersonalRisk(_prof, adjNow, rg, wxFactor);

      renderBanner(_pRisk != null ? _pRisk : overallRisk, cityName, wxFactor, null);
      renderPollenCards(treeRisk, grassRisk, weedRisk, now);
      renderDashboard(overallRisk, treeRisk, grassRisk, weedRisk, null, s.cityIndex, now, _pRisk);
      renderInsights(s.cityIndex);
      renderHourlyBreakdown(null);
      // Seasonal-only forecast: render 5-day cards from pollen calendar without weather
      var synDaily = { time: [], temperature_2m_max: [], temperature_2m_min: [],
        precipitation_sum: [], wind_speed_10m_max: [], relative_humidity_2m_mean: [], weather_code: [] };
      for (var fi = 0; fi <= 5; fi++) {
        var fd = new Date(now); fd.setDate(fd.getDate() + fi);
        synDaily.time.push(fd.toISOString().split("T")[0]);
        synDaily.temperature_2m_max.push(22);
        synDaily.temperature_2m_min.push(15);
        synDaily.precipitation_sum.push(0);
        synDaily.wind_speed_10m_max.push(0);
        synDaily.relative_humidity_2m_mean.push(50);
        synDaily.weather_code.push(-1);
      }
      renderForecast(synDaily, now, elev, rg);
      document.getElementById("forecast-title").textContent = t("section.forecast5");
    }

    if (s.aq) {
      renderAqi(s.aq);
      renderAqiForecast(s.aq, s.wx ? s.wx.daily : null);
      renderAqiSafetyBanner(s.aq);
    }
    renderTierNotice(s.weatherTier);
    updateDashTimestamp();
    renderRegionsTab();
  }
}

// ── Theme toggle ──
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  var btn = document.getElementById("theme-toggle");
  if (btn) btn.innerHTML = mIcon(theme === "dark" ? "light_mode" : "dark_mode");
}

function toggleTheme() {
  var current = document.documentElement.getAttribute("data-theme") || "light";
  var next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("allergytj-theme", next);
}

(function() {
  var saved = localStorage.getItem("allergytj-theme");
  if (saved) {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  }
})();

// ── Notification Settings ──
var NOTIF_PREFS_KEY = 'allergytj-notification-prefs';

function getNotifPrefs() {
  try {
    var s = localStorage.getItem(NOTIF_PREFS_KEY);
    return s ? JSON.parse(s) : null;
  } catch (e) { return null; }
}

function defaultNotifPrefs() {
  return {
    enabled: true,
    pollenAlerts: { highRisk: true, extremeRisk: true, allergens: ['tree','grass','weed'] },
    weatherAlerts: { uvWarning: true },
    aqiAlerts: { unhealthy: true, veryUnhealthy: true, hazardous: true },
    quietHours: { enabled: true, from: '22:00', to: '07:00' },
    lastNotified: null
  };
}

function openNotificationSettings() {
  var overlay = document.getElementById('notif-overlay');
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  renderNotificationSettings();
}

function closeNotificationSettings() {
  document.getElementById('notif-overlay').style.display = 'none';
  document.body.style.overflow = '';
}

function makeToggleRow(id, label, checked) {
  return '<div class="notif-toggle-row"><span class="notif-toggle-label">' + label + '</span>' +
    '<label class="notif-toggle"><input type="checkbox" id="' + id + '"' + (checked ? ' checked' : '') + '>' +
    '<span class="notif-slider"></span></label></div>';
}

function renderNotificationSettings() {
  var prefs = getNotifPrefs() || defaultNotifPrefs();
  var body = document.getElementById('notif-body');
  var permState = typeof Notification !== 'undefined' ? Notification.permission : 'unsupported';

  var html = '';

  // Permission warning
  if (permState === 'denied') {
    html += '<div class="notif-perm-warning">' + mIcon('bell_off') + ' ' + t('notif.permDenied') + '</div>';
  } else if (permState === 'unsupported') {
    html += '<div class="notif-perm-warning">' + mIcon('info') + ' ' + t('notif.unsupported') + '</div>';
  }

  // Pollen Alerts
  html += '<div class="notif-section">';
  html += '<div class="notif-section-title">' + mIcon('park') + ' ' + t('notif.pollenAlerts') + '</div>';
  html += makeToggleRow('notif-high', t('notif.highRisk'), prefs.pollenAlerts.highRisk);
  html += makeToggleRow('notif-extreme', t('notif.extremeRisk'), prefs.pollenAlerts.extremeRisk);
  html += '<div style="margin-top:var(--space-sm)"><span class="notif-toggle-label">' + t('notif.allergenTypes') + '</span></div>';
  html += '<div class="notif-chips">';
  var allergenTypes = [
    { key: 'tree', label: t('chip.tree') },
    { key: 'grass', label: t('chip.grass') },
    { key: 'weed', label: t('chip.weed') }
  ];
  for (var i = 0; i < allergenTypes.length; i++) {
    var a = allergenTypes[i];
    var sel = prefs.pollenAlerts.allergens.indexOf(a.key) !== -1 ? ' selected' : '';
    html += '<button class="notif-chip' + sel + '" data-allergen="' + a.key + '">' + a.label + '</button>';
  }
  html += '</div></div>';

  // Weather Alerts
  html += '<div class="notif-section">';
  html += '<div class="notif-section-title">' + mIcon('wb_sunny') + ' ' + t('notif.weatherAlerts') + '</div>';
  html += makeToggleRow('notif-uv', t('notif.uvWarning'), prefs.weatherAlerts.uvWarning);
  html += '</div>';

  // Air Quality Alerts
  var aqiPrefs = prefs.aqiAlerts || defaultNotifPrefs().aqiAlerts;
  html += '<div class="notif-section">';
  html += '<div class="notif-section-title">' + mIcon('air') + ' ' + t('notif.aqiAlerts') + '</div>';
  html += makeToggleRow('notif-aqi-unhealthy', t('notif.aqiUnhealthy'), aqiPrefs.unhealthy);
  html += makeToggleRow('notif-aqi-veryunhealthy', t('notif.aqiVeryUnhealthy'), aqiPrefs.veryUnhealthy);
  html += makeToggleRow('notif-aqi-hazardous', t('notif.aqiHazardous'), aqiPrefs.hazardous);
  html += '</div>';

  // Quiet Hours
  html += '<div class="notif-section">';
  html += '<div class="notif-section-title">' + mIcon('schedule') + ' ' + t('notif.quietHours') + '</div>';
  html += makeToggleRow('notif-quiet', t('notif.quietEnabled'), prefs.quietHours.enabled);
  html += '<div class="notif-quiet-row">';
  html += '<input type="time" id="notif-quiet-from" value="' + prefs.quietHours.from + '">';
  html += '<span>' + t('notif.quietTo') + '</span>';
  html += '<input type="time" id="notif-quiet-to" value="' + prefs.quietHours.to + '">';
  html += '</div></div>';

  // Pro tip
  html += '<div class="notif-tip">' + mIcon('info') + '<span>' + t('notif.proTip') + '</span></div>';

  // Save button
  html += '<button class="notif-save-btn">' + t('notif.save') + '</button>';

  body.innerHTML = html;
}

function toggleAllergenChip(btn) {
  btn.classList.toggle('selected');
}

function saveNotificationPrefs() {
  var allergens = [];
  var chips = document.querySelectorAll('.notif-chip');
  for (var i = 0; i < chips.length; i++) {
    if (chips[i].classList.contains('selected')) allergens.push(chips[i].getAttribute('data-allergen'));
  }

  var prefs = {
    enabled: true,
    pollenAlerts: {
      highRisk: document.getElementById('notif-high').checked,
      extremeRisk: document.getElementById('notif-extreme').checked,
      allergens: allergens
    },
    weatherAlerts: {
      uvWarning: document.getElementById('notif-uv').checked
    },
    aqiAlerts: {
      unhealthy: document.getElementById('notif-aqi-unhealthy').checked,
      veryUnhealthy: document.getElementById('notif-aqi-veryunhealthy').checked,
      hazardous: document.getElementById('notif-aqi-hazardous').checked
    },
    quietHours: {
      enabled: document.getElementById('notif-quiet').checked,
      from: document.getElementById('notif-quiet-from').value || '22:00',
      to: document.getElementById('notif-quiet-to').value || '07:00'
    },
    lastNotified: (getNotifPrefs() || {}).lastNotified || null
  };

  localStorage.setItem(NOTIF_PREFS_KEY, JSON.stringify(prefs));

  if (typeof Notification !== 'undefined' && Notification.permission === 'default') {
    Notification.requestPermission().then(function() {
      showNotifConfirmation(prefs);
    });
  } else {
    showNotifConfirmation(prefs);
  }
}

function showNotifConfirmation(prefs) {
  var body = document.getElementById('notif-body');
  var summary = [];
  if (prefs.pollenAlerts.highRisk) summary.push(t('notif.highRisk'));
  if (prefs.pollenAlerts.extremeRisk) summary.push(t('notif.extremeRisk'));
  if (prefs.weatherAlerts.uvWarning) summary.push(t('notif.uvWarning'));
  var aqiP = prefs.aqiAlerts || {};
  if (aqiP.unhealthy) summary.push(t('notif.aqiUnhealthy'));
  if (aqiP.veryUnhealthy) summary.push(t('notif.aqiVeryUnhealthy'));
  if (aqiP.hazardous) summary.push(t('notif.aqiHazardous'));

  var permState = typeof Notification !== 'undefined' ? Notification.permission : 'unsupported';
  var permNote = '';
  if (permState === 'denied') {
    permNote = '<div class="notif-perm-warning" style="margin-bottom:var(--space-md)">' + mIcon('bell_off') + ' ' + t('notif.permDenied') + '</div>';
  }

  body.innerHTML =
    '<div class="notif-confirm">' + mIcon('check_circle') +
    '<h3>' + t('notif.saved') + '</h3>' +
    permNote +
    '<p>' + (summary.length ? summary.join(' · ') : t('notif.noAlerts')) + '</p>' +
    '<div class="notif-confirm-actions">' +
    '<button class="notif-back-btn">' + t('notif.backDashboard') + '</button>' +
    '<button class="primary notif-forecast-btn">' + t('notif.viewForecast') + '</button>' +
    '</div></div>';
}

function isQuietHours(prefs) {
  if (!prefs.quietHours.enabled) return false;
  var now = new Date();
  var curMin = now.getHours() * 60 + now.getMinutes();
  var parts = prefs.quietHours.from.split(':');
  var fromMin = parseInt(parts[0]) * 60 + parseInt(parts[1]);
  parts = prefs.quietHours.to.split(':');
  var toMin = parseInt(parts[0]) * 60 + parseInt(parts[1]);
  if (fromMin > toMin) {
    return curMin >= fromMin || curMin < toMin;
  }
  return curMin >= fromMin && curMin < toMin;
}

function checkAndNotify(overallRisk, uvVal, aqData) {
  var prefs = getNotifPrefs();
  if (!prefs || !prefs.enabled) return;
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
  if (isQuietHours(prefs)) return;

  var cooldown = 4 * 60 * 60 * 1000;
  if (prefs.lastNotified && (Date.now() - prefs.lastNotified) < cooldown) return;

  var shouldNotify = false;
  var title = '';
  var msg = '';

  if (prefs.pollenAlerts.extremeRisk && overallRisk >= 3.5) {
    shouldNotify = true;
    title = t('notif.alert.extremeTitle');
    msg = t('notif.alert.extremeBody');
  } else if (prefs.pollenAlerts.highRisk && overallRisk >= 2.5) {
    shouldNotify = true;
    title = t('notif.alert.highTitle');
    msg = t('notif.alert.highBody');
  }

  if (!shouldNotify && prefs.weatherAlerts.uvWarning && uvVal != null && uvVal >= 8) {
    shouldNotify = true;
    title = t('notif.alert.uvTitle');
    msg = t('notif.alert.uvBody');
  }

  if (!shouldNotify && aqData && aqData.current && aqData.current.us_aqi != null) {
    var aqiAlerts = prefs.aqiAlerts || {};
    var currentAqi = aqData.current.us_aqi;
    if (aqiAlerts.hazardous && currentAqi > 300) {
      shouldNotify = true;
      title = t('notif.alert.aqiHazardousTitle');
      msg = t('notif.alert.aqiHazardousBody');
    } else if (aqiAlerts.veryUnhealthy && currentAqi > 200) {
      shouldNotify = true;
      title = t('notif.alert.aqiVeryUnhealthyTitle');
      msg = t('notif.alert.aqiVeryUnhealthyBody');
    } else if (aqiAlerts.unhealthy && currentAqi > 150) {
      shouldNotify = true;
      title = t('notif.alert.aqiUnhealthyTitle');
      msg = t('notif.alert.aqiUnhealthyBody');
    }
  }

  if (!shouldNotify) return;

  prefs.lastNotified = Date.now();
  localStorage.setItem(NOTIF_PREFS_KEY, JSON.stringify(prefs));

  var opts = { body: msg, icon: '/icons/icon-192x192.png', tag: 'allergytj-alert', renotify: true };
  if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.ready.then(function(reg) {
      reg.showNotification(title, opts);
    });
  } else {
    new Notification(title, opts);
  }
}

document.getElementById('notif-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeNotificationSettings();
});

// ── Scroll-to-top visibility ──
(function() {
  var fab = document.getElementById("scroll-top-btn");
  var last = 0;
  window.addEventListener("scroll", function() {
    var now = Date.now();
    if (now - last < 100) return;
    last = now;
    fab.classList.toggle("visible", window.scrollY > 400);
  }, {passive: true});
})();

document.addEventListener("touchstart", function(e) {
  var bar = e.target.closest(".fc-trend-bar");
  if (bar) {
    bar.classList.toggle("active");
  } else {
    var active = document.querySelectorAll(".fc-trend-bar.active");
    for (var i = 0; i < active.length; i++) active[i].classList.remove("active");
  }
}, {passive: true});

// ── Static event listeners (replaces inline onclick/onchange) ──
function initStaticListeners() {
  document.getElementById("nav-brand-link").addEventListener("click", function(e) {
    e.preventDefault(); switchTab("dashboard");
  });
  document.querySelectorAll("#lang-pill .lang-btn").forEach(function(btn) {
    btn.addEventListener("click", function() { setLanguage(this.getAttribute("data-lang")); });
  });
  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
  document.getElementById("notif-settings-btn").addEventListener("click", openNotificationSettings);
  document.getElementById("city-select").addEventListener("change", fetchData);
  document.getElementById("gps-btn").addEventListener("click", useGPS);
  document.getElementById("share-btn").addEventListener("click", sharePollen);
  document.getElementById("dash-view-all").addEventListener("click", function(e) {
    e.preventDefault(); switchTab("regions");
  });
  document.getElementById("region-map").addEventListener("click", function(e) {
    if (!e.target.closest("[data-region]") && !e.target.closest(".city-dot") && !e.target.closest(".region-name-label")) {
      hideRegionFocus();
    }
  });
  document.getElementById("region-show-toggle").addEventListener("click", toggleRegionShowAll);
  document.getElementById("notif-close-btn").addEventListener("click", closeNotificationSettings);
  document.getElementById("scroll-top-btn").addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: "smooth"});
  });

  // Dynamic content delegation: notification overlay
  document.getElementById("notif-body").addEventListener("click", function(e) {
    var chip = e.target.closest(".notif-chip");
    if (chip) { toggleAllergenChip(chip); return; }
    var saveBtn = e.target.closest(".notif-save-btn");
    if (saveBtn) { saveNotificationPrefs(); return; }
    var backBtn = e.target.closest(".notif-back-btn");
    if (backBtn) { closeNotificationSettings(); return; }
    var fcastBtn = e.target.closest(".notif-forecast-btn");
    if (fcastBtn) { closeNotificationSettings(); switchTab("forecast"); return; }
  });

  // Dynamic content delegation: allergen profile
  document.getElementById("allergen-profile").addEventListener("click", function(e) {
    if (e.target.closest("#profile-setup-btn") || e.target.closest("#profile-edit-btn")) {
      _profileExpanded = true; renderAllergenProfile(); return;
    }
    var chip = e.target.closest(".profile-species-chip");
    if (chip) { chip.classList.toggle("selected"); return; }
    if (e.target.closest("#profile-done-btn")) { saveProfileFromSelector(); return; }
    if (e.target.closest("#profile-clear-btn")) { clearProfile(); return; }
  });

  // Dynamic content delegation: region map SVG
  var regionPaths = document.getElementById("region-paths");
  regionPaths.addEventListener("mouseenter", function(e) {
    var p = e.target.closest("[data-region]");
    if (p) showRegionFocus(p.getAttribute("data-region"), e);
  }, true);
  regionPaths.addEventListener("mouseleave", function(e) {
    if (e.target.closest("[data-region]")) hideRegionFocus();
  }, true);
  regionPaths.addEventListener("click", function(e) {
    var p = e.target.closest("[data-region]");
    if (p) showRegionFocus(p.getAttribute("data-region"), e);
  });
  regionPaths.addEventListener("keydown", function(e) {
    var p = e.target.closest("[data-region]");
    if (p) handleMapKey(e, "region", p.getAttribute("data-region"));
  });

  var regionDots = document.getElementById("region-dots");
  regionDots.addEventListener("mouseenter", function(e) {
    var d = e.target.closest(".city-dot");
    if (d) showCityFocus(parseInt(d.getAttribute("data-city")), e);
  }, true);
  regionDots.addEventListener("mouseleave", function(e) {
    if (e.target.closest(".city-dot")) hideRegionFocus();
  }, true);
  regionDots.addEventListener("click", function(e) {
    var d = e.target.closest(".city-dot");
    if (d) showCityFocus(parseInt(d.getAttribute("data-city")), e);
  });
  regionDots.addEventListener("keydown", function(e) {
    var d = e.target.closest(".city-dot");
    if (d) handleMapKey(e, "city", parseInt(d.getAttribute("data-city")));
  });

  var regionLabels = document.getElementById("region-labels");
  regionLabels.addEventListener("mouseenter", function(e) {
    var g = e.target.closest(".region-name-label");
    if (g) { var rk = g.getAttribute("data-region"); if (rk) showRegionFocus(rk, e); }
  }, true);
  regionLabels.addEventListener("mouseleave", function(e) {
    if (e.target.closest(".region-name-label")) hideRegionFocus();
  }, true);
  regionLabels.addEventListener("click", function(e) {
    var g = e.target.closest(".region-name-label");
    if (g) { var rk = g.getAttribute("data-region"); if (rk) showRegionFocus(rk, e); }
  });

  // Dynamic content delegation: region city cards
  document.getElementById("region-city-list").addEventListener("click", function(e) {
    var card = e.target.closest(".region-city-card");
    if (card) highlightCityDot(parseInt(card.getAttribute("data-city")));
  });
  document.getElementById("region-city-list").addEventListener("keydown", function(e) {
    if (e.key === "Enter" || e.key === " ") {
      var card = e.target.closest(".region-city-card");
      if (card) { e.preventDefault(); highlightCityDot(parseInt(card.getAttribute("data-city"))); }
    }
  });
}

// ── Insights: Active Now ──
function renderActiveNow(cityIndex) {
  var container = document.getElementById("active-now-grid");
  if (!container) return;
  var city = CITIES[cityIndex || 0];
  var now = new Date();
  var adjD = adjustDateForElevation(now, city.elev);
  var r = REGIONS[city.region] || REGIONS.drs;
  var SEG_COLORS = ['#757575','#2e7d32','#8c6d00','#d84315','#c62828'];
  var SEG_BG    = ['transparent','#a5d6a7','#ffe082','#ffab91','#ef9a9a'];
  var items = SEASONAL.map(function(s, i) {
    var val = getSeasonalBase(s.months, adjD);
    var regionMul = i < 5 ? r.tree : (i === 5 ? r.grass : r.weed);
    var adjVal = Math.min(Math.round(val * regionMul), 4);
    return { name: t("cal." + i), val: adjVal, idx: i };
  });
  var active = items.filter(function(it) { return it.val > 0; });
  if (active.length === 0) {
    container.innerHTML = '<div class="active-now-empty">' +
      mIcon('check_circle') +
      '<div data-i18n="insights.noActive">' + t("insights.noActive") + '</div></div>';
    return;
  }
  active.sort(function(a, b) { return b.val - a.val; });
  var icons = ["park","park","park","park","park","grass","psychiatry","psychiatry","psychiatry"];
  container.innerHTML = '<div class="active-now-grid">' + active.map(function(it) {
    var info = getRiskInfo(it.val);
    var pct = (it.val / 4 * 100) + '%';
    return '<div class="active-now-card">' +
      '<div class="active-now-icon" style="background:' + info.bg + '">' + mIcon(icons[it.idx]) + '</div>' +
      '<div class="active-now-body">' +
        '<div class="active-now-name">' + it.name + '</div>' +
        '<div class="active-now-severity"><div class="active-now-severity-fill" style="width:' + pct + ';background:' + SEG_COLORS[it.val] + '"></div></div>' +
        '<div class="active-now-label" style="color:' + SEG_COLORS[it.val] + '">' + info.label + '</div>' +
      '</div></div>';
  }).join('') + '</div>';
}

// ── Insights: Timeline Calendar ──
function renderTimelineCalendar() {
  var container = document.getElementById("timeline-calendar");
  if (!container) return;
  var now = new Date();
  var curMonth = now.getMonth();
  var dayFrac = (now.getDate() - 1) / 30;
  var SEG_CLASSES = ['seg-none','seg-low','seg-mod','seg-high','seg-vhigh'];

  var monthsHtml = '<div class="timeline-months"><span></span>';
  for (var m = 0; m < 12; m++) {
    monthsHtml += '<span' + (m === curMonth ? ' class="current-month"' : '') + '>' + t("month." + m) + '</span>';
  }
  monthsHtml += '</div>';

  var rowsHtml = SEASONAL.map(function(s, i) {
    var segs = '';
    for (var m = 0; m < 12; m++) {
      var markerHtml = '';
      if (m === curMonth) {
        var leftPct = (dayFrac * 100) + '%';
        markerHtml = '<div class="timeline-now-marker" style="left:' + leftPct + '"><div class="timeline-now-dot"></div></div>';
      }
      segs += '<div class="timeline-segment ' + SEG_CLASSES[s.months[m]] + '">' + markerHtml + '</div>';
    }
    return '<div class="timeline-row">' +
      '<div class="timeline-allergen">' + t("cal." + i) + '</div>' +
      segs +
    '</div>';
  }).join('');

  var legendHtml = '<div class="timeline-legend">' +
    '<span><span class="swatch" style="background:transparent;border:1px solid var(--border)"></span> ' + t("legend.none") + '</span>' +
    '<span><span class="swatch seg-low"></span> ' + t("legend.low") + '</span>' +
    '<span><span class="swatch seg-mod"></span> ' + t("legend.moderate") + '</span>' +
    '<span><span class="swatch seg-high"></span> ' + t("legend.high") + '</span>' +
    '<span><span class="swatch seg-vhigh"></span> ' + t("legend.veryHigh") + '</span>' +
  '</div>';

  container.innerHTML = monthsHtml + rowsHtml + legendHtml;
}

// ── Regional Pollen Map ──
var REGION_PATHS = {
  sughd: "M124.7,240.6L116.6,237.5L101.2,248.2L101.7,241.9L90.6,231.5L84.0,233.0L78.4,230.5L71.7,231.6L69.5,234.0L63.4,232.3L51.9,233.6L49.0,225.6L50.3,219.2L45.0,218.1L41.4,214.3L26.1,211.5L21.5,205.8L21.2,202.1L34.3,199.4L24.5,181.2L25.3,177.4L31.1,178.2L31.8,173.2L44.7,170.2L52.4,164.2L57.4,165.7L61.5,164.4L75.9,170.6L92.5,174.0L111.2,175.1L117.9,177.6L121.9,176.2L133.2,177.2L136.0,171.4L144.3,164.8L144.9,161.8L140.2,155.9L143.9,154.4L146.1,150.3L146.4,142.9L150.1,143.7L154.2,141.8L157.8,146.4L163.3,141.7L164.0,139.1L160.1,129.5L163.5,130.8L167.9,141.3L172.5,140.4L171.7,135.9L162.8,127.7L163.5,123.6L160.8,120.0L164.0,119.3L167.2,124.0L170.5,120.4L183.0,119.1L179.3,111.5L168.9,112.1L145.2,117.8L136.8,115.2L135.5,112.7L159.1,106.6L164.3,107.8L181.5,104.2L213.1,106.2L211.3,102.5L206.5,100.5L206.3,98.0L214.7,95.4L215.4,90.6L212.2,88.3L208.0,78.5L208.9,75.0L204.4,70.1L208.4,67.1L214.8,66.9L217.2,64.4L216.3,51.9L221.5,44.5L234.6,46.2L239.8,54.0L246.4,57.6L248.1,60.6L253.1,60.7L259.1,53.7L264.3,54.0L268.8,51.1L273.6,52.8L289.3,46.3L296.8,38.9L302.7,39.8L317.0,33.5L320.7,23.9L320.2,21.2L326.0,16.8L330.8,17.9L338.0,24.2L345.6,35.3L354.2,42.9L351.1,45.0L348.9,42.4L348.9,46.9L353.3,46.7L359.6,49.8L357.1,54.8L354.4,54.8L354.7,57.7L351.0,57.5L344.9,60.9L339.9,67.4L332.6,68.8L329.6,74.0L318.5,76.6L314.5,79.9L319.7,87.6L329.9,88.6L337.8,92.0L339.2,97.6L338.0,101.8L344.8,109.9L358.9,108.1L367.9,103.9L377.8,103.4L379.5,105.3L377.3,110.8L372.1,112.3L364.3,110.1L358.8,117.3L347.8,118.8L345.6,130.0L337.0,134.3L333.6,134.1L332.5,135.9L334.1,138.8L326.8,133.2L337.7,125.5L335.5,123.3L322.9,120.7L311.2,114.4L302.8,114.0L287.6,105.2L280.9,104.0L251.5,115.3L234.0,118.1L232.1,124.1L234.5,128.3L234.7,134.8L228.1,138.7L224.0,137.6L219.6,127.7L216.8,127.7L215.9,134.3L209.5,148.6L214.2,160.6L215.7,170.7L217.3,171.3L215.5,176.7L218.0,179.1L221.7,175.3L229.8,178.2L239.3,175.3L244.0,171.8L248.8,172.8L252.6,170.9L262.5,173.9L268.1,178.4L272.3,173.0L282.0,175.4L284.9,172.1L287.3,173.1L291.7,170.0L298.2,173.5L302.4,170.5L309.6,178.1L318.7,171.2L322.9,171.2L324.8,169.0L326.5,170.5L333.6,166.7L337.0,169.7L345.1,171.0L347.9,173.9L352.4,180.6L346.9,185.5L343.2,185.6L341.4,189.1L333.6,189.5L332.3,193.4L312.9,192.5L306.2,197.4L299.1,198.9L292.6,195.1L286.2,199.9L283.5,200.2L281.7,196.3L274.5,200.0L271.7,197.8L268.4,198.3L268.2,202.0L261.5,206.3L267.0,213.5L264.5,217.5L265.5,226.3L262.3,228.6L261.9,231.4L256.9,228.4L250.9,231.1L244.7,220.0L235.4,222.9L235.2,230.5L222.0,226.5L207.4,235.1L202.4,234.8L195.2,229.4L188.5,229.9L179.6,224.5L171.8,225.6L169.5,224.1L146.9,228.4L142.5,235.6L124.7,240.6Z M340.5,146.9L332.8,143.6L332.9,141.7L353.1,142.3L355.0,145.2L347.8,147.0L344.8,152.4L340.5,146.9Z M340.4,23.3L337.0,21.5L339.1,19.7L341.1,21.3L348.1,28.5L349.1,31.9L340.4,23.3Z",
  khatlon: "M80.5,449.5L73.3,446.2L71.4,440.3L64.9,439.6L60.3,436.9L60.9,427.1L64.5,418.0L64.7,397.5L67.2,390.4L86.1,368.4L94.6,353.5L108.8,350.1L110.2,345.3L108.7,350.9L114.2,354.2L130.8,355.2L132.7,359.5L138.2,358.3L140.2,348.6L142.7,347.8L142.5,338.9L135.1,339.2L133.9,337.8L143.3,319.1L141.6,314.8L146.0,309.9L151.5,308.9L158.1,305.1L158.7,302.9L165.3,305.5L176.1,299.6L195.2,299.5L199.4,291.3L211.1,291.9L216.9,294.9L235.6,290.2L237.4,298.4L244.2,290.0L250.7,286.1L254.9,279.6L259.0,277.3L265.5,279.1L279.5,262.2L281.8,263.6L288.2,261.7L290.0,265.6L297.9,269.5L301.4,273.9L300.5,281.7L316.4,273.8L320.1,274.4L331.6,283.1L315.9,301.3L315.0,304.5L318.3,306.4L317.4,319.6L309.1,335.8L310.0,343.2L307.2,343.4L308.7,346.3L302.6,348.7L299.7,346.0L298.5,348.0L300.2,356.9L309.2,360.1L310.9,365.3L310.2,371.3L311.7,372.7L307.6,378.3L308.0,381.8L302.9,382.4L303.6,384.5L302.4,386.6L299.3,386.2L298.2,390.7L292.6,391.2L280.8,386.2L276.9,386.3L275.4,382.0L271.8,381.3L265.7,382.2L262.4,386.0L255.6,384.1L242.3,385.7L235.1,383.8L230.7,391.1L219.4,400.5L220.0,412.6L222.7,415.4L223.1,421.5L226.5,422.2L222.0,428.6L218.2,429.4L213.6,434.1L205.9,436.4L193.4,428.1L190.3,422.7L178.4,412.7L172.4,411.1L171.7,414.4L174.2,416.5L172.8,418.2L165.0,412.9L162.4,415.9L165.1,419.4L163.8,420.9L160.4,416.4L155.2,418.3L149.6,417.2L150.2,421.0L147.0,420.8L145.9,424.7L135.5,429.4L125.6,430.6L120.8,436.4L112.2,435.8L108.3,446.0L102.2,444.2L91.2,451.9L84.5,454.2L80.5,449.5Z",
  drs: "M142.8,317.1L143.3,319.1L133.9,337.8L135.1,339.2L142.5,338.9L142.7,347.8L140.2,348.6L138.2,358.3L132.7,359.5L130.8,355.2L117.0,355.1L108.7,350.9L110.2,342.1L118.7,332.1L122.0,319.7L113.7,309.3L105.1,305.5L101.4,297.2L97.8,295.5L92.7,296.7L96.0,290.2L88.6,282.9L90.4,271.5L87.6,265.3L94.5,261.6L89.8,253.9L97.5,252.6L102.5,246.9L116.6,237.5L124.7,240.6L132.7,239.7L144.2,234.7L146.9,228.4L169.5,224.1L171.8,225.6L179.6,224.5L188.5,229.9L195.2,229.4L202.4,234.8L207.4,235.1L222.0,226.5L235.2,230.5L235.4,222.9L244.7,220.0L250.9,231.1L256.9,228.4L261.9,231.4L262.3,228.6L265.5,226.3L264.5,217.5L267.0,213.5L261.5,206.3L268.2,202.0L268.4,198.3L271.7,197.8L274.5,200.0L281.7,196.3L283.5,200.2L286.2,199.9L290.4,195.3L299.1,198.9L306.2,197.4L312.9,192.5L332.3,193.4L333.6,189.5L341.4,189.1L343.2,185.6L346.9,185.5L352.4,180.6L356.5,183.2L358.4,192.1L372.3,193.3L375.2,187.9L380.4,191.1L387.6,190.0L391.0,180.2L400.3,179.6L406.3,175.3L410.5,178.9L414.5,173.5L422.4,173.3L429.7,168.9L436.9,172.9L435.3,178.9L437.1,185.6L459.5,186.9L460.9,193.5L456.6,196.7L456.1,199.6L459.9,204.5L471.9,204.5L476.6,198.8L484.3,195.1L490.0,204.5L497.4,204.9L503.5,215.0L502.1,221.6L493.1,224.4L493.0,231.8L490.4,236.9L493.5,249.1L498.0,257.2L489.0,254.5L478.1,264.5L468.2,263.5L454.5,274.0L450.5,272.1L446.0,274.6L440.1,274.1L435.4,279.7L431.4,281.2L430.1,285.9L424.8,285.2L422.1,290.0L413.9,286.6L409.8,291.5L408.5,287.5L404.8,285.7L403.1,280.6L399.2,278.3L385.6,277.2L386.6,266.0L380.0,258.3L374.5,258.5L363.2,264.3L358.0,260.9L357.1,257.3L355.3,258.0L339.1,266.6L340.9,273.3L334.4,277.3L331.8,283.3L320.1,274.4L316.4,273.8L300.5,281.7L301.4,273.9L297.9,269.5L290.0,265.6L288.2,261.7L281.8,263.6L279.5,262.2L265.5,279.1L259.0,277.3L254.9,279.6L250.7,286.1L244.2,290.0L237.4,298.4L235.6,290.2L216.9,294.9L211.1,291.9L199.4,291.3L195.9,298.6L193.0,298.5L192.7,300.3L183.7,298.4L180.6,300.6L176.1,299.6L165.3,305.5L158.7,302.9L158.1,305.1L151.5,308.9L146.0,309.9L141.6,314.8L142.8,317.1Z M169.7,281.3L161.5,272.3L147.4,277.7L150.7,286.3L154.9,287.7L160.7,281.6L164.8,284.9L169.7,281.3Z M149.1,283.3L147.4,277.7L161.5,272.3L170.6,281.7L164.8,284.9L160.7,281.6L154.9,287.7L150.7,286.3L149.1,283.3Z",
  gbao: "M443.1,477.6L437.6,471.9L435.0,463.0L427.4,450.7L427.2,444.3L424.0,440.1L426.5,424.1L429.0,422.2L431.6,413.3L428.5,405.5L433.5,396.1L430.5,389.7L436.0,370.9L434.2,365.8L440.4,361.1L440.0,348.9L432.3,345.1L414.0,352.5L410.8,347.6L406.7,348.5L408.0,341.2L410.5,338.5L409.3,336.1L411.6,335.4L415.8,324.7L418.5,323.3L418.4,313.2L414.4,311.7L413.8,307.9L403.6,306.3L391.5,295.5L386.7,298.0L384.1,291.4L380.0,288.3L375.8,289.7L376.9,293.4L373.5,294.6L369.1,290.5L366.1,293.8L358.3,291.9L355.3,295.7L349.0,296.9L350.3,301.2L342.2,303.6L341.6,310.3L335.8,314.4L331.5,322.9L331.7,327.4L317.7,334.6L314.3,340.3L310.7,341.8L309.2,340.5L309.8,334.0L316.8,323.2L318.3,306.4L315.0,304.5L315.9,301.3L331.8,283.3L334.4,277.3L340.9,273.3L339.1,266.6L357.1,257.3L358.0,260.9L363.2,264.3L374.5,258.5L380.0,258.3L386.6,266.0L385.6,277.2L399.2,278.3L403.1,280.6L404.8,285.7L408.5,287.5L409.8,291.5L413.9,286.6L422.1,290.0L424.8,285.2L430.1,285.9L431.4,281.2L435.4,279.7L440.1,274.1L446.0,274.6L450.5,272.1L454.5,274.0L468.2,263.5L478.1,264.5L489.0,254.5L498.0,257.2L493.5,249.1L490.4,236.9L493.0,231.8L493.1,224.4L502.1,221.6L502.8,215.6L506.4,215.4L511.5,202.3L515.0,199.2L527.0,197.1L528.6,193.4L534.5,193.5L537.7,196.3L542.1,191.6L550.4,192.5L558.2,197.0L562.2,195.0L575.5,196.5L588.7,194.0L600.8,196.0L604.4,190.9L608.9,192.9L616.0,191.8L619.5,186.0L645.1,184.4L647.2,195.7L641.8,199.6L636.3,207.4L642.0,208.7L648.6,216.1L651.5,226.2L654.8,230.8L662.3,230.5L664.9,236.5L663.9,240.3L655.1,241.2L650.6,248.2L654.1,251.7L656.1,263.6L660.6,271.5L659.3,276.0L668.6,279.0L672.7,283.4L687.3,283.9L688.5,283.1L687.4,279.9L691.5,274.8L692.7,269.7L716.8,270.7L730.8,273.4L734.0,276.5L743.2,278.4L752.0,284.9L758.1,284.5L762.1,288.9L766.8,287.4L766.4,299.1L758.0,303.7L759.6,309.5L757.8,311.8L760.3,316.4L758.7,320.7L766.1,337.2L769.8,337.2L771.5,339.5L771.0,349.8L773.1,353.1L770.8,357.9L777.5,361.5L779.7,365.2L772.4,371.5L769.7,376.8L772.9,387.6L780.0,391.7L780.6,388.4L782.0,388.5L793.4,400.3L793.6,403.6L790.1,407.3L791.6,412.7L773.6,416.0L771.5,417.5L771.0,421.3L769.1,421.7L761.0,409.4L752.2,406.4L749.4,403.5L743.8,406.8L737.1,407.1L733.6,403.9L720.5,405.3L715.6,402.0L711.7,404.4L704.4,403.0L703.3,405.0L705.3,407.0L700.8,411.0L686.5,412.6L680.9,416.3L677.1,415.0L675.4,417.7L672.7,416.5L666.2,419.2L663.8,422.5L658.4,421.5L656.3,423.4L649.9,420.2L645.6,421.6L642.2,418.3L645.5,416.6L646.1,413.4L651.0,414.2L657.8,410.7L657.9,400.0L648.7,398.6L645.4,400.5L631.4,396.3L622.2,397.1L617.6,399.8L617.1,397.9L611.9,397.3L602.0,403.6L595.4,404.1L589.7,412.4L576.0,416.0L566.1,422.5L561.7,422.5L546.9,445.0L542.8,443.7L528.2,447.5L522.9,446.1L511.5,449.4L501.7,454.6L491.9,463.4L482.6,467.0L465.1,480.7L448.3,481.6L443.1,477.6Z"
};

var MAJOR_CITIES = [4, 14, 1, 16, 13, 10, 12, 20];

function geoToSvg(lat, lng) {
  var x = (lng - 67.18) / (75.2 - 67.18) * 800;
  var y = (1 - (lat - 36.5) / (41.2 - 36.5)) * 500;
  return { x: x, y: y };
}

var _regionShowAll = false;

var REGION_REP_CITIES = {
  sughd:  { lat: 40.2833, lng: 69.6333 },
  khatlon: { lat: 37.8364, lng: 68.7650 },
  drs:     { lat: 38.5598, lng: 68.7740 },
  gbao:    { lat: 37.5383, lng: 71.5128 },
  valleys: { lat: 38.6000, lng: 69.1667 }
};

var _regionWxCache = null;
var _regionWxTimestamp = null;
var _regionUpdatedInterval = null;

function updateRegionTimestamp() {
  var el = document.getElementById("region-updated");
  if (!el || !_regionWxTimestamp) { if (el) el.style.display = "none"; return; }
  var mins = Math.floor((Date.now() - _regionWxTimestamp) / 60000);
  el.textContent = mins < 1 ? t("regions.updatedJustNow") : t("regions.updatedMinAgo", { min: mins });
  el.style.display = "";
}

async function fetchRegionWeather() {
  var factors = { sughd: 1.0, khatlon: 1.0, drs: 1.0, gbao: 1.0, valleys: 1.0 };
  var now = new Date();
  var keys = Object.keys(REGION_REP_CITIES);
  var promises = keys.map(function(key) {
    var c = REGION_REP_CITIES[key];
    var url = "https://api.open-meteo.com/v1/forecast?" + new URLSearchParams({
      latitude: c.lat, longitude: c.lng,
      hourly: "temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code",
      daily: "temperature_2m_max,precipitation_sum,wind_speed_10m_max,relative_humidity_2m_mean,weather_code",
      forecast_days: "1",
      timezone: "auto"
    });
    return fetchWithTimeout(url, 5000)
      .then(function(r) { return r.ok ? r.json() : null; })
      .then(function(data) {
        if (!data) return;
        var periodWx = data.hourly ? getCurrentPeriodWeather(data.hourly, now) : null;
        if (periodWx) {
          factors[key] = weatherFactor(periodWx.temp, periodWx.humidity, periodWx.wind, periodWx.precip, periodWx.wxCode);
        } else if (data.daily) {
          var d = data.daily;
          factors[key] = weatherFactor(d.temperature_2m_max[0], d.relative_humidity_2m_mean[0],
            d.wind_speed_10m_max[0], d.precipitation_sum[0], d.weather_code[0]);
        }
      })
      .catch(function() {});
  });
  await Promise.all(promises);
  _regionWxCache = factors;
  _regionWxTimestamp = Date.now();
  updateRegionTimestamp();
  return factors;
}

function computeAllCityRisks(now, wxFactors) {
  var results = [];
  for (var i = 0; i < CITIES.length; i++) {
    var c = CITIES[i];
    var rg = REGIONS[c.region] || REGIONS.drs;
    var regionKey = c.region === "valleys" ? "valleys" : c.region;
    var wxF = (wxFactors && wxFactors[regionKey]) || 1.0;
    var adjD = adjustDateForElevation(now, c.elev || 800);
    var treeR = computeRisk(getSeasonalBase(TREE_SEASON, adjD) * rg.tree, wxF);
    var grassR = computeRisk(getSeasonalBase(GRASS_SEASON, adjD) * rg.grass, wxF);
    var weedR = computeRisk(getSeasonalBase(WEED_SEASON, adjD) * rg.weed, wxF);
    var overall = Math.max(treeR, grassR, weedR);
    var dominant = treeR >= grassR && treeR >= weedR ? "tree" : (grassR >= weedR ? "grass" : "weed");
    results.push({ idx: i, city: c, tree: treeR, grass: grassR, weed: weedR, overall: overall, dominant: dominant, region: c.region });
  }
  return results;
}

function computeRegionRisks(cityRisks) {
  var rr = {};
  var regionKeys = ["sughd", "khatlon", "drs", "gbao", "valleys"];
  for (var k = 0; k < regionKeys.length; k++) {
    var key = regionKeys[k];
    var maxRisk = 0;
    var dom = "tree";
    for (var i = 0; i < cityRisks.length; i++) {
      if (cityRisks[i].region === key && cityRisks[i].overall > maxRisk) {
        maxRisk = cityRisks[i].overall;
        dom = cityRisks[i].dominant;
      }
    }
    rr[key] = { risk: maxRisk, info: getRiskInfo(maxRisk), dominant: dom };
  }
  return rr;
}

async function renderRegionsTab(skipFetch) {
  try {
    _lastRegionData = null;
    var now = new Date();
    var wxFactors = _regionWxCache;
    if (!wxFactors) {
      wxFactors = { sughd: 1.0, khatlon: 1.0, drs: 1.0, gbao: 1.0, valleys: 1.0 };
    }
    var cityRisks = computeAllCityRisks(now, wxFactors);
    var regionRisks = computeRegionRisks(cityRisks);
    _lastRegionData = { city: cityRisks, region: regionRisks };
    renderRegionLegend();
    renderRegionMap(regionRisks, cityRisks);
    renderRegionSidebar(cityRisks);
    renderRegionAlert(regionRisks);
    if (!skipFetch && !_regionWxCache) {
      fetchRegionWeather().then(function(factors) {
        var cityRisks2 = computeAllCityRisks(new Date(), factors);
        var regionRisks2 = computeRegionRisks(cityRisks2);
        _lastRegionData = { city: cityRisks2, region: regionRisks2 };
        renderRegionMap(regionRisks2, cityRisks2);
        renderRegionSidebar(cityRisks2);
        renderRegionAlert(regionRisks2);
      });
    }
  } catch (e) {
    console.error("renderRegionsTab error:", e);
  }
}

function renderRegionLegend() {
  var el = document.getElementById("region-legend");
  if (!el) return;
  var html = "";
  for (var i = 0; i <= 4; i++) {
    var info = getRiskInfo(i);
    html += '<div class="region-legend-item"><span class="region-legend-dot" style="background:' + info.color + '"></span>' + info.label + '</div>';
  }
  el.innerHTML = html;
}

function renderRegionMap(regionRisks, cityRisks) {
  var pathsG = document.getElementById("region-paths");
  var dotsG = document.getElementById("region-dots");
  var labelsG = document.getElementById("region-labels");
  if (!pathsG) return;

  var pathHtml = "";
  var mapKeys = ["sughd", "khatlon", "drs", "gbao"];
  for (var k = 0; k < mapKeys.length; k++) {
    var key = mapKeys[k];
    var rr = regionRisks[key];
    var fillColor = rr.info.color;
    var ariaLabel = t("regions.regionLabel", { region: t("region." + key + ".full"), risk: rr.info.label, score: rr.risk.toFixed(1) });
    pathHtml += '<path d="' + REGION_PATHS[key] + '" fill="' + fillColor + '" fill-opacity="0.45" data-region="' + key + '" role="listitem" tabindex="0" aria-label="' + ariaLabel.replace(/"/g, "&quot;") + '"/>';
  }
  pathsG.innerHTML = pathHtml;

  var dotHtml = "";
  var labelHtml = "";
  for (var i = 0; i < cityRisks.length; i++) {
    var cr = cityRisks[i];
    var pos = geoToSvg(cr.city.lat, cr.city.lng);
    pos.x = Math.max(5, Math.min(795, pos.x));
    pos.y = Math.max(5, Math.min(495, pos.y));
    var info = getRiskInfo(cr.overall);
    var r = cr.overall >= 3 ? 7 : (cr.overall >= 1 ? 5.5 : 4);
    var isMajor = MAJOR_CITIES.indexOf(cr.idx) >= 0;
    var cityAriaLabel = t("regions.cityLabel", { city: t("city." + cr.idx), risk: info.label, score: cr.overall.toFixed(1) });
    dotHtml += '<circle class="city-dot" cx="' + pos.x.toFixed(1) + '" cy="' + pos.y.toFixed(1) + '" r="' + r + '" fill="' + info.color + '" data-city="' + cr.idx + '" role="listitem" tabindex="0" aria-label="' + cityAriaLabel.replace(/"/g, "&quot;") + '"/>';
    if (isMajor) {
      labelHtml += '<text class="city-label" x="' + (pos.x + r + 3).toFixed(1) + '" y="' + (pos.y + 3).toFixed(1) + '">' + t("city." + cr.idx) + '</text>';
    }
  }
  dotsG.innerHTML = dotHtml;

  var regionCenters = {
    sughd: { x: 200, y: 150 }, drs: { x: 270, y: 260 },
    khatlon: { x: 200, y: 375 }, gbao: { x: 580, y: 350 }
  };
  var regionLabelHtml = "";
  for (var rk = 0; rk < mapKeys.length; rk++) {
    var rkey = mapKeys[rk];
    var ctr = regionCenters[rkey];
    var rrr = regionRisks[rkey];
    regionLabelHtml += '<g class="region-name-label" data-region="' + rkey + '" style="cursor:pointer">' +
      '<rect x="' + (ctr.x - 40) + '" y="' + (ctr.y - 10) + '" width="80" height="22" rx="11" fill="' + rrr.info.color + '" fill-opacity="0.85"/>' +
      '<text x="' + ctr.x + '" y="' + (ctr.y + 5) + '" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">' + t("region." + rkey) + '</text>' +
      '</g>';
  }
  labelHtml += regionLabelHtml;
  labelsG.innerHTML = labelHtml;
}

function renderRegionSidebar(cityRisks) {
  var list = document.getElementById("region-city-list");
  var toggleBtn = document.getElementById("region-show-toggle");
  if (!list) return;

  var sorted = cityRisks.slice().sort(function(a, b) { return b.overall - a.overall; });
  var display = _regionShowAll ? sorted : sorted.filter(function(cr) { return MAJOR_CITIES.indexOf(cr.idx) >= 0; });
  toggleBtn.textContent = _regionShowAll ? t("regions.showLess") : t("regions.showAll");

  var html = "";
  for (var i = 0; i < display.length; i++) {
    var cr = display[i];
    var info = getRiskInfo(cr.overall);
    var regionName = t("region." + cr.region);
    var scoreNum = cr.overall.toFixed(1);
    var chips = "";
    if (cr.tree >= 1) chips += '<span class="region-chip">' + t("pollen.tree") + '</span>';
    if (cr.grass >= 1) chips += '<span class="region-chip">' + t("pollen.grass") + '</span>';
    if (cr.weed >= 1) chips += '<span class="region-chip">' + t("pollen.weed") + '</span>';
    var cardAriaLabel = t("regions.cityLabel", { city: t("city." + cr.idx), risk: info.label, score: scoreNum });
    html += '<div class="region-city-card" style="border-left-color:' + info.color + '" data-city="' + cr.idx + '" role="button" tabindex="0" aria-label="' + cardAriaLabel.replace(/"/g, "&quot;") + '">' +
      '<div class="region-city-top"><div><div class="region-city-name">' + t("city." + cr.idx) + '</div>' +
      '<div class="region-city-region">' + regionName + '</div></div>' +
      '<div class="region-city-score"><div class="region-city-score-num" style="color:' + info.color + '">' + scoreNum + '</div>' +
      '<div class="region-city-score-label" style="color:' + info.color + '">' + info.label + '</div></div></div>' +
      (chips ? '<div class="region-city-chips">' + chips + '</div>' : '') +
      '</div>';
  }
  list.innerHTML = html;
}

function renderRegionAlert(regionRisks) {
  var alert = document.getElementById("region-alert");
  if (!alert) return;
  var anyHigh = false;
  var keys = ["sughd", "khatlon", "drs", "gbao", "valleys"];
  for (var i = 0; i < keys.length; i++) {
    if (regionRisks[keys[i]].risk >= 3.5) { anyHigh = true; break; }
  }
  alert.style.display = anyHigh ? "flex" : "none";
}

function toggleRegionShowAll() {
  _regionShowAll = !_regionShowAll;
  var btn = document.getElementById("region-show-toggle");
  if (btn) btn.setAttribute("aria-expanded", _regionShowAll ? "true" : "false");
  renderRegionsTab();
}

function handleMapKey(event, type, id) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    if (type === "region") showRegionFocus(id, event);
    else showCityFocus(id, event);
  } else if (event.key === "Escape") {
    hideRegionFocus();
  }
}

var _lastRegionData = null;

function showRegionFocus(regionKey, evt) {
  if (evt) evt.stopPropagation();
  var focusEl = document.getElementById("region-focus");
  var nameEl = document.getElementById("region-focus-name");
  var detailEl = document.getElementById("region-focus-detail");
  if (!focusEl) return;
  if (!_lastRegionData) {
    var now = new Date();
    _lastRegionData = { city: computeAllCityRisks(now, _regionWxCache) };
    _lastRegionData.region = computeRegionRisks(_lastRegionData.city);
  }
  var rr = _lastRegionData.region[regionKey];
  if (!rr) return;
  nameEl.textContent = t("region." + regionKey + ".full");
  detailEl.textContent = rr.info.label + " · " + t("regions.dominant") + ": " + t("pollen." + rr.dominant);
  detailEl.style.color = rr.info.color;
  focusEl.classList.add("visible");
}

function showCityFocus(cityIdx, evt) {
  if (evt) evt.stopPropagation();
  var focusEl = document.getElementById("region-focus");
  var nameEl = document.getElementById("region-focus-name");
  var detailEl = document.getElementById("region-focus-detail");
  if (!focusEl) return;
  if (!_lastRegionData) {
    var now = new Date();
    _lastRegionData = { city: computeAllCityRisks(now, _regionWxCache) };
    _lastRegionData.region = computeRegionRisks(_lastRegionData.city);
  }
  var cr = null;
  for (var i = 0; i < _lastRegionData.city.length; i++) {
    if (_lastRegionData.city[i].idx === cityIdx) { cr = _lastRegionData.city[i]; break; }
  }
  if (!cr) return;
  var info = getRiskInfo(cr.overall);
  nameEl.textContent = t("city." + cityIdx);
  detailEl.textContent = info.label + " · " + t("region." + cr.region);
  detailEl.style.color = info.color;
  focusEl.classList.add("visible");
  document.querySelectorAll(".city-dot").forEach(function(d) { d.classList.remove("active"); });
  var dot = document.querySelector('.city-dot[data-city="' + cityIdx + '"]');
  if (dot) dot.classList.add("active");
}

function hideRegionFocus() {
  var el = document.getElementById("region-focus");
  if (el) el.classList.remove("visible");
  document.querySelectorAll(".city-dot").forEach(function(d) { d.classList.remove("active"); });
}

function highlightCityDot(cityIdx) {
  showCityFocus(cityIdx);
  var dot = document.querySelector('.city-dot[data-city="' + cityIdx + '"]');
  if (dot) {
    var map = document.getElementById("region-map");
    if (map) map.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

// ── Render Insights tab ──
function renderInsights(cityIndex) {
  renderActiveNow(cityIndex);
  renderTimelineCalendar();
}

// ── Share ──
async function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try { await navigator.clipboard.writeText(text); return; } catch (e) {}
  }
  var ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
}

function showShareFeedback(key) {
  var fb = document.getElementById("share-feedback");
  fb.textContent = t(key);
  fb.classList.add("show");
  setTimeout(function() { fb.classList.remove("show"); }, 2000);
}

if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
    if (typeof r === "number") r = [r, r, r, r];
    var tl = r[0], tr = r[1] || tl, br = r[2] || tl, bl = r[3] || tl;
    this.moveTo(x + tl, y);
    this.lineTo(x + w - tr, y);
    this.quadraticCurveTo(x + w, y, x + w, y + tr);
    this.lineTo(x + w, y + h - br);
    this.quadraticCurveTo(x + w, y + h, x + w - br, y + h);
    this.lineTo(x + bl, y + h);
    this.quadraticCurveTo(x, y + h, x, y + h - bl);
    this.lineTo(x, y + tl);
    this.quadraticCurveTo(x, y, x + tl, y);
    this.closePath();
    return this;
  };
}

function generateShareCard(data) {
  var W = 1080, H = 1080;
  var P = 80;
  var CW = W - P * 2;
  var canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  var ctx = canvas.getContext("2d");
  var hasAqi = data.aqi != null;
  var hasWx = data.temp != null;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);

  // ── Header: 0–150 ──
  var grad = ctx.createLinearGradient(0, 0, W, 0);
  grad.addColorStop(0, "#1a3a2a");
  grad.addColorStop(1, "#0f5238");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, 150);
  ctx.fillStyle = "#a8e7c5";
  ctx.font = "bold 52px system-ui, sans-serif";
  ctx.fillText("AllergyTJ", P, 95);
  var brandW = ctx.measureText("AllergyTJ").width;
  ctx.font = "34px system-ui, sans-serif";
  var siteW = ctx.measureText("allergy.tj").width;
  var descText = t("dash.pollenAndAir");
  var barGap = 22, barW2 = 3, textGap = 16;
  var descLeft = P + brandW + barGap + barW2 + textGap;
  var descAvail = W - P - siteW - 20 - descLeft;
  var descSize = 32;
  ctx.font = descSize + "px system-ui, sans-serif";
  while (descSize > 20 && ctx.measureText(descText).width > descAvail) {
    descSize -= 2;
    ctx.font = descSize + "px system-ui, sans-serif";
  }
  if (ctx.measureText(descText).width <= descAvail) {
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.fillRect(P + brandW + barGap, 62, barW2, 44);
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.font = descSize + "px system-ui, sans-serif";
    ctx.fillText(descText, descLeft, 95);
  }
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.font = "34px system-ui, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText("allergy.tj", W - P, 95);
  ctx.textAlign = "left";

  // ── Footer: 970–1080 ──
  ctx.fillStyle = "#e8efe8";
  ctx.fillRect(0, 970, W, 110);
  ctx.fillStyle = "#1a3a2a";
  ctx.font = "bold 34px system-ui, sans-serif";
  ctx.fillText(t("share.checkCard") + "  allergy.tj", P, 1038);

  // ── City + Date: y=210 ──
  ctx.font = "bold 46px system-ui, sans-serif";
  if (ctx.measureText(data.cityName).width > CW - 360) ctx.font = "bold 38px system-ui, sans-serif";
  ctx.fillStyle = "#1a3a2a";
  ctx.fillText(data.cityName, P, 216);
  ctx.font = "34px system-ui, sans-serif";
  ctx.fillStyle = "#888";
  ctx.textAlign = "right";
  ctx.fillText(data.dateStr, W - P, 216);
  ctx.textAlign = "left";

  // Thin divider
  ctx.fillStyle = "#e0e0e0";
  ctx.fillRect(P, 240, CW, 2);

  // ── Risk score card: 270–470 ──
  var info = getRiskInfo(data.risk);
  ctx.fillStyle = "#f3f7f3";
  ctx.beginPath();
  ctx.roundRect(P, 270, CW, 200, 20);
  ctx.fill();

  var riskLabel = data.isPersonal ? t("profile.yourRisk") : t("share.pollenRisk");
  ctx.font = "bold 30px system-ui, sans-serif";
  ctx.fillStyle = "#6a8a6a";
  ctx.fillText(riskLabel, P + 40, 316);

  ctx.font = "bold 96px system-ui, sans-serif";
  ctx.fillStyle = info.bg;
  ctx.fillText(data.risk.toFixed(1), P + 40, 416);
  var sw = ctx.measureText(data.risk.toFixed(1)).width;
  ctx.font = "42px system-ui, sans-serif";
  ctx.fillStyle = "#c0c0c0";
  ctx.fillText("/ 4", P + 40 + sw + 8, 416);

  ctx.font = "bold 48px system-ui, sans-serif";
  ctx.fillStyle = info.bg;
  ctx.textAlign = "right";
  ctx.fillText(info.label, W - P - 40, 416);
  ctx.textAlign = "left";

  // Risk bar
  var bx = P + 40, bw = CW - 80;
  ctx.fillStyle = "#dde5dd";
  ctx.beginPath();
  ctx.roundRect(bx, 440, bw, 16, 8);
  ctx.fill();
  ctx.fillStyle = info.bg;
  ctx.beginPath();
  ctx.roundRect(bx, 440, Math.max(16, (data.risk / 4) * bw), 16, 8);
  ctx.fill();

  // ── Allergen breakdown: 510–780 ──
  var cats = [
    { label: t("pollen.tree"), risk: data.treeRisk, dot: "#2e7d32" },
    { label: t("pollen.grass"), risk: data.grassRisk, dot: "#558b2f" },
    { label: t("pollen.weed"), risk: data.weedRisk, dot: "#8c6d00" }
  ];
  var ay = 520;
  for (var i = 0; i < 3; i++) {
    var c = cats[i];
    var ci = getRiskInfo(c.risk);

    ctx.fillStyle = c.dot;
    ctx.beginPath();
    ctx.arc(P + 16, ay + 8, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = "34px system-ui, sans-serif";
    ctx.fillStyle = "#333";
    ctx.fillText(c.label, P + 44, ay + 18);

    ctx.font = "bold 34px system-ui, sans-serif";
    ctx.fillStyle = ci.bg;
    ctx.textAlign = "right";
    ctx.fillText(ci.label, W - P, ay + 18);
    ctx.textAlign = "left";

    ctx.fillStyle = "#e5e5e5";
    ctx.beginPath();
    ctx.roundRect(P, ay + 42, CW, 16, 8);
    ctx.fill();
    ctx.fillStyle = ci.bg;
    ctx.beginPath();
    ctx.roundRect(P, ay + 42, Math.max(16, (c.risk / 4) * CW), 16, 8);
    ctx.fill();

    ay += 90;
  }

  // ── Bottom section: AQI + Weather + UV ──
  var by = 815;
  var hasUv = data.uv != null;
  var boxH = 110;
  var boxR = 14;
  var boxPad = 24;
  var _shareAqiColors = ["#1b5e20", "#7a6200", "#bf360c", "#b71c1c", "#4a148c"];

  function _fitText(c, text, maxW, startFs, minFs) {
    var fs = startFs;
    c.font = fs + "px system-ui, sans-serif";
    while (c.measureText(text).width > maxW && fs > minFs) {
      fs -= 2;
      c.font = fs + "px system-ui, sans-serif";
    }
    return fs;
  }

  function _drawAqiBox(x, w, ai) {
    ctx.fillStyle = _shareAqiColors[ai.idx] || ai.color;
    ctx.beginPath();
    ctx.roundRect(x, by, w, boxH, boxR);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "bold 26px system-ui, sans-serif";
    ctx.fillText("US AQI", x + boxPad, by + 40);
    ctx.font = "bold 48px system-ui, sans-serif";
    var numStr = String(Math.round(data.aqi));
    ctx.fillText(numStr, x + boxPad, by + 86);
    var nw = ctx.measureText(numStr).width;
    var fs = _fitText(ctx, ai.label, w - nw - boxPad - 38, 26, 20);
    ctx.font = fs + "px system-ui, sans-serif";
    ctx.fillText(ai.label, x + boxPad + nw + 14, by + 86);
  }

  function _drawWxBox(x, w) {
    ctx.fillStyle = "#e8ece8";
    ctx.beginPath();
    ctx.roundRect(x, by, w, boxH, boxR);
    ctx.fill();
    ctx.fillStyle = "#333";
    var wl = Math.round(data.temp) + "°C";
    if (data.humidity != null) wl += "  ·  " + data.humidity + "%";
    var fs = _fitText(ctx, wl, w - boxPad * 2, 30, 22);
    ctx.font = "bold " + fs + "px system-ui, sans-serif";
    ctx.fillText(wl, x + boxPad, by + 40);
    if (data.condition) {
      ctx.fillStyle = "#555";
      _fitText(ctx, data.condition, w - boxPad * 2, 26, 18);
      ctx.fillText(data.condition, x + boxPad, by + 82);
    }
  }

  function _drawUvBox(x, w) {
    var uvi = uvShareInfo(data.uv);
    ctx.fillStyle = uvi.color;
    ctx.beginPath();
    ctx.roundRect(x, by, w, boxH, boxR);
    ctx.fill();
    ctx.fillStyle = "#fff";
    var uvLabel = t("wx.label.uv");
    var lfs = _fitText(ctx, uvLabel, w - boxPad * 2, 26, 20);
    ctx.font = "bold " + lfs + "px system-ui, sans-serif";
    ctx.fillText(uvLabel, x + boxPad, by + 40);
    ctx.font = "bold 48px system-ui, sans-serif";
    var numStr = String(data.uv);
    ctx.fillText(numStr, x + boxPad, by + 86);
    var nw = ctx.measureText(numStr).width;
    var fs = _fitText(ctx, uvi.label, w - nw - boxPad - 38, 26, 20);
    ctx.font = fs + "px system-ui, sans-serif";
    ctx.fillText(uvi.label, x + boxPad + nw + 14, by + 86);
  }

  if (hasAqi && hasWx) {
    var ai = aqiInfo(data.aqi);
    if (hasUv) {
      var gap = 16;
      var boxW = (CW - gap * 2) / 3;
      _drawAqiBox(P, boxW, ai);
      _drawWxBox(P + boxW + gap, boxW);
      _drawUvBox(P + (boxW + gap) * 2, boxW);
    } else {
      var aqW = 340;
      var gap = 16;
      _drawAqiBox(P, aqW, ai);
      _drawWxBox(P + aqW + gap, CW - aqW - gap);
    }
  } else if (hasAqi) {
    _drawAqiBox(P, 340, aqiInfo(data.aqi));
  } else if (hasWx) {
    if (hasUv) {
      var gap = 16;
      var halfW = (CW - gap) / 2;
      _drawWxBox(P, halfW);
      _drawUvBox(P + halfW + gap, halfW);
    } else {
      _drawWxBox(P, CW);
    }
  }


  return canvas;
}

async function sharePollen() {
  if (!lastRenderState) return;
  var s = lastRenderState;
  var now = new Date();
  var cityName = t("city." + s.cityIndex);
  var adjNow = adjustDateForElevation(now, s.cityElev || BASELINE_ELEV);
  var rg = s.reg || REGIONS.drs;

  var treeBase = getSeasonalBase(TREE_SEASON, adjNow) * rg.tree;
  var grassBase = getSeasonalBase(GRASS_SEASON, adjNow) * rg.grass;
  var weedBase = getSeasonalBase(WEED_SEASON, adjNow) * rg.weed;
  var wxF = 1.0;

  if ((s.weatherTier === 1 || s.weatherTier === 2) && s.wx) {
    var daily = s.wx.daily;
    var curWx = s.wx.current;
    var todayTemp = daily.temperature_2m_max[0];
    var todayHumidity = daily.relative_humidity_2m_mean ? daily.relative_humidity_2m_mean[0] : curWx.relative_humidity_2m;
    var todayWind = daily.wind_speed_10m_max[0];
    var todayPrecip = daily.precipitation_sum[0];
    var todayWxCode = daily.weather_code[0];
    wxF = weatherFactor(todayTemp, todayHumidity, todayWind, todayPrecip, todayWxCode);
    if (curWx && curWx.weather_code !== undefined) {
      var curFactor = weatherFactor(curWx.temperature_2m, curWx.relative_humidity_2m, curWx.wind_speed_10m, curWx.precipitation, curWx.weather_code);
      if (curFactor < wxF) wxF = curFactor;
    }
  }

  var treeRisk = computeRisk(treeBase, wxF);
  var grassRisk = computeRisk(grassBase, wxF);
  var weedRisk = computeRisk(weedBase, wxF);
  var overall = Math.max(treeRisk, grassRisk, weedRisk);
  var _prof = getAllergenProfile();
  var _pRisk = computePersonalRisk(_prof, adjNow, rg, wxF);
  var shareRisk = _pRisk != null ? _pRisk : overall;
  var overallInfo = getRiskInfo(shareRisk);
  var treeInfo = getRiskInfo(treeRisk);
  var grassInfo = getRiskInfo(grassRisk);
  var weedInfo = getRiskInfo(weedRisk);

  var personalLine = _pRisk != null ? "👤 " + t("profile.yourRisk") + ": " + overallInfo.label + "\n" : "";
  var textMessage = personalLine + "🌿 " + getRiskInfo(overall).label + " " + t("pollen.riskSuffix") + " — " + cityName +
    "\n🌳 " + t("pollen.tree") + ": " + treeInfo.label +
    " | 🌾 " + t("pollen.grass") + ": " + grassInfo.label +
    " | 🌿 " + t("pollen.weed") + ": " + weedInfo.label +
    "\n" + t("share.checkYours") + " → " + SITE_BASE.replace("https://", "");

  var dateStr = now.getDate() + " " + t("month." + now.getMonth()) + " " + now.getFullYear();

  var cardData = {
    cityName: cityName,
    dateStr: dateStr,
    risk: shareRisk,
    isPersonal: _pRisk != null,
    generalRisk: _pRisk != null ? overall : null,
    treeRisk: treeRisk,
    grassRisk: grassRisk,
    weedRisk: weedRisk,
    aqi: s.aq ? s.aq.current.us_aqi : null,
    temp: null,
    humidity: null,
    uv: null,
    condition: null
  };

  if ((s.weatherTier === 1 || s.weatherTier === 2) && s.wx) {
    var cur = s.wx.current;
    cardData.temp = cur.temperature_2m;
    cardData.humidity = cur.relative_humidity_2m;
    cardData.uv = cur.uv_index != null ? Math.round(cur.uv_index) : null;
    cardData.condition = wxDescription(cur.weather_code);
  }

  var canvas = generateShareCard(cardData);

  canvas.toBlob(async function(blob) {
    if (!blob) {
      await copyToClipboard(textMessage);
      showShareFeedback("share.copied");
      return;
    }

    var dateSlug = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
    var file = new File([blob], "allergytj-" + dateSlug + ".png", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], text: textMessage });
        return;
      } catch (e) {
        if (e.name === "AbortError") return;
      }
    }

    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "allergytj-" + dateSlug + ".png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function() { URL.revokeObjectURL(url); }, 1000);

    await copyToClipboard(textMessage);
    showShareFeedback("share.imageSaved");
  }, "image/png");
}

// ── Init ──
(async function() {
  var _seo = document.getElementById('seo-content');
  if (_seo) _seo.remove();

  await loadTranslations(LANG);
  if (LANG !== "en") await loadTranslations("en");

  // Capture city from URL before replaceState could clobber it
  var _initCityIdx = getCityFromPath();

  // Ensure URL reflects current language + tab (skip on city pages)
  var currentTab = getTabFromPath();
  if (_initCityIdx < 0) {
    history.replaceState(null, '', buildTabPath(LANG, currentTab));
  }

  document.documentElement.lang = LANG === "tj" ? "tg" : LANG;

  document.querySelectorAll(".lang-btn").forEach(function(btn) {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === LANG);
  });

  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  updateMetaTags(LANG);

  // Update city dropdown text and sort alphabetically for current language
  var sel = document.getElementById("city-select");
  for (var i = 0; i < sel.options.length; i++) {
    sel.options[i].text = t("city." + sel.options[i].dataset.idx);
  }
  sortCityDropdown();

  // Build calendar
  buildCalendar();

  // City URL takes priority, then localStorage
  var cityFromUrl = _initCityIdx;
  if (cityFromUrl >= 0) {
    selectCityByIndex(cityFromUrl);
  } else {
    var savedCity = localStorage.getItem("allergytj-city");
    if (savedCity) {
      for (var j = 0; j < sel.options.length; j++) {
        if (sel.options[j].value === savedCity) { sel.selectedIndex = j; break; }
      }
    }
  }

  // Bind all static + delegated event listeners
  initStaticListeners();

  // Render Insights tab immediately (doesn't need API data)
  renderTimelineCalendar();
  renderActiveNow(getSelectedCityIndex());

  // Pre-render Regions tab so crawlers see map + city list content (skip weather fetch — fetchData handles it)
  renderRegionsTab(true);

  // Auto-fetch pollen data for selected city
  fetchData();

  // Auto-refresh: re-fetch every 15 minutes so data stays current
  var AUTO_REFRESH_MS = 15 * 60 * 1000;
  var STALE_TAB_MS = 5 * 60 * 1000;
  setInterval(function() { fetchData(); }, AUTO_REFRESH_MS);

  // Re-fetch when user returns to a tab that's been hidden for >5 min
  document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "visible" && _dashWxTimestamp &&
        Date.now() - _dashWxTimestamp > STALE_TAB_MS) {
      fetchData();
    }
  });
})();

// ── PWA ──

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      reg.addEventListener('updatefound', function() {
        var newWorker = reg.installing;
        newWorker.addEventListener('statechange', function() {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            showUpdateBanner(newWorker);
          }
        });
      });
    }).catch(function(err) {
      console.warn('SW registration failed:', err.message);
    });

    var refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', function() {
      if (!refreshing) { refreshing = true; window.location.reload(); }
    });
  });
}

function showUpdateBanner(worker) {
  var existing = document.getElementById('sw-update-banner');
  if (existing) return;
  var banner = document.createElement('div');
  banner.id = 'sw-update-banner';
  banner.setAttribute('role', 'alert');
  banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:var(--card);color:var(--text);padding:12px 16px;padding-bottom:calc(12px + env(safe-area-inset-bottom, 0px));display:flex;align-items:center;justify-content:space-between;z-index:9999;font-size:0.9rem;box-shadow:0 -2px 8px rgba(0,0,0,0.2);border-top:1px solid var(--border);';
  var span = document.createElement('span');
  span.textContent = t('pwa.updateAvailable');
  var btn = document.createElement('button');
  btn.textContent = t('pwa.updateNow');
  btn.style.cssText = 'background:#d4a017;color:#1a3a2a;border:none;padding:8px 16px;border-radius:6px;font-weight:600;cursor:pointer;';
  btn.onclick = function() { worker.postMessage({ type: 'SKIP_WAITING' }); };
  banner.appendChild(span);
  banner.appendChild(btn);
  document.body.appendChild(banner);
}

var _deferredInstallPrompt = null;

window.addEventListener('appinstalled', function() {
  _deferredInstallPrompt = null;
  var b = document.getElementById('install-banner');
  if (b) b.remove();
  var tip = document.getElementById('ios-install-tip');
  if (tip) tip.remove();
});

window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  if (localStorage.getItem('allergytj-install-dismissed')) return;
  _deferredInstallPrompt = e;
  showInstallBanner();
});

function showInstallBanner() {
  var existing = document.getElementById('install-banner');
  if (existing) return;
  var banner = document.createElement('div');
  banner.id = 'install-banner';
  banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:var(--card);color:var(--text);padding:14px 16px;padding-bottom:calc(14px + env(safe-area-inset-bottom, 0px));display:flex;align-items:center;justify-content:space-between;gap:12px;z-index:9998;box-shadow:0 -2px 8px rgba(0,0,0,0.15);border-top:1px solid var(--border);';
  var span = document.createElement('span');
  span.style.cssText = 'flex:1;font-size:0.85rem;';
  span.textContent = t('pwa.installPrompt');
  var installBtn = document.createElement('button');
  installBtn.textContent = t('pwa.installButton');
  installBtn.style.cssText = 'background:#1a3a2a;color:white;border:none;padding:8px 14px;border-radius:6px;font-weight:600;cursor:pointer;white-space:nowrap;';
  installBtn.onclick = function() {
    if (!_deferredInstallPrompt) return;
    _deferredInstallPrompt.prompt();
    _deferredInstallPrompt.userChoice.then(function() {
      _deferredInstallPrompt = null;
      var b = document.getElementById('install-banner');
      if (b) b.remove();
    });
  };
  var closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.style.cssText = 'background:none;border:none;color:var(--muted);font-size:1.2rem;cursor:pointer;padding:4px 8px;';
  closeBtn.onclick = function() {
    localStorage.setItem('allergytj-install-dismissed', '1');
    var b = document.getElementById('install-banner');
    if (b) b.remove();
    _deferredInstallPrompt = null;
  };
  banner.appendChild(span);
  banner.appendChild(installBtn);
  banner.appendChild(closeBtn);
  document.body.appendChild(banner);
}

// iOS Safari: manual install instructions
if (window.navigator.standalone === false && !localStorage.getItem('allergytj-install-dismissed')) {
  setTimeout(function() {
    var toast = document.createElement('div');
    toast.id = 'ios-install-tip';
    toast.setAttribute('role', 'status');
    toast.style.cssText = 'position:fixed;bottom:16px;bottom:calc(16px + env(safe-area-inset-bottom, 0px));left:16px;right:16px;background:var(--card);color:var(--text);padding:14px 16px;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.2);z-index:9998;font-size:0.85rem;text-align:center;border:1px solid var(--border);';
    var msg = document.createElement('span');
    msg.textContent = t('pwa.iosInstall');
    var dismissBtn = document.createElement('button');
    dismissBtn.textContent = t('pwa.dismiss');
    dismissBtn.style.cssText = 'display:block;margin:8px auto 0;background:none;border:none;color:var(--muted);cursor:pointer;font-size:0.8rem;';
    dismissBtn.onclick = function() {
      toast.remove();
      localStorage.setItem('allergytj-install-dismissed', '1');
    };
    toast.appendChild(msg);
    toast.appendChild(dismissBtn);
    document.body.appendChild(toast);
    setTimeout(function() { var el = document.getElementById('ios-install-tip'); if (el) el.remove(); }, 15000);
  }, 3000);
}
