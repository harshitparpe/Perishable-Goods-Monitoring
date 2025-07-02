import React from "react";
import "./LineChart.css";

const LineChart = () => {
  // Sample data points for the chart
  const data = [
    { x: 0, y: 40 },
    { x: 1, y: 65 },
    { x: 2, y: 45 },
    { x: 3, y: 70 },
    { x: 4, y: 55 },
    { x: 5, y: 80 },
    { x: 6, y: 60 },
    { x: 7, y: 75 },
  ];

  const data2 = [
    { x: 0, y: 30 },
    { x: 1, y: 45 },
    { x: 2, y: 35 },
    { x: 3, y: 50 },
    { x: 4, y: 65 },
    { x: 5, y: 55 },
    { x: 6, y: 40 },
    { x: 7, y: 35 },
  ];

  // Convert data to SVG path
  const createPath = (points) => {
    return points
      .map((point, index) => {
        const x = (point.x / 7) * 300;
        const y = 100 - (point.y / 100) * 80;
        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  };

  return (
    <div className="line-chart-card card">
      <div className="card-header">
        <h3 className="card-title">Trends</h3>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color blue"></div>
            <span>Blue</span>
          </div>
          <div className="legend-item">
            <div className="legend-color orange"></div>
            <span>Orange</span>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <svg width="100%" height="120" viewBox="0 0 300 100">
          {/* Grid lines */}
          <defs>
            <pattern
              id="grid"
              width="30"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 30 0 L 0 0 0 20"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Line 1 */}
          <path
            d={createPath(data)}
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="chart-line"
          />

          {/* Line 2 */}
          <path
            d={createPath(data2)}
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="chart-line"
          />

          {/* Data points */}
          {data.map((point, index) => (
            <circle
              key={`blue-${index}`}
              cx={(point.x / 7) * 300}
              cy={100 - (point.y / 100) * 80}
              r="3"
              fill="#6366f1"
              className="data-point"
            />
          ))}

          {data2.map((point, index) => (
            <circle
              key={`orange-${index}`}
              cx={(point.x / 7) * 300}
              cy={100 - (point.y / 100) * 80}
              r="3"
              fill="#f97316"
              className="data-point"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default LineChart;
