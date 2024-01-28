import React from "react";
import "../Css/QuickOverview.css"; 
const QuickOverview = () => {
  return (
    <div className="quick-overview">
      <div className="overview-section">
        <h3>Statistics</h3>
        <p>Total Domains: 50</p>
        <p>Active Records: 200</p>
      </div>
      <div className="overview-section">
        <h3>Recent Activity</h3>
        <ul>
          <li>Domain Added: example.com</li>
          <li>Record Updated: mail.example.com</li>

        </ul>
      </div>
    </div>
  );
};

export default QuickOverview;
