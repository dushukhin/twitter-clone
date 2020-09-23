import firebase from 'firebase';
import configDb from './configdb.json';

const firebaseConfig = {
  apiKey:             configDb.apiKey,
  authDomain:         configDb.authDomain,
  databaseURL:        configDb.databaseURL,
  projectId:          configDb.projectId,
  storageBucket:      configDb.storageBucket,
  messagingSenderId:  configDb.messagingSenderId,
  appId:              configDb.appId,
  measurementId:      configDb.measurementId
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;