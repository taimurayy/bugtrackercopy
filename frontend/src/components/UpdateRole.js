import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateRole.css'; // Import the CSS file for styling

const UpdateRole = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
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
            }
        };

        fetchUsers();
    }, []);

    const handleUpdateRole = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:3000/users/${selectedUser}/role`, { roleId: newRole }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            alert('Role updated successfully.');
        } catch (error) {
            console.error('Error updating role:', error.response || error.message);
            alert('Failed to update role.');
        }
    };

    return (
        <div className="update-role-container">
            <h2 className="update-role-heading">Update User Role</h2>
            <div className="update-role-form">
                <label htmlFor="user">Select User:</label>
                <select id="user" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                    <option value="">Select User</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.username}</option>
                    ))}
                </select>

                <label htmlFor="role">New Role:</label>
                <select id="role" value={newRole} onChange={(e) => setNewRole(e.target.value)}>
                    <option value="">Select Role</option>
                    <option value="1">Admin</option>
                    <option value="2">Developer</option>
                    <option value="3">QA</option>
                </select>

                <button onClick={handleUpdateRole}>Update Role</button>
            </div>
        </div>
    );
};

export default UpdateRole;
