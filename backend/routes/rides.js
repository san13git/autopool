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
// const moment=require('moment')
const moment = require('moment-timezone');

function isValidDate(dateString) {
    return moment(dateString, 'YYYY-MM-DD', true).isValid();
  }
  

// Add a new ride
router.post('/add', async (req, res) => {   //  /add is the endpoint
    const { leavingFrom, goingTo, date, availableSeats,drivername} = req.body;
    const newRide = new Ride({
        leavingFrom,
        goingTo,
        date,
        availableSeats,
        drivername
        
    });
    

    try {
        const savedRide = await newRide.save();
        res.status(201).json(savedRide);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Search for rides
// function isValidDate(dateString) {
// //     const format1='YYYY-MM-DD'
// //    return moment(dateString).format(format1);
//     return moment(dateString, 'YYYY-MM-DD', true).isValid();
//   }

router.get('/search', async (req, res) => {
    const { leavingFrom, goingTo, date } = req.query;
    
    //   console.log(`Received date: ${date}`);
      
    //   if (date && !isValidDate(date)) {
    //     return res.status(400).send({ error: 'Invalid date format' });
    // }

    // const searchDate = date ? moment(date, 'YYYY-MM-DD').startOf('day').toDate() : null;
    
    

    // console.log(`Parsed date: ${searchDate}`);


  
    try {
        const query = { leavingFrom, goingTo ,date};
        // console.log(searchDate);
        // if (searchDate) {
        //     query.date = { $eq: searchDate };
            
        // }

        const rides = await Ride.find(query);
        res.status(200).json(rides);
        
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;

