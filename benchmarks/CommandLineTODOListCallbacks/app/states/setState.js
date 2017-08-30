const path = require('path')
const pathToTask = path.resolve(__dirname, '../tasks.json')
const writeJSONFile = require('../io/writeJSONFile.js')

const setState = (newState, callback) => {
  writeJSONFile(pathToTask, newState, (err) => {
    if(callback) callback(err)
  })
}

module.exports = setState;
