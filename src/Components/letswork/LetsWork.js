import React from 'react';
import './LetsWork.css';

const LetsWork = () => {
  return (
    <div className="lets-work-container">
      <h1>How GetRide Works</h1>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h2>Sign Up</h2>
            <p>Create your account to start using our auto pooling services.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h2>Book Your Ride</h2>
            <p>Enter your pickup and drop-off locations to book a ride instantly.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h2>Get Matched</h2>
            <p>We match you with other passengers traveling in the same direction.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h2>Share Your Ride</h2>
            <p>Enjoy your ride while sharing it with other passengers, reducing costs and emissions.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h2>Rate Your Experience</h2>
            <p>Rate your ride and driver to help us improve our services.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsWork;
