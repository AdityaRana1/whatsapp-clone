import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAQ1ISgTNIIe6Lq0wgYWb0n-0Iectu3mGw",
  authDomain: "whatsapp-clone-9578c.firebaseapp.com",
  projectId: "whatsapp-clone-9578c",
  storageBucket: "whatsapp-clone-9578c.appspot.com",
  messagingSenderId: "378807939977",
  appId: "1:378807939977:web:40004c859da8f7b5fbe758",
  measurementId: "G-MENJ16HFFJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
