import React from 'react';

const Card = ({ painting }) => {
  const { title, date, artist, museum, imageFilename } = painting;
  
  return (
    <div className="card" data-artist={artist} data-museum={museum}>
      <div className="card-img-wrapper">
        <img src={`/img/${imageFilename}`} alt={title} className="card-img" />
      </div>
      
      <div className="card-bottom">
        <div className="gold-line"></div>
        <div className="card-text">
          <h3 className="card-title">{title}</h3>
          <p className="card-date">{date}</p>
        </div>
        <div className="card-arrow">
          <img className="arrow_icon" src="/img/arrow_icon.png" alt="arrow" />
        </div>
      </div>
      
      <div className="hover-info">
        <div className="hover-artist">{artist}</div>
        <div className="hover-museum">{museum}</div>
      </div>
    </div>
  );
};

export default Card;