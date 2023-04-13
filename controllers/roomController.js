const database = require('../db/db.config')
const mongoose = require("mongoose");
const roomModel = require("../models/roomModel");

// Display list of allRoomInstances.
async function roomList (req, res, next){
  await database();
  const rooms = await roomModel.find()
  .exec()
  .catch((e) => next(e));

  try {
      res.status(200).json({data: rooms});
      await mongoose.disconnect();
  } catch (err) {
      next(err);
      res.status(500).send({message: err});
  }
};

// Display detail page for a specific RoomInstance.
async function roomDetails (req, res, next){
  database();
  const room = await roomModel.findOne({id: req.params.id })
    .exec()
    .catch((e) => next(e));

  try {
    if (room === null) {
      return res.status(400).json({ result: "Error fetching room" });
    }
    res.status(200).json({data: room});
    mongoose.disconnect();
  } catch (error) {
    next(error);
  }
};

// Handle RoomInstance create on POST.
async function create_room (req, res, next) {
  database ();
  const newRoom= {
    id: req.body.id,
    image: req.body.image,
    imageTwo: req.body.imageTwo,
    imageThree: req.body.imageThree,
    imageFour: req.body.imageFour,
    imageFive: req.body.imageFive,
    room_type: req.body.room_type,
    room_number: req.body.room_number,
    name: req.body.name, 
    discountPercentage: req.body.discountPercentage,
    discount: req.body.discount,
    amenities: req.body.amenities,
    price: req.body.price,
    offer_price: req.body.offer_price,
    status: req.body.status,
  };

  await roomModel.create(newRoom).catch((e) => next(e));

  res.status(200).json({success: true});
  mongoose.disconnect();
};

// Handle RoomInstance delete on POST.
async function delete_room (req, res, next) {
  database();
  const room = await roomModel.findOneAndDelete({id: req.params.id })
    .exec()
    .catch((e) => next(e));
  res.status(200).json({sucess: true, data: room});
};

// Display BookInstance update on PUT.
async function room_update (req, res) {
  database ();
  const editRoom= {
    id: req.body.id,
    iamge: req.body.image,
    imageTwo: req.body.imageTwo,
    imageThree: req.body.imageThree,
    imageFour: req.body.imageFour,
    imageFive: req.body.imageFive,
    room_type: req.body.room_type,
    room_number: req.body.room_number,
    name: req.body.name, 
    discountPercent: req.body.discountPercent,
    discount: req.body.discount,
    amenities: req.body.amenities,
    price: req.body.price,
    offer_price: req.body.offer_price,
    status: req.body.status,
  };

  const room = await roomModel.findOneAndUpdate({ id: req.params.id }, editRoom).catch((e) => next(e));

  res.status(200).json(data = room);
  mongoose.disconnect();
};

module.exports = {
  roomList,
  roomDetails,
  create_room,
  delete_room,
  room_update
}