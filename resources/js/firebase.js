
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBPZL0XQk1odmxesR3dYzxoUSvR5h4szsI",
    authDomain: "get-set-go-db.firebaseapp.com",
    projectId: "get-set-go-db",
    storageBucket: "get-set-go-db.appspot.com",
    messagingSenderId: "725029055748",
    appId: "1:725029055748:web:580d04583a70d7abdf7451",
    measurementId: "G-GX76LG3FFR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export const database = firebase.firestore();


