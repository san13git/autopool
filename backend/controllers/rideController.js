// backend/controllers/rideController.js

const Ride = require('../models/Ride');
const { isValid, parseISO } = require('date-fns');

// Controller for creating a new ride
exports.createRide = async (req, res) => {
  try {
    const { driver, origin, destination, departureTime, availableSeats } = req.body;
    const newRide = new Ride({ driver, origin, destination, departureTime, availableSeats });
    await newRide.save();
    res.status(201).json(newRide);
  } catch (error) {
    console.error('Error creating ride:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Add more controller methods as needed


// const Ride = require('../models/Ride');

// Controller for searching rides


exports.searchRides = async (req, res) => {
  try {
    // Extract search parameters from the query string
    const { leavingFrom, goingTo, date } = req.query;

    // Build the query object based on the provided criteria
    const query = {};
    if (leavingFrom) query.leavingFrom = leavingFrom;
    if (goingTo) query.goingTo = goingTo;
    if(date) query.date=date;
    // if (date) {
    //   const parsedDate = parseISO(date);
    //   if (!isValid(parsedDate)) {
    //     return res.status(400).json({ error: 'Invalid date format' });
    //   }
    //   query.date = parsedDate;
      
      
    // }

    // Find rides that match the query criteria
    const rides = await Ride.find(query);

    res.status(200).json(rides);
  } catch (error) {
    console.error('Error searching rides:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
