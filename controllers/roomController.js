const database = require('../db/db.config')
const disconnect = require('../db/db.config')
const roomModel = require("../models/roomModel");

// Display list of allRoomInstances.
async function roomList (req, res, next){
  await database();

  const rooms = await roomModel.find()
    .exec()
    .catch((e) => next(e));

  try {
    if (rooms.length === 0) {
      return res.status(400).json({ result: "Error fetching rooms" });
    }
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }

  await disconnect();
};

// Display detail page for a specific RoomInstance.

async function roomDetails (req, res, next){
  await database();

  const room = await roomModel.findOne({ _id: req.params.id })
    .exec()
    .catch((e) => next(e));

  try {
    if (room === null) {
      return res.status(400).json({ result: "Error fetching room" });
    }
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }

  await disconnect();
};

// Handle RoomInstance create on POST.
async function create_room (req, res) {
  await database;
  const newRoom= {
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

  await Room.create(newRoom).catch((e) => next(e));

  res.status(200).json({
    message: "Room created successfully",
  });

  await disconnect();
};

// Handle RoomInstance delete on POST.
async function delete_room (req, res) {
  await connect();
  const room = await roomModel.findOneAndDelete({ _id: req.params.id })
    .exec()
    .catch((e) => next(e));

  res.status(200).json({
    message: `Room ${id} deleted successfully`,
    oldroom: room,
  });

  await disconnect();
};

// Display BookInstance update on PUT.
async function room_update (req, res) {
  await database;
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

  const room = await roomModel.findOneAndUpdate({ _id: req.params.id }, editRoom).catch((e) => next(e));

  res.status(200).json({
    message: `Room ${name} edited successfully`,
    oldroom: room,
    newroom: req.body.room,
  });

  await disconnect();
};

module.exports = {
  roomList,
  roomDetails,
  create_room,
  delete_room,
  room_update
}