import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css'; // Import a CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Bug Tracker!</h1>
            </header>
            <section className="home-content">
                <h2>Home</h2>
                <p>Welcome to the home page! We are excited to have you here. Explore our features and services.</p>
                <p>
                    Don't have an account? <Link to="/register" className="home-register-link">Register as a new user</Link>
                </p>
            </section>
            <footer className="home-footer">
                <p>&copy; {new Date().getFullYear()} Sysvoy. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
