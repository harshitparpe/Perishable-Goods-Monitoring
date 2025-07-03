import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import Calendar from "./components/Calendar";
import ProgressCard from "./components/ProgressCard";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import AIsection from "./components/AIsection";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

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
    { x: 0, y: 80 },
    { x: 1, y: 70 },
    { x: 2, y: 76 },
    { x: 3, y: 60 },
    { x: 4, y: 55 },
    { x: 5, y: 57 },
    { x: 6, y: 63 },
    { x: 7, y: 35 },
  ];

  const statsData = [
    {
      value: "16°C",
      label: "Temperature",
      data: chartData1,
    },
    {
      value: "60%",
      label: "Humidity",
      data: chartData2,
    },
  ];

  const progressData = [
    {
      value: "234",
      label: "Profits",
    },
    {
      value: "98",
      label: "Wastage",
    },
    {
      value: "48",
      label: "Products",
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="dashboard-grid">
          <div className="row1">
            {" "}
            {/* Progress Card */}
            <div className="progress-area">
              {progressData.map((progress, index) => (
                <ProgressCard
                  key={index}
                  value={progress.value}
                  label={progress.label}
                />
              ))}
            </div>
            {/* Calendar */}
            <div className="calendar-area">
              <Calendar />
            </div>
          </div>

          <div className="row2">
            {/* Stats Cards */}
            <div className="stats-area">
              {statsData.map((stat, index) => (
                <StatsCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  trend={stat.trend}
                  data={stat.data}
                />
              ))}
            </div>

            {/* AI Section */}
            <div className="AI-area">
              <AIsection />
            </div>
          </div>

          {/* Line Chart
          <div className="chart-area">
            <LineChart />
          </div> */}

          {/* Bar Chart
          <div className="bars-area">
            <BarChart />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
