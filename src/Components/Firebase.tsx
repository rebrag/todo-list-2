// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYlCQZDS5UXJgAp4PSwQQPjpyjgB_v4nc",
  authDomain: "react-ts-todo-ddca1.firebaseapp.com",
  projectId: "react-ts-todo-ddca1",
  storageBucket: "react-ts-todo-ddca1.firebasestorage.app",
  messagingSenderId: "143856190864",
  appId: "1:143856190864:web:167da41e41029c71309f15",
  measurementId: "G-HK77YQY34R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);