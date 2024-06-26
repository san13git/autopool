import React from 'react';
import { useLocation } from 'react-router-dom';
import './rideconfirmuser.css'
import backimg from '../assets/mapi.jpg'

const RideConfirmationUser = () => {
  const location = useLocation();
  const rideDetails = location.state?.rideDetails;

  if (!rideDetails) {
    return <div>Loading...</div>; // Handle edge case if rideDetails are not available
  }

  // Simulate contact number of driver (replace with actual data)
  const contactNumber = '+1234567890';

  // Calculate estimated time (you can adjust this based on your application logic)
  const estimatedTime = '1 hour';

  return (
    <div className="ride-confirmation-container" style={{ backgroundImage: `url(${backimg})` }}>
      <div className="confirmation-card">
        <h2>Ride Confirmation</h2>
        <p className="sub-heading">Booking Details</p>
        <div className="details">
          <p><span>Leaving from:</span> {rideDetails.leavingFrom}</p>
          <p><span>Going to:</span> {rideDetails.goingTo}</p>
          <p><span>Available Seats Now:</span> {rideDetails.availableSeats - 1}</p>
          <p><span>Date:</span> {rideDetails.date}</p>
          
          <p><span>Contact Number of Driver:</span> {contactNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default RideConfirmationUser;
