import './topAttractions.css';

const TopAttractions = () => {
  const destinations = [
    {
      name: "United Kingdom",
      travelers: "174,688 Travelers",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2FUnited.jpg?alt=media&token=a26d0822-7068-4f17-878f-1462e7c35ae7"
    },
    {
      name: "Turkey",
      travelers: "174,688 Travelers",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fturkey.jpg?alt=media&token=9cdc3d87-9907-40cb-88b1-6dae6f2428aa"
    },
    {
      name: "Switzerland",
      travelers: "174,688 Travelers",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fswitzer.jpg?alt=media&token=3319df87-eabd-4364-b7d7-e44a1ab6b8b7"
    },
    {
      name: "Thailand",
      travelers: "174,688 Travelers",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fthailand.jpg?alt=media&token=2e064c2e-ad1f-46c6-9f9c-dcc217aa1def"
    },
    {
      name: "Australia",
      travelers: "174,688 Travelers",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Faustralia.jpg?alt=media&token=c02226ce-892a-47c5-aea2-d96ab68a3fe9"
    },
    {
      name: "France",
      travelers: "174,688 Travelers",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Ffrance.jpg?alt=media&token=db371f26-e32d-4cdd-bcf0-8592f395a0d4"
    }
  ];

  return (
    <div className="top-attractions-wrapper">
      <div className="top-attractions-container">
      <div className="title-section">
        <p className="subtitle">Destination</p>
        <h2 className="main-title">Top Attractions Destinations</h2>
      </div>
      <div className="attractions-grid">
        {destinations.map((destination, index) => (
          <div className="destination-card" key={index}>
            <img src={destination.imageUrl} alt={destination.name} />
            <div className="destination-info">
              <p className="travelers">{destination.travelers}</p>
              <p className="destination-name">{destination.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default TopAttractions;