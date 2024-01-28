import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/DNSRecordsTable.css";

const DNSRecordsTable = () => {
  const [dnsRecords, setDNSRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
  const baseURL = "http://localhost:5000/api";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/dns`);
        setDNSRecords(response.data);
      } catch (error) {
        console.error("Error fetching DNS records:", error);
        // Handle error (e.g., display an error message to the user)
      }
    };

    fetchData();
  }, []);

  // Calculate the index of the last record on the current page
  const indexOfLastRecord = currentPage * recordsPerPage;
  // Calculate the index of the first record on the current page
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Get the records for the current page
  const currentRecords = dnsRecords.slice(indexOfFirstRecord, indexOfLastRecord);

  // Filter records based on the search term
  const filteredRecords = currentRecords.filter((record) =>
    record.domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination functions
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(Math.ceil(dnsRecords.length / recordsPerPage), prevPage + 1));
  };

  // Delete a DNS record by ID
  const deleteRecord = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`${baseURL}/dns/${id}`);
        // Refresh records after deletion
        const response = await axios.get(`${baseURL}/dns`);
        setDNSRecords(response.data);
      } catch (error) {
        console.error("Error deleting DNS record:", error);
        // Handle error (e.g., display an error message to the user)
      }
    }
  };

  // Calculate total pages
  const totalPages = Math.ceil(dnsRecords.length / recordsPerPage);

  return (
    <div className="dns-records-table">
      <h3>DNS Records Table</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by domain"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="page-number">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={goToNextPage}
          disabled={indexOfLastRecord >= dnsRecords.length}
        >
          Next
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Type</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record) => (
            <tr key={record._id}>
              <td>{record.domain}</td>
              <td>{record.recordType}</td>
              <td>{record.value}</td>
              <td>
                <button
                  onClick={() => deleteRecord(record._id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DNSRecordsTable;
