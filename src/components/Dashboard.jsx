import React from 'react'
import StatsCards from './dashboard/StatsCards'
import SpoilagePredictor from './dashboard/SpoilagePredictor'
import SensorNetwork from './dashboard/SensorNetwork'
import SpoilageChart from './dashboard/SpoilageChart'
import InventoryTable from './dashboard/InventoryTable'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard fade-in">
      {/* Top Stats Cards */}
      <div className="dashboard-section">
        <StatsCards />
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-grid">
        {/* Left Column */}
        <div className="dashboard-left">
          <SpoilagePredictor />
        </div>

        {/* Right Column */}
        <div className="dashboard-right">
          <SensorNetwork />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="dashboard-bottom">
        {/* Spoilage Trends Chart */}
        <div className="chart-section">
          <SpoilageChart />
        </div>

        {/* Inventory Overview */}
        <div className="inventory-section">
          <InventoryTable />
        </div>
      </div>
    </div>
  )
}

export default Dashboard