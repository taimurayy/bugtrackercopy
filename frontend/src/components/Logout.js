// src/components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css'; // Import the CSS file for styling

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear token from local storage
        navigate('/login'); // Redirect to login page
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            Logout
        </button>
    );
};

export default Logout;
