import React from 'react';

const About = () => (
    <div className="container mt-5 text-light bg-dark p-5 rounded">
        <h2 className="mb-4">About Me</h2>
        <p className="lead">
            I am a 3rd Year Computer Science student at Pamantasan ng Cabuyao. My hobbies include Editing,
            Photography, Videography, Graphic Designing, and playing drums. I aim to explore and develop my
            skills further in both my hobbies and my academic field.
        </p>
        <button className="btn btn-outline-light mt-3 animated-button" onClick={() => window.location.href = '/skills'}>
            Check Out My Skills
        </button>
    </div>
);

export default About;