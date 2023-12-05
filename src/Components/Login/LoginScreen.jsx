import { Link } from 'react-router-dom'
import { Modal } from '../Modales/Modal'
import { RegisterForm } from '../Register/RegisterForm'

import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useUser } from '../../hooks/useUser'

import showPass from '../../assets/eye-password/show-password.svg'
import hidePass from '../../assets/eye-password/hide-password.svg'

import './loginScreen.css'
import { ResetPasswordModal } from '../../utils/ResetPassword/ResetPasswordModal'

export const LoginScreen = ({ isLoginSelected, setIsLoginSelected }) => {

    const { login, status } = useUser();
    const [isOpenModal1, setIsOpenModal1] = useState(false);
    const [isOpenModal4, setIsOpenModal4] = useState(false);
    const [formValues, , handleInputChange, , reset] = useForm({
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
                <button className='btn-close-login' onClick={() => { setIsLoginSelected(false), reset(), setIsShowPass(false) }} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="modal-close-icon" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                <h2 className='login-title'>Hola, Bienvenido a Adoptapp</h2>
                <form className="login-form" onSubmit={handleSubmitForm}>
                    <label className='email-login-label' htmlFor="email-input-login">Email</label>
                    <input id='email-input-login' name='email' type="text" className='email-input-login' placeholder='Email' onChange={handleInputChange} value={formValues.email} />
                    <label className='password-login-label' htmlFor="password-input-login">Contraseña</label>
                    <div className='pass-group'>
                        <input id='password-input-login' type={!isShowPass ? "password" : "text"} className='password-input-login' placeholder='Contraseña' onChange={handleInputChange} value={formValues.password} name='password' />
                        <button type='button' className='button-pass' onClick={handleTooglePass}>
                            <img src={!isShowPass ? showPass : hidePass} alt="" />
                        </button>
                    </div>
                    {status &&
                        <p className='status-text'> {status === 401 ? 'Usuario o contraseña incorrecto ' : status}
                        </p>}
                    <p> Todavia no tiene una cuenta?
                        <Link className="a-register" onClick={() => setIsOpenModal1(true)}>
                            Registrese
                        </Link>
                    </p>

                    <Link className="a-forgot-pass" onClick={() => setIsOpenModal4(true)}>
                        Olvidó su contraseña?
                    </Link>
                    <button className='login-button'>Iniciar Sesion</button>
                </form>
                <Modal isOpen={isOpenModal1}
                    closeModal={() => setIsOpenModal1(false)}
                    modalNumber="1" >
                    <RegisterForm closeModal1={() => setIsOpenModal1(false)} />
                </Modal>
                <Modal isOpen={isOpenModal4}
                    closeModal={() => setIsOpenModal4(false)}
                    modalNumber="4">
                    <ResetPasswordModal />
                </Modal>
            </div>
        </>
    )
}


