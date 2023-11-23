import importlib
import warnings
from typing import Callable

from flask import Flask
from socketio import Server, WSGIApp

from app.exceptions.warning import ViewNotFound, FailedToRegister

VIEWS: list[str] = ["home"]


def create_app() -> Flask:
    app = Flask(import_name="app", static_url_path="/static")
    sio = Server()
    app.wsgi_app = WSGIApp(sio, app.wsgi_app)

    for view in VIEWS:
        module_name = f"app.views.{view}"
        try:
            module = importlib.import_module(module_name)
        except ModuleNotFoundError:
            warnings.warn(f"{module_name} does not exist.", ViewNotFound)
            continue

        try:
            register: Callable[[Flask, Server], None] = getattr(module, "register")
        except AttributeError:
            warnings.warn(f"{module_name}: register() does not exist.", FailedToRegister)
        else:
            register(app, sio)

    return app
