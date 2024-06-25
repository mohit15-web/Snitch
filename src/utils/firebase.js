// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9sBW30VcyhCpu7gmm5zql8JYu9vP5Gq0",
  authDomain: "snitch-ba819.firebaseapp.com",
  projectId: "snitch-ba819",
  storageBucket: "snitch-ba819.appspot.com",
  messagingSenderId: "749127013615",
  appId: "1:749127013615:web:58311269413573b452771a",
  measurementId: "G-M1YVY5XSC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)