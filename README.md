# 🥦 Perishable Goods Monitoring System

An end-to-end machine learning + IoT simulation project to monitor spoilage risk of perishable items (like food and medicine) based on environmental and inventory factors.  
Built with **Flask (Python)** backend and a **React + Vite** frontend.

---

🚧 **Note:** This project is currently a _Work in Progress_. Some features may still be under development.

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

## ✨ Author

**Harshit Parpe**  
💼 [LinkedIn](https://www.linkedin.com/in/harshit-parpe-3b0ab024a/) | 💻 [GitHub](https://github.com/harshitparpe)

---

## 📄 License

This project is licensed under the MIT License.
