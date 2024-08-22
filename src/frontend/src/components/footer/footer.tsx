import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPlane } from 'react-icons/fa';

import './footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setEmail('');
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <footer className="footer mt-5 py-4">
      <Container>
        <Row>
          <Col md={4}>
            <div className="footer-section">
              <div className="company-info">
                <div className="company-icon"><FaPlane /><p>Trisog</p></div>
                <p>Need any help?</p>
                <p>Call Us: (888)11234 5678</p>
                <p>Love Street, Muscat, Oman</p>
                <p>Example@trisog.com</p>
                <div className="social-icons">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="footer-section">
              <h5>Company</h5>
              <ul className="footer-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-section">
              <h5>Top Destinations</h5>
              <ul className="footer-links">
                <li>Las Vegas</li>
                <li>New York City</li>
                <li>San Franscisco</li>
                <li>Hawaii</li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-section">
              <h5></h5>
              <ul className="footer-links">
                <li>Tokyo</li>
                <li>Sydney</li>
                <li>Melbourne</li>
                <li>Dubai</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={12}>
            <div className="footer-section">
              <h5>Subscribe to our newsletter</h5>
              <Form onSubmit={handleEmailSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    isInvalid={!!emailError}
                  />
                  <Form.Control.Feedback type="invalid">
                    {emailError}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-2">Subscribe</Button>
              </Form>
            </div>
            <span>© 2023 Trisog All Reserved</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
