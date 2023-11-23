from flask import Blueprint, render_template


def get_blueprint() -> Blueprint:
    blueprint = Blueprint("app", __name__, url_prefix="/")

    @blueprint.route("/")
    def home():
        return render_template("home.html")

    return blueprint
