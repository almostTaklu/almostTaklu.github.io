import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-content">
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
          <div className="contact-info">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p>I am currently looking for a web/software developer job. I am passionate about creating efficient and scalable applications and am eager to bring my skills to a dynamic team.</p>
            <div className="contact-social-icons">
              <a href="mailto:example@example.com"><i className="fas fa-envelope"></i></a>
              <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/example" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://x.com/example" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
