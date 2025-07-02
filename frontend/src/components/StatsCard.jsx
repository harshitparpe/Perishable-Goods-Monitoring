import React from "react";
import "./StatsCard.css";

const StatsCard = ({ value, label, trend }) => {
  return (
    <div className="stats-card card">
      <div className="stats-trend">
        <span className={`trend-icon ${trend}`}>
          {trend === "up" ? "↗" : "↙"}
        </span>
      </div>
      <div className="stats-value">{value}</div>
      <div className="stats-label">{label}</div>
    </div>
  );
};

export default StatsCard;
