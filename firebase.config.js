// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTbhJoBtKHaKAtfwrv7V4V7hVUxX3aveQ",
  authDomain: "react-ecom-3601b.firebaseapp.com",
  projectId: "react-ecom-3601b",
  storageBucket: "react-ecom-3601b.appspot.com",
  messagingSenderId: "44104479459",
  appId: "1:44104479459:web:6be420960c5e67569f0bd6",
  measurementId: "G-QZQNLMBHZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);