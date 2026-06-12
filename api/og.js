export default function handler(req, res) {
  var lang = req.query.lang || 'tj';

  var base = 'https://allergy.tj';
  var og = {
    tj: {
      title: 'AllergyTJ — Гардолуд ва сифати ҳаво дар Тоҷикистон',
      desc: 'Гардолуд ва сифати ҳаво дар Тоҷикистон — AQI, PM2.5 барои 30 шаҳр. Пешгӯии соатӣ, дурнамои 5-рӯза. Душанбе, Хуҷанд, Бохтар.',
      image: '/og-image.png',
      locale: 'tg',
      url: '/'
    },
    en: {
      title: 'AllergyTJ — Pollen & Air Quality Tracker for Tajikistan',
      desc: 'Live pollen risk and air quality for 30 cities in Tajikistan — AQI, PM2.5, hourly forecast, 5-day outlook. Dushanbe, Khujand, Bokhtar and more.',
      image: '/og-image-en.png',
      locale: 'en',
      url: '/en/'
    },
    ru: {
      title: 'AllergyTJ — Пыльца и качество воздуха в Таджикистане',
      desc: 'Пыльца и качество воздуха в Таджикистане — AQI, PM2.5 для 30 городов. Почасовой прогноз, 5-дневный обзор. Душанбе, Худжанд, Бохтар.',
      image: '/og-image-ru.png',
      locale: 'ru',
      url: '/ru/'
    }
  };

  var d = og[lang] || og.tj;
  var html = '<!DOCTYPE html>\n<html lang="' + d.locale + '">\n<head>\n' +
    '<meta charset="UTF-8">\n' +
    '<title>' + d.title + '</title>\n' +
    '<meta name="description" content="' + d.desc + '">\n' +
    '<meta property="og:type" content="website">\n' +
    '<meta property="og:site_name" content="AllergyTJ">\n' +
    '<meta property="og:title" content="' + d.title + '">\n' +
    '<meta property="og:description" content="' + d.desc + '">\n' +
    '<meta property="og:url" content="' + base + d.url + '">\n' +
    '<meta property="og:image" content="' + base + d.image + '">\n' +
    '<meta property="og:image:width" content="1200">\n' +
    '<meta property="og:image:height" content="630">\n' +
    '<meta property="og:image:type" content="image/png">\n' +
    '<meta property="og:locale" content="' + d.locale + '">\n' +
    '<meta name="twitter:card" content="summary_large_image">\n' +
    '<meta name="twitter:title" content="' + d.title + '">\n' +
    '<meta name="twitter:description" content="' + d.desc + '">\n' +
    '<meta name="twitter:image" content="' + base + d.image + '">\n' +
    '<link rel="canonical" href="' + base + d.url + '">\n' +
    '<meta http-equiv="refresh" content="0;url=' + base + d.url + '">\n' +
    '</head>\n<body></body>\n</html>';

  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400');
  res.status(200).send(html);
}
