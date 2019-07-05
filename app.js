const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config({ path: "./.env" });

const app = express();

const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from the server!", app: "MERN Test" });
});

app.use(cors());
app.use(express.json());

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/users", usersRouter);
app.use("/exercises", exercisesRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App Running on Port ${port} ...`);
});
