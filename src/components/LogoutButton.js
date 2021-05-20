import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated, user } = useAuth0();
    const returnUrl = window.location.origin + '/feel-good'
    return (
        isAuthenticated && (
            <a className="navLink" onClick={() => logout({ returnTo: returnUrl})}>
                Logout {user.nickname}
                </a>
            )
    )
}

export default LogoutButton
