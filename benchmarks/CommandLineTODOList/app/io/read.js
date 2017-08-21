"use strict"
const fs = require('fs')

module.exports = (fileName) =>
  new Promise((resolve, reject) => 
    fs.readFile(fileName, (err, data) =>
      err ? reject(err) : resolve(JSON.parse(data))))


// module.exports = fileName => new Promise((resolve, reject) => resolve(JSON.parse(fs.readFile(fileName))))





  // JSON.parse(require('fs').readFile(fileName))
  //   let json;
  // fs.readFile(fileName, (data) => {
  //   console.log(data);
  //   json = data;
  // });

  // exports.readFromFile = readFromFile