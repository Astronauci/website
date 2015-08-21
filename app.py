#!/usr/bin/env python3
# -*- coding: utf-8 -*
from flask import Flask, render_template

app = Flask(__name__)

team = {
    'Daniel Kosiński':'Lubię placki',
    'Krzysiek Wiśniewski':'Lubię placki',
    'Marcin Bauer':'Lubię placki'
}

navigation = {
    'Zaloga': 'zaloga',
    'Galeria': 'galeria',
    'O nas': 'onas'
}

@app.route("/")
def main_page():
    return render_template('main.html', navigation=navigation)

@app.route("/zaloga")
def team_page():
    return render_template('zaloga.html', team=team, navigation=navigation)

@app.route("/onas")
def about_page():
    return render_template('onas.html', navigation=navigation)

@app.route("/galeria")
def gallery_page():
    return render_template('galeria.html', navigation=navigation)

if __name__ == "__main__":
    app.run()
