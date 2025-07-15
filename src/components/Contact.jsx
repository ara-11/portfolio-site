import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Contact() {
  return (
    <section className="bg-dark text-light py-5" id="contact">
      <div className="container">
        <h2 className="mb-4 fw-bold text-center">Contact Me</h2>
        <p className="text-center text-secondary mb-4">You can reach me through any of the platforms below.</p>

  <div className="my-3 icon-row">
    <a href="https://github.com/ara-11" className="me-3 text-light">
      <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
    </a>
    <a href="https://www.linkedin.com/in/ara-mae-duco/" className="me-3 text-light">
      <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="lg" />
    </a>
    <a href="mailto:ara.m.duco@gmail.com" className="me-3 text-light">
      <FontAwesomeIcon icon="envelope" size="lg" />
    </a>
  </div>

      </div>
    </section>
  );
}

export default Contact;
