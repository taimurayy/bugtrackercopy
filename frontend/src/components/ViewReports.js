import React, { useState, useEffect } from 'react';
import './ViewReports.css'; // Import the CSS file for styling

const ViewReports = () => {
    const [reports, setReports] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Simulate fetching bug reports
        const fetchReports = async () => {
            try {
                // Dummy data for testing
                const dummyData = [
                    {
                        id: 1,
                        title: 'Bug in Login Page',
                        description: 'Error when trying to log in with correct credentials.',
                        status: 'open',
                        assignedId: 2,
                        reportedId: 1,
                    },
                    {
                        id: 2,
                        title: 'Issue with Dashboard',
                        description: 'Dashboard crashes on loading the user data.',
                        status: 'closed',
                        assignedId: null,
                        reportedId: 3,
                    },
                    {
                        id: 3,
                        title: 'Broken Links',
                        description: 'Several links are broken on the contact page.',
                        status: 'open',
                        assignedId: 4,
                        reportedId: 2,
                    },
                ];
                
                // Simulating network delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                setReports(dummyData);
            } catch (error) {
                console.error('Error fetching bug reports:', error.message);
                
            }
        };

        fetchReports();
    }, []);

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
                        <th>Reported ID</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map(report => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.title}</td>
                            <td>{report.description}</td>
                            <td>{report.status}</td>
                            <td>{report.assignedId !== null ? report.assignedId : 'N/A'}</td>
                            <td>{report.reportedId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewReports;
