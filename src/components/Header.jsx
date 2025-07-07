import './Header.css'; 

function Header() {
  return (
    <section className="header">
      <h1 className="name">Ara Mae Duco</h1>
      <h2 className="title">Backend Developer</h2>
      <p className="description">
        Junior Backend Developer | PHP, MySQL, REST APIs

I'm a passionate backend developer with hands-on experience building RESTful APIs using PHP and MySQL. I’ve developed full-stack applications like an inventory management system, where I implemented user authentication, CRUD operations, and connected the backend to a React frontend.

I leverage online documentation, open-source resources, and tools like ChatGPT to learn and solve problems effectively. My focus is on writing clean, functional backend code and continuously improving my understanding of backend architecture, security, and database management.

Currently pursuing an Associate Degree in Applied Computer Science and building real-world projects to grow my skills.
      </p>
<a href="/portfolio-site/resume.pdf" download className="resume-button">
  Download Resume
</a>


    </section>
  );
}

export default Header;
