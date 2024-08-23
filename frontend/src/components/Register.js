// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css'; // Import the CSS file for styling

const Register = () => {
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [roleId, setRoleId] = useState('1'); // Default roleId to 1
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/users/register', {
                id,
                username,
                email,
                password,
                roleId,
            });

            console.log('Registration successful:', response.data);
            alert('Registration successful!');
            navigate('/login');
        } catch (error) {
            console.error('There was an error!', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <br />
        <div className="register-container">
            <h2 className="register-heading">Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label className="register-label">
                    ID:
                    <input
                        type="text"
                        className="register-input"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </label>
                <label className="register-label">
                    Username:
                    <input
                        type="text"
                        className="register-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label className="register-label">
                    Email:
                    <input
                        type="email"
                        className="register-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className="register-label">
                    Password:
                    <input
                        type="password"
                        className="register-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <label className="register-label">
                    Confirm Password:
                    <input
                        type="password"
                        className="register-input"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <label className="register-label">
                    Role:
                    <select
                        className="register-select"
                        value={roleId}
                        onChange={(e) => setRoleId(e.target.value)}
                        required
                    >
                        <option value="1">Developer</option>
                        <option value="2">Admin</option>
                        <option value="3">QA</option>
                    </select>
                </label>
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
        <br />
        </div>
    );
};

export default Register;
