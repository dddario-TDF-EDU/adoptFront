import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleCheckboxChange = ({ target }) => {
        setValues({
            ...values,
            [target.name] : target.checked
        })
    }
    
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, setValues, handleInputChange, handleCheckboxChange, reset];
}