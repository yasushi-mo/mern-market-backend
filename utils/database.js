const mongoose = require("mongoose");
const { DB_CONNECTION_STRING } = require("./constants");

const connectDB = () => {
  try {
    mongoose.connect(DB_CONNECTION_STRING);
    console.log("Success: Connected to MongoDB");
  } catch (err) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

module.exports = connectDB;
