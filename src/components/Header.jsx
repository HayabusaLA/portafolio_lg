import React, { useEffect, useRef, useState } from 'react';
import '../styles/Header.css';
import cvPDF from '../assets/CV_ProfesionalCorregido.pdf'; // Asegúrate de tener tu archivo CV.pdf en assets
const Header = ({ toggleDesign }) => {
  const [scrolled, setScrolled] = useState(false);
  const [inView, setInView] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);
  const [isFrutigerAero, setIsFrutigerAero] = useState(false); // Estado para el tema
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentRef = headerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const openCVModal = () => setShowCVModal(true);
  const closeCVModal = () => setShowCVModal(false);

  
  return (
    <header
      className={`header-section ${inView ? 'in-view' : ''} ${scrolled ? 'scrolled' : ''} ${
        isFrutigerAero ? 'frutiger-aero-theme' : ''
      }`}
      ref={headerRef}
    >
      <div className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><a href="#about">Sobre mí</a></li>
          <li className="nav-item"><a href="#experience">Experiencia</a></li>
          <li className="nav-item"><a href="#education">Educación</a></li>
          <li className="nav-item"><a href="#skills">Habilidades</a></li>
          <li className="nav-item"><a href="#portfolio">Certificados</a></li>
          <li className="nav-item"><a href="#contact">Contacto</a></li>
          <li className="nav-item"><a href="#projects">Proyectos en desarrollo</a></li>
        </ul>
      </div>

      <div className="header-background">
        <div className="text-overlay">
          <h1 className="header-title">Luis Adrián</h1>
          <p className="header-description">
            Estudiante de Ingeniería en Tecnologías Computacionales en el ITESM Campus Estado de México. 
          </p>
          <div className="cv-button-container">
            <button className="cv-button" onClick={openCVModal}>
              Mirar Curriculum
            </button>
          </div>
        </div>
      </div>

      {/* Modal del CV */}
      {showCVModal && (
        <div className="modal-overlay" onClick={closeCVModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeCVModal}>&times;</button>
            <h3>Mi Curriculum Vitae</h3>
            <iframe
              src={cvPDF}
              className="modal-pdf"
              title="Curriculum Vitae"
              frameBorder="0"
            ></iframe>
            <a 
              href={cvPDF} 
              download 
              className="download-button"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Descargar PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;