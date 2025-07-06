import React, { useState } from 'react'
import { Package, Plus, Search, Filter, Download, AlertTriangle, CheckCircle, Clock } from 'lucide-react'
import './style/Inventory.css'

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')

  // Mock inventory data
  const inventoryData = [
    {
      id: 1,
      name: 'Fresh Milk',
      category: 'Dairy',
      location: 'Refrigerator A1',
      quantity: 24,
      unit: 'bottles',
      expiryDate: '2025-01-15',
      status: 'good',
      temperature: 4.2,
      humidity: 65,
      supplier: 'Dairy Farm Co.',
      batchNumber: 'DF2025001'
    },
    {
      id: 2,
      name: 'Insulin Vials',
      category: 'Medicine',
      location: 'Medicine Cabinet D4',
      quantity: 12,
      unit: 'vials',
      expiryDate: '2025-01-20',
      status: 'good',
      temperature: 20.8,
      humidity: 55,
      supplier: 'MedSupply Inc.',
      batchNumber: 'MS2025002'
    },
    {
      id: 3,
      name: 'Organic Vegetables',
      category: 'Produce',
      location: 'Storage Room C3',
      quantity: 48,
      unit: 'kg',
      expiryDate: '2025-01-09',
      status: 'warning',
      temperature: 22.1,
      humidity: 78,
      supplier: 'Green Farms',
      batchNumber: 'GF2025003'
    },
    {
      id: 4,
      name: 'Frozen Meat',
      category: 'Protein',
      location: 'Freezer B2',
      quantity: 15,
      unit: 'kg',
      expiryDate: '2025-02-08',
      status: 'excellent',
      temperature: -18.5,
      humidity: 45,
      supplier: 'Premium Meats',
      batchNumber: 'PM2025004'
    },
    {
      id: 5,
      name: 'Antibiotics',
      category: 'Medicine',
      location: 'Medicine Cabinet D4',
      quantity: 30,
      unit: 'boxes',
      expiryDate: '2025-03-15',
      status: 'good',
      temperature: 20.5,
      humidity: 52,
      supplier: 'PharmaCorp',
      batchNumber: 'PC2025005'
    },
    {
      id: 6,
      name: 'Fresh Bread',
      category: 'Bakery',
      location: 'Storage Room C3',
      quantity: 20,
      unit: 'loaves',
      expiryDate: '2025-01-10',
      status: 'critical',
      temperature: 21.0,
      humidity: 70,
      supplier: 'Local Bakery',
      batchNumber: 'LB2025006'
    }
  ]

  const categories = ['all', 'Dairy', 'Medicine', 'Produce', 'Protein', 'Bakery']

  // Filter and sort data
  const filteredData = inventoryData
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = filterCategory === 'all' || item.category === filterCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'expiry':
          return new Date(a.expiryDate) - new Date(b.expiryDate)
        case 'quantity':
          return b.quantity - a.quantity
        case 'status':
          return a.status.localeCompare(b.status)
        default:
          return 0
      }
    })

  const getStatusIcon = (status) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle size={16} className="status-excellent" />
      case 'good':
        return <CheckCircle size={16} className="status-good" />
      case 'warning':
        return <AlertTriangle size={16} className="status-warning" />
      case 'critical':
        return <AlertTriangle size={16} className="status-critical" />
      default:
        return <Clock size={16} className="status-unknown" />
    }
  }

  const getDaysUntilExpiry = (expiryDate) => {
    const today = new Date()
    const expiry = new Date(expiryDate)
    const diffTime = expiry - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const getExpiryStatus = (expiryDate) => {
    const days = getDaysUntilExpiry(expiryDate)
    if (days < 0) return 'expired'
    if (days <= 1) return 'expires-today'
    if (days <= 3) return 'expires-soon'
    return 'expires-later'
  }

  return (
    <div className="inventory-page fade-in">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-title">
            <Package size={24} />
            <div>
              <h1>Inventory Management</h1>
              <p>Monitor and manage all perishable goods</p>
            </div>
          </div>
          <div className="header-actions">
            <button className="btn btn-secondary">
              <Download size={18} />
              Export
            </button>
            <button className="btn btn-primary">
              <Plus size={18} />
              Add Item
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="inventory-stats">
        <div className="stat-card">
          <div className="stat-icon excellent">
            <CheckCircle size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-value">4</span>
            <span className="stat-label">Excellent</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon good">
            <CheckCircle size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-value">2</span>
            <span className="stat-label">Good</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon warning">
            <AlertTriangle size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-value">1</span>
            <span className="stat-label">Warning</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon critical">
            <AlertTriangle size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-value">1</span>
            <span className="stat-label">Critical</span>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="inventory-controls">
        <div className="search-section">
          <div className="search-container">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search items, categories, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-group">
            <Filter size={16} />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="sort-group">
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="name">Name</option>
              <option value="expiry">Expiry Date</option>
              <option value="quantity">Quantity</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="inventory-table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Location</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
              <th>Status</th>
              <th>Conditions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="table-row">
                <td className="item-cell">
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-batch">Batch: {item.batchNumber}</span>
                  </div>
                </td>
                <td className="category-cell">
                  <span className="category-badge">{item.category}</span>
                </td>
                <td className="location-cell">{item.location}</td>
                <td className="quantity-cell">
                  <span className="quantity-value">{item.quantity}</span>
                  <span className="quantity-unit">{item.unit}</span>
                </td>
                <td className="expiry-cell">
                  <div className="expiry-info">
                    <span className={`expiry-date ${getExpiryStatus(item.expiryDate)}`}>
                      {item.expiryDate}
                    </span>
                    <span className="days-remaining">
                      {getDaysUntilExpiry(item.expiryDate)} days
                    </span>
                  </div>
                </td>
                <td className="status-cell">
                  <div className="status-info">
                    {getStatusIcon(item.status)}
                    <span className={`status-text status-${item.status}`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </div>
                </td>
                <td className="conditions-cell">
                  <div className="conditions-info">
                    <span className="temp">{item.temperature}°C</span>
                    <span className="humidity">{item.humidity}%</span>
                  </div>
                </td>
                <td className="actions-cell">
                  <div className="action-buttons">
                    <button className="btn-icon" title="Edit">✏️</button>
                    <button className="btn-icon" title="Delete">🗑️</button>
                    <button className="btn-icon" title="Details">👁️</button>
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

export default Inventory