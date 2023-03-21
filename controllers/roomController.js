var dbQuery = require('../db.config');

// Display list of allRoomInstances.
async function roomList (req, res) {
  return await 
  dbQuery().query("SELECT * FROM rooms", function (error,results) {
      if (error) throw error;
      res.json(results);
    });
};

// Display detail page for a specific RoomInstance.
async function roomDetails (req, res) {
  const { id } = req.params;
  const sql = `SELECT * FROM rooms WHERE id = ${id}`;
  dbQuery().query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('No result');
    }
  });
};

// Handle RoomInstance create on POST.
async function create_room (req, res) {
  const sql = 'INSERT INTO rooms SET ?';

  const roomObj = {
    image: req.body.image,
    room_number: req.body.room_number,
    room_type: req.body.room_type,
    name: req.body.name,
    amenities: req.body.amenities,
    price: req.body.price,
    offer_price: req.body.offer_price,
    status: req.body.status
  };

  dbQuery().query(sql, roomObj, error => {
    if (error) throw error;
    res.send('Room created!');
  });
};

// Handle RoomInstance delete on POST.
async function delete_room (req, res) {
  const { id } = req.params;
  const sql = `DELETE FROM rooms WHERE id= ${id}`;

  dbQuery().query(sql, error => {
    if (error) throw error;
    res.send('Room deleted');
  });
};

// Display BookInstance update on PUT.
async function room_update (req, res) {
  const { id } = req.params;
  const { image, room_number, room_type, name, amenities, price, offer_price, status } = req.body;
  const sql = `UPDATE rooms SET image = '${image}', room_number='${room_number}', room_type = '${room_type}', name = '${name}', amenities = '${amenities}', price = '${price}', offer_price = '${offer_price}', status ='${status}' WHERE id =${id}`;

  dbQuery().query(sql, error => {
    if (error) throw error;
    res.send(`Room ${id} updated!`);
  });
};
module.exports = {
  roomList,
  roomDetails,
  create_room,
  delete_room,
  room_update
}