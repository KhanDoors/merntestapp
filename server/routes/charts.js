const express = require("express");
const router = express.Router();
const Chart = require("../models/chartModel");

// Get All
router.get("/", async (req, res) => {
  try {
    const charts = await Chart.find();
    res.json(charts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create One
router.post("/", async (req, res) => {
  const charts = new Chart(req.body);
  try {
    const newChart = await charts.save();
    res.status(201).json(newChart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get One
router.get("/:id", getChart, (req, res) => {
  res.json(res.chart);
});

// Updating One
router.patch("/:id", getChart, async (req, res) => {
  if (req.body.title != null) {
    res.chart.title = req.body.title;
  }
  if (req.body.description != null) {
    res.chart.description = req.body.description;
  }
  if (req.body.labels != null) {
    res.chart.labels = req.body.labels;
  }
  if (req.body.colors != null) {
    res.chart.colors = req.body.colors;
  }
  if (req.body.numbers != null) {
    res.chart.numbers = req.body.numbers;
  }
  try {
    const updatedChart = await res.chart.save();
    res.json(updatedChart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One
router.delete("/:id", getChart, async (req, res) => {
  try {
    await res.chart.remove();
    res.json({ message: "Deleted Chart" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getChart(req, res, next) {
  let chart;
  try {
    chart = await Chart.findById(req.params.id);
    if (chart == null) {
      return res.status(404).json({ message: "Cannot find Chart" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.chart = chart;
  next();
}

module.exports = router;
