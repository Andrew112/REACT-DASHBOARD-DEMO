import React, { useState } from "react";

export default function DebugPanel({ data, filters, loading }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <div style={{ 
        position: "fixed", 
        top: "10px", 
        right: "10px", 
        zIndex: 1000,
        backgroundColor: "#007acc",
        color: "white",
        padding: "5px 10px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "12px"
      }} onClick={() => setIsOpen(true)}>
        🐛 Debug
      </div>
    );
  }

  return (
    <div style={{
      position: "fixed",
      top: "10px",
      right: "10px",
      width: "300px",
      maxHeight: "400px",
      backgroundColor: "#f8f8f8",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      zIndex: 1000,
      fontSize: "12px",
      fontFamily: "monospace",
      overflow: "auto",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
      <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong>🐛 Debug Panel</strong>
        <button 
          onClick={() => setIsOpen(false)}
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px" }}
        >
          ✕
        </button>
      </div>
      
      <div style={{ marginBottom: "10px" }}>
        <strong>Loading:</strong> {loading ? "✅ Yes" : "❌ No"}
      </div>
      
      <div style={{ marginBottom: "10px" }}>
        <strong>Data Records:</strong> {data ? data.length : 0}
      </div>
      
      <div style={{ marginBottom: "10px" }}>
        <strong>Filters:</strong>
        <pre style={{ margin: "5px 0", padding: "5px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "3px" }}>
          {JSON.stringify(filters, null, 2)}
        </pre>
      </div>
      
      {data && data.length > 0 && (
        <div style={{ marginBottom: "10px" }}>
          <strong>Sample Record:</strong>
          <pre style={{ margin: "5px 0", padding: "5px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "3px" }}>
            {JSON.stringify(data[0], null, 2)}
          </pre>
        </div>
      )}
      
      <div style={{ fontSize: "10px", color: "#666", marginTop: "10px" }}>
        Open browser DevTools Console for detailed logs
      </div>
    </div>
  );
}