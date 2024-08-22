import React, { useState } from 'react';
import Logout from './Logout';
import CreateBugReport from './CreateBugReport';
import ViewReports from './ViewReports'; // Import the ViewReports component
import './QADashboard.css'; // Import the CSS file for styling

const QADashboard = () => {
    const [showCreateBugReport, setShowCreateBugReport] = useState(false);
    const [showReports, setShowReports] = useState(false);

    const handleCreateButtonClick = () => {
        setShowCreateBugReport(true);
        setShowReports(false);
    };

    const handleViewReportsButtonClick = () => {
        setShowReports(true);
        setShowCreateBugReport(false);
    };

    const handleGoBackButtonClick = () => {
        setShowCreateBugReport(false);
        setShowReports(false);
    };

    return (
        <div className="qa-dashboard-container">
            <h2 className="qa-dashboard-heading">QA Dashboard</h2>
            <div className="qa-dashboard-content">
                {!showCreateBugReport && !showReports && (
                    <>
                        <button className="qa-dashboard-button" onClick={handleCreateButtonClick}>
                            Create Bug Report
                        </button>
                        <button className="qa-dashboard-button" onClick={handleViewReportsButtonClick}>
                            View Reports
                        </button>
                    </>
                )}

                {showCreateBugReport && (
                    <div className="qa-dashboard-form-container">
                        <CreateBugReport />
                        <button className="qa-dashboard-button go-back-button" onClick={handleGoBackButtonClick}>
                            Go Back
                        </button>
                    </div>
                )}

                {showReports && (
                    <div className="qa-dashboard-report-container">
                        <ViewReports />
                        <button className="qa-dashboard-button go-back-button" onClick={handleGoBackButtonClick}>
                            Go Back
                        </button>
                    </div>
                )}

                <Logout />
            </div>
        </div>
    );
};

export default QADashboard;
