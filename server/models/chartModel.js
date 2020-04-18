const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  labels: [String],
  colors: [String],
  numbers: [Number],
});

module.exports = mongoose.model("Chart", chartSchema);
