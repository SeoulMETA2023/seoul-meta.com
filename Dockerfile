FROM python:3.11
MAINTAINER piop2 pioooop2@gmail.com
LABEL authors="유승연"

WORKDIR /home

COPY wsgi.py /home
COPY requirements.txt /home
COPY app /home/app

RUN pip install -U pip
RUN pip install -r requirements.txt

EXPOSE 8000

ENTRYPOINT python wsgi.py