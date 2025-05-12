import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [visibleElements, setVisibleElements] = useState(0);
  const aboutRef = useRef(null);
  const animationTimeout = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleElements(0);
          if (animationTimeout.current) {
            clearTimeout(animationTimeout.current);
          }
          const totalElements = 3;
          let count = 0;
          const animate = () => {
            count++;
            setVisibleElements(count);
            if (count < totalElements) {
              animationTimeout.current = setTimeout(animate, 200);
            }
          };
          animate();
        } else {
          if (animationTimeout.current) {
            clearTimeout(animationTimeout.current);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (animationTimeout.current) {
        clearTimeout(animationTimeout.current);
      }
    };
  }, []);

  
  return (
    <section
      id="about"
      ref={aboutRef}
      
    >
      
      <h1 className={`section-title fade-element ${visibleElements >= 1 ? 'visible' : ''}`}>
        Sobre mí
      </h1>
      
      <div className="about-section">
        <div className={`about-description fade-element ${visibleElements >= 2 ? 'visible' : ''}`}>
          <p>
            ¡Hola! Soy Luis Gomez<br />
            Desarrollador Full-stack, Diseñador de Videojuegos y Analista de datos.
            Apasionado de la tecnología, he trabajado
            en proyectos académicos y personales,
            abarcando desde simuladores hasta bases
            de datos y programas de cálculo. He
            liderado la creación de un sistema integral
            que combina videojuego, plataforma web y
            base de datos en SQL Server. Soy proactivo
            en mis tareas y colaboraciones, asumiendo
            la iniciativa en proyectos y liderando
            equipos con eficiencia bajo presión. Mi
            enfoque en la resolución de problemas es
            objetivo y eficaz. Mi historial refleja
            excelencia, creatividad y compromiso.
            Estoy seguro de que mis habilidades
            agregarán un valor significativo a cualquier
            proyecto o equipo.
          </p>
        </div>

        <div className={`about-info fade-element ${visibleElements >= 3 ? 'visible' : ''}`}>
          <h2 className="info-title">Información basica</h2>
          <div className="info-item"><strong>EDAD:</strong> 22</div>
          <div className="info-item"><strong>EMAIL:</strong> luis604@outlook.com</div>
          
          <div className="info-item"><strong>DIRECCIÓN:</strong> Estado de México, Cuatitlan Izcalli, 54769.</div>
          <div className="info-item"><strong>IDIOMAS:</strong>Español (nativo), Ingles (Intermedio)</div>
        </div>
      </div>
    </section>
  );
};

export default About;