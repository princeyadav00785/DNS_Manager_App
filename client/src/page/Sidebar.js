import React from "react";
import "../Css/Sidebar.css"; // Import your sidebar styles here

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Main Navigation</h3>
        <ul>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/domains">Domains</a>
          </li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Settings</h3>
        <ul>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/account">Account</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
