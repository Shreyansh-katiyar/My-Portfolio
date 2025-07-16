import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'CODSOFT',
      title: 'Web Developer Intern',
      period: 'Nov 2024 - Nov 2024',
      location: 'Remote',
      responsibilities: [
        'Designed and developed responsive web applications using modern frameworks and technologies',
        'Debugged and resolved issues in existing codebases to improve functionality and user experience',
        'Gained practical experience in [HTML, CSS, JavaScript, React, etc.]'
      ]
    }
    
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="experience-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Work Experience</h2>
          <Row>
            <Col md={3}>
              <div className="company-tabs">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={index}
                    className={`company-tab ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {exp.company}
                  </motion.button>
                ))}
              </div>
            </Col>
            <Col md={9}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="experience-content"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="experience-header">
                    <h3>{experiences[activeTab].title}</h3>
                    <h4>{experiences[activeTab].company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span>
                      <FiCalendar />
                      {experiences[activeTab].period}
                    </span>
                    <span>
                      <FiMapPin />
                      {experiences[activeTab].location}
                    </span>
                  </div>
                  <ul className="responsibilities">
                    {experiences[activeTab].responsibilities.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
