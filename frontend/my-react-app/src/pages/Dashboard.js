import React from "react";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "260px", width: "100%", padding: "30px" }}>
        <h1 className="dash-title">📊 Dashboard Overview</h1>

        <div className="dash-grid">
          <div className="dash-card">
            <h2>120</h2>
            <p>Total Students</p>
          </div>

          <div className="dash-card">
            <h2>20</h2>
            <p>Active Courses</p>
          </div>

          <div className="dash-card">
            <h2>10</h2>
            <p>Departments</p>
          </div>

          <div className="dash-card">
            <h2>5</h2>
            <p>Pending Tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
