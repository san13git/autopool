// backend/models/Ride.js

const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  leavingFrom: {
        type: String,
        required: true
    },
    goingTo: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
  driver: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    ref: 'User',
    required: true
  },
  // origin: {
  //   type: String,
  //   required: true
  // },
  // destination: {
  //   type: String,
  //   required: true
  // },
  // departureTime: {
  //   type: String,
  //   required: true
  // },
  availableSeats: {
    type: Number,
    required: true
  },
  // Add more fields as needed

  
  
});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;
