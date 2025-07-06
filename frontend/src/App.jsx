import React, { useState } from "react";
import Alerts from "./components/Alerts";
import Analytics from "./components/Analytics";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Predictions from "./components/Predictions";
import Reports from "./components/Reports";
import Sensors from "./components/Sensors";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  // State to track the active page/component
  const [activePage, setActivePage] = useState("dashboard");
  // State to control sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to render the appropriate component based on active page
  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "inventory":
        return <Inventory />;
      case "sensors":
        return <Sensors />;
      case "analytics":
        return <Analytics />;
      case "predictions":
        return <Predictions />;
      case "alerts":
        return <Alerts />;
      case "reports":
        return <Reports />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      {/* Sidebar Navigation */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="main-content">
        {/* Header with title and user info */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Dynamic Content based on active page */}
        <main className="content">{renderContent()}</main>
      </div>
    </div>
  );
}

export default App;
