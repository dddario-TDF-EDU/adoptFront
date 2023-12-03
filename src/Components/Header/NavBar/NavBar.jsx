import { useState } from 'react';
import Logo from '../../../assets/logo.svg';
import ScrollToTop from 'react-scroll-to-top';
import { Link } from 'react-router-dom';
import { LoginScreen } from '../../Login/LoginScreen';
import { useUser } from '../../../hooks/useUser'
import './navBar.css'
import { UserProfile } from '../../UserProfile/UserProfile';

export const NavBar = () => {

    const [isLoginSelected, setIsLoginSelected] = useState(false);
    const [isProfileSelected, setIsProfileSelected] = useState(false);
    const [user, setUser] = useState(null);
    const { isLogged } = useUser();

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
                    <Link to='/' className='logo-link' onClick={<ScrollToTop smooth />}>
                        <img className='logo' src={Logo} alt="logo" />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li className="link-item">
                        <Link to='/' onClick={<ScrollToTop smooth />}>Inicio</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/adopciones/mascotas' onClick={<ScrollToTop smooth />}>Adoptar</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/denuncias' onClick={<ScrollToTop smooth />} >Denunciar</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/informacion' onClick={<ScrollToTop smooth />} >Información</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/donaciones' onClick={<ScrollToTop smooth />} >Ayudar</Link>
                    </li>
                    <li className="link-item">
                        {!isLogged ?
                            <button className="user-login-button"
                                onClick={() => handleLogin()}>
                                Iniciar sesion
                            </button>
                            :
                            <button className='btn-profile'
                                onClick={() => handleProfile()}
                            > {user && user[0]} </button>
                        }
                    </li>
                </ul>
            </nav>
            {!isLogged ?
                <LoginScreen isLoginSelected={isLoginSelected} />
                : <UserProfile userInformation={setUser} isProfileSelected={isProfileSelected} />}
        </>
    )
}
