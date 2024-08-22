import React, { useState } from 'react';
import Logout from './Logout';
import CreateBugReport from './CreateBugReport'; // Import the CreateBugReport component
import ViewReports from './ViewReports'; // Import the ViewReports component
import UsersList from './UsersList'; // Import the UsersList component
import './AdminDashboard.css'; // Import the CSS file for styling

const AdminDashboard = () => {
    const [showCreateBugReport, setShowCreateBugReport] = useState(false);
    const [showReports, setShowReports] = useState(false);
    const [showUsers, setShowUsers] = useState(false);

    const handleCreateButtonClick = () => {
        setShowCreateBugReport(true);
        setShowReports(false);
        setShowUsers(false);
    };

    const handleViewReportsButtonClick = () => {
        setShowReports(true);
        setShowCreateBugReport(false);
        setShowUsers(false);
    };

    const handleViewUsersButtonClick = () => {
        setShowUsers(true);
        setShowCreateBugReport(false);
        setShowReports(false);
    };

    const handleGoBackButtonClick = () => {
        setShowCreateBugReport(false);
        setShowReports(false);
        setShowUsers(false);
    };

    return (
        <div className="admin-dashboard-container">
            <h2 className="admin-dashboard-heading">Admin Dashboard</h2>
            <div className="admin-dashboard-content">
                {!showCreateBugReport && !showReports && !showUsers && (
                    <>
                        <button className="admin-dashboard-button" onClick={handleCreateButtonClick}>
                            Create Bug Report
                        </button>
                        <button className="admin-dashboard-button" onClick={handleViewReportsButtonClick}>
                            View Reports
                        </button>
                        <button className="admin-dashboard-button" onClick={handleViewUsersButtonClick}>
                            View Users
                        </button>
                    </>
                )}
                
                {showCreateBugReport && (
                    <div className="admin-dashboard-report-container">
                        <CreateBugReport />
                        <button className="admin-dashboard-button go-back-button" onClick={handleGoBackButtonClick}>
                            Go Back
                        </button>
                    </div>
                )}
                
                {showReports && (
                    <div className="admin-dashboard-report-container">
                        <ViewReports />
                        <button className="admin-dashboard-button go-back-button" onClick={handleGoBackButtonClick}>
                            Go Back
                        </button>
                    </div>
                )}

                {showUsers && (
                    <div className="admin-dashboard-report-container">
                        <UsersList />
                        <button className="admin-dashboard-button go-back-button" onClick={handleGoBackButtonClick}>
                            Go Back
                        </button>
                    </div>
                )}
                
                <Logout />
            </div>
        </div>
    );
};

export default AdminDashboard;
