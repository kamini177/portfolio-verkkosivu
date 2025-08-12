import React from 'react';

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <div className="skills-list">
      <div className="skill">
        <h3>Frontend</h3>
        <ul>
          HTML, CSS, JavaScript, 
          React, Responsive Design
        </ul>
      </div>
      <div className="skill">
        <h3>Backend</h3>
        <ul>
          Node.js, Express
          Python, PHP, Laravel
        </ul>
      </div>
      <div className="skill">
        <h3>Databases</h3>
        <ul>
          MongoDB, MySQL
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
