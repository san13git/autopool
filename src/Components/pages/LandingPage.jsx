import React from 'react'
// import Navbar from '../navbar/navbar'
import About from '../about/about'
import Services from '../ourservices/Services'
import LetWork from '../letswork/LetsWork'
import Home from '../home/Home'
import Navbar from '../navbar/navbar'


const LandingPage = () => {
  return (
    <div>
    <Navbar/>
    <Home/>
    
    <About/>
    <Services/>
    <LetWork/>
      
    </div>
  )
}

export default LandingPage
