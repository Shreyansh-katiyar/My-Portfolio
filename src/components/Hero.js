import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImage from '../assets/profile-placeholder.svg';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Hi, I'm <span className="highlight">John Doe</span></h1>
              <h2>Full Stack Developer</h2>
              <p>
                Passionate about creating beautiful, responsive, and user-friendly web applications.
                I specialize in building exceptional digital experiences that combine form and function.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cta-button"
                >
                  View My Work
                </Link>
              </motion.div>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-image"
            >
              <div className="profile-img-container">
                <img 
                  src={profileImage}
                  alt="John Doe"
                  className="profile-img"
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
