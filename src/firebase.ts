import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    // Your Firebase config goes here
    apiKey: "AIzaSyCr0WOYl30US8vgEsanL6Ny9moWnbmJ8t0",
    authDomain: "blog-8560c.firebaseapp.com",
    projectId: "blog-8560c",
    storageBucket: "blog-8560c.appspot.com",
    messagingSenderId: "422954634502",
    appId: "1:422954634502:web:b58e6b5599180eee6e2287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}

