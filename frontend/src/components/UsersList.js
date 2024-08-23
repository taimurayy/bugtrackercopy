import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UsersList.css'; // Import the CSS file for styling

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch the list of users when the component mounts
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/users/users', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error.response || error.message);
                setMessage('Failed to fetch users.');
            }
        };

        fetchUsers();
    }, []);

    const getRoleName = (roleId) => {
        switch (roleId) {
            case 1:
                return 'Admin';
            case 2:
                return 'Developer';
            case 3:
                return 'QA';
            default:
                return 'Unknown';
        }
    };

    const handleUpdate = (userId) => {
        // Implement update functionality here
        console.log(`Update user with ID: ${userId}`);
        // Example: redirect to an update form or open a modal for editing
    };

    const handleDelete = async (userId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this user?');

        if (confirmDelete) {
            try {
                const token = localStorage.getItem('token');
                await axios.delete(`http://localhost:3000/users/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                // Refresh the user list after successful deletion
                setUsers(users.filter(user => user.id !== userId));
                setMessage('User deleted successfully.');
            } catch (error) {
                console.error('Error deleting user:', error.response || error.message);
                setMessage('Failed to delete user.');
            }
        }
    };

    return (
        <div className="users-list-container">
            <h2 className="users-list-heading">Users List</h2>
            {message && <p className="users-list-message">{message}</p>}
            <table className="users-list-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{getRoleName(user.roleId)}</td>
                            <td>
                                <button 
                                    className="users-list-button" 
                                    onClick={() => handleUpdate(user.id)}
                                >
                                    Update
                                </button>
                                <button 
                                    className="users-list-button users-list-button-delete" 
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;
