// src/components/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, allowedRoles, ...rest }) => {
    const token = localStorage.getItem('token');
    const userRole = token ? parseInt(token, 10) : null; // Assume token is the role ID

    // Check if user is authenticated and has the right role
    const isAuthorized = token && allowedRoles.includes(userRole);

    return (
        <Route
            {...rest}
            element={isAuthorized ? Component : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute;
