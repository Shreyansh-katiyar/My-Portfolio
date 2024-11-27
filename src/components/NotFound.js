import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <section className="not-found">
      <Container>
        <motion.div
          className="not-found-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="home-button">
              <FiHome />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default NotFound;
