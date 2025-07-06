import React, { useState } from 'react'
import { Thermometer, Wifi, WifiOff, AlertTriangle, Settings, Plus, Battery, Signal } from 'lucide-react'
import './style/Sensors.css'

const Sensors = () => {
  const [selectedSensor, setSelectedSensor] = useState(null)

  // Mock sensor data
  const sensorsData = [
    {
      id: 'sensor-001',
      name: 'Refrigerator A1 Sensor',
      type: 'Temperature & Humidity',
      location: 'Refrigerator A1',
      status: 'online',
      temperature: 4.2,
      humidity: 65,
      battery: 85,
      signalStrength: 95,
      lastUpdate: '2025-01-08 21:42:38',
      alerts: 0,
      calibrationDate: '2024-12-15',
      firmware: 'v2.1.3'
    },
    {
      id: 'sensor-002',
      name: 'Freezer B2 Sensor',
      type: 'Temperature & Humidity',
      location: 'Freezer B2',
      status: 'online',
      temperature: -18.5,
      humidity: 45,
      battery: 92,
      signalStrength: 88,
      lastUpdate: '2025-01-08 21:42:38',
      alerts: 0,
      calibrationDate: '2024-12-15',
      firmware: 'v2.1.3'
    },
    {
      id: 'sensor-003',
      name: 'Storage Room C3 Sensor',
      type: 'Temperature & Humidity',
      location: 'Storage Room C3',
      status: 'warning',
      temperature: 22.1,
      humidity: 78,
      battery: 45,
      signalStrength: 72,
      lastUpdate: '2025-01-08 21:42:38',
      alerts: 2,
      calibrationDate: '2024-11-20',
      firmware: 'v2.0.8'
    },
    {
      id: 'sensor-004',
      name: 'Medicine Cabinet D4 Sensor',
      type: 'Temperature & Humidity',
      location: 'Medicine Cabinet D4',
      status: 'offline',
      temperature: 20.8,
      humidity: 55,
      battery: 12,
      signalStrength: 0,
      lastUpdate: '2025-01-08 21:37:38',
      alerts: 3,
      calibrationDate: '2024-10-10',
      firmware: 'v1.9.2'
    },
    {
      id: 'sensor-005',
      name: 'Cold Storage E5 Sensor',
      type: 'Temperature & Humidity',
      location: 'Cold Storage E5',
      status: 'online',
      temperature: 2.8,
      humidity: 70,
      battery: 78,
      signalStrength: 91,
      lastUpdate: '2025-01-08 21:42:38',
      alerts: 0,
      calibrationDate: '2024-12-20',
      firmware: 'v2.1.3'
    },
    {
      id: 'sensor-006',
      name: 'Pharmacy Storage F6 Sensor',
      type: 'Temperature & Humidity',
      location: 'Pharmacy Storage F6',
      status: 'warning',
      temperature: 25.3,
      humidity: 82,
      battery: 67,
      signalStrength: 65,
      lastUpdate: '2025-01-08 21:41:15',
      alerts: 1,
      calibrationDate: '2024-11-30',
      firmware: 'v2.1.1'
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'online':
        return <Wifi size={16} className="status-online" />
      case 'warning':
        return <AlertTriangle size={16} className="status-warning" />
      case 'offline':
        return <WifiOff size={16} className="status-offline" />
      default:
        return <WifiOff size={16} className="status-offline" />
    }
  }

  const getBatteryColor = (battery) => {
    if (battery > 60) return 'battery-good'
    if (battery > 30) return 'battery-medium'
    return 'battery-low'
  }

  const getSignalBars = (strength) => {
    const bars = Math.ceil(strength / 25)
    return Array.from({ length: 4 }, (_, i) => (
      <div
        key={i}
        className={`signal-bar ${i < bars ? 'active' : ''}`}
      />
    ))
  }

  const onlineSensors = sensorsData.filter(s => s.status === 'online').length
  const warningSensors = sensorsData.filter(s => s.status === 'warning').length
  const offlineSensors = sensorsData.filter(s => s.status === 'offline').length
  const totalAlerts = sensorsData.reduce((sum, s) => sum + s.alerts, 0)

  return (
    <div className="sensors-page fade-in">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-title">
            <Thermometer size={24} />
            <div>
              <h1>Sensor Management</h1>
              <p>Monitor and configure IoT sensors across all locations</p>
            </div>
          </div>
          <div className="header-actions">
            <button className="btn btn-secondary">
              <Settings size={18} />
              Configure
            </button>
            <button className="btn btn-primary">
              <Plus size={18} />
              Add Sensor
            </button>
          </div>
        </div>
      </div>

      {/* Network Overview */}
      <div className="network-overview">
        <div className="overview-card online">
          <div className="overview-icon">
            <Wifi size={24} />
          </div>
          <div className="overview-info">
            <span className="overview-value">{onlineSensors}</span>
            <span className="overview-label">Online</span>
          </div>
        </div>
        <div className="overview-card warning">
          <div className="overview-icon">
            <AlertTriangle size={24} />
          </div>
          <div className="overview-info">
            <span className="overview-value">{warningSensors}</span>
            <span className="overview-label">Warning</span>
          </div>
        </div>
        <div className="overview-card offline">
          <div className="overview-icon">
            <WifiOff size={24} />
          </div>
          <div className="overview-info">
            <span className="overview-value">{offlineSensors}</span>
            <span className="overview-label">Offline</span>
          </div>
        </div>
        <div className="overview-card alerts">
          <div className="overview-icon">
            <AlertTriangle size={24} />
          </div>
          <div className="overview-info">
            <span className="overview-value">{totalAlerts}</span>
            <span className="overview-label">Active Alerts</span>
          </div>
        </div>
      </div>

      {/* Sensors Grid */}
      <div className="sensors-grid">
        {sensorsData.map((sensor) => (
          <div
            key={sensor.id}
            className={`sensor-card ${sensor.status} ${selectedSensor?.id === sensor.id ? 'selected' : ''}`}
            onClick={() => setSelectedSensor(sensor)}
          >
            <div className="sensor-header">
              <div className="sensor-info">
                <h3 className="sensor-name">{sensor.name}</h3>
                <p className="sensor-location">{sensor.location}</p>
              </div>
              <div className="sensor-status">
                {getStatusIcon(sensor.status)}
                <span className={`status-text status-${sensor.status}`}>
                  {sensor.status.charAt(0).toUpperCase() + sensor.status.slice(1)}
                </span>
              </div>
            </div>

            <div className="sensor-readings">
              <div className="reading-item">
                <Thermometer size={16} />
                <div className="reading-info">
                  <span className="reading-label">Temperature</span>
                  <span className="reading-value">{sensor.temperature}°C</span>
                </div>
              </div>
              <div className="reading-item">
                <div className="humidity-icon">💧</div>
                <div className="reading-info">
                  <span className="reading-label">Humidity</span>
                  <span className="reading-value">{sensor.humidity}%</span>
                </div>
              </div>
            </div>

            <div className="sensor-metrics">
              <div className="metric-item">
                <Battery size={14} />
                <div className="metric-info">
                  <span className="metric-label">Battery</span>
                  <div className={`battery-indicator ${getBatteryColor(sensor.battery)}`}>
                    <div 
                      className="battery-fill" 
                      style={{ width: `${sensor.battery}%` }}
                    />
                  </div>
                  <span className="metric-value">{sensor.battery}%</span>
                </div>
              </div>
              <div className="metric-item">
                <Signal size={14} />
                <div className="metric-info">
                  <span className="metric-label">Signal</span>
                  <div className="signal-indicator">
                    {getSignalBars(sensor.signalStrength)}
                  </div>
                  <span className="metric-value">{sensor.signalStrength}%</span>
                </div>
              </div>
            </div>

            <div className="sensor-footer">
              <span className="last-update">Last update: {sensor.lastUpdate}</span>
              {sensor.alerts > 0 && (
                <span className="alert-count">{sensor.alerts} alerts</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Sensor Details Panel */}
      {selectedSensor && (
        <div className="sensor-details">
          <div className="details-header">
            <h2>Sensor Details</h2>
            <button 
              className="close-btn"
              onClick={() => setSelectedSensor(null)}
            >
              ✕
            </button>
          </div>
          
          <div className="details-content">
            <div className="details-section">
              <h3>Basic Information</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Sensor ID:</span>
                  <span className="detail-value">{selectedSensor.id}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Type:</span>
                  <span className="detail-value">{selectedSensor.type}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{selectedSensor.location}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Firmware:</span>
                  <span className="detail-value">{selectedSensor.firmware}</span>
                </div>
              </div>
            </div>

            <div className="details-section">
              <h3>Current Readings</h3>
              <div className="readings-grid">
                <div className="reading-card">
                  <Thermometer size={20} />
                  <div className="reading-data">
                    <span className="reading-title">Temperature</span>
                    <span className="reading-big">{selectedSensor.temperature}°C</span>
                  </div>
                </div>
                <div className="reading-card">
                  <div className="humidity-icon">💧</div>
                  <div className="reading-data">
                    <span className="reading-title">Humidity</span>
                    <span className="reading-big">{selectedSensor.humidity}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="details-section">
              <h3>System Status</h3>
              <div className="status-grid">
                <div className="status-item">
                  <span className="status-label">Battery Level:</span>
                  <div className="status-value">
                    <div className={`battery-indicator ${getBatteryColor(selectedSensor.battery)}`}>
                      <div 
                        className="battery-fill" 
                        style={{ width: `${selectedSensor.battery}%` }}
                      />
                    </div>
                    <span>{selectedSensor.battery}%</span>
                  </div>
                </div>
                <div className="status-item">
                  <span className="status-label">Signal Strength:</span>
                  <div className="status-value">
                    <div className="signal-indicator">
                      {getSignalBars(selectedSensor.signalStrength)}
                    </div>
                    <span>{selectedSensor.signalStrength}%</span>
                  </div>
                </div>
                <div className="status-item">
                  <span className="status-label">Last Calibration:</span>
                  <span className="status-value">{selectedSensor.calibrationDate}</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Active Alerts:</span>
                  <span className={`status-value ${selectedSensor.alerts > 0 ? 'has-alerts' : ''}`}>
                    {selectedSensor.alerts}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sensors