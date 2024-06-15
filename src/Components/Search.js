// import React,{ useState } from 'react'

// const Search = () => {
//   return (
//     <div className="search-container">
//         <div className="search-form">
//           <input type="text" placeholder="Leaving from" />
//           <input type="text" placeholder="Going to" />
//           <input type="date" placeholder="Select date" />
//           <button>Search</button>
//         </div>
//       </div>
//   )
// }

// export default Search

import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [date, setDate] = useState('');
  const [rides, setRides] = useState([]);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/v1/rides/search?leavingFrom=${leavingFrom}&goingTo=${goingTo}&date=${date}`);
      if (response.data.length > 0) {
        setRides(response.data);
        setMessage('');
      } else {
        setRides([]);
        setMessage('No rides available.');
      }
    } catch (error) {
      console.error('Error searching rides:', error);
      setMessage('An error occurred while searching for rides.');
    }
  };

  return (
    <div className="search-container">
      <div className="search-form">
        <input type="text" placeholder="Leaving from" value={leavingFrom} onChange={e => setLeavingFrom(e.target.value)} />
        <input type="text" placeholder="Going to" value={goingTo} onChange={e => setGoingTo(e.target.value)} />
        <input type="date" placeholder="Select date" value={date} onChange={e => setDate(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {rides.length > 0 ? (
        <div>
          <h2>Available Rides</h2>
          <ul>
            {rides.map(ride => (
              <li key={ride.id}>{ride.origin} to {ride.destination} - {ride.departureTime}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default Search;

