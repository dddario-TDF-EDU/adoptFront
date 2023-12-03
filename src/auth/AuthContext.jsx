import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [jwt, setJwt] = useState(() =>
        window.sessionStorage.getItem('jwt')
    );

    return <AuthContext.Provider value={{ jwt, setJwt }}>
        {children}
    </AuthContext.Provider>
}
