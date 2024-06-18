import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
    const isAuthorized = useSelector((state) => state.authReducer.isAuthenticated);
    //   const auth = useSelector(state => state.navbarTitleReducer.auth)
    // console.log(au);
    // const auth = false;
    // if (localStorage.getItem("AUTH_USER"))
    if (isAuthorized) {
        return <Navigate to="/welcome" />;
    }
    return (
        <>
            {children}
        </>
    );
};