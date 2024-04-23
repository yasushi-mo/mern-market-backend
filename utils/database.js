const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect("");
    console.log("Success: Connected to MongoDB");
  } catch (err) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

module.exports = connectDB;
