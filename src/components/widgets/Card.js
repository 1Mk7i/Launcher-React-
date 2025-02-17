import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Card.css';

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {link && <Link to={link} className="card-button">Watch Now</Link>}
      </div>
    </div>
  );
};

export default Card;