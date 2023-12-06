// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAYkG_fSWGFsbATAHWImQ2hvLiW31tlBFc",
  authDomain: "dream-places-2bd08.firebaseapp.com",
  projectId: "dream-places-2bd08",
  storageBucket: "dream-places-2bd08.appspot.com",
  messagingSenderId: "1021912345099",
  appId: "1:1021912345099:web:76603358c2398df245350e",
  measurementId: "G-4C50957BNP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
