import React from "react";
import "./testimonialSection.css";

const TestimonialSection: React.FC = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-left">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Ftestimonial.png?alt=media&token=f4c99c4a-93f8-47a4-839a-1f99624b7e6c"
          alt="Traveler"
          className="testimonial-image"
        />
      </div>
      <div className="testimonial-right">
        <p className="testimonial-subtitle">Testimonials</p>
        <h2 className="testimonial-title">What Travelers Say</h2>
        <p className="testimonial-quote">
          “The UI designs he crafted are top-notch, and the design system he
          integrated allows for straight forward fixes and bulk updates
          throughout almost every area of the app.”
        </p>
        <p className="testimonial-author">- By Molie Rosa, Photographer</p>
        <div className="testimonial-indicators">
          <span className="indicator active"></span>
          <span className="indicator"></span>
          <span className="indicator"></span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
