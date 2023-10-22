// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAdj5wVQKGJT6_cOsqvGiWEfG9PJficQF8",
    authDomain: "linkedin-a52ba.firebaseapp.com",
    projectId: "linkedin-a52ba",
    storageBucket: "linkedin-a52ba.appspot.com",
    messagingSenderId: "174566737848",
    appId: "1:174566737848:web:49623772e5aad45bfc314d",
    measurementId: "G-GKLNVR2575"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export {db , auth};
