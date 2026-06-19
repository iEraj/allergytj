#!/usr/bin/env python3
"""
build_html.py — Static HTML pre-generation for SEO/crawlability.

Reads index.html as a template and lang/*.json translation files,
generates per-language HTML files with correct <head> sections so
every visitor (Googlebot, AI crawlers, humans) sees content-rich HTML.

Output: dist/index.html (Tajik), dist/en/index.html (EN), dist/ru/index.html (RU)

Usage: python build_html.py
"""

import json
import os
import re
import sys

SITE_BASE = "https://allergy.tj"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DIST_DIR = os.path.join(SCRIPT_DIR, "dist")

LANG_CONFIG = {
    "tj": {
        "html_lang": "tg",
        "url_prefix": "/",
        "og_image": "/og-image.png",
        "out_path": "index.html",
    },
    "en": {
        "html_lang": "en",
        "url_prefix": "/en/",
        "og_image": "/og-image-en.png",
        "out_path": "en/index.html",
    },
    "ru": {
        "html_lang": "ru",
        "url_prefix": "/ru/",
        "og_image": "/og-image-ru.png",
        "out_path": "ru/index.html",
    },
}

FAQ_DATA = [
    {
        "q": {
            "en": "Is there pollen monitoring in Tajikistan?",
            "ru": "Есть ли мониторинг пыльцы в Таджикистане?",
            "tj": "Дар Тоҷикистон мониторинги гардолуд ҳаст?",
        },
        "a": {
            "en": "Based on our research as of early 2026, we have not been able to identify any public pollen monitoring stations in Tajikistan. AllergyTJ estimates pollen risk by combining a seasonal calendar of known allergenic flora with live weather data from Open-Meteo.",
            "ru": "По данным нашего исследования на начало 2026 года, в Таджикистане не удалось обнаружить ни одной публичной станции мониторинга пыльцы. AllergyTJ оценивает риск пыльцы, сочетая сезонный календарь известных аллергенных растений с данными погоды от Open-Meteo.",
            "tj": "Тибқи таҳқиқоти мо дар ибтидои соли 2026, мо дар Тоҷикистон ягон истгоҳи мониторинги гардолуди оммавӣ пайдо карда натавонистем. AllergyTJ хатари гардолудро бо истифода аз тақвими мавсимии растаниҳои аллергенӣ ва маълумоти обу ҳавои зинда аз Open-Meteo баҳо медиҳад.",
        },
    },
    {
        "q": {
            "en": "What are the main allergens in Tajikistan?",
            "ru": "Какие основные аллергены в Таджикистане?",
            "tj": "Аллергенҳои асосӣ дар Тоҷикистон кадомҳоянд?",
        },
        "a": {
            "en": "The main allergenic plants in Tajikistan include poplar and cottonwood (March-May), willow and birch (March-May), grasses (May-July), mugwort/Artemisia (July-September), and chenopod/pigweed (June-September). Poplar is the dominant urban tree and a heavy pollen producer.",
            "ru": "Основные аллергенные растения Таджикистана: тополь (март-май), ива и берёза (март-май), злаки (май-июль), полынь (июль-сентябрь) и марь/лебеда (июнь-сентябрь). Тополь — доминирующее городское дерево и сильный источник пыльцы.",
            "tj": "Растаниҳои аллергении асосии Тоҷикистон: сафедор (март-май), бед ва тӯс (март-май), алафҳо (май-июл), шӯрхок/Artemisia (июл-сентябр) ва лӯбиёи саҳроӣ (июн-сентябр). Сафедор дарахти шаҳрии асосӣ ва манбаи зиёди гардолуд аст.",
        },
    },
    {
        "q": {
            "en": "When is pollen season in Dushanbe?",
            "ru": "Когда сезон пыльцы в Душанбе?",
            "tj": "Мавсими гардолуд дар Душанбе кай аст?",
        },
        "a": {
            "en": "Pollen season in Dushanbe typically runs from late February through October. Tree pollen (poplar, willow, plane tree) peaks in April, grass pollen peaks in June, and weed pollen (mugwort, chenopod) peaks in August-September.",
            "ru": "Сезон пыльцы в Душанбе обычно длится с конца февраля по октябрь. Пыльца деревьев (тополь, ива, платан) достигает пика в апреле, злаков — в июне, а сорных трав (полынь, марь) — в августе-сентябре.",
            "tj": "Мавсими гардолуд дар Душанбе одатан аз охири феврал то октябр давом мекунад. Гардолуди дарахтон (сафедор, бед, чинор) дар апрел ба авҷ мерасад, алафҳо дар июн ва алафҳои бегона (шӯрхок, лӯбиё) дар август-сентябр.",
        },
    },
    {
        "q": {
            "en": "How does AllergyTJ calculate pollen risk?",
            "ru": "Как AllergyTJ рассчитывает риск пыльцы?",
            "tj": "AllergyTJ хатари гардолудро чӣ тавр ҳисоб мекунад?",
        },
        "a": {
            "en": "AllergyTJ combines a seasonal pollen calendar for Tajikistan's allergenic flora with live weather data. Temperature, humidity, wind speed, and precipitation adjust the seasonal baseline: hot, dry, windy conditions increase risk, while rain and cold suppress it. The result is a score from 0 to 4 (None to Very High).",
            "ru": "AllergyTJ сочетает сезонный календарь пыльцы аллергенных растений Таджикистана с данными погоды в реальном времени. Температура, влажность, скорость ветра и осадки корректируют сезонную базу: жаркие, сухие, ветреные условия повышают риск, а дождь и холод подавляют его. Результат — оценка от 0 до 4 (Нет риска — Очень высокий).",
            "tj": "AllergyTJ тақвими мавсимии гардолуди растаниҳои аллергении Тоҷикистонро бо маълумоти обу ҳаво дар вақти воқеӣ якҷоя мекунад. Ҳарорат, намнокӣ, суръати шамол ва боришот сатҳи мавсимиро танзим мекунанд: шароити гарм, хушк ва шамолӣ хатарро зиёд мекунад, боришот ва хунукӣ онро паст мекунад. Натиҷа — баҳо аз 0 то 4 (Нест то Хеле баланд).",
        },
    },
    {
        "q": {
            "en": "Can pollen allergies cause food reactions?",
            "ru": "Может ли аллергия на пыльцу вызвать реакцию на продукты?",
            "tj": "Оё аллергияи гардолуд метавонад реаксия ба ғизо эҷод кунад?",
        },
        "a": {
            "en": "Yes — a condition called Oral Allergy Syndrome (OAS) means proteins in certain foods resemble pollen allergens. Birch pollen allergy can cross-react with apples, cherries, and apricots. Mugwort (Artemisia) allergy may trigger reactions to celery, cumin, and coriander. Grass pollen cross-reacts with wheat and melons. AllergyTJ includes a Cross-Reactivity Guide covering foods commonly eaten in Tajikistan.",
            "ru": "Да — состояние, называемое оральным аллергическим синдромом (ОАС), означает, что белки некоторых продуктов похожи на аллергены пыльцы. Аллергия на берёзу может вызвать реакцию на яблоки, вишню и абрикосы. Аллергия на полынь — на сельдерей, тмин и кориандр. Злаковая пыльца перекрёстно реагирует с пшеницей и дынями. AllergyTJ включает руководство по перекрёстной реактивности с продуктами, распространёнными в Таджикистане.",
            "tj": "Бале — ҳолате бо номи синдроми аллергияи даҳонӣ (OAS) маънои онро дорад, ки сафедаҳои баъзе ғизоҳо ба аллергенҳои гардолуд монанданд. Аллергияи тӯс метавонад бо себ, олуболу ва зардолу реаксия диҳад. Аллергияи шӯрхок метавонад бо карафс, зира ва кашниз реаксия эҷод кунад. Гардолуди алаф бо гандум ва харбуза реаксияи мутақобил медиҳад. AllergyTJ дастури реаксияи мутақобилро бо ғизоҳои маъмули Тоҷикистон дар бар мегирад.",
        },
    },
    {
        "q": {
            "en": "How does air quality affect allergies in Tajikistan?",
            "ru": "Как качество воздуха влияет на аллергию в Таджикистане?",
            "tj": "Сифати ҳаво чӣ тавр ба аллергия дар Тоҷикистон таъсир мерасонад?",
        },
        "a": {
            "en": "Poor air quality worsens allergy symptoms. PM2.5 and PM10 particles can carry pollen fragments deep into the lungs, and ozone inflames airways. AllergyTJ shows real-time US AQI with a breakdown of 6 pollutants (ozone, PM2.5, PM10, NO₂, SO₂, CO) using data from the Copernicus Atmosphere Monitoring Service (CAMS).",
            "ru": "Плохое качество воздуха усугубляет симптомы аллергии. Частицы PM2.5 и PM10 могут переносить фрагменты пыльцы глубоко в лёгкие, а озон воспаляет дыхательные пути. AllergyTJ показывает US AQI в реальном времени с разбивкой по 6 загрязнителям (озон, PM2.5, PM10, NO₂, SO₂, CO) с использованием данных Copernicus (CAMS).",
            "tj": "Сифати бади ҳаво аломатҳои аллергияро бадтар мекунад. Зарраҳои PM2.5 ва PM10 метавонанд порчаҳои гардолудро ба қаъри шуш интиқол диҳанд ва озон роҳҳои нафасро илтиҳоб мекунад. AllergyTJ US AQI-ро дар вақти воқеӣ бо тақсимоти 6 ифлоскунанда (озон, PM2.5, PM10, NO₂, SO₂, CO) бо истифода аз маълумоти Copernicus (CAMS) нишон медиҳад.",
        },
    },
    {
        "q": {
            "en": "Does pollen risk vary by region in Tajikistan?",
            "ru": "Различается ли риск пыльцы по регионам Таджикистана?",
            "tj": "Оё хатари гардолуд аз рӯи минтақаҳои Тоҷикистон фарқ мекунад?",
        },
        "a": {
            "en": "Yes, significantly. Tajikistan has five distinct vegetation zones: Dushanbe/DRS (urban, poplar-heavy), Khatlon (agricultural lowlands, higher grass pollen), Sughd (Ferghana Valley, mixed orchards), GBAO/Pamir (sparse alpine vegetation, much lower pollen), and mountain valleys. AllergyTJ adjusts risk scores using regional multipliers and elevation-based bloom timing via Hopkins' Bioclimatic Law.",
            "ru": "Да, существенно. В Таджикистане пять различных зон растительности: Душанбе/РРП (городская, много тополей), Хатлон (сельскохозяйственные низины, больше злаковой пыльцы), Согд (Ферганская долина, смешанные сады), ГБАО/Памир (скудная альпийская растительность, значительно меньше пыльцы) и горные долины. AllergyTJ корректирует оценки риска с помощью региональных коэффициентов и высотной корректировки цветения по закону Хопкинса.",
            "tj": "Бале, хеле зиёд. Тоҷикистон панҷ минтақаи алоҳидаи растаниҳо дорад: Душанбе/НТҶ (шаҳрӣ, сафедори зиёд), Хатлон (пастии кишоварзӣ, гардолуди алаф зиёдтар), Суғд (водии Фарғона, боғҳои омехта), ВМКБ/Помир (растаниҳои кӯҳии кам, гардолуд хеле камтар) ва водиҳои кӯҳӣ. AllergyTJ баҳои хатарро бо зарибҳои минтақавӣ ва вақти гулкунии баландӣ тибқи Қонуни биоиқлимии Хопкинс танзим мекунад.",
        },
    },
    {
        "q": {
            "en": "Can I use AllergyTJ offline?",
            "ru": "Можно ли использовать AllergyTJ без интернета?",
            "tj": "Оё AllergyTJ-ро бе интернет истифода бурдан мумкин аст?",
        },
        "a": {
            "en": "AllergyTJ is a Progressive Web App (PWA) that can be installed on your phone or desktop. Once installed, the app loads from cache even without internet. Offline mode shows seasonal pollen estimates without live weather adjustment. Full functionality resumes when connectivity returns.",
            "ru": "AllergyTJ — это прогрессивное веб-приложение (PWA), которое можно установить на телефон или компьютер. После установки приложение загружается из кэша даже без интернета. В офлайн-режиме показываются сезонные оценки пыльцы без корректировки по погоде. Полная функциональность возобновляется при восстановлении связи.",
            "tj": "AllergyTJ як барномаи веби пешқадам (PWA) аст, ки онро дар телефон ё компютер насб кардан мумкин аст. Пас аз насб, барнома аз кэш бе интернет ҳам кор мекунад. Режими офлайн баҳои мавсимии гардолудро бе танзими обу ҳаво нишон медиҳад. Функсияи пурра ҳангоми барқарорӣ интернет барқарор мешавад.",
        },
    },
    {
        "q": {
            "en": "What is the air quality in Dushanbe today?",
            "ru": "Какое качество воздуха в Душанбе сегодня?",
            "tj": "Сифати ҳаво дар Душанбе имрӯз чӣ гуна аст?",
        },
        "a": {
            "en": "AllergyTJ shows real-time air quality data for Dushanbe and 29 other cities in Tajikistan using the US AQI scale. Data comes from the Copernicus Atmosphere Monitoring Service (CAMS) and includes six pollutants: PM2.5, PM10, ozone (O₃), nitrogen dioxide (NO₂), sulfur dioxide (SO₂), and carbon monoxide (CO). Check the dashboard for the current AQI reading and per-pollutant breakdown.",
            "ru": "AllergyTJ показывает данные о качестве воздуха в Душанбе и 29 других городах Таджикистана в реальном времени по шкале US AQI. Данные поступают из Copernicus (CAMS) и включают шесть загрязнителей: PM2.5, PM10, озон (O₃), диоксид азота (NO₂), диоксид серы (SO₂) и угарный газ (CO). Проверьте панель для текущего показателя AQI и разбивки по загрязнителям.",
            "tj": "AllergyTJ маълумоти сифати ҳаворо барои Душанбе ва 29 шаҳри дигари Тоҷикистон дар вақти воқеӣ тибқи шкалаи US AQI нишон медиҳад. Маълумот аз Copernicus (CAMS) меояд ва шаш ифлоскунандаро дар бар мегирад: PM2.5, PM10, озон (O₃), диоксиди нитроген (NO₂), диоксиди сулфур (SO₂) ва монооксиди карбон (CO). Панелро барои хониши ҷории AQI ва тақсимоти ифлоскунандаҳо санҷед.",
        },
    },
    {
        "q": {
            "en": "Where can I check AQI in Tajikistan?",
            "ru": "Где можно проверить AQI в Таджикистане?",
            "tj": "AQI-ро дар Тоҷикистон дар куҷо санҷидан мумкин аст?",
        },
        "a": {
            "en": "AllergyTJ provides real-time US AQI data for 30 cities across Tajikistan, including Dushanbe, Khujand, Bokhtar, Kulob, and Khorog. Since Tajikistan has no public ground-based air quality monitoring stations, the data relies on satellite-based atmospheric modeling from the Copernicus Atmosphere Monitoring Service (CAMS). The app shows composite AQI and a breakdown of all six pollutants.",
            "ru": "AllergyTJ предоставляет данные US AQI в реальном времени для 30 городов Таджикистана, включая Душанбе, Худжанд, Бохтар, Куляб и Хорог. Поскольку в Таджикистане нет публичных наземных станций мониторинга качества воздуха, данные основаны на спутниковом атмосферном моделировании Copernicus (CAMS). Приложение показывает общий AQI и разбивку по всем шести загрязнителям.",
            "tj": "AllergyTJ маълумоти US AQI-ро дар вақти воқеӣ барои 30 шаҳри Тоҷикистон, аз ҷумла Душанбе, Хуҷанд, Бохтар, Кӯлоб ва Хоруғ пешниҳод мекунад. Азбаски Тоҷикистон истгоҳҳои мониторинги заминии сифати ҳаво надорад, маълумот ба моделсозии атмосфераи маҳваравии Copernicus (CAMS) такя мекунад. Барнома AQI-и умумӣ ва тақсимоти ҳамаи шаш ифлоскунандаро нишон медиҳад.",
        },
    },
    {
        "q": {
            "en": "Is air pollution bad in Tajikistan?",
            "ru": "Серьёзна ли проблема загрязнения воздуха в Таджикистане?",
            "tj": "Оё ифлосшавии ҳаво дар Тоҷикистон бад аст?",
        },
        "a": {
            "en": "Air quality in Tajikistan varies by season and location. Winter months often see elevated PM2.5 from heating and vehicle emissions in urban areas like Dushanbe. Summer can bring high ground-level ozone, especially at altitude. Agricultural burning in Khatlon and dust from arid regions also contribute. AllergyTJ tracks six pollutants in real time across 30 cities to help residents monitor conditions.",
            "ru": "Качество воздуха в Таджикистане зависит от сезона и местоположения. Зимой часто наблюдается повышенный PM2.5 от отопления и автомобилей в городах, таких как Душанбе. Летом может быть высокий приземный озон, особенно на высоте. Сельскохозяйственные сжигания в Хатлоне и пыль из засушливых регионов также вносят вклад. AllergyTJ отслеживает шесть загрязнителей в реальном времени по 30 городам.",
            "tj": "Сифати ҳаво дар Тоҷикистон аз рӯи мавсим ва ҷойгиршавӣ фарқ мекунад. Моҳҳои зимистон аксар вақт PM2.5-и баланд аз гармкунӣ ва партовҳои нақлиёт дар шаҳрҳо мисли Душанбе мушоҳида мешавад. Тобистон метавонад озони заминии баланд орад, махсусан дар баландӣ. Сӯзонидани кишоварзӣ дар Хатлон ва чанг аз минтақаҳои хушк низ саҳм мегузоранд. AllergyTJ шаш ифлоскунандаро дар вақти воқеӣ дар 30 шаҳр пайгирӣ мекунад.",
        },
    },
    {
        "q": {
            "en": "What are the most common allergies in Central Asia?",
            "ru": "Какие самые распространённые аллергии в Центральной Азии?",
            "tj": "Аллергияҳои маъмултарин дар Осиёи Марказӣ кадомҳоянд?",
        },
        "a": {
            "en": "In Tajikistan and Central Asia, the most common seasonal allergies are caused by poplar and cottonwood pollen (March–May), grasses (May–July), and mugwort/Artemisia (July–September). Poplar trees line most urban streets in Dushanbe and other cities. Chenopod (goosefoot) is also significant in agricultural lowlands like Khatlon. Desert dust can worsen symptoms year-round.",
            "ru": "В Таджикистане и Центральной Азии самые распространённые сезонные аллергии вызваны пыльцой тополя (март-май), злаков (май-июль) и полыни (июль-сентябрь). Тополя растут вдоль большинства городских улиц Душанбе и других городов. Марь (лебеда) также значительна в сельскохозяйственных низинах Хатлона. Пустынная пыль может усугублять симптомы круглый год.",
            "tj": "Дар Тоҷикистон ва Осиёи Марказӣ аллергияҳои мавсимии маъмултарин аз гардолуди сафедор (март-май), алафҳо (май-июл) ва шӯрхок/Artemisia (июл-сентябр) ба вуҷуд меоянд. Сафедорҳо дар аксари кӯчаҳои шаҳрии Душанбе ва дигар шаҳрҳо мерӯянд. Лӯбиёи саҳроӣ низ дар пастиҳои кишоварзии Хатлон муҳим аст. Чанги биёбон метавонад аломатҳоро дар тамоми сол бадтар кунад.",
        },
    },
    {
        "q": {
            "en": "How does AllergyTJ calculate and display air quality data?",
            "ru": "Как AllergyTJ рассчитывает и отображает данные о качестве воздуха?",
            "tj": "AllergyTJ маълумоти сифати ҳаворо чӣ тавр ҳисоб ва намоиш медиҳад?",
        },
        "a": {
            "en": "AllergyTJ uses AQI data from the Copernicus Atmosphere Monitoring Service (CAMS), a satellite-based atmospheric model with 45 km grid resolution updated every 12 hours — Tajikistan has no public ground-based air quality sensors. The composite US AQI shown is the highest sub-index across six pollutants (PM2.5, PM10, O₃, NO₂, SO₂, CO). PM2.5 is compared against the WHO 2021 24-hour guideline (15 µg/m³) and annual target (5 µg/m³). Most of Central Asia exceeds the annual target year-round due to regional dust and arid climate. Because CAMS models a regional average across 45 km grid cells, street-level air quality near roads and construction can be significantly worse than the satellite estimate.",
            "ru": "AllergyTJ использует данные AQI из Copernicus (CAMS) — спутниковой модели атмосферы с разрешением 45 км, обновляемой каждые 12 часов. В Таджикистане нет наземных датчиков качества воздуха. Показанный US AQI — наивысший подиндекс среди шести загрязнителей (PM2.5, PM10, O₃, NO₂, SO₂, CO). PM2.5 сравнивается с рекомендациями ВОЗ 2021: суточная норма (15 мкг/м³) и годовая цель (5 мкг/м³). Большая часть Центральной Азии превышает годовую цель круглый год из-за пыли и засушливого климата. CAMS моделирует среднее по ячейке 45 км, поэтому реальное качество воздуха вблизи дорог может быть значительно хуже.",
            "tj": "AllergyTJ маълумоти AQI-ро аз Copernicus (CAMS) истифода мебарад — модели атмосфераи маҳваравӣ бо ҳалли 45 км, ки ҳар 12 соат навсозӣ мешавад. Тоҷикистон сенсорҳои заминии сифати ҳаво надорад. US AQI-и нишондодашуда болотарин зериндекс аз миёни шаш ифлоскунанда (PM2.5, PM10, O₃, NO₂, SO₂, CO) аст. PM2.5 бо дастури СҶС 2021 муқоиса мешавад: меъёри 24-соата (15 мкг/м³) ва ҳадафи солона (5 мкг/м³). Аксари Осиёи Марказӣ ҳадафи солонаро дар тамоми сол аз сабаби чанг ва иқлими хушк зиёд мекунад. CAMS миёнаро дар ячейкаи 45 км модел мекунад, бинобар ин сифати воқеии ҳаво дар наздикии роҳҳо метавонад хеле бадтар бошад.",
        },
    },
]

