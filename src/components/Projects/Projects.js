import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project 1',
    description: 'This is a description for project 1.',
    languages: ['HTML5', 'CSS3', 'JavaScript'],
    github: '#',
    link: '#',
    type: 'Individual Project'
  },
  {
    title: 'Project 2',
    description: 'This is a description for project 2.',
    languages: ['React', 'Node.js'],
    github: '#',
    link: '#',
    type: 'Team Project' 
  },
  {
    title: 'Project 3',
    description: 'This is a description for project 3.',
    languages: ['React', 'Node.js'],
    github: '#',
    link: '#',
    type: 'Individual Project'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-content">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-type">{project.type}</p> {}
              </div>
              <div className="project-body">
                <p className="project-description">{project.description}</p>
                <div className="project-languages">
                  {project.languages.map((lang, langIndex) => (
                    <span key={langIndex} className="language-button">{lang}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
