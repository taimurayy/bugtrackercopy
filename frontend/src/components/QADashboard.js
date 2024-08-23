import React, { useState } from 'react';
import Logout from './Logout';
import CreateBugReport from './CreateBugReport';
import ViewReports from './ViewReports'; 
import UpdateBugReport from './UpdateBugReport'; // Import the UpdateBugReport component
import './QADashboard.css'; 

const QADashboard = () => {
    const [showCreateBugReport, setShowCreateBugReport] = useState(false);
    const [showReports, setShowReports] = useState(false);
    const [showUpdateBugReport, setShowUpdateBugReport] = useState(false); // Add state for update

    const handleCreateButtonClick = () => {
        setShowCreateBugReport(true);
        setShowReports(false);
        setShowUpdateBugReport(false);
    };

    const handleViewReportsButtonClick = () => {
        setShowReports(true);
        setShowCreateBugReport(false);
        setShowUpdateBugReport(false);
    };

    const handleUpdateButtonClick = () => {
        setShowUpdateBugReport(true);
        setShowCreateBugReport(false);
        setShowReports(false);
    };

    const handleGoBackButtonClick = () => {
        setShowCreateBugReport(false);
        setShowReports(false);
        setShowUpdateBugReport(false);
    };

    return (
        <div className="qa-dashboard-container">
            <h2 className="qa-dashboard-heading">QA Dashboard</h2>
            <div className="qa-dashboard-content">
                {!showCreateBugReport && !showReports && !showUpdateBugReport && (
                    <>
                        <button className="qa-dashboard-button" onClick={handleCreateButtonClick}>
                            Create Bug Report
                        </button>
                        <button className="qa-dashboard-button" onClick={handleViewReportsButtonClick}>
                            View Reports
                        </button>
                        <button className="qa-dashboard-button" onClick={handleUpdateButtonClick}>
                            Update Bug Report Status
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

                {showUpdateBugReport && (
                    <div className="qa-dashboard-update-container">
                        <UpdateBugReport />
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
