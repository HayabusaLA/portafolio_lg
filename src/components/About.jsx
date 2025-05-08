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
          // Reiniciar el estado de animación
          setVisibleElements(0);
          
          // Limpiar timeout anterior si existe
          if (animationTimeout.current) {
            clearTimeout(animationTimeout.current);
          }
          
          // Contamos los elementos hijos que queremos animar
          const totalElements = 3; // Título + 2 columnas
          let count = 0;
          
          const animate = () => {
            count++;
            setVisibleElements(count);
            if (count < totalElements) {
              animationTimeout.current = setTimeout(animate, 200); // Retardo entre elementos
            }
          };
          
          animate();
        } else {
          // Cuando sale de la vista, limpiamos los timeouts
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
    <section id="about" ref={aboutRef}>
      <h1 className={`section-title fade-element ${visibleElements >= 1 ? 'visible' : ''}`}>About</h1>
      
      <div className="about-section">
        <div className={`about-description fade-element ${visibleElements >= 2 ? 'visible' : ''}`}>
          <p>
            ¡Hola! Soy Luis Gomez<br />
            Abarca Gómez. Desarrollador Full-stack, Diseñador de Videojuegos y Analista de datos.
          </p>
          <p>
            Creative CV is a HTML resume template for professionals. Built with Bootstrap 4, 
            Now UI Kit and FontAwesome, this modern and responsive design template is perfect 
            to showcase your portfolio, skills and experience. <a href="#learn-more">Learn More</a>
          </p>
        </div>

        <div className={`about-info fade-element ${visibleElements >= 3 ? 'visible' : ''}`}>
          <h2 className="info-title">Informacion basica</h2>
          <div className="info-item"><strong>EDAD:</strong> 22</div>
          <div className="info-item"><strong>EMAIL:</strong> luis604@outlook.com</div>
          <div className="info-item"><strong>TELEFONO:</strong> +52 5576334173</div>
          <div className="info-item"><strong>DIRECCION:</strong> Ciudad de México, México</div>
          <div className="info-item"><strong>IDIOMAS:</strong>Español (nativo), Ingles (Intermedio)</div>
        </div>
      </div>
    </section>
  );
};

export default About;