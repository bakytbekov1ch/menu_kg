import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxDgBkG0Bjjk00RT6EX1Nv-pYdDhV6tgI",
  authDomain: "menu-8c821.firebaseapp.com",
  projectId: "menu-8c821",
  storageBucket: "menu-8c821.appspot.com",
  messagingSenderId: "18909539977",
  appId: "1:18909539977:web:1daab2a41dba92b4552058",
  measurementId: "G-M3CL8KNVV8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
