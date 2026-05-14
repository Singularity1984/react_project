import React from 'react';
import Card from './Card';

const Gallery = ({ paintings, searchTerm }) => {
  // Шутка про Ктулху
  if (searchTerm && searchTerm.toLowerCase().trim() === "ftahfng ktulxhuss") {
    return (
      <div id="no-matches" style={{ 
        gridColumn: '1 / -1', 
        textAlign: 'center', 
        padding: '100px 40px', 
        color: '#aaaaaa', 
        fontSize: '18px' 
      }}>
        <strong>Ftulkus Ftahng!</strong><br /><br/>
        Fhtulgn? Fhtagn! Bless you — no, wait, that's just Cthulhu trying to clear his tentacles. Someone get him a drinks(water).
      </div>
    );
  }

  if (paintings.length === 0) {
    return (
      <div id="no-matches" style={{ 
        gridColumn: '1 / -1', 
        textAlign: 'center', 
        padding: '100px 40px', 
        color: '#aaaaaa', 
        fontSize: '18px' 
      }}>
        <strong>Noting!</strong><br /><br/>
        Please try write a world, without some like a "ftahfng ktulxhuss".
      </div>
    );
  }

  return (
    <div id="gallery" className="gallery-grid">
      {paintings.map(painting => (
        <Card key={painting.id} painting={painting} />
      ))}
    </div>
  );
};

export default Gallery;