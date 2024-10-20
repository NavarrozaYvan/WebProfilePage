import React from 'react';

const Home = () => (
    <div className="container mt-5 text-center text-light bg-dark p-5 rounded">
        <h1 className="display-4 mb-4">Welcome to My Profile!</h1>
        <p className="lead">
            Hello! I am Yvan jade G. Navarroza and welcome to my profile page!
        </p>
        <button className="btn btn-outline-light mt-3 animated-button" onClick={() => window.location.href = '/about'}>
            Click here to learn More About Me
        </button>
    </div>
);

export default Home;
