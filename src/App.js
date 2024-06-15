
// import './App.css';
// import Navbar from './Components/Navbar'
// import FullWidth from './Components/FullWidth'
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import Home from './Components/Home'
// import Login from './Components/Login'



// function App() {
//   return (
//     <BrowserRouter>
    
//     {/* <div className="App"> */}
//     <Navbar />
      
      
        
        
//         <FullWidth/>
//         <Home/>
//         <Routes>
          
//           <Route path="/login" element={<Login />} />
//           {/* Add more routes as needed */}
//         </Routes>
        
      
        
//     {/* </div> */}
//     </BrowserRouter>
    
//   );
// }

// export default App;

import './App.css';
import Navbar from './Components/navbar/navbar'

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import About from './Components/about/about'
import LetsWork from './Components/letswork/LetsWork'
import Services from './Components/ourservices/Services'
import Contact from './Components/contactus/Contact'
import Login from './Components/Login'
import Search from './Components/Search'
import PublishRide from './Components/PublishRide';
import SignUp from './Components/SignUp';
import LandingPage from './Components/pages/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        
       
        <Routes>
          
          <Route path="/" element={<LandingPage/>} />
          
          <Route path="/contactus" element={<Contact/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/publish" element ={<PublishRide/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
