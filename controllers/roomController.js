const roomData = require('../DummyData/roomData')

// Display list of allRoomInstances.
async function roomList (req, res) {
  return res.json({bookings: roomData})
};

// Display detail page for a specific RoomInstance.
async function roomDetails (req, res) {
  return res.json({room: roomData.find(room=> room.id === req.params.id)})
};

// Handle RoomInstance create on POST.
async function create_room (req, res) {
  return res.json({success: true, room: req.body})
};

// Handle RoomInstance delete on POST.
async function delete_room (req, res) {
  return res.json({success: true})
};

// Display BookInstance update on PUT.
async function room_update (req, res) {
  return res.json({success: true})
};
module.exports = {
  roomList,
  roomDetails,
  create_room,
  delete_room,
  room_update
}