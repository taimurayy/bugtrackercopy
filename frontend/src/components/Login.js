// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for HTTP requests
import './Login.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to the backend login endpoint
            const response = await axios.post('http://localhost:3000/users/login', {
                email,
                password,
            });

            const { roleId, id, token } = response.data;
            const expirationTime = Date.now() + 60 * 60 * 1000; // Token expires in 1 hour

            localStorage.setItem('token', token); // Store the token
            localStorage.setItem('user_id',id);
            localStorage.setItem('roleId', roleId); // Store the roleId
            localStorage.setItem('tokenExpiration', expirationTime); // Store the expiration time

            // Set a timeout to remove the token after expiration
            setTimeout(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('roleId');
                localStorage.removeItem('user_id');
                localStorage.removeItem('tokenExpiration');
                alert('Session expired. Please log in again.');
                navigate('/login'); // Redirect to login after token expires
            }, 60 * 60 * 1000); // 1 hour in milliseconds

            // Navigate based on roleId
            if (roleId === 1) {
                navigate('/admin-dashboard'); // Redirect to admin dashboard
            } else if (roleId === 2) {
                navigate('/developer-dashboard'); // Redirect to developer dashboard
            } else if (roleId === 3) {
                navigate('/qa-dashboard'); // Redirect to QA dashboard
            } else {
                navigate('/'); // Default redirect
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div>
            <br />
        <div className="login-container">
            <h2 className="login-heading">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="login-label">
                    Email:
                    <input
                        type="email"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className="login-label">
                    Password:
                    <input
                        type="password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" className="login-button">Login</button>
                <p className="login-register-link">
                    Don't have an account? <Link to="/register" className="login-link">Register here</Link>
                </p>
            </form>
        </div>
        </div>
    );
};

export default Login;
