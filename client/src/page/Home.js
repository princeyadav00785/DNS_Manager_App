import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import "../Css/Home.css";
import Sidebar from "./Sidebar";
import QuickOverview from "./QuickOverview";
import DNSRecordsTable from "./DNSRecordsTable";
import Chart from "./Chart";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ username: "Guest" });

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("authToken");
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const storedToken = localStorage.getItem("authToken");
  if (!storedToken) {
    navigate("/login");
  }

  return (
    <>
      <nav>
        <p>Welcome Home, {userData && userData.username}</p>
        <div>
          <button onClick={handleLogout}>Logout</button>
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      </nav>
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <QuickOverview />
          <DNSRecordsTable />
          <Chart />
          <Chart />
          <Chart />
          <Chart />
          
        </div>
      </div>
      {/* <div className="footer">
        <p>&copy; 2024 Your Company</p>
      </div> */}
      <Footer/>
    </>
  );
};
export default Home;
