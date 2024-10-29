import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src="project1.jpg" alt="Project 1" />
          <h3>Project One</h3>
          <p>Interactive website with stunning UI/UX.</p>
        </div>
        <div className="project-card">
          <img src="project2.jpg" alt="Project 2" />
          <h3>Project Two</h3>
          <p>Single-page application with responsive design.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
