# MERN Stack 2019

eeeeeeeeeeeeeeee
ES6, Mongo Atlas and React Hooks

## Node.JS (https://nodejs.org/en/)

NodeJS allows JavaScript to be written on the server as opposed to written in the browser.
Synchronous -> Blocking IO
Asynchronous -> Non-Blocking IO
Node.JS is a single thread synchronous process. Therefore we must use callbacks in order to achieve an asynchronous non-blocking process (not technically asynchronous but feels that way). This can lead to 'Callback Hell', identified by the flying 'V' formation, if not written properly. We use Promises and/or Async/Await to avoid 'Callback Hell'.

### NPM (https://www.npmjs.com/) Packages:

'npm Init' - to create package.json file.

'npm install' for regular dependencies (--save deprecated)

'npm i --save-dev or (-D)' for development dependencies

'npm i nodemon --global' (install globally, across your machine)

'npm uninstall nodemon' (deletes a package)

Common Packages:

     "dependencies":
     {

    "cors": "^2.8.5",
    "dotenv": "^8.0.0",
    "express": "^4.17.1",
    "mongoose": "^5.6.2"

     },
    "devDependencies": {
    "nodemon": "^2.0.1"

}

Requiring an NPM package in our app:

const express = require("express");

## Express (https://expressjs.com/)

Basic Server:

      const express = require("express");

      const app = express();

      app.get("/", (req, res) => {

      res.status(200).json({ message: "Hello from the server!", app: "MERN Test" });

      });

      app.post("/", (req, res) => {

      res.send(" post message test");

      });

      const port = process.env.PORT || 4000;

      app.listen(port, () => {

      console.log(`App Running on port ${PORT} ...`);

      });

### Express Middleware Stack

1.  Order matters they are executed in the order they are entered.

        app.use(cors());
        app.use(express.json())- (Body Parser)
        app.use("/users", usersRouter);
        app.use("/exercises", exercisesRouter);

## MongoDB (https://cloud.mongodb.com)

There is very little to do with the MongoDB:

1.  get connection string from MongoDB site and set in the dotenv file.

         MONGO_URI = 'connection string'

2.  Import the .env file to the app.js file.

        const uri = process.env.MONGO_URI;

Mongoose will take care of the rest of the MongoDB code.

## Mongoose (https://mongoosejs.com)

Connection:
get connection string from MongoDB site and set in the dotenv file.

     const uri = process.env.MONGO_URI;

Connection:

    mongoose
    .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
    })
    .then(() => console.log("Mongo Connected"))
    .catch(err => console.log(err));

Implementing CRUD functionality is a 3 step process with Mongoose / Express

1.  set Mongoose models for each collection
    i.e.

           const mongoose = require("mongoose");

        		const userSchema = new mongoose.Schema({
        		  username: {
        			type: String,
        			required: true,
        			unique: true,
        			trim: true,
        			minlength: 3
        		  }
        		});

        		module.exports = mongoose.model("User", userSchema);

2.  import Mongoose Models into Routes and make Express routes:

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
        router.get("/:id", getUser, (req, res) => {
        res.json(res.user);
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
        router.patch("/:id", getUser, async (req, res) => {
        if (req.body.username != null) {
        res.user.username = req.body.username;
        }
        try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
        } catch (err) {
        res.status(400).json({ message: err.message });
        }
        });

        // Deleting One
        router.delete("/:id", getUser, async (req, res) => {
        try {
        await res.user.remove();
        res.json({ message: "Deleted User" });
        } catch (err) {
        res.status(500).json({ message: err.message });
        }
        });

        async function getUser(req, res, next) {
        let user;
        try {
        user = await User.findById(req.params.id);
        if (user == null) {
        return res.status(404).json({ message: "Cannot find User" });
        }
        } catch (err) {
        return res.status(500).json({ message: err.message });
        }
        res.user = user;
        next();
        }

        module.exports = router;

3)  Require and use routes in the server.js:


        const exercisesRouter = require("./routes/exercises");
        const usersRouter = require("./routes/users");

        app.use("/users", usersRouter);
        app.use("/exercises", exercisesRouter);
