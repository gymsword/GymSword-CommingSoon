import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
} from "firebase/firestore";

import {
  getAnalytics,
  isSupported,
} from "firebase/analytics";


// 🔥 FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBgFCeyn57TWJ9zPyOAdAzcbVJuH0Fu0OI",
  authDomain: "gym-sword.firebaseapp.com",
  projectId: "gym-sword",
  storageBucket: "gym-sword.appspot.com",
  messagingSenderId: "195196028059",
  appId: "1:195196028059:web:fc3e723ebd12cd84c5f23e",
  measurementId: "G-3W42RRJ9C6",
};


// 🚀 INITIALIZE APP
const app = initializeApp(firebaseConfig);


// 🔐 AUTH
export const auth = getAuth(app);


// 🌐 GOOGLE PROVIDER
export const googleProvider = new GoogleAuthProvider();


// 📦 FIRESTORE DATABASE
export const db = getFirestore(app);


// 📊 ANALYTICS SAFE INITIALIZATION
export const initializeAnalytics = async () => {
  const supported = await isSupported();

  if (supported) {
    return getAnalytics(app);
  }

  return null;
};


export default app;