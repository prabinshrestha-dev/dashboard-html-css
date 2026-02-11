import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <span className="logo-text">SHOPIFY</span>
      </div>

      <nav className="navbar">
        <div className="search-wrapper">
          <input type="text" placeholder="Search for products or orders..." className="search-input" />
        </div>

        <div className="nav-controls">
          <div className="notification-wrapper">
            <span className="nav-label">Notifications</span>
            <span className="badge">3</span>
          </div>
          <div className="profile-wrapper">
            <div className="profile-avatar"></div>
            <span className="profile-name">Admin User</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;