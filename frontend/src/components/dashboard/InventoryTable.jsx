import React from "react";
import { Package, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import "./InventoryTable.css";

const InventoryTable = () => {
  const inventoryData = [
    {
      id: 1,
      name: "Fresh Milk",
      category: "Dairy",
      location: "Refrigerator A1",
      quantity: 24,
      unit: "bottles",
      expiryDate: "2025-01-15",
      status: "good",
      daysLeft: 7,
    },
    {
      id: 2,
      name: "Organic Vegetables",
      category: "Produce",
      location: "Storage Room C3",
      quantity: 48,
      unit: "kg",
      expiryDate: "2025-01-09",
      status: "warning",
      daysLeft: 1,
    },
    {
      id: 3,
      name: "Fresh Bread",
      category: "Bakery",
      location: "Storage Room C3",
      quantity: 20,
      unit: "loaves",
      expiryDate: "2025-01-10",
      status: "critical",
      daysLeft: 2,
    },
    {
      id: 4,
      name: "Insulin Vials",
      category: "Medicine",
      location: "Medicine Cabinet D4",
      quantity: 12,
      unit: "vials",
      expiryDate: "2025-01-20",
      status: "good",
      daysLeft: 12,
    },
    {
      id: 5,
      name: "Frozen Meat",
      category: "Protein",
      location: "Freezer B2",
      quantity: 15,
      unit: "kg",
      expiryDate: "2025-02-08",
      status: "excellent",
      daysLeft: 31,
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "excellent":
        return <CheckCircle size={16} className="status-excellent" />;
      case "good":
        return <CheckCircle size={16} className="status-good" />;
      case "warning":
        return <AlertTriangle size={16} className="status-warning" />;
      case "critical":
        return <AlertTriangle size={16} className="status-critical" />;
      default:
        return <Clock size={16} className="status-unknown" />;
    }
  };

  const getExpiryStatus = (daysLeft) => {
    if (daysLeft <= 1) return "expires-critical";
    if (daysLeft <= 3) return "expires-warning";
    if (daysLeft <= 7) return "expires-soon";
    return "expires-good";
  };

  return (
    <div className="inventory-table card-hover">
      <div className="table-header">
        <div className="header-title">
          <Package size={20} />
          <h3>Inventory Overview</h3>
        </div>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="table-container">
        <table className="inventory-table-content">
          <thead>
            <tr>
              <th>Item</th>
              <th>Location</th>
              <th>Quantity</th>
              <th>Expires</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr key={item.id} className="table-row">
                <td className="item-cell">
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-category">{item.category}</span>
                  </div>
                </td>
                <td className="location-cell">
                  <span className="location-name">{item.location}</span>
                </td>
                <td className="quantity-cell">
                  <span className="quantity-value">{item.quantity}</span>
                  <span className="quantity-unit">{item.unit}</span>
                </td>
                <td className="expiry-cell">
                  <div className="expiry-info">
                    <span
                      className={`expiry-date ${getExpiryStatus(
                        item.daysLeft
                      )}`}
                    >
                      {item.expiryDate}
                    </span>
                    <span className="days-left">{item.daysLeft} days left</span>
                  </div>
                </td>
                <td className="status-cell">
                  <div className="status-info">
                    {getStatusIcon(item.status)}
                    <span className={`status-text status-${item.status}`}>
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
