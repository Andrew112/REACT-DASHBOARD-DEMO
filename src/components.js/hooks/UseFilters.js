import { useState } from "react";

export function useFilters(initial = { date: "today" }) {
  const [filters, setFilters] = useState(initial);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return { filters, updateFilter };
}
