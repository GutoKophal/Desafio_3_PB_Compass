import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
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
      setEmail("");
      setEmailError("Please enter a valid email address.");
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="company-info">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/icons%2FLogo%20Color%3DWhite.png?alt=media&token=6650cd84-3fb3-438d-b96f-5962aa39b1af"
              alt="Trisog logo"
              className="company-logo"
            />
            <p className="kaushan-font">Need any help?</p>
            <p>
              <strong>Call Us:</strong> <span>(888) 1234 5678</span>
            </p>
            <p>Love Street, Muscat, Oman</p>
            <p>example@trisog.com</p>
            <div className="social-icons">
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
        </div>

        <div className="footer-section">
          <h5 className="kaushan-font">Company</h5>
          <ul className="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h5 className="kaushan-font">Top Destinations</h5>
          <ul className="footer-links">
            <li>
              <a href="#">Las Vegas</a>
            </li>
            <li>
              <a href="#">New York City</a>
            </li>
            <li>
              <a href="#">San Francisco</a>
            </li>
            <li>
              <a href="#">Hawaii</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>&nbsp;</h5>
          <ul className="footer-links">
            <li>
              <a href="#">Tokyo</a>
            </li>
            <li>
              <a href="#">Sydney</a>
            </li>
            <li>
              <a href="#">Melbourne</a>
            </li>
            <li>
              <a href="#">Dubai</a>
            </li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h5 className="kaushan-font">Sign up Newsletter</h5>
          <form onSubmit={handleEmailSubmit}>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className={`email-input ${emailError ? "error" : ""}`}
            />
            {emailError && <span className="error-message">{emailError}</span>}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          <div className="copyright">
            &copy; 2023 Trisog All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
