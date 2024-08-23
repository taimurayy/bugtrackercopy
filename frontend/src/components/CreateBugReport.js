import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreateBugReport.css'; // Import the CSS file for styling

const CreateBugReport = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('open');
    const [assigned_id, setAssignedId] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        // Fetch the list of users when the component mounts
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
                setMessage('Failed to fetch users.');
            }
        };

        fetchUsers();
    }, []);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadFile = async (bugReportId) => {
        if (!file) return; // If no file selected, skip upload

        try {
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post(
                `http://localhost:3000/fileupload/fileupload`, // Adjusted URL
                formData,
                {
                  headers: {
                    'Authorization': `Bearer ${token}`, // Bearer token for authorization
                    'Content-Type': 'multipart/form-data', // Content type for file upload
                  },
                }
              );

            if (response.status === 200) {
                setMessage('File uploaded successfully!');
            } else {
                setMessage('Failed to upload file. Please try again.');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            setMessage('Failed to upload file. Please try again.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:3000/bug-reports', {
                title,
                description,
                status,
                assigned_id: parseInt(assigned_id, 10), // Ensure assignedId is an integer
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
                setFile(null);

                // Upload file if present
                if (file) {
                    await uploadFile(response.data.id); // Assuming the response contains the bug report ID
                }
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
                        value={assigned_id}
                        onChange={(e) => setAssignedId(e.target.value)}
                    >
                        <option value={'none'}>None</option>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>
                                {user.username}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="create-bug-report-label">
                    Attach File:
                    <input
                        type="file"
                        className="create-bug-report-file-input"
                        onChange={handleFileChange}
                    />
                </label>
                <button type="submit" className="create-bug-report-button">Submit</button>
            </form>
            {message && <p className="create-bug-report-message">{message}</p>}
        </div>
    );
};

export default CreateBugReport;
