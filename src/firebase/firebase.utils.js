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

  //STORE USER IN THE DB
  export const createUserProfileDocument = async (userAuth, additionalData) => {
      //check if firebase has a valid object and if it does take
      //the properties and store it in the database

      if(!userAuth) return;

      const userRefs = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = userRefs.get();
      //from the snapshot we can see if the data exists and if 
      //it doesn't we want to create a new user

      if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
          await userRefs.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });        
        }catch(error){
            console.log('error creating user', error.message);
        }
      }
      return userRefs;
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;