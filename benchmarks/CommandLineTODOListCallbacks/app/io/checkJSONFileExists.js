const fs = require('fs')
const path = require('path')
const pathToTask = path.resolve(__dirname, '../tasks.json')

const checkJSONFileExists = (callback) => {
  fs.stat(pathToTask, (err, stat) => callback(err, stat))
  // fs.stat(pathToTask, callback) ?
}

module.exports = checkJSONFileExists 

