import { useCallback, useContext, useState } from "react"
import { AuthContext } from "../auth/AuthContext"
import { loginServices } from "../auth/services/authServices.mjs";

export const useUser = () => {
    const { jwt, setJwt } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState({ loading: false, error: false, status: '' });

    const login = useCallback((userData) => {
        setIsLoading({ loading: true, error: false, status: '' })
        loginServices(userData)
            .then(jwt => {
                const jwtString =  JSON.stringify(jwt);
                window.sessionStorage.setItem('jwt', jwtString)
                setIsLoading({ loading: false, error: false, status: '' })
                setJwt(jwt)
            })
            .catch(err => {
                window.sessionStorage.removeItem('jwt')
                if (err.response && err.response.status == 401) {
                    setIsLoading({ loading: true, error: true, status: 401 })
                } else {
                    setIsLoading({ loading: true, error: true, status: 'Error inesperado. Intente nuevamente.' })
                }
            })
    }, [setJwt])

    const logout = useCallback(() => {
        setJwt(null)
    }, [setJwt])

    return {
        isLogged: Boolean(jwt),
        isLoading: isLoading.loading,
        hasError: isLoading.error,
        status: isLoading.status,
        login,
        logout
    }
}