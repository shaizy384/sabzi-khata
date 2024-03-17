import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
    const auth = useSelector(state => state.navbarTitleReducer.auth)
    // console.log(au);
    // const auth = false;
    // if (localStorage.getItem("AUTH_USER"))
    if (auth) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <>
            {children}
        </>
    );
};