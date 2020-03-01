const express = require("express");
const router = express.Router();
const MapLogEntry = require("../models/mapLogEntryModel");

// Get All
router.get("/", async (req, res) => {
  try {
    const maplogentry = await MapLogEntry.find();
    res.json(maplogentry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create One
router.post("/", async (req, res) => {
  const maplogentry = new MapLogEntry(req.body);
  try {
    const newMapLogEntry = await maplogentry.save();
    res.status(201).json(newMapLogEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One
// router.delete("/:id", getExercise, async (req, res) => {
//   try {
//     await res.exercise.remove();
//     res.json({ message: "Deleted Exercise" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// async function getExercise(req, res, next) {
//   let exercise;
//   try {
//     exercise = await Exercise.findById(req.params.id);
//     if (exercise == null) {
//       return res.status(404).json({ message: "Cannot find User" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
//   res.exercise = exercise;
//   next();
// }

module.exports = router;
