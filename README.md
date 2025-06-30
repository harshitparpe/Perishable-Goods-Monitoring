# 🥦 Perishable Goods Monitoring System

An end-to-end machine learning + IoT simulation project to monitor spoilage risk of perishable items (like food and medicine) based on environmental and inventory factors.  
Built with **Flask (Python)** backend and a **React + Vite** frontend.

---

🚧 **Note:** This project is currently a _Work in Progress_. Some features may still be under development.

## 📘 Project Summary

### 🔍 Problem

High wastage in food and medicine occurs due to poor shelf-life management and lack of real-time monitoring.

### 💡 Solution

A smart expiry management dashboard powered by simulated IoT inputs and machine learning to:

- Predict spoilage probability
- Suggest discounts at the right time
- Provide combo suggestions for near-expiry goods
- Detect fridge failures and push those items for quick sell
- Trigger intra-store movement before expiry
- Flag stores with consistently high spoilage percentages

### 🧪 Mock Setup

This system uses virtual sensors or Python-based APIs to simulate real-time data, including:

- Temperature
- Humidity
- Storage duration
- Days to expiry
- Spoilage percentage

## 🚀 Features

- Simulates IoT sensor data (temperature, humidity, time stored, expiry)
- Trains a **Random Forest Classifier** to predict spoilage probability
- REST API to serve predictions
- React frontend to input parameters and display recommendations
- Recommendation logic:
  - `Quick Sell` if spoilage risk > 70%
  - `Monitor` otherwise

---

## 🛠️ Tech Stack

### Backend

- Python
- Flask
- Flask-CORS
- Scikit-learn
- Joblib
- NumPy, Pandas

### Frontend

- React
- Vite
- Axios

---

## 🔄 API Reference

**Endpoint:** `POST /predict`  
**Content-Type:** `application/json`  
**Request Body:**

```json
{
  "temp": float,
  "humidity": int,
  "hours_stored": int,
  "days_to_expiry": int
}
```

**Response:**

```json
{
  "spoiled_probability": float,
  "recommendation": "Quick Sell" | "Monitor"
}
```

---

## 📌 Future Improvements

- Store prediction history in database
- Add charts to visualize spoilage trends
- Deploy backend (Render) & frontend (Vercel)
- Integrate real-time IoT sensor data streams

---

## 📘 Project Overview

### 🔍 Problem

High wastage in food and medicine occurs due to poor shelf-life management and lack of real-time monitoring.

### 💡 Solution

A smart expiry management dashboard powered by simulated IoT inputs and ML prediction:

- Predict spoilage probability of perishable goods
- Suggest discounts at optimal times
- Recommend combo offerings to sell near-expiry stock
- Detect fridge failure and trigger “Quick Sell”
- Enable intra-store transfers to avoid spoilage
- Flag stores with high spoilage percentages

### 🧪 Mock Setup

- Uses virtual sensors or Python-based APIs to simulate inputs like temperature, humidity, hours stored, expiry window, and spoilage labels

## ✨ Contributors

- **Harshit Parpe** — Frontend, full-stack integration, & project setup
- **Abhinav Dubey** — Backend & Machine Learning

---

## 📄 License

This project is licensed under the MIT License.
