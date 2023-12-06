import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';


import Logo from '../../../assets/logo.svg';

import { LoginScreen } from '../../Login/LoginScreen';

import { UserProfile } from '../../UserProfile/UserProfile';
import './navBar.css'

import { AuthContext } from '../../../auth/AuthContext';
import { scrollToTopJs } from '../../../constants/scrollToTop.mjs';

export const NavBar = () => {

    const { user : { logged, user} } = useContext(AuthContext);

    const [isLoginSelected, setIsLoginSelected] = useState(false);
    const [isProfileSelected, setIsProfileSelected] = useState(false);

    const handleLogin = () => {
        setIsLoginSelected(!isLoginSelected)
    }

    const handleProfile = () => {
        setIsProfileSelected(!isProfileSelected)
    }

    return (
        <>
            <nav id="nav" className="main-nav">
                <div className='logo-div'>
                    <Link to='/' className='logo-link' onClick={() => scrollToTopJs()}>
                        <img className='logo' src={Logo} alt="logo" />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li className="link-item">
                        <Link to='/' onClick={() => scrollToTopJs()}>Inicio</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/adopciones/mascotas' onClick={() =>scrollToTopJs()}>Adoptar</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/denuncias' onClick={() => scrollToTopJs()} >Denunciar</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/informacion' onClick={() => scrollToTopJs()} >Información</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/donaciones' onClick={() => scrollToTopJs()} >Ayudar</Link>
                    </li>
                    <li className="link-item">
                        {logged ?
                            <button className='btn-profile'
                                onClick={handleProfile}
                            > {user.name[0] + user.surname[0]}
                            </button> :
                            <button className="user-login-button"
                                onClick={handleLogin}>
                                Iniciar sesion
                            </button>
                        }
                    </li>
                </ul>
            </nav>
            { logged ?
                <UserProfile isProfileSelected={isProfileSelected} setIsProfileSelected={setIsProfileSelected} /> :
                <LoginScreen isLoginSelected={isLoginSelected} setIsLoginSelected={setIsLoginSelected} />
            }
        </>
    )
}
