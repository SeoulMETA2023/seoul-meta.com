from flask import Flask
from socketio import Server, WSGIApp


def create_app() -> Flask:
    app = Flask(import_name="app", static_url_path="")
    sio = Server()
    app.wsgi_app = WSGIApp(sio, app.wsgi_app)

    return app
