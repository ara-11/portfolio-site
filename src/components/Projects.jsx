import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Simple Inventory System',
      image: 'project1.png', // Put this image in public/
      tech: 'PHP, PostgreSQL, React',
      link: 'https://github.com/ara-11/inventory-backend-api'
    },

    // Add more projects here
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={`/${project.image}`} alt={project.title} className="project-image" />
            <h3 className="project-name">{project.title}</h3>
            <p className="project-tech">{project.tech}</p>
            <a href={project.link} target="_blank" className="project-button">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
