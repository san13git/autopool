// backend/controllers/userController.js

// const User = require('../models/User');

// // Controller for user registration
// exports.registerUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Create new user
//     const newUser = new User({ email, password });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// exports.loginUser = async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       const user = await User.findByCredentials(email, password);
//       const token = user.generateAuthToken();
//       res.status(200).json({ token });
//     } catch (error) {
//       console.error('Error logging in user:', error);
//       res.status(400).json({ message: 'Invalid credentials' });
//     }
//   };

const User = require('../models/User');

// Controller for user registration
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, contactnumber } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ name, email, password, contactnumber });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    const token = user.generateAuthToken();
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(400).json({ message: 'Invalid credentials' });
  }
};
