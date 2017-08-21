"use strict"
const fs = require('fs')

module.exports = (fileName) =>
  new Promise((resolve, reject) => 
    fs.readFile(fileName, (err, data) =>
      err ? reject(err) : resolve(JSON.parse(data))))