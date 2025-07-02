import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import Calendar from "./components/Calendar";
import ProgressCard from "./components/ProgressCard";
import LineChart from "./components/LineChart";
// import BarChart from "./components/BarChart";
// import SmallCharts from "./components/SmallCharts";
// import PieChart from "./components/PieChart";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const statsData = [
    {
      value: "1974",
      label: "Gross est. annual, consectetur adipiscing elit",
      trend: "up",
    },
    {
      value: "287",
      label: "Viverra maecenas accumsan lacus vel facilisis volutpat est",
      trend: "down",
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="dashboard-grid">
          {/* Top Row - Stats and Calendar */}
          <div className="top-row">
            <div className="stats-section">
              {statsData.map((stat, index) => (
                <StatsCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  trend={stat.trend}
                />
              ))}
            </div>
            <Calendar />
          </div>

          {/* Middle Row - Line Chart and Progress */}
          <div className="middle-row">
            <LineChart />
            <ProgressCard />
          </div>

          {/* Bottom Row - Bar Chart and Small Charts */}
          <div className="bottom-row">
            {/* <BarChart /> */}
            <div className="right-column">
              {/* <SmallCharts /> */}
              {/* <PieChart /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
