import React from "react";
import "./BarChart.css";

const BarChart = () => {
  const data = [
    { label: "S", value1: 65, value2: 45 },
    { label: "M", value1: 78, value2: 55 },
    { label: "T", value1: 45, value2: 35 },
    { label: "W", value1: 88, value2: 68 },
    { label: "T", value1: 52, value2: 42 },
    { label: "F", value1: 75, value2: 55 },
    { label: "S", value1: 68, value2: 48 },
  ];

  const maxValue = 100;

  return (
    <div className="bar-chart-card card">
      <div className="card-header">
        <h3 className="card-title">Weekly Analysis</h3>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color blue"></div>
            <span>Total Items</span>
          </div>
          <div className="legend-item">
            <div className="legend-color orange"></div>
            <span>Perishable Items</span>
          </div>
          <div className="legend-item">
            <div className="legend-color green"></div>
            <span>Perishable Items Sold</span>
          </div>
          <div className="legend-item">
            <div className="legend-color purple"></div>
            <span>Perishable Items Wasted</span>
          </div>
        </div>
      </div>

      <div className="bar-chart-container">
        {data.map((item, index) => (
          <div key={index} className="bar-group">
            <div className="bars">
              <div
                className="bar bar-blue"
                style={{
                  height: `${(item.value1 / maxValue) * 100}%`,
                }}
              ></div>
              <div
                className="bar bar-orange"
                style={{
                  height: `${(item.value2 / maxValue) * 100}%`,
                }}
              ></div>
            </div>
            <div className="bar-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
