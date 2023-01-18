import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, limit, query, setDoc, updateDoc, writeBatch, where } from "firebase/firestore";
export const fireStore = {
   addDoc,
   collection,
   deleteDoc,
   doc,
   getDoc,
   getDocs,
   limit,
   query,
   setDoc,
   updateDoc,
   writeBatch,
   where,
};
const firebaseConfig = {
   apiKey: "AIzaSyDYK4uGQgE9ekmFTW-rpAITAD1NU80rq78",
   authDomain: "chat-7ecd6.firebaseapp.com",
   databaseURL: "https://chat-7ecd6-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "chat-7ecd6",
   storageBucket: "chat-7ecd6.appspot.com",
   messagingSenderId: "530618288760",
   appId: "1:530618288760:web:bf7cedf2902318f4963b8d",
   measurementId: "G-V7G3N7S90D",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
