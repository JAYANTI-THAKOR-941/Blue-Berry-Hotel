// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrsm0g52UcTCZEWTIgwUho4Bp0uc0fMos",
  authDomain: "auth-project-2b683.firebaseapp.com",
  projectId: "auth-project-2b683",
  storageBucket: "auth-project-2b683.firebasestorage.app",
  messagingSenderId: "27415729411",
  appId: "1:27415729411:web:a7b0a7d0996ccca280c536",
  measurementId: "G-ZLENWTBTF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(auth)