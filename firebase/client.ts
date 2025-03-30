// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCBRNXzCjZMz_VFRM9Vy2n1sjtthOsU77A",
  authDomain: "mockvox-65055.firebaseapp.com",
  projectId: "mockvox-65055",
  storageBucket: "mockvox-65055.firebasestorage.app",
  messagingSenderId: "638521547940",
  appId: "1:638521547940:web:266cbc94e6b39e6b35da31",
  measurementId: "G-EJVV5HBZ2D"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);