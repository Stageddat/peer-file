import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDWI3sIVqRWvLE56b4YM5CK7lEEIMfdJaA",
    authDomain: "share-peer.firebaseapp.com",
    projectId: "share-peer",
    storageBucket: "share-peer.appspot.com",
    messagingSenderId: "222803683103",
    appId: "1:222803683103:web:93230e62dcdc2677ad722a",
    measurementId: "G-6M7JXCVYR2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
