#!/usr/bin/env python3
"""
build_html.py — Static HTML pre-generation for SEO/crawlability.

Reads index.html as a template and lang/*.json translation files,
generates per-language HTML files with correct <head> sections so
every visitor (Googlebot, AI crawlers, humans) sees content-rich HTML.

Output: dist/index.html (Tajik), dist/en/index.html (EN), dist/ru/index.html (RU)

Usage: python build_html.py
"""

import datetime
import glob
import html as html_mod
import json
import os
import re
import shutil
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
            "en": "Based on our research as of 2026, we have not been able to identify any public pollen monitoring stations in Tajikistan. AllergyTJ estimates pollen risk by combining a seasonal calendar of known allergenic flora with live weather data, and also provides real-time air quality monitoring (US AQI) via EU Copernicus CAMS satellite data.",
            "ru": "По данным нашего исследования на 2026 год, в Таджикистане не удалось обнаружить ни одной публичной станции мониторинга пыльцы. AllergyTJ оценивает риск пыльцы, сочетая сезонный календарь известных аллергенных растений с данными погоды, а также предоставляет мониторинг качества воздуха (US AQI) на основе спутниковых данных EU Copernicus CAMS.",
            "tj": "Тибқи таҳқиқоти мо дар соли 2026, мо дар Тоҷикистон ягон истгоҳи мониторинги гардолуди оммавӣ пайдо карда натавонистем. AllergyTJ хатари гардолудро бо истифода аз тақвими мавсимии растаниҳои аллергенӣ ва маълумоти обу ҳавои зинда баҳо медиҳад, инчунин мониторинги сифати ҳаво (US AQI) тавассути маълумоти моҳворагии EU Copernicus CAMS пешниҳод мекунад.",
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


# ── Phase 1.2: Pre-rendered body content ──

CITIES_DATA = [
    {"idx": 0, "region": "khatlon", "elev": 390, "lat": 37.5882, "lng": 68.6589},
    {"idx": 1, "region": "khatlon", "elev": 430, "lat": 37.8364, "lng": 68.7650},
    {"idx": 2, "region": "sughd", "elev": 300, "lat": 40.2342, "lng": 69.6948},
    {"idx": 3, "region": "khatlon", "elev": 649, "lat": 38.0975, "lng": 69.3341},
    {"idx": 4, "region": "drs", "elev": 800, "lat": 38.5598, "lng": 68.7740},
    {"idx": 5, "region": "khatlon", "elev": 450, "lat": 37.4922, "lng": 69.4036},
    {"idx": 6, "region": "sughd", "elev": 400, "lat": 40.2187, "lng": 69.7247},
    {"idx": 7, "region": "sughd", "elev": 347, "lat": 40.2647, "lng": 69.7894},
    {"idx": 8, "region": "khatlon", "elev": 440, "lat": 37.6567, "lng": 69.6292},
    {"idx": 9, "region": "drs", "elev": 802, "lat": 38.5253, "lng": 68.5514},
    {"idx": 10, "region": "sughd", "elev": 863, "lat": 40.1265, "lng": 70.6253},
    {"idx": 11, "region": "gbao", "elev": 2535, "lat": 36.7167, "lng": 71.6167},
    {"idx": 12, "region": "sughd", "elev": 992, "lat": 39.9142, "lng": 69.0033},
    {"idx": 13, "region": "gbao", "elev": 2200, "lat": 37.5383, "lng": 71.5128},
    {"idx": 14, "region": "sughd", "elev": 300, "lat": 40.2833, "lng": 69.6333},
    {"idx": 15, "region": "sughd", "elev": 410, "lat": 40.2982, "lng": 70.4194},
    {"idx": 16, "region": "khatlon", "elev": 580, "lat": 37.9139, "lng": 69.8028},
    {"idx": 17, "region": "gbao", "elev": 3618, "lat": 38.1702, "lng": 73.9667},
    {"idx": 18, "region": "khatlon", "elev": 885, "lat": 38.3833, "lng": 69.3167},
    {"idx": 19, "region": "valleys", "elev": 1348, "lat": 38.7173, "lng": 69.7088},
    {"idx": 20, "region": "sughd", "elev": 996, "lat": 39.4952, "lng": 67.6093},
    {"idx": 21, "region": "valleys", "elev": 1355, "lat": 39.0287, "lng": 70.3745},
    {"idx": 22, "region": "valleys", "elev": 1230, "lat": 38.7826, "lng": 69.8708},
    {"idx": 23, "region": "khatlon", "elev": 367, "lat": 37.4000, "lng": 67.8333},
    {"idx": 24, "region": "sughd", "elev": 350, "lat": 40.1522, "lng": 69.3708},
    {"idx": 25, "region": "drs", "elev": 708, "lat": 38.5065, "lng": 68.2248},
    {"idx": 26, "region": "drs", "elev": 870, "lat": 38.5563, "lng": 69.0135},
    {"idx": 27, "region": "khatlon", "elev": 426, "lat": 37.7149, "lng": 68.8346},
    {"idx": 28, "region": "khatlon", "elev": 475, "lat": 37.8040, "lng": 69.6442},
    {"idx": 29, "region": "khatlon", "elev": 655, "lat": 38.3167, "lng": 69.0833},
]

