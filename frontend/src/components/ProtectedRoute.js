// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    if (!token || (tokenExpiration && Date.now() > parseInt(tokenExpiration, 10))) {
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiration');
        return <Navigate to="/login" />;
    }

    return <Component />;
};

export default ProtectedRoute;
