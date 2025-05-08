import React, { useEffect, useRef, useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [inView, setInView] = useState(false);
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

  return (
    <header 
      className={`header-section ${inView ? 'in-view' : ''} ${scrolled ? 'scrolled' : ''}`} 
      ref={headerRef}
    >
      <div className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><a href="#about">Sobre mi</a></li>
          <li className="nav-item"><a href="#experience">Experiencia</a></li>
          <li className="nav-item"><a href="#education">Educación</a></li>
          <li className="nav-item"><a href="#skills">Habilidades</a></li>
          <li className="nav-item"><a href="#portfolio">Certificados</a></li>
          <li className="nav-item"><a href="#contact">Contacto</a></li>
        </ul>
      </div>
      
      <div className="header-background">
        <div className="text-overlay">
          <h1 className="header-title">Luis Adrián</h1>
          <p className="header-description">
            WEB DEVELOPER, VIDEOGAMES DESIGNER, DATA ANALIST
          </p>
          <div className="contact-me">
            <h2 className="contact-title">Contáctame</h2>
            <hr className="contact-divider" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;