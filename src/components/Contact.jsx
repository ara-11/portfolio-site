import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        I’m open to freelance work, internships, or junior dev roles. Let’s talk!
      </p>

      <div className="contact-links">
        <a href="mailto:ara.m.duco@gmail.com" className="contact-button">
          Email Me
        </a>
        <a href="https://github.com/ara-11" target="_blank" className="contact-button">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ara-mae-duco/" target="_blank" className="contact-button">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
