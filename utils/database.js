const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("");
    console.log("Success: Connected to MongoDB");
  } catch (err) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

module.exports = connectDB;
