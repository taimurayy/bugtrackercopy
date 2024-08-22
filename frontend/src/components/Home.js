// src/components/Home.js
import React from 'react';
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
            </section>
            <footer className="home-footer">
                <p>&copy; {new Date().getFullYear()} Sysvoy. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
