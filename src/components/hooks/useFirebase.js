import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut   } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitializatation from "../firebase/firebase.init";

firebaseInitializatation();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user)
            }else{ }
        })
    }, [])


    return{
        user,
        signInWithGoogle, 
        logOut
    }
};

export default useFirebase;

