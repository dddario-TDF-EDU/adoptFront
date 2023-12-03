import { useCallback, useContext, useState } from "react"
import { AuthContext } from "../auth/AuthContext"
import { loginServices } from "../auth/services/authServices.mjs";
import { useMemo } from "react";

export const useUser = () => {
    const { jwt, setJwt, user, setUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState({ loading: false, error: false, status: '' });

    const login = useCallback(async (userData) => {
        setIsLoading({ loading: true, error: false, status: '' })
        try {
            const response = await loginServices(userData);
            const { jwt, user } = response;
            
            const jwtString = JSON.stringify(jwt);
            window.localStorage.setItem('jwt', jwtString);

            setUser(user);
            setJwt(jwt);

            setIsLoading({ loading: false, error: false, status: '' });
        }
        catch (error) {
            window.localStorage.removeItem('jwt')

            if (error.response && error.response.status == 401) {
                setIsLoading({ loading: true, error: true, status: 401 })
            } else {
                setIsLoading({ loading: true, error: true, status: 'Error inesperado. Intente nuevamente.' })
            }
        }
    }, [setJwt, setUser])

    const logout = useCallback(() => {
        window.localStorage.removeItem('jwt')
        setJwt(null);
        setUser(null)
    }, [setJwt, setUser])


    const memorizedUser = useMemo(() => user, [user]);
    console.log(memorizedUser)
    return {
        isLogged: Boolean(jwt),
        isLoading: isLoading.loading,
        hasError: isLoading.error,
        status: isLoading.status,
        login,
        logout,
        userData : memorizedUser,
    }
}