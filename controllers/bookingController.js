var dbQuery = require('../db/db.config');
const { validateCreateBooking , validateEditBooking} = require("../db/validationJoi");

// Display list of all Booking Instances.
async function bookingList (req, res) {
  return await 
  dbQuery("SELECT * FROM bookings", function (error,results) {
      if (error) throw error;
      res.json(results);
    });
};


// Display detail page for a specific BookingInstance.
async function bookingDetails (req, res)  {
  const { id } = req.params;
  const sql = `SELECT * FROM bookings WHERE bookingId = ${id}`;
  dbQuery(sql, function (error, result) {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('No result');
    }
  });
};

// Handle BookingInstance delete on POST.
async function deleteBooking (req, res) {
  const { id } = req.params;
  const sql = `DELETE FROM bookings WHERE bookingId= ${id}`;

  dbQuery(sql, function(error) {
    if (error) throw error;
    res.send('Booking deleted');
  });
};

// Handle create Booking on POST.
async function create_booking (req, res) {
  const { bookingId, full__name, image, order_date, check_in, check_out, special_request, room_type, room_number, price, status } = validateCreateBooking(req.body);
  const sql = 
  `INSERT INTO bookings SET 
    bookingId = '${bookingId}',
    full__name = '${full__name}', 
    image = '${image}', 
    order_date = '${order_date}', 
    check_in = '${check_in}', 
    check_out = '${check_out}', 
    special_request='${special_request}', 
    room_type = '${room_type}', 
    room_number = '${room_number}', 
    price = '${price}',  
    status ='${status}'`; 

  dbQuery(sql, function(error) {
    if (error) throw error;
    res.send(`Booking ${id} created!`);
  });;
};

async function booking_update (req, res) {
  const { id } = req.params;
  const { bookingId, full__name, image, order_date, check_in, check_out, special_request, room_type, room_number, price, status } = validateEditBooking(req.body);  
  const sql = 
  `UPDATE rooms SET 
  bookingId = '${bookingId}',
  full__name = '${full__name}', 
  image = '${image}', 
  order_date = '${order_date}', 
  check_in = '${check_in}', 
  check_out = '${check_out}', 
  special_request='${special_request}', 
  room_type = '${room_type}', 
  room_number = '${room_number}', 
  price = '${price}',  
  status ='${status}',
  WHERE id =${id}`;

  dbQuery(sql, function(error) {
    if (error) throw error;
    res.send(`Booking ${id} updated!`);
  });
};

module.exports = {
  bookingList,
  bookingDetails,
  deleteBooking,
  booking_update,
  create_booking
}