import { createContext, useState } from "react";
export const AuthContext = createContext(null)
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Components/Firebase/Firebase.config";
import {  createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]  = useState(true);
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        user,
        loading,
        createUser,
        signInUser

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;