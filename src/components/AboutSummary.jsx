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
Aspiring Junior Developer with an Associate Degree in Information Technology 
(Applied Computer Science) and hands-on experience in backend and full-stack development. 
Completed a 350-hour internship focused on PHP backend development, building RESTful APIs, 
writing clean documentation, and applying unit testing practices. 
Currently working on full-stack projects using React, Spring Boot, and PostgreSQL to strengthen 
practical skills. Curious, adaptable, and committed to continuous learning — with a mindset focused 
not only on what I can build, but who I can become in the process.
      </p>
    </div>
  );
}

export default AboutSummary;
