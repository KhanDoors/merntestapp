# MERN Stack 2019

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

const PORT = 4000;

app.listen(PORT, () => {

console.log(`App Running on port ${PORT} ...`);

});

### Express Middleware Stack

1. Order matters they are executed in the order they are entered.
   app.use()
   express.json() - (Body Parser)

## MongoDB (https://cloud.mongodb.com)

## Mongoose (https://mongoosejs.com)

Connection:
get connection string from MongoDB site and set in the dotenv file.

const uri = process.env.MONGO_URI;

mongoose
.connect(uri, {
useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false
})
.then(() => console.log("Mongo Connected"))
.catch(err => console.log(err));
