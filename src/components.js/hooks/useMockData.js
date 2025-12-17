import { useEffect, useState } from "react";

// Mock sales data generator
const generateMockSalesData = () => {
  const products = ['Widget A', 'Widget B', 'Super Widget', 'Mini Widget', 'Pro Widget'];
  const regions = ['North', 'South', 'East', 'West', 'Central'];
  const salespeople = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'Tom Brown'];
  
  return Array.from({ length: 15 }, (_, index) => ({
    id: `mock-${index + 1}`,
    product: products[Math.floor(Math.random() * products.length)],
    region: regions[Math.floor(Math.random() * regions.length)],
    salesperson: salespeople[Math.floor(Math.random() * salespeople.length)],
    amount: Math.floor(Math.random() * 10000) + 1000,
    date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: Math.random() > 0.2 ? 'Completed' : 'Pending'
  }));
};

export function useMockData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setData(generateMockSalesData());
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const refreshData = () => {
    setLoading(true);
    setTimeout(() => {
      setData(generateMockSalesData());
      setLoading(false);
    }, 500);
  };

  return { data, loading, refreshData };
}