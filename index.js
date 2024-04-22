const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json("Hello World");
});

// ITEM functions
// Create Item
// Read All Items
// Read single Item
// Update Item
// Delete Item

// USER functions
// Register User
// Login User

app.listen(5000, () => {
  console.log("Listening on localhost port 5000");
});