SEASONAL_DATA = [
    {"key": "cal.0", "cat": "tree",  "months": [0,1,3,4,3,1,0,0,0,0,0,0]},
    {"key": "cal.1", "cat": "tree",  "months": [0,1,2,3,2,0,0,0,0,0,0,0]},
    {"key": "cal.2", "cat": "tree",  "months": [0,0,2,3,2,0,0,0,0,0,0,0]},
    {"key": "cal.3", "cat": "tree",  "months": [0,0,1,3,3,1,0,0,0,0,0,0]},
    {"key": "cal.4", "cat": "tree",  "months": [0,0,0,2,3,2,0,0,0,0,0,0]},
    {"key": "cal.5", "cat": "grass", "months": [0,0,0,1,3,4,3,1,0,0,0,0]},
    {"key": "cal.6", "cat": "weed",  "months": [0,0,0,0,0,1,2,4,4,2,0,0]},
    {"key": "cal.7", "cat": "weed",  "months": [0,0,0,0,0,1,3,4,3,1,0,0]},
    {"key": "cal.8", "cat": "weed",  "months": [0,0,0,0,0,0,1,3,3,1,0,0]},
]

INTENSITY_LABELS = {
    "en": ["—", "Low", "Moderate", "High", "Very High"],
    "ru": ["—", "Низкий", "Умеренный", "Высокий", "Очень высокий"],
    "tj": ["—", "Паст", "Мӯътадил", "Баланд", "Хеле баланд"],
}

REGION_ORDER = ["sughd", "khatlon", "drs", "gbao", "valleys"]

SEO_TITLES = {
    "faq": {
        "en": "Frequently Asked Questions",
        "ru": "Часто задаваемые вопросы",
        "tj": "Саволҳои маъмул",
    },
    "cities": {
        "en": "Cities Covered in Tajikistan",
        "ru": "Города Таджикистана",
        "tj": "Шаҳрҳои Тоҷикистон",
    },
    "allergens": {
        "en": "Seasonal Allergen Guide",
        "ru": "Сезонный справочник аллергенов",
        "tj": "Дастури аллергенҳои мавсимӣ",
    },
    "elev_label": {
        "en": "m elevation",
        "ru": "м высота",
        "tj": "м баландӣ",
    },
}

CAT_LABELS = {
    "tree": {"en": "Tree", "ru": "Дерево", "tj": "Дарахт"},
    "grass": {"en": "Grass", "ru": "Злак", "tj": "Алаф"},
    "weed": {"en": "Weed", "ru": "Сорняк", "tj": "Бегона"},
}


def _h(text):
    """HTML-escape text content."""
    return html_mod.escape(str(text), quote=False)


def translate_body(html, tr):
    """Replace text content of elements with data-i18n attributes."""
    def _replace(m):
        prefix = m.group(1)
        key = m.group(2)
        translated = tr.get(key)
        if translated is None:
            return m.group(0)
        return prefix + _h(translated) + "</"
    return re.sub(
        r'(data-i18n="([^"]+)"[^>]*>)[^<]*</',
        _replace,
        html,
    )


TJ_ALPHA = "АБВГҒДЕЁЖЗИӢЙКЛМНОПРСТУӮФХҲЧҶШЪЭЮЯ"


def _tj_sort_key(name):
    """Sort key using Tajik alphabet order."""
    return [TJ_ALPHA.index(c.upper()) if c.upper() in TJ_ALPHA else ord(c) + 1000
            for c in name]


