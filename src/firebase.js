import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD3MiW1t_CweNr6C7tjOILFiCM0rymFFTM",
  authDomain: "netflix-clone-1635e.firebaseapp.com",
  projectId: "netflix-clone-1635e",
  storageBucket: "netflix-clone-1635e.appspot.com",
  messagingSenderId: "78189735070",
  appId: "1:78189735070:web:768e6a76795433d9c09f8f",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
