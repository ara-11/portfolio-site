import React, { useState } from 'react';

function AboutSummary() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
<div
  className="p-3 rounded-4 w-75 mx-auto"
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#b7bdc4ff',
    maxWidth: '1000px',
    maxHeight: expanded ? '1000px' : '100px',
    overflow: 'hidden',
    transition: 'max-height 0.7s ease-in-out',
    cursor: 'pointer'
  }}
  onClick={handleToggle}
>
      <p className="mb-0">
        I'm a passionate aspiring backend developer with hands-on experience building RESTful APIs using PHP and MySQL.
        I’ve developed full-stack applications like an inventory management system, where I implemented user authentication,
        CRUD operations, and connected the backend to a React frontend. I leverage online documentation, open-source resources,
        and tools like Generative AI to learn and solve problems effectively. My focus is on writing clean, functional backend code
        and continuously improving my understanding of backend architecture, security, and database management. A recent graduate
        of a 2-year Information Technology program (Applied Computer Science), actively building real-world backend projects to
        sharpen my skills and prepare for industry roles.
      </p>
    </div>
  );
}

export default AboutSummary;
