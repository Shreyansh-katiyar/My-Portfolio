import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-content"
            >
              <h1 className="greeting">Hi, I'm</h1>
              <h2 className="name">Shreyansh Katiyar</h2>
              <h3 className="title">Full Stack Developer</h3>
              <p className="description">
                I build exceptional digital experiences that combine elegant design with 
                powerful functionality. Passionate about creating innovative solutions 
                that make a difference.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/projects" className="cta-button">
                  View My Work <FiArrowRight className="arrow-icon" />
                </Link>
              </motion.div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="profile-image-container"
            >
              <div className="profile-image">
                {/* Replace with your actual image */}
                <img
                  src="/path-to-your-image.jpg"
                  alt="Shreyansh Katiyar"
                  className="rounded-circle"
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
