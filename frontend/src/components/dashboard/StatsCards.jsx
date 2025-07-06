import React from "react";
import { Package, AlertTriangle, TrendingUp, Thermometer } from "lucide-react";
import "./StatsCards.css";

const StatsCards = () => {
  const stats = [
    {
      id: 1,
      title: "Total Items",
      value: "1,247",
      change: "+58",
      changeType: "increase",
      icon: Package,
      color: "blue",
    },
    {
      id: 2,
      title: "Critical Alerts",
      value: "23",
      change: "-5",
      changeType: "decrease",
      icon: AlertTriangle,
      color: "red",
    },
    {
      id: 3,
      title: "Spoilage Rate",
      value: "12.5%",
      change: "-1.8%",
      changeType: "decrease",
      icon: TrendingUp,
      color: "green",
    },
    {
      id: 4,
      title: "Avg Temperature",
      value: "7.2°C",
      change: "+0.3°C",
      changeType: "increase",
      icon: Thermometer,
      color: "purple",
    },
  ];

  return (
    <div className="stats-cards">
      {stats.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <div key={stat.id} className={`stat-card ${stat.color}`}>
            <div className="stat-icon">
              <IconComponent size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-header">
                <h3 className="stat-title">{stat.title}</h3>
                <span className={`stat-change ${stat.changeType}`}>
                  {stat.change}
                </span>
              </div>
              <div className="stat-value">{stat.value}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
