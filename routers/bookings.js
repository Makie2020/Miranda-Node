var express = require('express');
var routerBookings = express.Router();
routerBookings.use(express.json());

const  { 
  bookingList,
  bookingDetails,
  deleteBooking
} = require('../controllers/bookingController')

// BOOKINGS DATA
routerBookings.get('/', bookingList);

//BOOKING
routerBookings.get('/:id', bookingDetails);

//DELETE BOOKING
routerBookings.delete('/:id', deleteBooking);

module.exports = routerBookings;
