// Sidebar.js

import React from "react";
import "../Css/Sidebar.css"; // Import your sidebar styles here

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Main Navigation</h3>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/domains">Domains</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Settings</h3>
        <ul>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/account">Account</a></li>
          {/* Add more settings links as needed */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
