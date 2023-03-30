const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  full__name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  order_date: {
    type: Date,
    required: true,
  },
  check_in: {
    type: Date,
    required: true,
  },
  check_out: {
    type: Date,
    required: true,
  },
  special_request: {
    type: String,
  },
  room_type: {
    type: String,
    required: true,
  },
  room_number: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;