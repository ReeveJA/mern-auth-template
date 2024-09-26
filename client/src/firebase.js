// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-template-bd495.firebaseapp.com",
  projectId: "mern-auth-template-bd495",
  storageBucket: "mern-auth-template-bd495.appspot.com",
  messagingSenderId: "169519961878",
  appId: "1:169519961878:web:144a87c1597e4bee22e237"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);