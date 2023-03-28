const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
 });

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;