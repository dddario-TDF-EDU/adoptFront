import { Link } from 'react-router-dom'
import { Modal } from '../Modales/Modal'
import { RegisterForm } from '../Register/RegisterForm'
import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import showPass from '../../assets/eye-password/show-password.svg'
import hidePass from '../../assets/eye-password/hide-password.svg'

import './loginScreen.css'
import { useUser } from '../../hooks/useUser'

export const LoginScreen = ({ isLoginSelected }) => {

    const { login, status } = useUser();
    const [isOpenModal1, setIsOpenModal1] = useState(false);
    const [formValues, handleInputChange] = useForm({
        email: '',
        password: '',
    })

    const [isShowPass, setIsShowPass] = useState(false);

    const handleTooglePass = () => {
        setIsShowPass(!isShowPass)
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        login(formValues)
    }

    return (
        <>
            <div className={isLoginSelected ? `login-container` : `none`}>
                <h2 className='login-title'>Hola, Bienvenido a Adoptapp</h2>
                <form className="login-form" onSubmit={handleSubmitForm}>
                    <label className='email-login-label' htmlFor="email-input-login">Email</label>
                    <input id='email-input-login' name='email' type="text" className='email-input-login' placeholder='Email' onChange={handleInputChange} value={formValues.email} />
                    <label className='password-login-label' htmlFor="password-input-login">Contraseña</label>
                    <div className='pass-group'>
                        <input id='password-input-login' type={isShowPass ? "text" : "password"} className='password-input-login' placeholder='Contraseña' onChange={handleInputChange} value={formValues.password} name='password' />
                        <button type='button' className='button-pass' onClick={handleTooglePass}>
                            <img src={isShowPass ? showPass : hidePass} alt="" />
                        </button>
                    </div>
                    {status && <p className='status-text'> {status === 401 ? 'Usuario o contraseña incorrecto ' : status} </p>}
                    <p> Todavia no tiene una cuenta?
                        <Link className="a-register" onClick={() => setIsOpenModal1(true)}>
                            Registrese
                        </Link>
                    </p>

                    <Link className="a-forgot-pass" to="/"> Olvidó su contraseña? </Link>
                    <button className='login-button'>Iniciar Sesion</button>
                </form>
                <Modal isOpen={isOpenModal1}
                    closeModal={() => { setIsOpenModal1(false) }}
                    modalNumber="1" >
                    <RegisterForm closeModal1={() => { setIsOpenModal1(false) }} />
                </Modal>
            </div>
        </>
    )
}


