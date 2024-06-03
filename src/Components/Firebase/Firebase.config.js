// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq7vax2RGRaUOUKu4u6CNj_KzlW_ijgAU",
  authDomain: "coffee-store-34360.firebaseapp.com",
  projectId: "coffee-store-34360",
  storageBucket: "coffee-store-34360.appspot.com",
  messagingSenderId: "985588724455",
  appId: "1:985588724455:web:407bc00ac82475a0162842"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app);