 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";


 
 const firebaseConfig = {
  apiKey: "AIzaSyDwLPit0BNUD8ZsC1181ifWukqGDQbqzzg",
  authDomain: "react-dashboard-demo-5028f.firebaseapp.com",
  projectId: "react-dashboard-demo-5028f",
  storageBucket: "react-dashboard-demo-5028f.firebasestorage.app",
  messagingSenderId: "238987252881",
  appId: "1:238987252881:web:07167b49521234ffec1b30",
  measurementId: "G-5REGE954PX"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
