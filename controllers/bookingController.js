const database = require('../db/db.config')
const disconnect = require('../db/db.config')
const bookingModel = require("../models/bookingModel");

// Display list of all Booking Instances.
async function bookingList (req, res, next){
  await database();

  const bookings = await bookingModel.find()
    .exec()
    .catch((e) => next(e));

  try {
    if (bookings.length === 0) {
      return res.status(400).json({ result: "Error fetching bookings" });
    }
    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }

  await disconnect();
};

// Display detail page for a specific BookingInstance.
async function bookingDetails (req, res, next){
  await database();

  const booking = await bookingModel.findOne({ _id: req.params.bookingId })
    .exec()
    .catch((e) => next(e));

  try {
    if (booking === null) {
      return res.status(400).json({ result: "Error fetching booking" });
    }
    res.status(200).json(booking);
  } catch (error) {
    next(error);
  }

  await disconnect();
};

// Handle BookingInstance delete on POST.
async function deleteBooking (req, res) {
  await connect();
  const booking = await bookingModel.findOneAndDelete({ _id: req.params.bookingId })
    .exec()
    .catch((e) => next(e));

  res.status(200).json({
    message: `booking ${bookingId} deleted successfully`,
    oldbooking: booking,
  });

  await disconnect();
};

// Handle create Booking on POST.
async function create_booking (req, res) {
  await database;
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

  await Booking.create(newBooking).catch((e) => next(e));

  res.status(200).json({
    message: "Booking created successfully",
  });

  await disconnect();
};

async function booking_update (req, res) {
  await database;
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

  const booking = await bookingModel.findOneAndUpdate({ _id: req.params.bookingId }, editBooking).catch((e) => next(e));

  res.status(200).json({
    message: `Booking ${bookingId} edited successfully`,
    oldbooking: booking,
    newbooking: req.body.booking,
  });

  await disconnect();
};

module.exports = {
  bookingList,
  bookingDetails,
  deleteBooking,
  booking_update,
  create_booking
}