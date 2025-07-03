import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import Calendar from "./components/Calendar";
import ProgressCard from "./components/ProgressCard";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import AIsection from "./components/AIsection";
import PieChart from "./components/PieChart";
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
      value: "20067",
      label: "Profits",
      trend: "up",
      data: chartData1,
    },
    {
      value: "1285",
      label: "Food Wastage",
      trend: "down",
      data: chartData2,
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="dashboard-grid">
          {/* Stats Cards */}
          <div className="top-row">
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

          {/* Calendar */}
          <div className="calendar-area">
            <Calendar />
          </div>

          {/* Line Chart */}
          <div className="chart-area">
            <LineChart />
          </div>

          {/* Progress Card */}
          <div className="progress-area">
            <ProgressCard />
          </div>

          {/* Bar Chart */}
          <div className="bars-area">
            <BarChart />
          </div>

          {/* AI Section */}
          <div className="AI-area">
            <AIsection />
          </div>

          {/* Pie Chart */}
          <div className="pie-chart-area">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
