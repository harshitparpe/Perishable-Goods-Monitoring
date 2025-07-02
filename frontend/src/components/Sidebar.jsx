import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    { icon: "🏠", active: true },
    { icon: "💬", active: false },
    { icon: "⭐", active: false },
    { icon: "⚙️", active: false },
    { icon: "☰", active: false },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="user-avatar">
          <img
            src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-okSb6P6VxQwXTDfYgiOiheKJpixk2a.png&w=320&q=75"
            alt="User"
          />
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`nav-item ${item.active ? "active" : ""}`}
          >
            <span className="nav-icon">{item.icon}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="nav-item">
          <span className="nav-icon">🚪</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
