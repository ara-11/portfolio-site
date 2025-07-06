import './Skills.css';

function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'MySQL',
    'Laravel',
    'React',
    'Git',
    'GitHub',
    'Insomnia',
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
