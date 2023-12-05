import TextInput from "../../Components/Inputs/TextInput/TextInput";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import './resetPassword.css'
import { restorePass } from "../../auth/services/authServices.mjs";

export const ResetPasswordModal = () => {

    const [isValidEmail, setIsValidEmail] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [wasSent, setWasSent] = useState(null)
    const [formData, ,handleInputChange] = useForm({
        email: ''
    })

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            await restorePass(formData);
            setWasSent(true);
            setIsValidEmail(true);
            setIsLoading(false)
        }
        catch (error) {
            setWasSent(true);
            setIsValidEmail(false);
            setIsLoading(false)
        }
    }

    return (
        <div className="restore-pass-modal">
            <h3 className="restore-pass-title">
                Por favor ingresa la dirección de correo electrónico con la que estas logueado. En caso de coincidir con la información almacenada, se te enviará un correo para proceder con el restablecimiento de tu contraseña.
            </h3>
            <form className="restore-pass-form" onSubmit={handleSubmitForm}>
                <TextInput
                    className='restore-pass'
                    label="Email"
                    placeholder="email@correo.com"
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    isUseRef={formData.email}
                    onChange={handleInputChange}
                />
                <div className="restore-btn-container">
                    {isLoading ?
                        <p className=""> Verificando correo electronico... </p> :
                        <button className="restore-pass-btn"> Enviar </button>
                    }
                </div>

            </form>
            <div className="restore-pass-error">
                {(wasSent && !isValidEmail) && (
                    <p className="error-message">No tenemos registrado usuario con el correo proporcionado. </p>
                )}
                {(wasSent && isValidEmail) && (
                    <p className="success-message"> Revisa tu bandeja de correo, te enviamos las instrucciones para continuar con el restablecimiento de tu contraseña.</p>
                )}
            </div>
        </div>
    )
}