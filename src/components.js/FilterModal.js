import React, { useState } from "react";

export default function FilterModal({ filters, onUpdate, onClose }) {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (e) => {
    setLocalFilters({ ...localFilters, [e.target.name]: e.target.value });
  };

  const handleApply = () => {
    onUpdate("date", localFilters.date);
    onClose();
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.3)", display: "flex",
      justifyContent: "center", alignItems: "center"
    }}>
      <div style={{ backgroundColor: "#fff", padding: 20, borderRadius: 8 }}>
        <h3>Filter Settings</h3>
        <label>
          Date:
          <select name="date" value={localFilters.date} onChange={handleChange}>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </label>
        <div style={{ marginTop: 10 }}>
          <button onClick={handleApply}>Apply</button>
          <button onClick={onClose} style={{ marginLeft: 10 }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
 