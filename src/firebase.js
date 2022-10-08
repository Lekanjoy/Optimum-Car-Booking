import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTH-k2mkDP-Oh96Xk3Foi6LEEVe-QW7YA",
  authDomain: "optimum-car-booking.firebaseapp.com",
  projectId: "optimum-car-booking",
  storageBucket: "optimum-car-booking.appspot.com",
  messagingSenderId: "729700195070",
  appId: "1:729700195070:web:70e6e887312141cbd7a3af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// sigIn Auth with email
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
// sigUp Auth with email
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
// SignOut Auth
export function logOut() {
  return signOut(auth);
}

// Signin with google redirect
export function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
}

// sigin with google popup
export function signInWithGooglePopup() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}



// Custom Hook for Current User
export function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return user;
}

// export const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// });
