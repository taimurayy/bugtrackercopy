// src/hooks/useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkTokenExpiration = () => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                const { exp } = JSON.parse(atob(token.split('.')[1]));
                const now = Math.floor(Date.now() / 1000);
                if (exp < now) {
                    localStorage.removeItem('accessToken');
                    navigate('/login');
                }
            }
        };

        checkTokenExpiration();
        const interval = setInterval(checkTokenExpiration, 60000); // Check every minute

        return () => clearInterval(interval);
    }, [navigate]);
};

export default useAuth;
