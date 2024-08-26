import React from 'react';
import './qualityStandards.css';

const QualityStandards: React.FC = () => {
  return (
    <div className="quality-standards-container">
      <div className="image-section">
        <img src="https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fdune.jpg?alt=media&token=471019eb-25c0-471f-8c77-afb28d47ed71" alt="Dune" />
        <div className="button-overlay">Watch Now</div>
      </div>
      <div className="text-section">
        <h4>Why Choose Us</h4>
        <h2>Our Experiences Meet High Quality Standards</h2>
        <p>Holistically optimize proactive strategic theme areas rather than effective manufactured products create.</p>
        <ul>
          <li>Travel Plan</li>
          <li>Hand-picked Tour</li>
          <li>Cheap Rates</li>
          <li>Private Guide</li>
        </ul>
        <div className="contact-button">Contact Us</div>
      </div>
    </div>
  );
};

export default QualityStandards;
