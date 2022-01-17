import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// /compat/ is used for compatibility w/ versions 8 or greater
// using /auth/ import allows .auth method

const config = {
    apiKey: "AIzaSyDcDV1wqyzVK6BC_lWFj60kLfx7KcrjFeY",
    authDomain: "reactproject-db.firebaseapp.com",
    projectId: "reactproject-db",
    storageBucket: "reactproject-db.appspot.com",
    messagingSenderId: "378666764179",
    appId: "1:378666764179:web:e8480de3a3c889b433ca66",
    measurementId: "G-0NNB0KTRLR"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();
        // ^^ the above uses await b/c it's tied to an async

        // the below IF statement checks if user exists, if not then their info get's added to DB
      if(!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }

      return userRef;
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;