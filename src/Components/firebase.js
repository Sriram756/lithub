import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyD8GZJyuUPqPAotFtIYAOftF9HHLwQTzvU",
  authDomain: "free-video-80307.firebaseapp.com",
  projectId: "free-video-80307",
  storageBucket: "free-video-80307.firebasestorage.app",
  messagingSenderId: "957634621034",
  appId: "1:957634621034:web:2651ea4de2efb8873ce413"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export  const db = getFirestore(app);
export const storage = getStorage(app);

export default app;