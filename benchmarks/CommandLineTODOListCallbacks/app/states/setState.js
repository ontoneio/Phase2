const path = require('path')
const pathToTask = path.resolve(__dirname, '../tasks.json')
const writeJSON = require('../io/writeJSON.js')

const setState = (newState, callback) => {
  writeJSON(pathToTask, newState, (err) => {
    if(callback) callback(err)
  })
}

module.exports = setState;
