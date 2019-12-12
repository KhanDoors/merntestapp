const express = require("express");
const router = express.Router();

// Get All
router.get("/", (req, res) => {
  res.send("on exercise route");
});
// Get One
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});
// Create One
router.post("/", (req, res) => {
  console.log(res.body);
});
// Updating One
router.patch("/:id", (req, res) => {});
// Deleting One
router.delete("/:id", (req, res) => {});

module.exports = router;
