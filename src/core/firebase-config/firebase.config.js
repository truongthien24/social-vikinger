// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import 'firebase/storage';

 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkXRZptp3ghtybJ5_DPOUC2s4J2SCHpac",
    authDomain: "social-project-55150.firebaseapp.com",
    projectId: "social-project-55150",
    storageBucket: "social-project-55150.appspot.com",
    messagingSenderId: "1094420136724",
    appId: "1:1094420136724:web:e77a20595dd4f7a677b801",
    measurementId: "G-0EQWJFM8DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export {db, auth, app};