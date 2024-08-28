import React from 'react';
import './latestTravelGuide.css';

const LatestTravelGuide: React.FC = () => {
  const guides = [
    {
      date: 'July 13, 2023',
      author: 'Admin',
      title: 'The Impact of Covid-19 on travel & tourism industry',
      image: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Ftraveler.jpg?alt=media&token=3abf73f6-e376-4e5d-9392-8813a23fe298',
    },
    {
      date: 'July 13, 2023',
      author: 'Admin',
      title: 'The Impact of Covid-19 on travel & tourism industry',
      image: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Ftraveler.jpg?alt=media&token=3abf73f6-e376-4e5d-9392-8813a23fe298',
    },
    {
      date: 'July 13, 2023',
      author: 'Admin',
      title: 'The Impact of Covid-19 on travel & tourism industry',
      image: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Ftraveler.jpg?alt=media&token=3abf73f6-e376-4e5d-9392-8813a23fe298',
    },
    {
      date: 'July 13, 2023',
      author: 'Admin',
      title: 'The Impact of Covid-19 on travel & tourism industry',
      image: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Ftraveler.jpg?alt=media&token=3abf73f6-e376-4e5d-9392-8813a23fe298',
    },
  ];

  return (
    <div className="latest-travel-guide">
      <div className="section-header">
        <p className="section-subtitle">Updates</p>
        <h2 className="section-title">Latest Travel Guide</h2>
      </div>
      <div className="guide-list">
        {guides.map((guide, index) => (
          <div key={index} className="guide-item">
            <img src={guide.image} alt={guide.title} className="guide-image" />
            <div className="guide-info">
              <p className="guide-date">
                {guide.date} • {guide.author}
              </p>
              <h4 className="guide-title">{guide.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestTravelGuide;
