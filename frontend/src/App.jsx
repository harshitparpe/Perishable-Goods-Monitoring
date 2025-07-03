import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import Calendar from "./components/Calendar";
import ProgressCard from "./components/ProgressCard";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import SmallCharts from "./components/SmallCharts";
import PieChart from "./components/PieChart";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const statsData = [
    {
      value: "20067",
      label: "Profits",
      trend: "up",
    },
    {
      value: "1285",
      label: "Food Wastage",
      trend: "down",
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
                // chartData={stat.chartData}
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

          {/* Small Charts */}
          <div className="small-charts-area">
            <SmallCharts />
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
