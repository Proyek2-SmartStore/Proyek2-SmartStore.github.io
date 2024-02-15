//Konfigurasi Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-0Ym-agVREHD4XhTYD_D1lr7Eno-JgKo",
  authDomain: "project2app-f4805.firebaseapp.com",
  projectId: "project2app-f4805",
  storageBucket: "project2app-f4805.appspot.com",
  messagingSenderId: "282358638404",
  appId: "1:282358638404:web:ebe111c81f88cf615f1911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}