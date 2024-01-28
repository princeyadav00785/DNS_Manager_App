<<<<<<< HEAD
// DNSRecordsTable.js

import React from "react";
import "../Css/DNSRecordsTable.css"; // Import your DNSRecordsTable styles here
=======
import React from "react";
import "../Css/DNSRecordsTable.css";
>>>>>>> origin/master

const DNSRecordsTable = () => {
  const dnsRecords = [
    { domain: "example.com", type: "A", value: "192.168.1.1" },
    { domain: "mail.example.com", type: "MX", value: "mail.server.com" },
<<<<<<< HEAD
    // Add more DNS records as needed
=======
>>>>>>> origin/master
  ];

  return (
    <div className="dns-records-table">
      <h3>DNS Records Table</h3>
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {dnsRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.domain}</td>
              <td>{record.type}</td>
              <td>{record.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DNSRecordsTable;
