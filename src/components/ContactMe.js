// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("xayrgknk");

  return (
    <div className="contact-me-section" id="contact">
      <Container>
        <h2 className="contact-me-title">Contact Me</h2>
        <Row>
          <Col sm={12} md={6} className="form-container">
            <form onSubmit={handleSubmit}>
              <h4>Send me a Message</h4>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button type="submit" disabled={state.submitting}>Send Message</button>
              {state.succeeded && <p>Message Sent!</p>}
            </form>
          </Col>
          <Col sm={12} md={5} className="email-info">
            <h4>Get in Touch</h4>
            <p>I am actively seeking opportunities as a software or web developer. If you have any openings or just want to connect, please reach out to me at <a href="mailto:ach.ganga@outlook.com">ach.ganga@outlook.com</a>.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
