const mongoose = require("mongoose");
const database = require('../db/db.config')
const contactModel = require("../models/userModel");

// Display list of all Contact Instances.
async function contact_list (req, res, next){
  database();
  const contacts = await contactModel.find()
    .exec()
    .catch((e) => next(e));
  try {
    if (contacts.length === 0) {
      return res.status(400).json({ result: "Error fetching contacts" });
    }
    res.status(200).json(data=contacts);
    mongoose.disconnect();
  } catch (error) {
    next(error);
  }
};

module.exports = {contact_list}