const dotenve = require('dotenv');
dotenve.config({ path: '../.env' });
const mongooseDatabase = require("mongoose");

const database = async () => {
    try {
        await mongooseDatabase.connect(process.env.MONGO_URL);
        console.log(`Mongo db connected`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = database;