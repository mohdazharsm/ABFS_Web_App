import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrV5xjyOdt86P9gGKpUaWw1Ok7CdC_gIQ",
  authDomain: "abfs-83be0.firebaseapp.com",
  databaseURL:
    "https://abfs-83be0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "abfs-83be0",
  storageBucket: "abfs-83be0.appspot.com",
  messagingSenderId: "198712125054",
  appId: "1:198712125054:web:3fc4fb97e01523d6405a2f",
};

// init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const rtdb = getDatabase();
const auth = getAuth();
const storage = getStorage();

// timestamp
const timestamp = Timestamp;

export { db, rtdb, auth, storage, timestamp };
