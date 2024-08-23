import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateBugReport.css'; // Import the CSS file for styling

const UpdateBugReport = () => {
    const [reports, setReports] = useState([]);
    const [selectedReport, setSelectedReport] = useState('');
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch reports to populate the selection list
        const fetchReports = async () => {
            try {
                const response = await axios.get('http://localhost:3000/bug-reports');
                setReports(response.data);
            } catch (error) {
                console.error('Error fetching bug reports:', error.message);
            }
        };

        fetchReports();
    }, []);

    const handleSelectChange = (e) => {
        const report = reports.find(r => r.id === parseInt(e.target.value));
        setSelectedReport(report.id);
        setStatus(report.status);
    };

    const handleUpdate = async () => {
        if (!selectedReport || !status) return;
        try {
            await axios.patch(`http://localhost:3000/bug-reports/${selectedReport}`, {
                status
            });
            setMessage('Bug report status updated successfully!');
        } catch (error) {
            console.error('Error updating bug report status:', error.message);
            setMessage('Failed to update bug report status.');
        }
    };

    return (
        <div className="update-bug-report-container">
            <h3>Update Bug Report Status</h3>
            <select onChange={handleSelectChange} value={selectedReport}>
                <option value="" disabled>Select a report to update</option>
                {reports.map(report => (
                    <option key={report.id} value={report.id}>
                        {report.title}
                    </option>
                ))}
            </select>
            {selectedReport && (
                <div className="update-bug-report-form">
                    <label>
                        Status:
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="open">Open</option>
                            <option value="closed">Closed</option>
                        </select>
                    </label>
                    <button className="update-bug-report-button" onClick={handleUpdate}>
                        Update Status
                    </button>
                    {message && <p className="update-bug-report-message">{message}</p>}
                </div>
            )}
        </div>
    );
};

export default UpdateBugReport;
