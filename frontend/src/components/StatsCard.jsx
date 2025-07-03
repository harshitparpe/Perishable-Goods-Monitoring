import React from "react";
import "./StatsCard.css";
import "./SmallCharts.css";

// Sample data for small charts
const chartData1 = [
  { x: 0, y: 30 },
  { x: 1, y: 45 },
  { x: 2, y: 35 },
  { x: 3, y: 60 },
  { x: 4, y: 45 },
  { x: 5, y: 70 },
  { x: 6, y: 55 },
  { x: 7, y: 65 },
];

const StatsCard = ({ value, label, trend }) => {
  const createPath = (points, height = 60) => {
    return points
      .map((point, index) => {
        const x = (point.x / 7) * 200;
        const y = height - (point.y / 100) * height;
        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  };

  const createAreaPath = (points, height = 60) => {
    const linePath = createPath(points, height);
    const lastPoint = points[points.length - 1];
    const firstPoint = points[0];
    return `${linePath} L ${(lastPoint.x / 7) * 200} ${height} L ${
      (firstPoint.x / 7) * 200
    } ${height} Z`;
  };

  return (
    <div className="stats-card card">
      <div className="stats-trend">
        <span className={`trend-icon ${trend}`}>
          {trend === "up" ? "↗" : "↙"}
        </span>
      </div>
      <div className="stats-value">{value}</div>
      <div className="stats-label">{label}</div>
      <div className="mini-chart">
        <svg width="100%" height="100" viewBox="0 0 200 60">
          <defs>
            <linearGradient
              id="orangeGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={createAreaPath(chartData1)} fill="url(#orangeGradient)" />
          <path
            d={createPath(chartData1)}
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default StatsCard;
