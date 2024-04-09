


import { config } from "dotenv";
config();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP1Zmjs0SHDPOZkOlyuHFYzA2fPebF4YQ",
  authDomain: "estate-f1090.firebaseapp.com",
  projectId: "estate-f1090",
  storageBucket: "estate-f1090.appspot.com",
  messagingSenderId: "70632700592",
  appId: "1:70632700592:web:95137becca5d77fcec1975",
  measurementId: "G-MT14FLJWS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app};

