from flask import Blueprint, request, jsonify
import joblib
import numpy as np
from pymongo import MongoClient
import os

prediction_blueprint = Blueprint('prediction', __name__)

# Load trained model
model_path = os.path.join(os.path.dirname(__file__), '..', 'spoilage_model.pkl')
model = joblib.load(model_path)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client['perishable_monitoring']
products_collection = db['products']

@prediction_blueprint.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    input_data = np.array([
        data['temp'],
        data['humidity'],
        data['hours_stored'],
        data['days_to_expiry']
    ]).reshape(1, -1)

    probability = model.predict_proba(input_data)[0][1]

    # Store prediction in MongoDB
    product = {
        "product_name": data.get("product_name"),
        "category": data.get("category", "Other"),
        "temp": data['temp'],
        "humidity": data['humidity'],
        "hours_stored": data['hours_stored'],
        "days_to_expiry": data['days_to_expiry'],
        "spoiled_probability": probability
    }
    products_collection.insert_one(product)

    return jsonify({
    'spoiled_probability': round(probability * 100, 2),
    'recommendation': (
        "Quick Sell" if probability > 0.7
        else "Caution" if probability > 0.4
        else "Monitor"
    )
})

