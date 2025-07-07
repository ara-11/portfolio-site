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

      <div className={`description-container ${expanded ? 'expanded' : ''}`}>
        <p className="description">
          I'm a passionate backend developer with hands-on experience building RESTful APIs using PHP and MySQL. I’ve developed full-stack applications like an inventory management system, where I implemented user authentication, CRUD operations, and connected the backend to a React frontend.
          {'\n\n'}
          I leverage online documentation, open-source resources, and tools like ChatGPT to learn and solve problems effectively. My focus is on writing clean, functional backend code and continuously improving my understanding of backend architecture, security, and database management.
          {'\n\n'}
          Currently pursuing an Associate Degree in Applied Computer Science and building real-world projects to grow my skills.
        </p>

        <button className="toggle-button" onClick={toggleDescription}>
          {expanded ? 'Show less ▲' : 'Read more ▼'}
        </button>
      </div>

      <a href="/portfolio-site/resume.pdf" download className="resume-button">
        Download Resume
      </a>
    </section>
  );
}

export default Header;
