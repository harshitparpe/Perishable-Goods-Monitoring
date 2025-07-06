import React, { useState } from "react";
import { TrendingDown, Calendar, BarChart3 } from "lucide-react";
import "./SpoilageChart.css";

const SpoilageChart = () => {
  const [timeRange, setTimeRange] = useState("7days");

  const chartData = [
    { date: "Jan 1", spoilage: 15, items: 1150 },
    { date: "Jan 2", spoilage: 18, items: 1180 },
    { date: "Jan 3", spoilage: 12, items: 1200 },
    { date: "Jan 4", spoilage: 14, items: 1220 },
    { date: "Jan 5", spoilage: 10, items: 1240 },
    { date: "Jan 6", spoilage: 8, items: 1250 },
    { date: "Jan 7", spoilage: 11, items: 1247 },
  ];

  const createLineChart = (data, metric) => {
    const maxValue = Math.max(...data.map((d) => d[metric]));
    const minValue = Math.min(...data.map((d) => d[metric]));
    const range = maxValue - minValue || 1;

    const points = data
      .map((point, index) => {
        const x = (index / (data.length - 1)) * 280;
        const y = 80 - ((point[metric] - minValue) / range) * 60;
        return `${x},${y}`;
      })
      .join(" ");

    return points;
  };

  return (
    <div className="spoilage-chart card-hover">
      <div className="chart-header">
        <div className="header-title">
          <TrendingDown size={20} />
          <h3>Spoilage Trends</h3>
        </div>
        <div className="chart-controls">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="time-select"
          >
            <option value="24hours">Last 24 Hours</option>
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
          </select>
        </div>
      </div>

      <div className="chart-metrics">
        <div className="metric">
          <span className="metric-label">Current Rate</span>
          <span className="metric-value">12.5%</span>
          <span className="metric-change decrease">-1.8%</span>
        </div>
        <div className="metric">
          <span className="metric-label">Weekly Avg</span>
          <span className="metric-value">13.4%</span>
          <span className="metric-change decrease">-2.1%</span>
        </div>
        <div className="metric">
          <span className="metric-label">Items Saved</span>
          <span className="metric-value">156</span>
          <span className="metric-change increase">+23</span>
        </div>
      </div>

      <div className="chart-container">
        <svg width="100%" height="120" viewBox="0 0 300 100">
          <defs>
            <linearGradient
              id="spoilageGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 20, 40, 60, 80].map((y) => (
            <line
              key={y}
              x1="10"
              y1={10 + y}
              x2="290"
              y2={10 + y}
              stroke="#f1f5f9"
              strokeWidth="1"
            />
          ))}

          {/* Chart line */}
          <polyline
            points={createLineChart(chartData, "spoilage")}
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(10, 10)"
          />

          {/* Data points */}
          {chartData.map((point, index) => {
            const maxValue = Math.max(...chartData.map((d) => d.spoilage));
            const minValue = Math.min(...chartData.map((d) => d.spoilage));
            const range = maxValue - minValue || 1;
            const x = (index / (chartData.length - 1)) * 280 + 10;
            const y = 90 - ((point.spoilage - minValue) / range) * 60;

            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="#ef4444"
                stroke="white"
                strokeWidth="2"
              />
            );
          })}
        </svg>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-color spoilage"></div>
          <span>Spoilage Rate (%)</span>
        </div>
      </div>
    </div>
  );
};

export default SpoilageChart;
