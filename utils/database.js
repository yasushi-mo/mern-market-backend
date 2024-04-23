import { connect } from "mongoose";
import { DB_CONNECTION_STRING } from "./constants";

const connectDB = () => {
  try {
    connect(DB_CONNECTION_STRING);
    console.log("Success: Connected to MongoDB");
  } catch (err) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

export default connectDB;
