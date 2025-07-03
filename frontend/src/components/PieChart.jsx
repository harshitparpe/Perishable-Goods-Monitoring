import React from "react";
import "./style/PieChart.css";

const PieChart = () => {
  const data = [
    { label: "Consectetur", value: 30, color: "#6366f1" },
    { label: "", value: 70, color: "#f97316" },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;

  const createArcPath = (centerX, centerY, radius, startAngle, endAngle) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M",
      centerX,
      centerY,
      "L",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      "Z",
    ].join(" ");
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  return (
    <div className="pie-chart-card card">
      <div className="card-header">
        <h3 className="card-title">Perished Items</h3>
        <div className="pie-actions">
          <button className="btn btn-secondary">Month</button>
          <button className="btn btn-secondary">Year</button>
        </div>
      </div>

      <div className="pie-chart-container">
        <div className="pie-chart">
          <svg width="120" height="120" viewBox="0 0 120 120">
            {data.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const startAngle = (cumulativePercentage / 100) * 360;
              const endAngle =
                ((cumulativePercentage + percentage) / 100) * 360;

              cumulativePercentage += percentage;

              return (
                <path
                  key={index}
                  d={createArcPath(60, 60, 45, startAngle, endAngle)}
                  fill={item.color}
                  className="pie-slice"
                />
              );
            })}
          </svg>
          <div className="pie-center">
            <div className="pie-percentage">30%</div>
            <div className="pie-total">70%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
