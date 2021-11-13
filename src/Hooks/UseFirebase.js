import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initilaizationAuth from "../Firebase/Firebase-init";
initilaizationAuth();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const UseFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleImageChange = e => {
        setImage(e.target.value)
    }
    
    
    const processLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const registerNewUser = () => {
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
            .then((result) => {
                Swal.fire(
                    "Good job!",
                    "Set Image Your Profile SuccessFull!",
                    "success"
                )
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            });
    }
    
    // google sign in
    function signinGoogle() {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // observe user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);

    // sign out
    function logOut() {
        setIsLoading(true)
        return signOut(auth);
    }
    return {
        logOut,
        signinGoogle,
        user,
        error,
        setUser,
        isLoading,
        registerNewUser,
        processLogin,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleImageChange,
        setUserName,
        setError,
        setIsLoading
    }
}
export default UseFirebase;