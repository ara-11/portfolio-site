import React, { useState } from 'react';
import projectImg1 from '../assets/inventory-project.png'; // 
import projectImg2 from '../assets/netflix-clone.png';      // 

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Simple Inventory System',
      description: 'A CRUD app using PHP + React. Includes authentication and live deployment using Github Pages for frontend and Render for the Backend.',
        description2: (
      <>
        A CRUD app using PHP + React. Includes authentication and live deployment. You can visit it here:&nbsp;
        <a 
          href="https://ara-11.github.io/inventory-ui/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          https://ara-11.github.io/inventory-ui/
        </a>
        . And enter these credentials (<b>Username:</b> admin, <b>Password:</b> admin123)
      </>
    ),
    image: projectImg1,
    },
{
  title: 'Netflix Clone',
  description: 'A beginner-friendly Netflix-style React app with Firebase login and movie data from TMDB API.',
  description2: 'A beginner-friendly Netflix-style React app with Firebase login and movie data from TMDB API. Still under improvement. Live Demo: https://netflix-clone-d95b6.web.app/',
  image: projectImg2,
},

  ];

  return (
    <section className="bg-black text-light py-5" id="projects">
      <div className="container">
        <h2 className="mb-4 fw-bold text-center">Projects</h2>

        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card bg-dark text-light h-100 shadow">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <button
                    className="btn btn-outline-primary btn-sm mt-auto"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="modal-dialog modal-lg modal-dialog-centered"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking the modal itself
            >
              <div className="modal-content bg-dark text-light rounded-4 overflow-hidden">
                <div className="modal-header border-0">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setSelectedProject(null)}
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="img-fluid rounded-3"
                  />
                  <p className="mt-3">{selectedProject.description2}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
