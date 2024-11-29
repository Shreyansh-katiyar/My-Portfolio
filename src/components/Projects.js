import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import '../styles/Projects.css';
import '../styles/ProjectCovers.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web Development', 'Full Stack'];

  const projects = [
    {
      title: 'CodePen Editor',
      description: 'A feature-rich online code editor inspired by CodePen, built with React. Features live code compilation, multiple pane support, and instant preview. Includes syntax highlighting for HTML, CSS, and JavaScript.',
      coverElement: (
        <div className="project-cover codepen-cover">
          <div className="cover-content">
            <h3>CodePen Editor</h3>
            <p>Modern Code Editor</p>
          </div>
        </div>
      ),
      technologies: ['React', 'JavaScript', 'CodeMirror', 'Babel', 'SASS'],
      features: [
        'Real-time code compilation and preview',
        'Multi-pane layout with resizable panels',
        'Syntax highlighting for multiple languages',
        'Auto-save functionality',
        'Responsive design for all devices'
      ],
      github: 'https://github.com/Shreyansh-katiyar/CODE-PEN-EDITOR',
      live: 'https://codepen-editor-sk.netlify.app',
      category: 'Web Development'
    },
    {
      title: 'Instagram Clone',
      description: 'A full-stack Instagram clone with real-time updates, built using the MERN stack. Features user authentication, post creation, likes, comments, and direct messaging functionality.',
      coverElement: (
        <div className="project-cover instagram-cover">
          <div className="camera-lens"></div>
          <div className="camera-flash"></div>
          <div className="cover-content">
            <h3>Instagram Clone</h3>
            <p>Social Media Platform</p>
          </div>
        </div>
      ),
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'AWS S3'],
      features: [
        'User authentication and authorization',
        'Real-time messaging and notifications',
        'Image upload and filtering',
        'Like, comment, and share functionality',
        'Responsive mobile-first design'
      ],
      github: 'https://github.com/Sa1864225/Social-Media-frontend',
      live: 'https://instagram-clone-sk.herokuapp.com',
      category: 'Full Stack'
    }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const ProjectModal = ({ project, show, onHide }) => {
    if (!project) return null;
    
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
        className="project-modal"
      >
        <Modal.Header>
          <Modal.Title>{project.title}</Modal.Title>
          <Button variant="link" onClick={onHide} className="close-button">
            <FiX />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-image">
            {project.coverElement}
          </div>
          <div className="modal-content">
            <p className="modal-description">{project.description}</p>
            
            <h4>Key Features</h4>
            <ul className="modal-features">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h4>Technologies Used</h4>
            <div className="modal-tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="modal-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FiGithub /> View Source
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <FiExternalLink /> Live Demo
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <section id="projects" className="projects-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="category-filters">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          <Row className="projects-grid">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <Col key={project.title} lg={6} className="mb-4">
                  <motion.div
                    className="project-card"
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -10 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="project-image">
                      {project.coverElement}
                      <div className="project-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FiGithub />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>

                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-tech">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="tech-tag more">+{project.technologies.length - 4}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>
        </motion.div>
      </Container>

      <ProjectModal
        project={selectedProject}
        show={!!selectedProject}
        onHide={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
