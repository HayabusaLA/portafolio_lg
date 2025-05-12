import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="portfolio">
        <Certificates />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="projects">
        <Projects />
      </div>
      
    </div>
  );
}

export default App;
