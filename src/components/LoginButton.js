import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
        <a className="navLink" onClick={() => loginWithRedirect()}>
                Login
            </a>
        )
    )
}

export default LoginButton
