import React, { useState } from 'react'
import { AlertTriangle, Bell, CheckCircle, Clock, X, Filter, Search } from 'lucide-react'
import './style/Alerts.css'

const Alerts = () => {
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterPriority, setFilterPriority] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Mock alerts data
  const alertsData = [
    {
      id: 1,
      title: 'High Spoilage Risk Detected',
      message: 'Organic Vegetables in Storage Room C3 showing 95% spoilage probability',
      type: 'spoilage',
      priority: 'critical',
      status: 'active',
      timestamp: '2025-01-08 21:45:00',
      location: 'Storage Room C3',
      item: 'Organic Vegetables Batch #GF2025003',
      actions: ['Move to front shelf', 'Apply discount', 'Monitor closely']
    },
    {
      id: 2,
      title: 'Temperature Alert',
      message: 'Medicine Cabinet D4 temperature exceeds safe range (25.3°C)',
      type: 'temperature',
      priority: 'high',
      status: 'active',
      timestamp: '2025-01-08 21:30:00',
      location: 'Medicine Cabinet D4',
      item: 'Multiple medicine items',
      actions: ['Check cooling system', 'Relocate items', 'Contact maintenance']
    },
    {
      id: 3,
      title: 'Sensor Offline',
      message: 'Medicine Cabinet D4 sensor has been offline for 8 minutes',
      type: 'system',
      priority: 'medium',
      status: 'active',
      timestamp: '2025-01-08 21:37:00',
      location: 'Medicine Cabinet D4',
      item: 'Sensor #sensor-004',
      actions: ['Check connection', 'Replace battery', 'Reset sensor']
    },
    {
      id: 4,
      title: 'Batch Expiry Warning',
      message: 'Fresh Bread Batch #LB2025006 expires in 12 hours',
      type: 'expiry',
      priority: 'high',
      status: 'acknowledged',
      timestamp: '2025-01-08 20:15:00',
      location: 'Storage Room C3',
      item: 'Fresh Bread Batch #LB2025006',
      actions: ['Immediate sale', 'Apply discount', 'Consider donation']
    },
    {
      id: 5,
      title: 'Humidity Level High',
      message: 'Storage Room C3 humidity at 82% - above recommended level',
      type: 'humidity',
      priority: 'medium',
      status: 'resolved',
      timestamp: '2025-01-08 19:45:00',
      location: 'Storage Room C3',
      item: 'Multiple items affected',
      actions: ['Adjust ventilation', 'Check dehumidifier', 'Monitor levels']
    },
    {
      id: 6,
      title: 'Low Battery Warning',
      message: 'Storage Room C3 sensor battery at 45%',
      type: 'system',
      priority: 'low',
      status: 'active',
      timestamp: '2025-01-08 18:30:00',
      location: 'Storage Room C3',
      item: 'Sensor #sensor-003',
      actions: ['Schedule battery replacement', 'Monitor battery level']
    },
    {
      id: 7,
      title: 'Spoilage Prediction Alert',
      message: 'Fresh Milk Batch #DF2025001 predicted 85% spoilage risk in 48 hours',
      type: 'spoilage',
      priority: 'medium',
      status: 'acknowledged',
      timestamp: '2025-01-08 17:20:00',
      location: 'Refrigerator A1',
      item: 'Fresh Milk Batch #DF2025001',
      actions: ['Priority sale', 'Apply discount', 'Bundle offer']
    },
    {
      id: 8,
      title: 'System Maintenance Required',
      message: 'Freezer B2 requires scheduled maintenance check',
      type: 'system',
      priority: 'low',
      status: 'resolved',
      timestamp: '2025-01-08 16:00:00',
      location: 'Freezer B2',
      item: 'Freezer system',
      actions: ['Schedule maintenance', 'Check performance metrics']
    }
  ]

  const getAlertIcon = (type) => {
    switch (type) {
      case 'spoilage':
        return '🦠'
      case 'temperature':
        return '🌡️'
      case 'humidity':
        return '💧'
      case 'expiry':
        return '⏰'
      case 'system':
        return '⚙️'
      default:
        return '⚠️'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical':
        return 'priority-critical'
      case 'high':
        return 'priority-high'
      case 'medium':
        return 'priority-medium'
      case 'low':
        return 'priority-low'
      default:
        return 'priority-medium'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <AlertTriangle size={16} className="status-active" />
      case 'acknowledged':
        return <Clock size={16} className="status-acknowledged" />
      case 'resolved':
        return <CheckCircle size={16} className="status-resolved" />
      default:
        return <AlertTriangle size={16} className="status-active" />
    }
  }

  const filteredAlerts = alertsData.filter(alert => {
    const matchesStatus = filterStatus === 'all' || alert.status === filterStatus
    const matchesPriority = filterPriority === 'all' || alert.priority === filterPriority
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesStatus && matchesPriority && matchesSearch
  })

  const activeAlerts = alertsData.filter(a => a.status === 'active').length
  const criticalAlerts = alertsData.filter(a => a.priority === 'critical' && a.status === 'active').length
  const acknowledgedAlerts = alertsData.filter(a => a.status === 'acknowledged').length
  const resolvedToday = alertsData.filter(a => a.status === 'resolved').length

  const handleDismissAlert = (alertId) => {
    // In a real app, this would update the alert status
    console.log('Dismissing alert:', alertId)
  }

  const handleAcknowledgeAlert = (alertId) => {
    // In a real app, this would update the alert status
    console.log('Acknowledging alert:', alertId)
  }

  return (
    <div className="alerts-page fade-in">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-title">
            <Bell size={24} />
            <div>
              <h1>Alerts & Notifications</h1>
              <p>Monitor and manage system alerts and notifications</p>
            </div>
          </div>
          <div className="header-actions">
            <button className="btn btn-secondary">
              <Filter size={18} />
              Advanced Filter
            </button>
            <button className="btn btn-primary">
              <CheckCircle size={18} />
              Mark All Read
            </button>
          </div>
        </div>
      </div>

      {/* Alert Statistics */}
      <div className="alert-stats">
        <div className="stat-card active">
          <div className="stat-icon">
            <AlertTriangle size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-value">{activeAlerts}</span>
            <span className="stat-label">Active Alerts</span>
          </div>
        </div>
        <div className="stat-card critical">
          <div className="stat-icon">
            <AlertTriangle size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-value">{criticalAlerts}</span>
            <span className="stat-label">Critical</span>
          </div>
        </div>
        <div className="stat-card acknowledged">
          <div className="stat-icon">
            <Clock size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-value">{acknowledgedAlerts}</span>
            <span className="stat-label">Acknowledged</span>
          </div>
        </div>
        <div className="stat-card resolved">
          <div className="stat-icon">
            <CheckCircle size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-value">{resolvedToday}</span>
            <span className="stat-label">Resolved Today</span>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="alerts-controls">
        <div className="search-section">
          <div className="search-container">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search alerts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-group">
            <span>Status:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="acknowledged">Acknowledged</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>

          <div className="filter-group">
            <span>Priority:</span>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Priorities</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Alerts List */}
      <div className="alerts-container">
        <div className="alerts-header">
          <h3>Recent Alerts</h3>
          <span className="alerts-count">{filteredAlerts.length} alerts</span>
        </div>

        <div className="alerts-list">
          {filteredAlerts.map((alert) => (
            <div key={alert.id} className={`alert-card ${alert.priority} ${alert.status}`}>
              <div className="alert-header">
                <div className="alert-type">
                  <span className="alert-icon">{getAlertIcon(alert.type)}</span>
                  <div className="alert-info">
                    <h4 className="alert-title">{alert.title}</h4>
                    <p className="alert-timestamp">{alert.timestamp}</p>
                  </div>
                </div>
                <div className="alert-badges">
                  <span className={`priority-badge ${getPriorityColor(alert.priority)}`}>
                    {alert.priority.toUpperCase()}
                  </span>
                  <div className="status-badge">
                    {getStatusIcon(alert.status)}
                    <span className={`status-text status-${alert.status}`}>
                      {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="alert-content">
                <p className="alert-message">{alert.message}</p>
                <div className="alert-details">
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">{alert.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Item:</span>
                    <span className="detail-value">{alert.item}</span>
                  </div>
                </div>
              </div>

              <div className="alert-actions">
                <div className="recommended-actions">
                  <span className="actions-label">Recommended Actions:</span>
                  <div className="actions-list">
                    {alert.actions.map((action, index) => (
                      <span key={index} className="action-tag">
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="alert-buttons">
                  {alert.status === 'active' && (
                    <>
                      <button 
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleAcknowledgeAlert(alert.id)}
                      >
                        Acknowledge
                      </button>
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => handleDismissAlert(alert.id)}
                      >
                        Resolve
                      </button>
                    </>
                  )}
                  {alert.status === 'acknowledged' && (
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => handleDismissAlert(alert.id)}
                    >
                      Mark Resolved
                    </button>
                  )}
                  <button className="btn-icon dismiss-btn" title="Dismiss">
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAlerts.length === 0 && (
          <div className="no-alerts">
            <div className="no-alerts-icon">
              <CheckCircle size={48} />
            </div>
            <h3>No alerts found</h3>
            <p>All systems are running smoothly or no alerts match your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Alerts