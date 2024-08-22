import React, { useState } from 'react';
import Logout from './Logout';
import ViewReports from './ViewReports'; // Import the ViewReports component
import './DeveloperDashboard.css'; // Import the CSS file for styling

const DeveloperDashboard = () => {
    const [showReports, setShowReports] = useState(false);

    const handleViewReportsButtonClick = () => {
        setShowReports(true);
    };

    const handleGoBackButtonClick = () => {
        setShowReports(false);
    };

    return (
        <div className="developer-dashboard-container">
            <h2 className="developer-dashboard-heading">Developer Dashboard</h2>
            <div className="developer-dashboard-content">
                {!showReports && (
                    <button className="developer-dashboard-button" onClick={handleViewReportsButtonClick}>
                        View Reports
                    </button>
                )}

                {showReports && (
                    <div className="developer-dashboard-report-container">
                        <ViewReports />
                        <button className="developer-dashboard-button go-back-button" onClick={handleGoBackButtonClick}>
                            Go Back
                        </button>
                    </div>
                )}

                <Logout />
            </div>
        </div>
    );
};

export default DeveloperDashboard;
