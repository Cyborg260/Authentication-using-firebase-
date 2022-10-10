// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChc3pu5zpqDmo3mSOmsj_t9ifgcpNK4vk",
  authDomain: "superb-gear-360806.firebaseapp.com",
  projectId: "superb-gear-360806",
  storageBucket: "superb-gear-360806.appspot.com",
  messagingSenderId: "842796933935",
  appId: "1:842796933935:web:1d9a3ffd544f92090037da",
  measurementId: "G-7BNQYCFQF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);