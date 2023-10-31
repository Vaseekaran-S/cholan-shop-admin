
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVXCyYb7zf5UlxPNocaAR56TB6eJuDfYs",
  authDomain: "cholan-shop.firebaseapp.com",
  projectId: "cholan-shop",
  storageBucket: "cholan-shop.appspot.com",
  messagingSenderId: "199194824170",
  appId: "1:199194824170:web:31af7343d04686d9d9b693",
  measurementId: "G-WSMSVYQYQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export { storage }