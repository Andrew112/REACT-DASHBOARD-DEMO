 import React from "react";

export default function DashboardTable({ data, loading }) {
  if (loading) return <p>Loading data...</p>;
  if (!data.length) return <p>No data available.</p>;

  return (
    <table border="1" cellPadding="5" style={{ width: "100%" }}>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {Object.values(row).map((val, j) => (
              <td key={j}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
