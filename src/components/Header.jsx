import { useState } from 'react';
import './Header.css';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="header">
      <h1 className="name">Ara Mae Duco</h1>
      <h2 className="title">Junior Backend Developer | PHP, MySQL, REST APIs</h2>

      {/* Description Block */}
      <div className={`description-container ${expanded ? 'expanded' : ''}`}>
        <div className="description">
          <p>
            I'm a passionate backend developer with hands-on experience building RESTful APIs using PHP and MySQL.
            I’ve developed full-stack applications like an inventory management system, where I implemented user authentication,
            CRUD operations, and connected the backend to a React frontend.
          </p>

          <p>
            I leverage online documentation, open-source resources, and tools like ChatGPT to learn and solve problems effectively.
            My focus is on writing clean, functional backend code and continuously improving my understanding of backend architecture,
            security, and database management.
          </p>

          <p>
          A recent graduate of a 2-year Information Technology program (Applied Computer Science), 
          actively building real-world backend projects to sharpen my skills and prepare for industry roles.
          </p>
        </div>
      </div>

      {/* Toggle Button (OUTSIDE the overflow container) */}
      <button className="toggle-button" onClick={toggleDescription}>
        {expanded ? 'Show less ▲' : 'Read more ▼'}
      </button>

      {/* Resume Button */}
      <a href="/portfolio-site/resume.pdf" download className="resume-button">
        Download Resume
      </a>
    </section>
  );
}

export default Header;
