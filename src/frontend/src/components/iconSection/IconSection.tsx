import React from 'react';
import './iconSection.css';

const IconSection: React.FC = () => {
  const icons = [
    { id: 1, src: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Ficons%2Fsummer.png?alt=media&token=0f936ea9-e8df-41f9-bc8d-c59f23faa0c5', alt: 'Summer Icon' },
    { id: 2, src: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Ficons%2Ftravel.png?alt=media&token=6d452186-6357-4c51-a0af-3446e5811fbc', alt: 'Travel Icon' },
    { id: 3, src: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Ficons%2Fmountain.png?alt=media&token=bf637c80-837b-4114-86e4-9f4c6e1ce201', alt: 'Mountain Icon' },
    { id: 4, src: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Ficons%2Fdune-icon.png?alt=media&token=be13129d-2092-4cff-b8cf-17393adbbe02', alt: 'Dune Icon' },
    { id: 5, src: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Ficons%2Fflorest.png?alt=media&token=40b5feef-c3d0-421b-9713-d0b4f920dd29', alt: 'florest' },
  ];

  return (
    <div className="icon-section">
      {icons.map(icon => (
        <img key={icon.id} src={icon.src} alt={icon.alt} className="icon-image" />
      ))}
    </div>
  );
};

export default IconSection;
