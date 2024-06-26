import React from 'react'
import './navbar.css'
import {useState} from 'react'
import {Link} from 'react-scroll'

import {useNavigate} from 'react-router-dom'


function Navbar(){

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate=useNavigate();  //if we dont want text as link then use useNavigate
  // const [showLogin, setShowLogin] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  

  const handleSearchClick = () => {
    // Navigate to the search page
    navigate('/search');
  };
  const handlePublishRideClick = () => {
    // Navigate to the publish ride page
    navigate('/publish');
  };

  

  return (
    <div>
    <nav className="navbar">
      <div className="navbar-logo">
        <span>GetRide</span>
      </div>
      <div className="navbar-icons">


      <div className="navbar-icon" onClick={toggleDropdown}>
  <i className="fa-solid fa-user"></i>
  {dropdownVisible && (
    <div className="dropdown-menu">
    
      <button onClick={()=>navigate("/login")}>Log In</button>
      <br />
      <button onClick={()=>navigate("/signup")}>Sign up</button>
      {/* <Link to="/signup">Sign Up</Link> */}
    </div>
  )}
</div>
      
        
        
        <div className="navbar-icon">
        <i class="fa-solid fa-magnifying-glass"></i> 
          <span onClick={handleSearchClick}>Search</span>
        </div>
        
        <div className="navbar-icon">
        <i class="fa-solid fa-circle-plus"></i>
          <span onClick={handlePublishRideClick}> Publish a Ride</span>
        </div>
      </div>

      {/* {showLogin && <Login onClose={handleCloseLogin} />} */}
    </nav>


    {/* uss particular section m jane ke liye */}
    <nav className="second-navbar">
        <div className="second-navbar-links">
          <span onClick={() => navigate("/")}>Home</span>
           <span><Link to='about-section'>About</Link></span> 
          <span><Link to='services-container'>Our Services</Link></span>
          <span><Link to='lets-work-container'>Lets Work</Link></span>
          <span onClick={() => navigate("/contactus")}>Contact Us</span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar


