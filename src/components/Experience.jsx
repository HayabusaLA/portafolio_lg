import React, { useEffect, useRef, useState } from 'react';
import '../styles/global.css';
import '../styles/Experience.css';

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const experienceRef = useRef(null);
  const cardRefs = useRef([]);

  // Inicializa los refs para cada tarjeta
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
        rootMargin: "0px 0px -100px 0px" // Activa la animación un poco antes
      }
    );

    const currentRef = experienceRef.current;
    if (currentRef) {
      // Observar cada tarjeta individualmente
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
            title: "Proyecto Titor",
            position: "Desarrollador de Videojuegos en Unity",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at felis id turpis tincidunt facilisis."
          },
          {
            date: "Febrero 2024 - Julio 2024",
            title: "DocCare Tracker",
            position: "Desarrollador Móvil",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at felis id turpis tincidunt facilisis."
          },
          {
            date: "Febrero 2023 - Julio 2024",
            title: "Aprendizaje para todos",
            position: "Tutor particular de nivel escolar intermedio",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at felis id turpis tincidunt facilisis."
          }
        ].map((exp, index) => (
          <div 
            key={index}
            ref={el => cardRefs.current[index] = el}
            className={`experience-card ${visibleCards.includes(index) ? 'visible' : ''}`}
          >
            <div className="date">{exp.date}</div>
            <div className="content">
              <h3>{exp.title}</h3>
              <p>{exp.position}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;