import { useUser } from '../../hooks/useUser'
import './userProfile.css'

export const UserProfile = ({ isProfileSelected }) => {

    const { userData, logout } = useUser();

    return (
        <div className={isProfileSelected ? 'profile-container' : 'none'}>
            <h2 className="profile-greet">
                Bienvenido {userData.name}
            </h2>
            <button onClick={logout}>Cerrar sesion</button>
        </div>
    )
}