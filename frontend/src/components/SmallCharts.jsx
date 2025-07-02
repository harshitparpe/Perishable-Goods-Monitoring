import React from "react";
import "./SmallCharts.css";

const SmallCharts = () => {
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

  const chartData2 = [
    { x: 0, y: 40 },
    { x: 1, y: 35 },
    { x: 2, y: 50 },
    { x: 3, y: 45 },
    { x: 4, y: 60 },
    { x: 5, y: 40 },
    { x: 6, y: 55 },
    { x: 7, y: 45 },
  ];

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
    <div className="small-charts-container">
      {/* Comments Section */}
      <div className="comments-card card">
        <div className="card-header">
          <h3 className="card-title">Comments</h3>
        </div>
        <div className="comments-content">
          <p className="comments-text">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </p>
          <div className="mini-chart">
            <svg width="100%" height="60" viewBox="0 0 200 60">
              <defs>
                <linearGradient
                  id="blueGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={createAreaPath(chartData1)} fill="url(#blueGradient)" />
              <path
                d={createPath(chartData1)}
                fill="none"
                stroke="#6366f1"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Second Chart */}
      <div className="small-chart-card card">
        <div className="mini-chart">
          <svg width="100%" height="60" viewBox="0 0 200 60">
            <defs>
              <linearGradient
                id="orangeGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={createAreaPath(chartData2)} fill="url(#orangeGradient)" />
            <path
              d={createPath(chartData2)}
              fill="none"
              stroke="#f97316"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="progress-bars-card card">
        <div className="card-header">
          <h3 className="card-title">Dolore magna</h3>
        </div>
        <div className="progress-bars">
          <div className="progress-item">
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: "75%", background: "#6366f1" }}
              ></div>
            </div>
          </div>
          <div className="progress-item">
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: "60%", background: "#f97316" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCharts;
