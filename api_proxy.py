"""Tajikistan Pollen Tracker — Simple Server.

Serves index.html. The frontend calls Open-Meteo directly (no API key needed).
"""

import os
from flask import Flask, send_file

app = Flask(__name__)


@app.route("/")
def index():
    return send_file("index.html")


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    print(f"Pollen Tracker running on http://localhost:{port}")
    app.run(debug=True, port=port)
