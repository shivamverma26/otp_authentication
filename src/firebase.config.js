// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqL9f6R6WpR7GqZjjwndvCYw7zfJWIVzQ",
  authDomain: "otp-validation-4658c.firebaseapp.com",
  projectId: "otp-validation-4658c",
  storageBucket: "otp-validation-4658c.appspot.com",
  messagingSenderId: "1098733154096",
  appId: "1:1098733154096:web:4730462ee51fda361a62f5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
