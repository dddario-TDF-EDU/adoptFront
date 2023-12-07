import { useCallback, useContext, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../auth/AuthContext"
import { loginServices } from "../Services/authServices.mjs";
import { types } from '../types/types';
import { scrollToTopJs} from '../constants/scrollToTop.mjs'

export const useUser = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState({ loading: false, error: false, status: '' });
    
    const login = useCallback(async (userData) => {
        setIsLoading({ loading: true, error: false, status: '' })
        try {
            const response = await loginServices(userData);
            const { user_information } = response;

            window.localStorage.setItem('user_information', JSON.stringify(user_information));
            
            dispatch({ type: types.login , 
                payload: { 
                    jwt : user_information.jwt, 
                    user : user_information.user 
                } 
            });
            setIsLoading({ loading: false, error: false, status: '' });
            
        }
        catch (error) {
            window.localStorage.removeItem('user_information');
            if (error.response && error.response.status == 401) {
                setIsLoading({ loading: true, error: true, status: 401 })
            } else {
                setIsLoading({ loading: true, error: true, status: 'Error inesperado. Intente nuevamente.' })
            }
        }
    }, [dispatch])

    const logout = useCallback(() => {
        window.localStorage.removeItem('user_information');
        dispatch({type : types.logout})
        location.reload();
        scrollToTopJs();
    }, [dispatch])

    return {
        isLoading: isLoading.loading,
        hasError: isLoading.error,
        status: isLoading.status,
        login,
        logout,
    }
}