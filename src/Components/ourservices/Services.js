import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import servicesData from './servicesData';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-scroll">
        {servicesData.map(service => (
          <ServiceCard key={service.id} service={service} onClick={handleCardClick} />
        ))}
      </div>
      {selectedService && <ServiceModal service={selectedService} onClose={handleCloseModal} />}
    </div>
  );
};

export default Services;
