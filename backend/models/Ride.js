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
        type: String,
        
        required: true
    },
  // driver: {
  //   // type: mongoose.Schema.Types.ObjectId,
  //   type: String,
  //   ref: 'User',
  //   required: true
  // },

  
  availableSeats: {
    type: Number,
    required: true
  },
  drivername:{
    type:String,
    required:true
  }
  

  
  
});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;
