const mongoose = require("mongoose");
const database = require('../db/db.config')
const contactModel = require("../models/userModel");

// Display list of all Contact Instances.
async function contact_list (req, res, next){
  await database();
  const contacts = await contactModel.find()
  .exec()
  .catch((e) => next(e));

  try {
      res.status(200).json({data: contacts});
      await mongoose.disconnect();
  } catch (err) {
      next(err);
      res.status(500).send({message: err});
  }
};

module.exports = {contact_list}