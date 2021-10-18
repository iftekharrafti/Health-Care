import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import firebaseInitializatation from "../firebase/firebase.init";

firebaseInitializatation();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
    }
    return{
        user,
        signInWithGoogle
    }
};

export default useFirebase;

