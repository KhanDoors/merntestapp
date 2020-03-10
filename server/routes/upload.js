const app = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const router = app.Router();
const Upload = require("../models/uploadModel");

let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

// Upload Image
router.post("/", upload.single("image"), async (req, res) => {
  try {
    let file = new Upload({
      image: req.file.filename
    });
    if (!file) {
      return res.status(403).send("file not found");
    }
    let data = await file.save();

    res.send({
      message: "file uploaded",
      data: data
    });
  } catch (ex) {
    res.send(ex.message);
  }
});

router.get("/:id", async (req, res) => {
  var id = mongoose.Types.ObjectId(req.params.id);
  let Image = await Upload.findOne({ _id: id });
  if (!Image) {
    return res.status(404).send({ message: "not found Images" });
  }
  Image = Image.image;
  res.send({
    data: Image
  });
});

module.exports = router;
