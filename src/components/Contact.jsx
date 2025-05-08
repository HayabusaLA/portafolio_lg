import React from 'react';
import '../styles/global.css';
import '../styles/Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section contact-section">
      <h1 className="section-title">Contacto</h1>
      <p className="contact-description">
        ¿Te interesa colaborar conmigo? ¡No dudes en escribirme!
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>luis604@outlook.com</span>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/HayabusaLA" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/luis-adrián-abarca-gómez-337222287" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;