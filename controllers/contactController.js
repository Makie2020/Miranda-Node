const contactData = require('../DummyData/messageData')

// Display list of all Contact Instances.
exports.contact_list = (req, res) => {
  return res.json({contacts: contactData})
};