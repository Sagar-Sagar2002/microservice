import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">🎓 Student Management System</h1>
      <p className="home-subtitle">Manage Students Easily and Efficiently</p>

      <button className="home-btn" onClick={() => navigate("/students")}>
        🚀 Get Started
      </button>
    </div>
  );
}

export default Home;
