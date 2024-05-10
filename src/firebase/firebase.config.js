// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6YOb_nja9MzNe7yPCNABRXoMMlhJBDeI",
  authDomain: "p-register-and-login.firebaseapp.com",
  projectId: "p-register-and-login",
  storageBucket: "p-register-and-login.appspot.com",
  messagingSenderId: "444199888060",
  appId: "1:444199888060:web:cd0cd44bba2ca869149cb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;