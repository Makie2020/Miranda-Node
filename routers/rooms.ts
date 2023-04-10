var express = require('express');
var routerRooms = express.Router();
routerRooms.use(express.json());

const {
  roomList,
  roomDetails,
  create_room,
  delete_room,
  room_update
} = require('../controllers/roomController')

// GET ALL ROOMDATA
routerRooms.get('/', roomList);

//ROOM
routerRooms.get('/:id', roomDetails);

//CREATE NEW ROOM
routerRooms.post('/', create_room);

// UPDATE ROOM INFO
routerRooms.put('/:id', room_update);

// DELETE ROOM
routerRooms.delete('/:id', delete_room);

module.exports = routerRooms;
