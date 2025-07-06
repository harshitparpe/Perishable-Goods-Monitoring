import React from "react";
import { Brain, AlertCircle, Clock, TrendingUp } from "lucide-react";
import "./SpoilagePredictor.css";

const SpoilagePredictor = () => {
  const predictions = [
    {
      id: 1,
      item: "Organic Vegetables",
      location: "Storage Room C3",
      currentRisk: 65,
      predictedRisk: 95,
      timeframe: "24 hours",
      confidence: 89,
      status: "critical",
    },
    {
      id: 2,
      item: "Fresh Milk",
      location: "Refrigerator A1",
      currentRisk: 25,
      predictedRisk: 85,
      timeframe: "48 hours",
      confidence: 94,
      status: "warning",
    },
    {
      id: 3,
      item: "Fresh Bread",
      location: "Storage Room C3",
      currentRisk: 80,
      predictedRisk: 98,
      timeframe: "12 hours",
      confidence: 92,
      status: "critical",
    },
  ];

  const getRiskColor = (risk) => {
    if (risk >= 80) return "risk-critical";
    if (risk >= 60) return "risk-high";
    if (risk >= 40) return "risk-medium";
    return "risk-low";
  };

  return (
    <div className="spoilage-predictor card-hover">
      <div className="predictor-header">
        <div className="header-title">
          <Brain size={20} />
          <h3>AI Spoilage Predictions</h3>
        </div>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="predictions-list">
        {predictions.map((prediction) => (
          <div
            key={prediction.id}
            className={`prediction-item ${prediction.status}`}
          >
            <div className="prediction-info">
              <div className="item-details">
                <h4 className="item-name">{prediction.item}</h4>
                <p className="item-location">{prediction.location}</p>
              </div>
              <div className="prediction-status">
                <AlertCircle size={16} />
                <span className="timeframe">{prediction.timeframe}</span>
              </div>
            </div>

            <div className="risk-progression">
              <div className="risk-current">
                <span className="risk-label">Current</span>
                <div
                  className={`risk-bar ${getRiskColor(prediction.currentRisk)}`}
                >
                  <div
                    className="risk-fill"
                    style={{ width: `${prediction.currentRisk}%` }}
                  />
                </div>
                <span className="risk-value">{prediction.currentRisk}%</span>
              </div>
              <div className="risk-arrow">→</div>
              <div className="risk-predicted">
                <span className="risk-label">Predicted</span>
                <div
                  className={`risk-bar ${getRiskColor(
                    prediction.predictedRisk
                  )}`}
                >
                  <div
                    className="risk-fill"
                    style={{ width: `${prediction.predictedRisk}%` }}
                  />
                </div>
                <span className="risk-value">{prediction.predictedRisk}%</span>
              </div>
            </div>

            <div className="prediction-footer">
              <div className="confidence">
                <Brain size={12} />
                <span>{prediction.confidence}% confidence</span>
              </div>
              <button className="action-btn">Take Action</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpoilagePredictor;
