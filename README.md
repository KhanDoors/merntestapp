# Node.JS

Node.JS allows JavaScript to be written on the server as opposed to written in the browser.

Synchronous -> Blocking IO
Asynchronous -> Non-Blocking IO

Node.JS is a single thread synchronous process. Therefore we must use callbacks in order to achieve an asynchronous non-blocking process (not technically asynchronous but feels that way). This can lead to 'Callback Hell', identified by the flying 'V' formation, if not written properly. We use Promises and/or Async/Await to avoid 'Callback Hell'.

NPM Packages:
npm Init - to create package.json file.
npm install for regular dependencies (--save deprecated)
npm i --save-dev (-D) or for development dependencies
npm i nodemon --global (install globally, across your machine)

npm uninstall nodemon (deletes a package)

Requiring an NPM package in our app:
const slugify = require('slugify');
