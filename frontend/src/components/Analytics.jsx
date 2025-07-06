import React, { useState } from 'react'
import { TrendingUp, BarChart3, PieChart, Calendar, Download, Filter } from 'lucide-react'
import './style/Analytics.css'

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7days')
  const [selectedMetric, setSelectedMetric] = useState('spoilage')

  // Mock analytics data
  const analyticsData = {
    spoilageRate: {
      current: 12.5,
      previous: 15.2,
      trend: 'down'
    },
    totalItems: {
      current: 1247,
      previous: 1189,
      trend: 'up'
    },
    avgTemperature: {
      current: 7.2,
      previous: 8.1,
      trend: 'down'
    },
    energyEfficiency: {
      current: 87.3,
      previous: 84.6,
      trend: 'up'
    }
  }

  const chartData = [
    { date: '2025-01-01', spoilage: 15, items: 1150, temperature: 8.5, efficiency: 82 },
    { date: '2025-01-02', spoilage: 18, items: 1180, temperature: 8.2, efficiency: 83 },
    { date: '2025-01-03', spoilage: 12, items: 1200, temperature: 7.8, efficiency: 85 },
    { date: '2025-01-04', spoilage: 14, items: 1220, temperature: 7.5, efficiency: 86 },
    { date: '2025-01-05', spoilage: 10, items: 1240, temperature: 7.2, efficiency: 87 },
    { date: '2025-01-06', spoilage: 8, items: 1250, temperature: 7.0, efficiency: 88 },
    { date: '2025-01-07', spoilage: 11, items: 1247, temperature: 7.2, efficiency: 87 }
  ]

  const categoryData = [
    { category: 'Dairy', spoilage: 25, color: '#3b82f6' },
    { category: 'Produce', spoilage: 35, color: '#10b981' },
    { category: 'Medicine', spoilage: 8, color: '#f59e0b' },
    { category: 'Protein', spoilage: 15, color: '#ef4444' },
    { category: 'Bakery', spoilage: 17, color: '#8b5cf6' }
  ]

  const locationData = [
    { location: 'Refrigerator A1', items: 245, spoilage: 8, efficiency: 92 },
    { location: 'Freezer B2', items: 180, spoilage: 3, efficiency: 95 },
    { location: 'Storage Room C3', items: 320, spoilage: 25, efficiency: 78 },
    { location: 'Medicine Cabinet D4', items: 150, spoilage: 2, efficiency: 88 },
    { location: 'Cold Storage E5', items: 200, spoilage: 5, efficiency: 90 },
    { location: 'Pharmacy Storage F6', items: 152, spoilage: 12, efficiency: 82 }
  ]

  const getTrendIcon = (trend) => {
    return trend === 'up' ? '📈' : trend === 'down' ? '📉' : '➡️'
  }

  const getTrendColor = (trend, isGoodWhenUp = true) => {
    if (trend === 'up') return isGoodWhenUp ? 'trend-positive' : 'trend-negative'
    if (trend === 'down') return isGoodWhenUp ? 'trend-negative' : 'trend-positive'
    return 'trend-neutral'
  }

  const createLineChart = (data, metric) => {
    const maxValue = Math.max(...data.map(d => d[metric]))
    const minValue = Math.min(...data.map(d => d[metric]))
    const range = maxValue - minValue || 1
    
    const points = data.map((point, index) => {
      const x = (index / (data.length - 1)) * 300
      const y = 100 - ((point[metric] - minValue) / range) * 80
      return `${x},${y}`
    }).join(' ')

    return points
  }

  return (
    <div className="analytics-page fade-in">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-title">
            <TrendingUp size={24} />
            <div>
              <h1>Analytics & Reports</h1>
              <p>Comprehensive insights into system performance and trends</p>
            </div>
          </div>
          <div className="header-actions">
            <div className="time-range-selector">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="time-select"
              >
                <option value="24hours">Last 24 Hours</option>
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
              </select>
            </div>
            <button className="btn btn-secondary">
              <Filter size={18} />
              Filter
            </button>
            <button className="btn btn-primary">
              <Download size={18} />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon spoilage">
              <PieChart size={20} />
            </div>
            <div className="metric-trend">
              <span className={getTrendColor(analyticsData.spoilageRate.trend, false)}>
                {getTrendIcon(analyticsData.spoilageRate.trend)}
                {Math.abs(analyticsData.spoilageRate.current - analyticsData.spoilageRate.previous).toFixed(1)}%
              </span>
            </div>
          </div>
          <div className="metric-content">
            <span className="metric-value">{analyticsData.spoilageRate.current}%</span>
            <span className="metric-label">Spoilage Rate</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon items">
              <BarChart3 size={20} />
            </div>
            <div className="metric-trend">
              <span className={getTrendColor(analyticsData.totalItems.trend)}>
                {getTrendIcon(analyticsData.totalItems.trend)}
                {Math.abs(analyticsData.totalItems.current - analyticsData.totalItems.previous)}
              </span>
            </div>
          </div>
          <div className="metric-content">
            <span className="metric-value">{analyticsData.totalItems.current.toLocaleString()}</span>
            <span className="metric-label">Total Items</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon temperature">
              <span>🌡️</span>
            </div>
            <div className="metric-trend">
              <span className={getTrendColor(analyticsData.avgTemperature.trend, false)}>
                {getTrendIcon(analyticsData.avgTemperature.trend)}
                {Math.abs(analyticsData.avgTemperature.current - analyticsData.avgTemperature.previous).toFixed(1)}°C
              </span>
            </div>
          </div>
          <div className="metric-content">
            <span className="metric-value">{analyticsData.avgTemperature.current}°C</span>
            <span className="metric-label">Avg Temperature</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon efficiency">
              <span>⚡</span>
            </div>
            <div className="metric-trend">
              <span className={getTrendColor(analyticsData.energyEfficiency.trend)}>
                {getTrendIcon(analyticsData.energyEfficiency.trend)}
                {Math.abs(analyticsData.energyEfficiency.current - analyticsData.energyEfficiency.previous).toFixed(1)}%
              </span>
            </div>
          </div>
          <div className="metric-content">
            <span className="metric-value">{analyticsData.energyEfficiency.current}%</span>
            <span className="metric-label">Energy Efficiency</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        {/* Trend Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Performance Trends</h3>
            <div className="metric-selector">
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="metric-select"
              >
                <option value="spoilage">Spoilage Rate</option>
                <option value="items">Total Items</option>
                <option value="temperature">Temperature</option>
                <option value="efficiency">Efficiency</option>
              </select>
            </div>
          </div>
          <div className="chart-container">
            <svg width="100%" height="200" viewBox="0 0 320 120">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              
              {/* Grid lines */}
              {[0, 25, 50, 75, 100].map((y) => (
                <line
                  key={y}
                  x1="10"
                  y1={10 + y}
                  x2="310"
                  y2={10 + y}
                  stroke="#f1f5f9"
                  strokeWidth="1"
                />
              ))}
              
              {/* Chart line */}
              <polyline
                points={createLineChart(chartData, selectedMetric)}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(10, 10)"
              />
              
              {/* Data points */}
              {chartData.map((point, index) => {
                const maxValue = Math.max(...chartData.map(d => d[selectedMetric]))
                const minValue = Math.min(...chartData.map(d => d[selectedMetric]))
                const range = maxValue - minValue || 1
                const x = (index / (chartData.length - 1)) * 300 + 10
                const y = 110 - ((point[selectedMetric] - minValue) / range) * 80
                
                return (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#3b82f6"
                    stroke="white"
                    strokeWidth="2"
                  />
                )
              })}
            </svg>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Spoilage by Category</h3>
          </div>
          <div className="pie-chart-container">
            <div className="pie-chart">
              <svg width="200" height="200" viewBox="0 0 200 200">
                {categoryData.map((item, index) => {
                  const total = categoryData.reduce((sum, cat) => sum + cat.spoilage, 0)
                  const percentage = (item.spoilage / total) * 100
                  const angle = (item.spoilage / total) * 360
                  const startAngle = categoryData.slice(0, index).reduce((sum, cat) => sum + (cat.spoilage / total) * 360, 0)
                  
                  const x1 = 100 + 80 * Math.cos((startAngle - 90) * Math.PI / 180)
                  const y1 = 100 + 80 * Math.sin((startAngle - 90) * Math.PI / 180)
                  const x2 = 100 + 80 * Math.cos((startAngle + angle - 90) * Math.PI / 180)
                  const y2 = 100 + 80 * Math.sin((startAngle + angle - 90) * Math.PI / 180)
                  
                  const largeArcFlag = angle > 180 ? 1 : 0
                  
                  return (
                    <path
                      key={index}
                      d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                      fill={item.color}
                      stroke="white"
                      strokeWidth="2"
                    />
                  )
                })}
              </svg>
            </div>
            <div className="pie-legend">
              {categoryData.map((item, index) => (
                <div key={index} className="legend-item">
                  <div 
                    className="legend-color" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="legend-label">{item.category}</span>
                  <span className="legend-value">{item.spoilage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="location-performance">
        <div className="section-header">
          <h3>Location Performance</h3>
          <span className="section-subtitle">Efficiency and spoilage rates by storage location</span>
        </div>
        <div className="location-grid">
          {locationData.map((location, index) => (
            <div key={index} className="location-card">
              <div className="location-header">
                <h4 className="location-name">{location.location}</h4>
                <div className="location-metrics">
                  <span className="metric-badge items">{location.items} items</span>
                  <span className={`metric-badge spoilage ${location.spoilage > 15 ? 'high' : location.spoilage > 8 ? 'medium' : 'low'}`}>
                    {location.spoilage}% spoilage
                  </span>
                </div>
              </div>
              <div className="efficiency-bar">
                <div className="efficiency-label">
                  <span>Efficiency</span>
                  <span>{location.efficiency}%</span>
                </div>
                <div className="efficiency-progress">
                  <div 
                    className="efficiency-fill"
                    style={{ width: `${location.efficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Analytics