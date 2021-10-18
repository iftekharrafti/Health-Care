import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitializatation = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitializatation;