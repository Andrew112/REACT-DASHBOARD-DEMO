 import React from "react";

export default function DashboardHeader({ onFilterClick, onExport }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
      <h2>Sales Dashboard</h2>
      <div>
        <button onClick={onFilterClick}>Filters</button>
        <button onClick={onExport} style={{ marginLeft: 10 }}>Export CSV</button>
      </div>
    </div>
  );
}
