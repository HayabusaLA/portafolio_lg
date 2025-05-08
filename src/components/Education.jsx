import React, { useEffect, useRef, useState } from 'react';
import '../styles/Education.css';
import itesmImage from '../assets/itesm.png';
import utecImage from '../assets/utec.png';

function Education() {
  const [visibleCards, setVisibleCards] = useState([]);
  const educationRef = useRef(null);
  const cardRefs = useRef([]);

  // Inicializa los refs para cada tarjeta
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, 2);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = cardRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleCards(prev => 
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            setVisibleCards(prev => 
              prev.includes(index) ? prev.filter(i => i !== index) : prev
            );
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const currentRef = educationRef.current;
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

  const educationData = [
    {
      image: itesmImage,
      year: "2021 - 2024",
      institution: "ITESM",
      title: "Ingeniería en Tecnologías Computacionales",
      description: "Estudios enfocados en desarrollo de software, estructuras de datos, y diseño de interfaces."
    },
    {
      image: utecImage,
      year: "2024 - 2024",
      institution: "UTEC",
      title: "Intercambio tradicional",
      description: "Enfoque en ciencias exactas y desarrollo de habilidades analíticas."
    }
  ];

  return (
    <div className="education-container" ref={educationRef}>
      {/* Título de la sección */}
      <h2 className="education-title-section fade-element">Educación</h2>

      {educationData.map((edu, index) => (
        <div 
          key={index}
          ref={el => cardRefs.current[index] = el}
          className={`education-card ${visibleCards.includes(index) ? 'visible' : ''}`}
        >
          <div
            className="education-card-left"
            style={{ backgroundImage: `url(${edu.image})` }}
          >
            <div className="overlay">
              <p className="education-year">{edu.year}</p>
              <p className="education-institution"><strong>{edu.institution}</strong></p>
            </div>
          </div>
          <div className="education-card-right">
            <p className="education-title">{edu.title}</p>
            <p className="education-description">
              {edu.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;