def translate_options(html, tr, lang="tj"):
    """Translate <option> text inside the city-select dropdown and sort alphabetically."""
    select_match = re.search(
        r'(<select\s+id="city-select"[^>]*>)(.*?)(</select>)',
        html,
        re.DOTALL,
    )
    if not select_match:
        return html
    select_inner = select_match.group(2)
    # Extract all options, translate, collect as (translated_text, full_tag)
    options = []
    for m in re.finditer(r'<option\s+([^>]*)>([^<]*)</option>', select_inner):
        attrs = m.group(1)
        idx_match = re.search(r'data-idx="(\d+)"', attrs)
        idx = int(idx_match.group(1)) if idx_match else len(options)
        city_name = tr.get(f"city.{idx}", m.group(2))
        options.append((city_name, f"<option {attrs}>{_h(city_name)}</option>"))
    # Sort: Tajik uses custom alphabet key, others use default string sort
    if lang == "tj":
        options.sort(key=lambda x: _tj_sort_key(x[0]))
    else:
        options.sort(key=lambda x: x[0])
    new_inner = "\n      " + "\n      ".join(tag for _, tag in options) + "\n    "
    return html[:select_match.start(2)] + new_inner + html[select_match.end(2):]


def build_faq_html(lang):
    """Build visible FAQ section with <details>/<summary> elements."""
    lines = []
    for faq in FAQ_DATA:
        q = _h(faq["q"][lang])
        a = _h(faq["a"][lang])
        lines.append(f"  <details><summary>{q}</summary><p>{a}</p></details>")
    return "\n".join(lines)


def build_city_directory_html(lang, tr):
    """Build city directory grouped by region."""
    grouped = {}
    for city in CITIES_DATA:
        r = city["region"]
        if r not in grouped:
            grouped[r] = []
        name_full = tr.get(f"city.{city['idx']}", f"City {city['idx']}")
        name = name_full.split(",")[0].strip()
        grouped[r].append((name, city["elev"]))

    elev_label = SEO_TITLES["elev_label"][lang]
    lines = []
    for region in REGION_ORDER:
        cities = grouped.get(region, [])
        if not cities:
            continue
        region_name = _h(tr.get(f"region.{region}.full", region))
        lines.append(f"  <h4>{region_name}</h4>")
        lines.append("  <ul>")
        for name, elev in sorted(cities, key=lambda c: c[0]):
            lines.append(f"    <li>{_h(name)} — {elev} {_h(elev_label)}</li>")
        lines.append("  </ul>")
    return "\n".join(lines)


def build_allergen_guide_html(lang, tr):
    """Build allergen table with species and monthly intensity."""
    months = [_h(tr.get(f"month.{i}", "")) for i in range(12)]
    labels = INTENSITY_LABELS[lang]

    lines = []
    lines.append('  <table class="seo-allergen-table">')
    lines.append("    <thead><tr>")
    lines.append(f"      <th></th>")
    for m in months:
        lines.append(f"      <th>{m}</th>")
    lines.append("    </tr></thead>")
    lines.append("    <tbody>")
    for sp in SEASONAL_DATA:
        name = _h(tr.get(sp["key"], sp["key"]))
        cat = CAT_LABELS[sp["cat"]][lang]
        lines.append("    <tr>")
        lines.append(f'      <td><strong>{name}</strong> <small>({_h(cat)})</small></td>')
        for val in sp["months"]:
            label = labels[val]
            cls = ["seo-none", "seo-low", "seo-mod", "seo-high", "seo-vhigh"][val]
            lines.append(f'      <td class="{cls}" title="{_h(label)}">{_h(label)}</td>')
        lines.append("    </tr>")
    lines.append("    </tbody>")
    lines.append("  </table>")
    return "\n".join(lines)


def build_seo_section(lang, tr):
    """Build the complete pre-rendered SEO content section."""
    faq_title = _h(SEO_TITLES["faq"][lang])
    cities_title = _h(SEO_TITLES["cities"][lang])
    allergens_title = _h(SEO_TITLES["allergens"][lang])

    faq_html = build_faq_html(lang)
    cities_html = build_city_directory_html(lang, tr)
    allergen_html = build_allergen_guide_html(lang, tr)

    return f"""
<!-- Pre-rendered SEO content — removed by app.js on load -->
<section id="seo-content" class="container">
<h2 class="section-title">{faq_title}</h2>
<div class="seo-faq">
{faq_html}
</div>

<h2 class="section-title">{cities_title}</h2>
<div class="seo-cities">
{cities_html}
</div>

<h2 class="section-title">{allergens_title}</h2>
<div class="seo-allergens">
{allergen_html}
</div>
</section>
"""


