import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';  //using props carry previous data of the form
import './RideConfirmation.css';

const RideConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { rideDetails } = location.state;

  const driverDetails = {
    // name: 'Ram Lal',
    vehicle: 'Auto Rickshaw',
    photo: 'https://www.shutterstock.com/image-photo/auto-rickshaw-driver-showing-thumbs-600nw-2114566913.jpg'
  };

  const handleEdit = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleCancel = () => {
    console.log('Cancel Ride');
  };

  const handleViewRequests = () => {
    console.log('View Ride Requests');
  };

  return (
    <div className="ride-confirmation">
      <h2>Ride Confirmation</h2>
      <div className="ride-summary">
        <h3>Ride Summary</h3>
        <p><strong>From:</strong> {rideDetails.leavingFrom}</p>
        <p><strong>To:</strong> {rideDetails.goingTo}</p>
        <p><strong>Date:</strong> {rideDetails.date}</p>
        <p><strong>Seats Available:</strong> {rideDetails.availableSeats}</p>
      </div>
      <div className="driver-details">
        <h3>Driver Details</h3>
        <p><strong>Name:</strong> {rideDetails.drivername}</p>
        <p><strong>Vehicle:</strong> {driverDetails.vehicle}</p>
        {driverDetails.photo && <img src={driverDetails.photo} alt="Driver" />}
      </div>
      <div className="confirmation-message">
        <p>Your ride has been posted!</p>
      </div>
      <div className="action-buttons">
        <button onClick={handleEdit} className="edit-button">Edit Ride</button>
        <button onClick={handleCancel} className="cancel-button">Cancel Ride</button>
        <button onClick={handleViewRequests} className="view-requests-button">View Ride Requests</button>
      </div>
    </div>
  );
};

export default RideConfirmation;
