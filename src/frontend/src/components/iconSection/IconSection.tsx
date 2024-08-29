import React from 'react';
import './iconSection.css';

const IconSection: React.FC = () => {
  const icons = [
    { id: 1, src: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/icons%2Fsummer.png?alt=media&token=53e511d3-de92-470e-9f53-98423ba97bf2', alt: 'Summer Icon' },
    { id: 2, src: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/icons%2Ftravel.png?alt=media&token=7620ad38-5d36-4ae9-91ef-5849f818f5ec', alt: 'Travel Icon' },
    { id: 3, src: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/icons%2Fmountain.png?alt=media&token=7bb8f2da-2ea5-40db-8f89-923637cd0df8', alt: 'Mountain Icon' },
    { id: 4, src: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/icons%2Fdune-icon.png?alt=media&token=af6b9406-287e-4c76-9bd4-a8cb1c73a619', alt: 'Dune Icon' },
    { id: 5, src: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/icons%2Fflorest.png?alt=media&token=4a15532d-2140-4634-ac8e-425112eebcba', alt: 'florest' },
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
