import React from 'react'
import './Home.css'
import rickcheck from '../../assets/rickcheck.png'

const Home = () => {
  return (
    <div className="home">
    <div className="full-width-image">
    {/* <img src="https://cdn.dribbble.com/users/1845565/screenshots/6414076/000.gif" alt="Full Width Image" /> */}
    {/* <img src={rickcheck} /> */}
    <img src="https://cdn.dribbble.com/users/1845565/screenshots/6414076/000.gif"/>
    </div>
     
      {/* <div className="search-container">
        <div className="search-form">
          <input type="text" placeholder="Leaving from" />
          <input type="text" placeholder="Going to" />
          <input type="date" placeholder="Select date" />
          <button>Search</button>
        </div>
      </div>
      <div className="info-container">

      <div className="info-block">
        <h2>Rides at low prices</h2>
        <p>Experience unbeatable affordability with AutoPool through our website. Enjoy the convenience of shared rides at remarkably low prices, connecting you to your destination without breaking the bank. With our efficient pooling system, we bring you cost-effective transportation solutions tailored to your budget, making every journey economical and accessible</p>
        <img src ="https://img.icons8.com/?size=50&id=ckrjM2xjKegD&format=gif"></img>
      </div>
      <div className="info-block">
        <h2>Trust your travel mate</h2>
        <p>Trust your travel mate with our reliable AutoPool service. We prioritize safety and security, ensuring peace of mind as you journey with fellow passengers. With our trusted network of drivers and stringent safety measures, embark on every ride knowing you're in good hands, fostering a sense of community and companionship along the way.</p>
        <img src={location}></img>
      </div>
      <div className="info-block">
        <h2>Easy to book</h2>
        <p>Easily book your ride with AutoPool for seamless travel experiences. Our intuitive platform offers hassle-free booking, allowing you to schedule your journey in just a few clicks. With convenient options and real-time updates, getting to your destination has never been simpler, ensuring you're always on time and stress-free.</p>
        <img src={thunder}></img>
      </div>
      </div>
      {/* <div className="extra-block">
        <h2>Your safety is our priority</h2>
        <p>We are committed to ensuring the highest level of safety and well-being for our customers. Your trust and security are paramount to us.</p>
        <img className="img-1" src={scamimg}></img>
        
      </div> */}

      {/* <div className="extra-block">
      <img className="img-1" src={scamimg} alt="Safety Image" />
      <div className="text-content">
        <h2>Your safety is our priority</h2>
        <p>We are committed to ensuring the highest level of safety and well-being for our customers. Your trust and security are paramount to us.</p>
       
      </div> */} 
    {/* </div> */}
    

    </div>
    
  )
}

export default Home
