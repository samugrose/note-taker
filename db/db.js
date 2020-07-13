const util = require("util");
const fs = require("fs");
const path = require("path");
const jsonDb = (path.resolve(__dirname, "./db.json"));
const readfileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);