BREADCRUMB_LABELS = {
    "en": {"home": "AllergyTJ", "dashboard": "Dashboard", "forecast": "Forecast", "regions": "Regions", "insights": "Insights"},
    "ru": {"home": "AllergyTJ", "dashboard": "Панель", "forecast": "Прогноз", "regions": "Регионы", "insights": "Полезное"},
    "tj": {"home": "AllergyTJ", "dashboard": "Асосӣ", "forecast": "Пешгӯӣ", "regions": "Минтақаҳо", "insights": "Маълумот"},
}


def load_translations(lang):
    path = os.path.join(SCRIPT_DIR, "lang", f"{lang}.json")
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def read_template():
    path = os.path.join(SCRIPT_DIR, "index.html")
    with open(path, encoding="utf-8") as f:
        return f.read()


def t(translations, key):
    return translations.get(key, key)


def build_faq_jsonld(lang):
    entities = []
    for faq in FAQ_DATA:
        entities.append({
            "@type": "Question",
            "name": faq["q"][lang],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq["a"][lang],
            },
        })
    return json.dumps(
        {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": entities},
        ensure_ascii=False,
        indent=2,
    )


def build_breadcrumb_jsonld(lang):
    cfg = LANG_CONFIG[lang]
    labels = BREADCRUMB_LABELS[lang]
    prefix = "" if lang == "tj" else f"/{lang}"
    items = [
        {"@type": "ListItem", "position": 1, "name": labels["home"], "item": f"{SITE_BASE}{cfg['url_prefix']}"},
        {"@type": "ListItem", "position": 2, "name": labels["dashboard"], "item": f"{SITE_BASE}{prefix}/"},
    ]
    return json.dumps(
        {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": items},
        ensure_ascii=False,
        indent=2,
    )


def replace_html_lang(html, lang):
    cfg = LANG_CONFIG[lang]
    return re.sub(r'<html\s+lang="[^"]*"', f'<html lang="{cfg["html_lang"]}"', html)


def replace_title(html, tr):
    title_text = t(tr, "title")
    html = re.sub(r"<title>[^<]*</title>", f"<title>{title_text}</title>", html)
    return html


def replace_meta(html, attr_match, new_content):
    """Replace content attribute of a meta tag identified by attr_match string."""
    pattern = re.compile(
        r'(<meta\s[^>]*?' + re.escape(attr_match) + r'[^>]*?\s+content=")[^"]*(")',
        re.IGNORECASE,
    )
    if not pattern.search(html):
        pattern = re.compile(
            r'(<meta\s[^>]*?content=")[^"]*("[^>]*?' + re.escape(attr_match) + r")",
            re.IGNORECASE,
        )
    return pattern.sub(lambda m: m.group(1) + new_content + m.group(2), html)


def replace_meta_by_id(html, elem_id, new_content):
    """Replace content attribute of a meta tag identified by its id."""
    pattern = re.compile(
        r'(<meta\s[^>]*?id="' + re.escape(elem_id) + r'"[^>]*?\s+content=")[^"]*(")',
        re.IGNORECASE,
    )
    if not pattern.search(html):
        pattern = re.compile(
            r'(<meta\s[^>]*?content=")[^"]*("[^>]*?id="' + re.escape(elem_id) + r'")',
            re.IGNORECASE,
        )
    return pattern.sub(lambda m: m.group(1) + new_content + m.group(2), html)


def replace_link_canonical(html, lang):
    cfg = LANG_CONFIG[lang]
    url = SITE_BASE + cfg["url_prefix"]
    return re.sub(
        r'(<link\s+rel="canonical"\s+href=")[^"]*(")',
        lambda m: m.group(1) + url + m.group(2),
        html,
    )


def replace_og_url(html, lang):
    cfg = LANG_CONFIG[lang]
    url = SITE_BASE + cfg["url_prefix"]
    return replace_meta(html, 'property="og:url"', url)


def replace_og_locale(html, lang):
    cfg = LANG_CONFIG[lang]
    return replace_meta(html, 'property="og:locale"', cfg["html_lang"])


def replace_og_image(html, lang):
    cfg = LANG_CONFIG[lang]
    img_url = SITE_BASE + cfg["og_image"]
    html = replace_meta_by_id(html, "og-image", img_url)
    html = replace_meta_by_id(html, "twitter-image", img_url)
    return html


def replace_jsonld_faq(html, lang):
    faq_json = build_faq_jsonld(lang)
    pattern = re.compile(
        r'(<script\s+type="application/ld\+json"\s+id="faqld">).*?(</script>)',
        re.DOTALL,
    )
    return pattern.sub(lambda m: m.group(1) + "\n" + faq_json + "\n" + m.group(2), html)


def replace_jsonld_breadcrumb(html, lang):
    bc_json = build_breadcrumb_jsonld(lang)
    pattern = re.compile(
        r'(<script\s+type="application/ld\+json"\s+id="breadcrumbld">).*?(</script>)',
        re.DOTALL,
    )
    return pattern.sub(lambda m: m.group(1) + "\n" + bc_json + "\n" + m.group(2), html)


def transform_head(html, lang, tr):
    cfg = LANG_CONFIG[lang]
    desc = t(tr, "meta.desc")
    keywords = t(tr, "meta.keywords")
    og_title = t(tr, "og.title")

    html = replace_html_lang(html, lang)
    html = replace_title(html, tr)

    # Meta description + keywords
    html = replace_meta_by_id(html, "meta-desc", desc)
    html = replace_meta_by_id(html, "meta-keywords", keywords)

    # OG tags
    html = replace_meta_by_id(html, "og-title", og_title)
    html = replace_meta_by_id(html, "og-desc", desc)
    html = replace_meta_by_id(html, "og-image-alt", og_title)
    html = replace_og_url(html, lang)
    html = replace_og_locale(html, lang)
    html = replace_og_image(html, lang)

    # Twitter tags
    html = replace_meta_by_id(html, "twitter-title", og_title)
    html = replace_meta_by_id(html, "twitter-desc", desc)

    # Canonical + hreflang (hreflang links are static — they always point to all 3)
    html = replace_link_canonical(html, lang)

    # JSON-LD
    html = replace_jsonld_faq(html, lang)
    html = replace_jsonld_breadcrumb(html, lang)

    return html


def build_lang(lang):
    tr = load_translations(lang)
    html = read_template()
    html = transform_head(html, lang, tr)
    return html


def write_output(lang, html):
    cfg = LANG_CONFIG[lang]
    out_path = os.path.join(DIST_DIR, cfg["out_path"])
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    return out_path


def main():
    print("build_html.py — Static HTML pre-generation")
    print(f"Output directory: {DIST_DIR}\n")

    for lang in ["tj", "en", "ru"]:
        html = build_lang(lang)
        out_path = write_output(lang, html)
        rel_path = os.path.relpath(out_path, SCRIPT_DIR)
        print(f"  [{lang.upper()}] {rel_path}")

    print("\nDone. Generated 3 language-specific HTML files.")


if __name__ == "__main__":
    main()
