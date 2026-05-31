"""Tajikistan Pollen Tracker — Simple Server.

Serves index.html and static assets. The frontend calls Open-Meteo directly (no API key needed).
"""

import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder=".", static_url_path="")


@app.route("/")
@app.route("/en/")
@app.route("/ru/")
@app.route("/tj/")
def index():
    return send_from_directory(".", "index.html")


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    print(f"Pollen Tracker running on http://localhost:{port}")
    app.run(debug=True, port=port)
