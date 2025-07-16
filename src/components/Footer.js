import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <div className="footer-content">
              <div className="footer-social">
                <motion.a
                  href="https://github.com/Shreyansh-katiyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="social-link"
                >
                  <FiGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/shreyansh-katiyar-5a3b70226/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="social-link"
                >
                  <FiLinkedin />
                </motion.a>
                <motion.a
                  href="https://x.com/ShreyanshK_01"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="social-link"
                >
                  <FiTwitter />
                </motion.a>
              </div>
              
              <motion.div
                className="footer-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="built-with">
                  Built with <FiHeart className="heart-icon" /> by Shreyansh Katiyar
                </p>
                <p className="copyright">
                  &copy; {currentYear} Shreyansh Katiyar. All rights reserved.
                </p>
              </motion.div>

              <motion.div
                className="scroll-to-top"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
