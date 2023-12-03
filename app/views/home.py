from flask import Flask, Blueprint, render_template
from socketio import Server

blueprint = Blueprint("home", __name__, url_prefix="/")


@blueprint.route("/")
def home():
    return render_template("home.html")


def register(app: Flask, _: Server) -> None:
    app.register_blueprint(blueprint)
    return
