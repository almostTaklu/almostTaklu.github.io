import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css';

const AboutMe = () => (
  <div id="about" className="about-me-jumbotron">
    <Container>
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <img src="https://via.placeholder.com/150" alt="Ganga Acharya" className="about-me-img"/>
        </Col>
        <Col md={8} className="about-me-content">
          <h2 className="about-me-title">About Me</h2>
          <p>
            I am an aspiring software developer with a solid foundation in computer science and a strong drive to excel in the tech industry. My journey into the world of technology began with a fascination for problem-solving and programming, which led me to pursue formal education in the field. I hold a Bachelor of Science in Computer Science, where I honed my skills in various programming languages such as Java, Python, C/C++, SQL (Postgres), and JavaScript. Prior to this, I completed an Associate’s in General Education, which provided me with a well-rounded academic background.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutMe;
