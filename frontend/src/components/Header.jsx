import React from "react";
import "./Header.css";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="header">
      <div className="header-title">
        <h1>Perishable Goods Monitoring System</h1>
        <p className="header-subtitle">Converge Sparkathon Project</p>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="search-icon">🔍</div>
      </div>
    </div>
  );
};

export default Header;
