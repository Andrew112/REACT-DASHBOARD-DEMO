import React, { useState } from "react";

import DashBoardHeader from "./DashBoardHeader";
import DashBoardStats from "./DashBoardStats";
import DashBoardTable from "./DashBoardTable";
import DebugPanel from "./DebugPanel";
import FilterModal from "./FilterModal";
import { useDashboardData } from "./hooks/usedashBoardData";
import { useExport } from "./hooks/UseExport";
import { useFilters } from "./hooks/UseFilters";
import { useMockData } from "./hooks/useMockData";

export default function DashBoard() {
  const { filters, updateFilter } = useFilters();
  const { data: firestoreData, loading: firestoreLoading } = useDashboardData(filters);
  const { data: mockData, loading: mockLoading, refreshData } = useMockData();
  
  // Debug logging
  console.log('🔍 Dashboard Debug:', {
    filters,
    firestoreData: firestoreData.length,
    firestoreLoading,
    mockData: mockData.length,
    mockLoading
  });
  
  // Use mock data if Firestore data is empty or failed to load
  const data = firestoreData.length > 0 ? firestoreData : mockData;
  const loading = firestoreLoading || (firestoreData.length === 0 && mockLoading);
  
  console.log('📊 Final data source:', firestoreData.length > 0 ? 'Firestore' : 'Mock', 'Records:', data.length);
  
  const { exportToCSV } = useExport(data);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <DashBoardHeader
        onFilterClick={() => setShowModal(true)}
        onExport={exportToCSV}
      />
      {showModal && (
        <FilterModal
          filters={filters}
          onClose={() => setShowModal(false)}
          onUpdate={updateFilter}
        />
      )}
      <DashBoardStats data={data} />
      <DashBoardTable data={data} loading={loading} />
      <DebugPanel data={data} filters={filters} loading={loading} />
    </div>
  );
}
 