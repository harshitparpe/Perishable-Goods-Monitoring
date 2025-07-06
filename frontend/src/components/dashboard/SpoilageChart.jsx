import React, { useState, useEffect } from 'react'
import { TrendingUp } from 'lucide-react'
import './SpoilageChart.css'

const SpoilageChart = () => {
  const [chartData, setChartData] = useState([])

  // Simulate loading data from CSV or database
  useEffect(() => {
    const loadChartData = async () => {
      // Simulate API call to fetch data from CSV or database
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Mock data that could come from your CSV files
      const mockData = [
        { time: '12:05', spoilage: 30, temperature: 8, humidity: 65 },
        { time: '13:05', spoilage: 45, temperature: 9, humidity: 68 },
        { time: '14:05', spoilage: 35, temperature: 7, humidity: 62 },
        { time: '15:05', spoilage: 60, temperature: 12, humidity: 75 },
        { time: '16:05', spoilage: 55, temperature: 11, humidity: 72 },
        { time: '17:05', spoilage: 75, temperature: 15, humidity: 80 },
        { time: '18:05', spoilage: 65, temperature: 13, humidity: 78 },
        { time: '19:05', spoilage: 50, temperature: 10, humidity: 70 },
        { time: '20:05', spoilage: 40, temperature: 8, humidity: 65 },
        { time: '21:05', spoilage: 35, temperature: 7, humidity: 62 }
      ]
      
      setChartData(mockData)
    }

    loadChartData()
  }, [])

  const maxValue = 100
  const chartWidth = 600
  const chartHeight = 200

  // Create SVG path for spoilage risk line
  const createPath = (data, key) => {
    if (data.length === 0) return ''
    
    return data.map((point, index) => {
      const x = (index / (data.length - 1)) * chartWidth
      const y = chartHeight - (point[key] / maxValue) * chartHeight
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
    }).join(' ')
  }

  // Create area path for spoilage risk
  const createAreaPath = (data, key) => {
    if (data.length === 0) return ''
    
    const linePath = createPath(data, key)
    return `${linePath} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`
  }

  if (chartData.length === 0) {
    return (
      <div className="dashboard-card spoilage-chart enhanced-shadow">
        <div className="card-header">
          <div className="card-title">
            <TrendingUp size={20} />
            Spoilage Risk Trends
          </div>
        </div>
        <div className="loading">
          <div className="loading-spinner"></div>
          Loading chart data...
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-card spoilage-chart enhanced-shadow">
      <div className="card-header">
        <div className="card-title">
          <TrendingUp size={20} />
          Spoilage Risk Trends
        </div>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color spoilage"></div>
            <span>Spoilage Risk (%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color temperature"></div>
            <span>Temperature (°C)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color humidity"></div>
            <span>Humidity (%)</span>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <svg 
          width="100%" 
          height="250" 
          viewBox={`0 0 ${chartWidth} ${chartHeight + 50}`}
          className="chart-svg"
        >
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="60" height="40" patternUnits="userSpaceOnUse">
              <path 
                d="M 60 0 L 0 0 0 40" 
                fill="none" 
                stroke="#f1f5f9" 
                strokeWidth="1"
              />
            </pattern>
            
            {/* Gradients */}
            <linearGradient id="spoilageGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          <rect width="100%" height={chartHeight} fill="url(#grid)" />

          {/* Y-axis labels */}
          {[0, 25, 50, 75, 100].map((value) => {
            const y = chartHeight - (value / 100) * chartHeight
            return (
              <g key={value}>
                <text 
                  x="-10" 
                  y={y + 4} 
                  fontSize="12" 
                  fill="#64748b" 
                  textAnchor="end"
                >
                  {value}
                </text>
                <line 
                  x1="0" 
                  y1={y} 
                  x2={chartWidth} 
                  y2={y} 
                  stroke="#e2e8f0" 
                  strokeWidth="1"
                  strokeDasharray="2,2"
                />
              </g>
            )
          })}

          {/* Area fill for spoilage risk */}
          <path
            d={createAreaPath(chartData, 'spoilage')}
            fill="url(#spoilageGradient)"
          />

          {/* Spoilage risk line */}
          <path
            d={createPath(chartData, 'spoilage')}
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0 2px 4px rgba(239, 68, 68, 0.3))"
          />

          {/* Temperature line */}
          <path
            d={createPath(chartData.map(d => ({ ...d, temperature: d.temperature * 5 })), 'temperature')}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0 1px 2px rgba(59, 130, 246, 0.3))"
          />

          {/* Humidity line */}
          <path
            d={createPath(chartData, 'humidity')}
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0 1px 2px rgba(16, 185, 129, 0.3))"
          />

          {/* Data points for spoilage risk */}
          {chartData.map((point, index) => {
            const x = (index / (chartData.length - 1)) * chartWidth
            const y = chartHeight - (point.spoilage / maxValue) * chartHeight
            return (
              <circle
                key={`spoilage-${index}`}
                cx={x}
                cy={y}
                r="4"
                fill="#ef4444"
                stroke="white"
                strokeWidth="2"
                className="data-point"
                filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))"
              />
            )
          })}

          {/* X-axis labels */}
          {chartData.map((point, index) => {
            if (index % 2 === 0) { // Show every other label to avoid crowding
              const x = (index / (chartData.length - 1)) * chartWidth
              return (
                <text
                  key={`time-${index}`}
                  x={x}
                  y={chartHeight + 20}
                  fontSize="12"
                  fill="#64748b"
                  textAnchor="middle"
                >
                  {point.time}
                </text>
              )
            }
            return null
          })}
        </svg>
      </div>
    </div>
  )
}

export default SpoilageChart