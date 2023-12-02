import { useCallback, useContext, useState } from "react"
import { AuthContext } from "../auth/AuthContext"
import { loginServices } from "../auth/services/authServices.mjs";

export const useUser = () => {
    const { jwt, setJwt, user, setUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState({ loading: false, error: false, status: '' });

    const login = useCallback(async(userData) => {
        setIsLoading({ loading: true, error: false, status: '' })
        try {
            const response =  await loginServices(userData);
            const { jwt, user } = response;
            const jwtString = JSON.stringify(jwt);
            window.sessionStorage.setItem('jwt', jwtString);

            setUser(user);
            setJwt(jwt);

            setIsLoading({ loading: false, error: false, status: '' });
        }
        catch (error) {
            window.sessionStorage.removeItem('jwt')
            if (error.response && error.response.status == 401) {
                setIsLoading({ loading: true, error: true, status: 401 })
            } else {
                setIsLoading({ loading: true, error: true, status: 'Error inesperado. Intente nuevamente.' })
            }
        }
    }, [setJwt, setUser])

    const logout = useCallback(() => {
        setJwt(null)
    }, [setJwt])

    return {
        isLogged: Boolean(jwt),
        isLoading: isLoading.loading,
        hasError: isLoading.error,
        status: isLoading.status,
        login,
        logout,
        user,
    }
}