var dbQuery = require('../db/db.config');
const Joi = require("joi");
const { validateCreateRoom , validateEditRoom} = require("../db/validationJoi");

// Display list of allRoomInstances.
async function roomList (req, res) {
  return await 
  dbQuery("SELECT * FROM rooms", function (error,results) {
      if (error) throw error;
      res.json(results);
    });
};

// Display detail page for a specific RoomInstance.
async function roomDetails (req, res) {
  const { id } = req.params;
  const sql = `SELECT * FROM rooms WHERE id = ${id}`;
  dbQuery(sql, function (error, result) {
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
  const { id, image, imageTwo, imageThree, imageFour, imageFive, room_type, room_number, name, discountPercentage, discount, amenities, price, offer_price, status } = validateCreateRoom(req.body);
  const sql = 
  `INSERT INTO rooms SET 
    id = '${id}',
    image = '${image}', 
    imageTwo = '${imageTwo}', 
    imageThree = '${imageThree}', 
    imageFour = '${imageFour}', 
    imageFive = '${imageFive}', 
    room_number='${room_number}', 
    room_type = '${room_type}', 
    name = '${name}',
    discountPercentage = '${discountPercentage}',
    discount = '${discount}', 
    amenities = '${amenities}', 
    price = '${price}', 
    offer_price = '${offer_price}', 
    status ='${status}'`; 

  dbQuery(sql, function(error) {
    if (error) throw error;
    res.send(`Room ${id} created!`);
  });;
};

// Handle RoomInstance delete on POST.
async function delete_room (req, res) {
  const { id } = req.params;
  const sql = `DELETE FROM rooms WHERE id= ${id}`;

  dbQuery(sql, function (error) {
    if (error) throw error;
    res.send(`Room ${id} deleted`);
  });
};

// Display BookInstance update on PUT.
async function room_update (req, res) {
  const { id } = req.params;
  const { image, imageTwo, imageThree, imageFour, imageFive, room_type,room_number, name, discountPercentage, discount, amenities, price, offer_price, status } = validateEditRoom(req.body);
  const sql = 
  `UPDATE rooms SET 
    image = '${image}', 
    imageTwo = '${imageTwo}', 
    imageThree = '${imageThree}', 
    imageFour = '${imageFour}', 
    imageFive = '${imageFive}', 
    room_number='${room_number}', 
    room_type = '${room_type}', 
    name = '${name}',
    discountPercentage = '${discountPercentage}',
    discount = '${discount}',
    amenities = '${amenities}', 
    price = '${price}', 
    offer_price = '${offer_price}', 
    status ='${status}'
    WHERE id =${id}`;

  dbQuery(sql, function(error) {
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