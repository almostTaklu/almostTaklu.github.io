import React, { useState } from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML5', icon: 'fab fa-html5' },
  { name: 'CSS3', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', icon: 'fab fa-js-square' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Node.js', icon: 'fab fa-node' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'C/C++', icon: 'fas fa-code' },
  { name: 'Java', icon: 'fab fa-java' },
  { name: 'PostgreSQL', icon: 'fas fa-database' },
  { name: 'Angular', icon: 'fab fa-angular' }
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="skills-title">Skills</h2>
        <div className={`skills-content ${showAll ? 'show-all' : ''}`}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <i className={`skill-icon ${skill.icon}`}></i>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
        <button className="toggle-button" onClick={toggleShowAll}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
};

export default Skills;