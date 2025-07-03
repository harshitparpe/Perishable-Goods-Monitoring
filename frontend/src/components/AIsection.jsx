import React from "react";
import "./AIsection.css";

const AIsection = () => {
  return (
    <div className="small-charts-container">
      {/* Warnings Section */}
      <div className="comments-card card">
        <div className="card-header">
          <h3 className="card-title">⚠️ Warnings!</h3>
        </div>
        <div className="comments-content">
          <p className="comments-text">Everything going good...</p>
        </div>
      </div>

      {/* Discount/Offer Suggestions */}
      <div className="comments-card card">
        <div className="card-header">
          <h3 className="card-title">🧠 AI Suggestions</h3>
        </div>
        <div className="comments-content">
          <p className="comments-text">
            Discounts, Offers and Deals suggested by AI...
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIsection;
