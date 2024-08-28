// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getReactNativePersistence, initializeAuth} from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4ZzOeGMP1BN1xR4hjdizG9h0LAcq0whA",
    authDomain: "e-hospital-b6334.firebaseapp.com",
    projectId: "e-hospital-b6334",
    storageBucket: "e-hospital-b6334.appspot.com",
    messagingSenderId: "614445798434",
    appId: "1:614445798434:web:022f58689a2ecf10f9e67b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export const auth =  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app)

export const userCollection = collection(db, 'users')

