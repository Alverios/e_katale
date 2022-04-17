import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBbPkptI33sZMzWusKQRunsh3ZUECYlYAM",
    authDomain: "e-katale.firebaseapp.com",
    projectId: "e-katale",
    storageBucket: "e-katale.appspot.com",
    messagingSenderId: "456323893635",
    appId: "1:456323893635:web:3674027cf99699fa8eceb6",
    measurementId: "G-HL9TNM86GW"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const auth = firebase.auth();

  export {db, auth};