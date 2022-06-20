// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9IDIhZuHIke2FqIe_nU8vHmHrPURWSJc",
  authDomain: "collecting-data-f20b2.firebaseapp.com",
  projectId: "collecting-data-f20b2",
  storageBucket: "collecting-data-f20b2.appspot.com",
  messagingSenderId: "43877270658",
  appId: "1:43877270658:web:db6bf39a5e31de9d1aa09b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);