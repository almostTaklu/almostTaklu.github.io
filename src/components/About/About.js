import React from 'react';
import './About.css';
import '../../css/styles.css'; 

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <img src="https://via.placeholder.com/300" alt="Profile" className="about-image" />
          <div className="about-text">
            <p>
              Hello, I'm Ganga Acharya,
              a passionate web developer with a solid foundation in computer science. I recently graduated from Millersville University with a Bachelor of Science in Computer Science. My journey through college has equipped me with skills in Java, Python, C/C++, SQL (Postgres), and JavaScript, along with hands-on experience using tools like Git, Gradle, and VS Code. I’ve worked on exciting projects, including a Python-based UML Editor and a dynamic, responsive blogger website using the MEAN stack. These projects have sharpened my ability to create user-friendly interfaces and integrate robust functionalities.
              <br></br>
            </p>
            <a href="path/to/your-resume.pdf" className="resume-button button" download>Download Resume</a> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
