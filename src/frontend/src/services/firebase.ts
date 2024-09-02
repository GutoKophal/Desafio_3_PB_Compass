import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeUb8BIF4El8A5KnrvW_BH7fDDL6T_s7c",
  authDomain: "trisog-e765d.firebaseapp.com",
  projectId: "trisog-e765d",
  storageBucket: "trisog-e765d.appspot.com",
  messagingSenderId: "698107079254",
  appId: "1:698107079254:web:95496d15e12e01bb1f69f7",
  measurementId: "G-ETDJ5LX05Y"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const auth: Auth = getAuth(app)

export { storage };