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
      year: "Agosto 2021 - 2025 (esperado)",
      institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
      title: "Ingeniería en Tecnologías Computacionales",
      description: "Estudios enfocados en desarrollo de software, estructuras de datos, y diseño de interfaces para lograr una formacion como ingerniero Full-stack pero ademas con conocimientos en diversas areas como matematicas, fisica y economia."
    },
    {
      image: utecImage,
      year: "Julio 2024 - Diciembre 2024",
      institution: "Universidad de Ingeniería y Tecnología (UTEC)",
      title: "Intercambio",
      description: "Enfoque en ciencia de datos y machine learning ademas del manejo de herramientas en la nube para el fortalecimiento de mis hbailidades y conocimientos."
    }
  ];

  return (
    <div className="education-container" ref={educationRef}>
      {/* Título de la sección */}
      <h2 className="education-title-section">Educación</h2>

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