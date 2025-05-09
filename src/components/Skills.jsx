import React, { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';

const skills = [
  { name: 'HTML', percent: 90, color: '#FF6B6B' },
  { name: 'CSS', percent: 85, color: '#4ECDC4' },
  { name: 'JavaScript', percent: 60, color: '#FFD166' },
  { name: 'C#', percent: 80, color: '#06D6A0' },
  { name: 'Bootstrap', percent: 60, color: '#118AB2' },
  { name: 'Python', percent: 80, color: '#073B4C' },
  { name: 'Microsoft Office', percent: 80, color: '#FF6B6B' },
  { name: 'PowerBI', percent: 75, color: '#073B4C' },
  { name: 'IOT', percent: 90, color: '#073B4C' },
  { name: 'Machine Learning', percent: 60, color: '#073B4C' },
  { name: 'Unity', percent: 90, color: '#073B4C' },
];

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillsRef = useRef(null);
  const skillRefs = useRef([]);

  // Inicializa los refs para cada skill
  useEffect(() => {
    skillRefs.current = skillRefs.current.slice(0, skills.length);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = skillRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleSkills(prev => 
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            setVisibleSkills(prev => 
              prev.includes(index) ? prev.filter(i => i !== index) : prev
            );
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
      skillRefs.current.forEach(skill => {
        if (skill) observer.observe(skill);
      });
    }

    return () => {
      if (currentRef) {
        skillRefs.current.forEach(skill => {
          if (skill) observer.unobserve(skill);
        });
      }
    };
  }, []);

  return (
    <section className="progress-skills" ref={skillsRef}>
      <h2 className="skills-title">Habilidades Profesionales</h2>
      {skills.map((skill, index) => (
        <div 
          className="skill-row" 
          key={index}
          ref={el => skillRefs.current[index] = el}
        >
          <div className="skill-name">{skill.name}</div>
          <div className="skill-bar-container">
            <div
              className={`skill-bar ${visibleSkills.includes(index) ? 'animate' : ''}`}
              style={{ 
                '--target-width': `${skill.percent}%`,
                '--skill-color': skill.color,
                '--skill-hover': `${skill.color}CC` // Añade transparencia al hover
              }}
            ></div>
          </div>
          <div className="skill-percent">
            <span className="percent-value">
              {visibleSkills.includes(index) ? skill.percent : 0}%
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;