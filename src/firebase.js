// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcPf8o65xHinLwN4R7QCkfMA1EZITOLFM",
  authDomain: "my-react-app-aec9c.firebaseapp.com",
  projectId: "my-react-app-aec9c",
  storageBucket: "my-react-app-aec9c.firebasestorage.app",
  messagingSenderId: "1045486464590",
  appId: "1:1045486464590:web:9b66e744681fb63e0edd1f",
  measurementId: "G-7QBYPE88G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);