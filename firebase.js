// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXyFuZ4FiLIT6HXc6FgNR5lyUYPgQOy-k",
  authDomain: "inventory-management-c5d6f.firebaseapp.com",
  projectId: "inventory-management-c5d6f",
  storageBucket: "inventory-management-c5d6f.appspot.com",
  messagingSenderId: "851086231216",
  appId: "1:851086231216:web:771d4a2355efabb3329d75",
  measurementId: "G-0VSPY05E2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}