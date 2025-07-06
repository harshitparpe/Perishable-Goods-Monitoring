import React from 'react'
import { Package, AlertTriangle, Thermometer, Activity } from 'lucide-react'
import './StatsCards.css'

const StatsCards = () => {
  // Mock data for stats cards
  const stats = [
    {
      id: 1,
      title: 'Total Items',
      value: '99',
      change: '+12% from last week',
      changeType: 'positive',
      icon: Package,
      color: 'blue'
    },
    {
      id: 2,
      title: 'High Risk Items',
      value: '2',
      change: '-6% from yesterday',
      changeType: 'positive',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      id: 3,
      title: 'Avg Temperature',
      value: '7.2°C',
      change: 'Optimal range',
      changeType: 'neutral',
      icon: Thermometer,
      color: 'green'
    },
    {
      id: 4,
      title: 'Active Sensors',
      value: '2/4',
      change: 'All systems operational',
      changeType: 'positive',
      icon: Activity,
      color: 'purple'
    }
  ]

  return (
    <div className="stats-cards">
      {stats.map((stat) => {
        const IconComponent = stat.icon
        return (
          <div key={stat.id} className={`stat-card stat-card-${stat.color}`}>
            <div className="stat-header">
              <div className={`stat-icon stat-icon-${stat.color}`}>
                <IconComponent size={20} />
              </div>
              <div className="stat-info">
                <h3 className="stat-title">{stat.title}</h3>
                <div className="stat-value">{stat.value}</div>
              </div>
            </div>
            <div className={`stat-change stat-change-${stat.changeType}`}>
              {stat.change}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StatsCards