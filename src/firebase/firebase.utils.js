import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1Alwz9bsxYYz97d3YrNWsFRMqEPpVxiY",
    authDomain: "crwn-db-7fe1d.firebaseapp.com",
    projectId: "crwn-db-7fe1d",
    storageBucket: "crwn-db-7fe1d.appspot.com",
    messagingSenderId: "981383013787",
    appId: "1:981383013787:web:9497110ce092d867be2d3e",
    measurementId: "G-Q798HR7LS5"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;