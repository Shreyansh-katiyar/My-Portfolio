import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiLayout, 
  FiServer,
  FiGitBranch,
  FiTool
} from 'react-icons/fi';
import '../styles/About.css';

const About = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: <FiLayout />,
      items: [
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Tailwind CSS',
        'Material-UI',
        'Redux'
      ]
    },
    {
      category: 'Backend Development',
      icon: <FiServer />,
      items: [
        'Node.js',
        'Express.js',
        'Python',
        'Django',
        'FastAPI',
        'RESTful APIs',
        'GraphQL',
        'WebSockets'
      ]
    },
    {
      category: 'Database & Cloud',
      icon: <FiDatabase />,
      items: [
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'Redis',
        'AWS',
        'Firebase',
        'Docker',
        'Kubernetes'
      ]
    },
    {
      category: 'Programming Languages',
      icon: <FiCode />,
      items: [
        'JavaScript',
        'TypeScript',
        'Python',
        'Java',
        'C++',
        'SQL',
        'Bash',
        'Go'
      ]
    },
    {
      category: 'Version Control & Tools',
      icon: <FiGitBranch />,
      items: [
        'Git',
        'GitHub',
        'GitLab',
        'JIRA',
        'Postman',
        'VS Code',
        'Linux',
        'Agile/Scrum'
      ]
    },
    {
      category: 'Other Skills',
      icon: <FiTool />,
      items: [
        'CI/CD',
        'TDD',
        'REST APIs',
        'System Design',
        'Data Structures',
        'Algorithms',
        'Problem Solving',
        'Team Leadership'
      ]
    }
  ];

  return (
    <section id="about" className="about-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="about-content">
                <p>
                  Hello! I'm Shreyansh, a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
                  I specialize in building scalable web applications that combine clean code with exceptional user experiences.
                </p>
                <p>
                  With a background in Computer Science and hands-on experience in modern web technologies, 
                  I enjoy tackling complex problems and turning innovative ideas into reality. I'm particularly 
                  interested in performance optimization, clean architecture, and building accessible applications.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge through technical writing and mentoring.
                </p>
              </div>
            </Col>
          </Row>

          <h3 className="skills-title">Technical Skills</h3>
          <Row className="skills-grid">
            {skills.map((skillGroup, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div
                  className="skill-category"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="category-header">
                    {skillGroup.icon}
                    <h4>{skillGroup.category}</h4>
                  </div>
                  <ul className="skills-list">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.li
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
