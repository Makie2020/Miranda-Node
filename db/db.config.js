const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const mongoose = require("mongoose");

const database = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongo db connected`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = database;