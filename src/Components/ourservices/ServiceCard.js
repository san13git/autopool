import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service, onClick }) => {
  return (
    <div className="service-card" onClick={() => onClick(service)}>
      <img src={service.image} alt={service.title} className="service-card-image" />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <button className="learn-more-button">Learn More</button>
    </div>
  );
};

export default ServiceCard;
