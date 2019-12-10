const express = require("express");
const router = express.Router();

// Get All
router.get("/", (req, res) => {});
// Get One
router.get("/:id", (req, res) => {});
// Create One
router.post("/", (req, res) => {});
// Updating One
router.patch("/:id", (req, res) => {});
// Deleting One
router.delete("/:id", (req, res) => {});

module.exports = router;
