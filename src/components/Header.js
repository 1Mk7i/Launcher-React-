import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button className="burger-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <h1 className="header-title">Мій додаток</h1>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/about">Про нас</Link></li>
          <li><Link to="/contact">Контакти</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
