import React from 'react';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project-cards">
      <div className="project-card">
        <h3>Project 1</h3>
        <p>A React-based task manager app.</p>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>

      <div className="project-card">
        <h3>Project 2</h3>
        <p>A Node.js API with authentication and MongoDB.</p>
        <a href="https://github.com/kamini177/portfolio.git" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>

      <div className="project-card">
        <h3>Project 3</h3>
        <p>A official website.</p>
        <a href="https://opiskelija24.amiskoodari.fi/palkkatuki/" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>

    </div>
  </section>
);

export default Projects;
