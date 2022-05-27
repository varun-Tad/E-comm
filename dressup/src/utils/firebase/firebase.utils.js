import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0CNe766_68qXeNaJYZD_tXnWu8Rux3Pk",
  authDomain: "dressup-db-9b9db.firebaseapp.com",
  projectId: "dressup-db-9b9db",
  storageBucket: "dressup-db-9b9db.appspot.com",
  messagingSenderId: "1083231013718",
  appId: "1:1083231013718:web:c3fb96996551c64b2224f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
