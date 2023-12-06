import { useState } from "react"

export const useAsync = (asyncFunction) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [ success, setSuccess ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false)



    const execute = async (...args) => {
        
        try {
            setIsLoading(true);
            const response = await asyncFunction(...args);
            setData(response.data);
            setSuccess(true);
        }
        catch (error) {
            setError(error);
        }
        finally {
            setIsLoading(false);
        }
    }
    
    return { 
        isLoading,
        error,
        success,
        execute,
        data,
    }
}