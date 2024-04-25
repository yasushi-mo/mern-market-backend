const express = require("express");
const app = express();
const connectDB = require("./utils/database");
const { ItemModel } = require("./utils/schemaModels");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ITEM functions
// Create Item
app.post("/item/create", async (req, res) => {
  try {
    await connectDB();
    await ItemModel.create(req.body);
    return res.status(200).json({ message: "アイテム作成成功" });
  } catch (err) {
    return res.status(400).json({ message: "アイテム作成失敗" });
  }
});

// Read All Items
app.get("/", async (req, res) => {
  try {
    await connectDB();
    const allItems = await ItemModel.find();
    return res
      .status(200)
      .json({ message: "アイテム読み取り成功（オール）", allItems: allItems });
  } catch (err) {
    return res.status(400).json({ message: "アイテム読み取り失敗（オール）" });
  }
});
// Read single Item
// Update Item
// Delete Item

// USER functions
// Register User
// Login User

app.listen(5000, () => {
  console.log("Listening on localhost port 5000");
});
