const Joi = require("joi");

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const createRoomSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
  image: Joi.string().required(),
  imageTwo: Joi.string().required(),
  imageThree:Joi.string().required(),
  imageFour:Joi.string().required(),
  imageFive:Joi.string().required(),
  room_type:Joi.string().required(),
  room_number: Joi.number().integer().required(),
  name: Joi.string().min(5).required(),
  discountPercentage: Joi.number().integer().min(1).required(),
  discount: Joi.string().min(1).required(),
  amenities:  Joi.string().min(3).required(),
  price: Joi.number().integer().required(),
  offer_price: Joi.number().integer().required(),
  status: Joi.string().min(5).required()
});

exports.validateCreateRoom = validator(createRoomSchema);

const createEditRoomSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
  image: Joi.string().required(),
  imageTwo: Joi.string().required(),
  imageThree:Joi.string().required(),
  imageFour:Joi.string().required(),
  imageFive:Joi.string().required(),
  room_type:Joi.string().required(),
  room_number: Joi.number().integer().required(),
  name: Joi.string().min(5).required(),
  discountPercentage: Joi.number().integer().min(1).required(),
  discount: Joi.string().min(1).required(),
  amenities:  Joi.string().min(3).required(),
  price: Joi.number().integer().required(),
  offer_price: Joi.number().integer().required(),
  status: Joi.string().min(5).required()
});

exports.validateEditRoom = validator(createEditRoomSchema);

const createEditBookingSchema = Joi.object({
  bookingId: Joi.number().integer().min(1).required(),
  full__name: Joi.string().required(),
  image: Joi.string().required(),
  order_date:  Joi.date().required(),
  check_in: Joi.date().required(),
  check_out: Joi.date().required(),
  special_request:Joi.string().required(),
  room_type:Joi.string().required(),
  room_number: Joi.number().integer().min(1).required(),
  status:Joi.string().required(),
  price: Joi.number().integer().min(1).required()
});

exports.validateEditBooking = validator(createEditBookingSchema);

const createBookingSchema = Joi.object({
  bookingId: Joi.number().integer().min(1).required(),
  full__name: Joi.string().required(),
  image: Joi.string().required(),
  order_date:  Joi.date().required(),
  check_in: Joi.date().required(),
  check_out: Joi.date().required(),
  special_request:Joi.string().required(),
  room_type:Joi.string().required(),
  room_number: Joi.number().integer().min(1).required(),
  status:Joi.string().required(),
  price: Joi.number().integer().min(1).required()
});

exports.validateCreateBooking = validator(createBookingSchema);