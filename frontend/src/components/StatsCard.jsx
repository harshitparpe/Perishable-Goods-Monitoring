import React from "react";
import "./style/StatsCard.css";

const StatsCard = ({ value, label, data }) => {
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

          {/* Grid lines and axis labels */}
          {[0, 20, 40, 60, 80, 100].map((val, idx) => {
            const y = 60 - (val / 100) * 60;
            return (
              <g key={idx}>
                <line
                  x1="0"
                  y1={y}
                  x2="200"
                  y2={y}
                  stroke="#ccc"
                  strokeDasharray="2,2"
                  strokeWidth="0.5"
                />
                <text x="0" y={y - 1} fontSize="6" fill="#999">
                  {val}
                </text>
              </g>
            );
          })}

          <path d={createAreaPath(data)} fill="url(#orangeGradient)" />
          <path
            d={createPath(data)}
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* <svg width="100%" height="100" viewBox="0 0 200 60">
          <defs>
            <linearGradient
              id="orangeGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={createAreaPath(data)} fill="url(#orangeGradient)" />
          <path
            d={createPath(data)}
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg> */}
      </div>
    </div>
  );
};

export default StatsCard;
