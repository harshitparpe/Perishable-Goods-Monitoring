import React, { useEffect, useRef } from 'react'
import { 
  Home, 
  Package, 
  Thermometer, 
  TrendingUp, 
  Brain, 
  AlertTriangle, 
  FileText, 
  Settings 
} from 'lucide-react'
import './style/Sidebar.css'

const Sidebar = ({ activePage, setActivePage, isOpen, setIsOpen }) => {
  const sidebarRef = useRef(null)

  // Navigation menu items with icons and labels
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'sensors', label: 'Sensors', icon: Thermometer },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'predictions', label: 'Predictions', icon: Brain },
    { id: 'alerts', label: 'Alerts', icon: AlertTriangle },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  // Handle clicks outside sidebar to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, setIsOpen])

  const handleNavItemClick = (itemId) => {
    setActivePage(itemId)
    // Close sidebar on mobile after selection
    if (window.innerWidth <= 1024) {
      setIsOpen(false)
    }
  }

  return (
    <div 
      ref={sidebarRef}
      className={`sidebar ${isOpen ? 'open' : ''}`}
    >
      {/* Logo and Brand */}
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <TrendingUp size={24} />
          </div>
          <div className="logo-text">
            <h2>PGM System</h2>
            <span className="version">v1.0 Beta</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => {
            const IconComponent = item.icon
            return (
              <li key={item.id}>
                <button
                  className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavItemClick(item.id)}
                >
                  <IconComponent size={20} className="nav-icon" />
                  <span className="nav-label">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Profile Section */}
      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">
            <img 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1" 
              alt="User Avatar" 
            />
          </div>
          <div className="user-info">
            <div className="user-name">Abhinav Dubey</div>
            <div className="user-role">System Admin</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar