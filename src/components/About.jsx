import React from 'react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss, SiRedux, 
  SiPhp, SiLaravel, SiMysql, SiVuedotjs, SiTypescript, SiSpringboot, SiPostgresql 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa'; // from FontAwesome
import AboutSummary from './AboutSummary';

const techStack = [
  { icon: <SiHtml5 color="#E34F26" size={40} />, label: 'HTML' },
  { icon: <SiCss3 color="#1572B6" size={40} />, label: 'CSS' },
  { icon: <SiJavascript color="#F7DF1E" size={40} />, label: 'JavaScript' },
  { icon: <SiReact color="#61DAFB" size={40} />, label: 'ReactJS' },
  { icon: <SiBootstrap color="#7952B3" size={40} />, label: 'Bootstrap' },
  { icon: <SiPhp color="#777BB4" size={40} />, label: 'PHP' },
  { icon: <SiMysql color="#00758F" size={40} />, label: 'MySQL' },
  { icon: <SiPostgresql color="#336791" size={40} />, label: 'PostgreSQL' },
  { icon: <SiSpringboot color="#6DB33F" size={40} />, label: 'Spring Boot' },
  { icon: <FaJava color="#007396" size={40} />, label: 'Java' }
];

function About() {
  return (
    <section className="bg-dark text-light py-5" id="about">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">About Me</h2>
        <AboutSummary />
        {/* Tech Stack Grid */}
        <div className="row mt-5 justify-content-center">
          <h3 className="text-center mb-4 fw-bold">Technology Stack</h3>
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-4">
              {techStack.map((tech, idx) => (
                <div key={idx} className="d-flex flex-column align-items-center mx-3 my-2" style={{ minWidth: 90 }}>
                  {tech.icon}
                  <span className="mt-2" style={{ fontWeight: 500 }}>{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;