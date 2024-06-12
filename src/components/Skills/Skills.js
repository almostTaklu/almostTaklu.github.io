import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML5', icon: 'fab fa-html5 html5' },
  { name: 'CSS3', icon: 'fab fa-css3-alt css3' },
  { name: 'JavaScript', icon: 'fab fa-js-square javascript' },
  { name: 'React', icon: 'fab fa-react react' },
  { name: 'Node.js', icon: 'fab fa-node node' },
  { name: 'Python', icon: 'fab fa-python python' },
  { name: 'C/C++', icon: 'fas fa-c c' },
  { name: 'Java', icon: 'fab fa-java java' },
  { name: 'PostgreSQL', icon: 'fas fa-database database' },
  { name: 'Angular', icon: 'fab fa-angular angular' }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-content">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <i className={`skill-icon ${skill.icon}`}></i>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
