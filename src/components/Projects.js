import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.com',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates. Users can create projects, assign tasks, and track progress with an intuitive drag-and-drop interface.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://task-manager-demo.com',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather conditions and forecasts for multiple cities. Features include location search, saved locations, and weather alerts.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Styled Components'],
      github: 'https://github.com/yourusername/weather-dashboard',
      live: 'https://weather-dashboard-demo.com',
      image: 'https://via.placeholder.com/600x400',
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <Row>
            {projects.map((project, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <motion.div
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
