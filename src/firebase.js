// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNuuhnaJ-qbWv4hshC1_q2JkLVGMKnNlY",
  authDomain: "tiktok-f228d.firebaseapp.com",
  projectId: "tiktok-f228d",
  storageBucket: "tiktok-f228d.firebasestorage.app",
  messagingSenderId: "584507510307",
  appId: "1:584507510307:web:47f8b9b5a5f9d28779eb96",
  measurementId: "G-TCWB02C96Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);