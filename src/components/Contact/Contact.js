import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send</button>
          </form>
          <div className="contact-info">
            <p>Email: example@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
