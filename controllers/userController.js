const database = require('../db/db.config')
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

// Display list of allUserInstances.
async function usersList (req, res, next){
  database();
  const users = await userModel.find()
    .exec()
    .catch((e) => next(e));

  try {
    if (users.length === 0) {
      return res.status(400).json({ result: "Error fetching users" });
    }
    res.status(200).json(data = users);
    mongoose.disconnect();
  } catch (error) {
    next(error);
  }
};
// Handle userInstance create on POST.
async function create_user (req, res) {  
  database();
  const hashedPassword = await bcrypt
  .hash(req.body.pass, 10)
  .then((result) => result);

  const newUser = {
    id: req.body.id,
    photo: req.body.photo,
    full_name: req.body.full_name,
    email: req.body.email,
    start_date: req.body.start_date,
    description: req.body.description,
    phone_number: req.body.phone_number,
    status: req.body.status,
    password: hashedPassword
  };

  await User.create(newUser).catch((e) => next(e));
  res.status(200).json({success: true});
  mongoose.disconnect();
};

module.exports = {
  usersList,
  create_user,
}