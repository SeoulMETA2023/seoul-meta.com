import importlib
import warnings
from typing import Callable

from flask import Flask, Blueprint
from socketio import Server, WSGIApp, Namespace

from app.exceptions.warning import ViewNotFound, EventNotFound

VIEWS: list[str] = ["home"]
EVENTS: list[str] = []


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
            get_blueprint: Callable[[], Blueprint] = getattr(module, "get_blueprint")
        except AttributeError:
            warnings.warn(f"{module_name}: get_blueprint() does not exist.", ViewNotFound)
        else:
            app.register_blueprint(get_blueprint())

    for event in EVENTS:
        module_name = f"app.events.{event}"
        try:
            module = importlib.import_module(module_name)
        except ModuleNotFoundError:
            warnings.warn(f"{module_name} does not exist.", EventNotFound)
            continue

        try:
            get_namespace: Callable[[], Namespace] = getattr(module, "get_namespace")
        except AttributeError:
            warnings.warn(f"{module_name}: get_namespace() does not exist.", EventNotFound)
        else:
            sio.register_namespace(get_namespace())

    return app


if __name__ == "__main__":
    create_app().run("0.0.0.0", debug=True)
