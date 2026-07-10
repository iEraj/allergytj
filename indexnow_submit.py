#!/usr/bin/env python3
"""Submit all site URLs to IndexNow (Bing, Yandex, Naver, Seznam).

Run manually after deploy: python indexnow_submit.py
"""

import json
import urllib.request

SITE_BASE = "https://allergy.tj"
KEY = "0ccf34b16984487ba5a20b7d31f84d7a"

LANGS = ["", "/en", "/ru"]
TABS = ["", "/forecast", "/regions", "/insights"]
CITY_SLUGS = [
    "ayni", "bokhtar", "buston", "danghara", "dushanbe", "farkhor",
    "ghafurov", "guliston", "hamadoni", "hisor", "isfara", "ishkashim",
    "istaravshan", "khorog", "khujand", "konibodom", "kulob", "murghab",
    "norak", "obigarm", "panjakent", "rasht", "roghun", "shahritus",
    "spitamen", "tursunzoda", "vahdat", "vakhsh", "vose", "yovon",
]


def build_urls():
    urls = []
    for lang in LANGS:
        for tab in TABS:
            path = f"{lang}{tab}" or "/"
            urls.append(f"{SITE_BASE}{path}")
        for slug in CITY_SLUGS:
            prefix = lang if lang else ""
            urls.append(f"{SITE_BASE}{prefix}/city/{slug}")
    return urls


def submit():
    urls = build_urls()
    payload = json.dumps({
        "host": "allergy.tj",
        "key": KEY,
        "keyLocation": f"{SITE_BASE}/{KEY}.txt",
        "urlList": urls,
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://api.indexnow.org/indexnow",
        data=payload,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )

    try:
        resp = urllib.request.urlopen(req)
        print(f"IndexNow response: {resp.status} ({resp.reason})")
        print(f"Submitted {len(urls)} URLs")
    except urllib.error.HTTPError as e:
        print(f"IndexNow error: {e.code} {e.reason}")
        body = e.read().decode("utf-8", errors="replace")
        if body:
            print(body)


if __name__ == "__main__":
    submit()
