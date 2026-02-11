import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const transactions = [
    { id: "#ORD-9901", name: "Mechanical Keyboard", date: "Oct 12, 2023", status: "Delivered", statusClass: "success", amount: "$120.00" },
    { id: "#ORD-9902", name: "USB-C Docking Station", date: "Oct 12, 2023", status: "Pending", statusClass: "warning", amount: "$89.00" },
    { id: "#ORD-9903", name: "Wireless Mouse", date: "Oct 11, 2023", status: "Delivered", statusClass: "success", amount: "$45.00" },
    { id: "#ORD-9904", name: "Gaming Monitor", date: "Oct 11, 2023", status: "Cancelled", statusClass: "error", amount: "$350.00" },
    { id: "#ORD-9905", name: "Laptop Stand", date: "Oct 10, 2023", status: "Delivered", statusClass: "success", amount: "$25.00" },
  ];

  return (
    <>
      <div className="dashboard-header">
        <h1>Analytics Dashboard</h1>
        <p>Monitor your sales performance and store health.</p>
      </div>

      <div className="analytics-grid">
        <div className="card">
          <span className="card-title">Total Revenue</span>
          <h2 className="stat-value">$128,430.00</h2>
          <p className="stat-trend positive">+15.4% from last month</p>
        </div>
        <div className="card">
          <span className="card-title">Average Order Value</span>
          <h2 className="stat-value">$84.50</h2>
          <p className="stat-trend positive">+2.1% from last month</p>
        </div>
      </div>

      <section className="data-section">
        <div className="section-card">
          <h3 className="section-title">Recent Transactions</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, index) => (
                <tr key={index}>
                  <td>{t.id}</td>
                  <td>{t.name}</td>
                  <td>{t.date}</td>
                  <td><span className={`status-pill ${t.statusClass}`}>{t.status}</span></td>
                  <td>{t.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Dashboard;