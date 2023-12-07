import { createContext, useReducer, useEffect, useState } from "react";
import { AuthReducer } from "./AuthReducer";
import { decodePayload } from "../constants/Jwt.atob";

const init = () => {
    return JSON.parse(localStorage.getItem('user_information')) || { logged : false} ;
};

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, dispatch] = useReducer(AuthReducer, {}, init)
    const [userData, setUserData] = useState('')

    useEffect(() => {
        localStorage.setItem('user_information', JSON.stringify(user));
        if(user.jwt) {
        setUserData(decodePayload(user.jwt))
        }
    }, [user]);

    return <AuthContext.Provider value={{ user, dispatch, userData }}>
        {children}
    </AuthContext.Provider>
}
