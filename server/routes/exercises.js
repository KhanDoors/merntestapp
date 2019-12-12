const express = require("express");
const router = express.Router();
const Exercise = require("../models/exerciseModel");

// Get All
router.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get One
router.get("/:id", getExercise, (req, res) => {
  res.json(res.exercise);
});

// Create One
router.post("/", async (req, res) => {
  const exercise = new Exercise({
    username: req.body.username,
    description: req.body.description,
    duration: req.body.duration
  });
  try {
    const newExercise = await exercise.save();
    res.status(201).json(newExercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One
router.patch("/:id", getExercise, async (req, res) => {
  if (req.body.username != null) {
    res.exercise.username = req.body.username;
  }
  if (req.body.description != null) {
    res.exercise.description = req.body.description;
  }
  if (req.body.duration != null) {
    res.exercise.duration = req.body.duration;
  }
  try {
    const updatedExercise = await res.exercise.save();
    res.json(updatedExercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One
router.delete("/:id", getExercise, async (req, res) => {
  try {
    await res.exercise.remove();
    res.json({ message: "Deleted Exercise" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getExercise(req, res, next) {
  let exercise;
  try {
    exercise = await Exercise.findById(req.params.id);
    if (exercise == null) {
      return res.status(404).json({ message: "Cannot find User" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.exercise = exercise;
  next();
}

module.exports = router;
