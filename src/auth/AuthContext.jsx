import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [jwt, setJwt] = useState(() =>
        window.localStorage.getItem('jwt')
    );

    const [user, setUser] = useState(null);
    
    const [isLogeed, setIsLogeed] = useState(() =>
        window.localStorage.getItem('logged')
    );

    return <AuthContext.Provider value={{ jwt, setJwt, user, setUser, isLogeed, setIsLogeed }}>
        {children}
    </AuthContext.Provider>
}
