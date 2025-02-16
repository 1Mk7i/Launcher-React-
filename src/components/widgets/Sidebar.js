import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Бекграунд при відкритому меню */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Бокове меню */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>✖</button>
        <ul>
          <li><Link to="/">Головна</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