SEO_CSS = """
/* SEO pre-rendered content (hidden when JS loads) */
#seo-content { padding: 24px 16px; }
#seo-content .seo-faq details { margin-bottom: 8px; border: 1px solid var(--border, #e0e0e0); border-radius: 8px; padding: 0; }
#seo-content .seo-faq summary { padding: 12px 16px; cursor: pointer; font-weight: 600; }
#seo-content .seo-faq details p { padding: 0 16px 12px; margin: 0; color: var(--on-surface-variant, #666); }
#seo-content .seo-cities h4 { margin: 16px 0 4px; }
#seo-content .seo-cities ul { margin: 0 0 8px; padding-left: 20px; }
#seo-content .seo-cities li { margin: 2px 0; }
.seo-allergen-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; overflow-x: auto; display: block; }
.seo-allergen-table th, .seo-allergen-table td { padding: 6px 8px; text-align: center; border: 1px solid var(--border, #e0e0e0); white-space: nowrap; }
.seo-allergen-table td:first-child { text-align: left; }
.seo-allergen-table .seo-none { color: #999; }
.seo-allergen-table .seo-low { background: #e8f5e9; color: #2e7d32; }
.seo-allergen-table .seo-mod { background: #fff9c4; color: #f57f17; }
.seo-allergen-table .seo-high { background: #ffe0b2; color: #e65100; }
.seo-allergen-table .seo-vhigh { background: #ffcdd2; color: #b71c1c; }
"""


def inject_seo_content(html, lang, tr):
    """Insert the SEO section before </main>."""
    seo = build_seo_section(lang, tr)
    return html.replace("</main>", seo + "\n</main>", 1)


def inject_seo_css(html):
    """Inject SEO section CSS before the closing </style> tag."""
    return html.replace("</style>", SEO_CSS + "</style>", 1)


def replace_nav_hrefs(html, lang):
    """Replace nav href attributes with correct language-prefixed paths."""
    prefix = "" if lang == "tj" else f"/{lang}"
    dash_path = prefix + "/" if prefix else "/"
    tab_map = {
        "/dashboard": dash_path,
        "/forecast": prefix + "/forecast",
        "/regions": prefix + "/regions",
        "/insights": prefix + "/insights",
    }
    for old_path, new_path in tab_map.items():
        html = html.replace(f'href="{old_path}"', f'href="{new_path}"')
    if prefix:
        html = html.replace(
            'href="/" class="nav-brand"',
            f'href="{dash_path}" class="nav-brand"',
        )
        html = html.replace(
            'href="/regions" id="dash-view-all"',
            f'href="{prefix}/regions" id="dash-view-all"',
        )
    return html


def build_lang(lang):
    tr = load_translations(lang)
    html = read_template()
    html = transform_head(html, lang, tr)
    html = translate_body(html, tr)
    html = translate_options(html, tr, lang)
    html = replace_nav_hrefs(html, lang)
    html = inject_seo_content(html, lang, tr)
    html = inject_seo_css(html)
    return html


def write_output(lang, html):
    cfg = LANG_CONFIG[lang]
    out_path = os.path.join(DIST_DIR, cfg["out_path"])
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    return out_path


# ── P2: Per-city landing pages ──

CITY_SLUGS = [
    "balkh", "bokhtar", "buston", "danghara", "dushanbe",
    "farkhor", "ghafurov", "guliston", "hamadoni", "hisor",
    "isfara", "ishkashim", "istaravshan", "khorog", "khujand",
    "konibodom", "kulob", "murghab", "norak", "obigarm",
    "panjakent", "rasht", "roghun", "shahritus", "spitamen",
    "tursunzoda", "vahdat", "vakhsh", "vose", "yovon",
]

REGION_MULTIPLIERS = {
    "drs":     {"tree": 1.0, "grass": 1.0, "weed": 1.0},
    "khatlon": {"tree": 0.8, "grass": 1.3, "weed": 1.1},
    "sughd":   {"tree": 1.0, "grass": 1.1, "weed": 0.9},
    "gbao":    {"tree": 0.3, "grass": 0.3, "weed": 0.4},
    "valleys": {"tree": 0.8, "grass": 0.7, "weed": 0.9},
}

CITY_SEO_TITLE = {
    "en": "Allergy in {city} Today — Pollen Forecast & AQI — AllergyTJ",
    "ru": "Аллергия в {city} сегодня — пыльца и качество воздуха — AllergyTJ",
    "tj": "Аллергия дар {city} имрӯз — гардолуд ва сифати ҳаво — AllergyTJ",
}

CITY_SEO_DESC = {
    "en": "Live pollen risk and air quality in {city}, Tajikistan. Check today's allergen levels, 5-day forecast, and US AQI before going outside. {region}, {elev} m.",
    "ru": "Уровень пыльцы и качество воздуха в {city} сейчас. Прогноз аллергенов на 5 дней, индекс AQI — проверьте перед выходом. {region}, {elev} м.",
    "tj": "Сатҳи гардолуд ва сифати ҳаво дар {city} ҳозир. Пешгӯии аллергенҳо барои 5 рӯз, индекси AQI — пеш аз баромадан санҷед. {region}, {elev} м.",
}

