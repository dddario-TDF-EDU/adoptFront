import { useEffect, useState } from "react"
import './userProfile.css'

export const UserProfile = ({ userInformation, isProfileSelected }) => {

    const [user, setUser] = useState({});


    useEffect(() => {
        const token = window.sessionStorage.getItem('jwt')
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64));
        const payload = JSON.parse(jsonPayload);
        setUser(payload)
        userInformation(user.userName)
    }, [user.userName, userInformation])


    return (
        <div className={isProfileSelected ? 'profile-container' : 'none'}>
            <h2 className="profile-greet">
                Bienvenido {user.userName +' '+ user.userSurname}
            </h2>
        </div>
    )
}