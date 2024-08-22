import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreateBugReport.css'; // Import the CSS file for styling

const CreateBugReport = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('open');
    const [assignedId, setAssignedId] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch the list of users when the component mounts
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
                setMessage('Failed to fetch users.');
            }
        };

        fetchUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:3000/bug-reports', {
                title,
                description,
                status,
                assignedId: parseInt(assignedId, 10), // Ensure assignedId is an integer
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.status === 201) {
                setMessage('Bug report created successfully!');
                setTitle('');
                setDescription('');
                setStatus('open');
                setAssignedId('');
            } else {
                setMessage('Failed to create bug report. Please try again.');
            }
        } catch (error) {
            console.error('Error creating bug report:', error);
            setMessage('Failed to create bug report. Please try again.');
        }
    };

    return (
        <div className="create-bug-report-container">
            <h2 className="create-bug-report-heading">Create Bug Report</h2>
            <form className="create-bug-report-form" onSubmit={handleSubmit}>
                <label className="create-bug-report-label">
                    Title:
                    <input
                        type="text"
                        className="create-bug-report-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label className="create-bug-report-label">
                    Description:
                    <textarea
                        className="create-bug-report-textarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <label className="create-bug-report-label">
                    Status:
                    <select
                        className="create-bug-report-select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                    </select>
                </label>
                <label className="create-bug-report-label">
                    Assigned User:
                    <select
                        className="create-bug-report-select"
                        value={assignedId}
                        onChange={(e) => setAssignedId(e.target.value)}
                    >
                        <option value="">None</option>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>
                                {user.id}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit" className="create-bug-report-button">Submit</button>
            </form>
            {message && <p className="create-bug-report-message">{message}</p>}
        </div>
    );
};

export default CreateBugReport;
