import React from "react";
import "../styles/Projects.css"; // Asegúrate de crear este archivo para los estilos
import placeholderImage from "../assets/placeholder.jpg"; // Importa la imagen local
import SG from "../assets/SG.jpg";
import CR from "../assets/CR.jpeg";

const projects = [
  {
    title: "Proyecto CyberRunner: Unity",
    description: "CyberRunner es un videojuego de plataformas 2D inspirado Metroid, Castlevania y Contra, el jugador controla a Yuuko, una rebelde que luchara para sobrevirvir en un mundo cibernetico dominado por las grandes empresas y la tecnologia.",
    image: CR, // Usa la imagen local
    link: "https://example.com/proyecto1",
  },
  {
    title: "Proyecto SG: Unity",
    description: "Project SG es un videojuego de plataformas 2D inspirado en el juego de la serie de Bloodstained, el jugador controla a Rena y Diana, quienes se embarcan en una aventura en un mundo medieval de fantasia oscura para superar diferentes niveles y enemigos para salvar su legado.",
    image: SG, // Usa la imagen local
    link: "https://example.com/proyecto2",
  },
  
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Proyectos activos en desarrollo</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
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

export default Projects;