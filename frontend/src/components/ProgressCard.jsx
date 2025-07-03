import React from "react";
import "./style/ProgressCard.css";

const ProgressCard = () => {
  // const progressValue = 75;

  return (
    <div className="progress-card card">
      <div className="card-header">
        <h3 className="card-title">Progress</h3>
      </div>

      <div className="progress-content">
        {/* <div className="circular-progress">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="8"
            />
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#6366f1"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${
                2 * Math.PI * 45 * (1 - progressValue / 100)
              }`}
              transform="rotate(-90 60 60)"
              className="progress-circle"
            />
          </svg>
          <div className="progress-text">
            <div className="progress-value">{progressValue}%</div>
          </div>
        </div> */}

        <div className="progress-details">
          <div className="detail-item">
            <div className="detail-label">Product 1</div>
            <div className="detail-bar">
              <div className="detail-progress" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-label">Product 2</div>
            <div className="detail-bar">
              <div
                className="detail-progress orange"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-label">Product 3</div>
            <div className="detail-bar">
              <div
                className="detail-progress green"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
        </div>

        <button className="btn btn-primary full-width">More Details</button>
      </div>
    </div>
  );
};

export default ProgressCard;
