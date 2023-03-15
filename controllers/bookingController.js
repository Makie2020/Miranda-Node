const data = require('../DummyData/bookingData')

// Display list of all Booking Instances.
async function bookingList (req, res) {
 return res.json({bookings: data})
};

// Display detail page for a specific BookingInstance.
async function bookingDetails (req, res) {
  return res.json({booking: data.find(booking=> booking.id === req.params.id)})
};

// Handle BookingInstance delete on POST.
async function deleteBooking (req, res) {
  return res.json({success: true})
};

module.exports = {
  bookingList,
  bookingDetails,
  deleteBooking
}