CITY_SEO_HEADING = {
    "en": "Pollen Risk & Air Quality in {city}",
    "ru": "Риск пыльцы и качество воздуха: {city}",
    "tj": "Хатари гардолуд ва сифати ҳаво: {city}",
}

CITY_SEO_INTRO = {
    "en": "{city} is located in {region} at {elev}m elevation. Bloom timing shifts by approximately {shift_days} days compared to Dushanbe (800m baseline) due to elevation differences (Hopkins' Bioclimatic Law: ~2 days per 100m).",
    "ru": "{city} расположен в регионе {region} на высоте {elev} м. Сроки цветения сдвигаются примерно на {shift_days} дней по сравнению с Душанбе (базовые 800 м) из-за разницы высот (закон Хопкинса: ~2 дня на 100 м).",
    "tj": "{city} дар {region} дар баландии {elev} м ҷойгир аст. Вақти гулкунӣ тақрибан {shift_days} рӯз нисбат ба Душанбе (800 м) фарқ мекунад аз сабаби фарқи баландӣ (Қонуни Хопкинс: ~2 рӯз дар 100 м).",
}

CITY_SEO_INTRO_BASELINE = {
    "en": "{city} is located in {region} at {elev}m elevation. It serves as the bloom timing baseline for all cities in Tajikistan (Hopkins' Bioclimatic Law: ~2 days shift per 100m elevation difference).",
    "ru": "{city} расположен в регионе {region} на высоте {elev} м. Является базовой точкой для расчёта сроков цветения по всему Таджикистану (закон Хопкинса: ~2 дня сдвига на 100 м разницы высот).",
    "tj": "{city} дар {region} дар баландии {elev} м ҷойгир аст. Ҳамчун нуқтаи асосӣ барои ҳисоб кардани вақти гулкунӣ дар тамоми Тоҷикистон хизмат мекунад (Қонуни Хопкинс: ~2 рӯз тағйирот дар ҳар 100 м фарқи баландӣ).",
}

CITY_SEO_DOMINANT = {
    "en": "Dominant allergen categories",
    "ru": "Основные категории аллергенов",
    "tj": "Категорияҳои асосии аллергенҳо",
}

CITY_SEO_CTA = {
    "en": "View real-time pollen and air quality data for {city} on the dashboard above.",
    "ru": "Смотрите данные о пыльце и качестве воздуха для {city} на панели выше.",
    "tj": "Маълумоти гардолуд ва сифати ҳаворо барои {city} дар панели боло бинед.",
}


def get_city_name(tr, city_idx):
    """Get short city name (without region suffix)."""
    full = tr.get(f"city.{city_idx}", CITY_SLUGS[city_idx].title())
    return full.split(",")[0].strip()


def compute_bloom_shift(elev):
    """Hopkins' Bioclimatic Law: ~2 days per 100m from Dushanbe (800m)."""
    return round(abs(elev - 800) / 100 * 2)


def get_dominant_allergens(region, lang):
    """Return sorted list of (category_label, multiplier) for a region."""
    mults = REGION_MULTIPLIERS[region]
    cats = sorted(mults.items(), key=lambda x: -x[1])
    return [(CAT_LABELS[cat][lang], round(mult, 1)) for cat, mult in cats]


