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

// import React, { useState } from 'react';
// import axios from 'axios';

// const Search = () => {
//   const [leavingFrom, setLeavingFrom] = useState('');
//   const [goingTo, setGoingTo] = useState('');
//   const [date, setDate] = useState('');
//   const [rides, setRides] = useState([]);
//   const [message, setMessage] = useState('');

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/v1/rides/search?leavingFrom=${leavingFrom}&goingTo=${goingTo}&date=${date}`);
//       if (response.data.length > 0) {
//         setRides(response.data);
//         setMessage('');
//       } else {
//         setRides([]);
//         setMessage('No rides available.');
//       }
//     } catch (error) {
//       console.error('Error searching rides:', error);
//       setMessage('An error occurred while searching for rides.');
//     }
//   };

//   return (
//     <div className="search-container">
//       <div className="search-form">
//         <input type="text" placeholder="Leaving from" value={leavingFrom} onChange={e => setLeavingFrom(e.target.value)} />
//         <input type="text" placeholder="Going to" value={goingTo} onChange={e => setGoingTo(e.target.value)} />
//         <input type="date" placeholder="Select date" value={date} onChange={e => setDate(e.target.value)} />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {rides.length > 0 ? (
//         <div>
//           <h2>Available Rides</h2>
//           <ul>
//             {rides.map(ride => (
//               <li key={ride.id}>{ride.origin} to {ride.destination} - {ride.departureTime}</li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>{message}</p>
//       )}
//     </div>
//   );
// };

// export default Search;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import './RidePublishConfirm'
import './rideconfirmuser'

const Search = () => {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [date, setDate] = useState('');
  const [rides, setRides] = useState([]);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  
  const [availableSeats, setPassengers] = useState('');
  
  const [saveDetails, setSaveDetails] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/rides/search?leavingFrom=${leavingFrom}&goingTo=${goingTo}&date=${date}`);
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
  
  const bookride = async (e, ride) => {
    e.preventDefault();
   
    try {
      const response = await axios.post('http://localhost:3000/api/v1/rides/add', {
        leavingFrom: ride.leavingFrom,
        goingTo: ride.goingTo,
        availableSeats: ride.availableSeats,
        date: ride.date,
        drivername:ride.drivername
      });
      setSuccessMessage(response.data.message);
      navigate('/ride-hai', { state: { rideDetails: { leavingFrom: ride.leavingFrom, goingTo: ride.goingTo, availableSeats: ride.availableSeats, date: ride.date } } });
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.message || 'An error occurred');
      setSuccessMessage('');
    }
  }

  return (
    <div className="search-container">
    <h2>Find your Ride</h2>
      <div className="search-form">
      
     
        <input type="text" placeholder="Leaving from" value={leavingFrom} onChange={e => setLeavingFrom(e.target.value)} />
        <input type="text" placeholder="Going to" value={goingTo} onChange={e => setGoingTo(e.target.value)} />
        <input type="date" placeholder="Select date" value={date} onChange={e => setDate(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>


      <div className="rides-list">
        {rides.length > 0 ? (
          <div>
            <h2>Yeah Your Ride is Available</h2>
            <div className="cards-container">
              {rides.map(ride => (
                <div className="card" key={ride.id}>
                  <div className="ride-details">
                    <h3>{ride.leavingFrom} to {ride.goingTo}</h3>
                    <p>Date: {ride.date}</p>
                    <p>Driver: {ride.drivername}</p>
                    <button className="bookride" onClick={(e) => bookride(e, ride)}>Book Ride</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>{message}</p>
        )}
      </div>
    </div>



      /* <div className="rides-list">
        {rides.length > 0 ? (
          <div>
            <h2>Yeah Your Ride is Available</h2>
            <ul>
              {rides.map(ride => (
                <li className="getride" key={ride.id}>{ride.leavingFrom} to {ride.goingTo} <button className="bookride" onClick={(e) => bookride(e, ride)}>Book Ride</button></li>
                
              ))}
              
            </ul>
          </div>
        ) : (
          <p>{message}</p>
        )}
      </div>
    </div> */
  );
};

export default Search;


