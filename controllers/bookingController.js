const mongoose = require("mongoose");
const database = require('../db/db.config');
const bookingModel = require("../models/bookingModel");

// Display list of all Booking Instances.
async function bookingList (req, res, next){
  await database();
  const bookings = await bookingModel.find()
    .exec()
    .catch((e) => next(e));

  try {
    await mongoose.disconnect();
    res.status(200).json({data: bookings});
  } catch (err) {
    next(err);
    res.status(500).send({message: err});
  }
};

// Display detail page for a specific BookingInstance.
async function bookingDetails (req, res, next){
  await database();
  const booking = await bookingModel.findOne({id: req.params.id })
    .exec()
  try {
    await mongoose.disconnect();
    if (booking === null) {
      res.status(400).json({ result: "Error fetching booking" });
    }
    res.status(200).json({data: booking});
  } catch (error) {
    console.log(error);
  }
};

// Handle BookingInstance delete on POST.
async function deleteBooking (req, res) {
  await database();
  try{
    await bookingModel.findOneAndDelete({ id: req.params.id })
    await mongoose.disconnect();
    res.json({success: true});
  } catch(error) {
    console.log(error)
  }
};
// Handle create Booking on POST.
async function create_booking (req, res) {
  await database();
  const newBooking = {
    id: req.body.id,
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

  await bookingModel.create(newBooking).catch((error) => next(error));
  await mongoose.disconnect();
  return res.status(200).json({success: true});
};

async function booking_update (req, res) {
  await database();
  const editBooking = {
    id: req.body.id,
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

  const booking = await bookingModel.findOneAndUpdate({ id: req.params.id }, editBooking);
  await mongoose.disconnect();
  return res.status(200).json({success: true, data: booking});
};

module.exports = {
  bookingList,
  bookingDetails,
  deleteBooking,
  booking_update,
  create_booking
}