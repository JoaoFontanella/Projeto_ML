from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

model = joblib.load("random_forest_model.joblib")
scaler = joblib.load("scaler.joblib")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    age = data["age"]
    sex = data["sex"]
    bmi = data["bmi"]
    children = data["children"]
    smoker = data["smoker"]
    region = data["region"]

    input_data = np.array([[age, sex, bmi, children, smoker, region]])
    input_data_scaled = scaler.transform(input_data)
    
    prediction = model.predict(input_data_scaled)
    result = {"prediction": float(prediction[0])}
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
