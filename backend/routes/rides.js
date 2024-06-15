// backend/routes/rides.js

// const express = require('express');
// const router = express.Router();
// const rideController = require('../controllers/rideController');


// // Route for creating a new ride
// router.post('/abc', rideController.createRide);

// // Define routes here
// router.get('/search', rideController.searchRides);

// module.exports = router;



const express = require('express');
const router = express.Router();
const Ride = require('../models/Ride');

// Add a new ride
router.post('/add', async (req, res) => {   //  /add is the endpoint
    const { leavingFrom, goingTo, date, availableSeats, driver } = req.body;
    const newRide = new Ride({
        leavingFrom,
        goingTo,
        date,
        availableSeats,
        driver
    });

    try {
        const savedRide = await newRide.save();
        res.status(201).json(savedRide);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Search for rides
router.get('/search', async (req, res) => {
    const { leavingFrom, goingTo, date } = req.body;

    try {
        const rides = await Ride.find({ 
            leavingFrom, 
            goingTo, 
            date: new Date(date) 
        });
        res.status(200).json(rides);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;

