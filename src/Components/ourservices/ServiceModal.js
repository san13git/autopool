import React from 'react';
import './ServiceModal.css';

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <img src={service.image} alt={service.title} className="modal-image" />
        <h2>{service.title}</h2>
        <p>{service.details}</p>
      </div>
    </div>
  );
};

export default ServiceModal;
