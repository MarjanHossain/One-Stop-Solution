import { getAuth } from "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT7eFW-M7297EtniBm7mkrI1HFFbjPFAA",
  authDomain: "one-stop-solution-4602f.firebaseapp.com",
  projectId: "one-stop-solution-4602f",
  storageBucket: "one-stop-solution-4602f.appspot.com",
  messagingSenderId: "932852984270",
  appId: "1:932852984270:web:c481da3472ed70e033639f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;