def build_city_seo_html(city_idx, lang, tr):
    """Build city-specific SEO content section."""
    city = CITIES_DATA[city_idx]
    region = city["region"]
    elev = city["elev"]
    city_name = get_city_name(tr, city_idx)
    region_name = tr.get(f"region.{region}.full", region)
    shift = compute_bloom_shift(elev)

    heading = _h(CITY_SEO_HEADING[lang].format(city=city_name))
    if shift == 0:
        intro = _h(CITY_SEO_INTRO_BASELINE[lang].format(
            city=city_name, region=region_name, elev=elev,
        ))
    else:
        intro = _h(CITY_SEO_INTRO[lang].format(
            city=city_name, region=region_name, elev=elev, shift_days=shift,
        ))
    dominant_label = _h(CITY_SEO_DOMINANT[lang])
    cta = _h(CITY_SEO_CTA[lang].format(city=city_name))

    dom_items = []
    for label, mult in get_dominant_allergens(region, lang):
        dom_items.append(f"    <li>{_h(label)} — {mult}×</li>")

    months = [_h(tr.get(f"month.{i}", "")) for i in range(12)]
    labels = INTENSITY_LABELS[lang]
    mults = REGION_MULTIPLIERS[region]
    cat_mult_map = {"tree": mults["tree"], "grass": mults["grass"], "weed": mults["weed"]}

    table_rows = []
    for sp in SEASONAL_DATA:
        name = _h(tr.get(sp["key"], sp["key"]))
        cat = CAT_LABELS[sp["cat"]][lang]
        mult = cat_mult_map[sp["cat"]]
        table_rows.append("    <tr>")
        table_rows.append(f'      <td><strong>{name}</strong> <small>({_h(cat)} {mult}×)</small></td>')
        for val in sp["months"]:
            adjusted = min(4, round(val * mult))
            label = labels[adjusted]
            cls = ["seo-none", "seo-low", "seo-mod", "seo-high", "seo-vhigh"][adjusted]
            table_rows.append(f'      <td class="{cls}" title="{_h(label)}">{_h(label)}</td>')
        table_rows.append("    </tr>")

    allergens_title = _h(SEO_TITLES["allergens"][lang])

    return f"""
<!-- Pre-rendered city SEO content — removed by app.js on load -->
<section id="seo-content" class="container">
<h2 class="section-title">{heading}</h2>
<p>{intro}</p>

<h3>{dominant_label}</h3>
<ul>
{chr(10).join(dom_items)}
</ul>

<h3>{allergens_title}</h3>
<table class="seo-allergen-table">
    <thead><tr>
      <th></th>
{"".join(f"      <th>{m}</th>{chr(10)}" for m in months)}    </tr></thead>
    <tbody>
{chr(10).join(table_rows)}
    </tbody>
</table>

<p>{cta}</p>

{build_nearby_cities_html(city_idx, lang, tr)}
</section>
"""


NEARBY_CITIES_HEADING = {
    "en": "Other cities in {region}",
    "ru": "Другие города в регионе {region}",
    "tj": "Шаҳрҳои дигар дар {region}",
}


def build_nearby_cities_html(city_idx, lang, tr):
    """Build internal links to other cities in the same region."""
    city = CITIES_DATA[city_idx]
    same_region = [c for c in CITIES_DATA if c["region"] == city["region"] and c["idx"] != city_idx]
    if not same_region:
        return ""
    same_region.sort(key=lambda c: abs(c["elev"] - city["elev"]))
    nearby = same_region[:6]

    region_name = tr.get(f"region.{city['region']}.full", city["region"])
    heading = _h(NEARBY_CITIES_HEADING[lang].format(region=region_name))
    prefix = "" if lang == "tj" else f"/{lang}"

    links = []
    for c in nearby:
        name = get_city_name(tr, c["idx"])
        slug = CITY_SLUGS[c["idx"]]
        links.append(f'  <li><a href="{prefix}/city/{slug}">{_h(name)}</a> ({c["elev"]}m)</li>')

    return f'<h3>{heading}</h3>\n<ul>\n{chr(10).join(links)}\n</ul>'


def select_city_in_dropdown(html, city_idx):
    """Move the 'selected' attribute to the option with matching data-idx."""
    html = html.replace(" selected>", ">", 1)
    def _add_selected(m):
        if f'data-idx="{city_idx}"' in m.group(0):
            return m.group(0).replace("<option ", "<option selected ", 1)
        return m.group(0)
    return re.sub(r'<option [^>]*>[^<]*</option>', _add_selected, html)


def build_city_jsonld(city_idx, lang, tr):
    """Build city-specific JSON-LD (Place + WebPage) for AI answer engines."""
    city = CITIES_DATA[city_idx]
    slug = CITY_SLUGS[city_idx]
    city_name = get_city_name(tr, city_idx)
    region_name = tr.get(f"region.{city['region']}.full", city["region"])
    prefix = "" if lang == "tj" else f"/{lang}"
    url = f"{SITE_BASE}{prefix}/city/{slug}"

    ld = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": CITY_SEO_TITLE[lang].format(city=city_name),
        "url": url,
        "description": CITY_SEO_DESC[lang].format(
            city=city_name, region=region_name, elev=city["elev"],
        ),
        "about": {
            "@type": "Place",
            "name": city_name,
            "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": f"{region_name}, Tajikistan",
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": city["lat"],
                "longitude": city["lng"],
                "elevation": city["elev"],
            },
        },
        "mainEntity": {
            "@type": "Dataset",
            "name": f"Pollen Risk & Air Quality Data — {city_name}",
            "description": f"Seasonal pollen calendar and real-time air quality tracking for {city_name}, Tajikistan",
            "spatialCoverage": {"@type": "Place", "name": f"{city_name}, Tajikistan"},
        },
    }
    return f'<script type="application/ld+json">\n{json.dumps(ld, ensure_ascii=False, indent=2)}\n</script>'


