// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhbQpF_u0i_mwLIFjYPvdCtPAbMMSeiaw",
  authDomain: "bplchevrondash.firebaseapp.com",
  projectId: "bplchevrondash",
  storageBucket: "bplchevrondash.firebasestorage.app",
  messagingSenderId: "863467586664",
  appId: "1:863467586664:web:b9f6dea61e31bf70f6e7dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);