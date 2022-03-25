// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC7V31usVjRLDPyIIS-Y3I0Bm4baVShkIA",
    authDomain: "reactfirebase-828d7.firebaseapp.com",
    projectId: "reactfirebase-828d7",
    storageBucket: "reactfirebase-828d7.appspot.com",
    messagingSenderId: "832267647139",
    appId: "1:832267647139:web:ceccfbe89bb6d475626716",
    measurementId: "G-K051NBNP4V"
  };

const app=initializeApp(firebaseConfig);

export const db=getFirestore(app);