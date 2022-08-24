import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCceevChza4qYINyDsMbSucOBTg0mG7uQg",
  authDomain: "demosvelteauth.firebaseapp.com",
  projectId: "demosvelteauth",
  storageBucket: "demosvelteauth.appspot.com",
  messagingSenderId: "196073831624",
  appId: "1:196073831624:web:b95e0dc18b9db9324339fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);