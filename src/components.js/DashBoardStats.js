import React from "react";

export default function DashBoardStats({ data }) {
  if (!data || data.length === 0) {
    return (
      <div style={{ padding: "20px", backgroundColor: "#f5f5f5", marginBottom: "20px" }}>
        <h3>Dashboard Statistics</h3>
        <p>No data available</p>
      </div>
    );
  }

  const totalSales = data.reduce((sum, item) => sum + (item.amount || 0), 0);
  const avgSale = Math.round(totalSales / data.length);
  const completedSales = data.filter(item => item.status === 'Completed').length;
  const completionRate = Math.round((completedSales / data.length) * 100);

  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: "#f5f5f5", 
      marginBottom: "20px",
      borderRadius: "8px",
      display: "flex",
      gap: "30px",
      flexWrap: "wrap"
    }}>
      <div>
        <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>Dashboard Statistics</h3>
      </div>
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        <div>
          <strong>Total Sales:</strong> ${totalSales.toLocaleString()}
        </div>
        <div>
          <strong>Average Sale:</strong> ${avgSale.toLocaleString()}
        </div>
        <div>
          <strong>Total Records:</strong> {data.length}
        </div>
        <div>
          <strong>Completion Rate:</strong> {completionRate}%
        </div>
      </div>
    </div>
  );
}