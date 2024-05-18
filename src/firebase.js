import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyASLZdSb146So4-FmL7bCCkenADsvmo5as",
  authDomain: "twitter-clone-4c6e1.firebaseapp.com",
  projectId: "twitter-clone-4c6e1",
  storageBucket: "twitter-clone-4c6e1.appspot.com",
  messagingSenderId: "267364014378",
  appId: "1:267364014378:web:c246860acff3fc6bd96653",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
