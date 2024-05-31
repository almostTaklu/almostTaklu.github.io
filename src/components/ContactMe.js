import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css';

const Contact = () => {
  return (
    <div className="contact-me-section" id="contact">
      <Container>
        <h2 className="contact-me-title">Contact Me</h2>
        <Row>
          <Col sm={12} md={6} className="form-container">
            <form action="contact.php" method="post">
              <h4>Send me a Message</h4>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </Col>
          <Col sm={12} md={5} className="email-info">
            <h4>Get in Touch</h4>
            <p>I am actively seeking opportunities as a software or web developer. If you have any openings or just want to connect, please reach out to me at <a href="mailto:ach.ganga@outlook.com">ach.ganga@outlook.com</a>.</p>
          </Col>
        </Row>
        <Row className="d-block d-md-none">
          <div className="line"></div>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
