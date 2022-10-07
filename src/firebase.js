import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpgcgKNqfxdVHn-th-8ewHWkO0fH514fM",
  authDomain: "spacexnew-71859.firebaseapp.com",
  projectId: "spacexnew-71859",
  storageBucket: "spacexnew-71859.appspot.com",
  messagingSenderId: "157319072684",
  appId: "1:157319072684:web:e3f57cd76f1678bea54809",
  measurementId: "G-ED2FKJGLHP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);