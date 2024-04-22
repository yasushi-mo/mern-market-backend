const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json("Hello World");
});

app.listen(5000, () => {
  console.log("Listening on localhost port 5000");
});
