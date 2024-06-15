
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

function PublishRide() {
  const navigate = useNavigate();
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [passengers, setPassengers] = useState('');

  const handlePublishRide = () => {
    // Logic for publishing the ride goes here
    // For now, let's just log the selected options
    console.log('Source:', source);
    console.log('Destination:', destination);
    console.log('Passengers:', passengers);
  };

  return (
    <div className="main-div" style={{ backgroundImage: `url('https://www.shutterstock.com/image-vector/delhi-auto-rickshaw-600nw-1043266300.jpg')`, backgroundSize: '50%', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' ,margin: 0,
    padding: 0}}>
    <div className="search-cons"> 
      <h2 className="des">Publish a trip as a Driver</h2>
      <br/>
     
      <div className="card"> 
        <label htmlFor="source">Source:</label>
        <input
          type="text"
          id="source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="publish-input" 
        />
      </div>
      <div className="card"> 
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="publish-input" 
        />
      </div>
      <div className="card"> 
        <label htmlFor="passengers">Number of Passengers:</label>
        <input
          type="number"
          id="passengers"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          className="publish-input" 
        />
      </div>
      <button onClick={handlePublishRide} className="publish-button">Publish a ride</button> 
    </div>
    </div>
  );
}

export default PublishRide;

