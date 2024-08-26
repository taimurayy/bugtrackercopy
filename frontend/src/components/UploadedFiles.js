import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to install axios if you haven't
import './UploadedFiles.css'
const UploadedFiles = () => {
    const [files, setFiles] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await axios.get('http://localhost:3000/file-uploads'); // Update the URL as needed
                setFiles(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching files:', error.message);
                setMessage('Failed to load files.');
            }
        };

        fetchFiles();
    }, []);

    return (
        <div className="uploaded-files-container">
            <h2 className="uploaded-files-heading">Uploaded Files</h2>
            {message && <p className="uploaded-files-message">{message}</p>}
            <table className="uploaded-files-table">
                <thead>
                    <tr>
                        <th>Filename</th>
                        <th>Path</th>
                        <th>Bug Report ID</th>
                        <th>Uploaded At</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map(file => (
                        <tr key={file.id}>
                            <td>{file.filename}</td>
                            <td>{file.path}</td>
                            <td>{file.bugReportId}</td>
                            <td>{new Date(file.uploadedAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UploadedFiles;
