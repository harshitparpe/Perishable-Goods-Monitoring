import React from 'react'
import { Search, Bell, User } from 'lucide-react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Page Title */}
        <div className="header-title">
          <h1>Perishable Goods Monitor</h1>
          <span className="header-subtitle">v1.0 Beta</span>
        </div>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Search Bar */}
          <div className="search-container">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search items, sensors, alerts..."
              className="search-input"
            />
          </div>

          {/* Notifications */}
          <button className="notification-btn">
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>

          {/* User Profile */}
          <div className="user-menu">
            <button className="user-btn">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1" 
                alt="User" 
                className="user-avatar"
              />
              <span className="user-name">HP</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header