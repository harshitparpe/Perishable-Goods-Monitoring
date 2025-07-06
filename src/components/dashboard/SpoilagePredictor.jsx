import React, { useState } from 'react'
import { Brain, Calculator } from 'lucide-react'
import './SpoilagePredictor.css'

const SpoilagePredictor = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    temperature: '20',
    humidity: '60',
    hoursStored: '24',
    daysToExpiry: '7'
  })
  
  const [prediction, setPrediction] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock prediction logic
      const temp = parseFloat(formData.temperature)
      const humidity = parseFloat(formData.humidity)
      const hours = parseFloat(formData.hoursStored)
      const days = parseFloat(formData.daysToExpiry)
      
      // Simple risk calculation
      let riskScore = 0
      if (temp > 15) riskScore += 30
      if (humidity > 80) riskScore += 20
      if (hours > 48) riskScore += 15
      if (days <= 2) riskScore += 25
      
      const spoilageProbability = Math.min(riskScore + Math.random() * 10, 95)
      
      let recommendation = 'Monitor'
      if (spoilageProbability > 70) recommendation = 'Quick Sell'
      else if (spoilageProbability > 40) recommendation = 'Caution'
      
      setPrediction({
        spoiled_probability: spoilageProbability.toFixed(1),
        recommendation
      })
    } catch (err) {
      setError('Failed to get prediction. Please check if the backend server is running.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="dashboard-card spoilage-predictor">
      <div className="card-header">
        <div className="card-title">
          <Brain size={20} />
          Spoilage Prediction
        </div>
      </div>

      <form onSubmit={handleSubmit} className="prediction-form">
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Temperature (°C)</label>
            <input
              type="number"
              name="temperature"
              value={formData.temperature}
              onChange={handleInputChange}
              className="form-input"
              min="-20"
              max="50"
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Humidity (%)</label>
            <input
              type="number"
              name="humidity"
              value={formData.humidity}
              onChange={handleInputChange}
              className="form-input"
              min="0"
              max="100"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Hours Stored</label>
            <input
              type="number"
              name="hoursStored"
              value={formData.hoursStored}
              onChange={handleInputChange}
              className="form-input"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Days to Expiry</label>
            <input
              type="number"
              name="daysToExpiry"
              value={formData.daysToExpiry}
              onChange={handleInputChange}
              className="form-input"
              min="0"
              required
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="predict-btn"
          disabled={isLoading}
        >
          <Calculator size={18} />
          {isLoading ? 'Predicting...' : 'Predict Spoilage'}
        </button>
      </form>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {prediction && (
        <div className="prediction-result">
          <div className="result-header">
            <h4>Prediction Result</h4>
          </div>
          <div className="result-content">
            <div className="probability-display">
              <span className="probability-value">{prediction.spoiled_probability}%</span>
              <span className="probability-label">Spoilage Risk</span>
            </div>
            <div className={`recommendation recommendation-${prediction.recommendation.toLowerCase().replace(' ', '-')}`}>
              <strong>Recommendation:</strong> {prediction.recommendation}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SpoilagePredictor