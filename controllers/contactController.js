const database = require('../db/db.config')
const disconnect = require('../db/db.config')
const contactModel = require("../models/userModel");

// Display list of all Contact Instances.
async function contact_list (req, res, next){
  await database();

  const contacts = await contactModel.find()
    .exec()
    .catch((e) => next(e));

  try {
    if (contacts.length === 0) {
      return res.status(400).json({ result: "Error fetching contacts" });
    }
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }

  await disconnect();
};

module.exports = {contact_list}