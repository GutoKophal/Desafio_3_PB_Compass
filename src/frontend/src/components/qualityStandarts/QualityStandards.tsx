import React from "react";
import { FaCheck } from "react-icons/fa";
import "./qualityStandards.css";

const QualityStandards: React.FC = () => {
  return (
    <div className="quality-standards">
      <div className="quality-standards-image">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fwatch%20now.png?alt=media&token=d412b64b-5c26-4551-b05d-06288b9ea87c"
          alt="mountain"
        />
      </div>
      <div className="quality-standards-content">
        <p className="section-subtitle">Why Choose Us</p>
        <h2 className="section-title">
          Our Experiences Meet High Quality Standards
        </h2>
        <p className="section-description">
          Holistically optimize proactive strategic theme areas rather than
          effective manufactured products create.
        </p>
        <ul className="features-list">
          <li>
            <FaCheck className="check-icon" /> Travel Plan
          </li>
          <li>
            <FaCheck className="check-icon" /> Hand-picked Tour
          </li>
          <li>
            <FaCheck className="check-icon" /> Cheap Rates
          </li>
          <li>
            <FaCheck className="check-icon" /> Private Guide
          </li>
        </ul>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
};

export default QualityStandards;
