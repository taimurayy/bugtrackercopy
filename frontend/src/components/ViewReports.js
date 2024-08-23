import React, { useState, useEffect } from 'react';
import './ViewReports.css'; // Import the CSS file for styling
import axios from 'axios'; // Make sure to install axios if you haven't

const ViewReports = () => {
    const [reports, setReports] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get('http://localhost:3000/bug-reports');
                setReports(response.data);
            } catch (error) {
                console.error('Error fetching bug reports:', error.message);
                setMessage('Failed to load bug reports.');
            }
        };

        fetchReports();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this report?');
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/bug-reports/${id}`);
                setReports(reports.filter(report => report.id !== id));
                setMessage('Report deleted successfully.');
            } catch (error) {
                console.error('Error deleting report:', error.message);
                setMessage('Failed to delete the report.');
            }
        }
    };

    return (
        <div className="view-reports-container">
            <h2 className="view-reports-heading">Bug Reports</h2>
            {message && <p className="view-reports-message">{message}</p>}
            <table className="view-reports-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Assigned ID</th>
                        <th>Actions</th> {/* New Actions column for delete button */}
                    </tr>
                </thead>
                <tbody>
                    {reports.map(report => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.title}</td>
                            <td>{report.description}</td>
                            <td>{report.status}</td>
                            <td>{report.assigned_id}</td>
                            <td>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDelete(report.id)}
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

export default ViewReports;
