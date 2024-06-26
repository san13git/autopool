
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './PublishRide.css'


// function PublishRide() {
//   const navigate = useNavigate();
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [passengers, setPassengers] = useState('');

//   const handlePublishRide = () => {
//     // Logic for publishing the ride goes here
//     // For now, let's just log the selected options
//     console.log('Source:', source);
//     console.log('Destination:', destination);
//     console.log('Passengers:', passengers);
//   };

//   return (
//     <div className="search-container">
//       <h2>Publish a trip as a Driver</h2>
//       <br/>
//       <div className="card">
//         <label htmlFor="source">Source:</label>
//         <input
//           type="text"
//           id="source"
//           value={source}
//           onChange={(e) => setSource(e.target.value)}
//         />
//       </div>
//       <div className="card">
//         <label htmlFor="destination">Destination:</label>
//         <input
//           type="text"
//           id="destination"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//         />
//       </div>
//       <div className="card">
//         <label htmlFor="passengers">Number of Passengers:</label>
//         <input
//           type="number"
//           id="passengers"
//           value={passengers}
//           onChange={(e) => setPassengers(e.target.value)}
//         />
//       </div>
//       <button onClick={handlePublishRide}>Publish a ride</button>
//     </div>
//   );
// }

// export default PublishRide;


// PublishRide.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PublishRide.css'; 
import axios from 'axios'


function PublishRide() {
  const navigate = useNavigate();
  const [leavingFrom, setSource] = useState('');
  const [goingTo, setDestination] = useState('');
  const [availableSeats, setPassengers] = useState('');
  const [date,setDate]=useState('');
  const [drivername,setdname]=useState('')
  const [saveDetails, setSaveDetails] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleSourceChange = (e) => {   //axios
    setSource(e.target.value);
  };
  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };
  const handlePassengerChange = (e) => {
    setPassengers(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handledname=(e)=>{
    setdname(e.target.value);

  }

  const handleSubmit = async (e) => {
    

    e.preventDefault();
   
    try {
      const response = await axios.post('http://localhost:3000/api/v1/rides/add', {
        leavingFrom,
        goingTo,
        availableSeats,
        date,
        drivername
      });
      setSuccessMessage(response.data.message);
      alert('Succesfully registered')
      navigate('/ride-confirmation', { state: { rideDetails: { drivername, leavingFrom, goingTo, availableSeats, date } } });
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.message || 'An error occurred');
      setSuccessMessage('');
    }
  };

  return (
    <div className="main-div" style={{ backgroundImage: `url('https://www.shutterstock.com/image-vector/delhi-auto-rickshaw-600nw-1043266300.jpg')`, backgroundSize: '50%', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' ,margin: 0,
    padding: 0}}>
    
    <div className="search-cons"> 
      <h2 className="des">Publish a trip as a Driver</h2>
      <br/>
      <form onSubmit={handleSubmit} />


      <div className="card1" onChange={handledname}> 
        <label htmlFor="drivername">Driver Name</label>
        <input
          type="text"
          id="drivername"
          value={drivername}
          onChange={(e) => setdname(e.target.value)}
          className="publish-input" 
        />
        </div>
      <div className="card1" onChange={handleSourceChange}> 
        <label htmlFor="source">Source:</label>
        <input
          type="text"
          id="source"
          value={leavingFrom}
          onChange={(e) => setSource(e.target.value)}
          className="publish-input" 
        />
      </div>
      <div className="card1"> 
        <label htmlFor="destination" onChange={handleDestinationChange}>Destination:</label>
        <input
          type="text"
          id="destination"
          value={goingTo}
          onChange={(e) => setDestination(e.target.value)}
          className="publish-input" 
        />
        </div>

<div className="card1" onChange={handleDateChange}> 
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="dateshow"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="publish-input" 
        />
      </div>
      <div className="card1" onChange={handlePassengerChange}> 
        <label htmlFor="passengers">Number of Passengers:</label>
        <input
          type="number"
          id="passengers"
          value={availableSeats}
          onChange={(e) => setPassengers(e.target.value)}
          className="publish-input" 
        />
      </div>
      
      <button onClick={handleSubmit} className="publish-button">Publish a ride</button> 
       
    </div>
   
    </div>
  );
}

export default PublishRide;

