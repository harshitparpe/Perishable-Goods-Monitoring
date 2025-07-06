import React, { useState } from 'react'
import { FileText, Download, Calendar, BarChart3, PieChart, TrendingUp, Filter } from 'lucide-react'
import './style/Reports.css'

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('spoilage-summary')
  const [dateRange, setDateRange] = useState('7days')

  // Mock reports data
  const reportTypes = [
    {
      id: 'spoilage-summary',
      name: 'Spoilage Summary Report',
      description: 'Comprehensive overview of spoilage rates and trends',
      icon: PieChart,
      category: 'Analytics'
    },
    {
      id: 'inventory-status',
      name: 'Inventory Status Report',
      description: 'Current inventory levels and item conditions',
      icon: BarChart3,
      category: 'Inventory'
    },
    {
      id: 'sensor-performance',
      name: 'Sensor Performance Report',
      description: 'IoT sensor health and performance metrics',
      icon: TrendingUp,
      category: 'System'
    },
    {
      id: 'cost-analysis',
      name: 'Cost Analysis Report',
      description: 'Financial impact analysis and cost savings',
      icon: FileText,
      category: 'Financial'
    }
  ]

  const recentReports = [
    {
      id: 1,
      name: 'Weekly Spoilage Report',
      type: 'Spoilage Summary',
      generatedDate: '2025-01-08 09:00:00',
      period: 'Jan 1-7, 2025',
      size: '2.4 MB',
      format: 'PDF'
    },
    {
      id: 2,
      name: 'Monthly Inventory Analysis',
      type: 'Inventory Status',
      generatedDate: '2025-01-01 08:30:00',
      period: 'December 2024',
      size: '1.8 MB',
      format: 'Excel'
    },
    {
      id: 3,
      name: 'Sensor Health Check',
      type: 'Sensor Performance',
      generatedDate: '2025-01-07 16:45:00',
      period: 'Jan 1-7, 2025',
      size: '956 KB',
      format: 'PDF'
    },
    {
      id: 4,
      name: 'Q4 Cost Impact Report',
      type: 'Cost Analysis',
      generatedDate: '2024-12-31 17:00:00',
      period: 'Q4 2024',
      size: '3.2 MB',
      format: 'PDF'
    }
  ]

  const reportData = {
    'spoilage-summary': {
      title: 'Spoilage Summary Report',
      metrics: [
        { label: 'Total Items Monitored', value: '1,247', change: '+58 from last week' },
        { label: 'Items Spoiled', value: '156', change: '-23 from last week' },
        { label: 'Spoilage Rate', value: '12.5%', change: '-1.8% from last week' },
        { label: 'Cost Impact', value: '$7,800', change: '-$1,150 from last week' }
      ],
      charts: [
        { type: 'pie', title: 'Spoilage by Category', data: 'Category breakdown' },
        { type: 'line', title: 'Weekly Trend', data: 'Time series data' },
        { type: 'bar', title: 'Location Analysis', data: 'Location comparison' }
      ]
    },
    'inventory-status': {
      title: 'Inventory Status Report',
      metrics: [
        { label: 'Total Inventory Value', value: '$45,600', change: '+$2,300 from last month' },
        { label: 'Items in Stock', value: '1,247', change: '+58 from last week' },
        { label: 'Critical Items', value: '23', change: '-5 from yesterday' },
        { label: 'Turnover Rate', value: '87%', change: '+3% from last month' }
      ],
      charts: [
        { type: 'bar', title: 'Stock Levels by Category', data: 'Category stock levels' },
        { type: 'line', title: 'Inventory Turnover', data: 'Turnover trends' },
        { type: 'pie', title: 'Value Distribution', data: 'Value by category' }
      ]
    },
    'sensor-performance': {
      title: 'Sensor Performance Report',
      metrics: [
        { label: 'Active Sensors', value: '6', change: 'All operational' },
        { label: 'Uptime', value: '99.2%', change: '+0.3% from last week' },
        { label: 'Data Points Collected', value: '45,678', change: '+2,340 from last week' },
        { label: 'Alerts Generated', value: '127', change: '-15 from last week' }
      ],
      charts: [
        { type: 'line', title: 'Sensor Uptime Trends', data: 'Uptime over time' },
        { type: 'bar', title: 'Data Collection by Sensor', data: 'Data volume per sensor' },
        { type: 'pie', title: 'Alert Distribution', data: 'Alerts by type' }
      ]
    },
    'cost-analysis': {
      title: 'Cost Analysis Report',
      metrics: [
        { label: 'Total Savings', value: '$12,450', change: '+$1,890 from last month' },
        { label: 'Prevented Losses', value: '$8,900', change: '+$1,200 from last month' },
        { label: 'System ROI', value: '245%', change: '+12% from last quarter' },
        { label: 'Efficiency Gain', value: '34%', change: '+4% from last month' }
      ],
      charts: [
        { type: 'line', title: 'Monthly Savings Trend', data: 'Savings over time' },
        { type: 'bar', title: 'Cost Breakdown', data: 'Cost categories' },
        { type: 'pie', title: 'ROI Distribution', data: 'ROI by area' }
      ]
    }
  }

  const currentReport = reportData[selectedReport]

  const handleGenerateReport = () => {
    console.log(`Generating ${selectedReport} for ${dateRange}`)
    // In a real app, this would trigger report generation
  }

  const handleDownloadReport = (reportId) => {
    console.log(`Downloading report ${reportId}`)
    // In a real app, this would download the report
  }

  return (
    <div className="reports-page fade-in">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-title">
            <FileText size={24} />
            <div>
              <h1>Reports & Export</h1>
              <p>Generate comprehensive reports and export data</p>
            </div>
          </div>
          <div className="header-actions">
            <div className="date-range-selector">
              <Calendar size={16} />
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="date-select"
              >
                <option value="24hours">Last 24 Hours</option>
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
            <button className="btn btn-secondary">
              <Filter size={18} />
              Advanced Options
            </button>
            <button 
              className="btn btn-primary"
              onClick={handleGenerateReport}
            >
              <Download size={18} />
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Report Types */}
      <div className="report-types">
        <h3>Available Reports</h3>
        <div className="report-types-grid">
          {reportTypes.map((report) => {
            const IconComponent = report.icon
            return (
              <div
                key={report.id}
                className={`report-type-card ${selectedReport === report.id ? 'selected' : ''}`}
                onClick={() => setSelectedReport(report.id)}
              >
                <div className="report-type-header">
                  <div className="report-type-icon">
                    <IconComponent size={24} />
                  </div>
                  <span className="report-category">{report.category}</span>
                </div>
                <div className="report-type-content">
                  <h4 className="report-type-name">{report.name}</h4>
                  <p className="report-type-description">{report.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Report Preview */}
      <div className="report-preview">
        <div className="preview-header">
          <h3>{currentReport.title}</h3>
          <div className="preview-actions">
            <button className="btn btn-secondary">
              <Calendar size={16} />
              Schedule
            </button>
            <button className="btn btn-primary">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>

        <div className="report-content">
          {/* Key Metrics */}
          <div className="report-section">
            <h4>Key Metrics</h4>
            <div className="metrics-grid">
              {currentReport.metrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-change">{metric.change}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Charts Preview */}
          <div className="report-section">
            <h4>Visual Analytics</h4>
            <div className="charts-preview">
              {currentReport.charts.map((chart, index) => (
                <div key={index} className="chart-preview-card">
                  <div className="chart-preview-header">
                    <h5>{chart.title}</h5>
                    <span className="chart-type">{chart.type.toUpperCase()}</span>
                  </div>
                  <div className="chart-preview-content">
                    <div className="chart-placeholder">
                      {chart.type === 'pie' && (
                        <div className="pie-placeholder">
                          <div className="pie-circle">
                            <PieChart size={48} />
                          </div>
                        </div>
                      )}
                      {chart.type === 'line' && (
                        <div className="line-placeholder">
                          <TrendingUp size={48} />
                        </div>
                      )}
                      {chart.type === 'bar' && (
                        <div className="bar-placeholder">
                          <BarChart3 size={48} />
                        </div>
                      )}
                    </div>
                    <p className="chart-description">{chart.data}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="recent-reports">
        <div className="recent-header">
          <h3>Recent Reports</h3>
          <span className="recent-count">{recentReports.length} reports</span>
        </div>

        <div className="reports-table">
          <div className="table-header">
            <div className="table-row header-row">
              <div className="table-cell">Report Name</div>
              <div className="table-cell">Type</div>
              <div className="table-cell">Generated</div>
              <div className="table-cell">Period</div>
              <div className="table-cell">Size</div>
              <div className="table-cell">Actions</div>
            </div>
          </div>
          <div className="table-body">
            {recentReports.map((report) => (
              <div key={report.id} className="table-row">
                <div className="table-cell">
                  <div className="report-name-cell">
                    <FileText size={16} />
                    <div className="report-info">
                      <span className="report-name">{report.name}</span>
                      <span className="report-format">{report.format}</span>
                    </div>
                  </div>
                </div>
                <div className="table-cell">
                  <span className="report-type-badge">{report.type}</span>
                </div>
                <div className="table-cell">
                  <span className="report-date">{report.generatedDate}</span>
                </div>
                <div className="table-cell">
                  <span className="report-period">{report.period}</span>
                </div>
                <div className="table-cell">
                  <span className="report-size">{report.size}</span>
                </div>
                <div className="table-cell">
                  <div className="report-actions">
                    <button 
                      className="btn-icon"
                      onClick={() => handleDownloadReport(report.id)}
                      title="Download"
                    >
                      <Download size={16} />
                    </button>
                    <button className="btn-icon" title="View">
                      👁️
                    </button>
                    <button className="btn-icon" title="Share">
                      📤
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports