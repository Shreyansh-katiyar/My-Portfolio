import React, { useState, useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  const resumeLink = 'https://drive.google.com/file/d/1vnClLfO7Q2GiAuXCT6PKJVmkyQozgCtu/view?usp=sharing'; // Update with your resume path

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Container>
        <div className="navbar-content">
          <Link to="/" className="logo">
            SK
          </Link>

          <div className="nav-links-desktop">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={resumeLink}
              className="resume-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="mobile-menu"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween' }}
              >
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={resumeLink}
                  className="mobile-resume-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
