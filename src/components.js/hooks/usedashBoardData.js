import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../firebaseConfig";

export function useDashboardData(filters) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log('🔥 Firestore: Starting fetch with filters:', filters);
      setLoading(true);
      try {
        let q = collection(db, "sales");

        // optional: filter by date if chosen
        if (filters.date === "today") {
          const today = new Date().toISOString().slice(0, 10);
          console.log('📅 Firestore: Filtering by today:', today);
          q = query(collection(db, "sales"), where("date", "==", today));
        }

        console.log('🔍 Firestore: Executing query...');
        const querySnapshot = await getDocs(q);
        const result = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log('✅ Firestore: Success! Got', result.length, 'records');
        setData(result);
      } catch (error) {
        console.error("❌ Firestore: Error fetching data:", error);
        console.error("❌ Firestore: Error details:", error.message);
        setData([]); // Ensure empty array on error
      } finally {
        setLoading(false);
        console.log('🏁 Firestore: Fetch complete');
      }
    };

    fetchData();
  }, [filters]);

  return { data, loading };
}
