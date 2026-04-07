// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTFuexXQHj8sW8_gnVtAvG7vI7xp4X32k",
  authDomain: "crypto-tracker-e0b4b.firebaseapp.com",
  projectId: "crypto-tracker-e0b4b",
  storageBucket: "crypto-tracker-e0b4b.firebasestorage.app",
  messagingSenderId: "165035373228",
  appId: "1:165035373228:web:375bbc6f0dde7800e02509",
  measurementId: "G-PXE06JDW2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);