import { useUser } from '../../hooks/useUser'
import './userProfile.css'

export const UserProfile = ({ isProfileSelected }) => {

    const { user } = useUser();
    
    return (
        <div className={isProfileSelected ? 'profile-container' : 'none'}>
            <h2 className="profile-greet">
                Bienvenido {user.name}
            </h2>
        </div>
    )
}