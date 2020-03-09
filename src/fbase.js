import firebase from 'firebase';
import firestoreKey from './protected';

firebase.initializeApp(firestoreKey);

const firebaseApp = firebase.firestore();

export default firebaseApp;
