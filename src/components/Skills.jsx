import React from 'react';
import '../styles/Skills.css';

const skills = [
  { name: 'HTML', color: '#FF6B6B' },
  { name: 'CSS', color: '#4ECDC4' },
  { name: 'JavaScript', color: '#FFD166' },
  { name: 'C#', color: '#06D6A0' },
  { name: 'Python', color: '#073B4C' },
  { name: 'Microsoft Office', color: '#FF6B6B' },
  { name: 'PowerBI', color: '#073B4C' },
  { name: 'IOT', color: '#073B4C' },
  { name: 'Machine Learning', color: '#073B4C' },
  { name: 'Unity', color: '#073B4C' },
];

const Skills = () => {
  return (
    <section className="skills-container">
      <h2 className="skills-title">Habilidades Profesionales</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            className="skill-box" 
            key={index}
            style={{
              '--skill-color': skill.color,
              '--skill-hover': `${skill.color}CC`
            }}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;