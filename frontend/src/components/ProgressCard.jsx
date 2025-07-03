import React from "react";
import "./style/ProgressCard.css";

const ProgressCard = ({ value, label }) => {
  return (
    <div className="progress-card card">
      <div className="header">
        <h3 className="title">{label}</h3>
      </div>

      <div className="progress-content">
        <div className="progress-details">{value}</div>
      </div>
    </div>
  );
};

export default ProgressCard;
