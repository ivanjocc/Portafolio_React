// src/components/Contact.jsx
import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-content">
        <h2 className="contact-heading">Contact Me</h2>
        <p className="contact-text">
          If you'd like to get in touch or collaborate on a project, feel free to reach out to me via email or social media.
        </p>
        <div className="contact-links">
          <a href="mailto:ivanjose_04@hotmail.com" className="contact-link">Email</a>
          <a href="https://www.linkedin.com/in/ivan-miranda-r/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a href="https://github.com/ivanjocc" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
