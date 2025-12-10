import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">📚 SMS</h2>

      <ul className="sidebar-menu">
        <li>
          <Link to="/">🏠 Home</Link>
        </li>
        <li>
          <Link to="/students">👨‍🎓 Students</Link>
        </li>
        <li>
          <Link>⚙ Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
