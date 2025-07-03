from flask import Blueprint, jsonify
from pymongo import MongoClient

movement_blueprint = Blueprint('movement_alert', __name__)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client['perishable_monitoring']
products_collection = db['products']

@movement_blueprint.route('/movement-alerts', methods=['GET'])
def movement_alerts():
    # Find products with spoilage > 60%
    risky_products = list(products_collection.find({"spoiled_probability": {"$gt": 0.6}}))

    alerts = []
    for product in risky_products:
        alerts.append({
            "product_name": product["product_name"],
            "category": product.get("category", "Other"),
            "message": "Move to front shelf for quicker sale!"
        })

    return jsonify({
        "alerts": alerts,
        "count": len(alerts)
    })
