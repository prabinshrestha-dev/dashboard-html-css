import React from 'react';
import Navbar from './components/Navbar';
import MainLayout from './components/MainLayout';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </div>
  );
}

export default App;