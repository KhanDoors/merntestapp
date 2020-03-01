const mongoose = require("mongoose");

const mapLogEntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: String,
    image: String,
    latitude: {
      type: Number,
      required: true,
      min: -90,
      max: 90
    },
    longitude: {
      type: Number,
      required: true,
      min: -180,
      max: 180
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("MapLogEntry", mapLogEntrySchema);
