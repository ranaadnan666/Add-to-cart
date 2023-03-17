
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAvMDYXvrf6V1dCzyvxxoj5eJzivhyZE7Y",
  authDomain: "food-ordering-6b0f3.firebaseapp.com",
  projectId: "food-ordering-6b0f3",
  storageBucket: "food-ordering-6b0f3.appspot.com",
  messagingSenderId: "973552876526",
  appId: "1:973552876526:web:dd6e90b207293a89e52cff",
  measurementId: "G-J3C1QVV514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};