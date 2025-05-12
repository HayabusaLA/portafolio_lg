import React, { useEffect, useRef, useState } from 'react';
import '../styles/global.css';
import '../styles/Experience.css';

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const experienceRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, 3);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = cardRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...prev, index]);
          } else {
            setVisibleCards(prev => prev.filter(i => i !== index));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const currentRef = experienceRef.current;
    if (currentRef) {
      cardRefs.current.forEach(card => {
        if (card) observer.observe(card);
      });
    }

    return () => {
      if (currentRef) {
        cardRefs.current.forEach(card => {
          if (card) observer.unobserve(card);
        });
      }
    };
  }, []);

  return (
    <section className="section" ref={experienceRef}>
      <h1 className="section-title">Experiencia Profesional</h1>
      
      <div className="experience-section">
        {[
          {
            date: "Febrero 2023 - Julio 2023",
            title: "Crack the Code - Proyecto Titor",
            position: "Desarrollador de Videojuegos en Unity",
            description: "Fungi como el diseñador, desarrollador y programador principal en el proyecto Titor, un videojuego educativo para la enseñanza de programación a niños interesados en el tema. Utilizando Unity y C#, implementé mecánicas de juego, diseño de niveles y optimización del rendimiento.",
            backgroundImage: require('../assets/titor.png'),
            link: "https://drive.google.com/drive/folders/1uVoFOYE9LF64rnEOdm9Ud0Npc86N9qDF?usp=sharing"
          },
          {
            date: "Febrero 2024 - Julio 2024",
            title: "Freelance Developer - DocCare Tracker",
            position: "Desarrollador Móvil",
            description: "Apoye en el desarrollo de una aplicación móvil para la gestión de citas médicas y seguimiento de pacientes. Utilizando React Native, contribuí en la implementación de funcionalidades clave y optimización del rendimiento de la aplicación.",
            backgroundImage: require('../assets/doccare.png'),
            link: "https://example.com/doccare-tracker"
          },
          {
            date: "Febrero 2023 - Julio 2024",
            title: "Aprendizaje para todos - Enseñanza a nivel medio superior",
            position: "Tutor particular de nivel escolar intermedio",
            description: "Impartí clases de matemáticas y física a estudiantes de secundaria y preparatoria, ayudando a mejorar su comprensión y rendimiento académico.",
            backgroundImage: require('../assets/apt.png'),
            link: "https://drive.google.com/drive/folders/1oEo_oOBE-U5TaosEufqLdP96gQzwOvDt?usp=sharing"
          }
        ].map((exp, index) => (
          <div 
            key={index}
            ref={el => cardRefs.current[index] = el}
            className={`experience-card ${visibleCards.includes(index) ? 'visible' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${exp.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="date">{exp.date}</div>
            <div className="content">
              <h3>{exp.title}</h3>
              <p className="position">{exp.position}</p>
              <p className="description">{exp.description}</p>
              <a 
                href={exp.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="experience-link"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;