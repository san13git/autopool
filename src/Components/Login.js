// Login.js
// import React, { useState } from 'react';
// import './Login.css'

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogin = () => {
//     // Here you can add your login logic
//     // For simplicity, let's just check if both username and password are not empty
//     if (username && password) {
//       setLoggedIn(true);
//     }
//   };

//   const handleLogout = () => {
//     setLoggedIn(false);
//     setUsername('');
//     setPassword('');
//   };

//   if (loggedIn) {
//     return (
//       <div>
//         <h2>Welcome, {username}!</h2>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>Tell us your Email and Password</h2>
//       <input
//         type="text"
//         placeholder="Email"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <h5>Remember me </h5>
//       <br/>
//       <h5>Forgot Password</h5>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Login;


// Login.js
// import React, { useState } from 'react';
// import './LoginBackground.css'
// import './Login.css'; 
// import axios from 'axios'


// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogin = () => {
//     // Here you can add your login logic
//     // For simplicity, let's just check if both username and password are not empty
//     if (username && password) {
//       setLoggedIn(true);
//     }
//   };

//   const handleLogout = () => {
//     setLoggedIn(false);
//     setUsername('');
//     setPassword('');
//   };

//   if (loggedIn) {
//     return (
//       <div>
//         <h2>Welcome, {username}!</h2>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     );
//   }

//   return (
//     <div className="main-div" style={{paddingTop: '30px',height: 'calc(100vh - 60px)', backgroundImage: `url('https://www.webfx.com/wp-content/uploads/2021/10/DI_blurred_backgrounds-002-1-scaled.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' ,margin: 0,
//     padding: 0}}>
//     <div className="bablu">
//     <div className="login-container"> 
//       <h2>Tell us your Email and Password</h2>
//       <input
//         type="text"
//         placeholder="Email"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         className="login-input" 
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="login-input" 
//       />
//       <div className="login-links"> 
        
//         <h5>Forgot Password</h5>
//       </div>
//       <button onClick={handleLogin} className="login-button">Login</button> 
//     </div>
//     </div>
//     </div>
//   );
// }

// export default Login;




import React, { useState } from 'react';
import './LoginBackground.css';
import './Login.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/api/v1/userroute/login`, {
        
          email: username,
          password: password,
      
      });
      setToken(response.data.token);
      setLoggedIn(true);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Not Found! Pls Sign Up First');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    setToken('');
  };

  if (loggedIn) {
    return (
      <div>
        <h2>Welcome, {username}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  

  return (
    <div className="main-div" style={{
      paddingTop: '30px',
      height: 'calc(100vh - 60px)',
      backgroundImage: `url('https://www.webfx.com/wp-content/uploads/2021/10/DI_blurred_backgrounds-002-1-scaled.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      margin: 0,
      padding: 0
    }}>
      <div className="bablu">
        <div className="login-container">
          <h2>Tell us your Email and Password</h2>
          <input
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="login-links">
            <h5>Forgot Password</h5>
          </div>
          <button onClick={handleLogin} className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
