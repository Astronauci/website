from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def main_page():
    return render_template('main.html')

@app.route("/zaloga")
def team_page():
    return render_template('zaloga.html')

if __name__ == "__main__":
    app.run(debug=True)