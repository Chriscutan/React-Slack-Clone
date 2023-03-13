import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW5y5s1YyRHahcoqRUkbXbwKwLp_dstj4",
  authDomain: "slack-clone-71117.firebaseapp.com",
  projectId: "slack-clone-71117",
  storageBucket: "slack-clone-71117.appspot.com",
  messagingSenderId: "214724010921",
  appId: "1:214724010921:web:0cf7a4196c4187f4b11ab8",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();
const roomsColRef = collection(db, "rooms");

export { auth, provider, db, roomsColRef };
