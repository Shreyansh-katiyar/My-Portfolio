import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Thank you! I will get back to you as soon as possible.'
      });
      form.current.reset();
    } catch (error) {
      setStatus({
        type: 'danger',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <FiMail />,
      url: 'mailto:your.email@example.com' // Replace with your email
    },
    {
      name: 'GitHub',
      icon: <FiGithub />,
      url: 'https://github.com/yourusername' // Replace with your GitHub profile
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      url: 'https://linkedin.com/in/yourusername' // Replace with your LinkedIn profile
    },
    {
      name: 'Twitter',
      icon: <FiTwitter />,
      url: 'https://twitter.com/yourusername' // Replace with your Twitter profile
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Have a question or want to work together? Feel free to reach out!
                </p>
              </div>

              {status.message && (
                <Alert variant={status.type} className="mb-4">
                  {status.message}
                </Alert>
              )}

              <Form ref={form} onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="user_email"
                    required
                    placeholder="Your email"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    required
                    placeholder="Your message"
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>

              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ y: -3 }}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
