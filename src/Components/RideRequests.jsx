import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './RideRequests.css';

const RideRequests = () => {
  const location = useLocation();
  const { drivername } = location.state;
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Replace with the actual API call to fetch ride requests
    fetchRideRequests(drivername);
  }, [drivername]);

  const fetchRideRequests = (drivername) => {
    // Mock API call
    const mockRequests = [
      { id: 1, passengerName: 'John Doe', status: 'Pending' },
      { id: 2, passengerName: 'Jane Smith', status: 'Confirmed' }
    ];
    setRequests(mockRequests);
  };

  return (
    <div className="ride-requests">
      <h2>Ride Requests for {drivername}</h2>
      <ul>
        {requests.map(request => (
          <li key={request.id}>
            <p><strong>Passenger Name:</strong> {request.passengerName}</p>
            <p><strong>Status:</strong> {request.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RideRequests;
