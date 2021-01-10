import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBg7u_pTu1vC33KUmYUtd9C_iaCrfsjbLA',
  authDomain: 'clone-6cd3c.firebaseapp.com',
  projectId: 'clone-6cd3c',
  storageBucket: 'clone-6cd3c.appspot.com',
  messagingSenderId: '793393297110',
  appId: '1:793393297110:web:cb369ecf9a8c9d5c0efb77',
  measurementId: 'G-CX3TE1SJNL',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleAuthProvider };
