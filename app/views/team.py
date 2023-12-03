from flask import Flask, Blueprint, render_template
from socketio import Server

blueprint = Blueprint("team", __name__, url_prefix="/team/")


@blueprint.route("/")
def team():
    return "team"


@blueprint.route("/rocket")
def team_rocket():
    return "TM.rocket"


@blueprint.route("/car")
def team_car():
    return "TM.car"


@blueprint.route("/rover")
def team_rover():
    return "TM.rover"


@blueprint.route("/robot-arm")
def team_robot_arm():
    return "TM.robot arm"


@blueprint.route("/guide-bot")
def team_guide_bot():
    return "TM.guide bot"


@blueprint.route("/ball-balance")
def team_ball_balance():
    return "TM.ball balance"


def register(app: Flask, _: Server) -> None:
    app.register_blueprint(blueprint)
    return
