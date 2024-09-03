import './stats.css';

const Stats = () => {
  return (
    <div className="stats-container">
  <div className="stat-item">
    <div className="stat-line">
      <div className="stat-value">120+</div>
      <div className="stat-label">Total Destinations</div>
    </div>
  </div>
  <div className="stat-item">
    <div className="stat-line">
      <div className="stat-value">500+</div>
      <div className="stat-label">Travel Packages</div>
    </div>
  </div>
  <div className="stat-item">
    <div className="stat-line">
      <div className="stat-value">12k+</div>
      <div className="stat-label">Total Travelers</div>
    </div>
  </div>
  <div className="stat-item">
    <div className="stat-line">
      <div className="stat-value">7k+</div>
      <div className="stat-label">Positive Reviews</div>
    </div>
  </div>
</div>
  );
};

export default Stats;
