import React, { useState, useEffect, useRef} from 'react';
import { Github, Mail, ExternalLink, Code2, Terminal } from 'lucide-react';
import './App.css';

const terminalLines = [
  { text: "$ initializing danielmontoya.exe...", delay: 0 },
  { text: ">> loading skills: Python, JS/TS, Data Science", delay: 800 },
  { text: ">> status: ready to build", delay: 2000 },
];

function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState([]);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    terminalLines.forEach((line) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line.text]);
      }, line.delay);
    });
  }, []);

  return (
    <div className="terminal-box">
      {visibleLines.map((line, i) => (
        <p key={i} className="terminal-line">{line}</p>
      ))}
      {visibleLines.length === terminalLines.length && (
        <span className="terminal-cursor">█</span>
      )}
    </div>
  );
}
function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };  

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "N-Body Gravity Simulator",
      description: "Real-time physics simulation of celestial bodies interacting through gravitational forces. Features orbital trail visualization and procedurally-driven calculations.",
      tech: ["Python", "Pygame", "NumPy"],
      github: "https://github.com/dmontoya25/n-body-gravity-sim",
      featured: true
    },
    {
      title: "Exoplanet Transit Detector",
      description: "Machine learning–based detection of exoplanet transit signals when a planet passes in front of its host star.",
      tech: ["Python", "Jupyter Notebook", "NumPy", "Sci-kit learn", "Astropy"],
      github: "https://github.com/dmontoya25/exoplanet-transit-detection",
      featured: true
    },
    {
      title: "Flashy (Flashcard application)",
      description: "An application that lets you create and study your flashcards, as well as accessing them across different devices via Sign-in",
      tech: ["React.js","Firebase", "CSS"],
      github: "https://github.com/dmontoya25/flashy",
      demo: "https://dmontoya25.github.io/flashy/",
      featured: true
    },
    {
      title: "Particle Detector Noise Reduction",
      description: "Particle detectors produce noisy signals due to electronic noise and environmental effects; this project explores classical and ML-based approaches to recover underlying physical signals.",
      tech: ["Python", "Jupyter Notebook", "Matplotlib", "Scikit-learn", "torch"],
      github: "https://github.com/dmontoya25/Detector-Noise-Reduction",
      featured: true
    },
    {
      title: "To-do list",
      description: "A modern and minimal todo list",
      tech: ["HTML", "CSS", "JavaScript"],
      github:"https://github.com/dmontoya25/todo-app",
      demo: "https://dmontoya25.github.io/todo-app/",
      featured: true
    }
    // Add more projects here
  ];

  const skills = {
    "Languages": ["Python", "JavaScript", "HTML/CSS"],
    "Tools & Frameworks": ["React", "TypeSript", "Git", "Pygame", "Jupyter Notebook", "Astropy", "Numpy", "Scikit-learn"],
    "Concepts": ["Procedural Programming", "Physics Simulation","Machine Learning & Data Science", "Algorithm Design"]
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">DM</div>
          <div className="nav-links">
            {['about', 'skills', 'projects', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="section hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-tag">Developer</div>
            <h1 className="hero-title">Daniel Montoya</h1>
            <p className="hero-subtitle">
            I do my best work at the intersection of data and code — whether that's wrangling datasets, building models, or making results actually usable on the frontend.
            </p>
            <div className="hero-cta">
              <button onClick={() => scrollToSection('projects')} className="btn-primary">
                View Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-secondary">
                Get in Touch
              </button>
            </div>
            <TerminalAnimation />
          </div>
          <div className="grid-overlay"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">
            <Terminal size={28} />
            Skills & Technologies
          </h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3 className="skill-category-title">{category}</h3>
                <div className="skill-items">
                  {items.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">
            <Code2 size={28} />
            Featured Projects
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                    Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            Interested in collaborating or have a project in mind? 
            Let's connect and build something great together.
          </p>
          <div className="contact-links">
            <a href="mailto:danielmont25@gmail.com" className="contact-link">
              <Mail size={24} />
              <span>danielmont25@gmail.com</span>
            </a>
            <a href="https://github.com/dmontoya25" className="contact-link" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
              <span>github.com/dmontoya25</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Daniel Montoya. Built with React.</p>
        </div>
      </footer>

      {/* Particle background effect */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;