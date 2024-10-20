import React from 'react';

const Skills = () => (
    <div className="container mt-5 text-light bg-dark p-5 rounded">
        <h2 className="mb-4">My Skills</h2>
        <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark text-light">JavaScript</li>
            <li className="list-group-item bg-dark text-light">React</li>
            <li className="list-group-item bg-dark text-light">CSS</li>
            <li className="list-group-item bg-dark text-light">Editing</li>
            <li className="list-group-item bg-dark text-light">Photography</li>
            <li className="list-group-item bg-dark text-light">Videography</li>
            <li className="list-group-item bg-dark text-light">Graphic Design</li>
        </ul>
        <button className="btn btn-outline-light mt-3 animated-button" onClick={() => window.location.href = '/contact'}>
            Contact Me
        </button>
    </div>
);

export default Skills;