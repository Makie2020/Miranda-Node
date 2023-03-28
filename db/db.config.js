const mongoose = require("mongoose");
require('dotenv').config()

const database = module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  try {
    mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.fa71bil.mongodb.net/?retryWrites=true&w=majority`), connectionParams;
    console.log('Database succesfully connected')
  } catch (error) {
    console.log(error);
  }
}
database()

async function disconnect() {
  await mongoose.disconnect();
}
exports.module = {disconnect};