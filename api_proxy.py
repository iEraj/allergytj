"""AllergyTJ — Local Dev Server.

Serves index.html and static assets. The frontend calls Open-Meteo directly (no API key needed).
"""

import os
from flask import Flask, send_from_directory, after_this_request, request

app = Flask(__name__, static_folder=".", static_url_path="")


@app.after_request
def add_no_cache(response):
    response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate, max-age=0"
    return response


@app.route("/")
@app.route("/en/")
@app.route("/ru/")
@app.route("/tj/")
def index():
    return send_from_directory(".", "index.html")


@app.route("/privacy")
def privacy_tj():
    return send_from_directory(".", "privacy.html")


@app.route("/en/privacy")
def privacy_en():
    return send_from_directory(".", "privacy-en.html")


@app.route("/ru/privacy")
def privacy_ru():
    return send_from_directory(".", "privacy-ru.html")


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    print(f"AllergyTJ running on http://localhost:{port}")
    app.run(debug=True, port=port)
