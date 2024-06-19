// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAke3HbvEbedR4_3ba1eAn-vhB-IaNelLw",
  authDomain: "noteballs-af6f0.firebaseapp.com",
  projectId: "noteballs-af6f0",
  storageBucket: "noteballs-af6f0.appspot.com",
  messagingSenderId: "48236089432",
  appId: "1:48236089432:web:633c020f906fbe3a3d3a2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
