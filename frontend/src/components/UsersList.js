import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UsersList.css'; // Import the CSS file for styling

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [newRole, setNewRole] = useState('');

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
        setSelectedUserId(userId);
        setShowModal(true);
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

    const handleRoleUpdate = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:3000/users/${selectedUserId}/role`, { roleId: newRole }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setShowModal(false);
            // Refresh the user list after successful role update
            const response = await axios.get('http://localhost:3000/users/users', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setUsers(response.data);
            setMessage('Role updated successfully.');
        } catch (error) {
            console.error('Error updating role:', error.response || error.message);
            setMessage('Failed to update role.');
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

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Update User Role</h3>
                        <label htmlFor="role">New Role:</label>
                        <select id="role" value={newRole} onChange={(e) => setNewRole(e.target.value)}>
                            <option value="">Select Role</option>
                            <option value="1">Admin</option>
                            <option value="2">Developer</option>
                            <option value="3">QA</option>
                        </select>
                        <button onClick={handleRoleUpdate}>Update Role</button>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsersList;
