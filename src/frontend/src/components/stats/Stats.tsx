import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Stats: React.FC = () => {
  return (
    <div className="d-flex justify-content-around text-center mt-4">
      <div className="text-center" style={{ display: 'inline-block' }}>
        <span className="h3" style={{ marginRight: '5px' }}>120+</span>
        <p style={{ display: 'inline', marginBottom: '0' }}>Total Destinations</p>
      </div>
      <div className="text-center" style={{ display: 'inline-block' }}>
        <span className="h3" style={{ marginRight: '5px' }}>500+</span>
        <p style={{ display: 'inline', marginBottom: '0' }}>Travel Packages</p>
      </div>
      <div className="text-center" style={{ display: 'inline-block' }}>
        <span className="h3" style={{ marginRight: '5px' }}>12k+</span>
        <p style={{ display: 'inline', marginBottom: '0' }}>Total Travelers</p>
      </div>
      <div className="text-center" style={{ display: 'inline-block' }}>
        <span className="h3" style={{ marginRight: '5px' }}>7k+</span>
        <p style={{ display: 'inline', marginBottom: '0' }}>Positive Reviews</p>
      </div>
    </div>
  );
};

export default Stats;
