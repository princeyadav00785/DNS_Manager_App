<<<<<<< HEAD
// Sidebar.js

=======
>>>>>>> origin/master
import React from "react";
import "../Css/Sidebar.css"; // Import your sidebar styles here

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Main Navigation</h3>
        <ul>
<<<<<<< HEAD
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/domains">Domains</a></li>
          {/* Add more navigation links as needed */}
=======
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/domains">Domains</a>
          </li>
>>>>>>> origin/master
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Settings</h3>
        <ul>
<<<<<<< HEAD
          <li><a href="/profile">Profile</a></li>
          <li><a href="/account">Account</a></li>
          {/* Add more settings links as needed */}
=======
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/account">Account</a>
          </li>
>>>>>>> origin/master
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
