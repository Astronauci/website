# -*- coding: utf-8 -*
from flask import Flask, render_template

app = Flask(__name__)

team = {
    u'Daniel Kosiński':'Lubie placki',
    'Krzysiek Wisniewski':'Lubie placki',
    'Marcin Bauer':'Lubie placki'
}

navigation = {
    'Zaloga': 'zaloga'
}

@app.route("/")
def main_page():
    return render_template('main.html', navigation=navigation)

@app.route("/zaloga")
def team_page():
    return render_template('zaloga.html', team=team, navigation=navigation)

if __name__ == "__main__":
    app.run()
