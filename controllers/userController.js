const database = require('../db/db.config')
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

// Display list of allUserInstances.
async function usersList (req, res, next){
  await database();
  const users = await userModel.find()
  .exec()
  .catch((e) => next(e));

  try {
      res.status(200).json({data: users});
      await mongoose.disconnect();
  } catch (err) {
      next(err);
      res.status(500).send({message: err});
  }
};

// Handle userInstance create on POST.
async function create_user (req, res) {  
  await database();
  const hashedPassword = await bcrypt
  .hash(req.body.password, 10)
  .then((result) => result);

  const newUser = {
    id: req.body.id,
    photo: req.body.photo,
    full_name: req.body.full_name,
    email: req.body.email,
    position: req.body.position,
    start_date: req.body.start_date,
    description: req.body.description,
    phone_number: req.body.phone_number,
    status: req.body.status,
    password: hashedPassword
  };

  await userModel.create(newUser).catch((e) => console.log(e));
  res.status(200).json({success: true, user: newUser});
  await mongoose.disconnect();
};

module.exports = {
  usersList,
  create_user,
}