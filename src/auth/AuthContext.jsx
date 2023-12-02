import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [jwt, setJwt] = useState(() =>
        window.sessionStorage.getItem('jwt')
    );

    const [user, setUser ] = useState(null);
    
    return <AuthContext.Provider value={{ jwt, setJwt, user, setUser }}>
        {children}
    </AuthContext.Provider>
}
