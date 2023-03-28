const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageTwo: {
    type: String,
    required: true,
  },
  imageThree: {
    type: String,
    required: true,
  },
  imageFour: {
    type: String,
    required: true,
  },
  imageFive: {
    type: String,
    required: true,
  },
  room_type: {
    type: String,
    required: true,
  },
  room_number: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  amenities: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  offer_price: {
    type: Number,
  },
  status: {
    type: String,
    required: true,
  },
});

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;