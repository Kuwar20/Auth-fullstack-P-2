// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,  //equivalent to process.env.VITE_FIREBASE_API_KEY but as vite we use import.meta.env
    authDomain: "mern-auth-95773.firebaseapp.com",
    projectId: "mern-auth-95773",
    storageBucket: "mern-auth-95773.appspot.com",
    messagingSenderId: "767307507369",
    appId: "1:767307507369:web:555cc8e3c8c79227cf6bb8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
