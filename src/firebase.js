// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_APIKEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mern-blogs-8626b.firebaseapp.com",
  projectId: "mern-blogs-8626b",
  storageBucket: "mern-blogs-8626b.appspot.com",
  messagingSenderId: "423943242612",
  appId: "1:423943242612:web:f764806283190ac435e221",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
