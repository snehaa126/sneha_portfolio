// Skills.js
import React from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare } from '@fortawesome/free-brands-svg-icons'; // Correct import for JS

function Skills() {
    return (
        <div className="skills">
            <h2>My Skills</h2>
            <div className="skill-icons">
                <div className="skill">
                    <FontAwesomeIcon icon={faHtml5} />
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faCss3Alt} />
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faJsSquare} />
                    <p>JavaScript</p>
                </div>
                {/* Other skills... */}
            </div>
        </div>
    );
}

export default Skills;
