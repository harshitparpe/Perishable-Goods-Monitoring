import React from 'react'
import { Wifi, WifiOff, AlertTriangle, Thermometer, Droplets } from 'lucide-react'
import './SensorNetwork.css'

const SensorNetwork = () => {
  // Mock sensor data
  const sensors = [
    {
      id: 'refrigerator-a1',
      name: 'Refrigerator A1',
      status: 'online',
      temperature: '4.2°C',
      humidity: '65%',
      lastUpdate: '21:42:38',
      type: 'refrigerator',
      color: 'green'
    },
    {
      id: 'freezer-b2',
      name: 'Freezer B2',
      status: 'online',
      temperature: '-18.5°C',
      humidity: '45%',
      lastUpdate: '21:42:38',
      type: 'freezer',
      color: 'blue'
    },
    {
      id: 'storage-c3',
      name: 'Storage Room C3',
      status: 'warning',
      temperature: '22.1°C',
      humidity: '78%',
      lastUpdate: '21:42:38',
      type: 'storage',
      color: 'yellow'
    },
    {
      id: 'medicine-d4',
      name: 'Medicine Cabinet D4',
      status: 'offline',
      temperature: '20.8°C',
      humidity: '55%',
      lastUpdate: '21:37:38',
      type: 'medicine',
      color: 'gray'
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'online':
        return <Wifi size={16} />
      case 'warning':
        return <AlertTriangle size={16} />
      case 'offline':
        return <WifiOff size={16} />
      default:
        return <WifiOff size={16} />
    }
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'online':
        return 'status-online'
      case 'warning':
        return 'status-warning'
      case 'offline':
        return 'status-offline'
      default:
        return 'status-offline'
    }
  }

  return (
    <div className="dashboard-card sensor-network">
      <div className="card-header">
        <div className="card-title">
          <Wifi size={20} />
          Sensor Network
        </div>
        <div className="network-status">
          <span className="status-indicator status-online"></span>
          <span className="status-text">2/4 Active</span>
        </div>
      </div>

      <div className="sensors-grid">
        {sensors.map((sensor) => (
          <div key={sensor.id} className={`sensor-card sensor-${sensor.color}`}>
            <div className="sensor-header">
              <div className="sensor-info">
                <h4 className="sensor-name">{sensor.name}</h4>
                <div className={`sensor-status ${getStatusClass(sensor.status)}`}>
                  {getStatusIcon(sensor.status)}
                  <span className="status-label">{sensor.status}</span>
                </div>
              </div>
              <div className="signal-strength">
                {sensor.status === 'online' && <Wifi size={16} />}
                {sensor.status === 'warning' && <AlertTriangle size={16} />}
                {sensor.status === 'offline' && <WifiOff size={16} />}
              </div>
            </div>

            <div className="sensor-readings">
              <div className="reading">
                <div className="reading-icon">
                  <Thermometer size={14} />
                </div>
                <div className="reading-info">
                  <span className="reading-label">Temperature</span>
                  <span className="reading-value">{sensor.temperature}</span>
                </div>
              </div>

              <div className="reading">
                <div className="reading-icon">
                  <Droplets size={14} />
                </div>
                <div className="reading-info">
                  <span className="reading-label">Humidity</span>
                  <span className="reading-value">{sensor.humidity}</span>
                </div>
              </div>
            </div>

            <div className="sensor-footer">
              <span className="last-update">Last update: {sensor.lastUpdate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SensorNetwork