def city_page_url(lang, slug):
    """Build the canonical URL for a city page."""
    prefix = "" if lang == "tj" else f"/{lang}"
    return f"{SITE_BASE}{prefix}/city/{slug}"


def build_city_page(lang, city_idx, base_html, tr):
    """Generate a city-specific HTML page from the pre-built base."""
    city = CITIES_DATA[city_idx]
    slug = CITY_SLUGS[city_idx]
    city_name = get_city_name(tr, city_idx)
    region_name = tr.get(f"region.{city['region']}.full", city["region"])

    html = base_html

    title = CITY_SEO_TITLE[lang].format(city=city_name)
    html = re.sub(r"<title>[^<]*</title>", f"<title>{_h(title)}</title>", html)

    desc = CITY_SEO_DESC[lang].format(
        city=city_name, region=region_name, elev=city["elev"],
    )
    html = replace_meta_by_id(html, "meta-desc", desc)

    og_title = CITY_SEO_TITLE[lang].format(city=city_name)
    html = replace_meta_by_id(html, "og-title", og_title)
    html = replace_meta_by_id(html, "og-desc", desc)
    html = replace_meta_by_id(html, "og-image-alt", og_title)
    html = replace_meta_by_id(html, "twitter-title", og_title)
    html = replace_meta_by_id(html, "twitter-desc", desc)

    canonical = city_page_url(lang, slug)
    html = re.sub(
        r'(<link\s+rel="canonical"\s+href=")[^"]*(")',
        lambda m: m.group(1) + canonical + m.group(2),
        html,
    )
    html = replace_meta(html, 'property="og:url"', canonical)

    # Fix hreflang to point to city page equivalents in other languages
    tj_city_url = city_page_url("tj", slug)
    en_city_url = city_page_url("en", slug)
    ru_city_url = city_page_url("ru", slug)
    html = re.sub(
        r'(<link\s+rel="alternate"\s+hreflang="en"\s+href=")[^"]*(")',
        lambda m: m.group(1) + en_city_url + m.group(2), html,
    )
    html = re.sub(
        r'(<link\s+rel="alternate"\s+hreflang="ru"\s+href=")[^"]*(")',
        lambda m: m.group(1) + ru_city_url + m.group(2), html,
    )
    html = re.sub(
        r'(<link\s+rel="alternate"\s+hreflang="tg"\s+href=")[^"]*(")',
        lambda m: m.group(1) + tj_city_url + m.group(2), html,
    )
    html = re.sub(
        r'(<link\s+rel="alternate"\s+hreflang="x-default"\s+href=")[^"]*(")',
        lambda m: m.group(1) + tj_city_url + m.group(2), html,
    )

    # Fix geo meta tags to reflect this city's coordinates
    lat = city["lat"]
    lng = city["lng"]
    html = re.sub(
        r'(<meta\s+name="geo\.placename"\s+content=")[^"]*(")',
        lambda m: m.group(1) + _h(city_name) + m.group(2), html,
    )
    html = re.sub(
        r'(<meta\s+name="geo\.position"\s+content=")[^"]*(")',
        lambda m: m.group(1) + f"{lat};{lng}" + m.group(2), html,
    )
    html = re.sub(
        r'(<meta\s+name="ICBM"\s+content=")[^"]*(")',
        lambda m: m.group(1) + f"{lat}, {lng}" + m.group(2), html,
    )

    html = select_city_in_dropdown(html, city_idx)

    city_seo = build_city_seo_html(city_idx, lang, tr)
    html = re.sub(
        r'<!-- Pre-rendered SEO content.*?</section>\s*',
        city_seo,
        html,
        flags=re.DOTALL,
    )

    # Inject city-specific JSON-LD before closing </head>
    city_ld = build_city_jsonld(city_idx, lang, tr)
    html = html.replace("</head>", city_ld + "\n</head>", 1)

    return html


def write_city_page(lang, city_idx, html):
    """Write a city page HTML file to dist/."""
    slug = CITY_SLUGS[city_idx]
    prefix = "" if lang == "tj" else f"{lang}/"
    out_path = os.path.join(DIST_DIR, prefix, "city", slug, "index.html")
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    return out_path


# ── Sitemap generation ──

