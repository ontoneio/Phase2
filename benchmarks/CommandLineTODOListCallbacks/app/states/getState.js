const path = require('path')
const pathToTask = path.resolve(__dirname, '../tasks.json')
const readJSON = require('../io/readJSON.js')

const getState = (callback) => {
  readJSON(pathToTask, (err, data) => callback(err, data))
} 

module.exports = getState;

