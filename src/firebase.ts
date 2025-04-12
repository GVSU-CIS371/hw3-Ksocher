import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmxLtJHU56JStlWuCf9xROAPvpD0FP9RM",
  authDomain: "cis371-ff6ec.firebaseapp.com",
  projectId: "cis371-ff6ec",
  storageBucket: "cis371-ff6ec.firebasestorage.app",
  messagingSenderId: "1031007686234",
  appId: "1:1031007686234:web:1a730a8be2671c4cf5d263",
  measurementId: "G-NFGHNXF9XM"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
