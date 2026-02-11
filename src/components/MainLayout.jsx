import React from 'react';
import Sidebar from './Sidebar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;