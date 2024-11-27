import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      title: 'Senior Full Stack Developer',
      period: 'Jan 2022 - Present',
      location: 'San Francisco, CA',
      responsibilities: [
        'Led a team of 5 developers in building and maintaining enterprise-level web applications',
        'Implemented microservices architecture using Node.js and Docker, improving system scalability',
        'Reduced application load time by 40% through performance optimization techniques',
        'Mentored junior developers and conducted code reviews to maintain high code quality'
      ]
    },
    {
      company: 'Digital Innovations',
      title: 'Full Stack Developer',
      period: 'Mar 2020 - Dec 2021',
      location: 'New York, NY',
      responsibilities: [
        'Developed and maintained multiple React-based web applications',
        'Implemented RESTful APIs using Node.js and Express',
        'Integrated third-party services and APIs for payment processing and data analytics',
        'Collaborated with UX designers to implement responsive and accessible interfaces'
      ]
    },
    {
      company: 'StartUp Labs',
      title: 'Frontend Developer',
      period: 'Jun 2018 - Feb 2020',
      location: 'Boston, MA',
      responsibilities: [
        'Built responsive web applications using React and Redux',
        'Implemented unit tests using Jest and React Testing Library',
        'Optimized frontend performance and improved lighthouse scores',
        'Participated in daily stand-ups and sprint planning meetings'
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
