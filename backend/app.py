from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allows cross-origin requests

model = joblib.load('spoilage_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    input_data = np.array([
        data['temp'],
        data['humidity'],
        data['hours_stored'],
        data['days_to_expiry']
    ]).reshape(1, -1)

    probability = model.predict_proba(input_data)[0][1]

    return jsonify({
        'spoiled_probability': round(probability, 2),
        'recommendation': "Quick Sell" if probability > 0.7 else "Monitor"
    })

if __name__ == "__main__":
    app.run(debug=True)