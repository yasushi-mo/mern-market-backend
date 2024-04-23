import express, { urlencoded, json } from "express";
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/", (req, res) => {
  return res.status(200).json("Hello World");
});

// ITEM functions
// Create Item
app.post("/item/create", (req, res) => {
  console.log(req.body.title);
  return res.status(200).json("Goodbye");
});

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
