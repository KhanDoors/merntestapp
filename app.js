const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from the server!", app: "MERN Test" });
});

app.post("/", (req, res) => {
  res.send(" post message test");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`App Running on Port ${PORT} ...`);
});
