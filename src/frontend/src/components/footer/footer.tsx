import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaPlane } from "react-icons/fa";

import "./footer.css";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setEmail("");
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <footer className="footer mt-5 py-4">
      <Container fluid className="footer-conteiner">
        <Row className="d-flex flex-wrap">
          <Col md={2} className="footer-section" id="first-section">
            <div className="company-info">
              <div className="company-icon d-flex align-items-center">
                <FaPlane />
                <p className="ml-2">Trisog</p>
              </div>
              <p>Need any help?</p>
              <p>Call Us: (888)11234 5678</p>
              <p>Love Street, Muscat, Oman</p>
              <p>Example@trisog.com</p>
              <div className="social-icons d-flex">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>

          <Col md={2} className="footer-section">
            <h5>Company</h5>
            <ul className="footer-links">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </Col>

          <Col md={2} className="footer-section">
            <h5>Top Destinations</h5>
            <ul className="footer-links">
              <li>Las Vegas</li>
              <li>New York City</li>
              <li>San Francisco</li>
              <li>Hawaii</li>
            </ul>
          </Col>

          <Col md={2} className="footer-section">
            <h5>&nbsp;</h5>
            <ul className="footer-links">
              <li>Tokyo</li>
              <li>Sydney</li>
              <li>Melbourne</li>
              <li>Dubai</li>
            </ul>
          </Col>

          <Col
            md={4}
            className="footer-section d-flex flex-column align-items-center"
          >
            <h5>Sign up Newsletter</h5>
            <Form
              onSubmit={handleEmailSubmit}
              className="d-flex flex-column align-items-center"
            >
              <Form.Group controlId="formEmail" className="w-100">
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
              <Button type="submit" variant="primary" className="mt-2">
                Submit
              </Button>
              <span className="mt-3">© 2023 Trisog All Rights Reserved</span>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
