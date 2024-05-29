import React from 'react';
import '../styles/styles.css';

const Skills = () => (
  <div className="skills-section container" id="skills">
    <h2>Skills</h2>
    <div className="skill-bar" style={{ '--skill-width': '80%' }}>
      <div className="skill-level">HTML/CSS</div>
    </div>
    <div className="skill-bar" style={{ '--skill-width': '70%' }}>
      <div className="skill-level">Java</div>
    </div>
    <div className="skill-bar" style={{ '--skill-width': '75%' }}>
      <div className="skill-level">Python</div>
    </div>
    <div className="skill-bar" style={{ '--skill-width': '65%' }}>
      <div className="skill-level">C++/C</div>
    </div>
    <div className="skill-bar" style={{ '--skill-width': '60%' }}>
      <div className="skill-level">Postgres SQL</div>
    </div>
  </div>
);

export default Skills;
