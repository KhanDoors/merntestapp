const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Get All
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get One
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// Create One
router.post("/", async (req, res) => {
  const username = new User({
    username: req.body.username
  });
  try {
    const newUser = await username.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One
router.patch("/:id", (req, res) => {});

// Deleting One
router.delete("/:id", (req, res) => {});

module.exports = router;
