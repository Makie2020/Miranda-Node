const mongoose = require("mongoose");
const database = require('../db/db.config');
const bookingModel = require("../models/bookingModel");

// Display list of all Booking Instances.
async function bookingList (req, res, next){
  database();
  const bookings = await bookingModel.find()
    .exec()
    .catch((error) => next(error));
  try {
    if (bookings.length === 0) {
      return res.status(400).json({ result: "Error fetching bookings" });
    }
    res.status(200).json(data = bookings);
    mongoose.disconnect();
  } catch (error) {
    next(error);
  } 
};

// Display detail page for a specific BookingInstance.
async function bookingDetails (req, res, next){
  database();
  const booking = await bookingModel.findOne({id: req.params.id })
    .exec()
    .catch((error) => next(error));
  try {
    if (booking === null) {
      return res.status(400).json({ result: "Error fetching booking" });
    }
    res.status(200).json(data = booking);
    mongoose.disconnect();
  } catch (error) {
    next(error);
  }
};

// Handle BookingInstance delete on POST.
async function deleteBooking (req, res) {
  database();
  try{
    await bookingModel.findOneAndDelete({ id: req.params.bookingId })
    res.json({success: true});
    mongoose.disconnect();
  } catch(error) {
    console.log(error)
  }
};
// Handle create Booking on POST.
async function create_booking (req, res) {
  database();
  const newBooking = {
    bookingId: req.body.bookingId,
    full__name: req.body.full__name,
    image: req.body.image, 
    order_date: req.body.order_date,
    check_in: req.body.check_in,
    check_out: req.body.check_out, 
    special_request: req.body.special_request,
    room_type: req.body.room_type,
    room_number: req.body.room_number,
    status: req.body.status,
    price: req.body.price,
  };

  await Booking.create(newBooking).catch((error) => next(error));
  res.status(200).json({success: true});
  mongoose.disconnect();
};

async function booking_update (req, res) {
  database();
  const editBooking = {
    bookingId: req.body.bookingId,
    full__name: req.body.full__name,
    image: req.body.image, 
    order_date: req.body.order_date,
    check_in: req.body.check_in,
    check_out: req.body.check_out, 
    special_request: req.body.special_request,
    room_type: req.body.room_type,
    room_number: req.body.room_number,
    status: req.body.status,
    price: req.body.price,
  };

  const booking = await bookingModel.findOneAndUpdate({ id: req.params.bookingId }, editBooking).catch((error) => next(error));
  res.status(200).json({success: true, data: booking});
  mongoose.disconnect();
};

module.exports = {
  bookingList,
  bookingDetails,
  deleteBooking,
  booking_update,
  create_booking
}