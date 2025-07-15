import React from 'react';
import profileImage from '../assets/profile.jpg'; // replace with your image
import profileResume from '../assets/Duco-Ara-Mae-Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HeroSection() {
  return (
    <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between py-5">
      <div className="text-center text-md-start">
        <h1 className="fw-light">Hi, I'm</h1>
        <h2 className="fw-bold display-4">Ara</h2>
        <h3 className="fw-normal">
          An <span className="text-primary fw-bold">Aspiring Software Developer</span>
        </h3>

  <div className="my-3 icon-row d-flex justify-content-start">
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

<a href={profileResume} download className="btn btn-outline-primary rounded-pill px-4">
  <FontAwesomeIcon icon="file-download" className="me-2" />
  Download Resume
</a>

      </div>

      <div className="mt-4 mt-md-0">
        <div className="glow-border mx-auto">
          <img src={profileImage} alt="Your profile" className="rounded-circle" width="250" height="250" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
