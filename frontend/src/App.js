import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import DeveloperDashboard from './components/DeveloperDashboard';
import QADashboard from './components/QADashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li><Link className="navbar-link" to="/">Home</Link></li>
                        <li><Link className="navbar-link" to="/login">Login</Link></li>
                        <li><Link className="navbar-link" to="/register">Register</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin-dashboard" element={<ProtectedRoute element={AdminDashboard} />} />
                    <Route path="/developer-dashboard" element={<ProtectedRoute element={DeveloperDashboard} />} />
                    <Route path="/qa-dashboard" element={<ProtectedRoute element={QADashboard} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
