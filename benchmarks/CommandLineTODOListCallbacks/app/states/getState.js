const path = require('path')
const pathToTask = path.resolve(__dirname, '../tasks.json')
const readJSONFile = require('../io/readJSONFile.js')
const setState = require('./setState.js')
const checkJSONFileExists = require('../io/checkJSONFileExists.js')

let initialState = {
  "currId": 0,
  "incompleteTasks": [],
  "completeTasks": [],
  "deleteTasks": []
}

const getState = (callback) => {
  checkJSONFileExists((err, stat) => {
    if (err) { // DOESN'T EXIST
      setState(initialState, (err) => {
        if (err) throw err;
        readJSONFile(pathToTask, callback)
      })
    } else { //STATE EXISTS
      readJSONFile(pathToTask, callback)
    }
  })
}

module.exports = getState;