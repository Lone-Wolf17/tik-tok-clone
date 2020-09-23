import firebase from "firebase";

const firebaseConfig = {
    // your firebase config goes here
    apiKey: "AIzaSyAI8o69TBwpL8o-5WAy9UjzuXYjDgNdorU",
    authDomain: "tik-tok-clone-36582.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-36582.firebaseio.com",
    projectId: "tik-tok-clone-36582",
    storageBucket: "tik-tok-clone-36582.appspot.com",
    messagingSenderId: "791937922335",
    appId: "1:791937922335:web:8ab6fcf1cf99eadcc0ac2a",
    measurementId: "G-BF6FZ4NZRD"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };

