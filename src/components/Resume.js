import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/styles.css';

const Resume = () => {
  const printResume = () => {
    window.print();
  };

  return (
    <div className="resume-section">
      <Container>
        <Button className="print-button" onClick={printResume}>Print</Button>
        <h2 className="resume-title">Ganga Acharya's Resume</h2>
        <Row>
          <Col md={5}>
            <div className="resume-section-title">Education</div>
            <div className="resume-item">
              <h4>Millersville University</h4>
              <p>Bachelor of Science in Computer Science</p>
              <p>Jan. 2022 – May 2024</p>
            </div>
            <div className="resume-item">
              <h4>Salt Lake Community College</h4>
              <p>Associate’s in General Education</p>
              <p>Dec. 2020</p>
            </div>

            <div className="resume-section-title">Skills</div>
            <div className="resume-item">
              <p><strong>Languages:</strong> Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS</p>
              <p><strong>Frameworks:</strong> Node.js, Bootstrap, WordPress, Express.js, Angular</p>
              <p><strong>Tools:</strong> Git, Gradle, VS Code, Visual Studio, IntelliJ, Eclipse, Sublime, AWS Lightsail, CI/CD, JWT</p>
              <p><strong>Soft Skills:</strong> Communication, leadership, multitasking, analytical problem solving, team collaboration</p>
            </div>
          </Col>

          <Col md={7}>
            <div className="resume-section-title">Summary</div>
            <div className="resume-item">
              <p>Experienced Production Supervisor with over six years of expertise in quality investigations, corrective action implementation, and detailed documentation. Proficient in Java, Python, C/C++, SQL (Postgres), and JavaScript. Well-versed in development tools including Git, Gradle, and VS Code.</p>
            </div>

            <div className="resume-section-title">Experience</div>
            <div className="resume-item">
              <h4>Production Supervisor</h4>
              <p>Biofire Diagnostics, Salt Lake City, UT</p>
              <p>Jan 2015 – May 2021</p>
              <ul>
                <li>Led production team, ensuring efficiency and compliance with company policies</li>
                <li>Managed production schedules, optimized operations, and collaborated with cross-functional teams</li>
                <li>Conducted quality investigations, implemented corrective actions, and maintained documentation</li>
                <li>Served as technical expert, resolving issues and contributing to process improvement initiatives</li>
              </ul>
            </div>

            <div className="resume-section-title">Projects</div>
            <div className="resume-item">
              <h4>UML Editor</h4>
              <p>Python, Tkinter, Pygame, pytest</p>
              <p>Jan 2024 – May 2024</p>
              <ul>
                <li>Developed a Python-based UML Editor with MVC for efficient CLI and GUI diagram management</li>
                <li>Built a custom parser and integrated CI/CD to streamline development and operations</li>
                <li>Ensured application reliability and quality through robust exception handling and 100% pytest coverage</li>
                <li>Crafted a user-friendly GUI, optimized for accessibility and refined via user feedback</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Responsive Blogger Website</h4>
              <p>Javascript, MongoDB, Bootstrap, Node.js</p>
              <p>Jan 2024 – May 2024</p>
              <ul>
                <li>Developing a dynamic blogger page using Amazon Lightsail with MEAN stack</li>
                <li>Employing MVC architecture to structure the application, facilitating maintainability and scalability</li>
                <li>Integrating RESTful APIs to enhance the functionality and user interaction of the blogging platform</li>
                <li>Utilizing HTML/CSS and Bootstrap for responsive and uniform web interface across multiple devices</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Search Engine</h4>
              <p>Java, PostgreSQL, Gradle, Tomcat</p>
              <p>Jan 2023 – May 2023</p>
              <ul>
                <li>Created a Java search engine using PostgreSQL, integrating Potter Stemmer and stopword filtering</li>
                <li>Implemented advanced search algorithms, PageRank, and indexing techniques for document retrieval</li>
                <li>Built inverted indices for quick, precise searches across vast datasets</li>
                <li>Analyzed link graphs for document importance, enhancing the search engine’s result prioritization</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
