import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SubmissionSuccess = () => {
    const { state } = useLocation();
    const { name, email, message } = state || {};

    return (
        <div className="container mt-5 text-light bg-dark p-5 rounded">
            <h2 className="mb-4">Thank you, {name}!</h2>
            <p>Your message has been sent successfully.</p>
            <div className="mt-4">
                <h4>Submitted Data:</h4>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Message:</strong> {message}</p>
            </div>
            <Link to="/" className="btn btn-outline-light mt-3 animated-button">Back to Home</Link>
        </div>
    );
};

export default SubmissionSuccess;