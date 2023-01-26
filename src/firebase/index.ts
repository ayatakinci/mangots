import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCr0WOYl30US8vgEsanL6Ny9moWnbmJ8t0",

  authDomain: "blog-8560c.firebaseapp.com",

  projectId: "blog-8560c",

  storageBucket: "blog-8560c.appspot.com",

  messagingSenderId: "422954634502",

  appId: "1:422954634502:web:b58e6b5599180eee6e2287"

}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }