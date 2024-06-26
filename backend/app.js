// backend/app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {MONGO_URI}=require('./utils/constants')
const userRoutes = require('./routes/userRoutes')
const moment = require('moment')


require('dotenv').config();

const app = express();

// Middleware

app.use(express.json());
app.use(cors('*'));
app.use(express.urlencoded({ extended: true }));

// backend/app.js

// Import routes
const ridesRoutes = require('./routes/rides');



// Use routes
app.use('/api/v1/rides', ridesRoutes);
app.use('/api/v1/userroute',userRoutes);  //new   //to test request first see from app.js then from the route

app.post('/api/v1/userroute/register', async (req, res) => { //route
  const { name, email, password, contactnumber } = req.body;

  try {
    const newUser = new User({ name, email, password, contactnumber });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists kindly login' });
    }

    
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/v1/userroute/login', async (req, res) => {
  const { email, password } = req.query;

  try {
    const user = await User.findByCredentials(email, password);
    const token = user.generateAuthToken();
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(400).json({ message: 'Invalid credentials' });
  }
});




// Connect to MongoDB

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Error connecting to MongoDB:', err));

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch(err => console.error(err));

// Routes
// Define your routes here

// Start the server


