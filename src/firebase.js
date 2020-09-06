import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// var firebaseConfig = {
//     //   ...your firebase 
// };

const firebaseConfig = {
    apiKey: "AIzaSyAPoeM1zwBS0mY9Jkfh5KMqsQlNml5pyBI",
    authDomain: "todos-e5f42.firebaseapp.com",
    databaseURL: "https://todos-e5f42.firebaseio.com",
    projectId: "todos-e5f42",
    storageBucket: "todos-e5f42.appspot.com",
    messagingSenderId: "238329792425",
    appId: "1:238329792425:web:296924c89ca769150f66b8",
    measurementId: "G-R9YRGTS2L3"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();


