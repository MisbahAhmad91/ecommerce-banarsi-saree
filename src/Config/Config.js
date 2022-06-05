import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5XnggTlZDpPMpU8LofJg5pnzordonkAg",
  authDomain: "misbah-8a52f.firebaseapp.com",
  projectId: "misbah-8a52f",
  storageBucket: "misbah-8a52f.appspot.com",
  messagingSenderId: "886515501358",
  appId: "1:886515501358:web:f2bbd9875bd31ef71452bf",
  measurementId: "G-20EQP483R5"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };
