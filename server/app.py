from flask import Flask, jsonify, render_template
import os
import flask

app = Flask(__name__,static_folder="../public",template_folder="../templates")



@app.route('/')
def openPage():
    return render_template('index.html')
    # return jsonify({"Hello":"World"})

if __name__ == "__main__":
    app.run(debug=True)