import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDyn3ZSkmNGYW6Gf-EvUcK28FNXcOKnFFM",
    authDomain: "electrohop-proyect.firebaseapp.com",
    projectId: "electrohop-proyect",
    storageBucket: "electrohop-proyect.appspot.com",
    messagingSenderId: "827984648870",
    appId: "1:827984648870:web:6c9716d3b1b4dadfe97267"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)