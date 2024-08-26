import React from 'react';
import './topAttractions.css';

const TopAttractions: React.FC = () => {
  return (
    <div className="top-attractions-container">
      <h2 className="top-attractions-title">Top Attractions Destinations</h2>
      <p className="top-attractions-subtitle">Destination</p>
      
      <div className="images-container">
        <div className="image-item" style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fbeach.jpg?alt=media&token=63c8ee3d-0ea9-463c-bbb0-290c827cea70')` }}>
          <div className="image-text">United Kingdom</div>
        </div>
        <div className="image-item" style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fbeach.jpg?alt=media&token=63c8ee3d-0ea9-463c-bbb0-290c827cea70')` }}>
          <div className="image-text">Turkey</div>
        </div>
        <div className="image-item" style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fbeach.jpg?alt=media&token=63c8ee3d-0ea9-463c-bbb0-290c827cea70')` }}>
          <div className="image-text">Switzerland</div>
        </div>
        <div className="image-item" style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fbeach.jpg?alt=media&token=63c8ee3d-0ea9-463c-bbb0-290c827cea70')` }}>
          <div className="image-text">Thailand</div>
        </div>
        <div className="image-item" style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fbeach.jpg?alt=media&token=63c8ee3d-0ea9-463c-bbb0-290c827cea70')` }}>
          <div className="image-text">Thailand</div>
        </div>
        <div className="image-item" style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fbeach.jpg?alt=media&token=63c8ee3d-0ea9-463c-bbb0-290c827cea70')` }}>
          <div className="image-text">Thailand</div>
        </div>
      </div>
    </div>
  );
};

export default TopAttractions;
