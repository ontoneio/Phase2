const path = require('path')
const pathToTask = path.resolve(__dirname, '../tasks.json')
const readJSONFile = require('../io/readJSONFile.js')
const setState = require('./setState.js')

const getState = (callback) => {
  readJSONFile(pathToTask, callback)
} 

module.exports = getState;

