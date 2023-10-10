// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnJAnFB14dwKlUeJQtGmGW06XgutjmIIM",
  authDomain: "chat-app-cd2ef.firebaseapp.com",
  projectId: "chat-app-cd2ef",
  storageBucket: "chat-app-cd2ef.appspot.com",
  messagingSenderId: "495328840401",
  appId: "1:495328840401:web:621b5ce335164f825793f0",
  measurementId: "G-QY518TS2R3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;
