import React, { useState } from 'react';

const ProjectDetails = () => {
    const [showSchedule, setShowSchedule] = useState(false); // State to toggle schedule visibility

    const containerStyle = {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#FFF5E1',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };

    const titleStyle = {
        fontSize: '2.5rem',
        color: '#FF7F00',
        marginBottom: '20px',
        textAlign: 'center',
    };

    const paragraphStyle = {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: '#333',
        margin: '10px 0',
    };

    const strongStyle = {
        color: '#FF7F00',
    };

    const sectionStyle = {
        backgroundColor: '#FFF8E1',
        padding: '15px',
        borderRadius: '6px',
        marginBottom: '15px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#FF7F00',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        marginTop: '20px',
        textAlign: 'center',
        display: 'block',
        width: '100%',
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    };

    const tableCellStyle = {
        padding: '15px',
        textAlign: 'center',
        border: '1px solid #ddd',
        fontSize: '1rem',
        color: '#333',
    };

    const handleButtonClick = () => {
        setShowSchedule(!showSchedule); // Toggle schedule visibility
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Project Details</h1>
            <div style={sectionStyle}>
                <p style={paragraphStyle}><strong style={strongStyle}>Project Name:</strong> ADFC GP</p>
                <p style={paragraphStyle}><strong style={strongStyle}>Description:</strong> This project is designed to manage and streamline workflows for ADFC GP, a drilling company. It includes features for tracking progress, managing tasks, and enhancing productivity.</p>
            </div>
            <div style={sectionStyle}>
                <p style={paragraphStyle}><strong style={strongStyle}>Technologies Used:</strong> React, JavaScript, HTML, CSS</p>
                <p style={paragraphStyle}><strong style={strongStyle}>Version:</strong> 1.0.0</p>
            </div>
            <div style={sectionStyle}>
                <p style={paragraphStyle}><strong style={strongStyle}>Author:</strong> Your Name</p>
            </div>
            <button style={buttonStyle} onClick={handleButtonClick}>
                {showSchedule ? 'Hide Schedule' : 'View Schedule'}
            </button>

            {/* Conditionally render the schedule table */}
            {showSchedule && (
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={tableCellStyle}>Mon</th>
                            <th style={tableCellStyle}>Tue</th>
                            <th style={tableCellStyle}>Wed</th>
                            <th style={tableCellStyle}>Thu</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tableCellStyle}>8:00 AM - 10:00 AM</td>
                            <td style={tableCellStyle}>8:00 AM - 10:00 AM</td>
                            <td style={tableCellStyle}>8:00 AM - 10:00 AM</td>
                            <td style={tableCellStyle}>8:00 AM - 10:00 AM</td>
                        </tr>
                        <tr>
                            <td style={tableCellStyle}>10:00 AM - 12:00 PM</td>
                            <td style={tableCellStyle}>10:00 AM - 12:00 PM</td>
                            <td style={tableCellStyle}>10:00 AM - 12:00 PM</td>
                            <td style={tableCellStyle}>10:00 AM - 12:00 PM</td>
                        </tr>
                        <tr>
                            <td style={tableCellStyle}>12:00 PM - 2:00 PM</td>
                            <td style={tableCellStyle}>12:00 PM - 2:00 PM</td>
                            <td style={tableCellStyle}>12:00 PM - 2:00 PM</td>
                            <td style={tableCellStyle}>12:00 PM - 2:00 PM</td>
                        </tr>
                        <tr>
                            <td style={tableCellStyle}>2:00 PM - 4:00 PM</td>
                            <td style={tableCellStyle}>2:00 PM - 4:00 PM</td>
                            <td style={tableCellStyle}>2:00 PM - 4:00 PM</td>
                            <td style={tableCellStyle}>2:00 PM - 4:00 PM</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ProjectDetails;
