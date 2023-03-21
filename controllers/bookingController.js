var dbQuery = require('../db.config');

// Display list of all Booking Instances.
async function bookingList (req, res) {
  return await 
  dbQuery().query("SELECT * FROM bookings", function (error,results) {
      if (error) throw error;
      res.json(results);
    });
};

// Display detail page for a specific BookingInstance.
async function bookingDetails (req, res) {
  const { id } = req.params;
  const sql = `SELECT * FROM bookings WHERE bookingId = ${id}`;
  dbQuery().query(sql, (error, result) => {
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

  dbQuery().query(sql, error => {
    if (error) throw error;
    res.send('Booking deleted');
  });
};

module.exports = {
  bookingList,
  bookingDetails,
  deleteBooking
}