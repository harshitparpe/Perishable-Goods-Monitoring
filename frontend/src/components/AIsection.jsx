import React from "react";
import "./style/AIsection.css";

const AIsection = () => {
  return (
    <div className="ai-container">
      {/* Discount/Offer Suggestions */}
      <div className="card">
        <div className="header">
          <h3 className="title">AI Suggestions</h3>
        </div>
        <div className="content">
          <p className="text">Discounts, Offers and Deals suggested by AI...</p>
        </div>
      </div>

      {/* Warnings Section */}
      <div className="card">
        <div className="header">
          <h3 className="title">Warnings!</h3>
        </div>
        <div className="content">
          <p className="text">Everything going good...</p>
        </div>
      </div>
    </div>
  );
};

export default AIsection;
