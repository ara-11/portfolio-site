import './Header.css'; 

function Header() {
  return (
    <section className="header">
      <h1 className="name">Ara Mae Duco</h1>
      <h2 className="title">Backend Developer</h2>
      <p className="description">
        I’m a passionate backend developer focused on building clean, fast, and secure APIs using PHP, Laravel, and PostgreSQL.
      </p>
      <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download className="resume-button">
  Download Resume
</a>

    </section>
  );
}

export default Header;
