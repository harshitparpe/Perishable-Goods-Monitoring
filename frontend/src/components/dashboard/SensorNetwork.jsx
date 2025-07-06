import React from "react";
import {
  Wifi,
  WifiOff,
  AlertTriangle,
  Battery,
  Thermometer,
} from "lucide-react";
import "./SensorNetwork.css";

const SensorNetwork = () => {
  const sensors = [
    {
      id: "sensor-001",
      name: "Refrigerator A1",
      status: "online",
      temperature: 4.2,
      humidity: 65,
      battery: 85,
      lastUpdate: "2 min ago",
    },
    {
      id: "sensor-002",
      name: "Freezer B2",
      status: "online",
      temperature: -18.5,
      humidity: 45,
      battery: 92,
      lastUpdate: "1 min ago",
    },
    {
      id: "sensor-003",
      name: "Storage Room C3",
      status: "warning",
      temperature: 22.1,
      humidity: 78,
      battery: 45,
      lastUpdate: "3 min ago",
    },
    {
      id: "sensor-004",
      name: "Medicine Cabinet D4",
      status: "offline",
      temperature: 20.8,
      humidity: 55,
      battery: 12,
      lastUpdate: "8 min ago",
    },
    {
      id: "sensor-005",
      name: "Cold Storage E5",
      status: "online",
      temperature: 2.8,
      humidity: 70,
      battery: 78,
      lastUpdate: "1 min ago",
    },
    {
      id: "sensor-006",
      name: "Pharmacy Storage F6",
      status: "warning",
      temperature: 25.3,
      humidity: 82,
      battery: 67,
      lastUpdate: "4 min ago",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "online":
        return <Wifi size={16} className="status-online" />;
      case "warning":
        return <AlertTriangle size={16} className="status-warning" />;
      case "offline":
        return <WifiOff size={16} className="status-offline" />;
      default:
        return <WifiOff size={16} className="status-offline" />;
    }
  };

  const getBatteryColor = (battery) => {
    if (battery > 60) return "battery-good";
    if (battery > 30) return "battery-medium";
    return "battery-low";
  };

  const onlineSensors = sensors.filter((s) => s.status === "online").length;
  const totalSensors = sensors.length;

  return (
    <div className="sensor-network card-hover">
      <div className="network-header">
        <div className="header-title">
          <Thermometer size={20} />
          <h3>Sensor Network</h3>
        </div>
        <div className="network-status">
          <span className="status-indicator online"></span>
          <span className="status-text">
            {onlineSensors}/{totalSensors} Online
          </span>
        </div>
      </div>

      <div className="sensors-grid">
        {sensors.map((sensor) => (
          <div key={sensor.id} className={`sensor-item ${sensor.status}`}>
            <div className="sensor-header">
              <div className="sensor-name">{sensor.name}</div>
              <div className="sensor-status">
                {getStatusIcon(sensor.status)}
              </div>
            </div>

            <div className="sensor-readings">
              <div className="reading">
                <Thermometer size={12} />
                <span>{sensor.temperature}°C</span>
              </div>
              <div className="reading">
                <span className="humidity-icon">💧</span>
                <span>{sensor.humidity}%</span>
              </div>
            </div>

            <div className="sensor-footer">
              <div className="battery-status">
                <Battery size={12} />
                <div
                  className={`battery-bar ${getBatteryColor(sensor.battery)}`}
                >
                  <div
                    className="battery-fill"
                    style={{ width: `${sensor.battery}%` }}
                  />
                </div>
                <span className="battery-text">{sensor.battery}%</span>
              </div>
              <span className="last-update">{sensor.lastUpdate}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="network-footer">
        <button className="manage-sensors-btn">Manage Sensors</button>
      </div>
    </div>
  );
};

export default SensorNetwork;
