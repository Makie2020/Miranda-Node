var express = require('express');
var routerBookings = express.Router();
routerBookings.use(express.json());

const  { 
  bookingList,
  bookingDetails,
  create_booking,
  booking_update,
  deleteBooking
} = require('../controllers/bookingController')

// BOOKINGS DATA
routerBookings.get('/', bookingList);

//BOOKING
routerBookings.get('/:id', bookingDetails);

//CREATE BOOKING
routerBookings.post('/', create_booking);

// UPDATE BOOKING INFO
routerBookings.put('/:id', booking_update);

//DELETE BOOKING
routerBookings.delete('/:id', deleteBooking);

module.exports = routerBookings;
