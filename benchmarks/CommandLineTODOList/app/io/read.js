"use strict"
const fs = require('fs')


const readFromFile = (fileName) => {
  let jsObj;
  let promiseToReadFile  = new Promise((resolve, reject) => {
    let json = fs.readFile(fileName)
    resolve(json)
  })

  promiseToReadFile.then((json) => {
    jsObj = JSON.parse(json);
  })

  return json;
}




  // JSON.parse(require('fs').readFile(fileName))
  //   let json;
  // fs.readFile(fileName, (data) => {
  //   console.log(data);
  //   json = data;
  // });

  exports.readFromFile = readFromFile