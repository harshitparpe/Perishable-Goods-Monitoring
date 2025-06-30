import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    temp: "",
    humidity: "",
    hours_stored: "",
    days_to_expiry: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", {
        temp: parseFloat(formData.temp),
        humidity: parseInt(formData.humidity),
        hours_stored: parseInt(formData.hours_stored),
        days_to_expiry: parseInt(formData.days_to_expiry),
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Prediction failed. Is Flask server running?");
    }
  };

  return (
    <div className="container">
      <h1>Perishable Goods Spoilage Predictor</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="temp"
          type="number"
          step="0.1"
          placeholder="Temperature (°C)"
          value={formData.temp}
          onChange={handleChange}
          required
        />
        <input
          name="humidity"
          type="number"
          placeholder="Humidity (%)"
          value={formData.humidity}
          onChange={handleChange}
          required
        />
        <input
          name="hours_stored"
          type="number"
          placeholder="Hours Stored"
          value={formData.hours_stored}
          onChange={handleChange}
          required
        />
        <input
          name="days_to_expiry"
          type="number"
          placeholder="Days to Expiry"
          value={formData.days_to_expiry}
          onChange={handleChange}
          required
        />
        <button type="submit">Predict</button>
      </form>

      {result && (
        <div className="result">
          <p>
            <strong>Probability:</strong> {result.spoiled_probability}
          </p>
          <p>
            <strong>Recommendation:</strong> {result.recommendation}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
