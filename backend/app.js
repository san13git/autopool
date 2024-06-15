// backend/app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {MONGO_URI}=require('./utils/constants')
const userRoutes = require('./routes/userRoutes')


require('dotenv').config();

const app = express();

// Middleware

app.use(express.json());
app.use(cors());

// backend/app.js

// Import routes
const ridesRoutes = require('./routes/rides');



// Use routes
app.use('/api/v1/rides', ridesRoutes);
app.use('/api/v1/userroute',userRoutes)  //new   //to test request first see from app.js then from the route





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


