import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = ["Dashboard", "Product", "Order Management", "Customer", "Tools", "Settings"];

  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        {menuItems.map((item) => (
          <li key={item} className={`sidebar-item ${item === 'Dashboard' ? 'active' : ''}`}>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;