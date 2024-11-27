import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiTool } from 'react-icons/fi';
import '../styles/About.css';

const About = () => {
  const skills = {
    'Frontend Development': {
      icon: <FiLayout />,
      items: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5/CSS3', 'Redux', 'Next.js']
    },
    'Backend Development': {
      icon: <FiCode />,
      items: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL']
    },
    'Database & Cloud': {
      icon: <FiDatabase />,
      items: ['MongoDB', 'PostgreSQL', 'AWS', 'Firebase', 'Docker', 'Kubernetes']
    },
    'Tools & Methods': {
      icon: <FiTool />,
      items: ['Git', 'CI/CD', 'Agile', 'Jest', 'Webpack', 'VS Code']
    }
  };

  return (
    <section id="about" className="about-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about-text">
                <p>
                  Hello! I'm John, a full-stack developer based in New York City. I enjoy creating
                  things that live on the internet, whether that be websites, applications, or
                  anything in between. My goal is to always build products that provide pixel-perfect,
                  performant experiences.
                </p>
                <p>
                  Shortly after graduating from the University of Technology, I joined the
                  engineering team at Upstart where I work on a wide variety of interesting and
                  meaningful projects on a daily basis.
                </p>
                <p>
                  Here are a few technologies I've been working with recently:
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="skills-container">
                {Object.entries(skills).map(([category, { icon, items }], index) => (
                  <motion.div
                    key={category}
                    className="skill-category"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="category-header">
                      {icon}
                      <h3>{category}</h3>
                    </div>
                    <div className="skills-grid">
                      {items.map((skill, i) => (
                        <motion.div
                          key={i}
                          className="skill-item"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
