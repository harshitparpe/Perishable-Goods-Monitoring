import React from 'react'
import { Package2, MapPin, Clock, AlertCircle } from 'lucide-react'
import './InventoryTable.css'

const InventoryTable = () => {
  // Mock inventory data
  const inventoryData = [
    {
      id: 1,
      item: 'Fresh Milk',
      category: 'Dairy',
      location: 'Refrigerator A1',
      quantity: 24,
      expires: '2 days',
      condition: 'Good',
      riskLevel: 'low'
    },
    {
      id: 2,
      item: 'Insulin Vials',
      category: 'Medicine',
      location: 'Medicine Cabinet D4',
      quantity: 12,
      expires: '7 days',
      condition: 'Good',
      riskLevel: 'low'
    },
    {
      id: 3,
      item: 'Organic Vegetables',
      category: 'Produce',
      location: 'Storage Room C3',
      quantity: 48,
      expires: 'Tomorrow',
      condition: 'Warning',
      riskLevel: 'high'
    },
    {
      id: 4,
      item: 'Frozen Meat',
      category: 'Protein',
      location: 'Freezer B2',
      quantity: 15,
      expires: '30 days',
      condition: 'Excellent',
      riskLevel: 'low'
    }
  ]

  const getRiskBadge = (riskLevel) => {
    const classes = {
      low: 'risk-badge risk-low',
      medium: 'risk-badge risk-medium',
      high: 'risk-badge risk-high'
    }
    
    const labels = {
      low: 'Low Risk',
      medium: 'Medium Risk',
      high: 'High Risk'
    }

    return (
      <span className={classes[riskLevel]}>
        {labels[riskLevel]}
      </span>
    )
  }

  const getConditionIcon = (condition) => {
    switch (condition) {
      case 'Excellent':
        return <div className="condition-icon excellent">✓</div>
      case 'Good':
        return <div className="condition-icon good">✓</div>
      case 'Warning':
        return <div className="condition-icon warning">⚠</div>
      case 'Critical':
        return <div className="condition-icon critical">✕</div>
      default:
        return <div className="condition-icon good">✓</div>
    }
  }

  return (
    <div className="dashboard-card inventory-table">
      <div className="card-header">
        <div className="card-title">
          <Package2 size={20} />
          Inventory Overview
        </div>
        <button className="view-all-btn">
          View All
        </button>
      </div>

      <div className="table-container">
        <table className="inventory-table-element">
          <thead>
            <tr>
              <th>Item</th>
              <th>Location</th>
              <th>Quantity</th>
              <th>Expires</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr key={item.id} className="table-row">
                <td className="item-cell">
                  <div className="item-info">
                    <div className="item-name">{item.item}</div>
                    <div className="item-category">{item.category}</div>
                  </div>
                </td>
                <td className="location-cell">
                  <div className="location-info">
                    <MapPin size={14} className="location-icon" />
                    <span>{item.location}</span>
                  </div>
                </td>
                <td className="quantity-cell">
                  <span className="quantity-value">{item.quantity}</span>
                </td>
                <td className="expires-cell">
                  <div className="expires-info">
                    <Clock size={14} className="expires-icon" />
                    <span className={item.expires === 'Tomorrow' ? 'expires-soon' : ''}>
                      {item.expires}
                    </span>
                  </div>
                </td>
                <td className="condition-cell">
                  <div className="condition-info">
                    {getConditionIcon(item.condition)}
                    <span className="condition-text">{item.condition}</span>
                    {getRiskBadge(item.riskLevel)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InventoryTable