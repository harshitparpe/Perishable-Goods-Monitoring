import React from "react";
import "./Header.css";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="header">
      <div>Hello</div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {/* <div className="search-icon">🔍</div> */}
      </div>
    </div>
  );
};

export default Header;