def build_sitemap():
    """Generate sitemap.xml with home pages, tab pages, and city pages."""
    today = datetime.date.today().isoformat()
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
        '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ]

    def _hreflang_links(tj_path, en_path, ru_path):
        return [
            f'    <xhtml:link rel="alternate" hreflang="en" href="{SITE_BASE}{en_path}"/>',
            f'    <xhtml:link rel="alternate" hreflang="ru" href="{SITE_BASE}{ru_path}"/>',
            f'    <xhtml:link rel="alternate" hreflang="tg" href="{SITE_BASE}{tj_path}"/>',
            f'    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE_BASE}{tj_path}"/>',
        ]

    def _url_entry(loc, tj_path, en_path, ru_path, priority, changefreq="daily"):
        entry = [f"  <url>", f"    <loc>{SITE_BASE}{loc}</loc>"]
        entry.extend(_hreflang_links(tj_path, en_path, ru_path))
        entry.extend([
            f"    <lastmod>{today}</lastmod>",
            f"    <changefreq>{changefreq}</changefreq>",
            f"    <priority>{priority}</priority>",
            "  </url>",
        ])
        return entry

    # Home pages
    for tj, en, ru, prio in [("/", "/en/", "/ru/", "1.0")]:
        lines.extend(_url_entry(tj, tj, en, ru, prio))
        lines.extend(_url_entry(en, tj, en, ru, prio))
        lines.extend(_url_entry(ru, tj, en, ru, prio))

    # Tab pages
    for tab, prio, freq in [("forecast", "0.8", "daily"), ("regions", "0.8", "daily"), ("insights", "0.7", "weekly")]:
        tj_p, en_p, ru_p = f"/{tab}", f"/en/{tab}", f"/ru/{tab}"
        lines.extend(_url_entry(tj_p, tj_p, en_p, ru_p, prio, freq))
        lines.extend(_url_entry(en_p, tj_p, en_p, ru_p, prio, freq))
        lines.extend(_url_entry(ru_p, tj_p, en_p, ru_p, prio, freq))

    # City pages
    for slug in CITY_SLUGS:
        tj_p = f"/city/{slug}"
        en_p = f"/en/city/{slug}"
        ru_p = f"/ru/city/{slug}"
        lines.extend(_url_entry(tj_p, tj_p, en_p, ru_p, "0.7"))
        lines.extend(_url_entry(en_p, tj_p, en_p, ru_p, "0.7"))
        lines.extend(_url_entry(ru_p, tj_p, en_p, ru_p, "0.7"))

    lines.append("</urlset>")
    return "\n".join(lines) + "\n"


# ── Static asset copying ──

COPY_FILES = [
    "app.js",
    "sw.js",
    "manifest.json",
    "robots.txt",
    "og-image.png",
    "og-image.svg",
    "og-image-en.png",
    "og-image-en.svg",
    "og-image-ru.png",
    "og-image-ru.svg",
    "0ccf34b16984487ba5a20b7d31f84d7a.txt",
]

COPY_DIRS = [
    "icons",
    "lang",
]


def copy_static_assets():
    """Copy static assets into dist/ so it's a complete deployable directory."""
    copied = 0
    for fname in COPY_FILES:
        src = os.path.join(SCRIPT_DIR, fname)
        if os.path.exists(src):
            shutil.copy2(src, os.path.join(DIST_DIR, fname))
            copied += 1
    for dirname in COPY_DIRS:
        src = os.path.join(SCRIPT_DIR, dirname)
        dst = os.path.join(DIST_DIR, dirname)
        if os.path.isdir(src):
            if os.path.exists(dst):
                shutil.rmtree(dst)
            shutil.copytree(src, dst)
            copied += 1
    return copied


def main():
    print("build_html.py — Static HTML pre-generation")
    print(f"Output directory: {DIST_DIR}\n")

    # Home pages (3 languages)
    base_pages = {}
    for lang in ["tj", "en", "ru"]:
        html = build_lang(lang)
        out_path = write_output(lang, html)
        rel_path = os.path.relpath(out_path, SCRIPT_DIR)
        print(f"  [{lang.upper()}] {rel_path}")
        base_pages[lang] = html

    # City pages (30 cities × 3 languages)
    city_count = 0
    for lang in ["tj", "en", "ru"]:
        tr = load_translations(lang)
        for idx in range(len(CITIES_DATA)):
            city_html = build_city_page(lang, idx, base_pages[lang], tr)
            write_city_page(lang, idx, city_html)
            city_count += 1
    print(f"  Generated {city_count} city pages")

    # Sitemap
    sitemap = build_sitemap()
    sitemap_path = os.path.join(DIST_DIR, "sitemap.xml")
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(sitemap)
    print(f"  Generated sitemap.xml ({len(CITY_SLUGS) * 3 + 12} URLs)")

    n = copy_static_assets()
    print(f"  Copied {n} static assets to dist/")
    print("\nDone.")


if __name__ == "__main__":
    main()
